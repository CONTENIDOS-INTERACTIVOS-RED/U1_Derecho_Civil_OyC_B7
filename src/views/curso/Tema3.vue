<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. El hecho jurídico '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Esta figura representa el punto de conexión entre el mundo de los hechos y el mundo de las normas, pues permite que ciertos acontecimientos, ya sean naturales o humanos, tengan efectos dentro del sistema jurídico. Es decir, que produzcan consecuencias legales tales como el nacimiento, modificación o extinción de derechos y obligaciones. 
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") El hecho jurídico puede definirse como todo acontecimiento al que el Derecho le atribuye consecuencias jurídicas. Esta definición, aunque sencilla en apariencia, es profunda: no se trata de cualquier hecho, sino solo de aquellos que el sistema jurídico reconoce como generadores de efectos legales.
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Lo que convierte a un hecho en “jurídico” no es su naturaleza física ni su intención, sino su relevancia normativa. Así, el hecho jurídico permite comprender que el Derecho no solo regula la conducta humana voluntaria, sino también todo tipo de sucesos que impactan el mundo jurídico.
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
      .col-lg-9
        p(data-aos="fade-left") Este concepto tiene un fuerte arraigo en la teoría general del Derecho. En Colombia, aunque el Código Civil no ofrece una definición explícita, el hecho jurídico está presente en diversas instituciones y normas, y constituye una de las fuentes indirectas del derecho de las obligaciones. Por ejemplo, el Artículo 1494 del Código Civil establece que las obligaciones nacen de la Ley, del contrato, del cuasicontrato, del delito y del cuasidelito. 
    
        .bg-color-4.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En varias de estas fuentes, como el delito civil o el cuasidelito, el hecho jurídico es el punto de partida: se trata de una conducta o suceso que genera una obligación, aun sin que exista un acuerdo entre las partes.
        p(data-aos="fade-left") Para comprender mejor esta figura, es útil clasificar los hechos jurídicos en dos grandes categorías: naturales y humanos. 
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/5.png")
            .col-lg-7
              h5 Hechos jurídicos naturales
              p Son aquellos que ocurren por causas ajenas a la voluntad humana, pero que igualmente producen consecuencias legales. Ejemplos de este tipo son el nacimiento, que otorga personalidad jurídica a una persona; la muerte, que da inicio a la sucesión patrimonial; o un terremoto que destruye una vivienda, lo cual puede activar cláusulas contractuales sobre fuerza mayor.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7
              h5 Hechos jurídicos humanos
              p Son aquellos que provienen de una acción u omisión de una persona. Sin embargo, no todos los hechos humanos son jurídicos. Para que lo sean, deben producir consecuencias legales. En esta categoría se encuentran tanto los hechos voluntarios como los involuntarios. Un ejemplo típico es el de una persona que, sin querer, causa daño a otra: si rompe un objeto ajeno, aunque no haya tenido la intención de hacerlo, deberá reparar el daño, porque el Derecho así lo impone. En estos casos, el hecho en sí, activa una obligación, sin que haya existido voluntad de generarla.
    
    p.mb-4 Los efectos jurídicos que produce un hecho pueden ser variados. Algunos hechos dan origen a nuevos derechos u obligaciones; otros los modifican o los extinguen. Por ejemplo, cuando una persona cumple 18 años, adquiere la plena capacidad jurídica para celebrar actos válidos; cuando fallece, se extingue su personalidad jurídica y se transmite su patrimonio. El Derecho actúa, entonces, como un sistema sensible a los cambios que ocurren en la realidad, y reacciona asignando consecuencias normativas a los hechos que considera relevantes.

    .row.mb-5.justify-content-center
      .col-lg-10
        div.p-4.bg-color-9
          h5.text-center Una dimensión especialmente importante del hecho jurídico es su papel como fuente de obligaciones.
        
        .bg-color-10
          .row.align-items-center
            .col-lg-5.order-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/7.svg", data-aos="zoom-in")
            .col-lg-7.order-lg-1px-5
              p(data-aos="fade-left") Aunque comúnmente se asocia la obligación jurídica con el contrato, existen múltiples situaciones en las que una obligación surge sin necesidad de un acuerdo entre partes. En el caso del delito civil (como un daño intencional) o del cuasidelito (daño causado sin intención, pero con culpa), el hecho genera una obligación de reparar.
        .bg-color-7
          .row.mb-5.align-items-center
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/8.svg", data-aos="zoom-in")
            .col-lg-7.order-1.px-5
              p(data-aos="fade-left") Aunque comúnmente se asocia la obligación jurídica con el contrato, existen múltiples situaciones en las que una obligación surge sin necesidad de un acuerdo entre partes. En el caso del delito civil (como un daño intencional) o del cuasidelito (daño causado sin intención, pero con culpa), el hecho genera una obligación de reparar.
    
    .bg-color-8.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema3/9.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") La prescripción, tanto adquisitiva como extintiva, también se fundamenta en hechos. Por ejemplo, una persona que posee un bien durante un determinado número de años, sin interrupción y con las condiciones que exige la Ley, puede adquirir el dominio por prescripción. Allí no hay un acto voluntario entre partes; hay simplemente un hecho que, con el paso del tiempo, produce efectos legales. Del mismo modo, la inactividad prolongada puede extinguir una acción o derecho, como ocurre en la prescripción extintiva.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/10.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Además, resulta esencial destacar que el hecho jurídico permite al Derecho funcionar más allá de la voluntad. El ordenamiento jurídico no solo protege acuerdos, sino que también regula los efectos de la vida misma. Esto hace del hecho jurídico una categoría transversal a todo el sistema normativo. Está presente en el Derecho Civil, pero también en el Penal, el Administrativo y el Laboral, porque en todos los ámbitos hay situaciones que generan consecuencias sin que haya mediado una intención jurídica expresa.
    
        .bg-color-4.p-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/11.svg", style="max-width: 170px").mx-auto
            .col-lg
              p.mb-0 En conclusión, el hecho jurídico es una herramienta teórica y práctica que permite al estudiante y al operador jurídico entender cómo el Derecho se activa frente a los sucesos del mundo real. Le enseña que no todo en Derecho se basa en la voluntad, y que muchas de las relaciones jurídicas nacen del simple hecho de que algo ocurrió. 
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/12.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left").mb-5 En la muerte de una persona, en la lluvia que inunda un local, en el accidente que daña un vehículo, el Derecho está presente, transformando hechos en efectos, y garantizando que la vida, con toda su complejidad, sea reconocida y regulada jurídicamente.
    
        .bg-color-11.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 A continuación, se presenta una comparación entre Acto Jurídico, Negocio Jurídico y Hecho Jurídico, para una mejor comprensión del estudiante, dado que estos tres conceptos están interrelacionados y permiten entender cómo operan los efectos jurídicos en el Derecho Civil. 
    
    .titulo-figura.mb-4
      h5 Tabla 1.
      span Comparación entre acto jurídico, negocio jurídico y hecho jurídico
    .tabla-a.color-acento-botones
      table
        thead
          tr
            th.bg-color-12.text-white Elemento
            th.bg-color-12.text-white Hecho Jurídico
            th.bg-color-12.text-white Acto Jurídico
            th.bg-color-12.text-white Negocio Jurídico
        tbody
          tr
            th Negocio Jurídico
            td Acontecimiento natural o humano que produce efectos jurídicos sin necesidad de una intención.
            td Manifestación de voluntad humana que tiene como fin, producir efectos jurídicos.
            td Acto jurídico voluntario y lícito, destinado a crear, modificar o extinguir derechos u obligaciones, conforme a la voluntad de las partes.
          tr
            th Voluntad
            td Puede no haber voluntad o intención de producir efectos jurídicos.
            td Existe voluntad de producir efectos jurídicos.
            td Hay voluntad, más una intención clara de estructurar un vínculo jurídico concreto.
          tr
            th Intención de efectos
            td Los efectos se producen por mandato de la Ley, no necesariamente por intención del sujeto.
            td Los efectos son queridos por el sujeto que actúa.
            td Los efectos son diseñados, buscados y configurados voluntariamente por las partes.
          tr
            th Origen
            td Natural (nacimiento, muerte) o humano (accidente, delito).
            td Humano, mediante una declaración de voluntad.
            td Humano, mediante acuerdo entre voluntades o manifestación individual.
          tr
            th Ejemplos
            td Muerte de una persona (hecho natural); accidente de tránsito (hecho humano).
            td Contrato de trabajo, testamento, aceptación de herencia.
            td Compraventa, arrendamiento, donación, constitución de sociedad, testamento con disposiciones patrimoniales.
          tr
            th Reconocimiento legal
            td El Derecho otorga efectos por su mera ocurrencia.
            td El Derecho reconoce efectos por la existencia de una voluntad conforme a derecho.
            td El Derecho reconoce y valida una estructura jurídica creada por las partes.
          tr
            th Relación con las normas
            td El efecto jurídico surge automáticamente por la Ley.
            td La Ley válida la voluntad y le da eficacia jurídica.
            td La Ley permite a las partes regular sus intereses dentro de los límites legales (autonomía de la voluntad).




    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/63127 " target="_blank" rel="noopener noreferrer") Acedo Penco, Á. (2011). Teoría general de las obligaciones: (2 ed.). Dykinson. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blogs.ugto.mx/contador/clase-digital-3-teoria-del-hecho-juridico-y-de-los-actos-juridicos " target="_blank" rel="noopener noreferrer") Universidad de Guanajuato. (s.f.). Clase digital 3: Teoría del hecho jurídico y de los actos jurídicos.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Fqs0-GU6D5c" target="_blank" rel="noopener noreferrer") Cápsulas Jurídicas. (2020, 22 de febrero). Fuentes de las obligaciones. [Video]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
