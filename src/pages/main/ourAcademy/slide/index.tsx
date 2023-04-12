import React from "react";
import img1 from "../../../../assets/imgs/Img-1.jpg";
import img2 from "../../../../assets/imgs/Img-2.jpg";
import img3 from "../../../../assets/imgs/Img-3.jpg";
import img4 from "../../../../assets/imgs/Img-4.jpg";

const Slide = () => {
  return (
    <div>
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
    </div>
  );
};

export default Slide;
