import Gallery from "@/components/Galeria";

const episodes = [
  {
    id: '1',
    title: 'Episodio 1',
    youtubeUrl: 'https://www.youtube.com/watch?v=wd5fRDRfT5s', // Reemplaza con la URL real
    duration: '00:57:38',
    description: '👨‍💻 Invitado JLiBercrypto - CM de Axelar Network Español.',
    publishedAt: '2024-01-01',
    tags: ['Axelar', 'Nym'],
  },
  {
    id: '2',
    title: 'Episodio 2',
    youtubeUrl: 'https://www.youtube.com/watch?v=pBux12Ut5wk',
    duration: '00:57:14',
    description: '👨‍💻 Invitado Alex - Platohedro / Squad DAOariwas.',
    publishedAt: '2024-01-02',
    tags: ['Platohedro', 'Nym'],
  },
  {
    id: '3',
    title: 'Episodio 3',
    youtubeUrl: 'https://www.youtube.com/watch?v=4O4hm8sPQSc',
    duration: '00:53:32',
    description: '👨‍💻 Invitado Daniel - NYM - Head of Growth Latam.',
    publishedAt: '2024-01-02',
    tags: [ 'Nym'],
  },
  {
    id: '4',
    title: 'Episodio 4',
    youtubeUrl: 'https://www.youtube.com/watch?v=Z7XEobuLnY8',
    duration: '00:51:21',
    description: '👨‍💻 Conversaremos con nuestro invitado Erik Valle -Nymja - DAOariwas - mixplorer.xyz',
    publishedAt: '2024-08-15',
    tags: [ 'Explorer','Nym'],
  },
  {
    id: '5',
    title: 'Episodio 5',
    youtubeUrl: 'https://www.youtube.com/watch?v=CfuDoUakhms',
    duration: '01:04:21',
    description: '👨‍💻 @micryptomundo nos compartirá su experiencia en la comunidad y más..',
    publishedAt: '2024-08-29',
    tags: [ 'Mycriptomundo','Nym'],
  },
  {
    id: '6',
    title: 'Episodio 6',
    youtubeUrl: 'https://www.youtube.com/watch?v=p3uhKbEQlbU',
    duration: '00:58:21',
    description: '👨‍💻 Conversaremos con nuestro invitado Yoditar quien es un destacado bloguero y crypto community builder de Zcash en español.',
    publishedAt: '2024-09-12',
    tags: [ 'Zcash','Nym'],
  },

  {
    id: '7',
    title: 'Episodio 7',
    youtubeUrl: 'https://www.youtube.com/watch?v=UwqBeb1M774',
    duration: '00:58:21',
    description: '👨‍💻 Conversaremos con nuestra invitada especial de esta semana Lucila quien es community builder de @latamzk, una iniciativa que promueve la construcción y contribución a la siguente ola de ZK Open-Source. ',
    publishedAt: '2024-09-26',
    tags: [ 'ZK','Nym'],
  },

  {
    id: '8',
    title: 'Episodio 8',
    youtubeUrl: 'https://www.youtube.com/watch?v=p0rUGJk-Juw',
    duration: '00:58:21',
    description: '👨‍💻 Conversaremos con nuestro querido y estimado Daniel, Jefe de Crecimiento de Nym en Latam, tendremos novedades sobre NYM en este último trimestre y contestaremos preguntas en vivo de la comunidad.',
    publishedAt: '2024-10-10',
    tags: [ 'Latam','Nym'],
  },

  {
    id: '9',
    title: 'Episodio 9',
    youtubeUrl: 'https://www.youtube.com/watch?v=y6IYyQctoSw',
    duration: '00:58:21',
    description: '👨‍💻 Conversaremos con Fernando Illescas, Consultor en riegos de ciberseguridad y protección de datos; tendremos un intercambio interesante sobre seguridad en linea y privacidad, además contestaremos preguntas en vivo de la comunidad.',
    publishedAt: '2024-10-24',
    tags: [ 'CyberSeguridad','Nym'],
  },

  {
    id: '10',
    title: 'Episodio 10',
    youtubeUrl: 'https://www.youtube.com/watch?v=-rnpAFY2BRw',
    duration: '00:58:21',
    description: '👨‍💻 Conversaremos junto al team de "El rincón de la Privacidad" sobre todas las novedades de estos 10 primeros episodios mientras jugamos con nuestra audiencia kahoot, además contestaremos preguntas en vivo de la comunidad.',
    publishedAt: '2024-11-07',
    tags: [ 'CyberSeguridad','Nym'],
  },

  {
    id: '11',
    title: 'Episodio 11',
    youtubeUrl: 'https://www.youtube.com/watch?v=EbUHD6b83Gg',
    duration: '00:58:21',
    description: '👨‍💻 En este episodio conversaremos entre los miembros del Team del "rinconsito" sobre las novedades y noticias que tenemos con la gran actualización que se esta llevando a cabo, Magura. Responderemos dudas de la comunidad en vivo entre otras sorpresas.',
    publishedAt: '2024-11-21',
    tags: [ 'Nodos','Nym'],
  },

  {
    id: '12',
    title: 'Episodio 12',
    youtubeUrl: 'https://www.youtube.com/watch?v=Jc6d83G-TzY',
    duration: '01:13:13',
    description: '👨‍💻 Conversaremos con Erika Peralta, Abogada y Máster en Derecho Digital; tendremos un intercambio interesante sobre derecho digital y privacidad, además contestaremos preguntas en vivo de la comunidad.',
    publishedAt: '2024-11-21',
    tags: [ 'Legal','Nym'],
  },

  {
    id: '13',
    title: 'Episodio 13',
    youtubeUrl: 'https://www.youtube.com/watch?v=A75lTvzlYec',
    duration: '00:56:02',
    description: '👨‍💻 Conversaremos con Diana Maldonado Lasso, Tecnóloga en Informática y Técnica en Ciberseguridad ; tendremos un intercambio interesante sobre activismo, seguridad y privacidad, además contestaremos preguntas en vivo de la comunidad.',
    publishedAt: '2024-12-19',
    tags: [ 'CyberSeguridad','Nym'],
  },
  {
    id: '14',
    title: 'Episodio 14',
    youtubeUrl: 'https://www.youtube.com/watch?v=u6W1rtXNfyc',
    duration: '00:56:02',
    description: '👨‍💻 Conversaremos sobre la NymVPN que te permite disfrutar de una navegación, transmisión y mensajería seguras con nuestra inigualable combinación de VPN descentralizada, mixnet y pagos de conocimiento-cero; además contestaremos preguntas en vivo de la comunidad e información importante y relevante en nuestras secciones de cypherpunk y noticias. En este episodio tenemos una sorpresa con una nueva sección.🎉',
    publishedAt: '2025-12-19',
    tags: [ 'CyberSeguridad','Nym'],
  },
  {
    id: '15',
    title: 'Episodio 15',
    youtubeUrl: 'https://www.youtube.com/watch?v=HfOFGdrdLxk&t=4s',
    duration: '00:56:02',
    description: '👨‍💻 Conversaremos con JJ Campuzano, futurista e Investigador independiente de tecnologías relacionadas a Blockchain desde el año 2013,',
    publishedAt: '2025-12-19',
    tags: [ 'CyberSeguridad','Nym'],
  },
  {
    id: '16',
    title: 'Episodio 16',
    youtubeUrl: 'https://www.youtube.com/watch?v=m4puIMgqt58',
    duration: '00:56:02',
    description: '👨‍💻 Conversaremos con Kaled, Ingeniero en ciencia de datos y matemáticas, con formación en Ciencias por el Tecnológico de Monterrey.',
    publishedAt: '2025-02-13',
    tags: [ 'CyberSeguridad','Nym'],
  },
  // Agrega más episodios según sea necesario
];





export default function Episodios() {
    return (
      <div className="">

        <h1 className="text-center text-4xl font-bold p-8">Episodios El Rincón de la Privacidad</h1>
     
  <div className="p-8">

  <Gallery  episodes={episodes}/>
  </div>

      </div>
    );
  }
  
  