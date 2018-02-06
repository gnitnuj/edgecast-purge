# edgecast-purge

![Node](https://img.shields.io/node/v/edgecast-purge.svg?style=flat-square)
[![NPM](https://img.shields.io/npm/v/edgecast-purge.svg?style=flat-square)](https://www.npmjs.com/package/edgecast-purge)
[![Travis](https://img.shields.io/travis/gnitnuj/edgecast-purge/master.svg?style=flat-square)](https://travis-ci.org/gnitnuj/edgecast-purge)
[![David](https://img.shields.io/david/gnitnuj/edgecast-purge.svg?style=flat-square)](https://david-dm.org/gnitnuj/edgecast-purge)
[![Coverage Status](https://img.shields.io/coveralls/gnitnuj/edgecast-purge.svg?style=flat-square)](https://coveralls.io/github/gnitnuj/edgecast-purge)
[![NPM](https://img.shields.io/npm/dt/edgecast-purge.svg?style=flat-square)](https://www.npmjs.com/package/edgecast-purge)

> a service to purge media from edgecast&#39;s cache

### Usage

```js
import edgecastPurge from 'edgecast-purge';

```

### Installation

Install via [yarn](https://github.com/yarnpkg/yarn)

	yarn add edgecast-purge (--dev)

or npm

	npm install edgecast-purge (--save-dev)


### configuration

You can pass in extra options as a configuration object (➕ required, ➖ optional, ✏️ default).

```js
import edgecastPurge from 'edgecast-purge';

```

➖ **property** ( type ) ` ✏️ default `
<br/> 📝 description
<br/> ❗️ warning
<br/> ℹ️ info
<br/> 💡 example

### methods

#### #name

```js
edgecastPurge

```

### Examples

See [`example`](example/script.js) folder or the [runkit](https://runkit.com/gnitnuj/edgecast-purge) example.

### Builds

If you don't use a package manager, you can [access `edgecast-purge` via unpkg (CDN)](https://unpkg.com/edgecast-purge/), download the source, or point your package manager to the url.

`edgecast-purge` is compiled as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules & [ES2015 modules](http://www.2ality.com/2014/0
  -9/es6-modules-final.html) for bundlers that support the `jsnext:main` or `module` field in package.json (Rollup, Webpack 2)

The `edgecast-purge` package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist/umd` folder](https://unpkg.com/edgecast-purge/dist/umd/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a [`<script>` tag](https://unpkg.com/edgecast-purge) on your page. The UMD builds make `edgecast-purge` available as a `window.edgecastPurge` global variable.

### License

The code is available under the [MIT](LICENSE) license.

### Contributing

We are open to contributions, see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.

### Misc

This module was created using [generator-module-boilerplate](https://github.com/duivvv/generator-module-boilerplate).
