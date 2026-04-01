import can from './pepsi_can.png'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // npm install react-icons

export default function () {
  const morethan600=(window.innerWidth)

  return (
    <div className=" px-4  md:flex md:h-[calc(100vh-80px)] md:items-center md:px-20 md:gap-30 lg:gap-50">
      <div className=' px-10 md:px-0'>
        <h1 className="text-3xl py-8 flex flex-col gap-2">
          <span>THAT'S WHAT</span>
          <span className='text-5xl'>I LIKE</span></h1>
        <p className="lg:text-xl pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatibus quia ad ea laudantium {morethan600>830&&'temporibus, sint possimus similique impedit accusamus quod non tempore nulla, delectus maiores suscipit aperiam eum modi.'}
        </p>
        <div className="pb-4">
          <a href="#" className="flex px-8 py-4  whitespace-nowrap bg-red-500 w-fit text-xl rounded-3xl ">VIEW ALL PRODUCTS</a>

        </div>
      </div>
      {/* img 220px */}
      <div className='flex items-center py-8 gap-8 justify-center'>
        <div>
          <img className='w-55 min-w-55 ' src={can} alt="" />
        </div>
        {/* social media icons */}
        <div className='text-2xl gap-4 flex flex-col bg-amber-20d0 '>
          <span className="text-orange-400 lg:hover:cursor-pointer lg:hover:text-white duration-300"><FaFacebookF /></span>
          <span className="text-orange-400 lg:hover:cursor-pointer lg:hover:text-white duration-300"><FaTwitter /></span>
          <span className="text-orange-400 lg:hover:cursor-pointer lg:hover:text-white duration-300"><FaInstagram /></span>

        </div>
      </div>
    </div>
  )
}