import blog, { ga, redirects } from "https://deno.land/x/blog/blog.tsx";
import { unocss_opts } from "./unocss.ts";

blog({
	author: "Anurag",
	title: "Anurag",
	// description: "The blog description.",
	avatar: "files/circle.svg",
	avatarClass: "rounded-full",
	showHeaderOnPostPage: false,
	links: [
		{ title: "Email", url: "mailto:anuragrajanp@gmail.com" },
		{ title: "GitHub", url: "https://github.com/anuragpoolakkal" },
		// { title: "Twitter", url: "https://twitter.com/denobot" },
	],
	lang: "en",
	// localised format based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
	dateFormat: (date) => new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date),
	middlewares: [
		ga("UA-XXXXXXXX-X"),
		redirects({
			"/foo": "/my_post",
			// you can skip leading slashes too
			bar: "my_post2",
		}),
	],
	unocss: unocss_opts, // check https://github.com/unocss/unocss
	favicon: "files/circle.svg",
});
