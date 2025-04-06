import * as React from "react";

export function useDarkMode() {
	const [isDarkMode, setIsDarkMode] = React.useState<boolean | undefined>(
		false
	);

	React.useEffect(() => {
		const mql = window.matchMedia(
			'(prefers-color-scheme: dark)'
		);
		setIsDarkMode(mql.matches);
		const onChange = (e: MediaQueryListEvent) => {
			setIsDarkMode(e.matches);
		};
		mql.addEventListener("change", onChange);
		return () => mql.removeEventListener("change", onChange);
	}, []);

	return !!isDarkMode;
}
