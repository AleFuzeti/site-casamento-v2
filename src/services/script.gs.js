const SHEET_NAME = "pag1";

function getSheet() {
  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
}

// ✅ 1. Lista códigos + TODOS os nomes + confirmados
function listarCodigosENomes() {
  const sheet = getSheet();
  const dados = sheet.getDataRange().getValues();

  const resultado = [];

  for (let i = 1; i < dados.length; i++) {
    const linha = dados[i];
    const codigo = linha[0];
    const nomes = linha.slice(1, 8).filter(n => n); // Colunas 1-7

    if (!codigo) continue; // Pula linhas sem código

    let confirmados = [];
    const raw = linha[8];

    if (raw) {
      confirmados = raw
        .toString()
        .replace(/{/g, "")
        .replace(/}/g, "")
        .split(",")
        .filter(n => n.trim() !== "")
        .map(n => parseInt(n.trim()));
    }

    resultado.push({
      codigo: codigo,
      nomes: nomes,
      confirmados: confirmados
    });
  }

  return resultado;
}

// ✅ 2. Buscar por código (case-insensitive)
function buscarPorCodigo(codigoBusca) {
  const sheet = getSheet();
  const dados = sheet.getDataRange().getValues();
  const codigoUpper = codigoBusca.toString().toUpperCase();

  for (let i = 1; i < dados.length; i++) {
    const linha = dados[i];
    const codigo = linha[0]?.toString().toUpperCase() || "";

    if (codigo === codigoUpper) {
      const nomes = linha.slice(1, 8).filter(n => n);

      let confirmados = [];
      const raw = linha[8];

      if (raw) {
        confirmados = raw
          .toString()
          .replace(/{/g, "")
          .replace(/}/g, "")
          .split(",")
          .filter(n => n.trim() !== "")
          .map(n => parseInt(n.trim()));
      }

      return { codigo: linha[0], nomes: nomes, confirmados: confirmados };
    }
  }

  return null;
}

// ✅ 3. Confirmar presença
function confirmarPresenca(codigoBusca, indicesConfirmados) {
  const sheet = getSheet();
  const dados = sheet.getDataRange().getValues();
  const codigoUpper = codigoBusca.toString().toUpperCase();

  for (let i = 1; i < dados.length; i++) {
    const linha = dados[i];
    const codigo = linha[0]?.toString().toUpperCase() || "";

    if (codigo === codigoUpper) {
      const nomes = linha.slice(1, 8).filter(n => n);
      // Valida índices
      const indicesValidos = indicesConfirmados.filter(idx => idx >= 0 && idx < nomes.length);

      const valor = `{${indicesValidos.join(",")}}`;

      sheet.getRange(i + 1, 9).setValue(valor);

      return {
        sucesso: true,
        codigo: linha[0],
        confirmados: indicesValidos
      };
    }
  }

  return { sucesso: false, mensagem: "Código não encontrado" };
}

//
// 🌐 API
//

function doGet(e) {
  const action = e.parameter.action;

  try {
    if (action === "listar") {
      return jsonResponse(listarCodigosENomes());
    }

    if (action === "buscar") {
      const codigo = e.parameter.codigo;
      
      // Código especial M0M0 retorna relatório completo
      if (codigo.toUpperCase() === "M0M0") {
        const todos = listarCodigosENomes();
        const relatorio = todos.map(item => ({
          codigo: item.codigo,
          nome: item.nomes[0] || '',
          total: item.nomes.length,
          confirmados: item.confirmados.length,
          nomes: item.nomes,
          indicesConfirmados: item.confirmados
        }));
        return jsonResponse(relatorio);
      }
      
      // Código especial SIMPLES retorna lista simples
      if (codigo.toUpperCase() === "SIMPLES") {
        const todos = listarCodigosENomes();
        const simples = todos.map(item => ({
          codigo: item.codigo,
          nome: item.nomes[0] || '',
          confirmados: item.confirmados.length + '/' + item.nomes.length
        }));
        return jsonResponse(simples);
      }
      
      const resultado = buscarPorCodigo(codigo);
      return jsonResponse(resultado || { erro: "Código não encontrado" });
    }

    return jsonResponse({ erro: "Ação inválida" });
  } catch (err) {
    return jsonResponse({
      erro: true,
      mensagem: err.message
    });
  }
}

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    const action = body.action;

    if (action === "confirmar") {
      const codigo = body.codigo;
      const indices = body.indices || [];

      const resultado = confirmarPresenca(codigo, indices);
      return jsonResponse(resultado);
    }

    return jsonResponse({ erro: "Ação inválida" });
  } catch (err) {
    return jsonResponse({
      erro: true,
      mensagem: err.message
    });
  }
}

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}