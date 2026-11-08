export type Lang = "hy" | "ru" | "en";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "hy", label: "ՀԱՅ" },
  { code: "ru", label: "РУС" },
  { code: "en", label: "ENG" },
];

export const CONTACT = {
  phoneDisplay: "094 00 77 52",
  phoneHref: "tel:+37494007752",
  instagram: "https://www.instagram.com/sevanxinkali/",
  instagramHandle: "@sevanxinkali",
  hours: "10:00 — 22:00",
  openHour: 10,
  closeHour: 22,
  mapQuery: "Nalbandyan 26, Sevan, Armenia",
};

export type DishId =
  | "khinkali"
  | "lahmajo"
  | "lahmajoCheese"
  | "khash"
  | "butter"
  | "sourCream"
  | "bread";

export const DISHES: {
  id: DishId;
  price: number;
  image: string;
  featured?: boolean;
}[] = [
  { id: "khinkali", price: 350, image: "/images/dishes/khinkali-card.jpg", featured: true },
  { id: "lahmajo", price: 700, image: "/images/dishes/lahmajo-classic-wolt.jpg", featured: true },
  { id: "lahmajoCheese", price: 900, image: "/images/dishes/lahmajo-cheese-wolt.jpg", featured: true },
  { id: "khash", price: 2000, image: "/images/dishes/khash-bowl.jpg", featured: true },
  { id: "butter", price: 400, image: "/images/dishes/butter-photo.jpg" },
  { id: "sourCream", price: 400, image: "/images/dishes/sour-cream-photo.jpg" },
  { id: "bread", price: 500, image: "/images/dishes/lavash-photo.jpg" },
];

type Dict = {
  brand: string;
  tagline: string;
  nav: { menu: string; about: string; gallery: string; contact: string };
  call: string;
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    text: string;
    ctaMenu: string;
    ctaOrder: string;
    hours: string;
    delivery: string;
    fromPrice: string;
  };
  status: { open: string; closed: string };
  menu: {
    eyebrow: string;
    title: string;
    text: string;
    currency: string;
    perPiece: string;
    mains: string;
    sides: string;
    note: string;
    dishes: Record<DishId, { name: string; desc: string }>;
  };
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    features: { title: string; text: string }[];
  };
  gallery: { eyebrow: string; title: string; text: string; alts: string[] };
  visit: {
    eyebrow: string;
    title: string;
    address: string;
    addressLine: string;
    addressNote: string;
    phone: string;
    hours: string;
    hoursValue: string;
    instagram: string;
    directions: string;
    deliveryTitle: string;
    deliveryText: string;
  };
  footer: { rights: string; made: string };
};

