// ===== CONFIGURAÇÃO DE ENVIRONMENTS =====
// LOCAL (desenvolvimento): http://localhost:4000
// RENDER (produção): https://bot-discord-b7si.onrender.com

// Detectar ambiente automaticamente
const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

export const API_CONFIG = {
  // URL do servidor
  BASE_URL: isDevelopment 
    ? 'http://localhost:4000'
    : 'https://bot-discord-b7si.onrender.com',
    
  // Se usar GitHub Pages, deixe comentado acima e descomente:
  // BASE_URL: 'https://casamento-server.onrender.com',
};

export const getApiUrl = () => API_CONFIG.BASE_URL;
