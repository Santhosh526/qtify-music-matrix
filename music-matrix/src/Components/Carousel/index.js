import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./carousel.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "../Card";


const Carousel = ({ data, navId }) => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={7}
        spaceBetween={30}
        navigation={{ nextEl: `.arrow-right-${navId}`, prevEl: `.arrow-left-${navId}` }}
        virtual
      >
        {data.map((cardData) => (
          <SwiperSlide>
            <Card
              key={cardData.id}
              imgSrc={cardData.image}
              label={cardData.title}
              followersCount={cardData.follows}
            />
          </SwiperSlide>
        ))}
  </Swiper>
        <div className={`arrow-left-${navId} arrow-left arrow`}><img src="/left.png" alt="left arrow" /></div>
        <div className={`arrow-right-${navId} arrow-right arrow`}><img src="/right.png" alt="right arrow" /></div>
    </div>
  );
}

export default Carousel;
