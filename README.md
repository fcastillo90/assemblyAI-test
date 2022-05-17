# AssemblyAI assessment

[Figma](https://www.figma.com/file/fKtSrkIuahQo0gXmj4qyAr/Front-End-Assessment-(Mock-ups)?node-id=0%3A1)

## Content

- [X] React v18
- [X] Typescript
- [X] Vite
- [X] pnpm
- [X] Redux toolkit
- [X] React router
- [X] custom hooks
- [X] path aliases
- [X] testing
- [X] reusable components
- [X] styled components
- [X] 404 page
- [X] Google fonts
- [X] alphabetical sorted
- [X] responsive
- [X] form error handling

Given more time i would:

- [ ] improve testing
- [ ] SSR
- [ ] add ESLint
- [ ] add Husky

## STEPS TO RUN

1. Clone project
2. On terminal, execute `pnpm install`
3. Execute `pnpm run dev`

Execute `pnpm run test` to run unit testing

## TREE

```text
a-ai-test
├─ .gitignore
├─ README.md
├─ babel.config.js
├─ config
│  └─ tests
│     ├─ file-transformer.ts
│     └─ jest-setup.ts
├─ index.html
├─ jest.config.ts
├─ package.json
├─ pnpm-lock.yaml
├─ src
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ icon.svg
│  │  └─ logo.svg
│  ├─ components
│  │  ├─ Button
│  │  │  ├─ Button.test.tsx
│  │  │  ├─ Button.tsx
│  │  │  └─ index.ts
│  │  ├─ Card
│  │  │  ├─ Card.test.tsx
│  │  │  ├─ Card.tsx
│  │  │  └─ index.tsx
│  │  ├─ Emoji
│  │  │  ├─ Emoji.test.tsx
│  │  │  ├─ Emoji.tsx
│  │  │  └─ index.ts
│  │  ├─ Feedback
│  │  │  ├─ DisplayLabel.test.tsx
│  │  │  ├─ DisplayLabel.tsx
│  │  │  ├─ ErrorMessage.test.tsx
│  │  │  ├─ ErrorMessage.tsx
│  │  │  └─ index.ts
│  │  ├─ Header
│  │  │  ├─ LogoHeader.test.tsx
│  │  │  ├─ LogoHeader.tsx
│  │  │  └─ index.ts
│  │  ├─ Icon
│  │  │  ├─ AssemblyAILogo.test.tsx
│  │  │  ├─ AssemblyAILogo.tsx
│  │  │  └─ index.ts
│  │  ├─ Input
│  │  │  ├─ Input.test.tsx
│  │  │  ├─ Input.tsx
│  │  │  └─ index.ts
│  │  ├─ Layout
│  │  │  ├─ Layout.test.tsx
│  │  │  ├─ Layout.tsx
│  │  │  └─ index.ts
│  │  └─ index.ts
│  ├─ hooks
│  │  └─ usePageTitle.tsx
│  ├─ index.css
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ Main
│  │  │  └─ index.tsx
│  │  ├─ NoMatch
│  │  │  └─ index.tsx
│  │  ├─ Result
│  │  │  ├─ Failure.tsx
│  │  │  ├─ Success.tsx
│  │  │  └─ index.tsx
│  │  └─ index.ts
│  ├─ store
│  │  ├─ index.ts
│  │  └─ slice
│  │     └─ inputSlice.ts
│  ├─ types
│  │  └─ index.ts
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```

***enjoy!***

**Author**: Francisco Castillo González
