function openAdmin(){

document.getElementById("adminPanel").style.display="flex";

}

function closeAdmin(){

document.getElementById("adminPanel").style.display="none";

}

/* ROOM DATA */

let rooms = [

{
name:"Studio Skyline",
price:"299K",
status:true
},

{
name:"Skyline Deluxe",
price:"399K",
status:true
},

{
name:"Monthly Stay",
price:"Special Price",
status:true
}

];

/* RENDER ADMIN */

function renderAdminRooms(){

let html = "";

rooms.forEach((room,index)=>{

html += `

<div class="admin-room">

<h3>${room.name}</h3>

<p>Price : ${room.price}</p>

<p>Status :
${room.status ? "Visible" : "Hidden"}
</p>

<input
type="text"
placeholder="Edit Price"
id="price${index}"
>

<button onclick="updatePrice(${index})">
Save Price
</button>

<button onclick="toggleRoom(${index})">
${room.status ? "Hide Room" : "Show Room"}
</button>

</div>

`;

});

document.getElementById("adminRooms").innerHTML = html;

}

/* UPDATE PRICE */

function updatePrice(index){

let value =
document.getElementById(`price${index}`).value;

if(value !== ""){

rooms[index].price = value;

alert("Price Updated");

location.reload();

}

}

/* TOGGLE ROOM */

function toggleRoom(index){

rooms[index].status = !rooms[index].status;

alert("Room Status Updated");

location.reload();

}

/* LOAD */

renderAdminRooms();

console.log("ALTON SKYLINE ADMIN READY");
