# Analyse de la codebase

## Synthese executive

La codebase est une application React de type portfolio, structuree autour de composants fonctionnels dans `src/components`, avec React Bootstrap, React Router, `react-icons`, `react-pdf`, `react-tsparticles` et un composant de chat connecte a Groq.

L'ensemble reste lisible et de taille moderee, mais plusieurs zones concentrent de la dette technique :

- des donnees metier encodees directement dans le JSX ;
- des structures UI repetees manuellement ;
- un melange de styles globaux, CSS modules et styles inline ;
- un composant `Chat` trop fortement couple ;
- une gestion fragile des evenements navigateur dans la navbar ;
- une exposition de cle API cote client ;
- des fichiers ou classes inutilises qui brouillent l'architecture.

Les meilleurs gains de maintenance viendraient d'abord de l'extraction des donnees repetitives, puis de la separation du chat en couches UI, hook et service API.

## Duplications de code

### 1. Grilles d'icones dupliquees

Les composants `Techstack` et `Toolstack` ont quasiment la meme structure :

- un titre ;
- une `Row` centree ;
- une serie de `Col xs={4} md={2}` ;
- une classe CSS module `techIcons` ;
- un `title` duplique sur la colonne et sur l'icone.

Les fichiers CSS `src/components/Techstack/style.module.css` et `src/components/ToolStack/style.module.css` contiennent aussi la meme definition `.techIcons`, avec les memes bordures, ombres, marges, tailles et effet hover.

Piste de factorisation :

- creer un composant generique `IconGrid` qui recoit un titre et une liste `{ label, Icon }` ;
- garder deux tableaux de donnees distincts pour les competences et les outils ;
- mutualiser le style dans un seul module CSS partage.

Benefice :

- ajout ou suppression d'une competence sans toucher au JSX de rendu ;
- disparition du CSS duplique ;
- comportement visuel homogene entre les deux sections.

### 2. Donnees projets encodees dans `Projects.jsx`

`Projects.jsx` contient directement les cinq projets, leurs images, titres, descriptions, liens GitHub et liens demo. Chaque projet repete la structure :

- `Col md={4}`;
- `ProjectCard`;
- `imgPath`;
- `isBlog={false}`;
- `title`;
- `description`;
- `ghLink`;
- `demoLink` optionnel.

Piste de factorisation :

- extraire les projets dans un tableau `projectsData`;
- rendre les cartes avec `projectsData.map(...)`;
- utiliser une cle stable comme un `slug` au lieu de l'index.

Benefice :

- composant `Projects` plus court ;
- donnees portfolio plus faciles a maintenir ;
- possibilite de reutiliser les donnees ailleurs, par exemple pour une page detail ou un filtre.

### 3. Navigation repetee dans `Navbar.jsx`

Chaque entree de navigation repete la meme structure :

- `Nav.Item`;
- `Nav.Link as={Link}`;
- `to`;
- `onClick={() => isExpand(false)}`;
- icone avec `style={{ marginBottom: "2px" }}`;
- libelle.

Piste de factorisation :

- creer un tableau `navItems` contenant `{ to, label, Icon }`;
- mapper ce tableau dans le rendu ;
- extraire le style commun des icones dans une classe CSS ou constante locale.

Benefice :

- ajout de route plus simple ;
- reduction du risque d'oublier `onClick={() => isExpand(false)}` ;
- meilleure coherence entre route, navigation et libelles.

### 4. Sections de page repetees

Plusieurs pages utilisent la meme base visuelle :

- `Particle`;
- `Container fluid`;
- classe globale de section (`about-section`, `project-section`, `resume-section`) ;
- titre centre ;
- `Row` avec `justifyContent: "center"` et `position: "relative"`.

Cette duplication apparait notamment dans :

- `About`;
- `Skills`;
- `Projects`;
- `PDFViewerCard`;
- `Chat`.

Piste de factorisation :

