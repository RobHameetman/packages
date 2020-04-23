import ASCEND from "./ascend.txt";
import BLOODY from "./bloody.txt";
import CHUNKY from "./chunky.txt";
import CURSIVE from "./cursive.txt";
import CYBER from "./cyber.txt";
import DEFAULT from "./default.txt";
import GRAFFITI from "./graffiti.txt";
import KEYBOARD from "./keyboard.txt";
import LINEAR from "./linear.txt";
import MODULAR from "./modular.txt";
import OCTURA from "./octura.txt";
import OGRE from "./ogre.txt";
import RECT from "./rect.txt";
import REVERSE from "./reverse.txt";
import ROUNDED from "./rounded.txt";
import SHADOW from "./shadow.txt";
import SHARP from "./sharp.txt";
import SLANT from "./slant.txt";
import SOFT from "./soft.txt";
import VARSITY from "./varsity.txt";

export const BANNER_ASCEND: string = ASCEND;
export const getBannerAscend = (): string => ASCEND;
export const logBannerAscend = (): void => console.log(ASCEND);

export const BANNER_BLOODY: string = BLOODY;
export const getBannerBloody = (): string => BLOODY;
export const logBannerBloody = (): void => console.log(BLOODY);

export const BANNER_CHUNKY: string = CHUNKY;
export const getBannerChunky = (): string => CHUNKY;
export const logBannerChunky = (): void => console.log(CHUNKY);

export const BANNER_CURSIVE: string = CURSIVE;
export const getBannerCursive = (): string => CURSIVE;
export const logBannerCursive = (): void => console.log(CURSIVE);

export const BANNER_CYBER: string = CYBER;
export const getBannerCyber = (): string => CYBER;
export const logBannerCyber = (): void => console.log(CYBER);

export const BANNER_DEFAULT: string = DEFAULT;
export const getBannerDefault = (): string => DEFAULT;
export const logBannerDefault = (): void => console.log(DEFAULT);

export const BANNER_GRAFFITI: string = GRAFFITI;
export const getBannerGraffiti = (): string => GRAFFITI;
export const logBannerGraffiti = (): void => console.log(GRAFFITI);

export const BANNER_KEYBOARD: string = KEYBOARD;
export const getBannerKeyboard = (): string => KEYBOARD;
export const logBannerKeyboard = (): void => console.log(KEYBOARD);

export const BANNER_LINEAR: string = LINEAR;
export const getBannerLinear = (): string => LINEAR;
export const logBannerLinear = (): void => console.log(LINEAR);

export const BANNER_MODULAR: string = MODULAR;
export const getBannerModular = (): string => MODULAR;
export const logBannerModular = (): void => console.log(MODULAR);

export const BANNER_OCTURA: string = OCTURA;
export const getBannerOctura = (): string => OCTURA;
export const logBannerOctura = (): void => console.log(OCTURA);

export const BANNER_OGRE: string = OGRE;
export const getBannerOgre = (): string => OGRE;
export const logBannerOgre = (): void => console.log(OGRE);

export const BANNER_RECT: string = RECT;
export const getBannerRect = (): string => RECT;
export const logBannerRect = (): void => console.log(RECT);

export const BANNER_REVERSE: string = REVERSE;
export const getBannerReverse = (): string => REVERSE;
export const logBannerReverse = (): void => console.log(REVERSE);

export const BANNER_ROUNDED: string = ROUNDED;
export const getBannerRounded = (): string => ROUNDED;
export const logBannerRounded = (): void => console.log(ROUNDED);

export const BANNER_SHADOW: string = SHADOW;
export const getBannerShadow = (): string => SHADOW;
export const logBannerShadow = (): void => console.log(SHADOW);

export const BANNER_SHARP: string = SHARP;
export const getBannerSharp = (): string => SHARP;
export const logBannerSharp = (): void => console.log(SHARP);

export const BANNER_SLANT: string = SLANT;
export const getBannerSlant = (): string => SLANT;
export const logBannerSlant = (): void => console.log(SLANT);

export const BANNER_SOFT: string = SOFT;
export const getBannerSoft = (): string => SOFT;
export const logBannerSoft = (): void => console.log(SOFT);

export const BANNER_VARSITY: string = VARSITY;
export const getBannerVarsity = (): string => VARSITY;
export const logBannerVarsity = (): void => console.log(VARSITY);