export const DICT: Record<Lang, Dict> = {
  hy: {
    brand: "Ավդալ",
    tagline: "Արհեստը սերունդներին",
    nav: { menu: "Մենյու", about: "Մեր մասին", gallery: "Սրահ", contact: "Կապ" },
    call: "Զանգել",
    hero: {
      eyebrow: "Խինկալի և լահմաջո",
      title: "Համը, որ",
      titleAccent: "փոխանցվում է սերնդեսերունդ",
      text: "Ձեռքով պատրաստված խինկալի, թարմ լահմաջո և տան ջերմություն՝ ամեն օր։",
      ctaMenu: "Դիտել մենյուն",
      ctaOrder: "Պատվիրել առաքում",
      hours: "Աշխատում ենք",
      delivery: "Առաքում",
      fromPrice: "սկսած",
    },
    status: { open: "Բաց է հիմա", closed: "Այժմ փակ է" },
    menu: {
      eyebrow: "Մեր մենյուն",
      title: "Պարզ։ Թարմ։ Համեղ։",
      text: "Քիչ ուտեստներ, բայց յուրաքանչյուրը պատրաստված է խնամքով և ամեն օր թարմ։",
      currency: "դր.",
      perPiece: "1 հատ",
      mains: "Հիմնական",
      sides: "Հավելումներ",
      note: "Գները նշված են ՀՀ դրամով",
      dishes: {
        khinkali: { name: "Խինկալի", desc: "Ձեռքով ծալված, հյութալի մսային լցոնով, մատուցվում է տաք" },
        lahmajo: { name: "Լահմաջո դասական", desc: "Բարակ խմոր, աղացած միս, կանաչի և համեմունքներ" },
        lahmajoCheese: { name: "Լահմաջո պանրով", desc: "Դասական լահմաջո՝ հալած պանրի շերտով" },
        khash: { name: "Խաշ + լավաշ", desc: "Ավանդական հայկական խաշ՝ մատուցվում է լավաշի հետ" },
        butter: { name: "Կարագ", desc: "Խինկալու և տաք հացի լավագույն ընկերը" },
        sourCream: { name: "Թթվասեր", desc: "Թարմ և կրեմային" },
        bread: { name: "Հաց", desc: "Թարմ թխված" },
      },
    },
    about: {
      eyebrow: "Մեր պատմությունը",
      title: "Արհեստը սերունդներին",
      p1: "«Ավդալ»-ը ծնվել է պարզ գաղափարից՝ պահպանել այն համը, որը մենք ժառանգել ենք մեր տատիկներից ու պապիկներից։ Մեր լոգոյի ձեռքերը խորհրդանշում են այդ կապը՝ փորձը փոխանցվում է ավագից կրտսերին։",
      p2: "Ամեն խինկալի ծալվում է ձեռքով, ամեն լահմաջո պատրաստվում է թարմ խմորից։ Առանց շտապելու, առանց փոխզիջումների։",
      features: [
        { title: "Ձեռքի աշխատանք", text: "Ամեն խինկալի ծալվում է ձեռքով" },
        { title: "Ամեն օր թարմ", text: "Թարմ միս, թարմ խմոր, թարմ կանաչի" },
        { title: "Առաքում", text: "Զանգեք՝ կբերենք տաք-տաք" },
      ],
    },
    gallery: {
      eyebrow: "Մեր սրահը",
      title: "Հարմարավետ և հյուրընկալ",
      text: "Մաքուր, լուսավոր սրահ՝ ավանդական հայկական սփռոցներով։",
      alts: ["Ավդալի սրահը", "Սեղան ավանդական սփռոցով", "Զովացուցիչ ըմպելիքներ", "Ավդալի ընդունարանը"],
    },
    visit: {
      eyebrow: "Այցելեք մեզ",
      title: "Սպասում ենք ձեզ",
      address: "Հասցե",
      addressLine: "Նալբանդյան 26շ.",
      addressNote: "Գազի գրասենյակի դիմաց",
      phone: "Հեռախոս",
      hours: "Աշխատանքային ժամեր",
      hoursValue: "",
      instagram: "Instagram",
      directions: "Բացել քարտեզում",
      deliveryTitle: "Առաքում",
      deliveryText: "Զանգահարեք և պատվիրեք տաք խինկալի ու լահմաջո ձեր դռան մոտ։",
    },
    footer: { rights: "Բոլոր իրավունքները պաշտպանված են", made: "Պատրաստված է սիրով" },
  },
  ru: {
    brand: "Авдал",
    tagline: "Ремесло передаётся поколениям",
    nav: { menu: "Меню", about: "О нас", gallery: "Зал", contact: "Контакты" },
    call: "Позвонить",
    hero: {
      eyebrow: "Хинкали и ламаджо",
      title: "Вкус, который",
      titleAccent: "передаётся из поколения в поколение",
      text: "Хинкали ручной лепки, свежий ламаджо и домашнее тепло — каждый день.",
      ctaMenu: "Смотреть меню",
      ctaOrder: "Заказать доставку",
      hours: "Работаем",
      delivery: "Доставка",
      fromPrice: "от",
    },
    status: { open: "Сейчас открыто", closed: "Сейчас закрыто" },
    menu: {
      eyebrow: "Наше меню",
      title: "Просто. Свежо. Вкусно.",
      text: "Немного блюд, но каждое готовится с заботой и свежим каждый день.",
      currency: "драм",
      perPiece: "1 шт.",
      mains: "Основное",
      sides: "Дополнительно",
      note: "Цены указаны в армянских драмах",
      dishes: {
        khinkali: { name: "Хинкали", desc: "Ручная лепка, сочная мясная начинка, подаются горячими" },
        lahmajo: { name: "Ламаджо с мясом", desc: "Тонкое тесто, рубленое мясо, зелень и специи" },
        lahmajoCheese: { name: "Ламаджо с сыром", desc: "Классический ламаджо с тянущимся сыром" },
        khash: { name: "Хаш + лаваш", desc: "Традиционный армянский хаш, подаётся с лавашом" },
        butter: { name: "Масло", desc: "Лучший спутник хинкали и горячего хлеба" },
        sourCream: { name: "Сметана", desc: "Свежая и нежная" },
        bread: { name: "Хлеб", desc: "Свежая выпечка" },
      },
    },
    about: {
      eyebrow: "Наша история",
      title: "Ремесло передаётся поколениям",
      p1: "«Авдал» родился из простой идеи — сохранить вкус, который мы унаследовали от наших бабушек и дедушек. Руки на нашем логотипе символизируют эту связь: опыт передаётся от старших к младшим.",
      p2: "Каждый хинкали лепится вручную, каждый ламаджо готовится из свежего теста. Без спешки и без компромиссов.",
      features: [
        { title: "Ручная работа", text: "Каждый хинкали лепится вручную" },
        { title: "Свежее каждый день", text: "Свежее мясо, тесто и зелень" },
        { title: "Доставка", text: "Позвоните — привезём горячим" },
      ],
    },
    gallery: {
      eyebrow: "Наш зал",
      title: "Уютно и гостеприимно",
      text: "Чистый, светлый зал с традиционными армянскими скатертями.",
      alts: ["Зал Авдал", "Стол с традиционной скатертью", "Холодные напитки", "Стойка Авдал"],
    },
    visit: {
      eyebrow: "Приходите к нам",
      title: "Ждём вас в гости",
      address: "Адрес",
      addressLine: "ул. Налбандяна 26",
      addressNote: "Напротив газового офиса",
      phone: "Телефон",
      hours: "Часы работы",
      hoursValue: "",
      instagram: "Instagram",
      directions: "Открыть на карте",
      deliveryTitle: "Доставка",
      deliveryText: "Позвоните и закажите горячие хинкали и ламаджо прямо к двери.",
    },
    footer: { rights: "Все права защищены", made: "Сделано с любовью" },
  },
  en: {
    brand: "Avdal",
    tagline: "Craft passed down to generations",
    nav: { menu: "Menu", about: "About", gallery: "Gallery", contact: "Contact" },
    call: "Call",
    hero: {
      eyebrow: "Khinkali & Lahmajo",
      title: "A taste",
      titleAccent: "passed down through generations",
      text: "Hand-pleated khinkali, fresh lahmajo and the warmth of home — every day.",
      ctaMenu: "View menu",
      ctaOrder: "Order delivery",
      hours: "Open",
      delivery: "Delivery",
      fromPrice: "from",
    },
    status: { open: "Open now", closed: "Closed now" },
    menu: {
      eyebrow: "Our menu",
      title: "Simple. Fresh. Delicious.",
      text: "A short menu where every dish is made with care and served fresh every day.",
      currency: "AMD",
      perPiece: "1 piece",
      mains: "Mains",
      sides: "Sides",
      note: "Prices are in Armenian dram (AMD)",
      dishes: {
        khinkali: { name: "Khinkali", desc: "Hand-pleated with a juicy meat filling, served steaming hot" },
        lahmajo: { name: "Classic Lahmajo", desc: "Thin crust with spiced minced meat and fresh herbs" },
        lahmajoCheese: { name: "Cheese Lahmajo", desc: "Our classic lahmajo topped with melted cheese" },
        khash: { name: "Khash + Lavash", desc: "Traditional Armenian khash, served with lavash" },
        butter: { name: "Butter", desc: "The perfect partner for khinkali and warm bread" },
        sourCream: { name: "Sour Cream", desc: "Fresh and creamy" },
        bread: { name: "Bread", desc: "Freshly baked" },
      },
    },
    about: {
      eyebrow: "Our story",
      title: "Craft passed down to generations",
      p1: "Avdal was born from a simple idea: to keep the taste we inherited from our grandparents. The hands in our logo stand for that bond — know-how passed from the elders to the young.",
      p2: "Every khinkali is pleated by hand and every lahmajo is made from fresh dough. No rushing, no shortcuts.",
      features: [
        { title: "Handmade", text: "Every khinkali is pleated by hand" },
        { title: "Fresh daily", text: "Fresh meat, dough and herbs" },
        { title: "Delivery", text: "Call us — we'll bring it hot" },
      ],
    },
    gallery: {
      eyebrow: "Our place",
      title: "Cozy and welcoming",
      text: "A clean, bright dining room dressed in traditional Armenian tablecloths.",
      alts: ["Avdal dining room", "Table with a traditional tablecloth", "Cold drinks", "Avdal front counter"],
    },
    visit: {
      eyebrow: "Visit us",
      title: "We're waiting for you",
      address: "Address",
      addressLine: "26 Nalbandyan St.",
      addressNote: "Opposite the Gas Office",
      phone: "Phone",
      hours: "Opening hours",
      hoursValue: "",
      instagram: "Instagram",
      directions: "Open in Maps",
      deliveryTitle: "Delivery",
      deliveryText: "Give us a call and get hot khinkali and lahmajo delivered to your door.",
    },
    footer: { rights: "All rights reserved", made: "Made with love" },
  },
};

