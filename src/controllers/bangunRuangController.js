exports.balok = (req,res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)

    let luas = 2*((panjang*lebar)+(panjang*tinggi)+(lebar*tinggi))
    let volume = panjang*lebar*tinggi
    
    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        luas_permukaan: luas,
        volume: volume
    }
    return res.json(response)
}

exports.kubus = (req,res) => {
    let sisi = Number(req.body.sisi)

    let luas = (6*sisi)*2
    let volume = sisi*sisi*sisi

    let response = {
        sisi: sisi,
        luas_permukaan: luas,
        volume: volume
    }
    return res.json(response)
}

exports.tabung = (req,res) => {
    let r = Number(req.body.r)
    let t = Number(req.body.t)

    let luas = 2*3.14*r*(r+t)
    let volume = 3.14*r*r*t

    let response = {
        jari_jari: r,
        tinggi: t,
        luas_permukaan: luas,
        volume: volume
    }
    return res.json(response)
}

exports.bola = (req,res) => {
    let r = Number(req.body.r)

    let luas = 4*3.14*(r*r)
    let volume = 4/3*3.14*r*r*r
    
    let response = {
        jari_jari: r,
        luas_permukaan: luas,
        volume: volume
    }
    return res.json(response)
}



