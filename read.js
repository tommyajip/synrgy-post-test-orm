const { books } = require('./models')

books.findAll({})
    .then(Books => {
        for (const book of Books) {
            console.log(book.dataValues)
        }
    })
