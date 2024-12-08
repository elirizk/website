const plot2 = new Proxy({"src":"/_astro/plot2.mRwXpW_g.png","width":2000,"height":2000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/ml_mig/plot2.png";
							}
							
							return target[name];
						}
					});

export { plot2 as default };
