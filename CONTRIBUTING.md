# Guia de Contribuição

## Convenções de Commit

Este projeto segue o padrão [Conventional Commits](https://www.conventionalcommits.org/).

### Formato do Commit

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Tipos de Commit

- **feat**: Nova funcionalidade
- **fix**: Correção de bug
- **docs**: Documentação
- **style**: Formatação, ponto e vírgula, etc.
- **refactor**: Refatoração de código
- **test**: Adicionando testes
- **chore**: Tarefas de manutenção
- **perf**: Melhorias de performance
- **ci**: Mudanças em CI/CD
- **build**: Mudanças no build
- **revert**: Reverter commit anterior

### Exemplos

```bash
# Nova funcionalidade
feat: adiciona autenticação JWT

# Correção de bug
fix: corrige validação de email

# Documentação
docs: atualiza README com instruções de instalação

# Refatoração
refactor: reorganiza estrutura de pastas

# Testes
test: adiciona testes para UserService

# Manutenção
chore: atualiza dependências
```

### Como Fazer Commits

1. **Usando commitizen (recomendado):**
   ```bash
   npm run commit
   ```

2. **Commit manual:**
   ```bash
   git commit -m "feat: adiciona nova funcionalidade"
   ```

### Regras

- Use letras minúsculas
- Não use ponto final na descrição
- Máximo 72 caracteres na primeira linha
- Use imperativo ("adiciona" não "adicionado")
- Seja específico e claro

### Escopo (Opcional)

Você pode adicionar um escopo para especificar a área do código:

```bash
feat(auth): adiciona login com Google
fix(user): corrige validação de senha
docs(api): atualiza documentação dos endpoints
```
