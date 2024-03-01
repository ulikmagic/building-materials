/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['emk.kg'],
    unoptimized: true
  },
  output: 'export',
  publicRuntimeConfig: {

  },
  env: {
    TOKEN: 'dvfc sskr vsjf ittj',
    EMAIL: 'dn.group.kgz@gmail.com',
    USERNAME: 'nurs',
    PASSWORD: 'admin1204'
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    )

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ['@svgr/webpack'],
      },
    )

    fileLoaderRule.exclude = /\.svg$/i
    return config
  }
};

export default nextConfig;
