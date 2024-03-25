const express = require('express');
const Parser = require('rss-parser');
const parser = new Parser();
const app = express();
const PORT = 3001; // Assurez-vous que cela ne conflit pas avec votre port client

app.get('/api/rss', async (req, res) => {
    try {
        const feed = await parser.parseURL('https://rss.app/feeds/LjOITLJOvkgWHaqd.xml');
        res.json(feed);
    } catch (error) {
        console.error('Erreur lors de la récupération du flux RSS:', error);
        res.status(500).json({ message: 'Erreur lors de la récupération du flux RSS' });
    }
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
