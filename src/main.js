import './style.css';
import { initMockApi } from './mockApi.js';

// Initialize mock API for rankings, settings, and player profile persistence
initMockApi();

// Ensure the Elon Musk coin avatar style is immediately set
document.documentElement.style.setProperty('--musk', 'url(/musk.jpg)');

// Import and run the game engine
import './gameEngine.js';
