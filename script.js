const rooms = [

{
name:"Studio Skyline",
price:"Rp299K / Night",
image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
visible:true
},

{
name:"Skyline Deluxe",
price:"Rp399K / Night",
image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
visible:true
},

{
name:"Monthly Stay",
price:"Special Price",
image:"https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
visible:true
}

];

function renderRooms(){

const roomList =
document.getElementById("roomList");

roomList.innerHTML = "";

rooms.forEach((room,index)=>{

if(room.visible){

roomList.innerHTML += `

<div class="room-card">

<img src="${room.image}">

<div class="room-content">

<h3>${room.name}</h3>

<div class="room-price">
${room.price}
</div>

<ul>

<li>✔ Smart TV</li>
<li>✔ Wifi</li>
<li>✔ Premium Interior</li>
<li>✔ Skyline Ambience</li>

</ul>

<a href="https://wa.me/628976660674"
class="room-btn">

Booking

</a>

</div>

</div>

`;

}

});

}

function openAdmin(){

document.getElementById("adminModal").style.display="flex";

renderAdmin();

}

function closeAdmin(){

document.getElementById("adminModal").style.display="none";

}

function renderAdmin(){

const adminRooms =
document.getElementById("adminRooms");

adminRooms.innerHTML = "";

rooms.forEach((room,index)=>{

adminRooms.innerHTML += `

<div class="admin-room">

<h3>${room.name}</h3>

<p>${room.price}</p>

<p>
Status :
${room.visible ? "Visible" : "Hidden"}
</p>

<input
type="text"
placeholder="Edit Price"
id="price-${index}"
>

<button onclick="savePrice(${index})">
Save Price
</button>

<button onclick="toggleRoom(${index})">
${room.visible ? "Hide Room" : "Show Room"}
</button>

</div>

`;

});

}

function savePrice(index){

const value =
document.getElementById(`price-${index}`).value;

if(value !== ""){

rooms[index].price = value;

renderRooms();
renderAdmin();

}

}

function toggleRoom(index){

rooms[index].visible =
!rooms[index].visible;

renderRooms();
renderAdmin();

}

renderRooms();

console.log("ALTON SKYLINE FINAL READY");
