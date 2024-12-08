const messageCardOutput = new Proxy({"src":"/_astro/message-card-output.B2DQNxgg.png","width":1092,"height":880,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/teams/message-card-output.png";
							}
							
							return target[name];
						}
					});

export { messageCardOutput as default };
