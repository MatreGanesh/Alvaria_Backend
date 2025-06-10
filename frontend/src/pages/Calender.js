import React from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { FaSun, FaShare } from "react-icons/fa6";
import { FcSearch } from "react-icons/fc";

export default function Calender() {
  return (
    <>
      <div className="flex bg-gray-200 w-full h-[90.5vh] overflow-auto">

        <div className="w-auto lg:w-2/5  border border-gray-200 mr-1 bg-white flex-col flex-grow overflow-auto">
          <div className="w-full bg-white shadow-lg overflow-auto flex-col flex-grow">
            <div className="bg-gradient-to-tr md:text-sm to-blue-700 from-blue-800 text-white font-bold text-sm px-3 py-1 select-text flex items-center justify-between">
              <span className="font-bold">Calendar</span>
              <div className="flex items-center space-x-1">
                <span>January 2025</span>
                <IoMdArrowDropleft className="w-5 h-5" />
                <IoMdArrowDropright className="w-5 h-5" />
                <FcSearch className="w-5 h-5 rotate-90" />
                <FaSun className="text-yellow-400 w-5 h-5" />
                <FaShare className="text-green-500 w-5 h-5" />
              </div>
            </div>
            <div className="grid grid-cols-7 text-center text-xs font-semibold">
              <div className="px-1 py-1 border">Sat</div>
              <div className="px-1 py-1 border">Sun</div>
              <div className="px-1 py-1 border">Mon</div>
              <div className="px-1 py-1 border">Tue</div>
              <div className="px-1 py-1 border">Wed</div>
              <div className="px-1 py-1 border">Thu</div>
              <div className="px-1 py-1 border">Fri</div>
              <div className="px-1 py-1 border bg-yellow-100 h-28">Dec 28</div>
              <div className="px-1 py-1 border bg-yellow-100 h-28">29</div>
              <div className="px-1 py-1 border bg-yellow-100 h-28">30</div>
              <div className="px-1 py-1 border bg-yellow-100 h-28">31</div>
              <div className="px-1 py-1 border bg-blue-100 h-28">
                <div>January 1</div>
                <div className="text-left">0</div>
                <div className="text-left">0</div>
                <div className="text-left">.3</div>
              </div>
              <div className="px-1 py-1 border bg-yellow-50 h-28">2
                <div className="text-left">0</div>
                <div className="text-left">0</div>
                <div className="text-left">0</div>
                <div className="text-left">1.2</div>
              </div>
              <div className="px-1 py-1 border bg-yellow-50 h-28">3
                <div className="text-left">0</div></div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">4
                <div className="text-left">0</div></div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">5
                <div className="text-left">0</div></div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">6
                <div className="text-left">0</div></div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">7
                <div className="text-left">0</div></div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">8
                <div className="text-left">0</div></div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">9
                <div className="text-left">0</div></div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">10
                <div className="text-left">0</div>
              </div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">11
                <div className="text-left">0</div>
              </div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">12
                <div className="text-left">0</div>
              </div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">13
                <div className="text-left">0</div>
              </div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">14
                <div className="text-left">0</div>
              </div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">15
                <div className="text-left">0</div>
              </div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">16
                <div className="text-left">0</div>
              </div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">17
                <div className="text-left">0</div>
              </div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">18
                <div className="text-left">0</div>
              </div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">19
                <div className="text-left">0</div>
              </div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">20
                <div className="text-left">0</div>
              </div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">21
                <div className="text-left">0</div>
              </div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">22
                <div className="text-left">0</div>
              </div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">23
                <div className="text-left">0</div>
              </div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">24
                <div className="text-left">0</div>
              </div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">25
                <div className="text-left">0</div>
              </div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">26
                <div className="text-left">0</div>
              </div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">27
                <div className="text-left">0</div>
              </div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">28
                <div className="text-left">0</div>
              </div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">29
                <div className="text-left">0</div>
              </div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">30
                <div className="text-left">0</div>
              </div>
              <div className="px-1 py-1 border bg-yellow-50 h-24">31
                <div className="text-left">0</div>
              </div>
              <div className="px-1 py-1 border bg-yellow-100 h-24">Feb 1</div>
              <div className="px-1 py-1 border bg-yellow-100 h-24">2</div>
              <div className="px-1 py-1 border bg-yellow-100 h-24">3</div>
              <div className="px-1 py-1 border bg-yellow-100 h-24">4</div>
              <div className="px-1 py-1 border bg-yellow-100 h-24">5</div>
              <div className="px-1 py-1 border bg-yellow-100 h-24">6</div>
              <div className="px-1 py-1 border bg-yellow-100 h-24">7</div>
            </div>
          </div>
        </div>

        <div className="w-full border border-gray-200 bg-white flex flex-col flex-grow  overflow-auto">
          {/* <div className="bg-white border border-gray-200 m-1 w-full flex flex-col flex-grow overflow-auto"> */}
          <div className="bg-gradient-to-tr md:text-sm to-blue-700 from-blue-800 text-white font-bold text-sm px-3 py-1 select-text flex items-center justify-between">
            <h2 className="font-bold ">Daily Values</h2>
          </div>
          <div className="overflow-auto flex-grow">
            <table className="w-full table-fixed text-sm">
              <thead className="sticky top-0 bg-white">
                <tr className="border-2 border-black">
                  <th className="border-2 border-gray-100 p-2 font-semibold" colSpan={2}>
                    Date
                  </th>
                  <th className="border-2 border-gray-100 p-2 font-semibold" colSpan={4}>
                    Daily Value
                  </th>
                </tr>
                <tr className="text-left border-2 border-black">
                  <th className="border-2 border-gray-100 p-2 font-semibold">Day of Week</th>
                  <th className="border-2 border-gray-100 p-2 font-semibold">Date</th>
                  <th className="border-2 border-gray-100 p-2 font-semibold">Actual</th>
                  <th className="border-2 border-gray-100 p-2 font-semibold">Normalized</th>
                  <th className="border-2 border-gray-100 p-2 font-semibold">Holiday Factor</th>
                  <th className="border-2 border-gray-100 p-2 font-semibold">Memo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1 bg-gray-100">Wednesday</td>
                  <td className="border px-2 py-1 bg-gray-100">1/1/2025</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0.3000</td>
                  <td className="border px-2 py-1 text-right"></td>
                </tr>
                <tr className="bg-yellow-50">
                  <td className="border px-2 py-1 bg-gray-100">Thursday</td>
                  <td className="border px-2 py-1 bg-gray-100">1/2/2025</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">1.2000</td>
                  <td className="border px-2 py-1 text-right"></td>
                </tr>
                <tr className="bg-yellow-50">
                  <td className="border px-2 py-1 bg-gray-100">Thursday</td>
                  <td className="border px-2 py-1 bg-gray-100">1/2/2025</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">1.2000</td>
                  <td className="border px-2 py-1 text-right"></td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 bg-gray-100">Wednesday</td>
                  <td className="border px-2 py-1 bg-gray-100">1/1/2025</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0.3000</td>
                  <td className="border px-2 py-1 text-right"></td>
                </tr>
                <tr className="bg-yellow-50">
                  <td className="border px-2 py-1 bg-gray-100">Thursday</td>
                  <td className="border px-2 py-1 bg-gray-100">1/2/2025</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">1.2000</td>
                  <td className="border px-2 py-1 text-right"></td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 bg-gray-100">Wednesday</td>
                  <td className="border px-2 py-1 bg-gray-100">1/1/2025</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0.3000</td>
                  <td className="border px-2 py-1 text-right"></td>
                </tr>
                <tr className="bg-yellow-50">
                  <td className="border px-2 py-1 bg-gray-100">Thursday</td>
                  <td className="border px-2 py-1 bg-gray-100">1/2/2025</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">1.2000</td>
                  <td className="border px-2 py-1 text-right"></td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 bg-gray-100">Wednesday</td>
                  <td className="border px-2 py-1 bg-gray-100">1/1/2025</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0.3000</td>
                  <td className="border px-2 py-1 text-right"></td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 bg-gray-100">Wednesday</td>
                  <td className="border px-2 py-1 bg-gray-100">1/1/2025</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0.3000</td>
                  <td className="border px-2 py-1 text-right"></td>
                </tr>
                <tr className="bg-yellow-50">
                  <td className="border px-2 py-1 bg-gray-100">Thursday</td>
                  <td className="border px-2 py-1 bg-gray-100">1/2/2025</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">1.2000</td>
                  <td className="border px-2 py-1 text-right"></td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 bg-gray-100">Wednesday</td>
                  <td className="border px-2 py-1 bg-gray-100">1/1/2025</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0.3000</td>
                  <td className="border px-2 py-1 text-right"></td>
                </tr>
                <tr className="bg-yellow-50">
                  <td className="border px-2 py-1 bg-gray-100">Thursday</td>
                  <td className="border px-2 py-1 bg-gray-100">1/2/2025</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">1.2000</td>
                  <td className="border px-2 py-1 text-right"></td>
                </tr>
                <tr className="bg-yellow-50">
                  <td className="border px-2 py-1 bg-gray-100">Thursday</td>
                  <td className="border px-2 py-1 bg-gray-100">1/2/2025</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">1.2000</td>
                  <td className="border px-2 py-1 text-right"></td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 bg-gray-100">Wednesday</td>
                  <td className="border px-2 py-1 bg-gray-100">1/1/2025</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0.3000</td>
                  <td className="border px-2 py-1 text-right"></td>
                </tr>
                <tr className="bg-yellow-50">
                  <td className="border px-2 py-1 bg-gray-100">Thursday</td>
                  <td className="border px-2 py-1 bg-gray-100">1/2/2025</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">1.2000</td>
                  <td className="border px-2 py-1 text-right"></td>
                </tr>
                <tr className="bg-yellow-50">
                  <td className="border px-2 py-1 bg-gray-100">Thursday</td>
                  <td className="border px-2 py-1 bg-gray-100">1/2/2025</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">1.2000</td>
                  <td className="border px-2 py-1 text-right"></td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 bg-gray-100">Wednesday</td>
                  <td className="border px-2 py-1 bg-gray-100">1/1/2025</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0.3000</td>
                  <td className="border px-2 py-1 text-right"></td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 bg-gray-100">Wednesday</td>
                  <td className="border px-2 py-1 bg-gray-100">1/1/2025</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0.3000</td>
                  <td className="border px-2 py-1 text-right"></td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-yellow-50 sticky bottom-0">
                  <td className="border px-2 py-1 bg-gray-100">Totals: </td>
                  <td className="border px-2 py-1 bg-gray-100"></td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right">0</td>
                  <td className="border px-2 py-1 text-right"></td>
                  <td className="border px-2 py-1 text-right"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

      </div>
    </>
  );
};

