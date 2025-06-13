
import React, { useEffect, useState } from 'react'
import FiscalVolumesSelect from './FiscalVolumesSelect'
import { useNavigate } from 'react-router-dom';

export default function FiscalVolumes() {


    const [isVisible, setVisible] = useState(false);
    const [FiscalVolumes, setFiscalVolums] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('showSaveClose', 'true');
        return () => {
            localStorage.removeItem('showSaveClose');
        };
    }, []);

    // 🔁 Centralized function to fetch fiscal volumes
    const fetchFiscalVolumes = async () => {
        try {
            const currentUser = localStorage.getItem('user');
            const response = await fetch(
                `${process.env.REACT_APP_API_BASE_URL}/forecasting/forecasting-scenarios/get-fiscal-volumes?userId=${currentUser}`
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log("Results : ", result.data);

            if (!result.success || !result.data.length) {
                console.warn("❌ No fiscal volume data found for user:", currentUser);
            } else {
                setFiscalVolums(result.data);
            }
        } catch (err) {
            console.error('Error fetching user fiscal volumes:', err);
        }
    };

    // ✅ Fetch on initial load
    useEffect(() => {
        fetchFiscalVolumes();
    }, [navigate]);



    return (
        <div className='flex flex-col h-[91vh]'>

            {isVisible && (
                <FiscalVolumesSelect
                    setVisible={setVisible}
                    refreshFiscalVolumes={fetchFiscalVolumes} // ✅ pass it to child
                />
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

            <div className="flex h-full overflow-hidden px-2">
                <div className="flex flex-col w-full overflow-hidden border-x border-gray-700">
                    <div className="flex-1 overflow-auto">

                        <table className="w-full table-auto border-collapse font-normal text-black shadow-gray-500 shadow-md border-x">
                            <thead className='text-sm text-right'>
                                <tr>
                                    <th className="border-r p-1">Start Date</th>
                                    <th className="border-r p-1">Stop Date</th>
                                    <th className="p-1">Supplied Volume</th>
                                </tr>
                            </thead>
                            <tbody className='font-semibold text-sm'>
                                {(Array.isArray(FiscalVolumes) && FiscalVolumes.length > 0) ? (
                                    FiscalVolumes.map((vol, index) => (
                                        <tr key={index} className="bg-[#fffde7] hover:bg-blue-500 hover:text-white">
                                            <td className="border border-[#d4d0c8] p-1">
                                                {vol.start_date || 'N/A'}
                                            </td>
                                            <td className="border border-[#d4d0c8] p-1">
                                                {vol.stop_date || 'N/A'}
                                            </td>
                                            <td className="border border-[#d4d0c8] p-1 text-right">
                                                {vol.supplied_volume || 0}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={3} className="text-center py-2 text-gray-500">
                                            No Fiscal Volume data found for this user.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="sticky bottom-0 z-10">
                        <table className="w-full table-fixed">
                            <tfoot>
                                <tr>
                                    <th
                                        colSpan={3}
                                        className="bg-gradient-to-tr text-left md:text-sm to-blue-400 from-blue-800 shadow-md text-white px-3 py-1 font-bold"
                                    >
                                        0 of 239 Items Selected, 0 of 1 Columns Selected, 0 Cells Selected
                                    </th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>


                {/* <!-- Right side buttons --> */}
                <div className="flex flex-col space-y-2 p-2 w-[10%]">
                    <button className="bg-[#f1eee9] hover:border-blue-600 hover:border-2 border border-[#808080] rounded-sm px-2 py-1 text-[11px] font-normal text-black hover:bg-[#e0e0e0]"
                        onClick={() => setVisible(true)}>
                        Select...
                    </button>
                    <button className="bg-[#f1eee9] hover:border-blue-600 hover:border-2 border border-[#808080] rounded-sm px-2 py-1 text-[11px] font-normal text-black hover:bg-[#e0e0e0]">
                        Delete
                    </button>
                </div>
            </div >
        </div >
    )
}
