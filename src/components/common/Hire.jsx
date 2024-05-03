import React from 'react';

const Hire = ({ hireTitle, hireSubtitle }) => ( 
    <section class="border-top pv-8" id="contact">
        <div class="container">
        <div class="grid v-center h-center">
            <div class="col-6 col-md-10 col-sm-12">
            <h2 class="font-special">{hireTitle}</h2>
            <h4 class="color-black">{hireSubtitle}</h4>
            <form class="pt-4" action="/">
                <div class="grid">
                <div class="col-6 col-sm-12">
                    <label>Name</label>
                    <input type="text" placeholder="John, maybe?"/>
                </div>
                <div class="col-6 col-sm-12">
                    <label>Email</label>
                    <input type="email" placeholder="maybe.john@example.com" />
                </div>
                </div>
                <div class="grid">
                <div class="col-12">
                    <label>Message</label>
                    <textarea placeholder="Hey Sam! I am John, maybe ... "></textarea>
                    <button class="btn" type="submit">Send</button>
                </div>
                </div>
            </form>
            </div>
        </div>
        </div>
    </section>
);
 
export default Hire;