// next.config.js

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // クライアントサイドのWebpack設定
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // サーバーサイドのWebpack設定
    if (isServer) {
      config.externals.push(
        ({ request }, callback) => {
          if (/^igniteui-webcomponents/.test(request)) {
            return callback(null, `commonjs ${request}`);
          }
          callback();
        }
      );
    }

    return config;
  },
};
