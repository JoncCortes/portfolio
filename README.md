# Portfólio Profissional (Landing Page)

Projeto estático de portfólio profissional desenvolvido com **HTML, CSS e JavaScript puro**, sem frameworks, sem bibliotecas externas e sem CDN.

## Estrutura do projeto

```text
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   └── img/
│       └── profile.svg
├── README.md
└── LICENSE
```

## Como editar conteúdo principal

### 1) Nome e informações de cabeçalho/hero
- Arquivo: `index.html`
- Edite:
  - Logo textual no header (`Jonas`)
  - Título principal no hero (`<h1>Jonas</h1>`)
  - Subtítulo profissional

### 2) Bio (seção Sobre)
- Arquivo: `index.html`
- Local: seção com `id="sobre"`
- Atualize o parágrafo profissional e as badges de habilidades.

### 3) Foto de perfil
- Substitua o arquivo:
  - `assets/img/profile.svg`
- Mantenha o mesmo nome para não alterar o HTML.
- Se preferir outro nome, atualize o `src` da imagem em `index.html`.

### 4) Experiência & Formação
- Arquivo: `js/main.js`
- Local: array `experiences`
- Cada item segue o formato:

```js
{
  title,
  institution,
  period,
  description
}
```

### 5) Projetos
- Arquivo: `js/main.js`
- Local: array `projects`
- Cada item segue o formato:

```js
{
  title,
  description,
  tech: [],
  repoUrl,
  demoUrl
}
```

## Recursos implementados

- Layout responsivo (mobile-first)
- Header sticky com navegação interna
- Tema claro/escuro automático por `prefers-color-scheme`
- Alternância manual de tema com persistência em `localStorage`
- Renderização dinâmica de experiência e projetos via JavaScript
- Scroll suave entre seções
- Animações discretas com `IntersectionObserver`
- Suporte a `prefers-reduced-motion`
- SEO básico (meta tags e Open Graph)
- Acessibilidade com landmarks semânticas e foco visível

## Executar localmente

Como é um projeto estático, basta abrir o arquivo `index.html` no navegador.

> Opcional: usar uma extensão de servidor local no editor para melhorar a experiência de desenvolvimento.

## Publicação no GitHub Pages

1. Suba este projeto para um repositório no GitHub.
2. Vá em **Settings > Pages**.
3. Em **Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: `main` (ou `master`) e pasta `/root`
4. Salve e aguarde o link público ser gerado.

## Checklist antes de publicar

- [ ] Atualizar nome profissional e subtítulo.
- [ ] Substituir foto de perfil placeholder.
- [ ] Revisar experiências e períodos.
- [ ] Revisar links de projetos (repositório e demo).
- [ ] Revisar links de contato (GitHub, LinkedIn, e-mail).
- [ ] Validar visual em mobile, tablet e desktop.
- [ ] Verificar acessibilidade de foco/teclado.
- [ ] Confirmar funcionamento do toggle de tema.

## Licença

Este projeto usa a licença **MIT**.

Isso significa, de forma resumida, que você pode usar, copiar, modificar e distribuir o código livremente, inclusive para uso comercial, desde que mantenha o aviso de copyright e a licença no projeto.
