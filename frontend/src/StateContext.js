import { createContext, useContext, useState } from "react";

const stateContext = createContext();

export const StateProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(() => JSON.parse(localStorage.getItem('isAuth')) || false);
    const [authToken, setAuthToken] = useState(() => localStorage.getItem('authToken') || false);
    const [category, setCategory] = useState();
    const [db, setDb] = useState();
    const [subCategory, setSubCategory] = useState();
    const [setTrackingEditSegment, showTrackingEditSegment] = useState(false);
    const [showDWM, setShowDWM] = useState(false);
    const [showDateWeekMonth, setShowDateWeekMonth] = useState('weeks')
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedEmployee, setSelectedEmployee] = useState('');
    const [toggleSideBar, setToggleSideBar] = useState(false);
    const [ewfmData, setEwfmData] = useState(null);
    const [timeZone, setTimeZone] = useState({ label: '', bias: '0' });
    const [triggerSave, setTriggerSave] = useState(false);

    const requestSave = () => {
        setTriggerSave(true);
    };

    const resetSave = () => {
        setTriggerSave(false);
    };


    //For Navbar Day, Week and Month
    const handleTabClick = (tab) => {
        setShowDateWeekMonth((prevTab) => (prevTab === tab ? tab : tab));
    };

    return (
        <stateContext.Provider value={{
            isAuth, setIsAuth, category, setCategory, db, setDb,
            subCategory, setSubCategory, setTrackingEditSegment, showTrackingEditSegment,
            showDWM, setShowDWM, handleTabClick, showDateWeekMonth, setShowDateWeekMonth,
            selectedDate, setSelectedDate, selectedEmployee, setSelectedEmployee,
            toggleSideBar, setToggleSideBar, ewfmData, setEwfmData, timeZone, setTimeZone,
            authToken, setAuthToken, triggerSave, requestSave, resetSave
        }}>
            {children}
        </stateContext.Provider>
    )
};

export const useStateContext = () => useContext(stateContext);