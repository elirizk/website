const plot6 = new Proxy({"src":"/_astro/plot6.j9igNqVQ.png","width":2000,"height":2000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/ml_mig/plot6.png";
							}
							
							return target[name];
						}
					});

export { plot6 as default };
