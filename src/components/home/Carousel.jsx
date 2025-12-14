import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import { Link } from 'react-router-dom'
import Button from '../common/Button'
import { carouselSlides } from '../../data/carouselSlides'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import './Carousel.css'

function Carousel() {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        loop={true}
        speed={800}
        className="home-carousel"
      >
        {carouselSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="carousel-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="carousel-overlay">
                <div className="container">
                  <div className="carousel-content">
                    <h1>{slide.title}</h1>
                    <p>{slide.description}</p>
                    <Link to={slide.cta.link}>
                      <Button variant="primary">{slide.cta.text}</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel
