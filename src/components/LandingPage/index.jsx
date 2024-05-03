import React from 'react';
import DogTrainingThumbnail from '../../assets/img/work/dog-training/thumbnail.jpg';
import WestTilingThumbnail from '../../assets/img/work/west-tiling/thumbnail.jpg';
import UQCSThumbnail from '../../assets/img/work/uqcs/thumbnail.jpg';
import LightningGamesThumbnail from '../../assets/img/work/lightning-games/thumbnail.jpg';
import RogueNationThumbnail from '../../assets/img/work/rogue-nation/thumbnail.jpg';
import SomeWorriesThumbnail from '../../assets/img/work/some-worries/thumbnail.jpg';
import FooterLogo from '../../assets/img/footer-logo.png';
import HeroImage from '../../assets/img/hero-bg.jpg';
import Profile from '../../assets/img/profile.jpg';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { changeFilter } from '../../utils/gridUtils';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Hire from '../common/Hire';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 0 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const LandingPage = () => {
    // Inject custom css vars
    const root = document.querySelector(':root');
    root.style.setProperty('--dark', '#222'); 
    root.style.setProperty('--accent', '#455E97'); 
    root.style.setProperty('--heroImage', `url(${HeroImage})`); 

    return (<>
        <Navbar />
        <section class="hero" id="home">
            <div class="container text-left">
                <h1 class="pb-2 font-size-5 color-light">Make your business competitive!</h1>
                <h3 class="pb-2 color-light">Obtain a unique identity, foster trust, align with your target audience and gain a competitive edge for long-term success through our services.</h3>
            </div>
        </section>

        <div class="content">      
            <section id="work">
                <div class="grid pb-2">
                    <div class="col-3 col-md-9 col-sm-12 d-flex v-center">
                        <h1>Projects</h1>
                    </div>
                    <div class="col-9 col-md-3 col-sm-12 text-right grid v-bottom h-right">
                        <ul class="secondary-nav filters" id='grid-filters'>
                            <li className="filter-trigger">Filter</li>
                            <li><span class="filter all active" onClick={() => changeFilter('all')}>All</span></li>
                            <li><span class="filter personal" onClick={() => changeFilter('personal')}>Personal</span></li>
                            <li><span class="filter collaboration" onClick={() => changeFilter('collaboration')}>Collaboration</span></li>
                            <li><span class="filter client-work" onClick={() => changeFilter('client-work')}>Client work</span></li>
                        </ul>
                    </div>
                </div>
                <div class="grid masonry gallery">
                    <a class="client-work thumb item col-4 col-md-6 col-xs-12" href="/dog-training">
                        <div class="route-item"></div>
                        <img alt="Gumo dummy image" src={DogTrainingThumbnail} />
                        <div class="caption">
                        <div class="title font-special">Dog Training 101</div>
                        <div class="tag">Dog Training Service</div>
                        </div>
                    </a>
                    <a class="personal thumb item col-4 col-md-6 col-xs-12" href="single.html">
                        <img alt="Gumo dummy image" src={WestTilingThumbnail} />
                        <div class="caption">
                        <div class="title font-special">West Tiling</div>
                        <div class="tag">Tiling Service</div>
                        </div>
                    </a>
                    <a class="client-work thumb item col-4 col-md-6 col-xs-12" href="single.html">
                        <img alt="Gumo dummy image" src={UQCSThumbnail} />
                        <div class="caption">
                        <div class="title font-special">UQ Computing Society</div>
                        <div class="tag">University Club</div>
                        </div>
                    </a>
                    <a class="personal thumb item col-4 col-md-6 col-xs-12" href="single.html">
                        <img alt="Gumo dummy image" src={LightningGamesThumbnail} />
                        <div class="caption">
                        <div class="title font-special">Lightning Games</div>
                        <div class="tag">Video Gaming Van</div>
                        </div>
                    </a>
                    <a class="personal thumb item col-4 col-md-6 col-xs-12" href="single.html">
                        <img alt="Gumo dummy image" src={RogueNationThumbnail} />
                        <div class="caption">
                        <div class="title font-special">Rogue Nation</div>
                        <div class="tag">Sports Tipping Service</div>
                        </div>
                    </a>
                    <a class="collaboration thumb item col-4 col-md-6 col-xs-12" href="single.html">
                        <img alt="Gumo dummy image" src={SomeWorriesThumbnail} />
                        <div class="caption">
                        <div class="title">Some Worries</div>
                        <div class="tag">Anxiety Awareness</div>
                        </div>
                    </a>
                </div>
            </section>
            
            <section class="pb-0" id="about">
                <div class="container">
                    <div class="grid h-center v-center">
                        <div class="col-6 col-sm-12"><img alt="Gumo dummy image" src={Profile} /></div>
                        <div class="col-5 col-sm-12 offset-1">
                            <h2 class="font-special">Meet the master and padawan...</h2>
                            <h4 class="color-black">I am the padawan, and my four legged friend is the master.</h4>
                            <p>Sam has been freelance designing for around 5 years, and worked with many different clients over that time. He has a bachelors degree in Interactive and Visual Design, but more importantly than all of that, a true passion to see his clients benefit from his services.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="pv-8" id="quotes">
                <div class="container">
                    <Carousel showDots autoPlay autoPlaySpeed={10000} arrows={false} infinite responsive={responsive}>
                        <div class="grid h-center pb-4">
                            <blockquote class="text-center col-6 col-md-10">
                            <div class="text">Design is the silent ambassador of your brand.</div>
                            <div class="author color-dark">Paul Rand</div>
                            </blockquote>
                        </div>
                        <div class="grid h-center pb-4">
                            <blockquote class="text-center col-6 col-md-10">
                            <div class="text">Your brand is what other people say about you when you're not in the room.</div>
                            <div class="author color-dark">Jeff Bezos</div>
                            </blockquote>
                        </div>
                        <div class="grid h-center pb-4">
                            <blockquote class="text-center col-6 col-md-10">
                            <div class="text">The most powerful and enduring brands are built from the heart.</div>
                            <div class="author color-dark">Howard Schultz</div>
                            </blockquote>
                        </div>
                        <div class="grid h-center pb-4">
                            <blockquote class="text-center col-6 col-md-10">
                            <div class="text">Design is not just what it looks like and feels like. Design is how it works.</div>
                            <div class="author color-dark">Steve Jobs</div>
                            </blockquote>
                        </div>
                    </Carousel>
                </div>
            </section>
            <Hire hireTitle="Hire Sam" hireSubtitle="Tackle the future together and create something truly meaningful." />
        </div>
        <Footer logo={FooterLogo} />
    </>);
}
 
export default LandingPage;