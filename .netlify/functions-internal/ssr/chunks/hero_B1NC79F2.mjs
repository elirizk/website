const hero = new Proxy({"src":"/_astro/hero.BNXUN_Po.png","width":2758,"height":1547,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/ml_mig/hero.png";
							}
							
							return target[name];
						}
					});

export { hero as default };
