const addTitle = document.querySelector('#add-title')
const addAuthor = document.querySelector('#add-author')
const addPages = document.querySelector('#add-pages')
const hasRead = document.querySelector('#has-read')
const submitBtn = document.querySelector('button')

const myLibary = [];

submitBtn.addEventListener('click', addBookToLibrary)

function Book(title, author, pages,read){
    //constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//the method in the book constructor
// Book.prototype.read = function(title, author, pages){
//     console.log('read or not')
//     return `${title} by ${author}, ${pages}. has ${hasRead} been read.`
// }

function addBookToLibrary(e){
    //add new book to existing library.
    e.preventDefault() 
    title = addTitle.value
    author = addTitle.value
    pages = addTitle.value
    read = hasRead.checked
    let book = new Book(title,author,pages,read)
    myLibary.push(book)
    console.log(myLibary)
}

function displayBooks(){
    //loop through library , need to make card for each book. insert title author and pages to display
    myLibrary.map(book => {

    })
}