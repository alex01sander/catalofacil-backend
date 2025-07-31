import '@types/jest';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeValidDate(): R;
      toBeValidCPF(): R;
      toBeValidBrazilianPhone(): R;
    }
  }
}

export {}; 