const settings = {
  "name": "tailwind",
  "state": {
    "frontity": {
      "url": "http://localhost/projets/wordpress/",
      "title": "Cabinet Manager",
      "description": "Gérez votre cabinet d'avocats sur le Web 2.0"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Accueil",
              "/"
            ],
            [
              "Fonctionalités",
              "/category/features/"
            ],
            [
              "Prix",
              "/category/prices/"
            ],
            [
              "Temoignages",
              "/tag/temoignages/"
            ],
            [
              "A prôpos",
              "/a-propos/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://localhost/projets/wordpress/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
