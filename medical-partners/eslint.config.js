import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginTailwindcss from "eslint-plugin-tailwindcss";
import eslintPluginReact from "eslint-plugin-react";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
      },
      globals: {
        browser: true,
        es2024: true,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      prettier: eslintPluginPrettier,
      import: eslintPluginImport,
      tailwindcss: eslintPluginTailwindcss,
      react: eslintPluginReact,
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "prettier/prettier": "error",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "tailwindcss/no-unnecessary-arbitrary-value": "error",
      "@typescript-eslint/no-unused-expressions": "off",
      "import/no-named-as-default-member": "off",
      "import/export": "off",
      "react/display-name": "off",
      "react/react-in-jsx-scope": "off",
      "tailwindcss/classnames-order": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "react/prop-types": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          node: {
            extensions: [".ts", ".tsx"],
            moduleDirectory: ["node_modules", "src/"],
          },
          project: "./tsconfig.json",
        },
      },
    },
  },
];
