const plot11 = new Proxy({"src":"/_astro/plot11.C_TI8BN-.png","width":3000,"height":1600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/ml_mig/plot11.png";
							}
							
							return target[name];
						}
					});

export { plot11 as default };
