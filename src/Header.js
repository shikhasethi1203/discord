import React from 'react';
import './Header.css';
// import Chat from "./Chat"
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditLocationRoundedIcon from '@mui/icons-material/EditLocationRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
function Header({channelName}) {
  return (
    <div className='chatHeader'>
        <div className="chatHeader_left">
            <h3>
                <span className="chatHeader_hash">
                #
                </span>
                {channelName}
            </h3>
        </div>
        <div className="chatHeader_right">
            <NotificationsIcon/>
            <EditLocationRoundedIcon/>
            <PeopleAltRoundedIcon/>

            <div className="chatHeader_search">
                <input type="text" placeholder='Search' />
                <SearchRoundedIcon/>
            </div>

            <SendRoundedIcon/>
            <HelpRoundedIcon/>
     {/* <Chat/> */}
        </div>
    </div>
  )
}

export default Header