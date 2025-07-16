# Template Usage Examples

This document shows how to use the AI Development Workflow templates together, using TechGear Store as a reference implementation.

## Complete Workflow Example: E-commerce Application

### Phase 1: Project Setup

#### 1. Choose Project Template
```bash
# For a web application
cp -r templates/project-templates/basic-webapp techgear-store
cd techgear-store

# For mobile app
cp -r templates/project-templates/mobile-app techgear-mobile
cd techgear-mobile

# For SaaS dashboard
cp -r templates/project-templates/saas-dashboard techgear-admin
cd techgear-admin
```

#### 2. Select Relevant Personas
Based on your team composition:

**Solo Developer Setup:**
- FrontendDeveloper
- BackendDeveloper
- DevOpsEngineer

**Design-Focused Team:**
- UXDesigner
- FrontendDeveloper
- ProductManager

**Full Team Setup:**
- ProjectManager
- ProductManager
- UXDesigner
- FrontendDeveloper
- BackendDeveloper
- QAEngineer
- DevOpsEngineer

### Phase 2: Planning with AI

#### Using ProjectManager Persona
```
You are a ProjectManager focused on delivering high-quality software projects.

Create a project plan for TechGear Store with:
- Requirements: E-commerce platform with product catalog, shopping cart, user authentication
- Timeline: 8-week development cycle
- Team: 3 developers, 1 designer, 1 QA
- Risks: Payment integration, inventory management, performance at scale
- Success metrics: 2-second page load, 99.9% uptime, 95% test coverage
```

#### Using ProductManager Persona
```
You are a ProductManager focused on user-centric solutions.

Define the MVP features for TechGear Store:
- Core user journey: Browse → Add to Cart → Checkout → Order Confirmation
- Key metrics: Conversion rate, average order value, cart abandonment
- User personas: Tech enthusiasts, casual shoppers, business buyers
- Success criteria: 5% conversion rate, $50 average order value
```

### Phase 3: Design with AI

#### Using UXDesigner Persona
```
You are a UX Designer focused on creating intuitive user interfaces.

Design the product catalog page for TechGear Store:
- Layout: Grid layout with filters and search
- Components: ProductCard, FilterPanel, SearchBar, Pagination
- Interactions: Hover effects, quick add to cart, wishlist
- Accessibility: Keyboard navigation, screen reader support
- Mobile: Responsive design with touch-friendly interactions
```

#### Using Design Prompts
```
Create a product card component with:
- Product image with zoom capability
- Product name and price
- Add to cart button
- Wishlist button
- Rating and review count
- Stock status indicator

Follow the TechGear design system with blue primary color (#2563eb) and orange accent (#f97316).
```

### Phase 4: Development with AI

#### Using FrontendDeveloper Persona
```
You are a Frontend Developer focused on React development.

Create a ProductCard component for TechGear Store:
- Props: product (Product), onAddToCart (function), onWishlist (function)
- Features: Image lazy loading, price formatting, stock status
- Styling: Responsive design, hover effects, loading states
- Testing: Unit tests for rendering and interactions
- Accessibility: ARIA labels, keyboard navigation
```

#### Using Development Prompts
```
Create a ProductCard component for an e-commerce application with:
- Purpose: Display product information in a card format
- Props: product (Product), onAddToCart (function), onViewDetails (function)
- Styling: Responsive card with hover effects, product image, name, price, and action buttons
- Accessibility: Alt text for images, keyboard navigation, ARIA labels
- Testing: Unit tests for rendering, user interactions, and prop validation

Reference the TechGear Store product display patterns.
```

### Phase 5: Backend Development

#### Using BackendDeveloper Persona
```
You are a Backend Developer focused on building scalable APIs.

Create the product API for TechGear Store:
- Endpoints: GET /products, GET /products/:id, POST /products, PUT /products/:id
- Features: Pagination, filtering, search, caching
- Database: PostgreSQL with proper indexing
- Security: Input validation, rate limiting, authentication
- Performance: Response time under 200ms, 99.9% uptime
```

#### Using Backend Development Prompts
```
Create a product API service with:
- Endpoints: GET /products, GET /products/:id, POST /products, PUT /products/:id, DELETE /products/:id
- Data types: Product interface with id, name, description, price, image, category, stock
- Error handling: Network errors, validation errors, server errors
- Caching: Cache product list for 5 minutes, cache individual products for 10 minutes
- Authentication: Include JWT token in headers for protected endpoints

Include retry logic for failed requests and proper TypeScript types.
```

### Phase 6: Testing with AI

