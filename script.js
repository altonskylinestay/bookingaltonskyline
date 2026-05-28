const data = {

  wa: "628976660674",

  rooms: [

    {
      name: "Skyline Room",
      price: "Rp 250.000",
      facility: "WiFi • AC • Smart TV • Netflix",
      image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
      active: true
    },

    {
      name: "Couple Stay Room",
      price: "Rp 320.000",
      facility: "Queen Bed • Skyline View • Kitchen",
      image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200",
      active: true
    }

  ],

  testimonials: [

    {
      name: "Sarah",
      text:
      "Tempatnya nyaman banget dan city view malamnya cantik."
    },

    {
      name: "Andi",
      text:
      "Healing terbaik dekat UNDIP. Bersih dan premium."
    }

  ]

};

function renderRooms(){

  const container =
  document.getElementById("roomContainer");

  container.innerHTML = "";

  data.rooms.forEach((room,index)=>{

    if(!room.active) return;

    container.innerHTML += `

      <div class="room-card">

        <img src="${room.image}">

        <div class="room-content">

          <div class="room-title">
            ${room.name}
          </div>

          <div class="room-price">
            ${room.price}
          </div>

          <div class="room-facility">
            ${room.facility}
          </div>

          <div class="booking-box">

            <input
              type="date"
              id="date${index}"
            >

            <input
              type="number"
              id="night${index}"
              placeholder="Lama menginap"
            >

            <button
              class="booking-btn"
              onclick="bookRoom(${index})"
            >
              Booking via WhatsApp
            </button>

          </div>

        </div>

      </div>

    `;
  });

}

function renderTestimonials(){

  const container =
  document.getElementById("testimonialContainer");

  container.innerHTML = "";

  data.testimonials.forEach((item)=>{

    container.innerHTML += `

      <div class="testi-card">

        <div class="testi-name">
          ${item.name}
        </div>

        <div>
          ${item.text}
        </div>

      </div>

    `;
  });

}

function bookRoom(index){

  const room = data.rooms[index];

  const date =
  document.getElementById(`date${index}`).value;

  const night =
  document.getElementById(`night${index}`).value;

  const text =
`Halo Alton Skyline Stay

Saya ingin booking:

Kamar:
${room.name}

Tanggal:
${date}

Lama menginap:
${night} malam`;

  window.open(
    `https://wa.me/${data.wa}?text=${encodeURIComponent(text)}`,
    "_blank"
  );

}

function openAdmin(){

  document.getElementById(
    "adminPanel"
  ).style.display = "flex";

}

function
