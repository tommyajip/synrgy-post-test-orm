const { books } = require('./models')

const query = {
    where: { id: 2 }
}
books.destroy(query)
    .then(() => {
        console.log(`Buku dengan id 2 berhasil dihapus`)
        process.exit()
    })
    .catch(err => {
        console.error("Buku gagal dihapus")
    })
