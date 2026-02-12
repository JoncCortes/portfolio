// Dados de experiência/formação (edite conforme necessário).
const experiences = [
  {
    title: 'Engenharia de Software',
    institution: 'Universidade Placeholder',
    period: '2020 — 2024',
    description:
      'Formação com base em arquitetura de software, estruturas de dados, engenharia de requisitos e boas práticas de desenvolvimento.'
  },
  {
    title: 'Projeto SaaS de Gestão Operacional',
    institution: 'Projeto Independente',
    period: '2024 — Atual',
    description:
      'Desenvolvimento completo de um SaaS com autenticação, controle de usuários e painel administrativo com foco em performance e usabilidade.'
  },
  {
    title: 'Desenvolvimento de Bot com IA',
    institution: 'Lab de Automação',
    period: '2023 — 2024',
    description:
      'Implementação de bot para atendimento automatizado com fluxos orientados por IA, foco em robustez e monitoramento.'
  },
  {
    title: 'Integrações e Consumo de APIs',
    institution: 'Experiência Prática',
    period: '2022 — Atual',
    description:
      'Integração com APIs REST para pagamentos, autenticação e serviços de terceiros, incluindo tratamento de erros e padronização de contratos.'
  }
];

// Dados de projetos (edite URLs, descrições e tecnologias).
const projects = [
  {
    title: 'Dashboard Executivo',
    description: 'Painel de indicadores com foco em clareza de dados, filtros e visualização objetiva para tomada de decisão.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/',
    demoUrl: 'https://example.com/'
  },
  {
    title: 'Plataforma SaaS Financeira',
    description: 'Sistema de gestão financeira com módulos de lançamentos, relatórios e autenticação de usuários.',
    tech: ['JavaScript', 'APIs REST', 'Arquitetura Modular'],
    repoUrl: 'https://github.com/',
    demoUrl: 'https://example.com/'
  },
  {
    title: 'Bot Inteligente para Suporte',
    description: 'Bot com respostas automáticas para atendimento inicial e encaminhamento contextual de solicitações.',
    tech: ['JavaScript', 'Integração IA', 'Webhooks'],
    repoUrl: 'https://github.com/',
    demoUrl: 'https://example.com/'
  },
  {
    title: 'Portal Institucional',
    description: 'Landing page institucional com foco em branding, performance e acessibilidade.',
    tech: ['HTML Semântico', 'CSS Responsivo', 'SEO'],
    repoUrl: 'https://github.com/',
    demoUrl: 'https://example.com/'
  },
  {
    title: 'Gerenciador de Tarefas',
    description: 'Aplicação para organização de tarefas com persistência local e priorização por status.',
    tech: ['JavaScript', 'LocalStorage', 'UX'],
    repoUrl: 'https://github.com/',
    demoUrl: 'https://example.com/'
  },
  {
    title: 'Integração com APIs Externas',
    description: 'Projeto de consumo de múltiplas APIs com padronização de respostas e monitoramento de falhas.',
    tech: ['REST', 'Tratamento de Erros', 'Boas Práticas'],
    repoUrl: 'https://github.com/',
    demoUrl: 'https://example.com/'
  }
];

const experienceList = document.getElementById('experience-list');
const projectsGrid = document.getElementById('projects-grid');
const themeToggle = document.getElementById('theme-toggle');
const currentYear = document.getElementById('current-year');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function renderExperiences() {
  if (!experienceList) return;

  experienceList.innerHTML = experiences
    .map(
      (item) => `
      <article class="timeline-item">
        <h3>${item.title}</h3>
        <p class="meta">${item.institution} • ${item.period}</p>
        <p>${item.description}</p>
      </article>
    `
    )
    .join('');
}

function renderProjects() {
  if (!projectsGrid) return;

  projectsGrid.innerHTML = projects
    .map(
      (project) => `
      <article class="project-card">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <ul class="project-tech" aria-label="Tecnologias usadas em ${project.title}">
          ${project.tech.map((item) => `<li class="badge">${item}</li>`).join('')}
        </ul>
        <div class="project-actions">
          <a class="btn btn--secondary" href="${project.repoUrl}" target="_blank" rel="noopener noreferrer">Repositório</a>
          <a class="btn btn--primary" href="${project.demoUrl}" target="_blank" rel="noopener noreferrer">Demo</a>
        </div>
      </article>
    `
    )
    .join('');
}

function setupTheme() {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light' || savedTheme === 'dark') {
    root.setAttribute('data-theme', savedTheme);
  } else {
    root.setAttribute('data-theme', 'auto');
  }

  updateThemeButton();

  themeToggle?.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    root.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    updateThemeButton();
  });
}

function updateThemeButton() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const isDark = currentTheme === 'dark';

  themeToggle?.setAttribute('aria-pressed', String(isDark));
  themeToggle?.setAttribute('aria-label', isDark ? 'Ativar tema claro' : 'Ativar tema escuro');
}

function setupScrollAnimation() {
  const elements = document.querySelectorAll('.reveal');

  if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observerInstance.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((element) => observer.observe(element));
}

function setupSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetSelector = link.getAttribute('href');
      if (!targetSelector || targetSelector === '#') return;

      const target = document.querySelector(targetSelector);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion.matches ? 'auto' : 'smooth',
        block: 'start'
      });
    });
  });
}

function updateFooterYear() {
  if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderExperiences();
  renderProjects();
  setupTheme();
  setupScrollAnimation();
  setupSmoothScroll();
  updateFooterYear();
});
