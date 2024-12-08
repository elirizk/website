const network = new Proxy({"src":"/_astro/network.BPJQTdxX.jpg","width":4000,"height":2117,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/ml_nid/network.jpg";
							}
							
							return target[name];
						}
					});

export { network as default };
