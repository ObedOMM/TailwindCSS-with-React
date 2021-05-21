# Utilisation de Tailwindcss et Frontity
Cette application est un projet d'exemple l'utilisation de Frontity et Tailwindcss + babel-plugin-macros 

## Installation
`npm install --save tailwindcss babel-plugin-macros tailwind.macro@next`

## Config
`npx tailwindcss init --full` Ici vous incluez vos nouveles classes ou modifiez une.

## Babel
Créer le fichier : babel-plugin-macros.config.js avec le contenu suivant:

```
module.exports = {
  tailwind: {
    config: "./tailwind.config.js",
    format: "auto",
  },
};
```

## Use in your component
```
import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import tw from "tailwind.macro";

const Button = styled("button")`
  ${tw`font-mono text-lg bg-blue-300`};
`;
```
