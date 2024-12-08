const fig1 = new Proxy({"src":"/_astro/fig1.ClE5AiEI.png","width":2584,"height":310,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/ml_mig/fig1.png";
							}
							
							return target[name];
						}
					});

export { fig1 as default };
