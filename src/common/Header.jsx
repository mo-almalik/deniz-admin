import React, { useEffect } from 'react'
import { LuMenu } from 'react-icons/lu'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../features/sidebar/sidebarSliec';
import LanguageSelector from '../components/LanguageSelector';
import { HiLogout, HiMoon } from 'react-icons/hi';
import { toggleTheme } from '../features/theme/themeSlice';

function Header() {
  const themeMode = useSelector((state) => state.theme.mode);

  const dispatch = useDispatch()


  const handleToggle = () => {
    dispatch(toggleSidebar())
  }
  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);
  return <>
    <header
      style={{ background: themeMode === "light" ? "#fff" : "#273142" }}
      className='bg-white px-4 py-3 rounded-md '>
      <div className='flex justify-between items-center'>
        <div className='flex  gap-x-5 items-center'>

          <button className='border border-gray-300 p-2 rounded-lg cursor-pointer ' onClick={handleToggle} >
            <LuMenu size={20} className='dark:text-white ' />
          </button>
        </div>
        <div className='flex  gap-x-2 items-center justify-end'>
          <LanguageSelector />
          <button onClick={() => dispatch(toggleTheme())} className=' p-2 rounded-lg border border-gray-300  hover:bg-gray-100 dark:hover:bg-gray-400 '>
            <HiMoon className={"dark:text-white"} />
          </button>
          <button className='p-2 rounded-lg border border-gray-300  hover:bg-gray-100 dark:hover:bg-gray-400 '>
            <HiLogout className='dark:text-white rtl:rotate-180' />
          </button>

        </div>
      </div>
    </header>
  </>
}

export default Header