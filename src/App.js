import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Index from './pages';
import Create from './pages/create';
import View from './pages/view';
import Store from './store/store';

function App() {
  return (
      <Store>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index></Index>}></Route>
            <Route path='create' element={<Create></Create>}></Route>
            <Route path='view/:bookId' element={<View></View>}></Route>
          </Routes>
        </BrowserRouter>
      </Store>
  );
}

export default App;
