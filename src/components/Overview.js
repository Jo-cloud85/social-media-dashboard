import React from 'react'
import up from '../images/icon-up.svg'
import down from '../images/icon-down.svg'
import socialMediaData from '../followers-data.json';
import { formatNumber, platformImages } from '../helper.js';

const Overview = () => {

  return (
    <>
      <h2 className='text-slate-600 dark:text-white text-3xl font-bold mt-8 md:text-3xl'>Overview - Today</h2>

      <section className='py-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-rows-2 lg:grid-flow-col'>
        {socialMediaData.map((data, index) => ( 
          <article key={index} className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
            {['views', 'likes'].map((type) => (
              <article 
                key={type} 
                className={`bg-slate-200 dark:bg-slate-800 p-5 rounded-b-lg shadow shadow-slate-50 dark:shadow-slate-700 border-t-4 ${data.platform.toLowerCase()}`}>
                <ul className='flex items-center justify-between mb-5'>
                  <li className='text-slate-600 dark:text-slate-400 font-bold'>
                    {data[`${type}Text`]}
                  </li>
                  <li>
                    <img src={platformImages[data.platform]} alt={data.platform}/>
                  </li>
                </ul>
                <ul className='flex items-center justify-between'>
                  <li className='font-bold text-slate-800 dark:text-white text-4xl'>{formatNumber(data[type])}</li>
                  <li className={`flex items-center ${data[`${type}PercentChange`] < 0 ? 'text-rose-600' : 'text-emerald-600'} font-bold text-sm`}>
                    {data[`${type}PercentChange`] < 0 ? (
                      <img src={down} alt='Down Icon' className='mr-2 w-3' />
                    ) : (
                      <img src={up} alt='Up Icon' className='mr-2 w-3' />
                    )}
                    {Math.abs(data[`${type}PercentChange`])} %
                  </li>
                </ul>
              </article>
            ))}
          </article>
        ))}
      </section>
    </>
    
  )
}

export default Overview