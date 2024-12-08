/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, s as spreadAttributes, i as renderSlot, j as renderComponent, A as AstroError, k as UnknownContentCollectionError, l as renderUniqueStylesheet, n as renderScriptElement, o as createHeadAndContent, u as unescapeHTML, p as renderHead } from '../astro_BaztoWCL.mjs';
import 'kleur/colors';
/* empty css                          */
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { $ as $$Image } from './generic_Cil9EYOi.mjs';
import 'clsx';
/* empty css                           */
import pLimit from 'p-limit';

const $$Astro$7 = createAstro("https://elirizk.me");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/src/assets/logos/desktop.png" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/png" href="/src/assets/logos/desktop.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "/Users/elirizk/Desktop/Personal Website/public_site/src/components/BaseHead.astro", void 0);

const $$Astro$6 = createAstro("https://elirizk.me");
const $$HeaderLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + subpath?.[0];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/Users/elirizk/Desktop/Personal Website/public_site/src/components/HeaderLink.astro", void 0);

const SITE_TITLE = "Elie Rizk";
const SITE_DESCRIPTION = "Welcome to my website!";

const image_src = new Proxy({"src":"/_astro/desktop.CHuae1kM.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/elirizk/Desktop/Personal Website/public_site/src/assets/logos/desktop.png";
							}
							
							return target[name];
						}
					});

const $$Astro$5 = createAstro("https://elirizk.me");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <nav data-astro-cid-3ef6ksr2> <div class="logo" data-astro-cid-3ef6ksr2> <a class="site-title" href="/" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Image", $$Image, { "class": "logo-pic", "src": image_src, "alt": "Logo picture", "data-astro-cid-3ef6ksr2": true })} ${SITE_TITLE} </a> </div> <div class="internal-links" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/resume", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Resume` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/projects", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Portfolio` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Blog` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/about", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`About` })} </div> <div class="social-links" data-astro-cid-3ef6ksr2> <a href="https://github.com/elirizk" target="_blank" data-astro-cid-3ef6ksr2> <span class="sr-only" data-astro-cid-3ef6ksr2>GitHub Account</span> <svg style="margin:-1.2px -5px 0 0" xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 30 30" data-astro-cid-3ef6ksr2> <path fill="currentColor" d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" data-astro-cid-3ef6ksr2></path> </svg> </a> <a href="https://www.linkedin.com/in/elirizk/" target="_blank" data-astro-cid-3ef6ksr2> <span class="sr-only" data-astro-cid-3ef6ksr2>LinkedIn Profile</span> <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0,0,256,256" data-astro-cid-3ef6ksr2> <g transform="scale(5.5)" data-astro-cid-3ef6ksr2> <path fill="currentColor" d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z" data-astro-cid-3ef6ksr2></path> </g> </svg> </a> <a href="mailto:eli@elirizk.me" target="_blank" data-astro-cid-3ef6ksr2> <span class="sr-only" data-astro-cid-3ef6ksr2>Email Address</span> <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0,0,256,256" data-astro-cid-3ef6ksr2><g transform="" data-astro-cid-3ef6ksr2> <g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal" data-astro-cid-3ef6ksr2> <g transform="scale(5.5,5.5)" data-astro-cid-3ef6ksr2> <path fill="currentColor" d="M14,4c-5.51133,0 -10,4.48867 -10,10v22c0,5.51133 4.48867,10 10,10h22c5.51133,0 10,-4.48867 10,-10v-22c0,-5.51133 -4.48867,-10 -10,-10zM13,16h24c0.18,0 0.34977,0.02031 0.50977,0.07031l-9.83008,9.82031c-1.48,1.48 -3.88914,1.48 -5.36914,0l-9.82031,-9.82031c0.16,-0.05 0.32977,-0.07031 0.50977,-0.07031zM11.07031,17.49023l7.51953,7.50977l-7.51953,7.50977c-0.05,-0.16 -0.07031,-0.32977 -0.07031,-0.50977v-14c0,-0.18 0.02031,-0.34977 0.07031,-0.50977zM38.92969,17.49023c0.05,0.16 0.07031,0.32977 0.07031,0.50977v14c0,0.18 -0.02031,0.34977 -0.07031,0.50977l-7.5293,-7.50977zM20,26.41016l0.89063,0.90039c1.13,1.13 2.61961,1.68945 4.09961,1.68945c1.49,0 2.96961,-0.55945 4.09961,-1.68945l0.90039,-0.90039l7.51953,7.51953c-0.16,0.05 -0.32977,0.07031 -0.50977,0.07031h-24c-0.18,0 -0.34977,-0.02031 -0.50977,-0.07031z" data-astro-cid-3ef6ksr2></path> </g> </g> </g> </svg> </a> </div> </nav> </header> `;
}, "/Users/elirizk/Desktop/Personal Website/public_site/src/components/Header.astro", void 0);

