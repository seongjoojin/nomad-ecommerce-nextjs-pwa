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
						<link href="//cdnjs.cloudflare.com/ajax/libs/antd/3.8.1/antd.min.css" rel="stylesheet" />
					</Head>
					<body>
						<Main />
						<NextScript />
					</body>
				</html>
		)
	}
}