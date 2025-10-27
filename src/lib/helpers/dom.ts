const updateDocumentScroll = (value: 'disable' | 'auto') => {
	if (value === 'disable') {
		document.body.style.overflow = 'hidden';
		document.documentElement.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'auto';
		document.documentElement.style.overflow = 'auto';
	}
};

export { updateDocumentScroll };
