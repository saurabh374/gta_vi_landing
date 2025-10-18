export function asset(path) {
    if (!path) return path;
    const p = path.replace(/^\//, '');
    return `${import.meta.env.BASE_URL || '/'}/${p}`;
}