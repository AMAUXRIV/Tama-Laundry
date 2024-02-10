const axios = require('axios')

const baseUrl= "https://script.google.com/macros/s/AKfycbwwCnAVKUWVQP7gRfG4WFYvpaOwVh6pn8NTFs7hfrYiTrij5F8ug549z0bfnoqZwlyg/exec"

const axiosInstance = axios.create({
    baseURL:baseUrl,
    headers: {
        "Content-Type": "application/json",
    } 
})
   
exports.getData= async(whatsapp) => {
    console.log(">>>>",whatsapp) 
    try {
        const response = await axiosInstance.get();
        let responseStr = ""
        response.data.data.forEach(element => { 

            if (element.whatsapp.toString() === whatsapp) {
                responseStr += `*TAMA LAUNDRY*\n*Detail Cucian Kamu :*\n\n👔 Tipe Cucian : ${element.jenis_cucian}\n🤑 Harga : ${element.total_bayar}\n🏋️‍♀️ Berat : ${element.berat}\n✅ Status : ${element.status}`
            }
        });
        if (responseStr == "") {
            responseStr = "*Anda belum memesan*\nSilahkan Menggunakan Jasa Terbaik Kami \n\n0.Menu\n1.Daftar Harga&Jasa"
        }
        return responseStr
    } catch (error) {
        console.log(">>>>>",error)
    }
}