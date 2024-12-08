const foundry = new Proxy({"src":"/_astro/foundry.CKnIZeYM.jpeg","width":1060,"height":698,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/crowdstrike/foundry.jpeg";
							}
							
							return target[name];
						}
					});

export { foundry as default };
