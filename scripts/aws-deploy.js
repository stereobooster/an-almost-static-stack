const _ = require("highland");
const level = require("level");
const s3sync = require("s3-sync-aws");
const readdirp = require("readdirp");
const fs = require("fs");

const db = level(__dirname + "/cache");

const files = readdirp({
  root: __dirname + "/../build",
  directoryFilter: ["!.git", "!cache", "!.DS_Store"]
});

const s3Options = {
  key: process.env.AWS_ACCESS_KEY,
  secret: process.env.AWS_SECRET_KEY,
  bucket: "yagd",
  concurrency: 16
};

const longTermUploader = s3sync(db, {
  ...s3Options,
  headers: {
    CacheControl: "max-age=31536000" // 1 year
  }
}).on("data", function(file) {
  console.log(`max-age=31536000 ${file.url}`);
});

const uploader = s3sync(db, {
  ...s3Options,
  headers: {
    CacheControl: "max-age=14400" // 4 hours
  }
}).on("data", function(file) {
  console.log(`max-age=14400 ${file.url}`);
});

const shortTermUploader = s3sync(db, {
  ...s3Options,
  headers: {
    CacheControl: "max-age=180" // 3 minutes
  }
}).on("data", function(file) {
  console.log(`max-age=180 ${file.url}`);
});

const noCacheUploader = s3sync(db, {
  ...s3Options,
  headers: {
    CacheControl: "max-age=0" // no cache
  }
}).on("data", function(file) {
  console.log(`max-age=0 ${file.url}`);
});

_(files)
  .reject(x => x.path.match(/\.\w{8,10}\./gi))
  .reject(x => x.path.indexOf("manifest.json") !== -1)
  .reject(x => x.path.indexOf(".DS_Store") !== -1)
  .reject(x => x.path.indexOf("asset-manifest.json") !== -1)
  .reject(x => x.path.indexOf(".html") !== -1)
  .reject(x => x.path.indexOf("service-worker.js") !== -1)
  .reject(x => x.path.indexOf("manifest.appcache") !== -1)
  .pipe(uploader);

_(files)
  .filter(
    x =>
      x.path.indexOf(".html") !== -1 || x.path.indexOf("manifest.json") !== -1
  )
  .pipe(shortTermUploader);

_(files)
  .filter(
    x =>
      x.path.indexOf("service-worker.js") !== -1 ||
      x.path.indexOf("manifest.appcache") !== -1
  )
  .pipe(noCacheUploader);

_(files)
  .filter(x => x.path.match(/\.\w{8,10}\./gi))
  .pipe(longTermUploader);
