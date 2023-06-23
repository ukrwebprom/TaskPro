import React from "react"; // , { useState }
import css from "./Filters.module.css";

const Background = () => {
  const backgrounds = [
    "https://upload.wikimedia.org/wikipedia/commons/8/87/Red_sunset.jpg",
    "https://images.pexels.com/photos/1301470/pexels-photo-1301470.jpeg",
    "https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-and-copyspace_74190-8663.jpg?w=1060&t=st=1687450540~exp=1687451140~hmac=4ff65b3a0cce2b6183d8f4bee3336de41c5b68f393528b26df20c8422ad33919",
    "https://img.freepik.com/premium-photo/abstract-water-ocean-waves-texture-background_117652-6.jpg?w=1060",
    "https://upload.wikimedia.org/wikipedia/commons/8/87/Red_sunset.jpg",
    "https://images.pexels.com/photos/1301470/pexels-photo-1301470.jpeg",
    "https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-and-copyspace_74190-8663.jpg?w=1060&t=st=1687450540~exp=1687451140~hmac=4ff65b3a0cce2b6183d8f4bee3336de41c5b68f393528b26df20c8422ad33919",
    "https://img.freepik.com/premium-photo/abstract-water-ocean-waves-texture-background_117652-6.jpg?w=1060",
    "https://upload.wikimedia.org/wikipedia/commons/8/87/Red_sunset.jpg",
    "https://images.pexels.com/photos/1301470/pexels-photo-1301470.jpeg",
    "https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-and-copyspace_74190-8663.jpg?w=1060&t=st=1687450540~exp=1687451140~hmac=4ff65b3a0cce2b6183d8f4bee3336de41c5b68f393528b26df20c8422ad33919",
    "https://img.freepik.com/premium-photo/abstract-water-ocean-waves-texture-background_117652-6.jpg?w=1060",
    "https://upload.wikimedia.org/wikipedia/commons/8/87/Red_sunset.jpg",
    "https://images.pexels.com/photos/1301470/pexels-photo-1301470.jpeg",
    "https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-and-copyspace_74190-8663.jpg?w=1060&t=st=1687450540~exp=1687451140~hmac=4ff65b3a0cce2b6183d8f4bee3336de41c5b68f393528b26df20c8422ad33919",
    "https://img.freepik.com/premium-photo/abstract-water-ocean-waves-texture-background_117652-6.jpg?w=1060",
  ];
  //   const [selectedBg, setSelectedBg] = useState(null);

  //   const handleBgClick = (image) => {
  //     setSelectedBg(image);
  //   };

  return (
    <div className={css.bgContainer}>
      <h3 className={css.bgTitle}>Background</h3>
      <div>
        <ul className={css.bgList}>
          {backgrounds.map((background, index) => (
            <li key={index}>
              <img
                className={css.bgImg}
                src={background}
                alt={`Background ${index + 1}`}
                // onClick={(background) => handleBgClick(background)}
                // selectedBg={setSelectedBg(selectedBg)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Background;
