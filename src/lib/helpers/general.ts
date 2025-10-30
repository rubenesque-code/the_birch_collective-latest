function emailToEmailHref(email: string, subject: string = 'Enquiry') {
	return `mailto:${email}?subject=${subject}`;
}

function strToLowercaseHyphenated(str: string) {
	return str
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w+-]+/g, '');
}

function strHyphenatedToSpaced(str: string) {
	return str.replace(/-/g, ' ');
}

export { emailToEmailHref, strToLowercaseHyphenated, strHyphenatedToSpaced };
