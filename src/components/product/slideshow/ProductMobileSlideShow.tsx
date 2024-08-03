'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper as SwiperObject } from 'swiper'

import './styles.css'
import { useState } from 'react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';

interface Props {
    images: string[],
    title: string,
    classname?: string
}

export const ProductMobileSlideShow = ({ images, title, classname }: Props) => {

    return (
        <div className={classname}>
            <Swiper
                style={{
                    height: '500px'
                }
                }
                navigation={true}
                autoplay={{
                    delay: 2500,
                }}
                modules={[FreeMode, Navigation, Autoplay, Navigation]}
                className="mySwiper2"
            >
                {
                    images.map((image) =>
                        <SwiperSlide key={image}>
                            <Image
                                width={500}
                                height={300}
                                src={`/products/${image}`}
                                alt={title}
                                className='object-fill'
                            />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div >
    )
}
