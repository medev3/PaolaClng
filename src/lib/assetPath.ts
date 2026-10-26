/** Build a public URL for assets with spaces or special characters in filenames. */
export function assetPath(...segments: string[]) {
  return `/assets/${segments.map((segment) => encodeURIComponent(segment)).join("/")}`;
}
