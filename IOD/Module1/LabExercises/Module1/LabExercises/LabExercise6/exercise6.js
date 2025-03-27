let book = {
    title: "The Stand",
    author: "Stephen King",
    pages: "823",
    description:
      "The plot centers on a deadly pandemic of weaponized influenza and its aftermath, in which some of the few surviving humans gather into factions that are each led by a personification of either good or evil and seem fated to clash with each other."
    };
    
  console.log(book.title); // The Stand
  console.log(book.author); // Stephen King
  console.log(book.description); // Description of book
  console.log(book.pages); // 823
  console.log(book);
  book.description =
    "The plot centers on a deadly pandemic of weaponized influenza and its aftermath, in which some of the few surviving humans gather into factions that are each led by a personification of either good or evil and seem fated to clash with each other";
  console.log(book.description);
  let bookObject = ["Pages", "Plot", "Characters", "Setting", "Theme"];
  console.log(bookObject);