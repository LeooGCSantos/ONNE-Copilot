// Script para baixar ícones listados abaixo para client/public/icons
// Uso: node client/scripts/fetch-icons.js
// Opcional: defina o array `iconUrls` abaixo com objetos { name, url } apontando para PNGs.

const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'icons');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Lista de nomes requeridos (sem URLs). Forneça URLs abaixo para que o script baixe os arquivos.
const names = [
  'default',
  'office',
  'anydesk',
  'acrobat',
  'adobe',
  'acronis',
  'forticlient',
  'sentinelone',
  'ccleaner',
  'firefox',
  'chrome',
  'crystaldisk',
  'adwcleaner',
  'revo',
  'ventoy',
  'treesize',
  'speecy',
  'advancedipscanner',
  'ultraiso',
];

// Se desejar, preencha este array com objetos { name: 'anydesk', url: 'https://...' }
// Para baixar automaticamente, insira URLs públicas para cada nome.
const iconUrls = [
  // { name: 'anydesk', url: 'https://example.com/anydesk.png' },
];

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  const arrayBuffer = await res.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync(dest, buffer);
}

(async () => {
  if (iconUrls.length === 0) {
    console.log('Nenhum URL fornecido. O script apenas criará arquivos README na pasta de ícones.');
    console.log('Edite o array `iconUrls` em client/scripts/fetch-icons.js com URLs válidos e rode o script novamente.');
    return;
  }

  for (const item of iconUrls) {
    try {
      const name = item.name;
      const url = item.url;
      const dest = path.join(outDir, `${name}.png`);
      console.log('Baixando', name, url);
      await download(url, dest);
      console.log('Salvo em', dest);
    } catch (err) {
      console.error('Erro ao baixar', item, err.message);
    }
  }
})();
