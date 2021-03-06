module.exports = (grunt) => {
    const fix = grunt.option('fix') === true;

    return {
        'lint-config': {
            cmd: `eslint --config config/eslint/config.json --ext .js ${fix ? '--fix ' : ''}--report-unused-disable-directives *.js config/`
        },
        'lint-test': {
            cmd: `eslint --config config/eslint/test.json --ext .js ${fix ? '--fix ' : ''}--report-unused-disable-directives test/`
        },
        'test-integration': {
            cmd: 'mocha --bail --parallel --recursive --require config/mocha/config-integration.js test/integration'
        }
    };
};
