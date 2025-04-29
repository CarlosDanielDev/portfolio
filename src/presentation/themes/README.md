# Sistema de Temas

Este sistema de temas foi desenvolvido seguindo os princípios de Clean Architecture, Domain-Driven Design e Object Calisthenics para fornecer uma solução flexível e extensível para gerenciar temas na aplicação.

## Estrutura de Arquivos

```text
src/presentation/themes/
├── Theme.ts                # Classe base para temas
├── ThemeTokens.ts          # Tipos e classes de valor para tokens de design
├── ThemeManager.ts         # Gerenciador central de temas (Singleton)
├── themes/                 # Implementações de temas específicos
│   ├── LightTheme.ts       # Tema claro
│   ├── DarkTheme.ts        # Tema escuro
│   └── CyberpunkTheme.ts   # Tema cyberpunk
└── README.md               # Esta documentação
```

## Temas Disponíveis

1. **Light** - Tema claro padrão com interface limpa e moderna
2. **Dark** - Tema escuro para reduzir fadiga visual em ambientes com pouca luz
3. **Cyberpunk** - Tema futurista com cores neon vibrantes, inspirado na estética cyberpunk

### Tema Cyberpunk

O tema Cyberpunk apresenta:

- Cores neon vibrantes (rosa, ciano, amarelo)
- Contrastes fortes e brilhantes
- Tipografia futurista (fonte Orbitron)
- Efeitos de brilho e sombras para elementos de destaque
- Bordas angulares e elementos visuais distintos

## Princípios de Arquitetura

### Object Calisthenics

O sistema segue as regras do Object Calisthenics:

1. **Single Indentation Per Method**: Métodos pequenos e focados com apenas um nível de indentação
2. **No else Keyword**: Uso de early returns e polimorfismo em vez de else
3. **Wrap Primitives & Strings**: Classes de valor como `Color` e `Size` para primitivas
4. **First-Class Collections**: Classes dedicadas para coleções
5. **One Dot Per Line**: Evitando cadeias de chamadas
6. **Don't Abbreviate**: Nomes claros e significativos
7. **Keep Entities Small**: Classes com responsabilidades únicas e focadas
8. **Max Two Instance Variables**: Classes coesas e com baixo acoplamento
9. **No Getters/Setters/Properties**: API comportamental em vez de exposição direta de dados

### Clean Architecture

- **Single Responsibility Principle (SRP)**: Cada classe tem uma única responsabilidade
- **Open/Closed Principle (OCP)**: Sistema extensível para novos temas sem modificar código existente
- **Liskov Substitution Principle (LSP)**: Temas são intercambiáveis
- **Interface Segregation Principle (ISP)**: Interfaces e tipos específicos para necessidades específicas
- **Dependency Inversion Principle (DIP)**: Dependência de abstrações, não implementações

## Uso do Sistema de Temas

### No React

```tsx
// Em componentes React
import { useThemeContext } from '@presentation/contexts/ThemeContext';

function MyComponent() {
  const { themeName, setTheme, toggleTheme, availableThemes } = useThemeContext();
  
  return (
    <div>
      <p>Tema atual: {themeName}</p>
      <button onClick={toggleTheme}>Alternar tema</button>
      
      {/* Para escolher um tema específico */}
      <select 
        value={themeName} 
        onChange={(e) => setTheme(e.target.value)}
      >
        {availableThemes.map(theme => (
          <option key={theme.getName()} value={theme.getName()}>
            {theme.getName()}
          </option>
        ))}
      </select>
    </div>
  );
}
```

### CSS

O sistema gera variáveis CSS para uso em seus estilos:

```css
.my-component {
  background-color: var(--colors-background);
  color: var(--colors-text-primary);
  padding: var(--spacing-medium);
}

/* Estilização específica para um tema */
[data-theme="cyberpunk"] .my-component {
  border: 1px solid var(--colors-primary);
  box-shadow: 0 0 10px var(--colors-primary);
}
```

## Criando um Novo Tema

Para adicionar um novo tema:

1. Crie um novo arquivo em `src/presentation/themes/themes/`
2. Implemente uma função de criação seguindo o padrão dos temas existentes
3. Registre o tema no inicializador do ThemeManager

```typescript
// src/presentation/themes/themes/CustomTheme.ts
import { Theme } from '../Theme';
import { Color, Size, FontFamily, ThemeTokens } from '../ThemeTokens';

export function createCustomTheme(): Theme {
  const tokens: ThemeTokens = {
    // Defina seus tokens aqui
  };
  
  return new Theme('custom', tokens);
}

// Em ThemeManager.ts, adicione:
this.registerTheme(createCustomTheme());
```
