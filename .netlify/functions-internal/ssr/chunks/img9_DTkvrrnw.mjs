const img9 = new Proxy({"src":"/_astro/img9.CbmWJ6Di.jpg","width":1565,"height":1536,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/blog/img9.jpg";
							}
							
							return target[name];
						}
					});

export { img9 as default };
