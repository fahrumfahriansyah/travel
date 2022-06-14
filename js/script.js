
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
const { malang, jogjakarta, aceh, papua, bali, ntt, solo, wonosobo } = {
    malang:/*html*/`<div class="tentang">
    <h1>Malang</h1>
    <p>apa itu<a href="">kota malang</a></p>
    <p>biaya ke<a href=""> malang</a></p>
</div>`,
    jogjakarta:/*html*/`<div class="tentang">
<h1>jogjakarta</h1>
<p>apa itu<a href=""> candi</a></p>
<p>biaya ke<a href=""> candi</a></p>
</div>`,
    aceh:/*html*/`<div class="tentang">
<h1>aceh</h1>
<p>apa itu<a href=""> candi</a></p>
<p>biaya ke<a href=""> candi</a></p>
</div>`, papua:/*html*/`<div class="tentang">
<h1>papua</h1>
<p>apa itu<a href=""> candi</a></p>
<p>biaya ke<a href=""> candi</a></p>
</div>`, bali:/*html*/`<div class="tentang">
<h1>bali</h1>
<p>apa itu<a href=""> candi</a></p>
<p>biaya ke<a href=""> candi</a></p>
</div>`,
    ntt:/*html*/`<div class="tentang">
<h1>ntt</h1>
<p>apa itu<a href=""> candi</a></p>
<p>biaya ke<a href=""> candi</a></p>
</div>`,
    solo:/*html*/`<div class="tentang">
<h1>solo</h1>
<p>apa itu<a href=""> candi</a></p>
<p>biaya ke<a href=""> candi</a></p>
</div>`,
    wonosobo:/*html*/`<div class="tentang">
<h1>wonosobo</h1>
<p>apa itu<a href=""> candi</a></p>
<p>biaya ke<a href=""> candi</a></p>
</div>`
}
//?tutup
//? object destinasi wisata
const { destMalang, destJogjakarta, destAceh, destPapua, destBali, destNtt, destSolo, destWonosobo } = {
    destMalang:/*html*/`
    <h2>Destinasi wisata</h2> 
     <p></p>
    <p></p>
    <p>gunung bromo</p>
    <br>
    <p>Kawah ijen</p>
    <p>bulit teletabis</p>`,
    destJogjakarta:/*html*/`
    <h2>Destinasi wisata</h2> 
     <p></p>
    <p></p>
    <p>malioboro</p>
    <br>
    <p>candi borobudur</p>
    <p>candi prambanan </p>`,
    destAceh:/*html*/`
    <h2>Destinasi wisata</h2> 
     <p></p>
    <p></p>
    <p>masjid </p>
    <br>
    <p>aceh</p>
    <p>aceh </p>`,
    destPapua:/*html*/`
    <h2>Destinasi wisata</h2> 
     <p></p>
    <p></p>
    <p>jaya wijaya</p>
    <br>
    <p>candi borobudur</p>
    <p>candi prambanan </p>`,
    destSolo:/*html*/`
    <h2>Destinasi wisata</h2> 
     <p></p>
    <p></p>
    <p>surakarta</p>
    <br>
    <p>candi borobudur</p>
    <p>candi prambanan </p>`,
    destBali:/*html*/`
    <h2>Destinasi wisata</h2> 
     <p></p>
    <p></p>
    <p>pantai gili_trawangan</p>
    <br>
    <p>candi borobudur</p>
    <p>candi prambanan </p>`,
    destNtt:/*html*/`
    <h2>Destinasi wisata</h2> 
     <p></p>
    <p></p>
    <p>pulau komodo</p>
    <br>
    <p>candi borobudur</p>
    <p>candi prambanan </p>`,
    destWonosobo:/*html*/`
    <h2>Destinasi wisata</h2> 
     <p></p>
    <p></p>
    <p>gunung sumbing</p>
    <br>
    <p>candi borobudur</p>
    <p>candi prambanan </p>`






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
    if (e.target.src == 'http://127.0.0.1:5501/img/jogjakarta.jpg') {
        about.innerHTML = jogjakarta
        destinasi.innerHTML = destJogjakarta
    }

    if (e.target.src == 'http://127.0.0.1:5501/img/malang.jpg') {
        about.innerHTML = malang
        destinasi.innerHTML = destMalang
    }

    if (e.target.src == 'http://127.0.0.1:5501/img/ntt.jpeg') {
        about.innerHTML = ntt
        destinasi.innerHTML = destNtt
    }

    if (e.target.src == 'http://127.0.0.1:5501/img/papua.jpg') {
        about.innerHTML = papua
        destinasi.innerHTML = destPapua
    }
    if (e.target.src == 'http://127.0.0.1:5501/img/bali.jpg') {
        about.innerHTML = bali
        destinasi.innerHTML = destBali
    }
    if (e.target.src == 'http://127.0.0.1:5501/img/solo.jpg') {
        about.innerHTML = solo
        destinasi.innerHTML = destSolo
    }
    if (e.target.src == 'http://127.0.0.1:5501/img/wonosobo.jpg') {
        about.innerHTML = wonosobo
        destinasi.innerHTML = destWonosobo
    }
    if (e.target.src == 'http://127.0.0.1:5501/img/papua.jpg') {
        about.innerHTML = papua
        destinasi.innerHTML = destPapua
    }
    if (e.target.src == 'http://127.0.0.1:5501/img/aceh.jpg') {
        about.innerHTML = aceh
        destinasi.innerHTML = destAceh
    }
    console.log(e.target.src);
    //? tutupnya

})

















