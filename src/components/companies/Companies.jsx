import React from 'react'
import '../companies/companies.css'
import AVATAR1 from '../../assets/ibm.png'
import AVATAR2 from '../../assets/cryptograph.png'
import AVATAR3 from '../../assets/valueC.png'
import AVATAR4 from '../../assets/maintec.jpg'

// Swiper JS STARTS
// Import Swiper React components
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

// Swiper JS ENDS
// ========================== //
// Creating Dyanamic data
const data = [
    {
        avatar: AVATAR1,
        name: 'IBM',
        Role: 'ETL Engineer',
    },
    {
        avatar: AVATAR2,
        name: 'Cryptograph Technologies',
        Role: 'Mainframe Engineer',
    },
    {
        avatar: AVATAR3,
        name: 'Value C',
        Role: 'Data Analyst',
    },
    {
        avatar: AVATAR4,
        name: 'Maintec India Pvt., LTD.,',
        Role: 'Mainframe Engineer',
    },
]
// ENDS dynamic Data

const Companies = () => {
  return (
    <section id='company'>
        <h5>Clients Supported</h5>
        <h2>Companies</h2>

        <Swiper className="container company__container"
        // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}            
            pagination={{ clickable: true }}
        >
            {
                data.map(({avatar, name, Role}, index) =>{
                    return (
                        <SwiperSlide key= {index} className='companies'>
                            <div className="client__avatar">
                                <img src={avatar} alt="ibm" />                    
                            </div>
                            <h5 className='companies__name'>{name}</h5>
                            <small className='companies__role'>{Role}</small>
                        </SwiperSlide>
                    )
                })
            }            
        </Swiper>
    </section>
  )
}

export default Companies