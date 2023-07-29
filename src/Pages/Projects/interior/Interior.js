import React from "react";
import "./Interior.css";
import {motion} from 'framer-motion'

import NavBar from '../../../Components/NavBar/NavBar'
import Footer from "../../../Components/footer/Footer";

const Interior = () => {
  const RecreationalPhoto = [
    {
      id: 1,
      image: require("../../../Assets/recreational/recreational_01.jpeg"),
    },
    {
      id: 2,
      image: require("../../../Assets/recreational/recreational_02.jpeg"),
    },
    {
      id: 3,
      image: require("../../../Assets/recreational/recreational_03.jpeg"),
    },
    {
      id: 4,
      image: require("../../../Assets/recreational/recreational_04.jpeg"),
    },
    {
      id: 5,
      image: require("../../../Assets/recreational/recreational_05.jpeg"),
    },
    {
      id: 6,
      image: require("../../../Assets/recreational/recreational_06.jpeg"),
    },
    {
      id: 7,
      image: require("../../../Assets/recreational/recreational_07.jpeg"),
    },
    {
      id: 8,
      image: require("../../../Assets/recreational/recreational_08.jpeg"),
    },
    {
      id: 9,
      image: require("../../../Assets/recreational/recreational_09.jpeg"),
    },
    {
      id: 10,
      image: require("../../../Assets/recreational/recreational_10.jpeg"),
    },
    {
      id: 11,
      image: require("../../../Assets/recreational/recreational_11.jpeg"),
    },
    {
      id: 12,
      image: require("../../../Assets/recreational/recreational_12.jpeg"),
    },
    {
      id: 13,
      image: require("../../../Assets/recreational/recreational_13.jpeg"),
    },
    {
      id: 14,
      image: require("../../../Assets/recreational/recreational_14.jpeg"),
    },
  ];
  return (
    <>
      <section className="recreational">
        <NavBar />        
        <div className="commercial-heading">Interior Furnitures</div>
        <div className="commercial-grid">
          {RecreationalPhoto.map((photo) => (
            <motion.div
              className="commercial-wrap"
              key={photo.id}
              layout
              whileHover={{ opacity: 1 }}
            >
              <motion.img
                src={photo.image}
                alt="uploaded pic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Interior;
