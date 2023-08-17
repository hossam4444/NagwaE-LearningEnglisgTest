// import { useState } from 'react';
// import HomePage from './components/home';
// import { Layout, Space } from 'antd';
// import { Link, Route, Routes } from 'react-router-dom';
// import ErrorPage from './pages/errrorPage';
// import Intro from './components/intro';
// import Rank from './components/rank';
// const { Header, Footer, Content } = Layout;

// //Styling
// const headerStyle = {
//   textAlign: 'center',
//   color: '#000A62',
//   height: 64,
//   lineHeight: '64px',
//   backgroundColor: '#7dbcea',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-around',
// };
// const contentStyle = {
//   textAlign: 'center',
//   minHeight: 500,
//   color: 'black',
//   backgroundColor: '#F5F5F9',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
// };

// const footerStyle = {
//   textAlign: 'center',
//   color: '#fff',
//   backgroundColor: '#7dbcea',
//   height: 60,
// };

// const App = () => {
//   const [currentScore, setCurrentScore] = useState(0);

//   const scoreHandling = function (score) {
//     setCurrentScore(score);
//   };

//   return (
//     <Space
//       direction='vertical'
//       style={{
//         width: '100%',
//       }}
//       size={[0, 48]}
//     >
//       <Layout>
//         <Header style={headerStyle}>
//           <h2>English Learning</h2>
//           <h3>
//             <Link to='/'>Home</Link>
//           </h3>
//         </Header>

//         <Content style={contentStyle}>
//           <Routes>
//             <Route path='/' element={<Intro />} />
//             <Route
//               path='/test'
//               element={<HomePage scoreHandling={scoreHandling} />}
//             />
//             <Route path='/rank' element={<Rank score={currentScore} />} />
//             <Route path='*' element={<ErrorPage />} />
//           </Routes>
//         </Content>
//         <Footer style={footerStyle}>
//           English learning app by {'Nagwa 2023'}
//         </Footer>
//       </Layout>
//     </Space>
//   );
// };

// export default App;

import { useState } from 'react';
import HomePage from './components/home';
import { Layout } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/errrorPage';
import Intro from './components/intro';
import Rank from './components/rank';
const { Header, Footer, Content } = Layout;

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);

  const scoreHandling = function (score) {
    setCurrentScore(score);
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <Header className='bg-blue-600 text-white h-16 flex items-center justify-between px-6'>
        <h2 className='text-xl font-semibold'>English Learning</h2>
        <h3>
          <Link to='/' className='hover:underline text-white'>
            Home
          </Link>
        </h3>
      </Header>

      <Content className='flex-grow py-12 bg-gray-100'>
        <div className='container mx-auto text-center'>
          <Routes>
            <Route path='/' element={<Intro />} />
            <Route
              path='/test'
              element={<HomePage scoreHandling={scoreHandling} />}
            />
            <Route path='/rank' element={<Rank score={currentScore} />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
      </Content>

      <Footer className='bg-blue-600 text-white h-16 flex items-center justify-center'>
        English learning app by Nagwa 2023
      </Footer>
    </div>
  );
};

export default App;
