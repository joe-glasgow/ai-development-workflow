import { Product, Category } from '@/types/product'

export const categories: Category[] = [
  {
    id: 'laptops',
    name: 'Laptops',
    description: 'High-performance laptops for work and gaming',
    productCount: 4
  },
  {
    id: 'smartphones',
    name: 'Smartphones',
    description: 'Latest smartphones with cutting-edge technology',
    productCount: 3
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Essential tech accessories and peripherals',
    productCount: 5
  }
]

export const products: Product[] = [
  // Laptops
  {
    id: 'laptop-1',
    name: 'TechBook Pro 16"',
    description: 'Professional laptop with M2 chip, perfect for developers and designers. Built with AI-optimized performance.',
    price: 2499,
    originalPrice: 2799,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=400&fit=crop',
    category: 'laptops',
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    features: [
      'M2 Pro chip with 12-core CPU',
      '32GB unified memory',
      '1TB SSD storage',
      '16.2" Liquid Retina XDR display',
      '22-hour battery life'
    ],
    specifications: {
      'Processor': 'M2 Pro 12-core CPU',
      'Memory': '32GB unified memory',
      'Storage': '1TB SSD',
      'Display': '16.2" Liquid Retina XDR',
      'Graphics': 'M2 Pro 19-core GPU',
      'Weight': '4.7 lbs'
    }
  },
  {
    id: 'laptop-2',
    name: 'UltraBook Air 13"',
    description: 'Lightweight and powerful laptop for everyday computing. AI-enhanced battery optimization.',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=400&fit=crop',
    category: 'laptops',
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    features: [
      'Intel Core i7 processor',
      '16GB RAM',
      '512GB SSD',
      '13.3" Retina display',
      'All-day battery life'
    ],
    specifications: {
      'Processor': 'Intel Core i7-1260P',
      'Memory': '16GB LPDDR5',
      'Storage': '512GB SSD',
      'Display': '13.3" 2560x1600',
      'Graphics': 'Intel Iris Xe',
      'Weight': '2.8 lbs'
    }
  },
  {
    id: 'laptop-3',
    name: 'Gaming Beast X1',
    description: 'High-performance gaming laptop with RTX graphics. AI-powered thermal management.',
    price: 1899,
    originalPrice: 2199,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=400&fit=crop',
    category: 'laptops',
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    features: [
      'NVIDIA RTX 4070 GPU',
      'AMD Ryzen 9 processor',
      '32GB DDR5 RAM',
      '1TB NVMe SSD',
      '15.6" 144Hz display'
    ],
    specifications: {
      'Processor': 'AMD Ryzen 9 7900HX',
      'Memory': '32GB DDR5-4800',
      'Storage': '1TB NVMe SSD',
      'Display': '15.6" 1920x1080 144Hz',
      'Graphics': 'NVIDIA RTX 4070 8GB',
      'Weight': '5.1 lbs'
    }
  },
  {
    id: 'laptop-4',
    name: 'Creator Studio 14"',
    description: 'Content creation laptop with color-accurate display. AI-assisted video rendering.',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&h=400&fit=crop',
    category: 'laptops',
    rating: 4.5,
    reviewCount: 73,
    inStock: false,
    features: [
      '100% sRGB color accuracy',
      'Intel Core i7 processor',
      '16GB RAM',
      '1TB SSD',
      'Thunderbolt 4 ports'
    ],
    specifications: {
      'Processor': 'Intel Core i7-1280P',
      'Memory': '16GB LPDDR5',
      'Storage': '1TB SSD',
      'Display': '14" 2880x1800 OLED',
      'Graphics': 'Intel Iris Xe',
      'Weight': '3.2 lbs'
    }
  },

  // Smartphones
  {
    id: 'phone-1',
    name: 'TechPhone Pro Max',
    description: 'Flagship smartphone with AI-powered photography and all-day battery life.',
    price: 1199,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=400&fit=crop',
    category: 'smartphones',
    rating: 4.9,
    reviewCount: 234,
    inStock: true,
    features: [
      'AI-enhanced triple camera system',
      '6.7" Super Retina XDR display',
      'A17 Pro chip',
      '256GB storage',
      '5G connectivity'
    ],
    specifications: {
      'Display': '6.7" Super Retina XDR',
      'Chip': 'A17 Pro',
      'Storage': '256GB',
      'Camera': 'Triple 48MP system',
      'Battery': 'Up to 29 hours video',
      'Connectivity': '5G, Wi-Fi 6E'
    }
  },
  {
    id: 'phone-2',
    name: 'Galaxy Ultra S24',
    description: 'Android flagship with S Pen and advanced AI features for productivity.',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=400&fit=crop',
    category: 'smartphones',
    rating: 4.7,
    reviewCount: 187,
    inStock: true,
    features: [
      'S Pen included',
      '6.8" Dynamic AMOLED display',
      'Snapdragon 8 Gen 3',
      '512GB storage',
      '200MP main camera'
    ],
    specifications: {
      'Display': '6.8" Dynamic AMOLED 2X',
      'Processor': 'Snapdragon 8 Gen 3',
      'Storage': '512GB',
      'Camera': '200MP + 50MP + 10MP',
      'Battery': '5000mAh',
      'Special': 'S Pen included'
    }
  },
  {
    id: 'phone-3',
    name: 'Pixel AI Edition',
    description: 'Google smartphone with pure Android and advanced AI photography features.',
    price: 899,
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=400&fit=crop',
    category: 'smartphones',
    rating: 4.6,
    reviewCount: 142,
    inStock: true,
    features: [
      'Pure Android experience',
      'AI-powered photography',
      'Google Tensor G3 chip',
      '128GB storage',
      'Magic Eraser'
    ],
    specifications: {
      'Display': '6.3" OLED',
      'Chip': 'Google Tensor G3',
      'Storage': '128GB',
      'Camera': 'Dual 50MP system',
      'Battery': '4385mAh',
      'OS': 'Android 14'
    }
  },

  // Accessories
  {
    id: 'acc-1',
    name: 'Wireless Pro Headphones',
    description: 'Premium noise-canceling headphones with AI-adaptive sound.',
    price: 349,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=400&fit=crop',
    category: 'accessories',
    rating: 4.8,
    reviewCount: 312,
    inStock: true,
    features: [
      'Active noise cancellation',
      '30-hour battery life',
      'AI-adaptive sound',
      'Premium materials',
      'Quick charge'
    ],
    specifications: {
      'Driver': '40mm dynamic',
      'Battery': '30 hours with ANC',
      'Connectivity': 'Bluetooth 5.3',
      'Weight': '250g',
      'Charging': 'USB-C fast charge',
      'Features': 'ANC, Transparency mode'
    }
  },
  {
    id: 'acc-2',
    name: 'Mechanical Gaming Keyboard',
    description: 'RGB mechanical keyboard with AI-powered macro customization.',
    price: 159,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=400&fit=crop',
    category: 'accessories',
    rating: 4.7,
    reviewCount: 89,
    inStock: true,
    features: [
      'Cherry MX switches',
      'RGB backlighting',
      'AI macro programming',
      'USB-C connectivity',
      'Aluminum frame'
    ],
    specifications: {
      'Switches': 'Cherry MX Red',
      'Layout': 'Full-size (104 keys)',
      'Backlighting': 'Per-key RGB',
      'Connection': 'USB-C',
      'Material': 'Aluminum top plate',
      'Features': 'Hot-swappable switches'
    }
  },
  {
    id: 'acc-3',
    name: 'Precision Gaming Mouse',
    description: 'High-DPI gaming mouse with AI-assisted aim enhancement.',
    price: 89,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=400&fit=crop',
    category: 'accessories',
    rating: 4.6,
    reviewCount: 156,
    inStock: true,
    features: [
      '25,600 DPI sensor',
      'AI aim assistance',
      'Ergonomic design',
      '11 programmable buttons',
      'RGB lighting'
    ],
    specifications: {
      'Sensor': 'PixArt PMW3395',
      'DPI': 'Up to 25,600',
      'Buttons': '11 programmable',
      'Connection': 'USB-C wired',
      'Weight': '85g',
      'Lighting': 'RGB zones'
    }
  },
  {
    id: 'acc-4',
    name: 'Wireless Charging Stand',
    description: 'Fast wireless charging stand with AI temperature control.',
    price: 79,
    originalPrice: 99,
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=400&fit=crop',
    category: 'accessories',
    rating: 4.4,
    reviewCount: 67,
    inStock: true,
    features: [
      '15W fast charging',
      'AI temperature control',
      'Universal compatibility',
      'LED status indicator',
      'Non-slip base'
    ],
    specifications: {
      'Power': '15W max output',
      'Compatibility': 'Qi-enabled devices',
      'Input': 'USB-C',
      'Dimensions': '4.3" x 3.1" x 5.9"',
      'Weight': '180g',
      'Features': 'Foreign object detection'
    }
  },
  {
    id: 'acc-5',
    name: 'USB-C Hub Pro',
    description: 'Multi-port USB-C hub with AI power management for optimal device charging.',
    price: 129,
    image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&h=400&fit=crop',
    category: 'accessories',
    rating: 4.5,
    reviewCount: 94,
    inStock: true,
    features: [
      '10-in-1 connectivity',
      'AI power management',
      '4K HDMI output',
      '100W power delivery',
      'Compact design'
    ],
    specifications: {
      'Ports': '10 total ports',
      'HDMI': '4K@60Hz',
      'USB': '3x USB 3.0, 1x USB-C',
      'Power': '100W PD passthrough',
      'Ethernet': 'Gigabit',
      'Card Reader': 'SD/microSD'
    }
  }
]

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId)
}

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id)
}

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.originalPrice && product.inStock).slice(0, 6)
}
