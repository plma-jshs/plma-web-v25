const elements = ["background", "foreground", "text", "border", "fill"] as const
const intents = ["basic", "inverse"] as const
const levels = ["strong", "default", "subtle"] as const
const states = ["default", "hover", "active", "disabled"] as const

/**
 * Represents a semantic color type used throughout the application.
 *
 * This type generates string literal unions combining the following dimensions:
 * - **Elements**: The UI component part (background, foreground, text, border, fill)
 * - **Intents**: The semantic purpose (basic, inverse)
 * - **Levels**: The visual hierarchy (strong, default, subtle)
 * - **States**: The interaction state (hover, active, disabled)
 *
 * @example
 * // Valid semantic color types:
 * type ValidColors =
 *   | "background-basic-strong-hover"
 *   | "text-inverse-default-active"
 *   | "border-basic-subtle-disabled"
 *
 * @remarks
 * The type is automatically generated as a union of all valid combinations
 * following the pattern: `{element}-{intent}-{level}-{state}`
 */
export type SemanticColorType =
    `${(typeof elements)[number]}-${(typeof intents)[number]}-${(typeof levels)[number]}-${(typeof states)[number]}`
