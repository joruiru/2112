// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "349baf43-9ade-49a8-86d0-24e3de3ce072";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    w_intro: new undum.SimpleSituation(
        "<h1>Prólogo</h1>\
        <p>¡Toc, toc!</p>\
        <p>Los golpes eran como sendas bombas que explotaban en el interior de\
        su cabeza. La maldita resaca solo podía significar una cosa: que\
        aún estaba vivo. ¿Por qué demonios seguía en este mundo?</p>\
        <p>Su carrera se había acabado. Y su plan de beber hasta quitarse la\
        vida ahora parece que tampoco había funcionado. ¡Hasta para eso era un\
        fracasado!</p>\
        <p>¡Toc, toc!</p>\
        <p>¿Qué dirán de él hoy los medios especializados? El día anterior los\
        había convocado a todos en una conferencia de prensa en la que iba a\
        hacer públicos sus últimos descubrimientos. Pero nada salió como pensaba.\
        Todos, absolutamente todos, se rieron de él. Delante de sus narices.\
        ¡De él! ¡De William Bafford, el más grande arqueólogo de su tiempo!</p>\
        <p>A estas horas, todo el mundo de la arqueología se estaría riendo de\
        sus descubrimientos. ¡Malditos necios! ¡No sabían ver las señales!\
        ¡Habían estado ahí, delante de sus narices, durante miles de años esperando\
        que alguien las interpretara!</p>\
        <p>Durante la conferencia les había mostrado las pruebas: desde los mayas\
        a los egipcios, desde los sumerios a la antigua China. Civilizaciones separadas\
        por miles de kilómetros y, lo más importante, miles de años entre ellas,\
        culturas que es totalmente imposible que hubieran tenido contacto unas\
        con otras y, sin embargo, en todas había encontrado los mismos símbolos.</p>\
        <p>Eso solo podía significar que todas esas civilizaciones tenían ancestros\
        comunes: lo que él había llamado Civilización Madre.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wintro2'>&gt; Continúa leyendo.</a></p>"
    ),
    wintro2: new undum.SimpleSituation(
        "<p>¡Toc, toc!</p>\
        <p>Sin embargo, el mayor descubrimiento arqueológico de la historia de la\
        humanidad, en vez de recibir elogios y aplausos, fue rechazado por toda\
        la comunidad científica. El auditorio se fue vaciando entre risas y burlas,\
        dejándole con la palabra en la boca. Se mofaban de él, hablando de alienígenas,\
        o incluso de la Atlántida. ¡No tenían ni puta idea de lo que hablaban!</p>\
        <p>Se quedó solo en la sala, mientras comprendía que su carrera se había\
        acabado. Le cortarían todas las subvenciones. Le rechazarían en todas las\
        asociaciones del gremio. Ninguna universidad querría tenerle dando clases\
        en sus aulas. Se levantó y fue a algún antro a emborracharse. Bebió y bebió.\
        Era lo único que recordaba.</p>\
        <p>¡Toc, toc!</p>\
        <p>¡Maldita sea! ¿Quién estaba llamando a la puerta? ¡No quería ver a nadie!</p>\
        <p>Al tratar de incorporarse, se dio cuenta de que estaba tirado en el suelo.\
        Se tambaleó. Todavía estaba borracho y la cabeza estaba a punto de estallarle.</p>\
        <p>¡Toc, toc!</p>\
        <p><br/></p>\
        <p class='transient'><a href='wintro3'>&gt; Abrir la maldita puerta.</a></p>\
        <p class='transient'><a href='wintro4'>&gt; Ir a la cama y olvidarse del mundo.</a></p>"
    ),
    wintro3: new undum.SimpleSituation(
        "<p>Hizo un esfuerzo por mantenerse en pie y se encaminó hacia la puerta.\
        La abrió y se encontró frente a un anciano de unos 70 años. Vestía ropas\
        caras y elegantes y portaba unas enormes gafas. En su mano derecha, sujetaba\
        un bastón de madera de roble, seguramente para ayudarse al caminar.</p>\
        <p>&#8212;¿Qué demonios quiere? &#8212;le espetó al anciano.</p>\
        <p>&#8212;Buenas tardes, señor Bafford. &#8212;contestó&#8212; Bonito aspecto.</p>\
        <p>Se miró y comprobó que tenía manchas de vómito en la ropa, y un lamparón en la\
        entrepierna que sólo podía significar una cosa.</p>\
        <p>&#8212;No quiero hablar con nadie. Márchese. &#8212;es lo único que acertó a decir.</p>\
        <p>Intentó cerrar la puerta, pero el anciano había puesto el bastón para impedirlo.</p>\
        <p>&#8212;Estoy aquí para ofrecerle un empleo. &#8212;dijo el anciano.</p>\
        <p>Atrajo su atención.</p>\
        <p>&#8212;Mi nombre es Hiddell Connor. Y tengo algunos símbolos muy antiguos en los\
        que me gustaría que trabajase.</p>\
        <p>&#8212;¿Qué clase de trabajo?</p>\
        <p>&#8212;Me gustaría poder explicárselo todo, pero este proyecto implica un alto\
        grado de confidencialidad.</p>\
        <p>&#8212;Entonces, ¿por qué debería aceptar un trabajo del que no sé nada?</p>\
        <p>&#8212;No tiene familia o amigos. En su escritorio hay demasiadas facturas sin\
        pagar. Y, por si fuera poco, después de su conferencia de ayer no le van a llover\
        las ofertas de trabajo. &#8212;Connor tenía preparada la respuesta&#8212; Pero\
        hay una razón aún más fuerte por la que debe aceptar el trabajo que le ofrezco.</p>\
        <p>&#8212;¿Cuál es?</p>\
        <p>&#8212;Que demuestre que sus teorías son ciertas.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wintro5'>&gt; Aceptar.</a></p>\
        <p class='transient'><a href='wintro6'>&gt; Declinar.</a></p>"
    ),
    wintro4: new undum.SimpleSituation(
        "<p>Hizo un esfuerzo por llegar a la cama y se dejó caer. ¡A la mierda quienquiera\
        que fuera el que llamaba a la puerta! ¡No quería ver a nadie!</p>\
        <p>¡Toc, toc!</p>\
        <p>Los ojos se le cerraron. Notaba como se iba sumiendo en un profundo sueño.</p>\
        <p>¡Toc, toc!</p>\
        <p>Pudo escuchar un par de toques más antes de perder la consciencia.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wintro7'>&gt; Continúa leyendo.</a></p>"
    ),    
    wintro5: new undum.SimpleSituation(
        "<p>&#8212;Está bien. Me ha convencido. &#8212;Su cara reflejaba ilusiones\
        renovadas.&#8212; ¿Cuándo empiezo? </p>\
        <p>Connor sacó un sobre marrón y se lo entregó.\
        <p>&#8212;Haga las maletas. Sale mañana. &#8212;La alegría por haber\
        adquirido un nuevo miembro para su equipo se reflejaba en el rostro de Connor&#8212;\
        Nos veremos en el Área 51.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap1h1'>&gt; Ir al Capítulo 1.</a></p>"
    ),    
    wintro6: new undum.SimpleSituation(
        "<p>&#8212;Es usted muy amable, señor Connor. &#8212;rehusó&#8212; Pero mi carrera\
        en la arqueología se terminó ayer. Aunque mis teorías fueran ciertas, ya nadie\
        me tomará en serio.</p>\
        <p>&#8212;¿Seguro? &#8212;Connor sacó unas fotografías del bolsillo interior de\
        la chaqueta y se las entregó.</p>\
        <p>Miró durante unos segundos las fotos. Trató de disimular la cambiante expresión\
        de su cara, pero parecía que Connor se había percatado de su emoción.</p>\
        <p>&#8212; Ya ha visto suficiente. ¿Qué me dice ahora, profesor Bafford? &#8212;le\
        preguntó mientras se volvía a guardar las fotografías.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wintro5'>&gt; Aceptar.</a></p>\
        <p class='transient'><a href='wintro11'>&gt; Declinar.</a></p>"
    ),    
    wintro7: new undum.SimpleSituation(
        "<p>No oyó cómo derribaron la puerta de su apartamento. Ni siquiera se despertó\
        cuando lo sacaron de la cama y lo cargaron en una furgoneta con las lunas tintadas.</p>\
        <p>Sólo reaccionó cuando un chorro de agua congelada le golpeó con fuerza.</p>\
        <p>Estaba completamente desnudo y tumbado en el sueño en posición fetal, protegiéndose\
        del agua.</p>\
        <p>&#8212;¡Pare, joder! ¡Pare! &#8212;gritaba, pero el militar que le apuntaba con\
        la manguera no le hizo ningún caso.</p>\
        <p>Cuando acabó, le dio ropa de su talla y le obligó a acompañarle, sin responder\
        ninguna de las preguntas que le hizo.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wintro8'>&gt; Continúa leyendo.</a></p>"
    ),    
    wintro8: new undum.SimpleSituation(
        "<p>Mientras avanzaba siguiendo a su guía, comprobó que se encontraba en el interior\
        de algún recinto del ejército, o eso esperaba.</p>\
        <p>El joven militar se detuvo ante una doble puerta de metal, en la que había un\
        cartel que rezaba \"Solo personal autorizado\".</p>\
        <p>&#8212;Es aquí. &#8212;le indicó&#8212; Adelante.</p>\
        <p>Entró en una sala de reuniones, presidida por una enorme mesa ovalada. Sentados\
        en cómodos sillones de piel, cuatro militares de alto rango fijaban sus duras miradas\
        sobre él. Un anciano vestido de civil, de unos 70 años, con barba y pelo totalmente\
        blancos, completaba el quinteto que le esperaba. Quedaba un sillón libre.</p>\
        <p>&#8212;Bienvenido, señor Bafford. &#8212;el que hablaba era el anciano&#8212; Lamento\
        profundamente las molestias que hemos podido causarle. Por favor, tome asiento.</p>\
        <p>&#8212;¿Quiénes son? ¿Qué quieren de mí? ¿Dónde estoy? &#8212;preguntó mientras se sentaba.</p>\
        <p>&#8212;Mi nombre es Hiddell Connor. Le hemos traido hasta aquí para ofrecerle un empleo.</p>\
        <p>&#8212;¿Qué clase de empleo?</p>\
        <p>&#8212;Tengo algunos símbolos muy antiguos en los que quisiera que trabajase.</p>\
        <p>&#8212;¿Qué tipo de símbolos son para que interesen al ejército?</p>\
        <p>&#8212;Me gustaría poder explicárselo todo, pero este proyecto implica un alto\
        grado de confidencialidad.</p>\
        <p>&#8212;Entonces, ¿por qué debería aceptar un trabajo del que no sé nada?</p>\
        <p>&#8212;No tiene familia o amigos. Hemos comprobado que tiene demasiadas facturas sin\
        pagar. Y, por si fuera poco, después de su conferencia de ayer no le van a llover\
        las ofertas de trabajo. &#8212;uno de los militares tenía preparada la respuesta.</p>\
        <p>&#8212; Pero hay una razón aún más fuerte por la que debe aceptar el trabajo\
        que le ofrezco.&#8212;volvía a ser Connor el que hablaba.</p>\
        <p>&#8212;¿Cuál es?</p>\
        <p>&#8212;Que demuestre que sus teorías son ciertas.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wintro9'>&gt; Aceptar.</a></p>\
        <p class='transient'><a href='wintro10'>&gt; Declinar.</a></p>"
    ),    
    wintro9: new undum.SimpleSituation(
        "<p>&#8212;Me han convencido. ¿Cuándo empiezo? &#8212;Su cara reflejaba ilusiones renovadas.</p>\
        <p>&#8212;No se imagina cuánto esperábamos esa respuesta. &#8212;La alegría por haber\
        adquirido un nuevo miembro para su equipo se reflejaba en el rostro de Connor&#8212;\
        Bienvenido al Área 51.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap1h1'>&gt; Ir al Capítulo 1.</a></p>"
    ),    
    wintro10: new undum.SimpleSituation(
        "<p>&#8212;Son ustedes muy amables. &#8212;rehusó&#8212; Pero mi carrera\
        en la arqueología se terminó ayer. Aunque mis teorías fueran ciertas, ya nadie\
        las tomaría en serio.</p>\
        <p>&#8212;¿Está usted seguro de eso? &#8212;Connor sacó unas fotografías del\
        interior de una carpeta marrón que tenía sobre la mesa y se las mostró.</p>\
        <p>Miró durante unos segundos las fotos. Trató de disimular la cambiante expresión\
        de su cara, pero todos los presentes se percataron de su reacción al verlas.</p>\
        <p>&#8212; Ya ha visto suficiente. ¿Qué me dice ahora, profesor Bafford? &#8212;le\
        preguntó mientras volvía a guardar las fotografías en la carpeta.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wintro9'>&gt; Aceptar.</a></p>\
        <p class='transient'><a href='wintro12'>&gt; Declinar.</a></p>"
    ),    
    wintro11: new undum.SimpleSituation(
        "<p>&#8212;Lo siento, señor Connor, pero he perdido las ganas. No creo que\
        pudiera ser de gran ayuda en su proyecto. Deberá buscarse a otro.</p>\
        <p>&#8212;No sabe cuánto lamento su decisión. &#8212;se despidió mientras\
        se alejaba cojeando, ayudado por el bastón, por el pasillo.</p>\
        <p><br/></p>\
        <h1>*** FIN ***</h1>"
    ),    
    wintro12: new undum.SimpleSituation(
        "<p>&#8212;Lo siento por ustedes, pero deberán buscarse a otro.</p>\
        <p>&#8212;Lamentamos enormemente su decisión. &#8212;dijo el general que\
        parecía estar al mando. &#8212;Le llevarán de vuelta a su apartamento.</p>\
        <p><br/></p>\
        <h1>*** FIN ***</h1>"
    ),    
    p_intro: new undum.SimpleSituation(
        "<h1>Prólogo</h1>\
        <p>El circo mediático había empezado temprano. Las unidades móviles de\
        televisión iban entrando en la plaza de San Pedro, reclamando el lugar\
        que se les había asignado.</p>\
        <p>El sedán negro de lunas tintadas avanzaba con lentitud entre la\
        multitud y el mar de cámaras que abarrotaban la plaza. Iba sentada en\
        el asiento trasero, repasando una y otra la citación de\
        la Santa Sede, que sostenía en sus manos.</p>\
        <p>Era un fax del cardenal Benigno Schiavone, el secretario de Estado\
        del Vaticano, el segundo cargo más poderoso de la Iglesia católica, detrás,\
        obviamente, del Papa. Se requería su presencia inmediata en la Santa Sede.</p>\
        <p>¿Qué querría de ella el cardenal Schiavone? ¿Y por qué precisamente\
        ese día y no otro?</p>\
        <p>El Vaticano se convertía ese día en el centro de atención mediático\
        de todo el mundo. Comenzaba el juicio a Paolo Gabriele, ex mayordomo\
        personal del Papa, por el llamado caso &laquo;Vatileaks&raquo;.</p>\
        <p><br/></p>\
        <p class='transient'><a href='pintro2'>&gt; Continúa leyendo.</a></p>"
    ),
    pintro2: new undum.SimpleSituation(
        "<p>Albergaba la esperanza de que la citación no tuviera nada que ver\
        con el juicio, aunque, la verdad, lo dudaba mucho.</p>\
        <p>Como agente de los servicios secretos del Vaticano, había participado en\
        la investigación del caso Vatileaks. De hecho, su participación había\
        sido determinante para identificar y detener al filtrador de los\
        documentos papales a la prensa.</p>\
        <p>Ella había ideado la trampa que desenmascaró a Paolo Gabriele.</p>\
        <p>El sedán negro llegó a la entrada del <i>Governorate</i>. Dos soldados\
        de la Guardia Suiza, que, ataviados con sus llamativos uniformes, protegían\
        la entrada, adoptaron la posición de firmes cuando el coche se detuvo.</p>\
        <p>Esperó a que el chófer le abriese la puerta y le ofreciese un paraguas.\
        Cogió aire nada más bajar del coche. Tenía la sensación de que ese podía ser\
        el último soplo de aire fresco del que disfrutaría en un tiempo.</p>\
        <p>Uno de los guardias le dedicó una sonrisa cuando atravesó la puerta.<p>\
        <p><br/></p>\
        <p class='transient'><a href='pintro3'>&gt; Continúa leyendo.</a></p>"
    ),
    pintro3: new undum.SimpleSituation(
        "<p>&#8212;Señorita Larezzo. Por aquí.</p>\
        <p>El interior estaba seco y caldeado. El joven sacerdote que la estaba\
        esperando la había reconocido al instante.</p>\
        <p>Podía escuchar el murmullo de actividad que provenía de las diferentes\
        oficnas mientras seguía al joven por los pasillos en dirección a un ascensor.</p>\
        <p>La oficina del secretario de Estado se encontraba en la cuarta planta.\
        El joven sacerdote la invitó a que entrase en el despacho, antes de cerrar la\
        puerta tras ella.</p>\
        <p>La estancia tenía un estilo antiguo y elegante. Las paredes estaban\
        decoradas con cuadros medievales y mapas antiguos.</p>\
        <p>Sentado en un sillón de cuero negro y respaldo alto había un hombre de\
        edad muy avanzada, que levantó la mirada del expediente que estaba leyendo.\
        Su vestimenta, toda de blanco, con el cordón dorado al cuello, armonizaba\
        perfectamente con su cabello completamente canoso.<p>\
        <p>&#8212;Señorita Larezzo &#8212;dijo el joven sacerdote&#8212;, Su Santidad.</p>\
        <p>&laquo;Como si el Papa necesitara presentación alguna&raquo;, pensó.</p>\
        <p>&#8212;Santidad. &#8212;lo saludó ella mientras el sacerdote cerraba la\
        puerta al salir</p>\
        <p>&#8212;Señorita Larezzo. &#8212;El Papa se dirigió a ella con un afecto\
        genuino al tiempo que le indicaba con un gesto que tomara asiento&#8212;\
        Paola Larezzo. Hace ya tiempo que quería conocerla.</p>\
        <p>Sorprendida, se hundió en la silla de cuero mientras el Santo Padre\
        volvía a examinar el informe que había redactado el Vaticano acerca de ella.</p>\
        <p><br/></p>\
        <p class='transient'><a href='pintro4'>&gt; Continúa leyendo.</a></p>"
    ),
    pintro4: new undum.SimpleSituation(
        "<p>&#8212;Se preguntará por qué está aquí.</p>\
        <p>&#8212;Sí, Santidad. ¿Y por qué precisamente hoy?</p>\
        <p>&#8212;Cierto. La razón por la que esta cita sea hoy es porque a nadie le resultará\
        extraño que la agente del servicio secreto que desenmascaró a mi secretario\
        personal aparezca por aquí el día que empieza el juicio por el escándalo de\
        &laquo;Vatileaks&raquo;. Todavía no había podido expresale mi más sincera\
        gratitud por el trabajo realizado. ¿Le llegaron mis felicitaciones?</p>\
        <p>&#8212;Sí, Santidad. Fue todo un honor.</p>\
        <p>Tenía una pregunta para hacerle al Papa, pero se debatía entre si sería\
        lo correcto o no.<p>\
        <p>&#8212;Señorita Larezzo, diría que algo le preocupa. &#8212;Al parecer,\
        había notado su lucha interior.</p>\
        <p>&#8212;Santidad, por sus palabras, deduzco que no estoy aquí por el\
        juicio a Paolo Gabriele. Y al decirme que a nadie le resultaría extraño\
        verme precisamente hoy en la Santa Sede, en realidad está diciéndome que\
        pretende que esta reunión no sea conocida.</p>\
        <p>&#8212;Es usted directa, como bien dice su informe.</p>\
        <p>&#8212;Los servicios secretos del Vaticano son los mejores del mundo.</p>\
        <p>&#8212;Eso dicen. Tiene usted razón. Tradicionalmente, el Papa siempre ha tenido\
        muchos enemigos, dentro y fuera de la Iglesia. Y yo no iba a ser una excepción.</p>\
        <p>Incrementó su atención, pues ahora venía lo realmente interesante.</p>\
        <p>&#8212;Digame, ¿cree usted en Dios, Paola?</p>\
        <p><br/></p>\
        <p class='transient'><a href='pintro5/si' class='once'>&gt; Sí.</a></p>\
        <p class='transient'><a href='pintro5/no' class='once'>&gt; No.</a></p>"
    ),
    pintro5: new undum.SimpleSituation(
        "",
        {
            actions: {
                "si": "<p>&#8212;Sí. &#8212; Paola no dudó ni un instante.</p>\
                       <p><br/></p>\
                       <p class='transient'><a href='pintro6'>&gt; Continúa leyendo.</a></p>",
                "no": "<p>&#8212;No creo en una divinidad omnipotente que nos creara\
                      a nosotros y al universo entero. &#8212;No había encontrado\
                      mejor respuesta para decir al Papa cara a cara que no era creyente.</p>\
                      <p><br/></p>\
                      <p class='transient'><a href='pintro6'>&gt; Continúa leyendo.</a></p>"
            }
        }
    ),
    pintro6: new undum.SimpleSituation(
        "<p>&#8212;¿Y qué opinión tiene de la Iglesia? ¿Una buena idea que se estropeó en el camino?</p>\
        <p>&#8212;Como todas las instituciones humanas, la Iglesia terrenal es un\
        organismo corrupto. &#8212;contestó ella&#8212; Pero ha proporcionado hospitales,\
        orfanatos y esperanza a toda la humanidad. Sin ella, la civilización se hundiría\
        en un abismo moral.</p>\
        <p>&#8212;Me alegra oirle decir eso. &#8212;Había cierta ternura en la mirada\
        del Santo Padre&#8212; Paola, quiero que medite con seriedad si desea en su\
        interior responder a la desesperada llamada que le hago para llevar a cabo una\
        misión sagrada para la Santa Iglesia Católica.</p>\
        <p>Lo único que le decía su interior era que había algo raro en todo aquel asunto.</p>\
        <p>&#8212;¿Qué clase de misión?</p>\
        <p>&#8212;Entienda que no le pueda dar más detalles hasta que me diga si acepta\
        el trabajo o no. Sólo usted y yo sabremos de la existencia de esta misión.</p>\
        <p><br/></p>\
        <p class='transient'><a href='pintro8' class='once'>&gt; Aceptar.</a></p>\
        <p class='transient'><a href='pintro7' class='once'>&gt; Declinar.</a></p>"
    ),
    pintro7: new undum.SimpleSituation(
        "<p>&#8212;Santidad, es un gran honor que haya pensado en mi, pero en estos\
        momentos no creo que sea la persona adecuada para participar en una misión\
        secreta. Soy uno de los focos de atención mientras dure el juicio a Gabriele.</p>\
        <p>&#8212;Lamento profundamente su decisión, señorita Larezzo. &#8212;El Santo\
        Padre se levantó del sillón y se dirigió a la puerta.&#8212; Recuerde que esta\
        reunión no ha tenido lugar y que su estancia en el Vaticano se debe al juicio.\
        Un placer haberla conocido, Paola. Que Dios le bendiga.</p>\
        <p>El Papa desapareció por los pasillos y le dejó allí sola, hasta que entró\
        el joven sacerdote para guiarla hasta la salida.</p>\
        <p><br/></p>\
        <h1>*** FIN ***</h1>"
    ),    
    pintro8: new undum.SimpleSituation(
        "<p>El Papa se levantó y comenzó a caminar por el despacho mientras hablaba.</p>\
        <p>&#8212;¿Conoce usted a San Malaquías?</p>\
        <p><br/></p>\
        <p class='transient'><a href='pintro9/si' class='once'>&gt; Sí.</a></p>\
        <p class='transient'><a href='pintro9/no' class='once'>&gt; No.</a></p>"
    ),
    pintro9: new undum.SimpleSituation(
        "",
        {
            actions: {
                "si": "<p>&#8212;Sí. Fue un arzobispo católico irlandés del siglo XII, famoso por\
                       por la &laquo;profecía de los Papas&raquo;. Una lista de 112 lemas sobre\
                       todos los Papas desde Celestino II hasta un supuesto Pedro el\
                       Romano, que será el Papa durante cuyo gobierno llegará el\
                       Apocalipsis y la ciudad de las siete colinas, Roma, será destruida.</p>\
                       <p><br/></p>\
                       <p class='transient'><a href='pintro10'>&gt; Continúa leyendo.</a></p>",
                "no": "<p>&#8212;No. Lo siento</p>\
                       <p>&#8212;San Malaquías fue un arzobispo católico irlandés del siglo XII, famoso por\
                       por su &laquo;profecía de los Papas&raquo;. Una lista de 112 lemas sobre\
                       todos los Papas desde Celestino II hasta un supuesto Pedro el\
                       Romano, que será el Papa durante cuyo gobierno llegará el\
                       Apocalipsis y la ciudad de las siete colinas, Roma, será destruida.</p>\
                       <p>&#8212;La profecía sí que la conozco. No sabía que fuera\
                       de San Malaquías. &#8212;aclaró Paola.</p>\
                       <p><br/></p>\
                       <p class='transient'><a href='pintro10'>&gt; Continúa leyendo.</a></p>"
            }
        }
    ),
    pintro10: new undum.SimpleSituation(
        "<p>El Santo Padre se detuvo y la miró fijamente.</p>\
        <p>&#8212;¿Sabe que yo soy el Papa correspondiente al lema 112 de la profecía?</p>\
        <p>Paola no pudo ocultar un gesto de sorpresa.</p>\
        <p>&#8212;Pero, Santidad. Hay estudios que demuestran que la profecía es un\
        fraude. Los lemas solo tienen precisión hasta Urbano VII, el Papa que había\
        cuando apareció por primera vez la profecía. A partir de esa fecha, hay que\
        hacer esfuerzos para que los lemas coincidan con el pontífice correspondiente.</p>\
        <p>&#8212;¿Y si le dijese que no hay ningún fraude?</p>\
        <p>Paola no supo qué contestar.</p>\
        <p>&#8212;¿Conoce el tercer secreto de Fátima, Paola?</p>\
        <p>&#8212;Predice el intento de asesinato que sufrió Juan Pablo II en la\
        Plaza de San Pedro a manos de Ali Agca. En mayo de 1981.</p>\
        <p>&#8212;Eso es lo que la Iglesia hizo saber a la opinión pública para\
        protegerlo. &#8212;le corrigió el Santo Padre.&#8212; El manuscrito original\
        de Santa Lucía, una de los tres niños que recibieron las visiones en Fátima,\
        predice el Apocalipsis: un ángel con espada de fuego grita &laquo;Penitencia&raquo;\
        tres veces, una ciudad en ruinas, con sus calles y sus siete colinas llenas de\
        cadáveres, y el Papa y obispos subiendo esas colinas antes de morir, asesinados, en la cima.</p>\
        <p>&#8212;¿A dónde quiere llegar, Santidad?</p>\
        <p>&#8212;Dios me ha revelado una profecía sobre el fin de los tiempos. &#8212;confesó&#8212;\
        Sin embargo, se la he ocultado a la Iglesia porque la mera posibilidad es,\
        de por sí, espantosa.</p>\
        <p>&#8212;¿Qué es lo que vio, Santidad?</p>\
        <p><br/></p>\
        <p class='transient'><a href='pintro11'>&gt; Continúa leyendo.</a></p>"
    ),
    pintro11: new undum.SimpleSituation(
        "<p>&#8212;Una hermosa rosa congelada en el hielo. &#8212;contestó el Papa&#8212;\
        El hielo se agrietaba y de esa grieta surgía fuego y comenzaba una guerra que los\
        hijos de Dios emprendían contra la Iglesia y toda la humanidad. Al final, el hielo\
        se derretía y se deslizaban lágrimas por los pétalos de la rosa.</p>\
        <p>Paola se sentó en el borde de la silla. Tenía que reconocer que el Papa\
        parecía estar en plenas facultades mentales y bastante lúcido.</p>\
        <p>El Santo Padre recitó el capítulo sexto del Génesis, en el que se decía que\
        &laquo;los hijos de Dios&raquo; gobernaron la Tierra en épocas remotas. Sus\
        vástagos, nacidos de las mujeres, hicieron tanto daño que Dios los destruyó,\
        a ellos y a toda la raza humana, con el Gran Diluvio, excepto a Noé y su familia.</p>\
        <p>Paola replicó al Papa que las visiones apocalípticas habidas a lo largo de la\
        historia nunca detallaban el futuro con demasiada precisión, ni las habidas en\
        la Biblia ni las que habían relatado los pastorcillos portugueses de Fátima.\
        Al contrario, lo resumían y lo situaban sobre un escenario atemporal y unificado,\
        plagado de símbolos que precisaban de interpretación.</p>\
        <p>&#8212;¿Por qué ahora iba a ser diferente? &#8212;preguntó al Santo Padre.</p>\
        <p>&#8212;Esto fue descubierto en el antiguo palacio imperial de Constantinopla,\
        en 1929. Pertenecía a un almirante turco. &#8212;Los nudosos dedos de León XIV\
        desplegaron sobre el escritorio una copia de un mapa medieval. Estaba fechado\
        en 1513.&#8212; La representación del mundo que hay en ese mapa es completamente\
        errónea. Lo que una vez se tomó como verdadero ha resultado ser falso. Si\
        tomamos eso como premisa, llegaremos a la conclusión de que nuestra visión del\
        mundo tal vez resulte igual de errónea dentro de unos cuantos siglos. O\
        de unos cuantos dias...</p>\
        <p>&#8212;¿Unos cuantos días? &#8212;repitió Paola.&#8212; ¿Su profecía va\
        a tener lugar dentro de unos cuantos días y no se lo ha revelado a la Iglesia?</p>\
        <p>&#8212;Señorita Larezzo. Las implicaciones espirituales, políticas y militares\
        serían muy desagradables. Piense lo que sucedería si la humanidad se desentendiera\
        por completo de la tradición cristiana y la anarquía moral reinara en el mundo.</p>\
        <p>&#8212;¿Qué pretende que haga entonces, Santidad?</p>\
        <p>&#8212;Quiero que vaya al archivo Vaticano, encuentre el manuscrito\
        original de Santa Lucía y se lo lleve al padre Almeida, en Brasil. El padre\
        Almeida realizó la traducción original del manuscrito del portugués al latín. Llévele\
        también esta carta. &#8212;le entregó un sobre lacrado con el sello papal.</p>\
        <p><br/></p>\
        <p class='transient'><a href='pcap1h1'>&gt; Ir al Capítulo 1.</a></p>"
    ),
    wcap1h1: new undum.SimpleSituation(
        "<h1>1 - La investigación</h1>\
        <p>Ya llevaba casi tres semanas encerrado en aquella base militar, sin\
        contacto con el exterior, pero eso a él poco le importaba, ya que su\
        vida anterior había terminado. Sin embargo, su ánimo empezaba a resentirse\
        pues no había logrado avances significativos en la investigación. Y,\
        justamente, avances era lo que esperaban de él.</p>\
        <p>En ese momento, tenía tres líneas de investigación abiertas: un códice\
        perdido maya, unas tablillas de arcilla de Niniveh y unos curiosos discos\
        Dropa.</p>\
        <p>Desde que se había levantado esa mañana tenía la corazonada de que\
        ese iba a ser el día del gran descubrimiento. ¿En qué laboratorio le\
        estaba aguardando la gloria?</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap1h2'>&gt; Decidirse por estudiar el códice maya.</a></p>\
        <p class='transient'><a href='wcap1h3'>&gt; Decidirse por estudiar las tablillas de arcilla.</a></p>\
        <p class='transient'><a href='wcap1h4'>&gt; Decidirse por estudiar los discos de los Dropa.</a></p>"
    ),
    wcap1h2: new undum.SimpleSituation(
        "<p>Echó veinticinco céntimos en la máquina para sacarse el primer café\
        del día y se encaminó al laboratorio WI2, donde le esperaba el códice maya.</p>\
        <p>Se trataba de un libro escrito por los mayas mucho antes de la conquista\
        española del continente americano. Como en toda la escritura maya, estaba\
        conformado por jeroglíficos.</p>\
        <p>Tres códices mayas y una parte de un cuarto habían sobrevivido hasta\
        nuestros tiempos. Tres de ellos llevan el nombre según el lugar de su custodia\
        (Dresde, Madrid, también conocido como códice Trocortesiano, y París, o códice\
        Peresiano). El cuarto, lleva el lugar donde se expuso por primera vez, y se\
        conoce como Fragmento de Grolier.</p>\
        <p>Aunque habían llegado cuatro a nuestros días, eran muchos más los libros\
        mayas escritos en tiempo de la conquista de Yucatán en el siglo XVI, pero\
        casi todos fueron destruidos por conquistadores y sacerdotes. En particular,\
        los encontrados en la Península de Yucatán fueron destruidos por órdenes\
        de Fray Diego de Landa en julio de 1562.</p>\
        <p>Pero el que tenía allí delante no era ninguno de los conocidos. Era mucho\
        más antiguo que el de Dresde, que estaba datado del siglo XI o XII. Sin duda\
        era el libro más antiguo escrito en las Américas, de unos trescientos o\
        cuatrocioentos años más de antigüedad que el códice de Dresde.</p>\
        <p>Según le habían contado, el códice había sido salvado de la destrucción\
        por Alonso de Zorita, alrededor de 1540, dejando escrito que narraba la historia\
        de los mayas durante más de ochocientos años y que le fue interpretado por\
        indígenas muy ancianos.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap1h19'>&gt; Continúa leyendo.</a></p>"
    ),
    wcap1h3: new undum.SimpleSituation(
        "<p>Echó veinticinco céntimos en la máquina para sacarse el primer café\
        del día y se encaminó al laboratorio FH4, donde le esperaban las tablillas\
        de arcilla de Niniveh.</p>\
        <p>Eran cuatro tablillas de arcilla en las que se habían grabado pictogramas\
        que representaban cabezas, pies, manos, números y trillos. Sin ningún tipo\
        de duda, se trataba de escritura cuneiforme. De eso estaba seguro desde el\
        primer momento en el que vio las tablillas.</p>\
        <p>Según le habían contado, las tablillas fueron encontradas en los años\
        cincuenta, en las ruinas de la antigua ciudad sumeria de Niniveh.</p>\
        <p>Sumeria fue una región histórica de Oriente Medio que formaba la parte\
        sur de la antigua Mesopotamia, entre las planicies aluviales de los ríos\
        Tigris y Eúfrates. La civilización sumeria estaba considerada como la primera\
        y más antigua civilización del mundo. La procedencia de sus habitantes,\
        los sumerios, era incierta.</p>\
        <p>Para cualquier arqueólogo, y esta nueva oportunidad que le habían brindado\
        le había devuelto la ilusión de serlo, la cultura sumeria era el Santo Grial\
        de la profesión.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap1h5'>&gt; Continúa leyendo.</a></p>"
    ),
    wcap1h4: new undum.SimpleSituation(
        "<p>Echó veinticinco céntimos en la máquina para sacarse el primer café\
        del día y se encaminó al laboratorio OR3, donde le esperaban los discos\
        de la tribu de los Dropa.</p>\
        <p>Se trataba de unos disco de piedra de 22.7 centímetros de diámetro y 2\
        centímetros de grosor. Tenían un agujero justo en el centro de unos 2 centímetros\
        de diámetro. De ahí, surgía un surco fino en espiral hacia el exterior del\
        disco</p>\
        <p>Habían sido encontrados en las montañas Bayan Kara-Ula, una de las regiones\
        más aisladas del planeta, entre China y el Tibet, en 1938, y había\
        sido datado de entre 10.000 y 12.000 años de antigüedad.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap1h12'>&gt; Continúa leyendo.</a></p>"
    ),
    wcap1h5: new undum.SimpleSituation(
        "<p>Los sumerios eran recordados debido a sus muchas invenciones, entre las\
        que se encontraban la rueda y el torno alfarero. Su sistema de escritura\
        cuneiforme era el primer sistema de escritura del que se tenía evidencia,\
        adelantándose a los jeroglíficos egipcios, y estaban entre los\
        primeros astrónomos, poseyendo la primera visión heliocéntrica de la que\
        se tenía conocimiento.</p>\
        <p>Desarrollaron también conceptos matemáticos usando sistemas numéricos\
        basados en 6 y 10. A través de ese sistema, inventaron el reloj con 60\
        segundos, 60 minutos y 12 horas, además del calendario de 12 meses que\
        se usaba en la actualidad. También construyeron sistemas legales y administrativos\
        con cortes judiciales, prisiones y las primeras ciudades estado. La invención\
        de la escritura posibilitó a los sumerios el almacenamiento del conocimiento\
        y la posibilidad de transferirlo a otros, lo que llevó a la creación de las\
        escuelas, a la educación y oficialización de la matemática, religión, burocracia,\
        divisón de trabajo y sistemas de clases sociales.</p>\
        <p>Los sumerios también inventaron la carroza y, posiblemente, las formaciones\
        militares. Inventaron la cerveza.</p>\
        <p>Pero lo más importante de todo era, y en esto estaba de acuerdo\
        la comunidad científica, que los sumerios fueron los rimeros en tratar plantas\
        y domesticar y criar animales a gran escala.</p>\
        <p>Se sentó en su escritorio y encendió el ordenador. Mientras esperaba\
        a que terminase de arrancar, se detuvo a pensar sobre cuál debía ser el\
        primer paso que tenía que dar en su, esperaba, gran día. ¿Qué era mejor\
        para salir del bloqueo en el que se encontraba? ¿Repasar todas sus notas\
        hasta entonces o descartar lo que había hecho hasta el momento y volver\
        a investigar las tablillas desde cero?</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap1h6'>&gt; Repasar las notas.</a></p>\
        <p class='transient'><a href='wcap1h7'>&gt; Volver a las tablillas.</a></p>"
    ),
    wcap1h6: new undum.Situation(
        {
            enter: function(character, system, from) {
                system.write("<p>Decidió que no debía tirar todo el trabajo que había\
                realizado a la basura. Había estudiado tan a fondo las tablillas\
                sumerias que, sin duda, la solución al bloqueo en el que se encontraba\
                debía estar en sus notas. ¡Tenía que estar ahí!</p>");
                system.write("<p>Había traducido las tablillas siguiendo las investigaciones\
                del profesor Zetcharia Sitchin, el mayor experto mundial en la escritura\
                cuneiforme sumeria, pero algo se le escapaba.</p>");
                system.write("<p>Las tablillas 1 y 4 hablaban de la sucesión de monarcas sumerios\
                desde los primeros tiempos hasta Hammurabi, el sexto rey de Babilonia, fallecido\
                en el año 1750 a.C. Aunque era el que hacía 31 en la lista y vigésimo segundo\
                rey de la primera dinastía Kish, el primer monarca\
                del que se tenía evidencia histórica era Mebaragesi, que vivió en el siglo\
                XXVII a.C. y reinó, según la tablilla, durante 900 años. También de su hijo,\
                Aga, que reinó durante 625 años, se tenía comprobación histórica. La\
                duración de todos los reinados de esta dinastía eran imposibles, por\
                lo que había llegado a la conclusión de que se debía tratar de\
                figuras mitológicas, con algún trasfondo histórico.</p>");
                system.write("<p>La segunda tablilla contenía cartas de negocios y\
                transacciones, recibos, leyes, himnos y alguna plegaria.</p>");
                system.write("<p>La tablilla 3 era la que le había sido imposible\
                descifrar, por más que lo intentaba. Parecía un compendio científico\
                sobre matemáticas, pero no le encontraba sentido.</p>");
                system.write("<p>Repasó y repasó sus notas, contrastándolas con\
                los libros de Sitchin, pero le fue imposible avanzar. Otro día\
                perdido.</p>");
                system.write("<p><br/></p>");
                system.write("<p class='transient'><a href='wcap1h8'>&gt; Continúa leyendo.</a></p>");
            }
        }
    ),
    wcap1h7: new undum.Situation(
        {
            enter: function(character, system, from) {
                system.write("<p>Descartó todas sus notas y abrió los modelos en 3D\
                de las tablillas en el ordenador. ¡Había algo que se le estaba\
                escapando! ¡Tenía que estar ahí!</p>");
                system.write("<p>Repasó los métodos del profesor Zetcharia Sitchin,\
                el mayor experto mundial en la escritura cuneiforme sumeria, y se\
                puso manos a la obra minuciosamente glifo por glifo.</p>");
                system.write("<p>Comenzó por las más fáciles. La 1 y 4 contaban\
                la sucesión de monarcas sumerios desde los primeros tiempos hasta\
                Hammurabi, el sexto rey de Babilonia, fallecido en el año 1750 a.C.\
                Aunque era el que hacía 31 en la lista y vigésimo segundo\
                rey de la primera dinastía Kish, el primer monarca\
                del que se tenía evidencia histórica era Mebaragesi, que vivió en el siglo\
                XXVII a.C. y reinó, según la tablilla, durante 900 años. También de su hijo,\
                Aga, que reinó durante 625 años, se tenía comprobación histórica. La\
                duración de todos los reinados de esta dinastía eran imposibles, por\
                lo que había llegado a la conclusión de que se debía tratar de\
                figuras mitológicas, con algún trasfondo histórico.</p>");
                system.write("<p>La segunda tablilla contenía cartas de negocios y\
                transacciones, recibos, leyes, himnos y alguna plegaria.</p>");
                system.write("<p>Era ya muy tarde cuando desistió de encontrar\
                algo útil en la tablilla 3. Le era imposible de descifrar, por más\
                que lo intentaba. Tenía la impresión de que se trataba de un compendio\
                sobre matemáticas, pero no le encontraba sentido a la sucesión de glifos.</p>");
                system.write("<p>Repasó y repasó su trabajo, contrastándo con\
                los libros de Sitchin, pero le fue imposible avanzar. Otro día\
                perdido.</p>");
                system.write("<p><br/></p>");
                system.write("<p class='transient'><a href='wcap1h8'>&gt; Continúa leyendo.</a></p>");
            }
        }
    ),    
    wcap1h8: new undum.Situation(
        {
            enter: function(character, system, from) {
                if (system.rnd.randomInt(1, 10) < 6) {
	                system.write("<p>Apagó el ordenador y, cabizbajo, se dirigió\
	                a su habitación. Empezaba a perder el ánimo.</p>");
	                system.write("<p><br/></p>");
                    system.write("<p class='transient'><a href='wcap1h9'>&gt; Continúa leyendo.</a></p>");
                } else {
	                system.write("<p>Apagó el ordenador y, cabizbajo, se dirigió\
	                a la salida. Empezaba a perder el ánimo. Apagó las luces.</p>");
	                system.write("<p>Antes de salir echó un vistazo de reojo a la tablilla tres.</p>");
                    system.write("<p>&laquo;¿Qué era eso?&raquo;. Le había parecido\
                    ver algo extraño en la tablilla, en uno de los bordes. Se acercó\
                    a ella para comprobarlo mejor.</p>");
	                system.write("<p><br/></p>");
                    system.write("<p class='transient'><a href='wcap1h10'>&gt; Continúa leyendo.</a></p>");
                }
            }
        }
    ),    
    wcap1h9: new undum.SimpleSituation(
        "<p>No había podido pegar ojo en toda la noche tras el nuevo fracaso del\
        día anterior con las tablillas. No obstante, se había levantado con un\
        poco más de ánimo con el que se había acostado, aunque no demasiado.</p>\
        <p>De nuevo, al llegar al laboratorio, se hizo la misma pregunta de todos\
        los días. ¿Por dónde empezar?</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap1h2'>&gt; Decidirse por estudiar el códice maya.</a></p>\
        <p class='transient'><a href='wcap1h3'>&gt; Decidirse por estudiar las tablillas de arcilla.</a></p>\
        <p class='transient'><a href='wcap1h4'>&gt; Decidirse por estudiar los discos de los Dropa.</a></p>"
    ),
    wcap1h10: new undum.SimpleSituation(
        "<p>&laquo;¡Sí! ¡Ahí hay algo!&raquo;. La luz de la luna que entraba por\
        la ventana iluminaba tenuemente uno de los laterales de la tablilla,\
        dejando entrever un leve brillo en algunas zonas.</p>\
        <p>&laquo;¿Cómo se me había pasado hasta ahora?&raquo;. Miró hacia la\
        ventana. La noche estaba especialmente clara y la luna estaba en sus\
        últimos días de fase creciente, lo que hacía que entrase la suficiente\
        cantidad de luz para hacer brillar algunos restos de material cristalino\
        que había en la tablilla.</p>\
        <p>Cogió una lámpara de luz negra y la acercó a la tablilla. El, ahora,\
        brillo más potente reveló algo que lo dejó petrificado por unos momentos.</p>\
        <p>El reflejo de la luz mostraba un nuevo glifo, hasta entonces invisible, que le\
        resultaba vagamente familiar.</p>\
        <p>&#8212;¿Dónde he visto esto antes?</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap1h11'>&gt; Continúa leyendo.</a></p>"
    ),
    wcap1h11: new undum.SimpleSituation(
        "<p>Lleno de entusiamo e impaciencia encendió de nuevo el ordenador del\
        laboratorio. El arranque se le hizo eterno.</p>\
        <p>&laquo;¡Tiene que estar por aquí! ¡Tiene que estar por aquí!&raquo;.\
        A una velocidad endiablada, buscó entre cientos de imágenes hasta que\
        por fin encontró lo que buscaba.</p>\
        <p>&#8212;¡SI! ¡SI! ¡SI! &#8212; Salió corriendo del laboratorio, gritando,\
        con la intención de despertar a todo el Área 51.</p>\
        <p>La pantalla del ordenador mostraba el glifo que se correspondía con la\
        constelación de Orión, grabado en una columna de la cámara del rey de la\
        Gran Pirámide de Keops.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h1'>&gt; Ir al capítulo 2.</a></p>"
    ),
    wcap1h12: new undum.SimpleSituation(
        "<p>Pero lo verdaderamente interesante de los discos era que los surcos en\
        espiral no eran simples dibujos, sino más bien una escritura increíblemente\
        antigua grabada del algún modo desconocido y de un tamaño casi microscópico.</p>\
        <p>Eso hacía que estuviese ante la escritura conocida más antigua del mundo.</p>\
        <p>¿Cómo pudo un pueblo primitivo realizar unos discos tan exactos? ¿Cómo\
        labraron una escritura casi microscópica en la piedra? ¿Quiénes eran y para\
        qué fin realizaron esos discos?</p>\
        <p>¡Tenía que descifrar aquella escritura!</p>\
        <p>Se sentó en su escritorio y encendió el ordenador. Mientras esperaba\
        a que terminase de arrancar, se detuvo a pensar sobre cuál debía ser el\
        primer paso que tenía que dar en su, esperaba, gran día. ¿Qué era mejor\
        para salir del bloqueo en el que se encontraba? ¿Repasar todas sus notas\
        hasta entonces o descartar lo que había hecho hasta el momento y volver\
        a investigar los discos desde cero?</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap1h13'>&gt; Repasar las notas.</a></p>\
        <p class='transient'><a href='wcap1h14'>&gt; Volver a los discos.</a></p>"
    ),
    wcap1h13: new undum.Situation(
        {
            enter: function(character, system, from) {
                system.write("<p>Decidió que no debía tirar todo el trabajo que había\
                realizado a la basura. Había estudiado tan a fondo esos discos\
                que, sin duda, la solución al bloqueo en el que se encontraba\
                debía estar en sus notas. ¡Tenía que estar ahí!</p>");
                system.write("<p>Había transcrito en papel todos los símbolos que\
                había en los discos. Incluso había averiguado el orden en el que\
                colocar buena parte de los discos al hacer la transcripción,\
                pero algo se le escapaba.</p>");
                system.write("<p>Los discos contaban la historia de cómo los Dropa\
                buscaron refugio en las cuevas de las montañas y, a pesar de que\
                sus intenciones eran pacíficas, no fueron comprendidos por los miembros\
                de la tribu Ham, los cuales, ocupaban las cuevas vecinas y, pensando\
                que eran enemigos que querían apoderarse de su territorio, persiguieron\
                y mataron a algunos de los Dropa. Cuando, finalmente, los Ham\
                comprendieron el lenguaje por señas de los Dropa, los admitieron\
                en su territorio al saber que los recién llegados tenían intenciones\
                pacíficas.</p>");
                system.write("<p>Pero, la traducción parcial que había hecho dejaba\
                muchos interrogantes por responder: ¿Por qué llamaban a los Dropa\
                \"recien llegados\"? ¿Por qué dos tribus de la misma región tenían\
                que hablarse por señas? ¿Por qué la historia contada en los discos\
                especificaba que fueron los Ham los que no entendían a los Dropa y\
                no al revés, o como sería más normal, que no se entendían ninguna de\
                las dos tribus?</p>");
                system.write("<p>Eran los primeros discos y los últimos los que no\
                había conseguido traducir. Había símbolos y dibujos a los que no\
                encontraba sentido.</p>");
                system.write("<p>Repasó y repasó sus notas, contrastándolas una\
                y otra vez, pero le fue imposible avanzar. Otro día perdido.</p>");
                system.write("<p><br/></p>");
                system.write("<p class='transient'><a href='wcap1h15'>&gt; Continúa leyendo.</a></p>");
            }
        }
    ),
    wcap1h14: new undum.Situation(
        {
            enter: function(character, system, from) {
                system.write("<p>Descartó todas sus notas y abrió los modelos en 3D\
                de los discos en el ordenador. ¡Había algo que se le estaba\
                escapando! ¡Tenía que estar ahí!</p>");
                system.write("<p>Repasó los métodos utilizados y se\
                puso manos a la obra minuciosamente glifo por glifo.</p>");
                system.write("<p>Despejó su mente y volvió a reordenar las transcripciones\
                que había hecho de los discos.</p>");
                system.write("<p>Comenzó por la parte que ya sabía, la de los discos\
                centrales, o al menos él suponía que eran los que conformaban la parte\
                central del relato.</p>");
                system.write("<p>Los discos contaban la historia de cómo los Dropa\
                buscaron refugio en las cuevas de las montañas y, a pesar de que\
                sus intenciones eran pacíficas, no fueron comprendidos por los miembros\
                de la tribu Ham, los cuales, ocupaban las cuevas vecinas y, pensando\
                que eran enemigos que querían apoderarse de su territorio, persiguieron\
                y mataron a algunos de los Dropa. Cuando, finalmente, los Ham\
                comprendieron el lenguaje por señas de los Dropa, los admitieron\
                en su territorio al saber que los recién llegados tenían intenciones\
                pacíficas.</p>");
                system.write("<p>Pero, la traducción parcial que había hecho dejaba\
                muchos interrogantes por responder: ¿Por qué llamaban a los Dropa\
                \"recien llegados\"? ¿Por qué dos tribus de la misma región tenían\
                que hablarse por señas? ¿Por qué la historia contada en los discos\
                especificaba que fueron los Ham los que no entendían a los Dropa y\
                no al revés, o como sería más normal, que no se entendían ninguna de\
                las dos tribus?</p>");
                system.write("<p>Eran los primeros discos y los últimos los que no\
                había conseguido traducir. Había símbolos y dibujos a los que no\
                encontraba sentido.</p>");
                system.write("<p>Era ya muy tarde cuando desistió de encontrar\
                algo útil en el resto de discos. Le era imposible de descifrar, por más\
                que lo intentaba, lo que significaban algunos símbolos y dibujos clave.\
                Tenía la impresión de que debían contar los orígenes de la tribu de\
                los Dropa, pero no le encontraba sentido a la sucesión de glifos.</p>");
                system.write("<p>Repasó y repasó su trabajo, contrastándo con\
                los libros de Sitchin, pero le fue imposible avanzar. Otro día\
                perdido.</p>");
                system.write("<p><br/></p>");
                system.write("<p class='transient'><a href='wcap1h15'>&gt; Continúa leyendo.</a></p>");
            }
        }
    ),    
    wcap1h15: new undum.Situation(
        {
            enter: function(character, system, from) {
                if (system.rnd.randomInt(1, 10) < 6) {
	                system.write("<p>Apagó el ordenador y, cabizbajo, se dirigió\
	                a su habitación. Empezaba a perder el ánimo.</p>");
	                system.write("<p><br/></p>");
                    system.write("<p class='transient'><a href='wcap1h16'>&gt; Continúa leyendo.</a></p>");
                } else {
	                system.write("<p>Empezaba a perder el ánimo. Cabizbajo, se\
	                levantó para dejar el disco que tenía en la mano y apagar el\
	                ordenador y las luces.</p>");
                    system.write("<p>&laquo;¿Qué era eso?&raquo;. Le había parecido\
                    ver algo extraño en la pantalla del ordenador al pasar junto\
                    a él. Se acercó a ella para comprobarlo mejor.</p>");
	                system.write("<p><br/></p>");
                    system.write("<p class='transient'><a href='wcap1h17'>&gt; Continúa leyendo.</a></p>");
                }
            }
        }
    ),    
    wcap1h16: new undum.SimpleSituation(
        "<p>No había podido pegar ojo en toda la noche tras el nuevo fracaso del\
        día anterior con los discos. No obstante, se había levantado con un\
        poco más de ánimo con el que se había acostado, aunque no demasiado.</p>\
        <p>De nuevo, al llegar al laboratorio, se hizo la misma pregunta de todos\
        los días. ¿Por dónde empezar?</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap1h2'>&gt; Decidirse por estudiar el códice maya.</a></p>\
        <p class='transient'><a href='wcap1h3'>&gt; Decidirse por estudiar las tablillas de arcilla.</a></p>\
        <p class='transient'><a href='wcap1h4'>&gt; Decidirse por estudiar los discos de los Dropa.</a></p>"
    ),
    wcap1h17: new undum.SimpleSituation(
        "<p>&laquo;¡Sí! ¡Algo extraño pasaba al acercar el disco al monitor del\
        ordenador!&raquo;. Acercaba el disco que portaba en la mano al monitor\
        y se producían interferencias en la misma.</p>\
        <p>&laquo;¿Cómo se me había pasado hasta ahora?&raquo;. Eso significaba\
        que el disco tenía restos de carga electromagnética.</p>\
        <p>Corrió atolondradamente hasta el oscilógrafo que había en la otra punta\
        del laboratorio. Realizó mediciones sobre el disco. Miró asombrado la\
        pantalla del aparato.</p>\
        <p>Hizo mediciones en otros discos. Los resultados fueron igualmente\
        sorprendentes.</p>\
        <p>Los resultados que acababa de obtener sólo podían significar una cosa:\
        que los discos habían funcionado en algún momento como conductores eléctricos.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap1h18'>&gt; Continúa leyendo.</a></p>"
    ),
    wcap1h18: new undum.SimpleSituation(
        "<p>Lleno de entusiamo e impaciencia colocó los discos que el oscilógrafo\
        decía que habían estado cargados eléctricamente sobre una barra de metal,\
        pasándola por el agujero del centro de los discos.</p>\
        <p>La barra de metal estaba conectada a un generador eléctrico. Puso, nerviso,\
        la mano sobre el potenciómetro y empezó a girarlo poco a poco.</p>\
        <p>Conforme la potencia iba aumentaba, los discos comenzaron a vibrar. Dio\
        un poco más de potencia y los discos comenzaron a girar. Unos giraban en\
        la dirección de las agujas del reloj y otros en contra.</p>\
        <p>&#8212;¡SI! ¡SI! ¡SI! &#8212; ¡Lo vio! ¡No podía creer lo que estaba viendo!\
        Era la explicación de los símbolos que no había podido descifrar en los\
        discos. Estaba ante la piedra de Rosetta de Dropa.<p>\
        <p>Salió corriendo del laboratorio, gritando, con la intención de despertar\
        a todo el Área 51.</p>\
        <p>A la par que giraban los discos en los bordes se combinaban muescas\
        y grabados, que vistas por separado no parecían más que daños ocasionados\
        por el paso del tiempo. Se podían ver unos pequeños hombres amarillos con\
        largas y anchas cabezas. Eran calvos y tenían los ojos grandes y azulados.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h1'>&gt; Ir al capítulo 2.</a></p>"
    ),
    wcap1h19: new undum.SimpleSituation(
        "<p>El códice constaba de 47 páginas, con escritura en ambas caras. Tenía\
        una longitud total de 4.23 metros. Originalmente había sido doblado en\
        forma de acordeón.</p>\
        <p>Estaba hecho de papel amate, corteza de jonote (ficus) que había sido\
        aplastada y cubierta de una pasta de cal. Cada una de las hojas medía 20.5\
        centímetros de altura y 9 de anchura. La mayoría estaban divididas horizontalmente\
        en tres partes por delgadas líneas rojas. Cuatro de las páginas de la parte\
        del dorso estaban en blanco, posiblemente debido al paso del tiempo.</p>\
        <p>Se sentó en su escritorio y encendió el ordenador. Mientras esperaba\
        a que terminase de arrancar, se detuvo a pensar sobre cuál debía ser el\
        primer paso que tenía que dar en su, esperaba, gran día. ¿Qué era mejor\
        para salir del bloqueo en el que se encontraba? ¿Repasar todas sus notas\
        hasta entonces o descartar lo que había hecho hasta el momento y volver\
        a investigar todo el códice desde cero?</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap1h20'>&gt; Repasar las notas.</a></p>\
        <p class='transient'><a href='wcap1h21'>&gt; Volver al códice.</a></p>"
    ),
    wcap1h20: new undum.SimpleSituation(
        "<p>Decidió que no debía tirar todo el trabajo que había\
        realizado a la basura. Había estudiado tan a fondo esas páginas\
        que, sin duda, la solución al bloqueo en el que se encontraba\
        debía estar en sus notas. ¡Tenía que estar ahí!</p>\
        <p>El códice había sido escrito por seis escribas diferentes. Cada uno\
        tenía su propio tema, estilo de escritura y glifos diferentes. Las imágenes\
        del códice habían sido pintadas con una claridad extraordinaria,\
        utilizando pinceles muy finos.</p>\
        <p>Había conseguido decodificar buena parte de los símbolos que\
        había en el códice. La mayoría se refería a las figuras adjuntas y\
        comentaban sobre las imágenes en frases cortas. También había números,\
        formados por tres símbolos: barras (cinco), puntos (uno) y conchas\
        estilizadas (cero).</p>\
        <p>En las páginas del códice se hablaba de las deidades, de enfermedades,\
        curas y peligros al nacer y de los ciclos de Venus. Había tablas de los\
        eclipses solares y lunares y una misteriosa tabla de multiplicar del\
        números 78 y 91. No había conseguido averiguar la importancia de esos números.</p>\
        <p>También se hablaba de los desastres que podían ocurrir al final de un\
        ciclo de 13 k'atun (un k'atun equivalía a 20 años) y de los números serpiente,\
        que indicaban eventos míticos en períodos de unos 30.000 años. Y de la Gran\
        Inundación, un desastre cósmico que acabó destruyendo el mundo por una gran\
        inundación. Según el códice, el mundo actual había sido precedido por\
        otros tres mundos.</p>\
        <p>Pero lo más intrigante de todo era que el códice contenía tablas\
        astronómicas de una precisión extraordinaria. Predecía con exactitud los\
        movimientos de Marte y de Venus.</p>\
        <p>¿Cómo una civilización tan antigua podía haber obtenido conocimientos\
        tan avanzados del cosmos? ¿Qué importancia tenían los números 78 y 91?</p>\
        <p>Había símbolos y dibujos a los que no encontraba sentido. Había algo que\
        se le debía estar escapando, algo importante.</p>\
        <p>Repasó y repasó sus notas, contrastándolas una\
        y otra vez, pero le fue imposible avanzar. Otro día perdido.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap1h22'>&gt; Continúa leyendo.</a></p>"
    ),
    wcap1h21: new undum.Situation(
        "<p>Descartó todas sus notas y abrió los modelos en 3D\
        del códice que tenía en el ordenador, para poder verlo todo con más detalle.</p>\
        <p>Repasó los métodos utilizados y se puso manos a la obra minuciosamente\
        jeroglífico por jeroglífico.</p>\
        <p>El códice había sido escrito por seis escribas diferentes. Cada uno\
        tenía su propio tema, estilo de escritura y glifos diferentes. Las imágenes\
        del códice habían sido pintadas con una claridad extraordinaria,\
        utilizando pinceles muy finos.</p>\
        <p>Había conseguido decodificar buena parte de los símbolos que\
        había en el códice. La mayoría se refería a las figuras adjuntas y\
        comentaban sobre las imágenes en frases cortas. También había números,\
        formados por tres símbolos: barras (cinco), puntos (uno) y conchas\
        estilizadas (cero).</p>\
        <p>En las páginas del códice se hablaba de las deidades, de enfermedades,\
        curas y peligros al nacer y de los ciclos de Venus. Había tablas de los\
        eclipses solares y lunares y una misteriosa tabla de multiplicar del\
        números 78 y 91. No había conseguido averiguar la importancia de esos números.</p>\
        <p>También se hablaba de los desastres que podían ocurrir al final de un\
        ciclo de 13 k'atun (un k'atun equivalía a 20 años) y de los números serpiente,\
        que indicaban eventos míticos en períodos de unos 30.000 años. Y de la Gran\
        Inundación, un desastre cósmico que acabó destruyendo el mundo por una gran\
        inundación. Según el códice, el mundo actual había sido precedido por\
        otros tres mundos.</p>\
        <p>Pero lo más intrigante de todo era que el códice contenía tablas\
        astronómicas de una precisión extraordinaria. Predecía con exactitud los\
        movimientos de Marte y de Venus.</p>\
        <p>¿Cómo una civilización tan antigua podía haber obtenido conocimientos\
        tan avanzados del cosmos? ¿Qué importancia tenían los números 78 y 91?</p>\
        <p>Había símbolos y dibujos a los que no encontraba sentido. Había algo que\
        se le debía estar escapando, algo importante.</p>\
        <p>Repasó y repasó sus notas, contrastándolas una\
        y otra vez, pero le fue imposible avanzar. Otro día perdido.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap1h22'>&gt; Continúa leyendo.</a></p>"
    ),    
    wcap1h22: new undum.Situation(
        {
            enter: function(character, system, from) {
                if (system.rnd.randomInt(1, 10) < 6) {
	                system.write("<p>Apagó el ordenador y, cabizbajo, se dirigió\
	                a su habitación. Empezaba a perder el ánimo.</p>");
	                system.write("<p><br/></p>");
                    system.write("<p class='transient'><a href='wcap1h23'>&gt; Continúa leyendo.</a></p>");
                } else {
	                system.write("<p>Empezaba a perder el ánimo. Cabizbajo, se\
	                dispuso a apagar el ordenador y las luces.</p>");
                    system.write("<p>&laquo;¡Un momento! ¿Qué era eso?&raquo;. Le había parecido\
                    ver algo extraño en la pantalla del ordenador al pasar junto\
                    a él. Se acercó a ella para comprobarlo mejor.</p>");
	                system.write("<p><br/></p>");
                    system.write("<p class='transient'><a href='wcap1h24'>&gt; Continúa leyendo.</a></p>");
                }
            }
        }
    ),    
    wcap1h23: new undum.SimpleSituation(
        "<p>No había podido pegar ojo en toda la noche tras el nuevo fracaso del\
        día anterior con el códice. No obstante, se había levantado con un\
        poco más de ánimo con el que se había acostado, aunque no demasiado.</p>\
        <p>De nuevo, al llegar al laboratorio, se hizo la misma pregunta de todos\
        los días. ¿Por dónde empezar?</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap1h2'>&gt; Decidirse por estudiar el códice maya.</a></p>\
        <p class='transient'><a href='wcap1h3'>&gt; Decidirse por estudiar las tablillas de arcilla.</a></p>\
        <p class='transient'><a href='wcap1h4'>&gt; Decidirse por estudiar los discos de los Dropa.</a></p>"
    ),
    wcap1h24: new undum.SimpleSituation(
        "<p>&laquo;¡Sí!&raquo;. Algo extraño había en la página del códice que\
        tenía en esos momentos en pantalla.</p>\
        <p>Se inclinó sobre el teclado, sin sentarse, y aumentó el zoom para ver\
        con más detalle la anomalía.</p>\
        <p>Corrió atolondradamente hacia el códice original y fijó su mirada en\
        la zona que le había llamado la atención.</p>\
        <p>&laquo;¡Sí! ¡Ahí estaba!&raquo;.</p>\
        <p>Junto a las páginas dedicadas a los números serpiente, estaban las\
        dedicadas a los pilares del universo, una serie de manifestaciones del\
        dios de la lluvia Chaac. Pero había una en concreto que le había pasado\
        desapercibida hasta ahora y que había visto antes en alguna parte.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap1h24'>&gt; Continúa leyendo.</a></p>"
    ),
    wcap1h11: new undum.SimpleSituation(
        "<p>Lleno de entusiamo e impaciencia volvió de nuevo ante el ordenador del\
        laboratorio.</p>\
        <p>&laquo;¡Tiene que estar por aquí! ¡Tiene que estar por aquí!&raquo;.\
        A una velocidad endiablada, buscó entre cientos de imágenes hasta que\
        por fin encontró lo que buscaba.</p>\
        <p>&#8212;¡SI! ¡SI! ¡SI! &#8212; Salió corriendo del laboratorio, gritando,\
        con la intención de despertar a todo el Área 51.</p>\
        <p>La pantalla del ordenador mostraba el glifo que se correspondía con la\
        misma inscripción que se podía encontrar en la denominada tumba del\
        astronauta de Palenque.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h1'>&gt; Ir al capítulo 2.</a></p>"
    ),
    pcap1h1: new undum.SimpleSituation(
        "<h1>1 - La investigación</h1>"
    ),
    intro3: new undum.SimpleSituation(
        "<p>Le costaba horrores avanzar. Había estado caminando sin parar durante\
        todo aquel lluvioso día de otoño y sus ropajes se habían convertido en\
        una pesada carga. Aún así, lo peor de todo era el camino. Parecía como\
        si del barro surgiesen unas manos que le agarrasen con fuerza de las\
        piernas cada vez que intentaba dar un paso.</p>\
        <p>Se decía a sí mismo que no podía desfallecer, obligándose a dar un paso\
        y luego otro. Ya tendría tiempo de secarse y descansar junto al fuego de\
        la chimenea que había en el salón principal de «El Yelmo del Enano». Era\
        preciso que llegase a la posada ese día, o rompería el juramento que se\
        hicieron los tres amigos hace justo cuatro años.</p>\
        <p>Tal día como hoy, hace cuatro años, Valerya, Kallo y él se reunieron\
        por última vez en la posada. Recordaba que también estuvo lloviendo durante\
        todo el día. En aquel momento, los tres amigos decidieron abandonar la\
        aldea para buscar y vivir las aventuras con las que soñaban desde la\
        infancia. Durante cuatro años viajarían por Lutaria, cada uno por su\
        cuenta, y no intentarían ponerse en contacto unos con otros. Al cumplirse\
        el cuarto año, se reunirían de nuevo en «El Yelmo del Enano» para dejar\
        constancia de las aventuras vividas por cada uno de ellos.</p>\
        <p>Confiaba en que sus amigos hubieran podido cumplir sus sueños. Él no\
        había podido hacerlo. Había marchado con la esperanza de ver algún dragón,\
        de esos de los que hablan las leyendas, pero no lo había logrado.\ Visitó\
        el reino de Kiranda, donde, en su capital Kalaban, se aprendió y se entrenó\
        como guerrero con los mejores maestros. Al completar su formación, viajó\
        a Turbuc, también llamada la ciudad del desierto, capital de Thurangad.\
        Allí vivió junto a los Taneg, de los que aprendió a sobrevivir en las\
        condiciones más duras imaginables. En toda Lutaria se decía que aquel\
        que sobreviviese al desierto de Thurangad podía vivir en cualquier parte\
        del mundo. También visitó las islas de Ilkarth, donde trabajó de mercenario\
        entre los piratas. La vida en el mar le había endurecido.</p>\
        <p>Por último, cuando estuvo preparado, visitó el reino helado de Nurnas,\
        donde las leyendas cuentan que, en el interior de las montañas, hibernan\
        desde hace cientos de años los dragones, esperando a resurgir y volar de\
        nuevo por Lutaria. Pero todo fue en balde. No encontró nada que le hiciese\
        suponer que los dragones hubiesen existido alguna vez más allá de las\
        historias que de ellos se contaban.</p>\
        <p><br/></p>\
        <p class='transient'><a href='intro5'>&gt; Continúa leyendo.</a></p>"
    ),
    intro5: new undum.SimpleSituation(
        "<p>Llegó a la altura del tocón milagroso. A la derecha del camino,\
        entre unos matorrales, se ocultaba el viejo tocón de abeto, cubierto\
        de musgo casi en su totalidad. Desde siempre, a todos los niños de la\
        aldea les contaban historias maravillosas sobre el tocón. Leyendas\
        que aseguraban que era capaz de otorgar bendiciones a quien dejara\
        una moneda en su interior.</p>\
        <p>Cuentos de viejas, pensó. Desde niño había ido al tocón más de una\
        y de dos veces, pero nunca le había ocurrido nada. Había estado presente\
        cuando otros aldeanos habían requerido de la ayuda del milagroso tocón,\
        pero tampoco había presenciado con ellos nada extraordinario.</p>\
        <p>Era como si las monedas de los aldeanos no fueran lo suficientemente\
        dignas para obtener los favores de los dioses. O peor aún, después de\
        conocer la codicia que habitaba por el mundo, ahora entendía que, quizás, algún\
        ser despreciable había inventado esas historias para aprovecharse de\
        la inocente ignorancia de los aldeanos.</p>\
        <p><br/></p>\
        <p class='transient'><a href='intro6'>&gt; Detenerse ante el tocón y lanzar una moneda.</a></p>\
        <p class='transient'><a href='intro7'>&gt; Continuar avanzando por el camino.</a></p>"
    ),
    intro6: new undum.Situation(
        {
            enter: function(character, system, from) {
                system.setQuality("monedas", character.qualities.monedas-1);
                system.write("<p>A pesar de todo, seguía teniendo la duda de si el tocón era\
                  mágico o no. A fin de cuentas, si se produjera un milagro cada vez que algún\
                  habitante de la aldea lanzase una moneda al interior del tocón, no tendría\
                  ningún sentido llamarlos milagros. Así que, rebuscó entre su zurrón mientras\
                  se acercaba al tocón. Sacó una moneda y la dejó caer al interior del mismo.</p>");
                if (system.rnd.randomInt(1, 10) < 6) {
	                system.write("<p>Esperó durante unos segundos a que se produjese alguna reacción,\
	                  pero, como era de esperar, no ocurrió nada extraordinario. Maldijo para adentro\
	                  esos condenados cuentos de viejas mientras daba una patada al viejo árbol muerto\
	                  antes de darse la vuelta. Con una moneda menos, volvió de nuevo al camino y\
	                  reemprendió la marcha hacia la posada.</p>");
	                system.write("<p><br/></p>");
                    system.write("<p class='transient'><a href='intro5'>&gt; Continúa leyendo.</a></p>");
                } else {
	                system.write("<p>Esperó durante unos segundos a que se produjese alguna reacción,\
	                  pero, como era de esperar, no ocurrió nada extraordinario. Maldijo para adentro\
	                  esos condenados cuentos de viejas, mientras daba una patada al viejo árbol muerto\
	                  antes de darse la vuelta. Cuando volvía de nuevo al camino para reemprender la marcha\
	                  hacia la posada, oyó una chirriante voz a su espalda.</p>");
	                system.write("<p>&#8212;No deberías maldecir en lugares mágicos, Lorgen, hijo de Yoren.\
	                  &#8212;oyó decir a una chirriante voz a su espalda cuando volvía de nuevo al camino para reemprender\
	                  la marcha hacia la posada.</p>");
	                system.write("<p>Se giró bruscamente y vió a un pequeño ser sentado sobre el tocón. No mediría\
	                  más de una cuarta, y los pies le colgaban alegremente sin llegar al suelo. Tenía la cara\
	                  regordeta y una nariz redondeada flanqueada por dos respingados mofletes coloreados. Los\
	                  ojos eran oscuros y profundos, justo debajo de un flequillo que era el comienzo de una\
	                  cabellera larga y castaña. Vestía con un chaleco de lana justo encima de una camisa de tela\
	                  azul. Los pantalones eran de color rojo y llevaba botas marrones.</p>");
	                system.write("<p>&laquo;Mierda de suerte... ¡un gnomo!&raquo; Casi prefería que no hubiese\
	                  ocurrido nada, como todas las veces anteriores. ¿Por qué no se mencionaba a ningún gnomo\
	                  en las historias que se contaban sobre el tocón? Durante sus viajes le habían contado\
	                  lo que significaba enfrentarse a un gnomo, y eso no le gustaba nada. Nunca se le habían\
	                  dado bien los acertijos.</p>");              
	                system.write("<p>&#8212;¿Preparado? &#8212;le dijo el gnomo. Le explicó que desafiar a un\
	                  gnomo podía darle una bendición si vencía, pero también le podía dar una maldición en caso\
	                  de ser derrotado. Si abandonaba el desafío sin dar una respuesta al acertijo, le entregaría\
	                  su alma al gnomo, que podría reclamarsela en cualquier momento. Algo que, por otra parte,\
	                  ya conocía.</p>");
	                system.write("<p>&#8212;Sí &#8212;contestó de mala gana.</p>");
	                system.write("<p>El gnomo se puso en pie sobre el tocón de un grácil salto y comenzó a recitar.</p>");
	                system.write("<p><center>&laquo;Yendo en un día soleado hacia Villavieja<center></p>");
	                system.write("<p><center>me crucé con siete viejas.<center></p>");
	                system.write("<p><center>Cada vieja portaba siete carros<center></p>");
	                system.write("<p><center>y en cada carro había siete ovejas.<center></p>");
	                system.write("<p><center>¿Cuántas ovejas y viejas llegaron a Villavieja?&raquo;<center></p>");
                    system.write("<p><br/></p>");
                    system.write("<p class='transient'><a href='intro6r1'>&gt; Contestar &quot;Siete viejas y siete ovejas&quot;.</a></p>");
                    system.write("<p class='transient'><a href='intro6r2'>&gt; Contestar &quot;Siete viejas y cuarenta y nueve ovejas&quot;.</a></p>");
                    system.write("<p class='transient'><a href='intro6r3'>&gt; Contestar &quot;Siete viejas y trescientas cuarenta y tres ovejas&quot;.</a></p>");
                    system.write("<p class='transient'><a href='intro6r4'>&gt; Contestar &quot;Una vieja y siete ovejas&quot;.</a></p>");
                    system.write("<p class='transient'><a href='intro6r5'>&gt; Contestar &quot;Una vieja y cuarenta y nueve ovejas&quot;.</a></p>");
                    system.write("<p class='transient'><a href='intro6r6'>&gt; Contestar &quot;Una vieja y trescientas cuarenta y tres ovejas&quot;.</a></p>");
                    system.write("<p class='transient'><a href='intro6r7'>&gt; Contestar &quot;Ninguna vieja y ninguna oveja&quot;.</a></p>");
                    system.write("<p class='transient'><a href='intro6r8'>&gt; Abandonar el desafío del gnomo y volver al camino.</a></p>");
                }
            }
        }
    ),
    intro6r1: new undum.Situation({
        enter: function(character, system, from) {
            system.setQuality("maldicion", 1);
            system.write("<p>&laquo;¡Por los Antiguos!&raquo; Seguro que era un acertijo con truco. Las historias\
              que se contaban sobre ellos estaban llenas de trucos. En casi todas esas historias los gnomos se\
              salían con la suya.</p>");
            system.write("<p>Hacer números no iba con él. Eso siempre lo había dejado en manos de Kallo.\
              &laquo;¡Mierda!&raquo; Ahora se arrepentía por no haberse preocupado nunca en seguir los razonamientos.</p>");
            system.write("<p>&#8212;Siete viejas y siete ovejas llegaron a Villavieja &#8212;se atrevió a contestar\
              tras repasar y asegurarse de que no se había equivocado en sus cálculos. Había estado usando pequeñas\
              ramitas para contar las viejas y piedrecitas que había junto al tocón para contar las ovejas.</p>");
            system.write("<p>&#8212;¡Ja, ja, ja, ja! &#8212;El gnomo comenzó a reirse a carcajadas. Se desvaneció\
              de la misma forma en la que apareció. Tan sólo quedó su risa y su voz en el aire.</p>");
            system.write("<p><center>&laquo;No llegó ninguna vieja ni ninguna oveja,<center></p>");
            system.write("<p><center>pues era yo el que iba hacia Villavieja&raquo;<center></p>");
            system.write("<p>Se quedó pensando un rato, enfadado por su torpeza. &laquo;¡El maldito\
              gnomo me ha engañado!&raquo; Estando sobre aviso de los trucos que se gastaban esos\
              pequeños tramposos, su enfado era todavía mayor.</p>");
            system.write("<p>Dio media vuelta y volvió al camino.</p>");
            system.write("<p><br/></p>");
            system.write("<p class='transient'><a href='intro7'>&gt; Continúa leyendo.</a></p>");
        }
    }),
    intro6r2: new undum.Situation({
        enter: function(character, system, from) {
            system.setQuality("maldicion", 1);
            system.write("<p>&laquo;¡Por los Antiguos!&raquo; Seguro que era un acertijo con truco. Las historias\
              que se contaban sobre ellos estaban llenas de trucos. En casi todas esas historias los gnomos se\
              salían con la suya.</p>");
            system.write("<p>Hacer números no iba con él. Eso siempre lo había dejado en manos de Kallo.\
              &laquo;¡Mierda!&raquo; Ahora se arrepentía por no haberse preocupado nunca en seguir los razonamientos.</p>");
            system.write("<p>&#8212;Siete viejas y cuarenta y nueve ovejas llegaron a Villavieja &#8212;se atrevió a contestar\
              tras repasar y asegurarse de que no se había equivocado en sus cálculos. Había estado usando pequeñas\
              ramitas para contar las viejas y piedrecitas que había junto al tocón para contar las ovejas.</p>");
            system.write("<p>&#8212;¡Ja, ja, ja, ja! &#8212;El gnomo comenzó a reirse a carcajadas. Se desvaneció\
              de la misma forma en la que apareció. Tan sólo quedó su risa y su voz en el aire.</p>");
            system.write("<p><center>&laquo;No llegó ninguna vieja ni ninguna oveja,<center></p>");
            system.write("<p><center>pues era yo el que iba hacia Villavieja&raquo;<center></p>");
            system.write("<p>Se quedó pensando un rato, enfadado por su torpeza. &laquo;¡El maldito\
              gnomo me ha engañado!&raquo; Estando sobre aviso de los trucos que se gastaban esos\
              pequeños tramposos, su enfado era todavía mayor.</p>");
            system.write("<p>Dio media vuelta y volvió al camino.</p>");
            system.write("<p><br/></p>");
            system.write("<p class='transient'><a href='intro7'>&gt; Continúa leyendo.</a></p>");
        }
    }),
    intro6r3: new undum.Situation({
        enter: function(character, system, from) {
            system.setQuality("maldicion", 1);
            system.write("<p>&laquo;¡Por los Antiguos!&raquo; Seguro que era un acertijo con truco. Las historias\
              que se contaban sobre ellos estaban llenas de trucos. En casi todas esas historias los gnomos se\
              salían con la suya.</p>");
            system.write("<p>Hacer números no iba con él. Eso siempre lo había dejado en manos de Kallo.\
              &laquo;¡Mierda!&raquo; Ahora se arrepentía por no haberse preocupado nunca en seguir los razonamientos.</p>");
            system.write("<p>&#8212;Siete viejas y trescientas cuarenta y tres ovejas llegaron a Villavieja &#8212;se atrevió a contestar\
              tras repasar y asegurarse de que no se había equivocado en sus cálculos. Había estado usando pequeñas\
              ramitas para contar las viejas y piedrecitas que había junto al tocón para contar las ovejas.</p>");
            system.write("<p>&#8212;¡Ja, ja, ja, ja! &#8212;El gnomo comenzó a reirse a carcajadas. Se desvaneció\
              de la misma forma en la que apareció. Tan sólo quedó su risa y su voz en el aire.</p>");
            system.write("<p><center>&laquo;No llegó ninguna vieja ni ninguna oveja,<center></p>");
            system.write("<p><center>pues era yo el que iba hacia Villavieja&raquo;<center></p>");
            system.write("<p>Se quedó pensando un rato, enfadado por su torpeza. &laquo;¡El maldito\
              gnomo me ha engañado!&raquo; Estando sobre aviso de los trucos que se gastaban esos\
              pequeños tramposos, su enfado era todavía mayor.</p>");
            system.write("<p>Dio media vuelta y volvió al camino.</p>");
            system.write("<p><br/></p>");
            system.write("<p class='transient'><a href='intro7'>&gt; Continúa leyendo.</a></p>");
        }
    }),
    intro6r4: new undum.Situation({
        enter: function(character, system, from) {
            system.setQuality("maldicion", 1);
            system.write("<p>&laquo;¡Por los Antiguos!&raquo; Seguro que era un acertijo con truco. Las historias\
              que se contaban sobre ellos estaban llenas de trucos. En casi todas esas historias los gnomos se\
              salían con la suya.</p>");
            system.write("<p>Hacer números no iba con él. Eso siempre lo había dejado en manos de Kallo.\
              &laquo;¡Mierda!&raquo; Ahora se arrepentía por no haberse preocupado nunca en seguir los razonamientos.</p>");
            system.write("<p>&#8212;Una vieja y siete ovejas llegaron a Villavieja &#8212;se atrevió a contestar\
              tras repasar y asegurarse de que no se había equivocado en sus cálculos. Había estado usando pequeñas\
              ramitas para contar las viejas y piedrecitas que había junto al tocón para contar las ovejas.</p>");
            system.write("<p>&#8212;¡Ja, ja, ja, ja! &#8212;El gnomo comenzó a reirse a carcajadas. Se desvaneció\
              de la misma forma en la que apareció. Tan sólo quedó su risa y su voz en el aire.</p>");
            system.write("<p><center>&laquo;No llegó ninguna vieja ni ninguna oveja,<center></p>");
            system.write("<p><center>pues era yo el que iba hacia Villavieja&raquo;<center></p>");
            system.write("<p>Se quedó pensando un rato, enfadado por su torpeza. &laquo;¡El maldito\
              gnomo me ha engañado!&raquo; Estando sobre aviso de los trucos que se gastaban esos\
              pequeños tramposos, su enfado era todavía mayor.</p>");
            system.write("<p>Dio media vuelta y volvió al camino.</p>");
            system.write("<p><br/></p>");
            system.write("<p class='transient'><a href='intro7'>&gt; Continúa leyendo.</a></p>");
        }
    }),
    intro6r5: new undum.Situation({
        enter: function(character, system, from) {
            system.setQuality("maldicion", 1);
            system.write("<p>&laquo;¡Por los Antiguos!&raquo; Seguro que era un acertijo con truco. Las historias\
              que se contaban sobre ellos estaban llenas de trucos. En casi todas esas historias los gnomos se\
              salían con la suya.</p>");
            system.write("<p>Hacer números no iba con él. Eso siempre lo había dejado en manos de Kallo.\
              &laquo;¡Mierda!&raquo; Ahora se arrepentía por no haberse preocupado nunca en seguir los razonamientos.</p>");
            system.write("<p>&#8212;Una vieja y cuarenta y nueve ovejas llegaron a Villavieja &#8212;se atrevió a contestar\
              tras repasar y asegurarse de que no se había equivocado en sus cálculos. Había estado usando pequeñas\
              ramitas para contar las viejas y piedrecitas que había junto al tocón para contar las ovejas.</p>");
            system.write("<p>&#8212;¡Ja, ja, ja, ja! &#8212;El gnomo comenzó a reirse a carcajadas. Se desvaneció\
              de la misma forma en la que apareció. Tan sólo quedó su risa y su voz en el aire.</p>");
            system.write("<p><center>&laquo;No llegó ninguna vieja ni ninguna oveja,<center></p>");
            system.write("<p><center>pues era yo el que iba hacia Villavieja&raquo;<center></p>");
            system.write("<p>Se quedó pensando un rato, enfadado por su torpeza. &laquo;¡El maldito\
              gnomo me ha engañado!&raquo; Estando sobre aviso de los trucos que se gastaban esos\
              pequeños tramposos, su enfado era todavía mayor.</p>");
            system.write("<p>Dio media vuelta y volvió al camino.</p>");
            system.write("<p><br/></p>");
            system.write("<p class='transient'><a href='intro7'>&gt; Continúa leyendo.</a></p>");
        }
    }),
    intro6r6: new undum.Situation({
        enter: function(character, system, from) {
            system.setQuality("maldicion", 1);
            system.write("<p>&laquo;¡Por los Antiguos!&raquo; Seguro que era un acertijo con truco. Las historias\
              que se contaban sobre ellos estaban llenas de trucos. En casi todas esas historias los gnomos se\
              salían con la suya.</p>");
            system.write("<p>Hacer números no iba con él. Eso siempre lo había dejado en manos de Kallo.\
              &laquo;¡Mierda!&raquo; Ahora se arrepentía por no haberse preocupado nunca en seguir los razonamientos.</p>");
            system.write("<p>&#8212;Una vieja y trescientas cuarenta y tres ovejas llegaron a Villavieja &#8212;se atrevió a contestar\
              tras repasar y asegurarse de que no se había equivocado en sus cálculos. Había estado usando pequeñas\
              ramitas para contar las viejas y piedrecitas que había junto al tocón para contar las ovejas.</p>");
            system.write("<p>&#8212;¡Ja, ja, ja, ja! &#8212;El gnomo comenzó a reirse a carcajadas. Se desvaneció\
              de la misma forma en la que apareció. Tan sólo quedó su risa y su voz en el aire.</p>");
            system.write("<p><center>&laquo;No llegó ninguna vieja ni ninguna oveja,<center></p>");
            system.write("<p><center>pues era yo el que iba hacia Villavieja&raquo;<center></p>");
            system.write("<p>Se quedó pensando un rato, enfadado por su torpeza. &laquo;¡El maldito\
              gnomo me ha engañado!&raquo; Estando sobre aviso de los trucos que se gastaban esos\
              pequeños tramposos, su enfado era todavía mayor.</p>");
            system.write("<p>Dio media vuelta y volvió al camino.</p>");
            system.write("<p><br/></p>");
            system.write("<p class='transient'><a href='intro7'>&gt; Continúa leyendo.</a></p>");
        }
    }),
    intro6r7: new undum.Situation({
        enter: function(character, system, from) {
            system.setQuality("bendicion", 1);
            system.write("<p>&laquo;¡Por los Antiguos!&raquo; Seguro que era un acertijo con truco. Las historias\
              que se contaban sobre ellos estaban llenas de trucos. En casi todas esas historias los gnomos se\
              salían con la suya.</p>");
            system.write("<p>Hacer números no iba con él. Eso siempre lo había dejado en manos de Kallo.\
              &laquo;¡Mierda!&raquo; Ahora se arrepentía por no haberse preocupado nunca en seguir los razonamientos.</p>");
            system.write("<p>&#8212;Ninguna vieja y ninguna oveja llegaron a Villavieja &#8212;se atrevió a contestar\
              tras repasar y asegurarse de que no se había equivocado en sus cálculos. Había estado usando pequeñas\
              ramitas para contar las viejas y piedrecitas que había junto al tocón para contar las ovejas.</p>");
            system.write("<p>La cara del gnomo cambió de repente. Se desvaneció de la misma forma en la que\
              había aparecido. Tan sólo quedó su voz en el aire.</p>");
            system.write("<p><center>&laquo;No llegó ninguna vieja ni ninguna oveja,<center></p>");
            system.write("<p><center>pues era yo el que iba hacia Villavieja&raquo;<center></p>");
            system.write("<p>&laquo;¡El gnomo ha intentado engañarme pero no ha podido!&raquo;\
              Afortunadamente, se dio cuenta a tiempo del truco que había en el acertijo.</p>");
            system.write("<p>Una sonrisa se dibujó en su cara mientras daba media vuelta y\
              volvía al camino.</p>");
            system.write("<p><br/></p>");
            system.write("<p class='transient'><a href='intro7'>&gt; Continúa leyendo.</a></p>");
        }
    }),
    intro6r8: new undum.Situation({
        enter: function(character, system, from) {
            system.setQuality("deudaalma", 1);
            system.write("<p>&laquo;¡Por los Antiguos!&raquo; Seguro que era un acertijo con truco. Las historias\
              que se contaban sobre ellos estaban llenas de trucos. En casi todas esas historias los gnomos se\
              salían con la suya.</p>");
            system.write("<p>Hacer números no iba con él. Eso siempre lo había dejado en manos de Kallo.\
              &laquo;¡Mierda!&raquo; Ahora se arrepentía por no haberse preocupado nunca en seguir los razonamientos.</p>");
            system.write("<p>Usó pequeñas ramitas para contar las viejas y piedrecitas que había junto al tocón\
              para contar las ovejas, pero cada vez que lo intentaba le salía una cantidad final diferente de\
              ramitas y de piedras.</p>");
            system.write("<p>Estaba seguro de que el gnomo se la había jugado. Contestase lo que contestase fallaría,\
              pues, a tenor de lo que se contaba en todas esas historias sobre gnomos, el acertijo seguro que era\
              una trampa. &laquo;¡A la mierda el gnomo! No quiero perder más tiempo.&raquo; Dio media vuelta y\
              volvió al camino.</p>");
            system.write("<p>&#8212;¡Ja, ja, ja, ja! &#8212;El gnomo comenzó a reirse a carcajadas. Se desvaneció\
              de la misma forma en la que apareció. Tan sólo quedó su risa y su voz en el aire.</p>");
            system.write("<p><center>&laquo;No llegó ninguna vieja ni ninguna oveja,<center></p>");
            system.write("<p><center>pues era yo el que iba hacia Villavieja&raquo;<center></p>");
            system.write("<p><br/></p>");
            system.write("<p class='transient'><a href='intro7'>&gt; Continúa leyendo.</a></p>");
        }
    }),
    intro7: new undum.SimpleSituation(
        "<p>Por fin llegó a lo alto de la colina. Desde allí podía ver &laquo;El Yelmo del Enano.&raquo;\
        No era una posada lujosa, comparándola con las que había encontrado en su camino\
        durante estos cuatro años, pero era confortable. Recordaba que las vidrieras de\
        las ventanas convertían, en el interior, los rayos del sol en luz de brillantes colores.</p>\
        <p>En aquella época, a última hora de la tarde casi todo el mundo se las arreglaba para\
        dejarse caer por la posada. La gente se sentía más segura en grandes grupos.\
        Aunque la noche de aquel día de otoño era fría, sabía que el calor del fuego\
        de la chimenea y la compañía le ayudarían a olvidar las penas del viaje.</p>\
        <p>&#8212;Por fin he vuelto a casa. &#8212;se dijo a sí mismo mientras se\
        encaminó hacia la posada.</p>\
        <p><br/></p>\
        <p class='transient'><a href='cap1h1'>&gt; Ir al capítulo 1.</a></p>"
    ),

    cap1h1: new undum.SimpleSituation(
        "<h1>Próximamente</h1>"
    ),

    // For variety, here we define a situation using the top-level
    // Situation type. This is a neat approach to generate text by
    // looking it up in the HTML document. For static text that makes
    // more sense than writing it longhand.
    rooms: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_rooms").html());
        }
    }),
    todo: new undum.SimpleSituation(
        "<p>Two things can happen in a situation. The character either\
        <a href='links'>leaves</a> the situation and enters another one, or\
        they carry out some <a href='./do-something'>action</a>. Actions may\
        perform some processing, they may display some results, but\
        ultimately they put the character back into the same situation\
        again.</p>\
        \
        <p>When you are designing your game, use situations to reflect a\
        change in what the character can do. So you would change situation if\
        the character pulls a lever to open a trapdoor, for example. Actions\
        are intended for situations where the character can examine things\
        more closely, or maybe top up their magic by drinking a potion.\
        Things that don't affect the state of the world around them.</p>\
        \
        <p>Situations generate content when they are <em>enter</em>ed,\
        <em>exit</em>ed, and when they receive an <em>act</em>ion (the\
        italicised words are the names of the three methods that do this).\
        You can write code to generate content in any way you like, so the\
        content that is displayed can be totally dynamic: taking into\
        account the current state of the character.\
        Content is just plain HTML, so you use regular HTML tags to make\
        things <strong>bold</strong> or <em>italic</em>, or to include\
        images. This gives you a lot of flexibility. For example, since Undum\
        targets HTML5 browsers, you could use the <em>audio</em> or\
        <em>video</em> tags to include rich media.</p>\
        \
        <p class='transient'>Make sure you've carried out the action above,\
        then <a href='links'>continue</a>.</p>",
        {
            actions: {
                'do-something': "<p>You carried out the action, well done.\
                                 You'll notice that the links for this\
                                 situation are still active. This means you\
                                 can click to perform the action again.</p>"
            }
        }
    ),
    links: new undum.SimpleSituation(
        "<h1>Changing Content</h1>\
        <p>Between each chunk of new text, Undum inserts a discrete line\
        in the margin. This allows you to see at a glance everything that\
        has been output as a result of your last click.\
        It is particularly useful for small devices, or when\
        lots of content has appeared. The window also scrolls so the start\
        of the new content is as near to the top of the window as possible.\
        This is also designed to help you read more naturally.</p>\
        \
        <p>If you've been watching carefully, you will have noticed that\
        parts of the text have been disappearing when you move between\
        situations. This isn't a bug! One of the aims of Undum is to give\
        game designers the ability to make the transcript of\
        the game read as a coherent piece of narrative. However, you often\
        need chunks of text that do nothing but offer the reader choices.\
        Undum defines a special CSS class to add to your HTML for this\
        (remember generated content is just HTML). It is <em>transient</em>,\
        and can be applied to paragraphs, <em>div</em>s, or just\
        <em>span</em>s<span class='transient'> (such as this one)</span>.</p>\
        \
        <p>You may also have noticed that, when you move situations, all the\
        links in the previous situation turn into regular text. This is to\
        stop you backtracking and trying previous options when you've already\
        committed to one. In other H-IF systems, this is\
        done by completely removing the content from previous pages.\
        That prevents you going back and reading your story, however.</p>\
        \
        <p class='transient'>Let's learn more about these links, and\
        see how to <a href='sticky'>change that</a> behaviour.</p>"
    ),
    sticky: new undum.SimpleSituation(
        "<h1>Links</h1>\
        <p>There are three types of link in Undum. The first two we've seen:\
        links to change situation and links to carry out an action. When you\
        include a link in your output, Undum parses it and wires it up\
        correctly. If you create a link with a HTML <em>href</em> attribute\
        containing just a name ('ballroom', for\
        example) this will send the character to the situation with that\
        name. Links\
        with two components ('ballroom/view-painting', for example) send\
        the character to a new situation <em>and then</em> carry out the\
        named action ('view-painting' in this case). To carry out an action\
        in the current situation, you can replace the situation name with a\
        dot (so it would be './view-painting'). In all cases, if the\
        character is already in that situation, then the situation's\
        <em>enter</em> method won't be called again.</p>\
        \
        <img src='media/games/tutorial/woodcut2.png' class='float_left'>\
        <p>The third type of link, then, is a general hyperlink. If your\
        link doesn't consist of a single element or pair of elements, as\
        above, then Undum will guess that you have a normal hyperlink. As\
        <a href='http://news.bbc.co.uk' class='sticky'>in this link</a>.\
        If you have a link that <em>does</em> look like an Undum link, you\
        can still force Undum not to interpret it as an action or situation\
        move, by adding the CSS class <em>raw</em> to the HTML <em>a</em> tag.\
        links that don't have the <em>raw</em> class, but that are considered\
        to be non-Undum links (like the link above), will have <em>raw</em>\
        added to them before display. This could allow you to style external\
        links differently, as we have done here.</p>\
        \
        <p>In the last situation I said you can prevent links from being\
        turned into regular text when you move situations. This is done\
        by another CSS class: <em>sticky</em>. When you\
        <a href='oneshot'>leave this situation</a>, you'll notice the\
        external link stays active. This can allow you to have options that\
        stay valid throughout the narrative, for example, such as a spell to\
        teleport home.</p>"
    ),
    oneshot: new undum.SimpleSituation(
        "<p>There is one final option for links. If you give a link\
        the <em>once</em> CSS class, then that link will disappear\
        after it is clicked. This is  used (as in\
        <a href='./one-time-action' class='once'>this link</a>) for\
        actions that you only want to be possible once. There is no\
        point using 'once' on situation links because they'll be turned\
        into text as soon as you click them anyway (unless they are also\
        <em>sticky</em>, of course).</p><p>Once links are useful\
        for actions such as examining an object more carefully. You\
        don't want lots of repeated descriptions, so making the link\
        a <em>once</em> link is more user friendly.</p>\
        <p>If you have more than one link to the same action, then all\
        matching links will be removed, so you don't have to worry about\
        the player having an alternative way to carry out the action.</p>\
        <p class='transient'>After you've clicked the link, let's\
        <a href='qualities'>move on</a>.</p>",
        {
            actions: {
                "one-time-action": "<p>As I said, one time actions are\
                                   mostly used to describe something in\
                                   more detail, where you don't want the\
                                   same descriptive text repeated over and\
                                   over</p>"
            }
        }
    ),
    qualities: new undum.SimpleSituation(
        "<h1>Qualities</h1>\
        <p>That's enough about situations. Let's talk about the character.\
        The character is described by a series of <em>qualities</em>. These\
        are numeric values that can describe anything from natural abilities\
        to how much of a resource the character controls. Qualities are\
        shown in the box on the right of the text.</p>\
        \
        <p>The qualities there are those you started the game with. When you\
        <a href='quality-types'>go to the next situation</a>, keep your\
        eyes on the character panel. You'll notice I'll give you a boost to\
        your stamina quality. This process is animated and highlighted to\
        draw your attention to it. You could also get a boost of skill\
        by carrying out <a href='./skill-boost'>this action</a> as many\
        times as you like.</p>",
        {
            actions: {
                "skill-boost": function(character, system, action) {
                    system.setQuality("skill", character.qualities.skill+1);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("stamina", character.qualities.stamina+1);
            }
        }
    ),
    "quality-types": new undum.SimpleSituation(
        "<p>Not all the qualities in the character panel are displayed as\
        numeric. Internally they are all numeric, but different qualities\
        get to choose how to display themselves. So 'Luck', for example, is\
        displayed as words (based on the FUDGE RPG's adjective scale),\
        and 'Novice' is using just a check-mark.</p>\
        \
        <p>To see how Luck changes, try using this\
        <a href='./luck-boost'>luck-boosting action</a> or this\
        <a href='./luck-reduce'>luck-reducing action</a>. Notice that\
        luck uses a numeric bonus when it runs out of words. There are a range\
        of different display types provided with Undum, and you can easily\
        add your own too.</p>\
        \
        <p>When you <a href='character-text'>leave this situation</a>,\
        I'll set 'Novice' to zero. Watch\
        the character panel, and you'll see that Novice decides it doesn't\
        need to be displayed any more and will be removed. You will also see\
        that when the last\
        quality in a group is removed ('Novice' is in the 'Progress' group),\
        then the group heading is also removed. You can tell Undum what\
        group each quality belongs to, and what order they should be listed.\
        <p>",
        {
            actions: {
                "luck-boost": function(character, system, action) {
                    system.setQuality("luck", character.qualities.luck+1);
                },
                "luck-reduce": function(character, system, action) {
                    system.setQuality("luck", character.qualities.luck-1);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("novice", 0);
            }
        }
    ),
    "character-text": new undum.SimpleSituation(
        "<h1>Character Text</h1>\
        <p>Above the list of qualities is a short piece of text, called\
        the character-text. This describes the character in some way. It\
        can be set by any action or when entering or leaving a situation.\
        It is just regular HTML content, as for all text in Undum. It can\
        also contain Undum links, so this is another place you can put\
        actions that the character can carry out over a long period of time.\
        </p>\
        <p class='transient'>Let's go to the\
        <a href='progress'>next situation</a>. As you do, I'll change the\
        character text. Notice that it is highlighted, just the same as\
        when a quality is altered.</p>",
        {
            exit: function(character, system, to) {
                system.setCharacterText(
                    "<p>We're nearing the end of the road.</p>"
                );
            }
        }
    ),
    progress: new undum.SimpleSituation(
        "<h1>Showing Progress</h1>\
        <p>Sometimes you want to make a change in quality a more\
        significant event. You can do this by animating the change in\
        quality. If you <a href='./boost-stamina-action'>boost your\
        stamina</a>, you will see the stamina change in the normal\
        way in the character panel. But you will also see a progress\
        bar appear and animate below.</p>",
        {
            actions: {
                // I'm going indirect here - the link carries out an
                // action, which then uses doLink to directly change
                // the situation.  This isn't the recommended way (I
                // could have just changed situation in the link), but
                // it illustrates the use of doLink.
                "boost-stamina-action": function(character, system, action) {
                    system.doLink("boost-stamina");
                }
            },
            exit: function(character, system, to) {
                system.animateQuality(
                    'stamina', character.qualities.stamina+1
                );
            }
        }
    ),
    "boost-stamina": new undum.SimpleSituation(
        "<p>The progress bar is also useful in situations where the\
        character block is displaying just the whole number of a quality,\
        whereas some action changes a fraction. If the quality is displaying\
        the character's level, for example, you might want to show a progress\
        bar to indicate how near the character is to levelling up.</p>\
        \
        <img src='media/games/tutorial/woodcut3.png' class='float_right'>\
        <p>After a few seconds, the progress bar disappears, to keep the\
        focus on the text. Undum isn't designed for games where a lot of\
        statistic management is needed. If you want a change to be part\
        of the permanent record of the game, then write it in text.</p>\
        \
        <p>Now we're almost at the end of the road. But so\
        far you have moved through this tutorial linearly - from one\
        situation to the next, without any choice. Undum is designed to\
        support narratives that branch and merge.</p>\
        \
        <p class='transient'>As a tiny illustration\
        of this, choose between these two branches:</p>\
        <ul class='options'>\
            <li><a href='one'>option one</a>, or</li>\
            <li><a href='two'>option two</a>.</li>\
        </ul>\
        <p class='transient'>The option block above is a regular HTML\
        unordered list (<em>ul</em> tag), with the special <em>options</em>\
        class. You can click anywhere on the option row to carry out the\
        action.</p>"
    ),
    one: new undum.SimpleSituation(
        "<h1>Option One</h1>\
        <p>You chose option one, which is probably for the best, since\
        option two is written in badly rhyming Coptic.\
        </p>\
        <p>From here it is just a <a href='saving'>short step</a> to the\
        final bits of content in this tutorial.</p>"
    ),
    "two": new undum.SimpleSituation(
        "<h1>Option Two</h1>\
        <p>You chose option two, which is my favourite option as well.\
        I find the photographs accompanying option one to be too disturbing.\
        Finger nails just shouldn't bend that way...</p>\
        <p>From here it is just a <a href='saving'>short step</a> to the\
        final bits of content in this tutorial.</p>"
    ),
    // Again, we'll retrieve the text we want from the HTML file.
    "saving": new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_saving").html());
        }
    }),
    "last": new undum.SimpleSituation(
        "<h1>Where to Go Now</h1>\
        <p>So that's it. We've covered all of Undum. This situation is the\
        end, because it has no further links. The 'The End' message is\
        just in the HTML output of this situation, it isn't anything special\
        to Undum</p>\
        \
        <p>I've added an\
        inspiration quality to your character list. Its time for you to\
        crack open the game file and write your own story.</p>\
        <h1>The End</h1>",
        {
            enter: function(character, system, from) {
                system.setQuality("inspiration", 1);
                system.setCharacterText(
                    "<p>You feel all inspired, why not have a go?</p>"
                );
            }
        }
    )
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
//if (system.rnd.randomInt(1, 10) < 6) {
  undum.game.start = "w_intro";
