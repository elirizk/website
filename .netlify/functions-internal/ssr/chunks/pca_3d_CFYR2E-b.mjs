const pca_3d = new Proxy({"src":"/_astro/pca_3d.zu9Fbi-J.png","width":1400,"height":1400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/ml_nid/pca_3d.png";
							}
							
							return target[name];
						}
					});

export { pca_3d as default };
