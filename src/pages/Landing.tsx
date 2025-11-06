import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Sparkles, Zap, Shield, Users, ArrowRight, Check, Star, TrendingUp, Lock, DollarSign, Clock, ChevronDown, Building2, Quote } from "lucide-react";
const stats = [
  { value: "70%", label: "Economia em custos" },
  { value: "10x", label: "Mais controle" },
  { value: "100%", label: "Seguro e privado" },
  { value: "24/7", label: "Disponibilidade" }
];

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CTO, TechCorp",
    content: "Reduzimos nossos custos com IA em 65% e ganhamos controle total sobre o uso. A equipe toda tem acesso sem limitações artificiais.",
    rating: 5
  },
  {
    name: "Marina Santos",
    role: "Diretora de Inovação, StartupXYZ",
    content: "Finalmente conseguimos democratizar o acesso à IA na empresa sem estourar o orçamento. O ROI foi imediato.",
    rating: 5
  },
  {
    name: "Roberto Oliveira",
    role: "CEO, Consultoria ABC",
    content: "A segurança e privacidade eram nossa maior preocupação. ControlIA resolveu isso mantendo tudo isolado e sob nosso controle.",
    rating: 5
  }
];

const faqs = [
  {
    question: "Como funciona o modelo 'Traga sua própria API'?",
    answer: "Você usa sua própria chave API da OpenAI ou Anthropic, pagando diretamente a eles pelo uso. Nosso sistema apenas gerencia o acesso da equipe e fornece controles corporativos. Você paga apenas nossa plataforma de gestão."
  },
  {
    question: "Quanto posso economizar comparado a múltiplas assinaturas individuais?",
    answer: "Em média, empresas economizam 60-70% comparado a pagar múltiplas assinaturas do ChatGPT Plus ou Claude Pro. Com 10 usuários, por exemplo, você gastaria R$200/mês em assinaturas individuais, mas com ControlIA paga apenas R$99 + custo da API compartilhada."
  },
  {
    question: "Meus dados estão seguros?",
    answer: "Sim. Implementamos isolamento completo de dados, criptografia end-to-end e arquitetura zero-trust. Seus dados nunca são compartilhados e você tem controle total sobre onde e como são armazenados."
  },
  {
    question: "Posso testar antes de contratar?",
    answer: "Sim! Oferecemos um plano gratuito para até 3 usuários. Você pode testar todas as funcionalidades principais antes de fazer upgrade."
  },
  {
    question: "Como funciona a gestão por departamento?",
    answer: "No plano Empresa e acima, você pode criar grupos/departamentos, definir limites de uso específicos, e ter visibilidade completa de gastos e uso por área. Perfeito para controle de budget."
  }
];

