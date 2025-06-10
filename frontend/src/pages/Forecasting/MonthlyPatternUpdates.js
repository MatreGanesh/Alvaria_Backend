import React, { useState } from 'react'
import { BsTriangle } from "react-icons/bs";
import { LiaShareAltSquareSolid } from "react-icons/lia";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaRectangleXmark } from "react-icons/fa6";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegSquareMinus } from "react-icons/fa6";


export default function MonthlyPatternUpdates() {

    const [show, setShow] = useState(true);

    return (
        <>
            <div className="bg-blue-50">
                <div className="max-w-full h-[90vh] flex flex-col mx-auto">
                    <div className="bg-gradient-to-tr md:text-sm to-blue-400 from-blue-800 shadow-md text-white px-3 py-1 font-bold">
                        <h1 className="font-bold">Monthly Pattern Updates</h1>
                    </div>
                    <div className="bg-gray-200 shadow-md rounded-b-md flex-grow flex flex-col">
                        <div className="flex items-center ">
                            <div className="flex items-center justify-between p-1 m-2 w-3/6 md:w-1/6 text-sm font-semibold bg-white">
                                Forecast Group &raquo; Code
                                <span className="flex items-center gap-1">
                                    <BsTriangle className="text-gray-500" />
                                    <LiaShareAltSquareSolid className="-rotate-90 text-blue-500 w-5 h-5" />
                                </span>
                            </div>
                        </div>
                        <div className="overflow-x-auto bg-white flex-grow">
                            <table className="min-w-full table-auto">
                                <thead className="bg-white">
                                    <tr className='text-center font-bold'>
                                        <th className="px-6 py-1 border-r-2 text-sm text-gray-500 tracking-wider">
                                            Forecast Group
                                        </th>
                                        <th
                                            className="px-6 py-1 border-r-2 text-sm text-gray-500 tracking-wider"
                                            colSpan={2}
                                        >
                                            Monthly Update
                                        </th>
                                        <th
                                            className="px-6 py-1 border-r-2 text-sm text-gray-500 tracking-wider"
                                            colSpan={2}
                                        >
                                            Updated
                                        </th>
                                    </tr>
                                    <tr className='font-semibold text-sm'>
                                        <th className="px-2 py-2 border-r-2 border-gray-200 text-left text-gray-500 tracking-wider">
                                            Description
                                        </th>
                                        <th className="px-2 py-2 border-r-2 border-gray-200 text-left text-gray-500 tracking-wider">
                                            Month
                                        </th>
                                        <th className="px-2 py-2 border-r-2 border-gray-200 text-left text-gray-500 tracking-wider">
                                            Year
                                        </th>
                                        <th className="px-2 py-2 border-r-2 border-gray-200 text-left text-gray-500 tracking-wider">
                                            Updated By
                                        </th>
                                        <th className="px-2 py-2 border-r-2 border-gray-200 text-left text-gray-500 tracking-wider">
                                            Updated On
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr className="font-semibold border-b-2 border-blue-500">
                                        <td className="flex items-center gap-1 px-2 pt-5 text-blue-500 whitespace-nowrap text-sm">
                                            {show === true ? (
                                                <FaRegSquareMinus onClick={() => setShow(false)} />
                                            ) : (
                                                <FaRegPlusSquare onClick={() => setShow(true)} />
                                            )}
                                            Forecast Group &raquo; Code : TMG8.GEUSTP.DMPXXX_(2)
                                        </td>
                                        <td></td><td></td><td></td><td></td>
                                    </tr>
                                    {show === true && (
                                        <tr className="bg-yellow-50 text-gray-500 hover:bg-blue-400 hover:text-white font-semibold">
                                            <td className="px-2 py-1 whitespace-nowrap text-sm">
                                                EMEA ProSupp PV MTP Case
                                            </td>
                                            <td className="px-2 py-1 whitespace-nowrap text-sm">
                                                December
                                            </td>
                                            <td className="px-2 py-1 whitespace-nowrap text-sm">
                                                2024
                                            </td>
                                            <td className="px-2 py-1 whitespace-nowrap text-sm">
                                                ABDUL_LATIF_ANSARI
                                            </td>
                                            <td className="px-2 py-1 whitespace-nowrap text-sm">
                                                2/6/2025 5:31:50 PM
                                            </td>
                                        </tr>
                                    )}

                                    {show === true && (
                                        <tr className="bg-blue-400 text-white font-semibold">
                                            <td className="px-2 py-1 whitespace-nowrap text-sm">
                                                EMEA ProSupp PV MTP Case
                                            </td>
                                            <td className="px-2 py-1 whitespace-nowrap text-sm">
                                                January
                                            </td>
                                            <td className="px-2 py-1 whitespace-nowrap text-sm">
                                                2025
                                            </td>
                                            <td className="px-2 py-1 whitespace-nowrap text-sm">
                                                ABDUL_LATIF_ANSARI
                                            </td>
                                            <td className="px-2 py-1 whitespace-nowrap text-sm">
                                                2/7/2025 1:32:34 PM
                                            </td>
                                        </tr>
                                    )}
                                    <tr className="font-semibold border-b-2 border-blue-500">
                                        <td className="flex items-center gap-1 px-2 pt-5 text-blue-500 whitespace-nowrap text-sm">
                                            <FaRegPlusSquare />  Forecast Group &raquo; Code : xTMG8.GEUSTP.DMPXXX_(12)
                                        </td>
                                        <td></td><td></td><td></td><td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='flex items-center justify-between py-1 bg-gray-200'>
                        <div className=" text-gray-600 flex items-center gap-2">
                            <FaRectangleXmark className='text-red-500' />
                            <FaRegCheckSquare className='text-green-500' />
                            <p className='text-xs text-gray-700 font-semibold'>(Forecast Group &raquo; Code contains TMG8.GEUSTP.DMPXXX_)</p>
                        </div>
                        <div className="flex justify-end ">
                            <button className="bg-gray-200 text-gray-600 px-3 py-2 border border-gray-400 rounded-sm
                                                                                           font-bold text-sm">Customize...</button>
                        </div>
                    </div>
                    <div className='flex items-center justify-between py-1 bg-blue-500'>
                        <div className=" text-gray-600 px-2 flex items-center gap-2">
                            <p className='text-sm text-white font-semibold'>
                                0 of 1 items Selected
                            </p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
