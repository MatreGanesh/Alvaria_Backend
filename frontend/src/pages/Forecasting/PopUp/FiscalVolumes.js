import React, { useEffect, useState } from 'react'
import FiscalVolumesSelect from './FiscalVolumesSelect'

export default function FiscalVolumes() {

    const [isVisible, setVisible] = useState(false);



    useEffect(() => {
        localStorage.setItem('showSaveClose', 'true');

        return () => {
            localStorage.removeItem('showSaveClose');
        };
    }, []);

    return (
        <div className='flex flex-col h-[91vh]'>

            {isVisible && (
                <FiscalVolumesSelect setVisible={setVisible} />
            )}


            {/* Fiscal Volumes navbar */}
            <div className='bg-gradient-to-l font-thin to-blue-200 from-blue-100'>
                <ul className='flex items-center group font-semibold text-sm px-1'>
                    <li className='cursor-pointer px-2.5 py-1 bg-gray-200 border border-gray-300'>General</li>
                    <li className='cursor-pointer px-2.5 py-1 bg-white border border-gray-300 border-b-0 '>Fiscal</li>
                    <li className='cursor-pointer px-2.5 py-1 bg-gray-200 border border-gray-300'>Revenue</li>
                    <li className='cursor-pointer px-2.5 py-1 bg-gray-200 border border-gray-300'>Cyclic</li>
                    <li className='cursor-pointer px-2.5 py-1 bg-gray-200 border border-gray-300'>Intra-Day</li>
                    <li className='cursor-pointer px-2.5 py-1 bg-gray-200 border border-gray-300'>Daily AHT</li>
                    <li className='cursor-pointer px-2.5 py-1 bg-gray-200 border border-gray-300'>Service</li>
                    <li className='cursor-pointer px-2.5 py-1 bg-gray-200 border border-gray-300'>Multi-Channel</li>
                </ul>
            </div>

            <div className="flex flex-grow overflow-hidden p-1">
                <div className="overflow-auto flex-1 scrollbar-thin h-full flex flex-col border border-gray-700">
                    <table className="w-full table-fixed border-collapse text-[11px] font-normal flex-grow text-black">
                        <thead className="bg-[#fff] text-gray-800 top-0 sticky select-none">
                            <tr>
                                <th colSpan={3} className="bg-gradient-to-tr md:text-lg text-left to-blue-400 from-blue-800 shadow-md text-white px-3 py-1 font-bold">
                                    Fiscal Volumes
                                </th>
                            </tr>
                            <tr className='text-sm'>
                                <th className="border-r px-2 border-gray-300 text-right">
                                    Start Date
                                </th>
                                <th className="border-r px-2 border-gray-300 text-right">
                                    Stop Date
                                </th>
                                <th className="border-r px-2 border-gray-300 text-right">
                                    Supplied Volume
                                </th>
                            </tr>
                        </thead>

                        <tbody className='font-semibold text-xs'>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    1/1/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    1/7/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    33
                                </td>
                            </tr>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    1/8/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    1/14/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    45
                                </td>
                            </tr>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    1/15/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    1/21/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    40
                                </td>
                            </tr>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    1/22/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    1/28/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    36
                                </td>
                            </tr>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    1/29/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    2/4/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    33
                                </td>
                            </tr>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    2/5/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    2/11/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    33
                                </td>
                            </tr>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    2/12/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    2/18/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    38
                                </td>
                            </tr>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    2/19/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    2/25/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    39
                                </td>
                            </tr>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    2/26/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    3/4/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    35
                                </td>
                            </tr>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    3/5/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    3/11/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    33
                                </td>
                            </tr>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    3/12/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    3/18/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    33
                                </td>
                            </tr>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    3/19/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    3/25/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    34
                                </td>
                            </tr>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    3/26/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    4/1/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    31
                                </td>
                            </tr>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    4/2/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    4/8/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    31
                                </td>
                            </tr>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    4/9/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    4/15/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    28
                                </td>
                            </tr>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    4/16/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    4/22/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    27
                                </td>
                            </tr>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    4/23/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    4/29/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    37
                                </td>
                            </tr>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    4/30/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    5/6/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    38
                                </td>
                            </tr>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    5/7/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    5/13/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    34
                                </td>
                            </tr>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    5/14/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    5/20/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    37
                                </td>
                            </tr>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    5/21/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    5/27/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    38
                                </td>
                            </tr>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    5/28/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    6/3/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    35
                                </td>
                            </tr>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    6/4/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    6/10/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    37
                                </td>
                            </tr>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    6/11/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    6/17/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    40
                                </td>
                            </tr>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    6/18/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    6/24/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    38
                                </td>
                            </tr>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    6/25/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    7/1/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    34
                                </td>
                            </tr>
                            <tr className="bg-[#fffde7]">
                                <td className="border border-[#d4d0c8] px-2">
                                    7/2/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2">
                                    7/8/2022
                                </td>
                                <td className="border border-[#d4d0c8] px-2 text-right">
                                    33
                                </td>
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

                {/* <!-- Right side buttons --> */}
                <div className="flex flex-col space-y-2 p-2 border-l border-[#808080] w-32">
                    <button className="bg-[#f1eee9] hover:border-blue-600 hover:border-2 border border-[#808080] rounded-sm px-2 py-1 text-[11px] font-normal text-black hover:bg-[#e0e0e0]"
                        onClick={() => setVisible(true)}>
                        Select...
                    </button>
                    <button className="bg-[#f1eee9] hover:border-blue-600 hover:border-2 border border-[#808080] rounded-sm px-2 py-1 text-[11px] font-normal text-black hover:bg-[#e0e0e0]">
                        Delete
                    </button>
                </div>
            </div>
        </div >
    )
}
