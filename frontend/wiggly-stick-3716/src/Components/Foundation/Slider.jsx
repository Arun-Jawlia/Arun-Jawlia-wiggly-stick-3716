import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
// import SlideShow from "./SlideShow";
import "./Slider.css";
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
import { useSelector } from "react-redux";


//     </>

//   )
// }

// export default Slider;
function Slider({slides}) {
 //   let Data = JSON.parse(localStorage.getItem("showdata"));
    //console.log(Data)
    const product = useSelector((state) => state.singleData);
    console.log(product.image1);
 
  
    //const [showData, setShowData] = useState(data);
    const [current, setCurrent] = useState(0);
    const [slideData, setSlideData] = useState([
      { image: product.image1 },
      { image: product.image2},
     
    ]);
//  const length = slides.length;
 console.log(slideData)
  const [length]=useState(slides.length)
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
      <ChevronLeftIcon
        className="left-arrow"
        onClick={prevSlide}
        color="rgb(255,51,153)"
        boxSize={10}
        w={10}
        h={10}
      />
      <ChevronRightIcon
        className="right-arrow"
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
                <img src={data.image} alt="" className="image" />
                <p>{data.desc}</p>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
}
export default Slider;