//} else {
//  undum.game.start = "p_intro";
//}

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
/*    skill: new undum.IntegerQuality(
        "Skill", {priority:"0001", group:'stats'}
    ),*/
    nivel: new undum.IntegerQuality(
        "Nivel", {priority:"0001", group:'general'}
    ),
    profesion: new undum.WordScaleQuality(
        "Profesión", ["Bardo","Guerrero","Explorador","Mago","Clerigo","Ladron"],{priority:"0002", group:'general'}
    ),
    stamina: new undum.IntegerQuality(
        "Stamina", {priority:"0003", group:'general'}
    ),
    defensa: new undum.IntegerQuality(
        "Defensa", {priority:"0004", group:'general'}
    ),
    monedas: new undum.IntegerQuality(
        "Monedas", {priority:"0005", group:'general'}
    ),
    carisma: new undum.IntegerQuality(
        "Carisma", {priority:"0001", group:'stats'}
    ),
    combate: new undum.IntegerQuality(
        "Combate", {priority:"0002", group:'stats'}
    ),
    magia: new undum.IntegerQuality(
        "Magia", {priority:"0003", group:'stats'}
    ),
    explorar: new undum.IntegerQuality(
        "Explorar", {priority:"0004", group:'stats'}
    ),
    santidad: new undum.IntegerQuality(
        "Santidad", {priority:"0005", group:'stats'}
    ),
    subterfugio: new undum.IntegerQuality(
        "Subterfugio", {priority:"0006", group:'stats'}
    ),

 /*  luck: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Skill, Stamina and Luck are reverently borrowed from the Fighting Fantasy series of gamebooks. The words representing Luck are from the FUDGE RPG. This tooltip is illustrating that you can use any HTML in the label for a quality (in this case a span containing a title attribute).'>Luck</span>",
        {priority:"0003", group:'stats'}
    ),*/

    inspiration: new undum.NonZeroIntegerQuality(
        "Inspiration", {priority:"0001", group:'progress'}
    ),
    novice: new undum.OnOffQuality(
        "Novice", {priority:"0002", group:'progress', onDisplay:"&#10003;"}
    ),
    bendicion: new undum.OnOffQuality(
        "Bendición", {priority:"0001", group:'progress', onDisplay:"&#10003;"}
    ),
    maldicion: new undum.OnOffQuality(
        "Maldición", {priority:"0002", group:'progress', onDisplay:"&#10003;"}
    ),
    deudaalma: new undum.OnOffQuality(
        "Deuda de alma", {priority:"0003", group:'progress', onDisplay:"&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    general: new undum.QualityGroup(null, {priority:"0001"}),
    stats: new undum.QualityGroup('Atributos', {priority:"0002"}),
    progress: new undum.QualityGroup('Progreso', {priority:"0003"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    //character.qualities.skill = 12;
    character.qualities.nivel = 1;
    character.qualities.profesion = 1;
    character.qualities.stamina = 9;
    character.qualities.defensa = 8;
    character.qualities.monedas = 16;
    if (character.qualities.profesion == 0) { //Bardo
      character.qualities.carisma = 6;
      character.qualities.combate = 3;
      character.qualities.magia = 4;
      character.qualities.santidad = 3;
      character.qualities.explorar = 2;
      character.qualities.subterfugio = 4;
    }
    if (character.qualities.profesion == 1) { //Guerrero
      character.qualities.carisma = 3;
      character.qualities.combate = 6;
      character.qualities.magia = 2;
      character.qualities.santidad = 4;
      character.qualities.explorar = 3;
      character.qualities.subterfugio = 2;
    }
    if (character.qualities.profesion == 2) { //Explorador
      character.qualities.carisma = 2;
      character.qualities.combate = 5;
      character.qualities.magia = 2;
      character.qualities.santidad = 3;
      character.qualities.explorar = 6;
      character.qualities.subterfugio = 4;
    }
    if (character.qualities.profesion == 3) { //Mago
      character.qualities.carisma = 2;
      character.qualities.combate = 2;
      character.qualities.magia = 6;
      character.qualities.santidad = 4;
      character.qualities.explorar = 5;
      character.qualities.subterfugio = 3;
    }
    if (character.qualities.profesion == 4) { //Clérigo
      character.qualities.carisma = 4;
      character.qualities.combate = 2;
      character.qualities.magia = 3;
      character.qualities.santidad = 6;
      character.qualities.explorar = 4;
      character.qualities.subterfugio = 2;
    }
    if (character.qualities.profesion == 5) { //Ladrón
      character.qualities.carisma = 5;
      character.qualities.combate = 4;
      character.qualities.magia = 4;
      character.qualities.santidad = 1;
      character.qualities.explorar = 2;
      character.qualities.subterfugio = 6;
    }
    //character.qualities.luck = 0;
    character.qualities.novice = 0;
    character.qualities.inspiration = 0;
    character.qualities.bendicion = 0;
    character.qualities.maldicion = 0;
    character.qualities.deudaalma = 0;
    //system.setCharacterText("<p>You are starting on an exciting journey.</p>");
    
    var nompers=document.getElementById("nompersonaje");
    if (system.rnd.randomInt(1, 10) < 6) {
      undum.game.start = "w_intro";
      //system.writeBefore("<h1>WILLIAM BAFFORD</h1>",$("#character"));
      $('#nompersonaje').append('WILLIAM BAFFORD');
    } else {
      undum.game.start = "p_intro";
      //system.writeBefore("<h1>PAOLA LAREZZO</h1>",$("#character"));
      $('#nompersonaje').append('PAOLA LAREZZO');
    }
};
