import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    // Here, we directly add the plugin and its rules
    rules: {
      // Enforce consistent indentation (2 spaces)
      indent: ["error", 2],

      // Disallow unused variables to keep the code clean
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

      // Enforce consistent semicolons
      semi: ["error", "always"],

      // Enforce single quotes for consistency
      quotes: ["error", "double"],

      // Prevent console.log from being used in production code
      "no-console": ["warn", { allow: ["warn", "error"] }],

      // Enforce strict mode for better code quality
      strict: ["error", "global"],

      // Enforce newline at the end of files
      "eol-last": ["error", "always"],

      // Disallow the use of `any` type in TypeScript
      "@typescript-eslint/no-explicit-any": "warn",

      // Enforce return types on functions (especially useful for TypeScript)
      "@typescript-eslint/explicit-module-boundary-types": "warn",

      // Allow for better readability of long lines (max line length of 80)
      "max-len": ["error", { code: 500, ignoreUrls: true }],

      // Enforce destructuring where applicable (object and array)
      "prefer-destructuring": [
        "error",
        {
          object: true,
          array: true,
        },
        {
          enforceForRenamedProperties: false,
        },
      ],

      // Ensure consistent spacing inside braces
      "object-curly-spacing": ["error", "always"],

      // Enforce consistent naming for functions
      "func-names": ["error", "always"],

      // Ensure React components have a return type
      "react/prop-types": "off", // Next.js uses TypeScript for types
      "react/react-in-jsx-scope": "off", // Next.js auto-imports React
    },
  },
];

export default eslintConfig;
