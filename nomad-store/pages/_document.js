import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document{
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps}
	}
	render() {
		return (
				<html lang="en">
					<Head>
						<meta name="author" content={"Evan Jin"} />
						<link href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.8.1/antd.min.css" rel="stylesheet" />
						<meta name="viewport" content="width=device-width, initial-scale=1" />
						<meta name="description" content="Nomad Store, buy all your nomad swag" />
						<meta name="theme-color" content="black" />
						<style>
							{`
								body {
									background-color:#eff2f5!important
								}
							`}
						</style>
					</Head>
					<body>
						<Main />
						<NextScript />
					</body>
				</html>
		)
	}
}