// data.js
// Array con 10 pinturas. Cada objeto contiene título, autor, año, imagen, descripción, historia, curiosidades y opinión del experto.
const paintings = [
  {
    id: "mona-lisa",
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    year: "c. 1503–1519",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg",
    description: "Retrato de Lisa Gherardini, esposa de Francesco del Giocondo. Famosa por su enigmática sonrisa y por la técnica del sfumato.",
    history: "Realizada en el Renacimiento italiano, la obra fue llevada a Francia por Leonardo y finalmente entró en la colección real francesa. Robada en 1911 y recuperada en 1913, su robo aumentó enormemente su fama.",
    curiosities: "La identidad del modelo fue objeto de debate durante siglos. La pintura es pequeña (77×53 cm) y ha sido objeto de múltiples estudios científicos que revelan cambios en el boceto original.",
    expertOpinion: "La Mona Lisa es un hito técnico y psicológico: la sutileza del sfumato y la composición cambian la relación entre retratado y espectador. Su aura pública es tan potente como su calidad pictórica."
  },
  {
    id: "last-supper",
    title: "La Última Cena",
    artist: "Leonardo da Vinci",
    year: "c. 1495–1498",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/%C3%9Altima_Cena_-_Leonardo_da_Vinci_-_Wall_004.jpg",
    description: "Mural religioso que representa el instante en que Jesús anuncia que uno de los apóstoles lo traicionará.",
    history: "Pintado sobre el muro del refectorio del convento de Santa Maria delle Grazie en Milán. La técnica experimental de Leonardo y la humedad han hecho que la obra sufra daños y restauraciones múltiples.",
    curiosities: "Leonardo no usó la técnica tradicional del fresco sino pintura al temple sobre yeso seco, lo que aceleró su deterioro. Varias réplicas y copias históricas ayudan a recuperar aspectos perdidos.",
    expertOpinion: "Más allá de la famosa composición, esta obra destaca por la narrativa grupal y el tratamiento psicológico de cada apóstol. Es un estudio sobre la reacción humana colectiva."
  },
  {
    id: "creation-of-adam",
    title: "La Creación de Adán",
    artist: "Miguel Ángel",
    year: "c. 1508–1512",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Creation_of_Adam.jpg",
    description: "Panel central del techo de la Capilla Sixtina que muestra el momento en que Dios da la vida a Adán.",
    history: "Pintado durante el Alto Renacimiento sobre el techo de la Capilla Sixtina en el Vaticano. Fue una obra monumental que mezcló mitología bíblica y gran dominio anatómico.",
    curiosities: "La forma y composición han sido interpretadas como un símbolo anatómico (algunos estudios sugieren una representación estilizada del cerebro humano alrededor de Dios) y han generado numerosos debates.",
    expertOpinion: "La fuerza visual y la economía del gesto (las manos casi tocando) sintetizan la potencia simbólica imprescindible del Renacimiento: unión de lo divino y lo humano."
  },
  {
    id: "girl-with-pearl",
    title: "La joven de la perla",
    artist: "Johannes Vermeer",
    year: "c. 1665",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg",
    description: "Retrato íntimo de una joven con un turbante y un llamativo pendiente de perla, conocido también como 'La Mona Lisa del Norte'.",
    history: "Obra del Barroco holandés, la identidad de la modelo no está confirmada; se valora por su simplicidad, iluminación y la textura del pendiente.",
    curiosities: "La perla podría ser una imitación, y su brillo se consigue con un magistral uso de luces puntuales. Durante mucho tiempo la pintura fue relativamente desconocida hasta el siglo XX.",
    expertOpinion: "Vermeer domina la suspensión del gesto y la luz; la pintura es un experimento sobre mirada, materialidad y silencio pictórico."
  },
  {
    id: "starry-night",
    title: "La noche estrellada",
    artist: "Vincent van Gogh",
    year: "1889",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    description: "Vista nocturna desde la ventana del sanatorio de Saint-Rémy con fuertes remolinos y una paleta intensa.",
    history: "Pintada durante la convalecencia de Van Gogh en el hospital de Saint-Rémy. La obra refleja su mundo emocional y su innovación en el uso del color y la pincelada.",
    curiosities: "Aunque representa un paisaje real, Van Gogh combinó memorias y elementos imaginados. Los remolinos han sido objeto de estudios tanto artísticos como científicos.",
    expertOpinion: "No es solo un paisaje sino un mapa emocional: su energía plástica y la expresividad de la pincelada anticipan la modernidad expresiva del siglo XX."
  },
  {
    id: "guernica",
    title: "Guernica",
    artist: "Pablo Picasso",
    year: "1937",
    image: "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg",
    description: "Composición monumental en blanco y negro que denuncia el bombardeo de Guernica durante la Guerra Civil española.",
    history: "Encargada para el pabellón español en la Exposición Internacional de París de 1937. Convertida en símbolo antibelicista y en emblema político y artístico.",
    curiosities: "El mural viajó por el mundo exiliando la obra hasta su regreso definitivo a España en 1981. Su escala y monocromía intensifican su carga dramática.",
    expertOpinion: "Guernica es un manifiesto visual: Picasso condensa horror, simbolismo y modernidad plástica para crear una obra de denuncia universal."
  },
  {
    id: "night-watch",
    title: "La ronda de noche",
    artist: "Rembrandt van Rijn",
    year: "1642",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Rembrandt_Harmensz._van_Rijn_-_De_Nachtwacht.jpg",
    description: "Retrato colectivo de una compañía de milicia con una composición dinámica y naturalista, cargada de luz y penumbra.",
    history: "Encargo del Amsterdam Militia Company; la composición rompe con el retrato estático del grupo y establece una escena en movimiento.",
    curiosities: "El título 'La ronda de noche' es engañoso: originalmente la escena era diurna, pero la pátina oscurecida hizo pensar que era nocturna. Se han realizado restauraciones importantes.",
    expertOpinion: "Rembrandt revolucionó el retrato grupal al crear una escena donde cada figura tiene vida propia y la iluminación dramática guía la narrativa."
  },
  {
    id: "birth-of-venus",
    title: "El nacimiento de Venus",
    artist: "Sandro Botticelli",
    year: "c. 1484–1486",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
    description: "Representa a la diosa Venus emergiendo del mar sobre una concha; una imagen icónica del Renacimiento temprano en Florencia.",
    history: "Obra de corte mitológico encargada por la familia Médici. Simboliza el renacimiento de la belleza clásica y el humanismo renacentista.",
    curiosities: "La pose y la línea elongada de Venus remiten a modelos clásicos y a la idealización renacentista. Ha inspirado numerosas reinterpretaciones.",
    expertOpinion: "La pintura sintetiza lo clásico y lo poético: Botticelli combina una elegancia lineal con un sentido simbólico que habla del humanismo florentino."
  },
  {
    id: "las-meninas",
    title: "Las Meninas",
    artist: "Diego Velázquez",
    year: "1656",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Las_Meninas_01.jpg",
    description: "Compleja escena de corte que muestra a la infanta Margarita, sus damas y al propio Velázquez pintando en el taller real.",
    history: "Pintada en la corte de Felipe IV, la obra ha sido analizada como un estudio sobre la representación pictórica, la mirada y el estatus del artista.",
    curiosities: "Velázquez se representa en la obra y hay un espejo con la imagen real del rey y la reina: juego de perspectivas y niveles de realidad.",
    expertOpinion: "Las Meninas es un tratado sobre la mirada y la pintura: su modernidad conceptual la coloca entre los grandes hitos del barroco y de la historia del arte."
  },
  {
    id: "american-gothic",
    title: "American Gothic",
    artist: "Grant Wood",
    year: "1930",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
    description: "Retrato de una pareja delante de una casa en estilo gótico rural estadounidense, con una lanza de pitchfork como símbolo.",
    history: "Icono del regionalismo estadounidense, la pintura se convirtió en una imagen ampliamente reproducida y objeto de parodias y reinterpretaciones.",
    curiosities: "Los modelos eran la hermana y el dentista del pintor, y la pintura fue inicialmente interpretada de varias maneras: crítica, homenaje o sátira.",
    expertOpinion: "American Gothic captura una atmósfera cultural: sobriedad, fuerza moral y ambigüedad interpretativa, lo que la convierte en un icono cultural del siglo XX."
  }
];
