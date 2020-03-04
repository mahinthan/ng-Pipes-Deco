export function Override(value) {
  return (target, key) => {
    Object.defineProperty(target, key, {
      set: () => target.key = value,
      get: () => value
    });
  }
}