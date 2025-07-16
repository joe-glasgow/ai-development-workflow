---
layout: default
title: Complete Example Usage
parent: Templates
nav_order: 5
---

# Complete Example: TechGear Store

A full walkthrough of using AI Development Workflow templates to build an e-commerce application.

## Project Overview

**TechGear Store** - E-commerce platform for tech products
- **Frontend**: React with TypeScript
- **Backend**: Node.js with Express
- **Database**: PostgreSQL
- **Team**: 3 developers, 1 designer, 1 QA

## Phase 1: Project Setup

### Choose Project Template
```bash
cp -r templates/project-templates/basic-webapp techgear-store
cd techgear-store
```

### Select Personas
- **ProjectManager** - Overall planning and coordination
- **ProductManager** - Feature prioritization and user research
- **UXDesigner** - UI/UX design and research
- **FrontendDeveloper** - React component development
- **BackendDeveloper** - API and database development
- **QAEngineer** - Testing and quality assurance

## Phase 2: Planning with AI

### ProjectManager Persona
```
You are a ProjectManager focused on delivering high-quality software projects.

Create a project plan for TechGear Store with:
- Requirements: E-commerce platform with product catalog, shopping cart, user authentication
- Timeline: 8-week development cycle
- Team: 3 developers, 1 designer, 1 QA
- Risks: Payment integration, inventory management, performance at scale
- Success metrics: 2-second page load, 99.9% uptime, 95% test coverage
```

### ProductManager Persona
```
You are a ProductManager focused on user-centric solutions.

Define the MVP features for TechGear Store:
- Core user journey: Browse → Add to Cart → Checkout → Order Confirmation
- Key metrics: Conversion rate, average order value, cart abandonment
- User personas: Tech enthusiasts, casual shoppers, business buyers
- Success criteria: 5% conversion rate, $50 average order value
```

## Phase 3: Design with AI

### UXDesigner Persona
```
You are a UX Designer focused on creating intuitive user interfaces.

Design the product catalog page for TechGear Store:
- Layout: Grid layout with filters and search
- Components: ProductCard, FilterPanel, SearchBar, Pagination
- Interactions: Hover effects, quick add to cart, wishlist
- Accessibility: Keyboard navigation, screen reader support
- Mobile: Responsive design with touch-friendly interactions
```

## Phase 4: Development with AI

### FrontendDeveloper Persona
```
You are a Frontend Developer focused on React development.

Create a ProductCard component for TechGear Store:
- Props: product (Product), onAddToCart (function), onWishlist (function)
- Features: Image lazy loading, price formatting, stock status
- Styling: Responsive design, hover effects, loading states
- Testing: Unit tests for rendering and interactions
- Accessibility: ARIA labels, keyboard navigation
```

### BackendDeveloper Persona
```
You are a Backend Developer focused on building scalable APIs.

Create the product API for TechGear Store:
- Endpoints: GET /products, GET /products/:id, POST /products, PUT /products/:id
- Features: Pagination, filtering, search, caching
- Database: PostgreSQL with proper indexing
- Security: Input validation, rate limiting, authentication
- Performance: Response time under 200ms, 99.9% uptime
```

## Phase 5: Implementation Examples

### Database Schema
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
```

### React Component
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

### API Service
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

## Phase 6: Testing with AI

### QAEngineer Persona
```
You are a QA Engineer focused on ensuring software quality.

Create test plans for TechGear Store:
- Unit tests: Component rendering, API calls, utility functions
- Integration tests: User workflows, API integration
- E2E tests: Complete purchase flow, user registration
- Performance tests: Page load times, API response times
- Security tests: Authentication, authorization, input validation
```

## Phase 7: Deployment with AI

### DevOpsEngineer Persona
```
You are a DevOps Engineer focused on automated deployment.

Set up CI/CD for TechGear Store:
- Pipeline: GitHub Actions with automated testing
- Environments: Development, staging, production
- Deployment: Blue-green deployment with zero downtime
- Monitoring: Application metrics, error tracking, performance monitoring
- Security: Vulnerability scanning, secrets management
```

## Results

### Performance Metrics
- **Development Speed**: 60-70% faster than traditional methods
- **Code Quality**: 95% consistency score across components
- **Load Time**: Sub-2 second initial load
- **Test Coverage**: 90% automated coverage

### Key Features Delivered
- Product catalog with search and filtering
- Shopping cart with persistence
- User authentication and profiles
- Order management and tracking
- Admin dashboard for inventory

## Template Integration Summary

### Personas Used
- **ProjectManager**: Planning and coordination
- **ProductManager**: Feature prioritization
- **UXDesigner**: UI/UX design
- **FrontendDeveloper**: React development
- **BackendDeveloper**: API development
- **QAEngineer**: Testing and quality
- **DevOpsEngineer**: Deployment and infrastructure

### Prompts Used
- **Development Prompts**: Component creation, API design
- **Design Prompts**: UI design, accessibility
- **Deployment Prompts**: CI/CD setup, monitoring

### Workflow Used
- **Agile Development**: 2-week sprints with regular reviews
- **Design Sprint**: For new feature validation
- **Continuous Deployment**: For production releases

## Next Steps

- [Browse Persona Templates](../personas/)
- [Explore Project Templates](../projects/)
- [Check Prompt Templates](../prompts/)
- [Learn Workflow Templates](../workflows/) 