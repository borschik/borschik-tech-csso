borschik-tech-csso
==================

[![NPM Status][npm-img]][npm]
[![Travis Status][test-img]][travis]
[![Dependency Status][david-img]][david]

[npm]:          https://www.npmjs.org/package/borschik-tech-csso
[npm-img]:      https://img.shields.io/npm/v/borschik-tech-csso.svg

[travis]:       https://travis-ci.org/borschik/borschik-tech-csso
[test-img]:     https://img.shields.io/travis/borschik/borschik-tech-csso.svg?label=tests

[david]:        https://david-dm.org/borschik/borschik-tech-csso
[david-img]:    http://img.shields.io/david/borschik/borschik-tech-csso.svg?style=flat

[Borschik](https://github.com/borschik/borschik) CSS tech based on [CSSO](https://github.com/css/csso).

Install
-------

```
$ npm install --save-dev borschik-tech-csso
```

You can use any CSSO version. To do so, install `csso`:

```
$ npm install --save-dev csso@2.x
```

Usage
-----

```shell
$ borschik --input test.css --output test.min.css --tech csso --minimize=true
```

Options
-------

You can extend it with `--tech-options`

```shell
$ borschik -i test.css -t csso --tech-options='{ "csso": { "debug": true, "restructure": true } }'
```

Read more in the [CSSO documentation](https://github.com/css/csso#minifysource-options).

**Important:** `borschik` does not support source maps.

License
-------

MIT © [Andrew Abramov](https://github.com/blond)
