import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Main />
				<NextScript />
				<Script
					id="ze-snippet"
					src="https://static.zdassets.com/ekr/snippet.js?key={your_widget_key}"
					strategy="afterInteractive"
				/>
			</body>
		</Html>
	);
}
