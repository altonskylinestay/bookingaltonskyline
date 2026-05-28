/* =========================
ALTON SKYLINE STAY
FINAL SYSTEM
========================= */

const DEFAULT_ROOMS = [

{
id:1,
name:"Skyline Studio Room",
price:"Rp299K / Night",
image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
desc:"Premium skyline ambience room near UNDIP.",
visible:true
},

// 20 SLOT HIDDEN

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

let rooms =
JSON.parse(localStorage.getItem("altonRooms"))
|| DEFAULT_ROOMS;

/* =========================
SAVE
========================= */

function saveRooms(){

localStorage.setItem(
"altonRooms",
JSON.stringify(rooms)
);

}

/* =========================
RENDER PUBLIC ROOM
========================= */

function renderRooms(){

const container =
document.getElementById("roomContainer");

if(!container) return;

container.innerHTML = "";

rooms.forEach(room=>{

if(room.visible){

container.innerHTML += `

<div class="room-card">

<img src="${room.image}">

<div class="room-content">

<h3>
${room.name}
</h3>

<div class="room-price">
${room.price}
</div>

<p class="room-desc">
${room.desc}
</p>

<ul>

<li>✔ Smart TV</li>
<li>✔ Premium Interior</li>
<li>✔ Fast Wifi</li>
<li>✔ Skyline Ambience</li>

</ul>

<a
href="https://wa.me/628976660674?text=Halo%20saya%20ingin%20booking%20${room.name}"
class="room-btn">

Booking

</a>

</div>

</div>

`;

}

});

}

/* =========================
ADMIN LOGIN
========================= */

function loginAdmin(){

const username =
document.getElementById("username").value;

const password =
document.getElementById("password").value;

if(
username === "admin"
&&
password === "skyline2026"
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

/* =========================
RENDER ADMIN
========================= */

function renderAdmin(){

const container =
document.getElementById("adminRoomList");

if(!container) return;

container.innerHTML = "";

rooms.forEach((room,index)=>{

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
placeholder="Room Description"
class="admin-textarea"
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

}

/* =========================
SAVE ROOM
========================= */

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

alert("Room updated");

}

/* =========================
TOGGLE ROOM
========================= */

function toggleRoom(index){

rooms[index].visible =
!rooms[index].visible;

saveRooms();

renderAdmin();

}

/* =========================
INIT
========================= */

renderRooms();

console.log(
"ALTON SKYLINE FINAL READY"
);
