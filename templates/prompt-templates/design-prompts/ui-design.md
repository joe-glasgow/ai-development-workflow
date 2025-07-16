# UI Design Prompts

## Component Design

### Button Component Design
```
Design a button component with:
- Variants: [primary, secondary, danger, etc.]
- Sizes: [small, medium, large]
- States: [default, hover, active, disabled]
- Icons: [icon placement and sizing]
- Accessibility: [ARIA labels, keyboard navigation]

Follow design system guidelines and ensure accessibility compliance.
```

### Example: E-commerce Action Buttons
```
Design button components for an e-commerce application with:
- Variants: primary (Add to Cart), secondary (Save for Later), danger (Remove), outline (View Details)
- Sizes: small (icon buttons), medium (standard actions), large (primary CTAs)
- States: default, hover, active, disabled, loading (with spinner)
- Icons: shopping cart, heart, trash, eye, plus/minus for quantity
- Accessibility: Clear labels, keyboard navigation, focus indicators

Reference TechGear Store button patterns for consistency.
```

### Form Design
```
Design a form for [form purpose] with:
- Layout: [field arrangement]
- Labels: [label positioning and styling]
- Validation: [error state design]
- Progress: [multi-step indicators]
- Submission: [submit button design]

Ensure clear visual hierarchy and user-friendly error messaging.
```

### Example: Checkout Form Design
```
Design a multi-step checkout form with:
- Layout: Single column layout with clear step indicators
- Labels: Top-aligned labels with required field indicators
- Validation: Real-time validation with inline error messages
- Progress: Step progress bar (Shipping → Payment → Review)
- Submission: Large primary button with loading state

Include guest checkout option and saved payment methods.
```

### Data Table Design
```
Design a data table for [data type] with:
- Columns: [column headers and content]
- Sorting: [sort indicators]
- Filtering: [filter controls]
- Pagination: [page navigation]
- Responsive: [mobile layout]

Include proper spacing, typography, and interactive states.
```

### Example: Product Management Table
```
Design a product management table with:
- Columns: Image, Name, Category, Price, Stock, Status, Actions
- Sorting: Clickable column headers with sort indicators
- Filtering: Category dropdown, price range slider, search box
- Pagination: Page numbers with items per page selector
- Responsive: Stacked layout on mobile with card view option

Include bulk actions, quick edit functionality, and export options.
```

## Layout Design

### Dashboard Layout
```
Design a dashboard layout with:
- Header: [navigation and user info]
- Sidebar: [menu and navigation]
- Main content: [primary content area]
- Widgets: [data visualization areas]
- Responsive: [mobile adaptation]

Use a grid system and ensure proper content hierarchy.
```

### Example: E-commerce Admin Dashboard
```
Design an admin dashboard for an e-commerce store with:
- Header: Logo, search, notifications, user menu
- Sidebar: Navigation menu (Dashboard, Products, Orders, Customers, Analytics)
- Main content: Key metrics cards, recent orders table, sales chart
- Widgets: Top products, low stock alerts, recent reviews
- Responsive: Collapsible sidebar, mobile-first design

Include quick actions and real-time data updates.
```

### Mobile-First Design
```
Design a mobile-first interface for [feature] with:
- Touch targets: [minimum 44px]
- Navigation: [mobile navigation patterns]
- Content: [readable text sizes]
- Gestures: [swipe, tap interactions]
- Loading: [skeleton screens]

Prioritize touch-friendly interactions and fast loading.
```

### Example: Mobile Product Catalog
```
Design a mobile product catalog with:
- Touch targets: 44px minimum for buttons and links
- Navigation: Bottom tab bar with search, categories, cart, profile
- Content: Large product images, clear pricing, prominent CTAs
- Gestures: Swipe between product images, pull to refresh, infinite scroll
- Loading: Skeleton cards with shimmer effect

Include quick add to cart and wishlist functionality.
```

## Visual Design

### Color Palette
```
Create a color palette for [brand/application] with:
- Primary colors: [main brand colors]
- Secondary colors: [accent colors]
- Semantic colors: [success, warning, error]
- Neutral colors: [grays and whites]
- Accessibility: [WCAG contrast ratios]

Ensure all color combinations meet accessibility standards.
```

