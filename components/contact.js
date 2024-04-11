import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Contact() {
	const [emailid, setemailid] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [modelOpen, setModelOpen] = useState(false);
	const [modelMessage, setModelMessage] = useState("");
	const [modelHeading, setModelHeading] = useState("");
	const [loading, setLoading] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("email", emailid);
		formData.append("subject", subject);
		formData.append("message", message);
		const body = document.body;
		setLoading(true);
		fetch("https://formspree.io/f/mkndqkjp", {
			method: "POST",
			body: formData,
			headers: {
				Accept: "application/json",
			},
		}).then((response) => {
			if (response.ok) {
				setLoading(false);
				setModelOpen(true);
				setModelMessage(
					"Your Message was successfully sent!.We will get back to you soon.Thank you!"
				);
				setModelHeading("Success");
				body.classList.add("overflow-hidden");
			} else {
				setModelOpen(true);
				setModelMessage("Message not sent.Please try again later.");
				setModelHeading("Success");
				body.classList.remove("overflow-hidden");
			}
		});
	};
	const [ref, inView, entry] = useInView({});
	return (
		<div
			ref={ref}
			id={"contact"}
			className={`relative`}
		>
			<div
				className={`transition ease-out absolute duration-500 w-full h-full ${
					modelOpen ? "block z-[10000] " : "hidden "
				}`}
			>
				<div className="overlay flex flex-col justify-center items-center w-[100%] h-[100%]">
					<div class="  absolute  h-96 w-96 z-[1000] ">
						<div class="relative p-4 w-full max-w-lg h-full md:h-auto">
							<div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
								<div class="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
									<h3 class="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
										{modelHeading}
									</h3>
									<p>{modelMessage}</p>
								</div>
								<div class="justify-between items-center pt-0 space-y-4 sm:flex sm:space-y-0">
									<div class="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
										<button
											onClick={() => {
												const body = document.body;
												setModelOpen(false);
												setMessage("");
												setemailid("");
												setSubject("");
												setLoading(false);
												body.classList.remove("overflow-hidden");
											}}
											type="button"
											class="py-2 px-4 w-full text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
										>
											Okay
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className={`bg-white dark:bg-black `}>
				<div className={`py-8 lg:py-16 px-4 mx-auto max-w-screen-md`}>
					<div
						className={`mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white ${
							inView ? "slide-in animate-1 opacity-1" : "opacity-0"
						} `}
					>
						Have an Idea ? Let&apos;s Talk about it!
					</div>

					<form
						onSubmit={handleSubmit}
						className={`space-y-8`}
					>
						<div
							className={`${
								inView ? "slide-in animate-2 opacity-1" : "opacity-0"
							} `}
						>
							<label
								htmlFor="email"
								className={`block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300`}
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								value={emailid}
								onChange={(e) => setemailid(e.target.value)}
								className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#454545] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light`}
								placeholder="name@domain.com"
								required
							/>
						</div>
						<div
							className={`${
								inView ? "slide-in animate-3 opacity-1" : "opacity-0"
							} `}
						>
							<label
								htmlFor="subject"
								className={`block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300`}
							>
								Subject
							</label>
							<input
								type="text"
								id="subject"
								value={subject}
								onChange={(e) => setSubject(e.target.value)}
								className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-[#454545] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light`}
								placeholder="Subject..."
								required
							/>
						</div>
						<div
							className={`${
								inView ? "slide-in animate-4 opacity-1" : "opacity-0"
							} `}
						>
							<label
								htmlFor="message"
								className={`block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400`}
							>
								Explain your idea
							</label>
							<textarea
								id="message"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								rows="6"
								className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-[#454545] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
								placeholder="Explain your idea here..."
							></textarea>
						</div>
						<button
							className={`${
								inView ? "slide-in animate-5 opacity-1" : "opacity-0"
							} py-3 px-5  flex justify-center items-center  text-md font-medium text-center text-white rounded-lg h-14 bg-gray-800 sm:w-44 hover:bg-gray-600 transition duration-300 ease-in-out focus:ring-4 focus:outline-none focus:ring-primary-300`}
						>
							{loading ? (
								<div role="status">
									<svg
										aria-hidden="true"
										className={`w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600`}
										viewBox="0 0 100 101"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
											fill="currentColor"
										/>
										<path
											d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
											fill="currentFill"
										/>
									</svg>
									<span className={`sr-only`}>Loading...</span>
								</div>
							) : (
								"Send Message"
							)}
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}
