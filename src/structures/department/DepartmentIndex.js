import React, { useState, useEffect } from "react";
import DepartmentTable from "./DepartmentTable" ;


const DepartmentIndex = (props) => {
    return (
        <div>
            <h3>department list</h3>
            <DepartmentTable/>
        </div>
    );
};

export default DepartmentIndex;
