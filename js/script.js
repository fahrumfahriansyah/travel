
const container = document.querySelector(".container")
const thumb = document.querySelectorAll(".thumb")
const jumbo = document.querySelector(".jumbo")
const thumbnail = document.querySelector(".thumbnail")
const hapus = document.querySelector(".hapus")
const about = document.querySelector('.about')
const destinasi = document.querySelector('.destinasi')
const desh2 = document.querySelector('.destinasi h2')
// ? membuat efek tulisan destinasi 2
const hurufH2 = [...desh2.textContent].map(a => `<span>${a}</span>`).join('')
desh2.innerHTML = hurufH2
//? tutup destinasi 2
console.log(desh2);
// ? membuat lketika di klik memunxulkan menu about di sebelah kanan gambar
const { bromo, borobudur } = {
    bromo:/*html*/`<div class="tentang">
    <h1>Gunung Bromo</h1>
    <p>apa itu<a href=""> bromo</a></p>
    <p>biaya ke<a href=""> destinasi</a></p>
</div>`,
    borobudur:/*html*/`<div class="tentang">
<h1>candi</h1>
<p>apa itu<a href=""> candi</a></p>
<p>biaya ke<a href=""> candi</a></p>
</div>`
}
//?tutup
//? object destinasi wisata
const { destBromo, destBorobudur } = {
    destBromo:/*html*/`
    <h2>Destinasi wisata</h2> 
     <p></p>
    <p></p>
    <p>kawah brosadadsadassadsamo</p>
    <br>
    <p>puncak melati</p>
    <p>bulit teletabis</p>`,
    destBorobudur:/*html*/`
    <h2>Destinasi wisata</h2> 
     <p></p>
    <p></p>
    <p>dsaasdaksijmdiko</p>
    <br>
    <p>puncak melati</p>
    <p>bulit teletabis</p>`
}
//? tutup destinasi wisata

//? membuat menu hanphone jika di klik menjadi  opacity 0.5 dan menhapus border karena list
container.addEventListener("click", function (e) {
    if (e.target.className = 'thumb')
        jumbo.src = e.target.src
    thumb.forEach(function (a) {
        if (a.src == jumbo.src)
            a.style.opacity = "0.5"
        else if (a.src != jumbo.src)
            a.style.opacity = "1"
    })
    // ?menambahkan ketika di klik muncul ikon untuk about borobudur
    if (e.target.src == 'http://127.0.0.1:5501/img/borobudur.jpg') {
        about.innerHTML = borobudur
        destinasi.innerHTML = destBorobudur
    }

    if (e.target.src == 'http://127.0.0.1:5501/img/bromo.jpg') {
        about.innerHTML = bromo
        destinasi.innerHTML = destBromo
    }
    //? tutupnya

})

















