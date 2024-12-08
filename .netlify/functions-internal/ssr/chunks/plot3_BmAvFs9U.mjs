const plot3 = new Proxy({"src":"/_astro/plot3.r9Z0vWsK.png","width":2000,"height":2000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/ml_mig/plot3.png";
							}
							
							return target[name];
						}
					});

export { plot3 as default };
