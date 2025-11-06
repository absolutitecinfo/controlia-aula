# Mapa de Rotas da ControlIA.io

Este documento resume a estrutura atual de rotas da aplicação web, bem como os componentes principais envolvidos em cada página. Use-o como referência rápida para localizar pontos de extensão e planejar novas implementações.

## Visão Geral do Roteamento

- **Stack**: React + Vite com roteamento via `react-router-dom`.
- **Entrada**: `src/App.tsx` centraliza o `BrowserRouter`, define o `QueryClientProvider` e ativa `TooltipProvider`, `Toaster` e `Sonner`.
- **Layout compartilhado**: rotas sob `/dashboard` utilizam `DashboardLayout`, que injeta `AppSidebar`, `AppHeader` e um `Outlet`.
- **Componentização**: componentes genéricos residem em `src/components/ui`, enquanto itens específicos de layout estão em `src/components/layout`.

## Árvore de Rotas

```---
/
└── auth
    ├── login
    └── register
└── dashboard
    ├── (index) → /dashboard
    ├── colaborador
    ├── admin
    └── master
└── * (fallback)
```

## Tabela de Referência Rápida

| Caminho | Componente | Arquivo | Layout / Observações |
| --- | --- | --- | --- |
| `/` | `Landing` | `src/pages/Landing.tsx` | Página pública de marketing com CTA para login/cadastro. |
| `/auth/login` | `Login` | `src/pages/auth/Login.tsx` | Formulário de autenticação; redireciona para `/dashboard` ao sucesso (mock). |
| `/auth/register` | `Register` | `src/pages/auth/Register.tsx` | Formulário de cadastro; navegação imediata para `/dashboard` (mock). |
| `/dashboard` | `DashboardLayout` + `Dashboard` (index) | `src/pages/dashboard/DashboardLayout.tsx`, `src/pages/Dashboard.tsx` | Layout com `SidebarProvider`, `AppSidebar`, `AppHeader`. Cards de métricas e status. |
| `/dashboard/colaborador` | `Colaborador` | `src/pages/dashboard/Colaborador.tsx` | Chat IA simulado; usa `ScrollArea`, `Textarea`, `Button`. |
| `/dashboard/admin` | `Admin` | `src/pages/dashboard/Admin.tsx` | Configurações BYOK e guia de regras IA com `Tabs`. |
| `/dashboard/master` | `Master` | `src/pages/dashboard/Master.tsx` | Dashboard avançado com gráficos (`recharts`). |
| `*` | `NotFound` | `src/pages/NotFound.tsx` | Página 404 simples com log no console. |

## Detalhamento das Rotas

### `/` – Landing Page (`src/pages/Landing.tsx`)

- Estrutura em seções (hero, features, benefícios, pricing, footer), usando `Card`, `Button`, `Badge` e ícones `lucide-react`.
- Navegação principal oferece links para `/auth/login` e `/auth/register`.
- Possíveis evoluções: conectar botões a fluxos reais de demo, extrair seções em componentes reutilizáveis dentro de `components/landing/` para facilitar manutenção.

### `/auth/login` – Login (`src/pages/auth/Login.tsx`)

- Utiliza `useState` para controlar email/senha e `useNavigate` para redirecionar ao dashboard (placeholder).
- TODO explícito para autenticação real; incluir integração com serviço seguro e feedback via toasts (`use-toast`).
- Sugestão: validar campos, adicionar tratamento de erros e loading, e mover lógica para hook dedicado (`src/hooks/use-auth.ts`).

### `/auth/register` – Registro (`src/pages/auth/Register.tsx`)

- Coleta nome, empresa, email e senhas. Redireciona ao dashboard após submit (mock).
- Necessita validação de senha, confirmação e chamada de API real com feedback de sucesso/falha.
- Recomenda-se sanitização e mascaramento de dados sensíveis antes de envio.

### `/dashboard` – Layout Compartilhado

