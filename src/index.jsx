import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles/index.scss';

const element = document.querySelector('#root');
createRoot(element).render(<App />);