- creer un composant de layout, par exemple `PageSection`;
- lui passer `className`, `title`, `children` et optionnellement l'affichage de `Particle`;
- deplacer les styles de centrage repetes dans une classe reutilisable.

Benefice :

- pages plus lisibles ;
- un seul endroit pour ajuster les espacements de page ;
- moins de styles inline.

### 5. Styles inline frequents

De nombreux styles sont definis directement dans les composants :

- tailles et paddings de titres dans `Home`, `AboutCard`, `Github`;
- espacements de colonnes dans `About`, `Home`;
- centrage de `Row` dans `Projects`, `Chat`, `PDFViewerCard`;
- largeur de boutons dans `Chat` et `PDFViewerCard`;
- marges entre boutons dans `ProjectCards`.

Piste de factorisation :

- deplacer les styles recurrents dans CSS modules quand ils appartiennent au composant ;
- deplacer les styles transverses dans des classes globales limitees ou un module partage ;
- garder les styles inline uniquement pour des valeurs vraiment dynamiques.

Benefice :

- meilleur controle responsive ;
- JSX plus lisible ;
- moins de duplication implicite.

### 6. Styles globaux et modules CSS en concurrence

La codebase utilise a la fois :

- `src/style.css` pour une grande partie du design ;
- `src/App.css`, dont une partie semble provenir du template CRA ;
- des `style.module.css` par composant ;
- des fichiers CSS modules vides ou peu utilises.

Exemples notables :

- `style.css` contient encore `.blog-card`, `.blog-card-view`, `.like-btn`, `.fork-btn`, `.resume-left`, `.resume-right`, alors que ces elements ne semblent plus correspondre a des composants actifs ;
- plusieurs dossiers de composants ont un `style.module.css` vide ou non importe ;
- `SocialIcon/style.module.css`, `About/style.module.css`, `Projects/style.module.css`, `Skills/style.module.css`, `Navbar/style.module.css`, `Particle/style.module.css`, `Pre/style.module.css`, `Github/style.module.css` existent mais ne sont pas utilises de maniere significative.

Piste de factorisation :

- definir une convention claire : styles globaux pour theme/layout general, CSS modules pour composants ;
- supprimer progressivement les classes globales inutilisees apres verification ;
- eviter les fichiers CSS modules vides.

## Problemes d'architecture

### 1. `Chat.jsx` concentre trop de responsabilites

Le composant `Chat` gere actuellement :

- l'etat du formulaire ;
- l'etat de chargement ;
- l'historique de conversation ;
- le prompt systeme complet ;
- l'appel HTTP avec `axios`;
- le choix du modele ;
- la construction du payload ;
- la gestion des erreurs ;
- le rendu du formulaire ;
- le rendu de la reponse ;
- le rendu de la modale d'historique ;
- le CTA de contact.

Cela rend le composant difficile a tester, a securiser et a faire evoluer.

Piste de refonte :

- extraire le prompt systeme dans une constante dediee, par exemple `chatPrompt.js`;
- extraire l'appel Groq dans un service `chatApi.js`;
- creer un hook `useChatConversation` pour l'etat, l'envoi et l'historique ;
- garder `Chat.jsx` comme composant d'assemblage UI.

Benefice :

- logique testable sans rendu React ;
- changement de provider API plus facile ;
- composant UI plus court ;
- meilleure separation des responsabilites.

### 2. Cle API exposee cote client

`Constants.GROQ.API_KEY` lit `process.env.REACT_APP_GROQ_API_KEY`. Dans Create React App, toute variable prefixed `REACT_APP_` est incluse dans le bundle client.

Risque :

- la cle peut etre inspectee dans le navigateur ;
- un tiers peut l'utiliser hors du site ;
- controle difficile des quotas, couts et abus.

Piste recommandee :

- faire passer l'appel par un backend ou une fonction serverless ;
- garder la cle API uniquement cote serveur ;
- exposer au front une route interne controlee, par exemple `/api/chat`.

