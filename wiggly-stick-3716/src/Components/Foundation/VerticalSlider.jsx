import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon } from "@chakra-ui/icons";
// import SlideShow from "./SlideShow";

import "./VerticalSlider.css"
// import { useState } from "react";
// function Slider(){
//   const [current,setCurrent]=useState(0);
//   const lenght=slides.length;
//   return(
//     <>
//     <div className="main-div">
//     <ChevronLeftIcon/>
//     <SlideShow/>
//     <ChevronRightIcon/>
//    </div>

import { useState } from "react";

//     </>

//   )
// }

// export default Slider;
function VerticalSlider({ slides }) {
  let Data = JSON.parse(localStorage.getItem("showdata"));
  //console.log(Data)
  let data = {
    id: "105",
    path: "SEPHORA / Sephora Collection / Makeup / Face Makeup / ",
    cur: "Face Foundation Cream",
    title: "Matte Perfection Powder Foundation - 21 Petal",
    offerType: "OFFER",
    brand: "SEPHORA COLLECTION",
    image1:
      "https://cdn07.nnnow.com/web-images/large/styles/5CC4W2M4YQC/1551249758723/1.jpg",
    image2:
      "https://cdn13.nnnow.com/web-images/large/styles/5CC4W2M4YQC/1617175487045/2.jpg",

    color: ["rgb(224,183,146)", "rgb(204,167,127)"],
    size: ["7.5 gm"],
    price: 1500,
  };

  const [showData, setShowData] = useState(data);
  const [current, setCurrent] = useState(0);
  const [slideData, setSlideData] = useState([
    { image: showData.image1 },
    { image: showData.image2 },
  ]);
  // const length = slides.length;
  console.log(slideData);
  const [length] = useState(slides.length);
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);

  return (
    <section className="slider">
      <ChevronDownIcon
        className="top-arrow"
        onClick={prevSlide}
        color="rgb(255,51,153)"
        boxSize={10}
        w={10}
        h={10}
      />
      <ChevronUpIcon
        className="bottom-arrow"
        onClick={nextSlide}
        color="rgb(255,51,153)"
        boxSize={10}
        w={10}
        h={10}
      />

      {slideData.map((data, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index == current && (
              <>
                <img src={data.image} alt="" className="image-vert" />
                <p>{data.desc}</p>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
}
export default VerticalSlider;
