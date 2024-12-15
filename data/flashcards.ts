export interface Flashcard {
  front: string;
  back: string;
  context: string;
  exemple: string;
  successCount?: number;
}

export const flashcards: Flashcard[] = [
  {
    front: "Kalabalığı",
    back: "La foule",
    context: "Utilisé pour désigner un grand groupe de personnes rassemblées.",
    exemple:
      "Kalabalığı yararak ilerledik. (Nous avons avancé en traversant la foule.)",
  },
  {
    front: "Çerçeve",
    back: "Cadre",
    context:
      "Peut désigner le cadre d’un tableau ou les limites abstraites d'une situation.",
    exemple:
      "Tablonun çerçevesi çok eski. (Le cadre du tableau est très ancien.)",
  },
  {
    front: "Seyahat et",
    back: "Voyage",
    context:
      "Utilisé pour exprimer l'action de voyager d’un endroit à un autre.",
    exemple:
      "Yarın yeni bir ülkeye seyahat edeceğim. (Demain, je vais voyager dans un nouveau pays.)",
  },
  {
    front: "Kıta",
    back: "Continent",
    context:
      "Utilisé pour désigner les grandes masses terrestres de la planète.",
    exemple: "Afrika, büyük bir kıta. (L’Afrique est un grand continent.)",
  },

  {
    front: "Talihsiz",
    back: "Malchanceux",
    context: "Utilisé pour décrire quelqu’un qui manque de chance.",
    exemple: "Talihsiz bir kaza oldu. (Un accident malchanceux est survenu.)",
  },
  {
    front: "Gövdem",
    back: "Mon corps",
    context: "Utilisé pour désigner le corps physique d'une personne.",
    exemple: "Gövdem çok yorgun. (Mon corps est très fatigué.)",
  },
  {
    front: "Cinsiyetim",
    back: "Mon sexe",
    context:
      "Utilisé pour parler du sexe ou du genre biologique d'une personne.",
    exemple: "Cinsiyetim erkek. (Mon sexe est masculin.)",
  },

  {
    front: "Alevlerden",
    back: "Des flammes",
    context: "Utilisé pour parler des flammes créées par un incendie.",
    exemple:
      "Alevlerden kaçmayı başardılar. (Ils ont réussi à échapper aux flammes.)",
  },

  {
    front: "Daha ince",
    back: "Plus fin",
    context:
      "Utilisé pour décrire quelque chose de plus fin en épaisseur ou élégance.",
    exemple: "Bu kitap daha ince. (Ce livre est plus fin.)",
  },
  {
    front: "Şefkat",
    back: "Tendresse",
    context:
      "Utilisé pour décrire des sentiments de douceur et de bienveillance.",
    exemple:
      "Ona büyük bir şefkat gösterdi. (Il lui a montré beaucoup de tendresse.)",
  },
  {
    front: "İlkokula",
    back: "À l'école primaire",
    context:
      "Utilisé pour parler de l'école primaire pour les enfants de 6 à 12 ans.",
    exemple:
      "Kardeşim ilkokula başladı. (Mon frère a commencé l'école primaire.)",
  },
  {
    front: "Kuşağın",
    back: "Ta génération",
    context: "Utilisé pour parler d'une génération spécifique.",
    exemple:
      "Kuşağın çok farklı düşünüyor. (Ta génération pense très différemment.)",
  },
  {
    front: "Bağlanti",
    back: "Connexion",
    context:
      "Utilisé pour parler d'une relation ou d'une connexion entre deux choses.",
    exemple:
      "İnternet bağlantısı çok yavaştı. (La connexion Internet était très lente.)",
  },
  {
    front: "Oyuncular",
    back: "Les acteurs",
    context:
      "Utilisé pour désigner les personnes jouant dans une pièce, un film ou un sport.",
    exemple:
      "Bu filmde çok ünlü oyuncular var. (Il y a des acteurs très célèbres dans ce film.)",
  },
  {
    front: "Dolandırıcı",
    back: "Escroc",
    context:
      "Utilisé pour désigner quelqu'un qui trompe les autres pour des gains personnels.",
    exemple: "Bu dolandırıcıya dikkat et. (Fais attention à cet escroc.)",
  },
  {
    front: "Bildirmek",
    back: "Informer",
    context: "Utilisé pour parler de l'action de transmettre des informations.",
    exemple:
      "Durumu polise bildirdim. (J'ai informé la police de la situation.)",
  },
  {
    front: "Başkent",
    back: "Capitale",
    context: "Utilisé pour désigner la ville principale d'un pays.",
    exemple:
      "Paris, Fransa'nın başkenti. (Paris est la capitale de la France.)",
  },
  {
    front: "Aktarma",
    back: "Transfert",
    context:
      "Utilisé pour parler du processus de déplacer quelque chose d'un endroit à un autre.",
    exemple:
      "Yolculuk sırasında bir aktarma yapacağız. (Nous allons faire un transfert pendant le voyage.)",
  },
  {
    front: "Tehlikeli",
    back: "Dangereux",
    context: "Utilisé pour décrire une situation ou une chose risquée.",
    exemple: "Bu yol çok tehlikeli. (Cette route est très dangereuse.)",
  },
  {
    front: "Onun sayesinde",
    back: "Grâce à lui/elle",
    context:
      "Utilisé pour exprimer que quelque chose est arrivé grâce à une personne.",
    exemple: "Bu başarı onun sayesinde oldu. (Ce succès est grâce à lui/elle.)",
  },
  {
    front: "Onun sayesinde",
    back: "Grâce à lui/elle",
    context:
      "Utilisé pour indiquer que quelque chose s'est réalisé grâce à l'aide ou à la contribution de quelqu'un.",
    exemple: "Bu başarı onun sayesinde oldu. (Ce succès est grâce à lui/elle.)",
  },
  {
    front: "İyileşmek",
    back: "Guérir",
    context:
      "Utilisé pour parler de la récupération de la santé après une maladie ou une blessure.",
    exemple:
      "Hastanede iyileşmek için zaman geçirdi. (Il/elle a passé du temps à l'hôpital pour guérir.)",
  },
  {
    front: "Topuğum kırıldı",
    back: "Mon talon s'est cassé",
    context: "Utilisé pour indiquer que le talon d'une chaussure est cassé.",
    exemple:
      "Yolda yürürken topuğum kırıldı. (Mon talon s'est cassé en marchant dans la rue.)",
  },
  {
    front: "Zarar etmez",
    back: "Ça ne fait pas de mal",
    context: "Utilisé pour indiquer qu'il n'y a pas d'impact négatif.",
    exemple:
      "Biraz dinlenmek zarar etmez. (Se reposer un peu ne fait pas de mal.)",
  },
  {
    front: "Mutluysalar",
    back: "S'ils sont heureux",
    context:
      "Utilisé pour exprimer une condition où les autres personnes sont heureuses.",
    exemple:
      "Mutluysalar, sorun yok. (S'ils sont heureux, il n'y a pas de problème.)",
  },
  {
    front: "Kan tahlili",
    back: "Analyse de sang",
    context:
      "Utilisé pour désigner un test médical réalisé en laboratoire sur un échantillon de sang.",
    exemple:
      "Doktor benden kan tahlili istedi. (Le médecin m'a demandé une analyse de sang.)",
  },
  {
    front: "Hâlâ",
    back: "Encore",
    context:
      "Utilisé pour exprimer la continuation d'une situation ou d'une action.",
    exemple: "Hâlâ bekliyorum. (J'attends encore.)",
  },
  {
    front: "Köşede",
    back: "Dans le coin",
    context:
      "Utilisé pour indiquer un endroit dans un angle ou à la périphérie d'un espace.",
    exemple: "Kitap köşede duruyor. (Le livre est dans le coin.)",
  },
  {
    front: "iklim güzel",
    back: "Le climat est bon",
    context:
      "Utilisé pour décrire un climat ou une situation qui est favorable.",
    exemple: "Bu iklim güzel. (Ce climat est bon.)",
  },
  {
    front: "Cerrah",
    back: "Chirurgien",
    context: "Utilisé pour désigner un médecin spécialisé en chirurgie.",
    exemple:
      "Cerrah ameliyata başladı. (Le chirurgien a commencé l'opération.)",
  },
  {
    front: "Geçirmek",
    back: "Passer",
    context:
      "Utilisé pour parler du fait de passer du temps ou de traverser une expérience.",
    exemple:
      "Tatili ailemle geçirdim. (J'ai passé les vacances avec ma famille.)",
  },
  {
    front: "Seviye",
    back: "Niveau",
    context: "Utilisé pour indiquer un degré ou une étape dans un processus.",
    exemple: "Dil seviyem oldukça iyi. (Mon niveau de langue est assez bon.)",
  },
  {
    front: "Tesadüf",
    back: "Coïncidence",
    context: "Utilisé pour décrire un événement survenu par hasard.",
    exemple:
      "Onu burada görmek büyük bir tesadüf. (Le voir ici est une grande coïncidence.)",
  },
  {
    front: "Yemyeşil",
    back: "Verdoyant",
    context: "Utilisé pour décrire quelque chose de très vert, luxuriant.",
    exemple: "Orman yemyeşildi. (La forêt était verdoyante.)",
  },
  {
    front: "Reçete",
    back: "Ordonnance",
    context: "Utilisé pour parler d'une prescription médicale.",
    exemple: "Doktor reçeteyi yazdı. (Le médecin a écrit l'ordonnance.)",
  },
  {
    front: "Kendinden bahsediyor",
    back: "Il/Elle parle de lui/d'elle-même",
    context: "Utilisé pour indiquer que quelqu'un parle de soi.",
    exemple:
      "O sürekli kendinden bahsediyor. (Il/elle parle toujours de lui/d'elle-même.)",
  },
  {
    front: "Ara sıra",
    back: "De temps en temps",
    context:
      "Utilisé pour indiquer une action qui se produit occasionnellement.",
    exemple:
      "Ara sıra onu ziyaret ederim. (Je lui rends visite de temps en temps.)",
  },
  {
    front: "Cinayet",
    back: "Meurtre",
    context:
      "Utilisé pour désigner l'acte de tuer intentionnellement quelqu'un.",
    exemple:
      "Cinayet mahallinde kanıtlar bulundu. (Des preuves ont été trouvées sur le lieu du meurtre.)",
  },
  {
    front: "Gösteriş",
    back: "Ostentation",
    context:
      "Utilisé pour décrire un comportement visant à se faire remarquer.",
    exemple:
      "Gösteriş yapmak hoş değil. (Faire de l'ostentation n'est pas agréable.)",
  },
  {
    front: "Mücevher",
    back: "Bijou",
    context: "Utilisé pour parler de bijoux ou de pierres précieuses.",
    exemple:
      "O, annesinin mücevherlerini taktı. (Elle a porté les bijoux de sa mère.)",
  },
  {
    front: "Ederin",
    back: "Ta valeur",
    context: "Utilisé pour parler de la valeur ou du prix de quelque chose.",
    exemple: "Sen kendi ederini biliyor musun? (Connais-tu ta propre valeur ?)",
  },
  {
    front: "Fizik tedavi uzmani",
    back: "Spécialiste en physiothérapie",
    context:
      "Utilisé pour désigner un professionnel dans le domaine de la physiothérapie.",
    exemple:
      "Fizik tedavi uzmanı bana yardımcı oldu. (Le spécialiste en physiothérapie m'a aidé.)",
  },
  {
    front: "Aliştirma",
    back: "Exercice",
    context:
      "Utilisé pour parler d'une activité physique ou d'un entraînement.",
    exemple:
      "Günlük alıştırmalar yapmak sağlıklıdır. (Faire des exercices quotidiens est sain.)",
  },
  {
    front: "Çökertme",
    back: "Effondrement",
    context: "Utilisé pour décrire une chute ou un effondrement structurel.",
    exemple:
      "Binada çökertme oldu. (Il y a eu un effondrement dans le bâtiment.)",
  },
  {
    front: "Enişte",
    back: "Beau-frère",
    context: "Utilisé pour désigner le mari de la sœur.",
    exemple: "Eniştem evde değil. (Mon beau-frère n'est pas à la maison.)",
  },
  {
    front: "Yenge",
    back: "Belle-sœur",
    context: "Utilisé pour désigner l'épouse du frère.",
    exemple:
      "Yengem çok nazik birisi. (Ma belle-sœur est une personne très gentille.)",
  },
  {
    front: "Başin sağolsun",
    back: "Mes condoléances",
    context: "Utilisé pour exprimer des condoléances suite à un décès.",
    exemple:
      "Başınız sağ olsun, çok üzgünüm. (Mes condoléances, je suis vraiment désolé.)",
  },
  {
    front: "Birleşmiş milletler",
    back: "Nations Unies",
    context: "Organisation internationale qui regroupe les pays du monde.",
    exemple:
      "Birleşmiş Milletler barışı sağlamaya çalışıyor. (Les Nations Unies essaient d'assurer la paix.)",
  },
  {
    front: "Düzenlemek",
    back: "Organiser",
    context: "Utilisé pour parler de l'action d'organiser quelque chose.",
    exemple:
      "Düğünümüzü düzenlemek için çok çalışıyoruz. (Nous travaillons beaucoup pour organiser notre mariage.)",
  },
  {
    front: "Töprum",
    back: "Confession",
    context: "Terme utilisé dans un contexte religieux pour désigner un aveu.",
    exemple: "Rahip ona töprum yaptı. (Le prêtre lui a fait la confession.)",
  },
  {
    front: "Sergi",
    back: "Exposition",
    context: "Utilisé pour désigner une exposition d'art ou d'objets.",
    exemple:
      "Sanat sergisi çok ilginçti. (L'exposition d'art était très intéressante.)",
  },
  {
    front: "İkinci el",
    back: "Occasion",
    context: "Utilisé pour décrire des objets de seconde main.",
    exemple:
      "İkinci el eşyalar almak çevre için iyi bir şeydir. (Acheter des objets d'occasion est bon pour l'environnement.)",
  },
  {
    front: "Kütapane",
    back: "Bibliothèque",
    context: "Endroit où les livres sont stockés et prêts à être empruntés.",
    exemple:
      "Kütüphaneye gitmek çok keyifli. (Aller à la bibliothèque est très agréable.)",
  },
  {
    front: "Çizgi roman",
    back: "Bande dessinée",
    context:
      "Utilisé pour désigner un livre composé de dessins et de dialogues.",
    exemple:
      "Çizgi roman okumayı çok seviyorum. (J'adore lire des bandes dessinées.)",
  },
  {
    front: "Kalın",
    back: "Épais",
    context: "Utilisé pour décrire quelque chose avec une grande épaisseur.",
    exemple: "Kalın bir kitap aldım. (J'ai acheté un livre épais.)",
  },
  {
    front: "Geçici",
    back: "Temporaire",
    context: "Utilisé pour désigner quelque chose qui n'est pas permanent.",
    exemple: "Geçici bir iş buldum. (J'ai trouvé un travail temporaire.)",
  },
  {
    front: "Bedeva",
    back: "Gratuit",
    context: "Utilisé pour décrire quelque chose qui est offert sans frais.",
    exemple: "Bedeva bir hediye aldım. (J'ai reçu un cadeau gratuit.)",
  },
  {
    front: "Tarihi eser",
    back: "Monument historique",
    context: "Utilisé pour désigner un bien culturel ou historique protégé.",
    exemple:
      "Tarihi eserleri korumak çok önemlidir. (Il est très important de protéger les monuments historiques.)",
  },
  {
    front: "Çamaşır yikamak",
    back: "Laver le linge",
    context: "Action de laver les vêtements.",
    exemple: "Çamaşır yıkamayı unuttum. (J'ai oublié de laver le linge.)",
  },
  {
    front: "Tedavi",
    back: "Traitement",
    context: "Utilisé pour désigner un soin médical ou thérapeutique.",
    exemple:
      "Tedaviye hemen başladık. (Nous avons commencé le traitement immédiatement.)",
  },
  {
    front: "Amaç",
    back: "Objectif",
    context: "Utilisé pour désigner une finalité ou un but.",
    exemple:
      "Amaçları büyük başarılar elde etmektir. (Leurs objectifs sont d'atteindre de grands succès.)",
  },
  {
    front: "Soba",
    back: "Poêle",
    context: "Appareil de chauffage utilisé pour chauffer une pièce.",
    exemple: "Soba yakmayı unutma. (N'oublie pas d'allumer le poêle.)",
  },
  {
    front: "Ateş yakmak",
    back: "Allumer le feu",
    context: "Action d'allumer un feu pour la chaleur ou la cuisine.",
    exemple:
      "Ateş yakmak için odun toplamamız gerekiyor. (Nous devons ramasser du bois pour allumer le feu.)",
  },
  {
    front: "Odun",
    back: "Bois",
    context: "Matériau utilisé pour le feu ou la construction.",
    exemple: "Odunları kesmemiz lazım. (Nous devons couper le bois.)",
  },
  {
    front: "Yuvarlak",
    back: "Rond",
    context: "Utilisé pour décrire une forme circulaire.",
    exemple: "Yuvarlak bir masa aldık. (Nous avons acheté une table ronde.)",
  },
  {
    front: "Tüp",
    back: "Bouteille de gaz",
    context:
      "Utilisé pour désigner un récipient sous pression contenant du gaz.",
    exemple:
      "Tüpleri değiştirmemiz gerekiyor. (Nous devons changer les bouteilles de gaz.)",
  },
  {
    front: "Basit",
    back: "Simple",
    context: "Utilisé pour décrire quelque chose de facile ou de peu complexe.",
    exemple: "Bu problem çok basit. (Ce problème est très simple.)",
  },
  {
    front: "Yazismak",
    back: "Correspondre",
    context: "Échanger des lettres ou des messages avec quelqu'un.",
    exemple:
      "Uzun zamandır yazışmıyoruz. (Nous n'avons pas échangé de lettres depuis longtemps.)",
  },
  {
    front: "Yeşil fasulye",
    back: "Haricots verts",
    context: "Légume vert couramment utilisé dans la cuisine.",
    exemple:
      "Yeşil fasulye yemek çok sağlıklıdır. (Manger des haricots verts est très sain.)",
  },
  {
    front: "Sinir",
    back: "Nerf",
    context: "Utilisé pour désigner une partie du système nerveux.",
    exemple: "Sinirlerim çok gergin. (Mes nerfs sont très tendus.)",
  },
  {
    front: "Soyadi",
    back: "Nom de famille",
    context: "Nom hérité de la famille.",
    exemple: "Soyadınızı yazın lütfen. (Veuillez écrire votre nom de famille.)",
  },
  {
    front: "Catişma",
    back: "Conflit",
    context: "Utilisé pour désigner une dispute ou un désaccord.",
    exemple: "Catişmayı çözmemiz lazım. (Nous devons résoudre le conflit.)",
  },
  {
    front: "Aktarma",
    back: "Transfert",
    context:
      "Utilisé pour désigner le processus de transfert d'une chose à une autre.",
    exemple: "Aktarma işlemi başladı. (Le transfert a commencé.)",
  },
  {
    front: "Tamirat",
    back: "Réparation",
    context: "Utilisé pour parler de l'action de réparer quelque chose.",
    exemple:
      "Evde tamirat yapmamız gerekiyor. (Nous devons faire des réparations à la maison.)",
  },
  {
    front: "Katki",
    back: "Contribution",
    context: "Utilisé pour désigner une aide ou une participation.",
    exemple:
      "Katkılarınız için teşekkür ederim. (Merci pour votre contribution.)",
  },
  {
    front: "İlçe",
    back: "District",
    context: "Division administrative d'une ville.",
    exemple:
      "İlçemizde yeni bir okul açıldı. (Une nouvelle école a ouvert dans notre district.)",
  },
  {
    front: "İkamet",
    back: "Résidence",
    context: "Lieu où une personne vit.",
    exemple:
      "İkamet adresinizi değiştirdiniz mi? (Avez-vous changé votre adresse de résidence ?)",
  },
  {
    front: "Yokuş",
    back: "Montée",
    context: "Utilisé pour parler d'une pente ascendante.",
    exemple: "Yokuşu çıkmak zor oldu. (Monter la pente était difficile.)",
  },
  {
    front: "İniş",
    back: "Descente",
    context: "Utilisé pour désigner une pente descendante.",
    exemple: "İniş çok hızlıydı. (La descente a été très rapide.)",
  },
  {
    front: "İkram etmek",
    back: "Offrir (quelque chose à manger/boire)",
    context: "Utilisé pour offrir de la nourriture ou des boissons.",
    exemple: "Bize çay ikram etti. (Il/elle nous a offert du thé.)",
  },
  {
    front: "Gösteri",
    back: "Spectacle",
    context: "Utilisé pour parler d'une performance ou d'un événement public.",
    exemple:
      "Gösteri çok etkileyiciydi. (Le spectacle était très impressionnant.)",
  },
  {
    front: "Keşfettiğini anlatti",
    back: "Il/Elle a raconté ce qu'il/elle a découvert.",
    context: "Utilisé pour décrire le partage d'une découverte.",
    exemple:
      "Keşfettiğini anlatti, hepimiz şaşırdık. (Il/elle a raconté ce qu'il/elle a découvert, nous étions tous surpris.)",
  },
  {
    front: "Sıkışık",
    back: "Encombré",
    context: "Utilisé pour décrire un endroit ou une situation bondée.",
    exemple: "Otobüs çok sıkışıktı. (Le bus était très encombré.)",
  },
  {
    front: "Rehber",
    back: "Guide",
    context:
      "Utilisé pour désigner une personne qui guide ou un manuel explicatif.",
    exemple: "Rehberimiz çok bilgiliydi. (Notre guide était très compétent.)",
  },
  {
    front: "Nemli",
    back: "Humide",
    context: "Utilisé pour décrire un environnement avec de l'humidité.",
    exemple: "Hava çok nemliydi. (Le temps était très humide.)",
  },
  {
    front: "Yapışmak",
    back: "Coller",
    context: "Utilisé pour décrire quelque chose qui adhère à une surface.",
    exemple: "Etiket şişeye yapıştı. (L'étiquette a collé à la bouteille.)",
  },
  {
    front: "Çürümek",
    back: "Pourrir",
    context: "Utilisé pour décrire la décomposition de quelque chose.",
    exemple: "Meyve çürümeye başladı. (Le fruit a commencé à pourrir.)",
  },
  {
    front: "Dua etmek",
    back: "Prier",
    context: "Utilisé pour parler de l'action de prier.",
    exemple: "Herkes onun için dua etti. (Tout le monde a prié pour lui/elle.)",
  },
  {
    front: "İğne yapmak",
    back: "Faire une injection",
    context: "Utilisé dans le domaine médical pour administrer une injection.",
    exemple: "Hemşire bana iğne yaptı. (L'infirmière m'a fait une injection.)",
  },
  {
    front: "Aşırı",
    back: "Excessif",
    context: "Utilisé pour décrire quelque chose de trop intense ou important.",
    exemple: "Aşırı sıcak vardı. (Il faisait excessivement chaud.)",
  },
  {
    front: "Sahne",
    back: "Scène",
    context: "Utilisé pour parler d'une scène de spectacle ou d'un événement.",
    exemple:
      "Sahneye çıkmaya hazırdı. (Il/elle était prêt(e) à monter sur scène.)",
  },
  {
    front: "Ortam",
    back: "Environnement",
    context: "Utilisé pour parler d'un milieu ou d'une ambiance.",
    exemple: "Ortam çok samimiydi. (L'environnement était très chaleureux.)",
  },
  {
    front: "Düğme",
    back: "Bouton",
    context: "Utilisé pour désigner un bouton de vêtement ou un interrupteur.",
    exemple: "Düğme koptu. (Le bouton s'est détaché.)",
  },
  {
    front: "Hareket",
    back: "Mouvement",
    context: "Utilisé pour décrire une action ou un mouvement.",
    exemple: "Hareket etmeye başladı. (Il/elle a commencé à bouger.)",
  },
  {
    front: "Biri, diğeri",
    back: "L'un, l'autre",
    context: "Utilisé pour distinguer deux choses ou personnes.",
    exemple: "Biri gitti, diğeri kaldı. (L'un est parti, l'autre est resté.)",
  },
  {
    front: "Organ bağışı",
    back: "Don d'organes",
    context: "Utilisé pour parler du don d'organes à des fins médicales.",
    exemple:
      "Organ bağışı hayat kurtarabilir. (Le don d'organes peut sauver des vies.)",
  },
  {
    front: "Orta sınıf",
    back: "Classe moyenne",
    context: "Utilisé pour désigner une catégorie socio-économique.",
    exemple:
      "Orta sınıfın gelir düzeyi değişti. (Le niveau de revenu de la classe moyenne a changé.)",
  },
  {
    front: "Birbirlerini",
    back: "Les uns les autres",
    context: "Utilisé pour décrire une interaction mutuelle.",
    exemple: "Birbirlerini sevdiler. (Ils se sont aimés.)",
  },
  {
    front: "Düzenlemek",
    back: "Organiser",
    context: "Utilisé pour parler de l'action d'organiser.",
    exemple:
      "Toplantıyı düzenlemek zorundayız. (Nous devons organiser la réunion.)",
  },
  {
    front: "Damat",
    back: "Gendre",
    context: "Utilisé pour désigner le mari de la fille.",
    exemple: "Damat çok nazikti. (Le gendre était très gentil.)",
  },
  {
    front: "Posta kutusuna",
    back: "Dans la boîte aux lettres",
    context: "Utilisé pour désigner l'endroit où l'on dépose du courrier.",
    exemple:
      "Mektubu posta kutusuna attım. (J'ai mis la lettre dans la boîte aux lettres.)",
  },
  {
    front: "Çıkartmak",
    back: "Enlever",
    context: "Utilisé pour parler de l'action de retirer quelque chose.",
    exemple: "Paltosunu çıkarttı. (Il/elle a enlevé son manteau.)",
  },
  {
    front: "Canım sağolsun",
    back: "Je m'en fiche (expression)",
    context: "Utilisé pour montrer l'indifférence ou relativiser une perte.",
    exemple:
      "Param gitti ama canım sağolsun. (J'ai perdu mon argent mais peu importe.)",
  },
  {
    front: "Sigorta",
    back: "Fusible",
    context: "Utilisé pour parler d'un dispositif de sécurité électrique.",
    exemple: "Sigorta attı. (Le fusible a sauté.)",
  },
  {
    front: "Körfez",
    back: "Golfe",
    context: "Utilisé pour désigner une étendue d'eau entourée de terre.",
    exemple: "Körfez çok güzeldi. (Le golfe était magnifique.)",
  },
  {
    front: "Fırtına",
    back: "Tempête",
    context: "Utilisé pour parler d'un phénomène météorologique violent.",
    exemple: "Fırtına çok şiddetliydi. (La tempête était très violente.)",
  },
  {
    front: "Kısılmak",
    back: "Être réduit",
    context: "Utilisé pour parler d'une diminution.",
    exemple: "Ses kısıldı. (Le son a été réduit.)",
  },
  {
    front: "Renkler",
    back: "Couleurs",
    context: "Utilisé pour parler des couleurs en général.",
    exemple: "Renkler çok canlıydı. (Les couleurs étaient très vives.)",
  },
  {
    front: "Zevkler",
    back: "Goûts",
    context: "Utilisé pour parler des préférences personnelles.",
    exemple: "Zevkler tartışılmaz. (Les goûts ne se discutent pas.)",
  },
  {
    front: "Tartışılmak",
    back: "Être discuté",
    context: "Utilisé pour parler d'un sujet débattu.",
    exemple: "Konu çok tartışıldı. (Le sujet a été beaucoup discuté.)",
  },
  {
    front: "Çoğunluk",
    back: "Majorité",
    context: "Utilisé pour désigner la plus grande partie d'un groupe.",
    exemple: "Çoğunluk katıldı. (La majorité a participé.)",
  },
  {
    front: "Azınlık",
    back: "Minorité",
    context: "Utilisé pour désigner une petite partie d'un groupe.",
    exemple: "Azınlık karşı çıktı. (La minorité s'est opposée.)",
  },
  {
    front: "Kelime hazinesi",
    back: "Vocabulaire",
    context:
      "Utilisé pour désigner l'ensemble des mots connus par une personne.",
    exemple:
      "Türkçe kelime hazinemi geliştirmek istiyorum. (Je veux améliorer mon vocabulaire en turc.)",
  },
  {
    front: "Kağıt",
    back: "Papier",
    context:
      "Utilisé pour désigner du papier utilisé pour écrire, dessiner ou imprimer.",
    exemple: "Kağıdı ikiye katladı. (Il/elle a plié le papier en deux.)",
  },
  {
    front: "Vergi dairesi",
    back: "Centre des impôts",
    context:
      "Utilisé pour désigner l'administration fiscale chargée de collecter les impôts.",
    exemple:
      "Vergi dairesine gitmem gerekiyor. (Je dois aller au centre des impôts.)",
  },
  {
    front: "İşitme cihazı",
    back: "Appareil auditif",
    context:
      "Utilisé pour désigner un dispositif permettant aux personnes malentendantes d'entendre.",
    exemple:
      "İşitme cihazını takmayı unuttu. (Il/elle a oublié de mettre son appareil auditif.)",
  },
  {
    front: "Anaokulu",
    back: "École maternelle",
    context:
      "Utilisé pour désigner une école pour les jeunes enfants avant l'école primaire.",
    exemple:
      "Kızım anaokuluna başladı. (Ma fille a commencé l'école maternelle.)",
  },
];
