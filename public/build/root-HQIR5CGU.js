import {
  GenIcon
} from "/build/_shared/chunk-KM7WCLVG.js";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate
} from "/build/_shared/chunk-IBRJ2CIW.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-7HYSD3WE.js";

// app/layouts/footer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Footer() {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-4 mt-5 text-sm text-center text-gray-200 bg-gray-800", children: [
    "\xA9 Akak\xE7e ",
    currentYear
  ] }, void 0, true, {
    fileName: "app/layouts/footer.tsx",
    lineNumber: 5,
    columnNumber: 6
  }, this);
}

// node_modules/react-icons/bi/index.esm.js
function BiShoppingBag(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z" } }] })(props);
}

// app/layouts/navbar.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Navbar() {
  const links2 = [
    {
      label: "\xDCr\xFCnler",
      url: "/products"
    },
    {
      label: "Hakk\u0131nda",
      url: "/about"
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "flex items-center justify-between px-8 pt-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "font-mono text-3xl font-extrabold uppercase", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/products", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "w-28", src: "/logo1.svg", alt: "akakce" }, void 0, false, {
      fileName: "app/layouts/navbar.tsx",
      lineNumber: 22,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/layouts/navbar.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/layouts/navbar.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-x-4", children: links2.map((link, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { to: link.url, className: "navlink", style: ({ isActive }) => ({
      color: isActive ? "#2387bf" : "initial"
    }), children: link.label }, index, false, {
      fileName: "app/layouts/navbar.tsx",
      lineNumber: 29,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "app/layouts/navbar.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "font-semibold text-gray-600 hover:text-emerald-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      NavLink,
      {
        to: "/checkout",
        className: "inline-flex items-center space-x-1 transition-colors duration-300",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BiShoppingBag, { className: "text-xl" }, void 0, false, {
            fileName: "app/layouts/navbar.tsx",
            lineNumber: 43,
            columnNumber: 11
          }, this),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "0" }, void 0, false, {
            fileName: "app/layouts/navbar.tsx",
            lineNumber: 43,
            columnNumber: 49
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/layouts/navbar.tsx",
        lineNumber: 39,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/layouts/navbar.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/layouts/navbar.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/layouts/index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "border-b", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Navbar, {}, void 0, false, {
      fileName: "app/layouts/index.tsx",
      lineNumber: 8,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/layouts/index.tsx",
      lineNumber: 7,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "container flex-grow mx-auto", children }, void 0, false, {
      fileName: "app/layouts/index.tsx",
      lineNumber: 10,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/layouts/index.tsx",
      lineNumber: 13,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/layouts/index.tsx",
    lineNumber: 6,
    columnNumber: 3
  }, this);
}

// app/styles/app.css
var app_default = "/build/_assets/app-5VDG4PU4.css";

// app/root.tsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
function meta() {
  return {
    charset: "utf-8",
    title: "Akakce",
    viewport: "width=device-width,initial-scale=1"
  };
}
function App() {
  const navigate = useNavigate();
  (0, import_react3.useEffect)(() => {
    navigate("/products");
  }, [navigate]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ScrollRestoration, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Scripts, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LiveReload, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("link", { rel: "icon", href: "/tik.png", type: "image/png" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { children }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  console.log(error);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-red-500", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "Error" }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 63,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: error == null ? void 0 : error.message }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 64,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 62,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 61,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}
export {
  ErrorBoundary,
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-HQIR5CGU.js.map
