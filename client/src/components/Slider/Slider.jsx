import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Slider = () => {
  return (
    <div className="container flex w-full m-10">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <a href="https://mammolog.com.ua">
            <img src="./images/mammolog.png" alt="mammolog" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://lazersvit.com">
            <img src="./images/lazersvit.png" alt="lazersvit" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://ispace.news">
            <img src="./images/ispace.png" alt="ispace" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://art-marks.com">
            <img src="./images/art-marks.png" alt="art-marks" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.magazin-shashlyka.com.ua">
            <img src="./images/magazin-shashlyka.png" alt="magazin-shashlyka" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://tofa-dadashev.com">
            <img src="./images/tofa-dadashev.png" alt="tofa-dadashev" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://selera.systems">
            <img src="./images/selera.png" alt="selera" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="http://acmd.artyshok.studio">
            <img src="./images/acmd.png" alt="acmd" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
