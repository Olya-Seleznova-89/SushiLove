
const get_sushi_data = [
  {
    id: 1,
    name: "Дракон вогняний ",
    veg: true,
    price: 197,
    description: "Склад: Норі, Рис, Тигрова креветка, Огірок, Лосось філе, Тобіко, Сир філа",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8408-300x300.jpg",
    mass: "270",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 3,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 5,
          },
        ],
        mediumstuffedcrustvegkebab: [
          {
            price: 8,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Дракон зелений",
    veg: true,
    price: 167,
    description:
      "Склад: Норі, Рис, Сир філа, Вугор, Ікра тобіко, Авокадо, Унагі соус, Кунжут, Огірок",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8331-1-300x300.jpg",
    mass: "275",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 7,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 9,
          },
        ],
        "medium stuffed crust-veg kebab": [
          {
            price: 12,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Дракон золотий",
    veg: true,
    price: 182,
    description:
      "Склад: Норі, Рис, Огірок, Вугор, Тобіко, Сир філа, Тигрова креветка",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8320-300x300.jpg",
    mass: "255",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 8,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 9,
          },
        ],
        "medium stuffed crust-veg kebab": [
          {
            price: 10,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Дракон чорний",
    veg: true,
    price: 209,
    description: "Склад: Норі, Рис, Ікра тобіко, Сир філа, Лосось сирий, Вугор, Унагі соус, Кунжут",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8327-300x300.jpg",
    mass: "285",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 6,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 7,
          },
        ],
        "medium stuffed crust-veg kebab": [
          {
            price: 9,
          },
        ],
      },
    ],
  },
  {
    id: 33,
    name: "Каліфорнія з копченим лососем",
    veg: true,
    price: 120,
    description:
      "Склад: Норі, Рис, Копчений лосось, Огірок, Авокадо, Сир Філа, Кунжут",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8414-300x300.jpg",
    mass: "265",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 5,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 6,
          },
        ],
        "medium stuffed crust-veg kebab": [
          {
            price: 8,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Каліфорнія з лососем",
    veg: false,
    price: 167,
    description: "Склад: Норі, Рис, Тобіко, Лосось, Ср Філадельфія, Огірок",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8440-300x300.jpg",
    mass: "255",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 7,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 9,
          },
        ],
        mediumstuffedcrustchickenseekhkebab: [
          {
            price: 12,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Каліфорнія з лососем в ікрі",
    veg: false,
    price: 162,
    description: "Склад: Норі, Рис, Огірок, Авокадо, Тобіко (зверху), Лосось філе, Японський м.",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8412-300x300.jpg",
    mass: "255",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 7,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 9,
          },
        ],
        mediumstuffedcrustchickenseekhkebab: [
          {
            price: 11,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Каліфорнія з лососем в кунжуті",
    veg: false,
    price: 113,
    description:
      "Склад: Норі, Рис, Лосось філе, Авокадо, Огірок, Японський м., Кунжут",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8417-300x300.jpg",
    mass: "255",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 8,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 10,
          },
        ],
        mediumstuffedcrustchickenseekhkebab: [
          {
            price: 13,
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Макі з лососем",
    veg: false,
    price: 62,
    description: "Склад: Норі, Рис, Лосось",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8453-300x300.jpg",
    mass: "120",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 7,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 8,
          },
        ],
        mediumstuffedcrustchickenseekhkebab: [
          {
            price: 9,
          },
        ],
      },
    ],
  },
  {
    id: 9,
    name: "Макі з авокадо",
    veg: false,
    price: 49,
    description: "Склад: Норі, Рис, Авокадо",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8470-300x300.jpg",
    mass: "115",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 5,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 6,
          },
        ],
        mediumstuffedcrustchickenseekhkebab: [
          {
            price: 7,
          },
        ],
      },
    ],
  },
  {
    id: 10,
    name: "Макі з вугрем",
    veg: false,
    price: 68,
    description: "Склад: Норі, Рис, Вугор, Кунжут, Унагі соус",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8472-300x300.jpg",
    mass: "125",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 4,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 5,
          },
        ],
        "medium stuffed crust-veg kebab": [
          {
            price: 6,
          },
        ],
      },
    ],
  },
  {
    id: 11,
    name: "Макі з копченим лососем",
    veg: true,
    price: 65,
    description: "Склад: Норі, Рис, Х/К",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8453-300x300.jpg",
    mass: "120",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 3,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 5,
          },
        ],
        "medium stuffed crust-veg kebab": [
          {
            price: 7,
          },
        ],
      },
    ],
  },
  {
    id: 12,
    name: "Макі з манго",
    veg: false,
    price: 55,
    description: "Склад: Норі, Рис, Манго",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8454-300x300.jpg",
    mass: "115",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 5,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 6,
          },
        ],
        "medium stuffed crust-veg kebab": [
          {
            price: 7,
          },
        ],
      },
    ],
  },
  {
    id: 13,
    name: "Макі з огірком",
    veg: false,
    price: 41,
    description: "Склад: Норі, Рис, Огірок, Кунжут",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8456-300x300.jpg",
    mass: "115",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 6,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 7,
          },
        ],
        "medium stuffed crust-veg kebab": [
          {
            price: 9,
          },
        ],
      },
    ],
  },
  {
    id: 14,
    name: "Макі з тунцем",
    veg: true,
    price: 61,
    description: "Склад: Норі, Рис, Тунець, Унагі соус",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8471-300x300.jpg",
    mass: "123",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 5,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 7,
          },
        ],
        "medium stuffed crust-veg kebab": [
          {
            price: 9,
          },
        ],
      },
    ],
  },
  {
    id: 15,
    name: "Макі філа",
    veg: true,
    price: 44,
    description: "Склад: Норі, Рис, Сир філа",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8451-300x300.jpg",
    mass: "115",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 7,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 9,
          },
        ],
        "medium stuffed crust kebab": [
          {
            price: 11,
          },
        ],
      },
    ],
  },
  {
    id: 16,
    name: "Авокадо рол з лососем",
    veg: false,
    price: 149,
    description: "Склад: Норі, Рис, Авокадо, Лосось, Огірок, Унагі соуc, Сир філаCheese ,Chicken pepperoni",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8486-300x300.jpg",
    mass: "300",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 6,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 9,
          },
        ],
      },
    ],
  },
  {
    id: 17,
    name: "Авокадо рол з печеним лососем та манго",
    veg: false,
    price: 184,
    description: "Склад: Норі, Рис, Сир філа, Тобіко, Авокадо, Унагі соус, Манго, Лосось печений",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8293-300x300.jpg",
    mass: "295",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 9,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 11,
          },
        ],
        "medium stuffed crust-veg kebab": [
          {
            price: 12,
          },
        ],
      },
    ],
  },
  {
    id: 18,
    name: "Гранд Рол",
    veg: true,
    price: 206,
    description:
      "Склад: Норі, Рис, Лосось гриль, Авокадо Унагі соус або Шрірача (гострий соус), Сир філадельфія, Ікра Тобіко",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8521-300x300.jpg",
    mass: "285",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 5,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 6,
          },
        ],
        "medium stuffed crust-veg kebab": [
          {
            price: 8,
          },
        ],
      },
    ],
  },
  {
    id: 19,
    name: "Рол ORANGE",
    veg: true,
    price: 193,
    description:
      "Склад: Соєвий папір, Рис, Лосось печений, Огірок, Унагі соус, Сир філадельфія, Вугор, Авокадо",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8550-300x300.jpg",
    mass: "285",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 5,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 7,
          },
        ],
        "medium stuffed crust-veg kebab": [
          {
            price: 9,
          },
        ],
      },
    ],
  },
  {
    id: 20,
    name: "Рол Гриль Голд",
    veg: true,
    price: 197,
    description:
      "Склад: Норі, Рис, Авокадо, Сир філа, Лосось (печений), Унагі соус, Лосось сирий, Перець (мелений)",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8305-300x300.jpg",
    mass: "310",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 4,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 5,
          },
        ],
        "medium stuffed crust-veg kebab": [
          {
            price: 7,
          },
        ],
      },
    ],
  },
  {
    id: 21,
    name: "Спайсі Рол",
    veg: true,
    price: 195,
    description:
      "Склад: Норі, Рис, Сир філа, Лосось гриль, Огірок, Шрірачі соус, Унагі, Вугор, Кунжут",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8496-300x300.jpg",
    mass: "300",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 8,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 10,
          },
        ],
        "medium stuffed crust-veg kebab": [
          {
            price: 12,
          },
        ],
      },
    ],
  },
  {
    id: 22,
    name: "Філадельфія Гриль Манго",
    veg: true,
    price: 165,
    description:
      "Склад: Норі, Рис, Сир філа, Манго, Лосось печений, Лимон",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8301-300x300.jpg",
    mass: "295",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 5,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 6,
          },
        ],
        "medium stuffed crust-veg kebab": [
          {
            price: 7,
          },
        ],
      },
    ],
  },
  {
    id: 23,
    name: "Фудзі",
    veg: true,
    price: 206,
    description:
      "Склад: Норі, Рис, Сир філа, Огірок, Вугор, Спайсі, Кунжут, Унагі",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8523-300x300.jpg",
    mass: "300",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 6,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 7,
          },
        ],
        "medium stuffed crust-veg kebab": [
          {
            price: 8,
          },
        ],
      },
    ],
  },
  {
    id: 24,
    name: "Філадельфія з вугрем",
    veg: true,
    price: 191,
    description:
      "Склад: Норі, Рис, Сир філа, Огірок, Вугор, Унагі соус, Кунжут",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8369-300x300.jpg",
    mass: "290",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 40,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 45,
          },
        ],
        "medium stuffed crust-veg kebab": [
          {
            price: 50,
          },
        ],
      },
    ],
  },
  {
    id: 25,
    name: "Філадельфія з копченим лососем",
    veg: false,
    price: 167,
    description:
      "Склад: Норі, Рис, Сир філа, Огірок, Копчений лосось",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8358-300x300.jpg",
    mass: "270",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 8,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 9,
          },
        ],
        "medium stuffed crust-veg kebab": [
          {
            price: 11,
          },
        ],
      },
    ],
  },
  {
    id: 26,
    name: "Філадельфія з лососем",
    veg: true,
    price: 154,
    description:
      "Склад: Норі, Рис, Сир філа, Огірок, Лосось сирий",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8363-300x300.jpg",
    mass: "270",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 6,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 7,
          },
        ],
        "medium stuffed crust-veg kebab": [
          {
            price: 9,
          },
        ],
      },
    ],
  },
  {
    id: 27,
    name: "Філадельфія з тигровою креветкою",
    veg: false,
    price: 165,
    description:
      "Склад: Норі, Рис, Сир філа, Огірок, Тигрова креветка",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8361-300x300.jpg",
    mass: "260",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 5,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 6,
          },
        ],
        "medium stuffed crust-veg kebab": [
          {
            price: 7,
          },
        ],
      },
    ],
  },
  {
    id: 28,
    name: "Філадельфія з тунцем",
    veg: false,
    price: 163,
    description:
      "Склад: Норі, Рис, Сир філа, Огірок, Тунець, Унагі соус",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8366-300x300.jpg",
    mass: "285",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 12,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 15,
          },
        ],
        "medium stuffed crust-veg kebab": [
          {
            price: 18,
          },
        ],
      },
    ],
  },
  {
    id: 29,
    name: "Філадельфія класична з вугрем",
    veg: false,
    price: 261,
    description:
      "Склад: Норі, Рис, Сир філа, Вугор, Кунжут, Унагі соус",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8423-300x300.jpg",
    mass: "330",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 6,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 7,
          },
        ],
        "medium stuffed crust-veg kebab": [
          {
            price: 9,
          },
        ],
      },
    ],
  },
  {
    id: 30,
    name: "Філадельфія класична з копченим лососем",
    veg: false,
    price: 229,
    description:
      "Склад: Норі, Рис, Сир філа, Х/К",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8421-300x300.jpg",
    mass: "310",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 9,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 11,
          },
        ],
        "medium stuffed crust-veg kebab": [
          {
            price: 13,
          },
        ],
      },
    ],
  },
  {
    id: 30,
    name: "Філадельфія сезам",
    veg: false,
    price: 89,
    description:
      "Склад: Норі, Рис, Огірок, Сир філа, Кунжут",
    quantity: 1,
    img: "https://osama.com.ua/wp-content/uploads/2020/11/DSC_8371-300x300.jpg",
    mass: "235",
    sizeandcrust: [
      {
        mediumPan: [
          {
            price: 9,
          },
        ],
        mediumstuffedcrustcheesemax: [
          {
            price: 11,
          },
        ],
        "medium stuffed crust-veg kebab": [
          {
            price: 13,
          },
        ],
      },
    ],
  },
];

export default get_sushi_data;
