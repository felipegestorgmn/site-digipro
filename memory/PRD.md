# PRD — Homepage DigiPro

## Problema original (resumo)
Homepage completa, navegável, responsiva e premium para a agência DigiPro (marketing digital e soluções tecnológicas). Referência estrutural: agenciaclickdigital.com.br (sem copiar conteúdo). Paleta: grafite #0B0D12, azul-noite #111827, azul elétrico #0066FF, ciano #00D1C2, branco. Tipografia: Sora SemiBold (títulos) + Inter (textos). Conversão via WhatsApp (wa.me/5567984065156). Regras: sem emojis, sem preços, sem dados/clientes/depoimentos inventados, sem rosto fictício do fundador, logo oficial preservado.

## Arquitetura
- Frontend: React 19 + CRA + Tailwind + framer-motion + lenis (rolagem suave) + lucide-react
- Backend: FastAPI (não utilizado pela homepage; pronto para futuras páginas/formulários)
- Banco: MongoDB (não utilizado nesta fase)
- Marca: símbolo DP recriado fielmente em SVG (idêntico às artes enviadas), usado no cabeçalho, rodapé e favicon (derivado das artes do usuário em /public/brand/)

## Personas
- Donos de pequenas e médias empresas buscando presença digital profissional
- Imobiliárias/corretores interessados em vídeos com IA
- Empresas que querem automação de WhatsApp e gestão do Google

## Requisitos centrais (fixos)
Header cápsula flutuante, hero tipográfico com gradiente em "CRESCIMENTO.", 8 cards de soluções, 4 diferenciais, sobre com 3 pilares, timeline de 4 etapas, seção do fundador com placeholder, CTA final em faixa gradiente, rodapé completo, SEO técnico, acessibilidade, sem dados inventados.

## Implementado (29/10/2026)
- Header fixo em cápsula translúcida com logo DP, 5 links âncora, CTA "Solicitar Orçamento" (WhatsApp) e menu mobile com aria-expanded
- Hero com reveal mascarado linha a linha, fundo abstrato tecnológico com parallax, gráfico ascendente conceitual animado, iluminação azul/ciano orgânica
- Marquee editorial lento (Estratégia, Marketing, Tecnologia...)
- Seções: Posicionamento (3 fundamentos), Soluções (8 cards com link WhatsApp), Diferenciais (4 cards), Sobre (3 pilares), Processo (timeline 4 etapas), Fundador (placeholder elegante sem rosto + campos a definir), CTA final gradiente, Rodapé (slogan, links, serviços, WhatsApp, Instagram @digipro_oficial, e-mail "em breve", copyright, voltar ao topo)
- Rolagem suave com Lenis + âncoras com offset; suporte a prefers-reduced-motion
- SEO: title/meta description, Open Graph, Twitter Card, JSON-LD Organization (com Instagram real), robots.txt com grupo de crawlers de IA, llms.txt, favicon/apple-touch-icon, lang pt-BR, noscript com conteúdo real
- Acessibilidade: skip-link, H1 único, hierarquia H2/H3, aria-labels, foco visível, áreas de toque adequadas
- Instagram @digipro_oficial incluído no rodapé e no JSON-LD (confirmado pelo usuário)

## Pendente / Backlog
- P0: Foto profissional do fundador + nome/cargo/contato (usuário enviará)
- P0: E-mail comercial (placeholder "em breve" no rodapé)
- P1: Domínio de produção → adicionar canonical, og:url, og:image, sitemap.xml (omitidos por segurança até o domínio existir)
- P1: Páginas secundárias (uma por solução) após avaliação da homepage
- P2: Blog/cases reais quando houver
- P2: Formulário de contato com backend (além do WhatsApp)

## Próximas tarefas
1. Receber foto e dados do fundador e publicar a seção completa
2. Criar páginas internas de cada solução
3. Após deploy com domínio próprio: completar canonical/OG/sitemap e ativar o toggle de crawling de buscadores
