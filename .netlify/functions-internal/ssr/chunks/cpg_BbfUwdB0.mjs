const cpg = new Proxy({"src":"/_astro/cpg.DtgjSk_R.png","width":2162,"height":710,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/joern/cpg.png";
							}
							
							return target[name];
						}
					});

export { cpg as default };
