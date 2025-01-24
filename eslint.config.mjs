import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname, // Ensure relative path for plugins
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  // Add any additional rules or plugins here
];

export default eslintConfig;
