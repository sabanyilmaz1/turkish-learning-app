interface GrammarRule {
  title: string;
  content: string;
  examples: { turkish: string; french: string }[];
}

export const grammarRules: GrammarRule[] = [
  // {
  //   title: "L'ordre des mots en turc",
  //   content:
  //     "En turc, l'ordre des mots de base est Sujet-Objet-Verbe (SOV). Par exemple : 'Ben elma yerim' (Je mange une pomme).",
  //   examples: [
  //     { turkish: "Ben kitap okuyorum", french: "Je lis un livre" },
  //     { turkish: "O çay içiyor", french: "Il/Elle boit du thé" },
  //   ],
  // },
  // {
  //   title: "Les suffixes de possession",
  //   content:
  //     "En turc, on utilise des suffixes pour indiquer la possession, plutôt que des pronoms possessifs séparés.",
  //   examples: [
  //     { turkish: "Evim", french: "Ma maison" },
  //     { turkish: "Kitabın", french: "Ton livre" },
  //     { turkish: "Arabası", french: "Sa voiture" },
  //   ],
  // },
  // {
  //   title: "La négation",
  //   content:
  //     "Pour former la négation en turc, on ajoute généralement le suffixe '-me' ou '-ma' au verbe.",
  //   examples: [
  //     { turkish: "Biliyorum", french: "Je sais" },
  //     { turkish: "Bilmiyorum", french: "Je ne sais pas" },
  //     { turkish: "Gelmedi", french: "Il/Elle n'est pas venu(e)" },
  //   ],
  // },
  {
    title: "1. -ip / -ıp / -up / -üp",
    content:
      "Cette forme permet de relier deux actions qui se succèdent de manière très proche",
    examples: [
      {
        turkish:
          "Dükkâna giren kadın benimle konuşup beni çay içmeye davet etti.",
        french:
          "La femme qui est entrée dans le magasin a parlé avec moi et m'a invité à boire du thé.",
      },
      {
        turkish: "Gördüğün gibi hırsız çantamı çalıp gitti.",
        french: "Comme tu le vois, le voleur a volé mon sac et il est parti .",
      },
      {
        turkish:
          "Bu öğlen, benimle yemek yiyen arkadaşım çay içip kurabiye yedi.",
        french:
          "Mon ami avec lequel nous avons mangé ce midi a bu du thé et à manger des biscuits",
      },
      {
        turkish: "Çalıştığım şef rakı içip fıstık yiyor.",
        french:
          "Le chef avec qui je travaille boit du rakı et mange des pistaches.",
      },
      {
        turkish: "Buraya gelip istediğin kadar kalabilirsin.",
        french: "Tu peux venir ici et rester autant que tu veux.",
      },
    ],
  },
  {
    title: "2. -meden / -madan + önce",
    content:
      'Il est utilisé pour exprimer une action qui doit être effectuée avant une autre action. Il peut être traduit par "avant de".',
    examples: [
      {
        turkish: "Çalışmaya başlamadan önce, istediğimi yapmak isterim.",
        french:
          "Avant de commencer à travailler, j'aimerais faire ce que je veux",
      },
      {
        turkish: "Uyumadan önce size verdiğimi almayı unutmayın.",
        french:
          "N'oubliez pas de prendre ce que je vous ai donné avant de dormir.",
      },
      {
        turkish: "Seninle evlenmeden önce bilseydim, eski eşine sorardım.",
        french:
          "Si j'avais su avant de t'épouser, j'aurais demandé à ton ex-femme.",
      },
      {
        turkish:
          "Eğer param olsaydı, Konya'daki bu daireyi almadan önce Kaş'ta bir daire alırdım.",
        french:
          "Si j'avais de l'argent, avant d'acheter cet appartement à Konya, j'aurais acheté un appartement à Kaş.",
      },
    ],
  },
  {
    title: "2. -meden / -madan",
    content:
      'Il exprime une action qui n\'a pas encore eu lieu ou qui est évitée, et peut être traduit par "sans".',
    examples: [
      {
        turkish: "Konuştuğum adam bana cevap vermeden gitti.",
        french: "L'homme avec lequel j'ai parlé est parti sans me répondre",
      },
      {
        turkish: "Başladığını bitirmeden gitme.",
        french: "Ne pars pas sans finir ce que tu as commencé.",
      },
    ],
  },
  {
    title: "3. à force de (içe içe...)",
    content:
      "Formés en répétant la forme verbale pour exprimer la répétition, l'intensité ou la durée d'une action.",
    examples: [
      {
        turkish: "İsveç'te çalışan kızım konuşa konuşa İsveççe öğrendi.",
        french:
          "Ma fille qui travaille en Suède a appris le suédois en parlant sans cesse.",
      },
      {
        turkish: "Gördüğüm adam rakı içe içe suya düştü.",
        french:
          "L'homme que j'ai vu est tombé dans l'eau à force de boire du rakı.",
      },
      {
        turkish: "Zanzibardayken acılı yemek yiye yiye karnım ağrıyor.",
        french:
          "Quand j'étais à Zanzibar, mon ventre me faisait mal à force de manger des plats épicés.",
      },
      {
        turkish: "Marsilya'ya gidince yüze yüze kollarım ağrıyor.",
        french:
          "En allant à Marseille, à force de nager, mes bras me font mal.",
      },
      {
        turkish: "Her gün spor yapa yapa kendimi formda hissediyorum.",
        french: "À force de faire du sport, je me sens en forme",
      },
      {
        turkish:
          "Bildiğin gibi, yürüye yürüye sabahtan akşama kadar yürüdüğüm için bacaklarım ağrıyor.",
        french:
          "Comme tu le sais, à force de marcher du matin au soir, mes jambes me font mal.",
      },
    ],
  },
  {
    title: "4. -ince / -ınca / -ünce / -unca",
    content:
      'Ce suffixe est utilisé pour indiquer une action qui suit immédiatement une autre action. Il peut se traduire par "après avoir" ou "dès que". Ce suffixe indique une action qui se produit immédiatement après une autre, et peut être traduit par "quand" ou "lorsque".',
    examples: [
      {
        turkish:
          "Dağlara gidince istediğim kadar tırmanış yapıp, mentar olarak toparlayabilirim.",
        french:
          "Quand j'irais dans les montagnes, je pourrai faire de l'escalade et cueillir des champignons autant que tu veux.",
      },
      {
        turkish: "Televizyonda Galatasaray'ın maçı olunca, temizlik yapıyorum.",
        french:
          "Quand le match de Galatasaray passe à la télévision, je fais le ménage.",
      },
      {
        turkish:
          "Evden çalışınca kendimi yorgun hissediyorum, canım dışarı çıkmak istiyor.",
        french:
          "Quand je fais du téletravail, je me sens fatigué(e), j'ai envie de sortir.",
      },
      {
        turkish:
          "Cumhurbaşkanı Erdoğan'ın söylediğine göre, göçmenler gidince Türk ekonomisi iflas edecek.",
        french:
          "D'aprés ce qu'a dit le président Erdoğan, si les migrants partent, l'économie turque fera faillite.",
      },
      {
        turkish: "Şu gibi Türkçe konuşunca bıyıklı bir Türk bulmak isterim.",
        french:
          "Quand je parlerai parfaitement le turc, j'aimerais me trouver un moustachu turc",
      },
      {
        turkish:
          "Japon turistler Paris'e gelince tarihi eserlerin fotoğraflarını çekmeyi seviyorlar.",
        french:
          "Quand les touristes japonais viennent à Paris, ils aiment prendre des photos des monuments historiques.",
      },
    ],
  },
  {
    title: "5. - 'diye'",
    content:
      "En turc, 'diye' est utilisé pour introduire une citation directe ou indirecte, ou pour exprimer une raison ou un objectif. Il peut se traduire par 'en disant', 'afin de', 'pour que' ou 'parce que'.",
    examples: [
      {
        turkish: "Geçen hafta gördüğüm doktor, 'Egzersiz yapın' diye söyledi.",
        french:
          "Le médecin que j'ai vu la semaine dernière m'a dit 'Faites des exercices'.",
      },
      {
        turkish:
          "Cumhurbaşkanı Erdoğan, 'Aday olabilmem için anayasayı değiştirmemiz gerekiyor' diye açıkladı.",
        french:
          "Le président Erdogan a expliqué 'Pour que je puisse être candidat, il faut que nous changions la constitution'.",
      },
      {
        turkish:
          "Metroyu süren şoför, 'Kapıları kapatın yoksa gidemem' diye söyledi.",
        french:
          "Le conducteur qui conduisait le métro a dit 'Fermez les portes sinon je ne peux pas partir'.",
      },
    ],
  },
  {
    title: "6. - '-ememek / -amamak'",
    content:
      "En turc, '-ememek' ou '-amamak' est utilisé pour exprimer l'incapacité à accomplir une action. Le choix entre '-e' et '-a' dépend de l'harmonie vocalique. Le verbe 'yapmak' (faire) devient 'yapamamak' (ne pas pouvoir faire). Voici sa conjugaison au passé simple :\n\n" +
      "**Négatif (incapacité)**:\n" +
      "- Ben yapamadım (Je n'ai pas pu faire)\n" +
      "- Sen yapamadın (Tu n'as pas pu faire)\n" +
      "- O yapamadı (Il/Elle n'a pas pu faire)\n" +
      "- Biz yapamadık (Nous n'avons pas pu faire)\n" +
      "- Siz yapamadınız (Vous n'avez pas pu faire)\n" +
      "- Onlar yapamadılar (Ils/Elles n'ont pas pu faire)",
    examples: [
      {
        turkish: "Vergi müfettişi sorunlarımı çözemedi.",
        french: "L'inspecteur des impôts n'a pas pu résoudre mes points.",
      },
      {
        turkish: "Çok erken olduğu için Noel pazarında sıcak şarap içemedik.",
        french:
          "Puisque c'était trop tôt, nous n'avons pas bu de vin chaud au marché de Noël.",
      },
      {
        turkish: "Ali'nin kaybettiği anahtarları bulamadık.",
        french: "Nous n'avons pas trouvé les clés qu'Ali a perdues.",
      },
      {
        turkish: "Bildiğiniz gibi annemin yaptığı börekleri yiyemedik.",
        french:
          "Comme vous le savez, nous n'avons pas pu manger les böreks que ma mère a faits.",
      },
    ],
  },

  {
    title:
      "'Pour aller faire quelque chose' ou 'Pour finir de faire quelque chose'",
    content:
      "En turc, pour exprimer un objectif ou une condition comme 'pour aller voir' ou 'pour finir de travailler', on utilise une construction qui combine plusieurs éléments grammaticaux. Voici une structure générique :\n\n" +
      "### 1. **Verbe de base + -mA** (Nominalisation)\n" +
      "- On prend la racine du verbe principal et on ajoute **-mA** pour le nominaliser. Cela transforme l'action en un nom abstrait.\n" +
      "- Exemple :\n" +
      "  - **görmek** (voir) → **görme** (le fait de voir).\n" +
      "  - **çalışmak** (travailler) → **çalışma** (le fait de travailler).\n\n" +
      "### 2. **Ajouter '-ye' ou '-e' pour la direction**\n" +
      "- On ajoute le suffixe **-e** (harmonisé en **-ye** si nécessaire) pour indiquer une direction ou un objectif.\n" +
      "- Exemple :\n" +
      "  - **görme + -ye → görmeye** (pour voir).\n" +
      "  - **çalışma + -ya → çalışmaya** (pour travailler).\n\n" +
      "### 3. **Combiner avec un verbe auxiliaire (gitmek, bitirmek, etc.)**\n" +
      "- On combine la forme nominalisée avec un verbe auxiliaire pour indiquer l'action principale.\n" +
      "- Exemple :\n" +
      "  - **görmeye gitmek** : aller voir.\n" +
      "  - **çalışmaya başlamak** : commencer à travailler.\n\n" +
      "### 4. **Ajouter '-ebilmek' pour exprimer la capacité ou possibilité**\n" +
      "- Pour indiquer une possibilité ou une capacité, on ajoute **-ebilmek** au verbe.\n" +
      "- Exemple :\n" +
      "  - **görmeye gidebilmek** : être capable d'aller voir.\n" +
      "  - **çalışmaya devam edebilmek** : pouvoir continuer à travailler.\n\n" +
      "### 5. **Suffixe possessif + 'için' (pour que)**\n" +
      "- On utilise un possessif pour indiquer *qui* est concerné par l'action, puis on ajoute **için** pour indiquer l'objectif ou la condition.\n" +
      "- Exemple :\n" +
      "  - **görmeye gidebilmeniz için** : pour que vous puissiez aller voir.\n" +
      "  - **çalışmayı bitirmeniz için** : pour que vous puissiez finir de travailler.\n\n" +
      "### Résumé de la structure complète :\n" +
      "- Verbe + -mA (nominalisation) + -e/-ye (direction) + verbe auxiliaire (gitmek, bitirmek, etc.) + -ebilmek (possibilité) + suffixe possessif + için (pour que).\n\n",
    examples: [
      {
        turkish:
          "Noel'de ailenizi görmeye gidebilmeniz için, trenin zamanında kalkması gerekiyor.",
        french:
          "Pour que vous puissiez aller voir votre famille à Noël, il faut que le train soit à l'heure.",
      },
      {
        turkish:
          "Arkadaşınızı görmeye gitmeniz için, erken çıkmanız gerekiyor.",
        french:
          "Pour que vous puissiez aller voir votre ami, il faut que vous partiez tôt.",
      },
      {
        turkish:
          "Patronunuzu ikna etmeniz için, daha iyi bir plan hazırlamanız gerekiyor.",
        french:
          "Pour convaincre votre patron, il faut que vous prépariez un meilleur plan.",
      },
    ],
  },
  {
    title: "Le Verbe 'Gerekmek' pour exprimer une nécessité ou une obligation",
    content:
      "'Gerekmek' est un verbe utilisé pour exprimer une nécessité ou une obligation en turc. Il est souvent suivi d'un verbe à l'infinitif ou d'une construction en '-mesi/-ması'. Voici les principales caractéristiques :\n\n" +
      "1. **Forme personnelle :** On l'utilise souvent avec un possessif pour indiquer qui est soumis à l'obligation. Exemples :\n" +
      "- 'Gitmem gerekiyor' : Je dois partir (Il est nécessaire que je parte).\n" +
      "- 'Görüşmeniz gerekiyor' : Vous devez avoir une réunion.\n\n" +
      "2. **Forme générale :** Pour une obligation générale, sans sujet spécifique.\n" +
      "- 'Herkesin kurallara uyması gerekiyor' : Tout le monde doit suivre les règles.\n\n" +
      "3. **Exemple avec 'yapmak' pour toutes les personnes :** Voici un exemple avec le verbe 'yapmak' (faire) pour illustrer l'obligation à chaque personne :\n" +
      "- Benim bunu yapmam gerekiyor. (Je dois faire cela.)\n" +
      "- Senin bunu yapman gerekiyor. (Tu dois faire cela.)\n" +
      "- Onun bunu yapması gerekiyor. (Il/Elle doit faire cela.)\n" +
      "- Bizim bunu yapmamız gerekiyor. (Nous devons faire cela.)\n" +
      "- Sizin bunu yapmanız gerekiyor. (Vous devez faire cela.)\n" +
      "- Onların bunu yapmaları gerekiyor. (Ils/Elles doivent faire cela.)\n\n" +
      "4. **Contexte :** Très utile dans des situations formelles pour exprimer des attentes, des obligations ou des nécessités dans des dialogues professionnels ou quotidiens.",
    examples: [
      {
        turkish: "Müdürüm bana konferansı düzelemem gerektiğini söyledi.",
        french:
          "Mon directeur m'a dit qu'il fallait que j'organise des conférences.",
      },
      {
        turkish: "Eşime İstanbul'da çok yürümesi gerektiğini söyledim.",
        french:
          "J'ai dit à mon mari qu'il fallait beaucoup marcher à Istanbul.",
      },
      {
        turkish:
          "Cumhurbaşkanı Erdoğan memurların biraz daha çok çalışması gerektiğini açıkladı.",
        french:
          "Le président Erdogan a expliqué aux fonctionnaires qu'il fallait qu'ils travaillent beaucoup plus.",
      },
      {
        turkish:
          "Sigortanın müdürü bana  her pazartesi gelmem gerektiğini söyledi.",
        french:
          "Le directeur de l'assurance m'a dit qu'il fallait que je vienne tous les lundis.",
      },
      {
        turkish: "Şefim bana işimi bitirmem gerektiğini söyledi.",
        french: "Mon chef m'a dit qu'il fallait que je termine mon travail.",
      },
      {
        turkish:
          "Fenerbahçe'nin başkanına, Galatasaray maçını kazanmaları gerektiğini söyledim.",
        french:
          "J'ai dit au président de Fenerbahçe qu'il fallait qu'ils gagnent le match contre Galatasaray.",
      },
    ],
  },
  {
    title:
      "Pour exprimer 'Pour que je puisse faire', 'Pour que je ne puisse pas faire', et 'Il faut que je puisse faire'",
    content:
      "Ces structures en turc combinent plusieurs éléments grammaticaux pour exprimer des objectifs ou des nécessités. Voici les différentes constructions :\n\n" +
      "### 1. **Pour que je puisse faire :**\n" +
      "La possibilité est exprimée avec **'-ebilmek'**, suivie d'un possessif et de **'için'** (pour que).\n" +
      "**Structure :**\n" +
      "- Racine verbale (RV) + (Y)ebilmek + suffixe possessif + için.\n\n" +
      "**Exemple avec *yapmak* (faire) :**\n" +
      "- Yapabilmem için : Pour que je puisse faire.\n" +
      "- Yapabilmen için : Pour que tu puisses faire.\n" +
      "- Yapabilmesi için : Pour qu'il/elle puisse faire.\n\n" +
      "### 2. **Pour que je ne puisse pas faire :**\n" +
      "La négation de la possibilité est exprimée avec **'-ememek' / '-amamak'**, suivie d'un possessif et de **'için'** (pour que).\n" +
      "**Structure :**\n" +
      "- Racine verbale (RV) + (Y)ememek / (Y)amamak + suffixe possessif + için.\n\n" +
      "**Exemple avec *yapmak* (faire) :**\n" +
      "- Yapamamam için : Pour que je ne puisse pas faire.\n" +
      "- Yapamaman için : Pour que tu ne puisses pas faire.\n" +
      "- Yapamaması için : Pour qu'il/elle ne puisse pas faire.\n\n" +
      "### 3. **Il faut que je puisse faire :**\n" +
      "Pour combiner la possibilité et la nécessité, on utilise **'-ebilmek'** suivi de **'gerekmek'** (falloir).\n" +
      "**Structure :**\n" +
      "- Racine verbale (RV) + (Y)ebilmek + suffixe possessif + gerekiyor.\n\n" +
      "**Exemple avec *yapmak* (faire) :**\n" +
      "- Yapabilmem gerekiyor : Il faut que je puisse faire.\n" +
      "- Yapabilmen gerekiyor : Il faut que tu puisses faire.\n" +
      "- Yapabilmesi gerekiyor : Il faut qu'il/elle puisse faire.",
    examples: [
      {
        turkish: "Okula gidebilmem için erken kalkmam gerekiyor.",
        french:
          "Pour que je puisse aller à l'école, il faut que je me lève tôt.",
      },
      {
        turkish: "Projeyi bitirebilmemiz için daha çok çalışmamız gerekiyor.",
        french:
          "Pour que nous puissions terminer ce projet, il faut que nous travaillions davantage.",
      },
      {
        turkish: "Yalan söyleyememesi için ona güvenmememiz gerekiyor.",
        french:
          "Pour qu'il ne puisse pas mentir, il faut que nous ne lui fassions pas confiance.",
      },
      {
        turkish: "Kitabı alabilmeniz için size para göndereceğim.",
        french:
          "Pour que vous puissiez acheter le livre, je vais vous envoyer de l'argent.",
      },
      {
        turkish:
          "Herkesin sınavı geçebilmesi için daha çok çalışması gerekiyor.",
        french:
          "Pour que tout le monde puisse réussir l'examen, il faut que chacun travaille davantage.",
      },
    ],
  },
];
