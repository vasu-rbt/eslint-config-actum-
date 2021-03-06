module.exports = {
  extends: ['./prod.js'],

  /* Development rules */
  rules: {
    "new-cap": [2, {"capIsNew": false, "newIsCap": true}], // For Record() etc
    "no-class-assign": 0, // Class assign is used for higher order components
    "no-nested-ternary": 0, // It's nice for JSX
    "no-param-reassign": 0, // We love param reassignment. Naming is hard
    "no-shadow": 0, // Shadowing is a nice language feature. Naming is hard
    "no-underscore-dangle": 0, // It's classic pattern to denote private props
    "react/prefer-stateless-function": 0, // We are not there yet
    "import/imports-first": 0, // Este sorts by atom/sort-lines natural order
    "react/jsx-filename-extension": 0, // No, JSX belongs to .js files
    "jsx-a11y/html-has-lang": 0, // Can't recognize the Helmet
    "no-confusing-arrow": 0, // This rule is super confusing
    "no-console": 0,
    "no-alert": 0,
    "no-undef": 0,
    "no-var": 1,
  }
};
