// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';

// const Rank = ({ score }) => {
//   // Hooks
//   const [rank, setRank] = useState(0);
//   const navigate = useNavigate();
//   //redirect Function
//   const redirectTo = (url) => {
//     navigate(url);
//   };
//   // Sending Post Request With Score to get the rank
//   useEffect(() => {
//     axios
//       .post('http://localhost:3000/rank', { finalScore: score })
//       .then(({ data }) => setRank(data.rank));
//   }, [score]);
//   return (
//     <>
//       <div style={{ fontSize: '3rem' }}>
//         <h1>
//           Your Rank is <span style={{ color: 'yellow' }}>{rank}%</span>
//         </h1>
//       </div>
//       <div>
//         <button
//           type='button'
//           className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
//           onClick={() => redirectTo('/test')}
//         >
//           Try Again
//         </button>
//       </div>
//     </>
//   );
// };

// Rank.propTypes = {
//   score: PropTypes.any.isRequired,
// };
// export default Rank;

import axios from 'axios';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Rank = ({ score }) => {
  const [rank, setRank] = useState(0);
  const navigate = useNavigate();

  const redirectTo = (url) => {
    navigate(url);
  };

  useEffect(() => {
    axios
      .post('http://localhost:3000/rank', { finalScore: score })
      .then(({ data }) => setRank(data.rank));
  }, [score]);

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-6xl font-semibold mb-6'>
        Your Rank is <span className='text-gray-600 font-bold	'>{rank}%</span>
      </h1>
      <button
        type='button'
        className='text-white bg-[#3f51b5] cursor-pointer text-2xl border-none font-medium rounded-lg px-6 py-3'
        onClick={() => redirectTo('/test')}
      >
        Try Again
      </button>
    </div>
  );
};

Rank.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Rank;
