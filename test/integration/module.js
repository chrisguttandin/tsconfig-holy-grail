const { dirname } = require('path');
const { load } = require('tsconfig');
const { parseJsonConfigFileContent, sys } = require('typescript');

describe('tsconfig-holy-grail', () => {

    let cwd;

    beforeEach(() => cwd = './src/');

    describe('tsconfig-browser.json', () => {

        let path;

        beforeEach(() => path = 'tsconfig-browser.json');

        it('should be a parsable config file', () => {
            return load(cwd, path)
                .then(({ config, path }) => parseJsonConfigFileContent(config, sys, dirname(path), null, path));
        });

    });

    describe('tsconfig-node.json', () => {

        let path;

        beforeEach(() => path = 'tsconfig-node.json');

        it('should be a parsable config file', () => {
            return load(cwd, path)
                .then(({ config, path }) => parseJsonConfigFileContent(config, sys, dirname(path), null, path));
        });

    });

    describe('tsconfig-universal.json', () => {

        let path;

        beforeEach(() => path = 'tsconfig-universal.json');

        it('should be a parsable config file', () => {
            return load(cwd, path)
                .then(({ config, path }) => parseJsonConfigFileContent(config, sys, dirname(path), null, path));
        });

    });

    describe('tsconfig-web-worker.json', () => {

        let path;

        beforeEach(() => path = 'tsconfig-web-worker.json');

        it('should be a parsable config file', () => {
            return load(cwd, path)
                .then(({ config, path }) => parseJsonConfigFileContent(config, sys, dirname(path), null, path));
        });

    });

});
