import React from 'react';

const Home = () => {
  return (
    <>
      <section className='py-0 bg-[#f2f0f1] '>
        <div className="container overflow-hidden ">
          <div className='grid grid-cols-1 md:grid-cols-2 md:h-[600px] lg:h-[700px] xl:h-[800px]'>
            {/* HERO CONTENT */}
            <div className='w-full py-5 md:h-full overflow-hidden flex items-center justify-start'>
              <div>
                  <h1 className='font-[900] uppercase text-[44px] leading-[54px] md:text-[44px] md:leading-[50px] lg:text-[64px] lg:leading-[65px] xl:text-[70px] xl:leading-[75px] 2xl:text-[80px] 2xl:leading-[79px] mb-2'>Find clothes that matches your style</h1>

                  <p className='text-gray-700 text-[16px] leading-5 xl:text-[20px] xl:leading-6 mb-4'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>

                  <div className='w-full sm:w-[200px] bg-black rounded-[50px] mb-4'>
                    <button className='w-full h-full py-3 text-gray-200'>Shop Now</button>
                  </div>

                  <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='pl-2'>
                      <h2 className='text-[24px] font-[700] md:text-[28px] lg:text-[32px] xl:text-[34px]'>200+</h2>
                      <p className='text-gray-700 text-[14px] leading-5 xl:text-[16px] xl:leading-6'>International Brands</p>
                    </div>
                    <div className='pl-2'>
                      <h2 className='text-[24px] font-[700] md:text-[28px] lg:text-[32px] xl:text-[34px]'>2000+</h2>
                      <p className='text-gray-700 text-[14px] leading-5 xl:text-[16px] xl:leading-6'>High-quality Products</p>
                    </div>
                    <div className='pl-2'>
                      <h2 className='text-[24px] font-[700] md:text-[28px] lg:text-[32px] xl:text-[34px]'>30,000+</h2>
                      <p className='text-gray-700 text-[14px] leading-5 xl:text-[16px] xl:leading-6'>Happy Customers</p>
                    </div>
                  </div>
              </div>
            </div>
            {/* HERO CONTENT END */}

            {/* HERO IMG START */}
            <div className='w-full h-[450px] md:h-full overflow-hidden'>
              <figure className='w-full h-full'>
                <img src="/images/banner.jpeg" alt="" className='w-full h-full object-cover object-top'/>
              </figure>
            </div>
            {/* HERO IMG END */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
