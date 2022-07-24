const navList = [
  {
    name: "Home",
    href: "/",
    icons: <i className="bi bi-house-door d-flex justify-content-center" />,
  },
  {
    name: "Menu",
    href: "/menu",
    icons: <i className="bi bi-grid d-flex justify-content-center" />,
  },
];

const cardList = [
  {
    id: 1,
    name: "Almond Brown Sugar Croissant",
    description: "Sweet croissant with toping almonds and brown sugar",
    price: 10000,
    type: "waffle",
  },
  {
    id: 2,
    name: "Smoke Tenderloin Slice",
    description: "Plain croissant",
    price: 20000,
    type: "waffle",
  },
  {
    id: 3,
    name: "Berry Whipped Cream Croissant",
    description: "Sweet croissant",
    price: 30000,
    type: "coffee",
  },
  {
    id: 4,
    name: "Sweet Granulated Sugar Croissant",
    description: "Sweet croissant with toping almonds and brown sugar",
    price: 5000,
    type: "ice cream",
  },
  {
    id: 5,
    name: "Berry Whipped Cream Croissant",
    description: "Sweet croissant",
    price: 30000,
    type: "coffee",
  },
  {
    id: 6,
    name: "Sweet Granulated Sugar Croissant",
    description: "Sweet croissant with toping almonds and brown sugar",
    price: 5000,
    type: "ice cream",
  },
];

const badgeList = [
  {
    name: "All",
    icon: "",
  },
  {
    name: "Waffle",
    icon: "",
  },
  {
    name: "Coffee",
    icon: <i className="bi bi-cup-hot-fill" />,
  },
  {
    name: "Ice Cream",
    icon: "",
  },
];

const orderList = [
  {
    name: "Almond Brown Sugar Croissant",
    description: "Sweet croissant with toping almonds and brown sugar",
    price: "Rp. 10.000",
    type: "waffle",
  },
  {
    name: "Smoke Tenderloin Slice",
    description: "Plain croissant",
    price: "Rp. 20.000",
    type: "waffle",
  },
];
export { navList, cardList, badgeList, orderList };
