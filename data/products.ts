import Stripe from "stripe";

// Хардкодирани продукти - Керамични изделия
export const ceramicProducts: Stripe.Product[] = [
  {
    id: "ceramic-001",
    object: "product",
    active: true,
    name: "Керамична ваза - Модерен дизайн",
    description: "Елегантна керамична ваза с модерен дизайн, идеална за всяка стая. Изработена от висококачествена глина с гладка повърхност.",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop"
    ],
    metadata: {
      category: "ceramic",
      material: "clay"
    },
    default_price: {
      id: "price-ceramic-001",
      object: "price",
      active: true,
      currency: "bgn",
      unit_amount: 4500, // 45.00 BGN
      type: "one_time",
    } as Stripe.Price,
    created: Date.now(),
    updated: Date.now(),
    livemode: false,
    marketing_features: [],
    package_dimensions: null,
    shippable: null,
    statement_descriptor: null,
    tax_code: null,
    type: "good",
    unit_label: null,
    url: null,
  } as Stripe.Product,
  {
    id: "ceramic-002",
    object: "product",
    active: true,
    name: "Керамична чаша - Ръчно изработена",
    description: "Уникална ръчно изработена керамична чаша с оригинален дизайн. Перфектна за кафе или чай.",
    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&h=800&fit=crop"
    ],
    metadata: {
      category: "ceramic",
      material: "clay",
      handmade: "true"
    },
    default_price: {
      id: "price-ceramic-002",
      object: "price",
      active: true,
      currency: "bgn",
      unit_amount: 2500, // 25.00 BGN
      type: "one_time",
    } as Stripe.Price,
    created: Date.now(),
    updated: Date.now(),
    livemode: false,
    marketing_features: [],
    package_dimensions: null,
    shippable: null,
    statement_descriptor: null,
    tax_code: null,
    type: "good",
    unit_label: null,
    url: null,
  } as Stripe.Product,
  {
    id: "ceramic-003",
    object: "product",
    active: true,
    name: "Керамичен комплект - 4 чинии",
    description: "Елегантен комплект от 4 керамични чинии с минималистичен дизайн. Подходящи за всекидневна употреба.",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop"
    ],
    metadata: {
      category: "ceramic",
      material: "clay",
      set: "4 pieces"
    },
    default_price: {
      id: "price-ceramic-003",
      object: "price",
      active: true,
      currency: "bgn",
      unit_amount: 6800, // 68.00 BGN
      type: "one_time",
    } as Stripe.Price,
    created: Date.now(),
    updated: Date.now(),
    livemode: false,
    marketing_features: [],
    package_dimensions: null,
    shippable: null,
    statement_descriptor: null,
    tax_code: null,
    type: "good",
    unit_label: null,
    url: null,
  } as Stripe.Product,
  {
    id: "ceramic-004",
    object: "product",
    active: true,
    name: "Керамичен салфетник",
    description: "Практичен и стилен керамичен салфетник за вашата трапезна маса. Лесен за почистване и издръжлив.",
    images: [
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=800&h=800&fit=crop"
    ],
    metadata: {
      category: "ceramic",
      material: "clay"
    },
    default_price: {
      id: "price-ceramic-004",
      object: "price",
      active: true,
      currency: "bgn",
      unit_amount: 1800, // 18.00 BGN
      type: "one_time",
    } as Stripe.Price,
    created: Date.now(),
    updated: Date.now(),
    livemode: false,
    marketing_features: [],
    package_dimensions: null,
    shippable: null,
    statement_descriptor: null,
    tax_code: null,
    type: "good",
    unit_label: null,
    url: null,
  } as Stripe.Product,
  {
    id: "ceramic-005",
    object: "product",
    active: true,
    name: "Керамична купа - Голяма",
    description: "Голяма керамична купа, идеална за салати, супи или като декоративен елемент. Изработена с внимание към детайла.",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop"
    ],
    metadata: {
      category: "ceramic",
      material: "clay",
      size: "large"
    },
    default_price: {
      id: "price-ceramic-005",
      object: "price",
      active: true,
      currency: "bgn",
      unit_amount: 3200, // 32.00 BGN
      type: "one_time",
    } as Stripe.Price,
    created: Date.now(),
    updated: Date.now(),
    livemode: false,
    marketing_features: [],
    package_dimensions: null,
    shippable: null,
    statement_descriptor: null,
    tax_code: null,
    type: "good",
    unit_label: null,
    url: null,
  } as Stripe.Product,
];

