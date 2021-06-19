# Utilisation de Tailwindcss et Frontity for Wordpress avec styles personnalisés
Cette application est un projet d'exemple l'utilisation de Frontity et Tailwindcss + babel-plugin-macros

Je dois le personnaliser pour en faire un modèle de demm  rage avec un très beau Design

## Installation
`npm install --save tailwindcss babel-plugin-macros tailwind.macro@next`

## Configuration
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

## L'utiliser au sein de votre composant
```
import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import tw from "tailwind.macro";

const Button = styled("button")`
  ${tw`font-mono text-lg bg-blue-300`};
`;
```
