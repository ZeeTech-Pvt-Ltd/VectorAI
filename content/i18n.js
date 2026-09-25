// Geo language/currency configuration for the landing page.
//
// Language by country (all other countries default to UK English):
//   GB IE AU SG US CA -> English, DE CH -> German, FR -> French, NL -> Dutch,
//   SE -> Swedish, NO -> Norwegian, DK -> Danish, FI -> Finnish, JP -> Japanese.
//
// Currency symbols follow the visitor's country; the default is £.

export const LANG_BY_COUNTRY = {
  GB: "en",
  IE: "en",
  AU: "en",
  SG: "en",
  US: "en",
  CA: "en",
  DE: "de",
  CH: "de",
  FR: "fr",
  NL: "nl",
  SE: "sv",
  NO: "no",
  DK: "da",
  FI: "fi",
  JP: "ja",
};

export function langForCountry(cc) {
  return LANG_BY_COUNTRY[cc] || "en";
}

// Translation dictionaries keyed by the exact English text node content.
// The brand "Gully Bondstead" stays as-is in every language.
export const T = {
  en: {},

  de: {
    "NOTE: Only today: Simplified automatic registration with Gully Bondstead. Hurry up! There are only":
      "HINWEIS: Nur heute: Vereinfachte automatische Registrierung bei Gully Bondstead. Beeilen Sie sich! Es sind nur noch",
    "Tired of constantly tightening your belt at the end of the month?":
      "Haben Sie es satt, am Monatsende ständig den Gürtel enger zu schnallen?",
    "Automated Gully Bondstead": "Automatisiertes Gully Bondstead",
    "Gully Bondstead multiplies your savings in record time.":
      "Gully Bondstead vervielfacht Ihre Ersparnisse in Rekordzeit.",
    "per week stable income": "stabiles Einkommen pro Woche",
    "our customers have already earned thanks to the powerful algorithm of Gully Bondstead.":
      "haben unsere Kunden dank des leistungsstarken Algorithmus von Gully Bondstead bereits verdient.",
    "SIGN UP NOW, Gully Bondstead WILL DO THE REST FOR YOU!":
      "JETZT ANMELDEN, Gully Bondstead ERLEDIGT DEN REST FÜR SIE!",
    "Verify your phone number": "Telefonnummer bestätigen",
    "We sent a code to your phone": "Wir haben Ihnen einen Code gesendet",
    "Confirm code": "Code bestätigen",
    "Resend code": "Code erneut senden",
    "Edit number": "Nummer bearbeiten",
    Join: "Beitreten",
    "The account is being created": "Das Konto wird erstellt",
    "Don’t forget to answer the manager’s call!":
      "Vergessen Sie nicht, den Anruf des Managers anzunehmen!",
    "You don’t need a high IQ to become a successful investor.":
      "Man braucht keinen hohen IQ, um ein erfolgreicher Investor zu werden.",
    "Gully Bondstead does everything": "Gully Bondstead erledigt alles",
    "for you!": "für Sie!",
    "24/7 transactions — even while you sleep.":
      "Transaktionen rund um die Uhr — sogar während Sie schlafen.",
    "By constantly monitoring the market, Gully Bondstead never misses an opportunity for high profits. You don’t have to get distracted or make decisions at inconvenient times.":
      "Durch die ständige Marktüberwachung verpasst Gully Bondstead keine Gelegenheit für hohe Gewinne. Sie müssen sich nicht ablenken lassen oder zu ungünstigen Zeiten Entscheidungen treffen.",
    "An assistant that easily adapts to your needs.":
      "Ein Assistent, der sich leicht an Ihre Bedürfnisse anpasst.",
    "The settings of Gully Bondstead can be tailored to your individual goals. You can use the default configuration or set your own strategies to optimize performance.":
      "Die Einstellungen von Gully Bondstead lassen sich an Ihre individuellen Ziele anpassen. Sie können die Standardkonfiguration nutzen oder eigene Strategien festlegen, um die Leistung zu optimieren.",
    "Elimination of human errors and risks.":
      "Ausschaltung menschlicher Fehler und Risiken.",
    "Market fluctuations don’t confuse Gully Bondstead. The risk is minimal. Gully Bondstead makes smart decisions for every transaction and eliminates the human factor.":
      "Marktschwankungen bringen Gully Bondstead nicht aus der Ruhe. Das Risiko ist minimal. Gully Bondstead trifft bei jeder Transaktion kluge Entscheidungen und schaltet den menschlichen Faktor aus.",
    "High transaction speed.": "Hohe Transaktionsgeschwindigkeit.",
    "With Gully Bondstead, you can execute up to 120 transactions per day — 90% of which are completed within three days. The ability to process multiple orders simultaneously makes Gully Bondstead unique.":
      "Mit Gully Bondstead können Sie bis zu 120 Transaktionen pro Tag ausführen — 90 % davon werden innerhalb von drei Tagen abgeschlossen. Die Fähigkeit, mehrere Aufträge gleichzeitig zu verarbeiten, macht Gully Bondstead einzigartig.",
    "With my many years of business experience, I can say: It is impossible for an ordinary person to multiply their wealth a hundredfold in just a few years—except with cryptocurrencies. Even an experienced trader needs a reliable assistant like Gully Bondstead...":
      "Mit meiner langjährigen Geschäftserfahrung kann ich sagen: Für einen normalen Menschen ist es unmöglich, sein Vermögen in nur wenigen Jahren zu verhundertfachen — außer mit Kryptowährungen. Selbst ein erfahrener Trader braucht einen zuverlässigen Assistenten wie Gully Bondstead...",
    "Excerpt from Michael Richard Lynch's speech on business opportunities during the 2025 crisis":
      "Auszug aus der Rede von Michael Richard Lynch über Geschäftschancen während der Krise 2025",
    "Gully Bondstead helped a billionaire": "Gully Bondstead half einem Milliardär",
    "save his company during the crisis":
      "sein Unternehmen während der Krise zu retten",
    "Gully Bondstead helped a billionaire save his company during the crisis! Michael Richard Lynch discovered the secrets of the riskiest and most profitable business strategies during the pandemic.":
      "Gully Bondstead half einem Milliardär, sein Unternehmen während der Krise zu retten! Michael Richard Lynch entdeckte während der Pandemie die Geheimnisse der riskantesten und profitabelsten Geschäftsstrategien.",
    "Branson was on the verge of mortgaging his Caribbean home to save his airline.":
      "Branson stand kurz davor, sein Haus in der Karibik zu verpfänden, um seine Fluggesellschaft zu retten.",
    "Michael Richard Lynch": "Michael Richard Lynch",
    "I didn’t have time to monitor the markets myself and execute transactions manually. I trusted the expertise of Gully Bondstead—recommended by Elon Musk. Elon knows better than anyone which tools can automate business processes. Today, I manage hundreds of processes affected by the pandemic!":
      "Ich hatte keine Zeit, die Märkte selbst zu beobachten und Transaktionen manuell auszuführen. Ich vertraute der Expertise von Gully Bondstead — empfohlen von Elon Musk. Elon weiß besser als jeder andere, welche Werkzeuge Geschäftsprozesse automatisieren können. Heute verwalte ich Hunderte von Prozessen, die von der Pandemie betroffen sind!",
    "They made it — and you can also build a fortune":
      "Sie haben es geschafft — und auch Sie können ein Vermögen aufbauen",
    "for a carefree life!": "für ein sorgenfreies Leben!",
    "\"I didn’t have time to monitor the markets myself and execute transactions manually. I trusted the expertise of Gully Bondstead—recommended by Elon Musk. Elon knows better than anyone which tools can automate business processes. Today, I manage hundreds of processes affected by the pandemic!\"":
      "\"Ich hatte keine Zeit, die Märkte selbst zu beobachten und Transaktionen manuell auszuführen. Ich vertraute der Expertise von Gully Bondstead — empfohlen von Elon Musk. Elon weiß besser als jeder andere, welche Werkzeuge Geschäftsprozesse automatisieren können. Heute verwalte ich Hunderte von Prozessen, die von der Pandemie betroffen sind!\"",
    "Average income:": "Durchschnittliches Einkommen:",
    "By studying the system algorithms, I learned to optimize my strategies and integrate them into Gully Bondstead to create more personal opportunities.":
      "Durch das Studium der Systemalgorithmen habe ich gelernt, meine Strategien zu optimieren und in Gully Bondstead zu integrieren, um mir persönlichere Chancen zu schaffen.",
    "All I had to do was track the statistics and watch Gully Bondstead execute the transactions perfectly!":
      "Ich musste nur die Statistiken verfolgen und zusehen, wie Gully Bondstead die Transaktionen perfekt ausführt!",
    "Register now and stop worrying about money!":
      "Registrieren Sie sich jetzt und hören Sie auf, sich um Geld zu sorgen!",
    "Access the platform. Choose your currency and activate auto mode.":
      "Greifen Sie auf die Plattform zu. Wählen Sie Ihre Währung und aktivieren Sie den Automatikmodus.",
    "Gully Bondstead independently processes trading signals and executes the most profitable transactions without your intervention.":
      "Gully Bondstead verarbeitet Handelssignale selbstständig und führt die profitabelsten Transaktionen ohne Ihr Zutun aus.",
    "Keep an eye on the statistics, win without risk, and without effort.":
      "Behalten Sie die Statistiken im Auge, gewinnen Sie ohne Risiko und ohne Mühe.",
    "Frequently Asked Questions": "Häufig gestellte Fragen",
    "Can Gully Bondstead miss a signal?":
      "Kann Gully Bondstead ein Signal verpassen?",
    "No. The advantage of Gully Bondstead lies in its fast response time. The program reacts immediately and precisely. We guarantee that no signal will be missed.":
      "Nein. Der Vorteil von Gully Bondstead liegt in seiner schnellen Reaktionszeit. Das Programm reagiert sofort und präzise. Wir garantieren, dass kein Signal verpasst wird.",
    "How many transactions can Gully Bondstead execute compared to manual trading?":
      "Wie viele Transaktionen kann Gully Bondstead im Vergleich zum manuellen Handel ausführen?",
    "Gully Bondstead can process significantly more transactions than manual trading, thanks to process automation. This allows us to handle larger volumes of data than humans and respond quickly to market fluctuations.":
      "Dank der Prozessautomatisierung kann Gully Bondstead deutlich mehr Transaktionen verarbeiten als der manuelle Handel. Dadurch können wir größere Datenmengen bewältigen als Menschen und schnell auf Marktschwankungen reagieren.",
    "Will Gully Bondstead use my personal data?":
      "Wird Gully Bondstead meine persönlichen Daten verwenden?",
    "Gully Bondstead uses personal data solely to ensure the functionality of the platform. We respect your privacy and take measures to protect your data.":
      "Gully Bondstead verwendet persönliche Daten ausschließlich, um die Funktionalität der Plattform zu gewährleisten. Wir respektieren Ihre Privatsphäre und ergreifen Maßnahmen zum Schutz Ihrer Daten.",
    "Is Gully Bondstead the same as mining?":
      "Ist Gully Bondstead dasselbe wie Mining?",
    "No, Gully Bondstead is a trading bot that automates cryptocurrency trading. Mining, on the other hand, is the process of creating a new block in the blockchain, for which cryptocurrencies are received as a reward.":
      "Nein, Gully Bondstead ist ein Trading-Bot, der den Handel mit Kryptowährungen automatisiert. Mining hingegen ist der Prozess der Erstellung eines neuen Blocks in der Blockchain, für den Kryptowährungen als Belohnung erhalten werden.",
    "James Smith, 69": "Hans Müller, 69",
    "William Johnson, 47": "Klaus Schneider, 47",
    "George Brown, 55": "Georg Weber, 55",
  },

  fr: {
    "NOTE: Only today: Simplified automatic registration with Gully Bondstead. Hurry up! There are only":
      "NOTE : Aujourd'hui seulement : inscription automatique simplifiée à Gully Bondstead. Dépêchez-vous ! Il ne reste que",
    "Tired of constantly tightening your belt at the end of the month?":
      "Fatigué de serrer la ceinture à la fin de chaque mois ?",
    "Automated Gully Bondstead": "Gully Bondstead automatisé",
    "Gully Bondstead multiplies your savings in record time.":
      "Gully Bondstead multiplie votre épargne en un temps record.",
    "per week stable income": "de revenu stable par semaine",
    "our customers have already earned thanks to the powerful algorithm of Gully Bondstead.":
      "ont déjà été gagnés par nos clients grâce au puissant algorithme de Gully Bondstead.",
    "SIGN UP NOW, Gully Bondstead WILL DO THE REST FOR YOU!":
      "INSCRIVEZ-VOUS MAINTENANT, Gully Bondstead S'OCCUPE DU RESTE POUR VOUS !",
    "Verify your phone number": "Vérifiez votre numéro",
    "We sent a code to your phone": "Nous vous avons envoyé un code",
    "Confirm code": "Confirmer le code",
    "Resend code": "Renvoyer le code",
    "Edit number": "Modifier le numéro",
    Join: "Rejoindre",
    "The account is being created": "Le compte est en cours de création",
    "Don’t forget to answer the manager’s call!":
      "N'oubliez pas de répondre à l'appel du gestionnaire !",
    "You don’t need a high IQ to become a successful investor.":
      "Pas besoin d'un QI élevé pour devenir un investisseur prospère.",
    "Gully Bondstead does everything": "Gully Bondstead s'occupe de tout",
    "for you!": "pour vous !",
    "24/7 transactions — even while you sleep.":
      "Transactions 24h/24 et 7j/7 — même pendant que vous dormez.",
    "By constantly monitoring the market, Gully Bondstead never misses an opportunity for high profits. You don’t have to get distracted or make decisions at inconvenient times.":
      "En surveillant constamment le marché, Gully Bondstead ne manque jamais une opportunité de gros profits. Vous n'avez pas à vous laisser distraire ni à prendre des décisions à des moments inopportuns.",
    "An assistant that easily adapts to your needs.":
      "Un assistant qui s'adapte facilement à vos besoins.",
    "The settings of Gully Bondstead can be tailored to your individual goals. You can use the default configuration or set your own strategies to optimize performance.":
      "Les réglages de Gully Bondstead peuvent être adaptés à vos objectifs personnels. Vous pouvez utiliser la configuration par défaut ou définir vos propres stratégies pour optimiser les performances.",
    "Elimination of human errors and risks.":
      "Élimination des erreurs humaines et des risques.",
    "Market fluctuations don’t confuse Gully Bondstead. The risk is minimal. Gully Bondstead makes smart decisions for every transaction and eliminates the human factor.":
      "Les fluctuations du marché ne déroutent pas Gully Bondstead. Le risque est minime. Gully Bondstead prend des décisions intelligentes pour chaque transaction et élimine le facteur humain.",
    "High transaction speed.": "Grande vitesse de transaction.",
    "With Gully Bondstead, you can execute up to 120 transactions per day — 90% of which are completed within three days. The ability to process multiple orders simultaneously makes Gully Bondstead unique.":
      "Avec Gully Bondstead, vous pouvez exécuter jusqu'à 120 transactions par jour — dont 90 % sont conclues en trois jours. La capacité de traiter plusieurs ordres simultanément rend Gully Bondstead unique.",
    "With my many years of business experience, I can say: It is impossible for an ordinary person to multiply their wealth a hundredfold in just a few years—except with cryptocurrencies. Even an experienced trader needs a reliable assistant like Gully Bondstead...":
      "Fort de mes nombreuses années d'expérience en affaires, je peux dire : il est impossible pour une personne ordinaire de multiplier sa fortune par cent en quelques années — sauf avec les cryptomonnaies. Même un trader expérimenté a besoin d'un assistant fiable comme Gully Bondstead...",
    "Excerpt from Michael Richard Lynch's speech on business opportunities during the 2025 crisis":
      "Extrait du discours de Michael Richard Lynch sur les opportunités commerciales pendant la crise de 2025",
    "Gully Bondstead helped a billionaire": "Gully Bondstead a aidé un milliardaire",
    "save his company during the crisis":
      "à sauver son entreprise pendant la crise",
    "Gully Bondstead helped a billionaire save his company during the crisis! Michael Richard Lynch discovered the secrets of the riskiest and most profitable business strategies during the pandemic.":
      "Gully Bondstead a aidé un milliardaire à sauver son entreprise pendant la crise ! Michael Richard Lynch a découvert pendant la pandémie les secrets des stratégies commerciales les plus risquées et les plus rentables.",
    "Branson was on the verge of mortgaging his Caribbean home to save his airline.":
      "Branson était sur le point d'hypothéquer sa maison des Caraïbes pour sauver sa compagnie aérienne.",
    "Michael Richard Lynch": "Michael Richard Lynch",
    "I didn’t have time to monitor the markets myself and execute transactions manually. I trusted the expertise of Gully Bondstead—recommended by Elon Musk. Elon knows better than anyone which tools can automate business processes. Today, I manage hundreds of processes affected by the pandemic!":
      "Je n'avais pas le temps de surveiller les marchés moi-même et d'exécuter les transactions manuellement. J'ai fait confiance à l'expertise de Gully Bondstead — recommandé par Elon Musk. Elon sait mieux que personne quels outils peuvent automatiser les processus métier. Aujourd'hui, je gère des centaines de processus touchés par la pandémie !",
    "They made it — and you can also build a fortune":
      "Ils l'ont fait — et vous pouvez aussi bâtir une fortune",
    "for a carefree life!": "pour une vie sans soucis !",
    "\"I didn’t have time to monitor the markets myself and execute transactions manually. I trusted the expertise of Gully Bondstead—recommended by Elon Musk. Elon knows better than anyone which tools can automate business processes. Today, I manage hundreds of processes affected by the pandemic!\"":
      "\"Je n'avais pas le temps de surveiller les marchés moi-même et d'exécuter les transactions manuellement. J'ai fait confiance à l'expertise de Gully Bondstead — recommandé par Elon Musk. Elon sait mieux que personne quels outils peuvent automatiser les processus métier. Aujourd'hui, je gère des centaines de processus touchés par la pandémie !\"",
    "Average income:": "Revenu moyen :",
    "By studying the system algorithms, I learned to optimize my strategies and integrate them into Gully Bondstead to create more personal opportunities.":
      "En étudiant les algorithmes du système, j'ai appris à optimiser mes stratégies et à les intégrer à Gully Bondstead pour créer davantage d'opportunités personnelles.",
    "All I had to do was track the statistics and watch Gully Bondstead execute the transactions perfectly!":
      "Il me suffisait de suivre les statistiques et de regarder Gully Bondstead exécuter parfaitement les transactions !",
    "Register now and stop worrying about money!":
      "Inscrivez-vous maintenant et cessez de vous inquiéter pour l'argent !",
    "Access the platform. Choose your currency and activate auto mode.":
      "Accédez à la plateforme. Choisissez votre devise et activez le mode automatique.",
    "Gully Bondstead independently processes trading signals and executes the most profitable transactions without your intervention.":
      "Gully Bondstead traite les signaux de trading de manière autonome et exécute les transactions les plus rentables sans votre intervention.",
    "Keep an eye on the statistics, win without risk, and without effort.":
      "Gardez un œil sur les statistiques, gagnez sans risque et sans effort.",
    "Frequently Asked Questions": "Questions fréquemment posées",
    "Can Gully Bondstead miss a signal?":
      "Gully Bondstead peut-il manquer un signal ?",
    "No. The advantage of Gully Bondstead lies in its fast response time. The program reacts immediately and precisely. We guarantee that no signal will be missed.":
      "Non. L'avantage de Gully Bondstead réside dans son temps de réponse rapide. Le programme réagit immédiatement et avec précision. Nous garantissons qu'aucun signal ne sera manqué.",
    "How many transactions can Gully Bondstead execute compared to manual trading?":
      "Combien de transactions Gully Bondstead peut-il exécuter par rapport au trading manuel ?",
    "Gully Bondstead can process significantly more transactions than manual trading, thanks to process automation. This allows us to handle larger volumes of data than humans and respond quickly to market fluctuations.":
      "Gully Bondstead peut traiter nettement plus de transactions que le trading manuel grâce à l'automatisation des processus. Cela nous permet de gérer de plus grands volumes de données que les humains et de réagir rapidement aux fluctuations du marché.",
    "Will Gully Bondstead use my personal data?":
      "Gully Bondstead utilisera-t-il mes données personnelles ?",
    "Gully Bondstead uses personal data solely to ensure the functionality of the platform. We respect your privacy and take measures to protect your data.":
      "Gully Bondstead utilise les données personnelles uniquement pour assurer le fonctionnement de la plateforme. Nous respectons votre vie privée et prenons des mesures pour protéger vos données.",
    "Is Gully Bondstead the same as mining?":
      "Gully Bondstead est-il la même chose que le minage ?",
    "No, Gully Bondstead is a trading bot that automates cryptocurrency trading. Mining, on the other hand, is the process of creating a new block in the blockchain, for which cryptocurrencies are received as a reward.":
      "Non, Gully Bondstead est un robot de trading qui automatise le trading de cryptomonnaies. Le minage, en revanche, est le processus de création d'un nouveau bloc dans la blockchain, pour lequel des cryptomonnaies sont reçues en récompense.",
    "James Smith, 69": "Jean Dupont, 69",
    "William Johnson, 47": "Pierre Martin, 47",
    "George Brown, 55": "Michel Bernard, 55",
  },

  nl: {
    "NOTE: Only today: Simplified automatic registration with Gully Bondstead. Hurry up! There are only":
      "LET OP: Alleen vandaag: vereenvoudigde automatische registratie bij Gully Bondstead. Wees er snel bij! Er zijn nog maar",
    "Tired of constantly tightening your belt at the end of the month?":
      "Moe van het voortdurend op de kleintjes letten aan het einde van de maand?",
    "Automated Gully Bondstead": "Geautomatiseerde Gully Bondstead",
    "Gully Bondstead multiplies your savings in record time.":
      "Gully Bondstead vermenigvuldigt uw spaargeld in recordtijd.",
    "per week stable income": "stabiel inkomen per week",
    "our customers have already earned thanks to the powerful algorithm of Gully Bondstead.":
      "hebben onze klanten al verdiend dankzij het krachtige algoritme van Gully Bondstead.",
    "SIGN UP NOW, Gully Bondstead WILL DO THE REST FOR YOU!":
      "MELD U NU AAN, Gully Bondstead DOET DE REST VOOR U!",
    "Verify your phone number": "Verifieer uw telefoonnummer",
    "We sent a code to your phone": "We hebben een code naar uw telefoon gestuurd",
    "Confirm code": "Code bevestigen",
    "Resend code": "Code opnieuw verzenden",
    "Edit number": "Nummer bewerken",
    Join: "Doe mee",
    "The account is being created": "Het account wordt aangemaakt",
    "Don’t forget to answer the manager’s call!":
      "Vergeet niet de oproep van de manager te beantwoorden!",
    "You don’t need a high IQ to become a successful investor.":
      "U hebt geen hoog IQ nodig om een succesvolle belegger te worden.",
    "Gully Bondstead does everything": "Gully Bondstead doet alles",
    "for you!": "voor u!",
    "24/7 transactions — even while you sleep.":
      "24/7 transacties — zelfs terwijl u slaapt.",
    "By constantly monitoring the market, Gully Bondstead never misses an opportunity for high profits. You don’t have to get distracted or make decisions at inconvenient times.":
      "Door de markt voortdurend te volgen, mist Gully Bondstead nooit een kans op hoge winst. U hoeft zich niet te laten afleiden of op ongelegen momenten beslissingen te nemen.",
    "An assistant that easily adapts to your needs.":
      "Een assistent die zich gemakkelijk aanpast aan uw behoeften.",
    "The settings of Gully Bondstead can be tailored to your individual goals. You can use the default configuration or set your own strategies to optimize performance.":
      "De instellingen van Gully Bondstead kunnen worden afgestemd op uw persoonlijke doelen. U kunt de standaardconfiguratie gebruiken of uw eigen strategieën instellen om de prestaties te optimaliseren.",
    "Elimination of human errors and risks.":
      "Uitschakeling van menselijke fouten en risico's.",
    "Market fluctuations don’t confuse Gully Bondstead. The risk is minimal. Gully Bondstead makes smart decisions for every transaction and eliminates the human factor.":
      "Marktschommelingen brengen Gully Bondstead niet van de wijs. Het risico is minimaal. Gully Bondstead neemt slimme beslissingen voor elke transactie en schakelt de menselijke factor uit.",
    "High transaction speed.": "Hoge transactiesnelheid.",
    "With Gully Bondstead, you can execute up to 120 transactions per day — 90% of which are completed within three days. The ability to process multiple orders simultaneously makes Gully Bondstead unique.":
      "Met Gully Bondstead kunt u tot 120 transacties per dag uitvoeren — waarvan 90% binnen drie dagen wordt afgerond. De mogelijkheid om meerdere orders tegelijk te verwerken maakt Gully Bondstead uniek.",
    "With my many years of business experience, I can say: It is impossible for an ordinary person to multiply their wealth a hundredfold in just a few years—except with cryptocurrencies. Even an experienced trader needs a reliable assistant like Gully Bondstead...":
      "Met mijn jarenlange zakelijke ervaring kan ik zeggen: het is voor een gewoon persoon onmogelijk om in slechts een paar jaar een honderdvoudig vermogen op te bouwen — behalve met cryptovaluta. Zelfs een ervaren handelaar heeft een betrouwbare assistent nodig zoals Gully Bondstead...",
    "Excerpt from Michael Richard Lynch's speech on business opportunities during the 2025 crisis":
      "Fragment uit de toespraak van Michael Richard Lynch over zakelijke kansen tijdens de crisis van 2025",
    "Gully Bondstead helped a billionaire": "Gully Bondstead hielp een miljardair",
    "save his company during the crisis":
      "zijn bedrijf te redden tijdens de crisis",
    "Gully Bondstead helped a billionaire save his company during the crisis! Michael Richard Lynch discovered the secrets of the riskiest and most profitable business strategies during the pandemic.":
      "Gully Bondstead hielp een miljardair zijn bedrijf te redden tijdens de crisis! Michael Richard Lynch ontdekte tijdens de pandemie de geheimen van de riskantste en winstgevendste bedrijfsstrategieën.",
    "Branson was on the verge of mortgaging his Caribbean home to save his airline.":
      "Branson stond op het punt zijn huis in het Caribisch gebied te verhypothekeren om zijn luchtvaartmaatschappij te redden.",
    "Michael Richard Lynch": "Michael Richard Lynch",
    "I didn’t have time to monitor the markets myself and execute transactions manually. I trusted the expertise of Gully Bondstead—recommended by Elon Musk. Elon knows better than anyone which tools can automate business processes. Today, I manage hundreds of processes affected by the pandemic!":
      "Ik had geen tijd om de markten zelf te volgen en transacties handmatig uit te voeren. Ik vertrouwde op de expertise van Gully Bondstead — aanbevolen door Elon Musk. Elon weet beter dan wie ook welke tools bedrijfsprocessen kunnen automatiseren. Vandaag beheer ik honderden processen die door de pandemie zijn getroffen!",
    "They made it — and you can also build a fortune":
      "Zij is het gelukt — en ook u kunt een fortuin opbouwen",
    "for a carefree life!": "voor een zorgeloos leven!",
    "\"I didn’t have time to monitor the markets myself and execute transactions manually. I trusted the expertise of Gully Bondstead—recommended by Elon Musk. Elon knows better than anyone which tools can automate business processes. Today, I manage hundreds of processes affected by the pandemic!\"":
      "\"Ik had geen tijd om de markten zelf te volgen en transacties handmatig uit te voeren. Ik vertrouwde op de expertise van Gully Bondstead — aanbevolen door Elon Musk. Elon weet beter dan wie ook welke tools bedrijfsprocessen kunnen automatiseren. Vandaag beheer ik honderden processen die door de pandemie zijn getroffen!\"",
    "Average income:": "Gemiddeld inkomen:",
    "By studying the system algorithms, I learned to optimize my strategies and integrate them into Gully Bondstead to create more personal opportunities.":
      "Door de systeemalgoritmen te bestuderen, leerde ik mijn strategieën te optimaliseren en in Gully Bondstead te integreren om meer persoonlijke kansen te creëren.",
    "All I had to do was track the statistics and watch Gully Bondstead execute the transactions perfectly!":
      "Ik hoefde alleen de statistieken te volgen en te zien hoe Gully Bondstead de transacties perfect uitvoerde!",
    "Register now and stop worrying about money!":
      "Registreer nu en maak u geen zorgen meer over geld!",
    "Access the platform. Choose your currency and activate auto mode.":
      "Open het platform. Kies uw valuta en activeer de automatische modus.",
    "Gully Bondstead independently processes trading signals and executes the most profitable transactions without your intervention.":
      "Gully Bondstead verwerkt handelssignalen zelfstandig en voert de winstgevendste transacties uit zonder uw tussenkomst.",
    "Keep an eye on the statistics, win without risk, and without effort.":
      "Houd de statistieken in de gaten, win zonder risico en zonder moeite.",
    "Frequently Asked Questions": "Veelgestelde vragen",
    "Can Gully Bondstead miss a signal?": "Kan Gully Bondstead een signaal missen?",
    "No. The advantage of Gully Bondstead lies in its fast response time. The program reacts immediately and precisely. We guarantee that no signal will be missed.":
      "Nee. Het voordeel van Gully Bondstead ligt in de snelle responstijd. Het programma reageert onmiddellijk en nauwkeurig. Wij garanderen dat geen enkel signaal wordt gemist.",
    "How many transactions can Gully Bondstead execute compared to manual trading?":
      "Hoeveel transacties kan Gully Bondstead uitvoeren in vergelijking met handmatig handelen?",
    "Gully Bondstead can process significantly more transactions than manual trading, thanks to process automation. This allows us to handle larger volumes of data than humans and respond quickly to market fluctuations.":
      "Gully Bondstead kan dankzij procesautomatisering aanzienlijk meer transacties verwerken dan handmatig handelen. Hierdoor kunnen we grotere hoeveelheden data verwerken dan mensen en snel reageren op marktschommelingen.",
    "Will Gully Bondstead use my personal data?":
      "Zal Gully Bondstead mijn persoonlijke gegevens gebruiken?",
    "Gully Bondstead uses personal data solely to ensure the functionality of the platform. We respect your privacy and take measures to protect your data.":
      "Gully Bondstead gebruikt persoonlijke gegevens uitsluitend om de functionaliteit van het platform te waarborgen. Wij respecteren uw privacy en nemen maatregelen om uw gegevens te beschermen.",
    "Is Gully Bondstead the same as mining?":
      "Is Gully Bondstead hetzelfde als mining?",
    "No, Gully Bondstead is a trading bot that automates cryptocurrency trading. Mining, on the other hand, is the process of creating a new block in the blockchain, for which cryptocurrencies are received as a reward.":
      "Nee, Gully Bondstead is een handelsbot die de handel in cryptovaluta automatiseert. Mining daarentegen is het proces van het creëren van een nieuw blok in de blockchain, waarvoor cryptovaluta als beloning worden ontvangen.",
    "James Smith, 69": "Jan de Vries, 69",
    "William Johnson, 47": "Willem Bakker, 47",
    "George Brown, 55": "Peter Jansen, 55",
  },

  sv: {
    "NOTE: Only today: Simplified automatic registration with Gully Bondstead. Hurry up! There are only":
      "OBS: Endast idag: förenklad automatisk registrering hos Gully Bondstead. Skynda dig! Det finns bara",
    "Tired of constantly tightening your belt at the end of the month?":
      "Trött på att ständigt snåla i slutet av månaden?",
    "Automated Gully Bondstead": "Automatiserad Gully Bondstead",
    "Gully Bondstead multiplies your savings in record time.":
      "Gully Bondstead mångdubblar dina besparingar på rekordtid.",
    "per week stable income": "stabil inkomst per vecka",
    "our customers have already earned thanks to the powerful algorithm of Gully Bondstead.":
      "har våra kunder redan tjänat tack vare Gully Bondsteads kraftfulla algoritm.",
    "SIGN UP NOW, Gully Bondstead WILL DO THE REST FOR YOU!":
      "ANMÄL DIG NU, Gully Bondstead GÖR RESTEN ÅT DIG!",
    "Verify your phone number": "Verifiera ditt telefonnummer",
    "We sent a code to your phone": "Vi har skickat en kod till din telefon",
    "Confirm code": "Bekräfta kod",
    "Resend code": "Skicka koden igen",
    "Edit number": "Ändra nummer",
    Join: "Gå med",
    "The account is being created": "Kontot skapas",
    "Don’t forget to answer the manager’s call!":
      "Glöm inte att svara på chefens samtal!",
    "You don’t need a high IQ to become a successful investor.":
      "Du behöver inget högt IQ för att bli en framgångsrik investerare.",
    "Gully Bondstead does everything": "Gully Bondstead gör allt",
    "for you!": "åt dig!",
    "24/7 transactions — even while you sleep.":
      "Transaktioner dygnet runt — även medan du sover.",
    "By constantly monitoring the market, Gully Bondstead never misses an opportunity for high profits. You don’t have to get distracted or make decisions at inconvenient times.":
      "Genom att ständigt övervaka marknaden missar Gully Bondstead aldrig en möjlighet till höga vinster. Du behöver inte bli distraherad eller fatta beslut vid olämpliga tidpunkter.",
    "An assistant that easily adapts to your needs.":
      "En assistent som enkelt anpassar sig till dina behov.",
    "The settings of Gully Bondstead can be tailored to your individual goals. You can use the default configuration or set your own strategies to optimize performance.":
      "Inställningarna i Gully Bondstead kan anpassas till dina individuella mål. Du kan använda standardkonfigurationen eller ställa in egna strategier för att optimera resultatet.",
    "Elimination of human errors and risks.":
      "Eliminering av mänskliga fel och risker.",
    "Market fluctuations don’t confuse Gully Bondstead. The risk is minimal. Gully Bondstead makes smart decisions for every transaction and eliminates the human factor.":
      "Marknadssvängningar förvirrar inte Gully Bondstead. Risken är minimal. Gully Bondstead fattar smarta beslut för varje transaktion och eliminerar den mänskliga faktorn.",
    "High transaction speed.": "Hög transaktionshastighet.",
    "With Gully Bondstead, you can execute up to 120 transactions per day — 90% of which are completed within three days. The ability to process multiple orders simultaneously makes Gully Bondstead unique.":
      "Med Gully Bondstead kan du utföra upp till 120 transaktioner per dag — varav 90 % slutförs inom tre dagar. Möjligheten att bearbeta flera order samtidigt gör Gully Bondstead unikt.",
    "With my many years of business experience, I can say: It is impossible for an ordinary person to multiply their wealth a hundredfold in just a few years—except with cryptocurrencies. Even an experienced trader needs a reliable assistant like Gully Bondstead...":
      "Med min mångåriga affärserfarenhet kan jag säga: Det är omöjligt för en vanlig människa att hundrafaldiga sin förmögenhet på bara några år — utom med kryptovalutor. Även en erfaren handlare behöver en pålitlig assistent som Gully Bondstead...",
    "Excerpt from Michael Richard Lynch's speech on business opportunities during the 2025 crisis":
      "Utdrag ur Michael Richard Lynchs tal om affärsmöjligheter under 2025 års kris",
    "Gully Bondstead helped a billionaire": "Gully Bondstead hjälpte en miljardär",
    "save his company during the crisis":
      "att rädda sitt företag under krisen",
    "Gully Bondstead helped a billionaire save his company during the crisis! Michael Richard Lynch discovered the secrets of the riskiest and most profitable business strategies during the pandemic.":
      "Gully Bondstead hjälpte en miljardär att rädda sitt företag under krisen! Michael Richard Lynch upptäckte hemligheterna bakom de mest riskfyllda och lönsamma affärsstrategierna under pandemin.",
    "Branson was on the verge of mortgaging his Caribbean home to save his airline.":
      "Branson var på väg att belåna sitt hem i Karibien för att rädda sitt flygbolag.",
    "Michael Richard Lynch": "Michael Richard Lynch",
    "I didn’t have time to monitor the markets myself and execute transactions manually. I trusted the expertise of Gully Bondstead—recommended by Elon Musk. Elon knows better than anyone which tools can automate business processes. Today, I manage hundreds of processes affected by the pandemic!":
      "Jag hade inte tid att övervaka marknaderna själv och utföra transaktioner manuellt. Jag litade på Gully Bondsteads expertis — rekommenderad av Elon Musk. Elon vet bättre än någon annan vilka verktyg som kan automatisera affärsprocesser. I dag hanterar jag hundratals processer som påverkats av pandemin!",
    "They made it — and you can also build a fortune":
      "De lyckades — och du kan också bygga en förmögenhet",
    "for a carefree life!": "för ett bekymmersfritt liv!",
    "\"I didn’t have time to monitor the markets myself and execute transactions manually. I trusted the expertise of Gully Bondstead—recommended by Elon Musk. Elon knows better than anyone which tools can automate business processes. Today, I manage hundreds of processes affected by the pandemic!\"":
      "\"Jag hade inte tid att övervaka marknaderna själv och utföra transaktioner manuellt. Jag litade på Gully Bondsteads expertis — rekommenderad av Elon Musk. Elon vet bättre än någon annan vilka verktyg som kan automatisera affärsprocesser. I dag hanterar jag hundratals processer som påverkats av pandemin!\"",
    "Average income:": "Genomsnittlig inkomst:",
    "By studying the system algorithms, I learned to optimize my strategies and integrate them into Gully Bondstead to create more personal opportunities.":
      "Genom att studera systemets algoritmer lärde jag mig att optimera mina strategier och integrera dem i Gully Bondstead för att skapa fler personliga möjligheter.",
    "All I had to do was track the statistics and watch Gully Bondstead execute the transactions perfectly!":
      "Allt jag behövde göra var att följa statistiken och se Gully Bondstead utföra transaktionerna perfekt!",
    "Register now and stop worrying about money!":
      "Registrera dig nu och sluta oroa dig för pengar!",
    "Access the platform. Choose your currency and activate auto mode.":
      "Öppna plattformen. Välj din valuta och aktivera autoläget.",
    "Gully Bondstead independently processes trading signals and executes the most profitable transactions without your intervention.":
      "Gully Bondstead bearbetar handelssignaler självständigt och genomför de mest lönsamma transaktionerna utan din medverkan.",
    "Keep an eye on the statistics, win without risk, and without effort.":
      "Håll ett öga på statistiken, vinn utan risk och utan ansträngning.",
    "Frequently Asked Questions": "Vanliga frågor",
    "Can Gully Bondstead miss a signal?": "Kan Gully Bondstead missa en signal?",
    "No. The advantage of Gully Bondstead lies in its fast response time. The program reacts immediately and precisely. We guarantee that no signal will be missed.":
      "Nej. Fördelen med Gully Bondstead ligger i dess snabba responstid. Programmet reagerar omedelbart och exakt. Vi garanterar att ingen signal missas.",
    "How many transactions can Gully Bondstead execute compared to manual trading?":
      "Hur många transaktioner kan Gully Bondstead utföra jämfört med manuell handel?",
    "Gully Bondstead can process significantly more transactions than manual trading, thanks to process automation. This allows us to handle larger volumes of data than humans and respond quickly to market fluctuations.":
      "Gully Bondstead kan bearbeta betydligt fler transaktioner än manuell handel tack vare processautomatisering. Det gör att vi kan hantera större datamängder än människor och reagera snabbt på marknadssvängningar.",
    "Will Gully Bondstead use my personal data?":
      "Kommer Gully Bondstead att använda mina personuppgifter?",
    "Gully Bondstead uses personal data solely to ensure the functionality of the platform. We respect your privacy and take measures to protect your data.":
      "Gully Bondstead använder personuppgifter enbart för att säkerställa plattformens funktion. Vi respekterar din integritet och vidtar åtgärder för att skydda dina uppgifter.",
    "Is Gully Bondstead the same as mining?":
      "Är Gully Bondstead samma sak som mining?",
    "No, Gully Bondstead is a trading bot that automates cryptocurrency trading. Mining, on the other hand, is the process of creating a new block in the blockchain, for which cryptocurrencies are received as a reward.":
      "Nej, Gully Bondstead är en handelsbot som automatiserar handel med kryptovalutor. Mining är däremot processen att skapa ett nytt block i blockkedjan, för vilket kryptovalutor erhålls som belöning.",
    "James Smith, 69": "Erik Larsson, 69",
    "William Johnson, 47": "Karl Johansson, 47",
    "George Brown, 55": "Anders Bergström, 55",
  },

  no: {
    "NOTE: Only today: Simplified automatic registration with Gully Bondstead. Hurry up! There are only":
      "MERK: Bare i dag: forenklet automatisk registrering hos Gully Bondstead. Skynd deg! Det er bare",
    "Tired of constantly tightening your belt at the end of the month?":
      "Lei av å stadig stramme inn på slutten av måneden?",
    "Automated Gully Bondstead": "Automatisert Gully Bondstead",
    "Gully Bondstead multiplies your savings in record time.":
      "Gully Bondstead mangedobler sparepengene dine på rekordtid.",
    "per week stable income": "stabil inntekt per uke",
    "our customers have already earned thanks to the powerful algorithm of Gully Bondstead.":
      "har kundene våre allerede tjent takket være den kraftige algoritmen til Gully Bondstead.",
    "SIGN UP NOW, Gully Bondstead WILL DO THE REST FOR YOU!":
      "REGISTRER DEG NÅ, Gully Bondstead GJØR RESTEN FOR DEG!",
    "Verify your phone number": "Bekreft telefonnummeret ditt",
    "We sent a code to your phone": "Vi har sendt en kode til telefonen din",
    "Confirm code": "Bekreft kode",
    "Resend code": "Send koden på nytt",
    "Edit number": "Rediger nummer",
    Join: "Bli med",
    "The account is being created": "Kontoen opprettes",
    "Don’t forget to answer the manager’s call!":
      "Ikke glem å svare på telefonen når forvalteren ringer!",
    "You don’t need a high IQ to become a successful investor.":
      "Du trenger ikke høy IQ for å bli en vellykket investor.",
    "Gully Bondstead does everything": "Gully Bondstead gjør alt",
    "for you!": "for deg!",
    "24/7 transactions — even while you sleep.":
      "Transaksjoner døgnet rundt — selv mens du sover.",
    "By constantly monitoring the market, Gully Bondstead never misses an opportunity for high profits. You don’t have to get distracted or make decisions at inconvenient times.":
      "Ved å overvåke markedet konstant går Gully Bondstead aldri glipp av en mulighet for høy fortjeneste. Du trenger ikke å bli distrahert eller ta beslutninger på ubeleilige tidspunkter.",
    "An assistant that easily adapts to your needs.":
      "En assistent som enkelt tilpasser seg dine behov.",
    "The settings of Gully Bondstead can be tailored to your individual goals. You can use the default configuration or set your own strategies to optimize performance.":
      "Innstillingene til Gully Bondstead kan tilpasses dine individuelle mål. Du kan bruke standardkonfigurasjonen eller sette opp dine egne strategier for å optimalisere ytelsen.",
    "Elimination of human errors and risks.":
      "Eliminering av menneskelige feil og risikoer.",
    "Market fluctuations don’t confuse Gully Bondstead. The risk is minimal. Gully Bondstead makes smart decisions for every transaction and eliminates the human factor.":
      "Markedssvingninger forvirrer ikke Gully Bondstead. Risikoen er minimal. Gully Bondstead tar smarte beslutninger for hver transaksjon og eliminerer den menneskelige faktoren.",
    "High transaction speed.": "Høy transaksjonshastighet.",
    "With Gully Bondstead, you can execute up to 120 transactions per day — 90% of which are completed within three days. The ability to process multiple orders simultaneously makes Gully Bondstead unique.":
      "Med Gully Bondstead kan du utføre opptil 120 transaksjoner per dag — hvorav 90 % fullføres innen tre dager. Evnen til å behandle flere ordre samtidig gjør Gully Bondstead unikt.",
    "With my many years of business experience, I can say: It is impossible for an ordinary person to multiply their wealth a hundredfold in just a few years—except with cryptocurrencies. Even an experienced trader needs a reliable assistant like Gully Bondstead...":
      "Med min mangeårige forretningserfaring kan jeg si: Det er umulig for en vanlig person å hundrefoldige formuen sin på bare noen få år — unntatt med kryptovaluta. Selv en erfaren trader trenger en pålitelig assistent som Gully Bondstead...",
    "Excerpt from Michael Richard Lynch's speech on business opportunities during the 2025 crisis":
      "Utdrag fra Michael Richard Lynchs tale om forretningsmuligheter under krisen i 2025",
    "Gully Bondstead helped a billionaire": "Gully Bondstead hjalp en milliardær",
    "save his company during the crisis":
      "med å redde selskapet sitt under krisen",
    "Gully Bondstead helped a billionaire save his company during the crisis! Michael Richard Lynch discovered the secrets of the riskiest and most profitable business strategies during the pandemic.":
      "Gully Bondstead hjalp en milliardær med å redde selskapet sitt under krisen! Michael Richard Lynch oppdaget hemmelighetene bak de mest risikable og lønnsomme forretningsstrategiene under pandemien.",
    "Branson was on the verge of mortgaging his Caribbean home to save his airline.":
      "Branson var på nippet til å pantsette hjemmet sitt i Karibia for å redde flyselskapet sitt.",
    "Michael Richard Lynch": "Michael Richard Lynch",
    "I didn’t have time to monitor the markets myself and execute transactions manually. I trusted the expertise of Gully Bondstead—recommended by Elon Musk. Elon knows better than anyone which tools can automate business processes. Today, I manage hundreds of processes affected by the pandemic!":
      "Jeg hadde ikke tid til å overvåke markedene selv og utføre transaksjoner manuelt. Jeg stolte på ekspertisen til Gully Bondstead — anbefalt av Elon Musk. Elon vet bedre enn noen hvilke verktøy som kan automatisere forretningsprosesser. I dag administrerer jeg hundrevis av prosesser som er berørt av pandemien!",
    "They made it — and you can also build a fortune":
      "De klarte det — og du kan også bygge en formue",
    "for a carefree life!": "for et bekymringsfritt liv!",
    "\"I didn’t have time to monitor the markets myself and execute transactions manually. I trusted the expertise of Gully Bondstead—recommended by Elon Musk. Elon knows better than anyone which tools can automate business processes. Today, I manage hundreds of processes affected by the pandemic!\"":
      "\"Jeg hadde ikke tid til å overvåke markedene selv og utføre transaksjoner manuelt. Jeg stolte på ekspertisen til Gully Bondstead — anbefalt av Elon Musk. Elon vet bedre enn noen hvilke verktøy som kan automatisere forretningsprosesser. I dag administrerer jeg hundrevis av prosesser som er berørt av pandemien!\"",
    "Average income:": "Gjennomsnittlig inntekt:",
    "By studying the system algorithms, I learned to optimize my strategies and integrate them into Gully Bondstead to create more personal opportunities.":
      "Ved å studere systemalgoritmene lærte jeg å optimalisere strategiene mine og integrere dem i Gully Bondstead for å skape flere personlige muligheter.",
    "All I had to do was track the statistics and watch Gully Bondstead execute the transactions perfectly!":
      "Alt jeg måtte gjøre var å følge statistikken og se Gully Bondstead utføre transaksjonene perfekt!",
    "Register now and stop worrying about money!":
      "Registrer deg nå og slutt å bekymre deg for penger!",
    "Access the platform. Choose your currency and activate auto mode.":
      "Få tilgang til plattformen. Velg valuta og aktiver automatisk modus.",
    "Gully Bondstead independently processes trading signals and executes the most profitable transactions without your intervention.":
      "Gully Bondstead behandler handelssignaler selvstendig og utfører de mest lønnsomme transaksjonene uten din innblanding.",
    "Keep an eye on the statistics, win without risk, and without effort.":
      "Hold et øye med statistikken, vinn uten risiko og uten anstrengelse.",
    "Frequently Asked Questions": "Ofte stilte spørsmål",
    "Can Gully Bondstead miss a signal?": "Kan Gully Bondstead gå glipp av et signal?",
    "No. The advantage of Gully Bondstead lies in its fast response time. The program reacts immediately and precisely. We guarantee that no signal will be missed.":
      "Nei. Fordelen med Gully Bondstead ligger i den raske responstiden. Programmet reagerer umiddelbart og presist. Vi garanterer at ingen signaler går tapt.",
    "How many transactions can Gully Bondstead execute compared to manual trading?":
      "Hvor mange transaksjoner kan Gully Bondstead utføre sammenlignet med manuell handel?",
    "Gully Bondstead can process significantly more transactions than manual trading, thanks to process automation. This allows us to handle larger volumes of data than humans and respond quickly to market fluctuations.":
      "Gully Bondstead kan behandle betydelig flere transaksjoner enn manuell handel takket være prosessautomatisering. Dette gjør at vi kan håndtere større datamengder enn mennesker og reagere raskt på markedssvingninger.",
    "Will Gully Bondstead use my personal data?":
      "Vil Gully Bondstead bruke personopplysningene mine?",
    "Gully Bondstead uses personal data solely to ensure the functionality of the platform. We respect your privacy and take measures to protect your data.":
      "Gully Bondstead bruker personopplysninger utelukkende for å sikre plattformens funksjonalitet. Vi respekterer personvernet ditt og iverksetter tiltak for å beskytte dataene dine.",
    "Is Gully Bondstead the same as mining?":
      "Er Gully Bondstead det samme som mining?",
    "No, Gully Bondstead is a trading bot that automates cryptocurrency trading. Mining, on the other hand, is the process of creating a new block in the blockchain, for which cryptocurrencies are received as a reward.":
      "Nei, Gully Bondstead er en handelsbot som automatiserer kryptovalutahandel. Mining er derimot prosessen med å opprette en ny blokk i blokkjeden, som det mottas kryptovaluta som belønning for.",
    "James Smith, 69": "Ola Hansen, 69",
    "William Johnson, 47": "Lars Olsen, 47",
    "George Brown, 55": "Knut Pedersen, 55",
  },

  da: {
    "NOTE: Only today: Simplified automatic registration with Gully Bondstead. Hurry up! There are only":
      "BEMÆRK: Kun i dag: forenklet automatisk registrering hos Gully Bondstead. Skynd dig! Der er kun",
    "Tired of constantly tightening your belt at the end of the month?":
      "Træt af konstant at spænde livremmen ind sidst på måneden?",
    "Automated Gully Bondstead": "Automatiseret Gully Bondstead",
    "Gully Bondstead multiplies your savings in record time.":
      "Gully Bondstead mangedobler din opsparing på rekordtid.",
    "per week stable income": "stabil indkomst om ugen",
    "our customers have already earned thanks to the powerful algorithm of Gully Bondstead.":
      "har vores kunder allerede tjent takket være Gully Bondsteads kraftfulde algoritme.",
    "SIGN UP NOW, Gully Bondstead WILL DO THE REST FOR YOU!":
      "TILMELD DIG NU, Gully Bondstead KLARER RESTEN FOR DIG!",
    "Verify your phone number": "Bekræft dit telefonnummer",
    "We sent a code to your phone": "Vi har sendt en kode til din telefon",
    "Confirm code": "Bekræft kode",
    "Resend code": "Send koden igen",
    "Edit number": "Rediger nummer",
    Join: "Deltag",
    "The account is being created": "Kontoen oprettes",
    "Don’t forget to answer the manager’s call!":
      "Glem ikke at besvare opkaldet fra din rådgiver!",
    "You don’t need a high IQ to become a successful investor.":
      "Du behøver ikke en høj IQ for at blive en succesfuld investor.",
    "Gully Bondstead does everything": "Gully Bondstead klarer alt",
    "for you!": "for dig!",
    "24/7 transactions — even while you sleep.":
      "Transaktioner døgnet rundt — selv mens du sover.",
    "By constantly monitoring the market, Gully Bondstead never misses an opportunity for high profits. You don’t have to get distracted or make decisions at inconvenient times.":
      "Ved konstant at overvåge markedet går Gully Bondstead aldrig glip af en mulighed for høj fortjeneste. Du behøver ikke at blive distraheret eller træffe beslutninger på ubelejlige tidspunkter.",
    "An assistant that easily adapts to your needs.":
      "En assistent, der let tilpasser sig dine behov.",
    "The settings of Gully Bondstead can be tailored to your individual goals. You can use the default configuration or set your own strategies to optimize performance.":
      "Indstillingerne i Gully Bondstead kan skræddersys til dine individuelle mål. Du kan bruge standardkonfigurationen eller opsætte dine egne strategier for at optimere ydeevnen.",
    "Elimination of human errors and risks.":
      "Eliminering af menneskelige fejl og risici.",
    "Market fluctuations don’t confuse Gully Bondstead. The risk is minimal. Gully Bondstead makes smart decisions for every transaction and eliminates the human factor.":
      "Markedsudsving forvirrer ikke Gully Bondstead. Risikoen er minimal. Gully Bondstead træffer smarte beslutninger for hver transaktion og eliminerer den menneskelige faktor.",
    "High transaction speed.": "Høj transaktionshastighed.",
    "With Gully Bondstead, you can execute up to 120 transactions per day — 90% of which are completed within three days. The ability to process multiple orders simultaneously makes Gully Bondstead unique.":
      "Med Gully Bondstead kan du udføre op til 120 transaktioner om dagen — hvoraf 90 % afsluttes inden for tre dage. Evnen til at behandle flere ordrer samtidigt gør Gully Bondstead unikt.",
    "With my many years of business experience, I can say: It is impossible for an ordinary person to multiply their wealth a hundredfold in just a few years—except with cryptocurrencies. Even an experienced trader needs a reliable assistant like Gully Bondstead...":
      "Med min mangeårige erhvervserfaring kan jeg sige: Det er umuligt for et almindeligt menneske at hundrededoble sin formue på blot få år — undtagen med kryptovaluta. Selv en erfaren trader har brug for en pålidelig assistent som Gully Bondstead...",
    "Excerpt from Michael Richard Lynch's speech on business opportunities during the 2025 crisis":
      "Uddrag fra Michael Richard Lynchs tale om forretningsmuligheder under krisen i 2025",
    "Gully Bondstead helped a billionaire": "Gully Bondstead hjalp en milliardær",
    "save his company during the crisis":
      "med at redde sit firma under krisen",
    "Gully Bondstead helped a billionaire save his company during the crisis! Michael Richard Lynch discovered the secrets of the riskiest and most profitable business strategies during the pandemic.":
      "Gully Bondstead hjalp en milliardær med at redde sit firma under krisen! Michael Richard Lynch opdagede hemmelighederne bag de mest risikable og profitable forretningsstrategier under pandemien.",
    "Branson was on the verge of mortgaging his Caribbean home to save his airline.":
      "Branson var på nippet til at pantsætte sit hjem i Caribien for at redde sit flyselskab.",
    "Michael Richard Lynch": "Michael Richard Lynch",
    "I didn’t have time to monitor the markets myself and execute transactions manually. I trusted the expertise of Gully Bondstead—recommended by Elon Musk. Elon knows better than anyone which tools can automate business processes. Today, I manage hundreds of processes affected by the pandemic!":
      "Jeg havde ikke tid til selv at overvåge markederne og udføre transaktioner manuelt. Jeg stolede på ekspertisen fra Gully Bondstead — anbefalet af Elon Musk. Elon ved bedre end nogen, hvilke værktøjer der kan automatisere forretningsprocesser. I dag administrerer jeg hundredvis af processer, der er påvirket af pandemien!",
    "They made it — and you can also build a fortune":
      "De gjorde det — og du kan også opbygge en formue",
    "for a carefree life!": "for et ubekymret liv!",
    "\"I didn’t have time to monitor the markets myself and execute transactions manually. I trusted the expertise of Gully Bondstead—recommended by Elon Musk. Elon knows better than anyone which tools can automate business processes. Today, I manage hundreds of processes affected by the pandemic!\"":
      "\"Jeg havde ikke tid til selv at overvåge markederne og udføre transaktioner manuelt. Jeg stolede på ekspertisen fra Gully Bondstead — anbefalet af Elon Musk. Elon ved bedre end nogen, hvilke værktøjer der kan automatisere forretningsprocesser. I dag administrerer jeg hundredvis af processer, der er påvirket af pandemien!\"",
    "Average income:": "Gennemsnitlig indkomst:",
    "By studying the system algorithms, I learned to optimize my strategies and integrate them into Gully Bondstead to create more personal opportunities.":
      "Ved at studere systemalgoritmerne lærte jeg at optimere mine strategier og integrere dem i Gully Bondstead for at skabe flere personlige muligheder.",
    "All I had to do was track the statistics and watch Gully Bondstead execute the transactions perfectly!":
      "Alt jeg skulle gøre var at følge statistikken og se Gully Bondstead udføre transaktionerne perfekt!",
    "Register now and stop worrying about money!":
      "Registrer dig nu, og hold op med at bekymre dig om penge!",
    "Access the platform. Choose your currency and activate auto mode.":
      "Få adgang til platformen. Vælg din valuta, og aktiver automatisk tilstand.",
    "Gully Bondstead independently processes trading signals and executes the most profitable transactions without your intervention.":
      "Gully Bondstead behandler handelssignaler selvstændigt og udfører de mest profitable transaktioner uden din indblanding.",
    "Keep an eye on the statistics, win without risk, and without effort.":
      "Hold øje med statistikken, vind uden risiko og uden besvær.",
    "Frequently Asked Questions": "Ofte stillede spørgsmål",
    "Can Gully Bondstead miss a signal?": "Kan Gully Bondstead gå glip af et signal?",
    "No. The advantage of Gully Bondstead lies in its fast response time. The program reacts immediately and precisely. We guarantee that no signal will be missed.":
      "Nej. Fordelen ved Gully Bondstead ligger i den hurtige responstid. Programmet reagerer øjeblikkeligt og præcist. Vi garanterer, at intet signal går tabt.",
    "How many transactions can Gully Bondstead execute compared to manual trading?":
      "Hvor mange transaktioner kan Gully Bondstead udføre sammenlignet med manuel handel?",
    "Gully Bondstead can process significantly more transactions than manual trading, thanks to process automation. This allows us to handle larger volumes of data than humans and respond quickly to market fluctuations.":
      "Gully Bondstead kan behandle væsentligt flere transaktioner end manuel handel takket være procesautomatisering. Det giver os mulighed for at håndtere større datamængder end mennesker og reagere hurtigt på markedsudsving.",
    "Will Gully Bondstead use my personal data?":
      "Vil Gully Bondstead bruge mine personlige data?",
    "Gully Bondstead uses personal data solely to ensure the functionality of the platform. We respect your privacy and take measures to protect your data.":
      "Gully Bondstead bruger udelukkende personlige data til at sikre platformens funktionalitet. Vi respekterer dit privatliv og træffer foranstaltninger for at beskytte dine data.",
    "Is Gully Bondstead the same as mining?":
      "Er Gully Bondstead det samme som mining?",
    "No, Gully Bondstead is a trading bot that automates cryptocurrency trading. Mining, on the other hand, is the process of creating a new block in the blockchain, for which cryptocurrencies are received as a reward.":
      "Nej, Gully Bondstead er en handelsbot, der automatiserer kryptovalutahandel. Mining er derimod processen med at oprette en ny blok i blockkæden, som der modtages kryptovaluta som belønning for.",
    "James Smith, 69": "Mikkel Jensen, 69",
    "William Johnson, 47": "Henrik Nielsen, 47",
    "George Brown, 55": "Jørgen Christensen, 55",
  },

  fi: {
    "NOTE: Only today: Simplified automatic registration with Gully Bondstead. Hurry up! There are only":
      "HUOM: Vain tänään: yksinkertaistettu automaattinen rekisteröityminen Gully Bondstead -palveluun. Toimi nopeasti! Jäljellä on vain",
    "Tired of constantly tightening your belt at the end of the month?":
      "Kyllästynyt jatkuvaan penninvenytykseen kuun lopussa?",
    "Automated Gully Bondstead": "Automatisoitu Gully Bondstead",
    "Gully Bondstead multiplies your savings in record time.":
      "Gully Bondstead moninkertaistaa säästösi ennätysajassa.",
    "per week stable income": "vakaata tuloa viikossa",
    "our customers have already earned thanks to the powerful algorithm of Gully Bondstead.":
      "ovat asiakkaamme jo ansainneet Gully Bondsteadin tehokkaan algoritmin ansiosta.",
    "SIGN UP NOW, Gully Bondstead WILL DO THE REST FOR YOU!":
      "REKISTERÖIDY NYT, Gully Bondstead HOITAA LOPUT PUOLESTASI!",
    "Verify your phone number": "Vahvista puhelinnumerosi",
    "We sent a code to your phone": "Lähetimme koodin puhelimeesi",
    "Confirm code": "Vahvista koodi",
    "Resend code": "Lähetä koodi uudelleen",
    "Edit number": "Muokkaa numeroa",
    Join: "Liity",
    "The account is being created": "Tiliä luodaan",
    "Don’t forget to answer the manager’s call!":
      "Muista vastata managerin puheluun!",
    "You don’t need a high IQ to become a successful investor.":
      "Menestyksekkääksi sijoittajaksi ei tarvita korkeaa ÄO:ta.",
    "Gully Bondstead does everything": "Gully Bondstead hoitaa kaiken",
    "for you!": "puolestasi!",
    "24/7 transactions — even while you sleep.":
      "Kaupankäyntiä 24/7 — jopa nukkuessasi.",
    "By constantly monitoring the market, Gully Bondstead never misses an opportunity for high profits. You don’t have to get distracted or make decisions at inconvenient times.":
      "Jatkuvasti markkinoita seuraamalla Gully Bondstead ei koskaan missaa mahdollisuutta suuriin voittoihin. Sinun ei tarvitse hajaantua tai tehdä päätöksiä hankaliin aikoihin.",
    "An assistant that easily adapts to your needs.":
      "Avustaja, joka mukautuu helposti tarpeisiisi.",
    "The settings of Gully Bondstead can be tailored to your individual goals. You can use the default configuration or set your own strategies to optimize performance.":
      "Gully Bondsteadin asetukset voidaan räätälöidä omien tavoitteidesi mukaan. Voit käyttää oletusasetuksia tai määrittää omat strategiasi suorituskyvyn optimoimiseksi.",
    "Elimination of human errors and risks.":
      "Inhimillisten virheiden ja riskien poistaminen.",
    "Market fluctuations don’t confuse Gully Bondstead. The risk is minimal. Gully Bondstead makes smart decisions for every transaction and eliminates the human factor.":
      "Markkinoiden heilahtelut eivät hämää Gully Bondsteadia. Riski on minimaalinen. Gully Bondstead tekee älykkäitä päätöksiä jokaisessa kaupassa ja poistaa inhimillisen tekijän.",
    "High transaction speed.": "Suuri kaupankäyntinopeus.",
    "With Gully Bondstead, you can execute up to 120 transactions per day — 90% of which are completed within three days. The ability to process multiple orders simultaneously makes Gully Bondstead unique.":
      "Gully Bondsteadilla voit tehdä jopa 120 kauppaa päivässä — joista 90 % toteutuu kolmen päivän kuluessa. Kyky käsitellä useita toimeksiantoja samanaikaisesti tekee Gully Bondsteadista ainutlaatuisen.",
    "With my many years of business experience, I can say: It is impossible for an ordinary person to multiply their wealth a hundredfold in just a few years—except with cryptocurrencies. Even an experienced trader needs a reliable assistant like Gully Bondstead...":
      "Vuosien liiketoimintakokemuksella voin sanoa: tavallisen ihmisen on mahdotonta satakertaistaa varallisuutensa vain muutamassa vuodessa — paitsi kryptovaluutoilla. Kokeneempikin treidaaja tarvitsee luotettavan avustajan kuten Gully Bondstead...",
    "Excerpt from Michael Richard Lynch's speech on business opportunities during the 2025 crisis":
      "Ote Michael Richard Lynchin puheesta liiketoimintamahdollisuuksista vuoden 2025 kriisin aikana",
    "Gully Bondstead helped a billionaire": "Gully Bondstead auttoi miljardööriä",
    "save his company during the crisis":
      "pelastamaan yrityksensä kriisin aikana",
    "Gully Bondstead helped a billionaire save his company during the crisis! Michael Richard Lynch discovered the secrets of the riskiest and most profitable business strategies during the pandemic.":
      "Gully Bondstead auttoi miljardööriä pelastamaan yrityksensä kriisin aikana! Michael Richard Lynch löysi pandemian aikana riskialttiimpien ja tuottoisimpien liiketoimintastrategioiden salaisuudet.",
    "Branson was on the verge of mortgaging his Caribbean home to save his airline.":
      "Branson oli vähällä pantata Karibian-kotinsa pelastaakseen lentoyhtiönsä.",
    "Michael Richard Lynch": "Michael Richard Lynch",
    "I didn’t have time to monitor the markets myself and execute transactions manually. I trusted the expertise of Gully Bondstead—recommended by Elon Musk. Elon knows better than anyone which tools can automate business processes. Today, I manage hundreds of processes affected by the pandemic!":
      "Minulla ei ollut aikaa seurata markkinoita itse ja tehdä kauppoja manuaalisesti. Luotin Gully Bondsteadin asiantuntemukseen — Elon Muskin suosittelemaan. Elon tietää paremmin kuin kukaan, mitkä työkalut voivat automatisoida liiketoimintaprosesseja. Nykyään hallinnoin satoja pandemian vaikuttamia prosesseja!",
    "They made it — and you can also build a fortune":
      "He onnistuivat — ja sinäkin voit rakentaa omaisuuden",
    "for a carefree life!": "huolettomaan elämään!",
    "\"I didn’t have time to monitor the markets myself and execute transactions manually. I trusted the expertise of Gully Bondstead—recommended by Elon Musk. Elon knows better than anyone which tools can automate business processes. Today, I manage hundreds of processes affected by the pandemic!\"":
      "\"Minulla ei ollut aikaa seurata markkinoita itse ja tehdä kauppoja manuaalisesti. Luotin Gully Bondsteadin asiantuntemukseen — Elon Muskin suosittelemaan. Elon tietää paremmin kuin kukaan, mitkä työkalut voivat automatisoida liiketoimintaprosesseja. Nykyään hallinnoin satoja pandemian vaikuttamia prosesseja!\"",
    "Average income:": "Keskimääräiset tulot:",
    "By studying the system algorithms, I learned to optimize my strategies and integrate them into Gully Bondstead to create more personal opportunities.":
      "Tutkimalla järjestelmän algoritmeja opin optimoimaan strategiani ja integroimaan ne Gully Bondsteadiin luodakseni enemmän henkilökohtaisia mahdollisuuksia.",
    "All I had to do was track the statistics and watch Gully Bondstead execute the transactions perfectly!":
      "Minun tarvitsi vain seurata tilastoja ja katsoa, kuinka Gully Bondstead toteutti kaupat täydellisesti!",
    "Register now and stop worrying about money!":
      "Rekisteröidy nyt ja lakkaa murehtimasta rahasta!",
    "Access the platform. Choose your currency and activate auto mode.":
      "Siirry alustalle. Valitse valuuttasi ja aktivoi automaattitila.",
    "Gully Bondstead independently processes trading signals and executes the most profitable transactions without your intervention.":
      "Gully Bondstead käsittelee kaupankäyntisignaalit itsenäisesti ja toteuttaa tuottoisimmat kaupat ilman sinun osallistumistasi.",
    "Keep an eye on the statistics, win without risk, and without effort.":
      "Pidä tilastot silmällä, voita ilman riskiä ja ilman vaivaa.",
    "Frequently Asked Questions": "Usein kysytyt kysymykset",
    "Can Gully Bondstead miss a signal?": "Voiko Gully Bondstead missata signaalin?",
    "No. The advantage of Gully Bondstead lies in its fast response time. The program reacts immediately and precisely. We guarantee that no signal will be missed.":
      "Ei. Gully Bondsteadin etu on sen nopea vasteaika. Ohjelma reagoi välittömästi ja tarkasti. Takaamme, ettei yhtään signaalia jää huomaamatta.",
    "How many transactions can Gully Bondstead execute compared to manual trading?":
      "Kuinka monta kauppaa Gully Bondstead voi tehdä manuaaliseen kaupankäyntiin verrattuna?",
    "Gully Bondstead can process significantly more transactions than manual trading, thanks to process automation. This allows us to handle larger volumes of data than humans and respond quickly to market fluctuations.":
      "Gully Bondstead voi käsitellä huomattavasti enemmän kauppoja kuin manuaalinen kaupankäynti prosessiautomaation ansiosta. Sen ansiosta voimme käsitellä suurempia tietomääriä kuin ihmiset ja reagoida nopeasti markkinoiden heilahteluihin.",
    "Will Gully Bondstead use my personal data?":
      "Käyttääkö Gully Bondstead henkilötietojani?",
    "Gully Bondstead uses personal data solely to ensure the functionality of the platform. We respect your privacy and take measures to protect your data.":
      "Gully Bondstead käyttää henkilötietoja ainoastaan alustan toimivuuden varmistamiseen. Kunnioitamme yksityisyyttäsi ja suojaamme tietojasi.",
    "Is Gully Bondstead the same as mining?":
      "Onko Gully Bondstead sama asia kuin louhinta?",
    "No, Gully Bondstead is a trading bot that automates cryptocurrency trading. Mining, on the other hand, is the process of creating a new block in the blockchain, for which cryptocurrencies are received as a reward.":
      "Ei, Gully Bondstead on kaupankäyntibotti, joka automatisoi kryptovaluuttakaupan. Louhinta puolestaan on prosessi, jossa lohkoketjuun luodaan uusi lohko, josta saadaan palkkioksi kryptovaluuttaa.",
    "James Smith, 69": "Matti Virtanen, 69",
    "William Johnson, 47": "Juhani Korhonen, 47",
    "George Brown, 55": "Mikko Mäkinen, 55",
  },

  ja: {
    "NOTE: Only today: Simplified automatic registration with Gully Bondstead. Hurry up! There are only":
      "注意：本日限定の Gully Bondstead 簡易自動登録です。お急ぎください！残り時間はあと",
    "Tired of constantly tightening your belt at the end of the month?":
      "月末にいつも財布のひもを締める生活にうんざりしていませんか？",
    "Automated Gully Bondstead": "自動化された Gully Bondstead",
    "Gully Bondstead multiplies your savings in record time.":
      "Gully Bondstead は記録的な速さで貯蓄を増やします。",
    "per week stable income": "毎週の安定した収入",
    "our customers have already earned thanks to the powerful algorithm of Gully Bondstead.":
      "は Gully Bondstead の強力なアルゴリズムのおかげで、すでにお客様が獲得しています。",
    "SIGN UP NOW, Gully Bondstead WILL DO THE REST FOR YOU!":
      "今すぐ登録すれば、あとは Gully Bondstead がすべてやってくれます！",
    "Verify your phone number": "電話番号を確認",
    "We sent a code to your phone": "SMSにコードを送信しました",
    "Confirm code": "コードを確認",
    "Resend code": "コードを再送信",
    "Edit number": "番号を編集",
    Join: "参加する",
    "The account is being created": "アカウントを作成しています",
    "Don’t forget to answer the manager’s call!":
      "マネージャーからの電話に必ずお答えください！",
    "You don’t need a high IQ to become a successful investor.":
      "成功する投資家になるのに高いIQは必要ありません。",
    "Gully Bondstead does everything": "Gully Bondstead はすべてを",
    "for you!": "やってくれます！",
    "24/7 transactions — even while you sleep.":
      "24時間365日の取引 — 寝ている間も。",
    "By constantly monitoring the market, Gully Bondstead never misses an opportunity for high profits. You don’t have to get distracted or make decisions at inconvenient times.":
      "市場を常に監視することで、Gully Bondstead は高利益のチャンスを逃しません。気を散らしたり、都合の悪い時間に決断を下したりする必要はありません。",
    "An assistant that easily adapts to your needs.":
      "あなたのニーズに柔軟に対応するアシスタント。",
    "The settings of Gully Bondstead can be tailored to your individual goals. You can use the default configuration or set your own strategies to optimize performance.":
      "Gully Bondstead の設定は個人の目標に合わせて調整できます。デフォルト設定を使用するか、独自の戦略を設定してパフォーマンスを最適化できます。",
    "Elimination of human errors and risks.":
      "人的ミスとリスクの排除。",
    "Market fluctuations don’t confuse Gully Bondstead. The risk is minimal. Gully Bondstead makes smart decisions for every transaction and eliminates the human factor.":
      "市場の変動に Gully Bondstead は惑わされません。リスクは最小限です。Gully Bondstead はすべての取引で賢明な判断を下し、人的要因を排除します。",
    "High transaction speed.": "高速な取引処理。",
    "With Gully Bondstead, you can execute up to 120 transactions per day — 90% of which are completed within three days. The ability to process multiple orders simultaneously makes Gully Bondstead unique.":
      "Gully Bondstead では、1日最大120件の取引を実行でき、その90%は3日以内に完了します。複数の注文を同時に処理できる能力が Gully Bondstead を特別なものにしています。",
    "With my many years of business experience, I can say: It is impossible for an ordinary person to multiply their wealth a hundredfold in just a few years—except with cryptocurrencies. Even an experienced trader needs a reliable assistant like Gully Bondstead...":
      "長年のビジネス経験から言えることがあります。普通の人がわずか数年で資産を100倍にすることは不可能です——暗号通貨を除いては。経験豊富なトレーダーでさえ、Gully Bondstead のような信頼できるアシスタントを必要としています...",
    "Excerpt from Michael Richard Lynch's speech on business opportunities during the 2025 crisis":
      "2025年の危機におけるビジネスチャンスに関するマイケル・リチャード・リンチ氏のスピーチからの抜粋",
    "Gully Bondstead helped a billionaire": "Gully Bondstead は億万長者を助け",
    "save his company during the crisis":
      "危機の際に彼の会社を救いました",
    "Gully Bondstead helped a billionaire save his company during the crisis! Michael Richard Lynch discovered the secrets of the riskiest and most profitable business strategies during the pandemic.":
      "Gully Bondstead は億万長者が危機の際に会社を救うのを助けました！マイケル・リチャード・リンチ氏は、パンデミック中に最もリスクが高く最も収益性の高いビジネス戦略の秘密を発見しました。",
    "Branson was on the verge of mortgaging his Caribbean home to save his airline.":
      "ブランソン氏は航空会社を救うためにカリブ海の自宅を抵当に入れようとしていました。",
    "Michael Richard Lynch": "マイケル・リチャード・リンチ",
    "I didn’t have time to monitor the markets myself and execute transactions manually. I trusted the expertise of Gully Bondstead—recommended by Elon Musk. Elon knows better than anyone which tools can automate business processes. Today, I manage hundreds of processes affected by the pandemic!":
      "自分で市場を監視し、手動で取引を行う時間はありませんでした。イーロン・マスク氏が推奨する Gully Bondstead の専門性を信頼しました。ビジネスプロセスを自動化できるツールを誰よりも知っているのはイーロンです。今ではパンデミックの影響を受けた何百ものプロセスを管理しています！",
    "They made it — and you can also build a fortune":
      "彼らは成功しました — あなたも財産を築けます",
    "for a carefree life!": "心配のない人生のために！",
    "\"I didn’t have time to monitor the markets myself and execute transactions manually. I trusted the expertise of Gully Bondstead—recommended by Elon Musk. Elon knows better than anyone which tools can automate business processes. Today, I manage hundreds of processes affected by the pandemic!\"":
      "\"自分で市場を監視し、手動で取引を行う時間はありませんでした。イーロン・マスク氏が推奨する Gully Bondstead の専門性を信頼しました。ビジネスプロセスを自動化できるツールを誰よりも知っているのはイーロンです。今ではパンデミックの影響を受けた何百ものプロセスを管理しています！\"",
    "Average income:": "平均収入：",
    "By studying the system algorithms, I learned to optimize my strategies and integrate them into Gully Bondstead to create more personal opportunities.":
      "システムのアルゴリズムを研究することで、戦略を最適化し、Gully Bondstead に統合してより自分らしい機会を生み出す方法を学びました。",
    "All I had to do was track the statistics and watch Gully Bondstead execute the transactions perfectly!":
      "私がやったのは統計を追跡し、Gully Bondstead が取引を完璧に実行するのを見守るだけでした！",
    "Register now and stop worrying about money!":
      "今すぐ登録して、お金の心配をやめましょう！",
    "Access the platform. Choose your currency and activate auto mode.":
      "プラットフォームにアクセスします。通貨を選択し、自動モードを有効にします。",
    "Gully Bondstead independently processes trading signals and executes the most profitable transactions without your intervention.":
      "Gully Bondstead は取引シグナルを独自に処理し、あなたの介入なしで最も収益性の高い取引を実行します。",
    "Keep an eye on the statistics, win without risk, and without effort.":
      "統計をチェックするだけで、リスクも労力もなく勝てます。",
    "Frequently Asked Questions": "よくある質問",
    "Can Gully Bondstead miss a signal?": "Gully Bondstead はシグナルを見逃すことがありますか？",
    "No. The advantage of Gully Bondstead lies in its fast response time. The program reacts immediately and precisely. We guarantee that no signal will be missed.":
      "いいえ。Gully Bondstead の強みはその速い応答時間にあります。プログラムは即座に正確に反応します。シグナルを一つも見逃さないことを保証します。",
    "How many transactions can Gully Bondstead execute compared to manual trading?":
      "手動取引と比べて、Gully Bondstead はどれだけ多くの取引を実行できますか？",
    "Gully Bondstead can process significantly more transactions than manual trading, thanks to process automation. This allows us to handle larger volumes of data than humans and respond quickly to market fluctuations.":
      "Gully Bondstead はプロセスの自動化により、手動取引よりはるかに多くの取引を処理できます。これにより、人間より大量のデータを扱い、市場の変動に素早く対応できます。",
    "Will Gully Bondstead use my personal data?":
      "Gully Bondstead は私の個人データを使用しますか？",
    "Gully Bondstead uses personal data solely to ensure the functionality of the platform. We respect your privacy and take measures to protect your data.":
      "Gully Bondstead はプラットフォームの機能を確保するためだけに個人データを使用します。私たちはあなたのプライバシーを尊重し、データを保護する措置を講じています。",
    "Is Gully Bondstead the same as mining?":
      "Gully Bondstead はマイニングと同じですか？",
    "No, Gully Bondstead is a trading bot that automates cryptocurrency trading. Mining, on the other hand, is the process of creating a new block in the blockchain, for which cryptocurrencies are received as a reward.":
      "いいえ、Gully Bondstead は暗号通貨取引を自動化するトレーディングボットです。一方、マイニングはブロックチェーンに新しいブロックを作成するプロセスで、報酬として暗号通貨が得られます。",
    "James Smith, 69": "佐藤 健一, 69",
    "William Johnson, 47": "鈴木 大輔, 47",
    "George Brown, 55": "田中 隆, 55",
  },
};

