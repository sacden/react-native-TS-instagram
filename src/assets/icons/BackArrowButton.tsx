import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const BackArrowButton = () => (
  <Svg width={10} height={18} fill="none">
    <Path
      d="M9.577 1.28A.75.75 0 1 0 8.517.22L.706 8.03a1 1 0 0 0 0 1.413l7.81 7.81a.75.75 0 0 0 1.06-1.061L2.121 8.736 9.577 1.28Z"
      fill="#262626"
    />
  </Svg>
);
