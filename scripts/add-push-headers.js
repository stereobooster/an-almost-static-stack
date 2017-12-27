const FIREBASE_BASIC_CONFIG = "../firebase.base.json";
const FIREBASE_OUT_CONFIG = "../firebase.json";
const HTTP2_PUSH_MANIFEST = "../build/http2-push-manifest.json";
// const SERVICE_WORKER = "/service-worker.js";

const fs = require("fs");
const path = require("path");

// filter(x => x.source !== "") is workaround for
// Error: HTTP Error: 400, hosting.headers[2].source does not meet minimum length of 1
// error Command failed with exit code 1.
const http2PushManifest = JSON.parse(
  fs.readFileSync(path.join(__dirname, HTTP2_PUSH_MANIFEST))
).map(x => {
  if (x.source === "") {
    x.source = "/";
  }
  return x;
});

const firebaseBasicConfig = JSON.parse(
  fs.readFileSync(path.join(__dirname, FIREBASE_BASIC_CONFIG))
);

firebaseBasicConfig.hosting.headers = firebaseBasicConfig.hosting.headers.concat(
  http2PushManifest
);

fs.writeFileSync(
  path.join(__dirname, FIREBASE_OUT_CONFIG),
  JSON.stringify(firebaseBasicConfig, null, 2)
);
console.log(`Wrote ${FIREBASE_OUT_CONFIG}.`);
