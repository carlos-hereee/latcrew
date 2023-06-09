import shortid from "shortid";

export const lorem10 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, neque?";
export const lorem20 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, molestias reprehenderit. Voluptates fugit tenetur itaque minus sed, assumenda delectus accusantium!";
export const lorem30 =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt explicabo accusantium vel. Quos, illo. Velit est voluptatum at dignissimos, amet alias veritatis obcaecati assumenda, repellat aliquid non quae nam! Nobis.";

export let random100 = (n) => Math.floor(Math.random() * n) + 1;
export let randomMileague = () => Math.floor(Math.random() * (300000 - 20000 + 1));
export let randomPrice = () => Math.floor(Math.random() * (65000 - 6000 + 1));
export let minPrice = (count, increment) => {
  let prices = [];
  for (let i = 0; i < count; i++) {
    prices.push(5000 + i * increment);
  }
  return prices;
};

export const color = ["red", "blue", "black", "white", "yellow", "brown"];
export const getRandomArr = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const serviceSection = (n) => {
  return {
    hasHero: false,
    hasIcon: false,
    uid: shortid.generate(),
    subtitle: "Dolor sit",
    hero: { link: "/lorem", name: "lorem ipsum" },
    hasLink: false,
    isForSale: true,
    isBookable: true,
    isAccessory: false,
    count: 1,
    hyperlink: [{ word: "Maiores", link: "/lorem" }],
    title: "Lorem Ipsum",
    cost: random100(n),
    response: lorem20,
    buttons: [
      { icon: "checkout", uid: "button-check-123", label: "Add to cart" },
      { icon: "checkout", uid: "123", label: "Remove from cart" },
    ],
  };
};
