const adminUser = "admin";
const adminPass = "alton123";

/* =========================
DEFAULT ROOM DATA
========================= */

let rooms = JSON.parse(localStorage.getItem("altonRooms")) || [

{
id:1,
name:"Skyline Studio A",
price:"249000",
desc:"Studio room nyaman dengan skyline view.",
visible:true
},

{
id:2,
name:"Skyline Studio B",
price:"249000",
desc:"Cocok untuk staycation dan business trip.",
visible:true
},

{
id:3,
name:"Skyline Deluxe",
price:"299000",
desc:"Unit premium dengan ambience luxury.",
visible:true
}

];

/* =========================
LOGIN
========================= */

function loginAdmin(){

const user =
document.getElementById("username").value;

const pass =
document.getElementById("password").value;

if(user===adminUser && pass===adminPass){

document.getElementById("loginBox").style.display="none";

document.getElementById("dashboard").style.display="block";

renderRooms();

}else{

alert("Username atau Password salah");

}

}

/* =========================
SAVE LOCAL STORAGE
========================= */

function saveStorage(){

localStorage.setItem(
"altonRooms",
JSON.stringify(rooms)
);

}

/* =========================
RENDER ROOM
========================= */

function renderRooms(){

const container =
document.getElementById("adminRoomList");

if(!container) return;

container.innerHTML="";

let visibleCount = 0;

rooms.forEach(room=>{

if(room.visible) visibleCount++;

container.innerHTML += `

<div class="admin-room">

<h3>${room.name}</h3>

<p>
Status :
<b>
${room.visible ? "VISIBLE" : "HIDDEN"}
</b>
</p>

<input
id="name-${room.id}"
value="${room.name}"
placeholder="Nama Kamar"
>

<input
id="price-${room.id}"
value="${room.price}"
placeholder="Harga"
>

<textarea
class="admin-textarea"
id="desc-${room.id}"
>${room.desc}</textarea>

<button onclick="saveRoom(${room.id})">
Save Changes
</button>

<button onclick="toggleRoom(${room.id})">
${room.visible ? "Hide Room" : "Show Room"}
</button>

<button onclick="deleteRoom(${room.id})">
Delete Room
</button>

</div>

`;

});

document.getElementById("visibleCount").innerText =
visibleCount;

}

/* =========================
SAVE ROOM
========================= */

function saveRoom(id){

const room =
rooms.find(r=>r.id===id);

room.name =
document.getElementById(`name-${id}`).value;

room.price =
document.getElementById(`price-${id}`).value;

room.desc =
document.getElementById(`desc-${id}`).value;

saveStorage();

alert("Data berhasil disimpan");

renderRooms();

}

/* =========================
SHOW HIDE
========================= */

function toggleRoom(id){

const room =
rooms.find(r=>r.id===id);

room.visible = !room.visible;

saveStorage();

renderRooms();

}

/* =========================
DELETE ROOM
========================= */

function deleteRoom(id){

if(!confirm("Hapus kamar ini?")) return;

rooms =
rooms.filter(r=>r.id!==id);

saveStorage();

renderRooms();

}

/* =========================
ADD ROOM
========================= */

function addRoom(){

const newRoom = {

id:Date.now(),

name:"Room Baru",

price:"249000",

desc:"Deskripsi kamar",

visible:true

};

rooms.push(newRoom);

saveStorage();

renderRooms();

}
