import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
const Swiperr = ({
  user,
  children,
  navigation,
  pagination,
  slidesPerView,
  spaceBetween,
}) => {
  const cloneitems =
    user.length > 0
      ? user.map((el) => (
          <SwiperSlide key={user.id}>
            {React.cloneElement(children, { item: el, key: el.id })}
          </SwiperSlide>
        ))
      : [];
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={spaceBetween ? spaceBetween : 50}
      slidesPerView={slidesPerView ? slidesPerView : 3}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      pagination={pagination ? pagination : false}
      navigation={navigation ? navigation : false}
    >
      
      {cloneitems}
    </Swiper>
  );
};

export default Swiperr;
