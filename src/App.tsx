import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';

import { Home } from './pages/Home/index';

export function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </>
  )
}
