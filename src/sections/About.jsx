import { useState } from 'react';
//import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('160920@unsaac.edu.pe');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/yoanimado.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hola, soy Marcelo</p>
              <p className="grid-subtext">
                Con 2 años de experiencia, he adquirido mis conocimientos tanto en desarrollo de frontend y backend creando páginas web dinámicas y adaptables (responsive).
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Habilidades</p>
              <p className="grid-subtext">
                Me especializo en diferentes lenguajes, frameworks y herramientas que me permiten construir aplicaciones robustas y escalables.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <img src="assets/planeta.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
              {/*<Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />*/}
            </div>
            <div>
              <p className="grid-headtext">Flexible con las zonas temporales, comunicacion y ubicaciones</p>
              <p className="grid-subtext">Radico en Lima, Peru y abierto a al trabajo remoto mundialmente</p>
              <Button name="Contacto" isBeam containerClass="w-full mt-10"   href='#contact'/>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Mi pasion por el desarrollo</p>
              <p className="grid-subtext">
                Me gusta resolver problemas y construir soluciones atravez del desarrollo. Programar no es solo mi profesion, es mi pasion. Me divierte explorar
                nuevas tecnologias y mejorar mis habilidades
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contacto</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">160920@unsaac.edu.pe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
