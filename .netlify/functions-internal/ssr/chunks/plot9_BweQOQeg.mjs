const plot9 = new Proxy({"src":"/_astro/plot9.Blbv7gaG.png","width":2000,"height":1600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/ml_mig/plot9.png";
							}
							
							return target[name];
						}
					});

export { plot9 as default };
