const { books } = require('./models')

const query = {
    where: { id: 1 }
}
books.update({
    penulis: 'Raditya Dika'
}, query)
    .then(() => {
        console.log("Nama penulis berhasil diupdate")
        process.exit()
    })
    .catch(err => {
        console.error("Nama penulis gagal diupdate!")
    })
