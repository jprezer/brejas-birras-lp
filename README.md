# Local Label

Uma base white-label para landing pages de negócios locais, extraída da D2 Bike Shop. A D2 permanece como demonstração real; identidade, conteúdo, SEO, contatos e localização vivem em configuração, separados da estrutura visual.

## Comece em cinco minutos

1. Instale Node.js 20 ou superior.
2. Edite `site.config.mjs` com os dados do novo negócio.
3. Troque as imagens em `public/assets/`.
4. Rode `npm run dev` e abra `http://127.0.0.1:4173`.
5. Rode `npm run build` antes de publicar. O resultado pronto fica em `dist/`.

O projeto não possui dependências de runtime ou de build. O gerador usa apenas APIs nativas do Node.

## O que você configura

- marca, logo e assinatura;
- título, descrição, palavras-chave, canonical e tipo Schema.org;
- aviso superior, menu e ação principal;
- foto, headline, prova de marca e CTAs do hero;
- manifesto, serviços, avaliações e nota;
- endereço, horários, mapa, Instagram e WhatsApp;
- preset visual e ajustes de cor ou tipografia.

## Presets

Altere `preset` no início de `site.config.mjs`:

- `impact`: alto contraste e energia; é o preset da D2;
- `sober`: azul mineral e ritmo mais contido para serviços profissionais;
- `warm`: vermelho profundo e formas mais acolhedoras para hospitalidade e bem-estar.

Os presets ficam em `src/themes.mjs`. Para uma marca específica, prefira sobrescrever `theme.accent`, `theme.ink`, `theme.paper`, `theme.displayFont` ou `theme.bodyFont` no arquivo de configuração. As cores aceitam OKLCH.

## Estrutura

```text
site.config.mjs       conteúdo e identidade da instalação
src/themes.mjs        presets e tokens visuais
src/template.mjs      estrutura semântica e metadados
src/styles.css        sistema responsivo e componentes
src/client.js         menu móvel e melhorias progressivas
scripts/build.mjs     geração do site estático
scripts/check.mjs     validação de configuração e saída
public/assets/        logos e imagens da marca
dist/                 saída pronta para deploy
```

## Boas práticas ao criar uma nova versão

- Use uma foto real e decisiva no hero; não substitua a imagem por um bloco decorativo.
- Mantenha apenas uma ação principal. Para comércio local, WhatsApp, ligação, reserva ou rota funcionam melhor.
- Publique avaliações verdadeiras e mantenha nome, nota e fonte.
- Revise todos os metadados e URLs antes do deploy.
- Teste a página em 360 px, 768 px e desktop, além de navegação por teclado.
- Rode `npm run check` depois de `npm run build`.

## Deploy

`vercel.json` já aponta para `dist/`. Em outras plataformas, publique essa mesma pasta como site estático.
