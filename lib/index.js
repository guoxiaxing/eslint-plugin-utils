/**
 * @fileoverview eslint plugin for utils
 * @author jslib-book
 */
"use strict";


const requireIndex = require("requireindex");

module.exports = {
    rules: requireIndex(__dirname + "/rules"),
    configs: {
        plugins: ['utils'],
        rules: {
            'utils/type-typeof-limit': 'error',
            'utils/type-instanceof-limit': 'error'
        }
    }
}