### Example: TechGear Brand Colors
```
Create a color palette for TechGear e-commerce brand with:
- Primary colors: Blue (#2563eb) for trust and reliability
- Secondary colors: Orange (#f97316) for energy and action
- Semantic colors: Green (#22c55e) for success, Red (#ef4444) for errors, Yellow (#eab308) for warnings
- Neutral colors: Gray scale from #f8fafc to #0f172a
- Accessibility: All combinations meet WCAG AA standards (4.5:1 contrast ratio)

Include hover and active state variations for interactive elements.
```

### Typography System
```
Design a typography system with:
- Headings: [H1-H6 styles]
- Body text: [paragraph and list styles]
- Captions: [small text styles]
- Font weights: [available weights]
- Line heights: [readability optimization]

Use a consistent scale and ensure readability across devices.
```

### Example: E-commerce Typography
```
Design a typography system for e-commerce with:
- Headings: H1 (32px) for page titles, H2 (24px) for sections, H3 (20px) for subsections
- Body text: 16px for main content, 14px for secondary text
- Captions: 12px for labels, timestamps, and small details
- Font weights: Regular (400), Medium (500), Semibold (600), Bold (700)
- Line heights: 1.5 for body text, 1.2 for headings

Use a clean, readable font like Inter or system fonts.
```

## Interaction Design

### Loading States
```
Design loading states for [component/feature] with:
- Skeleton screens: [content placeholders]
- Spinners: [loading indicators]
- Progress bars: [progress indication]
- Transitions: [smooth animations]
- Error states: [error handling]

Provide clear feedback and maintain user engagement.
```

### Example: Product Page Loading
```
Design loading states for product pages with:
- Skeleton screens: Product image placeholder, title lines, price placeholder
- Spinners: Small spinner for add to cart action
- Progress bars: Upload progress for product images
- Transitions: Smooth fade-in for content, slide transitions between images
- Error states: Retry button for failed image loads, fallback images

Include optimistic UI updates for better perceived performance.
```

### Micro-interactions
```
Design micro-interactions for [feature] with:
- Hover effects: [mouse interactions]
- Click feedback: [button press effects]
- Transitions: [state changes]
- Animations: [motion design]
- Sound: [audio feedback if applicable]

Enhance user experience with subtle, purposeful animations.
```

### Example: Shopping Cart Interactions
```
Design micro-interactions for shopping cart with:
- Hover effects: Subtle scale and shadow on product cards
- Click feedback: Button press animation with ripple effect
- Transitions: Smooth slide-in for cart items, fade for quantity changes
- Animations: Bounce effect when items are added, slide-out for removals
- Sound: Optional click sounds for button interactions

Include haptic feedback for mobile devices.
```

## Accessibility Design

### Screen Reader Support
```
Design for screen reader accessibility with:
- ARIA labels: [descriptive labels]
- Landmarks: [page structure]
- Focus indicators: [keyboard navigation]
- Alt text: [image descriptions]
- Semantic HTML: [proper markup]

Ensure all interactive elements are keyboard accessible.
```

### Example: Product Card Accessibility
```
Design accessible product cards with:
- ARIA labels: "Add [Product Name] to cart" for buttons
- Landmarks: Product cards in a grid with proper heading structure
- Focus indicators: Clear focus ring around interactive elements
- Alt text: Descriptive alt text for product images
- Semantic HTML: Proper button and link elements

Include skip links and keyboard navigation support.
```

### Color and Contrast
```
Design with accessibility in mind:
- Contrast ratios: [WCAG AA/AAA compliance]
- Color independence: [not relying on color alone]
- Focus indicators: [visible focus states]
- Text sizing: [readable font sizes]
- Spacing: [adequate touch targets]

Test with accessibility tools and user feedback.
```

### Example: E-commerce Accessibility
```
Design accessible e-commerce interface with:
- Contrast ratios: 4.5:1 minimum for normal text, 3:1 for large text
- Color independence: Use icons and text labels, not just color
- Focus indicators: High contrast focus rings on all interactive elements
- Text sizing: Minimum 16px for body text, scalable up to 200%
- Spacing: 44px minimum touch targets, adequate spacing between elements

Include high contrast mode and reduced motion preferences.
```

## Real-World Examples from TechGear

### Product Grid Layout
```css
/* Example CSS structure */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

.product-card {
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}
```

### Responsive Navigation
```css
/* Example mobile navigation */
.mobile-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #e5e7eb;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
}

@media (min-width: 768px) {
  .mobile-nav {
    display: none;
  }
}
```

### Loading Skeleton
```css
/* Example skeleton loading */
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
``` 