export function renderUnavailablePage(): string {
	return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Page unavailable</title>
	</head>
	<body>
		<main>
			<h1>This page is temporarily unavailable</h1>
			<p>Please refresh the page or return to the homepage.</p>
			<a href="/">Return home</a>
		</main>
	</body>
</html>`;
}
