'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function DashboardSidebar() {
  const currentPath = usePathname();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleLinkClick = () => {
    setOpen(false);
  };
  return (
    <>
      {open ? (
        <>
          <section
            className={`
    bg-gradient-to-br from-gray-800 to-gray-900 inset-0 z-50 transition-transform duration-300 
    ${
      open
        ? 'w-full h-screen mt-24 lg:block hidden'
        : 'block h-full transition-all fixed top-0 w-8/12 left-0 md:hidden lg:hidden'
    }
  `}
          >
            <div className='relative border-b border-white/20'>
              <div className='flex items-center gap-4 py-6 px-8'>
                <h6 className='block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white'>
                  Admin Dashboard
                </h6>
              </div>
              <button
                className='middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 h-12 rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden'
                type='button'
                onClick={handleLinkClick}
              >
                <span className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='2.5'
                    stroke='currentColor'
                    aria-hidden='true'
                    className='h-5 w-5 text-white'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    ></path>
                  </svg>
                </span>
              </button>
            </div>

            <div className='m-4'>
              <ul className='mb-4 flex flex-col gap-1'>
                {data.map((data: any) => {
                  return (
                    <li key={data.id}>
                      <Link href={data.url}>
                        <button
                          className={`
            middle none font-sans py-3 mb-1 font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize
            ${currentPath === data.url ? 'bg-blue-500' : ''}
          `}
                          type='button'
                        >
                          <p className='block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize'>
                            {data.title}
                          </p>
                        </button>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </>
      ) : (
        <>
          <section
            className={`
    bg-gradient-to-br from-gray-800 to-gray-900 inset-0 z-50 transition-transform duration-300 
    ${
      open
        ? 'w-full h-screen mt-24 lg:block hidden'
        : 'block h-full transition-all fixed top-0 w-8/12 left-0 md:hidden lg:hidden'
    }
  `}
          >
            <div className='relative border-b border-white/20'>
              <div className='flex items-center gap-4 py-6 px-8'>
                <h6 className='block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white'>
                  Admin Dashboard
                </h6>
              </div>
              <button
                className='middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 h-12 rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden'
                type='button'
                onClick={handleLinkClick}
              >
                <span className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='2.5'
                    stroke='currentColor'
                    aria-hidden='true'
                    className='h-5 w-5 text-white'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    ></path>
                  </svg>
                </span>
              </button>
            </div>

            <div className='m-4'>
              <ul className='mb-4 flex flex-col gap-1'>
                {data.map((data: any) => {
                  return (
                    <li key={data.id}>
                      <Link href={data.url}>
                        <button
                          className={`
                        middle none   py-3 mb-1  center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize
                        ${currentPath === data.url ? 'bg-blue-500' : ''}
                      `}
                          type='button'
                          onClick={() => setOpen(!open)}
                        >
                          <p className='block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize'>
                            {data.title}
                          </p>
                        </button>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </>
      )}

      <button
        onClick={handleClick}
        className='fixed top-20 right-0 lg:hidden block p-2 rounded-md bg-indigo-500 text-sm'
      >
        {open ? (
          <>
            <svg
              width='35px'
              height='35px'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
            >
              <path
                stroke='#fff'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6H20M4 12H20M4 18H20'
              />
            </svg>
          </>
        ) : (
          <>
            <span>close</span>
          </>
        )}
      </button>
    </>
  );
}

const data = [
  {
    id: 0,
    title: 'Dashboard',
    url: '/dashboard/',
  },
  {
    id: 1,
    title: 'Add Books',
    url: '/dashboard/addbooks/',
  },
  {
    id: 2,
    title: 'Add Heading 1',
    url: '/dashboard/heading1/',
  },
  {
    id: 3,
    title: 'Add Heading 2',
    url: '/dashboard/heading2/',
  },
  {
    id: 4,
    title: 'Add Mcqs',
    url: '/dashboard/addmcqs/',
  },
  // {
  //   id: 5,
  //   title: "Add Keywords",
  //   url: "/dashboard/keyword/",
  // },
  {
    id: 6,
    title: 'Comments',
    url: '/dashboard/comment/',
  },
  {
    id: 7,
    title: 'Newsletter',
    url: '/dashboard/newsletter/',
  },
];
