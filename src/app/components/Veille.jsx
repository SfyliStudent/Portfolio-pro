"use client";
import React, { useState, useEffect } from "react";
let Parser = require('rss-parser');
let parser = new Parser();

function Veille() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/api/rss')
            .then(response => response.json())
            .then(data => {
                setItems(data.items);
            })
            .catch(error => console.error('Erreur lors de la récupération des données:', error));
    }, []);
    return (
       <div>
        <br />
        <br />
        <section className="text-white" id="veille">
        <div class="flex items-center justify-center ">
          <h1 className="text-4xl font-bold text-white mb-4">Veille technologique</h1>         
          </div>
          </section> 
          <br />
          <h2 className="text-xl font-bold text-white my-2">L'intelligence artificielle</h2>
          <br />
          <h3 className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">Qu'est-ce qu'une veille technologique ?</h3>
          <br />
          <p className="text-base lg:text-lg">La veille technologique consiste à s&apos;informer de façon systématique sur les techniques les plus récentes et surtout sur leur mise à disposition commerciales.
            Ces informations peuvent concerner un produit, un composant, un procédé, ou bien l&apos;évolution d&apos;une technique utilisée au sein d&apos;une entreprise par exemple.
            La veille technologique est utilisée pour de nombreuses raisons, principalement :</p>
            <br />
       
        <ul className="list-disc pl-2">
        
        <li>Suivre les évolutions techniques</li>
        <li>Anticiper sur la concurrence : on peut ainsi rester à la pointe du marché en acquérant toutes les nouvelles technologies qui permettent de disposer d&apos;un avantage concurrentiel.</li>
        <li>Diminuer les coûts de production</li>
        <li>Augmenter la qualité des produits</li>
        <li>Identifier les meilleures pratiques</li>
        <li>Augmenter nos compétences</li>
      </ul>
      <br />
      <p>Voici les quelques outils et technique pour mener à bien sa veille technologique :</p>
      <br />
      <ul className="list-disc pl-2">
        <li>Les flux RSS</li>
        <li>Les réseaux sociaux comme Twitter et Facebook</li>
        <li>Google Alert</li>
        <li>Newsletter</li>
        <li>Les sites d&apos;actualités (pour l&apos;informatique: Developpez.net, 01net)</li>
        <li>Les sites spécialisés</li>
      </ul>
      <br />

      <h3 className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">Qu&apos;est-ce que l'intelligence artificielle ?</h3>
      <br />
      <p className="text-base lg:text-lg">L&apos;intelligence artificielle (IA) est un domaine de l&apos;informatique qui vise à créer des systèmes informatiques capables de réaliser des tâches qui nécessitent normalement l&apos;intelligence humaine, telles que la perception, le raisonnement, 
        l&apos;apprentissage et l&apos;interaction sociale.
        L&apos;IA peut être classée en plusieurs catégories, notamment l&apos;apprentissage automatique, la vision par ordinateur, le traitement du langage naturel et la robotique. 
        Les applications de l&apos;IA sont nombreuses et variées, allant des assistants virtuels et des systèmes de recommandation aux véhicules autonomes et aux robots industriels.
        L&apos;IA continue de progresser rapidement et est de plus en plus intégrée dans de nombreux aspects de notre vie quotidienne.</p>
        <br />
        <h5 className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">Historique des évènements qui ont marqué l&apos;histoire de l&apos;IA</h5>
        <ul className="list-disc pl-2 ">
        <li >1956 : La conférence de Dartmouth a jeté les bases de la recherche en intelligence artificielle, avec la participation de grands noms tels que John McCarthy, Marvin Minsky et Claude Shannon.</li>
        <li>1966 : Joseph Weizenbaum a créé le programme ELIZA, qui peut communiquer avec les utilisateurs en utilisant des phrases similaires à celles qu&apos;un psychothérapeute pourrait utiliser.</li>
        <li>1974 : Edward Shortliffe a créé le système de déduction MYCIN, utilisé pour diagnostiquer les infections sanguines bactériennes, considéré comme le premier système expert réussi.</li>
        <li>1997 : Le programme d'échecs Deep Blue d&apos;IBM a battu le champion du monde d&apos;échecs Garry Kasparov dans une série de six parties.</li>
        <li>2011 : IBM a développé Watson, un système d&apos;IA qui a battu les meilleurs joueurs de Jeopardy! lors d&apos;un concours télévisé.</li>
        <li>2012 : Les réseaux de neurones profonds ont commencé à montrer des performances révolutionnaires en vision par ordinateur, grâce à l'utilisation de grandes quantités de données d'entraînement et de puissants processeurs graphiques.</li>
        <li>2016 : AlphaGo, un programme de jeu de Go développé par DeepMind (une entreprise de Google), a battu le champion du monde de Go Lee Sedol.</li>
        <li>2018 : La détection d'objets en temps réel et la classification d'images ont atteint des performances supérieures à celles des êtres humains grâce aux réseaux de neurones convolutifs.</li>
        <li>2020 : OpenAI a publié GPT-3, un modèle de langage de traitement du langage naturel basé sur l'apprentissage profond, capable de produire des textes de haute qualité dans une grande variété de styles et de genres.</li>
      </ul>
      <br />
      <p className="text-base lg:text-lg">Tous ces événements ont marqué des avancées significatives dans le domaine de l'IA, contribuant à la progression de la recherche et du développement de technologies d'IA plus avancées.</p>
      <br />
      <h5 className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">Ma vielle technologique</h5>
    <br />
      <p className="text-base lg:text-lg">Dans le cadre de ma veille technologique, je vais utiliser un outil qui utilise les flux RSS. L&apos;outil en question est Feedly. Il permet de centraliser tous les flux RSS que vous souhaitez.</p>
      </div>
       
        
      );
}
export default Veille;