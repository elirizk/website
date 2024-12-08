const code1 = new Proxy({"src":"/_astro/code1.C30ixHPb.png","width":587,"height":446,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/joern/code1.png";
							}
							
							return target[name];
						}
					});

export { code1 as default };
