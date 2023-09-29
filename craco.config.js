import million from "./million/compiler";
module.exports = {
  webpack: {
    plugins: { add: [million.webpack({ auto: true })] }
  }
};
