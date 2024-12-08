const hero = new Proxy({"src":"/_astro/hero.bIrnmC4j.avif","width":2070,"height":1380,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/int_fact/hero.avif";
							}
							
							return target[name];
						}
					});

export { hero as default };
