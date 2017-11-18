![An Almost Static Stack](https://i.imgur.com/NStGYap.jpg)

# Discalimaer

This is my "training" repository. I put here every trick that is possible. It doesn't mean you should do the same. Be reasonable use only those techniques that you understand.

# An Almost Static Stack

This repo serves as a companion to the [tutorial of the same name, over on Medium](https://medium.com/superhighfives/).

## Getting started

``` shell
git clone https://github.com/stereobooster/an-almost-static-stack.git
cd an-almost-static-stack
yarn install
yarn start
```

Once you're ready to deploy to ~~[Surge](https://surge.sh)~~, run:

``` shell
yarn deploy
```

Voila!

If you're not into [Yarn](https://yarnpkg.com/), `npm install`, `npm start` and `npm run deploy` all work as well.

**WARNING** Do not use **bare** Surge. It uses HTTP1.1 without Keep-Alive

![Surge waterfall](/images/surge-waterfall.png)

**WARNING** Do not use **bare** S3 for website hosting (HTTP1, no compression, no HTTPS)

Hosting: use Firebase or S3 + CloudFront or S3 + Cloudflare. All of them have very cheap or free plans.

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find more information [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
