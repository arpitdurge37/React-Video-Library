import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { VideoLibraryHome } from './components/video-library-home';
import { AdminLogin } from './components/admin-login';
import { AdminDashBoard } from './components/admin-dashboard';
import { AdminError } from './components/admin-error';
import { AddVideo } from './components/admin-add-video';
import { EditVideo } from './components/admin-edit-video';

function App() {
  return (
    <div className="container-fluid bg-dark text-white" style={{height:'100vh'}}>
        
       <BrowserRouter>
          <header className='p-3 d-flex justify-content-between'>
            <span className='h2'> <Link to="/" className='text-decoration-none text-white'>Video Library</Link> </span>
            <Link to="/admin-login" className='btn btn-danger bi bi-person'> Admin Login</Link>
          </header>
          <section className='mt-4'>
          
          <Routes>
              <Route path='/' element={<VideoLibraryHome />} />
              <Route path='admin-login' element={<AdminLogin />} />
              <Route path='admin-dashboard' element={<AdminDashBoard />} />
              <Route path='admin-error' element={<AdminError />} />
              <Route path='add-video' element={<AddVideo />} />
              <Route path='edit-video/:id' element={<EditVideo />} />
          </Routes>
          </section>
       </BrowserRouter>
      
    </div>
  );
}

export default App;
