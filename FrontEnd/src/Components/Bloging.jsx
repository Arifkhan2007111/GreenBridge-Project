import React, { useState } from "react";

import "./Bloging.css";
import Data from "./Bloging-data.json";

import plus from '../assets/plus.png'

const Blog = () => {
  const [items, setItems] = useState(Data);

  const filterItems =(catItem) =>{
    const updateItems = Data.filter((curItem) =>{
        return curItem.category === catItem
    });
    setItems(updateItems)
  }
  return (
    <>
      <div className="blog-p1">
        <h1>
          Be the Voice of Change. <br />
          Be the Bridge to a Greener Tomorrow.
        </h1>
        <p>
          Explore impactful stories, innovative ideas, and real-world solutions
          for a better planet.
        </p>
        <div className="p1-line"></div>
      </div>
      <div className="blog-p2">
        <div className="cat-bar">
          <h1>All Blog's</h1>
          <div className="cat-bar-btn">
            <button onClick={()=>{setItems(Data)}}>All Blog</button>
            <button onClick={()=> filterItems("Sustainability")}>Sustainability</button>
            <button onClick={()=> filterItems("Climate Action")}>Climate Action</button>
            <button onClick={()=> filterItems("Green Tech")}>Green Tech</button>
            <button onClick={()=> filterItems("Success Stories")}>Success Stories</button>
          </div>
        </div>
      </div>
      <div className="blog-p3">
        {items.map((val) => (
          <div key={val.id} className="blog-card">
            <img src={val.image} alt={val.title} />
            <h1>{val.title}</h1>
            <button>{val.category}</button>
          </div>
        ))}
      </div>
      <div className="blog-add">
        <span>Share Your Voice</span>
        <img src={plus}></img>
      </div>
    </>
  );
};

export default Blog;