export enum Banners {
  ascend = (ASCEND as unknown) as Banners,
  bloody = (BLOODY as unknown) as Banners,
  chunky = (CHUNKY as unknown) as Banners,
  cursive = (CURSIVE as unknown) as Banners,
  cyber = (CYBER as unknown) as Banners,
  default = (DEFAULT as unknown) as Banners,
  graffiti = (GRAFFITI as unknown) as Banners,
  keyboard = (KEYBOARD as unknown) as Banners,
  linear = (LINEAR as unknown) as Banners,
  modular = (MODULAR as unknown) as Banners,
  octura = (OCTURA as unknown) as Banners,
  ogre = (OGRE as unknown) as Banners,
  rect = (RECT as unknown) as Banners,
  reverse = (REVERSE as unknown) as Banners,
  rounded = (ROUNDED as unknown) as Banners,
  shadow = (SHADOW as unknown) as Banners,
  sharp = (SHARP as unknown) as Banners,
  slant = (SLANT as unknown) as Banners,
  soft = (SOFT as unknown) as Banners,
  varsity = (VARSITY as unknown) as Banners,
}

export type BannerName = keyof typeof Banners;

export const isValidBannerName = (value: unknown): value is BannerName => {
  return typeof value === "string" && Object.keys(Banners).includes(value);
};

export type BannerCollection = {
  readonly [K in BannerName]: string;
};

export const BANNERS: BannerCollection = Object.freeze({
  ascend: ASCEND,
  bloody: BLOODY,
  chunky: CHUNKY,
  cursive: CURSIVE,
  cyber: CYBER,
  default: DEFAULT,
  graffiti: GRAFFITI,
  keyboard: KEYBOARD,
  linear: LINEAR,
  modular: MODULAR,
  octura: OCTURA,
  ogre: OGRE,
  rect: RECT,
  reverse: REVERSE,
  rounded: ROUNDED,
  shadow: SHADOW,
  sharp: SHARP,
  slant: SLANT,
  soft: SOFT,
  varsity: VARSITY,
});

export const BANNER_NAMES: ReadonlyArray<BannerName> = Object.freeze([...(Object.keys(BANNERS) as Array<BannerName>)]);

enum _GetBannerDebugLevels {
  error = "error",
  warn = "warn",
  none = "none",
}

export type GetBannerDebugLevel = keyof typeof _GetBannerDebugLevels;

export const getBanner = (
  name: string,
  debug: GetBannerDebugLevel = _GetBannerDebugLevels.none
): string | undefined => {
  if (isValidBannerName(name)) {
    return BANNERS[name];
  } else {
    const message = `${name} is not a valid banner name`;

    switch (debug) {
      case _GetBannerDebugLevels.error:
        throw new Error(message);
      case _GetBannerDebugLevels.warn:
        console.warn(message);
    }
  }

  return undefined;
};

export const getBanners = (): BannerCollection => {
  return BANNERS;
};

export const getRandomBannerName = (): BannerName => {
  const zeroBasedLength = BANNER_NAMES.length - 1;

  return BANNER_NAMES[Math.trunc((Math.random() * zeroBasedLength) % zeroBasedLength)];
};

export const getRandomBanner = (): string => {
  return BANNERS[getRandomBannerName()];
};

export const logRandomBanner = (): void => {
  console.log(getRandomBanner());
};

export default {
  BANNER_ASCEND,
  BANNER_BLOODY,
  BANNER_CHUNKY,
  BANNER_CURSIVE,
  BANNER_CYBER,
  BANNER_DEFAULT,
  BANNER_GRAFFITI,
  BANNER_KEYBOARD,
  BANNER_LINEAR,
  BANNER_MODULAR,
  BANNER_OCTURA,
  BANNER_OGRE,
  BANNER_RECT,
  BANNER_REVERSE,
  BANNER_ROUNDED,
  BANNER_SHADOW,
  BANNER_SHARP,
  BANNER_SLANT,
  BANNER_SOFT,
  BANNER_VARSITY,
  BANNER_NAMES,
  BANNERS,
  Banners,
  getBannerAscend,
  getBannerBloody,
  getBannerChunky,
  getBannerCursive,
  getBannerCyber,
  getBannerDefault,
  getBannerGraffiti,
  getBannerKeyboard,
  getBannerLinear,
  getBannerModular,
  getBannerOctura,
  getBannerOgre,
  getBannerRect,
  getBannerReverse,
  getBannerRounded,
  getBannerShadow,
  getBannerSharp,
  getBannerSlant,
  getBannerSoft,
  getBannerVarsity,
  getBanner,
  getBanners,
  getRandomBannerName,
  getRandomBanner,
  isValidBannerName,
  logBannerAscend,
  logBannerBloody,
  logBannerChunky,
  logBannerCursive,
  logBannerCyber,
  logBannerDefault,
  logBannerGraffiti,
  logBannerKeyboard,
  logBannerLinear,
  logBannerModular,
  logBannerOctura,
  logBannerOgre,
  logBannerRect,
  logBannerReverse,
  logBannerRounded,
  logBannerShadow,
  logBannerSharp,
  logBannerSlant,
  logBannerSoft,
  logBannerVarsity,
  logRandomBanner,
};
