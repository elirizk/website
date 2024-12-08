const img5 = new Proxy({"src":"/_astro/img5.BeF-iOp5.jpg","width":1987,"height":1536,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/blog/img5.jpg";
							}
							
							return target[name];
						}
					});

export { img5 as default };
