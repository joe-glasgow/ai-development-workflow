# CI/CD Setup Prompts

## GitHub Actions Setup

### Basic CI/CD Pipeline
```
Create a GitHub Actions workflow for [project type] with:
- Triggers: [push to main, pull requests]
- Build: [build process]
- Test: [testing steps]
- Lint: [code quality checks]
- Deploy: [deployment to staging/production]

Use appropriate runners and caching for performance.
```

### Multi-Environment Deployment
```
Create a deployment pipeline with:
- Environments: [development, staging, production]
- Branch strategy: [feature → staging → production]
- Manual approvals: [production deployment gates]
- Rollback: [rollback procedures]
- Monitoring: [deployment monitoring]

Include proper environment-specific configurations.
```

## Docker Configuration

### Application Containerization
```
Create Docker configuration for [application] with:
- Base image: [appropriate base image]
- Dependencies: [package installation]
- Build process: [multi-stage build]
- Environment: [environment variables]
- Health checks: [container health monitoring]

Optimize for security and minimal image size.
```

### Docker Compose Setup
```
Create Docker Compose for [application stack] with:
- Services: [app, database, cache, etc.]
- Networks: [service communication]
- Volumes: [data persistence]
- Environment: [shared environment]
- Dependencies: [service startup order]

Include development and production configurations.
```

## Infrastructure as Code

### Terraform Configuration
```
Create Terraform configuration for [infrastructure] with:
- Resources: [compute, storage, networking]
- Variables: [configurable parameters]
- Outputs: [resource information]
- State management: [remote state]
- Security: [IAM and security groups]

Use modules for reusability and maintainability.
```

### Kubernetes Deployment
```
Create Kubernetes manifests for [application] with:
- Deployments: [application deployment]
- Services: [network exposure]
- Ingress: [external access]
- ConfigMaps: [configuration]
- Secrets: [sensitive data]

Include proper resource limits and health checks.
```

## Monitoring and Logging

### Application Monitoring
```
Set up monitoring for [application] with:
- Metrics: [application metrics]
- Alerts: [alerting rules]
- Dashboards: [monitoring dashboards]
- Logging: [structured logging]
- Tracing: [distributed tracing]

Use Prometheus, Grafana, and appropriate exporters.
```

### Error Tracking
```
Configure error tracking for [application] with:
- Error capture: [error reporting]
- Alerting: [error notifications]
- Grouping: [error aggregation]
- Context: [error context]
- Resolution: [error tracking]

Use Sentry or similar error tracking service.
```

## Security Configuration

### Security Scanning
```
Set up security scanning in CI/CD with:
- Dependency scanning: [vulnerability checks]
- Container scanning: [image security]
- Code scanning: [SAST analysis]
- Secrets scanning: [credential detection]
- Compliance: [security compliance]

Integrate with security tools and fail builds on critical issues.
```

### Access Control
```
Configure access control for [deployment] with:
- Authentication: [user authentication]
- Authorization: [role-based access]
- Secrets management: [credential storage]
- Audit logging: [access logging]
- Rotation: [credential rotation]

Use appropriate IAM and secret management services.
```

## Performance Optimization

### Build Optimization
```
Optimize build process for [project] with:
- Caching: [dependency caching]
- Parallelization: [parallel builds]
- Artifacts: [build artifacts]
- Compression: [asset compression]
- CDN: [content delivery]

Minimize build times and optimize deployment speed.
```

### Deployment Strategy
```
Implement deployment strategy for [application] with:
- Blue-green: [zero-downtime deployment]
- Rolling updates: [gradual deployment]
- Canary: [traffic splitting]
- Rollback: [quick rollback]
- Monitoring: [deployment monitoring]

Ensure zero-downtime deployments and quick rollbacks.
``` 