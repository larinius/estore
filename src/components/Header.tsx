import React from 'react';
import SearchAppBar from './SearchAppBar';
import NotificationSnackbar from './NotificationSnackbar';

const Header = () => {
    return (
        <>
          <SearchAppBar/>
          <NotificationSnackbar/>
        </>
    );
};

export default Header;