- `DashboardLayout` (`src/pages/dashboard/DashboardLayout.tsx`) envolve as rotas internas com `SidebarProvider`.
- **Sidebar**: `AppSidebar` (`src/components/layout/AppSidebar.tsx`) lista atalhos para as rotas internas e responde ao estado `collapsed`.
- **Header**: `AppHeader` (`src/components/layout/AppHeader.tsx`) contém trigger do sidebar e menu do usuário.
- Para novas páginas internas, adicione o `<Route path="..." element={<... />} />` dentro do bloco `/dashboard` em `src/App.tsx` e registre o link correspondente em `menuItems` de `AppSidebar`.

#### `/dashboard` (index) – Visão Geral (`src/pages/Dashboard.tsx`)

- Cards de estatísticas com `Badge` para variação e seções de “Atividade Recente” e “Status do Sistema”.
- Dados mockados; ideal conectar a `react-query` com `QueryClientProvider` já configurado.
- Componentização sugerida: extrair `StatCard` e `StatusList` para `components/dashboard/`.

#### `/dashboard/colaborador` – Chat IA (`src/pages/dashboard/Colaborador.tsx`)

- Interface de chat com listas roláveis (`ScrollArea`) e histórico simulado.
- Função `handleSend` simula resposta após `setTimeout`; substituir por chamada real à API da IA.
- Segurança: evitar enviar tokens diretamente do frontend; roteie via backend assinado.

#### `/dashboard/admin` – Configurações (`src/pages/dashboard/Admin.tsx`)

- Tabs para gerenciamento de BYOK e regras IA.
- Armazena `apiKey` em estado local; **não persistir em localStorage** nem trafegar sem criptografia. Integrar com backend que grave de forma segura.
- Possíveis melhorias: validação de chave, estado de carregamento, feedback via toast (`use-toast`).

#### `/dashboard/master` – Painel Master (`src/pages/dashboard/Master.tsx`)

- Usa `recharts` para pie chart e bar chart (`ResponsiveContainer`, `PieChart`, `BarChart`).
- Estatísticas agregadas e indicadores financeiros.
- Considerar carregamento lazy dos gráficos e code-splitting via `React.lazy` para reduzir bundle inicial.

### `*` – Página 404 (`src/pages/NotFound.tsx`)

- Renderiza mensagem simples com link para `/` e loga rota inexistente no console.
- Sugestão: adicionar botão de retorno e componente reutilizável de erro.

## Componentes e Hooks Relevantes

- `src/components/ui/` agrupa componentes genéricos (botões, formulários, toasts, sidebar, etc.). Novos componentes compartilhados devem ser adicionados aqui conforme convenção do projeto.
- `src/hooks/use-mobile.tsx` e `use-toast.ts` disponíveis para comportamento responsivo e notificações.
- `src/lib/utils.ts` oferece utilitários comuns (ex.: `cn`).

## Considerações de Performance

- Avaliar **code-splitting** das páginas do dashboard com `React.lazy` + `Suspense` para reduzir o tempo de carregamento inicial.
- Carregamento preguiçoso de pacotes pesados (`recharts`) apenas quando o usuário acessar `/dashboard/master`.
- Utilizar `react-query` para cache de dados reais quando integrações forem implementadas (evita refetch redundante).

## Considerações de Segurança

- Implementar autenticação real antes de expor as rotas protegidas; atualmente qualquer usuário acessa `/dashboard` diretamente.
- Tratar dados sensíveis (ex.: chave BYOK) apenas via backend, nunca armazenar no frontend ou em estado persistente do navegador.
- Adicionar proteção de rota (ex.: componente `RequireAuth`) envolvendo os paths sob `/dashboard`.
- Revisar logs sensíveis: o `console.error` do 404 é útil em desenvolvimento, mas pode ser atenuado em produção para evitar vazamento de URLs internas.

## Próximos Passos Recomendados

1. Criar guardas de rota e fluxo de autenticação real (login/register → serviços REST ou Supabase).
2. Extrair componentes específicos do dashboard para `components/dashboard/` para reutilização.
3. Configurar lazy loading e fallback visual para rotas pesadas.
4. Documentar padrão de criação de novas rotas (template de página, atualização do `AppSidebar`).


