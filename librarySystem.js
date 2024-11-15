// Book Constructor
function Book(title, author, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.isAvailable = isAvailable;
  }
  
  // Member Constructor
  function Member(name) {
    this.name = name;
    this.borrowedBooks = [];
  }
  
  // Borrow Book Method for Member
  Member.prototype.borrowBook = function(book) {
    if (this.borrowedBooks.length >= 3) {
      console.log(`${this.name} cannot borrow more than 3 books.`);
      return;
    }
    
    if (book.isAvailable) {
      book.isAvailable = false;
      this.borrowedBooks.push(book.title);
      console.log(`${this.name} borrowed "${book.title}".`);
    } else {
      console.log(`"${book.title}" is already borrowed.`);
    }
  };
  
  // Premium Member Constructor
  function PremiumMember(name) {
    Member.call(this, name);  // Inherit from Member
    this.specialCollectionAccess = true;
  }
  
  // Set up inheritance
  PremiumMember.prototype = Object.create(Member.prototype);
  PremiumMember.prototype.constructor = PremiumMember;
  
  // Override borrowBook method for PremiumMember
  PremiumMember.prototype.borrowBook = function(book) {
    if (this.borrowedBooks.length >= 5) {
      console.log(`${this.name} cannot borrow more than 5 books.`);
      return;
    }
    
    // Use the Member's borrowBook method
    if (book.isAvailable) {
      book.isAvailable = false;
      this.borrowedBooks.push(book.title);
      console.log(`${this.name} borrowed "${book.title}".`);
    } else {
      console.log(`"${book.title}" is already borrowed.`);
    }
  };
  
  // Create book objects
  const book1 = new Book("JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book("Clean Code", "Robert C. Martin");
  const book3 = new Book("You Don't Know JS", "Kyle Simpson");
  const book4 = new Book("Eloquent JavaScript", "Marijn Haverbeke");
  const book5 = new Book("The Pragmatic Programmer", "Andrew Hunt");
  
  // Create regular member and premium member
  const regularMember = new Member("Alice");
  const premiumMember = new PremiumMember("Bob");
  
  // Regular member borrowing books
  regularMember.borrowBook(book1); // Alice borrows "JavaScript: The Good Parts"
  regularMember.borrowBook(book2); // Alice borrows "Clean Code"
  regularMember.borrowBook(book3); // Alice borrows "You Don't Know JS"
  regularMember.borrowBook(book4); // Alice cannot borrow more than 3 books
  
  // Premium member borrowing books
  premiumMember.borrowBook(book3); // Bob borrows "You Don't Know JS"
  premiumMember.borrowBook(book4); // Bob borrows "Eloquent JavaScript"
  premiumMember.borrowBook(book5); // Bob borrows "The Pragmatic Programmer"
  premiumMember.borrowBook(book1); // Bob borrows "JavaScript: The Good Parts"
  premiumMember.borrowBook(book2); // Bob cannot borrow more than 5 books
  
  // Create a bound function for Alice to borrow books
  const borrowForAlice = regularMember.borrowBook.bind(regularMember);
  borrowForAlice(book1); // Alice borrows "JavaScript: The Good Parts"
  borrowForAlice(book4); // Alice borrows "Eloquent JavaScript"