// A classe Book (Livro) representa a entidade de um livro na biblioteca.
class Book {
  // O construtor recebe um objeto com as propriedades 'title', 'description' e 'author'.
  constructor({ title, description, author }) {
    // Validação básica para garantir que todos os dados de entrada são strings.
    // Se não forem, ele lança um erro.
    if (typeof title !== 'string' || typeof description !== 'string' || typeof author !== 'string') {
      throw new TypeError('title, description e author devem ser strings');
    }

    // Atribui um ID único gerado automaticamente para cada novo livro.
    this.id = Book.generateId();
    // Atribui as propriedades passadas no construtor.
    this.title = title;
    this.description = description;
    this.author = author;
  }

  // O método estático `generateId` cria um ID único para o livro.
  // Como é estático, ele pertence à classe `Book` em si, não a uma instância de livro.
  static generateId() {
    // Usa um método para criar uma string aleatória com 9 caracteres.
    return Math.random().toString(36).substr(2, 9);
  }
}

// A classe Library (Biblioteca) gerencia a coleção de livros.
class Library {
  // O construtor inicializa a biblioteca com um array vazio para armazenar os livros.
  constructor() {
    this.books = [];
  }

  // O método `addBook` recebe as informações de um livro e o adiciona à biblioteca.
  addBook(bookInfo) {
    // Cria uma nova instância de `Book` com as informações fornecidas.
    const book = new Book(bookInfo);
    // Adiciona o novo livro ao array `books`.
    this.books.push(book);
    // Retorna o livro que foi adicionado.
    return book;
  }

  // O método `getBooks` retorna a lista completa de livros.
  getBooks() {
    return this.books;
  }

  // O método `getBookById` busca um livro pelo seu ID único.
  getBookById(id) {
    // Usa o método `find` para procurar no array o livro com o ID correspondente.
    const book = this.books.find(b => b.id === id);
    // Se o livro não for encontrado, lança um erro.
    if (!book) throw new Error(`Livro com ID ${id} não encontrado`);
    // Retorna o livro encontrado.
    return book;
  }

  // O método `removeBookById` remove um livro da biblioteca usando seu ID.
  removeBookById(id) {
    // Procura o índice (posição) do livro no array.
    const index = this.books.findIndex(b => b.id === id);
    // Se o índice for -1, significa que o livro não foi encontrado.
    if (index === -1) throw new Error(`Livro com ID ${id} não encontrado`);
    // Remove o livro do array usando o método `splice`.
    this.books.splice(index, 1);
  }

  // O método `updateBookById` atualiza as informações de um livro existente.
  updateBookById(id, info) {
    // Primeiro, encontra o livro pelo ID. O método `getBookById` já lida com o erro se não encontrar.
    const book = this.getBookById(id);
    
    // Verifica se `info.title` foi fornecido. Se sim, valida o tipo e atualiza.
    if (info.title !== undefined) {
      if (typeof info.title !== 'string') throw new TypeError('title deve ser string');
      book.title = info.title;
    }
    
    // Verifica se `info.description` foi fornecido. Se sim, valida o tipo e atualiza.
    if (info.description !== undefined) {
      if (typeof info.description !== 'string') throw new TypeError('description deve ser string');
      book.description = info.description;
    }
    
    // Verifica se `info.author` foi fornecido. Se sim, valida o tipo e atualiza.
    if (info.author !== undefined) {
      if (typeof info.author !== 'string') throw new TypeError('author deve ser string');
      book.author = info.author;
    }
    
    // Retorna o livro com as informações atualizadas.
    return book;
  }
}