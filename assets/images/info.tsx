import React from 'react';
import {Svg, G, Path} from 'react-native-svg';
import {THEME} from '../theme/theme';

const Info = () => (
  <Svg
    fill={THEME.COLORS.SECONDARY_TEXT}
    height="20"
    stroke={THEME.COLORS.SECONDARY_TEXT}
    viewBox="0 0 24 24"
    width="20"
    xmlns="http://www.w3.org/2000/svg">
    <G fill="none" stroke="none">
      <Path d="m24 0v24h-24v-24zm-11.4065099 23.257841-.0115499.0016721-.0710625.0355308-.0189986.003703-.0151639-.003703-.0710604-.0355308c-.0098319-.0031469-.0186055-.0004896-.0235127.0053943l-.0041098.0109236-.0170913.4272787.0049537.0203897.0110101.0122145.1035729.0739792.0148714.0039203.0117661-.0039203.103575-.0739792.0126036-.0160406.0033589-.0165636-.0170917-.4272787c-.0019886-.0101297-.0085498-.0165317-.0160709-.01799zm.2649005-.1125548-.0138421.002021-.1847042.0923525-.0099621.0102455-.0026879.0112062.0179.4295275.0048406.0127789.0084511.0070753.2009542.0927458c.0120883.003661.0228931-.0002514.0284884-.0080125l.0039949-.0140625-.0341458-.6146308c-.0023895-.0119434-.0102675-.0195315-.0192871-.0212469zm-.7153433.002021c-.0098295-.0049147-.020871-.0020466-.0274108.0052882l-.0057192.0139377-.0341459.6146308c-.0006391.0115.0070385.0206963.0168767.0234037l.0156079-.0013287.2009546-.0927458.0094391-.0080584.0038546-.0117958.0178967-.4295275-.003156-.0125938-.0094919-.0088579z" />
      <Path
        d="m12 2c5.5228 0 10 4.47715 10 10 0 5.5228-4.4772 10-10 10-5.52285 0-10-4.4772-10-10 0-5.52285 4.47715-10 10-10zm-.01 8h-.99c-.5523 0-1 .4477-1 1 0 .51285.386027.9355092.8833761.9932725l.1166239.0067275v4.99c0 .5206133.3938293.9492373.8999333 1.0040734l.1100667.0059266h.49c.5523 0 1-.4477 1-1 0-.3289778-.1588938-.6208988-.4041306-.8031418l-.0958694-.0630582v-5.1238c0-.5206133-.3939164-.9492373-.8999507-1.0040734zm.01-3c-.5523 0-1 .44772-1 1s.4477 1 1 1 1-.44772 1-1-.4477-1-1-1z"
        fill={THEME.COLORS.SECONDARY_TEXT}
      />
    </G>
  </Svg>
);

export default Info;
