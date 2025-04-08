# Yeon.Cheol shared 컴포넌트 🍳

공통 디자인 컴포넌트 리포지토리입니다.
<br>
<br>

## 🍳Getting Started

- [node](https://nodejs.org/ko/download) 설치
- [pnpm](https://pnpm.io/installation) 설치
- node module 설치

```command
pnpm install
```

- 패키지 빌드

```command
pnpm build
```

## 🍳 프로젝트 기본 정보

### 🍳 STACKS

---

![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078d7?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![IntelliJ IDEA](https://img.shields.io/badge/IntelliJ_IDEA-%23000000?style=for-the-badge&logo=intellij-idea&logoColor=white)
![HTML](https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white)
![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white)
![NextJs](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white)
![Node JS](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=whit)
![Bash](https://img.shields.io/badge/BASH-F15A24?style=for-the-badge&logo=Zsh&logoColor=white)
<br>
<br>

### 🍳 Coding Convention

| 항목                    | 링크                                                                               |
| ----------------------- | ---------------------------------------------------------------------------------- |
| **Eslint Rule**         | [packages/eslint-config/package.json](packages/eslint-config/package.json)         |
| **Prettier Formatter**  | [.vscode/settings.json](.vscode/settings.json)                                     |
| **Typescript Compiler** | [packages/typescript-config/package.json](packages/typescript-config/package.json) |

<br>
<br>

### 🍳 프로젝트 구조

---

```
📦 packages
 ┣ 📂 eslint-config
 ┣ 📂 typescript-config
 ┣ 📂 ui
 ┃ ┃ 📂 src
 ┃ ┗ 📜 package.json
 ┗ 📂typescript-config
 📦 apps/docs
 ┃ 📂 .stories
 ┗ 📂 .storybook
```

### 🍳 프로젝트 실행

```command
pnpm dev
```

### 🍳 패키지 배포

패키지 버전 변경

```command
pnpm package-version
```

패키지 배포

```command
pnpm release
```

### 🍳 utils

#### eslint

```command
pnpm lint
```

#### prettier

```command
pnpm prettier
```

#### typescript

```command
pnpm type-check
```

## 🍳 Git Commit Naming

---

```
  (서비스명) 동사(Add, Remove, Fix, Modify, Improve, Simplify, Refactor, Merge, Move) 내용
  [JIRA-KEY]

  # ex
  (services) Add MyComponent
  [ALBAMON-1234]
```
