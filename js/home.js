// Chips de filtro (ahora filtra carrusel Y grilla)
const chips = document.querySelectorAll('.chip');
const slides = document.querySelectorAll('.slide'); // carrusel
const cards  = document.querySelectorAll('.card');  // grilla
const sitio = document.getElementById('sitios-deportivos');
const btnMas = document.getElementById('btnLoadMore');
const carrusel= document.getElementById('carousel');

function applyFilter(cat){
  // Carrusel
  slides.forEach(s => {
    const ok = (cat === 'todos') || (s.dataset.cat === cat);
    s.style.display = ok ? '' : 'none';
  });

  // Grilla
  cards.forEach(c => {
    const ok = (cat === 'todos') || (c.dataset.cat === cat);
    c.style.display = ok ? '' : 'none';
  });
}

chips.forEach(ch => ch.addEventListener('click', () => {
  chips.forEach(c => c.classList.remove('active'));
  ch.classList.add('active');
  applyFilter(ch.dataset.cat);
}));

// Estado inicial
applyFilter('todos');

// Botón "Cargar más" (demo)
const btnLoad = document.getElementById('btnLoadMore');
if (btnLoad) {
  btnLoad.addEventListener('click', () => {
    // aquí añadirías nuevas cards vía fetch; por ahora solo feedback:
    btnLoad.textContent = 'Cargado';
    btnLoad.disabled = true;
  });
}

// (Opcional) mini-carrusel en "Próximas reservas"
const reservas = [
  {
    title: 'Cancha de fútbol la castellana',
    img: 'img/campo_castellana.png', sub: 'Campo de fútbol',
    fecha: '22/09/2025', hora: '20:00', tipo: 'Gratuita'
  },
  {
    title: 'Estadio Sierra Nevada',
    img: 'img/sierra_nevada.png', sub: 'Campo de fútbol',
    fecha: '24/09/2025', hora: '19:00', tipo: 'Paga'
  }
];

