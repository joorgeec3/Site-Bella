# Bella Beauty Brazil — acompanhamento do projeto

## Concluído

- [x] Editar incrementalmente o projeto importado: sem trocar template, apagar fotos/seções, redesenhar a homepage, Bento Grid, quatro cards, cinco pétalas ou fontes Bodoni Moda + Manrope.
- [x] Substituir marca/conteúdo verificável por Bella Beauty Brazil e Livia Rego; preservar inglês australiano (`en-AU`), endereço, telefone, e-mail, logo e cores com contraste.
- [x] Preservar os dez serviços requeridos e organizar a navegação por Cosmetic Tattooing, Brows, Lashes, Facials, Waxing e Courses; manter preços fora dos quatro cards da homepage.
- [x] Aplicar apenas valores observados no catálogo Timely às páginas internas, com AUD, nomes do menu, atribuição da fonte e link para conferir mudanças. Os quatro cursos e respectivos valores estão na página `/courses`.
- [x] Acrescentar à homepage somente Meet Livia, Our Work e Follow Our Journey; usar nove fotos distintas já publicadas no site oficial, WebP local otimizado sem corte e texto alternativo descritivo.
- [x] Our Work: filtros All, Brows, Cosmetic Tattoo, Lashes, Skin e Studio (cada filtro tem foto publicada), grid alinhado sem repetir fotos e lightbox com anterior/próxima, Escape, clique fora, contenção/restauro de foco e liberação do scroll.
- [x] Instagram: acesso ao perfil levou à tela de login; seguir o fallback solicitado com imagens do website e link real, sem simular feed ou inventar postagens.
- [x] Confirmar no Linktree oficial o WhatsApp `https://wa.me/61402148437` e adicioná-lo com mensagem de consulta em inglês, sem iniciar conversa.
- [x] Adicionar Back to Top após scroll e Book Now com destino Timely; esconder a barra flutuante durante a cena sticky e quando o footer está visível.
- [x] Manter `/courses` como única página canônica; conservar `/services/training-courses/` como alias `noindex,follow` apontando à canonical de cursos.
- [x] Preservar title, description, canônicos, sitemap, robots, llms.txt, links internos e JSON-LD; offers de serviços e cursos incluem apenas valores confirmados.
- [x] Validar `npm run lint` e `npm run build`; prerender de 22 caminhos, 16 endereços canônicos no sitemap.
- [x] Testar filtros/lightbox, links Instagram/WhatsApp/Timely, retorno ao topo, preços/schema, alias de cursos, menu desktop/mobile, formulário vazio (3 campos obrigatórios) sem enviar, cena ScrollTrigger em ida/volta, simetria da faixa e breakpoints de 320, 390, 768, 1024 e 1280 px; sem overflow horizontal nem erros de console no smoke test.

## Pendente

- [ ] **Idiomas/tradução:** permanece `en-AU`. Foi solicitada uma escolha de idiomas/experiência de tradução; aguardo essa definição antes de inserir seletor ou duplicar conteúdo.
- [ ] **Produção e 301:** o preview é temporário; destino de deploy e regras 301 dependem do host/da publicação escolhida. Nenhum deploy ou merge foi realizado.
- [ ] **Auditoria adicional:** Lighthouse e análise dedicada com screen reader/ferramenta WCAG não foram executados; os testes automatizados atuais não substituem esses controles.
- [ ] **Code splitting:** Vite sinaliza bundle JS maior que 500 KB; build atual mede 597,30 KB minificado (185,68 KB gzip). Considerar carregamento por rota antes da produção.
- [ ] **Direitos fotográficos:** os arquivos vieram da CDN presente no site oficial, conforme pedido. A publicação no site não revela a licença/fotógrafo de cada arquivo; confirmar isso se os direitos não estiverem cobertos pela empresa.

## Backups desta sequência

- Backup imediatamente antes desta rodada: `/home/ubuntu/Site-Bella-backup-20261010-154715.tar.gz`.
- Backup anterior às três seções da homepage: `/home/ubuntu/Site-Bella-backup-home-sections-20261010-1218.tar.gz`.
- Fontes e discriminações de preços: [`CONTENT_SOURCES.md`](./CONTENT_SOURCES.md).
