const img41 = new Proxy({"src":"/_astro/img4-1.BAoGiOwL.jpg","width":2048,"height":1365,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/blog/img4-1.jpg";
							}
							
							return target[name];
						}
					});

export { img41 as default };
