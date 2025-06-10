import React from 'react'
import { BsFillHexagonFill } from 'react-icons/bs'
import { FiMinus } from 'react-icons/fi'
import { IoCloseSharp } from 'react-icons/io5'
import { VscChromeRestore } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'

export default function FiscalPeriods() {

    const navigate = useNavigate();

    return (
        <div className='fixed inset-0 z-50 flex flex-col h-svh bg-white'>

            {/* Fiscal Periods navbar */}
            <div className='bg-white shadow-gray-500 shadow-md flex items-center justify-between px-1 py-1'>
                <div className='flex items-center gap-1 font-thin'>
                    <BsFillHexagonFill className="w-5 h-5 text-orange-500" />
                    <p className='text-gray-600 text-[1.2em] font-medium'>Alvaria Workforce</p>
                </div>

                <div className='flex items-center gap-[3em] pr-2'>
                    <button aria-label="Close" className="text-gray-500 hover:text-gray-700 focus:outline-none">
                        <FiMinus className="w-5 h-5 text-gray-400 hover:text-gray-700" />
                    </button>
                    <button aria-label="Maximize" className="text-gray-500 hover:text-gray-700 focus:outline-none">
                        <VscChromeRestore className="w-5 h-5 text-gray-400 hover:text-gray-700" />
                    </button>
                    <button aria-label="Close window" className="text-gray-500 hover:text-gray-700 focus:outline-none">
                        <IoCloseSharp className="w-5 h-5 text-gray-400 hover:text-gray-700"
                            onClick={() => navigate(-1)} />
                    </button>
                </div>
            </div>


            <div className="overflow-auto flex-1 scrollbar-thin h-full px-2 flex-grow flex flex-col">
                <table className="w-full table-fixed border-collapse text-[11px] font-normal flex-grow text-black shadow-gray-500 shadow-md ">
                    <thead className="bg-[#fff] text-gray-800 top-0 sticky select-none">
                        <tr>
                            <th colSpan={3} className="bg-gradient-to-tr md:text-lg text-left to-blue-400 from-blue-800 shadow-md text-white px-3 py-1 font-bold">
                                Fiscal Periods
                            </th>
                        </tr>
                        <tr className='text-sm text-left'>
                            <th className="border-r px-2 border-gray-300">Label</th>
                            <th className="border-r px-2 border-gray-300">From</th>
                            <th className="border-r px-2 border-gray-300">To</th>
                        </tr>
                    </thead>

                    <tbody className='font-semibold text-xs'>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">0918</td>
                            <td class="border border-[#d4d0c8] px-2">9/18/2004</td>
                            <td class="border border-[#d4d0c8] px-2">9/24/2004</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">0925</td>
                            <td class="border border-[#d4d0c8] px-2">9/25/2004</td>
                            <td class="border border-[#d4d0c8] px-2">10/1/2004</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">1002</td>
                            <td class="border border-[#d4d0c8] px-2">10/2/2004</td>
                            <td class="border border-[#d4d0c8] px-2">10/8/2004</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">1009</td>
                            <td class="border border-[#d4d0c8] px-2">10/9/2004</td>
                            <td class="border border-[#d4d0c8] px-2">10/15/2004</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">1016</td>
                            <td class="border border-[#d4d0c8] px-2">10/16/2004</td>
                            <td class="border border-[#d4d0c8] px-2">10/22/2004</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">1023</td>
                            <td class="border border-[#d4d0c8] px-2">10/23/2004</td>
                            <td class="border border-[#d4d0c8] px-2">10/29/2004</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">1030</td>
                            <td class="border border-[#d4d0c8] px-2">10/30/2004</td>
                            <td class="border border-[#d4d0c8] px-2">11/5/2004</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">1106</td>
                            <td class="border border-[#d4d0c8] px-2">11/6/2004</td>
                            <td class="border border-[#d4d0c8] px-2">11/12/2004</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">1113</td>
                            <td class="border border-[#d4d0c8] px-2">11/13/2004</td>
                            <td class="border border-[#d4d0c8] px-2">11/19/2004</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">1120</td>
                            <td class="border border-[#d4d0c8] px-2">11/20/2004</td>
                            <td class="border border-[#d4d0c8] px-2">11/26/2004</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">1127</td>
                            <td class="border border-[#d4d0c8] px-2">11/27/2004</td>
                            <td class="border border-[#d4d0c8] px-2">12/3/2004</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">1204</td>
                            <td class="border border-[#d4d0c8] px-2">12/4/2004</td>
                            <td class="border border-[#d4d0c8] px-2">12/10/2004</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">1211</td>
                            <td class="border border-[#d4d0c8] px-2">12/11/2004</td>
                            <td class="border border-[#d4d0c8] px-2">12/17/2004</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">1218</td>
                            <td class="border border-[#d4d0c8] px-2">12/18/2004</td>
                            <td class="border border-[#d4d0c8] px-2">12/24/2004</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">1225</td>
                            <td class="border border-[#d4d0c8] px-2">12/25/2004</td>
                            <td class="border border-[#d4d0c8] px-2">12/31/2004</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">1/1/2005</td>
                            <td class="border border-[#d4d0c8] px-2">1/1/2005</td>
                            <td class="border border-[#d4d0c8] px-2">1/7/2005</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">1/8/2005</td>
                            <td class="border border-[#d4d0c8] px-2">1/8/2005</td>
                            <td class="border border-[#d4d0c8] px-2">1/14/2005</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">1/15/2005</td>
                            <td class="border border-[#d4d0c8] px-2">1/15/2005</td>
                            <td class="border border-[#d4d0c8] px-2">1/21/2005</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">1/22/2005</td>
                            <td class="border border-[#d4d0c8] px-2">1/22/2005</td>
                            <td class="border border-[#d4d0c8] px-2">1/28/2005</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">1/29/2005</td>
                            <td class="border border-[#d4d0c8] px-2">1/29/2005</td>
                            <td class="border border-[#d4d0c8] px-2">2/4/2005</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">2/5/2005</td>
                            <td class="border border-[#d4d0c8] px-2">2/5/2005</td>
                            <td class="border border-[#d4d0c8] px-2">2/11/2005</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">2/12/2005</td>
                            <td class="border border-[#d4d0c8] px-2">2/12/2005</td>
                            <td class="border border-[#d4d0c8] px-2">2/18/2005</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">2/19/2005</td>
                            <td class="border border-[#d4d0c8] px-2">2/19/2005</td>
                            <td class="border border-[#d4d0c8] px-2">2/25/2005</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">2/26/2005</td>
                            <td class="border border-[#d4d0c8] px-2">2/26/2005</td>
                            <td class="border border-[#d4d0c8] px-2">3/4/2005</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">3/5/2005</td>
                            <td class="border border-[#d4d0c8] px-2">3/5/2005</td>
                            <td class="border border-[#d4d0c8] px-2">3/11/2005</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">3/12/2005</td>
                            <td class="border border-[#d4d0c8] px-2">3/12/2005</td>
                            <td class="border border-[#d4d0c8] px-2">3/18/2005</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">3/19/2005</td>
                            <td class="border border-[#d4d0c8] px-2">3/19/2005</td>
                            <td class="border border-[#d4d0c8] px-2">3/25/2005</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">3/26/2005</td>
                            <td class="border border-[#d4d0c8] px-2">3/26/2005</td>
                            <td class="border border-[#d4d0c8] px-2">4/1/2005</td>
                        </tr>
                        <tr class="hover:bg-blue-500 hover:text-white bg-[#fffde7]">
                            <td class="border border-[#d4d0c8] px-2">4/2/2005</td>
                            <td class="border border-[#d4d0c8] px-2">4/2/2005</td>
                            <td class="border border-[#d4d0c8] px-2">4/8/2005</td>
                        </tr>
                    </tbody>

                    <tfoot className='sticky bottom-0 z-10'>
                        <tr>
                            <th colSpan={3} className="bg-gradient-to-tr text-left md:text-sm to-blue-400 from-blue-800 shadow-md text-white px-3 py-1 font-bold">
                                0 of 239 Items Selected, 0 of 1 Columns Selected, 0 Cells Selected
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </div>


            {/* <!-- bottom side buttons --> */}
            <div className="flex items-center justify-end gap-2 p-2 w-full shadow-[0_-4px_6px_-2px_rgba(0,0,0,0.5)]">

                <button className="bg-[#f1eee9] hover:border-blue-600 border-2 md:w-24 border-[#808080] rounded-md px-4 py-1 text-sm font-semibold text-black hover:bg-[#e0e0e0]">
                    Ok
                </button>
                <button className="bg-[#f1eee9] hover:border-blue-600 border-2 md:w-24 border-[#808080] rounded-md px-4 py-1 text-sm font-semibold text-black hover:bg-[#e0e0e0]"
                    onClick={() => navigate(-1)}>
                    Cancel
                </button>
                <button className="bg-[#f1eee9] hover:border-blue-600 border-2 md:w-24 border-[#808080] rounded-md px-4 py-1 text-sm font-semibold text-black hover:bg-[#e0e0e0]">
                    Help
                </button>
            </div>
        </div >
    )
}
