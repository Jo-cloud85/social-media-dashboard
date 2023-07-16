import React from 'react'
import up from '../images/icon-up.svg'
import down from '../images/icon-down.svg'
import socialMediaData from '../followers-data.json';
import { formatNumber, platformImages } from '../helper.js';

const Followers = () => {

  return (
    <>
      <div className='py-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
        {socialMediaData.map((fData, index) => (
          <div 
            key={index} 
            className={`bg-slate-200 dark:bg-slate-800 p-5 rounded-b-lg shadow shadow-slate-50 dark:shadow-slate-700 border-t-4 ${fData.platform.toLowerCase()}`}>
            
            <ul className='flex items-center justify-center text-center'>
              <li>
                <img src={platformImages[fData.platform]} alt={fData.platform} className='mr-2'/>
              </li>
              <li className='text-sm text-slate-600 font-bold dark:text-slate-400'>
                {fData.username}
              </li>
            </ul>
            <h2 className='text-5xl font-bold text-slate-800 dark:text-white text-center my-5'>
              {formatNumber(fData.followers)}
              <span className='text-sm block text-slate-600 dark:text-slate-400 font-normal uppercase tracking-widest'>
                {fData.followerText}
              </span>
            </h2>
            <p className={`text-sm text-center ${fData.today < 0 ? 'text-rose-600' : 'text-emerald-600'} flex items-center justify-center font-bold`}>
              {fData.today < 0 ? (
                <img src={down} alt='Down Icon' className='mr-2 w-3' />
              ) : (
                <img src={up} alt='Up Icon' className='mr-2 w-3' />
              )}
              {Math.abs(fData.today)} today
            </p>
            
          </div>
        ))}
      </div>
    </>
  )
}

export default Followers