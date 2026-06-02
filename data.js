// ============= data.js (actualizado con guías visuales paso a paso) =============
const drawings = [
  {
    id: 'sol',
    title: 'Sol radiante',
    category: 'simple',
    difficulty: 1,
    icon: '☀️',
    steps: [
      { text: 'Dibuja un <strong>círculo de 5 cm</strong> en el centro del papel.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.2;
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#f7971e';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI*2);
          ctx.stroke();
      }},
      { text: 'Añade <strong>8 líneas rectas</strong> desde el centro hacia afuera, separadas 45°.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.2;
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#f7971e';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI*2);
          ctx.stroke();
          for (let i=0; i<8; i++) {
            const angle = i*Math.PI/4;
            ctx.beginPath();
            ctx.moveTo(cx + r*Math.cos(angle), cy + r*Math.sin(angle));
            ctx.lineTo(cx + (r+25)*Math.cos(angle), cy + (r+25)*Math.sin(angle));
            ctx.stroke();
          }
      }},
      { text: 'En cada línea, dibuja un <strong>triángulo isósceles</strong> (base 1.5 cm sobre el círculo).', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.2;
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#f7971e';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI*2);
          ctx.stroke();
          ctx.fillStyle = '#f7971e40';
          for (let i=0; i<8; i++) {
            const angle = i*Math.PI/4;
            const ax = cx + r*Math.cos(angle), ay = cy + r*Math.sin(angle);
            const bx = cx + (r-5)*Math.cos(angle-0.3), by = cy + (r-5)*Math.sin(angle-0.3);
            const cx_ = cx + (r-5)*Math.cos(angle+0.3), cy_ = cy + (r-5)*Math.sin(angle+0.3);
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.lineTo(cx_, cy_);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
          }
      }},
      { text: 'Entre rayos grandes, añade <strong>semicírculos</strong> decorativos de 0.8 cm.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.2;
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#f7971e';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI*2);
          ctx.stroke();
          for (let i=0; i<8; i++) {
            const angle = i*Math.PI/4;
            // líneas rayos
            ctx.beginPath();
            ctx.moveTo(cx + r*Math.cos(angle), cy + r*Math.sin(angle));
            ctx.lineTo(cx + (r+25)*Math.cos(angle), cy + (r+25)*Math.sin(angle));
            ctx.stroke();
            // semicírculo
            const sx = cx + (r+20)*Math.cos(angle), sy = cy + (r+20)*Math.sin(angle);
            ctx.beginPath();
            ctx.arc(sx, sy, 8, angle-0.8, angle+0.8);
            ctx.stroke();
          }
      }},
      { text: 'Colorea el círculo de amarillo y los rayos de naranja con degradado.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.2;
          ctx.clearRect(0,0,w,h);
          ctx.fillStyle = '#ffd200';
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI*2);
          ctx.fill();
          ctx.strokeStyle = '#f39c12';
          ctx.lineWidth = 2;
          for (let i=0; i<8; i++) {
            const angle = i*Math.PI/4;
            ctx.beginPath();
            ctx.moveTo(cx + r*Math.cos(angle), cy + r*Math.sin(angle));
            ctx.lineTo(cx + (r+25)*Math.cos(angle), cy + (r+25)*Math.sin(angle));
            ctx.stroke();
          }
      }}
    ]
  },
  {
    id: 'cubo',
    title: 'Cubo 3D',
    category: 'geometrico',
    difficulty: 3,
    icon: '🔷',
    steps: [
      { text: 'Dibuja un <strong>cuadrado de 4×4 cm</strong> (cara frontal).', draw: (ctx, w, h) => {
          const s = Math.min(w,h)*0.3;
          const cx = w/2, cy = h/2;
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.strokeRect(cx-s, cy-s, s*2, s*2);
      }},
      { text: 'Añade un segundo cuadrado igual <strong>desplazado</strong> (cara trasera).', draw: (ctx, w, h) => {
          const s = Math.min(w,h)*0.3;
          const cx = w/2, cy = h/2;
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.strokeRect(cx-s, cy-s, s*2, s*2);
          ctx.strokeRect(cx-s+20, cy-s-14, s*2, s*2);
      }},
      { text: 'Conecta las <strong>esquinas correspondientes</strong> con líneas rectas.', draw: (ctx, w, h) => {
          const s = Math.min(w,h)*0.3;
          const cx = w/2, cy = h/2;
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.strokeRect(cx-s, cy-s, s*2, s*2);
          ctx.strokeRect(cx-s+20, cy-s-14, s*2, s*2);
          ctx.beginPath();
          ctx.moveTo(cx-s, cy-s); ctx.lineTo(cx-s+20, cy-s-14);
          ctx.moveTo(cx+s, cy-s); ctx.lineTo(cx+s+20, cy-s-14);
          ctx.moveTo(cx-s, cy+s); ctx.lineTo(cx-s+20, cy+s-14);
          ctx.moveTo(cx+s, cy+s); ctx.lineTo(cx+s+20, cy+s-14);
          ctx.stroke();
      }},
      { text: 'Borra las líneas <strong>ocultas</strong> (parte trasera visible).', draw: (ctx, w, h) => {
          const s = Math.min(w,h)*0.3;
          const cx = w/2, cy = h/2;
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          // solo frontal y conexiones
          ctx.strokeRect(cx-s, cy-s, s*2, s*2);
          ctx.beginPath();
          ctx.moveTo(cx-s, cy-s); ctx.lineTo(cx-s+20, cy-s-14);
          ctx.moveTo(cx+s, cy-s); ctx.lineTo(cx+s+20, cy-s-14);
          ctx.moveTo(cx-s, cy+s); ctx.lineTo(cx-s+20, cy+s-14);
          ctx.moveTo(cx+s, cy+s); ctx.lineTo(cx+s+20, cy+s-14);
          ctx.stroke();
      }},
      { text: 'Sombrea caras laterales con <strong>gris medio</strong> y claro para dar volumen.', draw: (ctx, w, h) => {
          const s = Math.min(w,h)*0.3;
          const cx = w/2, cy = h/2;
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.strokeRect(cx-s, cy-s, s*2, s*2);
          ctx.beginPath();
          ctx.moveTo(cx-s, cy-s); ctx.lineTo(cx-s+20, cy-s-14);
          ctx.moveTo(cx+s, cy-s); ctx.lineTo(cx+s+20, cy-s-14);
          ctx.moveTo(cx-s, cy+s); ctx.lineTo(cx-s+20, cy+s-14);
          ctx.moveTo(cx+s, cy+s); ctx.lineTo(cx+s+20, cy+s-14);
          ctx.stroke();
          // sombreado simple
          ctx.fillStyle = '#ffffff20';
          ctx.fillRect(cx-s+20, cy-s-14, s*2, s*2);
      }}
    ]
  },
  {
    id: 'trianguloimposible',
    title: 'Triángulo imposible',
    category: 'ilusion',
    difficulty: 4,
    icon: '🔺',
    steps: [
      { text: 'Dibuja un <strong>triángulo equilátero</strong> grande de 8 cm de lado (guía suave).', draw: (ctx, w, h) => {
          const size = Math.min(w,h)*0.35;
          const cx = w/2, cy = h/2+5;
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#ff6b6b';
          ctx.lineWidth = 1;
          ctx.setLineDash([5,5]);
          const x1 = cx, y1 = cy - size*0.6;
          const x2 = cx - size*0.5, y2 = cy + size*0.4;
          const x3 = cx + size*0.5, y3 = cy + size*0.4;
          ctx.beginPath();
          ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.lineTo(x3,y3);
          ctx.closePath(); ctx.stroke();
          ctx.setLineDash([]);
      }},
      { text: 'A 1.5 cm de cada vértice, marca un <strong>punto</strong> sobre cada lado.', draw: (ctx, w, h) => {
          const size = Math.min(w,h)*0.35;
          const cx = w/2, cy = h/2+5;
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#ff6b6b';
          ctx.lineWidth = 1;
          ctx.setLineDash([5,5]);
          const x1 = cx, y1 = cy - size*0.6;
          const x2 = cx - size*0.5, y2 = cy + size*0.4;
          const x3 = cx + size*0.5, y3 = cy + size*0.4;
          ctx.beginPath();
          ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.lineTo(x3,y3);
          ctx.closePath(); ctx.stroke();
          ctx.setLineDash([]);
          // puntos
          ctx.fillStyle = '#f7971e';
          const d = 15;
          // punto en lado 1-2
          const mx1 = (x1*2 + x2)/3, my1 = (y1*2 + y2)/3;
          ctx.beginPath(); ctx.arc(mx1, my1, 4,0, Math.PI*2); ctx.fill();
          const mx2 = (x2*2 + x3)/3, my2 = (y2*2 + y3)/3;
          ctx.beginPath(); ctx.arc(mx2, my2, 4,0, Math.PI*2); ctx.fill();
          const mx3 = (x3*2 + x1)/3, my3 = (y3*2 + y1)/3;
          ctx.beginPath(); ctx.arc(mx3, my3, 4,0, Math.PI*2); ctx.fill();
      }},
      { text: 'Dibuja un <strong>triángulo pequeño</strong> hacia dentro en cada vértice.', draw: (ctx, w, h) => {
          const size = Math.min(w,h)*0.35;
          const cx = w/2, cy = h/2+5;
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#ff6b6b';
          ctx.lineWidth = 1;
          ctx.setLineDash([5,5]);
          const x1 = cx, y1 = cy - size*0.6;
          const x2 = cx - size*0.5, y2 = cy + size*0.4;
          const x3 = cx + size*0.5, y3 = cy + size*0.4;
          ctx.beginPath();
          ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.lineTo(x3,y3);
          ctx.closePath(); ctx.stroke();
          ctx.setLineDash([]);
          // triángulos internos
          ctx.strokeStyle = '#f7971e';
          ctx.lineWidth = 2;
          // cerca de cada vértice, un pequeño triángulo
          for (let i=0; i<3; i++) {
            const pts = [[x1,y1],[x2,y2],[x3,y3]];
            const [px,py] = pts[i];
            const ang = i*2*Math.PI/3 - Math.PI/2;
            const r2 = 20;
            ctx.beginPath();
            ctx.moveTo(px + r2*Math.cos(ang), py + r2*Math.sin(ang));
            ctx.lineTo(px + r2*Math.cos(ang+0.8), py + r2*Math.sin(ang+0.8));
            ctx.lineTo(px + r2*Math.cos(ang-0.8), py + r2*Math.sin(ang-0.8));
            ctx.closePath(); ctx.stroke();
          }
      }},
      { text: 'Conecta los extremos con <strong>paralelas</strong> a los lados para crear el efecto 3D.', draw: (ctx, w, h) => {
          const size = Math.min(w,h)*0.35;
          const cx = w/2, cy = h/2+5;
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#f7971e';
          ctx.lineWidth = 2;
          // dibujamos las tres barras del triángulo imposible
          // barra inferior
          ctx.beginPath();
          ctx.moveTo(cx - size*0.5, cy + size*0.4);
          ctx.lineTo(cx + size*0.5, cy + size*0.4);
          ctx.lineTo(cx + size*0.5 - 15, cy + size*0.4 - 20);
          ctx.lineTo(cx - size*0.5 + 15, cy + size*0.4 - 20);
          ctx.closePath(); ctx.stroke();
          // barra izquierda
          ctx.beginPath();
          ctx.moveTo(cx - size*0.5, cy + size*0.4);
          ctx.lineTo(cx, cy - size*0.6);
          ctx.lineTo(cx + 15, cy - size*0.6 + 10);
          ctx.lineTo(cx - size*0.5 + 20, cy + size*0.4 - 15);
          ctx.closePath(); ctx.stroke();
          // barra derecha
          ctx.beginPath();
          ctx.moveTo(cx + size*0.5, cy + size*0.4);
          ctx.lineTo(cx, cy - size*0.6);
          ctx.lineTo(cx - 15, cy - size*0.6 + 10);
          ctx.lineTo(cx + size*0.5 - 20, cy + size*0.4 - 15);
          ctx.closePath(); ctx.stroke();
      }},
      { text: 'Añade sombreado y colorea cada barra de un <strong>color diferente</strong> (cian, magenta, amarillo).', draw: (ctx, w, h) => {
          const size = Math.min(w,h)*0.35;
          const cx = w/2, cy = h/2+5;
          ctx.clearRect(0,0,w,h);
          ctx.globalAlpha = 0.3;
          ctx.fillStyle = '#00ffff';
          ctx.fillRect(cx - size*0.5, cy + size*0.4 - 10, size, 10);
          ctx.fillStyle = '#ff00ff';
          ctx.fillRect(cx - size*0.5, cy + size*0.4 - 20, 10, size*0.8);
          ctx.fillStyle = '#ffff00';
          ctx.fillRect(cx + size*0.5 - 10, cy - size*0.6 + 10, 10, size*0.8);
          ctx.globalAlpha = 1;
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.strokeRect(cx - size*0.5, cy + size*0.4 - 10, size, 10);
          ctx.strokeRect(cx - size*0.5, cy + size*0.4 - 20, 10, size*0.8);
          ctx.strokeRect(cx + size*0.5 - 10, cy - size*0.6 + 10, 10, size*0.8);
      }}
    ]
  },
  {
    id: 'rosa',
    title: 'Rosa clásica',
    category: 'intermedio',
    difficulty: 4,
    icon: '🌹',
    steps: [
      { text: 'Dibuja un <strong>círculo de 1.5 cm</strong> en el centro (corazón de la rosa).', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-10;
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#e74c3c';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(cx, cy, 12, 0, Math.PI*2);
          ctx.stroke();
      }},
      { text: 'Alrededor, dibuja <strong>5 pétalos superpuestos</strong> en espiral de 2.5 cm.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-10;
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#e74c3c';
          ctx.lineWidth = 2;
          for (let i=0; i<5; i++) {
            const angle = i*1.2;
            const x = cx + 20*Math.cos(angle);
            const y = cy + 20*Math.sin(angle);
            ctx.beginPath();
            ctx.arc(x, y, 14, 0, Math.PI*2);
            ctx.stroke();
          }
      }},
      { text: 'Añade una <strong>segunda capa</strong> de 5 pétalos más grandes (3.5 cm) y más abiertos.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-10;
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#c0392b';
          ctx.lineWidth = 2;
          for (let i=0; i<5; i++) {
            const angle = i*1.2 + 0.5;
            const x = cx + 30*Math.cos(angle);
            const y = cy + 30*Math.sin(angle);
            ctx.beginPath();
            ctx.arc(x, y, 18, 0, Math.PI*2);
            ctx.stroke();
          }
          // primera capa más clara
          ctx.strokeStyle = '#e74c3c80';
          for (let i=0; i<5; i++) {
            const angle = i*1.2;
            const x = cx + 20*Math.cos(angle);
            const y = cy + 20*Math.sin(angle);
            ctx.beginPath();
            ctx.arc(x, y, 14, 0, Math.PI*2);
            ctx.stroke();
          }
      }},
      { text: 'Dibuja el <strong>tallo</strong> de 0.5 cm de grosor y 8 cm de largo, con dos líneas paralelas.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-10;
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#2ecc71';
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.moveTo(cx, cy+20);
          ctx.lineTo(cx, cy+80);
          ctx.stroke();
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(cx-3, cy+20);
          ctx.lineTo(cx-3, cy+80);
          ctx.moveTo(cx+3, cy+20);
          ctx.lineTo(cx+3, cy+80);
          ctx.stroke();
      }},
      { text: 'Añade <strong>hojas</strong> en forma de lágrima con venas y una espina pequeña.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-10;
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#27ae60';
          ctx.lineWidth = 2;
          // tallo
          ctx.beginPath();
          ctx.moveTo(cx, cy+20);
          ctx.lineTo(cx, cy+80);
          ctx.stroke();
          // hoja izquierda
          ctx.beginPath();
          ctx.ellipse(cx-25, cy+50, 18, 8, -0.3, 0, Math.PI*2);
          ctx.stroke();
          // vena
          ctx.beginPath();
          ctx.moveTo(cx-20, cy+45);
          ctx.lineTo(cx-35, cy+55);
          ctx.stroke();
          // hoja derecha
          ctx.beginPath();
          ctx.ellipse(cx+25, cy+70, 18, 8, 0.3, 0, Math.PI*2);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(cx+20, cy+65);
          ctx.lineTo(cx+35, cy+75);
          ctx.stroke();
      }}
    ]
  },
  {
    id: 'dragon',
    title: 'Dragón estilizado',
    category: 'avanzado',
    difficulty: 5,
    icon: '🐉',
    steps: [
      { text: 'Dibuja un <strong>óvalo de 8×3 cm</strong> para el cuerpo serpentino.', draw: (ctx, w, h) => {
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#e67e22';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.ellipse(w/2+10, h/2, 60, 25, 0.2, 0, Math.PI*2);
          ctx.stroke();
      }},
      { text: 'Añade un círculo de 4 cm para la <strong>cabeza</strong>, hocico de 2 cm y cuernos curvos.', draw: (ctx, w, h) => {
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#e67e22';
          ctx.lineWidth = 2;
          // cuerpo
          ctx.beginPath();
          ctx.ellipse(w/2+10, h/2, 60, 25, 0.2, 0, Math.PI*2);
          ctx.stroke();
          // cabeza
          ctx.beginPath();
          ctx.arc(w/2-30, h/2-15, 22, 0, Math.PI*2);
          ctx.stroke();
          // hocico
          ctx.beginPath();
          ctx.ellipse(w/2-50, h/2-10, 15, 10, -0.2, 0, Math.PI*2);
          ctx.stroke();
          // cuernos
          ctx.beginPath();
          ctx.moveTo(w/2-40, h/2-35);
          ctx.lineTo(w/2-55, h/2-55);
          ctx.moveTo(w/2-30, h/2-37);
          ctx.lineTo(w/2-45, h/2-58);
          ctx.stroke();
      }},
      { text: 'Dibuja las <strong>alas</strong> con 3 huesos principales y membranas curvas.', draw: (ctx, w, h) => {
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#e67e22';
          ctx.lineWidth = 2;
          // cuerpo
          ctx.beginPath();
          ctx.ellipse(w/2+10, h/2, 60, 25, 0.2, 0, Math.PI*2);
          ctx.stroke();
          // ala
          ctx.beginPath();
          ctx.moveTo(w/2-10, h/2-10);
          ctx.lineTo(w/2+50, h/2-70);
          ctx.lineTo(w/2+80, h/2-30);
          ctx.closePath();
          ctx.stroke();
          // huesos
          ctx.beginPath();
          ctx.moveTo(w/2-10, h/2-10);
          ctx.lineTo(w/2+40, h/2-50);
          ctx.moveTo(w/2-10, h/2-10);
          ctx.lineTo(w/2+70, h/2-50);
          ctx.moveTo(w/2-10, h/2-10);
          ctx.lineTo(w/2+80, h/2-30);
          ctx.stroke();
      }},
      { text: 'Añade <strong>escamas</strong> en forma de diamante a lo largo del lomo y la cola.', draw: (ctx, w, h) => {
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#e67e22';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.ellipse(w/2+10, h/2, 60, 25, 0.2, 0, Math.PI*2);
          ctx.stroke();
          // escamas
          ctx.fillStyle = '#e67e2240';
          for (let i=0; i<6; i++) {
            const x = w/2 - 20 + i*18;
            const y = h/2 - 15 + (i%2)*8;
            ctx.beginPath();
            ctx.moveTo(x, y-8);
            ctx.lineTo(x+6, y);
            ctx.lineTo(x, y+8);
            ctx.lineTo(x-6, y);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
          }
      }},
      { text: 'Garras afiladas, <strong>llamas</strong> y color con degradado rojo-naranja.', draw: (ctx, w, h) => {
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#c0392b';
          ctx.lineWidth = 2;
          // cuerpo
          ctx.beginPath();
          ctx.ellipse(w/2+10, h/2, 60, 25, 0.2, 0, Math.PI*2);
          ctx.stroke();
          // llamas
          ctx.fillStyle = '#f39c12';
          ctx.beginPath();
          ctx.moveTo(w/2-60, h/2-10);
          ctx.quadraticCurveTo(w/2-80, h/2-30, w/2-70, h/2);
          ctx.quadraticCurveTo(w/2-85, h/2+10, w/2-60, h/2+10);
          ctx.fill();
          ctx.fillStyle = '#e74c3c70';
          ctx.beginPath();
          ctx.moveTo(w/2-55, h/2-5);
          ctx.quadraticCurveTo(w/2-70, h/2-20, w/2-60, h/2+5);
          ctx.fill();
      }}
    ]
  },
  {
    id: 'mandala',
    title: 'Mándala simple',
    category: 'geometrico',
    difficulty: 3,
    icon: '🕉️',
    steps: [
      { text: 'Traza un <strong>círculo de 7 cm de radio</strong> y marca el centro con una cruz.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.35;
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#9b59b6';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI*2);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(cx-10, cy); ctx.lineTo(cx+10, cy);
          ctx.moveTo(cx, cy-10); ctx.lineTo(cx, cy+10);
          ctx.stroke();
      }},
      { text: 'Dibuja <strong>4 líneas</strong> que pasen por el centro a 45° (como estrella de 8 puntas).', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.35;
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#9b59b6';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI*2);
          ctx.stroke();
          for (let i=0; i<8; i++) {
            const angle = i*Math.PI/4;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + r*Math.cos(angle), cy + r*Math.sin(angle));
            ctx.stroke();
          }
      }},
      { text: 'Dibuja <strong>círculos concéntricos</strong> a 1.5, 3, 4.5 y 6 cm de radio.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.35;
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#9b59b6';
          ctx.lineWidth = 2;
          for (let rad of [r*0.3, r*0.5, r*0.7, r*0.9]) {
            ctx.beginPath();
            ctx.arc(cx, cy, rad, 0, Math.PI*2);
            ctx.stroke();
          }
      }},
      { text: 'En el anillo central, dibuja <strong>8 pétalos</strong> (óvalos) centrados en cada línea.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.35;
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#9b59b6';
          ctx.lineWidth = 2;
          for (let i=0; i<8; i++) {
            const angle = i*Math.PI/4;
            const x = cx + r*0.5*Math.cos(angle);
            const y = cy + r*0.5*Math.sin(angle);
            ctx.beginPath();
            ctx.ellipse(x, y, 12, 6, angle, 0, Math.PI*2);
            ctx.stroke();
          }
      }},
      { text: 'Decora con <strong>triángulos</strong> y círculos pequeños en los espacios vacíos.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.35;
          ctx.clearRect(0,0,w,h);
          ctx.strokeStyle = '#9b59b6';
          ctx.lineWidth = 2;
          ctx.fillStyle = '#9b59b640';
          for (let i=0; i<8; i++) {
            const angle = i*Math.PI/4 + Math.PI/8;
            const x = cx + r*0.7*Math.cos(angle);
            const y = cy + r*0.7*Math.sin(angle);
            ctx.beginPath();
            ctx.moveTo(x, y-8);
            ctx.lineTo(x+8, y+6);
            ctx.lineTo(x-8, y+6);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
          }
          for (let i=0; i<8; i++) {
            const angle = i*Math.PI/4;
            const x = cx + r*0.9*Math.cos(angle);
            const y = cy + r*0.9*Math.sin(angle);
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI*2);
            ctx.fill();
            ctx.stroke();
          }
      }}
    ]
  }
];

// Para mantener compatibilidad con el script anterior, exportamos
if (typeof module !== 'undefined') module.exports = drawings;
