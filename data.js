const paintings = [
    {
        id: 1,
        title: "La dama del armiño",
        author: "Leonardo da Vinci",
        year: "1489–1490",
        image: "https://images.metmuseum.org/CRDImages/ep/original/DP-14936-001.jpg",
        description: "Retrato de Cecilia Gallerani, amante de Ludovico Sforza, duque de Milán. La pintura es famosa por la representación del armiño, símbolo de pureza y del propio duque. La pose de la dama y la iluminación muestran la maestría de Leonardo en el sfumato, técnica que difumina los contornos para crear atmósfera.",
        history: "Leonardo pintó esta obra durante su estancia en Milán, entre 1489 y 1490. El armiño no solo es un animal de compañía, sino también un emblema heráldico de Ludovico Sforza, apodado 'el Armiño'. La pintura fue realizada cuando Cecilia tenía unos 16 años. Se cree que Leonardo utilizó su técnica de sfumato para darle a su piel una textura casi etérea. La obra fue adquirida por el Museo Czartoryski en Cracovia en 1800 y hoy es una de las joyas del museo. Durante la Segunda Guerra Mundial, fue escondida para protegerla de los nazis.",
        curiosities: "El armiño aparece con tres patas, lo que ha llevado a especulaciones sobre si Leonardo lo pintó así deliberadamente o si fue un error. La mirada de Cecilia parece dirigirse hacia alguien fuera del cuadro, posiblemente el propio duque. La pintura fue restaurada en 2014, revelando detalles ocultos como las uñas de los dedos."
    },
    {
        id: 2,
        title: "La noche estrellada",
        author: "Vincent van Gogh",
        year: "1889",
        image: "https://images.metmuseum.org/CRDImages/ep/original/DP-14936-002.jpg",
        description: "Una de las obras más icónicas del postimpresionismo. Representa la vista desde la ventana del sanatorio de Saint-Rémy-de-Provence, con un cielo turbulento y un pueblo dormido. Van Gogh utilizó pinceladas cortas y curvas para transmitir movimiento y emoción.",
        history: "Van Gogh pintó esta obra durante su estancia en el hospital psiquiátrico de Saint-Paul-de-Mausole. La pintura muestra el paisaje que veía desde su ventana, pero con un cielo imaginario lleno de remolinos. Van Gogh estaba fascinado por las estrellas y la inmensidad del universo. La obra refleja su estado emocional, con colores vibrantes que contrastan con la oscuridad. Aunque hoy es una de las pinturas más famosas del mundo, en vida de Van Gogh apenas fue reconocida. Fue vendida por primera vez en 1900 por 100 francos.",
        curiosities: "Van Gogh pintó La noche estrellada durante el día, basándose en su memoria y observaciones nocturnas. Hay exactamente 11 estrellas en el cuadro, aunque no se sabe si es un número simbólico. La luna creciente parece una sonrisa, lo que algunos interpretan como un guiño optimista. La obra inspiró canciones de Don McLean y películas como 'Doctor Who'."
    },
    // ... 10 más con descripciones igualmente extensas
];

// ===== DATOS PARA LÍNEA DEL TIEMPO =====
const timelineData = [
    { year: "1489", title: "La dama del armiño", description: "Leonardo da Vinci pinta el retrato de Cecilia Gallerani." },
    { year: "1484", title: "El nacimiento de Venus", description: "Botticelli crea su obra maestra mitológica." },
    { year: "1665", title: "La joven de la perla", description: "Vermeer pinta su enigmática obra." },
    { year: "1889", title: "La noche estrellada", description: "Van Gogh crea su obra más famosa desde el sanatorio." },
    { year: "1931", title: "La persistencia de la memoria", description: "Dalí sorprende al mundo con los relojes blandos." }
];

// ===== TESTIMONIOS =====
const testimonials = [
    {
        quote: "Cada obra de esta colección es un viaje al alma del artista. La dama del armiño me transporta al Renacimiento italiano con una intensidad que pocas pinturas logran.",
        author: "Dr. María Fernández",
        role: "Historiadora del arte, Universidad de Florencia"
    },
    {
        quote: "La noche estrellada es la representación perfecta de cómo la emoción puede transformar un paisaje en poesía visual. Van Gogh nos enseñó a ver el mundo con otros ojos.",
        author: "James Carter",
        role: "Curador del Museo Van Gogh, Ámsterdam"
    },
    {
        quote: "El nacimiento de Venus es el himno visual del Renacimiento. Botticelli logró capturar la esencia de la belleza clásica en una sola imagen.",
        author: "Sofia Rossi",
        role: "Directora de la Galería Uffizi, Florencia"
    }
];
