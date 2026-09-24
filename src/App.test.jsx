import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { initializeFirebase } from './lib/firebase';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeDefined();
});

test('initializes Firebase services from a complete configuration', () => {
  const services = initializeFirebase({
    apiKey: 'test-api-key',
    authDomain: 'test.firebaseapp.com',
    projectId: 'test-project',
    storageBucket: 'test-project.firebasestorage.app',
    messagingSenderId: 'test-sender-id',
    appId: 'test-app-id',
  });

  expect(services.app.name).toBe('[DEFAULT]');
  expect(services.auth).toBeDefined();
  expect(services.db).toBeDefined();
});
