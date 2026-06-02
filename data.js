// ============= data.js =============
const drawings = [
  {
    id: 'sol',
    title: 'Sol radiante',
    category: 'simple',
    difficulty: 1,
    icon: '☀️',
    steps: [
      'Con un compás, traza un <strong>círculo de 5 cm</strong> en el centro.',
      'Desde el centro, dibuja <strong>8 líneas</strong> separadas 45° de 2 cm.',
      'En cada línea, añade un <strong>triángulo isósceles</strong> de base 1.5 cm.',
      'Entre rayos grandes, dibuja <strong>semicírculos</strong> de 0.8 cm.',
      'Colorea el círculo de <strong>amarillo cadmio</strong> y los rayos naranja.'
    ],
    // Dibuja una referencia simple en canvas
    drawReference: function(ctx, w, h) {
      const cx = w/2, cy = h/2;
      const r = Math.min(w,h)*0.25;
      ctx.clearRect(0,0,w,h);
      ctx.strokeStyle = '#f7971e';
      ctx.lineWidth = 2;
      // círculo
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI*2);
      ctx.stroke();
      // rayos
      for (let i=0; i<8; i++) {
        const angle = i*Math.PI/4;
        ctx.beginPath();
        ctx.moveTo(cx + r*Math.cos(angle), cy + r*Math.sin(angle));
        ctx.lineTo(cx + (r+20)*Math.cos(angle), cy + (r+20)*Math.sin(angle));
        ctx.stroke();
      }
    }
  },
  {
    id: 'estrella',
    title: 'Estrella 5 puntas',
    category: 'simple',
    difficulty: 1,
    icon: '⭐',
    steps: [
      'Marca un punto central y dibuja un <strong>círculo guía</strong> de 4 cm.',
      'Divide el círculo en <strong>5 partes</strong> (72° cada una).',
      'Conecta cada punto con el <strong>segundo siguiente</strong> (salta uno).',
      'Borra el círculo guía y líneas interiores, deja solo el contorno.',
      'Rellena con <strong>amarillo dorado</strong> y añade brillo central.'
    ],
    drawReference: function(ctx, w, h) {
      const cx = w/2, cy = h/2, r = Math.min(w,h)*0.3;
      ctx.clearRect(0,0,w,h);
      ctx.strokeStyle = '#ffd200';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i=0; i<5; i++) {
        const angle = (i*2*Math.PI/5) - Math.PI/2;
        const x = cx + r*Math.cos(angle);
        const y = cy + r*Math.sin(angle);
        if (i===0) ctx.moveTo(x,y);
        else ctx.lineTo(x,y);
      }
      ctx.closePath();
      ctx.stroke();
    }
  },
  {
    id: 'cubo',
    title: 'Cubo 3D',
    category: 'geometrico',
    difficulty: 3,
    icon: '🔷',
    steps: [
      'Dibuja un <strong>cuadrado de 4×4 cm</strong> (cara frontal).',
      'Otro cuadrado igual desplazado 2 cm en diagonal (cara trasera).',
      'Conecta las <strong>esquinas correspondientes</strong> con líneas.',
      'Borra las líneas ocultas (parte trasera visible).',
      'Sombrea caras laterales con <strong>gris medio</strong> y claro.'
    ],
    drawReference: function(ctx, w, h) {
      const s = Math.min(w,h)*0.25;
      const cx = w/2, cy = h/2;
      ctx.clearRect(0,0,w,h);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      // frontal
      ctx.strokeRect(cx-s, cy-s, s*2, s*2);
      // trasera
      ctx.strokeRect(cx-s+15, cy-s-10, s*2, s*2);
      // conexiones
      ctx.beginPath();
      ctx.moveTo(cx-s, cy-s);
      ctx.lineTo(cx-s+15, cy-s-10);
      ctx.moveTo(cx+s, cy-s);
      ctx.lineTo(cx+s+15, cy-s-10);
      ctx.moveTo(cx-s, cy+s);
      ctx.lineTo(cx-s+15, cy+s-10);
      ctx.moveTo(cx+s, cy+s);
      ctx.lineTo(cx+s+15, cy+s-10);
      ctx.stroke();
    }
  },
  {
    id: 'trianguloimposible',
    title: 'Triángulo imposible',
    category: 'ilusion',
    difficulty: 4,
    icon: '🔺',
    steps: [
      'Dibuja un <strong>triángulo equilátero</strong> de 8 cm de lado (guía).',
      'A 1.5 cm de cada vértice, marca un punto sobre cada lado.',
      'Dibuja un <strong>triángulo pequeño</strong> hacia dentro en cada vértice.',
      'Conecta los extremos de esos cortes con <strong>paralelas</strong> a los lados.',
      'Borra líneas sobrantes, sombrea y colorea cada barra de un color.'
    ],
    drawReference: function(ctx, w, h) {
      const size = Math.min(w,h)*0.4;
      const cx = w/2, cy = h/2 + 10;
      ctx.clearRect(0,0,w,h);
      ctx.strokeStyle = '#ff6b6b';
      ctx.lineWidth = 2;
      // triángulo equilátero (simplificado)
      const x1 = cx, y1 = cy - size*0.6;
      const x2 = cx - size*0.5, y2 = cy + size*0.4;
      const x3 = cx + size*0.5, y3 = cy + size*0.4;
      ctx.beginPath();
      ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.lineTo(x3,y3);
      ctx.closePath();
      ctx.stroke();
      // barras internas (solo esbozo)
      ctx.strokeStyle = '#f7971e';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x1, y1+15); ctx.lineTo(x2+15, y2-10);
      ctx.stroke();
    }
  },
  {
    id: 'rosa',
    title: 'Rosa clásica',
    category: 'intermedio',
    difficulty: 4,
    icon: '🌹',
    steps: [
      'Dibuja un <strong>círculo de 1.5 cm</strong> en el centro (corazón).',
      'Alrededor, <strong>5 pétalos superpuestos</strong> en espiral de 2.5 cm.',
      'Añade <strong>segunda capa</strong> de 5 pétalos más grandes (3.5 cm).',
      'Dibuja el <strong>tallo</strong> de 0.5 cm de grosor y 8 cm de largo.',
      'Añade <strong>hojas</strong> en lágrima con venas y una espina.'
    ],
    drawReference: function(ctx, w, h) {
      const cx = w/2, cy = h/2 - 10;
      ctx.clearRect(0,0,w,h);
      ctx.strokeStyle = '#e74c3c';
      ctx.lineWidth = 2;
      // espiral de pétalos (simple)
      for (let i=0; i<6; i++) {
        const angle = i*1.2;
        const r = 20 + i*6;
        const x = cx + r*Math.cos(angle);
        const y = cy + r*Math.sin(angle);
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, Math.PI*2);
        ctx.stroke();
      }
      // tallo
      ctx.strokeStyle = '#2ecc71';
      ctx.beginPath();
      ctx.moveTo(cx, cy+20);
      ctx.lineTo(cx, cy+70);
      ctx.stroke();
    }
  },
  {
    id: 'dragon',
    title: 'Dragón estilizado',
    category: 'avanzado',
    difficulty: 5,
    icon: '🐉',
    steps: [
      'Dibuja un <strong>óvalo de 8×3 cm</strong> para el cuerpo serpentino.',
      'Círculo de 4 cm para la cabeza, hocico de 2 cm y cuernos curvos.',
      'Dibuja <strong>alas</strong> con 3 huesos principales y membranas.',
      'Añade <strong>escamas</strong> en diamante a lo largo del lomo.',
      'Garras afiladas, llamas y color con degradado rojo-naranja.'
    ],
    drawReference: function(ctx, w, h) {
      ctx.clearRect(0,0,w,h);
      ctx.strokeStyle = '#e67e22';
      ctx.lineWidth = 2;
      // cabeza
      ctx.beginPath();
      ctx.arc(w/2, h/2-20, 25, 0, Math.PI*2);
      ctx.stroke();
      // cuerpo serpenteante
      ctx.beginPath();
      ctx.moveTo(w/2+25, h/2-20);
      ctx.quadraticCurveTo(w/2+60, h/2+20, w/2+30, h/2+60);
      ctx.stroke();
      // ala
      ctx.beginPath();
      ctx.moveTo(w/2+10, h/2-40);
      ctx.lineTo(w/2+70, h/2-60);
      ctx.lineTo(w/2+20, h/2-10);
      ctx.stroke();
    }
  }
];
