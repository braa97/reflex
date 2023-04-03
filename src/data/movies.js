const movies = [
  {
    id: 0,
    isRented: false,
    title: "Tarzan",
    year: 1999,
    img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811",
    descrShort:
      "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out.",
  },
  {
    id: 1,
    isRented: false,
    title: "The Lion King",
    img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg",
    year: 1994,
    descrShort:
      "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies.",
  },
  {
    id: 2,
    isRented: false,
    title: "Beauty and the Beast",
    year: 1991,
    img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg",
    descrShort:
      "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself.",
  },
  {
    id: 3,
    isRented: false,
    title: "The Sword in the Stone",
    year: 1963,
    img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg",
    descrShort:
      "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means.",
  },
  {
    id: 4,
    isRented: false,
    title: "Beauty and the Beast",
    year: 2016,
    img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg",
    descrShort:
      "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation.",
  },
  {
    id: 5,
    isRented: false,
    title: "Avatar: The Way of Water",
    year: 2023,
    img: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
    descrShort:
      "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
  },
  {
    id: 6,
    isRented: false,
    title: "Black Panther: Wakanda Forever",
    year: 2022,
    img: "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    descrShort:
      "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with Nakia and Everett Ross to forge a new path for their beloved kingdom.",
  },
  {
    id: 7,
    isRented: false,
    title: "How to Train Your Dragon 2",
    year: 2014,
    img: "https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_.jpg",
    descrShort:
      "Hiccup, a Viking, must kill a dragon to mark his passage into manhood and be initiated into his tribe. However, he ends up doing the exact opposite by befriending a deadly dragon, Night Fury.",
  },
  {
    id: 9,
    isRented: false,
    title: "Tetris",
    year: 2023,
    img: "https://m.media-amazon.com/images/M/MV5BZmZmNTdiYjMtZDdmNi00ZGU4LThkYmQtZTFhZWNlYmUxYWZkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    descrShort:
      "Henk Rogers discovers Tetris in 1988, and then risks everything by travelling to the Soviet Union, where he joins forces with inventor Alexey Pajitnov to bring the game to the masses.",
  },
  {
    id: 10,
    isRented: false,
    title: "Coco",
    year: 2017,
    img: "https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg",
    descrShort:
      "Miguel pursues his love for singing in spite of his family's ban on music. He stumbles into the Land of the Dead, where he learns about his great-great-grandfather who was a legendary singer.",
  },
  {
    id: 11,
    isRented: false,
    title: "John Wick",
    year: 2014,
    img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71WiYBT2QsL._AC_UF894,1000_QL80_.jpg",
    descrShort:
      "John Wick, a retired hitman, is forced to return to his old ways after a group of Russian gangsters steal his car and kill a puppy gifted to him by his late wife.",
  },
  {
    id: 12,
    isRented: false,
    title: "Moana",
    year: 2016,
    img: "https://image.tmdb.org/t/p/original/6iHQpFiTg0QbKYac5Mprhx7tXo3.jpg",
    descrShort:
      "Moana, daughter of chief Tui, embarks on a journey to return the heart of goddess Te Fitti from Maui, a demigod, after the plants and the fish on her island start dying due to a blight.",
  },
  {
    id: 13,
    isRented: false,
    title: "Interstellar",
    year: 2014,
    img: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    descrShort:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
  },
  {
    id: 14,
    isRented: false,
    title: "Shrek",
    year: 2001,
    img: "https://img.fruugo.com/product/2/43/14581432_max.jpg",
    descrShort:
      "Shrek, an ogre, embarks on a journey with a donkey to rescue Princess Fiona from a vile lord and regain his swamp.",
  },
  {
    id: 15,
    isRented: false,
    title: "The Dark Knight",
    year: 2008,
    img: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    descrShort:
      "After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.",
  },
  {
    id: 16,
    isRented: false,
    title: "Avengers: Endgame",
    year: 2019,
    img: "https://cdn.marvel.com/content/2x/MLou2_Payoff_1-Sht_Online_DOM_v7_Sm.jpg",
    descrShort:
      "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
  },
  {
    id: 17,
    isRented: false,
    title: "How to Train Your Dragon: The Hidden World",
    year: 2019,
    img: "https://m.media-amazon.com/images/M/MV5BMjIwMDIwNjAyOF5BMl5BanBnXkFtZTgwNDE1MDc2NTM@._V1_.jpg",
    descrShort:
      "Hiccup aims to unite the vikings and the dragons in order to bring peace on the island of Berk. However, he must stop the evil Grimmel and his devious plans to wipe out all dragons.",
  },
  {
    id: 18,
    isRented: false,
    title: "The Revenant",
    year: 2015,
    img: "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    descrShort:
      "Hugh Glass, a legendary frontiersman, is severely injured in a bear attack and is abandoned by his hunting crew. He uses his skills to survive and take revenge on his companion who betrayed him.",
  },
  {
    id: 19,
    isRented: false,
    title: "Spider-Man: Far from Home",
    year: 2019,
    img: "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    descrShort:
      "Peter Parker, the beloved superhero Spider-Man, faces four destructive elemental monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow hero with mysterious origins.",
  },
  {
    id: 20,
    isRented: false,
    title: "Avengers: Infinity War",
    year: 2018,
    img: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
    descrShort:
      "The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.",
  },
  {
    id: 21,
    isRented: false,
    title: "Logan",
    year: 2017,
    img: "https://image.tmdb.org/t/p/original/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg",
    descrShort:
      "Logan comes out of retirement to escort a young mutant named Laura to a safe place. He meets with other mutants, who run from an evil corporation that has been experimenting with them, along the way.",
  },
  {
    id: 22,
    isRented: false,
    title: "1917",
    year: 2019,
    img: "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg",
    descrShort:
      "During World War I, two British soldiers -- Lance Cpl. Schofield and Lance Cpl. Blake -- receive seemingly impossible orders. In a race against time, they must cross over into enemy territory to deliver a message that could potentially save 1,600 of their fellow comrades -- including Blake's own brother.",
  },
  {
    id: 23,
    isRented: false,
    title: "Joker",
    year: 2019,
    img: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    descrShort:
      "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.",
  },
  {
    id: 24,
    isRented: false,
    title: "Baby Driver",
    year: 2017,
    img: "https://m.media-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_.jpg",
    descrShort:
      "Doc forces Baby, a former getaway driver, to partake in a heist, threatening to hurt his girlfriend if he refuses. But the plan goes awry when their arms dealers turn out to be undercover officers.",
  },
  {
    id: 25,
    isRented: false,
    title: "Guardians of the Galaxy Vol. 2",
    year: 2017,
    img: "https://image.tmdb.org/t/p/original/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
    descrShort:
      "After a successful mission, Quill and his team of galactic defenders meet Ego, a man claiming to be Quill's father. However, they soon learn some disturbing truths about Ego.",
  },
  {
    id: 26,
    isRented: false,
    title: "Titanic",
    year: 1997,
    img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71ZJ8am0mKL.jpg",
    descrShort:
      "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
  },
  {
    id: 27,
    isRented: false,
    title: "War for the Planet of the Apes",
    year: 2017,
    img: "https://m.media-amazon.com/images/M/MV5BNDNmYTQzMDEtMmY0MS00OTNjLTk4MjItMDZhMzkzOGI3MzA0XkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_.jpg",
    descrShort:
      "When a rogue army of humans kills Caesar's wife and son, he sets out to exact revenge. But his quest for retribution reveals his darker instincts even as he makes a startling discovery.",
  },
  {
    id: 28,
    isRented: false,
    title: "The Lion King",
    year: 2019,
    img: "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_.jpg",
    descrShort:
      "Simba, a young lion prince, flees his kingdom after the murder of his father, Mufasa. Years later, a chance encounter with Nala, a lioness, causes him to return and take back what is rightfully his.",
  },
  {
    id: 29,
    isRented: false,
    title: "It",
    year: 2017,
    img: "https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_.jpg",
    descrShort:
      "When a rogue army of humans kills Caesar's wife and son, he sets out to exact revenge. But his quest for retribution reveals his darker instincts even as he makes a startling discovery.",
  },
];

export default movies;
