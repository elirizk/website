const img3 = new Proxy({"src":"/_astro/img3.DNfLP1zZ.jpg","width":750,"height":987,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/blog/img3.jpg";
							}
							
							return target[name];
						}
					});

export { img3 as default };
