const fig2 = new Proxy({"src":"/_astro/fig2.DVlf4N_L.png","width":2452,"height":418,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/ml_mig/fig2.png";
							}
							
							return target[name];
						}
					});

export { fig2 as default };