// Currency overrides, keyed by currency and then language: these English
// strings contain amounts and are swapped for the local currency equivalent
// (roughly converted from GBP) with the right wording per language.
const C = {
  EUR: {
    de: {
      "From 1648 £": "Ab 1975 €",
      "208176 £": "249800 €",
      "11428 £ per week": "13700 € pro Woche",
      "8930 £ per week": "10700 € pro Woche",
      "9326 £ per week": "11200 € pro Woche",
      "\"He saved an airline from bankruptcy—with just 416 £. Hard to believe, but true!\"":
        "\"Er rettete eine Fluggesellschaft vor der Pleite—mit nur 500 €. Kaum zu glauben, aber wahr!\"",
      "Michael Richard Lynch invested 416 £, converted it into Bitcoin, and used Gully Bondstead. During the crisis, the value of the cryptocurrency surged, turning this investment into a profit of 208176 £.":
        "Michael Richard Lynch investierte 500 €, tauschte sie in Bitcoin um und nutzte Gully Bondstead. Während der Krise stieg der Wert der Kryptowährung sprunghaft an und verwandelte diese Investition in einen Gewinn von 249800 €.",
    },
    fr: {
      "From 1648 £": "À partir de 1975 €",
      "208176 £": "249800 €",
      "11428 £ per week": "13700 € par semaine",
      "8930 £ per week": "10700 € par semaine",
      "9326 £ per week": "11200 € par semaine",
      "\"He saved an airline from bankruptcy—with just 416 £. Hard to believe, but true!\"":
        "\"Il a sauvé une compagnie aérienne de la faillite—avec seulement 500 €. Difficile à croire, mais vrai !\"",
      "Michael Richard Lynch invested 416 £, converted it into Bitcoin, and used Gully Bondstead. During the crisis, the value of the cryptocurrency surged, turning this investment into a profit of 208176 £.":
        "Michael Richard Lynch a investi 500 €, les a convertis en Bitcoin et a utilisé Gully Bondstead. Pendant la crise, la valeur de la cryptomonnaie a bondi, transformant cet investissement en un bénéfice de 249800 €.",
    },
    nl: {
      "From 1648 £": "Vanaf 1975 €",
      "208176 £": "249800 €",
      "11428 £ per week": "13700 € per week",
      "8930 £ per week": "10700 € per week",
      "9326 £ per week": "11200 € per week",
      "\"He saved an airline from bankruptcy—with just 416 £. Hard to believe, but true!\"":
        "\"Hij redde een luchtvaartmaatschappij van het faillissement—met slechts 500 €. Moeilijk te geloven, maar waar!\"",
      "Michael Richard Lynch invested 416 £, converted it into Bitcoin, and used Gully Bondstead. During the crisis, the value of the cryptocurrency surged, turning this investment into a profit of 208176 £.":
        "Michael Richard Lynch investeerde 500 €, zette ze om in Bitcoin en gebruikte Gully Bondstead. Tijdens de crisis steeg de waarde van de cryptovaluta sterk, waardoor deze investering een winst van 249800 € opleverde.",
    },
    fi: {
      "From 1648 £": "Alkaen 1975 €",
      "208176 £": "249800 €",
      "11428 £ per week": "13700 € viikossa",
      "8930 £ per week": "10700 € viikossa",
      "9326 £ per week": "11200 € viikossa",
      "\"He saved an airline from bankruptcy—with just 416 £. Hard to believe, but true!\"":
        "\"Hän pelasti lentoyhtiön konkurssilta—vain 500 €:lla. Vaikea uskoa, mutta totta!\"",
      "Michael Richard Lynch invested 416 £, converted it into Bitcoin, and used Gully Bondstead. During the crisis, the value of the cryptocurrency surged, turning this investment into a profit of 208176 £.":
        "Michael Richard Lynch sijoitti 500 €, muunsi ne Bitcoiniksi ja käytti Gully Bondsteadia. Kriisin aikana kryptovaluutan arvo nousi räjähdysmäisesti ja muutti sijoituksen 249800 €:n voitoksi.",
    },
  },
  CHF: {
    de: {
      "From 1648 £": "Ab 1860 CHF",
      "208176 £": "235200 CHF",
      "11428 £ per week": "12900 CHF pro Woche",
      "8930 £ per week": "10100 CHF pro Woche",
      "9326 £ per week": "10550 CHF pro Woche",
      "\"He saved an airline from bankruptcy—with just 416 £. Hard to believe, but true!\"":
        "\"Er rettete eine Fluggesellschaft vor der Pleite—mit nur 470 CHF. Kaum zu glauben, aber wahr!\"",
      "Michael Richard Lynch invested 416 £, converted it into Bitcoin, and used Gully Bondstead. During the crisis, the value of the cryptocurrency surged, turning this investment into a profit of 208176 £.":
        "Michael Richard Lynch investierte 470 CHF, tauschte sie in Bitcoin um und nutzte Gully Bondstead. Während der Krise stieg der Wert der Kryptowährung sprunghaft an und verwandelte diese Investition in einen Gewinn von 235200 CHF.",
    },
  },
  USD: {
    en: {
      "From 1648 £": "From 2200 $",
      "208176 £": "278900 $",
      "11428 £ per week": "15300 $ per week",
      "8930 £ per week": "11950 $ per week",
      "9326 £ per week": "12500 $ per week",
      "\"He saved an airline from bankruptcy—with just 416 £. Hard to believe, but true!\"":
        "\"He saved an airline from bankruptcy—with just 557 $. Hard to believe, but true!\"",
      "Michael Richard Lynch invested 416 £, converted it into Bitcoin, and used Gully Bondstead. During the crisis, the value of the cryptocurrency surged, turning this investment into a profit of 208176 £.":
        "Michael Richard Lynch invested 557 $, converted it into Bitcoin, and used Gully Bondstead. During the crisis, the value of the cryptocurrency surged, turning this investment into a profit of 278900 $.",
    },
  },
  AUD: {
    en: {
      "From 1648 £": "From 3360 A$",
      "208176 £": "424700 A$",
      "11428 £ per week": "23300 A$ per week",
      "8930 £ per week": "18200 A$ per week",
      "9326 £ per week": "19000 A$ per week",
      "\"He saved an airline from bankruptcy—with just 416 £. Hard to believe, but true!\"":
        "\"He saved an airline from bankruptcy—with just 850 A$. Hard to believe, but true!\"",
      "Michael Richard Lynch invested 416 £, converted it into Bitcoin, and used Gully Bondstead. During the crisis, the value of the cryptocurrency surged, turning this investment into a profit of 208176 £.":
        "Michael Richard Lynch invested 850 A$, converted it into Bitcoin, and used Gully Bondstead. During the crisis, the value of the cryptocurrency surged, turning this investment into a profit of 424700 A$.",
    },
  },
  SGD: {
    en: {
      "From 1648 £": "From 2820 S$",
      "208176 £": "356000 S$",
      "11428 £ per week": "19540 S$ per week",
      "8930 £ per week": "15270 S$ per week",
      "9326 £ per week": "15950 S$ per week",
      "\"He saved an airline from bankruptcy—with just 416 £. Hard to believe, but true!\"":
        "\"He saved an airline from bankruptcy—with just 710 S$. Hard to believe, but true!\"",
      "Michael Richard Lynch invested 416 £, converted it into Bitcoin, and used Gully Bondstead. During the crisis, the value of the cryptocurrency surged, turning this investment into a profit of 208176 £.":
        "Michael Richard Lynch invested 710 S$, converted it into Bitcoin, and used Gully Bondstead. During the crisis, the value of the cryptocurrency surged, turning this investment into a profit of 356000 S$.",
    },
  },
  SEK: {
    sv: {
      "From 1648 £": "Från 22500 SEK",
      "208176 £": "2852000 SEK",
      "11428 £ per week": "156500 SEK per vecka",
      "8930 £ per week": "122300 SEK per vecka",
      "9326 £ per week": "127700 SEK per vecka",
      "\"He saved an airline from bankruptcy—with just 416 £. Hard to believe, but true!\"":
        "\"Han räddade ett flygbolag från konkurs—med bara 5700 SEK. Svårt att tro, men sant!\"",
      "Michael Richard Lynch invested 416 £, converted it into Bitcoin, and used Gully Bondstead. During the crisis, the value of the cryptocurrency surged, turning this investment into a profit of 208176 £.":
        "Michael Richard Lynch investerade 5700 SEK, växlade till Bitcoin och använde Gully Bondstead. Under krisen steg kryptovalutans värde kraftigt och förvandlade investeringen till en vinst på 2852000 SEK.",
    },
  },
  NOK: {
    no: {
      "From 1648 £": "Fra 23700 NOK",
      "208176 £": "2997700 NOK",
      "11428 £ per week": "164500 NOK per uke",
      "8930 £ per week": "128600 NOK per uke",
      "9326 £ per week": "134300 NOK per uke",
      "\"He saved an airline from bankruptcy—with just 416 £. Hard to believe, but true!\"":
        "\"Han reddet et flyselskap fra konkurs—med bare 6000 NOK. Vanskelig å tro, men sant!\"",
      "Michael Richard Lynch invested 416 £, converted it into Bitcoin, and used Gully Bondstead. During the crisis, the value of the cryptocurrency surged, turning this investment into a profit of 208176 £.":
        "Michael Richard Lynch investerte 6000 NOK, konverterte til Bitcoin og brukte Gully Bondstead. Under krisen steg verdien av kryptovalutaen kraftig og gjorde investeringen om til en gevinst på 2997700 NOK.",
    },
  },
  DKK: {
    da: {
      "From 1648 £": "Fra 14650 DKK",
      "208176 £": "1852800 DKK",
      "11428 £ per week": "101700 DKK om ugen",
      "8930 £ per week": "79500 DKK om ugen",
      "9326 £ per week": "83000 DKK om ugen",
      "\"He saved an airline from bankruptcy—with just 416 £. Hard to believe, but true!\"":
        "\"Han reddede et flyselskab fra konkurs—med kun 3700 DKK. Svært at tro, men sandt!\"",
      "Michael Richard Lynch invested 416 £, converted it into Bitcoin, and used Gully Bondstead. During the crisis, the value of the cryptocurrency surged, turning this investment into a profit of 208176 £.":
        "Michael Richard Lynch investerede 3700 DKK, konverterede til Bitcoin og brugte Gully Bondstead. Under krisen steg kryptovalutaens værdi voldsomt og forvandlede investeringen til et overskud på 1852800 DKK.",
    },
  },
  JPY: {
    ja: {
      "From 1648 £": "313000 円",
      "208176 £": "39553400 円",
      "11428 £ per week": "週 2171300 円",
      "8930 £ per week": "週 1696700 円",
      "9326 £ per week": "週 1771900 円",
      "\"He saved an airline from bankruptcy—with just 416 £. Hard to believe, but true!\"":
        "\"彼はわずか79000円で航空会社を破産から救いました。信じがたいですが、本当の話です！\"",
      "Michael Richard Lynch invested 416 £, converted it into Bitcoin, and used Gully Bondstead. During the crisis, the value of the cryptocurrency surged, turning this investment into a profit of 208176 £.":
        "マイケル・リチャード・リンチ氏は79000円を投資し、ビットコインに交換して Gully Bondstead を利用しました。危機の間に暗号通貨の価値は急騰し、この投資は39553400円の利益になりました。",
    },
  },
};

