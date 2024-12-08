const img1 = new Proxy({"src":"/_astro/img1.C8ba_Ef7.jpg","width":1620,"height":1215,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/blog/img1.jpg";
							}
							
							return target[name];
						}
					});

export { img1 as default };
