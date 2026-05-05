import { Outlet } from 'react-router-dom';
import Navbar from './NavBar';
import Footer from './Footer';
import CursorBlob from '../ui/CursorBlob';

export default function Layout() {
  return (
    <>
      <CursorBlob />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
