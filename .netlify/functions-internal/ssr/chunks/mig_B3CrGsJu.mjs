const mig = new Proxy({"src":"/_astro/mig.MSHOFBpa.svg","width":15280,"height":1745,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/ml_mig/mig.svg";
							}
							
							return target[name];
						}
					});

export { mig as default };
