import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Vendored registry components (originkit CLI + componentry shadcn registry):
    "src/components/originkit/**",
    "src/components/ui/kinetic-text-reveal.tsx",
    "src/components/ui/scroll-based-velocity.tsx",
    "src/components/ui/split-flap-display.tsx",
  ]),
]);

export default eslintConfig;
