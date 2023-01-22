import React, {useEffect, useState} from "react";
import {useQuery, gql} from "@apollo/client";
import {GET_DEPARTMENT_BY_ID} from "../../Graphql/Queries";

const DepartmentDetail = (props) => {
    const [departmentName, setDepartmentName] = useState("");
    const [departmentComment, setdDpartmentComment] = useState(0);
    const [departmenId, setDepartmenId] = useState(0);

    const {error, loading, data} = useQuery(GET_DEPARTMENT_BY_ID);
    useEffect(() => {
        if (data) {
            setDepartmentName(data.name);
            departmentComment(data.comment);
            setDepartmenId(data.departmenId);
        }
    }, [data]);

    return (
        <div>
            <h1>Detail department</h1>
            <hr/>
            {/*<p>{genres.join(" / ")}</p>*/}
            <p>
                <strong>Department name: </strong>
                {departmentName}
                {/*{directorState.name}*/}
                {/*<br />*/}
                {/*<strong>Hrají: </strong>*/}
                {/*{actors.join(", ")}*/}
                {/*<br />*/}
                {/*<strong>Dostupný: </strong>*/}
                {/*{availableState ? "ANO" : "NE"}*/}
                {/*<br />*/}
                {/*<em>Vytvořeno {dateAdded.toLocaleString()}</em>*/}
            </p>
        </div>
    );
};
export default DepartmentDetail;