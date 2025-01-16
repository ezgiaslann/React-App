var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react3 = require("@remix-run/react");

// app/layouts/footer.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Footer() {
  let currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "py-4 mt-5 text-sm text-center text-gray-200 bg-gray-800", children: [
    "\xA9 Akak\xE7e ",
    currentYear
  ] });
}

// app/layouts/navbar.tsx
var import_react2 = require("@remix-run/react"), import_bi = require("react-icons/bi"), import_jsx_runtime3 = require("react/jsx-runtime");
function Navbar() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("nav", { className: "flex items-center justify-between px-8 pt-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "font-mono text-3xl font-extrabold uppercase", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react2.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { className: "w-28", src: "/logo1.svg", alt: "akakce" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "space-x-4", children: [
      {
        label: "\xDCr\xFCnler",
        url: "/products"
      },
      {
        label: "Hakk\u0131nda",
        url: "/about"
      }
    ].map((link, index) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react2.NavLink, { to: link.url, className: "navlink", children: link.label }, index)) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "font-semibold text-gray-600 hover:text-emerald-500", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      import_react2.NavLink,
      {
        to: "/checkout",
        className: "inline-flex items-center space-x-1 transition-colors duration-300",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_bi.BiShoppingBag, { className: "text-xl" }),
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "0" })
        ]
      }
    ) })
  ] });
}

// app/layouts/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("header", { className: "border-b", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Navbar, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("main", { className: "container flex-grow mx-auto", children }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Footer, {})
  ] });
}

// app/styles/app.css
var app_default = "/build/_assets/app-LFHN4LFS.css";

// app/root.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
function meta() {
  return {
    charset: "utf-8",
    title: "Remix StoreFront",
    viewport: "width=device-width,initial-scale=1"
  };
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Document, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react3.Outlet, {}),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react3.ScrollRestoration, {}),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react3.Scripts, {}),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react3.LiveReload, {})
  ] }) });
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react3.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react3.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("body", { children })
  ] });
}
function ErrorBoundary({ error }) {
  return console.log(error), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Document, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "text-red-500", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { children: "Error" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: error == null ? void 0 : error.message })
  ] }) }) });
}

// app/routes/products/$productId.tsx
var productId_exports = {};
__export(productId_exports, {
  default: () => ProductRoute,
  loader: () => loader
});
var import_node2 = require("@remix-run/node"), import_react5 = require("@remix-run/react"), import_axios = __toESM(require("axios"));

// app/components/product-detail-cards.tsx
var import_ai = require("react-icons/ai"), import_react4 = require("react"), import_jsx_runtime6 = require("react/jsx-runtime"), ProductDetailCard = ({ product }) => {
  let [productGb, setProductGb] = (0, import_react4.useState)(product.storageOptions[0]), activeStars = parseInt(product.rating), formattedNumber = product.price.toLocaleString("tr-TR", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }), handleVariantChange = (index) => {
    setProductGb(product.storageOptions[index]);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("section", { className: "overflow-hidden bg-white rounded-xl shadow:md hover:shadow-lg w-96 ", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "my-8 mx-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h6", { className: "text-s font-bold text-gray-400 my-5 ", children: product.mkName }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "flex float-right", children: Array(5).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        import_ai.AiFillStar,
        {
          className: "star",
          color: i < activeStars ? "#ffc107" : "#e4e5e9",
          size: 25
        },
        product.code
      )) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { className: "text-lg font-bold text-gray-700 hover:underline my-5", children: product.productName }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20", children: product.badge }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("img", { className: "rounded mx-auto d-block w-60 my-5", src: product.imageUrl, alt: product.name }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("hr", {}),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "grid items-center ", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex flex-col px-4  ", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: " flex text-center font-bold text-gray-500", children: "Kapasite Se\xE7enekleri" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "grid grid-cols-3 gap-2 mt-2 xl:grid-cols-3", children: product.storageOptions.map((storageOption, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "button",
          {
            className: `w-20 px-2 py-2 text-md hover:brightness-90 ${storageOption.id === productGb ? "bg-gray-700 text-gray-100" : "bg-gray-300 text-gray-700"}`,
            onClick: () => handleVariantChange(index),
            children: storageOption
          },
          storageOption.id
        )) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "font-bold flex text-center mt-2", children: ` ${product.countOfPrices} sat\u0131c\u0131 i\xE7inde kargo dahil en ucuz fiyat se\xE7ene\u011Fi` })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex flex-col items-center mt-2 p-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", { className: "font-bold text-gray-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-lg", children: formattedNumber.split(",")[0] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-sm", children: formattedNumber.split(",")[1] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "font-bold text-teal-600", children: product.freeShipping ? "\xDCcretsiz Kargo" : "" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "font-bold  text-gray-400", children: ` Son g\xFCncelleme: ${product.lastUpdate}` })
    ] })
  ] }) });
}, product_detail_cards_default = ProductDetailCard;

