import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BaztoWCL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>I’m thrilled to have attended a guest lecture pertaining to “Causal Inference for Robust, Reliable, and Responsible NLP” at the Toyota Technological Institute at Chicago in the University of Chicago. The insights shared by Zhijing Jin resonated deeply with my own thesis research in machine learning trustworthiness. Just as Zhijing explores causal frameworks for enhancing NLP models’ reliability and fairness, my work delves into developing a comprehensive framework for achieving machine learning trustworthiness, with a focus on privacy, robustness, fairness, and accuracy. Her emphasis on socially responsible NLP aligns perfectly with my objective of ensuring the reliability of models for real-world applications. Inspired to incorporate these methodologies and insights into my own research journey!</p>";

				const frontmatter = {"title":"Machine Learning Workshop - Chicago, IL","description":"","pubDate":"Mar 11, 2024","heroImage":"src/assets/blog/img9.jpg","tags":["Machine Learning","Research","Workshop"]};
				const file = "/Users/elirizk/Desktop/Personal Website/public_site/src/content/blog/post9.md";
				const url = undefined;
				function rawContent() {
					return "I'm thrilled to have attended a guest lecture pertaining to \"Causal Inference for Robust, Reliable, and Responsible NLP\" at the Toyota Technological Institute at Chicago in the University of Chicago. The insights shared by Zhijing Jin resonated deeply with my own thesis research in machine learning trustworthiness. Just as Zhijing explores causal frameworks for enhancing NLP models' reliability and fairness, my work delves into developing a comprehensive framework for achieving machine learning trustworthiness, with a focus on privacy, robustness, fairness, and accuracy. Her emphasis on socially responsible NLP aligns perfectly with my objective of ensuring the reliability of models for real-world applications. Inspired to incorporate these methodologies and insights into my own research journey!";
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
