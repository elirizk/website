const headshot = new Proxy({"src":"/_astro/headshot.CzHoMH-h.jpg","width":2000,"height":2664,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/headshot.jpg";
							}
							
							return target[name];
						}
					});

export { headshot as default };
