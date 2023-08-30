type Books = {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  link: string;
  author: {
    name: string;
    otherBooks: string[];
  };
};
export default Books;
