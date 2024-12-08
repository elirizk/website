import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BaztoWCL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>I am glad to have attended the Fulbright Reentry event hosted by Amideast in Washington, DC.</p>\n<p>It was an enriching three-day journey filled with insightful sessions and engaging activities. From interactive lectures to community service and cultural outings, every moment was designed to help us transition smoothly from our Fulbright grant to the next phase of our academic and professional journey.</p>\n<p>I’m grateful for the opportunity to connect with fellow Fulbright alumni and tap into valuable resources offered by the network. The event served as the perfect culmination of my Fulbright experience, providing me with the tools and guidance needed to chart a successful path forward.</p>\n<p>A special thanks to the U.S. Department of State’s Bureau of Educational and Cultural Affairs for their support in making this event possible. I would also like to thank Amideast for organizing such a well-rounded and impactful workshop.</p>\n<p>I’m looking forward to applying the insights gained from this event.</p>";

				const frontmatter = {"title":"Fulbright Reentry - Washington DC","description":"","pubDate":"Feb 28, 2024","heroImage":"src/assets/blog/img7.jpg","tags":["Fulbright","Scholarship","Workshop"]};
				const file = "/Users/elirizk/Desktop/Personal Website/public_site/src/content/blog/post7.md";
				const url = undefined;
				function rawContent() {
					return "I am glad to have attended the Fulbright Reentry event hosted by Amideast in Washington, DC.\n\nIt was an enriching three-day journey filled with insightful sessions and engaging activities. From interactive lectures to community service and cultural outings, every moment was designed to help us transition smoothly from our Fulbright grant to the next phase of our academic and professional journey.\n\nI'm grateful for the opportunity to connect with fellow Fulbright alumni and tap into valuable resources offered by the network. The event served as the perfect culmination of my Fulbright experience, providing me with the tools and guidance needed to chart a successful path forward.\n\nA special thanks to the U.S. Department of State's Bureau of Educational and Cultural Affairs for their support in making this event possible. I would also like to thank Amideast for organizing such a well-rounded and impactful workshop.\n\nI’m looking forward to applying the insights gained from this event.";
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
