import Nav from './nav'
import Hero from './Hero';
import FooterC from './Footer'
export default function App() {

  return (
    <div className='bg-[#0870e0] min-h-screen text-white'>
      <Nav></Nav>
      <div className='md:h-[calc(100vh-80px)]  flex flex-col'>
        <Hero></Hero>
        <FooterC></FooterC>
      </div>
    </div>
  )
}