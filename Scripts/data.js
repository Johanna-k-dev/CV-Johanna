// Initialisation du tableau 'competences' avec les clés 'name', 'category' et 'texte'
const competences = [
    // Compétences en gestion
    {
      name: 'Gestion de projet',
      category: 'Gestion',
      texte: 'Compétence dans la gestion de projets, y compris la planification, le suivi et la gestion des ressources.'
    },
    {
      name: 'Leadership d\'équipe',
      category: 'Gestion',
      texte: 'Compétence en leadership, gestion d\'équipes et motivation des collaborateurs pour atteindre des objectifs communs.'
    },
    {
      name: 'Gestion Administrative',
      category: 'Gestion',
      texte: 'Compétence en gestion administrative, incluant la gestion des documents, des archives et des processus internes.'
    },
    {
      name: 'Suivre un budget',
      category: 'Gestion',
      texte: 'Compétence en gestion financière, suivi et contrôle des budgets pour assurer l\'équilibre financier des projets.'
    },
    {
      name: 'Suivre et organiser les formations du personnel',
      category: 'Gestion',
      texte: 'Compétence dans l\'organisation, le suivi et l\'administration des formations pour le développement du personnel.'
    },
    {
      name: 'Echanger avec les différents acteurs professionnels',
      category: 'Gestion',
      texte: 'Compétence en communication et coordination avec les divers acteurs professionnels, tels que clients, fournisseurs et partenaires.'
    },
    {
      name: 'Organiser et suivre des projets',
      category: 'Gestion',
      texte: 'Compétence dans l\'organisation et le suivi de projets, avec une gestion de l\'équipe et des délais.'
    },
    {
      name: 'Respecter les normes rédactionnelles des courriers',
      category: 'Gestion',
      texte: 'Compétence dans la rédaction de courriers professionnels en respectant les normes rédactionnelles et les protocoles internes.'
    },
    {
      name: 'Rédiger des rapports',
      category: 'Gestion',
      texte: 'Compétence dans la rédaction de rapports détaillés pour présenter les résultats d\'un projet ou d\'une activité.'
    },
    {
      name: 'Rédiger des devis et factures',
      category: 'Gestion',
      texte: 'Compétence dans la rédaction et gestion des devis, des factures et du suivi des paiements.'
    },
    {
      name: 'Prendre et organiser les rendez-vous',
      category: 'Gestion',
      texte: 'Compétence dans la gestion des plannings, prise de rendez-vous et organisation des rencontres professionnelles.'
    },
    {
      name: 'Construire des tableaux de suivi Excel complexes',
      category: 'Gestion',
      texte: 'Compétence avancée dans l\'utilisation d\'Excel pour créer des tableaux de suivi complexes avec des formules et des graphiques.'
    },
    {
      name: 'Maîtriser le pack Office',
      category: 'Gestion',
      texte: 'Compétence dans l\'utilisation des logiciels de la suite Office (Word, Excel, PowerPoint, Outlook, etc.).'
    },
    
    // Compétences Marketing Digital 
    {
      name: 'SEO (Search Engine Optimization)',
      category: 'Marketing',
      texte: 'Compétence en optimisation des moteurs de recherche pour améliorer la visibilité d\'un site web.'
    },
    {
      name: 'Publicité en ligne',
      category: 'Marketing',
      texte: 'Compétence dans la création et gestion de campagnes publicitaires en ligne sur des plateformes comme Google Ads et Facebook.'
    },
    {
      name: 'Google Ads',
      category: 'Marketing',
      texte: 'Compétence dans la création, gestion et optimisation de campagnes publicitaires sur Google Ads.'
    },
    {
      name: 'Facebook Ads',
      category: 'Marketing',
      texte: 'Compétence dans la création et gestion de campagnes publicitaires sur Facebook et Instagram via Facebook Ads.'
    },
    {
      name: 'Tunnel de vente',
      category: 'Marketing',
      texte: 'Compétence dans la conception et la gestion de tunnels de vente pour convertir des prospects en clients.'
    },
    {
      name: 'Créer et déployer une campagne publicitaire en ligne',
      category: 'Marketing',
      texte: 'Compétence dans la création, le déploiement et le suivi de campagnes publicitaires en ligne efficaces.'
    },
    {
      name: 'Créer des campagnes d\'emailing',
      category: 'Marketing',
      texte: 'Compétence dans la création, l\'envoi et le suivi de campagnes d\'emailing pour la prospection et la fidélisation des clients.'
    },
    {
      name: 'Communication marketing',
      category: 'Marketing',
      texte: 'Compétence dans la création de stratégies de communication marketing adaptées à différents canaux numériques.'
    },
    {
      name: 'Prospecter de futurs clients',
      category: 'Marketing',
      texte: 'Compétence dans la prospection et l\'acquisition de nouveaux clients via des techniques de marketing digital.'
    },
    {
      name: 'Stratégie marketing réseaux sociaux',
      category: 'Marketing',
      texte: 'Compétence dans la définition et l\'exécution de stratégies marketing sur les réseaux sociaux pour augmenter la visibilité et l\'engagement.'
    },
  
    // Compétences en développement web
    {
      name: 'Réaliser un audit digital',
      category: 'Développement Web',
      texte: 'Compétence dans la réalisation d\'audits digitaux pour évaluer les performances et l\'optimisation des sites web.'
    },
    {
      name: 'Créer et utiliser une maquette sur Figma',
      category: 'Développement Web',
      texte: 'Compétence dans l\'utilisation de Figma pour concevoir des maquettes et prototypes interactifs de sites web.'
    },
    {
      name: 'Git/Github gestion des versions d\'un site',
      category: 'Développement Web',
      texte: 'Compétence dans l\'utilisation de Git et GitHub pour la gestion des versions et le travail collaboratif sur des projets web.'
    },
    {
      name: 'Mettre en place l\'environnement de développement',
      category: 'Développement Web',
      texte: 'Compétence dans la configuration de l\'environnement de développement pour coder, tester et déployer des sites web.'
    },
    {
      name: 'Programmer un site statique avec HTML5 et CSS3',
      category: 'Développement Web',
      texte: 'Compétence dans la programmation de sites web statiques en utilisant HTML5 et CSS3.'
    },
    {
      name: 'Dynamiser un site avec JavaScript',
      category: 'Développement Web',
      texte: 'Compétence dans l\'utilisation de JavaScript pour rendre les sites web interactifs et dynamiques.'
    },
    {
      name: 'Améliorer le trafic organique d\'un site avec le SEO',
      category: 'Développement Web',
      texte: 'Compétence dans l\'optimisation SEO d\'un site pour améliorer son trafic organique sur les moteurs de recherche.'
    },
    {
      name: 'Gestion de projets avec la méthode Agile et Scrum',
      category: 'Développement Web',
      texte: 'Compétence dans la gestion de projets web en utilisant les méthodologies Agile et Scrum pour favoriser la collaboration et la flexibilité.'
    },
    {
      name: 'Mettre en place un système de veille informatique automatisé',
      category: 'Développement Web',
      texte: 'Compétence dans la mise en place d\'un système automatisé pour suivre les tendances technologiques et les mises à jour dans le domaine informatique.'
    }
  ];
  
  // Afficher le tableau 'competences' dans la console
  console.log(competences);
  