const hero = new Proxy({"src":"/_astro/hero.B2zMHUOu.png","width":1508,"height":863,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/eda_mig/hero.png";
							}
							
							return target[name];
						}
					});

export { hero as default };
