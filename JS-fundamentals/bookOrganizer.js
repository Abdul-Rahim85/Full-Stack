const books = [
  {
    title: "Book A",
    authorName: "Author A",
    releaseYear: 1945
  },
  {
    title: "Book B",
    authorName: "Author B",
    releaseYear: 1965
  },
  {
    title: "Book C",
    authorName: "Author C",
    releaseYear: 1930
  }
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  }

  if (book1.releaseYear > book2.releaseYear) {
    return 1;
  }

  return 0;
}

const filteredBooks = books.filter(book => {
  return book.releaseYear <= 1950;
});

filteredBooks.sort(sortByYear);