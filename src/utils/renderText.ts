/**
 * Utility to safely replace placeholders (e.g., {{athleteName}}) in copy text
 * with runtime values provided by the app (from backend or context).
 *
 * Example:
 * renderText("Welcome to {{appName}}, {{athleteName}}!", {
 *   appName: "NXUP",
 *   athleteName: "Jordan Smith",
 * });
 * → "Welcome to NXUP, Jordan Smith!"
 */

export function renderText(template: string, vars: Record<string, string>) {
  return template.replace(/{{(.*?)}}/g, (_, key) => {
    return key in vars ? vars[key] : `{{${key}}}`; // fallback leaves placeholder visible
  });
}
