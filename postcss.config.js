import url from "postcss-url";

const rewriteRootUrls = url({
  url: (asset) => {
    const u = asset.url || "";
    if (/^data:|^\/\/|^[a-z0-9.+-]+:/i.test(u)) return u;
    if (u.startsWith("/")) {
      const base = (process.env.VITE_BASE || "/").replace(/\/?$/, "/");
      return `${base}${u.replace(/^\//, "")}`;
    }
    return u;
  },
});

export default {
  plugins: {
    "postcss-url": rewriteRootUrls,
    // "tailwindcss": {}, "autoprefixer": {} // add if you need
  },
};
