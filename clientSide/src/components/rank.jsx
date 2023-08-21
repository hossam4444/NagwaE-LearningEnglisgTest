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
