const img31 = new Proxy({"src":"/_astro/img3-1.z9BEPG_g.jpg","width":2048,"height":1305,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/blog/img3-1.jpg";
							}
							
							return target[name];
						}
					});

export { img31 as default };
