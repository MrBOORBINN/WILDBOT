/** API URL helper. Leave VITE_API_BASE_URL empty for same-origin web deployment.
 * For a Capacitor APK, set it to the HTTPS URL of your deployed backend. */
const configuredBase = (import.meta.env.VITE_API_BASE_URL || '').trim();
export const API_BASE_URL = configuredBase.replace(/\/$/, '');
export function apiUrl(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${API_BASE_URL}${normalizedPath}`;
}
