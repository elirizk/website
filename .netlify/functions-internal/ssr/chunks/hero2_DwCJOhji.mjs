const hero2 = new Proxy({"src":"/_astro/hero2.D2G1CIFi.jpg","width":1140,"height":660,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/ml_nid/hero2.jpg";
							}
							
							return target[name];
						}
					});

export { hero2 as default };
