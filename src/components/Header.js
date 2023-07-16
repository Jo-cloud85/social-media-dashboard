import { useState, useEffect } from 'react';
import socialMediaData from '../followers-data.json';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    const body = document.querySelector('body');
    //ternary operator
    (darkMode) ? body.classList.add('dark') : body.classList.remove('dark') 
  }, [darkMode]);


  const totalFollowers = socialMediaData.reduce((accumulator, data) => {
    if (data.hasOwnProperty('followers')) {
      return accumulator + data.followers;
    } else {
      return accumulator;
    }
  }, 0);


  return (
    <>
      <section className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-bold text-3xl md:text-4xl text-slate-800 dark:text-white">Social Media Dashboard</h1>
          <p className="text-slate-600 font-bold dark:text-slate-400">Total Followers: {totalFollowers}</p>
        </div>

        {/* Toggle */}
        <div className="toggle flex items-center justify-between mt-6 md:mt-0 gap-4">
          <label htmlFor="switch" className="font-bold text-slate-600 dark:text-slate-400 cursor-pointer">Dark Mode</label>
          <label className="switch">
            <input type="checkbox" defaultChecked={darkMode} onClick={toggleTheme} />
            <span className="slider"></span>
          </label>
        </div>
      </section>
    </>
  );
};

export default Header;