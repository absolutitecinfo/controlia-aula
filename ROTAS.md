# 📋 Mapeamento de Rotas - ControlIA.io

Este documento mapeia todas as rotas, páginas e componentes da aplicação ControlIA.io para facilitar o reconhecimento e futuras implementações.

## 📑 Índice

- [Visão Geral](#visão-geral)
- [Estrutura de Rotas](#estrutura-de-rotas)
- [Rotas Públicas](#rotas-públicas)
- [Rotas de Autenticação](#rotas-de-autenticação)
- [Rotas do Dashboard](#rotas-do-dashboard)
- [Componentes de Layout](#componentes-de-layout)
- [Componentes UI Disponíveis](#componentes-ui-disponíveis)
- [Hooks e Utilitários](#hooks-e-utilitários)
- [Estrutura de Arquivos](#estrutura-de-arquivos)

---

## 🎯 Visão Geral

**Framework:** React 18.3.1 com Vite  
**Roteamento:** React Router DOM v6.30.1  
**UI Components:** shadcn/ui (Radix UI)  
**Gerenciamento de Estado:** TanStack Query v5.83.0  
**Estilização:** Tailwind CSS  

**Arquivo Principal de Rotas:** `src/App.tsx`

---

## 🗺️ Estrutura de Rotas

### Hierarquia de Rotas

```
/ (Landing)
├── /auth/login (Login)
├── /auth/register (Register)
└── /dashboard (DashboardLayout)
    ├── /dashboard (Dashboard - index)
    ├── /dashboard/colaborador (Colaborador)
    ├── /dashboard/admin (Admin)
    └── /dashboard/master (Master)
└── * (NotFound - catch-all)
```

---

## 🌐 Rotas Públicas

### `/` - Landing Page

**Arquivo:** `src/pages/Landing.tsx`  
**Tipo:** Página Pública  
**Descrição:** Página inicial de apresentação da plataforma

**Componentes Utilizados:**
- `Button` (ui/button)
- `Card`, `CardContent`, `CardDescription`, `CardFooter`, `CardHeader`, `CardTitle` (ui/card)
- `Badge` (ui/badge)
- `Link` (react-router-dom)

**Seções:**
1. **Navegação:** Logo e botões de Login/Registro
2. **Hero Section:** Título principal e CTAs
3. **Features Section:** Grid com 4 cards de recursos
4. **Benefits Section:** Grid com 4 cards de benefícios
5. **Pricing Section:** Grid com 4 planos (Free, Básico, Empresa, Master)
6. **Footer:** Informações da empresa

**Links Internos:**
- `/auth/login` - Botão Login
- `/auth/register` - Botão "Começar Agora"

---

## 🔐 Rotas de Autenticação

### `/auth/login` - Página de Login

**Arquivo:** `src/pages/auth/Login.tsx`  
**Tipo:** Página Pública (não autenticada)  
**Descrição:** Formulário de autenticação de usuários

**Componentes Utilizados:**
- `Button` (ui/button)
- `Card`, `CardContent`, `CardDescription`, `CardHeader`, `CardTitle` (ui/card)
- `Input` (ui/input)
- `Label` (ui/label)
- `Link` (react-router-dom)

**Funcionalidades:**
- Formulário com campos: Email e Senha
- Validação básica de campos obrigatórios
- Link para página de registro
- Redirecionamento para `/dashboard` após login (TODO: implementar lógica de autenticação)

**Estados:**
- `email` (string)
- `password` (string)

**Links Internos:**
- `/` - Logo/Home
- `/auth/register` - Link "Cadastre-se"

---

### `/auth/register` - Página de Registro

**Arquivo:** `src/pages/auth/Register.tsx`  
**Tipo:** Página Pública (não autenticada)  
**Descrição:** Formulário de criação de nova conta

**Componentes Utilizados:**
- `Button` (ui/button)
- `Card`, `CardContent`, `CardDescription`, `CardHeader`, `CardTitle` (ui/card)
- `Input` (ui/input)
- `Label` (ui/label)
- `Link` (react-router-dom)

**Funcionalidades:**
- Formulário com campos: Nome Completo, Empresa, Email, Senha, Confirmar Senha
- Validação básica de campos obrigatórios
- Link para página de login
- Redirecionamento para `/dashboard` após registro (TODO: implementar lógica de registro)

**Estados:**
- `formData` (objeto com: name, email, company, password, confirmPassword)

**Links Internos:**
- `/` - Logo/Home
- `/auth/login` - Link "Faça login"

---

## 🏠 Rotas do Dashboard

### `/dashboard` - Layout Principal

**Arquivo:** `src/pages/dashboard/DashboardLayout.tsx`  
**Tipo:** Layout (Route Parent)  
**Descrição:** Layout compartilhado para todas as rotas do dashboard

**Componentes Utilizados:**
- `SidebarProvider` (ui/sidebar)
- `AppSidebar` (components/layout/AppSidebar)
- `AppHeader` (components/layout/AppHeader)
- `Outlet` (react-router-dom)

**Estrutura:**
- Sidebar lateral (colapsável)
- Header superior fixo
- Área de conteúdo principal com `<Outlet />` para renderizar rotas filhas

**Rotas Filhas:**
- `/dashboard` (index)
- `/dashboard/colaborador`
- `/dashboard/admin`
- `/dashboard/master`

---

### `/dashboard` (index) - Dashboard Principal

**Arquivo:** `src/pages/Dashboard.tsx`  
**Tipo:** Página Autenticada  
**Descrição:** Visão geral da plataforma com estatísticas e atividades

**Componentes Utilizados:**
- `Card`, `CardContent`, `CardDescription`, `CardHeader`, `CardTitle` (ui/card)
- `Badge` (ui/badge)

**Conteúdo:**
1. **Cards de Estatísticas (Grid 4 colunas):**
   - Total de Usuários: 2,345 (+12.5%)
   - Conversas IA: 18,294 (+8.2%)
   - Taxa de Sucesso: 94.3% (+2.1%)
   - Uptime: 99.9% (Estável)

2. **Grid 2 Colunas:**
   - **Atividade Recente:** Lista de últimas interações
   - **Status do Sistema:** Monitoramento de serviços (API Gateway, Banco de Dados, Serviços IA, Storage)

---

### `/dashboard/colaborador` - Chat com IA

**Arquivo:** `src/pages/dashboard/Colaborador.tsx`  
**Tipo:** Página Autenticada  
**Descrição:** Interface de chat com assistente de IA

**Componentes Utilizados:**
- `Card`, `CardContent`, `CardHeader`, `CardTitle` (ui/card)
- `Button` (ui/button)
- `Textarea` (ui/textarea)
- `ScrollArea` (ui/scroll-area)

**Funcionalidades:**
- **Sidebar de Histórico:** Lista de conversas anteriores (lado esquerdo, 3 colunas)
- **Área de Chat Principal:** (9 colunas)
  - Exibição de mensagens (usuário e assistente)
  - Campo de input com botão de envio
  - Scroll automático
  - Suporte a Enter para enviar (Shift+Enter para nova linha)

**Estados:**
- `messages` (array de Message: role, content, timestamp)
- `input` (string)

**Tipos:**
```typescript
interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}
```

**Funcionalidade Atual:**
- Simulação de resposta da IA (TODO: integrar com API real)

**Menu Sidebar:** "Chat IA" (ícone MessageSquare)

---

### `/dashboard/admin` - Configurações da Empresa

**Arquivo:** `src/pages/dashboard/Admin.tsx`  
**Tipo:** Página Autenticada  
**Descrição:** Painel de configurações administrativas do tenant

**Componentes Utilizados:**
- `Card`, `CardContent`, `CardDescription`, `CardHeader`, `CardTitle` (ui/card)
- `Button` (ui/button)
- `Input` (ui/input)
- `Label` (ui/label)
- `Textarea` (ui/textarea)
- `Switch` (ui/switch)
- `Tabs`, `TabsContent`, `TabsList`, `TabsTrigger` (ui/tabs)

**Abas:**

1. **API & BYOK (Bring Your Own Key):**
   - Toggle para habilitar BYOK
   - Campo para chave API OpenAI (quando habilitado)
   - Informações de uso:
     - Requisições do mês: 12,458
     - Custo estimado: R$ 245,00

2. **Configurações IA:**
   - Campo de texto para regras e comportamento personalizado
   - Configurações avançadas:
     - Modo Criativo (Switch)
     - Contexto Longo (Switch - defaultChecked)
     - Análise de Sentimento (Switch - defaultChecked)

**Estados:**
- `apiKey` (string)
- `aiRules` (string)
- `enableByok` (boolean)

**Funcionalidade:**
- Botão "Salvar Configurações" (TODO: implementar lógica de salvamento)

**Menu Sidebar:** "Configurações" (ícone Settings)

---

### `/dashboard/master` - Dashboard Master

**Arquivo:** `src/pages/dashboard/Master.tsx`  
**Tipo:** Página Autenticada  
**Descrição:** Dashboard administrativo completo da plataforma (visão master/enterprise)

**Componentes Utilizados:**
- `Card`, `CardContent`, `CardDescription`, `CardHeader`, `CardTitle` (ui/card)
- `Badge` (ui/badge)
- `Tabs`, `TabsContent`, `TabsList`, `TabsTrigger` (ui/tabs)
- `BarChart`, `Bar`, `PieChart`, `Pie`, `Cell`, `XAxis`, `YAxis`, `CartesianGrid`, `Tooltip`, `Legend`, `ResponsiveContainer` (recharts)

**Estatísticas Principais (Grid 4 colunas):**
- Total de Empresas: 257 (+23 este mês)
- Usuários Ativos: 2,345 (+12.5%)
- Receita Mensal: R$ 48.5K (+18.2%)
- Taxa de Retenção: 94.3% (+2.1%)

**Abas:**

1. **Assinaturas:**
   - **Gráfico de Pizza:** Distribuição de planos (Básico: 145, Empresa: 89, Master: 23)
   - **Resumo Financeiro:** Receita por plano
     - Plano Básico: R$ 14.355 (30%)
     - Plano Empresa: R$ 26.611 (55%)
     - Plano Master: R$ 7.534 (15%)
     - **Total MRR:** R$ 48.500

2. **Crescimento:**
   - **Gráfico de Barras:** Evolução de empresas e usuários (últimos 6 meses)
   - **Métricas (Grid 3 colunas):**
     - Churn Rate: 3.2% (-0.8% vs mês anterior)
     - LTV Médio: R$ 3.450 (+12% vs mês anterior)
     - CAC: R$ 287 (-5% vs mês anterior)

**Menu Sidebar:** "Analytics" (ícone BarChart3)

---

### `*` - Página Não Encontrada (404)

**Arquivo:** `src/pages/NotFound.tsx`  
**Tipo:** Catch-all Route  
**Descrição:** Página exibida para rotas não mapeadas

**Funcionalidades:**
- Log de erro no console com a rota acessada
- Mensagem de erro 404
- Link para retornar à home

**Importante:** Esta rota deve ser a última na configuração de rotas (catch-all)

---

## 🎨 Componentes de Layout

### AppSidebar

**Arquivo:** `src/components/layout/AppSidebar.tsx`  
**Descrição:** Barra lateral de navegação do dashboard

**Componentes Utilizados:**
- `Sidebar`, `SidebarContent`, `SidebarGroup`, `SidebarGroupContent`, `SidebarGroupLabel`, `SidebarMenu`, `SidebarMenuButton`, `SidebarMenuItem`, `useSidebar` (ui/sidebar)
- `NavLink` (react-router-dom)

**Itens de Menu:**
1. **Dashboard** (`/dashboard`) - Ícone: Home
2. **Chat IA** (`/dashboard/colaborador`) - Ícone: MessageSquare
3. **Configurações** (`/dashboard/admin`) - Ícone: Settings
4. **Analytics** (`/dashboard/master`) - Ícone: BarChart3

**Funcionalidades:**
- Sidebar colapsável (modo ícone)
- Destaque visual para rota ativa
- Logo/identidade visual quando expandido

---

### AppHeader

**Arquivo:** `src/components/layout/AppHeader.tsx`  
**Descrição:** Cabeçalho superior fixo do dashboard

**Componentes Utilizados:**
- `SidebarTrigger` (ui/sidebar)
- `Button` (ui/button)
- `Avatar`, `AvatarFallback` (ui/avatar)
- `DropdownMenu`, `DropdownMenuContent`, `DropdownMenuItem`, `DropdownMenuLabel`, `DropdownMenuSeparator`, `DropdownMenuTrigger` (ui/dropdown-menu)

**Funcionalidades:**
- Botão para toggle da sidebar
- Menu dropdown do usuário com opções:
  - Perfil
  - Configurações
  - Sair (TODO: implementar logout)

**Estilo:**
- Header fixo (sticky top-0)
- Backdrop blur effect
- Borda inferior

---

## 🧩 Componentes UI Disponíveis

Todos os componentes estão localizados em `src/components/ui/` e são baseados em shadcn/ui (Radix UI).

### Componentes de Formulário
- `button.tsx` - Botões
- `input.tsx` - Campos de texto
- `textarea.tsx` - Área de texto
- `label.tsx` - Labels
- `checkbox.tsx` - Checkboxes
- `radio-group.tsx` - Radio buttons
- `select.tsx` - Select dropdown
- `switch.tsx` - Toggle switches
- `slider.tsx` - Sliders
- `form.tsx` - Formulários (react-hook-form)
- `input-otp.tsx` - Input OTP

### Componentes de Layout
- `card.tsx` - Cards
- `separator.tsx` - Separadores
- `scroll-area.tsx` - Áreas com scroll
- `aspect-ratio.tsx` - Aspect ratio
- `resizable.tsx` - Painéis redimensionáveis
- `sidebar.tsx` - Sidebar

### Componentes de Navegação
- `tabs.tsx` - Abas
- `breadcrumb.tsx` - Breadcrumbs
- `navigation-menu.tsx` - Menu de navegação
- `menubar.tsx` - Barra de menu
- `pagination.tsx` - Paginação

### Componentes de Feedback
- `alert.tsx` - Alertas
- `alert-dialog.tsx` - Diálogos de alerta
- `toast.tsx` / `toaster.tsx` - Notificações toast
- `sonner.tsx` - Toast alternativo (Sonner)
- `progress.tsx` - Barras de progresso
- `skeleton.tsx` - Placeholders de carregamento

### Componentes de Overlay
- `dialog.tsx` - Modais
- `drawer.tsx` - Drawers (mobile)
- `sheet.tsx` - Painéis laterais
- `popover.tsx` - Popovers
- `hover-card.tsx` - Cards ao passar mouse
- `tooltip.tsx` - Tooltips
- `context-menu.tsx` - Menus de contexto
- `dropdown-menu.tsx` - Menus dropdown

### Componentes de Dados
- `table.tsx` - Tabelas
- `chart.tsx` - Gráficos (wrapper para recharts)
- `badge.tsx` - Badges
- `avatar.tsx` - Avatares
- `calendar.tsx` - Calendários

### Componentes Utilitários
- `accordion.tsx` - Acordeões
- `collapsible.tsx` - Elementos colapsáveis
- `toggle.tsx` / `toggle-group.tsx` - Toggles
- `command.tsx` - Command palette
- `carousel.tsx` - Carrosséis

---

## 🪝 Hooks e Utilitários

### Hooks Customizados

**Localização:** `src/hooks/`

- `use-mobile.tsx` - Detecta se o dispositivo é mobile
- `use-toast.ts` - Hook para exibir toasts (duplicado em ui/use-toast.ts)

### Utilitários

**Localização:** `src/lib/`

- `utils.ts` - Funções utilitárias (cn para merge de classes Tailwind)

---

## 📁 Estrutura de Arquivos

```
src/
├── App.tsx                    # Configuração principal de rotas
├── main.tsx                   # Entry point da aplicação
├── index.css                  # Estilos globais
├── vite-env.d.ts              # Tipos do Vite
│
├── pages/                     # Páginas/Rotas
│   ├── Landing.tsx            # / (pública)
│   ├── Dashboard.tsx          # /dashboard (index)
│   ├── NotFound.tsx           # * (404)
│   ├── auth/
│   │   ├── Login.tsx          # /auth/login
│   │   └── Register.tsx       # /auth/register
│   └── dashboard/
│       ├── DashboardLayout.tsx # /dashboard (layout)
│       ├── Colaborador.tsx     # /dashboard/colaborador
│       ├── Admin.tsx           # /dashboard/admin
│       └── Master.tsx         # /dashboard/master
│
├── components/
│   ├── layout/                # Componentes de layout
│   │   ├── AppHeader.tsx
│   │   └── AppSidebar.tsx
│   └── ui/                    # Componentes UI (shadcn)
│       └── [todos os componentes listados acima]
│
├── hooks/                     # Hooks customizados
│   ├── use-mobile.tsx
│   └── use-toast.ts
│
└── lib/                       # Utilitários
    └── utils.ts
```

---

## 🔄 Fluxo de Navegação

### Fluxo Público
```
/ (Landing)
  ↓
/auth/login ou /auth/register
  ↓
/dashboard (após autenticação)
```

### Fluxo Autenticado
```
/dashboard (DashboardLayout)
  ├── /dashboard (Dashboard principal)
  ├── /dashboard/colaborador (Chat IA)
  ├── /dashboard/admin (Configurações)
  └── /dashboard/master (Analytics)
```

---

## 📝 Notas de Implementação

### TODOs Identificados

1. **Autenticação:**
   - `/auth/login` - Implementar lógica de autenticação real
   - `/auth/register` - Implementar lógica de registro real
   - `AppHeader` - Implementar logout

2. **Chat IA:**
   - `/dashboard/colaborador` - Integrar com API de IA real

3. **Configurações:**
   - `/dashboard/admin` - Implementar salvamento de configurações
   - Persistência de dados (BYOK, regras IA)

4. **Dados:**
   - Todas as páginas exibem dados mockados/státicos
   - Necessário integrar com backend/API

---

## 🎯 Convenções de Nomenclatura

- **Páginas:** PascalCase (ex: `Landing.tsx`, `Dashboard.tsx`)
- **Componentes:** PascalCase (ex: `AppSidebar.tsx`, `AppHeader.tsx`)
- **Rotas:** kebab-case na URL (ex: `/auth/login`, `/dashboard/admin`)
- **Componentes UI:** kebab-case no arquivo (ex: `button.tsx`, `card.tsx`)

---

## 📚 Bibliotecas Principais

- **React Router DOM:** Roteamento
- **TanStack Query:** Gerenciamento de estado servidor
- **Radix UI:** Componentes acessíveis
- **Recharts:** Gráficos e visualizações
- **Lucide React:** Ícones
- **Tailwind CSS:** Estilização
- **React Hook Form:** Formulários
- **Zod:** Validação de schemas

---

**Última Atualização:** Dezembro 2024  
**Versão do Documento:** 1.0.0