const Array = [
  // --- Grupo prioritario ---
  {
    id: 1,
    nombre: "Estadio Sierra Nevada",
    tipo: "Campo de futbol",
    deporte: ["Fútbol"],
    img: "img/sierra_nevada.png",
    alt: "Imagen del Estadio Sierra Nevada en Santa Marta"
  },
  {
    id: 4,
    nombre: "Coliseo Menor",
    tipo: "Complejo de voleibol",
    deporte: ["Voleibol", "Gimnasia", "Boxeo", "Lucha"],
    img: "img/coliseo_menor.png",
    alt: "Imagen del Coliseo Menor"
  },
  {
    id: 5,
    nombre: "Piscina Olímpica",
    tipo: "Natación",
    deporte: ["Natación", "Clavados", "Polo Acuático"],
    img: "img/piscina_olimpica.png",
    alt: "Imagen de la Piscina Olímpica"
  },
  {
    id: 41, 
    nombre: "Cancha de futbol Curinca",
    tipo: "Campo de futbol",
    deporte: ["Fútbol"],
    img: "img/curinca.png",
    alt: "Imagen de la Cancha de futbol Curinca"
  },
  // --- Resto de escenarios ---
  {
    id: 2,
    nombre: "Estadio Eduardo Santos",
    tipo: "Fútbol",
    deporte: ["Fútbol"],
    img: "img/Estadio eduardo santos.jpg",
    alt: "Imagen del antiguo Estadio Eduardo Santos"
  },
  {
    id: 3,
    nombre: "Coliseo Mayor del Cambio",
    tipo: "Multideportivo (Baloncesto, Voleibol, Futsal)",
    deporte: ["Baloncesto", "Voleibol", "Fútbol Sala"],
    img: "img/Coliseo mayor.jpg",
    alt: "Imagen del interior del Coliseo Mayor del Cambio"
  },
  {
    id: 6,
    nombre: "Patrinódromo de la Alegría (Villa Bolivariana)",
    tipo: "Patinaje de velocidad",
    deporte: ["Patinaje"],
    img: "img/palindromo.png",
    alt: "Pista de velocidad del Patrinódromo de la Alegría"
  },
  {
    id: 7,
    nombre: "Cancha de Rugby (Villa Bolivariana)",
    tipo: "Rugby",
    deporte: ["Rugby"],
    img: "img/Campo de rigby.jpg",
    alt: "Cancha de Rugby de la Villa Bolivariana"
  },
  {
    id: 8,
    nombre: "Estadio de Béisbol (Villa Bolivariana)",
    tipo: "Béisbol",
    deporte: ["Béisbol"],
    img: "img/Noimgfound.png",
    alt: "Imagen no encontrada"
  },
  {
    id: 9,
    nombre: "Complejo de Raquetas (Villa Bolivariana)",
    tipo: "Tenis, Squash, Racquetball",
    deporte: ["Tenis", "Squash", "Racquetball"],
    img: "img/Noimgfound.png",
    alt: "Imagen no encontrada"
  },
  {
    id: 10,
    nombre: "Pista de BMX (Parque Deportivo Bolivariano)",
    tipo: "BMX",
    deporte: ["BMX"],
    img: "img/Noimgfound.png",
    alt: "Imagen no encontrada"
  },
  {
    id: 11,
    nombre: "Coliseo de Gaira",
    tipo: "Multideportivo",
    deporte: ["Fútbol Sala", "Baloncesto", "Voleibol"],
    img: "img/Polideportivo de gaira.jpeg",
    alt: "Fachada del Coliseo de Gaira"
  },
  {
    id: 12,
    nombre: "Polideportivo del Sur",
    tipo: "Multideportivo",
    deporte: ["Fútbol Sala", "Baloncesto"],
    img: "img/Polideportivo sur.jpg",
    alt: "Cancha del Polideportivo del Sur"
  },
  {
    id: 13,
    nombre: "Parque de la Equidad (Etapa 1)",
    tipo: "Canchas múltiples, Pista de skate",
    deporte: ["Fútbol Sala", "Baloncesto", "Skateboarding"],
    img: "img/parque la equidad.jpg",
    alt: "Vista de las canchas y pista de skate del Parque de la Equidad"
  },
  {
    id: 14,
    nombre: "Cancha La Castellana",
    tipo: "Fútbol",
    deporte: ["Fútbol"],
    img: "img/campo_castellana.png",
    alt: "Cancha de fútbol La Castellana"
  },
  {
    id: 15,
    nombre: "Estadio de Sóftbol (Villa Bolivariana)",
    tipo: "Sóftbol",
    deporte: ["Sóftbol"],
    img: "img/Estadio de softbol.jpg",
    alt: "Campo de juego del Estadio de Sóftbol"
  },
  {
    id: 16,
    nombre: "Coliseo del Buen Vivir",
    tipo: "Multideportivo",
    deporte: ["Fútbol Sala", "Baloncesto", "Voleibol"],
    img: "img/Noimgfound.png",
    alt: "Interior del Coliseo del Buen Vivir"
  },
  {
    id: 17,
    nombre: "Cancha de Tejo (Villa Bolivariana)",
    tipo: "Tejo",
    deporte: ["Tejo"],
    img: "img/Noimgfound.png",
    alt: "Imagen no encontrada"
  },
  {
    id: 18,
    nombre: "Cancha Pedro León",
    tipo: "Fútbol",
    deporte: ["Fútbol"],
    img: "img/Cancha pedro leon.jpg",
    alt: "Cancha de fútbol Pedro León"
  },
  {
    id: 19,
    nombre: "Cancha Sintética de Pescaíto",
    tipo: "Fútbol",
    deporte: ["Fútbol"],
    img: "img/Noimgfound.png",
    alt: "Imagen no encontrada"
  },
  {
    id: 20,
    nombre: "Cancha del barrio Manzanares",
    tipo: "Multideportivo",
    deporte: ["Fútbol Sala", "Baloncesto"],
    img: "img/Cancha manzanares.jpg",
    alt: "Cancha polideportiva del barrio Manzanares"
  },
  {
    id: 21,
    nombre: "Polideportivo de Minca",
    tipo: "Multideportivo",
    deporte: ["Fútbol Sala", "Baloncesto"],
    img: "img/Noimgfound.png",
    alt: "Imagen no encontrada"
  },
  {
    id: 22,
    nombre: "Cancha La Lucha",
    tipo: "Fútbol",
    deporte: ["Fútbol"],
    img: "img/Polideportivo la luch.jpg",
    alt: "Cancha de fútbol del barrio La Lucha"
  },
  {
    id: 23,
    nombre: "Cancha del barrio Los Almendros",
    tipo: "Multideportivo",
    deporte: ["Fútbol Sala", "Baloncesto"],
    img: "img/Noimgfound.png",
    alt: "Imagen no encontrada"
  },
  {
    id: 24,
    nombre: "Polideportivo de Bonda",
    tipo: "Multideportivo",
    deporte: ["Fútbol Sala", "Baloncesto"],
    img: "img/Cancha de bonda.jpg",
    alt: "Cancha del Polideportivo de Bonda"
  },
  {
    id: 25,
    nombre: "Cancha de Juan XXIII",
    tipo: "Fútbol",
    deporte: ["Fútbol"],
    img: "img/Noimgfound.png",
    alt: "Imagen no encontrada"
  },
  {
    id: 26,
    nombre: "Cancha El Pando",
    tipo: "Fútbol",
    deporte: ["Fútbol"],
    img: "img/Cancha del pando.jpg",
    alt: "Cancha de fútbol del barrio El Pando"
  },
  {
    id: 27,
    nombre: "Polideportivo del barrio 17 de Diciembre",
    tipo: "Multideportivo",
    deporte: ["Fútbol Sala", "Baloncesto"],
    img: "img/Noimgfound.png",
    alt: "Imagen no encontrada"
  },
  {
    id: 28,
    nombre: "Polideportivo de Taganga",
    tipo: "Multideportivo",
    deporte: ["Fútbol Sala", "Baloncesto"],
    img: "img/Polideportivo taganga.jpg",
    alt: "Polideportivo del corregimiento de Taganga"
  },
  {
    id: 29,
    nombre: "Cancha del barrio Bastidas",
    tipo: "Multideportivo",
    deporte: ["Fútbol Sala", "Baloncesto"],
    img: "img/Cancha de bastidas.jpg",
    alt: "Cancha múltiple del barrio Bastidas"
  },
  {
    id: 30,
    nombre: "Cancha del barrio Corea",
    tipo: "Multideportivo",
    deporte: ["Fútbol Sala", "Baloncesto"],
    img: "img/Noimgfound.png",
    alt: "Imagen no encontrada"
  },
  {
    id: 31,
    nombre: "Cancha del barrio Nacho Vives",
    tipo: "Multideportivo",
    deporte: ["Fútbol Sala", "Baloncesto"],
    img: "img/Cancha nacho vives.jpg",
    alt: "Cancha del barrio Nacho Vives"
  },
  {
    id: 32,
    nombre: "Cancha Sintética IPC de Ciénaga (cercano)",
    tipo: "Fútbol",
    deporte: ["Fútbol"],
    img: "img/Cancha ipc cienaga.jpg",
    alt: "Cancha sintética de fútbol del IPC de Ciénaga"
  },
  {
    id: 33,
    nombre: "Cancha del Cristo Rey",
    tipo: "Fútbol",
    deporte: ["Fútbol"],
    img: "img/Cancha cristo rey.jpeg",
    alt: "Cancha de fútbol del barrio Cristo Rey"
  },
  {
    id: 34,
    nombre: "Polideportivo La Ciudadela",
    tipo: "Multideportivo",
    deporte: ["Fútbol Sala", "Baloncesto"],
    img: "img/Polideportivo la ciudadela.jpg",
    alt: "Cancha del Polideportivo La Ciudadela"
  },
  {
    id: 35,
    nombre: "Cancha de la Universidad del Magdalena",
    tipo: "Fútbol",
    deporte: ["Fútbol"],
    img: "img/Cancha unimagdalena.avif",
    alt: "Cancha de fútbol principal de la Universidad del Magdalena"
  },
  {
    id: 36,
    nombre: "Cancha del barrio 20 de Julio",
    tipo: "Multideportivo",
    deporte: ["Fútbol Sala", "Baloncesto"],
    img: "img/Cancha 20 de julio.jpg",
    alt: "Polideportivo del barrio 20 de Julio"
  },
  {
    id: 37,
    nombre: "Cancha de Villa del Río",
    tipo: "Multideportivo",
    deporte: ["Fútbol Sala", "Baloncesto"],
    img: "img/Villa del rio.jpeg",
    alt: "Cancha del barrio Villa del Río"
  },
  {
    id: 38,
    nombre: "Cancha del barrio Martinete",
    tipo: "Multideportivo",
    deporte: ["Fútbol Sala", "Baloncesto"],
    img: "img/Cancha de martinete.jpg",
    alt: "Cancha polideportiva del barrio Martinete"
  },
  {
    id: 39,
    nombre: "Polideportivo de la Lucha",
    tipo: "Multideportivo",
    deporte: ["Fútbol Sala", "Baloncesto"],
    img: "img/Polideportivo la luch.jpg",
    alt: "Cancha del Polideportivo de la Lucha"
  },
  {
    id: 40,
    nombre: "Polideportivo de Gaira - La Magdalena",
    tipo: "Multideportivo",
    deporte: ["Fútbol Sala", "Baloncesto"],
    img: "img/Polideportivo de gaira.jpeg",
    alt: "Polideportivo de Gaira en el barrio La Magdalena"
  }
];