Si aucun backend n'est disponible, au minimum :

- utiliser une cle a faible privilege ;
- appliquer des quotas provider ;
- documenter clairement que la cle n'est pas secrete une fois embarquee cote client.

### 3. Listener scroll ajoute a chaque rendu dans `Navbar.jsx`

`Navbar.jsx` appelle `window.addEventListener("scroll", scrollHandler)` directement dans le corps du composant. Cela signifie que l'ecouteur peut etre ajoute a chaque rendu sans nettoyage.

Risque :

- accumulation de listeners ;
- appels multiples a `scrollHandler`;
- comportement degrade avec le temps ;
- fuite memoire.

Piste de correction :

- deplacer l'abonnement dans un `useEffect`;
- retourner une fonction de cleanup avec `window.removeEventListener`.

### 4. Configuration des routes et documents centralisee dans `App.jsx`

`App.jsx` importe directement :

- les pages ;
- les PDFs ;
- les routes ;
- le fallback ;
- le preloader ;
- le layout global.

Ce n'est pas bloquant pour une petite application, mais la croissance rendra ce fichier de plus en plus central.

Piste de factorisation :

- extraire une configuration de routes ;
- representer les routes PDF comme donnees `{ path, title, file }`;
- conserver `App.jsx` pour l'assemblage global.

### 5. `Constants.js` peu idiomatique et partiellement inutilise

`Constants.js` expose une classe statique avec plusieurs getters :

- `URLS`;
- `NUMBERS`;
- `OPENAI`;
- `GROQ`.

Problemes :

- `NUMBERS` ne semble pas utilise ;
- `OPENAI` ne semble plus utilise ;
- `GROQ` est utilise mais expose une cle client ;
- une classe statique est moins idiomatique qu'un export d'objets constants en JavaScript moderne.

Piste de factorisation :

- remplacer par des exports nommes ;
- separer les domaines : `socialLinks`, `chatConfig`, `externalUrls`;
- supprimer les constantes inutilisees apres verification.

### 6. `Particle` configure le fond dans le composant

`Particle.jsx` contient une configuration assez volumineuse directement dans le JSX, avec styles inline et parametres `react-tsparticles`.

Piste de factorisation :

- extraire `particleOptions` dans une constante ;
- deplacer le style dans CSS ;
- rendre le composant plus declaratif.

Benefice :

- facilite les changements visuels ;
- evite de relire une grosse configuration a chaque modification du composant.

### 7. Encodage degrade dans plusieurs textes

Des caracteres semblent mal encodes dans plusieurs fichiers ou sorties :

- `Â©` dans le footer ;
- emojis rendus sous forme `ðŸ...` ;
- `HÃ©nallux` au lieu de `Hénallux`.

Risque :

- experience utilisateur degradee ;
- impression de manque de finition ;
- possible probleme d'encodage fichier ou terminal.

Piste :

- verifier que les fichiers sont en UTF-8 ;
- corriger les textes visibles ;
- eviter d'introduire des caracteres non ASCII si la chaine d'outillage les degrade.

## Pistes de factorisation prioritaires

### Priorite 1 - Faible risque, gain rapide

1. Extraire les donnees de projets.
2. Extraire les donnees de navigation.
3. Mutualiser `Techstack` et `Toolstack` via un composant `IconGrid`.
4. Supprimer ou documenter les fichiers CSS modules vides.
5. Corriger le listener scroll de `Navbar`.

Ces changements sont peu risqués car ils ne modifient pas le comportement attendu ; ils changent surtout la structure interne.

### Priorite 2 - Gain architectural

1. Decouper `Chat.jsx`.
2. Extraire le prompt systeme.
3. Extraire le service API.
4. Introduire un hook de conversation.
5. Preparer un backend ou une fonction serverless pour proteger la cle Groq.

Ces changements apportent le plus gros gain a moyen terme, mais demandent plus de verification car ils touchent au comportement utilisateur et a l'appel reseau.

