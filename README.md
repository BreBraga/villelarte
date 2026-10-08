# Villelarte Produções

Landing page e link da bio da Villelarte Produções, escola livre de artes em Nova Iguaçu/RJ.
Feito em React + TypeScript (Vite), seguindo o design system **Palco Afetivo**.

## Páginas

| Caminho | O que é |
| --- | --- |
| `/` | Landing page: cursos, trajetória, Espaço Cultural, Cia Villelarte, equipe e contato |
| `/bio/` | Link da bio para o Instagram: ingressos, canais de atendimento, cursos, espetáculos e o espaço |

As abas da bio podem ser abertas direto pelo endereço: `/bio/#cursos`, `/bio/#espetaculos`, `/bio/#espaco`.

## Rodando

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:5173
npm run build    # gera a pasta dist/ para publicar
npm run preview  # serve o build localmente
```

## Onde editar

- **Textos, contatos, cursos, espetáculos e equipe:** `src/data/content.ts`
- **Link de ingressos (Lets.events) e canais de atendimento:** `ticketsUrl` e `channels` em `src/data/content.ts`
- **Cores, fontes e medidas do design system:** `src/index.css`
- **Cortina de abertura (usada nas duas páginas):** `src/components/Curtain.tsx`
- **Imagens:** `public/assets/img/`
