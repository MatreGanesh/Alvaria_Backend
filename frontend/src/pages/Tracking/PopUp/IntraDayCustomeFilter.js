import React from 'react'
import { IoMdClose } from "react-icons/io";


export default function IntraDayCustomeFilter({ setHide }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-black/30">
            <div
                className="max-w-[600px] rounded-md border border-gray-300 shadow-black shadow-md bg-white font-sans text-[13px] text-black"
                role="dialog" aria-modal="true" aria-labelledby="dialog-title">
                <div
                    className="flex items-center justify-between px-3 py-1.5 select-none cursor-default text-[13px] font-normal"
                    id="dialog-title">
                    <span className='text-sm font-semibold'>Custom Filter</span>
                    <IoMdClose className='w-5 h-5 cursor-pointer' onClick={() => setHide(false)} />
                </div>

                <div className="px-3 py-2 bg-gray-200">

                    <p className="font-semibold text-[13px] select-none">Show rows where :</p>

                    <div className='flex items-center flex-row pt-1 pb-4'>
                        <label htmlFor="filter-field"
                            className="text-[13px] w-2/6 font-semibold select-none block">
                            Routing Set &gt; Code
                        </label>
                        <hr className="border-gray-300 w-4/6 font-bold border-[1px]" />
                    </div>

                    <div className="flex items-start space-x-1">
                        <select
                            id="filter-field"
                            name="filter-field"
                            defaultValue=""
                            className=" w-[250px] border border-gray-400 appearance: none rounded-sm text-[13px] text-black px-1 py-1.5 
                            focus:outline-none focus:ring-1 focus:ring-blue-600">
                            <option value="" className='hidden h-[30vh]'>Select</option>
                            <option>equals</option>
                            <option>does not equal</option>
                            <option>is less than</option>
                            <option>is less than or equal to</option>
                            <option>is greater than</option>
                            <option>is greater than or equal to</option>
                            <option>like</option>
                            <option>not like</option>
                            <option>contains</option>
                            <option>does not contain</option>
                            <option>begins with</option>
                            <option>ends with</option>
                            <option>is blank</option>
                            <option>is not blank</option>
                        </select>

                        <div className='flex flex-col gap-2'>
                            <input
                                type="text"
                                className="border border-gray-400 rounded-sm text-[13px] text-black w-[250px] px-1 py-1.5"
                                defaultValue="TMGB.LEUSHI.DCWXXM_"
                                aria-label="Filter input"
                            />

                            <input
                                type="text"
                                className="border border-gray-400 rounded-sm text-[13px] text-black w-[250px] px-1 py-1.5"
                                defaultValue=""
                                aria-label="Filter input"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end space-x-2 mt-4">
                        <button
                            type="button"
                            className="px-10 py-1 border-gray-400  text-[13px] text-black hover:border-blue-600 border-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
                            onClick={() => setHide(false)}>
                            OK
                        </button>
                        <button
                            type="button"
                            className="px-7 py-1 border-gray-400  text-[13px] text-black hover:border-blue-600 border-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
                            onClick={() => setHide(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}
