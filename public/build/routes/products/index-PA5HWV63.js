import {
  AiOutlineDoubleRight,
  require_node
} from "/build/_shared/chunk-ZDW3GX7J.js";
import "/build/_shared/chunk-IFADANBJ.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-33LX2DL7.js";
import {
  IconButton_default,
  createSvgIcon,
  require_jsx_runtime
} from "/build/_shared/chunk-3GDPPI6Z.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-SBNNL67F.js";

// app/routes/products/index.tsx
var import_react3 = __toESM(require_react());
var import_node = __toESM(require_node());

// app/components/product-cards.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ProductCard({ product }) {
  const variant = product.price;
  const formattedNumber = variant.toLocaleString("tr-TR", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "overflow-hidden bg-white rounded-xl shadow:md hover:shadow-lg w-96 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/products/${product.code}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-8 mx-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "relative inline-flex items-center p-3 text-sm font-large text-center text-white rounded-xl ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inline-flex items-center justify-center w-12 h-12 text-m font-bold text-white \r\n            bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900", children: `% ${product.dropRatio}` }, void 0, false, {
      fileName: "app/components/product-cards.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/product-cards.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "rounded mx-auto d-block w-60 my-5", src: product.imageUrl, alt: product.name }, void 0, false, {
      fileName: "app/components/product-cards.tsx",
      lineNumber: 24,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
      fileName: "app/components/product-cards.tsx",
      lineNumber: 26,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col mt-2 p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-s font-bold text-gray-500 my-5", children: product.name }, void 0, false, {
        fileName: "app/components/product-cards.tsx",
        lineNumber: 28,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-bold text-gray-700", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg", children: formattedNumber.split(",")[0] }, void 0, false, {
          fileName: "app/components/product-cards.tsx",
          lineNumber: 33,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm", children: [
          formattedNumber.split(",")[1],
          " TL"
        ] }, void 0, true, {
          fileName: "app/components/product-cards.tsx",
          lineNumber: 34,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-bold text-gray-400", children: `${product.countOfPrices} sat\u0131c\u0131` }, void 0, false, {
            fileName: "app/components/product-cards.tsx",
            lineNumber: 36,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AiOutlineDoubleRight, { className: "ml-2" }, void 0, false, {
            fileName: "app/components/product-cards.tsx",
            lineNumber: 37,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/product-cards.tsx",
          lineNumber: 35,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/product-cards.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-bold text-gray-400 mt-5", children: product.followCount !== void 0 ? `${product.followCount}+ takip` : "" }, void 0, false, {
        fileName: "app/components/product-cards.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/product-cards.tsx",
      lineNumber: 27,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/product-cards.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/product-cards.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/product-cards.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/product-cards.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/components/product-carosel.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function ProductCarosel({ product }) {
  const variant = product.price;
  const formattedNumber = variant.toLocaleString("tr-TR", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "div",
    {
      className: "p-6 flex flex-col items-center justify-center text-center",
      style: { width: "100%", maxWidth: "400px", margin: "auto" },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: `/products/${product.code}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col items-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "div",
          {
            className: "relative w-60 h-60 flex items-center justify-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "div",
                {
                  className: "absolute inline-flex items-center justify-center w-12 h-12 text-m font-bold text-white \r\n              bg-red-500 border-2 border-white rounded-full -top-2 -right-2",
                  children: `% ${product.dropRatio}`
                },
                void 0,
                false,
                {
                  fileName: "app/components/product-carosel.tsx",
                  lineNumber: 23,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "img",
                {
                  className: "rounded object-cover w-full h-full",
                  src: product.imageUrl,
                  alt: product.name
                },
                void 0,
                false,
                {
                  fileName: "app/components/product-carosel.tsx",
                  lineNumber: 29,
                  columnNumber: 13
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/product-carosel.tsx",
            lineNumber: 20,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg font-bold text-gray-700", children: product.name }, void 0, false, {
            fileName: "app/components/product-carosel.tsx",
            lineNumber: 38,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-bold text-gray-700", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-2xl", children: formattedNumber.split(",")[0] }, void 0, false, {
              fileName: "app/components/product-carosel.tsx",
              lineNumber: 41,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-lg", children: [
              ",",
              formattedNumber.split(",")[1],
              " TL"
            ] }, void 0, true, {
              fileName: "app/components/product-carosel.tsx",
              lineNumber: 42,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/product-carosel.tsx",
            lineNumber: 40,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-500 font-medium", children: `${product.countOfPrices} sat\u0131c\u0131` }, void 0, false, {
              fileName: "app/components/product-carosel.tsx",
              lineNumber: 46,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AiOutlineDoubleRight, { className: "text-gray-500" }, void 0, false, {
              fileName: "app/components/product-carosel.tsx",
              lineNumber: 47,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/product-carosel.tsx",
            lineNumber: 45,
            columnNumber: 13
          }, this),
          product.followCount !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-500 font-medium", children: `${product.followCount}+ takip` }, void 0, false, {
            fileName: "app/components/product-carosel.tsx",
            lineNumber: 51,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/product-carosel.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/product-carosel.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/components/product-carosel.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/product-carosel.tsx",
      lineNumber: 13,
      columnNumber: 5
    },
    this
  );
}

// node_modules/@mui/icons-material/esm/utils/createSvgIcon.js
"use client";

// node_modules/@mui/icons-material/esm/East.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
"use client";
var East_default = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
  d: "m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7z"
}), "East");

// node_modules/@mui/icons-material/esm/KeyboardBackspace.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
"use client";
var KeyboardBackspace_default = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
  d: "M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"
}), "KeyboardBackspace");

// app/routes/products/index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function ProductsIndexRoute() {
  const { horizontalProducts, products } = useLoaderData();
  const [activeIndex, setActiveIndex] = (0, import_react3.useState)(0);
  const handlePrev = () => {
    setActiveIndex((prevIndex) => prevIndex === 0 ? horizontalProducts.length - 1 : prevIndex - 1);
  };
  const handleNext = () => {
    setActiveIndex((prevIndex) => prevIndex === horizontalProducts.length - 1 ? 0 : prevIndex + 1);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "div",
      {
        style: {
          position: "relative",
          width: "100%",
          maxWidth: "1015px",
          margin: "auto",
          overflow: "hidden",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "div",
            {
              style: {
                display: "flex",
                transition: "transform 0.5s ease-in-out",
                transform: `translateX(-${activeIndex * 100}%)`,
                width: `${horizontalProducts.length * 25}%`,
                height: "100%"
              },
              children: horizontalProducts.map((product, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
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
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProductCarosel, { product }, void 0, false, {
                    fileName: "app/routes/products/index.tsx",
                    lineNumber: 82,
                    columnNumber: 15
                  }, this)
                },
                product.code,
                false,
                {
                  fileName: "app/routes/products/index.tsx",
                  lineNumber: 70,
                  columnNumber: 13
                },
                this
              ))
            },
            void 0,
            false,
            {
              fileName: "app/routes/products/index.tsx",
              lineNumber: 60,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            IconButton_default,
            {
              onClick: handlePrev,
              style: {
                position: "absolute",
                top: "48%",
                left: "10px",
                color: "white",
                zIndex: 1e3,
                width: "2rem"
              },
              "aria-label": "previous",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(KeyboardBackspace_default, {}, void 0, false, {
                fileName: "app/routes/products/index.tsx",
                lineNumber: 100,
                columnNumber: 11
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/routes/products/index.tsx",
              lineNumber: 88,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            IconButton_default,
            {
              onClick: handleNext,
              style: {
                position: "absolute",
                top: "50%",
                right: "10px",
                color: "white",
                zIndex: 1e3,
                width: "2rem"
              },
              "aria-label": "next",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(East_default, {}, void 0, false, {
                fileName: "app/routes/products/index.tsx",
                lineNumber: 114,
                columnNumber: 11
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/routes/products/index.tsx",
              lineNumber: 102,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/products/index.tsx",
        lineNumber: 46,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-2 gap-6 px-4 mt-8 md:px-12 lg:px-6 xl:px-4 xl:gap-6 2xl:px-24 2xl:gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProductCard, { product }, product.code, false, {
      fileName: "app/routes/products/index.tsx",
      lineNumber: 121,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "app/routes/products/index.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products/index.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
export {
  ProductsIndexRoute as default
};
//# sourceMappingURL=/build/routes/products/index-PA5HWV63.js.map
