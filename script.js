var data_url = "https://gist.githubusercontent.com/d4em0n/aa26675e79cacd3dfcfab1552e3ae37e/raw/997b218a855f76aad5e319aaee65f636d235b1e9/data_aegis.txt"
var getData = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'text';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

var mhs_data;
var hasil = document.getElementById("res");
var hasil_full = document.getElementById("res_full");
const finddata = (data_search) => {
    let res;
    hasil.innerHTML = ""
    hasil_full.innerHTML = ""
    res = mhs_data.filter(mhs => {
        const lower = Object.values(mhs).map(val => val.toString().toLowerCase());
        return lower.findIndex(val => val.includes(data_search.toLowerCase())) != -1;
    })
    if(res.length == 0) {
        hasil.innerHTML = "Data tidak ditemukan";
    } else if(res.length > 1) {
        hasil.innerHTML = "Beberapa data ditemukan, mohon lebih spesifik";
    } else {
        mhs = res[0];
        const mhs_text = `Nama Lengkap\t: ${mhs.nama_lengkap}
Nama Panggilan\t: ${mhs.nama_panggilan}
NIM\t\t\t: ${mhs.nim}
Nomor Telepon\t: ${mhs.nomor_telepon}
ID Line\t\t\t: ${mhs.id_line}
Email\t\t\t: ${mhs.email}
Hobi\t\t\t: ${mhs.hobi}
Tanggal Lahir\t\t: ${mhs.tanggal_lahir}
`
        hasil.innerHTML = `<b style='font-size: 30px'>${mhs.nama_lengkap}</b>`;
        hasil_full.innerHTML = mhs_text;
    }
    console.log(res);
}
