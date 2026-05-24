module.exports = {
    bindingAddress: '0.0.0.0',
    port: process.env.PORT || 8080,
    ssl: false,
    crossDomain: true,
    logger: () => {},
    disableConsoleConfigLogging: true,
    diskChromiumPath: null,
    runDiskChromiumSetup: false
};
