import { Link } from 'react-router-dom';
import Image from '../assets/mask.png';

const Intro = () => {
  return (
    <div className='flex items-center justify-around flex-wrap w-95 bg-opacity-20 bg-white backdrop-blur-lg rounded-lg p-6 shadow-lg m-5 border border-sky-500'>
      <div>
        <h1 className='font-cursive text-2xl'>
          Let us test Your English Skills
        </h1>
        <h2>
          <Link
            to='/test'
            className='text-[#9c27b0] hover:text-[#673ab7] focus:outline-none focus:ring-2 focus:ring-blue-400 '
          >
            Go to The Test
          </Link>
        </h2>
      </div>
      <div>
        <img src={Image} alt='Mask' width='400' height='400' />
      </div>
    </div>
  );
};

export default Intro;
