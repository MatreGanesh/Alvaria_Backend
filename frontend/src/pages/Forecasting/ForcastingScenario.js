import React, { useEffect, useRef, useState } from "react";
import { BsTriangle } from "react-icons/bs";
import { LiaShareAltSquareSolid } from "react-icons/lia";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaRectangleXmark, FaRegSquareMinus } from "react-icons/fa6";
import { FiPlusSquare } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import ForcastingScenarioIDP from "./PopUp/ForcastingScenarioIDP";


export default function ForcastingScenario() {

    const [toggle, setToggle] = useState(null);
    const [selectedRowIndex, setSelectedRowIndex] = useState(null);
    const [idpVisible, setIdpVisible] = useState(false);
    const [topToggle, setTopToggle] = useState(false);

    const tableRef = useRef(null);
    const popupRef = useRef(null);
    const dropdownRef = useRef(null);



    const handelToggle = (tab) => {
        setToggle((prevTab) => (prevTab === tab ? null : tab))
    }

    const handleDoubleClick = (index) => {
        setSelectedRowIndex(index);
        setIdpVisible(false); // Reset any open popup on new selection
    };

    const handleRightClick = (e, index) => {
        e.preventDefault();
        setSelectedRowIndex(index);
        setIdpVisible(true);
    };

    useEffect(() => {
        localStorage.setItem('showSaveClose', 'true');

        return () => {
            localStorage.removeItem('showSaveClose');
        };
    }, []);



    useEffect(() => {

        // localStorage.setItem('Component', 'forcastingScenario');

        const handleClickOutside = (event) => {
            const outsideTable = tableRef.current && !tableRef.current.contains(event.target);
            const outsidePopup = popupRef.current && !popupRef.current.contains(event.target);

            if (idpVisible && outsidePopup && outsideTable) {
                setIdpVisible(false);
            }

            if (selectedRowIndex !== null && outsideTable) {
                setSelectedRowIndex(null); // Clear blue background on outside click
            }

            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setTopToggle(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [idpVisible, selectedRowIndex]);





    return (
        <>
            <div className="w-full h-[90vh] bg-gray-100 overflow-auto mx-auto flex flex-col">
                <div className="min-w-full min-h-[90vh] flex flex-col">
                    <div className="bg-gradient-to-tr md:text-sm to-blue-400 from-blue-800 shadow-md text-white px-3 py-1 font-bold">
                        <h1 className="font-semibold">Forecasting Scenarios</h1>
                    </div>
                    <div className="bg-gray-100 shadow-md flex-grow flex flex-col">
                        {/* <div className="flex items-center border-b border-gray-200">
                            <div className="flex items-center justify-between p-1 m-2 w-3/6 md:w-1/6 text-sm font-semibold bg-white">
                                Forecast Group Code

                            </div>
                        </div> */}
                        <div className="flex items-center justify-between p-1 m-2 w-3/6 md:w-1/6 text-sm font-semibold bg-white" >
                            Forecast Group Code
                            <span className="flex items-center gap-1">
                                <BsTriangle className="text-gray-500" onClick={() => setTopToggle(!topToggle)} />
                                <LiaShareAltSquareSolid className="-rotate-90 text-blue-500 w-5 h-5" />
                            </span>
                            {topToggle &&
                                <div ref={dropdownRef} className="border absolute p-1 translate-x-[12vw] top-[16svh] border-gray-700 bg-white 
                                                shadow-md shadow-black  max-w-[200px] max-h-[500px] overflow-y-scroll">
                                    <div className="px-1 py-1 text-xs font-sans text-black space-y-2 font-semibold  ">
                                        <label className="flex items-center gap-2 space-x-1">
                                            <input type="checkbox" />  (All)
                                        </label>
                                        <label className="flex items-center gap-2 space-x-1">
                                            <input type="checkbox" /> (Custom…)
                                        </label>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="overflow-x-auto flex-grow">
                            <table ref={tableRef} className="min-w-full bg-white">
                                <thead className="bg-white border-b border-gray-200">
                                    <tr>
                                        <th className="px-2 text-left text-sm font-semibold border-x-2 border-gray-200">
                                            Forecast Group
                                        </th>
                                        <th
                                            className="px-2 text-center text-sm font-semibold border-x-2 border-gray-200"
                                            colSpan={7}
                                        >
                                            Scenario
                                        </th>
                                        <th
                                            className="px-2 text-center text-sm font-semibold border-x-2 border-gray-200"
                                            colSpan={2}
                                        >
                                            Updated
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="p-2 text-left text-sm font-semibold border-x-2 border-gray-200">
                                            Description
                                        </th>
                                        <th className="p-2 text-left text-sm font-semibold border-x-2 border-gray-200">
                                            Default
                                        </th>
                                        <th className="p-2 text-left text-sm font-semibold border-x-2 border-gray-200">
                                            Code
                                        </th>
                                        <th className="p-2 text-left text-sm font-semibold border-x-2 border-gray-200">
                                            Description
                                        </th>
                                        <th className="p-2 text-left text-sm font-semibold border-x-2 border-gray-200">
                                            Forecasting Basis
                                        </th>
                                        <th className="p-2 text-left text-sm font-semibold border-x-2 border-gray-200">
                                            Staffing Basis
                                        </th>
                                        <th className="p-2 text-left text-sm font-semibold border-x-2 border-gray-200">
                                            Multi-Channel Staffing Basis
                                        </th>
                                        <th className="p-2 text-left text-sm font-semibold border-x-2 border-gray-200">
                                            Fiscal Calendar
                                        </th>
                                        <th className="p-2 text-left text-sm font-semibold border-x-2 border-gray-200">
                                            Updated By
                                        </th>
                                        <th className="p-2 text-left text-sm font-semibold border-x-2 border-gray-200">
                                            Updated On
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className={`${toggle ? 'bg-blue-600 text-white' : ''} text-blue-600`}>
                                        <td
                                            colSpan="11"
                                            className="px-2 pt-5  text-sm border-2 border-gray-200 font-semibold"
                                        >
                                            <span className="flex items-center gap-1"
                                                onClick={() => handelToggle('TWAL.GEMMIRD.DGQXXX_(1)')}>
                                                {toggle === 'TWAL.GEMMIRD.DGQXXX_(1)' ?
                                                    (<FiPlusSquare />) : (<FaRegSquareMinus />)}
                                                Forecast Group Code : TWAL.GEMMIRD.DGQXXX_(1)
                                            </span>
                                        </td>
                                    </tr>

                                    {toggle === 'TWAL.GEMMIRD.DGQXXX_(1)' && (
                                        <>
                                            <tr className={`border-b border-gray-200 ${selectedRowIndex === 0 ? 'bg-blue-500 text-white' : 'bg-yellow-100'}`}
                                                onDoubleClick={() => handleDoubleClick(0)}
                                                onContextMenu={(e) => handleRightClick(e, 0)}>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    EMEA Solutio…
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200 text-center">
                                                    <i className="fas fa-check text-green-500"></i>
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    EMEA Solutio…
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    EMEA Solutio…
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    User-supplied growth rat…
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    Service level
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    Average delay
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    FWEEK
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    BRIAN_TAN
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    7/08/2024
                                                </td>
                                            </tr>
                                            <tr className={`border-b border-gray-200 ${selectedRowIndex === 1 ? 'bg-blue-500 text-white' : ''}`}
                                                onDoubleClick={() => handleDoubleClick(1)}
                                                onContextMenu={(e) => handleRightClick(e, 1)}>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    EMEA Solutio…
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200 text-center">
                                                    <i className="fas fa-check text-green-500"></i>
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    HIST
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    Historical Growth
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    Historical growth rate
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    Average delay
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    Average delay
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    MNTHLY
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    AXEL_MYLES
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    9/28/2024
                                                </td>
                                            </tr>
                                            <tr className={`border-b border-gray-200 ${selectedRowIndex === 2 ? 'bg-blue-500 text-white' : 'bg-yellow-100'}`}
                                                onDoubleClick={() => handleDoubleClick(2)}
                                                onContextMenu={(e) => handleRightClick(e, 2)}>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    EMEA Solutio…
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200 text-center">
                                                    <FaCheck className="text-green-500 w-4 h-4" />
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    WEEKLY
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    Weekly Forecast
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    User-supplied fiscal volume
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    Service level
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    Service level
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    FWEEK
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    CHETAN_P…
                                                </td>
                                                <td className="px-2 py-1 text-sm border-2 border-gray-200">
                                                    5/15/2025
                                                </td>
                                            </tr>
                                        </>
                                    )}
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
                                {selectedRowIndex !== null ? `1 of 1 items Selected` : '0 of 1 items Selected'}
                            </p>
                        </div>
                    </div>
                </div>
                {idpVisible && (
                    <div ref={popupRef}>
                        <ForcastingScenarioIDP />
                    </div>
                )}

            </div >
        </>
    );
};

