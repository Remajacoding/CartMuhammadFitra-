const popup = document.getElementById('popup');
function toggle(){
    popup.style.display = popup.style.display === "block" ? "none" : "block";

}
document.addEventListener("click",e => {
    if (!e.target.closest('#popup') && !e.target.closest('#btn')){
        popup.style.display = 'none';
    }
});
const dataTahunIni = document.getElementById("tahunini");
const dataTahunDepan = document.getElementById("tahundepan")

let tahunIni = new Date().getFullYear()
console.log(tahunIni)
dataTahunIni.innerHTML = tahunIni

let tahunDepan = new Date().getFullYear()+1
console.log(tahunDepan)
dataTahunDepan.innerHTML = tahunDepan









function bukaInstagram() {
  window.open('https://instagram.com/muhammad_fitra49.official', '_blank');
}

function bukaFacebook() {
  window.open('https://www.facebook.com/share/19jkgJezAp/', '_blank');
}

function bukaX() {
  window.open('https://x.com/mufitra49_offic', '_blank');
}

function bukaTikTok() {
  window.open('https://tiktok.com/@muhammadfitra49_official', '_blank');
}

function bukaWhatsApp() {
  window.open(' https://wa.me/6281362031093', '_blank');
}