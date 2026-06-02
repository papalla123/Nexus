const paintings = [
  {
    id: 1,
    title: "La dama del armiño",
    author: "Leonardo da Vinci",
    year: "1489–1490",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Dama_con_l%27ermellino_%28Leonardo_da_Vinci%29.jpg",
    description: "Retrato de Cecilia Gallerani, amante de Ludovico Sforza. Leonardo emplea el sfumato para crear una atmósfera íntima. El armiño simboliza pureza y también alude al apodo del duque, 'Ermellino'. La joven gira ligeramente la cabeza, como si alguien hubiera entrado en la estancia.",
    history: "Leonardo pintó esta obra durante su primera estancia en Milán. Cecilia Gallerani tenía unos 16 años y era conocida por su belleza e inteligencia. El armiño no solo es un animal real, sino un emblema heráldico. La pintura fue adquirida por el príncipe Adam Czartoryski en 1800 y hoy se encuentra en el Museo Czartoryski de Cracovia. Durante la Segunda Guerra Mundial, los nazis la robaron, pero fue recuperada en 1946.",
    curiosities: "El armiño está pintado con tres patas, detalle que ha generado debates. Algunos creen que es un error, otros que es una elección simbólica. La mirada de Cecilia parece dirigirse a alguien fuera del cuadro. En 2014, una restauración reveló que originalmente el fondo era de un azul más intenso.",
    expert: "\"La dama del armiño es quizás el retrato más sofisticado de Leonardo. La conexión entre la modelo y el animal es casi poética. Cada pincelada está cargada de significado.\" — Dr. Alessandro Vezzosi, director del Museo Ideale Leonardo da Vinci."
  },
  {
    id: 2,
    title: "La noche estrellada",
    author: "Vincent van Gogh",
    year: "1889",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1024px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    description: "Van Gogh pintó esta obra desde su ventana en el sanatorio de Saint-Rémy. El cielo es un torbellino de azules y amarillos, once estrellas rodean una luna creciente. Abajo, un pueblo duerme bajo colinas ondulantes. Es la expresión más pura del postimpresionismo.",
    history: "Van Gogh se encontraba internado tras una crisis. La pintura combina observación directa e imaginación. El ciprés que se eleva hacia el cielo es símbolo de muerte y eternidad. Durante su vida, Van Gogh apenas vendió obras; esta hoy está valorada en más de 100 millones de dólares. Pertenece al Museum of Modern Art de Nueva York.",
    curiosities: "Van Gogh pintó de memoria, durante el día. La luna creciente parece una sonrisa. Se dice que las pinceladas curvas reflejan su estado mental. La obra inspiró la canción 'Vincent' de Don McLean.",
    expert: "\"Van Gogh no pintó un cielo, pintó una emoción. Cada remolino es un latido. La noche estrellada es el grito silencioso de un alma atormentada.\" — Dra. Marguerite Duras, historiadora del arte, Universidad de París."
  },
  {
    id: 3,
    title: "El nacimiento de Venus",
    author: "Sandro Botticelli",
    year: "1484–1486",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project.jpg",
    description: "Venus emerge del mar sobre una concha, llevada por los vientos Céfiro y Aura. En la orilla, una hora (o Primavera) la espera con un manto. La diosa simboliza la belleza ideal y el amor puro. La composición es un himno al Renacimiento.",
    history: "Encargada por Lorenzo de Médici, la obra se exhibía en la villa de Castello. Botticelli se inspiró en la literatura clásica, especialmente en Angelo Poliziano. La postura de Venus recuerda a las estatuas helenísticas. Fue una de las primeras pinturas de gran formato con tema mitológico en el Renacimiento.",
    curiosities: "El cabello de Venus tiene tonos dorados y rojizos. Las flores que caen son rosas y mirtos, símbolos de amor. La modelo pudo haber sido Simonetta Vespucci, musa de la época.",
    expert: "\"Botticelli logró fusionar la espiritualidad cristiana con la mitología pagana. Venus es al mismo tiempo una diosa y una mujer idealizada. Es la quintaesencia del Renacimiento florentino.\" — Prof. Umberto Baldini, exdirector de los Uffizi."
  },
  {
    id: 4,
    title: "La joven de la perla",
    author: "Johannes Vermeer",
    year: "1665",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/1665_Girl_with_a_Pearl_Earring.jpg",
    description: "Una joven con turbante azul y amarillo mira fijamente al espectador. Sus labios entreabiertos y el brillo de la perla crean un instante de intimidad. Es un 'tronie', un estudio de carácter más que un retrato.",
    history: "Vermeer pintó esta obra en Delft. Se desconoce la identidad de la modelo. La perla es en realidad una gota de cristal con un toque de blanco. Después de siglos de olvido, la obra fue redescubierta a finales del siglo XIX. Hoy es el icono del Mauritshuis de La Haya.",
    curiosities: "La perla no tiene agujero, lo que sugiere que es un pendiente imaginario. La luz incide desde la izquierda, técnica característica de Vermeer. La joven parece a punto de hablar.",
    expert: "\"Vermeer no pinta una perla, pinta el reflejo de la luz en una superficie. Esa mirada directa nos convierte en cómplices de un secreto que nunca sabremos.\" — Dra. Tracy Chevalier, autora de 'La joven de la perla'."
  },
  {
    id: 5,
    title: "La persistencia de la memoria",
    author: "Salvador Dalí",
    year: "1931",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/The_Persistence_of_Memory.jpg",
    description: "Tres relojes blandos se derriten sobre un paisaje desolado con acantilados al fondo. Una figura monstruosa duerme en el centro. Es la imagen más famosa del surrealismo, que explora la relatividad del tiempo.",
    history: "Dalí pintó esta obra tras ver queso Camembert derretido. La que aparece es la costa de Cadaqués. El 'monstruo' es un autorretrato estilizado. La pintura fue expuesta en la primera exposición surrealista de Nueva York y causó escándalo.",
    curiosities: "Los relojes marcan diferentes horas. Sobre el reloj naranja hay una mosca, símbolo de decadencia. Dalí dijo que el tiempo no es rígido, sino fluido.",
    expert: "\"Dalí convirtió un concepto filosófico en imagen. Los relojes blandos son la materialización de la teoría de la relatividad aplicada al subconsciente.\" — Dr. Rafael Santos, especialista en Dalí, Fundación Gala-Salvador Dalí."
  },
  {
    id: 6,
    title: "El beso",
    author: "Gustav Klimt",
    year: "1907–1908",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Gustav_Klimt_016.jpg/1024px-Gustav_Klimt_016.jpg",
    description: "Una pareja abrazada se funde en un beso sobre un campo de flores. Los cuerpos están envueltos en ropajes dorados con motivos geométricos. El hombre besa a la mujer, que cierra los ojos. Es el símbolo del amor absoluto y la unión espiritual.",
    history: "Klimt pintó esta obra durante su 'periodo dorado', influido por los mosaicos bizantinos. Pertenece a la Österreichische Galerie Belvedere de Viena. El cuadro se ha convertido en uno de los más reproducidos del mundo.",
    curiosities: "La mujer parece de rodillas, como entregada al beso. Los círculos y rectángulos del vestido simbolizan lo masculino y lo femenino. Klimt usó pan de oro auténtico.",
    expert: "\"El beso de Klimt no es solo amor, es fusión cósmica. El oro envuelve a los amantes como un aura divina. Cada detalle decorativo es un mantra visual.\" — Dra. Eva Blau, historiadora del arte, Universidad de Viena."
  },
  {
    id: 7,
    title: "Los girasoles",
    author: "Vincent van Gogh",
    year: "1888",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Van_Gogh_-_Sunflowers_-_VGM_F458.jpg/1024px-Van_Gogh_-_Sunflowers_-_VGM_F458.jpg",
    description: "Un jarrón con quince girasoles en distintas etapas de vida. Los pétalos amarillos brillan sobre un fondo claro. Van Gogh usó pinceladas gruesas para dar textura a las flores, celebrando la luz y la naturaleza.",
    history: "Van Gogh pintó esta serie de girasoles para decorar la habitación de Gauguin en Arlés. La obra refleja su admiración por el color amarillo, que asociaba con la felicidad. Hoy está en la Neue Pinakothek de Múnich.",
    curiosities: "Van Gogh pintó varios jarrones de girasoles; este es uno de los más famosos. Los girasoles se convierten en autorretrato del artista: brillantes pero efímeros.",
    expert: "\"Los girasoles son la sonrisa de Van Gogh. En ellos puso toda su esperanza y su deseo de amistad con Gauguin. Cada flor es un pequeño sol.\" — Prof. Martin Bailey, autor de 'Van Gogh: The Life'."
  },
  {
    id: 8,
    title: "La última cena",
    author: "Leonardo da Vinci",
    year: "1495–1498",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Leonardo_da_Vinci_-_The_Last_Supper_%28restored%29.jpg/1024px-Leonardo_da_Vinci_-_The_Last_Supper_%28restored%29.jpg",
    description: "Jesús y sus doce apóstoles durante la cena pascual. Leonardo captura el instante en que Jesús anuncia que uno de ellos lo traicionará. Cada apóstol reacciona con gestos y expresiones únicas. La composición converge en el rostro de Cristo.",
    history: "Pintada al temple en el refectorio de Santa Maria delle Grazie en Milán. Leonardo experimentó con una técnica al seco que pronto comenzó a deteriorarse. Ha sufrido múltiples restauraciones, la más importante finalizada en 1999. Es Patrimonio de la Humanidad.",
    curiosities: "La figura de Judas sostiene una bolsa con monedas. Se dice que Leonardo buscó modelos en las calles de Milán. La mano de Cristo y la de Tomás forman una línea que apunta a Judas.",
    expert: "\"Leonardo no pintó una simple escena bíblica, sino un estudio psicológico. Cada apóstol es un carácter humano universal. La ejecución técnica es impecable.\" — Dr. Carlo Pedretti, máximo experto en Leonardo."
  },
  {
    id: 9,
    title: "La Mona Lisa",
    author: "Leonardo da Vinci",
    year: "1503–1506",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1024px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    description: "Retrato de Lisa Gherardini, esposa de Francesco del Giocondo. La sonrisa enigmática y la mirada directa han fascinado al mundo. El paisaje de fondo es una visión idealizada de la naturaleza. El sfumato envuelve la figura en una atmósfera brumosa.",
    history: "Leonardo trabajó en esta pintura durante años y nunca la entregó al cliente. La llevó consigo a Francia cuando se mudó. Francisco I la adquirió y hoy está en el Louvre. Fue robada en 1911 y recuperada en 1913.",
    curiosities: "La sonrisa de la Mona Lisa cambia según el ángulo de visión. No tiene cejas ni pestañas, posiblemente por una restauración agresiva. Se han hecho innumerables parodias.",
    expert: "\"La Mona Lisa no es solo un retrato; es el espejo del alma humana. Leonardo logró capturar la ambigüedad misma de la existencia.\" — Dr. Martin Kemp, profesor emérito de Historia del Arte, Oxford."
  },
  {
    id: 10,
    title: "La creación de Adán",
    author: "Miguel Ángel",
    year: "1508–1512",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Michelangelo_-_Creation_of_Adam_%28Sistine_Chapel%29.jpg/1024px-Michelangelo_-_Creation_of_Adam_%28Sistine_Chapel%29.jpg",
    description: "Dios, envuelto en un manto y rodeado de ángeles, extiende su brazo para tocar el dedo de Adán. El cuerpo de Adán yace desnudo sobre la tierra, aún sin vida. Ese instante milimétrico entre dos dedos es el momento de la creación.",
    history: "Pintura al fresco en la Capilla Sixtina, Vaticano. Miguel Ángel pasó cuatro años completando el techo. La creación de Adán es la escena central. La postura de Dios recuerda a la forma del cerebro humano, según algunos estudios recientes.",
    curiosities: "El dedo de Dios y el de Adán casi se tocan, pero no. El manto rojo de Dios tiene forma de cerebro. La figura de Dios está inspirada en un sátiro clásico.",
    expert: "\"La creación de Adán es el momento más sublime de todo el Renacimiento. Miguel Ángel convierte un dogma en un instante de tensión eléctrica.\" — Prof. William Wallace, Washington University."
  },
  {
    id: 11,
    title: "El grito",
    author: "Edvard Munch",
    year: "1893",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/1024px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
    description: "Una figura humana con las manos en la cabeza grita bajo un cielo rojo anaranjado. El paisaje ondula como si vibrara. El puente se pierde en la distancia. Es la representación de la angustia existencial.",
    history: "Munch escribió que caminaba al atardecer cuando el cielo se volvió rojo 'como sangre'. Sintió un grito infinito atravesar la naturaleza. La obra fue robada en 2004 y recuperada en 2006. Existen cuatro versiones.",
    curiosities: "La figura no tiene orejas; el grito es interior. El cielo rojo se debió a la erupción del Krakatoa en 1883. Munch pintó también una versión al pastel.",
    expert: "\"El grito es el ícono del alma moderna. Munch nos mostró que el mayor terror no está afuera, sino dentro de nosotros.\" — Dr. Sue Prideaux, biógrafa de Munch."
  },
  {
    id: 12,
    title: "Las meninas",
    author: "Diego Velázquez",
    year: "1656",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Las_Meninas_%28detail%29.jpg/1024px-Las_Meninas_%28detail%29.jpg",
    description: "La infanta Margarita está rodeada de damas de honor, enanos y un perro. Velázquez se autorretrata pintando un gran lienzo. Al fondo, un espejo refleja a los reyes Felipe IV y Mariana. Es un juego de miradas y realidades.",
    history: "Pintada en el Alcázar de Madrid, es la obra maestra de Velázquez. El espejo sugiere que los reyes están frente a la escena. Se ha interpretado como una reflexión sobre la pintura misma. Pertenece al Museo del Prado.",
    curiosities: "El cuadro dentro del cuadro es un misterio: ¿qué pinta Velázquez? La luz entra por la ventana y por la puerta del fondo. La cruz en el pecho del pintor fue añadida después, cuando fue nombrado caballero.",
    expert: "\"Las meninas es un tratado visual sobre la percepción. Velázquez nos obliga a preguntarnos: ¿quién mira a quién? Es el precursor del cine y la fotografía.\" — Dr. Jonathan Brown, profesor emérito, NYU."
  },
  {
    id: 13,
    title: "El jardín de las delicias",
    author: "El Bosco",
    year: "1490–1500",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/El_Bosco_-_El_jard%C3%ADn_de_las_delicias_%28detalle%29.jpg/1024px-El_Bosco_-_El_jard%C3%ADn_de_las_delicias_%28detalle%29.jpg",
    description: "Tríptico que muestra el Paraíso, el Jardín Terrenal y el Infierno. En el panel central, figuras desnudas practican placeres diversos. Animales fantásticos y frutas gigantes pueblan la escena. Es una alegoría de la tentación y el pecado.",
    history: "Felipe II llevó esta obra a El Escorial. La interpretación ha sido debatida: ¿es una advertencia moral o una celebración de la libertad? El Bosco usó símbolos complejos de la alquimia y la literatura medieval.",
    curiosities: "Hay más de 100 figuras humanas en el panel central. Los instrumentos musicales aparecen como objetos de tortura en el Infierno. El Bosco era admirado por los surrealistas.",
    expert: "\"El jardín de las delicias es un diccionario visual del subconsciente colectivo. Cada detalle encierra un significado. Es la obra más enigmática del Renacimiento nórdico.\" — Dr. Pilar Silva, Museo del Prado."
  },
  {
    id: 14,
    title: "La ronda de noche",
    author: "Rembrandt",
    year: "1642",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_Rembrandt.jpg/1024px-The_Night_Watch_-_Rembrandt.jpg",
    description: "Un grupo de milicianos sale en formación. El capitán Frans Banning Cocq da órdenes; su lugarteniente sostiene una alabarda. Rembrandt usó claroscuro para dar dramatismo. La escena parece un instante de caos organizado.",
    history: "Encargada por la milicia de Ámsterdam. Rembrandt rompió con la tradición de los retratos grupales estáticos. Fue criticada por algunos porque algunos rostros quedaban en sombra. Hoy es la joya del Rijksmuseum.",
    curiosities: "El título 'ronda de noche' es erróneo; en realidad es una escena diurna: el barniz oscureció la pintura. La obra sobrevivió a un ataque con cuchillo en 1975 y a un ácido en 1990.",
    expert: "\"Rembrandt convirtió un encargo corporativo en una obra maestra teatral. La ronda de noche es pura energía pictórica.\" — Dr. Ernst van de Wetering, especialista en Rembrandt."
  },
  {
    id: 15,
    title: "Venus de Urbino",
    author: "Tiziano",
    year: "1538",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Tizian_102.jpg/1024px-Tizian_102.jpg",
    description: "Venus recostada en un lecho desordenado, mirando directamente al espectador. Su mano cubre el pubis, pero su actitud es serena. Al fondo, dos criadas preparan un vestido. Es un himno a la belleza sensual.",
    history: "Encargada por Guidobaldo della Rovere, duque de Urbino. La modelo sería una cortesana veneciana. Tiziano revolucionó el desnudo femenino al presentarlo en un entorno doméstico. La obra está en los Uffizi.",
    curiosities: "El perro dormido simboliza la fidelidad. Las rosas en la mano de Venus aluden al amor. Es una de las obras más copiadas de la historia.",
    expert: "\"Tiziano no pintó una diosa, pintó una mujer real. La Venus de Urbino es la celebración de la carne sin moralinas.\" — Prof. Augusto Gentili, Universidad Ca' Foscari, Venecia."
  },
  {
    id: 16,
    title: "La libertad guiando al pueblo",
    author: "Eugène Delacroix",
    year: "1830",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg/1024px-Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg",
    description: "La Libertad, semidesnuda y con la bandera francesa, avanza sobre barricadas. Hombres de distintas clases la siguen. Al fondo, humo y edificios. Es la alegoría de la revolución de 1830.",
    history: "Delacroix pintó esta obra entre julio y diciembre de 1830 para celebrar la caída de Carlos X. Fue exhibida en el Salón de 1831, pero el gobierno la retiró por temor a incitar rebeliones. Hoy está en el Louvre.",
    curiosities: "El niño con pistolas es un símbolo de la participación popular. Delacroix se autorretrata como el hombre de sombrero de copa. La Libertad tiene el pecho descubierto, como en las alegorías clásicas.",
    expert: "\"Delacroix capturó el espíritu de un pueblo en armas. La Libertad es a la vez una diosa y una mujer del pueblo. Es el cuadro más político de la historia del arte.\" — Dr. Sébastien Allard, director del Louvre."
  },
  {
    id: 17,
    title: "Impresión, sol naciente",
    author: "Claude Monet",
    year: "1872",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/1024px-Monet_-_Impression%2C_Sunrise.jpg",
    description: "Un puerto al amanecer, con un sol naranja reflejado en el agua. Las grúas y barcos apenas se adivinan entre la bruma. La pincelada suelta y rápida capta la impresión del momento.",
    history: "Monet pintó esta obra desde la ventana de su hotel en Le Havre. El título fue usado despectivamente por un crítico para acuñar el término 'impresionismo'. Se exhibió en la primera exposición impresionista de 1874.",
    curiosities: "El sol se hunde, no sale, según estudios recientes (contaminación atmosférica). La pintura fue robada del Musée Marmottan en 1985 y recuperada en 1990.",
    expert: "\"Con esta pequeña tela nació la pintura moderna. Monet nos enseñó que un instante de luz vale más que mil detalles académicos.\" — Dr. Richard Brettell, especialista en impresionismo."
  },
  {
    id: 18,
    title: "Bailarinas en el escenario",
    author: "Edgar Degas",
    year: "1874",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Edgar_Degas_-_Ballet_Rehearsal_-_Google_Art_Project.jpg/1024px-Edgar_Degas_-_Ballet_Rehearsal_-_Google_Art_Project.jpg",
    description: "Un grupo de bailarinas ensaya en el escenario. Una está en primer plano, otra se estira. La luz de las candilejas ilumina sus tutús. Degas capta el movimiento y el esfuerzo detrás de la gracia.",
    history: "Degas pintó decenas de escenas de ballet, fascinado por la disciplina y el artificial. Esta obra pertenece a la colección del Musée d'Orsay. Degas prefería el ensayo más que la función.",
    curiosities: "Degas usaba fotografías como referencia. Muchas bailarinas eran hijas de familias pobres. A él no le interesaba la belleza ideal, sino el gesto cotidiano.",
    expert: "\"Degas fue el primer fotógrafo del movimiento. Sus bailarinas no posan, viven. Cada pincelada es una instantánea.\" — Dra. Anne Roquebert, conservadora del Musée d'Orsay."
  },
  {
    id: 19,
    title: "El carro de heno",
    author: "John Constable",
    year: "1821",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/John_Constable_-_The_Hay_Wain_%281821%29.jpg/1024px-John_Constable_-_The_Hay_Wain_%281821%29.jpg",
    description: "Un carro tirado por caballos cruza un río poco profundo. Al fondo, una casa entre árboles. El cielo está nublado y la luz es cambiante. Es la imagen idílica de la campiña inglesa.",
    history: "Constable pintó esta obra para un concurso en la Royal Academy. No ganó, pero un marchand francés la compró. Fue un éxito en París e influyó en los paisajistas franceses. Hoy está en la National Gallery de Londres.",
    curiosities: "La casa del fondo es la granja de Willy Lott, que permaneció casi igual hasta el siglo XXI. Constable pasó años observando el mismo paisaje. Las nubes son un estudio meteorológico.",
    expert: "\"Constable no idealizó el campo; lo amó. El carro de heno es la poesía de lo cotidiano, un himno a la vida rural.\" — Dr. Sarah Cove, especialista en Constable."
  },
  {
    id: 20,
    title: "El pensador",
    author: "Auguste Rodin",
    year: "1880–1904",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Rodin_-_The_Thinker_%28Mus%C3%A9e_Rodin%29.jpg/1024px-Rodin_-_The_Thinker_%28Mus%C3%A9e_Rodin%29.jpg",
    description: "Un hombre desnudo sentado sobre una roca, con el brazo apoyado en la rodilla y la mano en el mentón. Su cuerpo tenso refleja una profunda meditación. Es la representación del pensamiento humano.",
    history: "Rodin concibió esta figura para 'La puerta del Infierno', inspirada en Dante. Originalmente representaba a Dante mismo. Se independizó como escultura autónoma en 1904. Hoy hay múltiples copias en todo el mundo.",
    curiosities: "La postura del pensador fue tomada de Miguel Ángel. Rodin decía que el pensamiento es un esfuerzo físico. La escultura fue criticada por su realismo muscular.",
    expert: "\"Rodin nos mostró que pensar duele. El pensador no es un filósofo sereno, es un atleta de la mente. Cada músculo está en tensión.\" — Dr. Antoinette Le Normand-Romain, directora del Musée Rodin."
  }
];

const testimonials = [
  { quote: "\"Cada obra de esta colección encierra siglos de historia, pasión y técnica. Es un viaje imprescindible para cualquier amante del arte.\"", name: "Dr. María Fernández", role: "Historiadora del arte, Universidad de Florencia" },
  { quote: "\"La noche estrellada y Los girasoles me recuerdan que Van Gogh pintaba con el alma. No hay obra moderna sin su legado.\"", name: "James Carter", role: "Curador del Museo Van Gogh, Ámsterdam" },
  { quote: "\"El nacimiento de Venus es la sonrisa del Renacimiento. Botticelli nos legó la belleza como dogma.\"", name: "Sofia Rossi", role: "Directora de la Galería Uffizi, Florencia" },
  { quote: "\"El pensador de Rodin sigue siendo la imagen más poderosa de la introspección humana.\"", name: "Pierre Dubois", role: "Escultor y crítico de arte, París" },
  { quote: "\"La libertad guiando al pueblo debería ser el emblema de toda lucha justa. Delacroix pintó el alma de la revolución.\"", name: "Ana Martínez", role: "Profesora de Historia, Universidad Complutense" }
];

// Exportar para uso en script.js
if (typeof module !== 'undefined') module.exports = { paintings, testimonials };
