const getCurrentTimestamp = () => Math.round((new Date()).getTime() / 1000);

module.exports = {
    getCurrentTimestamp,
};
