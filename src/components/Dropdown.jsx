import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {

  const cambiarFuente1 = () => {
    if(!(document.documentElement.classList == "fuente1")){
      document.documentElement.classList.remove('fuente2');
      document.documentElement.classList.remove('fuente3');
      document.documentElement.classList.add('fuente1');
    }
  }
  const cambiarFuente2 = () => {
    if(!(document.documentElement.classList == "fuente2")){
      document.documentElement.classList.remove('fuente1');
      document.documentElement.classList.remove('fuente3');
      document.documentElement.classList.add('fuente2');
    }
  }
  const cambiarFuente3 = () => {
    if(!(document.documentElement.classList == "fuente3")){
      document.documentElement.classList.remove('fuente1');
      document.documentElement.classList.remove('fuente2');
      document.documentElement.classList.add('fuente3');
    }
  }
  
  return (
    <div className='w-4/12 text-right'>
      <Menu as="div" className="relative inline-block">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Options
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1 text-center">
              <Menu.Item>
                {({ active }) => (
                  <button
                  onClick={cambiarFuente1}
                  className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm w-[100%] fuenteTexto1'
                    )}
                  >
                    Font 1
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                  onClick={cambiarFuente2}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm w-[100%] fuenteTexto2'
                  )}
                >
                  Font 2
                </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                  onClick={cambiarFuente3}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm w-[100%] fuenteTexto3'
                  )}
                >
                  Font 3
                </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>

  )
}
