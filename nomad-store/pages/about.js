import Head from "next/head";
import withLayout from "../lib/withLayout";

const About = () => (
		<div>
			<Head>
				<title>About | nomad store</title>
			</Head>
			<h1>About Page</h1>
			<p>lorem ipsum</p>
		</div>
);

export default withLayout(About)