# Neos Backend - REST API - Instructions de démarrage

__Installer le projet__

```bash
git clone https://github.com/Shammas44/neos-back
cd neos-back
npm i
echo "PORT=3000" > .env
echo "NODE_ENV=dev" >> .env
echo "API_NAME=api" >> .env
echo "SECRET_KEY=helloworld" >> .env
echo "DOMAIN=http://localhost:3000/" >> .env
```

- 📚 `PORT` - le port sur lequel le serveur express va écouter
- 📚 `NODE_ENV` -  `dev` ou `prod` pour le mode de lancement
- 📚 `API_NAME` - le chemin pour accéder à l'api, par défault `api`
- 📚 `SECRET_KEY` - la seed utilisé pour générer les donées
- 📚 `DOMAIN` - l'url de base de l'api (port inclus)

__Démarrer le serveur express en mode développement__

```bash
npm run dev
```

__Démarrer le serveur express en mode production__

```bash
npm run start
```

__Tester l'api__

Il est possible de tester toutes les routes de l'api dans _postman_ au moyen du fichier `neos.postman_collection.json` présent à la racine du projet.
