import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const BookmarkIcon = () => (
  <Svg width={24} height={24} fill="none">
    <Path
      d="M19.875 2H4.125C3.506 2 3 2.45 3 3.005v19.46c0 .555.366.697.821.308l7.723-6.574a.54.54 0 0 1 .659-.005l7.97 6.594c.456.379.827.232.827-.323V3.005C21 2.449 20.5 2 19.875 2Zm-.563 18.02-5.968-4.937a2.302 2.302 0 0 0-1.468-.515c-.54 0-1.074.176-1.49.53L4.688 19.95V3.515h14.625V20.02Z"
      fill="#000"
      stroke="#000"
      strokeWidth={0.7}
    />
  </Svg>
);
