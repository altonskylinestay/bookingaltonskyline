const PASSWORD = "alton2026";

let data = JSON.parse(localStorage.getItem("altonData")) || {

hero:{
title:"Ada malam<br>yang terlalu nyaman<br>untuk cepat pulang.",
desc:"Premium Skyline Stay dekat UNDIP Semarang.",
bg:"https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400",
logo:"https://i.imgur.com/5kQZ1Zm.png"
},

wa:"628976660674",

footer:{
text:"Managed by Nusantara Hospitality Management",
social:"Instagram & TikTok @alton_skylinestay"
},

maps:"https://maps.google.com/maps?q=alton%20residence%20semarang&t=&z=13&ie=UTF8&iwloc=&output=embed",

rooms:[

{
active:true,
name:"Skyline Room",
price:"Rp 250.000",
image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
facilities:["WiFi","Netflix","AC","City View"]
}

],

testimonials:[

{
name:"Sarah",
photo:"https://randomuser.me/api/portraits/women/44.jpg",
text:"Tempatnya nyaman banget dan vibes malamnya aesthetic."
}

]

};

function saveStorage(){
localStorage.setItem("altonData", JSON.stringify(data));
}

function renderWebsite(){

document.getElementById("heroTitle").innerHTML = data.hero.title;
document.getElementById("heroDesc").innerText = data.hero.desc;

document.getElementById("hero").style.background =
"url('" + data.hero.bg + "') center/cover";

document.getElementById("logo").src = data.hero.logo;

document.getElementById("footerText").innerText =
data.footer.text;

document.getElementById("socialText").innerText =
data.footer.social;

document.getElementById("mapsFrame").src =
data.maps;

document.getElementById("floatingWA").href =
"https://wa.me/" + data.wa;

renderRooms();
renderTestimonials();

}

function renderRooms(){

const wrap = document.getElementById("roomWrap");

wrap.innerHTML = "";

data.rooms.forEach(function(room,index){

if(!room.active) return;

let fasilitasHTML = "";

room.facilities.forEach(function(f){
fasilitasHTML += "<span>"+f+"</span>";
});

wrap.innerHTML +=

'<div class="room-card">' +

'<div class="room-slider">' +
'<img src="'+room.image+'">' +
'<div class="room-price">'+room.price+'</div>' +
'</div>' +

'<div class="room-content">' +

'<h3 class="room-name">'+room.name+'</h3>' +

'<div class="facilities">'+fasilitasHTML+'</div>' +

'<div class="booking-box">' +

'<input type="date" id="date-'+index+'">' +

'<input type="number" id="night-'+index+'" placeholder="Lama Menginap">' +

'<button class="book-btn" onclick="bookingRoom('+index+')">' +
'Booking Sekarang' +
'</button>' +

'</div>' +
'</div>' +
'</div>';

});

renderAdminRooms();

}

function bookingRoom(index){

const room = data.rooms[index];

const date =
document.getElementById("date-"+index).value;

const night =
document.getElementById("night-"+index).value;

const text =
"Halo Alton Skyline Stay%0A%0ASaya ingin booking:%0A%0ANama Kamar: "
+ room.name +
"%0ATanggal Booking: " + date +
"%0ALama Menginap: " + night + " malam";

window.open(
"https://wa.me/" + data.wa + "?text=" + text,
"_blank"
);

}

function renderTestimonials(){

const wrap =
document.getElementById("testiWrap");

wrap.innerHTML = "";

data.testimonials.forEach(function(item){

wrap.innerHTML +=

'<div class="testi-card">' +

'<div class="testi-head">' +

'<img src="'+item.photo+'">' +

'<div>' +
'<h4>'+item.name+'</h4>' +
'</div>' +

'</div>' +

'<p>'+item.text+'</p>' +

'</div>';

});

}

function openLogin(){
document.getElementById("loginScreen").style.display = "flex";
}

function loginAdmin(){

const pass =
document.getElementById("adminPassword").value;

if(pass === PASSWORD){

document.getElementById("loginScreen").style.display = "none";

document.getElementById("adminPanel").classList.add("active");

loadAdmin();

}else{

alert("Password Salah");

}

}

function closeAdmin(){
document.getElementById("adminPanel").classList.remove("active");
}

function loadAdmin(){

document.getElementById("adminHeroTitle").value =
data.hero.title.replace(/<br>/g,' ');

document.getElementById("adminHeroDesc").value =
data.hero.desc;

document.getElementById("adminHeroBg").value =
data.hero.bg;

document.getElementById("adminLogo").value =
data.hero.logo;

document.getElementById("adminWA").value =
data.wa;

document.getElementById("adminMaps").value =
data.maps;

document.getElementById("adminFooter").value =
data.footer.text;

document.getElementById("adminSocial").value =
data.footer.social;

}

function saveHero(){

data.hero.title =
document.getElementById("adminHeroTitle").value;

data.hero.desc =
document.getElementById("adminHeroDesc").value;

data.hero.bg =
document.getElementById("adminHeroBg").value;

data.hero.logo =
document.getElementById("adminLogo").value;

saveStorage();

renderWebsite();

alert("Hero berhasil disimpan");

}

function saveWA(){

data.wa =
document.getElementById("adminWA").value;

saveStorage();

renderWebsite();

alert("WA berhasil disimpan");

}

function addRoom(){

const room = {

active:true,

name:
document.getElementById("roomName").value,

price:
document.getElementById("roomPrice").value,

image:
document.getElementById("roomImage").value,

facilities:
document.getElementById("roomFacilities").value.split(",")

};

data.rooms.push(room);

saveStorage();

renderWebsite();

alert("Kamar berhasil ditambahkan");

}

function renderAdminRooms(){

const list =
document.getElementById("adminRoomList");

list.innerHTML = "";

data.rooms.forEach(function(room,index){

list.innerHTML +=

'<div class="room-admin-item">' +

'<h4>'+room.name+'</h4>' +

'<p>'+room.price+'</p>' +

'<button class="hide-btn" onclick="toggleRoom('+index+')">' +
(room.active ? "Hide" : "Show") +
'</button>' +

'<button class="delete-btn" onclick="deleteRoom('+index+')">' +
'Delete' +
'</button>' +

'</div>';

});

}

function toggleRoom(index){

data.rooms[index].active =
!data.rooms[index].active;

saveStorage();

renderWebsite();

}

function deleteRoom(index){

data.rooms.splice(index,1);

saveStorage();

renderWebsite();

}

function addTesti(){

const testi = {

name:
document.getElementById("testiName").value,

photo:
document.getElementById("testiPhoto").value,

text:
document.getElementById("testiText").value

};

data.testimonials.push(testi);

saveStorage();

renderWebsite();

alert("Testimoni berhasil ditambahkan");

}

function saveMaps(){

data.maps =
document.getElementById("adminMaps").value;

saveStorage();

renderWebsite();

alert("Maps berhasil disimpan");

}

function saveFooter(){

data.footer.text =
document.getElementById("adminFooter").value;

data.footer.social =
document.getElementById("adminSocial").value;

saveStorage();

renderWebsite();

alert("Footer berhasil disimpan");

}

renderWebsite();
