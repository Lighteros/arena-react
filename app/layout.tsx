import type { PropsWithChildren } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/Footer";
import AppNavbar from "./components/NavBar";
import { Providers } from "./providers";

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<title>The Arena 🏆</title>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="description"
					content="The hub for competitive communities. 
					🏆 Wagers • Leagues • Tournaments 🏆
					Step into The Arena for trustless, peer-to-peer gaming."
				/>
				<meta
					name="keywords"
					content="wagers, leagues, tournaments, dao, arena dao, arena, gaming"
				/>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<meta property="og:image" content="/logo.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="1081" />
				<meta property="og:image:height" content="1081" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
				<meta name="theme-color" content="#FF8000" />
			</head>
			<body className="min-h-screen font-roboto">
				<Providers>
					<AppNavbar />
					<div
						className="container mx-auto max-h-fit min-h-full"
						style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
					>
						<ErrorBoundary>{children}</ErrorBoundary>
					</div>
					<Footer />
				</Providers>
			</body>
		</html>
	);
};

export default Layout;
