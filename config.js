module.exports = {
    bindingAddress: '0.0.0.0',
    port: process.env.PORT || 8080,
    crossDomain: true,
    publicUrl: 'https://railway.app',
    ssl: false,
    logger: () => {},
    disableConsoleConfigLogging: true,
    diskChromiumPath: null,
    runDiskChromiumSetup: false
};