const card = document.getElementById('reservaCard');
if (card) {
  let i = 0;
  const img = card.querySelector('.reserva-thumb');
  const title = card.querySelector('.reserva-title');
  const sub = card.querySelector('.reserva-sub');
  const metas = card.querySelectorAll('.reserva-meta');
  const prev = card.querySelector('.prev');
  const next = card.querySelector('.next');

  const render = () => {
    const r = reservas[i];
    img.src = r.img;
    title.textContent = r.title;
    sub.textContent = r.sub;
    metas[0].textContent = `Fecha: ${r.fecha}`;
    metas[1].textContent = `Hora: ${r.hora}`;
    metas[2].textContent = `Tipo de reserva: ${r.tipo}`;
  };
  render();

  prev.addEventListener('click', () => { i = (i - 1 + reservas.length) % reservas.length; render(); });
  next.addEventListener('click', () => { i = (i + 1) % reservas.length; render(); });
}

const renderSites = () => {

  const container = Array.map((hoja) => {
    return `      
      <article class="card" id="escenario-${hoja.id}" data-cat="${hoja.deporte.join(' ')}">
        <img src="${hoja.img}" alt="${hoja.alt}">
        <div class="card-body">
          <h3>${hoja.nombre}</h3>
          <p class="card-sub">${hoja.tipo}</p>
          <button class="btn-cta">Mirar disponibilidad</button>
        </div>
      </article>    
    `;
  }).join("");
  console.log(container)
  sitio.innerHTML = container;

}

const renderSitesCarrusel = () => {

  const container = Array.map((hoja) => {
    return `      
      <article class="slide" data-cat="${hoja.deporte}">
        <img src="${hoja.img}" alt="">
        <h3>${hoja.nombre}</h3>
        <p class="card-sub">${hoja.tipo}</p>
      </article>`;
  }).join("");
  console.log(container)
  carrusel.innerHTML = container;

}

renderSitesCarrusel();

const miBoton = document.getElementById('miBoton');

miBoton.addEventListener('click', () => {
  // Redirige a la URL que quieras
  window.location.href = 'reserva.html';
});

btnLoad.addEventListener("click", renderSites)