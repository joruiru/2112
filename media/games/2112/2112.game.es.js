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
        la comunidad científica, que los sumerios fueron los primeros en tratar plantas\
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
        <p class='transient'><a href='wcap2h51'>&gt; Ir al capítulo 2.</a></p>"
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
        <p>Conforme la potencia iba aumentando, los discos comenzaron a vibrar. Dio\
        un poco más de potencia y los discos se pusieron a girar. Unos giraban en\
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
        <p class='transient'><a href='wcap1h25'>&gt; Continúa leyendo.</a></p>"
    ),
    wcap1h25: new undum.SimpleSituation(
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
        <p class='transient'><a href='wcap2h31'>&gt; Ir al capítulo 2.</a></p>"
    ),
    wcap2h1: new undum.SimpleSituation(
        "<h1>2 - El Fin</h1>\
        <p>&#8212;¡Vamos!¡Un poco más! ¡Ya falta poco!</p>\
        <p>El que le gritaba era Austin, un marine del ejército que le habían puesto\
        de guardaespaldas. ¿Por qué iba a tener que necesitar un guardaespaldas\
        en aquella región remota e inhabitada del planeta? A pesar de sus quejas,\
        no le hicieron caso. Los tecnócratas del gobierno quizás temían que\
        descubriera algo que no les gustara.</p>\
        <p>Notó un último tirón a la cuerda que le rodeaba la cintura y consiguió\
        llegar, por fin, al lugar donde estaba el gigantesco marine. Estaba empezando\
        a creer que, al fin y al cabo, no era tan mala idea tenerlo cerca.<p>\
        <p> Levantó la vista, una vez había recuperado el aliento y se había liberado\
        de la cuerda que le ataba. Allí, la nieve les llegaba hasta casi las rodillas\
        lo que hacía que cada paso que daba fuera un auténtico suplicio.</p>\
        <p>&#8212;Creo que hemos llegado. La entrada a las cuevas debe estar tras\
        aquellas rocas. &#8212; informó al marine tras comprobar sus notas.</p>\
        <p>&#8212;Está bien. Vaya a buscar la entrada mientras recojo el equipo.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h2'>&gt; Buscar la entrada a las cuevas.</a></p>\
        <p class='transient'><a href='wcap2h3'>&gt; Ayudar a Austin a recoger el equipo.</a></p>"
    ),
    wcap2h2: new undum.SimpleSituation(
        "<p>Dejó al marine recogiendo el equipo de escalada y se acercó a las paredes\
        de roca a buscar la entrada a las cuevas.</p>\
        <p>No tardó demasiado en encontrar una pequeña grieta en la roca, aunque\
        suficientemente amplia para que la atravesara una persona y su equipo.</p>\
        <p>&#8212;¡Eehh, Austin! ¡La he encontrado! &#8212; gritó al marine para\
        informarle del hallazgo.</p>\
        <p>El marine, que ya estaba guardando la última cuerda en la mochila, se\
        incorporó y levantó su brazo con el pulgar hacia arriba, dando a entender\
        que le había oido.</p>\
        <p>Fue justo en ese momento cuando vio un fugaz brillo entre los árboles\
        que había a unos cien metros de donde se encontraba</p>\
        <p>Ni siquiera le dio tiempo a avisar a Austin. Oyó un disparo y vio como\
        el marine se desplomaba. Se echó al suelo, protegido tras unas rocas.</p>\
        <p>El corazón le latía a tal velocidad que tenía la sensación de que se\
        le iba a escapar del pecho. Oyó un segundo disparo, éste más cercano a\
        su posición. Había dado en la piedra que le protegía. Tenía que pensar con rapidez.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h4'>&gt; Correr hacia la cueva.</a></p>\
        <p class='transient'><a href='wcap2h5'>&gt; Socorrer a Austin.</a></p>"
    ),
    wcap2h3: new undum.SimpleSituation(
        "<p>&#8212; Mejor te ayudo a recoger. Así iremos más deprisa.</p>\
        <p>Cuando tuvieron todo el material cargado en las mochilas, se encaminaron\
        hacia donde suponían que estaba la entrada a las cuevas.</p>\
        <p>No tardaron en encontrar una pequeña grieta en la roca, aunque lo\
        suficientemente amplia para que la atravesara una persona y su equipo.</p>\
        <p>&#8212;¡Mierda! ¡No estamos solos! ¡Al suelo! &#8212; El marine le\
        empujó tras unas rocas.</p>\
        <p>&#8212;¿Cómo? ¿Quién iba a estar en este maldito lugar?</p>\
        <p>Austin señaló hacia unos árboles. Efectivamente, se podía ver un\
        brillo fugaz de vez en cuando.</p>\
        <p>El marine le hizo una seña para que no se moviera del sitio, mientras,\
        arrastrándose por el suelo y ocultándose entre las rocas, se alejaba para\
        intentar rodear a quien quiera que les estuviese siguiendo.</p>\
        <p>Siguió al marine con la vista, hasta que tuvo que abandonar la cobertura\
        de las rocas para llegar hasta los árboles. Justo en ese momento, vio como\
        el brillo había cambiado también de posición. Ni siquiera le dio tiempo a\
        avisar a Austin. Oyó un disparo y vio como el marine se desplomaba.</p>\
        <p>El corazón le latía a tal velocidad que tenía la sensación de que se\
        le iba a escapar del pecho. Tenía que pensar con rapidez.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h4'>&gt; Correr hacia la cueva.</a></p>\
        <p class='transient'><a href='wcap2h5'>&gt; Socorrer a Austin.</a></p>"
    ),
    wcap2h4: new undum.SimpleSituation(
        "<p>Jamás se lo perdonaría a sí mismo, pero si quería salvar la vida debía\
        abandonadar al marine a una muerte segura.</p>\
        <p>Cogió todo el equipo que pudo y corrió hacia la entrada a la cueva. Notó\
        el silbido de un par de balas pasando muy cerca de él. No quiso saber cómo\
        de cerca habían pasado. Su única esperanza de sobrevivir al francotirador\
        era alcanzar la entrada a la cueva.<p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h7'>&gt; Continúa leyendo.</a></p>"
    ),
    wcap2h5: new undum.SimpleSituation(
        "<p>¡No podía dejar al marine allí herido!</p>\
        <p>Intentó incorporarse para correr hacia donde estaba el cuerpo de Austin\
        pero nada más asomar la cabeza, recibió un disparo que, por suerte, dio en\
        la roca.<p>\
        <p>Volvió a intentarlo, con el mismo resultado. ¿Qué podía hacer? ¿Abandonar al\
        marine a una muerte segura y entrar a la cueva o intentar socorrerlo una vez más?</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h4'>&gt; Correr hacia la cueva.</a></p>\
        <p class='transient'><a href='wcap2h6'>&gt; Socorrer a Austin.</a></p>"
    ),
    wcap2h6: new undum.SimpleSituation(
        "<p>Jamás se perdonaría a sí mismo haber abandonado al marine a una muerte\
        segura.</p>\
        <p>Miró a su alrededor a ver si se le ocurría algo. Encontró un piolet del\
        equipo de escalada. Lo cogió y lo lanzó lo más lejos que pudo en la dirección\
        opuesta a la que se encontraba Austin.</p>\
        <p>Escuchó unos disparos dirigidos hacia donde había caido el piolet. Era la\
        señal.</p>\
        <p>Se incorporó y salió corriendo lo más rápido que pudo hacia el marine.\
        Lamentablemente, la nieve le impedía avanzar como debería y, tarde, se dio\
        cuenta de que jamás alcanzaría a tiempo su objetivo.</p>\
        <p>Oyó un disparo a su espalda. Inmeditamente, un dolor inmenso en el muslo\
        de su pierna derecha. Se desplomó sobre la nieve y pudo ver como un río\
        rojo se extendía por la nieve.</p>\
        <p>A pesar de tener la vista nublada, pudo distinguir a una mujer morena,\
        de aspecto atlético, que se le acercaba apuntándole con un arma.</p>\
        <p>Se detuvo cuando llegó junto a él, sin dejar de apuntarle a la cabeza</p>\
        <p>&#8212; Lo siento, pero no puedo permitir que nadie se me adelante. Que\
        Dios me perdone.</p>\
        <p>Vió un fogonazo. Luego, silencio.</p>\
        <p><br/></p>\
        <h1>*** FIN ***</h1>"
    ),    
    wcap2h7: new undum.SimpleSituation(
        "<p>Lanzó todo el equipo que tenía al alcance al interior de la cueva y, tras\
        ello, se lanzó él mismo con un rápido movimiento.</p>\
        <p>Estaba caido en el suelo de la cueva. Se reincorporó y esperó a que sus\
        ojos se aclimataran a la escasa luz que entraba desde el exterior. Echó un\
        rápido vistazo al entorno, recogió el equipo esparcido por el suelo y se\
        adentró en la cueva por el único camino posible. No podía quedarse demasiado\
        tiempo allí, pues el francotirador no tardaría en seguir sus pasos en cuanto\
        se diera cuenta de que ya no estaba oculto tras las rocas.<p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h8'>&gt; Continúa leyendo.</a></p>"
    ),  
    wcap2h8: new undum.SimpleSituation(
        "<p>Calculaba que se habría adentrado más o menos un kilómetro en el interior\
        de la montaña. Obviamente, cualquier atisbo de iluminación era impensable,\
        salvo la que proyectaba la linterna de su equipo de espeleología.</p>\
        <p>Se giró instintivamente para ver si le seguían, pero no pudo ver ni oir nada.<p>\
        <p>Unos metros más adelante se topó con una bifurcación en la gruta. Se\
        asomó a los dos nuevos caminos, pero ambos parecían iguales, descendiendo\
        hacia una negrura aún mucho mayor, si eso era posible.</p>\
        <p>Debía decidirse por uno de los dos, y no podía demorarse mucho en su\
        elección.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h9'>&gt; Seguir por el camino de la izquierda.</a></p>\
        <p class='transient'><a href='wcap2h10'>&gt; Seguir por el camino de la derecha.</a></p>"
    ), 
    wcap2h9: new undum.SimpleSituation(
        "<p>&#8212; ¡Que sea lo que Dios quiera! &#8212; se dijo a sí mismo mientras\
        se adentraba en la gruta de la izquierda.</p>\
        <p>Caminó unos cientos de metros antes de llegar a una cavidad inmensa. Tan\
        grande era, que la luz de la linterna no llegaba a iluminar ninguno de los\
        lados.<p>\
        <p>Tampoco podía seguir adelante, pues la gruta terminaba abruptamente en\
        aquella sala. Se arrimó al borde e iluminó hacia abajo.</p>\
        <p>No podía creer lo que vio. Unos cien metros más abajo en vertical, junto\
        a la pared de la cueva, había lo que parecía una rampa que descendía hacia\
        la oscura profundidad de la sala.</p>\
        <p>&laquo;¡No puede ser! ¡Esa rampa no es una formación natural!&raquo;. Se\
        echó para atrás, alejándose del borde, para recuperar el aliento.</p>\
        <p>El camino terminaba allí, a no ser que descendiera por la pared vertical\
        de la cueva hasta la rampa. Quizás el otro camino que dejó atrás llevara\
        directamente a la rampa, sin tener que realizar el peligroso descenso</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h11'>&gt; Volver a la bifurcación.</a></p>\
        <p class='transient'><a href='wcap2h12'>&gt; Descender hasta la rampa.</a></p>"
    ),   
    wcap2h10: new undum.SimpleSituation(
        "<p>&#8212; ¡Que sea lo que Dios quiera! &#8212; se dijo a sí mismo mientras\
        se adentraba en la gruta de la derecha.</p>\
        <p>La cueva tenia una pendiente descendente, que le daba la impresión de\
        que iba en aumento conforme avanzaba.<p>\
        <p>El camino hacía un giro hacia la izquierda, llegando a una zona de la\
        cueva que le llamó la atención, por lo inexplicable de sus formas.</p>\
        <p>La gruta por la que avanzaba ahora tenía un aspecto totalmente antinatural.\
        Las paredes y techo estaban perfectamente talladas, formando un túnel\
        rectangular. La roca se encontraba cristalizada, como si se hubiera usado\
        una fuente de calor extremo capaz de fundirla. Algunos tramos de pared\
        presentaban pictogramas tallados. Se detuvo a contemplar algunos que\
        representaban la cúpula celeste. Se podía distinguir el Sol y la Luna. Varias\
        estrellas estaban unidas por líneas, como si se tratara de un mapa estelar.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h26'>&gt; Continúa leyendo.</a></p>"
    ),   
    wcap2h11: new undum.SimpleSituation(
        "<p>Decidió que valía la pena probar el otro camino, ya que el descenso en\
        vertical hasta la rampa parecía demasiado peligroso. Además, no iba a\
        averiguar qué había más allá de la rampa hasta que no hubiera descendido\
        hasta ella, lo que podría ser demasiado tarde.</p>\
        <p>Retrocedió sobre sus pasos y, cuando estaba a punto de llegar de nuevo\
        a la bifurcación, pudo ver una luz que se acercaba.<p>\
        <p>&laquo;¡Hostia! ¡Me han seguido hasta aquí!&raquo;.</p>\
        <p>Seguramente ya habrían visto la luz de su linterna. No había tiempo que perder.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h13'>&gt; Huir por el desconocido camino de la derecha.</a></p>\
        <p class='transient'><a href='wcap2h14'>&gt; Volver hasta el precipicio.</a></p>"
    ), 
    wcap2h12: new undum.SimpleSituation(
        "<p>Encontró rápidamente una formación rocosa en la que parecía adecuado\
        atar la cuerda con seguridad. Soportaría de sobra su peso y el del equipo.</p>\
        <p>Se aseguró los arneses e inició el descenso vertical.<p>\
        <p>El descenso era más peligroso de lo que parecía. La humedad y el hielo\
        hacía que la pared fuese endiabladamente resbaladiza, sin apenas zonas en\
        las que poder agarrarse para frenar la caida por la cuerda.</p>\
        <p>Le quedaban unos 20 metros hasta la rampa cuando vio la luz de la linterna\
        asomándose al borde por el que había iniciado el descenso.</p>\
        <p>&laquo;¡Joder! &raquo;. Comenzó a descender más deprisa.</p>\
        <p>Pero no le dio tiempo. Enseguida notó como la cuerda perdía la tensión,\
        y cayó a plomo sobre la rampa.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h16'>&gt; Continúa leyendo.</a></p>"
    ), 
    wcap2h13: new undum.SimpleSituation(
        "<p>&laquo;¡Me cago en la puta! ¡Mierda!&raquo;. No podía volver al precipicio.\
        Si le seguían, le pillarían a medio descenso hasta la rampa, lo que sería su fin.</p>\
        <p>Así que salió corriendo por el desconocido camino de la derecha.<p>\
        <p>Corría lo más rápido que le permitía el equipo que portaba. Oía también\
        la carrera de su perseguidor. ¡Le habían visto!</p>\
        <p>La gruta iba descendiendo cada vez con una pendiente mayor. Oyó un par\
        de disparos, que se estrellaron en las paredes de roca bastante lejos de\
        él, afortunadamente. No podía aminorar la marcha.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h15'>&gt; Continúa leyendo.</a></p>"
    ), 
    wcap2h14: new undum.SimpleSituation(
        "<p>&laquo;¡Me cago en la puta! ¡Mierda!&raquo;. No podía arriesgarse a\
        correr a ciegas por un camino que no había explorado. Así que volvió corriendo\
        hacia el precipicio, dispuesto a descolgarse hasta la rampa.</p>\
        <p>Calculaba que, a la distancia a la que había visto la luz de su perseguidor\
        le daría tiempo a atar una cuerda a algún saliente de la cueva y descender\
        por ella hasta la rampa.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h12'>&gt; Continúa leyendo.</a></p>"
    ),     
    wcap2h15: new undum.SimpleSituation(
        "<p>Siguió corriendo a la par que la pendiente seguía aumentando.</p>\
        <p>Unos metros más abajo, vió que la gruta se ensanchaba, pero también\
        vio con horror que el camino se cortaba en seco.</p>\
        <p>Intentó frenar su carrera, pero la inercia y la humedad del suelo hicieron\
        que no fuera posible.</p>\
        <p>Realizó un último esfuerzo por intentar agarrarse desesperadamente a\
        algún saliente de la pared, pero tan solo pudo sentir como se rompían\
        varios dedos de sus manos.</p>\
        <p>Cayó al oscuro vacío, golpeándose con obstáculos que ya no pudo ni ver.</p>\
        <p><br/></p>\
        <h1>*** FIN ***</h1>"
    ),    
    wcap2h16: new undum.SimpleSituation(
        "<p>Todo le daba vueltas.</p>\
        <p>Se incorporó como pudo, no sin lanzar un alarido de dolor cuando apoyó\
        el brazo izquierdo en el suelo para tratar de levantarse.<p>\
        <p>Miró a su alrededor, para ubicarse. Afortunadamente, parecía que la\
        mochila con el equipo había amortiguado en parte la caida. Su brazo izquierdo\
        no parecía haber tenido tanta suerte como el resto de su cuerpo.</p>\
        <p>Estaba roto.</p>\
        <p>Recogió el equipo que le quedaba y se dispuso a bajar por la rampa.</p>\
        <p>Era el único camino posible.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h17'>&gt; Continúa leyendo.</a></p>"
    ), 
    wcap2h17: new undum.SimpleSituation(
        "<p>No había duda de que la rampa por la que estaba descendiendo era\
        artificial. Estaba perfectamente tallada y descendía con una pendiente\
        constante, siguiendo la curva que iba describiendo la pared de la gruta.</p>\
        <p>No cayó en la cuenta hasta que hubo descendido varios cientos de metros\
        por la rampa.<p>\
        <p>Si alumbraba con la linterna hacia el centro de la sala, la distancia\
        de alumbrado era mucho menor de la que debería ser. Lo mismo ocurría si\
        se acercaba al borde de la rampa y alumbraba hacía abajo. Sin embargo, si\
        alumbraba el camino que le quedaba por delante en la rampa, la distancia\
        a la que alcanzaba la luz era la que se podía esperar.</p>\
        <p>¿Qué podía estar causando ese extraño efecto? Sólo se le ocurría una\
        cosa que pudiera producir ese efecto sobre la luz: los agujeros negros.\
        Pero eso no era posible.</p>\
        <p>Continuó descendiendo.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h18'>&gt; Continúa leyendo.</a></p>"
    ), 
    wcap2h18: new undum.SimpleSituation(
        "<p>Descendió durante horas por la rampa. No sabría calcular a qué\
        profundidad se podría encontrar. De repente, la linterna iluminó, unos\
        metros más adelante, un suelo de roca sin pendiente. ¡Había llegado al\
        final de la rampa!</p>\
        <p>Exhausto, se descargó de todo el equipo y se sentó en el suelo, apoyado\
        en la pared, para descansar.<p>\
        <p>Mientras recobraba poco a poco el aliento, iluminó alrededor para otear\
        la sala en la que se encontraba. Era inmensa. Jamás podría haber imaginado\
        siquiera que pudiera existir semejante cavidad en el interior de una montaña.</p>\
        <p>La innatural negrura que ocupaba todo el centro de la sala seguía allí,\
        incluso a nivel del suelo, aunque no parecía que fuese nada. Simplemente,\
        la luz se quedaba atrapada en ella.</p>\
        <p>Enfocó la linterna hacia un monolito que llamó su atención.</p>\
        <p>Era la única estructura que había allí, a parte de lo que demonios fuera\
        la negra parte central de la sala. Tenía aproximadamente medio metro de\
        alto, y era un cubo perfecto. Se levantó para acercarse a examinarlo.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h19'>&gt; Continúa leyendo.</a></p>"
    ), 
    wcap2h19: new undum.SimpleSituation(
        "<p>El cubo estaba perfectamente tallado en un material totalmente negro\
        y reflectante. No parecía tener impurezas de ninguna clase.</p>\
        <p>Las caras laterales estaban llenas de glifos tallados, todos diferentes\
        entre sí, que le dieron la impresión de ser pulsadores. En la cara superior,\
        había múltiples combinaciones de cuatro glifos, ninguna repetida, agrupados\
        en doce grupos de treinta combinaciones. Había un treceavo grupo con cinco\
        combinaciones, también de cuatro glifos cada una.<p>\
        <p>&laquo;¡Era un calendario! ¡Doce meses de treinta días y un treceavo de\
        cinco! ¡Trescientos sesenta y cinco días!&raquo;.</p>\
        <p>Se encontraba ante el panel de control de alguna maquinaria. ¡O tal vez\
        algo que desactivara la negrura y mostrase lo que ocultaba! Pero, la cueva\
        tenía cientos de miles de años de antigüedad, millones quizás. ¡Esa\
        maquinaria estaba fuera de lugar!</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h20'>&gt; Continúa leyendo.</a></p>"
    ), 
    wcap2h20: new undum.SimpleSituation(
        "<p>Había llegado donde siempre había soñado. La evidencia de la existencia\
        de una Cultura Madre. Una cultura de la que habrían derivado todas las que\
        conocemos. ¡Era el mayor descubrimiento de la Historia!</p>\
        <p>Tenía que llegar hasta el final. Estaba demasiado cerca.<p>\
        <p>Estudió el calendario. Vio que en las combinaciones de cuatro símbolos\
        que indicaban los días del calendario, cada uno de los glifos estaba en\
        una cara diferente del monolito.</p>\
        <p>Supuso que debía pulsar los glifos correspondientes a un determinado\
        día del calendario. Lo obvio era pulsar la combinación correspondiente al\
        día en el que se encontraba: 21 de diciembre de 2012.</p>\
        <p>Se centró en el doceavo grupo de combinaciones y contó la que hacía\
        veintiuno.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h21'>&gt; Pensarlo mejor.</a></p>\
        <p class='transient'><a href='wcap2h22'>&gt; Pulsar la combinación.</a></p>"
    ), 
    wcap2h21: new undum.SimpleSituation(
        "<p>&laquo;¡Un momento! ¡Imbécil!&raquo;. Cayó en la cuenta de que en meses\
        de treinta días, el 21 de diciembre no es el vigésimo primer día del\
        doceavo mes.</p>\
        <p>En un año de trescientos sesenta y cinco días, el 21 de diciembre era\
        el undécimo día contando desde el último día del año.<p>\
        <p>Contó hacia atrás. Se sorprendió del resultado. El undécimo día empezando\
        desde el final en el calendario que había en el monolito se correspondía\
        con la veinticinco del grupo doce: 25 de diciembre.</p>\
        <p>Comenzó a marcar los símbolos. Cuando estaba a punto de marcar el cuarto,\
        oyo un disparo y, seguidamente, una bala alcanzó el lugar donde milésimas\
        de segundo antes tenía apoyada la mano.</p>\
        <p>&#8212; ¡Quieto! &#8212; una mujer, morena y atlética le apuntaba con\
        un arma.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h23'>&gt; Continúa leyendo.</a></p>"
    ),
    wcap2h22: new undum.SimpleSituation(
        "<p>Localizó los cuatro glifos y comenzó a pulsarlos en el orden en el\
        que estaban en el calendario.</p>\
        <p>No ocurrió nada.</p>\
        <p>&laquo;¡Un momento! ¡Imbécil!&raquo;. Cayó en la cuenta de que en meses\
        de treinta días, el 21 de diciembre no es el vigesimo primer día del\
        doceavo mes.</p>\
        <p>En un año de trescientos sesenta y cinco días, el 21 de diciembre era\
        el undécimo día contando desde el último día del año.<p>\
        <p>Contó hacia atrás. Se sorprendió del resultado. El undécimo día empezando\
        desde el final en el calendario que había en el monolito se correspondía\
        con la veinticinco del grupo doce: 25 de diciembre.</p>\
        <p>Comenzó a marcar los símbolos. Cuando estaba a punto de marcar el cuarto,\
        oyo un disparo y, seguidamente, una bala alcanzó el lugar donde milésimas\
        de segundo antes tenía apoyada la mano.</p>\
        <p>&#8212; ¡Quieto! &#8212; una mujer, morena y atlética le apuntaba con\
        un arma.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h23'>&gt; Continúa leyendo.</a></p>"
    ), 
    wcap2h23: new undum.SimpleSituation(
        "<p>&#8212; ¿Quién eres? ¿Por qué tratas de matarme? &#8212; Estaba aterrado.</p>\
        <p>&#8212; Debo evitar que abras la caja. &#8212; Era bastante atractiva.</p>\
        <p>&#8212; ¿Qué caja? ¡Estás ante el mayor descubrimiento de la Historia!\
        ¡La evidencia de una cultura ancestral de la que descendemos todos! ¡La\
        Atlántida de Platón! &#8212;.</p>\
        <p>&#8212; ¡Nooo! ¡Ese artefacto provocará el apocalipsis que anuncia la\
        Biblia! &#8212; Se acercaba hacia él, sin dejar de apuntarle.</p>\
        <p>&#8212; ¡Estás equivocada! ¡Mis estudios demuestran que...! &#8212;.</p>\
        <p>&#8212; ¡Tus estudios son los que están equivocados! ¡Mira!&#8212; le\
        arrojó un papel.</p>\
        <p>Leyó el papel. Tenía el sello del Vaticano. No entendía nada. Hablaba\
        de la Virgen, de apariciones, de tres niñas portuguesas, del fin de los\
        tiempos.</p>\
        <p>&#8212; ¿Qué es esto? ¿Qué quieres demostrar con un escrito basado en\
        la Fe?&#8212; sacudía en el aire la mano con el papel.</p>\
        <p>&#8212; Soy Paola Larezzo, de los servicios secretos del Vaticano.\
        Eso que tienes en la mano es la traducción del original del tercer secreto\
        de Fátima. La profecía del último Papa. Nadie, repito, nadie la ha visto,\
        salvo tú, yo y el Papa. Dice que hoy y aquí, se abrirá la caja que fue\
        sellada y ocultada desde los inicios de los tiempos: la caja de Pandora.&#8212;.</p>\
        <p>&#8212; ¡Eso son leyendas! Y, he de añadir, que no exclusivas del\
        cristianismo.</p>\
        <p>&#8212; ¿Estás seguro de lo que dices? ¡Mirá los glifos que has marcado!\
        ¡No son iguales, pero se parecen mucho al arameo antiguo! ¡Mira ese! &#8212;\
        señaló al primero que había pulsado.</p>\
        <p><img src='./media/games/2112/File_Pe.jpg' /></p>\
        <p>&#8212; ¡Es la letra Pe! ¿Y ese? &#8212; señaló al segundo símbolo\
        marcado. &#8212; ¡Es Nun!</p>\
        <p><img src='./media/games/2112/File_Nun.jpg' /></p>\
        <p>&#8212; ¿Y ese otro que está marcado? ¡Es Daleth!&#8212; era el tercer\
        símbolo. <img src='./media/games/2112/File_Resh.jpg' /> &#8212; ¡Apuesto\
        lo que quieras a que el cuarto glifo es Resh! &#8212;\
        señaló al glifo que le quedaba por pulsar.</p>\
        <p><img src='./media/games/2112/File_Resh.jpg' /></p>\
        <p>&#8212; ¿Qué pretendes demostrar? &#8212; le gritó a la agente vaticana.</p>\
        <p>&#8212; ¿No estás familiarizado con el arameo, verdad? ¿Y con el griego?</p>\
        <p>&#8212; Sí.</p>\
        <p>&#8212; La aramea Pe es la equivalente griega a Pi. Nun es Ni. Daleth es\
        Delta y, sorpresa, Resh es la griega Rho.</p>\
        <p>&#8212; P, N, D y R. &#8212; dijo en voz baja.</p>\
        <p>&#8212; Pandora. En arameo no existen las vocales.</p>\
        <p>¿Cambiaba algo eso? ¡Sólo eran leyendas religiosas de dudosa veracidad!\
        La ciencia se basa en hechos demostrables, ¡y él había demostrado la\
        existencia de una Cultura Madre!</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h24'>&gt; Abandonar y hacer caso a Paola.</a></p>\
        <p class='transient'><a href='wcap2h25'>&gt; Pulsar el cuarto glifo.</a></p>"
    ), 
    wcap2h24: new undum.SimpleSituation(
        "<p>Tenía dudas. Los mitos del cristianismo heredaban de leyendas de\
        religiones aún más antiguas. Y ¿quién afirmaría sin lugar a dudas que\
        esas religiones no bebían de otras anteriores?</p>\
        <p>¿Podía significar que las leyendas que han llegado hasta nuestros días\
        a través de la religión tienen su origen en una cultura ancestral inicial?</p>\
        <p>Decidió no pulsar el último glifo. Devolvió los otros tres a su estado anterior.</p>\
        <p>&#8212; ¿Sabes? Creo que no merece la pena. Este planeta es un lugar\
        lo suficientemente maravilloso como para arriesgarse a destruirlo.</p>\
        <p>&#8212; Has hecho bien, William.&#8212; ¿Cómo demonios sabía su nombre?&#8212;\
        El servicio secreto vaticano es muy eficaz.&#8212; le dijo ella\
        al ver el gesto de su cara cuando lo llamó por su nombre.</p>\
        <p>Pusieron rumbo al exterior. Conforme subían por la rampa, fue\
        asimilando que había hallado su Civilización Madre: su Santo Grial.</p>\
        <p><br/></p>\
        <h1>*** FIN ***</h1>\
        <p><br/></p>\
        <a href='./extras.html' class='raw'>&gt; Ver extras</a>"
    ), 
    wcap2h25: new undum.SimpleSituation(
        "<p>&#8212; ¡Leyendas para mantener al rebaño en el redil! &#8212; gritó.</p>\
        <p>&#8212; ¡No lo hagas! &#8212; disparó su arma.</p>\
        <p>Le dio tiempo a pulsar el cuarto glifo antes de recibir el disparo en\
        el estómago.</p>\
        <p>Ni siquiera le dio tiempo a sentir dolor. El desastre fue casi instantáneo.</p>\
        <p>Sintió como una cantidad inimaginable se liberaba de la zona oscura. La\
        montaña bajo la que se encontraban estalló en mil pedazos. La tierra y el\
        cielo se resquebrajaron bajo millones de temblores.</p>\
        <p>Había iniciado el fin del mundo.</p>\
        <p><br/></p>\
        <h1>*** FIN ***</h1>\
        <p><br/></p>\
        <a href='./extras.html' class='raw'>&gt; Ver extras</a>"
    ), 
    wcap2h26: new undum.SimpleSituation(
        "<p>&#8212; ¡Esto cambiará la concepción de nuestra Historia! &#8212; se dijo.</p>\
        <p>Siguió el camino descendente, hasta que se detuvo ante un nuevo\
        descubrimiento.<p>\
        <p>Se encontraba ante una serie de pulcros y cuidados enterramientos. En\
        ellos, podía ver restos de esqueletos humanoides de huesos finos, de menos de metro\
        y medio de altura y cabezas desproporcionadamente grandes.</p>\
        <p>Dejó allí los cuerpos. No podía quedarse a estudiarlos todo lo que\
        quisiera. Le estaban siguiendo.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h27'>&gt; Continúa leyendo.</a></p>"
    ),   
    wcap2h27: new undum.SimpleSituation(
        "<p>Caminó unos cientos de metros antes de llegar a una cavidad inmensa. Tan\
        grande era, que la luz de la linterna no llegaba a iluminar ninguno de los\
        lados.<p>\
        <p>La gruta terminaba allí, en una rampa que se adentraba en la oscuridad\
        de la gigantesca sala. No podía ver más allá de unos metros, así que no\
        podía averiguar dónde se estaba metiendo.</p>\
        <p>¿Sería el otro camino más seguro?</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h28'>&gt; Volver a la bifurcación.</a></p>\
        <p class='transient'><a href='wcap2h17'>&gt; Descender por la rampa.</a></p>"
    ),   
    wcap2h28: new undum.SimpleSituation(
        "<p>Decidió que valía la pena probar el otro camino. Además, no iba a\
        averiguar qué había más allá de la rampa hasta que no hubiera descendido\
        por ella, lo que podría ser demasiado tarde.</p>\
        <p>Retrocedió sobre sus pasos y, cuando estaba a punto de llegar de nuevo\
        a la bifurcación, pudo ver una luz que se acercaba.<p>\
        <p>&laquo;¡Hostia! ¡Me han seguido hasta aquí!&raquo;.</p>\
        <p>Seguramente ya habrían visto la luz de su linterna. No había tiempo que perder.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h29'>&gt; Huir por el desconocido camino de la izquierda.</a></p>\
        <p class='transient'><a href='wcap2h30'>&gt; Volver hasta el precipicio.</a></p>"
    ), 
    wcap2h29: new undum.SimpleSituation(
        "<p>&laquo;¡Me cago en la puta! ¡Mierda!&raquo;.</p>\
        <p>Se adentró corriendo por el desconocido camino de la izquierda.<p>\
        <p>Corría lo más rápido que le permitía el equipo que portaba. Oía también\
        la carrera de su perseguidor. ¡Le habían visto!</p>\
        <p>La gruta iba descendiendo cada vez con una pendiente mayor. Oyó un par\
        de disparos, que se estrellaron en las paredes de roca bastante lejos de\
        él, afortunadamente. No podía permitirse aminorar la marcha.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h15'>&gt; Continúa leyendo.</a></p>"
    ), 
    wcap2h30: new undum.SimpleSituation(
        "<p>&laquo;¡Me cago en la puta! ¡Mierda!&raquo;. No podía arriesgarse a\
        correr a ciegas por un camino que no había explorado. Así que volvió corriendo\
        por la gruta, dispuesto a descender por la rampa.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h17'>&gt; Continúa leyendo.</a></p>"
    ),     
    wcap2h31: new undum.SimpleSituation(
        "<h1>2 - El Fin</h1>\
        <p>&#8212; ¡Ya falta poco!</p>\
        <p>El que le animaba era Austin, un marine del ejército que le habían puesto\
        de guardaespaldas. ¿Por qué iba a tener que necesitar un guardaespaldas?\
        A pesar de sus quejas, no le hicieron caso. Los tecnócratas del gobierno\
        quizás temían que descubriera algo que no les gustara.</p>\
        <p>Apartaron unos arbustos y la ciudad apareció ante ellos.<p>\
        <p>Palenque era uno de los sitios más impresionantes de la cultura maya.\
        En comparación con otras ciudades mayas, se considera de tamaño mediano,\
        menor que Tikal o Copán. Sin embargo, es la más enigmática de todas.</p>\
        <p>&#8212; Contempla las maravillas de Palenque. Hay más de mil quinientos\
        edificios en esa zona, de los cuáles solo se han excavado apenas el 15%.\
        &#8212; informó al marine.</p>\
        <p>La ciudad estaba desierta cuando llegaron. El gobierno había declarado\
        una zona de exclusión en unos kilómetros a la redonda para evitar la presencia\
        de turistas. El motivo: un helicóptero con productos tóxicos se había\
        estrellado en la zona. No reparaban en gastos.</p>\
        <p>&#8212;¿Por dónde empezamos a buscar, profesor?&#8212; preguntó el marine.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h31b'>&gt; Buscar en el Templo de las Inscripciones.</a></p>\
        <p class='transient'><a href='wcap2h33'>&gt; Buscar en el Templo de la Cruz.</a></p>\
        <p class='transient'><a href='wcap2h34'>&gt; Buscar en el Palacio.</a></p>"
    ),
    wcap2h31b: new undum.SimpleSituation(
        "<p>El Templo de las Inscripciones era un templo que se hallaba sobre una\
        pirámide escalonada de nueve alturas, representando el inframundo. El templo\
        disponía de cinco entradas, número que se asociaba a la Tierra. Coronando\
        la estructura, había estado la crestería, que representaba el Cielo.</p>\
        <p>&#8212; Tiene este nombre por tres tableros de roca con inscripciones\
        jeroglíficas, que detallan la historia de la dinastía regente en la ciudad\
        y los hechos de Pakal el Grande. &#8212; Austin no mostró demasiado interés\
        en su explicación.</p>\
        <p>Entraron en el templo y comenzaron a buscar el glifo que había descubierto\
        al estudiar el códice maya.</p>\
        <p>Tras una losa del suelo, con agujeros simétricamente distribuidos para\
        poder ser colocada en su lugar correspondiente, se encontraba la escalinata\
        que descendía hasta la tumba de Pakal.<p>\
        <p>Bajaron por la escalinata unos veinticinco metros y llegaron a la cripta.\
        Era una sala de unos nueve por cuatro metros, con el techo abovedado a unos\
        siete metros de altura. Justo en el centro se encontraba el sarcófago de\
        piedra, donde se descubrió el cuerpo del señor de Pakal. Y allí mismo, encima\
        del sarcófago, se encontraba la losa de piedra decorada con uno de los\
        misterios más grandes de la arqueología: el astronauta de Palenque.</p>\
        <p>Se podía ver claramente la representación de un hombre con atuendo maya,\
        en una posición semiacostada en una especie de silla con cinturón de seguridad,\
        con los pies apoyados en unos pedales, controles al frente y una gran\
        cantidad de tornillos, resortes, caños, tableros y palancas de mando. En\
        la nariz de Pakal se podía ver una especie de aparato que serviría como\
        respirador y cumpliría la función del casco de un astronauta. En la parte\
        trasera del vehículo se distinguían claramente las llamas producidas por\
        las toberas de la nave.</p>\
        <p>&#8212;Es impresionante, ¿verdad?&#8212; el marine alucinaba. &#8212;Esa\
        losa fue esculpida hace casi mil cuatrocientos años.</p>\
        <p>Buscaron en todas las inscripciones el glifo del códice, pero no tuvieron\
        ningún éxito.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h34'>&gt; Buscar en el Templo de la Cruz.</a></p>\
        <p class='transient'><a href='wcap2h35'>&gt; Buscar en el Palacio.</a></p>"
    ),
    wcap2h32: new undum.SimpleSituation(
        "<p>El Templo de la Cruz era un templo que se hallaba sobre una\
        pirámide escalonada. Conservaba todavía la crestería coronándolo.</p>\
        <p>&#8212; Este templo conmemora el ascenso al trono del señor Chan Bahlum\
        II tras la muerte de Pakal el Grande. &#8212; Austin no mostró demasiado interés\
        en su explicación.</p>\
        <p>Entraron en el templo y comenzaron a buscar el glifo que había descubierto\
        al estudiar el códice maya.</p>\
        <p>La cruz a la que aludía el nombre del templo era una representación\
        del árbol de la creación de la mitología maya. Sobre la cruz, y flanqueada\
        por dos figuras humanas, se encuentra posada el ave Quetzal.</p>\
        <p>Buscaron en todas las inscripciones el glifo del códice, pero no tuvieron\
        ningún éxito.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h36'>&gt; Buscar en el Templo de las Inscripciones.</a></p>\
        <p class='transient'><a href='wcap2h35'>&gt; Buscar en el Palacio.</a></p>"
    ),
    wcap2h33: new undum.SimpleSituation(
        "<p>El Palacio era, más que un edificio, un complejo de ellos. Debía\
        su nombre a la conjunción de patios, crujías y a la torre de cuatro cuerpos\
        que lo caracterizaba.</p>\
        <p>Se encontraba en la parte central del yacimiento arqueológico de Palenque,\
        sobre una terraza artificial.</p>\
        <p>Entraron en el conjunto de edificios y comenzaron a buscar el glifo que\
        había descubierto al estudiar el códice maya.</p>\
        <p>Buscaron en todas las esculturas y bajorrelieves, pero no tuvieron\
        ningún éxito.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h34'>&gt; Buscar en el Templo de la Cruz.</a></p>\
        <p class='transient'><a href='wcap2h36'>&gt; Buscar en el Templo de las Inscripciones.</a></p>"
    ),
    wcap2h34: new undum.SimpleSituation(
        "<p>&#8212; Aquí no está. Salgamos y probemos en el Templo de la Cruz.</p>\
        <p>Al salir al exterior, había empezado a anochecer. Habían pasado en\
        el interior más horas de las que creía. Austin se adelantó con el equipo,\
        mientras William se quedó para dar un último vistazo, por si acaso se le\
        había pasado algo por alto.</p>\
        <p>Se dio la vuelta y siguió el camino que había emprendido el marine.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h37'>&gt; Continúa leyendo.</a></p>"
    ),
    wcap2h35: new undum.SimpleSituation(
        "<p>&#8212; Aquí no está. Salgamos y probemos en el Palacio.</p>\
        <p>Al salir al exterior, había empezado a anochecer. Habían pasado en\
        el interior más horas de las que creía. Austin se adelantó con el equipo,\
        mientras William se quedó para dar un último vistazo, por si acaso se le\
        había pasado algo por alto.</p>\
        <p>Se dio la vuelta y siguió el camino que había emprendido el marine.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h37'>&gt; Continúa leyendo.</a></p>"
    ),
    wcap2h36: new undum.SimpleSituation(
        "<p>&#8212; Aquí no está. Salgamos y probemos en el Templo de las Inscripciones.</p>\
        <p>Al salir al exterior, había empezado a anochecer. Habían pasado en\
        el interior más horas de las que creía. Austin se adelantó con el equipo,\
        mientras William se quedó para dar un último vistazo, por si acaso se le\
        había pasado algo por alto.</p>\
        <p>Se dio la vuelta y siguió el camino que había emprendido el marine.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h37'>&gt; Continúa leyendo.</a></p>"
    ),
    wcap2h37: new undum.SimpleSituation(
        "<p>Fue entonces cuando lo vio. Ni siquiera le dio tiempo a gritar para\
        avisar a su compañero. De uno de las construcciones, salió un fogonazo al\
        que siguió el sonido de un disparo. El marine cayó al suelo desplomado.</p>\
        <p>Se echó al suelo, protegido tras las ruinas que tenía cerca. El corazón\
        le latía a tal velocidad que tenía la sensación de que se le iba a escapar\
        del pecho. Oyó un segundo disparo, éste más cercano a su posición. Había\
        dado en la piedra que le protegía. Tenía que pensar con rapidez.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h38'>&gt; Correr hacia la selva.</a></p>\
        <p class='transient'><a href='wcap2h39'>&gt; Socorrer a Austin.</a></p>"
    ),
    wcap2h38: new undum.SimpleSituation(
        "<p>Jamás se lo perdonaría a sí mismo, pero si quería salvar la vida debía\
        abandonadar al marine a una muerte segura.</p>\
        <p>Cogió todo el equipo que pudo y corrió hacia los árboles. Notó\
        el silbido de un par de balas pasando muy cerca de él. No quiso saber cómo\
        de cerca habían pasado. Su única esperanza de sobrevivir al francotirador\
        era alcanzar la protección de la selva.<p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h41'>&gt; Continúa leyendo.</a></p>"
    ),
    wcap2h39: new undum.SimpleSituation(
        "<p>¡No podía dejar al marine allí herido!</p>\
        <p>Intentó incorporarse para correr hacia donde estaba el cuerpo de Austin\
        pero nada más asomar la cabeza, recibió un disparo que, por suerte, dio en\
        la roca.<p>\
        <p>Volvió a intentarlo, con el mismo resultado. ¿Qué podía hacer? ¿Abandonar al\
        marine a una muerte segura y buscar la protección de la selva o intentar\
        socorrerlo una vez más?</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h38'>&gt; Correr hacia la selva.</a></p>\
        <p class='transient'><a href='wcap2h40'>&gt; Socorrer a Austin.</a></p>"
    ),
    wcap2h40: new undum.SimpleSituation(
        "<p>Jamás se perdonaría a sí mismo haber abandonado al marine a una muerte\
        segura.</p>\
        <p>Miró a su alrededor a ver si se le ocurría algo. Cogió una piedra y la\
        lanzó hacía unas ruinas en la dirección opuesta a la que se encontraba Austin.</p>\
        <p>Escuchó unos disparos dirigidos hacia donde había caido la piedra. Era la\
        señal. ¡Había funcionado!</p>\
        <p>Se incorporó y salió corriendo lo más rápido que pudo hacia el marine.\
        Lamentablemente, se dio cuenta tarde de que jamás alcanzaría a tiempo su\
        objetivo.</p>\
        <p>Oyó un disparo a su espalda. Inmeditamente, un dolor inmenso en el muslo\
        de su pierna derecha. Se desplomó y pudo ver como un río\
        rojo se extendía por el suelo.</p>\
        <p>A pesar de tener la vista nublada, pudo distinguir a una mujer morena,\
        de aspecto atlético, que se le acercaba apuntándole con un arma.</p>\
        <p>Se detuvo cuando llegó junto a él, sin dejar de apuntarle a la cabeza</p>\
        <p>&#8212; Lo siento, pero no puedo permitir que nadie se me adelante. Que\
        Dios me perdone.</p>\
        <p>Vió un fogonazo. Luego, silencio.</p>\
        <p><br/></p>\
        <h1>*** FIN ***</h1>"
    ),    
    wcap2h41: new undum.SimpleSituation(
        "<p>Lanzó todo el equipo que tenía al alcance hacia la selva y, tras\
        ello, se lanzó él mismo con un rápido movimiento.</p>\
        <p>Cayó rodando varias decenas de metros, hasta que se detuvo al chocar\
        contra una losa que estaba oculta entre la vegetación. Se reincorporó y\
        esperó a que sus ojos se aclimataran a la escasa luz. No podía quedarse demasiado\
        tiempo allí, pues el francotirador no tardaría en seguir sus pasos en cuanto\
        se diera cuenta de que ya no estaba oculto tras las ruinas.<p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h42'>&gt; Continúa leyendo.</a></p>"
    ),  
    wcap2h42: new undum.SimpleSituation(
        "<p>Mientras recogía el equipo que estaba esparcido por el suelo, llamó\
        su atención la losa con la que había chocado en su caida. ¡Era una réplica\
        de la que tapaba la tumba de Pakal en el Templo de las Inscripciones!</p>\
        <p>Se podía ver claramente la representación de Pakal en una posición\
        semiacostada, con los cabellos ingrávidos, en una especie de silla con\
        cinturón de seguridad, los pies apoyados en unos pedales y una gran\
        cantidad de resortes, y palancas de mando. En la nariz de Pakal se podía\
        ver una especie de aparato que serviría como respirador. En la parte\
        trasera del vehículo se distinguían claramente las llamas producidas por\
        las toberas de la nave.</p>\
        <p>Sin embargo, esta representación del llamado &laquo;Astronauta de\
        Palenque&raquo; difería de la hallada en la tumba de Pakal. En la parte\
        delantera de la nave se encontraba grabado el glifo que había venido a\
        buscar.</p>\
        <p>&laquo;¡Es una señal!&raquo;</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h43'>&gt; Continúa leyendo.</a></p>"
    ),  
    wcap2h43: new undum.SimpleSituation(
        "<p>Comenzó a registrar los alrededores de la losa, removiendo la\
        abundante vegetación que lo invadía todo.</p>\
        <p>No tardó demasiado en encontrarla. No muy lejos de donde estaba la\
        losa, había otra semienterrada. Ésta contenía una serie de agujeros\
        simétricamente distribuidos por la superficie, sin duda colocados para que\
        pudiera ser movida pasando cuerdas a través de ellos.</p>\
        <p>Sacó una cuerda del equipo que llevaba y la pasó por los orificios.\
        La piedra pesaba más de lo que había imaginado, pero tras varios intentos\
        estériles y usando el tronco de un árbol a modo de polea, pudo moverla.</p>\
        <p>La piedra desveló unas escaleras que descendían por un estrecho pasadizo\
        hacia la oscuridad.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h44'>&gt; Seguir huyendo por la selva.</a></p>\
        <p class='transient'><a href='wcap2h45'>&gt; Descender por las escaleras.</a></p>"
    ),  
    wcap2h44: new undum.SimpleSituation(
        "<p>El pasadizo podía ser demasiado peligroso. Si se adentraba en él, no\
        podría, desde dentro, volver a dejar la piedra en su sitio, y el francotirador\
        sabría que tendría que seguirlo por allí.</p>\
        <p>Volvió a tapar el pasadizo, para ocultarlo y volver otro día, con más\
        protección y lejos de poner su vida en peligro. Recogió el equipo y se\
        adentró más en la selva.</p>\
        <p>Al cabo de unas horas llegó a un camino local. Continuó avanzando\
        y ya había amanecido cuando encontró una de las patrullas del ejército\
        que aseguraban la zona de exclusión.</p>\
        <p>Estaba a salvo.</p>\
        <p><br/></p>\
        <h1>*** FIN ***</h1>"
    ),    
    wcap2h45: new undum.SimpleSituation(
        "<p>&#8212; ¡Que sea lo que Dios quiera! &#8212; se dijo a sí mismo mientras\
        se adentraba en el pasadizo.</p>\
        <p>La escalera hacía un giro hacia la izquierda, llegando a una zona donde\
        las paredes y techo estaban perfectamente talladas, formando un túnel\
        rectangular. La roca se encontraba cristalizada, como si se hubiera usado\
        una fuente de calor extremo capaz de fundirla. Algunos tramos de pared\
        presentaban pictogramas tallados. Se detuvo a contemplar algunos que\
        representaban la cúpula celeste. Se podía distinguir el Sol y la Luna. Varias\
        estrellas estaban unidas por líneas, como si se tratara de un mapa estelar.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h46'>&gt; Continúa leyendo.</a></p>"
    ),   
    wcap2h46: new undum.SimpleSituation(
        "<p>&#8212; ¡Esto cambiará la concepción de nuestra Historia! &#8212; se dijo.</p>\
        <p>Siguió el camino descendente, hasta que se detuvo ante un nuevo\
        descubrimiento.<p>\
        <p>Tallados en tres losas de piedra, había cientos de glifos. Lo más\
        interesante de todo, es que contaban la historia de cómo el señor Pakal\
        había llegado a la Tierra desde las estrellas y cómo debía volver a ellas.</p>\
        <p>Oyó unos ruidos tras él, y vio los reflejos de luz de una linterna. No\
        podía quedarse a estudiar los jerogíficos. Tenía que salir deprisa de allí.\
        Le estaban siguiendo.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h47'>&gt; Continúa leyendo.</a></p>"
    ),   
    wcap2h47: new undum.SimpleSituation(
        "<p>Caminó unos cientos de metros antes de llegar a una cavidad inmensa. Tan\
        grande era, que la luz de la linterna no llegaba a iluminar ninguno de los\
        lados.<p>\
        <p>La escalera terminaba allí, en una rampa que se adentraba en la oscuridad\
        de la gigantesca sala. No podía ver más allá de unos metros, así que no\
        podía averiguar dónde se estaba metiendo.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h48'>&gt; Descender por la rampa.</a></p>\
        <p class='transient'><a href='wcap2h48b'>&gt; Enfrentarse a su perseguidor.</a></p>"
    ),   
    wcap2h48: new undum.SimpleSituation(
        "<p>La rampa estaba perfectamente tallada y descendía con una pendiente\
        constante, siguiendo la curva que iba describiendo la pared de la sala.</p>\
        <p>No cayó en la cuenta hasta que hubo descendido varios cientos de metros\
        por la rampa.<p>\
        <p>Si alumbraba con la linterna hacia el centro de la sala, la distancia\
        de alumbrado era mucho menor de la que debería ser. Lo mismo ocurría si\
        se acercaba al borde de la rampa y alumbraba hacía abajo. Sin embargo, si\
        alumbraba el camino que le quedaba por delante, la distancia\
        que alcanzaba la luz era la que se podía esperar.</p>\
        <p>¿Qué podía estar causando ese extraño efecto? Sólo se le ocurría una\
        cosa que pudiera producir ese efecto sobre la luz: los agujeros negros.\
        Pero eso no era posible.</p>\
        <p>Continuó descendiendo.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h49'>&gt; Continúa leyendo.</a></p>"
    ), 
    wcap2h48b: new undum.SimpleSituation(
        "<p>Descender a toda prisa sin saber donde se estaba metiendo podía ser\
        demasiado peligroso.</p>\
        <p>Se escondió en un recoveco de la gruta para emboscar a su perseguidor.\
        A los pocos segundos, apareció la luz de una linterna seguida por una\
        mujer morena de aspecto atlético.</p>\
        <p>Se abalanzó sobre ella, aprovechando el factor sorpresa. Pero la lucha\
        no fue como él pensaba.</p>\
        <p>Después de unos momentos de zarandeos mutuos, la mujer se zafó con gran\
        habilidad y lo redujo en apenas unos pocos movimientos. Estaba mucho más\
        preparada que él.</p>\
        <p>&#8212; Que Dios me perdone. &#8212; dijo apuntándole con una pistola.</p>\
        <p>Vió un fogonazo. Luego, silencio.</p>\
        <p><br/></p>\
        <h1>*** FIN ***</h1>"
    ),    
    wcap2h49: new undum.SimpleSituation(
        "<p>Descendió durante horas por la rampa. No sabría calcular a qué\
        profundidad se podría encontrar. De repente, la linterna iluminó, unos\
        metros más adelante, un suelo de roca sin pendiente. ¡Había llegado al\
        final de la rampa!</p>\
        <p>Exhausto, se descargó de todo el equipo y se sentó en el suelo, apoyado\
        en la pared, para descansar.<p>\
        <p>Mientras recobraba poco a poco el aliento, iluminó alrededor para otear\
        la sala en la que se encontraba. Era inmensa. Jamás podría haber imaginado\
        siquiera que pudiera existir semejante cavidad en el subsuelo.</p>\
        <p>La innatural negrura que ocupaba todo el centro de la sala seguía allí,\
        incluso a nivel del suelo, aunque no parecía que fuese nada. Simplemente,\
        la luz se quedaba atrapada en ella.</p>\
        <p>Enfocó la linterna hacia un monolito que llamó su atención.</p>\
        <p>Era la única estructura que había allí, a parte de lo que demonios fuera\
        la negra parte central de la sala. Tenía aproximadamente medio metro de\
        alto, y era un cubo perfecto. Se levantó para acercarse a examinarlo.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h50'>&gt; Continúa leyendo.</a></p>"
    ), 
    wcap2h50: new undum.SimpleSituation(
        "<p>El cubo estaba perfectamente tallado en un material totalmente negro\
        y reflectante. No parecía tener impurezas de ninguna clase.</p>\
        <p>Las caras laterales estaban llenas de glifos tallados, todos diferentes\
        entre sí, que le dieron la impresión de ser pulsadores. En la cara superior,\
        había múltiples combinaciones de cuatro glifos, ninguna repetida, agrupados\
        en doce grupos de treinta combinaciones. Había un treceavo grupo con cinco\
        combinaciones, también de cuatro glifos cada una.<p>\
        <p>&laquo;¡Era un calendario! ¡Doce meses de treinta días y un treceavo de\
        cinco! ¡Trescientos sesenta y cinco días!&raquo;.</p>\
        <p>Se encontraba ante el panel de control de alguna maquinaria. ¡O tal vez\
        algo que desactivara la negrura y mostrase lo que ocultaba! Pero, la cueva\
        tenía cientos de miles de años de antigüedad, millones quizás. ¡Y nadie\
        había estado allí en, al menos, mil cuatrocientos años! ¡Esa\
        maquinaria estaba fuera de lugar!</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h20'>&gt; Continúa leyendo.</a></p>"
    ), 
    wcap2h51: new undum.SimpleSituation(
        "<h1>2 - El Fin</h1>\
        <p>El jeep se detuvo a unos metros de la Gran Pirámide, junto a unas\
        excavaciones.</p>\
        <p>La obra, aparentemente, correspondía al faraón Keops, perteneciente\
        a la IV dinastía, hacia el año 2.400 a.C. Sin embargo, ésto no cuadraba\
        con los datos que ese inmenso monumento propocionaba en la actualidad.</p>\
        <p>Su reinado duró 23 años, de los cuales dedicaría 20 a su inmortal obra.\
        Por tanto, cada año 100.000 obreros debieron colocar un bloque de 2,5 a 10\
        toneladas cada 3,5 minutos durante 24 horas al día. Y ciertamente, resultaba\
        difícil imaginar tanta velocidad en el desplazamiento y colocación de tan\
        enormes moles, además de que los egipcios de la IV dinastía jamás dispusieron\
        de tanta mano de obra.</p>\
        <p>&#8212; ¡Eh Doc! ¡Deje de mirar la pirámide y ayúdeme a descargar\
        el equipo!&#8212; la Gran Pirámide era fascinante.</p>\
        <p>El que le gritaba era Austin, un marine del ejército que le habían puesto\
        de guardaespaldas. ¿Por qué iba a tener que necesitar un guardaespaldas?\
        A pesar de sus quejas, no le hicieron caso. Los tecnócratas del gobierno\
        quizás temían que descubriera algo que no les gustara.</p>\
        <p>La zona estaba desierta cuando llegaron. El gobierno había declarado\
        una zona de exclusión en unos kilómetros a la redonda para evitar la presencia\
        de turistas. El motivo: un helicóptero con productos tóxicos se había\
        estrellado en la zona. No reparaban en gastos.</p>\
        <p>&#8212;¿Por dónde empezamos a buscar, doc?&#8212; preguntó el marine.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h54'>&gt; Buscar en la Gran Pirámide.</a></p>\
        <p class='transient'><a href='wcap2h52'>&gt; Buscar en la Esfinge.</a></p>"
    ),
    wcap2h52: new undum.SimpleSituation(
        "<p>La Esfinge era, si acaso, todavía más enigmática que la Gran Pirámide.\
        La erosión que presentaba la figura colosal se debía a que había estado\
        expuesta a intensas lluvias. Por siglos de lluvias, habiendo dejado las\
        rocas con un perfil redondo y ondulado.</p>\
        <p>¿Cuándo hubo unas lluvias así en Egipto? Lo que es evidente, que en\
        tiempo de los faraones no. Sólo una época encajaba... en torno al\
        10.500 a.C.<p>\
        <p>&#8212;¿Y cómo se explica entonces la cara del faraón en la Esfinge?\
        &#8212; le preguntó acertadamente le marine al oir su explicación.</p>\
        <p>&#8212;Si la observamos con detenimiento, nos daremos cuenta que la\
        cabeza está en bastante mejor estado que el resto del cuerpo. Y algo\
        sumamente inquietante, la cabeza es muchísimo más pequeña. Vista desde el\
        aire, el cuerpo es largo y aplanado y la cabeza es como una cabeza de alfiler\
        encima. Esto puede ser una prueba de que se hizo de nuevo, que no es la\
        original. En algún momento de la Historia se esculpió otra cabeza para\
        la Esfinge. Puede que la original fuera la de un león.</p>\
        <p><img src='./media/games/2112/Esfinge_Leon.jpg' /></p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h53'>&gt; Continúa leyendo.</a></p>"
    ),
    wcap2h53: new undum.SimpleSituation(
        "<p>&#8212;¿Un león?</p>\
        <p>&#8212;La Esfinge parece estar hecha para observar el cambio de las\
        eras astrológicas. Se alinea con misteriosa precisión con el Sol cuando\
        llega el equinoccio de primavera, y al hacerlo en la citada fecha, mira\
        con sus ojos directamente hacia el Sol. Si se construyó en el 2.500 a.C.,\
        como se admite, por aquel entonces el Sol salía por la constelación de\
        Tauro, por lo que hubiera sido absurdo para un faraón construir un marcador\
        equinoccial con forma de león. De hecho, sólo hay una época en la que\
        hubiera sido apropiado la construcción de la Esfinge con la forma que tiene,\
        la era de Leo, que empezó en el milenio 11 a.C., lo que nos lleva otra vez\
        a la época entorno al 10.500 a.C.</p>\
        <p>&#8212;Y aún te diría una cosa más, Austin. Análisis detallados de los\
        rasgos faciales de la Esfinge, comparándolos con otras estatuas del faraón\
        Kefren, delatan que no se trataría de éste como se ha pensado hasta ahora.</p>\
        <p><img src='./media/games/2112/Kefren_Esfinge.jpg' /></p>\
        <p>Buscaron durante algunas horas algún indicio de lo que había descubierto\
        en el laboratorio, pero no encontraron nada. Debían haber ido directamente\
        a la pirámide.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h54'>&gt; Buscar en la Gran Pirámide.</a></p>"
    ), 
    wcap2h54: new undum.SimpleSituation(
        "<p>Se adelantó hacia la entrada a la Gran Pirámide mientras Austin recogía\
        el equipo necesario del jeep.</p>\
        <p>Se giró brúscamente al oir el disparo, justo a tiempo para ver cómo el\
        marine caia desplomado junto al jeep.</p>\
        <p>Se lanzó a la protección de unas ruinas cuando oyó un segundo disparo,\
        esta vez dirigido a él. El corazón le latía con tanta fuerza que parecía\
        que se le iba a escapar del pecho.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h57'>&gt; Correr hacia la Pirámide.</a></p>\
        <p class='transient'><a href='wcap2h55'>&gt; Socorrer a Austin.</a></p>"
    ), 
    wcap2h55: new undum.SimpleSituation(
        "<p>Jamás se perdonaría dejar a Austin abandonado a una muerte segura.</p>\
        <p>Intentó moverse para ir en busca del marine, pero al menor movimiento\
        que hizo, el francotirador le disparó, no alcanzándole por centímetros.</p>\
        <p>&laquo;¡Maldita sea!&raquo; tenía que pensar con rapidez.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h57'>&gt; Correr hacia la Pirámide.</a></p>\
        <p class='transient'><a href='wcap2h56'>&gt; Socorrer a Austin.</a></p>"
    ), 
    wcap2h56: new undum.SimpleSituation(
        "<p>¡Tenía que hacer todo lo posible por salvar a Austin!</p>\
        <p>Miró a su alrededor a ver si se le ocurría algo. Cogió una piedra y la\
        lanzó hacía unas ruinas en la dirección opuesta a la que se encontraba Austin.</p>\
        <p>Escuchó unos disparos dirigidos hacia donde había caido la piedra. Era la\
        señal. ¡Había funcionado!</p>\
        <p>Se incorporó y salió corriendo lo más rápido que pudo hacia el marine.\
        Lamentablemente, se dio cuenta tarde de que jamás alcanzaría a tiempo su\
        objetivo.</p>\
        <p>Oyó un disparo a su espalda. Inmeditamente, un dolor inmenso en el muslo\
        de su pierna derecha. Se desplomó y pudo ver como un río\
        rojo se extendía por el suelo.</p>\
        <p>A pesar de tener la vista nublada, pudo distinguir a una mujer morena,\
        de aspecto atlético, que se le acercaba apuntándole con un arma.</p>\
        <p>Se detuvo cuando llegó junto a él, sin dejar de apuntarle a la cabeza</p>\
        <p>&#8212; Lo siento, pero no puedo permitir que nadie se me adelante. Que\
        Dios me perdone.</p>\
        <p>Vió un fogonazo. Luego, silencio.</p>\
        <p><br/></p>\
        <h1>*** FIN ***</h1>"
    ),    
    wcap2h57: new undum.SimpleSituation(
        "<p>Jamás se lo perdonaría a sí mismo, pero si quería salvar la vida debía\
        abandonadar al marine a su suerte.</p>\
        <p>Cogió todo el equipo que pudo y corrió hacia la entrada a la pirámide. Notó\
        el silbido de un par de balas pasando muy cerca de él. No quiso saber cómo\
        de cerca habían pasado. Su única esperanza de sobrevivir al francotirador\
        era alcanzar la entrada.<p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h58'>&gt; Continúa leyendo.</a></p>"
    ),
    wcap2h58: new undum.SimpleSituation(
        "<p>La galería se adentraba hacia el corazón de la pirámide, con una\
        pendiente descendente.</p>\
        <p>Al cabo de unos minutos, llegó a una bifurcación. Uno de los caminos\
        ascendía hacia la cámara del rey. El otro descendía hacia la cámara de\
        la reina.<p>\
        <p>No tenía demasiado tiempo para decidir por donde ir.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h59'>&gt; Ir por la galería ascendente.</a></p>\
        <p class='transient'><a href='wcap2h60'>&gt; Ir por la galería descendente.</a></p>"
    ),  
    wcap2h59: new undum.SimpleSituation(
        "<p>&#8212; ¡Que sea lo que Dios quiera! &#8212; se dijo a sí mismo mientras\
        se adentraba en la galería que ascendía hacia la cámara del rey.</p>\
        <p>La cámara del rey era la más grande de las que se había descubierto\
        en el interior de la Gran Pirámide. Tenía más de veinte metros de altura\
        y más de cincuenta de anchura. Tan sólo había una extraña columna que\
        iba desde el suelo hasta el techo, llena de jeroglíficos. No tardó en\
        encontrar el que buscaba: el que había visto en las tablillas sumerias.<p>\
        <p>Allí estaba: la constelación de Orión. Un misterio más que envolvía\
        a las pirámides. Las de Gizeh estaban dispuestas como un reflejo en la\
        Tierra de dicha constelación. Pero lo verdaderamente intrigante es que\
        la fecha en que la disposición de las pirámides y Orión fue exactamente\
        la misma nos llevaba al año 10.500 a.C.</p>\
        <p><img src='./media/games/2112/Orion_Piramides.jpg' /></p>\
        <p>A parte de la columna con los jeroglíficos, no encontró nada más en\
        la sala. Quizás en la cámara de la reina tuviera más suerte.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h63'>&gt; Ir a la cámara de la reina.</a></p>"
    ),   
    wcap2h60: new undum.SimpleSituation(
        "<p>&#8212; ¡Que sea lo que Dios quiera! &#8212; se dijo a sí mismo mientras\
        se adentraba en la galería que descendía hasta la cámara de la reina.</p>\
        <p>La cámara de la reina era una estancia muy amplia, de unos ochenta o\
        noventa metros cuadrados. La altura a la que se encontraba el techo\
        rondaría los veinte metros.<p>\
        <p>Allí estaba: la constelación de Orión. Un misterio más que envolvía\
        a las pirámides. Las de Gizeh estaban dispuestas como un reflejo en la\
        Tierra de dicha constelación. Pero lo verdaderamente intrigante es que\
        la fecha en que la disposición de las pirámides y Orión fue exactamente\
        la misma nos llevaba al año 10.500 a.C.</p>\
        <p><img src='./media/games/2112/Orion_Piramides.jpg' /></p>\
        <p>Pensaba que el glifo sólo se encontraba en la cámara del rey, pero\
        al parecer estaba equivocado. Había una tablilla con la constelación\
        en una losa del suelo. Llamaba la atención, pues no era del mismo tipo\
        de piedra que el resto de losas de la cámara.</p>\
        <p>Le llamó tanto la atención que tuvo la intuición de que ocultaba algo.</p>\
        <p>Movió la tablilla, no sin dificultad, y descubrió una galería secreta\
        que descendía aún más. Podría ser extremadamente peligroso descender\
        a ciegas por la galería. Quizás en la cámara del rey tendría más éxito.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h61'>&gt; Ir a la cámara del rey.</a></p>\
        <p class='transient'><a href='wcap2h65'>&gt; Descender por la galería.</a></p>"
    ),   
    wcap2h61: new undum.SimpleSituation(
        "<p>Decidió que valía la pena visitar primero la cámara del rey. Además,\
        no iba a averiguar qué había más allá de la rampa hasta que no hubiera\
        descendido por ella, lo que podría ser demasiado tarde.</p>\
        <p>Retrocedió sobre sus pasos y, cuando estaba a punto de llegar de nuevo\
        a la bifurcación, pudo ver una luz que se acercaba.<p>\
        <p>&laquo;¡Hostia! ¡Me han seguido hasta aquí!&raquo;.</p>\
        <p>Seguramente ya habrían visto la luz de su linterna. No había tiempo que perder.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h62'>&gt; Seguir hasta la cámara del rey.</a></p>\
        <p class='transient'><a href='wcap2h66'>&gt; Volver hasta la cámara de la reina.</a></p>"
    ), 
    wcap2h62: new undum.SimpleSituation(
        "<p>Se dirigió corriendo por el camino ascendente, hasta la cámara del\
        rey. Mientras corría por la galería, le llovían los disparos, que pasaban\
        demasiado cerca.</p>\
        <p>&laquo;¡Mierda! ¡Le habían visto!&raquo; corría todo lo rápido que le\
        permitía el equipo que llevaba.</p>\
        <p>Se escondió en un recoveco de la gruta para emboscar a su perseguidor.\
        A los pocos segundos, apareció la luz de una linterna seguida por una\
        mujer morena de aspecto atlético.</p>\
        <p>Notó como se abalanzaban sobre el. Cayó al suelo.</p>\
        <p>Después de unos momentos de zarandeos mutuos, lo redujo en apenas unos\
        pocos movimientos. Estaba mucho más preparada que él para la lucha.</p>\
        <p>Vio a una mujer morena y de aspecto atlético. Le apuntaba con una\
        pistola.</p>\
        <p>&#8212; Que Dios me perdone.</p>\
        <p>Vió un fogonazo. Luego, silencio.</p>\
        <p><br/></p>\
        <h1>*** FIN ***</h1>"
    ),    
    wcap2h63: new undum.SimpleSituation(
        "<p>La cámara de la reina era una estancia muy amplia, de unos ochenta o\
        noventa metros cuadrados. La altura a la que se encontraba el techo\
        rondaría los veinte metros.<p>\
        <p>Para su sorpresa, en aquella sala también se hallaba la constelación\
        de Orión. Pensaba que el glifo sólo se encontraba en la cámara del rey, pero\
        al parecer estaba equivocado. Había una tablilla con la constelación\
        en una losa del suelo. Llamaba la atención, pues no era del mismo tipo\
        de piedra que el resto de losas de la cámara.</p>\
        <p>Le llamó tanto la atención que tuvo la intuición de que ocultaba algo.</p>\
        <p>Movió la tablilla, no sin dificultad, y descubrió una galería secreta\
        que descendía aún más. Podría ser extremadamente peligroso descender\
        a ciegas por la galería.</p>\
        <p>Vio una luz que se aproximaba por la galería por la que había llegado.\
        ¡Le pisaban los talones!</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h64'>&gt; Enfrentarse a su perseguidor.</a></p>\
        <p class='transient'><a href='wcap2h65'>&gt; Descender por la galería.</a></p>"
    ),   
    wcap2h64: new undum.SimpleSituation(
        "<p>Descender a toda prisa sin saber donde se estaba metiendo podía ser\
        demasiado peligroso.</p>\
        <p>Se escondió en un recoveco para emboscar a su perseguidor.\
        A los pocos segundos, apareció la luz de una linterna seguida por una\
        mujer morena de aspecto atlético.</p>\
        <p>Se abalanzó sobre ella, aprovechando el factor sorpresa. Pero la lucha\
        no fue como él pensaba.</p>\
        <p>Después de unos momentos de zarandeos mutuos, la mujer se zafó con gran\
        habilidad y lo redujo en apenas unos pocos movimientos. Estaba mucho más\
        preparada que él.</p>\
        <p>&#8212; Que Dios me perdone. &#8212; dijo apuntándole con una pistola.</p>\
        <p>Vió un fogonazo. Luego, silencio.</p>\
        <p><br/></p>\
        <h1>*** FIN ***</h1>"
    ),    
    wcap2h65: new undum.SimpleSituation(
        "<p>&#8212;¡Vamos! ¡Rápido! &#8212; se dijo a sí mismo mientras\
        se adentraba en la galería.</p>\
        <p>La galería hacía un giro hacia la izquierda, llegando a una zona donde\
        las paredes y techo estaban perfectamente talladas, formando un túnel\
        rectangular. La roca se encontraba cristalizada, como si se hubiera usado\
        una fuente de calor extremo capaz de fundirla. Algunos tramos de pared\
        presentaban pictogramas tallados. Se detuvo a contemplar algunos que\
        representaban la cúpula celeste. Se podía distinguir el Sol y la Luna. Varias\
        estrellas estaban unidas por líneas, como si se tratara de un mapa estelar.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h67'>&gt; Continúa leyendo.</a></p>"
    ),   
    wcap2h66: new undum.SimpleSituation(
        "<p>Volvió corriendo hasta la cámara de la reina. Su única salida era\
        descender por la galería que acababa de descubrir.<p>\
        <p>Oía cómo se acercaban sus perseguidores. No le quedaba demasiado tiempo.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h65'>&gt; Continuar leyendo.</a></p>"
    ),   
    wcap2h67: new undum.SimpleSituation(
        "<p>&#8212; ¡Esto cambiará la concepción de nuestra Historia! &#8212; se dijo.</p>\
        <p>Siguió el camino descendente, hasta que se detuvo ante un nuevo\
        descubrimiento.<p>\
        <p>Tallados en tres losas de piedra, había cientos de glifos. Lo más\
        interesante de todo es que en algunos se podía ver unas máquinas que\
        producían luz, con forma de primitivas bombillas, y otras que producían\
        energía, como si fueran pilas, y a las que parecían estar enchufadas las\
        primeras. ¡No podía ser!</p>\
        <p>Oyó unos ruidos tras él, y vio los reflejos de luz de una linterna. No\
        podía quedarse a estudiar los jerogíficos. Tenía que salir deprisa de allí.\
        Le estaban siguiendo.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h68'>&gt; Continúa leyendo.</a></p>"
    ),   
    wcap2h68: new undum.SimpleSituation(
        "<p>Caminó unos cientos de metros antes de llegar a una cavidad inmensa. Tan\
        grande era, que la luz de la linterna no llegaba a iluminar ninguno de los\
        lados.<p>\
        <p>La galería terminaba allí, en una rampa que se adentraba en la oscuridad\
        de la gigantesca sala. No podía ver más allá de unos metros, así que no\
        podía averiguar dónde se estaba metiendo.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h69'>&gt; Descender por la rampa.</a></p>\
        <p class='transient'><a href='wcap2h64'>&gt; Enfrentarse a su perseguidor.</a></p>"
    ),   
    wcap2h69: new undum.SimpleSituation(
        "<p>La rampa estaba perfectamente tallada y descendía con una pendiente\
        constante, siguiendo la curva que iba describiendo la pared de la sala.</p>\
        <p>No cayó en la cuenta hasta que hubo descendido varios cientos de metros\
        por la rampa.<p>\
        <p>Si alumbraba con la linterna hacia el centro de la sala, la distancia\
        de alumbrado era mucho menor de la que debería ser. Lo mismo ocurría si\
        se acercaba al borde de la rampa y alumbraba hacía abajo. Sin embargo, si\
        alumbraba el camino que le quedaba por delante, la distancia\
        que alcanzaba la luz era la que se podía esperar.</p>\
        <p>¿Qué podía estar causando ese extraño efecto? Sólo se le ocurría una\
        cosa que pudiera producir ese efecto sobre la luz: los agujeros negros.\
        Pero eso no era posible.</p>\
        <p>Continuó descendiendo.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h70'>&gt; Continúa leyendo.</a></p>"
    ), 
    wcap2h70: new undum.SimpleSituation(
        "<p>Descendió durante horas por la rampa. No sabría calcular a qué\
        profundidad se podría encontrar. De repente, la linterna iluminó, unos\
        metros más adelante, un suelo de roca sin pendiente. ¡Había llegado al\
        final de la rampa!</p>\
        <p>Exhausto, se descargó de todo el equipo y se sentó en el suelo, apoyado\
        en la pared, para descansar.<p>\
        <p>Mientras recobraba poco a poco el aliento, iluminó alrededor para otear\
        la sala en la que se encontraba. Era inmensa. Jamás podría haber imaginado\
        siquiera que pudiera existir semejante cavidad bajo la Gran Pirámide.</p>\
        <p>La innatural negrura que ocupaba todo el centro de la sala seguía allí,\
        incluso a nivel del suelo, aunque no parecía que fuese nada. Simplemente,\
        la luz se quedaba atrapada en ella.</p>\
        <p>Enfocó la linterna hacia un monolito que llamó su atención.</p>\
        <p>Era la única estructura que había allí, a parte de lo que demonios fuera\
        la negra parte central de la sala. Tenía aproximadamente medio metro de\
        alto, y era un cubo perfecto. Se levantó para acercarse a examinarlo.</p>\
        <p><br/></p>\
        <p class='transient'><a href='wcap2h50'>&gt; Continúa leyendo.</a></p>"
    ), 
    pcap1h1: new undum.SimpleSituation(
        "<h1>1 - La investigación</h1>\
        <p><br/></p>\
        <h1>*** PROXIMAMENTE ***</h1>"
    ),
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
    profesion: new undum.WordScaleQuality(
        "Profesión", ["Arqueólogo","Agente Secreto"],{priority:"0002", group:'general'}
    ),

/*    nivel: new undum.IntegerQuality(
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
*/
 /*  luck: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Skill, Stamina and Luck are reverently borrowed from the Fighting Fantasy series of gamebooks. The words representing Luck are from the FUDGE RPG. This tooltip is illustrating that you can use any HTML in the label for a quality (in this case a span containing a title attribute).'>Luck</span>",
        {priority:"0003", group:'stats'}
    ),*/
/*
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
    )*/
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
     character.qualities.profesion = 0; //Arqueólogo
/*    character.qualities.nivel = 1;
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
*/    
    var nompers=document.getElementById("nompersonaje");
    if (system.rnd.randomInt(1, 10) < 11) {
      undum.game.start = "w_intro";
      //system.writeBefore("<h1>WILLIAM BAFFORD</h1>",$("#character"));
      $('#nompersonaje').append('WILLIAM BAFFORD');
    } else {
      undum.game.start = "p_intro";
      //system.writeBefore("<h1>PAOLA LAREZZO</h1>",$("#character"));
      $('#nompersonaje').append('PAOLA LAREZZO');
    }
};
