const plot1 = new Proxy({"src":"/_astro/plot1.rDkLNue0.png","width":2000,"height":2000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/ml_mig/plot1.png";
							}
							
							return target[name];
						}
					});

export { plot1 as default };
