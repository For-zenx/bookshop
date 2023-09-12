type Book = {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  id: number;
  author: {
    name: string;
    otherBooks: string[];
  };
  isFav: boolean;
};

type Books = {
  library: Book[];
};
export type { Book, Books };
