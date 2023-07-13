export const loadAsset = (e) => {
  return new URL(e, import.meta.url).href;
};
