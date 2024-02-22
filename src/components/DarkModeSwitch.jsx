import { useDispatch, useSelector } from 'react-redux'
import { darkModeToggle } from '../features/add/addSlice'
import sun from "../assets/images/sun.png"
import moon from "../assets/images/moon.png"
import lightsun from "../assets/images/light-sun.png"
import lightmoon from "../assets/images/light-moon.png"

function DarkModeSwitch() {
  const dispatch = useDispatch()
  const darkMode = useSelector((state) => state.state.darkMode)
  return (
    <div className='py-4 px-6 flex justify-end items-center gap-2'>
        <img className='w-4 h-4' src={darkMode === "dark" ? sun : lightsun} alt='sun' />
        <label className='relative inline-flex items-center cursor-pointer'>
            <input onClick={(e) => {dispatch(darkModeToggle())}} type='checkbox' value="" className='sr-only peer'></input>
            <div className="w-12 h-6 peer bg-purple peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple rounded-full  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-purple"></div>
        </label>
        <img className='w-4 h-4' src={darkMode === "dark" ? moon : lightmoon} alt='moon' />
    </div>
  )
}

export default DarkModeSwitch