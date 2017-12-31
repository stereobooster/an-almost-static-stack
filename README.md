![An Almost Static Stack](https://i.imgur.com/NStGYap.jpg)

# Discalimaer

This is my "training" repository. I put here every trick that is possible. It doesn't mean you should do the same. Be reasonable use only those techniques that you understand.

# An Almost Static Stack

This repo serves as a companion to the [tutorial of the same name, over on Medium](https://medium.com/superhighfives/).

## Heroku deployment

```
heroku create
heroku config:set NPM_CONFIG_PRODUCTION=false
heroku buildpacks:add https://github.com/jontewks/puppeteer-heroku-buildpack.git
heroku buildpacks:add heroku/nodejs
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static.git
git push heroku react-snap:master -f
heroku ps:scale web=1
```

## Load performance optimization

Read more [here](https://github.com/stereobooster/react-snap/blob/master/doc/an-almost-static-stack-optimization.md).

## TODO

- Migrate structure to be similar to cra-universal, to be able compare react-snap and cra-universal.
- [perfect 404](https://alistapart.com/article/perfect404)
- placeholder examples: [overview](https://medium.freecodecamp.org/using-svg-as-placeholders-more-image-loading-techniques-bed1b810ab2c), [lqip](https://github.com/zouhir/lqip), [sqip](https://github.com/technopagan/sqip), [dominant color](https://github.com/lokesh/color-thief), [react-content-loader](https://github.com/danilowoz/react-content-loader), [cloud off icon](https://material.io/icons/#ic_cloud_off), [react-waypoint](https://github.com/brigade/react-waypoint), [offline states](https://material.io/guidelines/patterns/offline-states.html)
- try out [workbox](https://github.com/raymondsze/create-react-scripts/blob/master/packages/create-react-scripts-workbox/index.js) instead of sw-precache, explore [options for offline storages](https://github.com/jakearchibald/idb-keyval), explore offline reporting for GA
- [big list of head tags](https://github.com/joshbuchea/HEAD)
- [target modern browsers](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/)
- explore [hnpwa](https://hnpwa.com/) for more ideas
