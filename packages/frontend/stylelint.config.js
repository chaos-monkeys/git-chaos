module.exports = {
  "extends": "stylelint-config-recommended-scss",
  rules: {
    // FIXME: fixes issue with SCSS 'map-get' function parsing breaking the build
    "function-calc-no-unspaced-operator": null,
  }
}


