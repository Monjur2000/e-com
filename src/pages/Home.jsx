import React from 'react'


const Home = () => {
  return (
    <>
      <section className='2xl:h-[800px] py-0  bg-[#f2f0f1]'>
        <div className="container">
          <div className='grid grid-cols-1 md:grid-cols-2  min-h-[60vh] sm:min-h-[70vh]  md:min-h-[80vh] lg:min-h-[90vh] xl:min-h-screen '>
            {/* HERO SECTION CONTENT START */}
            <div className='w-[100%] h-full flex items-center py-[30px]'> 
              <div>
                <h1 className='text-[36px] leading-[37px] md:text-[54px] md:leading-[55px] lg:text-[67px] font-[900] uppercase lg:leading-[64px] mb-2'>Find clothes that matches your style</h1>
                <p className='text-[14px] text-gray-600 mb-4'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style</p>
                <div className='mb-4'>
                  <button className=' bg-black text-gray-200 px-9 py-3 rounded-[50px]'>Shop Now</button>
                </div>
                <div className='grid sm:grid-cols-3 md:grid-cols-2  lg:grid-cols-3'>
                  <div className='px-2'>
                    <h2 className='text-[24px] md:text-[34px] lg:text-[44px] font-[700]'>200+</h2>
                    <p className='text-[14px] text-gray-600'>International Brands</p>
                  </div>
                  <div className='px-2'>
                    <h2 className='text-[24px] md:text-[34px] lg:text-[44px] font-[700]'>2000+</h2>
                    <p className='text-[14px] text-gray-600'>High-quality Products</p>
                  </div>
                  <div className='px-2'>
                    <h2 className='text-[24px] md:text-[34px] lg:text-[44px] font-[700]'>30,000+</h2>
                    <p className='text-[14px] text-gray-600'>Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
            {/* HERO SECTION CONTENT END h*/}

            {/* HERO SECTION IMG START */}
            <div className='w-[100%] h-[70vh] sm:h-[90vh]  md:h-full lg:h-[92vh] xl:h-screen'>
              <figure className='w-full h-full'>
                <img src="/images/banner.jpeg" alt="" className='w-full h-full object-cover object-top' />
              </figure>
            </div>
            {/* HERO SECTION IMG END */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home