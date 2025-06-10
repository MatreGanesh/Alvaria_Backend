import React from 'react'
import { BsFillHexagonFill } from 'react-icons/bs'
import { FiMinus } from 'react-icons/fi'
import { IoCloseSharp } from 'react-icons/io5'
import { MdOutlineCropSquare } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

export default function FiscalVolumesSelect({ setVisible }) {

    const navigate = useNavigate();

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-black/20 font-sans">

            <div aria-labelledby="dialog-title" aria-modal="true" className="shadow-md bg-gray-100  shadow-gray-500 border border-gray-300 rounded w-auto select-none" role="dialog">
                <div className="flex items-center justify-between border-b bg-white border-gray-300 px-3 h-9 text-sm font-semibold text-gray-700" id="dialog-title">
                    <div className='flex items-center gap-2'>
                        <BsFillHexagonFill className="w-5 h-5 text-orange-600" />
                        <p className='text-gray-600 text-[1.2em] font-medium'>Select</p>
                    </div>
                    <div className='flex items-center gap-[3em]'>
                        <button aria-label="Close" className="text-gray-500 hover:text-gray-700 focus:outline-none">
                            <FiMinus className="w-5 h-5 text-gray-400 hover:text-gray-700" />
                        </button>
                        <button aria-label="Maximize" className="text-gray-500 hover:text-gray-700 focus:outline-none">
                            <MdOutlineCropSquare className="w-5 h-5 text-gray-400 hover:text-gray-700" />
                        </button>
                        <button aria-label="Close window" className="text-gray-500 hover:text-gray-700 focus:outline-none">
                            <IoCloseSharp className="w-5 h-5 text-gray-400 hover:text-gray-700"
                                onClick={() => setVisible(false)} />
                        </button>
                    </div>
                </div>

                <div className=''>
                    <div className='bg-gray-100 p-2 shadow-[inset_.2px_.5px_4px_.1px_rgba(0,0,0,0.03)] shadow-current'>
                        <div className='border p-2 space-y-2 shadow-gray-700 shadow-sm'>
                            <fieldset className="space-y-2 border-[1.5px] border-gray-400 p-2">
                                <legend className="block text-sm font-semibold text-gray-700" for="lookup">
                                    Lookup
                                </legend>
                                <input autocomplete="off" className="min-w-[450px] border border-gray-300 rounded py-2 px-2 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500" id="lookup" spellcheck="false" type="text" />
                            </fieldset>

                            <fieldset className="border-[1.5px] border-gray-400 p-2">
                                <legend className="block text-sm font-semibold text-gray-700" for="selected-list">
                                    Selected (239)
                                </legend>
                                <div className="flex">
                                    <select aria-multiselectable="true" className="w-[70%] border border-gray-300 rounded text-sm text-gray-950 p-1 resize-none space-y-1 overflow-y-auto" id="selected-list" multiple="" size="15">
                                        <option>
                                            FY27WK04 (2/21/2026 to 2/27/2026)
                                        </option>
                                        <option>
                                            FY27WK05 (2/28/2026 to 3/6/2026)
                                        </option>
                                        <option>
                                            FY27WK06 (3/7/2026 to 3/13/2026)
                                        </option>
                                        <option>
                                            FY27WK07 (3/14/2026 to 3/20/2026)
                                        </option>
                                        <option>
                                            FY27WK08 (3/21/2026 to 3/27/2026)
                                        </option>
                                        <option>
                                            FY27WK09 (3/28/2026 to 4/3/2026)
                                        </option>
                                        <option>
                                            FY27WK10 (4/4/2026 to 4/10/2026)
                                        </option>
                                        <option>
                                            FY27WK11 (4/11/2026 to 4/17/2026)
                                        </option>
                                        <option>
                                            FY27WK12 (4/18/2026 to 4/24/2026)
                                        </option>
                                        <option>
                                            FY27WK13 (4/25/2026 to 5/1/2026)
                                        </option>
                                        <option>
                                            FY27WK14 (5/2/2026 to 5/8/2026)
                                        </option>
                                        <option>
                                            FY27WK15 (5/9/2026 to 5/15/2026)
                                        </option>
                                        <option>
                                            FY27WK16 (5/16/2026 to 5/22/2026)
                                        </option>
                                        <option>
                                            FY27WK17 (5/23/2026 to 5/29/2026)
                                        </option>
                                        <option>
                                            FY27WK18 (5/30/2026 to 6/5/2026)
                                        </option>
                                        <option>
                                            FY27WK19 (6/6/2026 to 6/12/2026)
                                        </option>
                                        <option>
                                            FY27WK20 (6/13/2026 to 6/19/2026)
                                        </option>
                                        <option>
                                            FY27WK21 (6/20/2026 to 6/26/2026)
                                        </option>
                                        <option>
                                            FY27WK22 (6/27/2026 to 7/3/2026)
                                        </option>
                                        <option>
                                            FY27WK23 (7/4/2026 to 7/10/2026)
                                        </option>
                                        <option>
                                            FY27WK24 (7/11/2026 to 7/17/2026)
                                        </option>
                                        <option>
                                            FY27WK25 (7/18/2026 to 7/24/2026)
                                        </option>
                                    </select>

                                    <div className="flex flex-col items-center justify-between space-y-2 w-[30%]">
                                        <div className='flex flex-col items-center space-y-2 gap-4'>
                                            <div className='flex flex-col items-center space-y-2 '>
                                                <button className="w-[120px] font-semibold px-1 py-1.5 first-letter:underline border border-gray-400 rounded text-sm text-gray-800 hover:bg-gray-100 bg-gray-200 focus:outline-none" type="button"
                                                    onClick={() => navigate('/forecasting-forcasting-scenario/Fiscal_Volumes/Fiscal_Periods')}>
                                                    Add...
                                                </button>
                                                <button className="w-[120px] font-semibold px-1 py-1.5 border border-gray-400 rounded text-sm text-gray-800 hover:bg-gray-100 bg-gray-200 focus:outline-none" type="button">
                                                    Remove
                                                </button>
                                            </div>

                                            <div className='flex flex-col items-center space-y-2 '>
                                                <button className="w-[120px] font-semibold px-1 py-1.5 border border-gray-400 rounded text-sm text-gray-800 hover:bg-gray-100 bg-gray-200 focus:outline-none" type="button">
                                                    Move Up
                                                </button>
                                                <button className="w-[120px] font-semibold px-1 py-1.5 border border-gray-400 rounded text-sm text-gray-400 bg-gray-100 cursor-not-allowed" disabled="" type="button">
                                                    Move Down
                                                </button>
                                            </div>
                                        </div>
                                        <button className="w-[120px] font-semibold px-1 py-1.5 border border-gray-400 rounded text-sm text-gray-800 hover:bg-gray-100 bg-gray-200 focus:outline-none" type="button">
                                            Clear All
                                        </button>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>

                    <div className="flex justify-end space-x-2 border-t bg-gray-100 border-gray-300 px-3 py-2">
                        <button className="w-20 h-8 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 focus:outline-none" type="button">
                            OK
                        </button>
                        <button className="w-20 h-8 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-200 focus:outline-none" type="button"
                            onClick={() => setVisible(false)}>
                            Cancel
                        </button>
                        <button className="w-20 h-8 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-200 focus:outline-none" type="button">
                            Help
                        </button>
                    </div>
                </div>

            </div>
        </div>

    )
}
