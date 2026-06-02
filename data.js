// ============= data.js - Estilo LÁPIZ REALISTA (12 dibujos) =============
const drawings = [
  // 1. MANZANA - Bodegón con sombreado a lápiz
  {
    id: 'manzana',
    title: 'Manzana realista',
    category: 'simple',
    difficulty: 2,
    icon: '🍎',
    steps: [
      { text: 'Dibuja un <strong>círculo imperfecto</strong> con trazos suaves de lápiz, como boceto inicial.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.25;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1.5;
          ctx.lineCap = 'round';
          // Línea irregular a mano alzada
          ctx.beginPath();
          for (let i=0; i<=20; i++) {
            const angle = (i/20)*Math.PI*2;
            const rr = r + (Math.random()-0.5)*4;
            const x = cx + rr*Math.cos(angle);
            const y = cy + rr*Math.sin(angle);
            if (i===0) ctx.moveTo(x,y);
            else ctx.lineTo(x,y);
          }
          ctx.closePath();
          ctx.stroke();
      }},
      { text: 'Añade el <strong>hueco del tallo</strong> con una pequeña curva en la parte superior.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-25;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(cx, cy, 6, Math.PI*1.2, Math.PI*1.8);
          ctx.stroke();
          // Tallo
          ctx.beginPath();
          ctx.moveTo(cx-2, cy-2);
          ctx.lineTo(cx+3, cy-12);
          ctx.stroke();
      }},
      { text: 'Dibuja el <strong>sombreado</strong> de la manzana con líneas curvas paralelas (tramado).', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 0.8;
          // Sombreado en la parte inferior derecha
          for (let i=0; i<15; i++) {
            const angle = Math.PI*0.3 + Math.random()*0.3;
            const dist = 20 + Math.random()*30;
            const x = cx + dist*Math.cos(angle);
            const y = cy + dist*Math.sin(angle);
            const len = 8 + Math.random()*12;
            const dir = angle + Math.PI/2 + (Math.random()-0.5)*0.5;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + len*Math.cos(dir), y + len*Math.sin(dir));
            ctx.stroke();
          }
      }},
      { text: 'Añade <strong>reflejos de luz</strong> con zonas sin sombrear y un toque de blanco.', draw: (ctx, w, h) => {
          const cx = w/2-15, cy = h/2-10;
          ctx.fillStyle = '#ffffff40';
          ctx.beginPath();
          ctx.ellipse(cx, cy, 10, 7, -0.3, 0, Math.PI*2);
          ctx.fill();
          // Difuminado suave alrededor
          ctx.fillStyle = '#ffffff20';
          ctx.beginPath();
          ctx.ellipse(cx-5, cy-3, 15, 10, -0.3, 0, Math.PI*2);
          ctx.fill();
      }},
      { text: 'Refuerza el <strong>contorno</strong> con líneas más oscuras en las zonas de sombra.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.25;
          ctx.strokeStyle = '#1a1a2e';
          ctx.lineWidth = 2;
          // Sombra más intensa en la parte inferior izquierda
          ctx.beginPath();
          ctx.arc(cx-5, cy+10, r*0.8, Math.PI*0.5, Math.PI*1.2);
          ctx.stroke();
          // Toque final
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(cx+10, cy-10, r*0.5, Math.PI*1.8, Math.PI*2.2);
          ctx.stroke();
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },

  // 2. OJO HUMANO - Retrato realista a lápiz
  {
    id: 'ojo',
    title: 'Ojo humano realista',
    category: 'intermedio',
    difficulty: 4,
    icon: '👁️',
    steps: [
      { text: 'Dibuja la <strong>forma del ojo</strong> con una almendra irregular (bordes suaves).', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(cx-40, cy-5);
          ctx.bezierCurveTo(cx-20, cy-25, cx+20, cy-25, cx+40, cy-5);
          ctx.bezierCurveTo(cx+20, cy+15, cx-20, cy+15, cx-40, cy-5);
          ctx.stroke();
      }},
      { text: 'Dibuja el <strong>iris</strong> y la <strong>pupila</strong> con círculos concéntricos.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2;
          // Iris
          ctx.fillStyle = '#34495e';
          ctx.beginPath();
          ctx.arc(cx+5, cy, 18, 0, Math.PI*2);
          ctx.fill();
          // Pupila
          ctx.fillStyle = '#1a1a2e';
          ctx.beginPath();
          ctx.arc(cx+5, cy, 9, 0, Math.PI*2);
          ctx.fill();
      }},
      { text: 'Añade <strong>reflejos</strong> en el ojo (círculos blancos) y sombra en el párpado superior.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2;
          // Reflejo principal
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(cx+10, cy-8, 5, 0, Math.PI*2);
          ctx.fill();
          // Reflejo secundario
          ctx.beginPath();
          ctx.arc(cx+2, cy+6, 2.5, 0, Math.PI*2);
          ctx.fill();
          // Sombra párpado superior
          ctx.fillStyle = '#2c3e5020';
          ctx.beginPath();
          ctx.ellipse(cx-10, cy-18, 35, 8, 0.1, 0, Math.PI*2);
          ctx.fill();
      }},
      { text: 'Dibuja las <strong>pestañas</strong> con trazos curvos y finos desde el borde del párpado.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1;
          for (let i=0; i<15; i++) {
            const angle = -0.5 + i*0.1;
            const x = cx-30 + i*4 + Math.random()*2;
            const y = cy-15 + Math.sin(angle)*10;
            const len = 10 + Math.random()*12;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.quadraticCurveTo(x+5, y-len*0.6, x+8, y-len);
            ctx.stroke();
          }
      }},
      { text: 'Refuerza <strong>sombras y detalles</strong> para dar profundidad realista.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2;
          // Sombra debajo del ojo
          ctx.fillStyle = '#2c3e5015';
          ctx.beginPath();
          ctx.ellipse(cx+5, cy+12, 30, 6, 0, 0, Math.PI*2);
          ctx.fill();
          // Líneas de expresión
          ctx.strokeStyle = '#2c3e5030';
          ctx.lineWidth = 0.5;
          for (let i=0; i<5; i++) {
            const x = cx-25 + i*12;
            ctx.beginPath();
            ctx.moveTo(x, cy-22);
            ctx.lineTo(x+3, cy-26);
            ctx.stroke();
          }
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },

  // 3. PAISAJE DE MONTAÑA - Con textura de lápiz y nubes
  {
    id: 'paisaje',
    title: 'Paisaje de montaña (lápiz)',
    category: 'simple',
    difficulty: 2,
    icon: '🏔️',
    steps: [
      { text: 'Dibuja una <strong>línea del horizonte</strong> con trazo suave horizontal.', draw: (ctx, w, h) => {
          const y = h*0.6;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(0, y);
          for (let x=0; x<w; x+=5) {
            ctx.lineTo(x, y + (Math.random()-0.5)*2);
          }
          ctx.stroke();
      }},
      { text: 'Dibuja las <strong>montañas</strong> con triángulos imperfectos y textura de lápiz.', draw: (ctx, w, h) => {
          const baseY = h*0.6;
          ctx.fillStyle = '#2c3e5030';
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1.2;
          // Montaña izquierda
          ctx.beginPath();
          ctx.moveTo(-10, baseY);
          for (let x=-10; x<250; x+=3) {
            const y = baseY - (x-120)*(x-120)/1000 - 30;
            ctx.lineTo(x, y + (Math.random()-0.5)*4);
          }
          ctx.lineTo(250, baseY);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          // Montaña derecha
          ctx.beginPath();
          ctx.moveTo(200, baseY);
          for (let x=200; x<w+10; x+=3) {
            const y = baseY - (x-350)*(x-350)/1200 - 50;
            ctx.lineTo(x, y + (Math.random()-0.5)*4);
          }
          ctx.lineTo(w+10, baseY);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
      }},
      { text: 'Añade <strong>árboles</strong> con trazos verticales y triángulos en la base.', draw: (ctx, w, h) => {
          const baseY = h*0.6;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1;
          for (let i=0; i<8; i++) {
            const x = 30 + i*50 + Math.random()*20;
            const hTree = 30 + Math.random()*40;
            // Tronco
            ctx.beginPath();
            ctx.moveTo(x, baseY);
            ctx.lineTo(x, baseY-hTree*0.3);
            ctx.stroke();
            // Copa (triángulo irregular)
            ctx.beginPath();
            ctx.moveTo(x-15+Math.random()*5, baseY-hTree*0.3);
            ctx.lineTo(x+15+Math.random()*5, baseY-hTree*0.3);
            ctx.lineTo(x+Math.random()*5, baseY-hTree);
            ctx.closePath();
            ctx.stroke();
          }
      }},
      { text: 'Dibuja <strong>nubes</strong> con círculos suaves y difuminados.', draw: (ctx, w, h) => {
          ctx.fillStyle = '#2c3e5010';
          ctx.strokeStyle = '#2c3e5030';
          ctx.lineWidth = 0.8;
          for (let i=0; i<3; i++) {
            const cx = 100 + i*150;
            const cy = 60 + Math.random()*40;
            ctx.beginPath();
            ctx.ellipse(cx, cy, 40, 15, 0, 0, Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.ellipse(cx+30, cy+5, 35, 12, 0.2, 0, Math.PI*2);
            ctx.fill();
            ctx.stroke();
          }
      }},
      { text: 'Añade <strong>sombras</strong> en las montañas y textura de hierba con líneas cortas.', draw: (ctx, w, h) => {
          const baseY = h*0.6;
          ctx.strokeStyle = '#2c3e5020';
          ctx.lineWidth = 0.5;
          // Hierba
          for (let i=0; i<100; i++) {
            const x = Math.random()*w;
            const y = baseY + Math.random()*(h-baseY);
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x+2, y-5);
            ctx.stroke();
          }
          // Sombra en base montaña
          ctx.fillStyle = '#2c3e1515';
          ctx.beginPath();
          ctx.ellipse(250, baseY, 100, 10, 0, 0, Math.PI*2);
          ctx.fill();
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },

  // 4. CUBO 3D CON SOMBRAS - Perspectiva a lápiz
  {
    id: 'cubo',
    title: 'Cubo 3D a lápiz',
    category: 'geometrico',
    difficulty: 3,
    icon: '🔷',
    steps: [
      { text: 'Dibuja un <strong>cuadrado</strong> con trazos rectos pero ligeramente temblorosos (mano alzada).', draw: (ctx, w, h) => {
          const s = Math.min(w,h)*0.25;
          const cx = w/2, cy = h/2;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(cx-s, cy-s);
          ctx.lineTo(cx+s, cy-s+Math.random()*2);
          ctx.lineTo(cx+s+Math.random()*2, cy+s+Math.random()*2);
          ctx.lineTo(cx-s+Math.random()*2, cy+s+Math.random()*2);
          ctx.closePath();
          ctx.stroke();
      }},
      { text: 'Añade el <strong>cuadrado trasero</strong> en perspectiva, más pequeño y desplazado.', draw: (ctx, w, h) => {
          const s = Math.min(w,h)*0.2;
          const cx = w/2+25, cy = h/2-20;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(cx-s, cy-s);
          ctx.lineTo(cx+s, cy-s+Math.random()*2);
          ctx.lineTo(cx+s+Math.random()*2, cy+s+Math.random()*2);
          ctx.lineTo(cx-s+Math.random()*2, cy+s+Math.random()*2);
          ctx.closePath();
          ctx.stroke();
      }},
      { text: 'Conecta las <strong>esquinas</strong> con líneas rectas (aristas del cubo).', draw: (ctx, w, h) => {
          const s1 = Math.min(w,h)*0.25, s2 = Math.min(w,h)*0.2;
          const cx1 = w/2, cy1 = h/2;
          const cx2 = w/2+25, cy2 = h/2-20;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1.2;
          const pts = [
            [cx1-s1, cy1-s1, cx2-s2, cy2-s2],
            [cx1+s1, cy1-s1, cx2+s2, cy2-s2],
            [cx1-s1, cy1+s1, cx2-s2, cy2+s2],
            [cx1+s1, cy1+s1, cx2+s2, cy2+s2]
          ];
          pts.forEach(([x1,y1,x2,y2]) => {
            ctx.beginPath();
            ctx.moveTo(x1,y1);
            ctx.lineTo(x2,y2);
            ctx.stroke();
          });
      }},
      { text: 'Sombrea las <strong>caras laterales</strong> con tramado diagonal suave.', draw: (ctx, w, h) => {
          const s1 = Math.min(w,h)*0.25;
          const cx1 = w/2, cy1 = h/2;
          // Cara derecha
          ctx.strokeStyle = '#2c3e5020';
          ctx.lineWidth = 0.8;
          for (let i=0; i<20; i++) {
            const x = cx1 + s1*0.5 + Math.random()*s1*0.8;
            const y = cy1 - s1 + Math.random()*s1*2;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x+6, y+6);
            ctx.stroke();
          }
          // Cara superior
          for (let i=0; i<15; i++) {
            const x = cx1 - s1 + Math.random()*s1*1.5;
            const y = cy1 - s1 + Math.random()*s1*0.5;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x+6, y+6);
            ctx.stroke();
          }
      }},
      { text: 'Añade <strong>sombra proyectada</strong> en el suelo con difuminado.', draw: (ctx, w, h) => {
          const s1 = Math.min(w,h)*0.25;
          const cx1 = w/2, cy1 = h/2;
          ctx.fillStyle = '#2c3e1510';
          ctx.beginPath();
          ctx.moveTo(cx1+s1, cy1+s1);
          ctx.lineTo(cx1+s1+20, cy1+s1+10);
          ctx.lineTo(cx1-s1+20, cy1+s1+10);
          ctx.lineTo(cx1-s1, cy1+s1);
          ctx.closePath();
          ctx.fill();
          // Difuminado
          ctx.fillStyle = '#2c3e1505';
          ctx.beginPath();
          ctx.ellipse(cx1+10, cy1+s1+15, 40, 8, 0.1, 0, Math.PI*2);
          ctx.fill();
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },

  // 5. ROSA - Flor detallada con pétalos y sombras
  {
    id: 'rosa',
    title: 'Rosa a lápiz',
    category: 'intermedio',
    difficulty: 4,
    icon: '🌹',
    steps: [
      { text: 'Dibuja un <strong>círculo central</strong> para el corazón de la rosa, con trazos en espiral.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-10;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1;
          ctx.beginPath();
          for (let i=0; i<50; i++) {
            const angle = i*0.3;
            const r = 3 + i*0.3;
            const x = cx + r*Math.cos(angle);
            const y = cy + r*Math.sin(angle);
            if (i===0) ctx.moveTo(x,y);
            else ctx.lineTo(x,y);
          }
          ctx.stroke();
      }},
      { text: 'Dibuja los <strong>pétalos internos</strong> con formas curvas superpuestas.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-10;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1.2;
          for (let i=0; i<5; i++) {
            const angle = i*1.2566;
            const x = cx + 18*Math.cos(angle);
            const y = cy + 18*Math.sin(angle);
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.bezierCurveTo(x-10, y-10, x+10, y-20, x, y-22);
            ctx.bezierCurveTo(x-10, y-20, x-10, y-10, cx, cy);
            ctx.stroke();
          }
      }},
      { text: 'Añade <strong>pétalos externos</strong> más grandes y abiertos.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-10;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1;
          for (let i=0; i<5; i++) {
            const angle = i*1.2566 + 0.3;
            const x = cx + 32*Math.cos(angle);
            const y = cy + 32*Math.sin(angle);
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.bezierCurveTo(x-18, y-15, x+5, y-30, x, y-32);
            ctx.bezierCurveTo(x-15, y-28, x-18, y-15, cx, cy);
            ctx.stroke();
          }
      }},
      { text: 'Dibuja el <strong>tallo</strong> y las <strong>hojas</strong> con líneas curvas y venas.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-10;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(cx, cy+20);
          ctx.quadraticCurveTo(cx+5, cy+50, cx-3, cy+90);
          ctx.stroke();
          // Hoja izquierda
          ctx.beginPath();
          ctx.moveTo(cx-5, cy+45);
          ctx.bezierCurveTo(cx-25, cy+40, cx-35, cy+55, cx-30, cy+60);
          ctx.bezierCurveTo(cx-20, cy+65, cx-5, cy+55, cx-5, cy+45);
          ctx.stroke();
          // Vena
          ctx.beginPath();
          ctx.moveTo(cx-5, cy+45);
          ctx.lineTo(cx-25, cy+55);
          ctx.stroke();
          // Hoja derecha
          ctx.beginPath();
          ctx.moveTo(cx+5, cy+65);
          ctx.bezierCurveTo(cx+25, cy+60, cx+35, cy+75, cx+30, cy+80);
          ctx.bezierCurveTo(cx+20, cy+85, cx+5, cy+75, cx+5, cy+65);
          ctx.stroke();
      }},
      { text: 'Añade <strong>sombras</strong> con tramado en los pétalos inferiores y en el tallo.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-10;
          ctx.strokeStyle = '#2c3e5020';
          ctx.lineWidth = 0.8;
          // Sombra en pétalos
          for (let i=0; i<30; i++) {
            const angle = Math.random()*Math.PI*2;
            const r = 25 + Math.random()*10;
            const x = cx + r*Math.cos(angle);
            const y = cy + r*Math.sin(angle);
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x+4, y+4);
            ctx.stroke();
          }
          // Sombra en tallo
          ctx.fillStyle = '#2c3e1505';
          ctx.beginPath();
          ctx.ellipse(cx, cy+85, 15, 5, 0, 0, Math.PI*2);
          ctx.fill();
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },

  // 6. MANO - Estudio anatómico a lápiz
  {
    id: 'mano',
    title: 'Mano realista',
    category: 'avanzado',
    difficulty: 5,
    icon: '✋',
    steps: [
      { text: 'Dibuja la <strong>palma</strong> con una forma ovalada irregular.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-10;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.ellipse(cx, cy, 30, 40, 0.1, 0, Math.PI*2);
          ctx.stroke();
      }},
      { text: 'Dibuja los <strong>5 dedos</strong> como cilindros alargados con articulaciones.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-10;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1;
          const dedos = [
            [cx-20, cy-35, 8, 30],  // meñique
            [cx-10, cy-40, 10, 35], // anular
            [cx+2, cy-43, 12, 40],  // medio
            [cx+15, cy-40, 10, 35], // índice
            [cx+28, cy-35, 8, 30]   // pulgar
          ];
          dedos.forEach(([x, y, ancho, largo]) => {
            ctx.beginPath();
            ctx.ellipse(x, y, ancho/2, largo/2, 0, 0, Math.PI*2);
            ctx.stroke();
          });
      }},
      { text: 'Añade las <strong>uñas</strong> con pequeñas curvas en las puntas de los dedos.', draw: (ctx, w, h) => {
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 0.8;
          const uñas = [
            {x: w/2-20, y: h/2-55, ang: 0.2},
            {x: w/2-10, y: h/2-62, ang: 0.1},
            {x: w/2+2, y: h/2-68, ang: 0},
            {x: w/2+15, y: h/2-62, ang: -0.1},
            {x: w/2+28, y: h/2-55, ang: -0.2}
          ];
          uñas.forEach(u => {
            ctx.beginPath();
            ctx.ellipse(u.x, u.y, 4, 3, u.ang, 0, Math.PI*2);
            ctx.stroke();
          });
      }},
      { text: 'Sombrea con <strong>tramado</strong> las zonas de sombra entre los dedos y la palma.', draw: (ctx, w, h) => {
          ctx.strokeStyle = '#2c3e5020';
          ctx.lineWidth = 0.5;
          for (let i=0; i<50; i++) {
            const x = w/2-20 + Math.random()*40;
            const y = h/2-30 + Math.random()*60;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x+3, y+3);
            ctx.stroke();
          }
      }},
      { text: 'Refuerza los <strong>contornos</strong> con líneas más oscuras en las zonas clave.', draw: (ctx, w, h) => {
          ctx.strokeStyle = '#1a1a2e';
          ctx.lineWidth = 1.5;
          // Contorno de la palma
          ctx.beginPath();
          ctx.ellipse(w/2, h/2-10, 30, 40, 0.1, 0, Math.PI*2);
          ctx.stroke();
          // Líneas de los dedos
          for (let i=0; i<5; i++) {
            const x = w/2-20 + i*12;
            ctx.beginPath();
            ctx.moveTo(x, h/2-40);
            ctx.lineTo(x+3, h/2-50);
            ctx.stroke();
          }
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },

  // 7. GATO - Animal doméstico con textura de pelo
  {
    id: 'gato',
    title: 'Gato realista',
    category: 'intermedio',
    difficulty: 4,
    icon: '🐱',
    steps: [
      { text: 'Dibuja la <strong>cabeza</strong> con un círculo imperfecto y las orejas triangulares.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-20;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(cx, cy, 35, 0, Math.PI*2);
          ctx.stroke();
          // Orejas
          ctx.beginPath();
          ctx.moveTo(cx-25, cy-25);
          ctx.lineTo(cx-35, cy-50);
          ctx.lineTo(cx-10, cy-30);
          ctx.closePath();
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(cx+25, cy-25);
          ctx.lineTo(cx+35, cy-50);
          ctx.lineTo(cx+10, cy-30);
          ctx.closePath();
          ctx.stroke();
      }},
      { text: 'Dibuja los <strong>ojos</strong> almendrados y la nariz triangular.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-25;
          // Ojos
          ctx.fillStyle = '#2c3e50';
          ctx.beginPath();
          ctx.ellipse(cx-15, cy, 8, 6, 0.1, 0, Math.PI*2);
          ctx.fill();
          ctx.beginPath();
          ctx.ellipse(cx+15, cy, 8, 6, -0.1, 0, Math.PI*2);
          ctx.fill();
          // Pupilas
          ctx.fillStyle = '#1a1a2e';
          ctx.beginPath();
          ctx.arc(cx-15, cy, 3, 0, Math.PI*2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(cx+15, cy, 3, 0, Math.PI*2);
          ctx.fill();
          // Nariz
          ctx.beginPath();
          ctx.moveTo(cx, cy+5);
          ctx.lineTo(cx-4, cy+12);
          ctx.lineTo(cx+4, cy+12);
          ctx.closePath();
          ctx.stroke();
      }},
      { text: 'Añade el <strong>cuerpo</strong> con forma ovalada y patas simples.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2+10;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.ellipse(cx, cy+15, 40, 25, 0, 0, Math.PI*2);
          ctx.stroke();
          // Patas
          ctx.beginPath();
          ctx.moveTo(cx-20, cy+30);
          ctx.lineTo(cx-22, cy+55);
          ctx.moveTo(cx+20, cy+30);
          ctx.lineTo(cx+22, cy+55);
          ctx.stroke();
      }},
      { text: 'Dibuja el <strong>pelo</strong> con trazos cortos y rápidos en la cabeza y el cuerpo.', draw: (ctx, w, h) => {
          ctx.strokeStyle = '#2c3e5040';
          ctx.lineWidth = 0.5;
          for (let i=0; i<100; i++) {
            const cx = w/2, cy = h/2-20;
            const angle = Math.random()*Math.PI*2;
            const r = 10 + Math.random()*30;
            const x = cx + r*Math.cos(angle);
            const y = cy + r*Math.sin(angle);
            const dx = Math.cos(angle)*4;
            const dy = Math.sin(angle)*4;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x+dx, y+dy);
            ctx.stroke();
          }
      }},
      { text: 'Añade <strong>bigotes</strong> y sombra suave debajo del gato.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-10;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 0.8;
          // Bigotes izquierdos
          for (let i=0; i<4; i++) {
            ctx.beginPath();
            ctx.moveTo(cx-10, cy+8);
            ctx.lineTo(cx-30-i*3, cy+5-i*2);
            ctx.stroke();
          }
          // Bigotes derechos
          for (let i=0; i<4; i++) {
            ctx.beginPath();
            ctx.moveTo(cx+10, cy+8);
            ctx.lineTo(cx+30+i*3, cy+5-i*2);
            ctx.stroke();
          }
          // Sombra
          ctx.fillStyle = '#2c3e1005';
          ctx.beginPath();
          ctx.ellipse(cx, cy+55, 30, 8, 0, 0, Math.PI*2);
          ctx.fill();
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },

  // 8. CASA DE CAMPO - Perspectiva simple a lápiz
  {
    id: 'casa',
    title: 'Casa de campo',
    category: 'simple',
    difficulty: 3,
    icon: '🏡',
    steps: [
      { text: 'Dibuja el <strong>cuerpo de la casa</strong> con un rectángulo de líneas irregulares.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2+20;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(cx-40, cy-20);
          ctx.lineTo(cx+40, cy-20+Math.random()*2);
          ctx.lineTo(cx+40, cy+30+Math.random()*2);
          ctx.lineTo(cx-40, cy+30+Math.random()*2);
          ctx.closePath();
          ctx.stroke();
      }},
      { text: 'Añade el <strong>tejado</strong> triangular con líneas de tejas.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2+20;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(cx-45, cy-20);
          ctx.lineTo(cx, cy-55);
          ctx.lineTo(cx+45, cy-20+Math.random()*2);
          ctx.closePath();
          ctx.stroke();
          // Tejas (líneas horizontales)
          for (let i=1; i<4; i++) {
            const y = cy-20 - i*10;
            ctx.beginPath();
            ctx.moveTo(cx-40+i*5, y);
            ctx.lineTo(cx+40-i*5, y+Math.random()*2);
            ctx.stroke();
          }
      }},
      { text: 'Dibuja la <strong>puerta</strong> y las <strong>ventanas</strong> con rectángulos pequeños.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2+20;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1;
          // Puerta
          ctx.strokeRect(cx-8, cy+5, 16, 25);
          // Ventana izquierda
          ctx.strokeRect(cx-30, cy-10, 15, 15);
          // Ventana derecha
          ctx.strokeRect(cx+15, cy-10, 15, 15);
      }},
      { text: 'Añade <strong>chimenea</strong> en el tejado y una cerca de madera.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2+20;
          // Chimenea
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1.2;
          ctx.strokeRect(cx+15, cy-50, 10, 20);
          // Humo (círculos)
          ctx.strokeStyle = '#2c3e5030';
          ctx.lineWidth = 0.5;
          for (let i=0; i<5; i++) {
            ctx.beginPath();
            ctx.arc(cx+20, cy-50-i*8, 5+i*3, 0, Math.PI*2);
            ctx.stroke();
          }
          // Cerca (líneas verticales)
          for (let i=0; i<6; i++) {
            const x = cx-45 + i*18;
            ctx.beginPath();
            ctx.moveTo(x, cy+30);
            ctx.lineTo(x, cy+50);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x-5, cy+38);
            ctx.lineTo(x+5, cy+38);
            ctx.stroke();
          }
      }},
      { text: 'Sombrea el <strong>tejado</strong> y añade textura de hierba en la base.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2+20;
          // Sombra tejado
          ctx.fillStyle = '#2c3e1515';
          ctx.beginPath();
          ctx.moveTo(cx-45, cy-20);
          ctx.lineTo(cx, cy-55);
          ctx.lineTo(cx+45, cy-20);
          ctx.closePath();
          ctx.fill();
          // Hierba
          ctx.strokeStyle = '#2c3e3020';
          ctx.lineWidth = 0.5;
          for (let i=0; i<40; i++) {
            const x = cx-50 + Math.random()*100;
            const y = cy+30 + Math.random()*15;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x+2, y-5);
            ctx.stroke();
          }
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },

  // 9. BÚHO - Ave nocturna con plumas detalladas
  {
    id: 'buho',
    title: 'Búho realista',
    category: 'avanzado',
    difficulty: 5,
    icon: '🦉',
    steps: [
      { text: 'Dibuja el <strong>cuerpo</strong> con forma de óvalo irregular (plumas suaves).', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2+10;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.ellipse(cx, cy, 40, 30, 0, 0, Math.PI*2);
          ctx.stroke();
      }},
      { text: 'Dibuja la <strong>cabeza</strong> grande y los discos faciales en forma de corazón.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-15;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.arc(cx, cy, 25, 0, Math.PI*2);
          ctx.stroke();
          // Discos faciales
          ctx.beginPath();
          ctx.ellipse(cx-12, cy-5, 12, 15, 0.2, 0, Math.PI*2);
          ctx.stroke();
          ctx.beginPath();
          ctx.ellipse(cx+12, cy-5, 12, 15, -0.2, 0, Math.PI*2);
          ctx.stroke();
      }},
      { text: 'Añade <strong>ojos</strong> grandes con iris amarillo y pupilas negras.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2-18;
          // Iris
          ctx.fillStyle = '#f1c40f';
          ctx.beginPath();
          ctx.arc(cx-12, cy, 10, 0, Math.PI*2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(cx+12, cy, 10, 0, Math.PI*2);
          ctx.fill();
          // Pupilas
          ctx.fillStyle = '#1a1a2e';
          ctx.beginPath();
          ctx.arc(cx-12, cy, 5, 0, Math.PI*2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(cx+12, cy, 5, 0, Math.PI*2);
          ctx.fill();
      }},
      { text: 'Dibuja las <strong>plumas</strong> del pecho con líneas curvas y tramado.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2+10;
          ctx.strokeStyle = '#2c3e5030';
          ctx.lineWidth = 0.8;
          for (let i=0; i<20; i++) {
            const x = cx-20 + Math.random()*40;
            const y = cy-10 + Math.random()*20;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.quadraticCurveTo(x+3, y+8, x+6, y+4);
            ctx.stroke();
          }
      }},
      { text: 'Añade <strong>alas</strong> laterales y sombra en la base para dar volumen.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2+10;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1;
          // Ala izquierda
          ctx.beginPath();
          ctx.moveTo(cx-35, cy);
          ctx.bezierCurveTo(cx-50, cy-10, cx-55, cy+15, cx-35, cy+20);
          ctx.stroke();
          // Ala derecha
          ctx.beginPath();
          ctx.moveTo(cx+35, cy);
          ctx.bezierCurveTo(cx+50, cy-10, cx+55, cy+15, cx+35, cy+20);
          ctx.stroke();
          // Sombra
          ctx.fillStyle = '#2c3e1005';
          ctx.beginPath();
          ctx.ellipse(cx, cy+35, 35, 8, 0, 0, Math.PI*2);
          ctx.fill();
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },

  // 10. MÁNDALA - Patrón geométrico con líneas precisas a lápiz
  {
    id: 'mandala',
    title: 'Mándala a lápiz',
    category: 'geometrico',
    difficulty: 3,
    icon: '🕉️',
    steps: [
      { text: 'Dibuja un <strong>círculo</strong> con centro marcado por una cruz.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.3;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI*2);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(cx-10, cy); ctx.lineTo(cx+10, cy);
          ctx.moveTo(cx, cy-10); ctx.lineTo(cx, cy+10);
          ctx.stroke();
      }},
      { text: 'Dibuja <strong>8 líneas radiales</strong> a 45° desde el centro hasta el borde.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.3;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1;
          for (let i=0; i<8; i++) {
            const angle = i*Math.PI/4;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + r*Math.cos(angle), cy + r*Math.sin(angle));
            ctx.stroke();
          }
      }},
      { text: 'Añade <strong>círculos concéntricos</strong> a distancias regulares.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.3;
          ctx.strokeStyle = '#2c3e5060';
          ctx.lineWidth = 0.8;
          for (let rad of [r*0.3, r*0.5, r*0.7, r*0.9]) {
            ctx.beginPath();
            ctx.arc(cx, cy, rad, 0, Math.PI*2);
            ctx.stroke();
          }
      }},
      { text: 'Dibuja <strong>pétalos</strong> en forma de elipses sobre las líneas radiales.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.3;
          ctx.fillStyle = '#2c3e5010';
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1;
          for (let i=0; i<8; i++) {
            const angle = i*Math.PI/4;
            const x = cx + r*0.5*Math.cos(angle);
            const y = cy + r*0.5*Math.sin(angle);
            ctx.beginPath();
            ctx.ellipse(x, y, 12, 6, angle, 0, Math.PI*2);
            ctx.fill();
            ctx.stroke();
          }
      }},
      { text: 'Decora con <strong>triángulos</strong> y puntos en los espacios vacíos.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2, r = Math.min(w,h)*0.3;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 0.8;
          for (let i=0; i<8; i++) {
            const angle = i*Math.PI/4 + Math.PI/8;
            const x = cx + r*0.7*Math.cos(angle);
            const y = cy + r*0.7*Math.sin(angle);
            ctx.beginPath();
            ctx.moveTo(x, y-6);
            ctx.lineTo(x+5, y+4);
            ctx.lineTo(x-5, y+4);
            ctx.closePath();
            ctx.stroke();
          }
          for (let i=0; i<8; i++) {
            const angle = i*Math.PI/4;
            const x = cx + r*0.95*Math.cos(angle);
            const y = cy + r*0.95*Math.sin(angle);
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI*2);
            ctx.fill();
          }
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },

  // 11. DRAGÓN - Criatura fantástica con textura de escamas
  {
    id: 'dragon',
    title: 'Dragón chino',
    category: 'avanzado',
    difficulty: 5,
    icon: '🐲',
    steps: [
      { text: 'Dibuja el <strong>cuerpo serpenteante</strong> con una curva larga y ondulada.', draw: (ctx, w, h) => {
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 3;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(40, h/2+20);
          ctx.bezierCurveTo(120, h/2-50, 200, h/2+40, 300, h/2-20);
          ctx.bezierCurveTo(380, h/2-50, 440, h/2+10, 480, h/2);
          ctx.stroke();
      }},
      { text: 'Dibuja la <strong>cabeza</strong> con cuernos de ciervo y hocico alargado.', draw: (ctx, w, h) => {
          const cx = 40, cy = h/2+20;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(cx, cy-10, 18, 0, Math.PI*2);
          ctx.stroke();
          // Cuernos
          ctx.beginPath();
          ctx.moveTo(cx-5, cy-25);
          ctx.quadraticCurveTo(cx-15, cy-45, cx-25, cy-35);
          ctx.moveTo(cx+5, cy-25);
          ctx.quadraticCurveTo(cx+15, cy-45, cx+25, cy-35);
          ctx.stroke();
          // Hocico
          ctx.beginPath();
          ctx.moveTo(cx+10, cy-5);
          ctx.lineTo(cx+25, cy-5);
          ctx.lineTo(cx+20, cy+5);
          ctx.closePath();
          ctx.stroke();
      }},
      { text: 'Añade <strong>escamas</strong> con diamantes a lo largo del cuerpo.', draw: (ctx, w, h) => {
          ctx.strokeStyle = '#2c3e5040';
          ctx.lineWidth = 1;
          const pts = [[120, h/2-10], [180, h/2+15], [240, h/2-5], [300, h/2+10], [360, h/2-10], [420, h/2+5]];
          pts.forEach(([px,py]) => {
            ctx.beginPath();
            ctx.moveTo(px, py-8);
            ctx.lineTo(px+5, py);
            ctx.lineTo(px, py+8);
            ctx.lineTo(px-5, py);
            ctx.closePath();
            ctx.stroke();
          });
      }},
      { text: 'Dibuja las <strong>garras</strong> en las patas delanteras y traseras.', draw: (ctx, w, h) => {
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1.5;
          // Pata delantera
          ctx.beginPath();
          ctx.moveTo(140, h/2-5);
          ctx.lineTo(130, h/2+20);
          ctx.lineTo(125, h/2+15);
          ctx.moveTo(130, h/2+20);
          ctx.lineTo(135, h/2+15);
          ctx.stroke();
          // Pata trasera
          ctx.beginPath();
          ctx.moveTo(350, h/2+5);
          ctx.lineTo(340, h/2+25);
          ctx.lineTo(335, h/2+20);
          ctx.moveTo(340, h/2+25);
          ctx.lineTo(345, h/2+20);
          ctx.stroke();
      }},
      { text: 'Añade <strong>llamas</strong> alrededor de la cabeza y detalles finales de sombra.', draw: (ctx, w, h) => {
          const cx = 40, cy = h/2+20;
          ctx.strokeStyle = '#2c3e5030';
          ctx.lineWidth = 1;
          for (let i=0; i<8; i++) {
            const angle = Math.random()*Math.PI*2;
            const r = 20 + Math.random()*15;
            const x = cx + r*Math.cos(angle);
            const y = cy + r*Math.sin(angle);
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.quadraticCurveTo(x+10, y-10, x+15, y);
            ctx.stroke();
          }
          // Sombra
          ctx.fillStyle = '#2c3e1005';
          ctx.beginPath();
          ctx.ellipse(250, h/2+30, 80, 10, 0, 0, Math.PI*2);
          ctx.fill();
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  },

  // 12. AUTORRETRATO - Rostro humano con sombreado artístico
  {
    id: 'retrato',
    title: 'Retrato a lápiz',
    category: 'avanzado',
    difficulty: 5,
    icon: '🧑',
    steps: [
      { text: 'Dibuja un <strong>óvalo</strong> para la cara, con líneas suaves y asimétricas.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.ellipse(cx, cy, 35, 45, 0, 0, Math.PI*2);
          ctx.stroke();
      }},
      { text: 'Añade las <strong>guías</strong> de los ojos, nariz y boca con líneas horizontales.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2;
          ctx.strokeStyle = '#2c3e5040';
          ctx.lineWidth = 0.8;
          // Línea de ojos
          ctx.beginPath();
          ctx.moveTo(cx-30, cy-12);
          ctx.lineTo(cx+30, cy-12);
          ctx.stroke();
          // Línea de nariz
          ctx.beginPath();
          ctx.moveTo(cx-15, cy+8);
          ctx.lineTo(cx+15, cy+8);
          ctx.stroke();
          // Línea de boca
          ctx.beginPath();
          ctx.moveTo(cx-20, cy+20);
          ctx.lineTo(cx+20, cy+20);
          ctx.stroke();
      }},
      { text: 'Dibuja los <strong>ojos</strong> en forma de almendra, la nariz y la boca.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1.2;
          // Ojos
          ctx.beginPath();
          ctx.ellipse(cx-15, cy-12, 8, 5, 0, 0, Math.PI*2);
          ctx.stroke();
          ctx.beginPath();
          ctx.ellipse(cx+15, cy-12, 8, 5, 0, 0, Math.PI*2);
          ctx.stroke();
          // Pupilas
          ctx.fillStyle = '#1a1a2e';
          ctx.beginPath();
          ctx.arc(cx-15, cy-12, 3, 0, Math.PI*2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(cx+15, cy-12, 3, 0, Math.PI*2);
          ctx.fill();
          // Nariz
          ctx.beginPath();
          ctx.moveTo(cx, cy-2);
          ctx.lineTo(cx-4, cy+6);
          ctx.lineTo(cx+4, cy+6);
          ctx.closePath();
          ctx.stroke();
          // Boca
          ctx.beginPath();
          ctx.moveTo(cx-12, cy+20);
          ctx.quadraticCurveTo(cx, cy+26, cx+12, cy+20);
          ctx.stroke();
      }},
      { text: 'Sombrea el <strong>rostro</strong> con tramado suave en las mejillas y la frente.', draw: (ctx, w, h) => {
          ctx.strokeStyle = '#2c3e5020';
          ctx.lineWidth = 0.5;
          for (let i=0; i<60; i++) {
            const x = w/2-25 + Math.random()*50;
            const y = h/2-35 + Math.random()*60;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x+3, y+3);
            ctx.stroke();
          }
      }},
      { text: 'Añade <strong>cejas</strong>, cabello y detalles finales para dar realismo.', draw: (ctx, w, h) => {
          const cx = w/2, cy = h/2;
          ctx.strokeStyle = '#2c3e50';
          ctx.lineWidth = 1.2;
          // Cejas
          ctx.beginPath();
          ctx.moveTo(cx-22, cy-20);
          ctx.quadraticCurveTo(cx-15, cy-24, cx-8, cy-20);
          ctx.moveTo(cx+8, cy-20);
          ctx.quadraticCurveTo(cx+15, cy-24, cx+22, cy-20);
          ctx.stroke();
          // Cabello (líneas curvas)
          ctx.strokeStyle = '#2c3e5060';
          ctx.lineWidth = 0.8;
          for (let i=0; i<30; i++) {
            const x = cx-30 + Math.random()*60;
            const y = cy-40 + Math.random()*10;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.quadraticCurveTo(x+5, y-10, x+10, y);
            ctx.stroke();
          }
      }}
    ],
    drawFinal: function(ctx, w, h) {
      this.steps.forEach(step => step.draw(ctx, w, h));
    }
  }
];

if (typeof module !== 'undefined') module.exports = drawings;
