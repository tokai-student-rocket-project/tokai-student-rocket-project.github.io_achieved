const path = require("path");

const eslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((filename) => path.relative(process.cwd(), filename))
    .join(" --file ")}`;

module.exports = {
  "*.{js,ts,tsx}": [eslintCommand],
};
