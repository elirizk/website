import { renderers } from './renderers.mjs';
import { manifest } from './manifest_D7GGC287.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DC0VtIrM.mjs');
const _page1 = () => import('./chunks/about_B70lDkyU.mjs');
const _page2 = () => import('./chunks/index_JSI--OjW.mjs');
const _page3 = () => import('./chunks/_.._I78Nay-k.mjs');
const _page4 = () => import('./chunks/index_BYzBc3fj.mjs');
const _page5 = () => import('./chunks/_.._f8d79ndq.mjs');
const _page6 = () => import('./chunks/index_BBO777cT.mjs');
const _page7 = () => import('./chunks/rss_Ce25DzDS.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/blog/index.astro", _page2],
    ["src/pages/blog/[...slug].astro", _page3],
    ["src/pages/projects/index.astro", _page4],
    ["src/pages/projects/[...slug].astro", _page5],
    ["src/pages/resume/index.astro", _page6],
    ["src/pages/rss.xml.js", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "cd04b832-3c36-4003-bc4e-7b49bfa3a65c"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
