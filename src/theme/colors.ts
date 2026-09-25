// src/theme/colors.ts
export const colors = {
  // Marca
  primary: '#0F6B4F',
  primaryPressed: '#0A5139',
  primarySoft: '#E3F1EB',
  accent: '#E8A317',
  accentSoft: '#FCF3DF',

  // Estados
  success: '#1E8E5A',
  successSoft: '#E4F4EC',
  warning: '#B7791F',
  warningSoft: '#FDF1DE',
  danger: '#C8372D',
  dangerPressed: '#A42C24',
  dangerSoft: '#FBE9E7',
  info: '#2B6CB0',
  infoSoft: '#E6EFF9',

  // Texto
  text: '#16211C',
  textMuted: '#5B6B63',
  textInverse: '#FFFFFF',

  // Superficies
  background: '#FFFFFF',
  surface: '#F4F7F5',
  surfacePressed: '#E8EEEA',
  border: '#D5DDD8',

  // Deshabilitado
  disabled: '#B8C2BC',
  disabledSoft: '#EEF1EF',

  overlay: 'rgba(22, 33, 28, 0.4)',
  transparent: 'transparent',
} as const;

export type ColorName = keyof typeof colors;
