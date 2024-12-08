const img8 = new Proxy({"src":"/_astro/img8.DYl_j-cr.jpg","width":2048,"height":1152,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/blog/img8.jpg";
							}
							
							return target[name];
						}
					});

export { img8 as default };
