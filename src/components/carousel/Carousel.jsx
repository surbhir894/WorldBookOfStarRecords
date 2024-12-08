// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";
import slide4 from "../../assets/images/slide4.jpg";
import FAQ from "../faq/FAQ";
import ContactUs from "../contact/ContactForm";

export default function Carousel() {
  return (
    <div className="mt-24"> {/* Adjust margin to start below the navbar */}
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        className="w-full"
        breakpoints={{
          // Define responsive breakpoints
          320: {    // Mobile devices (small screens)
            slidesPerView: 1,
            spaceBetween: 10,
            height: 300,
          },
          640: {    // Tablets and small desktops
            slidesPerView: 1,
            spaceBetween: 20,
            height: 400,
          },
          768: {    // Medium desktops
            slidesPerView: 1,
            spaceBetween: 30,
            height: 500,
          },
          1024: {   // Large desktops
            slidesPerView: 1,
            spaceBetween: 40,
            height: 600,
          },
          1280: {   // Extra large desktops
            slidesPerView: 1,
            spaceBetween: 50,
            height: 700,
          },
        }}
      >
        <SwiperSlide>
          <img src={slide1} alt="Slide 1" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="Slide 2" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="Slide 3" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="Slide 4" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
      <div>
 <FAQ/>
    </div>
    <div>
 <ContactUs/>
    </div>
    </div>
    
     
  );
}
