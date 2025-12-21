// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Configuração do Firebase
// IMPORTANTE: Estes dados são públicos e seguros para usar no frontend
// As regras de segurança do Firebase protegem os dados
const firebaseConfig = {
  apiKey: "AIzaSyC5YP6uo5TjsgKBf5aATb6X6oQR4P0i-oE",
  authDomain: "casamento-react.firebaseapp.com",
  databaseURL: "https://casamento-react-default-rtdb.firebaseio.com",
  projectId: "casamento-react",
  storageBucket: "casamento-react.firebasestorage.app",
  messagingSenderId: "1085854234489",
  appId: "1:1085854234489:web:2d10ff0663ee90901ea1a8"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obter referência do banco de dados
export const database = getDatabase(app);
export default app;
