const graph4 = new Proxy({"src":"/_astro/graph4.fXeWIzA_.png","width":814,"height":509,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/eda_mig/graph4.png";
							}
							
							return target[name];
						}
					});

export { graph4 as default };
