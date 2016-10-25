'use strict';

var semver = require('semver');
var css = require('borschik/lib/techs/css');

exports.Tech = css.Tech.inherit({
    minimize: function(content) {
        var csso = require('csso'); // lazy require
        var cssoOptions = this.opts && this.opts.techOptions && this.opts.techOptions.csso || {};

        // CSSO version less than 1.4.0
        if (!csso.version && !csso.minify) {
            return csso.justDoIt(csso);
        }

        // CSSO 1.4.x
        if (!csso.version && csso.minify) {
            return csso.minify(csso);
        }

        // CSSO ^1.5.0
        if (semver.satisfies(csso.version, '1.x')) {
            return csso.minify(content, cssoOptions);
        }

        // CSSO 2.x
        if (semver.satisfies(csso.version, '2.x')) {
            return csso.minify(content, cssoOptions).css;
        }

        throw Error('Borschik does not support CSSO version ' + csso.version);
    }
});

exports.File = css.File;
