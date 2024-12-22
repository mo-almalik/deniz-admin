import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../common/Header';
import SideBar from '../common/SideBar';
import { useSelector } from 'react-redux';

function Layout() {

  
  return (
    <>
      <div className="flex flex-col">

        <div className="flex flex-1">
          <div className="flex-none">
            <SideBar />
          </div>


          <main className="flex-1  bg-gray-50 overflow-y-scroll p-4 h-screen dark:bg-[#1B2431] dark:text-white ">
            <div className="flex-none mb-5">
              <Header />
            </div>
            <Outlet />
            
          </main>

        </div>
       
      </div>
    </>
  );
}

export default Layout;
