import React from 'react'
import { BsTriangle } from "react-icons/bs";
import { LiaShareAltSquareSolid } from "react-icons/lia";
import { FiPlusSquare } from "react-icons/fi";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaRectangleXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

const checkMark = <FaCheck />

const data = [
    {
        "description1": "NA_Enterprise_Triage_CD_Upsell",
        "description": "New Year +2",
        "factor": 1.1,
        "date": "1/3/2025"
    },
    {
        "description1": "NA_Enterprise_Triage_CD_Upsell",
        "description": "New Year +1",
        "factor": 1.1,
        "date": "1/2/2025"
    },
    {
        "description1": "NA_Enterprise_Triage_CD_Upsell",
        "description": "New Year Day",
        "factor": 0.3,
        "date": "1/1/2025"
    },
    {
        "description1": "NA_Enterprise_Triage_CD_Upsell",
        "description": "New Year -1",
        "factor": 1.2,
        "legel": checkMark,
        "date": "12/31/2024"
    },
    {
        "description1": "NA_Enterprise_Triage_CD_Upsell",
        "description": "New Year -2",
        "factor": 1.4,
        "date": "12/30/2024"
    },
    {
        "description1": "NA_Enterprise_Triage_CD_Upsell",
        "description": "Christmas Day +2",
        "factor": 1.4,
        "date": "12/27/2024"
    },
    {
        "description1": "NA_Enterprise_Triage_CD_Upsell",
        "description": "Christmas Day +1",
        "factor": 1.3,
        "date": "12/26/2024"
    },
    {
        "description1": "NA_Enterprise_Triage_CD_Upsell",
        "description": "Christmas Day",
        "factor": 0.3,
        "legel": checkMark,
        "date": "12/25/2024"
    },
    {
        "description1": "NA_Enterprise_Triage_CD_Upsell",
        "description": "Christmas Eve",
        "factor": 0.2,
        "date": "12/24/2024"
    },
    {
        "description1": "NA_Enterprise_Triage_CD_Upsell",
        "description": "Christmas week",
        "factor": 1.7,
        "date": "12/23/2024"
    },
    {
        "description1": "NA_Enterprise_Triage_CD_Upsell",
        "description": "Christmas week",
        "factor": 1.4,
        "date": "12/22/2024"
    },
    {
        "description1": "NA_Enterprise_Triage_CD_Upsell",
        "description": "Christmas week",
        "factor": 1.2,
        "date": "12/21/2024"
    },
    {
        "description1": "NA_Enterprise_Triage_CD_Upsell",
        "description": "Thanksgiving +1",
        "factor": 0.7,
        "date": "11/29/2024"
    },
    {
        "description1": "NA_Enterprise_Triage_CD_Upsell",
        "description": "Thanksgiving",
        "factor": 0.55,
        "legel": checkMark,
        "date": "11/28/2024"
    },
    {
        "description1": "NA_Enterprise_Triage_CD_Upsell",
        "description": "Thanksgiving -1",
        "factor": 0.95,
        "date": "11/27/2024"
    },
    {
        "description1": "NA_Enterprise_Triage_CD_Upsell",
        "description": "Labor Day +2",
        "factor": 1.05,
        "date": "9/4/2024",
        "memo": "GIST"
    },
    {
        "description1": "NA_Enterprise_Triage_CD_Upsell",
        "description": "Labor Day +1",
        "factor": 1.1,
        "date": "9/3/2024",
        "memo": "GIST"
    },
    {
        "description1": "NA_Enterprise_Triage_CD_Upsell",
        "description": "Labor Day",
        "factor": 0.55,
        "date": "9/2/2024",
        "memo": "GIST"
    },
    {
        "description1": "NA_Enterprise_Triage_CD_Upsell",
        "description": "Labor Day -1",
        "factor": 1.1,
        "date": "9/1/2024",

    },
    {
        "description1": "NA_Enterprise_Triage_CD_Upsell",
        "description": "Labor Day -2",
        "factor": 0.86,
        "legel": checkMark,
        "date": "8/31/2024"
    },
    {
        "description1": "NA_Enterprise_Triage_CD_Upsell",
        "description": "7/28/2024",
        "factor": 0.86,
        "date": "7/28/2024",
        "memo": "50%"
    },
    {
        "description1": "NA_Enterprise_Triage_CD_Upsell",
        "description": "7/27/2024",
        "factor": 0.7784,
        "date": "7/27/2024"
    },
    {
        "description1": "NA_Enterprise_Triage_CD_Upsell",
        "description": "7/21/2024",
        "factor": 0.7784,
        "date": "7/21/2024"
    }
]


