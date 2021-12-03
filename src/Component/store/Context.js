import React,{useState} from 'react'

export const MainContest = React.createContext();

const Context = (porps) =>{

    const [sideBar, setsideBar] = useState(false);

    const [isModalVisible,setIsModalVisible] = useState(false);

    const [sideBarClose,setsideBarClose] = useState(false);

    const [datePicker,setDatePicker] = useState(false);
    const [youTubeOpen, setYouTubeOpen] = useState(false)


    const onsideBarOpen = () => {
        setsideBar(true);
    }
    const onsideBarClose=()=>{
        setsideBar(false);
    }
      

    return <MainContest.Provider value={{ sideBar, onsideBarOpen, onsideBarClose, isModalVisible, setIsModalVisible, datePicker, setDatePicker, youTubeOpen, setYouTubeOpen}}>
    
        {porps.children}
    </MainContest.Provider>
};
export default Context;