import React from 'react';
import "./Landing.css";

const Landing = () => (
    <section className="landing">
      <h1 className="hero-title">Turn the music up!</h1>

     <section className="selling-points">
       <div className="point">
         <h2 className="point-title">Choose your music!</h2>
         <h2 className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</h2>
       </div>
       <div className="point">
         <h4 className="point-title">Unlimited, streaming, ad-free</h4>
         <h4 className="point-description">No arbitrary limits. No distractions.</h4>
       </div>
       <div className="point">
         <h2 className="point-title">Mobile enabled</h2>
         <h4 className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</h4>
       </div>
     </section>
    </section>
  );

export default Landing;
