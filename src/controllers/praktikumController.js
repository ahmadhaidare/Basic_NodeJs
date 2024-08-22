exports.profil = (req, res) => {
    let name = req.params.name
    let age = req.params.age
    let kelas = req.params.kelas
    let response = {
        nama: name,
        umur: age,
        role: kelas
    }
    return res.json(response)
}

exports.arya = (req,res) => {
    let ras = req.params.ras
    let nama = req.params.nama
    let type = req.params.type
    let gender = req.params.gender
    let response = {
        ras: ras,
        nama: nama,
        tipe: type,
        gender : gender
    }
    return res.json(response)
}