'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image';

interface Props {
    images: string[],
    title: string,
    classname?: string
}

export const ProductSlideShow = ({ images, title, classname }: Props) => {
    return (
        <div className={classname}>

            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    images.map((image) => 
                        <SwiperSlide>{Ima}</SwiperSlide>
                    )
                }
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    )
}
