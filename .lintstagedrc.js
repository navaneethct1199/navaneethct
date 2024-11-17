const path = require("path");

const lint = (files) =>
  `next lint --fix --file ${files
    .map((file) => path.relative(process.cwd(), file))
    .join(" --file ")}`;

module.exports = {
  "*": "prettier --ignore-unknown --write",
  "*.{js,jsx,ts,tsx}": [lint],
};
