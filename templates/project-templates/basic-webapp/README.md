# Basic Web App Template

A flexible, modern web application template with examples derived from the TechGear Store sample project.

## Project Structure

```
basic-webapp/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── features/          # Feature-specific components
│   │   │   ├── layout/            # Layout components (Header, Footer, etc.)
│   │   │   └── ui/                # Reusable UI components
│   │   ├── pages/                 # Page components
│   │   ├── hooks/                 # Custom React hooks
│   │   ├── services/              # API services
│   │   ├── store/                 # State management
│   │   ├── types/                 # TypeScript type definitions
│   │   └── utils/                 # Utility functions
│   ├── public/
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── routes/                # API route definitions
│   │   ├── controllers/           # Request handlers
│   │   ├── models/                # Data models
│   │   ├── middleware/            # Custom middleware
│   │   ├── services/              # Business logic
│   │   └── utils/                 # Utility functions
│   └── package.json
├── docs/
├── tests/
└── README.md
```

## Tech Stack Options

### Frontend Frameworks
- **React** (with TypeScript) - Component-based UI
- **Vue.js** (with TypeScript) - Progressive framework
- **Angular** - Full-featured framework
- **Svelte** - Compile-time framework

### Backend Frameworks
- **Node.js + Express** - JavaScript runtime
- **Python + FastAPI** - Fast Python framework
- **Go + Gin** - High-performance Go framework
- **Java + Spring Boot** - Enterprise Java framework

### Database Options
- **PostgreSQL** - Relational database
- **MongoDB** - Document database
- **SQLite** - Lightweight database
- **Redis** - In-memory cache

## Example Implementation (TechGear-Inspired)

### E-commerce Features
- **Product Catalog**: Browse and search products
- **Shopping Cart**: Add/remove items
- **User Authentication**: Login/registration
- **Order Management**: Place and track orders
- **User Profiles**: Account management

### Component Examples

#### Product Card Component
```typescript
// components/features/ProductCard.tsx
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

#### API Service Example
```typescript
// services/api.ts
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

## Quick Start

1. **Choose Your Stack**
   ```bash
   # Clone and customize
   cp -r templates/project-templates/basic-webapp my-project
   cd my-project
   ```

2. **Install Dependencies**
   ```bash
   # Frontend
   cd frontend && npm install
   
   # Backend
   cd ../backend && npm install
   ```

3. **Configure Environment**
   ```bash
   # Copy and customize environment files
   cp .env.example .env
   ```

4. **Start Development**
   ```bash
   # Run both frontend and backend
   npm run dev
   ```

## AI Workflow Integration

This template is designed to work with the AI development workflow personas:
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

### Adding New Features
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