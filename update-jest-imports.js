import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const testsDir = path.join(__dirname, 'src', 'tests');

// Função para ler arquivos recursivamente
function readFilesRecursively(dir) {
  const results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results.push(...readFilesRecursively(filePath));
    } else if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
      results.push(filePath);
    }
  });
  return results;
}

// Encontrar todos os arquivos de teste
const testFiles = readFilesRecursively(testsDir);

// Processar cada arquivo
testFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Verifica se o arquivo já importa de @tests/jest-helpers
  if (content.includes('@tests/jest-helpers')) {
    return;
  }
  
  // Verifica se o arquivo usa jest
  if (content.includes('jest.') || content.includes('jest,') || content.includes(' jest ')) {
    // Adiciona a importação no início do arquivo, após as importações existentes
    let lines = content.split('\n');
    let lastImportIndex = -1;
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('import ')) {
        lastImportIndex = i;
      }
    }
    
    if (lastImportIndex >= 0) {
      lines.splice(lastImportIndex + 1, 0, 'import { jest } from \'@tests/jest-helpers\';');
      content = lines.join('\n');
      
      // Salva o arquivo
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});

console.log('Done updating jest imports!'); 