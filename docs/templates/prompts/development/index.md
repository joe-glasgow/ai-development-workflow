---
layout: default
title: Development Prompts
parent: Prompt Templates
nav_order: 1
---

# Development Prompts

AI prompts for coding and implementation, with TechGear-inspired examples.

## Component Development

### Basic Component Template
```
Create a React component for [component name] with:
- Purpose: [describe what the component does]
- Props: [list required props with types]
- Styling: [describe styling requirements]
- Accessibility: [accessibility requirements]
- Testing: [testing requirements]

Use TypeScript and follow React best practices.
```

### Example: Product Card Component
```
Create a ProductCard component for an e-commerce application with:
- Purpose: Display product information in a card format
- Props: product (Product), onAddToCart (function), onViewDetails (function)
- Styling: Responsive card with hover effects, product image, name, price, and action buttons
- Accessibility: Alt text for images, keyboard navigation, ARIA labels
- Testing: Unit tests for rendering, user interactions, and prop validation

Reference the TechGear Store product display patterns.
```

### Form Component
```
Create a form component for [form purpose] with:
- Form fields: [list fields]
- Validation: [validation rules]
- Submission: [submission handling]
- Error handling: [error display]
- Loading states: [loading indicators]

Include proper form accessibility and error messaging.
```

### Data Display Component
```
Create a component to display [data type] with:
- Data structure: [describe data format]
- Display format: [how to show the data]
- Pagination: [if needed]
- Filtering: [if needed]
- Responsive design: [mobile considerations]

Include loading states and empty states.
```

## API Integration

### API Service Creation
```
Create an API service for [feature] with:
- Endpoints: [list required endpoints]
- Data types: [TypeScript interfaces]
- Error handling: [error management]
- Caching: [if needed]
- Authentication: [auth requirements]

Use axios or fetch with proper error handling.
```

### Example: Product API Service
```
Create a product API service with:
- Endpoints: GET /products, GET /products/:id, POST /products, PUT /products/:id, DELETE /products/:id
- Data types: Product interface with id, name, description, price, image, category, stock
- Error handling: Network errors, validation errors, server errors
- Caching: Cache product list for 5 minutes, cache individual products for 10 minutes
- Authentication: Include JWT token in headers for protected endpoints

Include retry logic for failed requests and proper TypeScript types.
```

### Hook Creation
```
Create a custom React hook for [hook purpose] with:
- Functionality: [what the hook does]
- Parameters: [input parameters]
- Return values: [what it returns]
- Error handling: [error states]
- Loading states: [loading management]

Include proper TypeScript types and documentation.
```

## Testing Prompts

### Unit Test Creation
```
Create unit tests for [component/function] with:
- Test cases: [list scenarios to test]
- Mocking: [what to mock]
- Assertions: [what to verify]
- Coverage: [coverage requirements]

Use Jest and React Testing Library for components.
```

### Integration Test Creation
```
Create integration tests for [feature] with:
- Test scenarios: [user workflows]
- API mocking: [mock external services]
- Database: [test data setup]
- Cleanup: [test cleanup]

Use Cypress or Playwright for E2E testing.
```

## Real-World Examples

### Shopping Cart Component
```typescript
interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  price: number;
}

interface ShoppingCartProps {
  items: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onCheckout: () => void;
}
```

### Product Search Component
```typescript
interface SearchFilters {
  query: string;
  category: string;
  priceRange: [number, number];
  sortBy: 'name' | 'price' | 'popularity';
}
```

## Integration with Personas

### FrontendDeveloper
- Component creation and styling
- Performance optimization
- Accessibility implementation
- State management

### BackendDeveloper
- API design and implementation
- Database integration
- Security implementation
- Error handling

### MobileDeveloper
- Mobile-specific components
- Platform considerations
- Performance optimization
- Native integration

## Next Steps

- [Browse Design Prompts](../design/)
- [Check Deployment Prompts](../deployment/)
- [View Complete Example](../../example-usage/) 