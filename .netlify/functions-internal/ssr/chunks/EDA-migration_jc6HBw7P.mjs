import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_BaztoWCL.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_Cil9EYOi.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                                                   */
/* empty css                                                                */

const $$Astro$1 = createAstro("https://elirizk.me");
const $$EmbeddedMap = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EmbeddedMap;
  const { id, path } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<embed${addAttribute(id, "id")}${addAttribute(path, "src")} type="text/html" data-astro-cid-cp56u773> `;
}, "/Users/elirizk/Desktop/Personal Website/public_site/src/components/EmbeddedMap.astro", void 0);

const $$Astro = createAstro("https://elirizk.me");
const $$Selector = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Selector;
  const { id, options } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<select${addAttribute(id, "id")} data-astro-cid-6y2jruhg> ${options.map(
    (option) => renderTemplate`<option class="option"${addAttribute(option, "value")}${addAttribute(option === 2020, "selected")} data-astro-cid-6y2jruhg> ${option} </option>`
  )} </select> `;
}, "/Users/elirizk/Desktop/Personal Website/public_site/src/components/Selector.astro", void 0);

const frontmatter = {
  "title": "Exploratory Data Analysis for Predicting Migration Rate from Socio-economic Factors",
  "description": "In this post we will apply exploratory data analysis concepts to the problem of predicting a country\u2019s net migration rate as a time series from its socio-economic factors.",
  "pubDate": "Apr 27 2022",
  "heroImage": "src/assets/eda_mig/hero.png",
  "tags": ["Data Analysis", "Data Visualization", "R", "Python", "Pandas", "Matplotlib"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 2,
    "slug": "feature-correlation",
    "text": "Feature Correlation"
  }, {
    "depth": 2,
    "slug": "data-analysis-with-r",
    "text": "Data Analysis with R"
  }, {
    "depth": 3,
    "slug": "feature-distribution",
    "text": "Feature Distribution"
  }, {
    "depth": 4,
    "slug": "net-migration-rate-per-year",
    "text": "Net Migration Rate per Year"
  }, {
    "depth": 4,
    "slug": "dalys",
    "text": "DALYs"
  }, {
    "depth": 4,
    "slug": "gdp-growth",
    "text": "GDP Growth"
  }, {
    "depth": 4,
    "slug": "inflation",
    "text": "Inflation"
  }, {
    "depth": 3,
    "slug": "data-aggregation",
    "text": "Data Aggregation"
  }, {
    "depth": 4,
    "slug": "aggregation-by-hdi-level",
    "text": "Aggregation by HDI Level"
  }, {
    "depth": 4,
    "slug": "aggregation-by-continent",
    "text": "Aggregation by Continent"
  }, {
    "depth": 3,
    "slug": "variation-of-the-features-in-specific-countries",
    "text": "Variation of the features in specific countries"
  }, {
    "depth": 4,
    "slug": "net-migration-and-inflation",
    "text": "Net migration and Inflation"
  }, {
    "depth": 4,
    "slug": "net-migration-and-neighboring-countries",
    "text": "Net migration and neighboring countries"
  }, {
    "depth": 2,
    "slug": "data-analysis-with-python",
    "text": "Data Analysis with Python"
  }, {
    "depth": 3,
    "slug": "scatter-plots",
    "text": "Scatter Plots"
  }, {
    "depth": 3,
    "slug": "animated-heatmap-of-migration",
    "text": "Animated Heatmap of Migration"
  }, {
    "depth": 3,
    "slug": "stacked-maps-of-the-features",
    "text": "Stacked Maps of the features"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
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
    h4: "h4",
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
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: "In this project, we will perform data analysis followed by ML model fitting to predict a country\u2019s net migration rate as a time series from socio-economic factors. The following are some useful definitions to keep in mind."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Net migration rate"
      }), ": the difference between the number of migrants entering and those leaving a country in a year, per 1,000 midyear population (U.S. Census definition). If the rate is positive, it indicates more people leaving the country than entering it (net immigration rate), and if it is negative, it indicates more people entering the country than leaving it (net emigration rate)."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "DALYs"
      }), " (Disability-Adjusted Life Years): One DALY represents the loss of the equivalent of one year of full health. DALYs for a disease or health condition are the sum of the years of life lost due to premature mortality (YLLs) and the years lived with a disability (YLDs) due to prevalent cases of the disease or health condition in a population (WHO)."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "HDI"
      }), " (Human Development Index): A composite index measuring average achievement in three basic dimensions of human development: healthcare, education, and economic situation (UNDP)."]
    }), "\n", createVNode(_components.p, {
      children: ["Other socio-economic factors which include ", createVNode(_components.strong, {
        children: "GDP"
      }), ", ", createVNode(_components.strong, {
        children: "Life Expectancy"
      }), ", ", createVNode(_components.strong, {
        children: "Inflation"
      }), ", ", createVNode(_components.strong, {
        children: "Mortality"
      }), ", and ", createVNode(_components.strong, {
        children: "Healthcare expenditure"
      }), " (collected from the World Bank) will also guide us in performing our data analysis and ML training."]
    }), "\n", createVNode(_components.p, {
      children: ["The final dataset can be found ", createVNode(_components.a, {
        href: "https://github.com/elirizk/ML-for-Predicting-Migration/blob/master/Dataset.csv",
        children: "here"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "feature-correlation",
      children: "Feature Correlation"
    }), "\n", createVNode(_components.p, {
      children: "At first, we have to look at the correlation of the different features to get a sense of how the features interact with each other, which will help guide us through the exploratory data analysis. After reading the dataset into a Pandas data frame, we obtain the following correlation matrix."
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
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " pandas "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "as"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " pd  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "df "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " pd.read\\"
          }), createVNode(_components.span, {
            style: {
              color: "#FDAEB7",
              fontStyle: "italic"
            },
            children: "_csv('Dataset.csv', header=0)  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "df.corr()"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/src/assets/eda_mig/df_desc.png",
        alt: "DataFrame columns description"
      })
    }), "\n", createVNode(_components.p, {
      children: "One one level, we can look at how the various features correlate with the net migration rate. The year variable has a near zero correlation with the net migration rate, which is a good aspect of our dataset. It points to the fact that the distribution of the net migration rate is independent of the year considered. However, the main factors correlated with the net migration rate are the Human Development Index (HDI), Mortality, and disability-adjusted life years (DALYs). The former indicator correlates positively with the migration while the two latter indicators correlate negatively. This makes sense as the higher the country is developed, the more immigrants might come into the country. While the higher the mortality and DALYs are, the more likely the country is to experience a loss of citizens through emigration. The other indicators, namely life expectancy, healthcare expenditure, and GDP seem to have limited correlation with the output feature. The inflation indicator has the lowest correlation (-0.5%) which might push us to eliminate the column altogether from the data. However, we still have to aggregate the data and visualize it to make that decision."
    }), "\n", createVNode(_components.p, {
      children: "Another important aspect to note is how the input features correlate among each other. For example, the HDI and life expectancy seem to highly correlate (91%). In fact, one of the factors taken into consideration when calculating the HDI of a country by the UN is the life expectancy in that country. Hence, it makes total sense for these two indicators to correlate. However, we might have to remove one of them when training a machine learning model on the data, or alternatively merge the two columns. Unexpectedly also, mortality and DALYs are highly correlated (67%): they both indicate the development of the health sector in a country. The variables HDI and DALYs are also highly correlated (-80%). We will keep a close look at all the above features throughout the EDA so that we can conclude on whether to remove on of the above features or merge them together through dimensionality reduction at a later stage."
    }), "\n", createVNode(_components.h2, {
      id: "data-analysis-with-r",
      children: "Data Analysis with R"
    }), "\n", createVNode(_components.p, {
      children: ["We will perform the first part of our analysis using R. We will have to import the necessary library to visualize our plots (using ", createVNode(_components.em, {
        children: "ggplot2"
      }), ") and read our dataset. We will also transform the ", createVNode(_components.em, {
        children: "Year"
      }), " column into a Date type in R, divide the ", createVNode(_components.em, {
        children: "HDI"
      }), " from numerical to categorical (low, medium, high or very high), and remove any entry with unknown continent code."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "r",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "library"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(ggplot2)  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "setwd"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"dataset'
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\_"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: 'directory"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "df "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<-"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " read.csv"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"Dataset.csv"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "header"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "TRUE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "na.strings"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' ""'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "for"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (i "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "in"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " seq\\"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "_len"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "length"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(df"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Year))) {  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  df"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Year\\[i\\] "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "paste"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"01-01-"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "as.character"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(df"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Year\\[i\\]),"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "sep"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '""'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "))  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "df"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Year "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<-"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " as.Date"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(df"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Year, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "format"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"%d-%m-%Y"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "unique"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(df"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Year)  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "sapply"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(df, class)  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "df"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "HDI "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<-"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " sapply"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(df"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "HDI, cut, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "breaks"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " c"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0.55"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0.7"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0.8"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "),  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "               labels"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " c"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"Low"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"Medium"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"High"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"Very High"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "))  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "df "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<-"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " subset"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(df, df"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Continent.Code"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "!="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"Unknown"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "feature-distribution",
      children: "Feature Distribution"
    }), "\n", createVNode(_components.p, {
      children: "We will plot the distribution of some of the features throughout the years. The following R code plots the corresponding figures."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "r",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ggplot"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(df, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "aes"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Year, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "y"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Net.Migration.Rate, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "group"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Year)) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  geom\\"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "_boxplot"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  coord\\"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "_cartesian"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ylim"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "c"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "50"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "50"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  labs"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "title"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Variation of Net Migration Rate per Year"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ",  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "       y"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Net Migration Rate"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Year"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ggplot"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(df\\[df"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "DALYs"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "150000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ",\\], "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "aes"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Year, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "y"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "DALYs, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "group"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Year)) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  geom\\"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "_boxplot"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  labs"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "title"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Variation of DALYs per Year"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ",  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "       y"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "DALYs"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Year"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ggplot"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(df, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "aes"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Year, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "y"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "GDP, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "group"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Year)) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  geom\\"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "_boxplot"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  coord\\"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "_cartesian"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ylim"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "c"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "30"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "30"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  labs"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "title"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Variation of GDP growth per Year"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ",  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "       y"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "GDP growth (%)"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Year"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ggplot"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(df, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "aes"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Year, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "y"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Inflation, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "group"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Year)) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  geom\\"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "_boxplot"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  coord\\"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "_cartesian"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ylim"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "c"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "25"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "110"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  labs"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "title"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Variation of Inflation per Year"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ",  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "       y"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Inflation, consumer prices (annual %)"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Year"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "net-migration-rate-per-year",
      children: "Net Migration Rate per Year"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/src/assets/eda_mig/graph1.png",
        alt: "distribution of net migration per year"
      })
    }), "\n", createVNode(_components.p, {
      children: "As we can see the median of this distribution remains roughly stable throughout the years: it stays around 0. It is also clear how there are a lot of outliers in this distribution. This is expected since a large positive migration rate in one country should translate into a negative migration rate in other countries (the immigrants of one are the emigrants of the other). The fact that the median is stable around 0 from 1960 till 2020 confirms the reliability of the data."
    }), "\n", createVNode(_components.h4, {
      id: "dalys",
      children: "DALYs"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/src/assets/eda_mig/graph2.png",
        alt: "distribution of DALYs per year"
      })
    }), "\n", createVNode(_components.p, {
      children: "Concerning the boxplot of the DALYs, the data presents a decrease in the median and standard deviation of the DALYs with the progress of the years. This shows the overall increase in the quality of healthcare around the globe, which explains the decrease in the DALYs. The data has become more concentrated in recent years (decrease in the standard deviation) which might be due to globalization and recent efforts by the UN to better the living conditions of underdeveloped nations."
    }), "\n", createVNode(_components.h4, {
      id: "gdp-growth",
      children: "GDP Growth"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/src/assets/eda_mig/graph3.png",
        alt: "distribution of GDP growth per year"
      })
    }), "\n", createVNode(_components.p, {
      children: "Concerning the boxplot of the GDP growth (as a percentage) per year, we can see the fluctuations of this feature throughout the years. The median fluctuates around 5% with occasional downfalls. We can point out specific years where the fall of the GDP growth was expected. For example, the US stock market crash of 2008, which affected most countries, caused a sharp decline of the GDP growth in that year. Additionally, the 2020 Coronavirus Stock Market Crash is also clearly visible in the boxplot where the median GDP growth of countries becomes negative for the first time since 1960, which indicates an overall decline in the GDP in most countries of the world due to the pandemic."
    }), "\n", createVNode(_components.h4, {
      id: "inflation",
      children: "Inflation"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/src/assets/eda_mig/graph4.png",
        alt: "distribution of inflation per year"
      })
    }), "\n", createVNode(_components.p, {
      children: "Concerning inflation, it is striking to see that in early and later years (1960\u20131970 and 2000\u20132020) the median inflation fluctuates a bit above 0 and the standard deviation is smaller to the other periods. However from 1970 till 2000, we see that the data becomes more dispersed and that the median inflation is significantly larger than before 1970 or after 2000. This might be due to the fact that during this period, a lot of countries experienced political and economical crises, which skewed the data towards having a larger inflation. We can clearly see a large number of outliers in the data too, which confirms our hypothesis."
    }), "\n", createVNode(_components.h3, {
      id: "data-aggregation",
      children: "Data Aggregation"
    }), "\n", createVNode(_components.p, {
      children: "We will perform data aggregation according to the HDI level as well as the country\u2019s continent."
    }), "\n", createVNode(_components.h4, {
      id: "aggregation-by-hdi-level",
      children: "Aggregation by HDI Level"
    }), "\n", createVNode(_components.p, {
      children: "First the UN divides the HDI into four levels: low, medium, high, and very high. After aggregating according to this classification, we can visualize the variation of the Net migration rate per year per HDI level using the R code below."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "r",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "agg1 "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<-"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " aggregate"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "cbind"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(Net.Migration.Rate) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "~"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " HDI"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Year, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "data"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "df, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "FUN"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "mean)  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ggplot"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(agg1, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "aes"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Year, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "y"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Net.Migration.Rate, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "color"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "HDI)) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  geom\\"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "_line"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "stat"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"identity"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "lwd"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1.2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  geom\\"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "_smooth"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "linetype"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  labs"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "title"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Variation of Net Migration per Year"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ",  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "       subtitle"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Divided according to HDI"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ",  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "       y"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Net Migration Rate"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' ""'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/src/assets/eda_mig/graph5.png",
        alt: "Variation of the net migration rate per HDI level and year"
      })
    }), "\n", createVNode(_components.p, {
      children: "We can clearly see a distinction of this evolution according to the HDI level of the countries. As expected, the countries with a very high HDI have the greatest net migrant rate: a lot of immigrants come to highly developed countries. However, there is a decline in this rate starting in 2010. This might be due to stricter immigration policies."
    }), "\n", createVNode(_components.p, {
      children: "We can also point out that countries who have a high HDI rank second in terms of migration rate. However, it is worthy to note that while this rate was positive in 1990, it decreased slowly to become negative in 2020. One hypothesis might be that some countries who had a high HDI in 1990 progressed and developed into having a very high HDI, climbing up the HDI ranking, while the remaining countries might have faced national difficulties preventing them from increasing their HDI. Hence, this decreased the overall average of the net migrant rate of high HDI countries (similar to what a sampling bias might do to the statistic)."
    }), "\n", createVNode(_components.p, {
      children: "Surprisingly, although countries with a low and medium HDI present a negative net migration rate, countries with a medium HDI have the lowest rate. Why aren\u2019t countries with a low HDI with the lowest net migration rate? This might be due to the fact that extremely underdeveloped countries do not allow their citizens to emigrate freely from the country. For instance, African and Asian countries with very low HDI might suffer from conservative norms and low education and financial status, preventing them from immigration (such as the African tribes and Arab Bedouins) or it could even be a political regime prohibiting emigration."
    }), "\n", createVNode(_components.h4, {
      id: "aggregation-by-continent",
      children: "Aggregation by Continent"
    }), "\n", createVNode(_components.p, {
      children: "Furthermore, we can split the data according to the six continents: Asia (AS), Africa (AF), Europe (EU), North America (NA), South America (SA), and Oceania (OC). The code below does this aggregation."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "r",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "agg2 "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<-"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " aggregate"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "cbind"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(Net.Migration.Rate) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "~"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Continent.Code"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Year, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "data"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "df, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "FUN"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "mean)  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "ggplot"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(agg2\\[,\\], "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "aes"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Year, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "y"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Net.Migration.Rate, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "color"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Continent.Code)) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  geom\\"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "_line"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "stat"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"identity"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "lwd"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "alpha"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0.5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "linetype"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  #facet\\_wrap(~ Continent.Code) +  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  geom\\"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "_smooth"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "linetype"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  labs"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "title"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Variation of Net Migration per Year"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ",  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "       subtitle"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Divided according to Continent"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ",  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "       y"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Net Migration Rate"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Year"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/src/assets/eda_mig/graph6.png",
        alt: "Variation of the net migration rate per continent and year"
      })
    }), "\n", createVNode(_components.p, {
      children: "We don\u2019t see a strong correlation between the continents. Most continents have a negative migration rate, except for Asia. This might be due to the fact that most immigration happens between neighboring countries in the same continent. For instance, Syrians fleeing war to Lebanon, Venezuelans fleeing the inflation to Columbia, Mexicans immigrating to the USA, Ukrainians fleeing the Russian war to Poland and Moldova. All these examples strengthen our hypothesis that migration is concentrated among neighboring countries. Hence, the emigrants of a country get translated into immigrants for the neighboring country, in the same continent: resulting in an overall fluctuation of the net migration rate around 0 for most continents, especially in the past two decades i.e., from 2000 till 2020. We will try applying this theory when visualizing the migration rates through maps."
    }), "\n", createVNode(_components.h3, {
      id: "variation-of-the-features-in-specific-countries",
      children: "Variation of the features in specific countries"
    }), "\n", createVNode(_components.p, {
      children: "We will visualize the effect of inflation on net migration through the case study of a few countries in order to generalize on the interplay of the different features."
    }), "\n", createVNode(_components.h4, {
      id: "net-migration-and-inflation",
      children: "Net migration and Inflation"
    }), "\n", createVNode(_components.p, {
      children: "We will visualize the effect of inflation on net migration through their variation in two countries: Honduras, a country in Central America, and Iraq, a middle eastern country in Asia. The time series of this evolution can be shown below."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "r",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "countryName "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<-"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Honduras"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "plot1 "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<-"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " ggplot"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(df\\[df"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Country.Name"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "countryName,\\], "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "aes"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Year, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "y"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Inflation)) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  geom\\"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "_line"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "stat"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"Identity"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  geom\\"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "_smooth"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  labs"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "title"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Variation of Net Migration and Inflation"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ",  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "       y"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Inflation, consumer prices (annual %)"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' ""'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "subtitle"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " countryName)  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "plot2 "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<-"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " ggplot"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(df\\[df"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Country.Name"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "countryName,\\], "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "aes"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Year, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "y"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Net.Migration.Rate)) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  geom\\"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "_line"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "stat"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"Identity"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  geom\\"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "_smooth"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  labs"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "y"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Net Migration Rate"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Year"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "countryName "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<-"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Iraq"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "plot3 "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<-"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " ggplot"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(df\\[df"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Country.Name"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "countryName,\\], "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "aes"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Year, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "y"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Inflation)) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  geom\\"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "_line"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "stat"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"Identity"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  geom\\"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "_smooth"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  labs"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "title"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Variation of Net Migration and Inflation"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ",  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "       y"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Inflation, consumer prices (annual %)"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' ""'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "subtitle"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " countryName)  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "plot4 "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<-"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " ggplot"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(df\\[df"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "$"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Country.Name"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "countryName,\\], "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "aes"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Year, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "y"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Net.Migration.Rate)) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  geom\\"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "_line"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "stat"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: '"Identity"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  geom\\"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "_smooth"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  labs"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "y"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Net Migration Rate"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ' "Year"'
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")  "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "gridExtra"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "::"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "grid.arrange"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(plot1, plot3, plot2, plot4,"
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "nrow"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/src/assets/eda_mig/graph7.png",
        alt: "Variation of the net migration rate and inflation in Honduras and Iraq"
      })
    }), "\n", createVNode(_components.p, {
      children: "The negative correlation between these two variables is clear: an increase in inflation correlates with a decrease in the net migration rate and vice versa in the two countries. When these countries experience a peak in inflation, it correlates with a significant decrease in the net migration i.e., an increase in the number of emigrants fleeing the country. When this inflation decreases, the net migration rate increases, signifying either that the emigrants are coming back to the country or that new immigrants are coming into the country due to the stabilization of the economical situation in this nation."
    }), "\n", createVNode(_components.h4, {
      id: "net-migration-and-neighboring-countries",
      children: "Net migration and neighboring countries"
    }), "\n", createVNode(_components.p, {
      children: "Furthermore, it is interesting to visualize the evolution of net migration in neighboring countries, especially those undergoing economical, financial or political crises. The graphs below shows the variation of the net migration for Venezuela & Colombia, and for Mexico and the United States. As a historical background, we should consider that since 1970 Colombians have been fleeing to Venezuela to avoid the violent conflict of their homeland. However, as of 2016, the roles have been reversed: Venezuelans have been immigrating to Colombia because of the terrible financial crises of their country."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/src/assets/eda_mig/graph8.png",
        alt: "Variation of the net migration rate between Venezuela & Columbia and Mexico & the United States"
      })
    }), "\n", createVNode(_components.p, {
      children: "This trend is clearly shown in the data, whereas in early years the net migration of Colombia was negative but that of Venezuela positive. However, in recent years, the migration rate has been increasing in Colombia and decreasing in Venezuela (due to the mass immigration of Venezuelans to Colombia). The sharp decrease in this rate in Venezuela coincides with its spike in Colombia (around 2016\u20132020), which confirms our hypothesis."
    }), "\n", createVNode(_components.p, {
      children: "While the situation in Colombia and Venezuela might be considered as an outlier, we can see a similar trend when neighboring countries have a huge disparity in economical or developmental opportunities. For instance, in Mexico and the United States, the variation of their net migration rate coincides with each other (whereas a sharp increase in one reflects a decrease in the other, especially around the year 2000)."
    }), "\n", createVNode(_components.p, {
      children: "A similar trend can be seen in other neighboring countries, e.g. Albania & Greece, Bangladesh & India, Syria & Lebanon, Oman & Yemen. The spike in the migration rate in one of these countries is correlated with a fall in its neighboring country around the same period. The widespread nature of this phenomena (which we can\u2019t disregard as being a few outliers) will necessitate us to encode spatial locality in our model to consider the features of the neighboring countries (including the net migration rate) in order to predict the final migration rate of the given country."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.img, {
        src: "/src/assets/eda_mig/graph9.png",
        alt: "Variation of the net migration rate between Albania & Greece and Bangladesh & India"
      }), "\n", createVNode(_components.img, {
        src: "/src/assets/eda_mig/graph10.png",
        alt: "Variation of the net migration rate between Yemen & Oman and Syria & Lebanon"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "data-analysis-with-python",
      children: "Data Analysis with Python"
    }), "\n", createVNode(_components.p, {
      children: "We will now plot the data as scatter plots and visualize it on maps using Python."
    }), "\n", createVNode(_components.h3, {
      id: "scatter-plots",
      children: "Scatter Plots"
    }), "\n", createVNode(_components.p, {
      children: "First, we will divide the countries into their HDI rank and plot them according to their net migration rate, GDP growth and Inflation percentage. The three dimensional scatter plot can be shown below."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/src/assets/eda_mig/graph11.png",
        alt: "3D scatter plot of the net migration rate, inflation and GDP"
      })
    }), "\n", createVNode(_components.p, {
      children: "As expected, the countries with a high net migration rate also happen to have a high HDI, a high GDP growth and a low inflation percentage, whereas countries with a negative migrant rate are mostly underdeveloped and suffer from a low GDP growth and a high inflation."
    }), "\n", createVNode(_components.p, {
      children: "Next, we will visualize the scatter plot of net migration rate, DALYs, and mortality."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/src/assets/eda_mig/graph12.png",
        alt: "3D scatter plot of the net migration rate, DALYs and mortality"
      })
    }), "\n", createVNode(_components.p, {
      children: "Considering the high correlation of DALYs and mortality, we expect to see a clear distinction in the plot. As expected the countries with a high DALYs also have a high mortality and vice versa. We can clearly see in the plot that highly developed countries with low DALYs and mortality experience a high migrant rate whereas underdeveloped countries with high DALYs and mortality suffer from an increased number of emigration (negative net migration rate)."
    }), "\n", createVNode(_components.p, {
      children: "We are also able to animate this scatter plot by year to visualize the variation in those different features as a time series. You can refer to the code on GitHub to generate this scatter plot animation. Through this animation, we can learn about the yearly trends of the data. We notice that the DALYs and mortality tend to decrease from year to year and that the GDP growth fluctuates around 0 and 10% for most years except for its occasional fall during a market crash (e.g. 2008\u20132009 and 2020). Concerning the inflation, before 200 we can see a considerable dispersion of the data (indicating a large standard deviation) while after the year 2000 countries become closer in regards to the percentage of inflation. All these insights confirm what we deduced at the beginning from the boxplots of the distribution of the features in prior project section."
    }), "\n", createVNode(_components.p, {
      children: "Variation of migration according to DALYs, Mortality (social factors), and HDI"
    }), "\n", createVNode(_components.p, {
      children: "Variation of migration according to GDP, inflation (economic factors), and HDI"
    }), "\n", createVNode(_components.h3, {
      id: "animated-heatmap-of-migration",
      children: "Animated Heatmap of Migration"
    }), "\n", createVNode(_components.p, {
      children: ["Considering the spatial and temporal features of our dataset, the best way to visualize the data would be through an animated world map. To do so, we will use the ", createVNode(_components.em, {
        children: "geopandas"
      }), " python module and merge our dataset with the world dataset available through the module. That way, the resulting dataset will include the appropriate country names and geometries so that it can be easily converted into a folium Map. Besides doing so, the ", createVNode(_components.em, {
        children: "prepForHeatMap"
      }), " function normalizes the net migration rate because the weight input of the ", createVNode(_components.em, {
        children: "HeatMap"
      }), " function must be between 0 and 1. The normalization disregards the outliers (with a z-score above 3 or below -3) when calculating the normal score, and then substitutes those with a z-score above 3 with a score of 1 and those below -3 with a score of 0. That way the outliers won\u2019t skew the normal distribution while staying in the data (so that we don\u2019t end up with missing countries on the map). Refer to the GitHub code for details about the implementation in the ", createVNode(_components.em, {
        children: "GetMap.py"
      }), " file."]
    }), "\n", createVNode(_components.p, {
      children: "The purple countries are the ones with a low migration rate while the green ones have a high migration rate. This map gives us an overview of the migration flow in the year 2020. The most popular destinations for immigrants appear to be the US, Canada, Eastern Europe, Australia & New Zealand (not shown in the figure) and the Arab states of the Persian Gulf (Saudi Arabia, Kuwait, UAE). There are a few outliers in the map, namely the countries of central America who are accepting Venezuelans immigrants suffering from the crisis of their country along with Lebanon who housed the Syrian immigrants fleeing war."
    }), "\n", createVNode($$EmbeddedMap, {
      path: "/public_assets/heat_map.html"
    }), "\n", createVNode(_components.h3, {
      id: "stacked-maps-of-the-features",
      children: "Stacked Maps of the features"
    }), "\n", createVNode(_components.p, {
      children: ["We can also stack multiple features on a static ", createVNode(_components.em, {
        children: "FoliumMap"
      }), " by running the Jupyter notebook ", createVNode(_components.em, {
        children: "GenerateMap.ipynb"
      }), " on Github.\nAfter doing so, we end up with the folder ", createVNode(_components.em, {
        children: "StackedMaps"
      }), " filled with the static maps for every year from 1990\nuntil 2020. We can select the specific feature we want to see its distribution throughout the world map.\nWhen we hover over the country, we can check the Migration rate of the country, which is implemented into\nthe map to clarify the visualization of the data. As such, we obtain the following map displaying the features for each year."]
    }), "\n", createVNode(_components.p, {
      children: ["Select the year you want to visualize the map for: ", createVNode($$Selector, {
        id: "year",
        options: [...Array(31).keys()].map(i => i + 1990)
      })]
    }), "\n", createVNode($$EmbeddedMap, {
      id: "stacked-map",
      path: `/public_assets/stacked_maps/2020.html`
    }), "\n", createVNode(_components.p, {
      children: "For example, for the year 2020 and when \u201CNet Migration Rate\u201D is selected, the darker the country is,\nthe bigger the migration rate and the lighter the color, the smaller the rate.\nAs expected, the countries with a high migration rate are mostly the countries of\nWestern Europe, North America, Australia, and the Arab gulf.\nThere are a few countries in South America, Asia, and Africa suffering from a\nlow migration rate. We will see if this data correlates with our other\nfeatures by deselecting the migration rate and selecting the other features."
    }), "\n", createVNode(_components.p, {
      children: "Now, let\u2019s take a look at the distribution of inflation and its correlation with the above results.\nPicking the year 2008, the figure showing the inflation and migration per country confirms our earlier hypothesis:\nthe larger the inflation, the lower the migration rate."
    }), "\n", createVNode(_components.p, {
      children: "For example, Argentina (the dark purple country in Southern America) who suffered from a large inflation in\n2008 had a net migration rate of -0.625. The rest of the countries show a similar correlation."
    }), "\n", createVNode(_components.p, {
      children: "In addition and as expected, countries suffering from a high mortality and high DALYs (like the Central African Republic, Afghanistan, Nigeria, etc\u2026) also suffer from a low migration rate: a lot of emigrants are flying out of the country."
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "Throughout this project, we were able to clearly visualize how the different features interact with each other, guiding us in formulating a clear hypothesis before selecting and training a machine learning model. In the next part of this post, we will train various machine learning models and compare their performance as well as their explainability to reach a final recommendation as to how to predict a country\u2019s net migration rate as a time series from socio-economic factors."
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
const url = "src/content/projects/EDA-migration.mdx";
const file = "/Users/elirizk/Desktop/Personal Website/public_site/src/content/projects/EDA-migration.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/elirizk/Desktop/Personal Website/public_site/src/content/projects/EDA-migration.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
