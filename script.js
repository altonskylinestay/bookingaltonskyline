const adminUser = "admin";
const adminPass = "alton123";

const rooms = [
{
id:1,
name:"Skyline Studio Room",
price:"299000",
desc:"Premium room dengan ambience skyline modern, cocok untuk staycation, healing, maupun short escape dekat UNDIP.",
visible:true
}
];

function loginAdmin(){

const user =
document.getElementById("username").value;

const pass =
document.getElementById("password").value;

if(
user === adminUser &&
pass === adminPass
){

document.getElementById("loginBox").style.display="none";

document.getElementById("dashboard").style.display="block";

renderRooms();

}else{

alert("Username atau password salah");

}

}

function renderRooms(){

const container =
document.getElementById("adminRoomList");

if(!container) return;

container.innerHTML="";

let visible = 0;

rooms.forEach(room=>{

if(room.visible) visible++;

container.innerHTML += `
<div class="admin-room">

<h3>${room.name}</h3>

<p>Status :
<b>
${room.visible ? "VISIBLE" : "HIDDEN"}
</b>
</p>

<input
id="price-${room.id}"
value="${room.price}"
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

</div>
`;

});

const count =
document.getElementById("visibleCount");

if(count){
count.innerText = visible;
}

}

function saveRoom(id){

const room =
rooms.find(r=>r.id===id);

room.price =
document.getElementById(`price-${id}`).value;

room.desc =
document.getElementById(`desc-${id}`).value;

alert("Data berhasil disimpan");

}

function toggleRoom(id){

const room =
rooms.find(r=>r.id===id);

room.visible = !room.visible;

renderRooms();

}
