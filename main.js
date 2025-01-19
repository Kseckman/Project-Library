const addTitle = document.querySelector('#add-title')
const addAuthor = document.querySelector('#add-author')
const addPages = document.querySelector('#add-pages')
const hasRead = document.querySelector('#has-read')
const submitBtn = document.querySelector('button')

const myLibary = [];
submitBtn.addEventListener('click', addBookToLibrary)


function Book(title, author, pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function(){
    this.read = !this.read
}

function addBookToLibrary(e){
    e.preventDefault() 
    title = addTitle.value;
    author = addAuthor.value;
    pages = addPages.value;
    read = hasRead.checked;
    let book = new Book(title,author,pages,read);
    myLibary.push(book);
    console.log(myLibary);
    displayBooks(book);
    addTitle.value = ''
    addAuthor.value= ''
    addPages.value = ''
    hasRead.checked = ''
  
}

function displayBooks(){
    const bookList = document.querySelector('.book-list')
    bookList.innerHTML ='';

    myLibary.map(book => {
        let card = document.createElement('div')
        card.classList.add('book-card')
        let cardH3 = document.createElement('h3')
        cardH3.classList.add('book-title')
        let cardAuthor = document.createElement('p')
        cardAuthor.classList.add('book-author')
        let cardPages = document.createElement('p')
        cardPages.classList.add('book-pages')
        let cardRead = document.createElement('p')
        cardRead.classList.add('book-has-read')
        let readBtn = document.createElement('button')
        readBtn.classList.add('read-btn')
        let deleteBtn = document.createElement('button')
        deleteBtn.classList.add('delete-btn')

        cardH3.textContent = `${book.title}`;
        cardAuthor.textContent = `${book.author}`;
        cardPages.textContent = `${book.pages}`;
        cardRead.textContent = `${book.read ? 'read': 'unread'}`;
        readBtn.textContent = 'read?';
        deleteBtn.textContent = 'delete';

        deleteBtn.addEventListener('click', removeBook)
        readBtn.addEventListener('click', ()=>{
            book.toggleRead();
            displayBooks();
        })

        card.append(cardH3, cardAuthor, cardPages, cardRead,readBtn, deleteBtn)
        bookList.append(card)
    })
}

function removeBook(){
    this.parentElement.remove()
}
