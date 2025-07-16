---
layout: default
title: Basic Web App Template
parent: Project Templates
nav_order: 1
---

# Basic Web App Template

A flexible, modern web application template with examples derived from the TechGear Store sample project.

## Quick Start

```bash
cp -r templates/project-templates/basic-webapp my-project
cd my-project
npm install
npm run dev
```

## Project Structure

```
basic-webapp/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── features/          # Feature-specific components
│   │   │   ├── layout/            # Layout components
│   │   │   └── ui/                # Reusable UI components
│   │   ├── pages/                 # Page components
│   │   ├── hooks/                 # Custom React hooks
│   │   ├── services/              # API services
│   │   ├── store/                 # State management
│   │   ├── types/                 # TypeScript definitions
│   │   └── utils/                 # Utility functions
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── routes/                # API routes
│   │   ├── controllers/           # Request handlers
│   │   ├── models/                # Data models
│   │   ├── middleware/            # Custom middleware
│   │   ├── services/              # Business logic
│   │   └── utils/                 # Utility functions
│   └── package.json
└── README.md
```

## Tech Stack Options

### Frontend
- **React** (with TypeScript) - Component-based UI
- **Vue.js** (with TypeScript) - Progressive framework
- **Angular** - Full-featured framework
- **Svelte** - Compile-time framework

### Backend
- **Node.js + Express** - JavaScript runtime
- **Python + FastAPI** - Fast Python framework
- **Go + Gin** - High-performance Go framework
- **Java + Spring Boot** - Enterprise Java framework

### Database
- **PostgreSQL** - Relational database
- **MongoDB** - Document database
- **SQLite** - Lightweight database
- **Redis** - In-memory cache

## Example Features

### E-commerce Implementation
- **Product Catalog**: Browse and search products
- **Shopping Cart**: Add/remove items with persistence
- **User Authentication**: Login/registration with JWT
- **Order Management**: Place and track orders
- **User Profiles**: Account management

### Component Examples

#### Product Card
```typescript
interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product.id)}>
        Add to Cart
      </button>
    </div>
  );
};
```

#### API Service
```typescript
export const productService = {
  async getProducts(): Promise<Product[]> {
    const response = await fetch('/api/products');
    return response.json();
  },
  
  async getProduct(id: string): Promise<Product> {
    const response = await fetch(`/api/products/${id}`);
    return response.json();
  }
};
```

## AI Workflow Integration

### Recommended Personas
- **FrontendDeveloper** for React/Vue/Angular components
- **BackendDeveloper** for API development
- **UXDesigner** for UI/UX improvements
- **DevOpsEngineer** for deployment setup

### Example AI Prompts
```
"Create a product listing page component with:
- Grid layout for products
- Search and filter functionality
- Pagination controls
- Loading states
- Error handling

Use the ProductCard component as a reference."
```

## Customization Guide

### Adding Features
1. Create feature-specific components in `components/features/`
2. Add corresponding API endpoints in `backend/routes/`
3. Update types in `types/` directory
4. Add tests in `tests/` directory

### Styling Options
- **CSS Modules** - Scoped styling
- **Styled Components** - CSS-in-JS
- **Tailwind CSS** - Utility-first CSS
- **Sass/SCSS** - CSS preprocessor

### State Management
- **Redux Toolkit** - Predictable state
- **Zustand** - Lightweight state
- **Context API** - React built-in
- **Vuex/Pinia** - Vue state management

## Next Steps

- [View Complete Example](../example-usage/)
- [Browse Persona Templates](../personas/)
- [Explore Prompt Templates](../prompts/)
- [Check Workflow Templates](../workflows/) 