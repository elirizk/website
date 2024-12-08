const code2 = new Proxy({"src":"/_astro/code2.CYLZ6RdF.webp","width":545,"height":295,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/joern/code2.webp";
							}
							
							return target[name];
						}
					});

export { code2 as default };
