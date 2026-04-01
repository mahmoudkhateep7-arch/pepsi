import imgLogo from './pepsi_logo.png'
export default function Nav() {

  return (
    <div className='sm:flex items-center justify-around'>
      <div className=' flex justify-center h-20 items-center'>
        <img className='w-12.5 ' src={imgLogo} alt="logo" />
      </div>
      <div className='lg:text-xl lg:gap-x-10 flex whitespace-nowrap gap-y-1 px-4 flex-wrap gap-x-3 justify-center   items-center  '>
        <span className='lg:hover:text-red-500 duration-300 lg:hover:cursor-pointer'>home</span>
        <span className='lg:hover:text-red-500 duration-300 lg:hover:cursor-pointer'>what's new </span>
        <span className='lg:hover:text-red-500 duration-300 lg:hover:cursor-pointer'>contact</span>
        <span className='lg:hover:text-red-500 duration-300 lg:hover:cursor-pointer'>prodcuts</span>
        <span className='lg:hover:text-red-500 duration-300 lg:hover:cursor-pointer'>prices</span>

      </div>
    </div>
  )
}