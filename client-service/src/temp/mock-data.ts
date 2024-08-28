import { StatusRide, OrdersTaxi } from "@prisma/client";

const russianCities = [
  "Moscow",
  "Saint Petersburg",
  "Novosibirsk",
  "Yekaterinburg",
  "Nizhny Novgorod",
  "Kazan",
  "Chelyabinsk",
  "Omsk",
  "Rostov-on-Don",
  "Ufa",
  "Volgograd",
  "Perm",
  "Krasnoyarsk",
  "Voronezh",
  "Saratov",
  "Krasnodar",
  "Togliatti",
  "Ulyanovsk",
  "Irkutsk",
  "Tyumen",
  "Khabarovsk",
  "Makhachkala",
  "Orenburg",
  "Barnaul",
  "Ulan-Ude",
  "Tomsk",
  "Kaliningrad",
  "Vladivostok",
  "Kemerovo",
  "Bryansk",
  "Ryazan",
  "Kursk",
];

const generateMockOrders = (
  count: number
): Omit<OrdersTaxi, "id" | "create_date">[] => {
  const orders: Omit<OrdersTaxi, "id" | "create_date">[] = [];

  for (let i = 1; i <= count; i++) {
    const pickupCity =
      russianCities[Math.floor(Math.random() * russianCities.length)];
    let dropoffCity =
      russianCities[Math.floor(Math.random() * russianCities.length)];

    while (pickupCity === dropoffCity) {
      dropoffCity =
        russianCities[Math.floor(Math.random() * russianCities.length)];
    }

    orders.push({
      status:
        Object.values(StatusRide)[
          Math.floor(Math.random() * Object.values(StatusRide).length)
        ],
      price: Math.floor(Math.random() * 500) + 50, // Random price between 50 and 550
      pickupLocation: pickupCity,
      dropoffLocation: dropoffCity,
    });
  }

  return orders;
};

export const mockOrders = generateMockOrders(30);
