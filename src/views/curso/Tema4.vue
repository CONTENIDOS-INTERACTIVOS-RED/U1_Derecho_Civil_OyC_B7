<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Las obligaciones '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-8.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema4/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") En el desarrollo del Derecho Civil, el estudio de las obligaciones representa una etapa central y necesaria para comprender las relaciones jurídicas que surgen entre las personas. Toda estructura jurídica en la que un sujeto debe cumplir una prestación a favor de otro, ya sea en virtud de un contrato, por mandato legal o por el resultado de un hecho, se fundamenta en el concepto de obligación. Por ello, conocer sus elementos, su evolución, su clasificación y sus fuentes es indispensable para quien se forma como jurista.

    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Noción de obligación 
    
    p.mb-4 Se estudia la noción de obligación como el eje central del Derecho de las obligaciones y contratos, proporcionando al estudiante una comprensión profunda del vínculo jurídico que une al acreedor y al deudor en torno al cumplimiento de una prestación.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Noción de obligación
            p.mb-4(data-aos="fade-right") En el PDF <b>Noción de obligación</b>, se analizan los elementos esenciales de esta figura, su fundamento normativo en el Código Civil colombiano y su aplicación práctica en diversas áreas del derecho, sentando así las bases para interpretar y aplicar con rigor jurídico las relaciones patrimoniales en contextos reales.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Noción de obligación.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/2.png', alt='')
    
    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.2] Teoría de las obligaciones    

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/3.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La teoría general de las obligaciones es una construcción doctrinal y jurídica que tiene como finalidad establecer un marco común para todas las obligaciones, sin importar su fuente, objeto, intensidad o aplicación concreta. Se trata de una herramienta de sistematización que permite identificar los elementos constantes que hacen que cualquier vínculo jurídico obligacional sea reconocible, exigible y operativo dentro del ordenamiento. Gracias a esta teoría, el Derecho puede regular con claridad la relación entre dos o más sujetos que se encuentran unidos por el deber de cumplir una prestación y por el derecho de exigirla.
    
        .bg-color-11.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En el centro de esta teoría se identifican cuatro elementos estructurales comunes a toda obligación: el vínculo jurídico, los sujetos, el objeto y la causa. Cada uno de ellos cumple una función específica dentro de la estructura de la obligación y su existencia es necesaria para que el vínculo pueda ser considerado válido y exigible jurídicamente. 
    
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema4/5.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Vínculo jurídico") Es el núcleo de la obligación. No basta que exista un deber moral o un compromiso entre personas para que se configure una obligación jurídica. Lo que convierte un deber en obligación exigible es que esté protegido por el Derecho, es decir, que el acreedor pueda acudir ante la autoridad jurisdiccional para hacer valer su derecho frente al deudor. Este vínculo implica coercibilidad: en caso de incumplimiento, el acreedor podrá solicitar judicialmente el cumplimiento forzado, la indemnización por daños y perjuicios, o cualquier otra consecuencia prevista en la Ley. Esta diferencia entre la obligación jurídica y la obligación moral es fundamental, ya que delimita el campo de acción del Derecho.
          p(numero="2" titulo="Sujetos jurídicos") Toda obligación requiere, al menos, un acreedor, que es el titular del derecho a exigir la prestación, y un deudor, que es el sujeto obligado a cumplirla. Esta relación puede ser sencilla (una sola persona en cada extremo) o compleja, cuando intervienen varios acreedores o deudores, como ocurre en las obligaciones mancomunadas o solidarias. En estos casos, la teoría de las obligaciones ofrece herramientas conceptuales para definir cómo se divide la obligación, cómo se exige y cómo se extingue entre varios sujetos, garantizando claridad y seguridad jurídica.
          p(numero="3" titulo="Objeto de la obligación") Que corresponde a la prestación debida. Esta prestación es el contenido del deber jurídico: lo que el deudor debe dar, hacer o no hacer a favor del acreedor. El objeto debe cumplir con tres condiciones fundamentales para ser válido: posibilidad, licitud y determinación (o al menos ser determinable). La prestación debe ser físicamente y jurídicamente posible (por ejemplo, no se puede obligar a entregar un bien inexistente o fuera del comercio), debe ser lícita (no contraria a la Ley ni a las buenas costumbres), y debe estar suficientemente definida para que su cumplimiento sea exigible. Según su naturaleza, las obligaciones se clasifican como de dar (entregar una cosa), de hacer (realizar una actividad o servicio) o de no hacer (abstenerse de realizar una conducta).
          p(numero="4" titulo="La causa") Entendida como el motivo o la razón jurídica por la cual se contrae la obligación. A diferencia del simple motivo psicológico, la causa es un elemento objetivo: debe ser lícita, real y existente. Por ejemplo, en un contrato de compraventa, la causa de la obligación del vendedor es el precio, y la del comprador es la cosa vendida. Si la causa falta o es ilícita (por ejemplo, un contrato simulado para encubrir una operación ilegal), la obligación carece de validez jurídica. Este análisis de la causa es esencial para verificar la legalidad y legitimidad del vínculo obligacional.
    
    p.mb-4 La teoría general de las obligaciones no solo define la estructura interna del vínculo, sino que también proporciona criterios para clasificar las obligaciones. Estas clasificaciones permiten ordenar y aplicar las normas adecuadas a cada tipo de obligación:

    TabsC.color-acento-contenido
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Según el objeto" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Según el objeto
            p Las obligaciones pueden ser positivas (dar o hacer) o negativas (no hacer)
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/6.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Según la exigibilidad" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Según la exigibilidad
            p Se dividen en puras (exigibles de inmediato), condicionales (dependen de un hecho futuro e incierto), o a plazo (dependen de un término cierto).
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/7.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Según su extensión" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Según su extensión
            p Se clasifican en divisibles (la prestación puede cumplirse en partes) o indivisibles (debe cumplirse en su totalidad).
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/8.png', alt='', style="width: 100%;")
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Según la relación entre los sujetos" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Según la relación entre los sujetos
            p Se reconocen las obligaciones simples (una persona frente a otra), solidarias (uno o varios deudores responden por el total de la obligación), mancomunadas (cada deudor responde solo por su parte), alternativas (el deudor puede cumplir con una de varias prestaciones) y facultativas (el deudor se obliga a una, pero puede cumplir otra).
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/9.png', alt='', style="width: 100%;")
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/10.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Estas clasificaciones no son meramente académicas. En la práctica, determinan cómo se exige el cumplimiento, cómo se resuelve el incumplimiento y cómo se transmiten las obligaciones en caso de sucesión o cesión de derechos.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Es importante señalar que las obligaciones son el corazón del Derecho de las relaciones privadas. Aparecen constantemente en la vida cotidiana: al celebrar un contrato, al causar un daño, al beneficiarse sin causa de algo que pertenece a otro, o al adquirir una herencia. Las obligaciones se manifiestan tanto en relaciones contractuales (como la compraventa o el arrendamiento), como en relaciones extracontractuales (como la responsabilidad civil), y también en el ámbito de la familia (alimentos, deberes patrimoniales conyugales) y de las sucesiones (partición de bienes, legados, cargas hereditarias).
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/11.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") La teoría general de las obligaciones ofrece al Derecho una base sólida para regular, interpretar y aplicar las normas relativas a los deberes jurídicos entre personas. A través de esta teoría, el estudiante de Derecho adquiere las herramientas conceptuales necesarias para abordar cualquier problema jurídico relacionado con relaciones de crédito, garantizando una formación integral y rigurosa que será indispensable para el ejercicio profesional.
          figure.d-flex.justify-content-end
            img(src="@/assets/curso/tema4/12.svg", style="max-width: 90px", data-aos="zoom-in")
    
    #t_4_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.3] Evolución histórica del concepto de obligación
    
    p.mb-4 El concepto de obligación, tal como lo entendemos hoy en el Derecho Civil, no siempre tuvo el mismo significado ni los mismos efectos. Su evolución histórica ha sido el resultado de un largo proceso de transformación jurídica y cultural, que ha pasado de una visión primitiva centrada en el castigo físico del deudor, a una concepción moderna basada en la autonomía de la voluntad, la dignidad humana y la responsabilidad patrimonial. Conocer esta evolución es fundamental para comprender no solo el concepto técnico de obligación, sino también su función social y jurídica en distintos momentos de la historia.

    .row.align-items-center.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema4/13.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-7
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large-1(data-aos="fade-left")
          p(numero="1" titulo="Orígenes") Los orígenes de la obligación se encuentran en el Derecho Romano arcaico, donde la obligatio era entendida como un vínculo estrictamente personal que sujetaba al deudor al acreedor. En sus primeras manifestaciones, la obligación no implicaba un deber jurídico abstracto, sino una relación de fuerza: el deudor era físicamente "ligado" (ob-ligare) al acreedor, y en caso de incumplimiento podía ser sometido a esclavitud por deuda, arresto, e incluso ejecución. El cumplimiento de las obligaciones no era un asunto de justicia distributiva, sino de poder: quien no pagaba una deuda era tratado como un enemigo privado (hostis).
          div(numero="2" titulo="Periodo clásico") 
            p Con el paso del tiempo, el Derecho Romano evolucionó hacia formas más racionales y equilibradas de entender la relación obligacional. Durante el periodo clásico, especialmente con el desarrollo del ius civile y el ius gentium, la obligación se fue conceptualizando como una relación jurídica entre dos personas, caracterizada por el deber de cumplimiento y la posibilidad de exigir la prestación por medios legales. El célebre jurista Justiniano, en sus Instituciones, definió la obligación como el "vínculo jurídico que nos constriñe a cumplir una determinada prestación conforme a las leyes de nuestra ciudad". Aquí ya se percibe una clara transformación: la obligación deja de ser una sujeción personal para convertirse en una estructura jurídica que puede ser exigida sin recurrir a la violencia.
            p En este periodo, también se comenzaron a distinguir las fuentes de las obligaciones, clasificándolas en contratos, cuasicontratos, delitos y cuasidelitos. Esta clasificación, que será retomada por el Código Civil colombiano en su Artículo 1494, permitió construir una teoría más sistemática y coherente del derecho de obligaciones. Asimismo, la figura de la obligación dejó de ser meramente sancionadora para adquirir una función estructurante de la economía, el comercio y las relaciones jurídicas privadas.
          p(numero="3" titulo="Edad Media") Durante la Edad Media, la concepción de la obligación se vio influida por el pensamiento canónico y la moral cristiana, lo que llevó a reforzar la dimensión ética de la palabra empeñada y del deber de cumplir lo pactado. Sin embargo, fue en la Edad Moderna, especialmente a partir del siglo XVII, cuando la noción de obligación adquirió una configuración racionalista, propia del Derecho codificado. En este contexto, pensadores como Hugo Grocio, Domat, Pothier y, más adelante, los redactores del Código Civil francés de 1804 (Código Napoleónico), consolidaron una visión moderna de la obligación como una relación jurídica patrimonial, donde el cumplimiento de la prestación no depende de la fuerza, sino de la voluntad libremente expresada y protegida por la Ley.
          p(numero="4" titulo="Modelo napoleónico") El modelo napoleónico, que influyó directamente en América Latina, fue recibido y adaptado por el Código Civil chileno de 1855, redactado por Andrés Bello, y que a su vez sirvió de base para el Código Civil colombiano de 1887. Este último adopta una concepción clásica de la obligación, recogida en el Artículo 1495, que la define como un vínculo jurídico entre dos personas, por el cual una puede exigir de la otra una prestación o una abstención. Esta definición recoge siglos de evolución doctrinal y jurídica, y se fundamenta en la idea de que la obligación es un instrumento normativo para regular relaciones personales en función de intereses legítimos, derechos subjetivos y deberes jurídicos exigibles.
          p(numero="5" titulo="Derecho contemporáneo") En el Derecho contemporáneo, la obligación ha seguido evolucionando, adaptándose a nuevas realidades sociales, económicas y jurídicas. La noción de obligación ya no se limita a las relaciones patrimoniales entre particulares, sino que se ha extendido a múltiples ámbitos: el Derecho del consumo, el Derecho laboral, el Derecho administrativo contractual e incluso el Derecho internacional privado. Además, han surgido nuevas formas de obligaciones colectivas, como las derivadas del medio ambiente, los derechos humanos o la protección del interés general.
          p(numero="6" titulo="Doctrina moderna") La doctrina moderna también ha enriquecido el concepto. Se ha pasado de una visión estrictamente bilateral, centrada en acreedor y deudor, a modelos más complejos que reconocen la existencia de terceros, condiciones, plazos, garantías, modalidades y otras estructuras que influyen en la dinámica del cumplimiento y en la responsabilidad por el incumplimiento. Asimismo, se ha fortalecido la idea de la función social de la obligación, es decir, el principio según el cual las relaciones jurídicas privadas no pueden afectar negativamente el interés general, y deben desarrollarse conforme a los principios de buena fe, equidad y solidaridad.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
                p.mb-0 En síntesis, la evolución histórica del concepto de obligación demuestra cómo el Derecho ha transitado de un enfoque represivo y personalista, a una concepción técnica, patrimonial y garantista, centrada en la protección de derechos subjetivos y en la promoción de la seguridad jurídica. La obligación, como vínculo jurídico entre personas, no solo regula el intercambio de bienes y servicios, sino que representa un instrumento esencial para estructurar las relaciones sociales de forma justa, responsable y equilibrada. Comprender su evolución es comprender cómo el Derecho ha madurado como sistema, reconociendo que detrás de cada obligación hay una expectativa legítima, una norma, y un marco de responsabilidad que garantiza el cumplimiento del orden jurídico.
              .col-lg-5(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema4/14.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    #t_4_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.4] Fuentes de las obligaciones     
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/15.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Una de las preguntas más importantes que debe hacerse el jurista al enfrentarse a una relación obligacional es: ¿de dónde nace esta obligación? Es decir, ¿cuál es su causa jurídica? Esta pregunta lleva directamente al estudio de las fuentes de las obligaciones, es decir, a los hechos o actos jurídicos que dan origen a un vínculo obligatorio entre dos o más personas. Comprender las fuentes no solo permite identificar la legitimidad de una obligación, sino también aplicar el régimen normativo correspondiente para su exigibilidad, cumplimiento o extinción.
        p En el Derecho colombiano, la clasificación tradicional de las fuentes de las obligaciones se encuentra en el Artículo 1494 del Código Civil, que establece lo siguiente:
    
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 “Las obligaciones nacen, ya del concurso real de las voluntades de dos o más personas, como en los contratos; ya de un hecho voluntario de la persona que se obliga, como en el cuasicontrato; ya de hechos que han inferido injuria o daño a otra persona, como en el delito o cuasidelito; ya por disposición de la Ley”.
    
    .bg-color-13.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-lg-2.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema4/17.png', alt='')
        .col-lg.order-lg-1
          .p-4
            p.mb-0(data-aos="fade-up") Esta disposición, heredada del Derecho romano y sistematizada en los códigos civiles de tradición continental europea, reconoce cinco fuentes principales de las obligaciones: la Ley, el contrato, el cuasicontrato, el delito y el cuasidelito. Cada una de estas fuentes obedece a una lógica distinta y genera obligaciones con características propias, pero todas tienen en común que producen un vínculo jurídico exigible por el acreedor y protegido por el ordenamiento.
    
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/18.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo="La Ley") 
            p La Ley es fuente directa de obligaciones cuando impone deberes jurídicos a una persona sin que medie su consentimiento ni un hecho voluntario de su parte. En estos casos, el mandato legal por sí solo genera la obligación. Ejemplos de ello son las obligaciones alimentarias entre parientes (arts. 411 ss. del C.C.), las obligaciones tributarias, o las cargas legales que se derivan del régimen de propiedad horizontal o de ciertas relaciones familiares.
            p En este tipo de obligaciones, el vínculo no se genera por un acuerdo ni por un hecho voluntario, sino por la existencia de una norma imperativa. Por tanto, el cumplimiento no depende de la voluntad del obligado, sino del deber jurídico objetivo establecido por el legislador.
          div(numero="2" titulo="El contrato") 
            p El contrato es probablemente la fuente más conocida y frecuente de las obligaciones. Se define como un acuerdo de voluntades que crea derechos y obligaciones para las partes que lo celebran. En virtud del principio de autonomía de la voluntad privada, las personas tienen libertad para contratar y determinar el contenido del contrato, siempre que no contraríen la Ley, el orden público o las buenas costumbres (art. 16 del C.C.).
            p Los contratos pueden ser bilaterales o unilaterales, gratuitos u onerosos, principales o accesorios, conmutativos o aleatorios. En todos los casos, el contrato genera una obligación que surge directamente del consentimiento libre y consciente de las partes. Ejemplos comunes incluyen la compraventa, el arrendamiento, el comodato, la sociedad, el mutuo y muchos otros regulados en el Código Civil y en el Código de Comercio.
            p El contrato, además de ser una fuente directa de obligaciones, regula su contenido: fija los términos, condiciones, plazos, garantías y consecuencias del incumplimiento. Es, por tanto, una fuente compleja que combina voluntad, norma y realidad económica.
          div(numero="4" titulo="La Ley") 
            p El cuasicontrato es una figura interesante y a veces poco comprendida. Se define como un hecho lícito y voluntario que no es un contrato, pero que produce obligaciones a favor de otra persona. A diferencia del contrato, no hay acuerdo de voluntades, pero sí hay una conducta unilateral que la Ley considera suficiente para generar consecuencias jurídicas.
            p Ejemplo clásico es la gestión de negocios ajenos sin mandato (art. 2304 del C.C.): cuando alguien actúa en beneficio de otro sin tener autorización, pero de buena fe, se generan obligaciones tanto para el gestor como para el dueño del negocio. Otro ejemplo es el pago de lo no debido (art. 2307), cuando alguien paga una suma creyendo que está obligado, pero en realidad no lo estaba; en ese caso, quien recibe debe restituir.
            p Los cuasicontratos permiten proteger situaciones donde hay un desequilibrio patrimonial no justificado, y reflejan la función del Derecho Civil como sistema corrector de injusticias, incluso en ausencia de acuerdos previos.

    .row.align-items-center.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/19.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="4" titulo="El delito civil") 
            p El delito, como fuente de obligaciones, se refiere al acto ilícito y doloso que causa daño a otra persona y que genera la obligación de indemnizar o reparar. En el ámbito civil, no se trata de un delito penal, sino de una conducta antijurídica que infringe el deber general de no causar daño (principio del <em>neminem laedere</em>).
            p Por ejemplo, si una persona destruye intencionalmente la propiedad ajena o causa un perjuicio moral a través de injurias o calumnias, el afectado puede exigir reparación. El Artículo 2341 del Código Civil establece que "el que ha cometido un delito o cuasidelito que ha inferido daño a otro, es obligado a la indemnización".
            p El delito civil es una fuente extracontractual, y su régimen se fundamenta en la responsabilidad subjetiva: debe demostrarse la existencia del daño, la culpa o dolo, y el nexo causal entre el hecho y el perjuicio.
          div(numero="5" titulo="El cuasidelito") 
            p El cuasidelito también da origen a obligaciones de indemnizar, pero a diferencia del delito, no se requiere intención, sino culpa o negligencia. Se configura cuando una persona causa daño a otra de manera imprudente o por descuido, sin intención de perjudicar, pero sin observar el deber de cuidado que exige la Ley.
            p Ejemplo común es el de un conductor que atropella a un peatón por exceso de velocidad. No quiso causar el daño, pero su actuar imprudente lo hace responsable. El Artículo 2341 también contempla esta figura, y el desarrollo jurisprudencial colombiano ha ampliado los criterios para determinar la culpa, incluyendo la violación de reglamentos, el riesgo creado y la conducta esperada, según el caso.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/20.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") A manera de conclusión, las fuentes de las obligaciones constituyen el origen jurídico del deber de cumplir una prestación a favor de otra persona. Ya sea por imposición legal, acuerdo de voluntades, conducta unilateral lícita o acto ilícito que cause daño, el Derecho Civil identifica y regula los escenarios en los que nace una obligación válida y exigible. Esta clasificación tradicional, aunque antigua, sigue siendo útil para organizar las relaciones jurídicas, establecer regímenes de responsabilidad y garantizar la justicia en la vida cotidiana.
    
        .bg-color-4.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/21.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Comprender las fuentes permite no solo reconocer cuándo existe una obligación, sino también aplicar correctamente el derecho sustancial y procesal, evaluar las consecuencias del incumplimiento y estructurar soluciones jurídicas eficaces. Se trata, en últimas, de comprender cómo nace el Derecho en su forma más concreta: como un deber recíproco entre personas, protegido por la Ley y orientado al equilibrio social.



    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Qué es un hecho jurídico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Una conducta voluntaria sin efectos legales',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Una manifestación de voluntad con ánimo de obligarse',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Un acontecimiento al que el Derecho le atribuye consecuencias jurídicas (respuesta correcta)',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Un contrato formal entre particulares',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: '¿Cuál de los siguientes no es un hecho jurídico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Una tormenta que destruye una casa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Un contrato de compraventa (respuesta correcta)',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'El fallecimiento de una persona',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La mayoría de edad de un ciudadano',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué efecto produce el error o el dolo en el consentimiento de un acto jurídico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Su nulidad absoluta',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'La obligación de pagar indemnización',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Su nulidad relativa (respuesta correcta)',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Su conversión en cuasicontrato',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: '¿Cuál es la causa en un negocio jurídico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'El plazo del acto',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'El motivo lícito y real que lo justifica (respuesta correcta)',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'El objeto del contrato',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La firma del notario',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuáles son los elementos accidentales del negocio jurídico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aquellos cuya ausencia lo invalida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Aquellos que pueden agregarse para modificar sus efectos sin afectar su validez (respuesta correcta)',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Aquellos que se redactan en el preámbulo',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Aquellos que requieren aprobación estatal',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
