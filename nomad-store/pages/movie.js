import Head from "next/head";
import { withRouter } from "next/router";

const Movie = props => (
		<div>
			<Head>
				<title>{props.router.query.title} | Nomad Store</title>
			</Head>
			{JSON.stringify(props)}
			<h1>{props.title}</h1>
			<p>lalala</p>
		</div>
);

Movie.getInitialProps = async()=>{
	// call the api
	// parse the result
	// return result
	return {movie: "lololo"}
};

 export default withRouter(Movie);