type Book = {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  id: string;
  author: {
    name: string;
    otherBooks: string[];
  };
};

type Books = {
  library: Book[];
};
export default Books;
