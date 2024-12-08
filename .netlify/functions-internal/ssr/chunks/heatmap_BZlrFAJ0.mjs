const heatmap = new Proxy({"src":"/_astro/heatmap.GiuL7saR.png","width":3024,"height":2546,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/ml_nid/heatmap.png";
							}
							
							return target[name];
						}
					});

export { heatmap as default };
