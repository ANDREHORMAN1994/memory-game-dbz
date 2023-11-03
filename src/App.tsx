import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="w-full h-full min-h-screen bg-[url(/images/shen.png)] bg-cover bg-no-repeat bg-left flex flex-col justify-start items-center">
      <Outlet />
    </div>
  );
}

export default App;