// Хардкодирани продукти - Лампи
export const lampProducts: Stripe.Product[] = [
  {
    id: "lamp-001",
    object: "product",
    active: true,
    name: "Настолна лампа - Модерна LED",
    description: "Стилна настолна лампа с LED осветление. Регулируема яркост и топла светлина за уютна атмосфера.",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=800&fit=crop"
    ],
    metadata: {
      category: "lamp",
      type: "desk",
      lighting: "LED"
    },
    default_price: {
      id: "price-lamp-001",
      object: "price",
      active: true,
      currency: "bgn",
      unit_amount: 8900, // 89.00 BGN
      type: "one_time",
    } as Stripe.Price,
    created: Date.now(),
    updated: Date.now(),
    livemode: false,
    marketing_features: [],
    package_dimensions: null,
    shippable: null,
    statement_descriptor: null,
    tax_code: null,
    type: "good",
    unit_label: null,
    url: null,
  } as Stripe.Product,
  {
    id: "lamp-002",
    object: "product",
    active: true,
    name: "Подова лампа - Индустриален стил",
    description: "Висококачествена подова лампа в индустриален стил. Перфектна за модерни интериори.",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
    ],
    metadata: {
      category: "lamp",
      type: "floor",
      style: "industrial"
    },
    default_price: {
      id: "price-lamp-002",
      object: "price",
      active: true,
      currency: "bgn",
      unit_amount: 12500, // 125.00 BGN
      type: "one_time",
    } as Stripe.Price,
    created: Date.now(),
    updated: Date.now(),
    livemode: false,
    marketing_features: [],
    package_dimensions: null,
    shippable: null,
    statement_descriptor: null,
    tax_code: null,
    type: "good",
    unit_label: null,
    url: null,
  } as Stripe.Product,
  {
    id: "lamp-003",
    object: "product",
    active: true,
    name: "Таванна лампа - Минималистична",
    description: "Елегантна таванна лампа с минималистичен дизайн. Създава приятна и равномерна светлина.",
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&h=800&fit=crop"
    ],
    metadata: {
      category: "lamp",
      type: "ceiling",
      style: "minimalist"
    },
    default_price: {
      id: "price-lamp-003",
      object: "price",
      active: true,
      currency: "bgn",
      unit_amount: 7500, // 75.00 BGN
      type: "one_time",
    } as Stripe.Price,
    created: Date.now(),
    updated: Date.now(),
    livemode: false,
    marketing_features: [],
    package_dimensions: null,
    shippable: null,
    statement_descriptor: null,
    tax_code: null,
    type: "good",
    unit_label: null,
    url: null,
  } as Stripe.Product,
  {
    id: "lamp-004",
    object: "product",
    active: true,
    name: "Ночна лампа - Детска стая",
    description: "Мяка и уютна нощна лампа, идеална за детска стая. Безопасна и енергоспестяваща.",
    images: [
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=800&fit=crop"
    ],
    metadata: {
      category: "lamp",
      type: "bedside",
      target: "children"
    },
    default_price: {
      id: "price-lamp-004",
      object: "price",
      active: true,
      currency: "bgn",
      unit_amount: 4200, // 42.00 BGN
      type: "one_time",
    } as Stripe.Price,
    created: Date.now(),
    updated: Date.now(),
    livemode: false,
    marketing_features: [],
    package_dimensions: null,
    shippable: null,
    statement_descriptor: null,
    tax_code: null,
    type: "good",
    unit_label: null,
    url: null,
  } as Stripe.Product,
  {
    id: "lamp-005",
    object: "product",
    active: true,
    name: "Лампа за четене - Класическа",
    description: "Класическа лампа за четене с регулируем ъгъл и интензитет. Перфектна за работно място или спалня.",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=800&fit=crop"
    ],
    metadata: {
      category: "lamp",
      type: "reading",
      adjustable: "true"
    },
    default_price: {
      id: "price-lamp-005",
      object: "price",
      active: true,
      currency: "bgn",
      unit_amount: 5500, // 55.00 BGN
      type: "one_time",
    } as Stripe.Price,
    created: Date.now(),
    updated: Date.now(),
    livemode: false,
    marketing_features: [],
    package_dimensions: null,
    shippable: null,
    statement_descriptor: null,
    tax_code: null,
    type: "good",
    unit_label: null,
    url: null,
  } as Stripe.Product,
  {
    id: "lamp-006",
    object: "product",
    active: true,
    name: "Декоративна лампа - Скандинавски стил",
    description: "Красива декоративна лампа в скандинавски стил. Създава уютна и топла атмосфера.",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
    ],
    metadata: {
      category: "lamp",
      type: "decorative",
      style: "scandinavian"
    },
    default_price: {
      id: "price-lamp-006",
      object: "price",
      active: true,
      currency: "bgn",
      unit_amount: 9800, // 98.00 BGN
      type: "one_time",
    } as Stripe.Price,
    created: Date.now(),
    updated: Date.now(),
    livemode: false,
    marketing_features: [],
    package_dimensions: null,
    shippable: null,
    statement_descriptor: null,
    tax_code: null,
    type: "good",
    unit_label: null,
    url: null,
  } as Stripe.Product,
];

// Комбиниран списък с всички продукти
export const allProducts: Stripe.Product[] = [
  ...ceramicProducts,
  ...lampProducts,
];

// Експорт по категории
export const productsByCategory = {
  ceramic: ceramicProducts,
  lamps: lampProducts,
  all: allProducts,
};

// Helper функция, която симулира Stripe API response
export function getProductsList(limit?: number) {
  const products = limit ? allProducts.slice(0, limit) : allProducts;
  return {
    data: products,
    has_more: false,
    object: "list",
    url: "/v1/products",
  };
}

// Helper функция за намиране на продукт по ID
export function getProductById(id: string): Stripe.Product | null {
  return allProducts.find((product) => product.id === id) || null;
}


