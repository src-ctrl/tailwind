import { Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Example() {
    let [isShowing, setIsShowing] = useState(false)
    let [subShowing, setSubShowing] = useState(false)

    const menuItems = [
        {
            img: "/img/pinksale_container_2292x762.webp"
        },
        {
            img: "/img/mw_brands_designer_1M_1958418.webp"
        },
        {
            img: "/img/mw_gbl_clothing_clothing_103414054_1m.webp"
        },
        {
            img: "/img/mw_gbl_accessories_accessories_2007911_1m.webp"
        },
        {
            img: "/img/mw_gbl_newin_newin_2017282_1m.webp"
        },
        {
            img: "/img/mw_gbl_shoes_shoes_1904625_1m.webp"
        },
        {
            img: "/img/mw_gbl_topman_topman_104173502_1m.webp"
        },
        {
            img: "/img/mw_toplevel_gifting_1m_1763482.webp"
        }
    ]

    return (
        <>
            <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
                Toggle
            </button>
            <Transition show={isShowing}>
                {/* Background overlay */}
                <Transition.Child
                    onClick={() => setIsShowing(false)}
                    className="fixed top-0 left-0 w-full h-full z-40 bg-gray-400"
                    enter="transition-opacity ease-linear duration-1000"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-1000"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <button aria-label="Close navigation menu" data-testid="close-button">x</button>
                </Transition.Child>

                {/* Sliding sidebar */}
                <Transition.Child
                    className="fixed top-0 left-0 bg-white w-80 h-full z-50"
                    enter="transition ease-in-out duration-1000 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-1000 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    {/* The sidebar */}
                    <div className="w-80 overflow-hidden">
                        <Transition
                            show={!subShowing}
                            className="fixed top-0 left-0 bg-white w-80 h-full px-4"
                            enter="transition ease-in-out duration-1000 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-1000 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            {menuItems.map(item => (
                                <a
                                    className="w-full block h-24 my-4 cursor-pointer"
                                    onClick={() => setSubShowing((subShowing) => !subShowing)}>
                                    <img src={item.img} />
                                </a>
                            ))}


                        </Transition>
                        <Transition
                            show={subShowing}
                            className="relative top-0 left-0 bg-white w-80 h-full"
                            enter="transition ease-in-out duration-1000 transform"
                            enterFrom="translate-x-80"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-1000 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-80"
                        >
                            I am a sub<br></br>
                            I am a sub<br></br>
                            I am a sub<br></br>
                            I am a sub<br></br>
                            I am a sub<br></br>
                            I am a sub<br></br>
                            <button onClick={() => setSubShowing((subShowing) => !subShowing)}>
                                back
                            </button>
                        </Transition>
                    </div>
                </Transition.Child>
            </Transition>
            <div className="flex flex-wrap box-border p-1.5">
                <div className="w-1/2 p-1.5">
                    <img src="/img/22809045-1-black.webp" />
                    <h2>Silver Street chunky boat shoes in black leather</h2>
                    RRP ??80.00
                    ??24.00
                </div>
                <div className="w-1/2 p-1.5">
                    <img src="/img/22557428-1-white.webp" />
                    <h2>Silver Street chunky boat shoes in black leather</h2>
                    RRP ??80.00
                    ??24.00
                </div>
                <div className="w-1/2 p-1.5">
                    <img src="/img/23968083-1-green.webp" />
                    <h2>Silver Street chunky boat shoes in black leather</h2>
                    RRP ??80.00
                    ??24.00
                </div>
                <div className="w-1/2 p-1.5">
                    <img src="/img/23968070-1-multi.webp" />
                    <h2>Silver Street chunky boat shoes in black leather</h2>
                    RRP ??80.00
                    ??24.00
                </div>
            </div>
        </>
    )
}