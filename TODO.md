# Bella Beauty Brazil — lista de trabalho

## Escopo e backup
Edição do projeto importado existente, sem substituir o template. A homepage, fotos de origem, fontes Bodoni Moda + Manrope, seções, Bento Grid e estruturas de cards foram preservadas. Backup anterior às alterações: `/home/ubuntu/Site-Bella-backup-20261010-142651.tar.gz`.

## Concluído

- [x] Aplicar Bella Beauty Brazil, Livia Rego, inglês australiano (`en-AU`), endereço, telefone, e-mail, logo e cores oficiais com contraste.
- [x] Manter quatro cards principais e cinco pétalas; cobrir Nano Strokes, Microblading, Shadow / Hybrid Brows, Lip Blush, Brow Sculpting & Tint, Brow Lamination, Lash Lift, Facial Treatments, Waxing e Training & Courses.
- [x] Sincronizar com GSAP/ScrollTrigger a entrada individual e sequencial de cada pétala, sobre a foto, em coordenadas horizontais distintas e com saída pelo topo; o movimento pode ser desfeito ao voltar o scroll.
- [x] Dividir a fotografia em metades e expandir uma faixa clara simétrica a partir do centro, revelando Our Approach por `clip-path`; manter sticky/scrub e oferecer modo alternativo quando o usuário prefere movimento reduzido.
- [x] Atualizar conteúdo, cores, links, hover, header, hero, Bento Grid, reviews, FAQ e footer sem remover a contagem de fotos/cards/seções.
- [x] Direcionar os CTAs de reserva para `https://bellabrazil.gettimely.com/`; nenhuma disponibilidade ou reserva é simulada.
- [x] Implementar e verificar navegação, rotas, slider, FAQ, formulário/validação, telefone/e-mail e mapa.
- [x] Criar páginas HTML para os dez serviços e para About Me, Gallery & Reviews, Contact & Book e Courses; incluir comparação pertinente, foto publicada, cuidados oficiais quando aplicáveis, FAQ e CTA.
- [x] Preservar as antigas rotas de serviços como aliases com canonical para o conteúdo atual; cada URL canônica indexável tem meta, sitemap e HTML prerenderizado.
- [x] Implementar SEO local para as localidades fornecidas (sem páginas repetidas por bairro), JSON-LD, links internos, `robots.txt`, `llms.txt`, `alt`, imagens lazy-loaded e otimização do logo.
- [x] Validar `npm run lint`, `npm run build`, prerender de 22 caminhos (17 no sitemap), 10 H1/metadados canônicos e o preview em Chromium.
- [x] Testar menu/CTAs/FAQ/slider, formulário sem enviá-lo, Google Maps, cinco larguras (320, 390, 768, 1024 e 1280 px), ausência de overflow horizontal, reduced-motion, fotos carregadas, console JavaScript e a animação em ambos os sentidos.

## Pendente / fora do que pôde ser verificado

- [ ] Regras 301 do host de produção: as URLs antigas continuam disponíveis como aliases, mas a regra HTTP final depende do host escolhido e não foi configurada/publicada.
- [ ] Auditoria com Lighthouse, screen reader e ferramenta WCAG dedicada; os testes atuais cobrem construção, DOM, validação, foco visível, reduced-motion e layouts, mas não substituem essa auditoria.
- [ ] Divisão de código adicional: a compilação passa, mas o bundle JS minificado mede ~575 KB bruto (~180 KB gzip) e Vite avisa sobre chunks >500 KB.
- [ ] Publicação/merge para produção: não realizada. O preview é temporário e requer decisão/configuração do destino de deploy.

## Restrições de conteúdo preservadas
Sem inventar preços, horários, rating, certificações, resultados, calendário ou currículo de curso. Apenas a avaliação publicada e atribuída de Alisha foi usada como avaliação textual; as demais imagens do slider não são rotuladas como reviews.


## Iteração incremental — seção Meet Livia, Our Work e Instagram (2026-10-10)

- [x] Preservar todas as seções atuais e inserir somente três novas seções à homepage: Meet Livia, Our Work e Follow Our Journey.
- [x] Exibir o retrato real de Livia publicado no site oficial; resumir sua passagem por vendas executivas de cargas aéreas/comércio exterior no Brasil, chegada à Austrália e transição para a beleza, sem credenciais inventadas.
- [x] Ligar More About Livia à página About existente.
- [x] Montar o grid editorial Our Work com cinco imagens distintas do site oficial e lightbox funcional: próximo/anterior, Escape, clique no backdrop, foco restaurado e scroll liberado ao fechar.
- [x] Usar somente fotos efetivamente publicadas no site oficial; nove fontes visuais distintas entre as três seções, sem repetição interna, sem baixar imagens de banco de stock e sem gerar imagens. Preservar aspecto/enquadramento em WebP e fornecer `alt` descritivo.
- [x] Verificar Instagram. Como o navegador redirecionou para login, usar fotografias diferentes do site oficial, botão Follow on Instagram para o perfil correto e texto que deixa claro que não é feed ao vivo; nenhum post/caption/data fictício.
- [x] Passar `npm run lint` e `npm run build`; prerender continua gerando 22 rotas e sitemap.
- [x] Verificar About e Gallery & Reviews por seus CTAs, o link Instagram, menu mobile abrir/fechar, lightbox com teclado, nove fotos decodificadas com alt, console sem erros e layout sem overflow a 320, 390, 768, 1024 e 1280 px.
- [x] Regressar a cena ScrollTrigger após a inserção: cinco amostras revelaram uma pétala por vez, o ponto inicial reapareceu no retorno do scroll, clip-path expandiu simetricamente e reduced-motion dispensou a altura sticky de 500vh.
- [x] Confirmar a prévia de produção do sandbox responde HTTP 200; screenshot das novas seções examinado no desktop e do grid no mobile.

## Backup desta iteração
Backup do repositório imediatamente antes das três adições: `/home/ubuntu/Site-Bella-backup-home-sections-20261010-1218.tar.gz` (205 KB; `.git`, `node_modules` e `dist` excluídos). Backup anterior à primeira iteração: `/home/ubuntu/Site-Bella-backup-20261010-142651.tar.gz` (148 KB).
