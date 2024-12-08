const img7 = new Proxy({"src":"/_astro/img7.FrFvJC0P.jpg","width":750,"height":451,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/blog/img7.jpg";
							}
							
							return target[name];
						}
					});

export { img7 as default };
