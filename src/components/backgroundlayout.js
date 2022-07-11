import Navbar from './Navbar';
import background from '../images/netflix-background.png'
import logo from '../images/netflix-logo.png'
import { Link } from 'react-router-dom';


function BackgroundLayout({children, status}){
  return(
    <div className="h-screen relative border-b-gray-600 border-b-8">
      <Navbar/>
      <div className=" bg-stone-700 bg-cover bg-center h-screen relative">
        <img alt="" src={background} className="w-full h-full object-cover mix-blend-overlay"/>
        {children}
      </div>
    </div>
  )
}

export default BackgroundLayout;