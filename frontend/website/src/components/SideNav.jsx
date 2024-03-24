// React imports
import React, { useEffect } from "react";

// Context imports
import { UserInfoContext } from "../context/UserInfoContext";
import { BaseUrlContext } from "./../context/BaseUrlContext";

// Third-party library imports
import { IconCheck, IconX } from "@tabler/icons-react";
import basic_functions from "../utils/basic_functions";

import io from "socket.io-client";
import { toast } from "react-hot-toast";

// This is the drawer. It contains cart. This is present always, and is activated by javascript.

const SideNav = () => {
	// Importing the necessary contexts
	const {
		userSchedule,
		userDetails,
		allUsers,
		userToken,
		refreshLoggedInUserScheduleForDisplayedWeek,
	} = React.useContext(UserInfoContext);
	const { baseUrl, onlyBaseUrl } = React.useContext(BaseUrlContext);

	// State for storing notification appointments
	const [notifAppointments, setNotifAppointments] = React.useState([]);
	const [receivedSocketNotification, setReceivedSocketNotification] = React.useState(0);
	const [statusNotifications, setStatusNotifications] = React.useState([]);

	// Function to get notification appointments
	function get_notification_appointments() {
		const notifs = [];
		const status_notifs = [];
		const given_appointment = userSchedule.given_appointments.filter(
			(appointment) =>
				(appointment.status === "pending") | (appointment.status === "rejected")
		);

		const taken_appointments = userSchedule.taken_appointments.filter(
			(appointment) => appointment.status === "rejected"
		);

		notifs.push(...given_appointment);
		notifs.push(...taken_appointments);
		setNotifAppointments(notifs);
		console.log(notifs);

		// get status notifications
		const status_notif_given = userSchedule.given_appointments.filter(
			(appointment) => appointment.status === "confirmed"
		);

		const status_notif_taken = userSchedule.taken_appointments.filter(
			(appointment) => appointment.status === "confirmed"
		);

		status_notifs.push(...status_notif_given);
		status_notifs.push(...status_notif_taken);

		setStatusNotifications(status_notifs);

		console.log(status_notifs);
	}

	// useEffect hook to call get_notification_appointments when userSchedule changes
	useEffect(() => {
		get_notification_appointments();
	}, [userSchedule]);

	useEffect(() => {
		if (userDetails === null) {
			return;
		}
		const socket = io(onlyBaseUrl, {
			query: { userId: userDetails.firebase_id },
		});
		//h1gk4w07-3000.euw.devtunnels.ms/
		socket.on("connect", () => {
			console.log("Connected to server");

			// Send a message to the server
			socket.emit("message", "Hello, server!");
			// Send a message to the server
			socket.emit("register", userDetails.firebase_id);
		});

		socket.on("registered", (userId) => {
			console.log(`Registered with server as ${userId}`);
		});

		socket.on("message", (message) => {
			console.log(`Received: ${message}`);
		});

		socket.on("connect_error", (error) => {
			console.log(error);
		});

		socket.on("notification", () => {
			console.log("Received notification");
			// change the count of received notifications, so that when this changes, we can get the current user details from the server and then getnotifications.
			setReceivedSocketNotification((prev) => prev + 1);
		});
	}, [userDetails]);

	// useEffect hook to call get_notification_appointments when receivedSocketNotification changes
	useEffect(() => {
		if (receivedSocketNotification === 0) {
			return;
		}
		refreshLoggedInUserScheduleForDisplayedWeek();
		toast.success("You have unread Notifications! Please check them in the Notifications tab.");
		// open the notifications tab
		document.getElementById("notif-drawer").checked = true;
	}, [receivedSocketNotification]);

	return (
		<div>
			<div className="drawer drawer-end z-50 roboto-regular">
				<input id="notif-drawer" type="checkbox" className="drawer-toggle hidden" />
				<div className="drawer-side">
					<label
						htmlFor="notif-drawer"
						aria-label="close sidebar"
						className="drawer-overlay"
					></label>
					<div className="w-[23vw] min-h-full bg-gray-100 text-base-content drawer-content  border-black">
						<div className="bg-gray-200 m-4 rounded-lg outline-2 mr-6">
							<div className="w-full flex justify-between p-4">
								<div className="text-xl">Notifications</div>
								<IconX
									className="w-8 h-8 cursor-pointer"
									onClick={() => {
										document.getElementById("notif-drawer").checked = false;
									}}
								/>
							</div>
						</div>
						<div>
							{statusNotifications?.map((appointment, index) => {
								return (
									<div
										key={index}
										className="flex justify-center items-center gap-5 p-4 flex-col"
									>
										{appointment.status !== "read" ? (
											<div className="flex flex-col gap-2 bg-gray-300 p-2 rounded-lg w-full">
												<div className="flex flex-row-reverse justify-between px-4 py-4 bg-gray-100 rounded-lg m-2">
													{
														// if the profile_pic_url is not empty, display the image, else display the initials
														basic_functions.get_people_from_appointment(
															appointment,
															allUsers
														)?.scheduler?.profile_pic_url.length !==
														0 ? (
															<img
																src={
																	basic_functions.get_people_from_appointment(
																		appointment,
																		allUsers
																	)?.scheduler?.profile_pic_url
																}
																alt="scheduler_id"
																className="w-20 h-20 rounded-full object-cover outline outline-blue-700"
															/>
														) : (
															<div className="w-20 h-20 flex items-center justify-center text-2xl font-bold text-blue-800">
																{basic_functions
																	.get_people_from_appointment(
																		appointment,
																		allUsers
																	)
																	?.scheduler.full_name?.split(
																		" "
																	)
																	.map((name) => name[0])
																	.join("")}
															</div>
														)
													}
													<div>
														<div className="text-blue-900 text-lg pt-1">
															{
																basic_functions.get_people_from_appointment(
																	appointment,
																	allUsers
																)?.scheduler?.full_name
															}
														</div>
														<div className="text-blue-900 text-sm pt-1">
															+91{" "}
															{
																basic_functions.get_people_from_appointment(
																	appointment,
																	allUsers
																)?.scheduler?.phone_number
															}
														</div>
													</div>
												</div>
												<div className="p-2">
													Has requested an appointment with you.{" "}
													{appointment.status}
												</div>
												<div className="p-2 flex flex-col gap-2">
													<div className="text-lg">Agenda</div>
													<div>{appointment.title}</div>
													<div className="text-lg">Description</div>
													<div>{appointment.description}</div>
													<div className="text-lg">Asked at</div>
													<div>
														{appointment.creation_time} on{" "}
														{new Date(
															appointment.creation_date
														).toDateString()}
													</div>
													<div className="text-lg">
														Requested Your Time Slot at
													</div>
													<div>
														{appointment.appointment_time} on{" "}
														{new Date(
															appointment.appointment_date
														).toDateString()}
													</div>
												</div>
												<div className="flex w-full justify-between flex-row gap-4 p-2">
													<button
														className="btn bg-green-300 hover:bg-green-400 hover:scale-105 flex-1 text-lg font-normal"
														onClick={() => {
															basic_functions.change_status_without_mail(
																appointment,
																"read",
																baseUrl,
																userToken,
																refreshLoggedInUserScheduleForDisplayedWeek,
																allUsers,
																appointment.cancellation_message
															);
														}}
													>
														Mark as Read
														<IconCheck className="w-6 h-6" />
													</button>
												</div>
											</div>
										) : null}
									</div>
								);
							})}
						</div>
						<div>
							{notifAppointments?.map((appointment, index) => {
								return (
									<div
										key={index}
										className="flex justify-center items-center gap-5 p-4 flex-col"
									>
										{appointment.status === "pending" ? (
											<div className="flex flex-col gap-2 bg-gray-300 p-2 rounded-lg w-full">
												<div className="flex flex-row-reverse justify-between px-4 py-4 bg-gray-100 rounded-lg m-2">
													{
														// if the profile_pic_url is not empty, display the image, else display the initials
														basic_functions.get_people_from_appointment(
															appointment,
															allUsers
														)?.scheduler?.profile_pic_url.length !==
														0 ? (
															<img
																src={
																	basic_functions.get_people_from_appointment(
																		appointment,
																		allUsers
																	)?.scheduler?.profile_pic_url
																}
																alt="scheduler_id"
																className="w-20 h-20 rounded-full object-cover outline outline-blue-700"
															/>
														) : (
															<div className="w-20 h-20 flex items-center justify-center text-2xl font-bold text-blue-800">
																{basic_functions
																	.get_people_from_appointment(
																		appointment,
																		allUsers
																	)
																	?.scheduler.full_name?.split(
																		" "
																	)
																	.map((name) => name[0])
																	.join("")}
															</div>
														)
													}
													<div>
														<div className="text-blue-900 text-lg pt-1">
															{
																basic_functions.get_people_from_appointment(
																	appointment,
																	allUsers
																)?.scheduler?.full_name
															}
														</div>
														<div className="text-blue-900 text-sm pt-1">
															+91{" "}
															{
																basic_functions.get_people_from_appointment(
																	appointment,
																	allUsers
																)?.scheduler?.phone_number
															}
														</div>
													</div>
												</div>
												<div className="p-2">
													Has requested an appointment with you.
												</div>
												<div className="p-2 flex flex-col gap-2">
													<div className="text-lg">Agenda</div>
													<div>{appointment.title}</div>
													<div className="text-lg">Description</div>
													<div>{appointment.description}</div>
													<div className="text-lg">Asked at</div>
													<div>
														{appointment.creation_time} on{" "}
														{new Date(
															appointment.creation_date
														).toDateString()}
													</div>
													<div className="text-lg">
														Requested Your Time Slot at
													</div>
													<div>
														{appointment.appointment_time} on{" "}
														{new Date(
															appointment.appointment_date
														).toDateString()}
													</div>
												</div>
												<div className="flex w-full justify-between flex-row gap-4 p-2">
													<button
														className="btn bg-green-300 hover:bg-green-400 hover:scale-105 flex-1 text-lg"
														onClick={() => {
															basic_functions.change_status(
																appointment,
																"confirmed",
																baseUrl,
																userToken,
																refreshLoggedInUserScheduleForDisplayedWeek,
																allUsers,
																"Your appointment has been confirmed"
															);
														}}
													>
														<IconCheck className="w-6 h-6" />
													</button>
													<button
														className="btn bg-red-300 hover:bg-red-400 hover:scale-105 flex-1 text-lg"
														onClick={() => {
															basic_functions.change_status(
																appointment,
																"cancelled",
																baseUrl,
																userToken,
																refreshLoggedInUserScheduleForDisplayedWeek,
																allUsers,
																"Your appointment has been rejected"
															);
														}}
													>
														<IconX className="w-6 h-6" />
													</button>
												</div>
											</div>
										) : null}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideNav;
