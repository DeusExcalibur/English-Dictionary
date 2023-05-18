/* eslint-disable react/prop-types */
import { useRef } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function SearchBar({setPalabra}) {
  const refInput = useRef();
  const leerPalabra =()=>{
    setPalabra(refInput.current.value);
  }
  const leerEnter =(e)=>{
    if(e.keyCode == 13){
      setPalabra(refInput.current.value);
    }
  }
  return (
    <div className="h-48 flex items-center sticky top-[-80px]">
      <div className="mt-10 w-[100vw] md:w-10/12 text-center md:mx-auto h-28">
        <div className="flex relative w-full h-full items-center">
          <input ref={refInput} onKeyDown={leerEnter} type="text" className="w-[80%] md:w-10/12 border-none outline-none bg-zinc-200 ms-12 ps-8 h-[40%] rounded-[12px]" placeholder="Search"/>
          <span className="absolute right-[16%] hover:cursor-pointer" onClick={leerPalabra}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-2x" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
