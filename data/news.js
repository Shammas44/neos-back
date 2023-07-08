const TAG = {
  SUPPORT: 'support',
  INVITATION: 'invitation',
  FORMATION: 'formation',
  INFORMATION: 'information',
  EMPLOI: 'emploi',
  EQUIPE: 'équipe',
  BLUEWORD: 'mots bleu'
}

const rawNews = [
  {
    title: "Nouveau projet",
    tag: [TAG.BLUEWORD],
    content: {
      greeting: "Cher(e) collaborateur(trice),",
      body: `
<p>Nous sommes ravis de vous informer du lancement d'un nouveau projet passionnant au sein de notre entreprise. Ce projet offre de nombreuses opportunités de croissance et de développement professionnel.</p>

<p>Nous souhaitons vous impliquer activement dans ce projet et vous invitons à une réunion d'introduction qui se tiendra lundi prochain à 14:00 dans la salle de réunion B640.</p>

<p>Au cours de cette réunion, nous partagerons tous les détails pertinents du projet, y compris les objectifs, les échéances et les rôles de chacun. Votre contribution et votre expertise seront essentielles pour mener ce projet à bien.</p>

<p>N'hésitez pas à poser des questions ou à partager vos idées lors de la réunion. Nous comptons sur votre engagement et votre soutien pour la réussite de ce projet.</p>
`,
      goodbye: `
Cordialement,
L'équipe de gestion de projet
`,
    }
  },
  {
    title: "Réunion d'équipe",
    tag: [TAG.EQUIPE],
    content: {
      greeting: "Cher(e) membre de l'équipe,",
      goodbye: `
Cordialement,
L'équipe de direction
`,
      body: `
<p>Nous souhaitons vous informer de notre prochaine réunion d'équipe, qui se tiendra le mardi prochain à 14:00 dans la salle de réunion B400.</p>

<p>L'objectif de cette réunion est de discuter des dernières avancées, de partager des informations importantes et de coordonner nos efforts pour atteindre nos objectifs communs.</p>  

<p>Nous vous encourageons à préparer vos mises à jour et vos questions à l'avance afin de maximiser notre temps de réunion.</p>

<p>Votre participation active est essentielle pour assurer la collaboration et la synergie au sein de notre équipe. Nous comptons sur votre présence.<p>
`,
    }
  },
  {
    title: "Rappel de réunion",
    tag: [TAG.SUPPORT],
    content: {
      greeting: "Cher(e) collaborateur(trice),",
      goodbye: `
Cordialement,
L'équipe de gestion
`,
      body: `
<p> Ceci est un rappel amical de notre réunion prévue le mardi prochain à 14:00 dans la salle de réunion B400.</p>

<p> Nous vous attendons avec impatience pour discuter des sujets importants et prendre des décisions clés. Votre présence est essentielle pour assurer le bon déroulement de la réunion et la progression de nos projets.</p>

<p>Si vous avez des questions ou des préoccupations, n'hésitez pas à nous contacter à l'avance.</p>

<p>Au plaisir de vous voir à la réunion.</p>
`,
    }
  },
  {
    title: "Rapport mensuel",
    tag: [TAG.INFORMATION],
    content: {
      greeting: "Cher(e) collaborateur(trice),",
      goodbye: `
Cordialement,
L'équipe de direction`,
      body: `
<p>Nous sommes heureux de vous présenter le rapport mensuel de notre entreprise pour le mois en cours.</p>

<p>Ce rapport contient des informations clés sur les performances de l'entreprise, les réalisations, les indicateurs de performance et les tendances. Il offre un aperçu global de nos activités et nous permet de suivre nos progrès vers nos objectifs.</p>

<p>Nous vous encourageons à prendre le temps de lire attentivement le rapport et à noter toute question ou observation que vous pourriez avoir. Nous serons ravis de discuter de ces points lors de notre prochaine réunion d'équipe.</p>

<p>Veuillez trouver ci-joint le rapport mensuel au format PDF. Si vous avez des difficultés à l'ouvrir ou si vous avez besoin d'une version imprimée, n'hésitez pas à nous en informer.</p>

<p>Nous vous remercions de votre implication continue et de votre contribution à notre succès. Votre travail a un impact significatif sur notre entreprise et nous sommes reconnaissants de votre engagement.</p>
`,
    }
  },
  {
    title: "Information importante",
    tag: [TAG.INFORMATION],
    content: {
      greeting: "Cher(e) collaborateur(trice),",
      goodbye: `
Cordialement,
L'équipe des ressources humaines
`,
      body: `
<p>Nous tenons à vous informer d'une mise à jour importante concernant nos politiques internes.</p>

<p>À partir de la semaine prochaine, une nouvelle politique de gestion des congés sera mise en place. Cette politique vise à améliorer l'organisation et l'équilibre travail-vie personnelle de nos collaborateurs.</p>

<p>Voici les principaux points à retenir :</p>

<ol>
  <li>
    Nouvelle procédure de demande de congé : Vous devrez désormais soumettre vos demandes de congé via notre nouvelle plateforme en ligne. Un guide détaillé vous sera envoyé prochainement pour vous accompagner dans cette démarche.
  </li>
  
  <li>
    Nouvelles règles de validation des congés : Les demandes de congé devront être approuvées par votre responsable direct. Veuillez prendre en compte les délais de validation et prévoir vos demandes en conséquence.
  </li>
  
  <li>
    Politique de report des congés : Nous avons mis en place une nouvelle politique de report des congés afin de faciliter la gestion des périodes chargées. Veuillez consulter le guide des ressources humaines pour plus de détails.
  </li>
</ol>

<p>
  Nous comprenons que ces changements peuvent nécessiter une période d'adaptation. Nous sommes disponibles pour répondre à toutes vos questions ou préoccupations concernant cette nouvelle politique. N'hésitez pas à contacter le service des ressources humaines pour obtenir plus d'informations.
</p>

<p>
  Nous vous remercions de votre compréhension et de votre coopération dans la mise en œuvre de cette nouvelle politique. Ces changements contribueront à améliorer notre environnement de travail et à renforcer notre culture d'entreprise.
</p>
`,
    }
  },
  {
    title: "Changement de politique interne",
    tag: [TAG.INFORMATION],
    content: {
      greeting: "Cher(e) collaborateur(trice),",
      goodbye: `
Cordialement,
L'équipe des ressources humaines
`,
      body: `
<p>
  Nous souhaitons vous informer d'un changement important de politique interne qui entrera en vigueur à partir du 1er septembre.
</p>

<p>
  À la suite d'une évaluation approfondie de nos processus et de nos besoins organisationnels, nous avons décidé de mettre en place de nouvelles directives pour améliorer l'efficacité et la collaboration au sein de notre entreprise.
</p>

<p>
  Voici les principaux points à retenir :
</p>

<ol>
  <li>
    Nouvelle politique de télétravail : Nous introduisons une politique de télétravail plus souple, qui permettra aux collaborateurs d'effectuer une partie de leur travail à distance. Des directives détaillées seront fournies dans un prochain communiqué.
  </li>
  
  <li>
    Nouvelles procédures de demande de congé : Nous avons revu nos procédures de demande de congé pour simplifier le processus et faciliter la planification. Veuillez consulter le nouveau formulaire de demande de congé disponible sur notre intranet.
  </li>
  
  <li>
    Réorganisation des équipes : Nous procéderons à une réorganisation interne pour mieux aligner les équipes sur nos objectifs stratégiques. Les responsables d'équipe vous informeront des changements spécifiques dans les prochaines semaines.
  </li>
</ol>

<p>
  Nous comprenons que ces changements peuvent susciter des questions et des préoccupations. Nous sommes disponibles pour discuter de ces nouvelles directives lors d'une réunion qui aura lieu le vendredi prochain. Nous encourageons tous les collaborateurs à y participer et à poser des questions.
</p>

<p>
  Nous sommes convaincus que ces changements contribueront à améliorer notre efficacité collective et à créer un environnement de travail plus dynamique et plus collaboratif.
</p>

<p>
  Si vous avez des questions supplémentaires, n'hésitez pas à contacter le service des ressources humaines.
</p>
`,
    }
  },
  {
    title: "Invitation à l'événement",
    tag: [TAG.INVITATION],
    content: {
      greeting: "Cher(e) collaborateur(trice),",
      goodbye: `
Cordialement,
L'équipe événementielle
`,
      body: `
<p>
  Nous sommes ravis de vous inviter à notre événement annuel de fin d'année qui se tiendra ce vendredi dans nos locaux.
</p>

<p>
  Cet événement est l'occasion idéale de célébrer les réalisations de notre entreprise au cours de l'année écoulée et de passer un moment convivial avec vos collègues. Voici les détails importants à retenir :
</p>


<ul>
  <li>
    Date : Mercredi prochain
  </li>
  <li>
    Heure : 14:00 - 17:00
  </li>
  <li>
    Lieu : Grande salle
  </li>
</ul>

<p>
  Au programme de la soirée, nous aurons des discours inspirants, des remises de prix, des animations divertissantes et bien sûr un délicieux dîner préparé par notre traiteur.
</p>

<p>
  Nous tenons à souligner que votre présence est importante pour nous, car cette soirée est l'occasion de renforcer les liens au sein de notre équipe et de célébrer ensemble nos réussites.
</p>

<p>
  Veuillez confirmer votre présence avant le vendredi prochain en répondant à cet e-mail ou en vous inscrivant sur notre plateforme d'inscription en ligne.
</p>

<p>
  Nous sommes impatients de vous retrouver lors de cet événement mémorable.
</p>
`,
    }
  },
  {
    title: "Maintenance des serveurs",
    tag: [TAG.SUPPORT],
    content: {
      greeting: "Cher(e) collaborateur(trice),",
      goodbye: `
Cordialement,
L'équipe technique
`,
      body: `
<p>
  Nous vous informons que nous aurons une période de maintenance planifiée pour nos serveurs afin d'optimiser leurs performances et d'assurer une meilleure disponibilité de nos services.
</p>

<p>
  Période de maintenance : mardi prochain 12:00 - 13:00
</p>

<p>
  Pendant cette période, certains de nos services en ligne peuvent être indisponibles ou connaître des ralentissements. Nous faisons tout notre possible pour minimiser l'impact sur votre travail, et nous vous prions de nous excuser pour les éventuels désagréments que cela pourrait causer.
</p>

<p>
  Nous vous recommandons de sauvegarder votre travail et de fermer toutes les applications liées à nos services avant le début de la maintenance. Une fois la maintenance terminée, vous pourrez reprendre vos activités normalement.
</p>

<p>
  Si vous avez des questions ou des préoccupations supplémentaires concernant cette maintenance, n'hésitez pas à contacter notre équipe de support technique.
</p>

<p>
  Nous vous remercions de votre compréhension et de votre coopération pendant cette période de maintenance.
</p>
`,
    }
  },
  {
    title: "Information sur les avantages sociaux",
    tag: [TAG.INFORMATION],
    content: {
      greeting: "Cher(e) collaborateur(trice),",
      goodbye: `
Bien cordialement,
L'équipe des ressources humaines
`,
      body: `
<p>
  Nous souhaitons vous informer des dernières mises à jour concernant les avantages sociaux offerts par notre entreprise. Nous croyons fermement en l'importance de prendre soin de nos employés et de leur offrir des avantages compétitifs pour améliorer leur bien-être au travail.
</p>

<p>
  Nous sommes ravis de vous annoncer les nouvelles améliorations apportées à nos avantages sociaux, qui incluent :
</p>

<ol>
  <li>
    Régime d'assurance santé étendu : Nous avons élargi notre couverture d'assurance santé pour inclure davantage de soins médicaux et de spécialistes.
  </li>
  
  <li>
    Programme de bien-être : Nous avons lancé un nouveau programme de bien-être qui offre des séances d'entraînement en groupe, des consultations en nutrition et des séminaires sur la santé mentale.
  </li>
  
  <li>
    Plan d'épargne-retraite : Nous avons mis en place un plan d'épargne-retraite amélioré pour vous aider à préparer votre avenir financier.
  </li>
  
  <li>
    Avantages flexibles : Nous avons introduit un système d'avantages flexibles qui vous permet de personnaliser vos avantages en fonction de vos besoins individuels.
  </li>
</ol>

<p>
  Nous vous invitons à consulter notre nouvelle brochure sur les avantages sociaux pour obtenir tous les détails sur ces améliorations et sur la manière d'en bénéficier. Si vous avez des questions supplémentaires, n'hésitez pas à contacter notre équipe des ressources humaines.
</p>

<p>
  Nous espérons que ces mises à jour vous apporteront une plus grande satisfaction et une meilleure qualité de vie au travail. Nous restons engagés à vous offrir les meilleurs avantages sociaux possibles pour soutenir votre bien-être et votre épanouissement professionnel.
</p>
`,
    }
  }
];

export default rawNews;
