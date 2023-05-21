import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import Dropdown from './Dropdown'
import DropdownColors from './DropdownColors'

export default function Header() {
  return (
    <div>
      <div className="bg-slate-200 flex w-12/12 md:w-10/12 mx-auto h-20 items-center rounded-lg">
        <FontAwesomeIcon icon={faBook} className="w-4/12 text-center fa-2x"/>
        <Dropdown />
        <DropdownColors />
      </div>
    </div>
  )
}
