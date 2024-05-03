import React from 'react';

const Footer = ({ logo }) => (
    <footer class="grid v-center pv-2">
        <section class="grid h-center col-12 pv-2">
            <div class="col-12 pb-2 text-center ph-0">
                <h4 class="color-light">Get connected with us on social networks</h4>
            </div>
            <div class="col-12 text-center">
                <a target="_blank" href="https://www.linkedin.com/in/sswest/" class="mh-1">LinkedIn</a>
                <a target="_blank" href="https://www.instagram.com/samuelwest.design/" class="mh-1">Instagram</a>
            </div>
        </section>
        <hr class="footer-divider col-12" />
        <section class="w-10 ph-3">
            <div class="grid v-center">
                <div class="col-6">
                    <img className="logo-footer mb-2" src={logo} alt="Logo light" />
                    <p>
                        Sam has been freelance designing for around 5 years, and worked with many different clients over that time. He has a bachelors degree in Interactive and Visual Design, but more importantly than all of that, a true passion to see his clients benefit from his services.
                    </p>
                </div>
                <div class="col-3">
                    <div class="footer-list">
                        <h3 class="font-special mb-2">Services</h3>
                        <p><span class="color-accent">&gt;</span> Logo Design</p>
                        <p><span class="color-accent">&gt;</span> Brand Design</p>
                        <p><span class="color-accent">&gt;</span> Identity Design</p>
                    </div>
                </div>
                <div class="col-3">
                    <div class="footer-list">
                        <h3 class="font-special mb-2">Useful links</h3>
                        <p><a href="/#work"><span class="color-accent">&gt;</span> Work</a></p>
                        <p><a href="/#about"><span class="color-accent">&gt;</span> About</a></p>
                        <p><a href="/#contact"><span class="color-accent">&gt;</span> Contact</a></p>
                    </div>
                </div>
            </div>
        </section>
        
        <div class="text-center ph-3 pb-3">
            © 2021 Copyright:
            <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
    </footer>
);
 
export default Footer;