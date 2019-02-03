import { Layout } from "antd";
import App, { Container } from "next/app";
import React from "react";
import withApollo from "../lib/withApollo";
import {ApolloProvider} from "react-apollo";
import withNProgress from "next-nprogress";
import convertDataURIToBinary from "../lib/base64";
const { Footer } = Layout;

class MyApp extends App{
	static async getInitialProps({Component, router, ctx}) {
		let pageProps = {};
		if(Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		return { pageProps }
	}

	componentDidMount() {
		if ("serviceWorker" in navigator && "PushManager" in window) {
			navigator.serviceWorker.register("/sw.js")
					.then(swReg=> {
						console.log("SW Registered ", swReg);
						swReg.pushManager.getSubscription()
								.then(subscription => {
									if (subscription === null) {
										Notification.requestPermission().then(permission => {
											if (permission === "granted") {
												swReg.pushManager
														.subscribe({
															userVisibleOnly: true,
															applicationServerKey: convertDataURIToBinary(
																	"test"
															)
														})
														.then(pushSubscriptionObject => {
															console.log(pushSubscriptionObject);
														});
											}
										})
									} else {
										console.log(subscription);
									}
								})
					})
					.catch(error=>console.log("Can't register SW: ", error))
		}
	}

	render(){
		const { Component, pageProps, apollo } = this.props;
		return(
				<ApolloProvider client={apollo}>
					<Container>
						<Layout>
							<Component {...pageProps} />
							<Footer>This is important</Footer>
						</Layout>
					</Container>
				</ApolloProvider>
		)
	}
};

export default withNProgress()(withApollo(MyApp))