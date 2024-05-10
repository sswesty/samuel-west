import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import HeroImage from '../../assets/img/work/dog-training/hero-bg.png';
import Existing from '../../assets/img/work/dog-training/existing.png';
import NewLight from '../../assets/img/work/dog-training/new-light.png';
import NewAccent from '../../assets/img/work/dog-training/new-accent.png';
import GuidesHorizontal from '../../assets/img/work/dog-training/guides-horizontal.png';
import GuidesSquare from '../../assets/img/work/dog-training/guides-square.png';
import Colours from '../../assets/img/work/dog-training/colours.png';
import Typography from '../../assets/img/work/dog-training/typography.png';
import Certificate from '../../assets/img/work/dog-training/certificate.jpg';
import Mug from '../../assets/img/work/dog-training/mug.jpg';
import Stationary from '../../assets/img/work/dog-training/stationary.jpg';
import Tshirt from '../../assets/img/work/dog-training/tshirt.jpg';
import DogMat from '../../assets/img/work/dog-training/dog-mat.jpg';
import FooterLogo from '../../assets/img/work/dog-training/footer-logo.png';
import ModalImage from 'react-modal-image';
import Hire from '../common/Hire';

const DogTrainingPage = () => {
  // Inject custom css vars
  const root = document.querySelector(':root');
  root.style.setProperty('--dark', '#0C0D0F'); 
  root.style.setProperty('--accent', '#2FAA67'); 
  root.style.setProperty('--heroImage', `url(${HeroImage})`);

  return (<>
          <Navbar />
          <section className="hero" id="home">
            <div className="container text-left">
              <h1 className="pb-1 color-light m-0 font-size-5">Dog Training 101</h1>
              <h4 className="project-category mb-2">Dog Training Service</h4>
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
                <h2 className="font-special">The concept</h2>
              </div>
              <p className="col-9 col-xs-12 m-0">
                Tackling a proposed rebrand for Dog Training 101 was something
                that was dear to me, because they had already helped me greatly
                with the training of my own puppy. Their wealth of knowledge,
                patience in their training methods and genuine connection with
                each owner were clearly displayed every time I interacted with
                them. When I saw their branding, I saw an opportunity to help
                drive these points home and outreach to more puppy parents like
                myself. So, that's what I did.
                <br />
                <br />
                The personality I attempt to reflect in the redesigned logo is
                more aligned all throughout, with a modern yet old twist. I
                couldn't lose the pup in the logo, nor could I lose the paw
                that made it complete... I simply reshaped the paw to feel more
                natural and tried to emphasis the most important part of the
                pup - the face. By making these two elements cleaner, it still
                keeps the same feeling of a family owned company, but rounds it
                out more and keeps it modern. All in all, the new look should
                make the existing brand thrive, rather than detract or become
                something completely new!
              </p>
            </div>

            <div class="grid gallery">
              <div class="client-work thumb item folio-page-image col-12">
                <ModalImage small={Existing} large={Existing} />
              </div>
              <div class="personal thumb item folio-page-image col-6 col-xs-12">
                <ModalImage small={NewLight} large={NewLight} />
              </div>
              <div class="personal thumb item folio-page-image col-6 col-xs-12">
                <ModalImage small={NewAccent} large={NewAccent} />
              </div>
              <div class="personal thumb item folio-page-image col-6 col-xs-12">
                <ModalImage small={GuidesHorizontal} large={GuidesHorizontal} />
              </div>
              <div class="personal thumb item folio-page-image col-6 col-xs-12">
                <ModalImage small={GuidesSquare} large={GuidesSquare} />
              </div>
            </div>

            <div className="grid pv-6">
              <div className="col-3 col-xs-12">
                <h2 className="font-special">The colours &amp; typography</h2>
              </div>
              <p className="col-9 col-xs-12 m-0">
                The colours choice existing for the brand, when used
                consistently across all identity assets, is already strong. The
                green is vibrant, represents health, works well with the black
                they have chosen and stands out from the competition in the
                area. As a result of all these factors, the colours remained
                the same as they were already working well. All that can be
                noticed across the proposed marketing material is that the
                colour is consistently and confidently.
                <br />
                <br />
                As for the typography, I wanted to show a bit more personality
                than what is reflected currently. More personality, warmth and
                care, while still remaining professional. I found the font used
                in the new logo, and tweaked the letterforms to include parts
                of the paw, as I feel it gives it that little bit more
                personality that makes a big difference. Overall, the typography
                was overhauled to tie in with the values of the company more
                and add more character.
              </p>
            </div>

            <div class="grid gallery">
              <div class="client-work thumb item folio-page-image col-12">
                <ModalImage small={Colours} large={Colours} />
              </div>
              <div class="personal thumb item folio-page-image col-12">
                <ModalImage small={Typography} large={Typography} />
              </div>
              <div class="personal thumb item folio-page-image col-6 col-xs-12">
                <ModalImage small={Certificate} large={Certificate} />
              </div>
              <div class="personal thumb item folio-page-image col-6 col-xs-12">
                <ModalImage small={Mug} large={Mug} />
              </div>
              <div class="personal thumb item folio-page-image col-12">
                <ModalImage small={Stationary} large={Stationary} />
              </div>
              <div class="personal thumb item folio-page-image col-6 col-xs-12">
                <ModalImage small={Tshirt} large={Tshirt} />
              </div>
              <div class="personal thumb item folio-page-image col-6 col-xs-12">
                <ModalImage small={DogMat} large={DogMat} />
              </div>
            </div>

            <div className="grid pv-6 mb-2">
              <div className="col-3 col-xs-12">
                <h2 className="font-special">Concluding remarks</h2>
              </div>
              <p className="col-9 col-xs-12 m-0">
                This rebrand was really quite enjoyable for me. I feel that I
                have provided a valuable revamp to the identity that is Dog
                Training 101, that doesn't aim to subtract or replace from the
                heritage that is instilled in what is existing. Rather, it
                emphasizes the strengths of what really matters in their
                company, and resonates my own experiences with them already.
              </p>
            </div>

            <Hire hireTitle="Let's give your brand a facelift!" hireSubtitle="If you want help rebranding or uplifting your brand, I am eager to help!" />
          </div>
        <Footer logo={FooterLogo} />
      </>
  );
};

export default DogTrainingPage;
