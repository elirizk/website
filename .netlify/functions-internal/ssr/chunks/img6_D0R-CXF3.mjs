const img6 = new Proxy({"src":"/_astro/img6.BiI1Ho70.jpg","width":2200,"height":1700,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/blog/img6.jpg";
							}
							
							return target[name];
						}
					});

export { img6 as default };