const features = [{
  icon: Sparkles,
  title: "IA com Contexto Corporativo",
  description: "Acesso liberado por assinatura com assistente treinado no contexto interno da sua empresa."
}, {
  icon: Zap,
  title: "Economia Compartilhada",
  description: "Uma única chave API para toda a equipe. Compartilhe custos de IA entre todos os colaboradores e economize até 70% comparado a assinaturas individuais."
}, {
  icon: Shield,
  title: "Segurança e Privacidade",
  description: "Arquitetura de dados com isolamento completo, garantindo privacidade e proteção total das suas informações."
}, {
  icon: Users,
  title: "Painel de Gestão Completa",
  description: "Gerencie colaboradores, controle acessos e configure as regras de uso da IA por departamento."
}];
const plans = [{
  name: "Free",
  price: "R$ 0",
  period: "/mês",
  description: "Experimente gratuitamente",
  features: ["Até 3 usuários", "Traga sua própria API", "Suporte por email", "Dashboard básico", "Segurança completa"],
  highlighted: false
}, {
  name: "Básico",
  price: "R$ 99",
  period: "/mês",
  description: "Ideal para pequenas equipes começando",
  features: ["Até 10 usuários", "Traga sua própria API", "Suporte por email", "Dashboard de gestão", "Segurança completa"],
  highlighted: false
}, {
  name: "Empresa",
  price: "R$ 299",
  period: "/mês",
  description: "Para empresas em crescimento",
  features: ["Até 50 usuários", "Traga sua própria API", "Suporte prioritário", "Analytics avançado", "Customização de contexto IA", "Gestão por departamento"],
  highlighted: true
}, {
  name: "Master",
  price: "Personalizado",
  period: "",
  description: "Solução enterprise completa",
  features: ["Usuários ilimitados", "Traga sua própria API", "Suporte 24/7 dedicado", "SLA garantido", "Onboarding personalizado", "Infraestrutura dedicada"],
  highlighted: false
}];
export default function Landing() {
  return <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <h1 className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
            ControlIA.io
          </h1>
          <div className="flex items-center gap-4">
            <Link to="/auth/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/auth/register">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-primary">
                Começar Agora
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Melhorado */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-hero-gradient opacity-20" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            {/* Trust Badge */}
            <div className="mb-6 flex justify-center">
              <Badge variant="outline" className="px-4 py-2 text-sm border-primary/30 bg-primary/5">
                <Shield className="mr-2 h-4 w-4" />
                Plataforma 100% Segura e Privada
              </Badge>
            </div>
            
            <div className="text-center">
              <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                Reduza <span className="bg-hero-gradient bg-clip-text text-transparent">até 70%</span> dos custos com IA
                <br />
                <span className="text-3xl md:text-5xl lg:text-6xl">mantendo controle total</span>
              </h2>
              <p className="mb-4 text-xl text-muted-foreground md:text-2xl font-medium">
                Uma única chave API compartilhada. Toda a equipe com acesso.
              </p>
              <p className="mb-10 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
                Pare de pagar múltiplas assinaturas individuais. Centralize, economize e tenha visibilidade completa do uso de IA na sua empresa.
              </p>
              
              {/* CTAs principais */}
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-12">
                <Link to="/auth/register">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-primary text-lg px-8 py-6">
                    Começar Gratuitamente
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 text-lg px-8 py-6">
                  Ver Demonstração
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Grátis para começar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Sem cartão de crédito</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Configure em 5 minutos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="container mx-auto px-4 mt-16">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl bg-card/50 border border-border backdrop-blur">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Depoimentos</Badge>
            <h3 className="mb-4 text-3xl font-bold">Empresas que já economizam com ControlIA</h3>
            <p className="text-lg text-muted-foreground">
              Veja o que nossos clientes têm a dizer sobre a transformação
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border bg-card relative">
                <CardHeader>
                  <Quote className="h-8 w-8 text-primary/20 mb-2" />
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base text-foreground">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">Recursos</Badge>
            <h3 className="mb-4 text-3xl font-bold">Tudo que sua empresa precisa</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Plataforma completa de gestão de IA corporativa com foco em economia, controle e segurança
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => <Card key={index} className="border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all group">
                <CardHeader>
                  <div className="mb-4 h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Comparison Section - Antes vs Depois */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Comparação</Badge>
              <h3 className="mb-4 text-3xl font-bold">Veja a diferença na prática</h3>
              <p className="text-lg text-muted-foreground">
                Compare o modelo tradicional com a economia do ControlIA
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Sem ControlIA */}
              <Card className="border-destructive/50 bg-destructive/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-destructive">
                    <DollarSign className="h-5 w-5" />
                    Sem ControlIA
                  </CardTitle>
                  <CardDescription>Modelo tradicional de assinaturas individuais</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-destructive">R$ 1.500/mês</div>
                    <div className="text-sm text-muted-foreground">Para equipe de 15 pessoas</div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm">
                      <div className="h-5 w-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-destructive text-xs">✕</span>
                      </div>
                      <span>15 assinaturas individuais × R$ 100</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <div className="h-5 w-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-destructive text-xs">✕</span>
                      </div>
                      <span>Sem visibilidade de gastos por área</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <div className="h-5 w-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-destructive text-xs">✕</span>
                      </div>
                      <span>Controle descentralizado</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <div className="h-5 w-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-destructive text-xs">✕</span>
                      </div>
                      <span>Dados espalhados em múltiplas contas</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <div className="h-5 w-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-destructive text-xs">✕</span>
                      </div>
                      <span>Gestão manual e demorada</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Com ControlIA */}
              <Card className="border-primary shadow-glow-primary bg-primary/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-bl-lg">
                  ECONOMIA DE 67%
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <TrendingUp className="h-5 w-5" />
                    Com ControlIA
                  </CardTitle>
                  <CardDescription>Gestão centralizada e inteligente</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">R$ 499/mês</div>
                    <div className="text-sm text-muted-foreground">Plano Empresa + API compartilhada</div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span>R$ 299 gestão + ~R$ 200 API compartilhada</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span>Dashboard completo de uso e gastos</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span>Controle centralizado por departamento</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span>Segurança e privacidade corporativa</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span>Gestão automatizada e eficiente</span>
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-primary/20">
                    <div className="flex items-center justify-between text-sm font-semibold">
                      <span>Economia anual:</span>
                      <span className="text-primary text-lg">R$ 12.012</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* CTA Intermediário */}
            <div className="mt-12 text-center">
              <Link to="/auth/register">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-primary">
                  Comece a Economizar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Vantagens</Badge>
              <h3 className="mb-4 text-3xl font-bold">Por que escolher ControlIA?</h3>
              <p className="text-lg text-muted-foreground">
                Mais do que economia: controle, visibilidade e segurança
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-border bg-card p-6 hover:border-primary/50 transition-all">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <div className="text-5xl font-bold text-primary mb-2">70%</div>
                    <div className="text-sm text-muted-foreground font-semibold">Economia em relação a múltiplas assinaturas</div>
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Em vez de cada colaborador pagar uma assinatura individual de IA, toda a equipe usa uma única chave API compartilhada. O custo é dividido e você economiza drasticamente.
                </p>
              </Card>
              
              <Card className="border-border bg-card p-6 hover:border-primary/50 transition-all">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <div className="text-5xl font-bold text-primary mb-2">1</div>
                    <div className="text-sm text-muted-foreground font-semibold">Chave API para toda organização</div>
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Centralize o custo de IA em uma única conta OpenAI ou Claude. Tenha visibilidade total dos gastos, controle unificado e gestão simplificada.
                </p>
              </Card>
              
              <Card className="border-border bg-card p-6 hover:border-primary/50 transition-all">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <div className="text-5xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground font-semibold">Controle sobre uso e gastos</div>
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Configure limites por usuário, departamento ou projeto. Acompanhe em tempo real quanto cada área está consumindo e tome decisões baseadas em dados.
                </p>
              </Card>
              
              <Card className="border-border bg-card p-6 hover:border-primary/50 transition-all">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <div className="text-5xl font-bold text-primary mb-2">5min</div>
                    <div className="text-sm text-muted-foreground font-semibold">Para começar a usar</div>
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Configure sua conta, adicione sua chave API, convide colaboradores e pronto. Implementação rápida sem complicações técnicas.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">FAQ</Badge>
              <h3 className="mb-4 text-3xl font-bold">Perguntas Frequentes</h3>
              <p className="text-lg text-muted-foreground">
                Tire suas dúvidas sobre a plataforma
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <ChevronDown className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground pl-8">
                      {faq.answer}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* CTA após FAQ */}
            <div className="mt-12 text-center">
              <p className="mb-4 text-muted-foreground">Ainda tem dúvidas?</p>
              <Link to="/auth/register">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-primary">
                  Teste Gratuitamente
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">Planos</Badge>
            <h3 className="mb-4 text-3xl font-bold">Escolha o Plano Ideal</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Gestão e segurança por um preço justo. Você controla os custos de IA usando sua própria chave de API.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Lock className="h-4 w-4" />
              <span>Todos os planos incluem segurança completa e criptografia end-to-end</span>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan, index) => <Card key={index} className={`relative border-border ${plan.highlighted ? 'border-primary shadow-glow-primary lg:scale-105' : 'hover:border-primary/50'} transition-all`}>
                {plan.highlighted && <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-yellow-500 text-yellow-900 shadow-lg">
                      Mais Popular
                    </Badge>
                  </div>}
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription className="min-h-[40px]">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => <li key={fIndex} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>)}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to="/auth/register" className="w-full">
                    <Button className={`w-full ${plan.highlighted ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-primary' : 'bg-muted hover:bg-muted/80 text-foreground'}`}>
                      {plan.name === "Master" ? "Falar com Vendas" : "Começar Agora"}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>)}
          </div>
          
          {/* Garantia */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto border-primary/30 bg-primary/5">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Garantia de 30 dias</h4>
                <p className="text-muted-foreground">
                  Teste sem riscos. Se não ficar satisfeito, devolvemos 100% do seu investimento nos primeiros 30 dias.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 border-t border-border bg-hero-gradient/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="mb-6 text-3xl md:text-5xl font-bold">
              Pronto para <span className="bg-hero-gradient bg-clip-text text-transparent">economizar</span> e ter controle total?
            </h3>
            <p className="mb-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Junte-se a centenas de empresas que já reduziram custos com IA mantendo segurança e controle corporativo.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link to="/auth/register">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-primary text-lg px-8 py-6">
                  Começar Gratuitamente
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 text-lg px-8 py-6">
                Agendar Demonstração
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Configure em minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Suporte dedicado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h4 className="mb-2 text-xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              ControlIA.io
            </h4>
            <p className="text-sm text-muted-foreground">
              © 2024 ControlIA.io. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>;
}