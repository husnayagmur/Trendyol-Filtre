/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // React'ın katı modunu aktif hale getirin (isteğe bağlı)
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: /\.[jt]sx?$/, // Sadece JS/TS dosyalarından çağrılan SVG'ler için geçerli
            use: ["@svgr/webpack"],
        });
        return config;
    },
};

export default nextConfig;
