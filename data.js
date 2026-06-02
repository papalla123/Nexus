// ============= data.js (versión profesional - 12 dibujos) =============
const drawings = [
  // 1. SOL RADIANTE - Mejorado con rayos degradados y brillo
  {
    id: 'sol',
    title: 'Sol radiante',
    category: 'simple',
    difficulty: 1,
    icon: '☀️',
    steps: [
      { text: 'Traza un <strong>círculo perfecto de 5 cm</strong> en el centro con un compás virtual.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.22;
          ctx.shadowColor = '#f39c12';
          ctx.shadowBlur = 20;
          ctx.fillStyle = '#f1c40f';
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI*2);
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.strokeStyle = '#e67e22';
          ctx.lineWidth = 3;
          ctx.stroke();
      }},
      { text: 'Añade <strong>8 rayos principales</strong> con degradado naranja, de 2 cm de largo.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.22;
          for (let i=0; i<8; i++) {
            const angle = i*Math.PI/4;
            const x1 = cx + r*Math.cos(angle);
            const y1 = cy + r*Math.sin(angle);
            const x2 = cx + (r+25)*Math.cos(angle);
            const y2 = cy + (r+25)*Math.sin(angle);
            const grad = ctx.createLinearGradient(x1, y1, x2, y2);
            grad.addColorStop(0, '#f39c12');
            grad.addColorStop(1, '#e74c3c');
            ctx.strokeStyle = grad;
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
      }},
      { text: 'Dibuja <strong>rayos secundarios</strong> entre los principales, más finos y más cortos.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.22;
          ctx.strokeStyle = '#f1c40f';
          ctx.lineWidth = 2;
          for (let i=0; i<8; i++) {
            const angle = i*Math.PI/4 + Math.PI/8;
            const x1 = cx + r*Math.cos(angle);
            const y1 = cy + r*Math.sin(angle);
            const x2 = cx + (r+18)*Math.cos(angle);
            const y2 = cy + (r+18)*Math.sin(angle);
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
      }},
      { text: 'Añade <strong>puntos de luz</strong> en las puntas de los rayos y un halo difuso.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.22;
          ctx.fillStyle = '#ffffff60';
          for (let i=0; i<8; i++) {
            const angle = i*Math.PI/4;
            const x = cx + (r+28)*Math.cos(angle);
            const y = cy + (r+28)*Math.sin(angle);
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI*2);
            ctx.fill();
          }
          // Halo
          ctx.shadowColor = '#f1c40f';
          ctx.shadowBlur = 40;
          ctx.fillStyle = '#f1c40f10';
          ctx.beginPath();
          ctx.arc(cx, cy, r+35, 0, Math.PI*2);
          ctx.fill();
          ctx.shadowBlur = 0;
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },

  // 2. CUBO 3D - Mejorado con sombras suaves y perspectiva
  {
    id: 'cubo',
    title: 'Cubo 3D',
    category: 'geometrico',
    difficulty: 3,
    icon: '🔷',
    steps: [
      { text: 'Dibuja un <strong>cuadrado de 4×4 cm</strong> para la cara frontal (con bordes suaves).', draw: (ctx, w, h) => {
          const s = Math.min(w,h)*0.3;
          const cx = w/2, cy = h/2;
          ctx.shadowColor = '#00000040';
          ctx.shadowBlur = 10;
          ctx.fillStyle = '#ecf0f1';
          ctx.fillRect(cx-s, cy-s, s*2, s*2);
          ctx.shadowBlur = 0;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 2;
          ctx.strokeRect(cx-s, cy-s, s*2, s*2);
      }},
      { text: 'Añade el <strong>cuadrado trasero</strong> desplazado 2 cm en diagonal (con opacidad).', draw: (ctx, w, h) => {
          const s = Math.min(w,h)*0.3;
          const cx = w/2, cy = h/2;
          ctx.fillStyle = '#bdc3c760';
          ctx.fillRect(cx-s+20, cy-s-14, s*2, s*2);
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1.5;
          ctx.strokeRect(cx-s+20, cy-s-14, s*2, s*2);
      }},
      { text: 'Conecta las <strong>esquinas correspondientes</strong> con líneas rectas y precisas.', draw: (ctx, w, h) => {
          const s = Math.min(w,h)*0.3;
          const cx = w/2, cy = h/2;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 2;
          const puntos = [
            [cx-s, cy-s, cx-s+20, cy-s-14],
            [cx+s, cy-s, cx+s+20, cy-s-14],
            [cx-s, cy+s, cx-s+20, cy+s-14],
            [cx+s, cy+s, cx+s+20, cy+s-14]
          ];
          puntos.forEach(([x1,y1,x2,y2]) => {
            ctx.beginPath();
            ctx.moveTo(x1,y1);
            ctx.lineTo(x2,y2);
            ctx.stroke();
          });
      }},
      { text: 'Sombrea con <strong>degradados</strong> las caras laterales para dar profundidad.', draw: (ctx, w, h) => {
          const s = Math.min(w,h)*0.3;
          const cx = w/2, cy = h/2;
          // Cara lateral derecha
          const grad = ctx.createLinearGradient(cx+s, cy-s, cx+s+20, cy-s-14);
          grad.addColorStop(0, '#bdc3c7');
          grad.addColorStop(1, '#95a5a6');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.moveTo(cx+s, cy-s);
          ctx.lineTo(cx+s+20, cy-s-14);
          ctx.lineTo(cx+s+20, cy+s-14);
          ctx.lineTo(cx+s, cy+s);
          ctx.closePath();
          ctx.fill();
          // Cara superior
          const grad2 = ctx.createLinearGradient(cx-s, cy-s, cx-s+20, cy-s-14);
          grad2.addColorStop(0, '#ecf0f1');
          grad2.addColorStop(1, '#bdc3c7');
          ctx.fillStyle = grad2;
          ctx.beginPath();
          ctx.moveTo(cx-s, cy-s);
          ctx.lineTo(cx-s+20, cy-s-14);
          ctx.lineTo(cx+s+20, cy-s-14);
          ctx.lineTo(cx+s, cy-s);
          ctx.closePath();
          ctx.fill();
      }},
      { text: 'Añade <strong>reflejos</strong> en las aristas frontales y una sombra proyectada.', draw: (ctx, w, h) => {
          const s = Math.min(w,h)*0.3;
          const cx = w/2, cy = h/2;
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          // Reflejo en arista frontal izquierda
          ctx.beginPath();
          ctx.moveTo(cx-s, cy-s);
          ctx.lineTo(cx-s, cy+s);
          ctx.stroke();
          // Sombra proyectada
          ctx.fillStyle = '#00000020';
          ctx.beginPath();
          ctx.moveTo(cx+s+20, cy+s-14);
          ctx.lineTo(cx+s+30, cy+s-10);
          ctx.lineTo(cx+s+30, cy+s);
          ctx.lineTo(cx+s, cy+s);
          ctx.closePath();
          ctx.fill();
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },

  // 3. TRIÁNGULO IMPOSIBLE - Mejorado con colores vibrantes y sombras
  {
    id: 'trianguloimposible',
    title: 'Triángulo imposible',
    category: 'ilusion',
    difficulty: 4,
    icon: '🔺',
    steps: [
      { text: 'Dibuja un <strong>triángulo equilátero</strong> de 8 cm de lado como guía (línea punteada).', draw: (ctx, w, h) => {
          const size = Math.min(w,h)*0.35;
          const cx = w/2, cy = h/2+10;
          ctx.setLineDash([4,4]);
          ctx.strokeStyle = '#95a5a6';
          ctx.lineWidth = 1;
          const x1 = cx, y1 = cy - size*0.6;
          const x2 = cx - size*0.5, y2 = cy + size*0.4;
          const x3 = cx + size*0.5, y3 = cy + size*0.4;
          ctx.beginPath();
          ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.lineTo(x3,y3);
          ctx.closePath(); ctx.stroke();
          ctx.setLineDash([]);
      }},
      { text: 'Dibuja las tres <strong>barras principales</strong> del triángulo imposible con relleno degradado.', draw: (ctx, w, h) => {
          const size = Math.min(w,h)*0.35;
          const cx = w/2, cy = h/2+10;
          // Barra inferior (cian)
          ctx.fillStyle = '#00ffff40';
          ctx.strokeStyle = '#00ffff';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(cx-size*0.5, cy+size*0.4);
          ctx.lineTo(cx+size*0.5, cy+size*0.4);
          ctx.lineTo(cx+size*0.5-15, cy+size*0.4-20);
          ctx.lineTo(cx-size*0.5+15, cy+size*0.4-20);
          ctx.closePath(); ctx.fill(); ctx.stroke();
          // Barra izquierda (magenta)
          ctx.fillStyle = '#ff00ff40';
          ctx.strokeStyle = '#ff00ff';
          ctx.beginPath();
          ctx.moveTo(cx-size*0.5, cy+size*0.4);
          ctx.lineTo(cx, cy-size*0.6);
          ctx.lineTo(cx+15, cy-size*0.6+10);
          ctx.lineTo(cx-size*0.5+20, cy+size*0.4-15);
          ctx.closePath(); ctx.fill(); ctx.stroke();
          // Barra derecha (amarillo)
          ctx.fillStyle = '#ffff0040';
          ctx.strokeStyle = '#ffff00';
          ctx.beginPath();
          ctx.moveTo(cx+size*0.5, cy+size*0.4);
          ctx.lineTo(cx, cy-size*0.6);
          ctx.lineTo(cx-15, cy-size*0.6+10);
          ctx.lineTo(cx+size*0.5-20, cy+size*0.4-15);
          ctx.closePath(); ctx.fill(); ctx.stroke();
      }},
      { text: 'Añade <strong>sombras internas</strong> para dar el efecto 3D de ilusión óptica.', draw: (ctx, w, h) => {
          const size = Math.min(w,h)*0.35;
          const cx = w/2, cy = h/2+10;
          // Sombra en barra inferior
          ctx.fillStyle = '#00000030';
          ctx.beginPath();
          ctx.moveTo(cx-size*0.5+15, cy+size*0.4-20);
          ctx.lineTo(cx+size*0.5-15, cy+size*0.4-20);
          ctx.lineTo(cx+size*0.5-20, cy+size*0.4-25);
          ctx.lineTo(cx-size*0.5+20, cy+size*0.4-25);
          ctx.closePath(); ctx.fill();
      }},
      { text: 'Perfecciona con <strong>destellos</strong> en las aristas superiores de cada barra.', draw: (ctx, w, h) => {
          const size = Math.min(w,h)*0.35;
          const cx = w/2, cy = h/2+10;
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          // Destellos en aristas superiores
          ctx.beginPath();
          ctx.moveTo(cx-size*0.5, cy+size*0.4);
          ctx.lineTo(cx, cy-size*0.6);
          ctx.moveTo(cx+size*0.5, cy+size*0.4);
          ctx.lineTo(cx, cy-size*0.6);
          ctx.moveTo(cx-size*0.5, cy+size*0.4);
          ctx.lineTo(cx+size*0.5, cy+size*0.4);
          ctx.stroke();
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },

  // 4. ROSA CLÁSICA - Mejorada con pétalos superpuestos y sombras
  {
    id: 'rosa',
    title: 'Rosa clásica',
    category: 'intermedio',
    difficulty: 4,
    icon: '🌹',
    steps: [
      { text: 'Dibuja un <strong>círculo de 1.5 cm</strong> en el centro (corazón de la rosa) con color rojo oscuro.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-10;
          ctx.fillStyle = '#800000';
          ctx.beginPath();
          ctx.arc(cx, cy, 12, 0, Math.PI*2);
          ctx.fill();
      }},
      { text: 'Alrededor, dibuja <strong>5 pétalos superpuestos en espiral</strong> con forma de corazón.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-10;
          ctx.fillStyle = '#c0392b';
          ctx.strokeStyle = '#922b21';
          ctx.lineWidth = 2;
          for (let i=0; i<5; i++) {
            const angle = i*1.2566;
            const x = cx + 20*Math.cos(angle);
            const y = cy + 20*Math.sin(angle);
            ctx.beginPath();
            // Pétalo en forma de lágrima
            ctx.moveTo(x, y-14);
            ctx.bezierCurveTo(x+20, y-20, x+20, y+10, x, y+14);
            ctx.bezierCurveTo(x-20, y+10, x-20, y-20, x, y-14);
            ctx.fill();
            ctx.stroke();
          }
      }},
      { text: 'Añade una <strong>segunda capa</strong> de 5 pétalos más grandes (3.5 cm) en los espacios.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-10;
          ctx.fillStyle = '#e74c3c80';
          ctx.strokeStyle = '#c0392b';
          ctx.lineWidth = 1.5;
          for (let i=0; i<5; i++) {
            const angle = i*1.2566 + 0.6283;
            const x = cx + 32*Math.cos(angle);
            const y = cy + 32*Math.sin(angle);
            ctx.beginPath();
            ctx.moveTo(x, y-18);
            ctx.bezierCurveTo(x+25, y-25, x+25, y+15, x, y+18);
            ctx.bezierCurveTo(x-25, y+15, x-25, y-25, x, y-18);
            ctx.fill();
            ctx.stroke();
          }
      }},
      { text: 'Dibuja el <strong>tallo</strong> verde con dos líneas paralelas y una espina pequeña.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-10;
          ctx.strokeStyle = '#2ecc71';
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.moveTo(cx, cy+20);
          ctx.lineTo(cx, cy+90);
          ctx.stroke();
          ctx.strokeStyle = '#27ae60';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(cx-3, cy+20);
          ctx.lineTo(cx-3, cy+90);
          ctx.moveTo(cx+3, cy+20);
          ctx.lineTo(cx+3, cy+90);
          ctx.stroke();
          // Espina
          ctx.fillStyle = '#27ae60';
          ctx.beginPath();
          ctx.moveTo(cx+5, cy+40);
          ctx.lineTo(cx+15, cy+35);
          ctx.lineTo(cx+8, cy+45);
          ctx.closePath();
          ctx.fill();
      }},
      { text: 'Añade <strong>hojas</strong> con venas y una sombra suave bajo la rosa.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-10;
          // Hoja izquierda
          ctx.fillStyle = '#27ae60';
          ctx.beginPath();
          ctx.ellipse(cx-28, cy+55, 20, 10, -0.4, 0, Math.PI*2);
          ctx.fill();
          ctx.strokeStyle = '#1e8449';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(cx-22, cy+50);
          ctx.lineTo(cx-40, cy+60);
          ctx.stroke();
          // Hoja derecha
          ctx.beginPath();
          ctx.ellipse(cx+28, cy+75, 20, 10, 0.4, 0, Math.PI*2);
          ctx.fill();
          ctx.beginPath();
          ctx.moveTo(cx+22, cy+70);
          ctx.lineTo(cx+40, cy+80);
          ctx.stroke();
          // Sombra
          ctx.fillStyle = '#00000015';
          ctx.beginPath();
          ctx.ellipse(cx, cy+95, 30, 8, 0, 0, Math.PI*2);
          ctx.fill();
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },

  // 5. DRAGÓN ESTILIZADO - Mejorado con curvas suaves y detalles
  {
    id: 'dragon',
    title: 'Dragón estilizado',
    category: 'avanzado',
    difficulty: 5,
    icon: '🐉',
    steps: [
      { text: 'Dibuja el <strong>cuerpo serpentino</strong> con una curva de Bézier elegante.', draw: (ctx, w, h) => {
          ctx.strokeStyle = '#c0392b';
          ctx.lineWidth = 6;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(40, h/2);
          ctx.bezierCurveTo(100, h/2-60, 200, h/2+40, 300, h/2-20);
          ctx.bezierCurveTo(380, h/2-60, 440, h/2+10, 480, h/2);
          ctx.stroke();
      }},
      { text: 'Añade <strong>cabeza</strong> con hocico alargado, ojo y cuernos de carnero.', draw: (ctx, w, h) => {
          const cx = 40, cy = h/2;
          ctx.fillStyle = '#c0392b';
          ctx.beginPath();
          ctx.arc(cx, cy-15, 18, 0, Math.PI*2);
          ctx.fill();
          ctx.strokeStyle = '#922b21';
          ctx.lineWidth = 2;
          // Hocico
          ctx.beginPath();
          ctx.moveTo(cx+5, cy-5);
          ctx.bezierCurveTo(cx+15, cy-10, cx+25, cy-5, cx+20, cy+5);
          ctx.stroke();
          // Ojo
          ctx.fillStyle = '#f1c40f';
          ctx.beginPath();
          ctx.arc(cx-5, cy-18, 5, 0, Math.PI*2);
          ctx.fill();
          ctx.fillStyle = '#1a1a2e';
          ctx.beginPath();
          ctx.arc(cx-5, cy-18, 2.5, 0, Math.PI*2);
          ctx.fill();
          // Cuernos
          ctx.strokeStyle = '#8b4513';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(cx-8, cy-30);
          ctx.quadraticCurveTo(cx-20, cy-50, cx-30, cy-35);
          ctx.moveTo(cx+8, cy-30);
          ctx.quadraticCurveTo(cx+20, cy-50, cx+30, cy-35);
          ctx.stroke();
      }},
      { text: 'Dibuja las <strong>alas</strong> con 3 huesos y membranas traslúcidas.', draw: (ctx, w, h) => {
          ctx.strokeStyle = '#c0392b';
          ctx.lineWidth = 2;
          // Ala izquierda
          ctx.beginPath();
          ctx.moveTo(80, h/2-20);
          ctx.lineTo(130, h/2-90);
          ctx.lineTo(170, h/2-70);
          ctx.closePath();
          ctx.fillStyle = '#e74c3c30';
          ctx.fill();
          ctx.stroke();
          // Huesos
          ctx.beginPath();
          ctx.moveTo(80, h/2-20);
          ctx.lineTo(150, h/2-80);
          ctx.moveTo(80, h/2-20);
          ctx.lineTo(160, h/2-60);
          ctx.moveTo(80, h/2-20);
          ctx.lineTo(130, h/2-90);
          ctx.stroke();
      }},
      { text: 'Añade <strong>escamas en diamante</strong> a lo largo del lomo con colores metálicos.', draw: (ctx, w, h) => {
          ctx.fillStyle = '#c0392b60';
          ctx.strokeStyle = '#e74c3c';
          ctx.lineWidth = 1.5;
          const puntos = [[120, h/2-15],[180, h/2+5],[240, h/2-10],[300, h/2+5],[360, h/2-15],[420, h/2+5]];
          puntos.forEach(([px,py]) => {
            ctx.beginPath();
            ctx.moveTo(px, py-10);
            ctx.lineTo(px+8, py);
            ctx.lineTo(px, py+10);
            ctx.lineTo(px-8, py);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
          });
      }},
      { text: 'Decora con <strong>llamas</strong> y garras afiladas, más un degradado rojo-naranja.', draw: (ctx, w, h) => {
          const cx = 40, cy = h/2;
          // Llamas
          ctx.fillStyle = '#f39c12';
          ctx.beginPath();
          ctx.moveTo(cx+20, cy);
          ctx.quadraticCurveTo(cx+35, cy-20, cx+30, cy+5);
          ctx.quadraticCurveTo(cx+40, cy-10, cx+25, cy+10);
          ctx.fill();
          ctx.fillStyle = '#e74c3c60';
          ctx.beginPath();
          ctx.moveTo(cx+22, cy+2);
          ctx.quadraticCurveTo(cx+30, cy-12, cx+28, cy+5);
          ctx.fill();
          // Garras (en el cuerpo)
          ctx.strokeStyle = '#1a1a2e';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(200, h/2+25);
          ctx.lineTo(190, h/2+35);
          ctx.lineTo(195, h/2+30);
          ctx.moveTo(190, h/2+35);
          ctx.lineTo(185, h/2+30);
          ctx.stroke();
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },

  // 6. MÁNDALA SIMPLE - Mejorada con patrones precisos y colores vibrantes
  {
    id: 'mandala',
    title: 'Mándala simple',
    category: 'geometrico',
    difficulty: 3,
    icon: '🕉️',
    steps: [
      { text: 'Traza un <strong>círculo de 7 cm de radio</strong> y marca el centro con una cruz.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.35;
          ctx.strokeStyle = '#8e44ad';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI*2);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(cx-15, cy); ctx.lineTo(cx+15, cy);
          ctx.moveTo(cx, cy-15); ctx.lineTo(cx, cy+15);
          ctx.stroke();
      }},
      { text: 'Dibuja <strong>8 líneas radiales</strong> a 45° que dividan el círculo en 8 partes iguales.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.35;
          ctx.strokeStyle = '#8e44ad';
          ctx.lineWidth = 1.5;
          for (let i=0; i<8; i++) {
            const angle = i*Math.PI/4;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + r*Math.cos(angle), cy + r*Math.sin(angle));
            ctx.stroke();
          }
      }},
      { text: 'Añade <strong>círculos concéntricos</strong> a 1.5, 3, 4.5 y 6 cm de radio.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.35;
          ctx.strokeStyle = '#9b59b6';
          ctx.lineWidth = 1;
          for (let rad of [r*0.3, r*0.5, r*0.7, r*0.9]) {
            ctx.beginPath();
            ctx.arc(cx, cy, rad, 0, Math.PI*2);
            ctx.stroke();
          }
      }},
      { text: 'Dibuja <strong>8 pétalos en el anillo central</strong> con forma de elipse rotada.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.35;
          ctx.fillStyle = '#9b59b640';
          ctx.strokeStyle = '#8e44ad';
          ctx.lineWidth = 2;
          for (let i=0; i<8; i++) {
            const angle = i*Math.PI/4;
            const x = cx + r*0.5*Math.cos(angle);
            const y = cy + r*0.5*Math.sin(angle);
            ctx.beginPath();
            ctx.ellipse(x, y, 14, 7, angle, 0, Math.PI*2);
            ctx.fill();
            ctx.stroke();
          }
      }},
      { text: 'Decora con <strong>triángulos</strong> y pequeños círculos en los espacios vacíos.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.35;
          ctx.fillStyle = '#8e44ad40';
          ctx.strokeStyle = '#8e44ad';
          ctx.lineWidth = 1.5;
          // Triángulos en el anillo exterior
          for (let i=0; i<8; i++) {
            const angle = i*Math.PI/4 + Math.PI/8;
            const x = cx + r*0.7*Math.cos(angle);
            const y = cy + r*0.7*Math.sin(angle);
            ctx.beginPath();
            ctx.moveTo(x, y-10);
            ctx.lineTo(x+10, y+6);
            ctx.lineTo(x-10, y+6);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
          }
          // Círculos pequeños en el borde
          for (let i=0; i<8; i++) {
            const angle = i*Math.PI/4;
            const x = cx + r*0.92*Math.cos(angle);
            const y = cy + r*0.92*Math.sin(angle);
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI*2);
            ctx.fill();
            ctx.stroke();
          }
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },

  // 7. PAISAJE DE MONTAÑA - Mejorado con degradados atmosféricos
  {
    id: 'paisaje',
    title: 'Paisaje de montaña',
    category: 'simple',
    difficulty: 2,
    icon: '🏔️',
    steps: [
      { text: 'Dibuja el <strong>cielo</strong> con un degradado de azul claro a naranja (atardecer).', draw: (ctx, w, h) => {
          const grad = ctx.createLinearGradient(0, 0, 0, h);
          grad.addColorStop(0, '#3498db');
          grad.addColorStop(0.6, '#f39c12');
          grad.addColorStop(1, '#e74c3c');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, w, h);
      }},
      { text: 'Dibuja las <strong>montañas</strong> con picos nevados usando triángulos suaves.', draw: (ctx, w, h) => {
          ctx.fillStyle = '#2c3e50';
          ctx.beginPath();
          ctx.moveTo(0, h-80);
          ctx.lineTo(120, 50);
          ctx.lineTo(240, h-80);
          ctx.closePath();
          ctx.fill();
          ctx.beginPath();
          ctx.moveTo(180, h-80);
          ctx.lineTo(340, 20);
          ctx.lineTo(500, h-80);
          ctx.closePath();
          ctx.fill();
          // Nieves
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.moveTo(110, 55);
          ctx.lineTo(120, 50);
          ctx.lineTo(130, 55);
          ctx.closePath();
          ctx.fill();
          ctx.beginPath();
          ctx.moveTo(330, 25);
          ctx.lineTo(340, 20);
          ctx.lineTo(350, 28);
          ctx.closePath();
          ctx.fill();
      }},
      { text: 'Dibuja un <strong>río</strong> serpenteante con reflejos de luz.', draw: (ctx, w, h) => {
          ctx.strokeStyle = '#85c1e9';
          ctx.lineWidth = 6;
          ctx.beginPath();
          ctx.moveTo(300, 120);
          ctx.bezierCurveTo(250, 200, 380, 280, 320, h-80);
          ctx.stroke();
          ctx.strokeStyle = '#ffffff80';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(310, 130);
          ctx.bezierCurveTo(260, 200, 370, 280, 330, h-80);
          ctx.stroke();
      }},
      { text: 'Añade <strong>árboles</strong> (pinos) con forma de cono y sombra.', draw: (ctx, w, h) => {
          const baseY = h-80;
          // Árbol 1
          ctx.fillStyle = '#27ae60';
          ctx.beginPath();
          ctx.moveTo(70, baseY);
          ctx.lineTo(80, baseY-50);
          ctx.lineTo(90, baseY);
          ctx.closePath();
          ctx.fill();
          ctx.fillStyle = '#1e8449';
          ctx.beginPath();
          ctx.moveTo(75, baseY-10);
          ctx.lineTo(80, baseY-35);
          ctx.lineTo(85, baseY-10);
          ctx.closePath();
          ctx.fill();
          // Árbol 2
          ctx.beginPath();
          ctx.moveTo(450, baseY);
          ctx.lineTo(460, baseY-60);
          ctx.lineTo(470, baseY);
          ctx.closePath();
          ctx.fill();
          ctx.fillStyle = '#1e8449';
          ctx.beginPath();
          ctx.moveTo(455, baseY-10);
          ctx.lineTo(460, baseY-45);
          ctx.lineTo(465, baseY-10);
          ctx.closePath();
          ctx.fill();
      }},
      { text: 'Agrega <strong>nubes</strong> esponjosas y un sol radiante en la esquina.', draw: (ctx, w, h) => {
          ctx.fillStyle = '#ffffff80';
          // Nube 1
          ctx.beginPath();
          ctx.ellipse(100, 40, 30, 15, 0, 0, Math.PI*2);
          ctx.fill();
          ctx.beginPath();
          ctx.ellipse(130, 35, 25, 12, 0.2, 0, Math.PI*2);
          ctx.fill();
          ctx.beginPath();
          ctx.ellipse(70, 38, 20, 10, -0.1, 0, Math.PI*2);
          ctx.fill();
          // Nube 2
          ctx.beginPath();
          ctx.ellipse(380, 60, 25, 12, 0.1, 0, Math.PI*2);
          ctx.fill();
          ctx.beginPath();
          ctx.ellipse(410, 55, 20, 10, 0.3, 0, Math.PI*2);
          ctx.fill();
          // Sol
          ctx.shadowColor = '#f1c40f';
          ctx.shadowBlur = 30;
          ctx.fillStyle = '#f1c40f';
          ctx.beginPath();
          ctx.arc(w-50, 40, 20, 0, Math.PI*2);
          ctx.fill();
          ctx.shadowBlur = 0;
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },

  // 8. HEXÁGONO 3D - Mejorado con sombras proyectadas y caras coloreadas
  {
    id: 'hexagono',
    title: 'Hexágono 3D',
    category: 'geometrico',
    difficulty: 3,
    icon: '⬡',
    steps: [
      { text: 'Dibuja un <strong>hexágono regular</strong> de 4 cm de lado con relleno degradado.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = 50;
          const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
          grad.addColorStop(0, '#9b59b6');
          grad.addColorStop(1, '#8e44ad');
          ctx.fillStyle = grad;
          ctx.beginPath();
          for (let i=0; i<6; i++) {
            const angle = i*Math.PI/3 - Math.PI/6;
            const x = cx + r*Math.cos(angle);
            const y = cy + r*Math.sin(angle);
            if (i===0) ctx.moveTo(x,y);
            else ctx.lineTo(x,y);
          }
          ctx.closePath();
          ctx.fill();
          ctx.strokeStyle = '#6c3483';
          ctx.lineWidth = 2;
          ctx.stroke();
      }},
      { text: 'Dibuja el <strong>hexágono trasero</strong> desplazado 1.5 cm (con opacidad).', draw: (ctx, w, h) => {
          const cx = w/2+15, cy = h/2-15, r = 50;
          ctx.fillStyle = '#9b59b640';
          ctx.strokeStyle = '#6c3483';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          for (let i=0; i<6; i++) {
            const angle = i*Math.PI/3 - Math.PI/6;
            const x = cx + r*Math.cos(angle);
            const y = cy + r*Math.sin(angle);
            if (i===0) ctx.moveTo(x,y);
            else ctx.lineTo(x,y);
          }
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
      }},
      { text: 'Conecta los <strong>vértices correspondientes</strong> con líneas rectas.', draw: (ctx, w, h) => {
          const cx1 = w/2, cy1 = h/2;
          const cx2 = w/2+15, cy2 = h/2-15;
          const r = 50;
          ctx.strokeStyle = '#6c3483';
          ctx.lineWidth = 2;
          for (let i=0; i<6; i++) {
            const angle = i*Math.PI/3 - Math.PI/6;
            const x1 = cx1 + r*Math.cos(angle), y1 = cy1 + r*Math.sin(angle);
            const x2 = cx2 + r*Math.cos(angle), y2 = cy2 + r*Math.sin(angle);
            ctx.beginPath();
            ctx.moveTo(x1,y1);
            ctx.lineTo(x2,y2);
            ctx.stroke();
          }
      }},
      { text: 'Sombrea las <strong>caras laterales</strong> para dar profundidad 3D.', draw: (ctx, w, h) => {
          const cx1 = w/2, cy1 = h/2;
          const cx2 = w/2+15, cy2 = h/2-15;
          const r = 50;
          ctx.fillStyle = '#8e44ad30';
          for (let i=0; i<6; i++) {
            const angle1 = i*Math.PI/3 - Math.PI/6;
            const angle2 = (i+1)*Math.PI/3 - Math.PI/6;
            const x1 = cx1 + r*Math.cos(angle1), y1 = cy1 + r*Math.sin(angle1);
            const x2 = cx1 + r*Math.cos(angle2), y2 = cy1 + r*Math.sin(angle2);
            const x3 = cx2 + r*Math.cos(angle2), y3 = cy2 + r*Math.sin(angle2);
            const x4 = cx2 + r*Math.cos(angle1), y4 = cy2 + r*Math.sin(angle1);
            ctx.beginPath();
            ctx.moveTo(x1,y1);
            ctx.lineTo(x2,y2);
            ctx.lineTo(x3,y3);
            ctx.lineTo(x4,y4);
            ctx.closePath();
            ctx.fill();
          }
      }},
      { text: 'Añade <strong>reflejos</strong> en las aristas superiores y una sombra proyectada.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = 50;
          ctx.strokeStyle = '#ffffff60';
          ctx.lineWidth = 2;
          // Reflejos en aristas superiores del hexágono frontal
          for (let i=0; i<3; i++) {
            const angle = i*Math.PI/3 - Math.PI/6;
            const x = cx + r*Math.cos(angle);
            const y = cy + r*Math.sin(angle);
            const x2 = cx + r*Math.cos(angle+Math.PI/3);
            const y2 = cy + r*Math.sin(angle+Math.PI/3);
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
          // Sombra
          ctx.fillStyle = '#00000015';
          ctx.beginPath();
          ctx.ellipse(cx+20, cy+60, 45, 10, 0.2, 0, Math.PI*2);
          ctx.fill();
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },

  // 9. OJO TURCO (NAZAR) - Mejorado con degradados y brillos realistas
  {
    id: 'nazar',
    title: 'Ojo turco (Nazar)',
    category: 'ilusion',
    difficulty: 3,
    icon: '🧿',
    steps: [
      { text: 'Dibuja un <strong>círculo exterior</strong> de 5 cm de radio (contorno azul oscuro).', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = 60;
          ctx.fillStyle = '#1a1a2e';
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI*2);
          ctx.fill();
          ctx.strokeStyle = '#16213e';
          ctx.lineWidth = 3;
          ctx.stroke();
      }},
      { text: 'Dibuja el <strong>iris</strong> con un degradado radial de azul claro a oscuro.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2;
          const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 45);
          grad.addColorStop(0, '#3498db');
          grad.addColorStop(0.5, '#2980b9');
          grad.addColorStop(1, '#1a5276');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(cx, cy, 45, 0, Math.PI*2);
          ctx.fill();
      }},
      { text: 'Añade la <strong>pupila</strong> negra de 1.5 cm de radio y el brillo principal.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2;
          ctx.fillStyle = '#0a0a12';
          ctx.beginPath();
          ctx.arc(cx, cy, 18, 0, Math.PI*2);
          ctx.fill();
          // Brillo principal
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(cx-8, cy-8, 6, 0, Math.PI*2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(cx+10, cy+5, 3, 0, Math.PI*2);
          ctx.fill();
      }},
      { text: 'Dibuja las <strong>cejas</strong> curvas y detalles decorativos (medias lunas).', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2;
          ctx.strokeStyle = '#f1c40f';
          ctx.lineWidth = 3;
          // Ceja superior
          ctx.beginPath();
          ctx.arc(cx, cy-48, 18, Math.PI*0.8, Math.PI*1.2);
          ctx.stroke();
          // Ceja inferior
          ctx.beginPath();
          ctx.arc(cx, cy+48, 18, Math.PI*1.8, Math.PI*2.2);
          ctx.stroke();
          // Puntos decorativos
          ctx.fillStyle = '#f1c40f';
          ctx.beginPath();
          ctx.arc(cx-35, cy, 5, 0, Math.PI*2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(cx+35, cy, 5, 0, Math.PI*2);
          ctx.fill();
      }},
      { text: 'Añade <strong>destellos</strong> y un halo protector alrededor del ojo.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2;
          ctx.shadowColor = '#3498db';
          ctx.shadowBlur = 30;
          ctx.fillStyle = '#3498db10';
          ctx.beginPath();
          ctx.arc(cx, cy, 70, 0, Math.PI*2);
          ctx.fill();
          ctx.shadowBlur = 0;
          // Destellos pequeños
          ctx.fillStyle = '#ffffff';
          const destellos = [[cx-20, cy-25], [cx+20, cy-20], [cx-15, cy+25], [cx+25, cy+20]];
          destellos.forEach(([px,py]) => {
            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI*2);
            ctx.fill();
          });
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },

  // 10. BÚHO REALISTA - Mejorado con plumas detalladas y ojos expresivos
  {
    id: 'buho',
    title: 'Búho realista',
    category: 'intermedio',
    difficulty: 4,
    icon: '🦉',
    steps: [
      { text: 'Dibuja el <strong>cuerpo</strong> con forma de óvalo y relleno degradado marrón.', draw: (ctx, w, h) => {
          const grad = ctx.createRadialGradient(w/2, h/2+10, 10, w/2, h/2+10, 45);
          grad.addColorStop(0, '#8b4513');
          grad.addColorStop(1, '#5d4037');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.ellipse(w/2, h/2+10, 45, 30, 0, 0, Math.PI*2);
          ctx.fill();
          ctx.strokeStyle = '#3e2723';
          ctx.lineWidth = 2;
          ctx.stroke();
      }},
      { text: 'Dibuja la <strong>cabeza</strong> circular y las orejas puntiagudas.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-20;
          ctx.fillStyle = '#8b4513';
          ctx.beginPath();
          ctx.arc(cx, cy, 28, 0, Math.PI*2);
          ctx.fill();
          ctx.strokeStyle = '#3e2723';
          ctx.lineWidth = 2;
          ctx.stroke();
          // Orejas
          ctx.fillStyle = '#5d4037';
          ctx.beginPath();
          ctx.moveTo(cx-20, cy-25);
          ctx.lineTo(cx-30, cy-50);
          ctx.lineTo(cx-12, cy-32);
          ctx.closePath();
          ctx.fill();
          ctx.beginPath();
          ctx.moveTo(cx+20, cy-25);
          ctx.lineTo(cx+30, cy-50);
          ctx.lineTo(cx+12, cy-32);
          ctx.closePath();
          ctx.fill();
      }},
      { text: 'Dibuja los <strong>ojos</strong> grandes con iris amarillo y pupilas negras.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-25;
          // Ojo izquierdo
          ctx.fillStyle = '#f1c40f';
          ctx.beginPath();
          ctx.arc(cx-14, cy, 12, 0, Math.PI*2);
          ctx.fill();
          ctx.fillStyle = '#1a1a2e';
          ctx.beginPath();
          ctx.arc(cx-14, cy, 6, 0, Math.PI*2);
          ctx.fill();
          // Ojo derecho
          ctx.fillStyle = '#f1c40f';
          ctx.beginPath();
          ctx.arc(cx+14, cy, 12, 0, Math.PI*2);
          ctx.fill();
          ctx.fillStyle = '#1a1a2e';
          ctx.beginPath();
          ctx.arc(cx+14, cy, 6, 0, Math.PI*2);
          ctx.fill();
          // Brillos
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(cx-14-4, cy-4, 3, 0, Math.PI*2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(cx+14-4, cy-4, 3, 0, Math.PI*2);
          ctx.fill();
      }},
      { text: 'Añade el <strong>pico</strong> triangular y las plumas del pecho con líneas curvas.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-20;
          // Pico
          ctx.fillStyle = '#e67e22';
          ctx.beginPath();
          ctx.moveTo(cx, cy+5);
          ctx.lineTo(cx-6, cy+15);
          ctx.lineTo(cx+6, cy+15);
          ctx.closePath();
          ctx.fill();
          // Plumas en el pecho
          ctx.strokeStyle = '#3e2723';
          ctx.lineWidth = 1.5;
          for (let i=0; i<5; i++) {
            const y = h/2-5 + i*10;
            ctx.beginPath();
            ctx.moveTo(cx-20, y);
            ctx.quadraticCurveTo(cx, y+5, cx+20, y);
            ctx.stroke();
          }
      }},
      { text: 'Dibuja las <strong>alas</strong> con plumas superpuestas y garras en las patas.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2+10;
          // Ala izquierda
          ctx.fillStyle = '#5d4037';
          ctx.beginPath();
          ctx.moveTo(cx-35, cy-10);
          ctx.bezierCurveTo(cx-60, cy-5, cx-60, cy+20, cx-30, cy+25);
          ctx.closePath();
          ctx.fill();
          ctx.strokeStyle = '#3e2723';
          ctx.lineWidth = 1.5;
          ctx.stroke();
          // Ala derecha
          ctx.beginPath();
          ctx.moveTo(cx+35, cy-10);
          ctx.bezierCurveTo(cx+60, cy-5, cx+60, cy+20, cx+30, cy+25);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          // Garras (simples)
          ctx.fillStyle = '#e67e22';
          ctx.beginPath();
          ctx.moveTo(cx-10, cy+30);
          ctx.lineTo(cx-15, cy+40);
          ctx.lineTo(cx-5, cy+40);
          ctx.closePath();
          ctx.fill();
          ctx.beginPath();
          ctx.moveTo(cx+10, cy+30);
          ctx.lineTo(cx+5, cy+40);
          ctx.lineTo(cx+15, cy+40);
          ctx.closePath();
          ctx.fill();
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },

  // 11. DRAGÓN CHINO - Mejorado con cuerpo escamoso y llamas detalladas
  {
    id: 'dragones',
    title: 'Dragón chino',
    category: 'avanzado',
    difficulty: 5,
    icon: '🐲',
    steps: [
      { text: 'Dibuja el <strong>cuerpo ondulado</strong> con una curva serpenteante y relleno degradado.', draw: (ctx, w, h) => {
          ctx.strokeStyle = '#c0392b';
          ctx.lineWidth = 8;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(50, h/2+20);
          ctx.bezierCurveTo(150, h/2-50, 250, h/2+30, 350, h/2-20);
          ctx.bezierCurveTo(400, h/2-40, 450, h/2+10, 480, h/2);
          ctx.stroke();
      }},
      { text: 'Añade la <strong>cabeza</strong> con cuernos de ciervo, ojos y bigotes.', draw: (ctx, w, h) => {
          const cx = 50, cy = h/2+20;
          ctx.fillStyle = '#c0392b';
          ctx.beginPath();
          ctx.arc(cx, cy-10, 22, 0, Math.PI*2);
          ctx.fill();
          ctx.strokeStyle = '#922b21';
          ctx.lineWidth = 2;
          // Cuernos
          ctx.beginPath();
          ctx.moveTo(cx-5, cy-30);
          ctx.quadraticCurveTo(cx-20, cy-55, cx-30, cy-40);
          ctx.moveTo(cx+5, cy-30);
          ctx.quadraticCurveTo(cx+20, cy-55, cx+30, cy-40);
          ctx.stroke();
          // Ojos
          ctx.fillStyle = '#f1c40f';
          ctx.beginPath();
          ctx.arc(cx-8, cy-15, 5, 0, Math.PI*2);
          ctx.fill();
          ctx.fillStyle = '#1a1a2e';
          ctx.beginPath();
          ctx.arc(cx-8, cy-15, 2.5, 0, Math.PI*2);
          ctx.fill();
          // Bigotes
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(cx-25, cy-5);
          ctx.quadraticCurveTo(cx-40, cy-10, cx-45, cy-5);
          ctx.moveTo(cx-25, cy);
          ctx.quadraticCurveTo(cx-45, cy, cx-50, cy+5);
          ctx.stroke();
      }},
      { text: 'Dibuja las <strong>garras</strong> con 4 dedos en las patas delanteras y traseras.', draw: (ctx, w, h) => {
          ctx.strokeStyle = '#c0392b';
          ctx.lineWidth = 3;
          // Pata delantera
          ctx.beginPath();
          ctx.moveTo(140, h/2-5);
          ctx.lineTo(130, h/2+25);
          ctx.lineTo(125, h/2+20);
          ctx.moveTo(130, h/2+25);
          ctx.lineTo(135, h/2+20);
          ctx.moveTo(130, h/2+25);
          ctx.lineTo(130, h/2+30);
          ctx.stroke();
          // Pata trasera
          ctx.beginPath();
          ctx.moveTo(350, h/2+5);
          ctx.lineTo(340, h/2+30);
          ctx.lineTo(335, h/2+25);
          ctx.moveTo(340, h/2+30);
          ctx.lineTo(345, h/2+25);
          ctx.moveTo(340, h/2+30);
          ctx.lineTo(340, h/2+35);
          ctx.stroke();
      }},
      { text: 'Añade <strong>escamas</strong> con diamantes dorados a lo largo del lomo.', draw: (ctx, w, h) => {
          ctx.fillStyle = '#f1c40f60';
          ctx.strokeStyle = '#f1c40f';
          ctx.lineWidth = 1.5;
          const puntos = [[130, h/2-15],[190, h/2+5],[250, h/2-10],[310, h/2+5],[370, h/2-15],[430, h/2+5]];
          puntos.forEach(([px,py]) => {
            ctx.beginPath();
            ctx.moveTo(px, py-12);
            ctx.lineTo(px+8, py);
            ctx.lineTo(px, py+12);
            ctx.lineTo(px-8, py);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
          });
      }},
      { text: 'Decora con <strong>llamas</strong> alrededor de la cabeza y una perla brillante.', draw: (ctx, w, h) => {
          const cx = 50, cy = h/2+20;
          // Llamas
          ctx.fillStyle = '#f39c12';
          ctx.beginPath();
          ctx.moveTo(cx-30, cy-5);
          ctx.quadraticCurveTo(cx-45, cy-25, cx-40, cy-5);
          ctx.quadraticCurveTo(cx-55, cy-15, cx-35, cy+5);
          ctx.fill();
          ctx.fillStyle = '#e74c3c60';
          ctx.beginPath();
          ctx.moveTo(cx-28, cy-3);
          ctx.quadraticCurveTo(cx-40, cy-18, cx-35, cy-2);
          ctx.fill();
          // Perla
          ctx.shadowColor = '#ffffff';
          ctx.shadowBlur = 20;
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(cx+10, cy-20, 6, 0, Math.PI*2);
          ctx.fill();
          ctx.shadowBlur = 0;
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },

  // 12. FÉNIX - NUEVO: Ave de fuego con plumas detalladas y partículas
  {
    id: 'fenix',
    title: 'Fénix',
    category: 'avanzado',
    difficulty: 5,
    icon: '🦅',
    steps: [
      { text: 'Dibuja el <strong>cuerpo del fénix</strong> con forma de pájaro en vuelo, usando curvas suaves.', draw: (ctx, w, h) => {
          ctx.strokeStyle = '#c0392b';
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.moveTo(100, h/2);
          ctx.bezierCurveTo(150, h/2-60, 250, h/2-40, 300, h/2-10);
          ctx.bezierCurveTo(350, h/2+20, 300, h/2+40, 250, h/2+30);
          ctx.bezierCurveTo(180, h/2+20, 140, h/2+30, 100, h/2);
          ctx.stroke();
          ctx.fillStyle = '#c0392b20';
          ctx.fill();
      }},
      { text: 'Añade la <strong>cabeza</strong> con cresta de plumas y ojo brillante.', draw: (ctx, w, h) => {
          const cx = 100, cy = h/2;
          ctx.fillStyle = '#c0392b';
          ctx.beginPath();
          ctx.arc(cx, cy-10, 15, 0, Math.PI*2);
          ctx.fill();
          // Cresta
          ctx.strokeStyle = '#e74c3c';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(cx-5, cy-25);
          ctx.quadraticCurveTo(cx-15, cy-40, cx-10, cy-35);
          ctx.moveTo(cx, cy-25);
          ctx.quadraticCurveTo(cx, cy-45, cx+5, cy-35);
          ctx.moveTo(cx+5, cy-25);
          ctx.quadraticCurveTo(cx+15, cy-40, cx+10, cy-35);
          ctx.stroke();
          // Ojo
          ctx.fillStyle = '#f1c40f';
          ctx.beginPath();
          ctx.arc(cx+5, cy-12, 4, 0, Math.PI*2);
          ctx.fill();
          ctx.fillStyle = '#1a1a2e';
          ctx.beginPath();
          ctx.arc(cx+5, cy-12, 2, 0, Math.PI*2);
          ctx.fill();
      }},
      { text: 'Dibuja las <strong>alas</strong> extendidas con plumas en degradado de rojo a naranja.', draw: (ctx, w, h) => {
          // Ala izquierda
          const grad = ctx.createLinearGradient(100, h/2, 50, h/2-80);
          grad.addColorStop(0, '#c0392b');
          grad.addColorStop(1, '#f39c12');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.moveTo(100, h/2-10);
          ctx.bezierCurveTo(60, h/2-50, 40, h/2-70, 20, h/2-60);
          ctx.bezierCurveTo(40, h/2-40, 60, h/2-30, 100, h/2-10);
          ctx.fill();
          ctx.strokeStyle = '#e74c3c';
          ctx.lineWidth = 2;
          ctx.stroke();
          // Ala derecha
          ctx.beginPath();
          ctx.moveTo(100, h/2-10);
          ctx.bezierCurveTo(140, h/2-50, 160, h/2-70, 180, h/2-60);
          ctx.bezierCurveTo(160, h/2-40, 140, h/2-30, 100, h/2-10);
          ctx.fill();
          ctx.stroke();
      }},
      { text: 'Añade <strong>plumas de la cola</strong> con largas curvas y color dorado.', draw: (ctx, w, h) => {
          ctx.strokeStyle = '#f1c40f';
          ctx.lineWidth = 3;
          const cola = [
            [300, h/2-10, 400, h/2-40],
            [300, h/2-5, 420, h/2-20],
            [300, h/2, 430, h/2],
            [300, h/2+5, 420, h/2+20],
            [300, h/2+10, 400, h/2+40]
          ];
          cola.forEach(([x1,y1,x2,y2]) => {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.bezierCurveTo(x1+40, y1-10, x2-20, y2+5, x2, y2);
            ctx.stroke();
          });
      }},
      { text: 'Decora con <strong>llamas</strong> y partículas de fuego alrededor del fénix.', draw: (ctx, w, h) => {
          ctx.fillStyle = '#f39c12';
          // Llamas alrededor
          for (let i=0; i<10; i++) {
            const x = 70 + Math.random()*300;
            const y = h/2-60 + Math.random()*120;
            ctx.beginPath();
            ctx.arc(x, y, 3+Math.random()*5, 0, Math.PI*2);
            ctx.fill();
          }
          ctx.fillStyle = '#e74c3c60';
          for (let i=0; i<6; i++) {
            const x = 80 + Math.random()*250;
            const y = h/2-50 + Math.random()*100;
            ctx.beginPath();
            ctx.arc(x, y, 5+Math.random()*8, 0, Math.PI*2);
            ctx.fill();
          }
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  }
];

if (typeof module !== 'undefined') module.exports = drawings;
