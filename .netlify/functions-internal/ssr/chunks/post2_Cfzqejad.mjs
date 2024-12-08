import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BaztoWCL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>I am proud to have received the Mark Sawaya Excellence Award in Computer Science, as the undergraduate Computer Science student with the highest cumulative GPA. I would like to thank my professors who have always guided and helped me throughout my academic journey. I couldn’t have made it without their full support!</p>";

				const frontmatter = {"title":"Mark Sawaya Excellence Award Recipient","description":"Mark Sawaya Excellence Award Recipient","pubDate":"June 9, 2022","heroImage":"src/assets/blog/img2.jpg","tags":["Undergraduate Studies","Scholarship"]};
				const file = "/Users/elirizk/Desktop/Personal Website/public_site/src/content/blog/post2.md";
				const url = undefined;
				function rawContent() {
					return "I am proud to have received the Mark Sawaya Excellence Award in Computer Science, as the undergraduate Computer Science student with the highest cumulative GPA. I would like to thank my professors who have always guided and helped me throughout my academic journey. I couldn’t have made it without their full support!";
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
