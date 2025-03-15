import React from "react";

const Landing = () =>{
    return(
        <>
            <div className="Main">
                <nav>
                    <div className="logo">
                        <h1>LOGO</h1>
                    </div>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Awareness</a></li>
                        <li><a>About</a></li>
                        <li><a>Connect</a></li>
                    </ul>
                </nav>

                <section className="Home">
                    <div className="home-cover">
                        <h1>"Our Planet Needs You"</h1>
                        <h2>Explore how climate change is impacting our world and how you can help.</h2>
                        <div className="home-button">
                            <button>Explore Impacts</button>
                            <button>Take Action Now</button>
                        </div>
                    </div>
                </section>
                <section className="Awareness">

                </section>
                <section className="About">

                </section>
                <section className="Connect">

                </section>
            </div>
        </>
    )
}

export default Landing