/** Stock khinkali photos from Wikimedia Commons — attribution required by their licenses. */
export const PHOTO_CREDITS = [
  {
    author: "Francesc Fort",
    title: "Khinkali - Batumi",
    source: "https://commons.wikimedia.org/wiki/File:Khinkali_-_Batumi.jpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    author: "Sandra C from Canada",
    title: "Khinkali, Restaurant Aragvi",
    source: "https://commons.wikimedia.org/wiki/File:Khinkali,_Restaurant_Aragvi.jpg",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
  },
  {
    author: "Fiqria Goginashvili",
    title: "Khinkali (13)",
    source: "https://commons.wikimedia.org/wiki/File:Khinkali_(13).jpg",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
  },
  {
    author: "jules",
    title: "Sour Cream",
    source: "https://commons.wikimedia.org/wiki/File:Sour_Cream.jpg",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
  },
  {
    author: "Salicyna",
    title: "Block of butter",
    source: "https://commons.wikimedia.org/wiki/File:Block_of_butter_20200928_080201.jpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    author: "Combrian",
    title: "Lavash arménien",
    source: "https://commons.wikimedia.org/wiki/File:Lavash_arm%C3%A9nien.jpg",
    license: "CC0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
  {
    author: "kamoblog.tv",
    title: "Խաշ",
    source: "https://kamoblog.tv/blog/post/xash25",
    license: "©",
    licenseUrl: "https://kamoblog.tv/blog/post/xash25",
  },
  {
    author: "Yerevan Lahmajo & Shawarma House",
    title: "Lahmajo",
    source: "https://wolt.com/en/cyp/limassol/restaurant/yerevan-lahmajo-house",
    license: "©",
    licenseUrl: "https://wolt.com/en/cyp/limassol/restaurant/yerevan-lahmajo-house",
  },
];
