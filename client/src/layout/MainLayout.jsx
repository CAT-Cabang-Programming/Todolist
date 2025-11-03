import '../index.css';
import Navbar from '../component/navbar'

export default function MainLayout({children}){
    return(
        <>
            <Navbar/>
            {children}
        </>
    )
}