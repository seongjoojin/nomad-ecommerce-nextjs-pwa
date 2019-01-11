import Head from "next/head";
import PostLink from "../components/PostLink"


export default () => (
		<div>
			<Head>
				<title>Home | nomad store</title>
			</Head>
			<h1>Movies:</h1>
			<ul>
				<li>
					<PostLink title={"Very Important"} id={0}/>
				</li>
				<li>
					<PostLink title={"Super old"} id={1}/>
				</li>
			</ul>
		</div>
);