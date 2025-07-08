
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Premium luxury colors
				luxury: {
					background: 'hsl(var(--luxury-background))',
					surface: 'hsl(var(--luxury-surface))',
					primary: 'hsl(var(--luxury-primary))',
					secondary: 'hsl(var(--luxury-secondary))',
					accent: 'hsl(var(--luxury-accent))',
					muted: 'hsl(var(--luxury-muted))',
					border: 'hsl(var(--luxury-border))',
				}
			},
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'display': ['Space Grotesk', 'system-ui', 'sans-serif'],
				'brand': ['Unbounded', 'system-ui', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'luxury-fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'luxury-slide-in': {
					'0%': {
						opacity: '0',
						transform: 'translateX(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'luxury-scale': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'luxury-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(30, 58, 138, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 30px rgba(30, 58, 138, 0.6)'
					}
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(100%)'
					},
					'100%': {
						transform: 'translateX(0)'
					}
				},
				'pulse-slow': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.5'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'luxury-fade-in': 'luxury-fade-in 0.8s ease-out forwards',
				'luxury-slide-in': 'luxury-slide-in 0.6s ease-out forwards',
				'luxury-scale': 'luxury-scale 0.4s ease-out forwards',
				'luxury-glow': 'luxury-glow 2s ease-in-out infinite',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'pulse-slow': 'pulse-slow 2s infinite'
			},
			backdropBlur: {
				'xs': '2px',
			},
			boxShadow: {
				'luxury': '0 8px 32px rgba(0, 0, 0, 0.12)',
				'luxury-hover': '0 20px 60px rgba(0, 0, 0, 0.15)',
				'luxury-glow': '0 0 30px rgba(30, 58, 138, 0.4)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
