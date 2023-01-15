import React from "react";
import { Link } from "react-router-dom";
import {ApiDelete} from "../../common/Api";
import {DepartmentGraph} from "./DepartmentGraph"

const DepartmentTable = (props) => {
    // const deletee = (id) => {
    //     ApiDelete("/api/movies/" + id).then((data) => props.delete());
    // };

    return (
        <div>
            <DepartmentGraph/>
            {/*<p>*/}
            {/*    {props.label} {props.items.length}*/}
            {/*</p>*/}

            {/*<table className="table table-bordered">*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th>Název</th>*/}
            {/*        <th>kommentář</th>*/}
            {/*        <th colSpan={3}>Akce</th>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*    {props.items.map((item, index) => (*/}
            {/*        <tr >*/}
            {/*            /!*<td>{index + 1}</td>*!/*/}
            {/*            <td>{item.name}</td>*/}
            {/*            <td>{item.comment}</td>*/}
            {/*            <td>*/}
            {/*                <div className="btn-group">*/}
            {/*                    <Link*/}
            {/*                        to={"/movies/show/" + item.departmentId}*/}
            {/*                        className="btn btn-sm btn-info"*/}
            {/*                    >*/}
            {/*                        Zobrazit*/}
            {/*                    </Link>*/}
            {/*                    <Link*/}
            {/*                        to={"/movies/edit/" + item.departmentId}*/}
            {/*                        className="btn btn-sm btn-warning"*/}
            {/*                    >*/}
            {/*                        Upravit*/}
            {/*                    </Link>*/}
            {/*                    /!*<button*!/*/}
            {/*                    /!*    onClick={deletee.bind(this, item._id)}*!/*/}
            {/*                    /!*    className="btn btn-sm btn-danger"*!/*/}
            {/*                    /!*>*!/*/}
            {/*                    /!*    Odstranit*!/*/}
            {/*                    /!*</button>*!/*/}
            {/*                </div>*/}
            {/*            </td>*/}
            {/*        </tr>*/}
            {/*    ))}*/}
            {/*    </tbody>*/}
            {/*</table>*/}
            {/*<Link to={"/movies/create"} className="btn btn-success">*/}
            {/*    Nové oddělení*/}
            {/*</Link>*/}
        </div>
    );
};

export default DepartmentTable;
