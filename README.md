## docs

- webpack 5 as a bundler
    - "webpack": "^5.28.0"
    - "webpack-cli": "^4.5.0"
    - "webpack-dev-server": "^3.11.2"
- use babel 7 to transpile js
    - "@babel/core": "^7.13.10"
    - "@babel/preset-env": "^7.13.12
    - "babel-loader": "^8.2.2"
- use cross-env to fix windows process.env.NODE_ENV issue
    - "cross-env": "^7.0.3"
- use css loader to interprets @import and url(), use mini-css-extract-plugin to extract CSS into separate files
    - "css-loader": "^5.2.0"
    - "mini-css-extract-plugin": "^1.3.9"
  > mini-css-extract-plugin.loader alternative: use style-loader to create <style> nodes from JS strings
- not live reload, make it hot update
    - devServer option `hot:true`
- use postcss to add autoprefixer or fallback css rules
    - "postcss": "^8.2.8"
    - "postcss-loader": "^5.2.0"
    - "postcss-preset-env": "^6.7.0"
- use .browserslistrc to control postcss patch level. e.g. IE 11
