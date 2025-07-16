# Component Development Prompts

## React Component Creation

### Basic Component Template
```
Create a React component for [component name] with the following requirements:
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

### Example: User Registration Form
```
Create a UserRegistrationForm component with:
- Form fields: email, password, confirmPassword, firstName, lastName, agreeToTerms
- Validation: Email format, password strength, password match, required fields
- Submission: API call to /api/auth/register with loading state
- Error handling: Display validation errors and API errors
- Loading states: Disable form during submission, show spinner

Include proper form accessibility, password visibility toggle, and terms checkbox.
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

### Example: Product List Component
```
Create a ProductList component with:
- Data structure: Array of Product objects with id, name, price, image, category
- Display format: Grid layout with ProductCard components
- Pagination: Load more button or infinite scroll
- Filtering: Category filter, price range, search functionality
- Responsive design: 3 columns on desktop, 2 on tablet, 1 on mobile

Include loading skeleton, empty state, and error handling.
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

### Example: useProducts Hook
```
Create a useProducts hook with:
- Functionality: Fetch and manage product data with caching and pagination
- Parameters: filters (ProductFilters), page (number), limit (number)
- Return values: { products, loading, error, hasMore, loadMore }
- Error handling: Network errors, API errors, retry functionality
- Loading states: Initial loading, pagination loading, refresh loading

Include proper error boundaries and loading states for better UX.
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

### Example: ProductCard Component Tests
```
Create unit tests for ProductCard component with:
- Test cases: Rendering with props, click handlers, image loading, accessibility
- Mocking: Mock onAddToCart and onViewDetails functions
- Assertions: Component renders correctly, handlers called with correct params, accessibility attributes present
- Coverage: 90% coverage including edge cases

Test both success and error scenarios for image loading.
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

### Example: Product Purchase Flow
```
Create integration tests for product purchase flow with:
- Test scenarios: Browse products, add to cart, checkout, order confirmation
- API mocking: Mock product API, cart API, payment API
- Database: Seed test products and user data
- Cleanup: Clear cart and test data after each test

Test the complete user journey from product discovery to order completion.
```

## Real-World Examples from TechGear

### Shopping Cart Component
```typescript
// Example implementation pattern
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

// Key features: Quantity controls, price calculations, checkout flow
```

### Product Search Component
```typescript
// Example implementation pattern
interface SearchFilters {
  query: string;
  category: string;
  priceRange: [number, number];
  sortBy: 'name' | 'price' | 'popularity';
}

// Key features: Debounced search, filter combinations, URL state sync
```

### Order Tracking Component
```typescript
// Example implementation pattern
interface OrderStatus {
  orderId: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  trackingNumber?: string;
  estimatedDelivery?: Date;
}

// Key features: Real-time updates, tracking integration, status timeline
``` 