### Priorite 3 - Nettoyage transversal

1. Clarifier la strategie CSS globale vs CSS modules.
2. Reduire progressivement les `!important`.
3. Deplacer les styles inline vers des classes.
4. Supprimer les classes globales inutilisees apres verification.
5. Corriger les textes mal encodes.

Ces actions ameliorent la qualite generale mais peuvent etre traitees progressivement.

## Recommandations concretes

### Structure de donnees pour les projets

Objectif : transformer `Projects.jsx` en composant de rendu.

Forme cible possible :

```js
const projects = [
  {
    slug: "notes-manager",
    title: "Notes Manager",
    image: NotesManager,
    description: "...",
    githubUrl: "...",
    demoUrl: "...",
  },
];
```

Le composant rendrait ensuite :

```jsx
{projects.map((project) => (
  <Col key={project.slug} md={4} className="project-card">
    <ProjectCard {...project} />
  </Col>
))}
```

### Composant `IconGrid`

Objectif : remplacer les deux grilles manuelles.

Interface possible :

```jsx
<IconGrid
  title={<>Professional <strong className="purple">Skillset</strong></>}
  items={techItems}
/>
```

Chaque item contiendrait au minimum :

```js
{ label: "React", Icon: DiReact }
```

### Configuration de navigation

Objectif : eviter la repetition dans `Navbar.jsx`.

Forme cible possible :

```js
const navItems = [
  { to: "/", label: "Home", Icon: AiOutlineHome },
  { to: "/projects", label: "Projects", Icon: AiOutlineFolderOpen },
];
```

### Decoupage du chat

Objectif : isoler les responsabilites.

Structure cible possible :

- `chatPrompt.js` : prompt systeme et donnees descriptives ;
- `chatApi.js` : appel HTTP au provider ;
- `useChatConversation.js` : etat, envoi, historique, chargement, erreurs ;
- `Chat.jsx` : rendu ;
- `ConversationHistoryModal.jsx` : modale d'historique.

### Layout de page

Objectif : factoriser les pages avec fond particules et section.

Interface possible :

```jsx
<PageSection className="resume-section" title={...}>
  ...
</PageSection>
```

Ce composant pourrait encapsuler :

- `Container fluid`;
- `Particle`;
- titre ;
- classe de section ;
- structure commune de contenu.

## Risques techniques

### Risque de regression CSS

La presence importante de classes globales et de `!important` signifie qu'un nettoyage CSS peut avoir des effets indirects. Les changements de style doivent etre faits par petites etapes avec verification visuelle.

### Risque sur le chat

Le chat depend d'une API externe, d'une cle d'environnement et d'un modele specifique. Toute refonte doit verifier :

- etat loading ;
- erreur reseau ;
- reponse vide ;
- historique ;
- conservation du prompt systeme ;
- focus du champ prompt apres envoi.

### Risque sur les PDFs

`PDFViewerCard` depend de `react-pdf` et du worker PDF charge depuis CDN :

```js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
```

Cela rend l'affichage PDF dependant d'un CDN externe. Une evolution possible serait de servir le worker localement ou via la configuration recommandee par la version de `react-pdf` utilisee.

## Conclusion

La codebase est fonctionnelle mais encore tres orientee "composants pages qui portent tout". La priorite n'est pas de tout rearchitecturer, mais de rendre les donnees declaratives et de separer les responsabilites les plus lourdes.

Ordre d'action recommande :

1. factoriser les listes declaratives : projets, navigation, icones ;
2. corriger le listener de scroll dans la navbar ;
3. decouper le chat ;
4. proteger l'appel API derriere un backend ou une fonction serverless ;
5. nettoyer progressivement les styles globaux et fichiers CSS inutilises.

Ces changements reduiraient fortement la duplication, rendraient les composants plus courts et prepareraient l'application a evoluer sans accumulation rapide de dette technique.
