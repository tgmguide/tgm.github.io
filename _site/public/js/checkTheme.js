const theme = localStorage.getItem('theme');
	if (theme === "light") {
		document.documentElement.setAttribute('data-theme', 'light');
	}