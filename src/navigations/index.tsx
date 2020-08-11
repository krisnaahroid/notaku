import React from 'react';
import { AuthProvider } from './provider';
import Navigation from './navigation'

export default function Providers() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}