import convert from 'color-convert';

export const hueToHex = (hue: number | undefined): string => {
    const normalizedHue = (hue! % 360 + 360) % 360;

    const [r, g, b] = convert.hsl.rgb([normalizedHue, 100, 50]);

    const hexColor = `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;

    return hexColor;
};

