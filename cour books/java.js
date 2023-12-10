const books = [
  { id: 1, title: "The Great Gatsby", price: 5000, discount:10, pages: 180 },
  { id: 2, title: "To Kill a Mockingbird", price: 6000, discount: 6, pages: 281 },
  { id: 3, title: "1984", price: 7000, discount: 7, pages: 328 },
  { id: 4, title: "The Catcher in the Rye", price: 3500, discount: 5, pages: 224 },
  { id: 5, title: "Pride and Prejudice", price: 4000, discount: 8, pages: 432 },
  { id: 6, title: "Prejudice", price: 2000, discount: 4, pages: 100 },
]
  
  // Task 1: Use map to create an array of book titles.
  const bookTitles = books.map(book => book.title);
  console.log("Task 1 - Array of Book Titles:", bookTitles);
  
  // Task 2: Use filter to get an array of books with more than 200 pages.
  const booksWithMoreThan200Pages = books.filter(book => book.pages > 200);
  console.log("Task 2 - Books with More Than 200 Pages:", booksWithMoreThan200Pages);
  
  // Task 3: Use forEach to log the title and author of each book.
  console.log("Task 3 - Title and Author of Each Book:");
  books.forEach(book => {
    console.log(`Title: ${book.title}, Author: ${book.author}`);
  });
  
  // Task 4: Use reduce to get the total number of pages for all books.
  const totalPriceAfterDiscount = books.reduce((total, book) => total + book.price, 0);
console.log("Task 4:", totalPriceAfterDiscount);

const totalOriginalPrice = books.reduce((total, book) => total + book.price, 0);
const totalDiscountedPrice = books.reduce((total, book) => {
  const discountedPrice = book.price - (book.price * (book.discount / 100));
  return total + discountedPrice;
}, 0);

console.log(" Total Original Price :", totalOriginalPrice);
console.log(" Total Price After Discount :", totalDiscountedPrice);
  