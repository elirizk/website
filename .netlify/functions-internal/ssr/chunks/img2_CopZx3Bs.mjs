const img2 = new Proxy({"src":"/_astro/img2.G4jxwhia.jpg","width":750,"height":563,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/blog/img2.jpg";
							}
							
							return target[name];
						}
					});

export { img2 as default };
