import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document{
	render() {
		return (
				<html>
					<Head>
						<title>Nomad Store</title>
						<meta name="author" content={"Evan Jin"} />
						<link href="/static/style.css" rel={"stylesheet"} />
					</Head>
					<body>
						<Main />
						<NextScript />
					</body>
				</html>
		)
	}
}