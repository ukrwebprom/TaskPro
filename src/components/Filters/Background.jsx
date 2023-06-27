import React from "react";
import css from "./Filters.module.css";
// import fs from "fs";

const Background = ({ handleBgClick, selectedBg }) => {
  // const urlJsonPath = "../../images/backgrounds/url.json";
  // const urlJsonContent = fs.readFileSync(urlJsonPath, "utf-8");
  // const urlJsonData = JSON.parse(urlJsonContent);
  // const backgrounds = urlJsonData.urls;

  return (
    <div className={css.bgContainer}>
      {/* <div className={css.modalLine}></div>
      <h3 className={css.bgTitle}>Background</h3>
      <div>
        <ul className={css.bgList}>
          {backgrounds.map((background, index) => (
            <li key={index} className={css.bgItem}>
              <img
                className={`${css.bgImg} ${
                  selectedBg === background ? css.selectedBg : ""
                }`}
                src={background}
                alt={`Background ${index + 1}`}
                onClick={() => handleBgClick(background, index)}
              />
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Background;

// // import React from "react";
// // import css from "./Filters.module.css";
// // import previews from "../../images/background/small-url.json";
// // import backgrounds from "../../images/background/url.json";
// // import { ResponsiveImage } from "react-responsive-image";

// // const Background = ({ handleBgChange, selectedBg }) => {
// //   const handleImageClick = (index) => {
// //     const background = backgrounds[index];
// //     handleBgChange(background);
// //   };

// //   return (
// //     <div className={css.bgContainer}>
// //       <div className={css.modalLine}></div>
// //       <h3 className={css.bgTitle}>Background</h3>
// //       <div>
// //         <ul className={css.bgList}>
// //           {previews.map((image, index) => (
// //             <li key={index} className={css.bgItem}>
// //               <label className={css.bgLabel}>
// //                 <input
// //                   type="radio"
// //                   value={index}
// //                   checked={selectedBg === index}
// //                   onChange={() => handleBgChange(null, index)}
// //                 />
// //                 <ResponsiveImage
// //                   src={image}
// //                   alt={`Background ${index + 1}`}
// //                   onClick={() => handleImageClick(index)}
// //                   className={`${css.bgImg} ${
// //                     selectedBg === index ? css.selectedBg : ""
// //                   }`}
// //                 />
// //               </label>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Background;

// import React from "react";
// import css from "./Filters.module.css";
// import previews from "../../images/background/small-url.json";
// // import backgrounds from "../../images/background/url.json";

// const Background = ({ handleBgClick, selectedBg }) => {
//   const handleBgChange = (event) => {
//     const index = parseInt(event.target.value);
//     const preview = previews[index];
//     handleBgClick(index);
//   };
//   return (
//     <div className={css.bgContainer}>
//       <div className={css.modalLine}></div>
//       <h3 className={css.bgTitle}>Background</h3>
//       <div>
//         <ul className={css.bgList}>
//           {previews.map((preview, index) => (
//             <li key={index} className={css.bgItem}>
//               <label>
//                 <input
//                   type="radio"
//                   value={index}
//                   checked={selectedBg === preview}
//                   onChange={handleBgChange}
//                 />
//                 <img
//                   key={index}
//                   className={`${css.bgImg} ${
//                     selectedBg === preview ? css.selectedBg : ""
//                   }`}
//                   src={previews[index]}
//                   alt={`Background ${index + 1}`}
//                   onClick={() => handleBgClick(preview, index)}
//                 />
//               </label>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Background;

// // import React from "react";
// // import css from "./Filters.module.css";
// // import previews from "../../images/background/small-url.json";
// // import backgrounds from "../../images/background/url.json";

// // const Background = ({ handleBgClick, selectedBg }) => {
// //   return (
// //     <div className={css.bgContainer}>
// //       <div className={css.modalLine}></div>
// //       <h3 className={css.bgTitle}>Background</h3>
// //       <div>
// //         <ul className={css.bgList}>
// //           {backgrounds.map((background, index) => (
// //             <li key={index} className={css.bgItem}>
// //               <label>
// //                 <input
// //                   type="radio"
// //                   value={index}
// //                   // checked={selectedBgIndex === index}
// //                   // onChange={handleBgChange}
// //                 />
// //                 <img
// //                   key={index}
// //                   className={`${css.bgImg} ${
// //                     selectedBg === background ? css.selectedBg : ""
// //                   }`}
// //                   src={previews[index]}
// //                   alt={`Background ${index + 1}`}
// //                   onClick={() => handleBgClick(background, index)}
// //                 />
// //               </label>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Background;

// //earlier code

// // import React from "react";
// // import css from "./Filters.module.css";
// // import previews from "../../images/background/small-url.json";
// // import backgrounds from "../../images/background/url.json";

// // const Background = ({ handleBgClick, selectedBg }) => {
// //   return (
// //     <div className={css.bgContainer}>
// //       <div className={css.modalLine}></div>
// //       <h3 className={css.bgTitle}>Background</h3>
// //       <div>
// //         <ul className={css.bgList}>
// //           {backgrounds.map((background, index) => {
// //             previews.map((preview, index) => (
// //               <li key={index} className={css.bgItem}>
// //                 <label>
// //                   <input
// //                     type="radio"
// //                     value={index}
// //                     // checked={selectedBgIndex === index}
// //                     // onChange={handleBgChange}
// //                   />
// //                   <img
// //                     key={index}
// //                     className={`${css.bgImg} ${
// //                       selectedBg === preview ? css.selectedBg : ""
// //                     }`}
// //                     src={preview}
// //                     alt={`Background ${index + 1}`}
// //                     onClick={() => handleBgClick(background, index)}
// //                   />
// //                 </label>
// //               </li>
// //             ));
// //           })}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Background;

// // 26.06 23.48
// // import React from "react";
// // import css from "./Filters.module.css";
// // import previews from "../../images/backgrounds/small-url.json";
// // import backgrounds from "../../images/backgrounds/url.json";

// // const Background = ({ handleBgChange, selectedBg }) => {
// //   return (
// //     <div className={css.bgContainer}>
// //       <div className={css.modalLine}></div>
// //       <h3 className={css.bgTitle}>Background</h3>
// //       <div>
// //         <ul className={css.bgList}>
// //           {backgrounds.map((background, index) => (
// //             <li key={index} className={css.bgItem}>
// //               <label className={css.bgLabel}>
// //                 <input
// //                   type="radio"
// //                   value={index}
// //                   checked={selectedBg === index}
// //                   onChange={() => handleBgChange(selectedBg)}
// //                 />
// //                 {previews.map((image, index) => {
// //                   <img
// //                     key={index}
// //                     className={`${css.bgImg} ${
// //                       selectedBg === image ? css.selectedBg : ""
// //                     }`}
// //                     src={image}
// //                     alt={`Background ${index + 1}`}
// //                     onClick={() => {
// //                       handleBgChange(background, index);
// //                     }}
// //                   />;
// //                 })}
// //               </label>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Background;
