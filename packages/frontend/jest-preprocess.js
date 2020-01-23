// taken from https://www.gatsbyjs.org/docs/unit-testing/

const babelOptions = {
  presets: ["babel-preset-gatsby", "@babel/preset-typescript"],
};

// eslint gets confused - it's 100% a dev dependency :)
// eslint-disable-next-line import/no-extraneous-dependencies
module.exports = require("babel-jest").createTransformer(babelOptions);
