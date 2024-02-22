import { useDispatch } from 'react-redux'
import { darkModeToggle } from '../features/add/addSlice'

function DarkModeSwitch() {
  const dispatch = useDispatch()
  return (
    <div className='py-4 px-6 flex justify-end'>
        <label className='relative inline-flex items-center cursor-pointer'>
            <input onClick={(e) => {dispatch(darkModeToggle())}} type='checkbox' value="" className='sr-only peer'></input>
            <div className="w-12 h-6 peer bg-purple peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple rounded-full  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-purple"></div>
        </label>
    </div>
  )
}

export default DarkModeSwitch