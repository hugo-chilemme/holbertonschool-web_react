const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',  // Ton fichier d'entrée
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Si tu utilises Babel, sinon tu peux enlever cette partie
        },
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // Le dossier où ton fichier bundle est généré
    port: 8000,  // Définir le port sur 8000
    open: true,  // Ouvrir automatiquement dans le navigateur à chaque démarrage
  },
};