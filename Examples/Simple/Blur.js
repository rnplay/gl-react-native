const React = require("react-native");
const GL = require("gl-react-native");
const Blur1D = require("./Blur1D");

module.exports = GL.createComponent(({ width, height, factor, children }) =>
    <Blur1D width={width} height={height} direction={[ factor, 0 ]}>
      <Blur1D width={width} height={height} direction={[ 0, factor ]}>
        {children}
      </Blur1D>
    </Blur1D>
, {
  displayName: "Blur"
});
