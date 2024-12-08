const graph1 = new Proxy({"src":"/_astro/graph1.U7ct9e6B.png","width":814,"height":509,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/eda_mig/graph1.png";
							}
							
							return target[name];
						}
					});

export { graph1 as default };
