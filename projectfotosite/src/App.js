import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { HomePage } from './pages/homepage'
import { AboutPage} from './pages/about' 
import { GalleryPage } from './pages/gallery'
import { FotolistAdminCategories } from './pages/fotolist-admin-categories'
import { CategoriesPage } from './pages/categories'
import { AdminCategories } from './pages/admin-categories'
import { AdminAuthorization } from './pages/admin-authorization'
import { AdminLayout } from './components/admin-layout'
import { NotFoundPage } from './pages/not-found'


import './App.css';
import { Layout } from './components/layout'

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<Layout/> }>
            <Route index element={<HomePage />}/>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/:Id" element={<GalleryPage />} />
          </Route>
          <Route path="/admin" element={<AdminLayout/> }>
            <Route path="/admin/list" element={<AdminCategories />} />
            <Route path="/admin/login" element={<AdminAuthorization />} />
            <Route path="/admin/list/:categoryId" element={<FotolistAdminCategories />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      
    </div>
    
  );
}

export default App;
