import React, { useState } from 'react'

export default function CustomIntraDayIdp() {

    const [activeTab, setActiveTab] = useState('General');

    const handelActivTabs = (tab) => {
        setActiveTab((prevTab) => (prevTab === tab ? tab : tab))
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-black/30 font-sans">
            <div className="w-[500px] min-h-[500px] border border-gray-300 bg-white shadow-md shadow-black" role="dialog" aria-modal="true" aria-labelledby="dialog-title">


                <div className="flex items-center justify-between border-b border-gray-300 px-3 py-1 select-none">
                    <h1 id="dialog-title" className="text-[13px] font-normal text-black leading-none">
                        Create Intra-Day Performance
                    </h1>
                    <button
                        aria-label="Close"
                        className="w-6 h-6 flex items-center space-y-2 text-[14px] justify-center text-black hover:bg-gray-300 rounded"
                        disabled
                        title="Disabled in HTML-only version"
                    >
                        ×
                    </button>
                </div>

                <div className="bg-[#fbf8f8] p-2 pb-0">

                    <div
                        className="flex text-xs font-semibold select-none"
                        aria-label="Tabs">
                        <button
                            className={`${activeTab === 'General' ? "border-[2px] border-b-0 font-bold bg-white py-2" : "border-[1px]"} pb-1 text-gray-900 px-3 py-1.5`}
                            aria-current="page" type="button"
                            onClick={() => handelActivTabs('General')}
                        >
                            General
                        </button>
                        <button
                            className={`${activeTab === 'Forecast Groups' ? "border-[2px] border-b-0 font-bold bg-white py-2" : "border-[1px]"} pb-1 text-gray-900 px-3 py-1.5`}
                            tabindex="-1" aria-disabled="true"
                            type="button"
                            onClick={() => handelActivTabs('Forecast Groups')}
                        >
                            Forecast Groups
                        </button>
                        <button
                            className={`${activeTab === 'Staff Groups' ? "border-[2px] border-b-0 font-bold bg-white py-2" : "border-[1px]"} pb-1 text-gray-900 px-3 py-1.5`}
                            tabindex="-1" aria-disabled="true"
                            type="button"
                            onClick={() => handelActivTabs('Staff Groups')}
                        >
                            Staff Groups
                        </button>
                        <button
                            className={`${activeTab === 'AutoRun' ? "border-[2px] border-b-0 font-bold bg-white py-2" : "border-[1px]"} pb-1 text-gray-900 px-3 py-1.5`}
                            tabindex="-1" aria-disabled="true"
                            type="button"
                            onClick={() => handelActivTabs('AutoRun')}
                        >
                            AutoRun
                        </button>
                    </div>

                    {activeTab === 'General' && (
                        <div className=''>
                            <form className="space-y-3 p-2 border-t-0 border-[2px] bg-white text-[13px] text-black" onsubmit="return false">
                                {/* <!-- Employee Field --> */}
                                <fieldset className="border border-gray-300 rounded p-3">
                                    <legend className="text-[13px] font-semibold text-black px-1">
                                        Routing set
                                    </legend>
                                    <div className="flex border border-gray-400 rounded space-x-1 p-1 focus-within:border-[2px] focus-within:border-blue-500">
                                        <input
                                            id="employee"
                                            type="text"
                                            value=""
                                            className="flex-grow text-[13px] bg-none text-black focus:outline-none"
                                            aria-label="Employee"
                                        />
                                        <button
                                            type="button"
                                            className="border bg-gray-100 border-gray-400 rounded px-2 text-[13px] text-black hover:bg-gray-200">
                                            ...
                                        </button>
                                    </div>
                                </fieldset>

                                {/* <!-- Nominal Date Range --> */}
                                <fieldset className="border border-gray-300 rounded p-3">
                                    <legend className="text-[13px] font-semibold text-black px-1">
                                        Date range
                                    </legend>
                                    <div className='flex flex-wrap items-center justify-between gap-4'>
                                        <div className="flex items-center space-x-2">
                                            <label for="from-date-range" className="w-[60px] text-[13px] font-semibold text-gray-700">
                                                From:
                                            </label>
                                            <input
                                                type="date"
                                                id="from-date-range"
                                                placeholder="Select date range"
                                                className="border border-gray-400 w-[150px] rounded px-1 py-0.5 text-[13px] text-black  appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                title="Date picker requires JS"
                                            />
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <label for="to-date-range" className="w-[60px] text-[13px] font-semibold text-gray-700">
                                                To:
                                            </label>
                                            <input
                                                type="date"
                                                id="to-date-range"
                                                placeholder="Select date range"
                                                className="border border-gray-400 rounded px-1 py-0.5 text-[13px] text-black  appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                title="Date picker requires JS"
                                            />
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <label for="days-date-range" className="w-[60px] text-[13px] font-semibold text-gray-700">
                                                Days:
                                            </label>
                                            <select
                                                type="option"
                                                id="days-date-range"
                                                placeholder="Select date range"
                                                className="border min-w-[200px] border-gray-400 rounded-sm px-1 py-0.5 text-[13px] text-black  focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                title="Date picker requires JS"
                                            >
                                                <option>Sat-Sun</option>
                                            </ select>
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset className="border border-gray-300 rounded p-3">
                                    <legend className="text-[13px] font-semibold text-black px-1">
                                        Time Range
                                    </legend>
                                    <div className='flex flex-wrap items-center justify-start gap-4'>
                                        <div className="flex items-center space-x-2">
                                            <label for="start-time" className="w-[60px] text-[13px] font-semibold text-gray-700">
                                                Start:
                                            </label>
                                            <input
                                                type="time"
                                                id="start-time"
                                                placeholder="Select date range"
                                                className="border border-gray-400 rounded px-1 py-0.5 text-[13px] text-black  appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                title="Date picker requires JS"
                                            />
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <label for="stop-time" className="w-[60px] text-[13px] font-semibold text-gray-700">
                                                Stop:
                                            </label>
                                            <input
                                                type="time"
                                                id="stop-time"
                                                placeholder="Select date range"
                                                className="border border-gray-400 rounded px-1 py-0.5 text-[13px] text-black  appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                title="Date picker requires JS"
                                            />
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset className="border border-gray-300 rounded p-3">
                                    <legend className="text-[13px] font-semibold text-black px-1 first-letter:underline">
                                        Options
                                    </legend>
                                    <div className='flex flex-wrap items-center justify-between gap-4'>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id="checkbox"
                                                placeholder="Select date range"
                                                title="Date picker requires JS"
                                            />
                                            <p>Delete existing intra-day performance</p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id="checkbox"
                                                placeholder="Select date range"
                                                title="Date picker requires JS"
                                            />
                                            <p>Allocate volume and staff if applicable</p>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                            {/* <!-- Action Buttons --> */}
                            <div className="flex justify-end space-x-2 py-2 p-1 border-t border-gray-300">
                                <button
                                    type="submit"
                                    className="border min-w-[80px] border-gray-400 rounded text-[13px] text-black px-4 py-1 hover:border-2 hover:border-blue-500 bg-gray-200 hover:bg-white"
                                    disabled
                                >
                                    OK
                                </button>
                                <button
                                    type="button"
                                    className="border min-w-[80px] border-gray-400 rounded text-[13px] text-black px-4 py-1 hover:border-2 hover:border-blue-500 bg-gray-200 hover:bg-white"
                                    disabled
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Forecast Groups' && (
                        <div className="bg-[#fff] flex justify-center p-2 pb-0">
                            <div
                                className="text-center text-xs py-5 font-semibold select-none">
                                <span className=''>
                                    No data was available.
                                </span>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Staff Groups' && (
                        <div className="bg-[#fff] flex justify-center p-2 pb-0">
                            <div
                                className="text-center text-xs py-5 font-semibold select-none">
                                <span className=''>
                                    No data was available.
                                </span>
                            </div>
                        </div>
                    )}

                    {activeTab === 'AutoRun' && (
                        <div className="bg-[#fff] flex justify-center p-2 pb-0">
                            <div
                                className="text-center text-xs py-5 font-semibold select-none">
                                <span className=''>
                                    No data was available.
                                </span>
                            </div>
                        </div>
                    )}

                </div>

            </div >
        </div >
    )
}
