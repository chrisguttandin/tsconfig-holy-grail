module.exports = () => {
    return {
        'lint-config': {
            cmd: 'npm run lint:config'
        },
        'lint-test': {
            cmd: 'npm run lint:test'
        },
        'test-integration': {
            cmd: 'mocha --bail --parallel --recursive --require config/mocha/config-integration.js test/integration'
        }
    };
};
