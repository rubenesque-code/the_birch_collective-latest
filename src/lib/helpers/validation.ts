const isValidEmail = (email: string) => {
	return Boolean(
		String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)
	);
};

function isValidUkPhoneNumber(phone: string): boolean {
	const cleaned = phone.trim();

	const pattern =
		/^(?:\+44\s?7\d{3}|\(?07\d{3}\)?)[\s.-]?\d{3}[\s.-]?\d{3,4}$|^(?:\+44\s?1\d{3}|\(?01\d{3}\)?)\s?\d{3}\s?\d{3,4}$/;

	return Boolean(pattern.test(cleaned));
}

export { isValidEmail, isValidUkPhoneNumber };
