import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document{
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps}
	}
	render() {
		return (
				<html>
					<Head>
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