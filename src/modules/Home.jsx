import '../styles/tailwind.css';
import { Link, NavLink } from 'react-router-dom';

function Home () {

  return(
    <div className='w-full'>
      <div className="grid gap-5 w-full h-[80vh] mt-5">
        <div className="col-span-12 md:row-span-7 md:col-start-1 xl:col-end-6 md:col-end-5 bg-blue-100 rounded-default p-6 overflow-hidden">About</div>
        <div className="col-span-12 md:row-span-7 xl:col-start-6 md:col-start-5 md:col-end-8 bg-blue-400 rounded-default p-6 overflow-hidden">Image</div>
        
{/* when the div is clicked it will expand until it consumes the entrie screen, somewhat looking like a flashbag effect but dim. then switch to next page.
  if pageIsReady? then pulse and fade in all page content : then show loading animation.
*/}

        <Link className="col-span-12 md:row-span-5 md:col-start-1 md:col-end-4 bg-red-100 rounded-default p-6 overflow-hidden">Notes</Link>
        <Link className="col-span-12 md:row-span-5 md:col-start-4 md:col-end-8 bg-slate-100 rounded-default p-6 overflow-hidden">Fun Tools</Link>
 
        <Link to={'./Portfolio'} className="col-span-12 md:row-span-10 md:row-end-2 md:col-start-8 md:col-end-12 bg-blue-300 rounded-default p-6 overflow-hidden">Portfolio</Link>
        <Link className="col-span-12 md:row-span-2 md:col-start-8 md:col-end-12 bg-slate-500 rounded-default p-6 overflow-hidden">socials</Link>
        
      </div>
    </div>
  )
}

export default Home