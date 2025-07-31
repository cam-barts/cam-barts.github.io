import { PageLayout, SharedLayout } from "./quartz/cfg";
import * as Component from "./quartz/components";

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
	head: Component.Head(),
	header: [],
	afterBody: [
		Component.Comments({
			provider: "giscus",
			options: {
				// from data-repo
				repo: "cam-barts/cam-barts.github.io",
				// from data-repo-id
				repoId: "R_kgDOPVsFCg",
				// from data-category
				category: "Announcements",
				// from data-category-id
				categoryId: "DIC_kwDOPVsFCs4Ctm2K",
				// from data-lang
				lang: "en",
			},
		}),
	],
	footer: Component.Footer({
		links: {
			GitHub: "https://github.com/cam-barts/cam-barts.github.io",
		},
	}),
};

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
	beforeBody: [
		Component.ConditionalRender({
			component: Component.Breadcrumbs(),
			condition: (page) => page.fileData.slug !== "index",
		}),
		Component.ArticleTitle(),
		Component.ContentMeta(),
		Component.TagList(),
	],
	left: [
		Component.PageTitle(),
		Component.MobileOnly(Component.Spacer()),
		Component.Flex({
			components: [
				{
					Component: Component.Search(),
					grow: true,
				},
				{ Component: Component.Darkmode() },
			],
		}),
		Component.Explorer(),
	],
	right: [
		Component.Graph(),
		Component.DesktopOnly(Component.TableOfContents()),
		Component.Backlinks(),
	],
};

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
	beforeBody: [
		Component.Breadcrumbs(),
		Component.ArticleTitle(),
		Component.ContentMeta(),
	],
	left: [
		Component.PageTitle(),
		Component.MobileOnly(Component.Spacer()),
		Component.Flex({
			components: [
				{
					Component: Component.Search(),
					grow: true,
				},
				{ Component: Component.Darkmode() },
			],
		}),
		Component.Explorer(),
	],
	right: [],
};
