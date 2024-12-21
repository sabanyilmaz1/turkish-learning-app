export interface Translation {
  french: string;
  turkish: string;
  explanation?: string;
}

export interface TranslationWeek {
  title: string;
  translations: Translation[];
}

export const translations: TranslationWeek[] = [
  {
    title: "Devoirs 1",
    translations: [
      {
        french:
          "Si j'avais été heureux avec la fille qui danse, je n'aurais pas parlé avec toi.",
        turkish: "Eğer dans eden kadınla mutlu olsaydım, seninle konuşmazdım.",
        explanation:
          "Conditionnel passé avec 'olsaydım' (si j'étais heureux), suivi de la négation du verbe 'parler' (konuşmazdım).",
      },
      {
        french: "Je ne connais pas l'homme dont tu me parles.",
        turkish: "Bana bahsettiğin adamı tanımıyorum.",
        explanation:
          "Utilisation du suffixe relatif 'diğin' pour exprimer 'dont tu parles' et négation avec 'tanımıyorum'.",
      },
      {
        french:
          "Avant de commencer le match, les footballeurs ont salué les spectateurs qui applaudissaient.",
        turkish:
          "Maça başlamadan önce futbolcular alkışlayan seyircileri selamladı.",
        explanation:
          "Usage de 'başlamadan önce' (avant de commencer) et 'alkışlayan' (qui applaudissaient) pour décrire les spectateurs.",
      },
      {
        french:
          "Si tu étais venu avant 8h, nous aurions pu boire du vin et du fromage blanc.",
        turkish:
          "Eğer saat 8'den önce gelseydin, şarap içip beyaz peynir yiyebilirdik.",
        explanation:
          "Conditionnel passé avec 'gelseydin' (si tu étais venu) et le verbe modal 'yiyebilirdik' (nous aurions pu manger).",
      },
      {
        french: "Aujourd'hui, j'ai mis le pull que ma mère a tricoté.",
        turkish: "Bugün annemin ördüğü kazığı giydim.",
        explanation:
          "Usage de 'ördüğü' (que ma mère a tricoté) pour définir un complément relatif.",
      },
      {
        french:
          "Si vous voulez, vous pouvez manger les börek que ma mère a faits.",
        turkish: "Annemin yaptığı börekleri eğer isterseniz yiyebilirsiniz.",
        explanation:
          "Usage de 'yaptığı' (que ma mère a faits) pour indiquer une action passée, et 'yiyebilirsiniz' (vous pouvez manger) pour exprimer la possibilité.",
      },
    ],
  },
  {
    title: "Devoirs 2",
    translations: [
      {
        french:
          "Si tu vas à Istanbul, je pense que tu pourras manger ce que tu veux.",
        turkish:
          "Eğer İstanbul'a gidersen, istediğini yiyebileceğini düşünüyorum.",
        explanation:
          "Usage de 'gidersen' (si tu vas) pour le conditionnel, et de 'yiyebileceğini' (tu pourras manger) pour exprimer la possibilité future.",
      },
      {
        french:
          "Si un jour j’ai de l’argent, je pourrai acheter le bateau que j’ai vu sur le port de Finike.",
        turkish:
          "Eğer bir gün param olursa, Finike'deki limanda gördüğüm tekneyi satın alabilirdim.",
        explanation:
          "Utilisation de 'param olsa' (si j’ai de l’argent) pour exprimer une hypothèse, et 'gördüğüm tekneyi' (le bateau que j’ai vu) pour une description relative.",
      },
      {
        french:
          "Si tu veux, je pourrai te présenter le patron avec lequel je travaillais.",
        turkish: "İstersen, çalıştığım patronla seni tanıştırabilirim.",
        explanation:
          "Utilisation de 'çalıştığım' (avec lequel je travaillais) pour indiquer une relation et 'tanıştırabilirim' pour exprimer une possibilité.",
      },
      {
        french:
          "Si tu penses te marier avec la fille dont tu m’as parlé, tu seras malheureux.",
        turkish:
          "Bana bahsettiğin kızla evlenmeyi düşünürsen mutsuz olacaksın.",
        explanation:
          "Usage de 'bahsettiğin' (dont tu m’as parlé) pour une description relative et 'düşünürsen' pour exprimer une condition.",
      },
      {
        french: "Si tu ne viens pas, ne viens plus.",
        turkish: "Gelmezsen, gelme.",
        explanation:
          "Condition exprimée par 'gelmezsen' (si tu ne viens pas), suivie d’une injonction 'gelme' (ne viens plus).",
      },
      {
        french:
          "Si (dans le futur) j’ai du temps, je finirai de réparer ma machine à laver.",
        turkish: "Zamanım olursa, çamaşır makinesini tamir etmeyi bitireceğim.",
        explanation:
          "Utilisation de 'zamanım olursa' (si j’ai du temps) pour exprimer une condition future et 'bitireceğim' pour un futur certain.",
      },
    ],
  },
  {
    title: "Devoirs 3",
    translations: [
      {
        french:
          "Si j'avais eu une voiture, j'aurais pu aller voir la fille dont Ali m'a parlé.",
        turkish:
          "Arabam olsaydı, Ali'nin bahsettiği kızla görüşmeye gidebilirdim.",
        explanation:
          "Utilisation de 'olsaydı' pour exprimer le conditionnel passé, et 'bahsettiği kızla' pour une relation descriptive.",
      },
      {
        french:
          "Si vous aviez eu de la viande hachée, du persil et des oignons, vous auriez pu préparer des köfte pour les invités.",
        turkish:
          "Eğer kıyma, maydanoz ve soğanınız olsaydı, misafirler için köfte yapabilirdiniz.",
        explanation:
          "Conditionnel passé avec 'olsaydı' et 'köfte yapabilirdiniz' pour exprimer une action possible dans le passé.",
      },
      {
        french:
          "Si tu avais rangé la chambre des enfants comme je te l'avais dit, ça aurait été bien.",
        turkish:
          "Sana söylediğim gibi çocukların odasını toplasaydın, daha iyi olurdu.",
        explanation:
          "Usage de 'toplasaydın' (si tu avais rangé) pour le conditionnel passé, et 'daha iyi olurdu' pour un résultat hypothétique.",
      },
      {
        french:
          "Si tu m'avais prévenu avant que le chef entende ce que j'ai dit, je ne me serais pas tue.",
        turkish:
          "Eğer şefi söylediklerimi duymadan önce beni uyarsaydın, susmazdım.",
        explanation:
          "Utilisation de 'uyarsaydın' pour le conditionnel passé (si tu m'avais prévenu) et de 'susmazdım' (je ne me serais pas tue) pour exprimer une action négative hypothétique.",
      },
      {
        french:
          "Si Ali n'avait pas de réunion, il aurait pu danser avec Ayşe jusqu'à ce que le directeur arrive.",
        turkish:
          "Eğer Ali'nin toplantısı olmasaydı, müdür gelene kadar Ayşe ile dans edebilirdi.",
        explanation:
          "Conditionnel passé exprimé par 'olmasaydı', suivi de 'gelene kadar' (jusqu'à ce que le directeur arrive) pour indiquer la durée, et 'dans edebilirdi' pour une action hypothétique.",
      },
      {
        french: "Si j'avais su que vous veniez, j'aurais préparé des gözleme.",
        turkish: "Eğer geleceğinizi bilseydim, gözleme yapardım.",
        explanation:
          "Utilisation de 'bilseydim' (si j'avais su) pour exprimer le conditionnel passé, et 'yapardım' pour indiquer une action hypothétique.",
      },
    ],
  },
  {
    title: "Devoirs 4",
    translations: [
      {
        french:
          "D'après ce que j'ai entendu, puisque Ali avait un rendez-vous, il ne peut pas venir à la maison.",
        turkish: "Duyduğuma göre, Ali'nin randevusu olduğu için eve gelememiş.",
        explanation:
          "Utilisation de 'Duyduğuma göre' pour exprimer 'd'après ce que j'ai entendu', et 'randevusu olduğu için' pour indiquer la raison.",
      },
      {
        french:
          "Puisque tu n'as pas attendu jusqu'à ce que j'arrive, je ne peux pas te donner ça.",
        turkish: "Beni gelene kadar beklemediğin için sana bunu veremiyorum.",
        explanation:
          "Utilisation de 'gelene kadar' (jusqu'à ce que j'arrive) pour exprimer une limite, et 'veremiyorum' pour indiquer une impossibilité.",
      },
      {
        french:
          "Bien que le patron avec lequel je travaille soit riche, il ne peut pas m'augmenter.",
        turkish:
          "Benim çalıştığım patron zengin olduğu halde, bana zam yapmıyor.",
        explanation:
          "Usage de 'olduğu halde' pour exprimer 'bien que', et 'zam yapmıyor' pour indiquer une action non réalisée.",
      },
      {
        french: "Bien qu'il ne l'aime pas, il n'arrive pas à le quitter.",
        turkish: "Onu sevmemesine rağmen, terk etmeyi başaramıyor.",
        explanation:
          "Utilisation de 'sevmemesine rağmen' pour exprimer 'bien qu'il ne l'aime pas', et 'terk etmeyi başaramıyor' pour indiquer une impossibilité.",
      },
      {
        french:
          "Quand je suis à Antalya, je n'arrive pas à me promener dans le centre-ville parce qu'il fait trop chaud.",
        turkish:
          "Antalya'dayken, şehir merkezine gezemiyorum çünkü hava çok sıcak.",
        explanation:
          "Usage de 'Antalya'dayken' (quand je suis à Antalya) pour indiquer une situation, et 'gezemiyorum' pour l'incapacité.",
      },
    ],
  },
  {
    title: "Devoirs 5",
    translations: [
      {
        french:
          "Il paraît que le plombier qui travaille sur le chantier n'a pas pu réparer le robinet en plastique.",
        turkish:
          "Şantiyede çalışan tesisatçı, ev sahibi orada olmadığı için plastik musluğu tamir edememiş.",
        explanation:
          "Utilisation de 'çalışan tesisatçı' pour 'le plombier qui travaille' et 'tamir edememiş' pour indiquer une action non réalisée.",
      },
      {
        french:
          "L'avion qui devait décoller ce matin n'a pas pu décoller à cause de la neige.",
        turkish: "Bu sabah kalkması gereken uçak, kar yüzünden kalkamamış.",
        explanation:
          "Usage de 'kalkması gereken' pour 'qui devait décoller' et 'kar yüzünden' pour 'à cause de la neige'.",
      },
      {
        french:
          "Le film qui vient de sortir serait un chef-d'œuvre, mais je n'ai pas pu aller le voir.",
        turkish: "Yeni çıkan film, bir şaheser olmuş ama görmeyi gidemedim.",
        explanation:
          "Utilisation de 'yeni çıkan' pour 'qui vient de sortir' et 'görmeye gidemedim' pour indiquer une impossibilité.",
      },
      {
        french:
          "Le concert a été annulé puisque le chanteur était malade et n'a pas pu sortir du lit.",
        turkish:
          "Konser iptal olmuş çünkü şarkıcı hasta olduğu için yataktan çıkamamış.",
        explanation:
          "Utilisation de 'iptal olmuş' pour 'a été annulé' et 'yataktan çıkamamış' pour indiquer une impossibilité.",
      },
      {
        french:
          "Mes chats n'ont pas pu finir le repas que je leur avais donné.",
        turkish: "Kedilerim verdiğim yemeği bitirememiş.",
        explanation:
          "Utilisation de 'verdiğim yemeği' pour 'le repas que j'avais donné' et 'bitirememiş' pour indiquer une incapacité.",
      },
      {
        french:
          "Le professeur n'a pas pu donner de bonnes notes aux élèves qui n'ont pas fait leurs devoirs.",
        turkish: "Ödevlerini yapmayan öğrencilere öğretmen iyi not veremedi.",
        explanation:
          "Usage de 'ödevlerini yapmayan' pour 'qui n'ont pas fait leurs devoirs' et 'not veremedi' pour indiquer une incapacité.",
      },
    ],
  },
  {
    title: "Devoirs 6",
    translations: [
      {
        french:
          "J'ai dit à l'électricien qu'il fallait qu'il place la prise ici.",
        turkish: "Elektrikçiye prizi buraya koyması gerektiğini söyledim.",
        explanation:
          "Utilisation de 'gerek'tiğini' pour exprimer 'qu'il fallait' et 'prizi buraya koyması' pour décrire l'action.",
      },
      {
        french:
          "La mère a dit à son fils qu'il fallait qu'il soit gentil avec les personnes âgées.",
        turkish: "Anne, oğluna yaşlı kişilerle iyi olması gerektiğini söyledi.",
        explanation:
          "Usage de 'iyi olması gerektiğini' pour 'qu'il fallait qu'il soit gentil' avec un ton respectueux.",
      },
      {
        french:
          "La maman a dit à la nourrice qu'il fallait qu'elle change la couche chaque heure.",
        turkish: "Anne, dadıya her saat bez değiştirmesi gerektiğini söyledi.",
        explanation:
          "Utilisation de 'her saat bez değiştirmesi gerektiğini' pour indiquer une obligation répétée dans le temps.",
      },
      {
        french: "Vous savez ce que vous devez faire.",
        turkish: "Ne yapmanız gerektiğini biliyorsunuz.",
        explanation:
          "Usage de 'yapmanız gerektiğini' pour traduire 'ce que vous devez faire' avec précision.",
      },
      {
        french: "Le maire a dit qu'il fallait construire des nouveaux parcs.",
        turkish:
          "Belediye başkanı, yeni parklar yapılması gerektiğini söyledi.",
        explanation:
          "Utilisation de 'yeni parklar yapılması gerektiğini' pour indiquer la nécessité de construire de nouveaux parcs.",
      },
      {
        french: "Le professeur a dit qu'il fallait écouter ses camarades.",
        turkish: "Hoca, arkadaşlarını dinlemesi gerektiğini söyledi.",
        explanation:
          "Usage de 'arkadaşlarını dinlemesi gerektiğini' pour indiquer une recommandation ou obligation.",
      },
    ],
  },
  {
    title: "Devoirs 7",
    translations: [
      {
        french:
          "J'ai très mal à la tête, je ne pourrai pas venir au cours demain.",
        turkish: "Başım çok ağrıyor, yarın derse gelemem.",
        explanation:
          "Utilisation de 'çok ağrıyor' pour décrire une douleur intense et de 'gelemem' (je ne pourrai pas venir).",
      },
      {
        french:
          "Puisque le train que je devais prendre est en retard, je ne peux pas être à l'heure à mon RDV.",
        turkish:
          "Binmem gereken trenin geciktiği için, randevuma zamanında gidemeyeceğim.",
        explanation:
          "Le train étant en retard ('geciktiği için'), cela implique une impossibilité exprimée avec 'gidemeyeceğim'.",
      },
      {
        french:
          "Le camion qui devait livrer du béton n'a pas pu venir parce qu'il avait eu un accident.",
        turkish:
          "Beton teslim etmesi gereken kamyon, kaza yaptığı için gelemedi.",
        explanation:
          "On utilise 'gelemedi' pour montrer que le camion n'est pas venu à cause d'un obstacle.",
      },
      {
        french:
          "Le chanteur qui devait enregistrer son album n'a pas pu le faire à cause d'une panne d'électricité.",
        turkish:
          "Albüm kaydetmesi gereken şarkıcı, elektrik kesintisi yüzünden yapamamış.",
        explanation:
          "Exploitation de 'elektrik kesintisi yüzünden' pour expliquer la cause, suivi de 'yapamamış' pour indiquer l'impossibilité.",
      },
      {
        french:
          "Il paraît qu'il neige beaucoup à Istanbul, je ne pourrai pas aller jusqu'à Ankara en autobus.",
        turkish:
          "İstanbul'da çok yağiyormuş, otobüsle Ankara'ya kadar gidemem.",
        explanation:
          "Emploi de ' yağiyormuş' pour décrire une situation passée impactant le futur ('gidemem').",
      },
      {
        french:
          "J'ai demandé au peintre : 'Est-ce que tu ne pourrais pas attendre quelques semaines pour que je te paie ?'",
        turkish:
          "Boyacıya, 'Sana ödemem için birkaç hafta bekleyemez misin?' diye sordum.",
        explanation:
          "Utilisation de 'bekleyemez misin?' pour formuler une question négative polie et de 'diye sordum' pour indiquer que la question a été posée.",
      },
    ],
  },
  {
    title: "Devoirs 8",
    translations: [
      {
        french:
          "Pour que je puisse déménager à ma maison qui est à Çardarlı, il faut que le chantier soit terminé.",
        turkish:
          "Çardarlıdaki evime taşınabilmem için, şantiye bitmesi gerekiyor.",
        explanation:
          "Usage du subjonctif avec 'bitmesi gerekiyor' pour exprimer une condition.",
      },
      {
        french: "Pour que je ne me blesse pas, il faut que je mette des gants.",
        turkish: "Yaralanmamam için, eldiven takmam gerekiyor.",
        explanation:
          "Utilisation de 'yaralanmamam için' pour exprimer une prévention avec 'gerekiyor'.",
      },
      {
        french: "J'ai parlé en turc pour que tu ne puisses pas comprendre.",
        turkish: "Beni anlayamaman için, Türkçe konuştum.",
        explanation: "Usage de 'anlayamaman için' pour montrer une raison.",
      },
      {
        french:
          "Pour que vous puissiez aller voir votre famille à Noël, il faut que le train soit à l'heure.",
        turkish:
          "Noel'de ailenizi görmeye gidebilmeniz için, trenin zamanında kalkması gerekiyor.",
        explanation:
          "Utilisation de 'görmeye gidebilmeniz için' pour indiquer une condition nécessaire.",
      },
      {
        french: "Que puis-je faire d'autre pour que tu m'aimes encore ?",
        turkish: "Beni hala sevmen için, baska ne yapalirim?",
        explanation:
          "Usage de 'hala sevmen için' pour exprimer un but avec 'ne yapmam gerekiyor'.",
      },
      {
        french:
          "Pour que mon voisin puisse oublier la fille qu'il aimait, il faut qu'il boive du rakı.",
        turkish: "Komşumun sevdiği kızı unutabilmesi için, rakı içmesi lazım.",
        explanation:
          "Usage de 'unutabilmesi için' pour indiquer une condition hypothétique avec 'lazım'.",
      },
    ],
  },
];
