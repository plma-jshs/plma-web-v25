const shadeScales = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
/**
 * Represents a color object with optional shade variants.
 *
 * @example
 * ```typescript
 * const primaryColor: Color = {
 *   50: '#f0f9ff',
 *   100: '#e0f2fe',
 *   500: '#0ea5e9',
 *   900: '#0c2d6b'
 * };
 * ```
 *
 * @remarks
 * Each property key corresponds to a shade level from the `shadeScales` array,
 * and the value is the hex color code (or any valid CSS color string).
 * All shade properties are optional, allowing flexible color definitions.
 */
export type Color = Partial<Record<(typeof shadeScales)[number], string>>
