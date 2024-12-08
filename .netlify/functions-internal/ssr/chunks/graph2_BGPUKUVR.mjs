const graph2 = new Proxy({"src":"/_astro/graph2.DZ52hgjf.png","width":814,"height":509,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/eda_mig/graph2.png";
							}
							
							return target[name];
						}
					});

export { graph2 as default };
