module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],

    theme: {
        extend: {
            // Шрифты в тёмной теме смотрятся отлично
            fontFamily: {
                orbitron: ['Orbitron', 'sans-serif'],
                rajdhani: ['Rajdhani', 'sans-serif'],
                mono: ['Share Tech Mono', 'monospace'],
            },

            // Тёмная киберпанк-палитра
            colors: {
                cyber: {
                    black: '#050505', // Почти абсолютный чёрный
                    dark: '#0a0a0c',  // Основной тёмный фон
                    panel: '#0f0f15', // Панели интерфейса / блоки
                    steel: '#1a1a20', // Металлический холодный
                    graphite: '#2a2a33', // Графитовый
                    dim: 'rgba(255, 255, 255, 0.03)', // Едва заметный свет
                    border: 'rgba(255, 255, 255, 0.08)', // Тонкие белые рамки
                }
            },

            // Фоновые паттерны ОЧИЩЕНЫ ОТ ГОЛУБОГО
            backgroundImage: {
                'grid-pattern':
                    "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)," +
                    "linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",

                'dots-pattern':
                    "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
            },

            // Анимации (оставляем)
            animation: {
                'pulse-fast': 'pulse 1.5s cubic-bezier(0.4,0,0.6,1) infinite',
                'scan': 'scan 3s linear infinite',
                'glitch': 'glitch 0.3s infinite',
                'float': 'float 6s ease-in-out infinite',
            },

            // Keyframes
            keyframes: {
                scan: {
                    '0%': { transform: 'translateY(-100%)', opacity: 0.1 },
                    '100%': { transform: 'translateY(100%)', opacity: 0.1 },
                },
                glitch: {
                    '0%': { transform: 'translate(0)' },
                    '20%': { transform: 'translate(-1px, 1px)' },
                    '40%': { transform: 'translate(-1px, -1px)' },
                    '60%': { transform: 'translate(1px, 1px)' },
                    '80%': { transform: 'translate(1px, -1px)' },
                    '100%': { transform: 'translate(0)' },
                },
                float: {
                    '0%,100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
            },
        },
    },

    plugins: [],
};
