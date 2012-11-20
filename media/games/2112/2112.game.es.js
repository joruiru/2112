﻿// ---------------------------------------------------------------------------
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
        <p>Pudo escuchar un par de toques más antes de perder la consciencia.</p>\
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
        <p>&#8212;Santidad &#8212;lo saludó ella mientras el sacerdote cerraba la\
        puerta al salir</p>\
        <p>&#8212;Señorita Larezzo. &#8212;El Papa se dirigió a ella con un afecto\
        genuino al tiempo que le indicaba con un gesto que tomara asiento&#8212;.\
        Paola Larezzo. Hace ya tiempo que quería conocerla.</p>\
        <p>Sorprendida, se hundió en la silla de cuero mientras el Santo Padre\
        volvía a examinar el informe que había redactado el Vaticano acerca de ella.</p>\
        <p><br/></p>\
        <p class='transient'><a href='intro3'>&gt; Continúa leyendo.</a></p>"
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
    
    if (system.rnd.randomInt(1, 10) < 6) {
      undum.game.start = "w_intro";
    } else {
      undum.game.start = "p_intro";
    }
};
