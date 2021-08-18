const { books } = require('./models')

const query = {
    where: { id: 1 }
}
books.destroy(query)
    .then(() => {
        console.log(`Buku dengan id 1 berhasil dihapus`)
        process.exit()
    })
    .catch(err => {
        console.error("Buku gagal dihapus")
    })
