import React, { useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../style/swiperStyle.css';

function Slider() {
  const swiperRef = useRef(null);

  const goToPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div>
      <div className='popular-d'>
        <div>
          <h2 className="popular inter-extra-bold">POPULAR THIS WEEK</h2>
        </div>
        <div className='circles'>
          <div className='circle-left' onClick={goToPrev}>
            <FontAwesomeIcon icon="fa-regular fa-circle" size="2xl" />
            <FontAwesomeIcon icon="fa-solid fa-chevron-left" size="xl" />
          </div>
          <div className='circle-right' onClick={goToNext}>
            <FontAwesomeIcon icon="fa-regular fa-circle" size="2xl" />
            <FontAwesomeIcon icon="fa-solid fa-chevron-right" size="xl" />
          </div>
        </div>
      </div>

      <Swiper
        ref={swiperRef}
        slidesPerView={5}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/img/Br-Ba.png" alt="Br-Ba" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/Rain.png" alt="Rain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/Year.png" alt="Year" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/Money.png" alt="Money" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/Squid.png" alt="Squid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/Br-Ba.png" alt="Br-Ba" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/Rain.png" alt="Rain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/Year.png" alt="Year" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/Money.png" alt="Money" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/Squid.png" alt="Squid" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
