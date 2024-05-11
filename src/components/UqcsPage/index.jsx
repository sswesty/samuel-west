import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

import HeroImage from '../../assets/img/work/uqcs/hero-bg.png';

import Existing from '../../assets/img/work/uqcs/original.png';
import LogoAnim from '../../assets/img/work/uqcs/logo-anim.mp4';
import NewBlack from '../../assets/img/work/uqcs/new-black.png';
import NewWhite from '../../assets/img/work/uqcs/new-white.png';
import GridFull from '../../assets/img/work/uqcs/grid-full.png';
import Colours from '../../assets/img/work/uqcs/colours.png';

import Coffee from '../../assets/img/work/uqcs/coffee.jpg';
import Stationary from '../../assets/img/work/uqcs/stationary.jpg';
import Tshirt from '../../assets/img/work/uqcs/tshirt.jpg';
import Pin from '../../assets/img/work/uqcs/pin.jpg';
import MousePad from '../../assets/img/work/uqcs/mouse-pad.jpg';
import Logo from '../../assets/img/work/uqcs/logo.png';

import ModalImage from 'react-modal-image';
import Hire from '../common/Hire';

const UqcsPage = () => {
  // Inject custom css vars
  const root = document.querySelector(':root');
  root.style.setProperty('--dark', '#19151c'); 
  root.style.setProperty('--accent', '#51247a'); 
  root.style.setProperty('--heroImage', `url(${HeroImage})`);
  document.title = "Samuel West | UQCS";

  return (<>
          <Navbar logo={Logo} />
          <section className="hero" id="home">
            <div className="container text-left">
              <h1 className="pb-1 color-light m-0 font-size-5">UQCS</h1>
              <h4 className="project-category mb-2">University Computing Society</h4>
              <p className="pb-2 color-light m-0">
                UQCS, the University of Queensland Computing Society, is a dynamic community of tech enthusiasts constantly exploring cutting-edge technologies. From mastering programming languages like Python and JavaScript to delving into emerging fields such as artificial intelligence and blockchain, UQCS members are passionate about learning all things tech. Through hackathons, workshops, and collaborative projects, UQCS fosters a spirit of innovation and collaboration.
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
                When I was still a student at Queensland University of Technology, UQCS were looking for a redesign of their logo. They held a logo redesign competition, with a first, second and third place prize. I was lucky enough to win first and second place, with this logo being given first place.
              </p>
            </div>

            <div class="grid gallery">
              <div class="client-work thumb item folio-page-image col-12">
                <ModalImage small={Existing} large={Existing} />
              </div>
              <div class="personal thumb item folio-page-image col-12">
                <video
                  autoPlay
                  loop
                  muted
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                >
                  <source src={LogoAnim} type="video/mp4" />
                </video>
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
        <Footer logo={Logo} />
      </>
  );
};

export default UqcsPage;
