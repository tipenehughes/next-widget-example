import { useEffect } from "react";
import Script from "next/script";

export default function Hello() {
	// window.zE method to open widget
	useEffect(() => {
		window.zE("messenger", "open");
	}, []);
	return (
		<>
			<h1>Messenger Widget Test</h1>
            <p>Executes script using the beforeInteractive strategy. This results in the messenger widget loading before the web widget script set in document.js</p>
			<Script
				id="ze-snippet"
				src="https://static.zdassets.com/ekr/snippet.js?key={your_messaging_key}"
                strategy="beforeInteractive"
			/>
		</>
	);
}