// Currency code per country (undefined = default £).
const CURRENCY_BY_COUNTRY = {
  IE: "EUR",
  US: "USD",
  CA: "USD",
  AU: "AUD",
  SG: "SGD",
  DE: "EUR",
  CH: "CHF",
  FR: "EUR",
  NL: "EUR",
  SE: "SEK",
  NO: "NOK",
  DK: "DKK",
  FI: "EUR",
  JP: "JPY",
};

// Form field placeholders per language.
export const PLACEHOLDERS = {
  en: { "First name": "First name", "Last name": "Last name", Email: "Email", "Phone number": "Phone number" },
  de: { "First name": "Vorname", "Last name": "Nachname", Email: "E-Mail", "Phone number": "Telefonnummer" },
  fr: { "First name": "Prénom", "Last name": "Nom", Email: "E-mail", "Phone number": "Numéro de téléphone" },
  nl: { "First name": "Voornaam", "Last name": "Achternaam", Email: "E-mail", "Phone number": "Telefoonnummer" },
  sv: { "First name": "Förnamn", "Last name": "Efternamn", Email: "E-post", "Phone number": "Telefonnummer" },
  no: { "First name": "Fornavn", "Last name": "Etternavn", Email: "E-post", "Phone number": "Telefonnummer" },
  da: { "First name": "Fornavn", "Last name": "Efternavn", Email: "E-mail", "Phone number": "Telefonnummer" },
  fi: { "First name": "Etunimi", "Last name": "Sukunimi", Email: "Sähköposti", "Phone number": "Puhelinnumero" },
  ja: { "First name": "名", "Last name": "姓", Email: "メールアドレス", "Phone number": "電話番号" },
};

// The full translation dictionary for a country: language strings plus the
// country's currency-specific amount strings (in that country's language).
export function translationFor(cc) {
  const lang = langForCountry(cc);
  const currencyCode = CURRENCY_BY_COUNTRY[cc];
  const currency = currencyCode && C[currencyCode] ? C[currencyCode][lang] || {} : {};
  return { ...(T[lang] || {}), ...currency };
}
