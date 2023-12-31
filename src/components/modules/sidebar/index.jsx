import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink, useLocation, useRoutes } from 'react-router-dom';
import logo from '../../../assets/img/logo.png';

// * React icons
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { SlSettings } from 'react-icons/sl';
import { AiOutlineAppstore } from 'react-icons/ai';
import { RiBuilding3Line } from 'react-icons/ri';
import { useMediaQuery } from 'react-responsive';
import { MdMenu } from 'react-icons/md';

const Sidebar = () => {
	let isTabletMid = useMediaQuery({ query: '(max-width: 768px)' });
	const [open, setOpen] = useState(isTabletMid ? false : true);
	const [productMenuOpen, setProductMenuOpen] = useState(false);
	const [subMenuOpen, setSubMenuOpen] = useState(false);
	const sidebarRef = useRef();
	const { pathname } = useLocation();

	const Nav_animation = isTabletMid
		? {
				open: { x: 0, width: '16rem', transition: { damping: 40 } },
				closed: { x: -250, width: 0, transition: { damping: 40, delay: 0.15 } },
		  }
		: {
				open: { width: '16rem', transition: { damping: 40 } },
				closed: { width: '4rem', transition: { damping: 40 } },
		  };

	useEffect(() => {
		if (isTabletMid) {
			setOpen(false);
		} else {
			setOpen(true);
		}
	}, [isTabletMid]);

	useEffect(() => {
		isTabletMid && setOpen(false);
	}, [pathname]);

	return (
		<div>
			<div
				onClick={() => setOpen(false)}
				className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${open ? 'block' : 'hidden'}`}
			></div>
			<motion.div
				ref={sidebarRef}
				variants={Nav_animation}
				initial={{ x: isTabletMid ? -250 : 0 }}
				animate={open ? 'open' : 'closed'}
				className='bg-gray-800 text-gray shadow-xl z-[999] max-w-[16rem] w-[16rem] overflow-hidden md:relative fixed h-screen'
			>
				<div className='flex items-center gap-2.5 font-medium border-b py-3 border-slate-300 mx-3'>
					<img src={logo} alt='Logo' className='w-40' />
				</div>

				<div className='flex flex-col h-full'>
					<ul className='whitespace-pre px-2.5 text-[0.9rem] py-4 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 md:h-[68%] h-[70%]'>
						<li>
							<NavLink to={'/dashboard'} className='link'>
								<AiOutlineAppstore size={23} className='min-w-max' />
								Dashboard
							</NavLink>
						</li>

						{(open || isTabletMid) && (
							<div className='py-3 mt-3 border-t border-slate-300'>
								<small className='pl-3 text-slate-200 inline-block mb-2 uppercase'>Product</small>
								<div className='flex flex-col gap-1'>
									<li className='link' onClick={() => setProductMenuOpen(!productMenuOpen)}>
										<RiBuilding3Line size={23} className='min-w-max' />
										<p className='flex-1 capitalize'>Product</p>
										<IoIosArrowDown className={`${productMenuOpen && 'rotate-180'} duration-200`} />
									</li>
									<motion.ul
										animate={productMenuOpen ? { height: 'fit-content' } : { height: 0 }}
										className='flex h-0 flex-col pl-14 text-[0.8rem] font-normal overflow-hidden'
									>
										<li>
											<NavLink to={`/build/submenu1`} className='link !bg-transparent capitalize'>
												Add Product
											</NavLink>
										</li>
										<li>
											<NavLink to={`/build/submenu2`} className='link !bg-transparent capitalize'>
												List Product
											</NavLink>
										</li>
									</motion.ul>
								</div>
							</div>
						)}

						{(open || isTabletMid) && (
							<div className='border-t py-5 border-slate-300'>
								<small className='pl-3 text-slate-200 inline-block mb-2 uppercase'>Management</small>
								<div className='flex flex-col gap-1'>
									<li
										className={`link ${pathname.includes('build') && 'text-blue-600'}`}
										onClick={() => setSubMenuOpen(!subMenuOpen)}
									>
										<RiBuilding3Line size={23} className='min-w-max' />
										<p className='flex-1 capitalize text-slate-200'>BUILD</p>
										<IoIosArrowDown className={`${subMenuOpen && 'rotate-180'} duration-200`} />
									</li>
									<motion.ul
										animate={subMenuOpen ? { height: 'fit-content' } : { height: 0 }}
										className='flex h-0 flex-col pl-14 text-[0.8rem] font-normal overflow-hidden'
									>
										<li>
											<NavLink to={`/build/submenu1`} className='link !bg-transparent capitalize'>
												Sub Menu 1
											</NavLink>
										</li>
									</motion.ul>
								</div>
							</div>
						)}

						<li>
							<NavLink to={'/settings'} className='link'>
								<SlSettings size={23} className='min-w-max' />
								Settings
							</NavLink>
						</li>
					</ul>
				</div>

				<motion.div
					onClick={() => setOpen(!open)}
					animate={open ? { x: 0, y: 0, rotate: 0 } : { x: 0, y: 0, rotate: 180 }}
					transition={{ duration: 0 }}
					className='absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer'
				>
					<IoIosArrowBack size={25} className='text-white' />
				</motion.div>
			</motion.div>

			<div className='m-3 md:hidden' onClick={() => setOpen(true)}>
				<MdMenu size={25} />
			</div>
		</div>
	);
};

export default Sidebar;
