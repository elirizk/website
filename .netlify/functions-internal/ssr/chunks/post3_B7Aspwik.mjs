import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BaztoWCL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>A few months ago in June 2022, I graduated with high distinction from the American University of Beirut with a Bachelor of Science in Computer Science and a minor in Mathematics. Today, I am pleased to announce that I have been granted the Fulbright Scholarship from the US Department of State to pursue my Master’s in Computer Science at the University of Michigan - Dearborn. While the Fulbright selection process was very competitive, I was fortunate enough to have been selected among the 9 Fulbright grantees from over hundreds of applicants to represent my home country Lebanon in the United States.</p>\n<p>I believe that my undergraduate education at the American University of Beirut has equipped me with all the necessary tools to pursue graduate studies in the US. It gave me the freedom to explore a vast array of topics and fields through a flexible course curriculum, which helped me become a well-rounded scholar.</p>\n<p>I am extremely grateful for the constant support of my professors, advisors, and family ﹘ without whom I wouldn’t have made it this far.</p>\n<p><img src=\"/src/assets/blog/img3-1.jpg\" alt=\"Graduation Diploma\"></p>";

				const frontmatter = {"title":"American University of Beirut Graduation","description":"Undergraduate Graduation","pubDate":"June 11, 2022","heroImage":"src/assets/blog/img3.jpg","tags":["Graduation","Undergraduate Studies"]};
				const file = "/Users/elirizk/Desktop/Personal Website/public_site/src/content/blog/post3.md";
				const url = undefined;
				function rawContent() {
					return "A few months ago in June 2022, I graduated with high distinction from the American University of Beirut with a Bachelor of Science in Computer Science and a minor in Mathematics. Today, I am pleased to announce that I have been granted the Fulbright Scholarship from the US Department of State to pursue my Master’s in Computer Science at the University of Michigan - Dearborn. While the Fulbright selection process was very competitive, I was fortunate enough to have been selected among the 9 Fulbright grantees from over hundreds of applicants to represent my home country Lebanon in the United States.\n\nI believe that my undergraduate education at the American University of Beirut has equipped me with all the necessary tools to pursue graduate studies in the US. It gave me the freedom to explore a vast array of topics and fields through a flexible course curriculum, which helped me become a well-rounded scholar.\n\nI am extremely grateful for the constant support of my professors, advisors, and family ﹘ without whom I wouldn’t have made it this far.\n\n![Graduation Diploma](/src/assets/blog/img3-1.jpg)";
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
