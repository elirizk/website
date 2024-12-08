const graph3 = new Proxy({"src":"/_astro/graph3.24Y3ihiC.png","width":814,"height":509,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/eda_mig/graph3.png";
							}
							
							return target[name];
						}
					});

export { graph3 as default };
