const plot5 = new Proxy({"src":"/_astro/plot5.CrUGb2yJ.png","width":2000,"height":2000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/ml_mig/plot5.png";
							}
							
							return target[name];
						}
					});

export { plot5 as default };
