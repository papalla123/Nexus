// ============= data.js (actualizado con +5 dibujos) =============
const drawings = [
  // ===== DIBUJOS ORIGINALES (6) =====
  {
    id: 'sol',
    title: 'Sol radiante',
    category: 'simple',
    difficulty: 1,
    icon: '☀️',
    steps: [
      { text: 'Dibuja un <strong>círculo de 5 cm</strong> en el centro del papel.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.2;
          ctx.strokeStyle = '#f7971e';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI*2);
          ctx.stroke();
      }},
      { text: 'Añade <strong>8 líneas rectas</strong> desde el centro hacia afuera, separadas 45°.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.2;
          ctx.strokeStyle = '#f7971e';
          ctx.lineWidth = 2;
          for (let i=0; i<8; i++) {
            const angle = i*Math.PI/4;
            ctx.beginPath();
            ctx.moveTo(cx + r*Math.cos(angle), cy + r*Math.sin(angle));
            ctx.lineTo(cx + (r+30)*Math.cos(angle), cy + (r+30)*Math.sin(angle));
            ctx.stroke();
          }
      }},
      { text: 'En cada línea, dibuja un <strong>triángulo isósceles</strong> (base 1.5 cm sobre el círculo).', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.2;
          ctx.fillStyle = '#f7971e40';
          ctx.strokeStyle = '#f7971e';
          ctx.lineWidth = 2;
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
          ctx.strokeStyle = '#f7971e';
          ctx.lineWidth = 2;
          for (let i=0; i<8; i++) {
            const angle = i*Math.PI/4;
            const sx = cx + (r+25)*Math.cos(angle), sy = cy + (r+25)*Math.sin(angle);
            ctx.beginPath();
            ctx.arc(sx, sy, 8, angle-0.8, angle+0.8);
            ctx.stroke();
          }
      }},
      { text: 'Colorea el círculo de amarillo y los rayos de naranja con degradado.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.2;
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
            ctx.lineTo(cx + (r+30)*Math.cos(angle), cy + (r+30)*Math.sin(angle));
            ctx.stroke();
          }
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
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
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.strokeRect(cx-s, cy-s, s*2, s*2);
      }},
      { text: 'Añade un segundo cuadrado igual <strong>desplazado</strong> (cara trasera).', draw: (ctx, w, h) => {
          const s = Math.min(w,h)*0.3;
          const cx = w/2, cy = h/2;
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.strokeRect(cx-s+20, cy-s-14, s*2, s*2);
      }},
      { text: 'Conecta las <strong>esquinas correspondientes</strong> con líneas rectas.', draw: (ctx, w, h) => {
          const s = Math.min(w,h)*0.3;
          const cx = w/2, cy = h/2;
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
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
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 3;
          ctx.strokeRect(cx-s, cy-s, s*2, s*2);
      }},
      { text: 'Sombrea caras laterales con <strong>gris medio</strong> y claro para dar volumen.', draw: (ctx, w, h) => {
          const s = Math.min(w,h)*0.3;
          const cx = w/2, cy = h/2;
          ctx.fillStyle = '#ffffff20';
          ctx.fillRect(cx-s+20, cy-s-14, s*2, s*2);
          ctx.fillStyle = '#ffffff10';
          ctx.fillRect(cx+s, cy-s, 20, s*2);
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
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
          ctx.fillStyle = '#f7971e';
          const x1 = cx, y1 = cy - size*0.6;
          const x2 = cx - size*0.5, y2 = cy + size*0.4;
          const x3 = cx + size*0.5, y3 = cy + size*0.4;
          const pts = [
            [(x1*2 + x2)/3, (y1*2 + y2)/3],
            [(x2*2 + x3)/3, (y2*2 + y3)/3],
            [(x3*2 + x1)/3, (y3*2 + y1)/3]
          ];
          pts.forEach(([px,py]) => {
            ctx.beginPath();
            ctx.arc(px, py, 4, 0, Math.PI*2);
            ctx.fill();
          });
      }},
      { text: 'Dibuja un <strong>triángulo pequeño</strong> hacia dentro en cada vértice.', draw: (ctx, w, h) => {
          const size = Math.min(w,h)*0.35;
          const cx = w/2, cy = h/2+5;
          ctx.strokeStyle = '#f7971e';
          ctx.lineWidth = 2;
          const x1 = cx, y1 = cy - size*0.6;
          const x2 = cx - size*0.5, y2 = cy + size*0.4;
          const x3 = cx + size*0.5, y3 = cy + size*0.4;
          const vertices = [[x1,y1],[x2,y2],[x3,y3]];
          vertices.forEach(([px,py], i) => {
            const ang = i*2*Math.PI/3 - Math.PI/2;
            const r2 = 20;
            ctx.beginPath();
            ctx.moveTo(px + r2*Math.cos(ang), py + r2*Math.sin(ang));
            ctx.lineTo(px + r2*Math.cos(ang+0.8), py + r2*Math.sin(ang+0.8));
            ctx.lineTo(px + r2*Math.cos(ang-0.8), py + r2*Math.sin(ang-0.8));
            ctx.closePath(); ctx.stroke();
          });
      }},
      { text: 'Conecta los extremos con <strong>paralelas</strong> a los lados para crear el efecto 3D.', draw: (ctx, w, h) => {
          const size = Math.min(w,h)*0.35;
          const cx = w/2, cy = h/2+5;
          ctx.strokeStyle = '#f7971e';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(cx - size*0.5, cy + size*0.4);
          ctx.lineTo(cx + size*0.5, cy + size*0.4);
          ctx.lineTo(cx + size*0.5 - 15, cy + size*0.4 - 20);
          ctx.lineTo(cx - size*0.5 + 15, cy + size*0.4 - 20);
          ctx.closePath(); ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(cx - size*0.5, cy + size*0.4);
          ctx.lineTo(cx, cy - size*0.6);
          ctx.lineTo(cx + 15, cy - size*0.6 + 10);
          ctx.lineTo(cx - size*0.5 + 20, cy + size*0.4 - 15);
          ctx.closePath(); ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(cx + size*0.5, cy + size*0.4);
          ctx.lineTo(cx, cy - size*0.6);
          ctx.lineTo(cx - 15, cy - size*0.6 + 10);
          ctx.lineTo(cx + size*0.5 - 20, cy + size*0.4 - 15);
          ctx.closePath(); ctx.stroke();
      }},
      { text: 'Añade sombreado y colorea cada barra de un <strong>color diferente</strong>.', draw: (ctx, w, h) => {
          const size = Math.min(w,h)*0.35;
          const cx = w/2, cy = h/2+5;
          ctx.globalAlpha = 0.2;
          ctx.fillStyle = '#00ffff';
          ctx.fillRect(cx - size*0.5, cy + size*0.4 - 10, size, 10);
          ctx.fillStyle = '#ff00ff';
          ctx.fillRect(cx - size*0.5, cy + size*0.4 - 20, 10, size*0.8);
          ctx.fillStyle = '#ffff00';
          ctx.fillRect(cx + size*0.5 - 10, cy - size*0.6 + 10, 10, size*0.8);
          ctx.globalAlpha = 1;
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
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
          ctx.strokeStyle = '#e74c3c';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(cx, cy, 12, 0, Math.PI*2);
          ctx.stroke();
      }},
      { text: 'Alrededor, dibuja <strong>5 pétalos superpuestos</strong> en espiral de 2.5 cm.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-10;
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
      { text: 'Añade una <strong>segunda capa</strong> de 5 pétalos más grandes (3.5 cm).', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-10;
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
      }},
      { text: 'Dibuja el <strong>tallo</strong> de 0.5 cm de grosor y 8 cm de largo.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-10;
          ctx.strokeStyle = '#2ecc71';
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.moveTo(cx, cy+20);
          ctx.lineTo(cx, cy+80);
          ctx.stroke();
      }},
      { text: 'Añade <strong>hojas</strong> en forma de lágrima con venas y una espina pequeña.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-10;
          ctx.strokeStyle = '#27ae60';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.ellipse(cx-25, cy+50, 18, 8, -0.3, 0, Math.PI*2);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(cx-20, cy+45);
          ctx.lineTo(cx-35, cy+55);
          ctx.stroke();
          ctx.beginPath();
          ctx.ellipse(cx+25, cy+70, 18, 8, 0.3, 0, Math.PI*2);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(cx+20, cy+65);
          ctx.lineTo(cx+35, cy+75);
          ctx.stroke();
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },
  {
    id: 'dragon',
    title: 'Dragón estilizado',
    category: 'avanzado',
    difficulty: 5,
    icon: '🐉',
    steps: [
      { text: 'Dibuja un <strong>óvalo de 8×3 cm</strong> para el cuerpo serpentino.', draw: (ctx, w, h) => {
          ctx.strokeStyle = '#e67e22';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.ellipse(w/2+10, h/2, 60, 25, 0.2, 0, Math.PI*2);
          ctx.stroke();
      }},
      { text: 'Añade un círculo de 4 cm para la <strong>cabeza</strong>, hocico y cuernos curvos.', draw: (ctx, w, h) => {
          ctx.strokeStyle = '#e67e22';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(w/2-30, h/2-15, 22, 0, Math.PI*2);
          ctx.stroke();
          ctx.beginPath();
          ctx.ellipse(w/2-50, h/2-10, 15, 10, -0.2, 0, Math.PI*2);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(w/2-40, h/2-35);
          ctx.lineTo(w/2-55, h/2-55);
          ctx.moveTo(w/2-30, h/2-37);
          ctx.lineTo(w/2-45, h/2-58);
          ctx.stroke();
      }},
      { text: 'Dibuja las <strong>alas</strong> con 3 huesos principales y membranas curvas.', draw: (ctx, w, h) => {
          ctx.strokeStyle = '#e67e22';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(w/2-10, h/2-10);
          ctx.lineTo(w/2+50, h/2-70);
          ctx.lineTo(w/2+80, h/2-30);
          ctx.closePath();
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(w/2-10, h/2-10);
          ctx.lineTo(w/2+40, h/2-50);
          ctx.moveTo(w/2-10, h/2-10);
          ctx.lineTo(w/2+70, h/2-50);
          ctx.moveTo(w/2-10, h/2-10);
          ctx.lineTo(w/2+80, h/2-30);
          ctx.stroke();
      }},
      { text: 'Añade <strong>escamas</strong> en forma de diamante a lo largo del lomo.', draw: (ctx, w, h) => {
          ctx.fillStyle = '#e67e2240';
          ctx.strokeStyle = '#e67e22';
          ctx.lineWidth = 2;
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
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
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
      { text: 'Dibuja <strong>4 líneas</strong> que pasen por el centro a 45° (estrella de 8 puntas).', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.35;
          ctx.strokeStyle = '#9b59b6';
          ctx.lineWidth = 2;
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
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },

  // ===== NUEVOS 5 DIBUJOS =====
  {
    id: 'paisaje',
    title: 'Paisaje de montaña',
    category: 'simple',
    difficulty: 2,
    icon: '🏔️',
    steps: [
      { text: 'Dibuja una <strong>línea horizontal</strong> a 4 cm del borde inferior (suelo).', draw: (ctx, w, h) => {
          ctx.strokeStyle = '#27ae60';
          ctx.lineWidth = 2;
          const y = h - 60;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.stroke();
      }},
      { text: 'Añade <strong>2 montañas</strong> triangulares: una de 6 cm y otra de 8 cm de altura.', draw: (ctx, w, h) => {
          ctx.strokeStyle = '#34495e';
          ctx.lineWidth = 2;
          const baseY = h - 60;
          // Montaña izquierda (más pequeña)
          ctx.beginPath();
          ctx.moveTo(50, baseY);
          ctx.lineTo(150, 40);
          ctx.lineTo(250, baseY);
          ctx.closePath();
          ctx.stroke();
          // Montaña derecha (más alta)
          ctx.beginPath();
          ctx.moveTo(180, baseY);
          ctx.lineTo(320, 20);
          ctx.lineTo(460, baseY);
          ctx.closePath();
          ctx.stroke();
      }},
      { text: 'Dibuja un <strong>río</strong> serpenteante que vaya desde el horizonte hasta el primer plano.', draw: (ctx, w, h) => {
          ctx.strokeStyle = '#3498db';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(300, 100);
          ctx.quadraticCurveTo(250, 200, 350, 300);
          ctx.quadraticCurveTo(280, 360, 400, h-60);
          ctx.stroke();
      }},
      { text: 'Añade <strong>árboles</strong> con triángulos de 2 cm sobre el suelo (pinos).', draw: (ctx, w, h) => {
          ctx.fillStyle = '#2ecc71';
          ctx.strokeStyle = '#27ae60';
          ctx.lineWidth = 2;
          const baseY = h - 60;
          // Árbol 1
          ctx.beginPath();
          ctx.moveTo(80, baseY);
          ctx.lineTo(90, baseY-40);
          ctx.lineTo(100, baseY);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          // Árbol 2
          ctx.beginPath();
          ctx.moveTo(400, baseY);
          ctx.lineTo(410, baseY-50);
          ctx.lineTo(420, baseY);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          // Árbol 3
          ctx.beginPath();
          ctx.moveTo(500, baseY);
          ctx.lineTo(510, baseY-35);
          ctx.lineTo(520, baseY);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
      }},
      { text: 'Agrega <strong>nubes</strong> con círculos ovalados y un sol de 3 cm en la esquina.', draw: (ctx, w, h) => {
          ctx.fillStyle = '#ecf0f1';
          ctx.beginPath();
          ctx.ellipse(120, 60, 30, 15, 0, 0, Math.PI*2);
          ctx.fill();
          ctx.beginPath();
          ctx.ellipse(150, 50, 25, 12, 0.2, 0, Math.PI*2);
          ctx.fill();
          ctx.beginPath();
          ctx.ellipse(90, 50, 20, 10, -0.1, 0, Math.PI*2);
          ctx.fill();
          // Sol
          ctx.fillStyle = '#f1c40f';
          ctx.beginPath();
          ctx.arc(w-60, 50, 25, 0, Math.PI*2);
          ctx.fill();
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },
  {
    id: 'hexagono',
    title: 'Hexágono 3D',
    category: 'geometrico',
    difficulty: 3,
    icon: '⬡',
    steps: [
      { text: 'Dibuja un <strong>hexágono regular</strong> de 4 cm de lado (6 lados iguales).', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = 50;
          ctx.strokeStyle = '#8e44ad';
          ctx.lineWidth = 2;
          ctx.beginPath();
          for (let i=0; i<6; i++) {
            const angle = i * Math.PI/3 - Math.PI/6;
            const x = cx + r*Math.cos(angle);
            const y = cy + r*Math.sin(angle);
            if (i===0) ctx.moveTo(x,y);
            else ctx.lineTo(x,y);
          }
          ctx.closePath();
          ctx.stroke();
      }},
      { text: 'Dibuja el <strong>hexágono trasero</strong> desplazado 1.5 cm hacia arriba y derecha.', draw: (ctx, w, h) => {
          const cx = w/2+15, cy = h/2-15, r = 50;
          ctx.strokeStyle = '#8e44ad';
          ctx.lineWidth = 2;
          ctx.beginPath();
          for (let i=0; i<6; i++) {
            const angle = i * Math.PI/3 - Math.PI/6;
            const x = cx + r*Math.cos(angle);
            const y = cy + r*Math.sin(angle);
            if (i===0) ctx.moveTo(x,y);
            else ctx.lineTo(x,y);
          }
          ctx.closePath();
          ctx.stroke();
      }},
      { text: 'Conecta los <strong>vértices correspondientes</strong> de ambos hexágonos con líneas rectas.', draw: (ctx, w, h) => {
          const cx1 = w/2, cy1 = h/2;
          const cx2 = w/2+15, cy2 = h/2-15;
          const r = 50;
          ctx.strokeStyle = '#8e44ad';
          ctx.lineWidth = 2;
          for (let i=0; i<6; i++) {
            const angle = i * Math.PI/3 - Math.PI/6;
            const x1 = cx1 + r*Math.cos(angle), y1 = cy1 + r*Math.sin(angle);
            const x2 = cx2 + r*Math.cos(angle), y2 = cy2 + r*Math.sin(angle);
            ctx.beginPath();
            ctx.moveTo(x1,y1);
            ctx.lineTo(x2,y2);
            ctx.stroke();
          }
      }},
      { text: 'Borra las líneas <strong>ocultas</strong> de la parte trasera (líneas que quedarían detrás).', draw: (ctx, w, h) => {
          // En este paso no dibujamos nada nuevo, pero resaltamos las aristas frontales
          const cx = w/2, cy = h/2, r = 50;
          ctx.strokeStyle = '#8e44ad';
          ctx.lineWidth = 3;
          ctx.beginPath();
          for (let i=0; i<6; i++) {
            const angle = i * Math.PI/3 - Math.PI/6;
            const x = cx + r*Math.cos(angle);
            const y = cy + r*Math.sin(angle);
            if (i===0) ctx.moveTo(x,y);
            else ctx.lineTo(x,y);
          }
          ctx.closePath();
          ctx.stroke();
      }},
      { text: 'Sombrea las caras laterales con <strong>violeta claro</strong> para dar profundidad.', draw: (ctx, w, h) => {
          ctx.fillStyle = '#8e44ad20';
          // Sombrear dos caras laterales visibles (simulación)
          ctx.beginPath();
          ctx.moveTo(w/2-50, h/2);
          ctx.lineTo(w/2-35, h/2-15);
          ctx.lineTo(w/2+50, h/2-15);
          ctx.lineTo(w/2+50, h/2);
          ctx.closePath();
          ctx.fill();
          ctx.beginPath();
          ctx.moveTo(w/2+50, h/2);
          ctx.lineTo(w/2+65, h/2-15);
          ctx.lineTo(w/2+65, h/2-65);
          ctx.lineTo(w/2+50, h/2-50);
          ctx.closePath();
          ctx.fill();
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },
  {
    id: 'nazar',
    title: 'Ojo turco (Nazar)',
    category: 'ilusion',
    difficulty: 3,
    icon: '🧿',
    steps: [
      { text: 'Dibuja un <strong>círculo grande</strong> de 5 cm de radio para el contorno del ojo.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = 60;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI*2);
          ctx.stroke();
      }},
      { text: 'Dentro, dibuja un <strong>círculo concéntrico</strong> de 3.5 cm de radio (iris).', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2;
          ctx.fillStyle = '#3498db';
          ctx.beginPath();
          ctx.arc(cx, cy, 42, 0, Math.PI*2);
          ctx.fill();
          ctx.strokeStyle = '#2980b9';
          ctx.lineWidth = 2;
          ctx.stroke();
      }},
      { text: 'Añade un <strong>círculo más pequeño</strong> de 1.5 cm de radio (pupila) en el centro.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2;
          ctx.fillStyle = '#1a1a2e';
          ctx.beginPath();
          ctx.arc(cx, cy, 18, 0, Math.PI*2);
          ctx.fill();
      }},
      { text: 'Dibuja <strong>2 brillos</strong> blancos en la pupila (círculos de 0.3 cm) para dar vida.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2;
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(cx-8, cy-8, 6, 0, Math.PI*2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(cx+10, cy+5, 4, 0, Math.PI*2);
          ctx.fill();
      }},
      { text: 'Decora con <strong>formas de media luna</strong> alrededor del iris (detalle turco).', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 2;
          // Media luna superior
          ctx.beginPath();
          ctx.arc(cx, cy-42, 15, Math.PI*0.8, Math.PI*1.2);
          ctx.stroke();
          // Media luna inferior
          ctx.beginPath();
          ctx.arc(cx, cy+42, 15, Math.PI*1.8, Math.PI*2.2);
          ctx.stroke();
          // Puntos decorativos
          ctx.fillStyle = '#f1c40f';
          ctx.beginPath();
          ctx.arc(cx-30, cy, 4, 0, Math.PI*2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(cx+30, cy, 4, 0, Math.PI*2);
          ctx.fill();
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },
  {
    id: 'buho',
    title: 'Búho realista',
    category: 'intermedio',
    difficulty: 4,
    icon: '🦉',
    steps: [
      { text: 'Dibuja un <strong>óvalo de 6×4 cm</strong> para el cuerpo del búho.', draw: (ctx, w, h) => {
          ctx.strokeStyle = '#6c5b7b';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.ellipse(w/2, h/2+10, 45, 30, 0, 0, Math.PI*2);
          ctx.stroke();
      }},
      { text: 'Añade un <strong>círculo de 3.5 cm</strong> para la cabeza, ligeramente superpuesto al cuerpo.', draw: (ctx, w, h) => {
          ctx.strokeStyle = '#6c5b7b';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(w/2, h/2-20, 28, 0, Math.PI*2);
          ctx.stroke();
      }},
      { text: 'Dibuja dos <strong>círculos grandes</strong> para los ojos (2 cm de diámetro) y las pupilas.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-25;
          ctx.fillStyle = '#f1c40f';
          ctx.beginPath();
          ctx.arc(cx-14, cy, 12, 0, Math.PI*2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(cx+14, cy, 12, 0, Math.PI*2);
          ctx.fill();
          ctx.fillStyle = '#1a1a2e';
          ctx.beginPath();
          ctx.arc(cx-14, cy, 6, 0, Math.PI*2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(cx+14, cy, 6, 0, Math.PI*2);
          ctx.fill();
      }},
      { text: 'Añade el <strong>pico</strong> triangular de 1.5 cm y las orejas puntiagudas (plumas).', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-20;
          ctx.strokeStyle = '#e67e22';
          ctx.lineWidth = 2;
          ctx.fillStyle = '#e67e22';
          ctx.beginPath();
          ctx.moveTo(cx, cy+5);
          ctx.lineTo(cx-6, cy+15);
          ctx.lineTo(cx+6, cy+15);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          // Orejas
          ctx.strokeStyle = '#6c5b7b';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(cx-20, cy-25);
          ctx.lineTo(cx-30, cy-45);
          ctx.lineTo(cx-15, cy-30);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(cx+20, cy-25);
          ctx.lineTo(cx+30, cy-45);
          ctx.lineTo(cx+15, cy-30);
          ctx.stroke();
      }},
      { text: 'Dibuja las <strong>alas</strong> a los lados del cuerpo y detalles de plumas con líneas curvas.', draw: (ctx, w, h) => {
          ctx.strokeStyle = '#6c5b7b';
          ctx.lineWidth = 2;
          // Ala izquierda
          ctx.beginPath();
          ctx.moveTo(w/2-40, h/2-5);
          ctx.quadraticCurveTo(w/2-60, h/2+20, w/2-30, h/2+30);
          ctx.stroke();
          // Ala derecha
          ctx.beginPath();
          ctx.moveTo(w/2+40, h/2-5);
          ctx.quadraticCurveTo(w/2+60, h/2+20, w/2+30, h/2+30);
          ctx.stroke();
          // Plumas en el pecho
          for (let i=0; i<4; i++) {
            ctx.beginPath();
            ctx.moveTo(w/2-10+i*8, h/2+5);
            ctx.quadraticCurveTo(w/2+i*8, h/2+15, w/2+10+i*8, h/2+5);
            ctx.stroke();
          }
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },
  {
    id: 'dragones',
    title: 'Dragón chino',
    category: 'avanzado',
    difficulty: 5,
    icon: '🐲',
    steps: [
      { text: 'Dibuja un <strong>cuerpo ondulado</strong> con una curva serpenteante de 10 cm de largo.', draw: (ctx, w, h) => {
          ctx.strokeStyle = '#c0392b';
          ctx.lineWidth = 5;
          ctx.beginPath();
          ctx.moveTo(60, h/2+20);
          ctx.quadraticCurveTo(150, h/2-40, 250, h/2+10);
          ctx.quadraticCurveTo(350, h/2-30, 450, h/2+20);
          ctx.stroke();
      }},
      { text: 'Añade la <strong>cabeza</strong> con un círculo de 3 cm, hocico y cuernos de ciervo.', draw: (ctx, w, h) => {
          const cx = 60, cy = h/2+20;
          ctx.strokeStyle = '#c0392b';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(cx, cy-10, 22, 0, Math.PI*2);
          ctx.stroke();
          // Hocico
          ctx.beginPath();
          ctx.ellipse(cx-25, cy-5, 15, 10, 0.2, 0, Math.PI*2);
          ctx.stroke();
          // Cuernos
          ctx.beginPath();
          ctx.moveTo(cx-5, cy-30);
          ctx.lineTo(cx-15, cy-55);
          ctx.lineTo(cx, cy-45);
          ctx.moveTo(cx+5, cy-30);
          ctx.lineTo(cx+15, cy-55);
          ctx.lineTo(cx, cy-45);
          ctx.stroke();
      }},
      { text: 'Dibuja las <strong>garras</strong> con 4 dedos en cada pata (3 patas visibles).', draw: (ctx, w, h) => {
          ctx.strokeStyle = '#c0392b';
          ctx.lineWidth = 2;
          // Garra delantera
          ctx.beginPath();
          ctx.moveTo(140, h/2-5);
          ctx.lineTo(130, h/2+20);
          ctx.lineTo(135, h/2+15);
          ctx.moveTo(135, h/2+20);
          ctx.lineTo(140, h/2+15);
          ctx.stroke();
          // Garra trasera
          ctx.beginPath();
          ctx.moveTo(340, h/2+5);
          ctx.lineTo(330, h/2+25);
          ctx.lineTo(335, h/2+20);
          ctx.moveTo(335, h/2+25);
          ctx.lineTo(340, h/2+20);
          ctx.stroke();
      }},
      { text: 'Añade <strong>escamas</strong> con patrones de diamante a lo largo del cuerpo.', draw: (ctx, w, h) => {
          ctx.fillStyle = '#c0392b40';
          ctx.strokeStyle = '#c0392b';
          ctx.lineWidth = 1;
          const points = [[120, h/2-10],[200, h/2+5],[280, h/2-10],[360, h/2+5]];
          points.forEach(([px,py]) => {
            ctx.beginPath();
            ctx.moveTo(px, py-8);
            ctx.lineTo(px+6, py);
            ctx.lineTo(px, py+8);
            ctx.lineTo(px-6, py);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
          });
      }},
      { text: 'Decora con <strong>llamas</strong> alrededor de la cabeza y detalles dorados en las escamas.', draw: (ctx, w, h) => {
          const cx = 60, cy = h/2+20;
          ctx.fillStyle = '#f39c12';
          // Llamas
          ctx.beginPath();
          ctx.moveTo(cx-35, cy-5);
          ctx.quadraticCurveTo(cx-50, cy-20, cx-40, cy);
          ctx.quadraticCurveTo(cx-55, cy+10, cx-35, cy+5);
          ctx.fill();
          ctx.fillStyle = '#e74c3c70';
          ctx.beginPath();
          ctx.moveTo(cx-30, cy);
          ctx.quadraticCurveTo(cx-45, cy-12, cx-35, cy+2);
          ctx.fill();
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  }
];

if (typeof module !== 'undefined') module.exports = drawings;
