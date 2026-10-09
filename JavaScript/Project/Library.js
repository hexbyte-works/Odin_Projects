const myLibrary = [];

function Book(bookName,uid) {
    this.name=bookName,
    this.uid=uid
}

function addBookToLibrary(bookName) {
    let uid=crypto.randomUUID()
    let newItem= new Book(bookName, uid)
    myLibrary.push(newItem)
}

addBookToLibrary('book1')
addBookToLibrary('book2')
addBookToLibrary('book3')
for(item of myLibrary){
    console.log(item.name)
}