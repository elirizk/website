const mediumToMarkdown = require('medium-to-markdown');
const fs = require('fs');
const url = "https://medium.com/@elirizk/getting-started-with-static-code-analysis-using-joern-6311e611be91";
 
mediumToMarkdown.convertFromUrl(url).then(function (markdown) { fs.writeFile('out.md', markdown, (err)=>{if (err) throw err;}); });