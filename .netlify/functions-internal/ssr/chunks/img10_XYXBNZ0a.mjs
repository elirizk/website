const img10 = new Proxy({"src":"/_astro/img10.CkMLHIH0.jpg","width":2048,"height":1536,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/blog/img10.jpg";
							}
							
							return target[name];
						}
					});

export { img10 as default };
