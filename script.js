/* =========================
ALTON SKYLINE STAY
FINAL SCRIPT
========================= */

/* ROOM DATABASE */

const DEFAULT_ROOMS = [

{
id:1,
name:"Skyline Studio Room",
price:"Rp299K / Night",
image:"assets/room1.jpg",
desc:"Premium skyline ambience room near UNDIP.",
visible:true
},

// HIDDEN SLOT

{
id:2,
name:"",
price:"",
image:"",
desc:"",
visible:false
},

{
id:3,
name:"",
price:"",
image:"",
desc:"",
visible:false
},

{
id:4,
name:"",
price:"",
image:"",
desc:"",
visible:false
},

{
id:5,
name:"",
price:"",
image:"",
desc:"",
visible:false
},

{
id:6,
name:"",
price:"",
image:"",
desc:"",
visible:false
},

{
id:7,
name:"",
price:"",
image:"",
desc:"",
visible:false
},

{
id:8,
name:"",
price:"",
image:"",
desc:"",
visible:false
},

{
id:9,
name:"",
price:"",
image:"",
desc:"",
visible:false
},

{
id:10,
name:"",
price:"",
image:"",
desc:"",
visible:false
},

{
id:11,
name:"",
price:"",
image:"",
desc:"",
visible:false
},

{
id:12,
name:"",
price:"",
image:"",
desc:"",
visible:false
},

{
id:13,
name:"",
price:"",
image:"",
desc:"",
visible:false
},

{
id:14,
name:"",
price:"",
image:"",
desc:"",
visible:false
},

{
id:15,
name:"",
price:"",
image:"",
desc:"",
visible:false
},

{
id:16,
name:"",
price:"",
image:"",
desc:"",
visible:false
},

{
id:17,
name:"",
price:"",
image:"",
desc:"",
visible:false
},

{
id:18,
name:"",
price:"",
image:"",
desc:"",
visible:false
},

{
id:19,
name:"",
price:"",
image:"",
desc:"",
visible:false
},

{
id:20,
name:"",
price:"",
image:"",
desc:"",
visible:false
},

{
id:21,
name:"",
price:"",
image:"",
desc:"",
visible:false
}

];

/* LOAD */

let rooms =
JSON.parse(localStorage.getItem("altonRooms"))
|| DEFAULT_ROOMS;

/* SAVE */

function saveRooms(){

localStorage.setItem(
"altonRooms",
JSON.stringify(rooms)
);

}

/* RENDER PUBLIC ROOM */

function renderRooms(){

const container =
document.querySelector(".rooms");

if(!container) return;

const roomHTML = rooms
.filter(room => room.visible)
.map(room => `

<div class="room-card">

<div class="room-image-wrap">

<img
src="${room.image}"
class="room-image"
>

</div>

<div class="room-info">

<div class="room-price">
${room.price}
</div>

<p class="room-desc">
${room.desc}
</p>

<ul class="room-list">

<li>✔ Smart TV</li>
<li>✔ Fast Wifi</li>
<li>✔ Skyline View</li>
<li>✔ Premium Interior</li>
<li>✔ Workspace Area</li>

</ul>

<a
href="https://wa.me/628976660674?text=Halo%20saya%20ingin%20booking%20${room.name}"
class="room-btn">

Booking Room

</a>

</div>

</div>

`).join("");

container.innerHTML = `

<div class="section-title">

<p>ROOM</p>

<h2>
Premium Skyline Room
</h2>

</div>

${roomHTML}

`;

}

/* LOGIN */

function loginAdmin(){

const username =
document.getElementById("username").value;

const password =
document.getElementById("password").value;

if(
username === "admin"
&&
password === "admin"
){

document.getElementById(
"loginBox"
).style.display="none";

document.getElementById(
"dashboard"
).style.display="block";

renderAdmin();

}else{

alert("Login gagal");

}

}

/* ADMIN RENDER */

function renderAdmin(){

const container =
document.getElementById("adminRoomList");

if(!container) return;

container.innerHTML = "";

let visibleCount = 0;

rooms.forEach((room,index)=>{

if(room.visible){
visibleCount++;
}

container.innerHTML += `

<div class="admin-room">

<h3>
ROOM SLOT ${room.id}
</h3>

<input
type="text"
id="name-${index}"
placeholder="Room Name"
value="${room.name}"
>

<input
type="text"
id="price-${index}"
placeholder="Room Price"
value="${room.price}"
>

<input
type="text"
id="image-${index}"
placeholder="Image URL"
value="${room.image}"
>

<textarea
id="desc-${index}"
class="admin-textarea"
placeholder="Description"
>${room.desc}</textarea>

<p>
STATUS :
${room.visible ? "VISIBLE" : "HIDDEN"}
</p>

<button onclick="saveRoom(${index})">

Save Room

</button>

<button onclick="toggleRoom(${index})">

${room.visible ? "Hide Room" : "Show Room"}

</button>

</div>

`;

});

const count =
document.getElementById("visibleCount");

if(count){
count.innerText = visibleCount;
}

}

/* SAVE ROOM */

function saveRoom(index){

rooms[index].name =
document.getElementById(`name-${index}`).value;

rooms[index].price =
document.getElementById(`price-${index}`).value;

rooms[index].image =
document.getElementById(`image-${index}`).value;

rooms[index].desc =
document.getElementById(`desc-${index}`).value;

saveRooms();

renderAdmin();

renderRooms();

alert("Room updated");

}

/* TOGGLE ROOM */

function toggleRoom(index){

rooms[index].visible =
!rooms[index].visible;

saveRooms();

renderAdmin();

renderRooms();

}

/* INIT */

renderRooms();

console.log(
"ALTON SKYLINE FINAL READY"
);
