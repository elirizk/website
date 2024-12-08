import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BaztoWCL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>I had the utmost pleasure to be the primary instructor of computer literacy workshops hosted at the American University of Beirut for students from underserved all-female high schools in Beirut. Through the weekly sessions held from January until May, I trained the students on Python programming, general computer literacy, and the fundamentals of web development. I was particularly proud to witness the impressive progress they made in their problem solving and programming skills.</p>\n<p>This volunteering experience taught me how to effectively communicate abstract and complex topics in my discipline in an easy-to-understand manner. It also helped me realize that increasing the accessibility of computer literacy and programming skills is essential for underserved communities as it will give them the ability and confidence to use digital technology for their future learning and career objectives.</p>\n<p>While the early pioneers in computer science were mostly women (Grace Hopper as the inventor of the compiler, Margaret Hamilton as the first software engineer, etc…), women have been greatly underrepresented in the field since the 1990s. This highlights the importance of this much-needed initiative by SAIL for Change-AUB as a step closer towards gender equality and digital accessibility in Lebanon.</p>\n<p>A special thanks to Celine Al Nemer, Dr. Wassim El-Hajj, and Joseph Chaaban for their help and support.</p>";

				const frontmatter = {"title":"Volunteering as a Computer Science Instructor","description":"Volunteering as a Computer Science Instructor","pubDate":"May 29, 2022","heroImage":"src/assets/blog/img1.jpg","tags":["Computer Literacy","Volunteering"]};
				const file = "/Users/elirizk/Desktop/Personal Website/public_site/src/content/blog/post1.md";
				const url = undefined;
				function rawContent() {
					return "I had the utmost pleasure to be the primary instructor of computer literacy workshops hosted at the American University of Beirut for students from underserved all-female high schools in Beirut. Through the weekly sessions held from January until May, I trained the students on Python programming, general computer literacy, and the fundamentals of web development. I was particularly proud to witness the impressive progress they made in their problem solving and programming skills.\n\nThis volunteering experience taught me how to effectively communicate abstract and complex topics in my discipline in an easy-to-understand manner. It also helped me realize that increasing the accessibility of computer literacy and programming skills is essential for underserved communities as it will give them the ability and confidence to use digital technology for their future learning and career objectives. \n\nWhile the early pioneers in computer science were mostly women (Grace Hopper as the inventor of the compiler, Margaret Hamilton as the first software engineer, etc…), women have been greatly underrepresented in the field since the 1990s. This highlights the importance of this much-needed initiative by SAIL for Change-AUB as a step closer towards gender equality and digital accessibility in Lebanon.\n\nA special thanks to Celine Al Nemer, Dr. Wassim El-Hajj, and Joseph Chaaban for their help and support.";
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