export default function HolidayFactors() {
    return (
        <>
            <div className="w-full h-[90vh] bg-gray-100 overflow-auto mx-auto flex flex-col">
                <div className="bg-gradient-to-tr md:text-sm to-blue-400 from-blue-800 shadow-md text-white px-3 py-1 font-bold">
                    <h1 className="font-bold">Holiday Factors</h1>
                </div>
                <div className='flex-grow bg-white flex flex-col overflow-auto'>
                    <div className="flex items-center bg-gray-100">
                        <div className="flex items-center justify-between p-1 m-2 w-3/6 md:w-1/6 text-sm font-semibold bg-white">
                            Forecast Group Code
                            <span className="flex items-center gap-1">
                                <BsTriangle className="text-gray-500" />
                                <LiaShareAltSquareSolid className="-rotate-90 text-blue-500 w-5 h-5" />
                            </span>
                        </div>
                    </div>
                    <div className="overflow-auto flex-grow">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr className="bg-white text-gray-700 text-center">
                                    <th className="border-r font-semibold border-gray-300 px-1 py-1">
                                        Forecast Group
                                    </th>
                                    <th colSpan={5} className="border-r font-semibold border-gray-300 px-1 py-1">
                                        Holiday Factor
                                    </th>
                                </tr>

                                <tr className="bg-white text-gray-700 ">
                                    <th className="border-r border-b font-semibold border-gray-300 px-1 py-1 text-left">
                                        Description
                                    </th>
                                    <th className="border-r border-b font-semibold border-gray-300 px-1 py-1 text-left">
                                        Description
                                    </th>
                                    <th className="border-r border-b font-semibold border-gray-300 px-1 py-1 text-left">
                                        Factor
                                    </th>
                                    <th className="border-r border-b font-semibold border-gray-300 px-1 py-1 text-left">
                                        Legal
                                    </th>
                                    <th className="border-r border-b font-semibold border-gray-300 px-1 py-1 text-left">
                                        Date
                                    </th>
                                    <th className="border-r border-b font-semibold border-gray-300 px-1 py-1 text-left">
                                        Memo
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="font-semibold border-b-2 border-blue-500 bg-gray-200">
                                    <td className="text-sm px-1 py-1 pt-4 flex items-center gap-1">
                                        <FiPlusSquare className='text-blue-500 cursor-pointer' /> Forecast Group » Code : TWALLETGIS.DM15XXC_ (12)
                                    </td>
                                    <td></td><td></td><td></td><td></td><td></td>
                                </tr>
                                <tr className="font-semibold border-b-2 border-blue-500 text-blue-500 hover:text-black hover:bg-gray-200">
                                    <td className="text-sm px-1 py-1 pt-4 flex items-center gap-1 ">
                                        <FiPlusSquare className='text-blue-500 cursor-pointer' /> Forecast Group » Code : TWALLETGIS.DM15XXOE_ (12)
                                    </td>
                                    <td></td><td></td><td></td><td></td><td></td>
                                </tr>
                                <tr className="font-semibold border-b-2 border-blue-500 text-blue-500 hover:text-black hover:bg-gray-200">
                                    <td className="text-sm px-1 py-1 pt-4 flex items-center gap-1 ">
                                        <FiPlusSquare className='text-blue-500 cursor-pointer' /> Forecast Group » Code : TWALLETGIS.DM15XXV_ (158)
                                    </td>
                                    <td></td><td></td><td></td><td></td><td></td>
                                </tr>
                            </tbody>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {
                                    data.map((val, index) => (
                                        <tr key={index}
                                            className={`${index % 2 === 0 ? 'bg-yellow-50' : ''} font-semibold`}>
                                            <td className="text-sm border-x px-1 py-1">{val.description1}</td>
                                            <td className="text-sm border-x px-1 py-1">{val.description}</td>
                                            <td className="text-sm border-x px-1 py-1">{val.factor}</td>
                                            <td className="text-sm border-x px-1 py-1 text-green-500">{val.legel}</td>
                                            <td className="text-sm border-x px-1 py-1">{val.date}</td>
                                            <td className="text-sm border-x px-1 py-1">{val.memo}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='flex items-center justify-between py-1 bg-gray-200'>
                    <div className=" text-gray-600 flex items-center gap-2">
                        <FaRectangleXmark className='text-red-500' />
                        <FaRegCheckSquare className='text-green-500' />
                        <p className='text-xs text-gray-700 font-semibold'>(AutoRun Description contains TMDE.IEUSTP.DCWDEM_)</p>
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
        </>
    )
}