const $$Astro$4 = createAstro("https://elirizk.me");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte>
&copy; ${today.getFullYear()} Elie Rizk. All rights reserved.
<div class="social-links" data-astro-cid-sz7xmlte> <a href="https://github.com/elirizk" target="_blank" data-astro-cid-sz7xmlte> <span class="sr-only" data-astro-cid-sz7xmlte>GitHub Account</span> <svg style="margin:-1.2px -5px 0 0" xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 30 30" data-astro-cid-sz7xmlte> <path fill="currentColor" d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" data-astro-cid-sz7xmlte></path> </svg> </a> <a href="https://www.linkedin.com/in/elirizk/" target="_blank" data-astro-cid-sz7xmlte> <span class="sr-only" data-astro-cid-sz7xmlte>LinkedIn Profile</span> <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0,0,256,256" data-astro-cid-sz7xmlte> <g transform="scale(5.5)" data-astro-cid-sz7xmlte> <path fill="currentColor" d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z" data-astro-cid-sz7xmlte></path> </g> </svg> </a> <a href="mailto:eli@elirizk.me" target="_blank" data-astro-cid-sz7xmlte> <span class="sr-only" data-astro-cid-sz7xmlte>Email Address</span> <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0,0,256,256" data-astro-cid-sz7xmlte><g transform="" data-astro-cid-sz7xmlte> <g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal" data-astro-cid-sz7xmlte> <g transform="scale(5.5,5.5)" data-astro-cid-sz7xmlte> <path fill="currentColor" d="M14,4c-5.51133,0 -10,4.48867 -10,10v22c0,5.51133 4.48867,10 10,10h22c5.51133,0 10,-4.48867 10,-10v-22c0,-5.51133 -4.48867,-10 -10,-10zM13,16h24c0.18,0 0.34977,0.02031 0.50977,0.07031l-9.83008,9.82031c-1.48,1.48 -3.88914,1.48 -5.36914,0l-9.82031,-9.82031c0.16,-0.05 0.32977,-0.07031 0.50977,-0.07031zM11.07031,17.49023l7.51953,7.50977l-7.51953,7.50977c-0.05,-0.16 -0.07031,-0.32977 -0.07031,-0.50977v-14c0,-0.18 0.02031,-0.34977 0.07031,-0.50977zM38.92969,17.49023c0.05,0.16 0.07031,0.32977 0.07031,0.50977v14c0,0.18 -0.02031,0.34977 -0.07031,0.50977l-7.5293,-7.50977zM20,26.41016l0.89063,0.90039c1.13,1.13 2.61961,1.68945 4.09961,1.68945c1.49,0 2.96961,-0.55945 4.09961,-1.68945l0.90039,-0.90039l7.51953,7.51953c-0.16,0.05 -0.32977,0.07031 -0.50977,0.07031h-24c-0.18,0 -0.34977,-0.02031 -0.50977,-0.07031z" data-astro-cid-sz7xmlte></path> </g> </g> </g> </svg> </a> </div> </footer> `;
}, "/Users/elirizk/Desktop/Personal Website/public_site/src/components/Footer.astro", void 0);

const $$Astro$3 = createAstro("https://elirizk.me");
const $$FormattedDate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  var { date } = Astro2.props;
  date = new Date(date);
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "/Users/elirizk/Desktop/Personal Website/public_site/src/components/FormattedDate.astro", void 0);

const $$Astro$2 = createAstro("https://elirizk.me");
const $$ImageComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ImageComponent;
  const { imagePath, altText } = Astro2.props;
  const images = {
    "src/assets/eda_mig/hero.png": () => import('../hero_B_-_9J_6.mjs'),
    "src/assets/eda_mig/df_desc.png": () => import('../df_desc_C9tyfJUO.mjs'),
    "src/assets/eda_mig/graph8.png": () => import('../graph8_Cdsi3O9Y.mjs'),
    "src/assets/eda_mig/graph9.png": () => import('../graph9_Mdf5EwjG.mjs'),
    "src/assets/eda_mig/graph4.png": () => import('../graph4_nmRKsTS5.mjs'),
    "src/assets/eda_mig/graph12.png": () => import('../graph12_u9v0itMa.mjs'),
    "src/assets/eda_mig/graph5.png": () => import('../graph5_C9l1aYzJ.mjs'),
    "src/assets/eda_mig/graph7.png": () => import('../graph7_z0DtRW4k.mjs'),
    "src/assets/eda_mig/graph10.png": () => import('../graph10_CXEXDm6f.mjs'),
    "src/assets/eda_mig/graph11.png": () => import('../graph11_Dh2TyW2N.mjs'),
    "src/assets/eda_mig/graph6.png": () => import('../graph6__werIbqW.mjs'),
    "src/assets/eda_mig/graph2.png": () => import('../graph2_BGPUKUVR.mjs'),
    "src/assets/eda_mig/graph3.png": () => import('../graph3_BbiJEmhI.mjs'),
    "src/assets/eda_mig/graph1.png": () => import('../graph1_DwG3giKQ.mjs'),
    "src/assets/joern/hero.png": () => import('../hero_D9gn85OQ.mjs'),
    "src/assets/joern/cpg.png": () => import('../cpg_BbfUwdB0.mjs'),
    "src/assets/joern/code1.png": () => import('../code1_DNL9_n98.mjs'),
    "src/assets/joern/code2.webp": () => import('../code2_BVWPf5x7.mjs'),
    "src/assets/joern/graphs.png": () => import('../graphs_BzX25_g9.mjs'),
    "src/assets/joern/code3.webp": () => import('../code3_BoVeQ2G3.mjs'),
    "src/assets/logos/icon.png": () => import('../icon_DO7UPhMY.mjs'),
    "src/assets/ml_nid/corr_heatmap.png": () => import('../corr_heatmap_MU-sneWy.mjs'),
    "src/assets/ml_nid/decision_tree_2.png": () => import('../decision_tree_2_BW8cklTP.mjs'),
    "src/assets/ml_nid/decision_tree_1.png": () => import('../decision_tree_1_B1H5NS-D.mjs'),
    "src/assets/ml_nid/pca_3d.png": () => import('../pca_3d_CFYR2E-b.mjs'),
    "src/assets/ml_nid/pca_2d.png": () => import('../pca_2d_AW0_AAaZ.mjs'),
    "src/assets/ml_nid/class_count.png": () => import('../class_count_Bw2hqfRP.mjs'),
    "src/assets/ml_nid/loss1.png": () => import('../loss1_Bijn5m0C.mjs'),
    "src/assets/ml_nid/loss2.png": () => import('../loss2_aIJJh4Q-.mjs'),
    "src/assets/ml_nid/same_srv_rate_vs_dst_host_same_srv_rate.png": () => import('../same_srv_rate_vs_dst_host_same_srv_rate_Cvj6WrXv.mjs'),
    "src/assets/ml_nid/network.jpg": () => import('../network_C8KzS8EX.mjs'),
    "src/assets/ml_nid/heatmap.png": () => import('../heatmap_BZlrFAJ0.mjs'),
    "src/assets/ml_nid/hero2.jpg": () => import('../hero2_DwCJOhji.mjs'),
    "src/assets/ml_nid/pca_heatmap.png": () => import('../pca_heatmap_BnVNac-A.mjs'),
    "src/assets/headshot.png": () => import('../prerender_9fH9n9YK.mjs').then(n => n.h),
    "src/assets/headshot.jpg": () => import('../headshot_jiLd0xyz.mjs'),
    "src/assets/blog/img4-1.jpg": () => import('../img4-1_CwhU8pZf.mjs'),
    "src/assets/blog/img3-1.jpg": () => import('../img3-1_B3u5YaX5.mjs'),
    "src/assets/blog/img9.jpg": () => import('../img9_DTkvrrnw.mjs'),
    "src/assets/blog/img8.jpg": () => import('../img8_DP7OczFK.mjs'),
    "src/assets/blog/img5.jpg": () => import('../img5_BEHPHPU_.mjs'),
    "src/assets/blog/img4.jpg": () => import('../img4_COygV-7v.mjs'),
    "src/assets/blog/img6.jpg": () => import('../img6_D0R-CXF3.mjs'),
    "src/assets/blog/img7.jpg": () => import('../img7_Dn4yRg-i.mjs'),
    "src/assets/blog/img3.jpg": () => import('../img3_DLT-J3_c.mjs'),
    "src/assets/blog/img2.jpg": () => import('../img2_CopZx3Bs.mjs'),
    "src/assets/blog/img1.jpg": () => import('../img1_C3QHIvbd.mjs'),
    "src/assets/blog/img10.jpg": () => import('../img10_XYXBNZ0a.mjs'),
    "src/assets/ml_mig/plot7.png": () => import('../plot7_DKquj1n9.mjs'),
    "src/assets/ml_mig/plot6.png": () => import('../plot6_IOfptWep.mjs'),
    "src/assets/ml_mig/plot4.png": () => import('../plot4_M5WGd2e1.mjs'),
    "src/assets/ml_mig/plot5.png": () => import('../plot5_DK04sWiZ.mjs'),
    "src/assets/ml_mig/hero.png": () => import('../hero_B1NC79F2.mjs'),
    "src/assets/ml_mig/plot1.png": () => import('../plot1_BjmQ3S42.mjs'),
    "src/assets/ml_mig/fig1.png": () => import('../fig1_Bx6usO6R.mjs'),
    "src/assets/ml_mig/fig3.png": () => import('../fig3_CJRPD589.mjs'),
    "src/assets/ml_mig/plot2.png": () => import('../plot2_D22-GsdH.mjs'),
    "src/assets/ml_mig/plot3.png": () => import('../plot3_BmAvFs9U.mjs'),
    "src/assets/ml_mig/fig2.png": () => import('../fig2_bIpjk-bH.mjs'),
    "src/assets/ml_mig/plot10.png": () => import('../plot10_C_4fszQ3.mjs'),
    "src/assets/ml_mig/plot11.png": () => import('../plot11_Clqf62C7.mjs'),
    "src/assets/ml_mig/mig.svg": () => import('../mig_B3CrGsJu.mjs'),
    "src/assets/ml_mig/mig.png": () => import('../mig_C_JiD7j_.mjs'),
    "src/assets/ml_mig/plot8.png": () => import('../plot8_C0c77OWJ.mjs'),
    "src/assets/ml_mig/plot9.png": () => import('../plot9_BweQOQeg.mjs'),
    "src/assets/int_fact/hero.avif": () => import('../hero_D9teQsdt.mjs'),
    "src/assets/crowdstrike/foundry.jpeg": () => import('../foundry_DrAZ2AFj.mjs'),
    "src/assets/teams/message-card-output.png": () => import('../message-card-output_I5708knm.mjs')
  };
  if (!images[imagePath])
    throw new Error(`"${imagePath}" does not exist in glob: "src/assets/*.{jpeg,jpg,png,gif}"`);
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": images[imagePath](), "alt": altText, "quality": 85, "widths": [390, 780, 1560], "sizes": "(max-width: 390px) 65vw,(max-width: 780px) 75vw, 85vw", "format": "webp", "loading": "lazy" })}`;
}, "/Users/elirizk/Desktop/Personal Website/public_site/src/components/ImageComponent.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://elirizk.me", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/post1.md": () => import('../post1_CfuP7835.mjs'),"/src/content/blog/post10.md": () => import('../post10_Twe1Dw34.mjs'),"/src/content/blog/post2.md": () => import('../post2_AQk3TM5d.mjs'),"/src/content/blog/post3.md": () => import('../post3_BVK71y2V.mjs'),"/src/content/blog/post4.md": () => import('../post4_BjMALhVU.mjs'),"/src/content/blog/post5.md": () => import('../post5_DUsPF2uu.mjs'),"/src/content/blog/post6.md": () => import('../post6_CHJd6nOK.mjs'),"/src/content/blog/post7.md": () => import('../post7_Dm_BOHXQ.mjs'),"/src/content/blog/post8.md": () => import('../post8_JfKb4U0k.mjs'),"/src/content/blog/post9.md": () => import('../post9_7Oml-WsZ.mjs'),"/src/content/projects/EDA-migration.mdx": () => import('../EDA-migration_BS6HCIWB.mjs'),"/src/content/projects/ML-NIDS-1.md": () => import('../ML-NIDS-1_CjmTIS2d.mjs'),"/src/content/projects/ML-NIDS-2.md": () => import('../ML-NIDS-2_C5UuyiNi.mjs'),"/src/content/projects/ML-migration.mdx": () => import('../ML-migration_8G1joSvy.mjs'),"/src/content/projects/crowdstrike-foundry.mdx": () => import('../crowdstrike-foundry_uKW8Hl_5.mjs'),"/src/content/projects/int-Fact.md": () => import('../int-Fact_BAeQpBnm.mjs'),"/src/content/projects/joern-intro.md": () => import('../joern-intro_BIa4fXVk.mjs'),"/src/content/projects/teams-actionable-card.md": () => import('../teams-actionable-card_GyWicRrB.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"post1":"/src/content/blog/post1.md","post10":"/src/content/blog/post10.md","post2":"/src/content/blog/post2.md","post3":"/src/content/blog/post3.md","post4":"/src/content/blog/post4.md","post5":"/src/content/blog/post5.md","post6":"/src/content/blog/post6.md","post7":"/src/content/blog/post7.md","post8":"/src/content/blog/post8.md","post9":"/src/content/blog/post9.md"}},"projects":{"type":"content","entries":{"eda-migration":"/src/content/projects/EDA-migration.mdx","ml-nids-1":"/src/content/projects/ML-NIDS-1.md","ml-nids-2":"/src/content/projects/ML-NIDS-2.md","ml-migration":"/src/content/projects/ML-migration.mdx","crowdstrike-foundry":"/src/content/projects/crowdstrike-foundry.mdx","int-fact":"/src/content/projects/int-Fact.md","joern-intro":"/src/content/projects/joern-intro.md","teams-actionable-card":"/src/content/projects/teams-actionable-card.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/post1.md": () => import('../post1_DdyA1p-2.mjs'),"/src/content/blog/post10.md": () => import('../post10_DdSewgFy.mjs'),"/src/content/blog/post2.md": () => import('../post2_BMIOEFsT.mjs'),"/src/content/blog/post3.md": () => import('../post3_fqBGODmx.mjs'),"/src/content/blog/post4.md": () => import('../post4_C9nr8UYj.mjs'),"/src/content/blog/post5.md": () => import('../post5_jt94jAEZ.mjs'),"/src/content/blog/post6.md": () => import('../post6_BkpEYaur.mjs'),"/src/content/blog/post7.md": () => import('../post7_BCPph7lx.mjs'),"/src/content/blog/post8.md": () => import('../post8_C8CrM8Ix.mjs'),"/src/content/blog/post9.md": () => import('../post9_CslFo7b4.mjs'),"/src/content/projects/EDA-migration.mdx": () => import('../EDA-migration_agWPa_p7.mjs'),"/src/content/projects/ML-NIDS-1.md": () => import('../ML-NIDS-1_BxNd6bGt.mjs'),"/src/content/projects/ML-NIDS-2.md": () => import('../ML-NIDS-2_B1JDH87g.mjs'),"/src/content/projects/ML-migration.mdx": () => import('../ML-migration_BVQxHiaC.mjs'),"/src/content/projects/crowdstrike-foundry.mdx": () => import('../crowdstrike-foundry_BRkMv0fS.mjs'),"/src/content/projects/int-Fact.md": () => import('../int-Fact_lVFAryEh.mjs'),"/src/content/projects/joern-intro.md": () => import('../joern-intro_BxntKOfX.mjs'),"/src/content/projects/teams-actionable-card.md": () => import('../teams-actionable-card_DxybBVkQ.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$1 = createAstro("https://elirizk.me");
const prerender$1 = false;
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const params = Astro2.url.searchParams.get("tag");
  const posts = (await getCollection("blog")).filter((post) => {
    if (params) {
      return post.data.tags && post.data.tags.map((tag) => encodeURIComponent(tag)).includes(encodeURIComponent(params));
    }
    return true;
  }).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> <section> <ul> ${posts.map((post) => renderTemplate`<li${addAttribute(params ? "tag_filter" : "", "class")}> <a${addAttribute(`/blog/${post.slug}/`, "href")}> ${renderComponent($$result, "ImageComponent", $$ImageComponent, { "width": 720, "height": 360, "imagePath": post.data.heroImage, "altText": "" })} <h4 class="title">${post.data.title}</h4> <p class="date"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate })} </p> </a> ${post.data.tags && renderTemplate`<p class="tags"> ${post.data.tags.map((tag) => renderTemplate`<a${addAttribute(encodeURIComponent(tag) === encodeURIComponent(params) ? "tag active" : "tag", "class")}${addAttribute(`/blog${encodeURIComponent(tag) === encodeURIComponent(params) ? "" : "?tag=" + encodeURIComponent(tag)}`, "href")}>${tag}</a>`)} </p>`} </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/elirizk/Desktop/Personal Website/public_site/src/pages/blog/index.astro", void 0);

const $$file$1 = "/Users/elirizk/Desktop/Personal Website/public_site/src/pages/blog/index.astro";
const $$url$1 = "/blog";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	prerender: prerender$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://elirizk.me");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const params = Astro2.url.searchParams.get("tag");
  const posts = (await getCollection("projects")).filter((post) => {
    if (params) {
      return post.data.tags && post.data.tags.includes(params);
    }
    return true;
  }).map((posts2) => (posts2.data.pubDate = new Date(posts2.data.pubDate), posts2)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> <section> ${!params && renderTemplate`<div class="bg-white p-4 rounded-lg shadow-md mb-10"> <h2 class="text-2xl font-bold mb-2 pt-4 p-2">Welcome to my project portfolio page!</h2> <p class="text-lg px-2">
Below, you will find a list of diverse projects I have worked on, ranging from training ML models to static code analysis. Each project includes a set of associated skills, represented as tags. Click on any tag to filter projects by that specific skill.
</p> </div>`} </section> <section> <ul> ${posts.map((post) => renderTemplate`<li${addAttribute(params ? "tag_filter" : "", "class")}> <a${addAttribute(`/projects/${post.slug}/`, "href")}> ${renderComponent($$result, "ImageComponent", $$ImageComponent, { "width": 720, "height": 360, "imagePath": post.data.heroImage, "altText": "" })} <h4 class="title">${post.data.title}</h4> <p class="date"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate })} </p> </a> ${post.data.tags && renderTemplate`<p class="tags"> ${post.data.tags.map((tag) => renderTemplate`<a${addAttribute(encodeURIComponent(tag) === encodeURIComponent(params) ? "tag active" : "tag", "class")}${addAttribute(`/projects${encodeURIComponent(tag) === encodeURIComponent(params) ? "" : "?tag=" + encodeURIComponent(tag)}`, "href")}>${tag}</a>`)} </p>`} </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/elirizk/Desktop/Personal Website/public_site/src/pages/projects/index.astro", void 0);

const $$file = "/Users/elirizk/Desktop/Personal Website/public_site/src/pages/projects/index.astro";
const $$url = "/projects";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseHead as $, SITE_TITLE as S, $$Header as a, $$FormattedDate as b, $$Footer as c, $$ImageComponent as d, SITE_DESCRIPTION as e, index as f, getCollection as g, index$1 as i };
