import React from 'react'
import "./Sidebar.css"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import CreateIcon from "@material-ui/icons/Create"

function Sidebar() {
    return (
        <div className = "sidebar">
            <div className = "sidebar__header">
                <div className = "sidebar__info">
                    <h2>Intelica</h2>
                    <h3><FiberManualRecordIcon/>Damain Ramsajan </h3>
                </div>
                <CreateIcon/>
            </div>
            <h1>Sidebar</h1>
        </div>
    )
}

export default Sidebar
