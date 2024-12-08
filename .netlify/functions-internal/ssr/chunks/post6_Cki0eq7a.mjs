import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BaztoWCL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>I’m thrilled to share that I’ve earned the CompTIA Security+ certification. This certification has been a pivotal experience, equipping me with a comprehensive understanding of cybersecurity and bolstering my expertise in this critical field.</p>\n<p>Throughout the program, I dove into the intricacies of securing systems, networks, and data, gaining insights into key areas like network security, risk management, cryptography, and more. The knowledge and skills I’ve acquired are invaluable, enabling me to protect against security threats, detect vulnerabilities, and ensure data integrity. I’m excited to apply what I’ve learned to real-world scenarios and contribute to creating a safer digital environment.</p>";

				const frontmatter = {"title":"CompTIA Security+ Certification","description":"","pubDate":"Oct 24, 2023","heroImage":"src/assets/blog/img6.jpg","tags":["Cybersecurity","CompTIA","Certification"]};
				const file = "/Users/elirizk/Desktop/Personal Website/public_site/src/content/blog/post6.md";
				const url = undefined;
				function rawContent() {
					return "I'm thrilled to share that I've earned the CompTIA Security+ certification. This certification has been a pivotal experience, equipping me with a comprehensive understanding of cybersecurity and bolstering my expertise in this critical field.\n\nThroughout the program, I dove into the intricacies of securing systems, networks, and data, gaining insights into key areas like network security, risk management, cryptography, and more. The knowledge and skills I've acquired are invaluable, enabling me to protect against security threats, detect vulnerabilities, and ensure data integrity. I'm excited to apply what I've learned to real-world scenarios and contribute to creating a safer digital environment.";
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
