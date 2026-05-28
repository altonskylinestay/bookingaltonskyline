const rooms = [

{
name:"Studio Room",
price:"299K",
visible:true
},

{
name:"Skyline Deluxe",
price:"399K",
visible:true
},

{
name:"Monthly Stay",
price:"Special Price",
visible:true
}

];

function openAdmin(){

document.getElementById("adminModal").style.display="flex";

renderAdmin();

}

function closeAdmin(){

document.getElementById("adminModal").style.display="none";

}

function renderAdmin(){

const container = document.getElementById("adminRooms");

container.innerHTML = "";

rooms.forEach((room,index)=>{

container.innerHTML += `

<div class="admin-room">

<h3>${room.name}</h3>

<p>Price : ${room.price}</p>

<p>Status : ${room.visible ? "Visible" : "Hidden"}</p>

<input type="text" id="price-${index}" placeholder="Edit Price">

<button onclick="savePrice(${index})">

Save Price

</button>

<button onclick="toggleRoom(${index})">

${room.visible ? "Hide Room" : "Show Room"}

</button>

</div>

`;

});

renderRooms();

}

function savePrice(index){

const newPrice = document.getElementById(`price-${index}`).value;

if(newPrice !== ""){

rooms[index].price = newPrice;

renderAdmin();

}

}

function toggleRoom(index){

rooms[index].visible = !rooms[index].visible;

renderAdmin();

}

function renderRooms(){

const roomContainer = document.getElementById("roomList");

if(!roomContainer) return;

roomContainer.innerHTML = "";

rooms.forEach(room=>{

if(room.visible){

roomContainer.innerHTML += `

<div class="room-card">

<h3>${room.name}</h3>

<p>${room.price}</p>

<a href="https://wa.me/628976660674">

Booking Sekarang

</a>

</div>

`;

}

});

}

renderRooms();
