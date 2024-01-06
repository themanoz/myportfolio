import React from 'react'

function Nav() {
  return (
   <>
      <div>
        <nav className="bg-gray-800 text-white p-4 w-[80%] mx-20 mt-10 rounded">
          <ul className="flex justify-center gap-200">
            <li className="mr-6"><a href="#education" className="hover:text-blue-300">Education</a></li>
            <li className="mr-6"><a href="#projects" className="hover:text-blue-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </nav>
      </div>
   </>
  )
}

export default Nav