import {
  AiFillStar,
  require_node
} from "/build/_shared/chunk-PB2TCWQP.js";
import "/build/_shared/chunk-KM7WCLVG.js";
import {
  useLoaderData
} from "/build/_shared/chunk-YNKH67UB.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-7HYSD3WE.js";

// app/routes/products/$productId.tsx
var import_node = __toESM(require_node());

// app/components/product-detail-cards.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ProductDetailCard = ({ product }) => {
  const [productGb, setProductGb] = (0, import_react.useState)(product.storageOptions[0]);
  const activeStars = parseInt(product.rating);
  const variant = product.price;
  const formattedNumber = variant.toLocaleString("tr-TR", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  const handleVariantChange = (index) => {
    setProductGb(product.storageOptions[index]);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "overflow-hidden bg-white rounded-xl shadow:md hover:shadow-lg w-96 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-8 mx-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { className: "text-s font-bold text-gray-400 my-5 ", children: product.mkName }, void 0, false, {
        fileName: "app/components/product-detail-cards.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex float-right", children: Array(5).map((_, i) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          AiFillStar,
          {
            className: "star",
            color: i < activeStars ? "#ffc107" : "#e4e5e9",
            size: 25
          },
          product.code,
          false,
          {
            fileName: "app/components/product-detail-cards.tsx",
            lineNumber: 31,
            columnNumber: 21
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/components/product-detail-cards.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/product-detail-cards.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-bold text-gray-700 hover:underline my-5", children: product.productName }, void 0, false, {
      fileName: "app/components/product-detail-cards.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20", children: product.badge }, void 0, false, {
      fileName: "app/components/product-detail-cards.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "rounded mx-auto d-block w-60 my-5", src: product.imageUrl, alt: product.name }, void 0, false, {
      fileName: "app/components/product-detail-cards.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
      fileName: "app/components/product-detail-cards.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid items-center ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col px-4  ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: " flex text-center font-bold text-gray-500", children: "Kapasite Se\xE7enekleri" }, void 0, false, {
          fileName: "app/components/product-detail-cards.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-3 gap-2 mt-2 xl:grid-cols-3", children: product.storageOptions.map((storageOption, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            className: `w-20 px-2 py-2 text-md hover:brightness-90 ${storageOption.id === productGb ? "bg-gray-700 text-gray-100" : "bg-gray-300 text-gray-700"}`,
            onClick: () => handleVariantChange(index),
            children: storageOption
          },
          storageOption.id,
          false,
          {
            fileName: "app/components/product-detail-cards.tsx",
            lineNumber: 56,
            columnNumber: 17
          },
          this
        )) }, void 0, false, {
          fileName: "app/components/product-detail-cards.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/product-detail-cards.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-bold flex text-center mt-2", children: ` ${product.countOfPrices} sat\u0131c\u0131 i\xE7inde kargo dahil en ucuz fiyat se\xE7ene\u011Fi` }, void 0, false, {
        fileName: "app/components/product-detail-cards.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/product-detail-cards.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center mt-2 p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-bold text-gray-700", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg", children: formattedNumber.split(",")[0] }, void 0, false, {
          fileName: "app/components/product-detail-cards.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm", children: formattedNumber.split(",")[1] }, void 0, false, {
          fileName: "app/components/product-detail-cards.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/product-detail-cards.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-bold text-teal-600", children: product.freeShipping ? "\xDCcretsiz Kargo" : "" }, void 0, false, {
        fileName: "app/components/product-detail-cards.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-bold  text-gray-400", children: ` Son g\xFCncelleme: ${product.lastUpdate}` }, void 0, false, {
        fileName: "app/components/product-detail-cards.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/product-detail-cards.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/product-detail-cards.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/product-detail-cards.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
};
var product_detail_cards_default = ProductDetailCard;

// app/routes/products/$productId.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function ProductRoute() {
  const { data, error } = useLoaderData();
  if (error) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: error }, void 0, false, {
      fileName: "app/routes/products/$productId.tsx",
      lineNumber: 26,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(product_detail_cards_default, { product: data }, data.code, false, {
    fileName: "app/routes/products/$productId.tsx",
    lineNumber: 36,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/products/$productId.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
export {
  ProductRoute as default
};
//# sourceMappingURL=/build/routes/products/$productId-PIVIPGOK.js.map
