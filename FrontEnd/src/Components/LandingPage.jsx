import React from "react";

import Forest from "../assets/Forest.avif"
import Deforest from "../assets/Deforest.avif"

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
                    <div className="Aware-card-cont">
                        <h1>"DO YOU KNOW?"</h1>
                        <div className="card">
                            <div className="img">
                                <img src={Forest}></img>
                                <img src={Deforest}></img>
                            </div>
                            <div className="content">
                                <div className="content-first">
                                    <h2>Before</h2>
                                    <p>
                                        <ul>
                                            <li>The forests were lush and vibrant, filled with towering trees, dense green canopies, and a rich variety of plant and animal life.</li>
                                            <li>Birds chirped joyfully, rivers flowed crystal clear, and the air was fresh and pure.</li>
                                            <li>The ground was covered with healthy soil, fallen leaves, and blooming flowers, creating a peaceful and balanced ecosystem.</li>
                                            <li>Wildlife thrived in their natural habitat, contributing to the cycle of life.</li>
                                        </ul>
                                    </p>
                                </div>
                                <div className="content-two">
                                    <h2>After</h2>
                                    <p>
                                        <ul>
                                            <li>The once-thriving forests are now barren landscapes, with tree stumps scattered across dry, cracked soil.</li>
                                            <li>The air feels heavy with dust and smoke, while streams that once flowed clear now run murky and polluted.</li>
                                            <li>Wildlife has been displaced, struggling to survive in shrinking habitats.</li>
                                            <li>The loss of trees has led to rising temperatures, unpredictable weather, and increased soil erosion.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="img">
                                <img src={Forest}></img>
                                <img src={Deforest}></img>
                            </div>
                            <div className="content">
                                <div className="content-first">
                                    <h2>Before</h2>
                                    <p>
                                        <ul>
                                            <li>The forests were lush and vibrant, filled with towering trees, dense green canopies, and a rich variety of plant and animal life.</li>
                                            <li>Birds chirped joyfully, rivers flowed crystal clear, and the air was fresh and pure.</li>
                                            <li>The ground was covered with healthy soil, fallen leaves, and blooming flowers, creating a peaceful and balanced ecosystem.</li>
                                            <li>Wildlife thrived in their natural habitat, contributing to the cycle of life.</li>
                                        </ul>
                                    </p>
                                </div>
                                <div className="content-two">
                                    <h2>After</h2>
                                    <p>
                                        <ul>
                                            <li>The once-thriving forests are now barren landscapes, with tree stumps scattered across dry, cracked soil.</li>
                                            <li>The air feels heavy with dust and smoke, while streams that once flowed clear now run murky and polluted.</li>
                                            <li>Wildlife has been displaced, struggling to survive in shrinking habitats.</li>
                                            <li>The loss of trees has led to rising temperatures, unpredictable weather, and increased soil erosion.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="img">
                                <img src={Forest}></img>
                                <img src={Deforest}></img>
                            </div>
                            <div className="content">
                                <div className="content-first">
                                    <h2>Before</h2>
                                    <p>
                                        <ul>
                                            <li>The forests were lush and vibrant, filled with towering trees, dense green canopies, and a rich variety of plant and animal life.</li>
                                            <li>Birds chirped joyfully, rivers flowed crystal clear, and the air was fresh and pure.</li>
                                            <li>The ground was covered with healthy soil, fallen leaves, and blooming flowers, creating a peaceful and balanced ecosystem.</li>
                                            <li>Wildlife thrived in their natural habitat, contributing to the cycle of life.</li>
                                        </ul>
                                    </p>
                                </div>
                                <div className="content-two">
                                    <h2>After</h2>
                                    <p>
                                        <ul>
                                            <li>The once-thriving forests are now barren landscapes, with tree stumps scattered across dry, cracked soil.</li>
                                            <li>The air feels heavy with dust and smoke, while streams that once flowed clear now run murky and polluted.</li>
                                            <li>Wildlife has been displaced, struggling to survive in shrinking habitats.</li>
                                            <li>The loss of trees has led to rising temperatures, unpredictable weather, and increased soil erosion.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="About">
                    <div>
                        <h1>"Our Mission: Building a Greener Tomorrow"</h1>
                        <p>Our planet is our responsibility, and every action counts. Through powerful storytelling and data-driven insights, we reveal the impact of climate change and human intervention. Together, we can make a difference — one informed choice at a time. Join us in protecting our environment and building a sustainable future for generations to come.</p>
                    </div>
                </section>
                <section className="Connect">

                </section>
            </div>
        </>
    )
}

export default Landing