import React, { useState } from "react";
import "./Chef.css";
import { assets } from "../../assets/assets";

export default function Chef() {
  const [selectedChef, setSelectedChef] = useState(null);

  const chefs = [
    {id: 1,
      name: "Chef Maria Rossi",
      image: assets.chef,
      bio: "Maria specializes in French pastries and modern baking techniques.",
    },
    {
      
      id: 2,
      name: "John Doe",
      image: assets.chef3,
      bio: "Maria specializes in French pastries and modern baking techniques.",
    },
    {
      id: 3,
      name: "Chef Kenji Yamamoto",
      image: assets.chef5,
      bio: "Kenji brings authentic Japanese flavors with a modern twist.",
    },
  ];

  const handleChefClick = (id) => {
    setSelectedChef((prev) => (prev === id ? null : id));
  };

  return (
    <section className="chef-section">
      <div className="chef-title">
        <h3>Our Culinary Artisans</h3>
        <p>
          Meet the creative minds behind every exquisite dish. Our team of
          world-class chefs blends tradition with innovation, crafting culinary
          experiences that delight the senses.
        </p>
      </div>

      <div className="chef-row">
        {chefs.map((chef) => (
          <div key={chef.id} className="chef-card" onClick={() => handleChefClick(chef.id)}>
            <img src={chef.image} alt={chef.name} className="chef-image" />
            {selectedChef === chef.id && (
              <div className="chef-details">
                <h4>{chef.name}</h4>
                <p>{chef.bio}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
