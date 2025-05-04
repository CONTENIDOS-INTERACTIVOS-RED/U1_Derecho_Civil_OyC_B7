export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad:
      'Las obligaciones - El acto jurídico - El negocio jurídico - El hecho jurídico',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'El acto jurídico ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Elementos esenciales del acto jurídico',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Evolución y clasificación del acto jurídico',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'El negocio jurídico ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Elementos y requisitos del negocio jurídico',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'El hecho jurídico ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Las obligaciones ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Noción de obligación ',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Teoría de las obligaciones ',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Evolución histórica del concepto de obligación',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Fuentes de las obligaciones',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Luna Serrano, A. Sancho Rebullida, F. D. A. & Lacruz Berdejo, J. L. (2016). Elementos de derecho civil: I parte general. Derecho subjetivo. Negocio jurídico. Volumen Tercero: (3 ed.). Dykinson. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/60921',
    },
    {
      referencia:
        'Fayos Gardó, A. (2016). Manual de derecho civil I. Parte general y derecho de la persona: ( ed.). Dykinson. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/34316',
    },
    {
      referencia:
        'Cordero Lobato, E. & Marín López, M. J. (2018). Lecciones de derecho civil: Derecho de obligaciones y contratos en general: (3 ed.). Difusora Larousse - Editorial Tecnos. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/123148 ',
    },
  ],
  glosario: [
    {
      termino: 'Acto jurídico',
      significado:
        'Es toda manifestación de voluntad realizada con la intención de producir efectos jurídicos reconocidos por el ordenamiento legal. Puede crear, modificar, transferir o extinguir derechos y obligaciones. Su validez depende de elementos como la capacidad, el consentimiento, el objeto y la causa.',
    },
    {
      termino: 'Capacidad jurídica',
      significado:
        'Es la aptitud legal que tiene una persona para adquirir derechos y contraer obligaciones por sí misma. Existen capacidades de goce y de ejercicio, y su ausencia afecta la validez de los actos y negocios jurídicos.',
    },
    {
      termino: 'Causa',
      significado:
        'Es el motivo jurídico y lícito que justifica la celebración de un acto o negocio jurídico. Debe ser real, existente y conforme a derecho. Una causa ilícita invalida el negocio jurídico.',
    },
    {
      termino: 'Consentimiento',
      significado:
        'Es la manifestación libre, consciente y voluntaria de una o varias personas para obligarse jurídicamente. El consentimiento debe estar libre de vicios como el error, la fuerza o el dolo.',
    },
    {
      termino: 'Contrato',
      significado:
        'Es un acuerdo de voluntades entre dos o más personas que genera obligaciones exigibles y derechos correlativos. Es la fuente más común de obligaciones en la vida civil y comercial.',
    },
    {
      termino: 'Cuasicontrato',
      significado:
        'Es un hecho voluntario y lícito que, sin ser un contrato, produce obligaciones por mandato legal. Ejemplos son la gestión de negocios ajenos y el pago de lo no debido.',
    },
    {
      termino: 'Cuasidelito',
      significado:
        'Es un hecho ilícito no doloso (culposo o negligente) que causa daño a otro y genera la obligación de indemnizar. Se diferencia del delito por la ausencia de intención.',
    },
    {
      termino: 'Deudor',
      significado:
        'Es el sujeto pasivo de una obligación, obligado a cumplir la prestación a favor del acreedor. Puede ser una persona natural o jurídica.',
    },
    {
      termino: 'Delito',
      significado:
        'Es un acto ilícito y doloso que causa daño a una persona. Como fuente de obligaciones, genera el deber de reparar o indemnizar al afectado.',
    },
    {
      termino: 'Elemento accidental',
      significado:
        'Es un componente opcional del negocio jurídico que modifica sus efectos sin afectar su existencia. Son la condición, el plazo y el modo.',
    },
    {
      termino: 'Fuente de las obligaciones',
      significado:
        'Es el origen jurídico del vínculo obligacional. En el Derecho Civil colombiano, las fuentes son: la ley, el contrato, el cuasicontrato, el delito y el cuasidelito.',
    },
    {
      termino: 'Hecho jurídico',
      significado:
        'Es un acontecimiento natural o humano al que el Derecho le atribuye consecuencias jurídicas. Puede ser voluntario o involuntario, pero debe producir efectos legales.',
    },
    {
      termino: 'Negocio jurídico',
      significado:
        'Es un acto jurídico en el cual las partes manifiestan su voluntad para crear, modificar o extinguir relaciones jurídicas, dentro del marco legal. Expresa el ejercicio de la autonomía privada.',
    },
    {
      termino: 'Nulidad',
      significado:
        'Es la sanción legal que priva de efectos a un acto o negocio jurídico por carecer de algún requisito esencial. Puede ser absoluta (cuando el objeto es ilícito) o relativa (por vicio en el consentimiento o capacidad limitada).',
    },
    {
      termino: 'Objeto',
      significado:
        'Es la cosa, hecho o conducta sobre la cual recae el acto o negocio jurídico. Debe ser lícito, posible y determinado o determinable.',
    },
    {
      termino: 'Obligación',
      significado:
        'Es el vínculo jurídico que liga a una persona (deudor) con otra (acreedor), y por el cual la primera debe cumplir una prestación que puede ser exigida legalmente por la segunda.',
    },
    {
      termino: 'Plazo',
      significado:
        'Es un elemento accidental que señala el momento desde el cual comienza o hasta el cual dura la eficacia de una obligación. A diferencia de la condición, el plazo es un hecho futuro y cierto.',
    },
    {
      termino: 'Prestación',
      significado:
        'Es la conducta debida por el deudor al acreedor, que puede consistir en dar, hacer o no hacer algo. Es el contenido concreto de la obligación.',
    },
    {
      termino: 'Sujeto',
      significado:
        'Es la persona natural o jurídica que participa en la relación jurídica. En la obligación, puede ser el acreedor (quien exige) o el deudor (quien cumple).',
    },
    {
      termino: 'Voluntad',
      significado:
        'Es la intención consciente de producir efectos jurídicos. Es el motor que da vida al acto o negocio jurídico y debe manifestarse conforme a derecho.',
    },
  ],
}
