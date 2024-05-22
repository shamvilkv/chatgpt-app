import {
  BLACK,
  WHITE,
  PRIMARY,
  SECONDARY,
  GREY,
  GREYDARK,
  GREYLIGHT,
} from './colors';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from './constants';

// FONT FAMILY
export const FONT_FAMILY_LIGHT = 'Gilroy-Light';
export const FONT_FAMILY_REGULAR = 'Gilroy-Regular';
export const FONT_FAMILY_MEDIUM = 'Gilroy-Medium';
export const FONT_FAMILY_SEMIBOLD = 'Gilroy-SemiBold';
export const FONT_FAMILY_BOLD = 'Gilroy-Bold';
export const FONT_FAMILY_EXTRABOLD = 'Gilroy-ExtraBold';

// FONT WEIGHT
export const FONT_WEIGHT_LIGHT = '400';
export const FONT_WEIGHT_REGULAR = '500';
export const FONT_WEIGHT_MEDIUM = '600';
export const FONT_WEIGHT_SEMIBOLD = '700';
export const FONT_WEIGHT_BOLD = '800';
export const FONT_WEIGHT_EXTRABOLD = '900';

//FONT SIZE RF VALUE
export const FONT_SIZE_8 = {
  fontSize: RFValue(8, SCREEN_HEIGHT),
};
export const FONT_SIZE_10 = {
  fontSize: RFValue(10, SCREEN_HEIGHT),
};
export const FONT_SIZE_12 = {
  fontSize: RFValue(12, SCREEN_HEIGHT),
};
export const FONT_SIZE_14 = {
  fontSize: RFValue(14, SCREEN_HEIGHT),
};
export const FONT_SIZE_16 = {
  fontSize: RFValue(16, SCREEN_HEIGHT),
};
export const FONT_SIZE_18 = {
  fontSize: RFValue(18, SCREEN_HEIGHT),
};
export const FONT_SIZE_20 = {
  fontSize: RFValue(20, SCREEN_HEIGHT),
};
export const FONT_SIZE_22 = {
  fontSize: RFValue(22, SCREEN_HEIGHT),
};
export const FONT_SIZE_24 = {
  fontSize: RFValue(24, SCREEN_HEIGHT),
};
export const FONT_SIZE_26 = {
  fontSize: RFValue(26, SCREEN_HEIGHT),
};
export const FONT_SIZE_28 = {
  fontSize: RFValue(28, SCREEN_HEIGHT),
};
export const FONT_SIZE_30 = {
  fontSize: RFValue(30, SCREEN_HEIGHT),
};

//FONT MIXINS
export const FONT_LIGHT = {
  fontFamily: FONT_FAMILY_LIGHT,
  fontWeight: FONT_WEIGHT_LIGHT,
};

export const FONT_LIGHT_W = {
  fontFamily: FONT_FAMILY_LIGHT,
  fontWeight: FONT_WEIGHT_LIGHT,
  color: WHITE,
};

export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_REGULAR_W = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
  color: WHITE,
};

export const FONT_MEDIUM = {
  fontFamily: FONT_FAMILY_MEDIUM,
  fontWeight: FONT_WEIGHT_MEDIUM,
};

export const FONT_MEDIUM_W = {
  fontFamily: FONT_FAMILY_MEDIUM,
  fontWeight: FONT_WEIGHT_MEDIUM,
  color: WHITE,
};

export const FONT_SEMIBOLD = {
  fontFamily: FONT_FAMILY_SEMIBOLD,
  fontWeight: FONT_WEIGHT_SEMIBOLD,
};
export const FONT_SEMIBOLD_W = {
  fontFamily: FONT_FAMILY_SEMIBOLD,
  fontWeight: FONT_WEIGHT_SEMIBOLD,
  color: WHITE,
};

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
};

export const FONT_BOLD_W = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
  color: WHITE,
};

export const FONT_EXTRABOLD = {
  fontFamily: FONT_FAMILY_EXTRABOLD,
  fontWeight: FONT_FAMILY_EXTRABOLD,
};

export const FONT_EXTRABOLD_W = {
  fontFamily: FONT_FAMILY_EXTRABOLD,
  fontWeight: FONT_FAMILY_EXTRABOLD,
  color: WHITE,
};

//FONT ALIGNMENTS
export const FONT_LEFT = {
  textAlign: 'left',
};

export const FONT_CENTER = {
  textAlign: 'center',
};

export const FONT_RIGHT = {
  textAlign: 'right',
};

export const FONT_COLOR_PRIMARY = {
  color: PRIMARY,
};
export const FONT_COLOR_BLACK = {
  color: BLACK,
};

export const FONT_COLOR_SECONDARY = {
  color: SECONDARY,
};

export const FONT_COLOR_GREY = {
  color: GREY,
};

export const FONT_COLOR_GREYDARK = {
  color: GREYDARK,
};
export const FONT_COLOR_GREYLIGHT = {
  color: GREYLIGHT,
};
