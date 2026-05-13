function enviarDiagnostico(){

    // =========================
    // OBTENER DATOS DEL FORMULARIO
    // =========================

    const tipo =
    document.getElementById("tipo").value;

    const problema =
    document.getElementById("problema").value;

    const detalle =
    document.getElementById("detalle").value.trim();

    const contenedor =
    document.getElementById("resultado-diagnostico");

    // =========================
    // BASE DE DATOS DEL DIAGNÓSTICO
    // =========================

    const diagnosticos = {

        "No enciende":{

            titulo:"⚡ Problema de Energía",

            icono:"🔌",

            causas:[
                "Fuente de poder dañada.",
                "Batería descargada o defectuosa.",
                "Fallo en el botón de encendido.",
                "Problema interno en placa madre."
            ],

            sugerencia:
            "Prueba otro cargador o conexión eléctrica antes de realizar una revisión técnica."

        },

        "Lento":{

            titulo:"🐌 Rendimiento Bajo",

            icono:"💻",

            causas:[
                "Disco duro saturado.",
                "Programas ejecutándose en segundo plano.",
                "Falta de mantenimiento físico.",
                "Poca memoria RAM."
            ],

            sugerencia:
            "Se recomienda optimización completa y posible actualización a SSD."

        },

        "Virus":{

            titulo:"🛡️ Amenaza Detectada",

            icono:"🚨",

            causas:[
                "Malware activo.",
                "Publicidad invasiva.",
                "Archivos sospechosos.",
                "Descargas inseguras."
            ],

            sugerencia:
            "Evita instalar programas desconocidos y realiza un escaneo profundo."

        },

        "Pantalla azul":{

            titulo:"🔵 Error Crítico",

            icono:"⚠️",

            causas:[
                "Memoria RAM defectuosa.",
                "Drivers corruptos.",
                "Problema en el disco duro.",
                "Fallo de temperatura."
            ],

            sugerencia:
            "Se recomienda diagnóstico técnico especializado para evitar pérdida de datos."

        },

        "Internet":{

            titulo:"🌐 Problema de Red",

            icono:"📡",

            causas:[
                "Cable de red dañado.",
                "Configuración IP incorrecta.",
                "Router saturado.",
                "Drivers de red desactualizados."
            ],

            sugerencia:
            "Reinicia el router y verifica las conexiones físicas."

        },

        "Atasco de papel":{

            titulo:"📄 Falla Mecánica",

            icono:"🖨️",

            causas:[
                "Papel mal colocado.",
                "Rodillos sucios.",
                "Sensor bloqueado.",
                "Exceso de hojas."
            ],

            sugerencia:
            "Retira el papel lentamente y revisa los rodillos internos."

        },

        "Mala calidad de impresión":{

            titulo:"🖨️ Problema de Impresión",

            icono:"🎨",

            causas:[
                "Tinta baja.",
                "Cabezales obstruidos.",
                "Papel incorrecto.",
                "Configuración de impresión incorrecta."
            ],

            sugerencia:
            "Realiza limpieza de cabezales y utiliza papel compatible."

        },

        "Error de conexión":{

            titulo:"🔌 Error de Conexión",

            icono:"⚙️",

            causas:[
                "Cable USB defectuoso.",
                "Driver incorrecto.",
                "Puerto USB dañado.",
                "Problema de reconocimiento."
            ],

            sugerencia:
            "Prueba otro puerto USB o reinstala el controlador."

        }

    };

    // =========================
    // OBTENER INFORMACIÓN
    // =========================

    const info =
    diagnosticos[problema];

    // =========================
    // GENERAR LISTA HTML
    // =========================

    const listaCausas =
    info.causas.map(causa =>
        `<li>${causa}</li>`
    ).join("");

    // =========================
    // MENSAJE WHATSAPP
    // =========================

    const mensajeWhatsApp =
`Hola, realicé el diagnóstico web.%0A
━━━━━━━━━━━━━━━%0A
💻 Equipo: ${tipo}%0A
⚠️ Problema: ${problema}%0A
📝 Detalle: ${detalle || "Sin detalles adicionales"}%0A
━━━━━━━━━━━━━━━`;

    // =========================
    // MOSTRAR RESULTADO
    // =========================

    contenedor.innerHTML = `

    <div class="resultado-box">

        <div style="
            display:flex;
            align-items:center;
            gap:12px;
            margin-bottom:18px;
        ">

            <div style="
                width:60px;
                height:60px;
                border-radius:18px;
                background:rgba(0,217,255,0.12);
                display:flex;
                align-items:center;
                justify-content:center;
                font-size:28px;
                border:1px solid rgba(0,217,255,0.25);
            ">
                ${info.icono}
            </div>

            <div>

                <h3 style="
                    margin:0;
                    color:#00d9ff;
                    font-size:24px;
                ">
                    ${info.titulo}
                </h3>

                <span style="
                    color:#bcbcbc;
                    font-size:14px;
                ">
                    Diagnóstico inteligente generado
                </span>

            </div>

        </div>

        <div style="
            background:rgba(255,255,255,0.04);
            border-radius:16px;
            padding:18px;
            margin-bottom:18px;
            border:1px solid rgba(255,255,255,0.05);
        ">

            <p style="
                margin-bottom:12px;
                color:#ffffff;
                font-weight:600;
            ">
                Posibles causas detectadas:
            </p>

            <ul style="
                padding-left:20px;
                line-height:1.9;
                color:#d8d8d8;
            ">
                ${listaCausas}
            </ul>

        </div>

        <div style="
            background:rgba(0,217,255,0.08);
            border-left:4px solid #00d9ff;
            padding:18px;
            border-radius:14px;
            margin-bottom:22px;
        ">

            <p style="
                margin:0;
                line-height:1.8;
                color:#e5e5e5;
            ">

                <strong style="color:#00d9ff;">
                    Sugerencia Técnica:
                </strong>

                <br>

                ${info.sugerencia}

            </p>

        </div>

        <a href="https://wa.me/51924489650?text=${mensajeWhatsApp}"
        target="_blank"
        class="btn btn-primary"
        style="
            width:100%;
            text-align:center;
            display:flex;
            justify-content:center;
            align-items:center;
            gap:10px;
        ">

            🚀 Enviar Diagnóstico por WhatsApp

        </a>

    </div>

    `;

    // =========================
    // EFECTO SCROLL SUAVE
    // =========================

    contenedor.scrollIntoView({
        behavior:"smooth",
        block:"center"
    });

}