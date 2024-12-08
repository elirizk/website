import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BaztoWCL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>I’m thrilled to share that I recently took part in my university’s 3-minute thesis presentations. In just under three minutes, I had the opportunity to present my Master’s thesis work to a panel of judges spanning various fields of study. Over the past year, I’ve been immersed in developing a robust framework aimed at ensuring trustworthiness in machine learning, focusing on key objectives such as privacy, robustness, fairness, and accuracy. Participating in this competition was an incredible experience, allowing me to succinctly convey the essence of my research approach and its impactful results.</p>";

				const frontmatter = {"title":"3min Thesis Competition","description":"","pubDate":"Mar 8, 2024","heroImage":"src/assets/blog/img8.jpg","tags":["Machine Learning","Thesis","Research","Graduate Studies"]};
				const file = "/Users/elirizk/Desktop/Personal Website/public_site/src/content/blog/post8.md";
				const url = undefined;
				function rawContent() {
					return "I'm thrilled to share that I recently took part in my university's 3-minute thesis presentations. In just under three minutes, I had the opportunity to present my Master’s thesis work to a panel of judges spanning various fields of study. Over the past year, I've been immersed in developing a robust framework aimed at ensuring trustworthiness in machine learning, focusing on key objectives such as privacy, robustness, fairness, and accuracy. Participating in this competition was an incredible experience, allowing me to succinctly convey the essence of my research approach and its impactful results.\n";
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
