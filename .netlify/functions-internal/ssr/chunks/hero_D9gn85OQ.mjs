const hero = new Proxy({"src":"/_astro/hero.P5vSTZzK.png","width":2428,"height":1036,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/joern/hero.png";
							}
							
							return target[name];
						}
					});

export { hero as default };
