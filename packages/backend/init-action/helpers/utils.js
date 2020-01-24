const getCurrentTimestamp = () => Math.round(new Date().getTime() / 1000);

const buildHistoryIndex = history => {
  return history.reduce((historyIndex, val, idx) => {
    historyIndex[val.sha] = idx;
    return historyIndex;
  }, {});
};

module.exports = {
  getCurrentTimestamp,
  buildHistoryIndex
};
