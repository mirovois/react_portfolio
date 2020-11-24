import React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import AssignmentSharpIcon from '@material-ui/icons/AssignmentIndSharp';
import AddIcCallSharpIcon from '@material-ui/icons/AddIcCallSharp';
import EventNoteIcon from '@material-ui/icons/EventNote';


export const links=[
    {
     id:1,
     url:'/',
     icon: <HomeIcon />,
     title:'Home'  
    },
    {
     id:2,
     url:'/projects',
     icon: <EventNoteIcon />,
     title:'Projects'
    },
    {
     id:3,
     url:'/resume',
     icon: <AssignmentSharpIcon />,
     title:'Resume'
    },
    {
     id:4,
     url:'/contacts',
     icon: <AddIcCallSharpIcon />,
     title:'ContactMe'
     },
    

]
