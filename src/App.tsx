import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const [imgBackground, setImgBackground] = useState('url(/images/shen.png)');
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/game':
        setImgBackground('url(/images/kame.jpeg)');
        break;
      default:
        setImgBackground('url(/images/shen.png)');
        break;
    }
  }, [location]);

  return (
    <div className={`w-full h-full min-h-screen bg-[${imgBackground}] bg-cover bg-no-repeat flex flex-col justify-center items-center ${imgBackground.includes('shen') ? 'bg-left' : 'bg-center'}`}>
      <Outlet />
    </div>
  );
}

export default App;
