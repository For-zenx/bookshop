export default defineEventHandler((event) => {
  return {
    library: [
      {
        title: "The Lord of the Rings",
        pages: 1200,
        genre: "Fantasy",
        cover:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
        synopsis: "An epic adventure in a fantasy world called Middle-earth.",
        year: 1954,
        ISBN: "978-0618640157",
        id: 1,
        author: {
          name: "J.R.R. Tolkien",
          otherBooks: ["The Hobbit", "The Silmarillion"],
        },
        isFav: false,
      },
      {
        title: "Game of Thrones",
        pages: 694,
        genre: "Fantasy",
        cover:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg",
        synopsis:
          "In a realm where seasons last for years, an epic battle for the throne unfolds.",
        year: 1996,
        ISBN: "978-0553103540",
        id: 2,
        author: {
          name: "George R. R. Martin",
          otherBooks: [
            "A Clash of Kings",
            "A Storm of Swords",
            "A Feast for Crows",
          ],
        },
        isFav: false,
      },
      {
        title: "Harry Potter and the Philosopher's Stone",
        pages: 223,
        genre: "Fantasy",
        cover:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550337333i/15868.jpg",
        synopsis:
          "A boy discovers he is a wizard and embarks on an adventure at a school of magic.",
        year: 1997,
        ISBN: "978-0747532699",
        id: 3,
        author: {
          name: "J.K. Rowling",
          otherBooks: [
            "Harry Potter and the Chamber of Secrets",
            "Harry Potter and the Prisoner of Azkaban",
            "Harry Potter and the Goblet of Fire",
          ],
        },
        isFav: false,
      },
      {
        title: "1984",
        pages: 328,
        genre: "Science Fiction",
        cover:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg",
        synopsis: "A disturbing vision of a dystopian and totalitarian future.",
        year: 1949,
        ISBN: "978-0451524935",
        id: 4,
        author: {
          name: "George Orwell",
          otherBooks: ["Animal Farm"],
        },
        isFav: false,
      },
      {
        title: "Zombie Apocalypse",
        pages: 444,
        genre: "Zombies",
        cover:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1422626176i/24762432.jpg",
        synopsis:
          "A Galician man stays at home during a zombie apocalypse and almost saves the world.",
        year: 2001,
        ISBN: "978-4444532611",
        id: 5,
        author: {
          name: "Manel Loreiro",
          otherBooks: [],
        },
        isFav: false,
      },
      {
        title: "Dune",
        pages: 412,
        genre: "Science Fiction",
        cover:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
        synopsis:
          "On the inhospitable desert planet of Arrakis, a grand political and familial intrigue unfolds.",
        year: 1965,
        ISBN: "978-0441172719",
        id: 6,
        author: {
          name: "Frank Herbert",
          otherBooks: ["Dune Messiah", "Children of Dune"],
        },
        isFav: false,
      },
      {
        title: "The Hitchhiker's Guide to the Galaxy",
        pages: 216,
        genre: "Science Fiction",
        cover:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653311117i/6691227.jpg",
        synopsis: "An absurd and comedic journey through space, with towels.",
        year: 1979,
        ISBN: "978-0345391803",
        id: 7,
        author: {
          name: "Douglas Adams",
          otherBooks: [
            "The Restaurant at the End of the Universe",
            "Life, the Universe and Everything",
          ],
        },
        isFav: false,
      },
      {
        title: "Neuromancer",
        pages: 271,
        genre: "Science Fiction",
        cover:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554437249i/6088007.jpg",
        synopsis:
          "A prophetic vision of cyber-reality and artificial intelligence.",
        year: 1984,
        ISBN: "978-0441569595",
        id: 8,
        author: {
          name: "William Gibson",
          otherBooks: ["Count Zero", "Mona Lisa Overdrive"],
        },
        isFav: false,
      },
      {
        title: "Fahrenheit 451",
        pages: 249,
        genre: "Science Fiction",
        cover:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1383718290i/13079982.jpg",
        synopsis:
          "A future society where books are forbidden, and 'firemen' burn any books they find.",
        year: 1953,
        ISBN: "978-1451673319",
        id: 9,
        author: {
          name: "Ray Bradbury",
          otherBooks: ["The Martian Chronicles", "The Illustrated Man"],
        },
        isFav: false,
      },
      {
        title: "The Shining",
        pages: 688,
        genre: "Horror",
        cover:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1641398308i/60038757.jpg",
        synopsis:
          "A family moves to an isolated hotel for the winter, where a sinister presence influences the father toward violence.",
        year: 1977,
        ISBN: "978-0307743657",
        id: 10,
        author: {
          name: "Stephen King",
          otherBooks: ["Carrie", "It"],
        },
        isFav: false,
      },
      {
        title: "Dracula",
        pages: 418,
        genre: "Horror",
        cover:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387151694i/17245.jpg",
        synopsis:
          "The story of the infamous Count Dracula and his attempt to move from Transylvania to England.",
        year: 1897,
        ISBN: "978-0486411095",
        id: 11,
        author: {
          name: "Bram Stoker",
          otherBooks: [
            "The Jewel of Seven Stars",
            "The Lair of the White Worm",
          ],
        },
        isFav: false,
      },
      {
        title: "Frankenstein",
        pages: 280,
        genre: "Horror",
        cover:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1669159060i/63631742.jpg",
        synopsis:
          "A scientist's obsession leads to the creation of a living creature from stolen body parts, with disastrous consequences.",
        year: 1818,
        ISBN: "978-0486282114",
        id: 12,
        author: {
          name: "Mary Shelley",
          otherBooks: ["The Last Man", "Valperga"],
        },
        isFav: false,
      },
      {
        title: "The Call of Cthulhu",
        pages: 43,
        genre: "Horror",
        cover:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1485924654i/34094154.jpg",
        synopsis:
          "The story of an ancient monster that threatens to revive and dominate the world.",
        year: 1928,
        ISBN: "978-1542461690",
        id: 13,
        author: {
          name: "H.P. Lovecraft",
          otherBooks: ["The Dunwich Horror", "At the Mountains of Madness"],
        },
        isFav: false,
      },
    ],
  };
});
