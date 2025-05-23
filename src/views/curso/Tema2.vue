<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. El negocio jurídico '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El negocio jurídico representa uno de los pilares fundamentales del Derecho Civil moderno, al ser el mecanismo mediante el cual los particulares ejercen su autonomía para crear, modificar o extinguir relaciones jurídicas. 
        p(data-aos="fade-left") Aunque el Código Civil colombiano, siguiendo el modelo chileno, no lo define de forma expresa, su comprensión resulta clave para interpretar gran parte del sistema de obligaciones, contratos y demás relaciones entre particulares. Su estudio permite identificar el rol de la voluntad en la producción de efectos jurídicos y cómo dicha voluntad es recogida y validada por el ordenamiento.
        p Conozcamos un poco más sobre este tema:
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Primer tema
              p El concepto de negocio jurídico ha evolucionado desde sus raíces doctrinales en el Derecho Alemán, particularmente con Savigny y la teoría de la "declaración de voluntad" (<em>Willenserklärung</em>), hasta perspectivas contemporáneas que lo entienden como un acto normativo, performativo o incluso axiológico. Como explica Morales Hervias (2017), la noción de negocio jurídico ha sido trabajada desde múltiples concepciones: la voluntarista, la preceptiva, la institucional, la normativa, la programática, la comunicativa y la combinatoria, entre otras. Todas coinciden en entenderlo como un acto en el que confluyen la voluntad de los particulares y el reconocimiento del Derecho como sistema normativo.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Segundo tema
              p Desde la perspectiva clásica, el negocio jurídico es una manifestación de voluntad encaminada a producir efectos jurídicos, tales como la creación o extinción de derechos u obligaciones. No se trata solo de un acto voluntario, sino de un instrumento con carga normativa: lo que las partes pactan, dentro de los límites de la Ley, se convierte en norma vinculante para ellas (Reale, 1984). Esta es la base de la autonomía privada, reconocida en el ordenamiento colombiano, en normas como el Artículo 16 del Código Civil.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Tercer tema
              p El negocio jurídico tiene elementos esenciales que garantizan su validez: consentimiento, objeto, causa y capacidad. También existen elementos accidentales, como la condición, el plazo y el modo, que no son esenciales pero modifican el negocio si se pactan.
    
    .row
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-4.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Un elemento pedagógico clave es comprender cómo el negocio jurídico no es sinónimo de acto jurídico, aunque lo contiene. El acto jurídico es una categoría más amplia que incluye todos los actos humanos voluntarios que producen efectos jurídicos, mientras que el negocio jurídico se refiere a aquellos donde el contenido y los efectos son determinados directamente por la voluntad de las partes. Además, el negocio jurídico puede clasificarse, según diferentes criterios: por el número de partes (unilateral o bilateral), por su causa (gratuito u oneroso), por su ejecución (instantáneo o de tracto sucesivo), o por su objeto (patrimonial o extrapatrimonial).
        p(data-aos="fade-left") En el contexto colombiano, aunque el Código Civil no desarrolla una teoría general del negocio jurídico como lo hace el BGB alemán, muchas normas dispersas permiten aplicar sus principios de manera sistemática. Por ejemplo, en contratos, testamentos o reconocimientos de hijos, se encuentran estructuras que responden claramente a la lógica del negocio jurídico.
    
    .bg-full-width.bg-h85.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                p.mb-0.text-white El negocio jurídico es una categoría doctrinal con gran utilidad didáctica y práctica. Permite ordenar las distintas manifestaciones de la autonomía privada y articular soluciones jurídicas con base en la voluntad reconocida normativamente. Su comprensión no solo refuerza la técnica jurídica, sino que potencia la capacidad de los futuros abogados para construir soluciones eficaces, válidas y equitativas dentro del Derecho Privado.
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema2/8.png', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Elementos y requisitos del negocio jurídico
    
    p.mb-4 Todo negocio jurídico, sin importar su tipo o complejidad, debe construirse sobre cuatro pilares fundamentales: la capacidad de los sujetos, el consentimiento, el objeto y la causa. Estos elementos no son negociables. Si falta alguno, el negocio simplemente no existe o es inválido.

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/9.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        p(data-aos="fade-left") 
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="El primer elemento es la capacidad jurídica de los sujetos") Solo las personas que tengan plena aptitud legal pueden obligarse por sí mismas. En Colombia, según el Artículo 1502 del Código Civil, toda persona es legalmente capaz, salvo que la Ley disponga lo contrario. Esto significa que menores de edad, personas interdictas o con discapacidad legalmente reconocida, necesitan de un representante legal para celebrar negocios jurídicos. Un contrato firmado por quien no tiene capacidad es como un edificio sin cimientos: se derrumba jurídicamente.
          p(numero="2" titulo="El segundo elemento es el consentimiento") Es decir, la manifestación libre y consciente de la voluntad de las partes. El consentimiento debe ser serio, espontáneo y expresado sin vicios. El error, la fuerza o el dolo, cuando afectan el consentimiento, generan nulidad relativa del negocio. Así lo establece el Código Civil en sus Artículos 1508 a 1518. Si una persona fue obligada a firmar un contrato bajo amenaza, su voluntad no fue libre, y por tanto, el negocio puede ser inválido. En Derecho, la forma en que se manifiesta la voluntad es tan importante como la voluntad misma.
          p(numero="3" titulo="El tercer elemento es el objeto del negocio jurídico") Es decir, la cosa, hecho o conducta sobre la cual recae. El objeto debe ser lícito, posible y determinado o determinable, según los Artículos 1511 y 1512 del Código Civil. No se puede pactar algo prohibido por la Ley, como vender sustancias ilegales, ni tampoco algo imposible, como transferir la propiedad de un bien inexistente.
          p(numero="4" titulo="El cuarto pilar es la causa") Entendida como el motivo o finalidad que justifica el negocio. Esta debe ser lícita, real y existente, conforme al Artículo 1524 del Código Civil. La causa diferencia, por ejemplo, una compraventa de una donación: en la primera, hay un intercambio (precio por cosa); en la segunda, una liberalidad. Si la causa es ilícita, por ejemplo, una donación simulada para encubrir un delito, el negocio es nulo de pleno derecho.
    
    p.mb-4 Aparte de estos elementos esenciales, los negocios jurídicos pueden incluir elementos accidentales, que si bien no son obligatorios, modifican los efectos del negocio cuando se pactan. Aquí encontramos tres figuras claves: 

    .bg-full-width.bg-fondo-2
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/10.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="15%" y="74.5%" numero="+")
                h5 La condición 
                p Es un hecho futuro e incierto del cual depende el nacimiento o la extinción del negocio. Por ejemplo, una donación está sujeta a que el beneficiario termine una carrera universitaria. El negocio solo produce efectos si se cumple la condición.
    
              .bg-color-white.box-shadow.p-3(x="50%" y="74.5%" numero="+")
                h5 El plazo
                p Es un hecho futuro pero cierto, que señala cuándo comienza o termina la eficacia del negocio. Un ejemplo es un contrato de arrendamiento que entra en vigencia a partir del 1 de enero: antes de esa fecha, no surte efectos.
    
              .bg-color-white.box-shadow.p-3(x="86%" y="74.5%" numero="+")
                h5 El modo
                p Es una carga que se impone al beneficiario de un negocio jurídico gratuito. Por ejemplo, quien recibe una donación, puede estar obligado a usarla para un fin específico, como construir una biblioteca o financiar estudios.
    
    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Estos elementos accidentales no afectan la existencia del negocio, pero sí condicionan su ejecución. Si se pactan, deben cumplirse. Ignorarlos puede llevar a la ineficacia o incluso a la resolución del negocio.
    
              

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/30465" target="_blank" rel="noopener noreferrer") Gaceta Jurídica, G. (2014). Jurisprudencia: derecho civil: acto jurídico: ( ed.). El Cid Editor | apuntes. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://juris.pe/blog/diferencias-acto-juridico-negocio-juridico" target="_blank" rel="noopener noreferrer") Juris.pe. (s.f.). Diferencias entre acto jurídico y negocio jurídico. Bien explicado.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=zP2YMcsqQhE" target="_blank" rel="noopener noreferrer") Conceptos Jurídicos. (2019, 9 de octubre). Fuentes de las obligaciones. Contrato cuasicontrato delito cuasidelito ley en derecho [Video]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
