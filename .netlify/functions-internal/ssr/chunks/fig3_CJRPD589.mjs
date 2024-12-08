const fig3 = new Proxy({"src":"/_astro/fig3.bp4yV9is.png","width":840,"height":784,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/ml_mig/fig3.png";
							}
							
							return target[name];
						}
					});

export { fig3 as default };
