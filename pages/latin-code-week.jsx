import React from 'react';
import NavigationBar from '../components/navigationBar';
import RectangularCard from '../components/rectangularCard';
import dataProyectos from '../data/latinCodeWeek';
import Carousel from '../components/carousel';

const LatinCodeWeek = () => {

  return (
    <div>
      <NavigationBar />
      <div className="position">
        <div>
          <img src={dataProyectos.imagePresentation} className="imagePresentation" alt="dummy" />
        </div>
        <div className="infoPrincipal">
          <p>
            Latin Code Week acerca a los jóvenes a las carreras de ciencia, tecnología,
            ingeniería y matemáticas (STEM), para convertirse en la fuerza laboral de los
            empleos del futuro. Más de 5,000 jóvenes han sido impactados gracias a este programa.
          </p>
        </div>
        <Carousel/>
        <section>
          {dataProyectos.data.map(item => (
            <RectangularCard
              thumbnail={item.thumbnail}
              title={item.title}
              subtitle={item.subtitulo}
            />
          ))}
        </section>
         
      </div>

      <style jsx global>
        {`
        body {
          margin: 0;
          font-family: system-ui;
          background: white;
        }
        img.imagePresentation {
          width:100%;
        }
        .position {
          padding-top:95px;
        }
        .infoPrincipal {
          max-width:1090px;
          height: 50vh;
          margin: 0 auto;
        }
        .infoPrincipal p {
          text-align: center;
          font-size: 20px;
          padding-top: 30px;
          padding: 10px
        }
        .infoPrincipal img {
          margin: 0 auto;
        }
      `}
      </style>
    </div>
  );
};

export default LatinCodeWeek;
