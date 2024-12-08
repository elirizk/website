const img4 = new Proxy({"src":"/_astro/img4.BRFtLqfa.jpg","width":1410,"height":794,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/blog/img4.jpg";
							}
							
							return target[name];
						}
					});

export { img4 as default };
