const movies = [
  {
    id: 0,
    isRented: false,
    title: "Tarzan",
    year: 1999,
    img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811",
    descrShort:
      "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out."
  },
  {
    id: 1,
    isRented: false,
    title: "The Lion King",
    img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg",
    year: 1994,
    descrShort:
      "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies."
  },
  {
    id: 2,
    isRented: false,
    title: "Beauty and the Beast",
    year: 1991,
    img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg",
    descrShort:
      "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself."
  },
  {
    id: 3,
    isRented: false,
    title: "The Sword in the Stone",
    year: 1963,
    img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg",
    descrShort:
      "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means."
  },
  {
    id: 4,
    isRented: false,
    title: "Beauty and the Beast",
    year: 2016,
    img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg",
    descrShort:
      "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation."
  },
  {
    id: 5,
    isRented: false,
    title: "Avatar: The Way of Water",
    year: 2023,
    img: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
    descrShort:
      "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home."
  },
  {
    id: 6,
    isRented: false,
    title: "Black Panther: Wakanda Forever",
    year: 2022,
    img: "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    descrShort:
      "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with Nakia and Everett Ross to forge a new path for their beloved kingdom."
  },
  {
    id: 7,
    isRented: false,
    title: "How to Train Your Dragon 2",
    year: 2014,
    img: "https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_.jpg",
    descrShort:
      "Hiccup, a Viking, must kill a dragon to mark his passage into manhood and be initiated into his tribe. However, he ends up doing the exact opposite by befriending a deadly dragon, Night Fury."
  },
  {
    id: 9,
    isRented: false,
    title: "Tetris",
    year: 2023,
    img: "https://m.media-amazon.com/images/M/MV5BZmZmNTdiYjMtZDdmNi00ZGU4LThkYmQtZTFhZWNlYmUxYWZkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    descrShort:
      "Henk Rogers discovers Tetris in 1988, and then risks everything by travelling to the Soviet Union, where he joins forces with inventor Alexey Pajitnov to bring the game to the masses."
  },
  {
    id: 10,
    isRented: false,
    title: "Coco",
    year: 2017,
    img: "https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg",
    descrShort:
      "Miguel pursues his love for singing in spite of his family's ban on music. He stumbles into the Land of the Dead, where he learns about his great-great-grandfather who was a legendary singer."
  },
  {
    id: 11,
    isRented: false,
    title: "John Wick",
    year: 2014,
    img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71WiYBT2QsL._AC_UF894,1000_QL80_.jpg",
    descrShort:
      "John Wick, a retired hitman, is forced to return to his old ways after a group of Russian gangsters steal his car and kill a puppy gifted to him by his late wife."
  },
  {
    id: 12,
    isRented: false,
    title: "Moana",
    year: 2016,
    img: "https://image.tmdb.org/t/p/original/6iHQpFiTg0QbKYac5Mprhx7tXo3.jpg",
    descrShort:
      "Moana, daughter of chief Tui, embarks on a journey to return the heart of goddess Te Fitti from Maui, a demigod, after the plants and the fish on her island start dying due to a blight."
  },
  {
    id: 13,
    isRented: false,
    title: "Interstellar",
    year: 2014,
    img: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    descrShort:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."
  },
  {
    id: 14,
    isRented: false,
    title: "Shrek",
    year: 2001,
    img: "https://img.fruugo.com/product/2/43/14581432_max.jpg",
    descrShort:
      "Shrek, an ogre, embarks on a journey with a donkey to rescue Princess Fiona from a vile lord and regain his swamp."
  },
  {
    id: 15,
    isRented: false,
    title: "The Dark Knight",
    year: 2008,
    img: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    descrShort:
      "After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees."
  },
  {
    id: 16,
    isRented: false,
    title: "Avengers: Endgame",
    year: 2019,
    img: "https://cdn.marvel.com/content/2x/MLou2_Payoff_1-Sht_Online_DOM_v7_Sm.jpg",
    descrShort:
      "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance."
  },
];

export default movies ;