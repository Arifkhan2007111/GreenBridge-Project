import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import Forest from "../assets/Forest.avif"
import Deforest from "../assets/Deforest.avif"
import Glacier from "../assets/glacier.avif"
import Melting from "../assets/melting-glacier.avif"
import Land from "../assets/land.avif"
import Drought from "../assets/Drought.avif"
import logo from "../assets/5..png"

import Footer from "./Footer";

const Landing = () =>{

    const home = useRef()
    const aware = useRef()
    const about = useRef()
    const connect = useRef()
    const navigate = useNavigate()

    const scrollHandler = (elemRef) =>{
        // console.log(elemRef)
        window.scrollTo({top: elemRef.current.offsetTop, behavior: "smooth"})
    }
    
    return(
        <>
            <div className="Main">
                <nav>
                    <div className="logo">
                        <img src={logo}></img>
                    </div>
                    <ul>
                        <li><a onClick={() => scrollHandler(home)}>Home</a></li>
                        <li><a onClick={() => scrollHandler(aware)}>Awareness</a></li>
                        <li><a onClick={() => scrollHandler(about)}>About</a></li>
                        <li><a onClick={() => scrollHandler(connect)}>Connect</a></li>
                        <button onClick={()=> navigate("/login")} className="signin-btn">Sign-in</button>
                    </ul>
                </nav>

                <section ref={home} className="Home">
                    <div className="home-cover">
                        <h1>"Our Planet Needs You"</h1>
                        <h2>Explore how climate change is impacting our world and how you can help.</h2>
                        <div className="home-button">
                            <button onClick={() => scrollHandler(aware)}>Explore Impacts</button>
                            <button onClick={() => scrollHandler(connect)}>Take Action Now</button>
                        </div>
                    </div>
                </section>
                <section ref={aware} className="Awareness">
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
                                <img src={Glacier}></img>
                                <img src={Melting}></img>
                            </div>
                            <div className="content">
                                <div className="content-first">
                                    <h2>Before</h2>
                                    <p>
                                        <ul>
                                            <li>Glaciers were vast, pristine, and covered in thick layers of pure white and blue ice.</li>
                                            <li>Ice formations were stable, with minimal melting during warmer seasons.</li>
                                            <li>Clear glacial meltwater flowed steadily, supporting rivers and ecosystems.</li>
                                            <li>Surrounding regions maintained balanced temperatures and healthy biodiversity.</li>
                                        </ul>
                                    </p>
                                </div>
                                <div className="content-two div-c-two">
                                    <h2>After</h2>
                                    <p>
                                        <ul>
                                            <li>Glaciers have become visibly smaller, with ice turning grayish due to soot and pollutants.</li>
                                            <li>Increased surface melting has caused deep cracks and unstable ice structures.</li>
                                            <li>Retreating glaciers expose barren rock, reducing freshwater sources.</li>
                                            <li>Disrupted ecosystems and reduced water supply threaten local communities.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="img">
                                <img src={Land}></img>
                                <img src={Drought}></img>
                            </div>
                            <div className="content">
                                <div className="content-first">
                                    <h2>Before</h2>
                                    <p>
                                        <ul>
                                            <li>Land was rich with lush green forests, fertile soil, and diverse plant life.</li>
                                            <li>Rivers and lakes flowed steadily, maintaining balanced moisture levels.</li>
                                            <li>Wildlife thrived in healthy ecosystems, contributing to biodiversity.</li>
                                            <li>The air was cleaner, and the climate was more stable.</li>
                                        </ul>
                                    </p>
                                </div>
                                <div className="content-two div-c-three">
                                    <h2>After</h2>
                                    <p>
                                        <ul>
                                            <li>Land has turned dry, cracked, and barren, losing its natural fertility.</li>
                                            <li>Forests have been replaced by empty spaces, reducing oxygen levels and increasing carbon dioxide.</li>
                                            <li>Drought conditions have intensified, depleting water sources and affecting agriculture.</li>
                                            <li>Soil erosion and desertification have become common, making the land unfit for crops.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section ref={about} className="About">
                    <div className="about-intro">
                        <h1>"Our Mission: Building a Greener Tomorrow"</h1>
                        <p>Our planet is our responsibility, and every action counts. Through powerful storytelling and data-driven insights, we reveal the impact of climate change and human intervention. Together, we can make a difference — one informed choice at a time. Join us in protecting our environment and building a sustainable future for generations to come.</p>
                        <h1>What We Provide</h1>
                    </div>
                    <div className="about-cards">
                        <div className="about-card">
                            <h1> 🔍 Research & Data Analysis</h1>
                            <p>We gather and analyze environmental data to track climate change, pollution levels, and deforestation patterns. This data helps us predict future risks and identify urgent areas for action.</p>
                        </div>
                        <div className="about-card">
                            <h1> 🤝 Community Collaboration</h1>
                            <p>We partner with environmental experts, local communities, and global organizations to develop impactful solutions and implement sustainable practices.</p>
                        </div>
                        <div className="about-card">
                            <h1> 📢 Education & Awareness</h1>
                            <p>Through interactive content, visual stories, and engaging resources, we educate individuals about the impact of climate change and ways to contribute positively.</p>
                        </div>
                        <div className="about-card">
                            <h1> 🌍 Action & Advocacy</h1>
                            <p>We empower people to take meaningful actions such as participating in eco-friendly initiatives, planting trees, and supporting environmental campaigns.</p>
                        </div>
                        <div className="about-card">
                            <h1> 📊 Monitoring & Improvement</h1>
                            <p>We track environmental changes over time, ensuring our efforts are effective and impactful while continuously improving strategies.</p>
                        </div>
                    </div>
                </section>
                <section ref={connect} className="Connect">
                    <h1>CONNECT WITH US</h1>
                    <p>Together we are part of a growing, global movement determined to bring about the changes our planet desperately needs.</p>
                    <form>
                        <input type="text" placeholder="First Name" required></input>
                        <input type="text" placeholder="Last Name" required></input>
                        <select required>
                            <option value="">-- Select a Country --</option>
                            <option value="india">India</option>
                            <option value="usa">United States</option>
                            <option value="uk">United Kingdom</option>
                            <option value="canada">Canada</option>
                            <option value="australia">Australia</option>
                        </select>
                        <input type="email" placeholder="Email" required></input>
                        <button>Submit</button>
                    </form>
                </section>
                <hr />
                <Footer />
            </div>
        </>
    )
}

export default Landing