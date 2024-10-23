import blog, { h } from "blog"; // { ga, redirects }
// import { unocss_opts } from "./unocss.ts";

blog({
	author: "Anurag Poolakkal",
	title: "Anurag Poolakkal",
	description: "Observations and Understandings",
	// avatar: "files/circle.svg",
	// avatarClass: "rounded-full",
	// showHeaderOnPostPage: true,
	links: [
		{ title: "Email", url: "mailto:anuragrajanp@gmail.com" },
		{ title: "GitHub", url: "https://github.com/anuragpoolakkal" },
	],
	lang: "en",
	// localised format based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
	dateFormat: (date: number | Intl.Formattable | undefined) =>
		new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date),
	// middlewares: [
	// 	// ga("UA-XXXXXXXX-X"),
	// 	redirects({
	// 		// "/foo": "/my_post",
	// 		// you can skip leading slashes too
	// 		hello_world: "hello_world",
	// 	}),
	// ],
	// unocss: unocss_opts, // check https://github.com/unocss/unocss
	favicon: "posts/files/commons/circle.png",
	footer: <footer></footer>,
});
