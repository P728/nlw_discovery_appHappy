const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zommControl: false,
};

// create map
const map = L.map("mapid", options).setView([-23.6665376, -46.4409429], 15);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 57],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create and add marker
L.marker([-23.6665376, -46.4409429], { icon: icon }).addTo(map);

/* image gallery */

function selectImage(event) {
  const button = event.currentTarget;

  // remover todas as classes .active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass); // buttons.forEach((button)
  // => {button.classList.remove(".active")})

  function removeActiveClass(button) {
    button.classList.remove(".active");
  }

  /* fazer teste: console.log(buttons) */

  //selecionar a image clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  // atualizar o container de image
  imageContainer.src = image.src;

  // adicionar a classe .active para esse botão
  button.classList.add("active");
}
