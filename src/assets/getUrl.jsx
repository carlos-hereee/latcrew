export const loadAsset = (e) => {
  return new URL(`./dir/${e}`, import.meta.url).href;
};
