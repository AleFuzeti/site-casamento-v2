// src/services/convidadosService.js
// Serviço para comunicação com a API backend

const API_URL = import.meta.env.VITE_API_URL || 'https://server-casamento.onrender.com/api';

export const convidadosService = {
  // Listar todos os convidados (formato com success)
  async listarConvidados() {
    try {
      const response = await fetch(`${API_URL}/convidados`);
      if (!response.ok) {
        throw new Error('Erro ao buscar convidados');
      }
      const data = await response.json();
      console.log('📊 Convidados carregados da API:', data.length);
      return {
        success: true,
        convidados: data
      };
    } catch (error) {
      console.error('❌ Erro ao buscar convidados:', error);
      return {
        success: false,
        convidados: []
      };
    }
  },

  // Buscar todos os convidados
  async buscarConvidados() {
    try {
      const response = await fetch(`${API_URL}/convidados`);
      if (!response.ok) {
        throw new Error('Erro ao buscar convidados');
      }
      const data = await response.json();
      console.log('📊 Convidados carregados da API:', data.length);
      return data;
    } catch (error) {
      console.error('❌ Erro ao buscar convidados:', error);
      throw error;
    }
  },

  // Buscar convidado por código
  async buscarPorCodigo(codigo) {
    try {
      const response = await fetch(`${API_URL}/convidados/${codigo}`);
      if (response.status === 404) {
        return null;
      }
      if (!response.ok) {
        throw new Error('Erro ao buscar convidado');
      }
      const data = await response.json();
      console.log('✅ Convidado encontrado:', data);
      return data;
    } catch (error) {
      console.error('❌ Erro ao buscar convidado:', error);
      return null;
    }
  },

  // Confirmar presença
  async confirmarPresenca(codigo, nomesConfirmados) {
    try {
      const response = await fetch(`${API_URL}/confirmar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          codigo,
          nomesConfirmados
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        return {
          success: false,
          message: data.message || 'Erro ao confirmar presença'
        };
      }

      console.log('💾 Presença confirmada via API');
      return {
        success: true,
        message: data.message || 'Presença confirmada com sucesso!'
      };
    } catch (error) {
      console.error('❌ Erro ao confirmar presença:', error);
      return {
        success: false,
        message: 'Erro ao conectar com o servidor. Tente novamente.'
      };
    }
  }
};
