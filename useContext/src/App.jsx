
import React from 'react';
import Approuter from './files/Approuter';
import { DarkModeProvider } from './files/DarkModeContext';

export default function App() {
  return (
    <DarkModeProvider>
      <Approuter />
    </DarkModeProvider>
  );
}
