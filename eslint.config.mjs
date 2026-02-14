import nextConfig from "eslint-config-next/core-web-vitals"

const eslintConfig = [
  ...nextConfig,
  {
    ignores: [".source/", ".next/", "node_modules/", "src/components/ui/"],
  },
]

export default eslintConfig