#### Using QAEngineer Persona
```
You are a QA Engineer focused on ensuring software quality.

Create test plans for TechGear Store:
- Unit tests: Component rendering, API calls, utility functions
- Integration tests: User workflows, API integration
- E2E tests: Complete purchase flow, user registration
- Performance tests: Page load times, API response times
- Security tests: Authentication, authorization, input validation
```

#### Using Testing Prompts
```
Create integration tests for product purchase flow with:
- Test scenarios: Browse products, add to cart, checkout, order confirmation
- API mocking: Mock product API, cart API, payment API
- Database: Seed test products and user data
- Cleanup: Clear cart and test data after each test

Test the complete user journey from product discovery to order completion.
```

### Phase 7: Deployment with AI

#### Using DevOpsEngineer Persona
```
You are a DevOps Engineer focused on automated deployment.

Set up CI/CD for TechGear Store:
- Pipeline: GitHub Actions with automated testing
- Environments: Development, staging, production
- Deployment: Blue-green deployment with zero downtime
- Monitoring: Application metrics, error tracking, performance monitoring
- Security: Vulnerability scanning, secrets management
```

#### Using Deployment Prompts
```
Create a GitHub Actions workflow for TechGear Store with:
- Triggers: Push to main, pull requests
- Build: React build, Node.js build
- Test: Unit tests, integration tests, E2E tests
- Lint: ESLint, Prettier, TypeScript checking
- Deploy: Staging deployment on success, production with approval

Use appropriate runners and caching for performance.
```

## Real-World Implementation Examples

### Product Management Feature

#### 1. Database Schema
```sql
-- Products table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image_url VARCHAR(500),
  category_id UUID REFERENCES categories(id),
  stock_quantity INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Categories table
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  parent_id UUID REFERENCES categories(id)
);
```

#### 2. API Endpoints
```typescript
// GET /api/products
interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  page?: number;
  limit?: number;
}

// POST /api/products
interface CreateProductRequest {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categoryId: string;
  stockQuantity: number;
}
```

#### 3. React Component
```typescript
// components/features/ProductList.tsx
import React from 'react';
import { useProducts } from '../../hooks/useProducts';
import { ProductCard } from './ProductCard';
import { ProductFilters } from './ProductFilters';

export const ProductList: React.FC = () => {
  const { products, loading, error, filters, setFilters } = useProducts();

  if (loading) return <ProductListSkeleton />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div className="product-list">
      <ProductFilters filters={filters} onFiltersChange={setFilters} />
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
```

#### 4. Custom Hook
```typescript
// hooks/useProducts.ts
import { useState, useEffect } from 'react';
import { productService } from '../services/api';

export const useProducts = (initialFilters: ProductFilters = {}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await productService.getProducts(filters);
        setProducts(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters]);

  return { products, loading, error, filters, setFilters };
};
```

### Shopping Cart Feature

#### 1. State Management
```typescript
// store/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  items: CartItem[];
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  items: [],
  loading: false,
  error: null
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item.product.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ product: action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.product.id !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
      const item = state.items.find(item => item.product.id === action.payload.productId);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    }
  }
});
```

#### 2. Cart Component
```typescript
// components/features/ShoppingCart.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CartItem } from './CartItem';
import { cartSlice } from '../../store/cartSlice';

export const ShoppingCart: React.FC = () => {
  const { items, loading } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const handleCheckout = () => {
    // Navigate to checkout page
  };

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart ({items.length} items)</h2>
      <div className="cart-items">
        {items.map(item => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <div className="total">Total: ${total.toFixed(2)}</div>
        <button onClick={handleCheckout} disabled={loading}>
          {loading ? 'Processing...' : 'Proceed to Checkout'}
        </button>
      </div>
    </div>
  );
};
```

## Template Integration Best Practices

### 1. Persona Selection
- **Start with ProjectManager** for overall planning
- **Use ProductManager** for feature prioritization
- **Switch to UXDesigner** for design decisions
- **Use Developer personas** for implementation
- **Finish with DevOpsEngineer** for deployment

### 2. Prompt Customization
- Replace placeholders with specific requirements
- Add context from your project
- Reference existing code patterns
- Include performance and security requirements

### 3. Workflow Integration
- Follow the agile development workflow for iterative development
- Use design sprint workflow for new features
- Apply continuous deployment workflow for production releases

### 4. Quality Assurance
- Use QAEngineer persona for comprehensive testing
- Apply testing prompts for all components
- Include accessibility and performance testing
- Validate against business requirements

This comprehensive approach ensures consistent, high-quality development while leveraging AI effectively throughout the entire process. 