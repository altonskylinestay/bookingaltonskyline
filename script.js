let data = JSON.parse(localStorage.getItem("altonData")) || {

heroTitle:"Premium Stay in Semarang",

heroDesc:"Nikmati pengalaman menginap modern dekat UNDIP.",

heroImage:"https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200",

rooms:[

{
name:"Standard Room",
price:"500.000",
image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
show:true
},

{
name:"Deluxe Room",
price:"750.000",
image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200",
show:true
}

]

};

function saveData(){
localStorage.setItem("altonData",JSON.stringify(data));
}

function renderWebsite(){

document.getElementById("heroTitle").innerText=data.heroTitle;

document.getElementById("heroDesc").innerText=data.heroDesc;

document.getElementById("heroImage").src=data.heroImage;

let roomHTML="";

data.rooms.forEach((room,index)=>{

if(room.show){

roomHTML+=`

<div class="room-card">

<img src="${room.image}">

<div class="room-content">

<h3>${room.name}</h3>

<p>Rp ${room.price}</p>

<div class="booking-form">

<input type="date" id="date${index}">

<input type="number"
id="night${index}"
placeholder="Lama menginap">

<button onclick="bookRoom(${index})">

Booking via WhatsApp

</button>

</div>

</div>

</div>

`;

}

});

document.getElementById("roomContainer").innerHTML=roomHTML;

renderAdminRooms();

}

function bookRoom(index){

let room=data.rooms[index];

let date=document.getElementById(`date${index}`).value;

let night=document.getElementById(`night${index}`).value;

let message=`Halo Admin Alton Skyline Stay

Saya ingin booking:

Kamar: ${room.name}
Tanggal: ${date}
Lama Menginap: ${night} malam`;

window.open(
`https://wa.me/628976660674?text=${encodeURIComponent(message)}`
);

}

function toggleAdmin(){

document
.getElementById("adminPanel")
.classList.toggle("active");

}

function loginAdmin(){

let pass=document.getElementById("adminPassword").value;

if(pass==="altonadmin"){

document.getElementById("adminContent")
.style.display="block";

}else{

alert("Password salah");

}

}

function saveHero(){

data.heroTitle=
document.getElementById("editTitle").value;

data.heroDesc=
document.getElementById("editDesc").value;

data.heroImage=
document.getElementById("editHeroImage").value;

saveData();

renderWebsite();

alert("Hero berhasil disimpan");

}

function addRoom(){

data.rooms.push({

name:document.getElementById("roomName").value,

price:document.getElementById("roomPrice").value,

image:document.getElementById("roomImage").value,

show:document.getElementById("roomStatus").value==="true"

});

saveData();

renderWebsite();

}

function renderAdminRooms(){

let html="";

data.rooms.forEach((room,index)=>{

html+=`

<div class="admin-room">

<h4>${room.name}</h4>

<p>Rp ${room.price}</p>

<p>Status:
${room.show ? "Tampil" : "Hidden"}
</p>

<button onclick="toggleRoom(${index})">

${room.show ? "Hide" : "Show"}

</button>

</div>

`;

});

document.getElementById("adminRooms").innerHTML=html;

}

function toggleRoom(index){

data.rooms[index].show=!data.rooms[index].show;

saveData();

renderWebsite();

}

renderWebsite();
