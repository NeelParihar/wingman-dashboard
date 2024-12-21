import { Order } from "@/types/order";

const productImages = [
  "https://img.freepik.com/free-photo/cotton-wrist-band-smart-watch-earphone-white-background_1387-712.jpg?t=st=1734808474~exp=1734812074~hmac=d5573086921ed7ce909fc30db782bac6c1f60732194b557cd6c8fe1178d2a48f&w=2000", // Premium Wireless Headphones
  "https://img.freepik.com/free-photo/cotton-wrist-band-smart-watch-earphone-white-background_1387-712.jpg?t=st=1734808474~exp=1734812074~hmac=d5573086921ed7ce909fc30db782bac6c1f60732194b557cd6c8fe1178d2a48f&w=2000", // Premium Wireless Headphones
  "https://img.freepik.com/free-photo/cotton-wrist-band-smart-watch-earphone-white-background_1387-712.jpg?t=st=1734808474~exp=1734812074~hmac=d5573086921ed7ce909fc30db782bac6c1f60732194b557cd6c8fe1178d2a48f&w=2000", // Premium Wireless Headphones
  "https://img.freepik.com/free-photo/cotton-wrist-band-smart-watch-earphone-white-background_1387-712.jpg?t=st=1734808474~exp=1734812074~hmac=d5573086921ed7ce909fc30db782bac6c1f60732194b557cd6c8fe1178d2a48f&w=2000", // Premium Wireless Headphones
  "https://img.freepik.com/free-photo/cotton-wrist-band-smart-watch-earphone-white-background_1387-712.jpg?t=st=1734808474~exp=1734812074~hmac=d5573086921ed7ce909fc30db782bac6c1f60732194b557cd6c8fe1178d2a48f&w=2000", // Premium Wireless Headphones
  "https://img.freepik.com/free-photo/cotton-wrist-band-smart-watch-earphone-white-background_1387-712.jpg?t=st=1734808474~exp=1734812074~hmac=d5573086921ed7ce909fc30db782bac6c1f60732194b557cd6c8fe1178d2a48f&w=2000", // Premium Wireless Headphones
  "https://img.freepik.com/free-photo/cotton-wrist-band-smart-watch-earphone-white-background_1387-712.jpg?t=st=1734808474~exp=1734812074~hmac=d5573086921ed7ce909fc30db782bac6c1f60732194b557cd6c8fe1178d2a48f&w=2000", // Premium Wireless Headphones
  "https://img.freepik.com/free-photo/cotton-wrist-band-smart-watch-earphone-white-background_1387-712.jpg?t=st=1734808474~exp=1734812074~hmac=d5573086921ed7ce909fc30db782bac6c1f60732194b557cd6c8fe1178d2a48f&w=2000", // Premium Wireless Headphones
];

const productNames = [
  "Premium Wireless Headphones",
  "Smart Fitness Watch Pro",
  "Ultra Slim Laptop",
  "5G Smartphone Plus",
  "Professional DSLR Camera",
  "Tablet Pro Max",
  "Wireless Sound System",
  "Mechanical Gaming Keyboard",
];

export const orders: Order[] = Array.from({ length: 50 }, (_, i) => {
  const productIndex = Math.floor(Math.random() * productNames.length);
  return {
    id: `order-${i + 1}`,
    product: {
      name: productNames[productIndex],
      image: productImages[productIndex],
    },
    date: new Date(2024, 0, i + 1).toISOString(),
    time: "10:24 AM",
    timeSpent: `${Math.floor(Math.random() * 4)}h ${Math.floor(
      Math.random() * 60
    )}m`,
    orderValue: Math.floor(Math.random() * 1000) + 100, // Ensuring minimum price of 100
    commission: Math.floor(Math.random() * 200) + 50, // Ensuring minimum commission of 50
  };
});
