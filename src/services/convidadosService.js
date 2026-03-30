// src/services/convidadosService.js
// Serviço para comunicação com Google Sheets via proxy do servidor

import { getApiUrl } from '../config/api.js';

const getGoogleSheetAPI = () => `${getApiUrl()}/api/sheets-proxy`;

export const convidadosService = {
  // Listar todos os convidados com transformação de índices para nomes
  async listarConvidados() {
    try {
      const GOOGLE_SHEET_API = getGoogleSheetAPI();
      const response = await fetch(`${GOOGLE_SHEET_API}?action=listar`);
      // console.log('� Resposta do proxy - Status:', response.status, response.ok);
      
      if (!response.ok) {
        throw new Error('Erro ao buscar convidados');
      }
      const data = await response.json();
      // console.log('📡 Dados brutos do Google Sheets:', data);
      
      if (!Array.isArray(data)) {
        console.error('❌ Resposta não é um array:', data);
        return {
          success: false,
          convidados: []
        };
      }
      
      // console.log('✅ Total de linhas recebidas:', data.length);
      
      // Transformar índices para nomes confirmados
      const convidados = data.map((item, idx) => {
        console.log(`Transformando item ${idx}:`, item);
        
        const nominasConfirmadas = (item.confirmados || [])
          .map(indice => item.nomes && item.nomes[indice])
          .filter(nome => nome);
        
        return {
          codigo: item.codigo,
          nome: (item.nomes && item.nomes[0]) || '',
          nomes: item.nomes || [],
          confirmados: nominasConfirmadas
        };
      });
      
      // console.log('📊 Convidados transformados:', convidados.length);
      // console.log('📊 Convidados:', convidados);
      
      return {
        success: true,
        convidados: convidados
      };
    } catch (error) {
      console.error('❌ Erro ao buscar convidados:', error);
      return {
        success: false,
        convidados: []
      };
    }
  },

  // Buscar todos os convidados (sem transformação)
  async buscarConvidados() {
    try {
      const GOOGLE_SHEET_API = getGoogleSheetAPI();
      const response = await fetch(`${GOOGLE_SHEET_API}?action=listar`);
      if (!response.ok) {
        throw new Error('Erro ao buscar convidados');
      }
      const data = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error('Resposta inválida do servidor');
      }
      
      // Transformar índices para nomes confirmados
      const convidados = data.map(item => {
        const nominasConfirmadas = (item.confirmados || [])
          .map(indice => item.nomes && item.nomes[indice])
          .filter(nome => nome);
        
        return {
          codigo: item.codigo,
          nome: (item.nomes && item.nomes[0]) || '',
          nomes: item.nomes || [],
          confirmados: nominasConfirmadas
        };
      });
      
      // console.log('📊 Convidados carregados do Google Sheets:', convidados.length);
      return convidados;
    } catch (error) {
      console.error('❌ Erro ao buscar convidados:', error);
      throw error;
    }
  },

  // Buscar convidado por código
  async buscarPorCodigo(codigo) {
    try {
      const GOOGLE_SHEET_API = getGoogleSheetAPI();
      const response = await fetch(`${GOOGLE_SHEET_API}?action=buscar&codigo=${encodeURIComponent(codigo)}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar convidado');
      }
      const data = await response.json();
      
      // Se for um array (relatório M0M0 ou SIMPLES)
      if (Array.isArray(data)) {
        // console.log('📊 Relatório recebido:', data.length, 'registros');
        return data;
      }
      
      if (!data || !data.codigo) {
        // console.log('⚠️ Código não encontrado:', codigo);
        return null;
      }
      
      // Transformar índices para nomes
      const nominasConfirmadas = (data.confirmados || [])
        .map(indice => data.nomes && data.nomes[indice])
        .filter(nome => nome);
      
      const convidado = {
        codigo: data.codigo,
        nome: (data.nomes && data.nomes[0]) || '',
        nomes: data.nomes || [],
        confirmados: nominasConfirmadas
      };
      
      // console.log('✅ Convidado encontrado:', convidado);
      return convidado;
    } catch (error) {
      console.error('❌ Erro ao buscar convidado:', error);
      return null;
    }
  },

  // Confirmar presença
  async confirmarPresenca(codigo, nomesConfirmados) {
    try {
      const GOOGLE_SHEET_API = getGoogleSheetAPI();
      // Buscar primeiro para obter os índices dos nomes
      const response = await fetch(`${GOOGLE_SHEET_API}?action=buscar&codigo=${encodeURIComponent(codigo)}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar convidado');
      }
      const dadosCompletos = await response.json();
      
      if (!dadosCompletos || !dadosCompletos.codigo) {
        return {
          success: false,
          message: 'Código não encontrado'
        };
      }
      
      // Converter nomes para índices
      const indicesConfirmados = (nomesConfirmados || [])
        .map(nome => (dadosCompletos.nomes || []).indexOf(nome))
        .filter(idx => idx !== -1);
      
      // Enviar confirmação
      const confirmResponse = await fetch(GOOGLE_SHEET_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'confirmar',
          codigo: codigo,
          indices: indicesConfirmados
        })
      });

      const resultado = await confirmResponse.json();
      
      if (!confirmResponse.ok || resultado.sucesso === false) {
        return {
          success: false,
          message: resultado.mensagem || 'Erro ao confirmar presença'
        };
      }

      console.log('💾 Presença confirmada no Google Sheets');
      return {
        success: true,
        message: 'Presença confirmada com sucesso!'
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
