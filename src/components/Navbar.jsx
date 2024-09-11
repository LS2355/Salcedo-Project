import '../styles/tailwind.css'
import '../styles/navbar.css'

function Navbar() {
  const NavbarItemsObjs=[
    {
      "ItemName" : 'Navitem',
      "ItemLink" : './'
    },
    {
      "ItemName" : 'Navitem',
      "ItemLink" : './'
    },
    {
      "ItemName" : 'Navitem',
      "ItemLink" : './'
    },
  ]

  return (
    <div className='bg-slate-100 p-4 overflow-hidden w-full h-20 text-black rounded-default flex flex-wrap justify-between'>
      <div className='self-center flex'>Salcedo Project</div>
      <nav className='flex flex-wrap flex-row '>
        {NavbarItemsObjs.map((NavItemObj , keyNum)=>{
          return( 
            <a href={NavItemObj.ItemLink} className='flex flex-wrap nav-item self-center px-2 py-3 ' key={keyNum}>
              <div className='self-center'>{NavItemObj.ItemName}</div>
              <div className="arrow self-center">
                <div className="arrow-top"></div>
                <div className="arrow-bottom"></div>
              </div>
            </a>
          )
        })}


      </nav>



    </div>
  )
}

export default Navbar
