const pca_2d = new Proxy({"src":"/_astro/pca_2d.2bM3l7nu.png","width":640,"height":480,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/ml_nid/pca_2d.png";
							}
							
							return target[name];
						}
					});

export { pca_2d as default };
