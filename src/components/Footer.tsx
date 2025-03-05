
import Image from 'next/image';
import logo from '../../public/assets/logo.svg'
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='bg-[#151515] lg:p-10 p-4 lg:container mx-auto gap-20 text-white grid grid-cols-2 lg:grid-cols-4'>
            <div className='flex flex-col gap-4'>
                <Image src={logo} width={50} height={30} alt='logo'/>
                <p className='text-gray-100'>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                <div className='flex item-center gap-2'>
                    <i className='bg-gray-800 rounded-full text-white p-3 cursor-pointer'><FaGoogle/></i>
                    <i className='bg-gray-800 rounded-full text-white p-3 cursor-pointer'><FaTwitter/></i>
                    <i className='bg-gray-800 rounded-full text-white p-3 cursor-pointer'><FaInstagram/></i>
                    <i className='bg-gray-800 rounded-full text-white p-3 cursor-pointer'><FaLinkedin/></i>
                </div>
            </div>
            <div>
                <ul className='space-y-3'>
                    <li className='font-bold text-xl mb-8'>About</li>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>Service</li>
                    <li className='cursor-pointer'>Contact</li>
                </ul>
            </div>
            <div>
                <ul className='space-y-3'>
                    <li className='font-bold text-xl mb-8'>Company</li>
                    <li className='cursor-pointer'>Why car doctor</li>
                    <li className='cursor-pointer'>About</li>
                </ul>
            </div>
            <div>
                <ul className='space-y-3'>
                    <li className='font-bold text-xl mb-8'>Support</li>
                    <li className='cursor-pointer'>Support Center</li>
                    <li className='cursor-pointer'>Feedback</li>
                    <li className='cursor-pointer'>Accesablity</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;