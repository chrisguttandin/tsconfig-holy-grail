const { dirname } = require('path');
const { load } = require('tsconfig');
const { parseJsonConfigFileContent, sys } = require('typescript');

describe('tsconfig-holy-grail', () => {
    let cwd;

    beforeEach(() => (cwd = './src/'));

    describe('tsconfig-browser.json', () => {
        let path;

        beforeEach(() => (path = 'tsconfig-browser.json'));

        it('should be a parsable config file', () => {
            return load(cwd, path).then(({ config, path: pth }) => parseJsonConfigFileContent(config, sys, dirname(pth), null, pth));
        });
    });

    describe('tsconfig-node.json', () => {
        let path;

        beforeEach(() => (path = 'tsconfig-node.json'));

        it('should be a parsable config file', () => {
            return load(cwd, path).then(({ config, path: pth }) => parseJsonConfigFileContent(config, sys, dirname(pth), null, pth));
        });
    });

    describe('tsconfig-universal.json', () => {
        let path;

        beforeEach(() => (path = 'tsconfig-universal.json'));

        it('should be a parsable config file', () => {
            return load(cwd, path).then(({ config, path: pth }) => parseJsonConfigFileContent(config, sys, dirname(pth), null, pth));
        });
    });

    describe('tsconfig-web-worker.json', () => {
        let path;

        beforeEach(() => (path = 'tsconfig-web-worker.json'));

        it('should be a parsable config file', () => {
            return load(cwd, path).then(({ config, path: pth }) => parseJsonConfigFileContent(config, sys, dirname(pth), null, pth));
        });
    });
});
