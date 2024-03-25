"use client";
import React  from "react";

function Stages () {

    return (
    <section className="text-white" id="stages">
        <div>
            <br />
            <br />
             
            <div class="flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white mb-4">Stages</h1>
        </div>
        
        <br />
        <br />
        <p className="text-base lg:text-lg">Dans le cadre de mon bts en services informatiques aux organisations, et en spécialité &quot;solutions logicielles et applications
            métier&quot;, je devais réaliser un stage de 10 semaines. J&apos;ai donc décidé de postuler chez CALX Consulting qui est un cabinet saoudien
            de conseil en management situé à Riyad, Londres et Casablance. L&apos;entreprise CALX, offre des services de conseil
            de classe mondiale pour aider les organisations à tirer parti des opportunités de transformations
            et à résoudre leurs défis les plus difficiles. Leur produits apportent une expertise fonctionnelle
            appronfondie pour pourmettre aux organisations d&apos;atteindre de nouveaux sommets.     
        </p>
        <br />
        <a className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600" href="https://calx.sa/">Site web de CALX</a>
       <br />
       <br />
       <h2 className="text-xl font-bold text-white my-2">Premier stage</h2>

       <br />
        <p className="text-base lg:text-lg">Les 5 premières semaines de stages je les ai effectués en distance puisque les activités de l'entreprise le permettait, nous communiquions
            à l'aide de l'application Microsoft Teams. Je pouvais accéder au travail grâce à Git qui nous permettait de partager le travaille effectuer. 
            </p>
            <br />
            <h3 className="text-xl font-bold text-white my-2">Ma mission</h3>
            <br />
            <p className="text-base lg:text-lg">Il m'a été confié le développement d'une application, dont le but était de créer un générateur de signature.
                Pour ce premier stage on m'a confié la partie front-end. Pour réaliser cette tâche j'ai utilisé du React json pour construire l'interface. 
                J'ai aussi utilisé Tailwind pour stylisé les composants pour un meilleur rendu visuel. 
            </p>
            <br />
            <img src="/images/calxsignature.png" alt="calxsignature" />
            <br />
            <h2 className="text-xl font-bold text-white my-2">Deuxième stage </h2>
            <br />
        <p className="text-base lg:text-lg"> Pour les 5 dernières semaines de stages. Je me suis rendu directement sur place à 
            Riyad pour effectuer mon deuxième stage.
            </p>
            <br />
            <h3 className="text-xl font-bold text-white my-2">Ma mission</h3>
            <br />
            <p className="text-base lg:text-lg">Le but de ce second stage était centralisé sur le back-end. Plusieurs tâches m'ont été confiés.
                La première tâche est de générer à partir du code un document word.
                La deuxième tâche était de commencer avec un modèle word et de modifier l'intérieur à partir du code. 
                Pour continuer je devais générer un powerpoint à partir du code. Pour finir
                je devais rendre mon premier projet sur le génerateur de signature en Electronjs qui permet de développer des
                applications de bureau multiplateformes en utilisant des technologies web.
            </p>
            <br />
            <img src="/images/powerpointcalx.png" alt="powerpoint" />
            <br />
            <p className="text-base lg:text-lg">J'ai effectué ces 10 semaines de stages en anglais.</p>

        </div>

   </section> );
};
export default Stages;