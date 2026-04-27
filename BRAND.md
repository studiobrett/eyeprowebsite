# EyePro Brand Guide

## Logo
Primary logo: `/public/images/eyepro-logo.webp`

## Colors

### Primary Palette (derived from logo)
| Name | Hex | Usage |
|------|-----|-------|
| **Eyepro Blue** | `#2A9BD6` | Primary accent, CTAs, links |
| **Eyepro Blue Dark** | `#1A7BA8` | Hover states, emphasis |
| **Eyepro Ink** | `#1A1A1A` | Logo text, headings |
| **Eyepro Sky** | `#A8D8F0` | Light accents, backgrounds |

### Neutral Palette
| Name | Hex | Usage |
|------|-----|-------|
| **Slate 900** | `#0F172A` | Body text, dark backgrounds |
| **Slate 600** | `#475569` | Secondary text |
| **Slate 100** | `#F1F5F9` | Light backgrounds, cards |
| **White** | `#FFFFFF` | Backgrounds, text on dark |

### Semantic Colors
| Name | Hex | Usage |
|------|-----|-------|
| **Emergency Red** | `#DC2626` | Emergency CTAs, alerts |
| **Success Green** | `#16A34A` | Confirmations |

## Typography

### Font Family
**Montserrat** — clean, modern, medical-professional feel

```css
font-family: 'Montserrat', system-ui, sans-serif;
```

### Type Scale
| Element | Weight | Size | Tracking |
|---------|--------|------|----------|
| H1 | 700 (Bold) | 48px / 3rem | -0.02em |
| H2 | 700 (Bold) | 36px / 2.25rem | -0.02em |
| H3 | 600 (Semibold) | 24px / 1.5rem | -0.01em |
| H4 | 600 (Semibold) | 20px / 1.25rem | normal |
| Body | 400 (Regular) | 16px / 1rem | normal |
| Body Large | 400 (Regular) | 18px / 1.125rem | normal |
| Small | 500 (Medium) | 14px / 0.875rem | 0.01em |
| Caption | 500 (Medium) | 12px / 0.75rem | 0.02em |

### Font Weights Used
- 400 Regular — body text
- 500 Medium — captions, labels, nav
- 600 Semibold — subheadings, emphasis
- 700 Bold — headings, CTAs

## Spacing

Base unit: 4px

| Name | Value |
|------|-------|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 32px |
| 2xl | 48px |
| 3xl | 64px |

## Border Radius

| Element | Radius |
|---------|--------|
| Buttons | 8px |
| Cards | 12px |
| Modals | 16px |
| Pills/Tags | 9999px (full) |

## Shadows

```css
/* Card shadow */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);

/* Elevated shadow (hover) */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);

/* Modal shadow */
box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.04);
```

## Button Styles

### Primary
- Background: Eyepro Blue (#2A9BD6)
- Text: White
- Hover: Eyepro Blue Dark (#1A7BA8)
- Padding: 12px 24px
- Font: 600 weight

### Secondary (Outline)
- Background: Transparent
- Border: 2px solid Eyepro Blue
- Text: Eyepro Blue
- Hover: Background Eyepro Blue/5%

### Emergency
- Background: Emergency Red (#DC2626)
- Text: White
- Hover: Darken 10%

## Component Patterns

### Cards
- Background: White
- Border: 1px solid Slate 200 (#E2E8F0)
- Radius: 12px
- Padding: 24px
- Shadow: Card shadow

### Section Headings
- Uppercase label (optional): Slate 500, 12px, 600 weight, tracking 0.05em
- Main heading: Eyepro Ink, H2
- Divider accent: 32px × 2px bar in Eyepro Blue

### Location Cards
- State badge: Slate 100 background, Slate 600 text, pill shape
- Phone number: Eyepro Blue, 600 weight
