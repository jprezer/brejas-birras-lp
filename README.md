# Brejas & Birras — landing page demonstrativa

Landing page demonstrativa para o Brejas & Birras PUB e SHOP, em Araucária. Reúne conteúdo institucional, localização, horário, links de contato, avaliações públicas e SEO local.

## Desenvolvimento

1. Instale Node.js 20 ou superior.
2. Rode `npm run dev` e abra `http://127.0.0.1:4173`.
3. Rode `npm run build` antes de publicar. O resultado pronto fica em `dist/`.

O projeto não possui dependências de runtime ou de build. O gerador usa apenas APIs nativas do Node.

## O que você configura

- marca, logo e assinatura;
- título, descrição, palavras-chave, canonical e tipo Schema.org;
- aviso superior, menu e ação principal;
- foto, headline, prova de marca e CTAs do hero;
- manifesto, serviços, galeria opcional, avaliações e nota;
- endereço, horários, mapa, Instagram e WhatsApp;
- preset visual e ajustes de cor ou tipografia.

## Presets

Altere `preset` no início de `site.config.mjs`:

- `impact`: alto contraste e energia para varejo, esporte e marcas diretas;
- `sober`: azul mineral e ritmo mais contido para serviços profissionais;
- `warm`: vermelho profundo e formas mais acolhedoras para hospitalidade e bem-estar.

Os presets ficam em `src/themes.mjs`. Para uma marca específica, prefira sobrescrever `theme.accent`, `theme.ink`, `theme.paper`, `theme.displayFont` ou `theme.bodyFont` no arquivo de configuração. As cores aceitam OKLCH.

Ao trocar apenas `theme.accent`, o tom auxiliar usado nos estados e destaques é calculado automaticamente. Você ainda pode defini-lo manualmente com `theme.accentStrong`.

## Recursos opcionais

Controle o enquadramento da foto principal com `hero.imagePosition`, usando valores como `center 35%` ou `right center`.

Para incluir uma galeria entre serviços e avaliações, adicione ao `site.config.mjs`:

```js
gallery: {
  label: "Dentro da casa",
  title: "Experiências que contam a história.",
  items: [
    {
      image: "/assets/ambiente.jpg",
      alt: "Descrição objetiva da imagem",
      caption: "Ambiente",
    },
  ],
},
```

Inclua também um link para `#momentos` em `navigation` se quiser destacar a seção no menu.

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
- Remova todo conteúdo marcado como fictício na demonstração antes de publicar.
- Revise todos os metadados e URLs antes do deploy.
- Troque o domínio `.example` usado no `canonical` pela URL final do projeto.
- Teste a página em 360 px, 768 px e desktop, além de navegação por teclado.
- Rode `npm run check` depois de `npm run build`.

## Deploy

`vercel.json` já aponta para `dist/`. Em outras plataformas, publique essa mesma pasta como site estático.
