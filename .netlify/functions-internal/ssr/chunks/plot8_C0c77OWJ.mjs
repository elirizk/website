const plot8 = new Proxy({"src":"/_astro/plot8.B2Kxv5Lu.png","width":2000,"height":2000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/ml_mig/plot8.png";
							}
							
							return target[name];
						}
					});

export { plot8 as default };
