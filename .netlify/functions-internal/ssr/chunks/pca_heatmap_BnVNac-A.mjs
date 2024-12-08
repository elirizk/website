const pca_heatmap = new Proxy({"src":"/_astro/pca_heatmap.DC8zjHug.png","width":640,"height":480,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/ml_nid/pca_heatmap.png";
							}
							
							return target[name];
						}
					});

export { pca_heatmap as default };
