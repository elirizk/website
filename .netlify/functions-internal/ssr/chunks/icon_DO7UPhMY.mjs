const icon = new Proxy({"src":"/_astro/icon.BzeyKX9G.png","width":96,"height":96,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/logos/icon.png";
							}
							
							return target[name];
						}
					});

export { icon as default };
