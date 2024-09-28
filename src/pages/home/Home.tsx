import { useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { swiper } from "../../assets/swiper";
import s from "./Home.module.scss";
import "swiper/css";
import Button from "../../components/Button/Button";
import ArrowBottom from "../../assets/svgs/ArrowBottom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const swiperRef = useRef<SwiperRef | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className={s.wrapper}>
      <div className={s.title}>Motion Capture App</div>
      <div className={s.content}>
        <div className={s.sliderWrapper}>
          <div className={s.label}>Slider example:</div>
          <div className={s.sliderContainer}>
            <Swiper
              ref={swiperRef}
              className={s.slider}
              spaceBetween={50}
              slidesPerView={1}
              loop
              onSlideChange={(swiper) => setActiveSlideIndex(swiper.realIndex)}
            >
              {swiper.map((swipe) => (
                <SwiperSlide
                  key={swipe.id}
                  className={s.slide}
                >
                  <img
                    className={s.img}
                    src={swipe.img}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={s.buttons}>
              <Button
                size="lg"
                category="outline"
                id="home_swiperLeft"
                icon={<ArrowBottom style={{ rotate: "90deg" }} />}
                onClick={() => swiperRef.current?.swiper.slidePrev()}
              />
              <div className={s.counter}>
                Slide: {activeSlideIndex + 1} of {swiper.length}
              </div>
              <Button
                size="lg"
                category="outline"
                id="home_swiperRight"
                icon={<ArrowBottom style={{ rotate: "-90deg" }} />}
                onClick={() => swiperRef.current?.swiper.slideNext()}
              />
            </div>
          </div>
        </div>
        <div className={s.text}>
          <div className={s.label}>Description:</div>
          <p>
            This application demonstrates how you can interact with a web page
            using hand motion capture. It allows users to use hover effects on
            elements, as well as click on active elements using hand gestures.
            The app recognizes certain gestures, such as hand waves, to perform
            on-page actions such as scrolling, back and forth navigation, and
            page reload. This shows the potential of using computer vision and
            gestures to enable more intuitive and touchless interactions with
            web interfaces.
          </p>
          <br />
          <div className={s.label}>Check the tutorial:</div>
          <Button
            size="lg"
            category="outline"
            id="home_goTutorial"
            text="Go to tutorial"
            onClick={() => navigate("/tutorial")}
          />
        </div>
      </div>
      <div className={s.additional}>
        <div className={s.label}>Check another pages:</div>
        <div className={s.buttons}>
          <Button
            size="lg"
            category="secondary"
            id="home_goPosts"
            text="Go to posts"
            onClick={() => navigate("/posts")}
          />
          <Button
            size="lg"
            category="secondary"
            id="home_goLikes"
            text="Go to likes"
            onClick={() => navigate("/likes")}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
