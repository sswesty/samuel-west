import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

import HeroImage from '../../assets/img/work/uqcs/hero-bg.png';

import Existing from '../../assets/img/work/uqcs/original.png';
import NewColour from '../../assets/img/work/uqcs/new-colour.png';
import NewBlack from '../../assets/img/work/uqcs/new-black.png';
import NewWhite from '../../assets/img/work/uqcs/new-white.png';
import GridFull from '../../assets/img/work/uqcs/grid-full.png';
import Colours from '../../assets/img/work/uqcs/colours.png';

import Coffee from '../../assets/img/work/uqcs/coffee.jpg';
import Stationary from '../../assets/img/work/uqcs/stationary.jpg';
import Tshirt from '../../assets/img/work/uqcs/tshirt.jpg';
import Pin from '../../assets/img/work/uqcs/pin.jpg';
import MousePad from '../../assets/img/work/uqcs/mouse-pad.jpg';
import FooterLogo from '../../assets/img/work/uqcs/footer-logo.png';

import ModalImage from 'react-modal-image';
import Hire from '../common/Hire';

const UqcsPage = () => {
  // Inject custom css vars
  const root = document.querySelector(':root');
  root.style.setProperty('--dark', '#19151c'); 
  root.style.setProperty('--accent', '#51247a'); 
  root.style.setProperty('--heroImage', `url(${HeroImage})`);

  return (<>
          <Navbar />
          <section className="hero" id="home">
            <div className="container text-left">
              <h1 className="pb-1 color-light m-0 font-size-5">UQCS</h1>
              <h4 className="project-category mb-2">University Computing Society</h4>
              <p className="pb-2 color-light m-0">
                With a deep passion for rescue dogs, this dog training and
                behavior modification service emphasizes the importance of
                obedience and structure in creating harmony within families and
                preventing dogs from ending up in shelters. Rejecting fear-based
                methods, they prioritize building trust and mutual respect
                between owners and their pets through positive reinforcement
                techniques. Their team, dedicated to rehabilitating rescue
                dogs, believes in continuous education and employs
                science-based, humane training methods. By offering friendly
                and professional training sessions, they equip dog owners with
                the skills to foster a healthy relationship with their pets,
                addressing issues like obedience and behavior, while also
                extending their expertise to dog rehabilitation after accidents
                or injuries.
              </p>
            </div>
          </section>

          {/* Content */}
          <div className="content">
            <div className="grid pv-6">
              <div className="col-3 col-xs-12">
                <h2 className="font-special">The background</h2>
              </div>
              <p className="col-9 col-xs-12 m-0">
                When I was still a student at Queensland University of Technology, UQCS were looking for a redesign of their logo. For context, UQCS is a computing society at the University of Queensland that can be seen as a group of passionate students who are tech-savvy and enjoy their activities like coding and networking. They held a logo redesign competition, with a first, second and third place prize. I was lucky enough to win first and second place, with this logo being given first place.
              </p>
            </div>

            <div class="grid gallery">
              <div class="client-work thumb item folio-page-image col-12">
                <ModalImage small={Existing} large={Existing} />
              </div>
              <div class="personal thumb item folio-page-image col-12">
                <ModalImage small={NewColour} large={NewColour} />
              </div>
              <div class="personal thumb item folio-page-image col-6 col-xs-12">
                <ModalImage small={NewBlack} large={NewBlack} />
              </div>
              <div class="personal thumb item folio-page-image col-6 col-xs-12">
                <ModalImage small={NewWhite} large={NewWhite} />
              </div>
              <div class="personal thumb item folio-page-image col-12">
                <ModalImage small={GridFull} large={GridFull} />
              </div>
              <div class="personal thumb item folio-page-image col-12">
                <ModalImage small={Colours} large={Colours} />
              </div>
            </div>

            <div className="grid pv-6">
              <div className="col-3 col-xs-12">
                <h2 className="font-special">The breakdown of the concept</h2>
              </div>
              <p className="col-9 col-xs-12 m-0">
                If you look at my portfolio, it's pretty evident that I favour monogram logos (logos that are made up of initials). I feel they are coherent, clean and easily mouldable to fit the identity that a brand is trying to convey. For this concept, you can read the UQ initial from left to right, then CS when reading bottom to top. The other element to consider is the blocky style letter forms, which are indicative of an old terminal style and designed to feel techy.
              </p>
            </div>

            <div class="grid gallery">
              <div class="personal thumb item folio-page-image col-6 col-xs-12">
                <ModalImage small={Pin} large={Pin} />
              </div>
              <div class="personal thumb item folio-page-image col-6 col-xs-12">
                <ModalImage small={Coffee} large={Coffee} />
              </div>
              <div class="personal thumb item folio-page-image col-12">
                <ModalImage small={Stationary} large={Stationary} />
              </div>
              <div class="personal thumb item folio-page-image col-6 col-xs-12">
                <ModalImage small={Tshirt} large={Tshirt} />
              </div>
              <div class="personal thumb item folio-page-image col-6 col-xs-12">
                <ModalImage small={MousePad} large={MousePad} />
              </div>
            </div>

            <div className="grid pv-6 mb-2">
              <div className="col-3 col-xs-12">
                <h2 className="font-special">Concluding remarks</h2>
              </div>
              <p className="col-9 col-xs-12 m-0">
                This was one of my favourite projects to do, since it had some competitiveness to it and was tech based (which is my main 9-5 job). Stealing the prize cash from a rival university was an added bonus too! But jokes aside, this project was probably the birth of my real passion for branding.
              </p>
            </div>

            <Hire hireTitle="Let's give your brand a facelift!" hireSubtitle="If you want help rebranding or uplifting your brand, I am eager to help!" />
          </div>
        <Footer logo={FooterLogo} />
      </>
  );
};

export default UqcsPage;
