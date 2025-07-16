# Mobile App Template

A flexible cross-platform mobile application template with examples derived from the TechGear Store sample project.

## Project Structure

```
mobile-app/
├── src/
│   ├── components/
│   │   ├── features/              # Feature-specific components
│   │   ├── layout/                # Layout components (Navigation, etc.)
│   │   └── ui/                    # Reusable UI components
│   ├── screens/                   # Screen components
│   ├── navigation/                # Navigation configuration
│   ├── services/                  # API services
│   ├── hooks/                     # Custom hooks
│   ├── store/                     # State management
│   ├── types/                     # TypeScript type definitions
│   └── utils/                     # Utility functions
├── android/                       # Android-specific files
├── ios/                          # iOS-specific files
├── docs/
├── tests/
└── package.json
```

## Tech Stack Options

### Cross-Platform Frameworks
- **React Native** - JavaScript/TypeScript framework
- **Flutter** - Dart-based framework
- **Xamarin** - C# framework
- **Ionic** - Web-based framework

### Native Development
- **iOS**: Swift/SwiftUI or Objective-C
- **Android**: Kotlin/Jetpack Compose or Java

### State Management
- **Redux Toolkit** - Predictable state
- **Zustand** - Lightweight state
- **MobX** - Observable state
- **Provider** - Flutter state management

## Example Implementation (TechGear-Inspired)

### E-commerce Mobile Features
- **Product Catalog**: Browse products with search/filter
- **Shopping Cart**: Add/remove items with persistence
- **User Authentication**: Login/registration with biometrics
- **Order Tracking**: Real-time order status
- **Push Notifications**: Order updates and promotions

### Component Examples

#### Product List Screen
```typescript
// screens/ProductListScreen.tsx
import React from 'react';
import { FlatList, View } from 'react-native';
import { ProductCard } from '../components/features/ProductCard';
import { useProducts } from '../hooks/useProducts';

export const ProductListScreen: React.FC = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductCard product={item} />}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};
```

#### Product Card Component
```typescript
// components/features/ProductCard.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface ProductCardProps {
  product: Product;
  onPress: (product: Product) => void;
  onAddToCart: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onPress, 
  onAddToCart 
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(product)}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => onAddToCart(product.id)}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
```

#### API Service Example
```typescript
// services/api.ts
export const productService = {
  async getProducts(): Promise<Product[]> {
    const response = await fetch('https://api.techgear.com/products');
    return response.json();
  },
  
  async getProduct(id: string): Promise<Product> {
    const response = await fetch(`https://api.techgear.com/products/${id}`);
    return response.json();
  },
  
  async searchProducts(query: string): Promise<Product[]> {
    const response = await fetch(`https://api.techgear.com/products/search?q=${query}`);
    return response.json();
  }
};
```

## Quick Start

1. **Choose Your Framework**
   ```bash
   # React Native
   npx react-native init MyApp --template react-native-template-typescript
   
   # Flutter
   flutter create my_app
   
   # Ionic
   ionic start my-app tabs --type=react
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Platform Setup**
   ```bash
   # iOS (macOS only)
   cd ios && pod install
   
   # Android
   # Ensure Android SDK is configured
   ```

4. **Start Development**
   ```bash
   # React Native
   npm run ios
   npm run android
   
   # Flutter
   flutter run
   ```

## AI Workflow Integration

This template works with:
- **MobileDeveloper** for cross-platform development
- **UXDesigner** for mobile UI/UX design
- **QAEngineer** for mobile testing
- **DevOpsEngineer** for app store deployment

### Example AI Prompts
```
"Create a product detail screen with:
- Product images with zoom capability
- Product information and description
- Add to cart functionality
- Related products section
- Share functionality

Follow mobile design best practices and ensure accessibility."
```

## Platform-Specific Considerations

### iOS Features
- **SwiftUI**: Modern declarative UI
- **Core Data**: Local data persistence
- **Push Notifications**: APNs integration
- **App Store**: Distribution and updates

### Android Features
- **Jetpack Compose**: Modern UI toolkit
- **Room Database**: Local data persistence
- **Firebase**: Push notifications and analytics
- **Google Play**: Distribution and updates

### Cross-Platform Features
- **Offline Support**: Local data caching
- **Biometric Auth**: Touch ID/Face ID
- **Deep Linking**: App-to-app navigation
- **Analytics**: User behavior tracking

## Customization Guide

### Adding New Features
1. Create feature-specific components in `components/features/`
2. Add corresponding screens in `screens/`
3. Update navigation in `navigation/`
4. Add API services in `services/`
5. Update types in `types/`

### Styling Options
- **StyleSheet**: React Native built-in
- **Styled Components**: CSS-in-JS for React Native
- **Theme System**: Consistent design tokens
- **Platform-Specific**: iOS/Android adaptations

### Testing Strategy
- **Unit Tests**: Component and utility testing
- **Integration Tests**: API and state management
- **E2E Tests**: User workflow testing
- **Platform Tests**: iOS/Android specific testing 