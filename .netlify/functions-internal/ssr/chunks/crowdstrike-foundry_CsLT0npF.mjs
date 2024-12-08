import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_BaztoWCL.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_Cil9EYOi.mjs';
import 'clsx';

const frontmatter = {
  "title": "How to build custom CrowdStrike integrations with Foundry apps",
  "description": "In this post, I will introduce the Falcon Foundry platform to beginners who would like to get started with building custom security integrations with CrowdStrike. I will also walk through developing a custom integration app with Zoho Desk using CrowdStrike Falcon Foundry, cybersecurity\u2019s first-low-code application platform.",
  "pubDate": "Nov 30 2024",
  "heroImage": "src/assets/crowdstrike/foundry.jpeg",
  "tags": ["Cybersecurity", "CrowdStrike", "API", "Python"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "motivation",
    "text": "Motivation"
  }, {
    "depth": 2,
    "slug": "background",
    "text": "Background"
  }, {
    "depth": 3,
    "slug": "foundry-functions",
    "text": "Foundry Functions"
  }, {
    "depth": 3,
    "slug": "api-integration",
    "text": "API Integration"
  }, {
    "depth": 3,
    "slug": "falcon-platform",
    "text": "Falcon Platform"
  }, {
    "depth": 2,
    "slug": "quickstart",
    "text": "Quickstart"
  }, {
    "depth": 2,
    "slug": "create-a-function",
    "text": "Create a function"
  }, {
    "depth": 2,
    "slug": "create-an-api-integration",
    "text": "Create an API integration"
  }, {
    "depth": 2,
    "slug": "zoho-desk-foundry-app",
    "text": "Zoho Desk Foundry app"
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
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "motivation",
      children: "Motivation"
    }), "\n", createVNode(_components.p, {
      children: ["In today\u2019s rapidly evolving cybersecurity landscape, professionals are constantly challenged to keep up with the latest threats and technologies. Navigating multiple platforms and integrating various tools can be time-consuming and complex. ", createVNode(_components.a, {
        href: "https://www.crowdstrike.com/platform/next-gen-siem/falcon-foundry",
        children: "CrowdStrike Falcon Foundry"
      }), " offers a powerful solution by providing a low-code application platform (LCAP) that simplifies the development of custom cybersecurity integration apps. By leveraging this platform, cybersecurity experts can streamline their workflows, enhance their threat detection capabilities, and respond to incidents more efficiently. This blog post aims to guide you through the process of developing a custom app using CrowdStrike Falcon Foundry, empowering you to harness the full potential of this innovative platform to integrate with any other tool at hand."]
    }), "\n", createVNode(_components.h2, {
      id: "background",
      children: "Background"
    }), "\n", createVNode(_components.p, {
      children: "Foundry applications offer a range of capabilities that allow developers to incorporate a multitude of functionalities within their integrated applications such as storing data in collections, executing code in functions, integration with third-party APIs, and more. The table below describes the capabilities covered by Foundry applications. Note that I will only be covering API integration and function capabilities in this post."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/src/assets/crowdstrike/foundry-functionalities.png",
        alt: "Falcon Foundry Capabilities"
      })
    }), "\n", createVNode(_components.h3, {
      id: "foundry-functions",
      children: "Foundry Functions"
    }), "\n", createVNode(_components.p, {
      children: "Foundry functions allow developers to build custom business logic into the app and run it in the CrowdStrike cloud. Supported languages are Python 3.9 or later and Go 1.19 or later. CrowdStrike caps the execution timeout to 30 seconds. The function capability allows security analysts to execute any custom code and include it as a workflow action in Fusion SOAR. Some examples of logic that can be implemented include modifying variables, writing to collections, executing a LogScale query, and even sending custom HTTP requests."
    }), "\n", createVNode(_components.h3, {
      id: "api-integration",
      children: "API Integration"
    }), "\n", createVNode(_components.p, {
      children: "Foundry applications are also able to integrate with HTTP-based web services within Falcon using the OpenAPI specification. Once configured, the Falcon platform becomes able to interact with and orchestrate API requests as a Fusion SOAR workflow action. Each Falcon application is limited to one API host (one domain per app). This capability allows CrowdStrike users to integrate their security solution with any other service through 3rd party API requests even if the integration isn\u2019t natively supported."
    }), "\n", createVNode(_components.h3, {
      id: "falcon-platform",
      children: "Falcon Platform"
    }), "\n", createVNode(_components.p, {
      children: "Foundry gives users two ways to build and manage custom apps:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Command Line Interface (CLI)"
        }), ": build locally and deploy from the command line"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "UI-based tool (App builder)"
        }), ": build the application from the Falcon console (over the web)"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Note that not all capabilities are offered over CLI or the App builder. The figure below specifies which interface allows you to develop specific capabilities:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/src/assets/crowdstrike/foundry-interfaces.png",
        alt: "Falcon Foundry capability by interface"
      })
    }), "\n", createVNode(_components.p, {
      children: "In this post, I will be exclusively using the Foundry CLI to create, develop, and deploy the Foundry app. Note that the API integration created can be developed using the App builder over the web."
    }), "\n", createVNode(_components.h2, {
      id: "quickstart",
      children: "Quickstart"
    }), "\n", createVNode(_components.p, {
      children: "To get started with Foundry app development, you\u2019ll need to install the Foundry CLI. On Windows, you can install it using Scoop:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "scoop"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " bucket"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " add"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " foundry"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " https://github.com/crowdstrike/scoop-foundry-cli.git"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "scoop"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " foundry"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "For Linux and macOS users, install using Homebrew:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " tap"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " crowdstrike/foundry-cli"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " foundry"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Verify your installation by running:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "foundry"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " version"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Once the Foundry CLI is installed, you will need to create a profile by logging in. This ensures you have the appropriate credentials to build the app on your CrowdStrike console. Run ", createVNode(_components.code, {
        children: "foundry login"
      }), " in your terminal. You should be redirected to a login page where you will set the appropriate permissions, name your credentials and hit authorize."]
    }), "\n", createVNode($$Image, {
      src: "/src/assets/crowdstrike/foundry-profile.png",
      alt: "Falcon Foundry Profile",
      width: "100",
      height: "100",
      class: "post-image"
    }), "\n", createVNode(_components.p, {
      children: "Here\u2019s an overview of useful commands:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "foundry apps create"
        }), " - Create a new Foundry app"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "foundry apps deploy"
        }), " - Deploy the Foundry app"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "foundry apps release"
        }), " - Release the Foundry app"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Once release, you will have to install it through the App builder in the Falcon console which might require consenting to the permissions requested by the app."
    }), "\n", createVNode(_components.h2, {
      id: "create-a-function",
      children: "Create a function"
    }), "\n", createVNode(_components.p, {
      children: "To create a function, run the following command:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "foundry functions create --name <function name> --description <function description> --handler-name <handler-name> -l <language> --handler-method <handler-method> --handler-path <handler-path>"
      })
    }), "\n", createVNode(_components.p, {
      children: "This will create a new function with filler code. To add environment variables, you can include the following in the manifest file:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "yaml",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "functions"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "    environment_variables"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "        variable_name"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "value"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "If the function expects input data or returns data, specify the request and response schema as JSON schema files and include their path in the manifest file. If needed, also consider making the function available on Fusion SOAR (through the App builder)."
    }), "\n", createVNode(_components.h2, {
      id: "create-an-api-integration",
      children: "Create an API integration"
    }), "\n", createVNode(_components.p, {
      children: "To create an API integration, you will need to create an OpenAPI specification file (either yourself or the published specification of the API you\u2019re integrating with). This file will define the API endpoints, request and response schemas, and other details. Once you have the OpenAPI specification file, you can create the API integration using the following command:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "foundry api-integrations create"
      })
    }), "\n", createVNode(_components.p, {
      children: "This command will prompt you for the name of the API integration, a description and a path to a local file or URL for the openAPI specification file."
    }), "\n", createVNode(_components.h2, {
      id: "zoho-desk-foundry-app",
      children: "Zoho Desk Foundry app"
    }), "\n", createVNode(_components.p, {
      children: ["As an example of what you can achieve with CrowdStrike Foundry, I have created a custom integration with Zoho Desk since CrowdStrike doesn\u2019t natively support it. This integration allows users to create tickets and add tags to a ticket directly from the CrowdStrike platform, leveraging OAuth2 authentication and data transformation functions. If you are interested in experimenting with or using this integration, you can find the complete code and instructions on the ", createVNode(_components.a, {
        href: "https://github.com/elirizk/zoho-desk-foundry",
        children: "GitHub repository"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://falcon.crowdstrike.com/documentation/category/c3d64B8e/falcon-foundry",
        children: "Falcon Foundry documentation"
      }), " (must be signed in)"]
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
const url = "src/content/projects/crowdstrike-foundry.mdx";
const file = "/Users/elirizk/Desktop/Personal Website/public_site/src/content/projects/crowdstrike-foundry.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/elirizk/Desktop/Personal Website/public_site/src/content/projects/crowdstrike-foundry.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
