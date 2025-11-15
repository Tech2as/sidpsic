# Troubleshooting - Site em Branco

Se o site está aparecendo em branco, siga estes passos:

## 1. Verificar se as dependências estão instaladas

```bash
npm install
```

## 2. Verificar se o servidor está rodando

```bash
npm run dev
```

O servidor deve iniciar em `http://localhost:5173`

## 3. Verificar o console do navegador

Abra o DevTools (F12) e verifique:
- Aba Console: Procure por erros em vermelho
- Aba Network: Verifique se os arquivos CSS e JS estão sendo carregados

## 4. Verificar se o Tailwind está funcionando

O Tailwind pode não estar processando corretamente. Verifique:
- O arquivo `postcss.config.js` existe
- O arquivo `tailwind.config.js` existe
- O arquivo `src/index.css` contém `@tailwind` directives

## 5. Limpar cache e reinstalar

```bash
rm -rf node_modules
rm package-lock.json
npm install
npm run dev
```

## 6. Verificar erros de TypeScript

```bash
npm run build
```

Isso mostrará erros de TypeScript se houver.

## Problemas Comuns

### Tailwind não está funcionando
- Verifique se `postcss.config.js` está configurado corretamente
- Verifique se `tailwind.config.js` tem os paths corretos
- Tente adicionar `!important` nas classes ou usar estilos inline temporariamente

### Erros de importação
- Verifique se todos os componentes estão exportando corretamente
- Verifique se os caminhos de importação estão corretos

### Erros de React
- Verifique se o React está instalado: `npm list react`
- Verifique se há erros no console do navegador