// app/routes/products/$productId.tsx
var import_jsx_runtime7 = require("react/jsx-runtime"), loader = async ({ params }) => {
  let { productId } = params, nextUrl = `https://mock.akakce.dev/product${productId}.json`;
  try {
    let data = (await import_axios.default.get(nextUrl)).data;
    return (0, import_node2.json)({ data });
  } catch {
    return (0, import_node2.json)({ error: "\xDCr\xFCn bilgisi y\xFCklenemedi. L\xFCtfen tekrar deneyin." });
  }
};
function ProductRoute() {
  let { data, error } = (0, import_react5.useLoaderData)();
  return error ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { children: error }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { style: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9"
  }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(product_detail_cards_default, { product: data }, data.code) });
}

// app/routes/products/index.tsx
var products_exports = {};
__export(products_exports, {
  default: () => ProductsIndexRoute,
  loader: () => loader2
});
var import_react8 = require("react"), import_node3 = require("@remix-run/node"), import_axios2 = __toESM(require("axios")), import_react9 = require("@remix-run/react");

// app/components/product-cards.tsx
var import_react6 = require("@remix-run/react"), import_ai2 = require("react-icons/ai"), import_jsx_runtime8 = require("react/jsx-runtime");
function ProductCard({ product }) {
  let formattedNumber = product.price.toLocaleString("tr-TR", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_jsx_runtime8.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("section", { className: "overflow-hidden bg-white rounded-xl shadow:md hover:shadow-lg w-96 ", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react6.Link, { to: `/products/${product.code}`, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "my-8 mx-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("button", { type: "button", className: "relative inline-flex items-center p-3 text-sm font-large text-center text-white rounded-xl ", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: `absolute inline-flex items-center justify-center w-12 h-12 text-m font-bold text-white \r
            bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900`, children: `% ${product.dropRatio}` }) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("img", { className: "rounded mx-auto d-block w-60 my-5", src: product.imageUrl, alt: product.name }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("hr", {}),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex flex-col mt-2 p-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-s font-bold text-gray-500 my-5", children: product.name }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("p", { className: "font-bold text-gray-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "text-lg", children: formattedNumber.split(",")[0] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "text-sm", children: [
          formattedNumber.split(",")[1],
          " TL"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "font-bold text-gray-400", children: `${product.countOfPrices} sat\u0131c\u0131` }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_ai2.AiOutlineDoubleRight, { className: "ml-2" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "font-bold text-gray-400 mt-5", children: product.followCount !== void 0 ? `${product.followCount}+ takip` : "" })
    ] })
  ] }) }) }) });
}

// app/routes/products/index.tsx
var import_material = require("@mui/material");

// app/components/product-carosel.tsx
var import_react7 = require("@remix-run/react"), import_ai3 = require("react-icons/ai"), import_jsx_runtime9 = require("react/jsx-runtime");
function ProductCarosel({ product }) {
  let formattedNumber = product.price.toLocaleString("tr-TR", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "div",
    {
      className: "p-6 flex flex-col items-center justify-center text-center",
      style: { width: "100%", maxWidth: "400px", margin: "auto" },
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react7.Link, { to: `/products/${product.code}`, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex flex-col items-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
          "div",
          {
            className: "relative w-60 h-60 flex items-center justify-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "div",
                {
                  className: `absolute inline-flex items-center justify-center w-12 h-12 text-m font-bold text-white \r
              bg-red-500 border-2 border-white rounded-full -top-2 -right-2`,
                  children: `% ${product.dropRatio}`
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "img",
                {
                  className: "rounded object-cover w-full h-full",
                  src: product.imageUrl,
                  alt: product.name
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { className: "text-lg font-bold text-gray-700", children: product.name }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { className: "font-bold text-gray-700", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "text-2xl", children: formattedNumber.split(",")[0] }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { className: "text-lg", children: [
              ",",
              formattedNumber.split(",")[1],
              " TL"
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-gray-500 font-medium", children: `${product.countOfPrices} sat\u0131c\u0131` }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_ai3.AiOutlineDoubleRight, { className: "text-gray-500" })
          ] }),
          product.followCount !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-gray-500 font-medium", children: `${product.followCount}+ takip` })
        ] })
      ] }) })
    }
  );
}

// app/routes/products/index.tsx
var import_icons_material = require("@mui/icons-material"), import_jsx_runtime10 = require("react/jsx-runtime"), loader2 = async () => {
  let horizontalProducts = [], products = [], nextUrl = "https://mock.akakce.dev/page.json";
  try {
    let data = (await import_axios2.default.get(nextUrl)).data;
    horizontalProducts = [...horizontalProducts, ...data.horizontalProductList], products = [...products, ...data.productList], nextUrl = data.nextUrl;
  } catch (error) {
    throw console.error("API Call Error:", error.response ? error.response.data : error.message), new Error("Failed to fetch products from API.");
  }
  return (0, import_node3.json)({ horizontalProducts, products });
};
function ProductsIndexRoute() {
  let { horizontalProducts, products } = (0, import_react9.useLoaderData)(), [activeIndex, setActiveIndex] = (0, import_react8.useState)(0), handlePrev = () => {
    setActiveIndex((prevIndex) => prevIndex === 0 ? horizontalProducts.length - 1 : prevIndex - 1);
  }, handleNext = () => {
    setActiveIndex((prevIndex) => prevIndex === horizontalProducts.length - 1 ? 0 : prevIndex + 1);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      "div",
      {
        style: {
          position: "relative",
          width: "100%",
          maxWidth: "1018px",
          margin: "auto",
          overflow: "hidden",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          marginTop: "10px"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "div",
            {
              style: {
                display: "flex",
                transition: "transform 0.5s ease-in-out",
                transform: `translateX(-${activeIndex * 100}%)`,
                width: `${horizontalProducts.length * 25}%`,
                height: "100%"
              },
              children: horizontalProducts.map((product, index) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                "div",
                {
                  style: {
                    flex: "0 0 100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    height: "100%"
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ProductCarosel, { product })
                },
                product.code
              ))
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            import_material.IconButton,
            {
              onClick: handlePrev,
              style: {
                position: "absolute",
                top: "48%",
                left: "10px",
                zIndex: 1e3,
                width: "2rem"
              },
              "aria-label": "previous",
              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_icons_material.KeyboardBackspace, {})
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            import_material.IconButton,
            {
              onClick: handleNext,
              style: {
                position: "absolute",
                top: "50%",
                right: "10px",
                zIndex: 1e3,
                width: "2rem"
              },
              "aria-label": "next",
              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_icons_material.East, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "grid grid-cols-2 gap-6 px-4 mt-8 md:px-12 lg:px-6 xl:px-4 xl:gap-6 2xl:px-24 2xl:gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ProductCard, { product }, product.code)) })
  ] });
}

// app/routes/checkout.tsx
var checkout_exports = {};
__export(checkout_exports, {
  default: () => CheckoutRoute
});
var import_jsx_runtime11 = require("react/jsx-runtime");
function CheckoutRoute() {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "w-full mt-8", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h1", { children: "Checkout Page" }) });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => IndexRoute
});
var import_react10 = require("@remix-run/react"), import_jsx_runtime12 = require("react/jsx-runtime");
function IndexRoute() {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "px-12 py-32 text-center text-gray-200 bg-gray-800", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h1", { className: "text-5xl text-gray-100", children: "New arrivals are here" }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "px-8 mt-2 font-semibold text-gray-300", children: "The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock." }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      import_react10.Link,
      {
        to: "/products",
        className: "inline-block px-6 py-2 mt-8 text-sm font-semibold text-gray-700 transition duration-300 bg-gray-100 rounded-md hover:bg-white hover:text-gray-900 hover:scale-110 color",
        children: "Shop New Arrivals"
      }
    )
  ] }) });
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => AboutRoute
});
var import_material2 = require("@mui/material"), import_jsx_runtime13 = require("react/jsx-runtime");
function AboutRoute() {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_material2.Grid, { className: "mt-5", container: !0, justifyContent: "center", alignItems: "center", style: { textAlign: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_material2.Grid, { item: !0, xs: 12, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_material2.Typography, { variant: "body1", className: "mt-4 text-justify", style: { textAlign: "center" }, children: "Akak\xE7e, kuruldu\u011Fu 2000 y\u0131l\u0131ndan bu yana T\xFCrkiye'nin lider kar\u015F\u0131la\u015Ft\u0131rmal\u0131 al\u0131\u015Fveri\u015F platformudur. Akak\xE7e, sahip oldu\u011Fu teknolojiler ve s\xFCrekli inovasyon ile T\xFCrk m\xFC\u015Fterilerine en geli\u015Fmi\u015F deneyimi ya\u015Fatmay\u0131 hedeflemektedir. Akak\xE7e'nin web sitesi ve mobil uygulamalar\u0131 her ay 40 milyondan fazla al\u0131\u015Fveri\u015F\xE7iyi desteklemektedir. Al\u0131\u015Fveri\u015F yapanlar, y\xFCz binlerce \xFCr\xFCn i\xE7in detayl\u0131 fiyat, \xF6zellik ve konum bilgilerine ula\u015Fabilmektedir. Akak\xE7e, online sat\u0131c\u0131lar i\xE7in en \xF6nemli referans kaynaklar\u0131ndan biridir. 2013 y\u0131l\u0131nda Japon Netprice grubu \u015Firkete stratejik bir yat\u0131r\u0131m yapm\u0131\u015Ft\u0131r. Akak\xE7e, Ankara'da ODT\xDC Teknokent'te yer almakta ve \u0130stanbul'da bir ofisi bulunmaktad\u0131r." }) }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-EO2KYIXZ.js", imports: ["/build/_shared/chunk-BPBRR6VT.js", "/build/_shared/chunk-DLUJ32DX.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-OWGQQ7IK.js", imports: ["/build/_shared/chunk-GQRCYSNN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: "_index", index: void 0, caseSensitive: void 0, module: "/build/routes/_index-XGLMEA2H.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-4WBCM7QA.js", imports: ["/build/_shared/chunk-IIPLVG3T.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/checkout": { id: "routes/checkout", parentId: "root", path: "checkout", index: void 0, caseSensitive: void 0, module: "/build/routes/checkout-LFBUJYCR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products/$productId": { id: "routes/products/$productId", parentId: "root", path: "products/:productId", index: void 0, caseSensitive: void 0, module: "/build/routes/products/$productId-6AF7ROFW.js", imports: ["/build/_shared/chunk-GDTPOMCR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products/index": { id: "routes/products/index", parentId: "root", path: "products", index: !0, caseSensitive: void 0, module: "/build/routes/products/index-IORHJBVW.js", imports: ["/build/_shared/chunk-GDTPOMCR.js", "/build/_shared/chunk-IIPLVG3T.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "682b9906", hmr: void 0, url: "/build/manifest-682B9906.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !1, v2_normalizeFormMethod: !0, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/products/$productId": {
    id: "routes/products/$productId",
    parentId: "root",
    path: "products/:productId",
    index: void 0,
    caseSensitive: void 0,
    module: productId_exports
  },
  "routes/products/index": {
    id: "routes/products/index",
    parentId: "root",
    path: "products",
    index: !0,
    caseSensitive: void 0,
    module: products_exports
  },
  "routes/checkout": {
    id: "routes/checkout",
    parentId: "root",
    path: "checkout",
    index: void 0,
    caseSensitive: void 0,
    module: checkout_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: "_index",
    index: void 0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
