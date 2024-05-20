export enum HexAlpha {
  Percent100 = 'FF',
  Percent95 = 'F2',
  Percent90 = 'E6',
  Percent85 = 'D9',
  Percent80 = 'CC',
  Percent75 = 'BF',
  Percent70 = 'B3',
  Percent65 = 'A6',
  Percent60 = '99',
  Percent55 = '8C',
  Percent50 = '80',
  Percent45 = '73',
  Percent44 = '70',
  Percent40 = '66',
  Percent35 = '59',
  Percent30 = '4D',
  Percent25 = '40',
  Percent24 = '3D',
  Percent20 = '33',
  Percent15 = '26',
  Percent12 = '1F',
  Percent10 = '1A',
  Percent5 = '0D',
  Percent0 = '00',
}

export const semiTransparentColor = (hex6: string, alpha: HexAlpha) =>
  `${hex6}${alpha}`;
