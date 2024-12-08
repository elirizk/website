import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BaztoWCL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Last week, I had the honor to attend an Enrichment Seminar hosted by The Fulbright Program entitled “From Then to Now: Exploring the Legacy of the Civil Rights Movement” in Atlanta, Georgia. I was able to attend talks by experts and community representatives in Atlanta and learn how they approach innovative policy, education, and economic initiatives to address the legacy of racism and discrimination. I also enjoyed a guided tour of Sweet Auburn (Martin Luther King Jr’s neighborhood in Atlanta’s Old Fourth Ward), visited the National Center for Civil and Human Rights, and even removed invasive plant species with the help of Trees Atlanta. I am glad to have learnt so much during this event and to have met many fellow Fulbright scholars. I am also proud to have represented my country Lebanon and my university University of Michigan-Dearborn at the conference.\nA special thanks goes to the IIE and US Department of State staff for their help throughout the seminar.</p>\n<p><img src=\"/src/assets/blog/img4-1.jpg\" alt=\"Photo at seminar\"></p>";

				const frontmatter = {"title":"Fulbright Enrichment Seminar - Atlanta, GA","description":"","pubDate":"Sep 21, 2023","heroImage":"src/assets/blog/img4.jpg","tags":["Fulbright","Scholarship","Workshop","Civil Rights"]};
				const file = "/Users/elirizk/Desktop/Personal Website/public_site/src/content/blog/post4.md";
				const url = undefined;
				function rawContent() {
					return "Last week, I had the honor to attend an Enrichment Seminar hosted by The Fulbright Program entitled “From Then to Now: Exploring the Legacy of the Civil Rights Movement” in Atlanta, Georgia. I was able to attend talks by experts and community representatives in Atlanta and learn how they approach innovative policy, education, and economic initiatives to address the legacy of racism and discrimination. I also enjoyed a guided tour of Sweet Auburn (Martin Luther King Jr's neighborhood in Atlanta's Old Fourth Ward), visited the National Center for Civil and Human Rights, and even removed invasive plant species with the help of Trees Atlanta. I am glad to have learnt so much during this event and to have met many fellow Fulbright scholars. I am also proud to have represented my country Lebanon and my university University of Michigan-Dearborn at the conference.\nA special thanks goes to the IIE and US Department of State staff for their help throughout the seminar.\n\n![Photo at seminar](/src/assets/blog/img4-1.jpg)";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
