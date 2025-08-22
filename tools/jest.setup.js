// Mock console methods to avoid noise in tests
global.console = {
  ...console,
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
  info: jest.fn(),
};

// Mock inquirer for CLI testing
jest.mock('inquirer', () => ({
  prompt: jest.fn(),
}));

// Mock fs operations for testing
jest.mock('fs', () => ({
  ...jest.requireActual('fs'),
  existsSync: jest.fn(),
  readFileSync: jest.fn(),
  writeFileSync: jest.fn(),
  mkdirSync: jest.fn(),
  readdirSync: jest.fn(),
  copyFileSync: jest.fn(),
}));

// Mock axios for API testing
jest.mock('axios', () => ({
  post: jest.fn(),
  get: jest.fn(),
}));

// Mock chalk for colored output
jest.mock('chalk', () => ({
  blue: jest.fn((text) => text),
  green: jest.fn((text) => text),
  red: jest.fn((text) => text),
  yellow: jest.fn((text) => text),
  gray: jest.fn((text) => text),
  cyan: jest.fn((text) => text),
  white: jest.fn((text) => text),
}));

// Setup test environment
beforeEach(() => {
  jest.clearAllMocks();
});
