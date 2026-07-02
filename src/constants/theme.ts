export const colors = {
  background: '#FFFFFF',
  text: '#111827', // dark gray, almost black
  textSecondary: '#6B7280',
  textTertiary: '#9CA3AF',
  primary: '#0F172A', // Slate 900 - very dark blue/black for primary actions
  primaryLight: '#334155',
  accent: '#2563EB', // Blue for links/active states if needed
  border: '#E5E7EB',
  surface: '#F9FAFB', // Very light gray for cards/sections
  surfaceHighlight: '#F3F4F6',
  error: '#EF4444',
  success: '#10B981',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
};

export const typography = {
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  weights: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
};
