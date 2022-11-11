import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const YoutubeVideo = () => {
  return (
    <div>
      <Container>
      {/* <h1>Youtube Video!</h1> */}

      <div className="ratio ratio-16x9" style={{overFlow:"hidden"}}>
  <iframe src="https://www.youtube.com/embed/NCEznfGWxU4" title="sophera" allowfullscreen></iframe>
</div>
      </Container>
      

    </div>
  )
}

export default YoutubeVideo

{/* <iframe width="560" height="315"
 src="https://www.youtube.com/embed/NCEznfGWxU4"
 title="YouTube video player" frameborder="0" 
 allow="accelerometer; autoplay; 
 clipboard-write;
 encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}