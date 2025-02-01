// Components/Header.tsx
import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate() // useNavigate for navigation



  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error
      navigate('/auth/login')
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
        console.log(error)
      } else {
        setError('An Unknown error occured')
      }
    }
  }
  return (
    <div className="bg-[#FAEEFC] w-full h-14 flex justify-between items-center px-4 border-b border-gray-300 relative">
      <img src="/assets/TaskBuddy.svg" alt="Header" />

      <div className="relative">
        <div
          className="w-7 h-7 rounded-full bg-gray-300"
          onClick={toggleMenu}
        ></div>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-18 bg-white border border-gray-300 rounded-lg shadow-lg">
            <button className="w-full text-left p-2 text-sm hover:bg-gray-100" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
