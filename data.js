/**
 * data.js — Base de datos de las obras del museo.
 * Estructura lista para expandir hasta 50 pinturas.
 * Solo añade nuevos objetos al array siguiendo el mismo esquema.
 */

export const obras = [
  {
    id: 1,
    titulo: "La Gioconda (Mona Lisa)",
    artista: "Leonardo da Vinci",
    ano: "c. 1503–1519",
    imagenUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/640px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    descripcion:
      "Una sonrisa suspendida en el tiempo, donde la luz y la sombra dialogan en perpetuo enigma.",
    historia:
      "Pintada por Leonardo da Vinci durante el Renacimiento italiano, se cree que retrata a Lisa Gherardini, esposa del comerciante florentino Francesco del Giocondo. Leonardo nunca entregó la obra; la transportó consigo durante años, perfeccionándola hasta su muerte en Francia. Adquirida por Francisco I, hoy reside en el Museo del Louvre, donde se ha convertido en el símbolo absoluto de la pintura occidental.",
    curiosidades: [
      "Fue robada del Louvre en 1911 por un empleado italiano, Vincenzo Peruggia, y permaneció desaparecida dos años; paradójicamente, el robo catapultó su fama mundial.",
      "Estudios de imagen multiespectral revelaron bocetos y versiones anteriores ocultas bajo la capa visible, sugiriendo que Leonardo modificó la pose durante años."
    ],
    opinionExperto:
      "La maestría del 'sfumato' alcanza aquí su cénit: los contornos se disuelven en una atmósfera vaporosa que diluye la frontera entre figura y fondo. La construcción piramidal confiere estabilidad clásica, mientras que la mirada —que parece seguir al espectador— anticipa una modernidad psicológica desconcertante para su época."
  },
  {
    id: 2,
    titulo: "La Libertad guiando al pueblo",
    artista: "Eugène Delacroix",
    ano: "1830",
    imagenUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg/640px-Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg",
    descripcion:
      "La alegoría hecha carne: una mujer indómita avanza entre el humo y la pólvora, portando la promesa de un mundo nuevo.",
    historia:
      "Delacroix concibió esta obra como respuesta a la Revolución de Julio de 1830, que derrocó a Carlos X de Francia. La figura central, Marianne —personificación de la Libertad—, conduce a una multitud heterogénea sobre las barricadas parisinas. La pintura fusiona la realidad de la lucha urbana con la elevación mítica, consolidándose como el emblema visual del espíritu republicano francés.",
    curiosidades: [
      "El gobierno francés compró la obra en 1831 pero la mantuvo oculta durante años, temiendo que su mensaje revolucionario incitara nuevos levantamientos.",
      "Se especula que el joven con dos pistolas a la derecha pudo inspirar el personaje de Gavroche en 'Los Miserables' de Victor Hugo."
    ],
    opinionExperto:
      "Obra cumbre del Romanticismo, donde la paleta cálida y el dinamismo diagonal de la composición generan una tensión casi operística. Delacroix subordina el dibujo neoclásico al color y al gesto, anticipando las preocupaciones lumínicas que el Impresionismo desarrollaría décadas después. La pirámide humana, coronada por la bandera tricolor, articula una retórica visual de impecable eficacia política."
  },
  {
    id: 3,
    titulo: "La joven de la perla",
    artista: "Johannes Vermeer",
    ano: "c. 1665",
    imagenUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/520px-1665_Girl_with_a_Pearl_Earring.jpg",
    descripcion:
      "Un instante robado a la eternidad: el giro de un rostro, el brillo húmedo de una mirada y el silencioso destello de una perla.",
    historia:
      "Considerada la obra más célebre de Vermeer y a menudo apodada 'la Mona Lisa del Norte', no es un retrato convencional sino un 'tronie': un estudio de carácter o tipo idealizado, habitual en la pintura holandesa del Siglo de Oro. La identidad de la modelo sigue siendo un misterio. La obra reposa hoy en el Mauritshuis de La Haya, tras décadas de relativa oscuridad antes de su redescubrimiento crítico.",
    curiosidades: [
      "El supuesto pendiente de perla es físicamente imposible por su tamaño; análisis recientes sugieren que podría tratarse de estaño pulido o vidrio veneciano, no de una perla auténtica.",
      "Vermeer empleó el costosísimo pigmento azul ultramar —elaborado con lapislázuli importado de Afganistán— incluso en las sombras del turbante, un lujo extravagante para su economía doméstica."
    ],
    opinionExperto:
      "Vermeer despliega un dominio óptico extraordinario: el fondo oscuro y plano —probablemente influido por su uso de la cámara oscura— proyecta la figura hacia el espectador con inmediatez fotográfica. La gestión de los reflejos especulares, especialmente el punto de luz sobre los labios húmedos y la perla, revela una sensibilidad casi científica hacia la fenomenología de la luz."
  }

  // ───────────────────────────────────────────────
  //  AÑADE AQUÍ LAS OBRAS 4 A 50 (mismo esquema)
  //
  //  {
  //    id: 4,
  //    titulo: "",
  //    artista: "",
  //    ano: "",
  //    imagenUrl: "",
  //    descripcion: "",
  //    historia: "",
  //    curiosidades: ["", ""],
  //    opinionExperto: ""
  //  },
  // ───────────────────────────────────────────────
];
