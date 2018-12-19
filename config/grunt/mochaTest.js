/* eslint-disable unicorn/filename-case */
const chai = require('chai');

module.exports = {
    default: {
        options: {
            bail: true,
            clearRequireCache: true,
            require: [
                () => {
                    global.expect = chai.expect;
                }
            ]
        },
        src: [
            'test/integration/**/*.js'
        ]
    }
};
