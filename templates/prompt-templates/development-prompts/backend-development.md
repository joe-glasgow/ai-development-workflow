# Backend Development Prompts

## API Development

### REST API Endpoint Creation
```
Create a REST API endpoint for [resource] with:
- HTTP method: [GET/POST/PUT/DELETE]
- Route: [endpoint path]
- Request body: [data structure]
- Response format: [response structure]
- Validation: [input validation]
- Authentication: [auth requirements]
- Error handling: [error responses]

Use Express.js with TypeScript and proper error handling.
```

### Database Model Creation
```
Create a database model for [entity] with:
- Fields: [list all fields with types]
- Relationships: [foreign key relationships]
- Indexes: [performance indexes]
- Constraints: [data constraints]
- Methods: [model methods if needed]

Use Prisma or Mongoose with proper TypeScript types.
```

### Authentication System
```
Create an authentication system with:
- Registration: [user registration]
- Login: [user login]
- JWT tokens: [token management]
- Password hashing: [security]
- Role-based access: [RBAC]
- Password reset: [reset functionality]

Include proper security measures and validation.
```

## Service Layer

### Business Logic Service
```
Create a service for [business logic] with:
- Functionality: [what the service does]
- Dependencies: [external services/databases]
- Error handling: [error management]
- Logging: [activity logging]
- Caching: [if needed]

Use dependency injection and proper error handling.
```

### Data Processing Service
```
Create a data processing service for [data type] with:
- Input format: [input data structure]
- Processing logic: [transformation rules]
- Output format: [output structure]
- Validation: [data validation]
- Error handling: [processing errors]

Include proper data validation and error recovery.
```

## Testing Prompts

### API Testing
```
Create API tests for [endpoint] with:
- Test cases: [success and error scenarios]
- Request data: [test data]
- Expected responses: [response validation]
- Authentication: [auth testing]
- Edge cases: [boundary testing]

Use Jest with supertest for API testing.
```

### Database Testing
```
Create database tests for [model/query] with:
- Test data: [seed data]
- Test scenarios: [CRUD operations]
- Relationships: [relationship testing]
- Constraints: [constraint validation]
- Cleanup: [test cleanup]

Use a test database and proper cleanup.
```

## Security Prompts

### Input Validation
```
Create input validation for [endpoint] with:
- Validation rules: [field validation]
- Sanitization: [data sanitization]
- Error messages: [user-friendly errors]
- Security: [XSS/SQL injection prevention]

Use a validation library like Joi or Zod.
```

### Rate Limiting
```
Implement rate limiting for [endpoint] with:
- Limits: [requests per time period]
- Storage: [Redis or memory]
- Headers: [rate limit headers]
- Error responses: [limit exceeded responses]

Use express-rate-limit or similar middleware.
``` 