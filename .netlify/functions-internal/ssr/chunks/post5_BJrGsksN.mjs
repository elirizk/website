import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BaztoWCL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>🔐 Thrilled to Share a New Achievement: Google Cybersecurity Certificate Earned! 🔐</p>\n<p>With immense gratitude to Amideast /Lebanon for their sponsorship, I’m thrilled to announce the successful completion of the Google Cybersecurity Certificate program. This journey involved mastering eight critical courses, which spanned a wide range of cybersecurity domains:</p>\n<ol>\n<li>Foundations of Cybersecurity</li>\n<li>Play It Safe: Manage Security Risks</li>\n<li>Connect and Protect: Networks and Network Security</li>\n<li>Tools of the Trade: Linux and SQL</li>\n<li>Assets, Threats, and Vulnerabilities</li>\n<li>Sound the Alarm: Detection and Response</li>\n<li>Automate Cybersecurity Tasks with Python</li>\n<li>Put It to Work: Prepare for Cybersecurity Jobs</li>\n</ol>\n<p>These courses have equipped me with essential skills to safeguard systems, networks, and data against digital threats. I’m eager to leverage this knowledge to enhance online security and contribute to a safer digital world. Let’s connect and explore how we can collectively improve cybersecurity practices. 🌐</p>";

				const frontmatter = {"title":"Google Cybersecurity Certificate","description":"","pubDate":"Oct 20, 2023","heroImage":"src/assets/blog/img5.jpg","tags":["Cybersecurity","Scholarship","Certification"]};
				const file = "/Users/elirizk/Desktop/Personal Website/public_site/src/content/blog/post5.md";
				const url = undefined;
				function rawContent() {
					return "🔐 Thrilled to Share a New Achievement: Google Cybersecurity Certificate Earned! 🔐\n\nWith immense gratitude to Amideast /Lebanon for their sponsorship, I'm thrilled to announce the successful completion of the Google Cybersecurity Certificate program. This journey involved mastering eight critical courses, which spanned a wide range of cybersecurity domains:\n\n1. Foundations of Cybersecurity\n2. Play It Safe: Manage Security Risks\n3. Connect and Protect: Networks and Network Security\n4. Tools of the Trade: Linux and SQL\n5. Assets, Threats, and Vulnerabilities\n6. Sound the Alarm: Detection and Response\n7. Automate Cybersecurity Tasks with Python\n8. Put It to Work: Prepare for Cybersecurity Jobs\n\nThese courses have equipped me with essential skills to safeguard systems, networks, and data against digital threats. I'm eager to leverage this knowledge to enhance online security and contribute to a safer digital world. Let's connect and explore how we can collectively improve cybersecurity practices. 🌐";
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
