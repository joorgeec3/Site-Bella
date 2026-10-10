# Relatório de implementação — Bella Beauty Brazil

**Repositório:** `joorgeec3/Site-Bella`  
**Branch de trabalho:** `feature/bella-beauty-brazil`  
**Estado:** implementação e preview compilados; não foi publicado em produção.

## O que foi feito

- Mantido o projeto importado, sem troca de template: continuam a homepage, fotos já presentes, seções, Bento Grid, fontes **Bodoni Moda + Manrope**, quatro cards principais e cinco cards em forma de pétala.
- Atualizada a identidade para Bella Beauty Brazil, de Livia Rego; conteúdo em inglês australiano (`en-AU`), endereço **Suite 3, 412 Logan Road, Greenslopes, QLD 4120, Australia**, telefone **+61 402 148 437** e e-mail **livia.anjos14@gmail.com**. O logo oficial foi otimizado para uso web e recebeu fundo de contraste no header.
- Preservados os dez serviços pedidos: Nano Strokes, Microblading, Shadow / Hybrid Brows, Lip Blush, Brow Sculpting & Tint, Brow Lamination, Lash Lift, Facial Treatments, Waxing e Training & Courses.
- Corrigido o menu desktop para que clique e hover não se cancelem. Menu mobile, sliders, FAQ e formulários usam controles acessíveis; a validação do formulário não cria um agendamento local.
- Todos os CTAs de reserva e chamadas de `window.open` testados resolvem diretamente para `https://bellabrazil.gettimely.com/`. Nenhuma reserva real foi aberta ou submetida durante os testes.
- Criadas páginas individuais para os dez serviços e para **About Me**, **Gallery & Reviews**, **Contact & Book** e **Courses**. Foram reutilizadas fotos publicadas pela própria empresa. Cuidados de Microblading, Lip Tattoo, Brow Lamination e Lash Lift remetem ao material oficial aplicável; o restante evita instruções clínicas não publicadas.
- Reviews: usada somente uma avaliação textual publicada, atribuída à cliente indicada pela fonte; nenhuma nota ou depoimento adicional foi inventado.
- Acrescentados `title`, descrições, canonical, páginas estáticas por rota, sitemap com **16** URLs canônicas, `robots.txt`, `llms.txt`, JSON-LD local/serviço/FAQ e links internos. As localidades do briefing foram incluídas sem criar páginas duplicadas por bairro. Rotas legadas mantêm aliases com canonical; a regra 301 do servidor continua dependente do host de produção.
- Arquivo oficial do logo reduzido de 480 × 540 para 228 × 256 px (~49 KB); fotos do homepage decodificadas após lazy-load.

## Animações e comparação visual

- **Pétalas:** as cinco trajetórias GSAP/ScrollTrigger têm posições horizontais diferentes; cada card cruza a janela da foto e sobe para fora do topo em sequência. O teste percorreu a entrada e saída em amostras densas e voltou pelos mesmos pontos: a posição e os masks foram reproduzidos ao reverter o scroll.
- **Our Approach:** a imagem foi mascarada em duas metades com `clip-path`. Uma faixa clara e a máscara do título expandem com polígonos simétricos a partir do centro; assim, a progressão intermediária apresenta Our Approach antes do final da cena, ao contrário do antigo movimento assimétrico. Ambos respondem ao scrub e revertem no scroll.
- Conferidos frames relevantes da gravação anexada e inspecionados screenshots Chromium durante o estado intermediário. O modo `prefers-reduced-motion` remove a espera sticky de 500vh.

## Verificações realizadas

