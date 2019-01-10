import Link from "next/link";

const headerStyles = {
	backgroundColor:'red'
};

export default () => (
		<header style={headerStyles}>
			<nav>
				<ul>
					<li>
						<Link href={"/"}>
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href={"/about"}>
							<a>About</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
);