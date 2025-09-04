# Projet Cloudinary Upload

Projet d'upload de fichiers vers Cloudinary avec Node.js, Express et EJS.

## Contributeurs

Coppet Dimitri, Baraton François, Vogler Wilfried, Martinez Joris

### 1. Installation des dépendances

```bash
npm install
```

### 2. Configuration Cloudinary

- Créez un compte sur [Cloudinary](https://cloudinary.com)
- Récupérez vos identifiants dans le Dashboard
- Copiez le fichier `env.example` vers `.env`
- Remplissez vos identifiants Cloudinary :

```env
CLOUDINARY_CLOUD_NAME=dujh7ntcg
CLOUDINARY_API_KEY=329944922389717
CLOUDINARY_API_SECRET=6lgeal_hf63ircTEWRh_tP4mxNg
PORT=3000
NODE_ENV=development
```

### 3. Démarrer le serveur

```bash
# Mode développement (avec nodemon)
npm run dev

# Mode production
npm start
```

### 4. Accéder à l'application

Ouvrez votre navigateur sur `http://localhost:3000`

## 📁 Structure du projet

```
cloudinary-upload-project/
├── views/
│   └── index.ejs              # Interface utilisateur
├── config/
│   └── cloudinary.js          # Configuration Cloudinary
├── services/
│   └── cloudinaryService.js    # Service pour les opérations Cloudinary
├── routes/
│   └── uploadRoutes.js         # Routes pour l'upload
├── uploads/                   # Dossier temporaire pour les uploads
├── main.js                    # Serveur principal
├── package.json               # Dépendances et scripts
├── env.example               # Exemple de variables d'environnement
├── .gitignore                # Fichiers à ignorer
└── README.md                 # Documentation
```

## 🔧 API Endpoints

- `POST /api/upload` - Upload de fichier
- `DELETE /api/delete/:public_id` - Suppression de fichier
