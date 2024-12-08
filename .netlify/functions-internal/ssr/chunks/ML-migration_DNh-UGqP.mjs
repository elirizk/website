import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_BaztoWCL.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_Cil9EYOi.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                                                        */
/* empty css                                                               */
/* empty css                                                               */

const $$Astro$d = createAstro("https://elirizk.me");
const $$HyperLinkedImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$HyperLinkedImage;
  const { src, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(src, "href")} target="_blank" data-astro-cid-njh5shcv> <img${addAttribute(src, "src")}${addAttribute(alt, "alt")} data-astro-cid-njh5shcv> </a> `;
}, "/Users/elirizk/Desktop/Personal Website/public_site/src/components/HyperLinkedImage.astro", void 0);

const $$Astro$c = createAstro("https://elirizk.me");
const $$Table1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Table1;
  return renderTemplate`${maybeRenderHead()}<table> <colgroup> <col> <col> <col> <col> <col> </colgroup> <thead> <tr> <th>Pipeline</th> <th>Hyperparameter</th> <th colspan="3">Values</th> </tr> </thead> <tbody> <tr> <td rowspan="4"><br>Elastic Net</td> <td>alpha</td> <td>0.05</td> <td>0.1</td> <td>0.5</td> </tr> <tr> <td>l1_ratio</td> <td>0.5</td> <td>0.75</td> <td>1.0</td> </tr> <tr> <td>tol</td> <td>0.00001</td> <td>0.0001</td> <td>0.001</td> </tr> <tr> <td>max_iter</td> <td colspan="3">5,000</td> </tr> <tr> <td rowspan="2">Polynomial Features</td> <td>degree</td> <td>1</td> <td>2</td> <td>3</td> </tr> <tr> <td>include_bias</td> <td>True</td> <td colspan="2">False</td> </tr> </tbody> </table>`;
}, "/Users/elirizk/Desktop/Personal Website/public_site/src/components/tables/Table1.astro", void 0);

const $$Astro$b = createAstro("https://elirizk.me");
const $$Table2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Table2;
  return renderTemplate`${maybeRenderHead()}<table> <thead> <tr> <th>Hyperparameters</th> <th colspan="5">Values</th> </tr> </thead> <tbody> <tr> <td>max_features</td> <td colspan="2">auto</td> <td colspan="3">sqrt</td> </tr> <tr> <td>max_depth</td> <td>10</td> <td>45</td> <td>80</td> <td>115</td> <td>150</td> </tr> <tr> <td>min_samples_split</td> <td colspan="2">2</td> <td colspan="2">5</td> <td>10</td> </tr> <tr> <td>min_samples_leaf</td> <td>1</td> <td>3</td> <td>5</td> <td>7</td> <td>10</td> </tr> <tr> <td>max_leaf_nodes</td> <td>10</td> <td>45</td> <td>80</td> <td>115</td> <td>150</td> </tr> </tbody> </table>`;
}, "/Users/elirizk/Desktop/Personal Website/public_site/src/components/tables/Table2.astro", void 0);

const $$Astro$a = createAstro("https://elirizk.me");
const $$Table3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Table3;
  return renderTemplate`${maybeRenderHead()}<table> <thead> <tr> <th>Hyperparameters</th> <th colspan="3">Values</th> </tr> </thead> <tbody> <tr> <td>max_features</td> <td colspan="3">auto</td> </tr> <tr> <td>max_depth</td> <td>100</td> <td>120</td> <td>150</td> </tr> <tr> <td>min_samples_split</td> <td>5</td> <td>10</td> <td>20</td> </tr> <tr> <td>min_samples_leaf</td> <td>1</td> <td>5</td> <td>10</td> </tr> <tr> <td>max_leaf_nodes</td> <td>50</td> <td>100</td> <td>125</td> </tr> </tbody> </table>`;
}, "/Users/elirizk/Desktop/Personal Website/public_site/src/components/tables/Table3.astro", void 0);

const $$Astro$9 = createAstro("https://elirizk.me");
const $$Table4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Table4;
  return renderTemplate`${maybeRenderHead()}<table> <thead> <tr> <th>Hyperparameters</th> <th colspan="5">Values</th> </tr> </thead> <tbody> <tr> <td>n_estimators</td> <td colspan="3">1</td> <td>75</td> <td>100</td> </tr> <tr> <td>max_features</td> <td colspan="2">auto</td> <td colspan="3">sqrt</td> </tr> <tr> <td>max_depth</td> <td>10</td> <td>45</td> <td>80</td> <td>115</td> <td>150</td> </tr> <tr> <td>min_samples_split</td> <td colspan="2">2</td> <td colspan="2">6</td> <td>10</td> </tr> <tr> <td>min_samples_leaf</td> <td>1</td> <td>5</td> <td colspan="2">10</td> <td>20</td> </tr> <tr> <td>bootstrap</td> <td colspan="2">True</td> <td colspan="3">False</td> </tr> </tbody> </table>`;
}, "/Users/elirizk/Desktop/Personal Website/public_site/src/components/tables/Table4.astro", void 0);

const $$Astro$8 = createAstro("https://elirizk.me");
const $$Table5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Table5;
  return renderTemplate`${maybeRenderHead()}<table> <thead> <tr> <th>Hyperparameters</th> <th colspan="5">Values</th> </tr> </thead> <tbody> <tr> <td>n_estimators</td> <td colspan="2">25</td> <td colspan="2">50</td> <td>100</td> </tr> <tr> <td>max_features</td> <td colspan="2">auto</td> <td colspan="3">sqrt</td> </tr> <tr> <td>max_depth</td> <td colspan="2">80</td> <td colspan="2">100</td> <td>120</td> </tr> <tr> <td>min_samples_split</td> <td colspan="2">1</td> <td colspan="2">5</td> <td>10</td> </tr> <tr> <td>min_samples_leaf</td> <td colspan="2">1</td> <td colspan="2">5</td> <td>10</td> </tr> <tr> <td>bootstrap</td> <td colspan="2">True</td> <td colspan="3">False</td> </tr> </tbody> </table>`;
}, "/Users/elirizk/Desktop/Personal Website/public_site/src/components/tables/Table5.astro", void 0);

const $$Astro$7 = createAstro("https://elirizk.me");
const $$Table6 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Table6;
  return renderTemplate`${maybeRenderHead()}<table> <thead> <tr> <th>Hyperparameters</th> <th colspan="4">Values</th> </tr> </thead> <tbody> <tr> <td>C</td> <td>1</td> <td>4</td> <td>7</td> <td>10</td> </tr> <tr> <td>Kernel</td> <td colspan="2">linear</td> <td>rbf</td> <td>sigmoid</td> </tr> </tbody> </table>`;
}, "/Users/elirizk/Desktop/Personal Website/public_site/src/components/tables/Table6.astro", void 0);

const $$Astro$6 = createAstro("https://elirizk.me");
const $$Table7 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Table7;
  return renderTemplate`${maybeRenderHead()}<table> <thead> <tr> <th>Hyperparameters</th> <th colspan="4">Values</th> </tr> </thead> <tbody> <tr> <td>C</td> <td>6</td> <td>7</td> <td>8</td> <td>10</td> </tr> <tr> <td>Kernel</td> <td colspan="2">linear</td> <td colspan="2">rbf</td> </tr> </tbody> </table>`;
}, "/Users/elirizk/Desktop/Personal Website/public_site/src/components/tables/Table7.astro", void 0);

const $$Astro$5 = createAstro("https://elirizk.me");
const $$Table8 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Table8;
  return renderTemplate`${maybeRenderHead()}<table> <thead> <tr> <th>Hyperparameters</th> <th colspan="3">Values</th> </tr> </thead> <tbody> <tr> <td>hidden_layer_sizes</td> <td>(50,)</td> <td>(100,)</td> <td>(150,)</td> </tr> <tr> <td>activation</td> <td colspan="2">identity</td> <td>logistic</td> </tr> <tr> <td>solver</td> <td colspan="2">lbfgs</td> <td>adam</td> </tr> <tr> <td>max_iter</td> <td colspan="3">500</td> </tr> </tbody> </table>`;
}, "/Users/elirizk/Desktop/Personal Website/public_site/src/components/tables/Table8.astro", void 0);

const $$Astro$4 = createAstro("https://elirizk.me");
const $$Table9 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Table9;
  return renderTemplate`${maybeRenderHead()}<table> <thead> <tr> <th>Hyperparameters</th> <th colspan="4">Values</th> </tr> </thead> <tbody> <tr> <td>n_hidden</td> <td>0</td> <td>1</td> <td>2</td> <td>3</td> </tr> <tr> <td>activation</td> <td>sigmoid</td> <td>tanh</td> <td>relu</td> <td>identity</td> </tr> <tr> <td>n_neurons</td> <td colspan="4">continuous list from 1 to 100: 1, 2, 3, …, 100</td> </tr> <tr> <td>learning_rate</td> <td colspan="4">continuous reciprocal function from 0.0003 to 0.03</td> </tr> </tbody> </table>`;
}, "/Users/elirizk/Desktop/Personal Website/public_site/src/components/tables/Table9.astro", void 0);

const $$Astro$3 = createAstro("https://elirizk.me");
const $$Table10 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Table10;
  return renderTemplate`${maybeRenderHead()}<table> <thead> <tr> <th>Machine Learning Model</th> <th>R2 score</th> <th>MSE</th> <th>RMSE</th> <th>MAE</th> </tr> </thead> <tbody> <tr> <td>Linear Regression</td> <td>0.98438</td> <td>1.84479</td> <td>1.35823</td> <td>0.41999</td> </tr> <tr> <td>Huber Regressor</td> <td>0.97997</td> <td>2.36503</td> <td>1.53787</td> <td>0.23481</td> </tr> <tr> <td>Linear Regression with Quadratic Features</td> <td>0.98443</td> <td>1.83862</td> <td>1.35596</td> <td>0.44821</td> </tr> <tr> <td>Lasso Regression (Elastic Net with l1_ratio=1)</td> <td>0.98397</td> <td>1.89338</td> <td>1.37600</td> <td>0.42761</td> </tr> <tr> <td>Elastic Net with Polynomial Features</td> <td>0.97814</td> <td>2.58095</td> <td>1.60653</td> <td>0.50331</td> </tr> <tr> <td>Decision Tree Regression</td> <td>0.93394</td> <td>7.80085</td> <td>2.79300</td> <td>0.88348</td> </tr> <tr> <td>Random Forest Regression</td> <td>0.96524</td> <td>4.10408</td> <td>2.02585</td> <td>0.59007</td> </tr> <tr> <td>Support Vector Regression</td> <td>0.98042</td> <td>2.31166</td> <td>1.52041</td> <td>0.26166</td> </tr> <tr> <td>Multilayer Perceptron Regressor</td> <td>0.98419</td> <td>1.86722</td> <td>1.36646</td> <td>0.49410</td> </tr> <tr> <td>Sequential Neural Network </td> <td>0.98136</td> <td>2.20120</td> <td>1.48364</td> <td>0.44678</td> </tr> </tbody> </table>`;
}, "/Users/elirizk/Desktop/Personal Website/public_site/src/components/tables/Table10.astro", void 0);

const $$Astro$2 = createAstro("https://elirizk.me");
const $$Table11 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Table11;
  return renderTemplate`${maybeRenderHead()}<table data-astro-cid-kbdoqbrd> <tbody data-astro-cid-kbdoqbrd> <tr data-astro-cid-kbdoqbrd> <td data-astro-cid-kbdoqbrd>Intercept</td> <td data-astro-cid-kbdoqbrd>0.22119481051553427</td> </tr> <tr data-astro-cid-kbdoqbrd> <td data-astro-cid-kbdoqbrd>Prev1 </td> <td data-astro-cid-kbdoqbrd>16.547780</td> </tr> <tr data-astro-cid-kbdoqbrd> <td data-astro-cid-kbdoqbrd>Prev2 </td> <td data-astro-cid-kbdoqbrd>-7.397643</td> </tr> <tr data-astro-cid-kbdoqbrd> <td data-astro-cid-kbdoqbrd>DALYs </td> <td data-astro-cid-kbdoqbrd>0.049705</td> </tr> <tr data-astro-cid-kbdoqbrd> <td data-astro-cid-kbdoqbrd>GDP </td> <td data-astro-cid-kbdoqbrd>0.044089</td> </tr> <tr data-astro-cid-kbdoqbrd> <td data-astro-cid-kbdoqbrd>Life Expectancy </td> <td data-astro-cid-kbdoqbrd>0.145769</td> </tr> <tr data-astro-cid-kbdoqbrd> <td data-astro-cid-kbdoqbrd>Inflation </td> <td data-astro-cid-kbdoqbrd>-0.004923</td> </tr> <tr data-astro-cid-kbdoqbrd> <td data-astro-cid-kbdoqbrd>Mortality </td> <td data-astro-cid-kbdoqbrd>0.026234</td> </tr> <tr data-astro-cid-kbdoqbrd> <td rowspan="2" data-astro-cid-kbdoqbrd>Healthcare expenditure</td> <td rowspan="2" data-astro-cid-kbdoqbrd>-0.039050</td> </tr> <tr data-astro-cid-kbdoqbrd></tr> <tr data-astro-cid-kbdoqbrd> <td data-astro-cid-kbdoqbrd>AF </td> <td data-astro-cid-kbdoqbrd>0.052919</td> </tr> <tr data-astro-cid-kbdoqbrd> <td data-astro-cid-kbdoqbrd>AS </td> <td data-astro-cid-kbdoqbrd>0.061712</td> </tr> <tr data-astro-cid-kbdoqbrd> <td data-astro-cid-kbdoqbrd>EU </td> <td data-astro-cid-kbdoqbrd>-0.068737</td> </tr> <tr data-astro-cid-kbdoqbrd> <td data-astro-cid-kbdoqbrd>NA </td> <td data-astro-cid-kbdoqbrd>-0.016998</td> </tr> <tr data-astro-cid-kbdoqbrd> <td data-astro-cid-kbdoqbrd>OC </td> <td data-astro-cid-kbdoqbrd>-0.053462</td> </tr> <tr data-astro-cid-kbdoqbrd> <td data-astro-cid-kbdoqbrd>SA </td> <td data-astro-cid-kbdoqbrd>-0.022309</td> </tr> <tr data-astro-cid-kbdoqbrd> <td data-astro-cid-kbdoqbrd>High </td> <td data-astro-cid-kbdoqbrd>0.015329</td> </tr> <tr data-astro-cid-kbdoqbrd> <td data-astro-cid-kbdoqbrd>Low </td> <td data-astro-cid-kbdoqbrd>-0.030158</td> </tr> <tr data-astro-cid-kbdoqbrd> <td data-astro-cid-kbdoqbrd>Medium </td> <td data-astro-cid-kbdoqbrd>-0.063294</td> </tr> <tr data-astro-cid-kbdoqbrd> <td data-astro-cid-kbdoqbrd>Very High</td> <td data-astro-cid-kbdoqbrd>0.074775</td> </tr> </tbody> </table> `;
}, "/Users/elirizk/Desktop/Personal Website/public_site/src/components/tables/Table11.astro", void 0);

const $$Astro$1 = createAstro("https://elirizk.me");
const $$Table12 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Table12;
  return renderTemplate`${maybeRenderHead()}<table> <thead> <tr> <th>Machine Learning Model</th> <th>R2 score</th> <th>MSE</th> <th>RMSE</th> <th>MAE</th> </tr> </thead> <tbody> <tr> <td>Linear Regression</td> <td>0.23202</td> <td>90.68742</td> <td>9.52299</td> <td>4.79592</td> </tr> <tr> <td>Huber Regressor</td> <td>0.15452</td> <td>99.83856</td> <td>9.99192</td> <td>4.38152</td> </tr> <tr> <td>Linear Regression with Quadratic Features</td> <td>0.56009</td> <td>51.94693</td> <td>7.20742</td> <td>4.27266</td> </tr> <tr> <td>Lasso Regression (Elastic Net with l1_ratio=1)</td> <td>0.23450</td> <td>90.39476</td> <td>9.50762</td> <td>4.63189</td> </tr> <tr> <td>Elastic Net with Polynomial Features (degree 4)</td> <td>0.75917</td> <td>28.43818</td> <td>5.33275</td> <td>3.32673</td> </tr> <tr> <td>Decision Tree Regression</td> <td>0.77732</td> <td>26.29485</td> <td>5.12785</td> <td>2.92504</td> </tr> <tr> <td>Random Forest Regression</td> <td>0.84301</td> <td>18.53802</td> <td>4.30558</td> <td>2.24595</td> </tr> <tr> <td rowspan="2">Support Vector Regression</td> <td rowspan="2">0.42771</td> <td>67.57886</td> <td>8.22064</td> <td>3.54472</td> </tr> <tr> <td>36.33389</td> <td>6.02776</td> <td>3.33691</td> </tr> <tr> <td>Sequential Neural Network </td> <td>0.79502</td> <td>24.20565</td> <td>4.91992</td> <td>3.04692</td> </tr> </tbody> </table>`;
}, "/Users/elirizk/Desktop/Personal Website/public_site/src/components/tables/Table12.astro", void 0);

const $$Astro = createAstro("https://elirizk.me");
const $$Table13 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Table13;
  return renderTemplate`${maybeRenderHead()}<table data-astro-cid-b2arugy6> <tbody data-astro-cid-b2arugy6> <tr data-astro-cid-b2arugy6> <td data-astro-cid-b2arugy6>Intercept</td> <td data-astro-cid-b2arugy6>0.25190295055289097</td> </tr> <tr data-astro-cid-b2arugy6> <td data-astro-cid-b2arugy6>DALYs </td> <td data-astro-cid-b2arugy6>2.354790</td> </tr> <tr data-astro-cid-b2arugy6> <td data-astro-cid-b2arugy6>GDP </td> <td data-astro-cid-b2arugy6>0.4475479</td> </tr> <tr data-astro-cid-b2arugy6> <td data-astro-cid-b2arugy6>Life Expectancy </td> <td data-astro-cid-b2arugy6>-0.3226781</td> </tr> <tr data-astro-cid-b2arugy6> <td data-astro-cid-b2arugy6>Inflation </td> <td data-astro-cid-b2arugy6>-0.3919908</td> </tr> <tr data-astro-cid-b2arugy6> <td data-astro-cid-b2arugy6>Mortality </td> <td data-astro-cid-b2arugy6>-1.927345</td> </tr> <tr data-astro-cid-b2arugy6> <td data-astro-cid-b2arugy6>Healthcare expenditure </td> <td data-astro-cid-b2arugy6>-1.170903</td> </tr> <tr data-astro-cid-b2arugy6> <td data-astro-cid-b2arugy6>AF </td> <td data-astro-cid-b2arugy6>5.461093e+12</td> </tr> <tr data-astro-cid-b2arugy6> <td data-astro-cid-b2arugy6>AS </td> <td data-astro-cid-b2arugy6>5.084628e+12</td> </tr> <tr data-astro-cid-b2arugy6> <td data-astro-cid-b2arugy6>EU </td> <td data-astro-cid-b2arugy6>4.863591e+12</td> </tr> <tr data-astro-cid-b2arugy6> <td data-astro-cid-b2arugy6>NA </td> <td data-astro-cid-b2arugy6>3.791603e+12</td> </tr> <tr data-astro-cid-b2arugy6> <td data-astro-cid-b2arugy6>OC </td> <td data-astro-cid-b2arugy6>2.576027e+12</td> </tr> <tr data-astro-cid-b2arugy6> <td data-astro-cid-b2arugy6>SA </td> <td data-astro-cid-b2arugy6>2.971740e+12</td> </tr> <tr data-astro-cid-b2arugy6> <td data-astro-cid-b2arugy6>High </td> <td data-astro-cid-b2arugy6>8.253593e+14</td> </tr> <tr data-astro-cid-b2arugy6> <td data-astro-cid-b2arugy6>Low </td> <td data-astro-cid-b2arugy6>8.447472e+14</td> </tr> <tr data-astro-cid-b2arugy6> <td data-astro-cid-b2arugy6>Medium </td> <td data-astro-cid-b2arugy6>8.031996e+14</td> </tr> <tr data-astro-cid-b2arugy6> <td data-astro-cid-b2arugy6>Very High</td> <td data-astro-cid-b2arugy6>8.513803e+14</td> </tr> </tbody> </table> `;
}, "/Users/elirizk/Desktop/Personal Website/public_site/src/components/tables/Table13.astro", void 0);

const frontmatter = {
  "title": "Training and Tuning Machine Learning Models for Predicting Migration Rate",
  "description": "In this post we will apply various machine learning models and perform hyperparameter tuning to the problem of predicting a country`s net migration rate as a time series from its socio-economic factors.",
  "pubDate": "Apr 30, 2022",
  "heroImage": "src/assets/ml_mig/hero.png",
  "tags": ["Machine Learning", "Python", "Scikit-learn", "TensorFlow", "Matplotlib"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "data-preprocessing",
    "text": "Data Preprocessing"
  }, {
    "depth": 2,
    "slug": "linear-regression-and-its-variants",
    "text": "Linear Regression and its Variants"
  }, {
    "depth": 3,
    "slug": "plain-linear-regression",
    "text": "Plain Linear Regression"
  }, {
    "depth": 3,
    "slug": "huber-regressor",
    "text": "Huber Regressor"
  }, {
    "depth": 3,
    "slug": "linear-regression-with-quadratic-features",
    "text": "Linear Regression with Quadratic Features"
  }, {
    "depth": 3,
    "slug": "elastic-net",
    "text": "Elastic Net"
  }, {
    "depth": 2,
    "slug": "decision-tree-regressor",
    "text": "Decision Tree Regressor"
  }, {
    "depth": 2,
    "slug": "random-forest-regressor",
    "text": "Random Forest Regressor"
  }, {
    "depth": 2,
    "slug": "support-vector-regression",
    "text": "Support Vector Regression"
  }, {
    "depth": 2,
    "slug": "feed-forward-neural-network",
    "text": "Feed Forward Neural Network"
  }, {
    "depth": 3,
    "slug": "multilayer-perceptron-regressor-with-scikitlearn",
    "text": "Multilayer Perceptron Regressor with ScikitLearn"
  }, {
    "depth": 3,
    "slug": "sequential-neural-network-with-keras",
    "text": "Sequential Neural Network with Keras"
  }, {
    "depth": 2,
    "slug": "summary-of-the-error-metrics",
    "text": "Summary of the Error Metrics"
  }, {
    "depth": 2,
    "slug": "interpretation-of-the-linear-regression-and-decision-tree",
    "text": "Interpretation of the Linear Regression and Decision Tree"
  }, {
    "depth": 2,
    "slug": "model-fitting-without-time-steps",
    "text": "Model Fitting without Time Steps"
  }, {
    "depth": 2,
    "slug": "references",
    "text": "References"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["The code for my project can be found ", createVNode(_components.a, {
        href: "https://github.com/elirizk/ML-for-Predicting-Migration",
        children: "here"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "data-preprocessing",
      children: "Data Preprocessing"
    }), "\n", createVNode(_components.p, {
      children: ["Refer to the ", createVNode(_components.code, {
        children: "ML Training.ipynb"
      }), " notebook for the code and final_dataset.csv for the data"]
    }), "\n", createVNode(_components.p, {
      children: "Before diving into fitting a machine learning model for our dataset, we will do some data preprocessing to be aware of the structure of our dataset and to find any potential anomalies. After importing our final joint dataset into a dataframe object, we observe its first 5 rows, description, and info."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.img, {
        src: "/src/assets/ml_mig/fig1.png",
        alt: "First 5 rows of the dataset"
      }), "\n", createVNode(_components.img, {
        src: "/src/assets/ml_mig/fig2.png",
        alt: "Description of the dataset"
      }), "\n", createVNode(_components.img, {
        src: "/src/assets/ml_mig/fig3.png",
        alt: "Info of the dataset"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["First of all, we can identify that the output column is the ", createVNode(_components.em, {
        children: "Net Migration Rate"
      }), ", the columns ", createVNode(_components.em, {
        children: "Country Name"
      }), " and ", createVNode(_components.em, {
        children: "Country Code"
      }), " need to be dropped, and the other columns are the input. Secondly, The description of the distribution values of the columns reassures us that no erroneous outlier is present in the data, since the min, max, and mean of each feature makes sense. What is worth noting is that the ", createVNode(_components.em, {
        children: "Net Migration Rate"
      }), " column has a minimum of -54.746, a maximum of 134.414, a mean of 0.287, a standard deviation of 9.865, and an IQR of (-2.89, 2.02). We will keep these values in mind when we evaluate the performance of the models later. Thirdly, the info table of the dataset shows us that two of our input features (Continent Code and ", createVNode(_components.em, {
        children: "HDI"
      }), ") are categorical. As such, we perform a One Hot Encoding on these two features to arrive at our final dataset (after dropping the ", createVNode(_components.em, {
        children: "Country Name"
      }), ", ", createVNode(_components.em, {
        children: "Country Code"
      }), ", and the categorical columns)."]
    }), "\n", createVNode(_components.p, {
      children: "We split the data into input and output, and further split those into training and testing data. We have used an 80% - 20% split into training and testing which ensures that enough data is set aside for testing (around 733 rows of testing from the original 3,662 rows of the data)."
    }), "\n", createVNode(_components.p, {
      children: ["We will also standardize the input features to use the scaled ones for the Support Vector Regression (SVR) and Neural Networks. While standardizing we fit the scaler for the testing data alone to prevent any ", createVNode(_components.strong, {
        children: "data leakage"
      }), ". We use the same scaler to transform the testing data."]
    }), "\n", createVNode(_components.h2, {
      id: "linear-regression-and-its-variants",
      children: "Linear Regression and its Variants"
    }), "\n", createVNode(_components.h3, {
      id: "plain-linear-regression",
      children: "Plain Linear Regression"
    }), "\n", createVNode(_components.p, {
      children: "There was no need for a hyperparameter search for the plain linear regression model since there are no relevant hyperparameters (the normalization parameter is deprecated). After fitting the model and printing the intercept and coefficients of each feature, the error metrics and learning curve of the model are:"
    }), "\n", createVNode(_components.p, {
      children: ["R2: 0.98438, MSE: 1.84479, RMSE: 1.35823, MAE: 0.41999\n", createVNode(_components.img, {
        src: "/src/assets/ml_mig/plot1.png",
        alt: "Learning curve of the plain linear regression model"
      })]
    }), "\n", createVNode(_components.p, {
      children: "The R2 score is very close to 1 which is a positive indicator. The mean squared error seems acceptable considering that there are a lot of legitimate outliers in our data (standard deviation of 9 while the IQR has a range of 4). The mean absolute error is on the high end considering the distribution of the data: half of the data is between -2 and +2, so an average absolute error of around 0.4 seems considerable. We will keep an eye at this metric in the following models."
    }), "\n", createVNode(_components.h3, {
      id: "huber-regressor",
      children: "Huber Regressor"
    }), "\n", createVNode(_components.p, {
      children: "Considering the vast presence of outliers in our data, we will try a linear regression model robust to outliers. The Huber Regressor is one of the robust regression models that is \u201Cless sensitive to outliers than the mean squared error, and it is often more precise and converges faster than the mean absolute error\u201D (G\xE9ron 290). After fitting this model with our training data, we get the below error metrics and the learning curve:"
    }), "\n", createVNode(_components.p, {
      children: ["R2: 0.97997, MSE: 2.36503, RMSE: 1.53787, MAE: 0.23481\n", createVNode(_components.img, {
        src: "/src/assets/ml_mig/plot2.png",
        alt: "Learning curve of the Huber Regressor model"
      })]
    }), "\n", createVNode(_components.p, {
      children: "As expected, the mean absolute error decreased by 45% (from 0.42 to 0.23). This proves that the model is more reliable for the majority of the data that is centered around the mean. However, it performed worse on the outliers: this can be clearly seen by the wide range of the scores in the learning curve. The mean squared error increased from 1.84 to 2.36. The Huber Regressor can therefore help us predict the future net migration rate of a country as long as it doesn\u2019t present outlier values in one of its features."
    }), "\n", createVNode(_components.h3, {
      id: "linear-regression-with-quadratic-features",
      children: "Linear Regression with Quadratic Features"
    }), "\n", createVNode(_components.p, {
      children: "We will introduce a pipeline that transforms the features into a polynomial of degree 2 followed by a linear regression model. After fitting the data, the error metrics and learning curve of this model is shown below:"
    }), "\n", createVNode(_components.p, {
      children: ["R2: 0.98443, MSE: 1.83862, RMSE: 1.35596, MAE: 0.44821\n", createVNode(_components.img, {
        src: "/src/assets/ml_mig/plot3.png",
        alt: "Learning curve of the linear regression with quadratic features model"
      })]
    }), "\n", createVNode(_components.p, {
      children: "We can conclude that the performance of the polynomial regression model is similar to the plain linear regression. The mean squared error only decreased slightly, so we can be confident that there is no need to square the features of our dataset to improve the performance of our model (the relationship appears to be linear at best). When we tried increasing the degree of the polynomial, it significantly worsened the performance of the model."
    }), "\n", createVNode(_components.h3, {
      id: "elastic-net",
      children: "Elastic Net"
    }), "\n", createVNode(_components.p, {
      children: "According to the literature, \u201Cit is almost always preferable to have at least a little bit of regularization, so generally you should avoid plain Linear Regression. Ridge is a good default, but if you suspect that only a few features are actually useful, you should prefer Lasso or Elastic Net since they tend to reduce the useless features\u2019 weights down to zero\u201D (G\xE9ron 142)."
    }), "\n", createVNode(_components.p, {
      children: "Therefore, we will perform a hyperparameter tuning for an Elastic Net using Polynomial Features (considering that Elastic Nets are quickly modeled, we will directly perform a grid search without a random hyperparameter search). We are using a 10 times repeated 10-fold cross-validation. The hyperparameter grid is as follows:"
    }), "\n", createVNode($$Table1, {}), "\n", createVNode(_components.p, {
      children: "Keep in mind that when the polynomial degree is 1, it is equivalent to a stand alone Elastic Net model, alpha is the regularization parameter, and the closer the l1_ratio is to 1, the more the model behaves as a Lasso Regression and less like a Ridge Regression. After fitting 162 candidates, the code outputs the following as the best hyperparameters for the model."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'alpha'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0.05"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'l1_ratio'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1.0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'max_iter'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'tol'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0.001"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'degree'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "3"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'include_bias'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "True"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "We can conclude that the best model is a Lasso Regression (Elastic Net with l1_ratio equal to 1) with Polynomial Features of degree 3. This model might be preferable since the polynomial of degree 3 can capture many more combinations and nonlinear relations of the input features than a plain linear regression model. The Lasso Regression helps filter out the useless combination of features which also helps the model from overfitting (it reduces the useless features\u2019 weights to zero unlike the linear regression). After running the model with the above parameters, the error metrics and learning rate are shown below."
    }), "\n", createVNode(_components.p, {
      children: ["R2: 0.97814, MSE: 2.58095, RMSE: 1.60653, MAE: 0.50331\n", createVNode(_components.img, {
        src: "/src/assets/ml_mig/plot4.png",
        alt: "Learning curve of the Elastic Net model"
      })]
    }), "\n", createVNode(_components.p, {
      children: "While we are seeing a slight decrease in performance with this model, it has the advantage of being regularized to prevent over & under-fitting while capturing more complex relationships of the data than a plain linear regression (as confirmed by the hyperparameter tuning and cross-validation). We will also see later on that this model generalizes very well to the dataset without the time series."
    }), "\n", createVNode(_components.h2, {
      id: "decision-tree-regressor",
      children: "Decision Tree Regressor"
    }), "\n", createVNode(_components.p, {
      children: "We will perform a random hyperparameter search on the following parameters."
    }), "\n", createVNode($$Table2, {}), "\n", createVNode(_components.p, {
      children: "The randomized search with cross validation returns the following dictionary of best parameters:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'min_samples_split'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'min_samples_leaf'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "3"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'max_leaf_nodes'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "115"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'max_features'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'auto'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'max_depth'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "115"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Accordingly, we will narrow our search and provide a comprehensive grid search with the following parameters."
    }), "\n", createVNode($$Table3, {}), "\n", createVNode(_components.p, {
      children: "The grid search and cross validation outputs the following as the best hyperparameters."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'max_features'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'auto'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'max_depth'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "150"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'min_samples_split'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'min_samples_leaf'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'max_leaf_nodes'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "125"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "After creating a model with the above hyperparameters, the error metrics of the predicted feature and the learning curve of the model is shown below."
    }), "\n", createVNode(_components.p, {
      children: ["R2: 0.93394, MSE: 7.80085, RMSE: 2.79300, MAE: 0.88348\n", createVNode(_components.img, {
        src: "/src/assets/ml_mig/plot5.png",
        alt: "Learning curve of the Decision Tree Regressor model"
      })]
    }), "\n", createVNode(_components.p, {
      children: "The R2 score is still relatively close to 1, however we are observing a considerable increase in the mean squared error and mean absolute error. This increase is especially concerning since the distribution of the variables is close to 0: IQR of (-2,2). Therefore, a root mean squared error of around 2.8 isn\u2019t favorable. While it is true that the plain linear regression models (along with its variants) performed much better than the decision tree regressor, this model can help us interpret the rationale behind the machine learning prediction."
    }), "\n", createVNode(_components.h2, {
      id: "random-forest-regressor",
      children: "Random Forest Regressor"
    }), "\n", createVNode(_components.p, {
      children: "We will perform a random hyperparameter search on the following parameters."
    }), "\n", createVNode($$Table4, {}), "\n", createVNode(_components.p, {
      children: "The randomized search with cross validation returns the following dictionary of best parameters:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'bootstrap'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "False"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'max_depth'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "92"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'max_features'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'sqrt'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'min_samples_leaf'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'min_samples_split'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "6"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'n_estimators'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "25"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Accordingly, we will narrow our search and provide a comprehensive grid search with the following parameters."
    }), "\n", createVNode($$Table5, {}), "\n", createVNode(_components.p, {
      children: "The grid search and cross validation outputs the following as the best hyperparameters."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'bootstrap'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "True"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'max_depth'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "100"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'max_features'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'auto'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'min_samples_leaf'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'min_samples_split'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'n_estimators'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "100"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "After creating a model with the above hyperparameters, the error metrics of the predicted feature and the learning curve of the model is shown below."
    }), "\n", createVNode(_components.p, {
      children: ["R2: 0.96524, MSE: 4.10408, RMSE: 2.02585, MAE: 0.59007\n", createVNode(_components.img, {
        src: "/src/assets/ml_mig/plot6.png",
        alt: "Learning curve of the Random Forest Regressor model"
      })]
    }), "\n", createVNode(_components.p, {
      children: "As expected, the performance is boosted when using an ensemble of trees compared to only one decision tree. The mean squared error almost dropped in half and the mean absolute error dropped from 0.88 to 0.6. While the performance of the random forest regression is slightly worse than the linear regression models, it is a fairly reliable and robust model as we will see later when dealing with the inputs deprived of the time steps."
    }), "\n", createVNode(_components.h2, {
      id: "support-vector-regression",
      children: "Support Vector Regression"
    }), "\n", createVNode(_components.p, {
      children: "We will perform a random hyperparameter search on the following parameters."
    }), "\n", createVNode($$Table6, {}), "\n", createVNode(_components.p, {
      children: "The randomized search with cross validation returns the following dictionary of best parameters:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'C'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "7"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'kernel'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'linear'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Accordingly, we will narrow our search and provide a comprehensive grid search with the following parameters."
    }), "\n", createVNode($$Table7, {}), "\n", createVNode(_components.p, {
      children: "The grid search and cross validation outputs the following as the best hyperparameters."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'C'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'kernel'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'linear'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "After creating a model with the above hyperparameters, the error metrics of the predicted feature and the learning curve of the model is shown below."
    }), "\n", createVNode(_components.p, {
      children: ["R2: 0.98042, MSE: 2.31166, RMSE: 1.52041, MAE: 0.26166\n", createVNode(_components.img, {
        src: "/src/assets/ml_mig/plot7.png",
        alt: "Learning curve of the Support Vector Regression model"
      })]
    }), "\n", createVNode(_components.p, {
      children: "We can see that the SVR model was able to achieve a considerable decrease in the mean absolute error (almost half of the linear regression\u2019s error). However, according to the learning curve, for relatively few training data (less than 1,500 examples), the training error is worse than the cross-validation error. This hints at the possibility that the model is overfitting for small values of training examples, which might be due to the large value of C (10)."
    }), "\n", createVNode(_components.h2, {
      id: "feed-forward-neural-network",
      children: "Feed Forward Neural Network"
    }), "\n", createVNode(_components.p, {
      children: "We will create two neural network models to compare their performance: one with the scikit-learn module and another with the keras and tensorflow modules."
    }), "\n", createVNode(_components.h3, {
      id: "multilayer-perceptron-regressor-with-scikitlearn",
      children: "Multilayer Perceptron Regressor with ScikitLearn"
    }), "\n", createVNode(_components.p, {
      children: "We will perform a grid hyperparameter search with the following parameters and values."
    }), "\n", createVNode($$Table8, {}), "\n", createVNode(_components.p, {
      children: "The grid search and cross validation outputs the following as the best hyperparameters."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'activation'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'identity'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'hidden_layer_sizes'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "50"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ",),"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'max_iter'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "500"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    'solver'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'lbfgs'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "While we do believe that the identity activation function is sub-optimal (it doesn\u2019t allow for the complex patterns of passing through multiple layers), we will stick to the findings of the hyperparameter tuning and allow more freedom in the following keras neural network. After creating a model with the above hyperparameters, the error metrics of the predicted feature and the learning curve of the model is shown below."
    }), "\n", createVNode(_components.p, {
      children: ["R2: 0.98419, MSE: 1.86722, RMSE: 1.36646, MAE: 0.49410\n", createVNode(_components.img, {
        src: "/src/assets/ml_mig/plot8.png",
        alt: "Learning curve of the MLP model"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Surprisingly and as shown above, the MLP model performs similarly to the Linear Regression models: all the error metrics are very close to the plain Linear Regression model. We can safely conclude that fitting our dataset with a Multilayer Perceptron Regressor is unnecessary as the relationship between our features isn\u2019t very complex (a simple linear / polynomial relationship suffices)."
    }), "\n", createVNode(_components.h3, {
      id: "sequential-neural-network-with-keras",
      children: "Sequential Neural Network with Keras"
    }), "\n", createVNode(_components.p, {
      children: "We provide a build_model function to pass to the wrapper of KerasRegressor. That way, we can easily perform hyperparameter tuning and cross validation with the Keras module. The distribution of the hyperparameters is shown below."
    }), "\n", createVNode($$Table9, {}), "\n", createVNode(_components.p, {
      children: "Unfortunately, the random hyperparameter search took too long to yield any result (we left it running on Google Colab for a couple of hours in vain). Therefore, we will refer to the current literature when building our neural network."
    }), "\n", createVNode(_components.p, {
      children: "The neural network built will consist of one input layer with 20 neurons (to capture as much of the input features as possible), two hidden layers with 30 neurons each, and one output layer (of one neuron). The activation function of the layers will be the identity function for the input layer and the SELU activation function for the two hidden layers. In fact, according to a 2017 paper by G\xFCnter Klambauer et al., if all the hidden layers use the SELU activation function (scaled version of the ELU activation function), the network will self-normalize, solving the vanishing/exploding gradients problem. Therefore, we will follow their recommendation which also includes initializing the hidden layer\u2019s weights using the LeCun normal initialization. The following code represents our final model."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "model "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Sequential()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "model.add(Dense("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "20"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "input_shape"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "len"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(X_trainNorm["
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]),),"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "          activation"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'linear'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "model.add(Dense("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "30"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "activation"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'selu'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "kernel_initializer"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"lecun_normal"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "model.add(Dense("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "30"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "activation"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'selu'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "kernel_initializer"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"lecun_normal"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "model.add(Dense("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Concerning the optimizer, we will use the Nadam optimizer (Adam\u2014adaptive moment estimation\u2014optimizer with Nesterov Momentum), as it is recommended by the literature because \u201Cit will often converge slightly faster than Adam\u201D (G\xE9ron 351)."
    }), "\n", createVNode(_components.p, {
      children: "After creating the neural network model with the above hyperparameters, the error metrics of the predicted feature and the learning curve of the model is shown below."
    }), "\n", createVNode(_components.p, {
      children: ["R2: 0.98136, MSE: 2.20120, RMSE: 1.48364, MAE: 0.44678\n", createVNode(_components.img, {
        src: "/src/assets/ml_mig/plot9.png",
        alt: "Learning curve of the Sequential Neural Network model"
      })]
    }), "\n", createVNode(_components.p, {
      children: "In line with our results from the previous MLP model, the sequential neural network doesn\u2019t outperform the other machine learning model. As mentioned previously, this might be due to the fact that the relationship between the input features is fairly simple, so that a simple linear regression model can easily capture this pattern without the need for an overly advanced artificial neural network model."
    }), "\n", createVNode(_components.h2, {
      id: "summary-of-the-error-metrics",
      children: "Summary of the Error Metrics"
    }), "\n", createVNode(_components.p, {
      children: "For convenience, we provide below a summary table of the error metrics of all the machine learning models considered. We can observe that the Huber Regressor and Support Vector Regression are able to achieve the lowest mean absolute error (around 0.23 and 0.26 respectively). However, the plain linear regression and the linear regression with quadratic features are able to achieve the lowest mean squared error (around 1.84 each)."
    }), "\n", createVNode($$Table10, {}), "\n", createVNode(_components.h2, {
      id: "interpretation-of-the-linear-regression-and-decision-tree",
      children: "Interpretation of the Linear Regression and Decision Tree"
    }), "\n", createVNode(_components.p, {
      children: "We will briefly interpret the linear regression and the decision tree model to better understand how our machine learning models make their prediction. Shown below are the list of coefficients of the linear regression model, a bar plot of the feature importance of the decision tree, and a subset of the decision tree path of the model."
    }), "\n", createVNode($$Table11, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/src/assets/ml_mig/plot10.png",
        alt: "Feature importance of the Decision Tree model"
      })
    }), "\n", createVNode($$HyperLinkedImage, {
      src: "/src/assets//ml_mig/mig.svg",
      alt: "Decision Tree model"
    }), "\n", createVNode(_components.p, {
      children: "As can be seen from the coefficient table, bar plot, and tree nodes, the models give the two previous time steps the most importance. The immediate previous time step (Prev1) seems to dominate the rationale of the model. For the linear regression model, the Life Expectancy, DALYs, and GDP seem to have the most weights from the other input features (the features have been standardized to allow for a direct comparison of the coefficients without inspecting the scales of the feature). For the decision tree model, the Inflation feature seems to be the most important factor from the rest of the input features for the decision tree (while still having an overly low importance relative to the time steps). However, the other input features (HDI, Continent, Life Expectancy, DALYs, etc\u2026) seem to have a negligible effect on the model prediction."
    }), "\n", createVNode(_components.p, {
      children: "Does this mean that a country is doomed by its previous net migration rate? If most of the prediction can be generated by just looking at the previous two time steps (since they have the largest coefficients and relative importance), how can a country target its policy to prevent a sudden emigration from its land?"
    }), "\n", createVNode(_components.h2, {
      id: "model-fitting-without-time-steps",
      children: "Model Fitting without Time Steps"
    }), "\n", createVNode(_components.p, {
      children: "Since the above interpretation isn\u2019t satisfying for the purpose of our project, we will remove the previous time steps from our model and follow the same guidelines above to tune the hyperparameters of the model and observe the change in performance so that we can provide a more useful interpretation of the model that doesn\u2019t take into consideration the previous time steps. After performing the random and grid hyperparameter search with cross validation, we fit the models with the dataset. We provide below the error metrics of the models, the coefficients of the linear regression model, and the feature importance of the decision tree."
    }), "\n", createVNode($$Table12, {}), "\n", createVNode($$Table13, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/src/assets/ml_mig/plot11.png",
        alt: "Feature importance of the Decision Tree model without time steps"
      })
    }), "\n", createVNode(_components.p, {
      children: "As seen above, it appears that the DALYs, Life Expectancy, Mortality, Healthcare expenditure, Inflation, and GDP seem to be the most significant features considering their considerable weight in the linear regression model and in the bar plot of the feature importance for the decision tree. The HDI and Continent categories seem to play a negligible role (as their weight is in the order of 1014 and 1012 respectively, and they are barely shown in the bar plot above). This is good news! countries can\u2019t change the continent in which they are located, so our model shows that a nation isn\u2019t doomed by the continent in which it is located. Additionally, it often takes years of hard work for a country to improve its Human Development Index, because this index spans multiple economic, educational, and social sectors of life. This interpretation was able to show that if countries focus on the other features (DALYs, GDP, Inflation, etc\u2026), they can produce tangible change in preventing a migration crisis."
    }), "\n", createVNode(_components.p, {
      children: "Concerning the performance of the model, as expected the performance decreased significantly for nearly all models. Removing the time steps seriously weakens the models. However, through this analysis, we are able to detect the most robust models who still performed relatively strongly without the time steps (which could help countries that don\u2019t regularly or accurately measure their net migration rate, so they can\u2019t rely on their previous time steps). Those robust models are: Elastic Net with Polynomial Features (degree 4), Decision Tree Regressor, Random Forest Regressor, and the Feed Forward Neural Network. It is striking that the decision tree and random forest models were able to achieve comparable results without the time steps unlike the other models."
    }), "\n", createVNode(_components.p, {
      children: "In conclusion, we strongly recommend the usage of an Elastic Net with Polynomial Features or a Random Forest Regression model in the task of predicting the net migration rate from the features considered in this project. These two models proved to be strongly robust and performed the best on the task at hand. We believe there is no need for an overly complex model like a Support Vector Regressor or an Artificial Neural Network as the relationship among our features is fairly simple."
    }), "\n", createVNode(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", createVNode(_components.p, {
      children: "\u201CHands-on Machine Learning with Scikit-Learn, Keras & TensorFlow,\u201D Aur\xE9lien G\xE9ron (2019)."
    }), "\n", createVNode(_components.p, {
      children: "\u201CIncorporating Nesterov Momentum into Adam,\u201D Timothy Dozat (2015)."
    }), "\n", createVNode(_components.p, {
      children: "\u201CSelf-Normalizing Neural Networks,\u201D G. Klambauer, T. Unterthiner and A. Mayr (2017)."
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/projects/ML-migration.mdx";
const file = "/Users/elirizk/Desktop/Personal Website/public_site/src/content/projects/ML-migration.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/elirizk/Desktop/Personal Website/public_site/src/content/projects/ML-migration.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
