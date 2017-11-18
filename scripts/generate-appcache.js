const SW_PRECACHE_CONFIG = "./sw-precache-config";
const OUT_FILE = "../build/manifest.appcache";

const glob = require("globby");
const {
  staticFileGlobs,
  stripPrefix,
  navigateFallback
} = require(SW_PRECACHE_CONFIG);
const fs = require("fs");
const path = require("path");

glob(staticFileGlobs).then(files => {
  // filter out directories
  files = files.filter(file => fs.statSync(file).isFile());
  // strip out prefix
  files = files.map(file => file.replace(stripPrefix, ""));

  const index = files.indexOf(navigateFallback);
  if (index > -1) {
    files.splice(index, 1);
  }

  const out = [
    "CACHE MANIFEST",
    `# version ${new Date().getTime()}`,
    "",
    "CACHE:",
    ...files,
    "",
    "NETWORK:",
    "*",
    "http://*",
    "https://*",
    "",
    "FALLBACK:",
    `/ ${navigateFallback}`
  ].join("\n");

  fs.writeFileSync(path.join(__dirname, OUT_FILE), out);
  console.log(`Wrote ${OUT_FILE} with ${files.length} resources.`);
});
