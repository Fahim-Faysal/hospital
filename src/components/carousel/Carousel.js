import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import './Carousel.css'

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from 'swiper'

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Autoplay])

export default function Carousel() {
      return (
            <div>
                  <Swiper
                        effect={'coverflow'}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        grabCursor={true}
                        loop={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                              rotate: 50,
                              stretch: 0,
                              depth: 100,
                              modifier: 1,
                              slideShadows: true,
                        }}
                        pagination={true}
                        className='mySwiper'
                  >
                        <SwiperSlide>
                              <img
                                    src='https://st2.depositphotos.com/1028911/7301/i/600/depositphotos_73011163-stock-photo-various-medical-equipment-isolated-on.jpg'
                                    alt=''
                              />

                        </SwiperSlide>
                        <SwiperSlide>
                              <img
                                    src='https://tj-web-prod.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2018/08/Hospital-Software_feature.png'
                                    alt=''
                              />
                        </SwiperSlide>
                        <SwiperSlide>
                              <img
                                    src='https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4='
                                    alt=''
                              />
                        </SwiperSlide>
                        <SwiperSlide>
                              <img
                                    src='https://images.indianexpress.com/2020/05/antibody-7.jpg'
                                    alt=''
                              />
                        </SwiperSlide>
                        <SwiperSlide>
                              <img
                                    src='https://5.imimg.com/data5/SELLER/Default/2021/3/JE/TN/MW/4917623/digital-x-ray-imaging-machine-500x500.png'
                                    alt=''
                              />
                        </SwiperSlide>
                        <SwiperSlide>
                              <img
                                    src='https://thefinancialexpress.com.bd/uploads/1641616914.jpg'
                                    alt=''
                              />
                        </SwiperSlide>

                        <SwiperSlide>
                              <img
                                    src='https://armsit.com/wp-content/uploads/2022/01/hospital-banner-1.jpg'
                                    alt=''
                              />
                        </SwiperSlide>
                        <SwiperSlide>
                              <img
                                    src='https://daynightcarebd.com/wp-content/uploads/2021/02/Medical-Equipment-Suppliers-in-Bangladesh-1.jpg'
                                    alt=''
                              />
                        </SwiperSlide>
                  </Swiper>
            </div>
      )
}