| Verificação | Resultado |
|---|---|
| `npm run lint` (TypeScript) | Passou |
| `npm run build` + prerender | Passou; gerou 22 arquivos de rota |
| Dez rotas de serviço | H1, title, descrição e canonical conferidos |
| Sitemap/robots/llms | sitemap com 16 URLs; `robots.txt` e `llms.txt` presentes |
| Desktop/mobile | Menu e links testados; sem overflow horizontal a 320, 390, 768, 1024 e 1280 px |
| CTA de reserva | URL exata conferida, incluindo header desktop/mobile e hero; abertura capturada sem navegar para a agenda |
| Contact & Book | Campos obrigatórios, e-mail inválido/válido e presença do mapa testados; formulário **não** foi enviado |
| Google Maps | O iframe redirecionou para `www.google.com/maps/embed`; recursos do Maps carregaram no preview |
| Slider/FAQ | Avanço do slider medido e acordeão expandido com `aria-expanded` |
| Cena scroll | Cinco cards visíveis em janelas próprias e posições distintas; foto simétrica, faixa central/título sincronizados; caminho de ida e volta conferido |
| Fotos/console | 17 imagens decodificadas no homepage; sem erro de console JavaScript ou erro de página nos testes finais |
| Movimento reduzido | Preferência respeitada sem pausa sticky artificial |

## Pendente / limitações antes de produção

1. **Publicação e merge** não foram feitos. O preview atual é temporário: [abrir preview do sandbox](https://4173-i9xja1dwu9rc65jer456m-96609d97.us1.manus.computer/).
2. **301**: os aliases e canonicals antigos foram mantidos para o build, mas não existe regra do servidor aplicada enquanto o host de produção não for definido.
3. **Performance**: no build atual, CSS mede 64,78 KB (~11,18 KB gzip) e JavaScript 597,30 KB minificado (~185,68 KB gzip). Vite ainda avisa que o chunk JS ultrapassa 500 KB bruto. A compilação é válida; divisão adicional por rota pode ser considerada antes de produção.
4. Não foi executado Lighthouse nem uma auditoria dedicada de screen reader/WCAG. Os testes de responsividade, foco visível e `prefers-reduced-motion` não substituem essa etapa.
5. Valores exibidos são os que foram confirmados no Timely, mais A$90 para “Brow Lamination (only)” mencionados na descrição oficial. Não foram criados valores para serviços sem preço publicado, horários de funcionamento, notas, certificações ou programas curriculares.

## Fontes registradas

- [Site oficial Bella Beauty Brazil](https://www.bellabeautybrazil.com.au/)
- [Serviços e reservas atuais no Timely](https://bellabrazil.gettimely.com/)
- [Guia oficial de cuidados pós-tratamento](https://www.bellabeautybrazil.com.au/_files/ugd/26620d_2df1062d732e44f2af7e3ce4284b53dd.pdf)
- [Referência de layout/rotação visual](https://oriatemplate.framer.website/)
- Mais detalhes e limites das fontes: [`CONTENT_SOURCES.md`](./CONTENT_SOURCES.md)


## Iteração incremental da homepage — 2026-10-10

- Foram acrescentadas somente três seções à sequência existente: **Meet Livia** (retrato oficial e história pública, CTA More About Livia), **Our Work** (grid editorial alinhado de cinco fotos com lightbox) e **Follow Our Journey** (fotos do site e ligação ao perfil). A ordem e o conteúdo das demais seções foram mantidos.
- Nove imagens publicadas na CDN oficial foram otimizadas para WebP sem corte, com proporções originais. O conjunto passou de **13.598.855 bytes** de fontes baixadas para **485.824 bytes** (redução calculada: **96,43%**). Incluem o retrato de Livia, cinco imagens distintas do grid e três imagens distintas do bloco Instagram; todas carregaram, têm texto alternativo e não se repetem entre os novos blocos.
- A história do bloco Meet Livia é limitada ao percurso indicado pelo site oficial e pelo briefing: vendas de cargas aéreas/comércio exterior no Brasil, chegada à Austrália e trabalho posterior no setor da beleza. Nenhuma formação ou certificação foi acrescentada.
- **Instagram:** a visita automatizada ao perfil redirecionou para login. Seguindo o fallback solicitado, usei três imagens adicionais do site oficial e um link direto para `@bellabeautybrazil`; nenhum post, data, legenda ou feed ao vivo foi criado.
- **Lightbox:** foto abre; avançar altera a foto; Escape fecha; o foco retorna ao cartão de origem; o scroll da página é restaurado.
- **Regressão da cena:** depois de mover o scroll scene no layout ampliado, medi uma pétala visível em cada um dos cinco intervalos amostrados. O mesmo centro foi observado ao voltar ao ponto anterior do scroll; o polígono da faixa e a revelação do título permaneceram simétricos. Com `prefers-reduced-motion`, a seção usa apenas a altura de viewport (844 px no teste), sem trecho sticky de 500vh.
- **Rotas/CTAs:** More About Livia abriu `/about`; More Gallery & Reviews abriu `/gallery-reviews`; o botão Instagram aponta ao perfil oficial em nova aba com `noopener`.
- **Responsive e execução:** o menu mobile abriu e fechou; as cinco larguras de teste (320, 390, 768, 1024 e 1280 px) não mostraram overflow; as nove fotos decodificaram; o console JavaScript não registrou erros. Preview público temporário respondeu HTTP 200.
- A prévia continua **sem publicação em produção** e a branch de revisão do GitHub permanece em draft. Os limites de deployment/301, Lighthouse/WCAG e code splitting descritos acima continuam pendentes.


## Iteração — preços, categorias, galeria e controles rápidos (2026-10-10)

- O menu de serviços agora separa Cosmetic Tattooing, Brows, Lashes, Facials, Waxing e Courses em desktop/mobile. A homepage manteve os quatro cards principais, cinco pétalas e estrutura existente; valores aparecem nas páginas internas, não nos cards da homepage.
- Confrontados com o [catálogo oficial Timely](https://bellabrazil.gettimely.com/) os 18 preços enviados, desde Microblading (A$615) e Brow Sculpt (A$56) até os cursos (A$950–A$4.200). Incluída separadamente a opção Timely “Brow Lamination (only)” por A$90, que a própria descrição oficial também menciona. Os nomes foram alinhados ao catálogo — por exemplo, “Brow Sculpt & Hybrid Brow” — e o JSON-LD usa `priceCurrency: AUD`. Cada preço indica a data da checagem e remete ao Timely para atualizações.
- Our Work agora tem os seis filtros pedidos; cada categoria exibida contém imagem. Os cinco cartões têm moldura de igual proporção sem cortar as fotos. Chromium confirmou cinco `src` únicos e testou filtro, próxima/anterior, Escape e retorno de foco após fechar o lightbox.
- Botões flutuantes: o [Linktree oficial](https://linktr.ee/bellabeautybrazil) confirmou o WhatsApp `wa.me/61402148437`, igual ao telefone fornecido. Conferi apenas o `href`; não iniciei uma conversa. Book Now tem o link Timely exato e Back to Top surgiu após scroll e retornou ao topo. O grupo de botões some sobre a cena sticky e no footer.
- O teste observou uma pétala por vez em cada uma das cinco posições distintas (`x≈216, 475, 749, 1008 e 1238 px`); a faixa abriu simetricamente no ponto amostrado a 85% do scrub, com os lados da foto recuando na mesma medida. O centro da primeira pétala no mesmo ponto ficou idêntico após voltar o scroll. Formulário: três campos requeridos tornam o formulário vazio inválido; nenhum submit/envio foi feito.
- Chromium passou rotas canônicas, preços/schema de Brow, Facials e Courses, alias `training-courses` sem indexação duplicada, grupos de menu desktop/mobile, cinco larguras (320–1280 px) sem overflow, links e estado do footer. Console: **0 erros**. Build final: `npm run lint` e `npm run build` passaram; 22 HTML paths prerenderizados, 16 canônicos no sitemap. Aviso de bundle permanece: JS 597,17 KB minificado (185,66 KB gzip).
- A frase “bote idiomas para traduzir” foi esclarecida por uma pergunta pendente; a aplicação segue em `en-AU` até a definição do conjunto de idiomas/método. Nenhum idioma ou máquina de tradução foi presumido.
- Backup anterior à rodada: `/home/ubuntu/Site-Bella-backup-20261010-154715.tar.gz`. PR em draft; sem merge ou publicação em produção.
