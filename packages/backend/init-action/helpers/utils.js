const getCurrentTimestamp = () => Math.round(new Date().getTime() / 1000);

const buildHistoryIndex = history => {
  history.reduce(
    (historyIndex, val, idx) => ({
      ...historyIndex,
      [val.sha]: idx
    }),
    {}
  );
};

module.exports = {
  getCurrentTimestamp,
  buildHistoryIndex
};
