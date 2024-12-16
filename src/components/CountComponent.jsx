import React from 'react'
import { useTranslation } from 'react-i18next'
import productIcon from "../assets/box.png"
import orderIcon from "../assets/received.png"
import deliveryIcon from "../assets/delivery.png"
import teamIcon from "../assets/team.png"
import OrderBox from './OrderBox'

function CountComponent() {
    const {t} = useTranslation()
  return <>
          {/* main grid for all */}
          <div className='grid grid-cols-1 md:grid-cols-2  gap-5 items-start '>
           
           {/* count side */}
            <div className='flex flex-col gap-4 w-full'>
    
    
                {/* order  and shipping*/}
               <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5'>
                 <div className='bg-white py-4 px-2 rounded-lg border border-gray-50 flex items-center gap-x-10 justify-start'>
                   {/* #FFD164 */}
                  <div className='bg-[#ffd06415] p-2 rounded-lg border-gray-50'>
                    <img src={productIcon} alt={'products'}  className='w-10'/>
                  </div>
                    <div>
                      <h2 className='font-bold mb-2'>{t('total_products')}</h2>
                      <div className='flex items-baseline gap-1'>
                        <span className="font-medium text-primary text-md">100 </span>
                         <span className='text-[12px]'>  {t('count.products')}</span>
                      </div>
                    </div>
    
                 </div>
    
                 <div className='bg-white py-4 px-2 rounded-lg border border-gray-50 flex items-center gap-x-10 justify-start'>
                 {/* #33D8DD */}
                   <div className='bg-[#33D8DD15] p-2 rounded-lg border-gray-50'>
                   <img src={deliveryIcon} alt={'shipping'}  className='w-10'/>
                   </div>
                    <div>
                      <h2 className='font-bold mb-2'>{t('total_shipping')}</h2>
                      <div className='flex items-baseline gap-1'>
                        <span className="font-medium text-primary text-md">100 </span>
                         <span className='text-[12px]'>   {t('count.shipping')}</span>
                      </div>
                  </div>
                 </div>
               </div>
    
                {/* product and users */}
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5'>
                 <div className='bg-white py-4 px-2 rounded-lg border border-gray-50 flex items-center gap-x-10 justify-start'>
                 {/* #01B763 */}
                 <div className='bg-[#01b76215] p-2 rounded-lg border-gray-50'>
                 <img src={orderIcon} alt={'orders'}  className='w-10'/>
                </div>
                 <div>
                  <h2 className='font-bold mb-2'>{t('total_order')}</h2>
                  <div className='flex items-baseline gap-1'>
                        <span className="font-medium text-primary text-md">100 </span>
                         <span className='text-[12px]'>   {t('count.orders')}</span>
                      </div>
                 </div>
                 </div>
    
                
    
                  <div className='bg-white py-4 px-2 rounded-lg border border-gray-50 flex items-center gap-x-10 justify-start'>
                  {/* #095BDB */}
                  <div className='bg-[#095BDB15] p-2 rounded-lg border-gray-50'>
                <img src={teamIcon} alt={'teams'}  className='w-10'/>
                </div>
                 <div>
                  <h2 className='font-bold mb-2'>{t('total_users')}</h2>
                  <div className='flex items-baseline gap-1'>
                        <span className="font-medium text-primary text-md">100 </span>
                         <span className='text-[12px]'>    {t('count.users')}</span>
                      </div>
                 </div> 
                  </div>
    
               
                
            </div>
                
            </div>
          
          {/* order  side */}
            <div className='bg-white p-3 rounded-md w-full h-[200px]'>
             <OrderBox />
            </div>
          </div>
  </>
}

export default CountComponent