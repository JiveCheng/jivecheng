import { defineConfig, presetAttributify, presetWind3, transformerDirectives, transformerVariantGroup } from 'unocss';

export default defineConfig({
presets: [presetWind3(), presetAttributify()],
theme: {
colors: {
primary: 'oklch(25% 0.005 298)',
secondary: 'oklch(40% 0.005 298)',
background: 'oklch(96% 0.005 298)',
highlight: 'oklch(0.93 0.195089 103.2532 / 0.5)',
},
},
transformers: [transformerDirectives(), transformerVariantGroup()],
});
