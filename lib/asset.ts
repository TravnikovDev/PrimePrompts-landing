// Plain <img> tags don't get Next's basePath prefix, so public/ assets
// referenced from server components must go through this helper.
// BASE_PATH is set by the GitHub Pages workflow, empty elsewhere.
export function withBase(path: string): string {
  return (process.env.BASE_PATH ?? "") + path;
}
