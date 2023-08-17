import axios from 'axios';
import { Progress, Button } from 'antd';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Test = ({ testData, scoreHandling }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [result, setResult] = useState(false);
  const [currentPercent, setCurrentPercent] = useState(0);
  const [score, setScore] = useState(0);
  const [, setAnswer] = useState('');

  const navigate = useNavigate();

  const nextHandling = () => {
    if (currentIndex < testData.length - 1) {
      setResult(false);
      setCurrentIndex(currentIndex + 1);
      setDisabled(false);
      setCurrentPercent((currentIndex + 1) * 10);
    } else {
      setCurrentPercent(100);
    }
  };

  const submitAnswer = (e) => {
    setDisabled(true);
    axios
      .post('http://localhost:3000/words', {
        answer: e,
        wordId: testData[currentIndex].id,
      })
      .then(({ data }) => {
        setAnswer(data);
        if (data === 'Correct') {
          setScore(score + 10);
          setResult(true);
        }
      });
  };

  useEffect(() => {
    if (currentPercent === 100) {
      scoreHandling(score);
      navigate('/rank');
    }
  }, [currentPercent, navigate, score, scoreHandling]);

  return (
    <div className='bg-white rounded-lg shadow-md p-6'>
      <h1 className='text-2xl font-semibold mb-4'>English Test</h1>
      <p className='text-gray-600 mb-6'>
        What{' '}
        <a
          href='https://en.wikipedia.org/wiki/Part_of_speech'
          target='_blank'
          rel='noopener noreferrer'
        >
          Grammatical Category
        </a>
        This Word Belongs To?
      </p>

      <div className='mb-4 relative'>
        <p className='font-bold text-2xl mb-12'>
          {currentPercent !== 100 && testData[currentIndex].word}
        </p>
        {disabled && currentPercent !== 100 && (
          <div className=' absolute	top-10 left-1/2 translate-x-[-50%]'>
            {result ? (
              <span className='text-green-600 text-lg'>Correct</span>
            ) : (
              <span className='text-red-600 text-lg'>Wrong</span>
            )}
          </div>
        )}
      </div>

      <div className='flex flex-wrap gap-2 justify-center	'>
        <button
          className='text-base rounded-lg px-5 py-2.5 mr-2 mb-2 text-white bg-blue-500 hover:bg-blue-600 border-none cursor-pointer'
          value='noun'
          onClick={() => submitAnswer('noun')}
          disabled={disabled}
        >
          Noun
        </button>

        <button
          type='button'
          className='text-base rounded-lg px-5 py-2.5 mr-2 mb-2 text-white bg-green-500 hover:bg-green-600 border-none cursor-pointer'
          value='verb'
          onClick={() => submitAnswer('verb')}
          disabled={disabled}
        >
          verb
        </button>

        <button
          type='button'
          className='text-base rounded-lg px-5 py-2.5 mr-2 mb-2 text-white bg-pink-500 hover:bg-pink-600 border-none cursor-pointer'
          value='adjective'
          onClick={() => submitAnswer('adjective')}
          disabled={disabled}
        >
          adjective
        </button>

        <button
          type='button'
          className='text-base rounded-lg px-5 py-2.5 mr-2 mb-2 text-white bg-cyan-500 hover:bg-cyan-600 border-none cursor-pointer'
          value='adverb'
          onClick={() => submitAnswer('adverb')}
          disabled={disabled}
        >
          adverb
        </button>
      </div>

      <Progress percent={currentPercent} className='mt-6' />

      <Button
        type='primary'
        className='mt-6'
        onClick={nextHandling}
        disabled={!disabled}
      >
        Next
      </Button>
    </div>
  );
};

Test.propTypes = {
  testData: PropTypes.array.isRequired,
  scoreHandling: PropTypes.func.isRequired,
};

export default Test;
