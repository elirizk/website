const corr_heatmap = new Proxy({"src":"/_astro/corr_heatmap.FbMFRsc5.png","width":4000,"height":3000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/ml_nid/corr_heatmap.png";
							}
							
							return target[name];
						}
					});

export { corr_heatmap as default };
