import { createContext, useEffect, useState } from "react";
import React from "react";
import { BaseUrlContext } from "./../context/BaseUrlContext";
import axios from "axios";
export const UserInfoContext = createContext();
import { addMinutes, format } from "date-fns";

function get_previous_monday_date() {
	// this gives you the date of the previous monday
	var d = new Date();
	var day = d.getDay();
	var diff = d.getDate() - day + (day == 0 ? -6 : 1);
	return new Date(d.setDate(diff));
}

function get_current_week_dates() {
	var curr = get_previous_monday_date(); // get current date
	var week = [];
	for (var i = 0; i < 6; i++) {
		week.push(new Date(curr));
		curr.setDate(curr.getDate() + 1);
	}
	console.log(week);
	return week;
}

const this_week_start = get_current_week_dates()[0];
const this_week_end = get_current_week_dates()[5];

export const UserInfoContextProvider = ({ children }) => {
	// important variables
	const base_url = React.useContext(BaseUrlContext).baseUrl;
	const [userToken, setUserToken] = useState(null);
	const [userDetails, setUserDetails] = useState(null);
	const [allUsers, setAllUsers] = useState([]);

	// non important variables
	const [currentAppointment, setCurrentAppointment] = useState(null);
	const [currentWeek, setCurrentWeek] = useState({
		start_date: this_week_start,
		end_date: this_week_end,
	});
	const [userSchedule, setUserSchedule] = useState({
		taken_appointments: [],
		given_appointments: [],
	});
	const [notifsExist, setNotifsExist] = useState(false);

	function calculate_time_slots(
		single_appointment_start_time = 9,
		single_appointment_end_time = 17,
		single_appointment_duration = 30,
		break_between_appointments = 5
	) {
		let startTime = new Date().setHours(single_appointment_start_time, 0, 0);
		let endTime = new Date().setHours(single_appointment_end_time, 0, 0);

		const time_slots = [];

		while (startTime < endTime) {
			let appointmentEnd = addMinutes(startTime, single_appointment_duration);
			if (appointmentEnd > endTime) {
				break;
			}

			time_slots.push(format(startTime, "h:mm a") + " - " + format(appointmentEnd, "h:mm a"));

			startTime = addMinutes(appointmentEnd, break_between_appointments);
		}

		return time_slots;
	}

	function calculate_json_time_slots(
		single_appointment_start_time = 9,
		single_appointment_end_time = 17,
		single_appointment_duration = 30,
		break_between_appointments = 5
	) {
		let startTime = new Date().setHours(single_appointment_start_time, 0, 0);
		let endTime = new Date().setHours(single_appointment_end_time, 0, 0);

		const time_slots = [];

		while (startTime < endTime) {
			let appointmentEnd = addMinutes(startTime, single_appointment_duration);
			if (appointmentEnd > endTime) {
				break;
			}

			time_slots.push({
				start_time: format(startTime, "h:mm a"),
				end_time: format(appointmentEnd, "h:mm a"),
			});

			startTime = addMinutes(appointmentEnd, break_between_appointments);
		}
		console.log("json time slots bro", time_slots);
		return time_slots;
	}

	function calculate_notifs_exist() {
		const given_appointments = userSchedule.given_appointments;
		const notifs_exist = given_appointments.some(
			(appointment) => appointment.status === "pending" || appointment.status === "cancelled"
		);
		setNotifsExist(notifs_exist);
	}

	function refreshUserScheduleForDisplayedWeek() {
		// this function will refresh the userSchedule and allUsers
		// it will be called after every change in the userSchedule
		// it will be called after every change in the allUsers
		axios
			.post(
				`${base_url}/get-user-appointment`,
				{
					date: {
						start_date: currentWeek.start_date,
						end_date: currentWeek.end_date,
					},
					firebase_id: userDetails.firebase_id,
				},
				{
					headers: {
						Authorization: `Bearer ${userToken}`,
					},
				}
			)
			.then((response) => {
				let userSchedule = {
					taken_appointments: response.data.taken_appointments,
					given_appointments: response.data.given_appointments,
				};
				setUserSchedule(userSchedule);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function refreshProfile() {
		axios
			.get(`${base_url}/get-profile`, {
				headers: {
					Authorization: `Bearer ${userToken}`,
				},
			})
			.then((response) => {
				setUserDetails(response.data.profile_data);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function updateUserSchedule(start_date, end_date, firebase_id) {
		// this function does the same thing as refresh user schedule for a given time and date, except it will add the taken and given appointments to the already existing userschedule taken and given appointments list.
		axios
			.post(
				`${base_url}/get-user-appointment`,
				{
					date: {
						start_date: start_date,
						end_date: end_date,
					},
					firebase_id: firebase_id,
				},
				{
					headers: {
						Authorization: `Bearer ${userToken}`,
					},
				}
			)
			.then((response) => {
				let userSchedule = {
					taken_appointments: [
						...userSchedule.taken_appointments,
						...response.data.taken_appointments,
					],
					given_appointments: [
						...userSchedule.given_appointments,
						...response.data.given_appointments,
					],
				};
				setUserSchedule(userSchedule);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function refreshNotifications() {
		// this function will call all the pending and cancelled notifications of the logged in user will be fetched and updated in the user schedule.
		axios
			.post(
				`${base_url}/get-notifications`, // return all cancelled
				// and pending appointments of the user from tken
				{},
				{
					headers: {
						Authorization: `Bearer ${userToken}`,
					},
				}
			)
			.then((response) => {
				let userSchedule = {
					taken_appointments: [
						...userSchedule.taken_appointments,
						...response.data.taken_appointments,
					],
					given_appointments: [
						...userSchedule.given_appointments,
						...response.data.given_appointments,
					],
				};
				setUserSchedule(userSchedule);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	useEffect(() => {
		if (userSchedule.given_appointments.length > 0) {
			calculate_notifs_exist();
		}
	}, [userSchedule, calculate_notifs_exist]);

	useEffect(() => {
		// if our states are null, we start looking in local storage
		// if local storage is null, we dont do anything, else we set the states to the local storage values
		// if our states are not null, we check if local storage is null, if it is, we set the local storage to the state values
		// else, we do nothing

		if (userToken === null) {
			const token = localStorage.getItem("userToken");
			if (token !== null) {
				setUserToken(token);
			}
		} else {
			localStorage.setItem("userToken", userToken);
		}

		if (userDetails === null) {
			const details = JSON.parse(localStorage.getItem("userDetails"));
			if (details !== null) {
				setUserDetails(details);
			}
		} else {
			localStorage.setItem("userDetails", JSON.stringify(userDetails));
		}

		if (allUsers.length === 0) {
			const users = JSON.parse(localStorage.getItem("allUsers"));
			if (users.length > 0) {
				setAllUsers(users);
			}
		} else {
			localStorage.setItem("allUsers", JSON.stringify(allUsers));
		}

		if (userSchedule.taken_appointments.length === 0 && userSchedule.given_appointments.length === 0) {
			const schedule = JSON.parse(localStorage.getItem("userSchedule"));
			if (schedule.taken_appointments.length > 0 && schedule.given_appointments.length > 0) {
				setUserSchedule(schedule);
			}
		} else {
			localStorage.setItem("userSchedule", JSON.stringify(userSchedule));
		}
	}, [userSchedule, allUsers, userToken, userDetails]);

	return (
		<UserInfoContext.Provider
			value={{
				userToken: userToken,
				setUserToken: setUserToken,
				currentAppointment: currentAppointment,
				setCurrentAppointment: setCurrentAppointment,
				userDetails: userDetails,
				setUserDetails: setUserDetails,
				userSchedule: userSchedule,
				setUserSchedule: setUserSchedule,
				allUsers: allUsers,
				setAllUsers: setAllUsers,
				notifsExist: notifsExist,
				setNotifsExist: setNotifsExist,
				refreshProfile: refreshProfile,
				refreshUserScheduleForDisplayedWeek: refreshUserScheduleForDisplayedWeek,
				updateUserSchedule: updateUserSchedule,
				currentWeek: currentWeek,
				setCurrentWeek: setCurrentWeek,
				refreshNotifications: refreshNotifications,
				calculate_json_time_slots: calculate_json_time_slots,
				calculate_time_slots: calculate_time_slots,
			}}
		>
			{children}
		</UserInfoContext.Provider>
	);
};
