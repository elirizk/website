import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BaztoWCL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>I am glad to share that I have successfully defended my thesis entitled “Towards Holistic Assessment of Machine Learning Trustworthiness.” For the past year, I have been working hard on developing a unified framework to evaluate machine learning models across different dimensions, namely utility, privacy, robustness and fairness. Throughout my research, I had to develop custom training algorithms, model architectures and evaluation metrics. Doing independent research has proven to be a difficult yet rewarding journey, where I was constantly reading state of the art research, learning new concepts and applying novel techniques. I am looking forward to having my work published on the Deep Blue archive of the University of Michigan.</p>\n<p>I would like to acknowledge the The Fulbright Program for sponsoring my graduate education and stay here in the United States. I would also like to acknowledge my advisor Birhanu Eshete for providing me with valuable feedback throughout the process and the computing resources needed to run my experiments. Finally, a special thanks goes to Di M., Srijita Das and Ang Li for serving as committee members for my defense.</p>\n<p>Check my published thesis at <a href=\"https://dx.doi.org/10.7302/22653\">https://dx.doi.org/10.7302/22653</a>.</p>\n<p>Go Blue!</p>";

				const frontmatter = {"title":"Thesis Defense","description":"","pubDate":"Apr 25, 2024","heroImage":"src/assets/blog/img10.jpg","tags":["Machine Learning","Thesis","Research","Graduate Studies"]};
				const file = "/Users/elirizk/Desktop/Personal Website/public_site/src/content/blog/post10.md";
				const url = undefined;
				function rawContent() {
					return "\nI am glad to share that I have successfully defended my thesis entitled \"Towards Holistic Assessment of Machine Learning Trustworthiness.\" For the past year, I have been working hard on developing a unified framework to evaluate machine learning models across different dimensions, namely utility, privacy, robustness and fairness. Throughout my research, I had to develop custom training algorithms, model architectures and evaluation metrics. Doing independent research has proven to be a difficult yet rewarding journey, where I was constantly reading state of the art research, learning new concepts and applying novel techniques. I am looking forward to having my work published on the Deep Blue archive of the University of Michigan.\n\nI would like to acknowledge the The Fulbright Program for sponsoring my graduate education and stay here in the United States. I would also like to acknowledge my advisor Birhanu Eshete for providing me with valuable feedback throughout the process and the computing resources needed to run my experiments. Finally, a special thanks goes to Di M., Srijita Das and Ang Li for serving as committee members for my defense.\n\nCheck my published thesis at https://dx.doi.org/10.7302/22653.\n\nGo Blue!";
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
