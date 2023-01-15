import React, { useState, useEffect } from "react";
import {ApiGet} from "../../common/Api" ;
import DepartmentTable from "./DepartmentTable" ;


const DepartmentIndex = (props) => {
    const [departmentListState, setDepartmentListState] = useState([]);
    // const [actorListState, setActorList] = useState([]);
    // const [genreListState, setGenreList] = useState([]);
    // const [moviesState, setMovies] = useState([]);
    // const [filterState, setFilter] = useState({
    //     directorID: undefined,
    //     actorID: undefined,
    //     genre: undefined,
    //     fromYear: undefined,
    //     toYear: undefined,
    //     limit: undefined,
    // });
    //
    // const deletee = () => {
    //     ApiGet("/api/movies").then((data) => setMovies(data));
    // };
    //
    // useEffect(() => {
    //     ApiGet("/department/getall","").then((data) => setDepartmentListState(data));
    // }, []);

    // const handleChange = (e) => {
    //     // pokud vybereme prázdnou hodnotu (máme definováno jako true/false/'' v komponentách), nastavíme na undefined
    //     if (e.target.value === "false" || e.target.value === "true" || e.target.value === '') {
    //         setFilter(prevState => {
    //             return {...prevState, [e.target.name]: undefined}
    //         });
    //     } else {
    //         setFilter(prevState => {
    //             return { ...prevState, [e.target.name]: e.target.value}
    //         });
    //     }
    // };
    const handleSubmit = (e) => {
        e.preventDefault();
        // const params = filterState;
        //console.log(filterState)

        ApiGet("/department/getall", "").then((data) => setDepartmentListState(data));
    };

    return (
        <div>
            <h3>department list</h3>
            {/*<hr />*/}
            {/*<MovieFilter*/}
            {/*    handleChange={handleChange}*/}
            {/*    handleSubmit={handleSubmit}*/}
            {/*    directorList={directorListState}*/}
            {/*    actorList={actorListState}*/}
            {/*    genreList={genreListState}*/}
            {/*    filter={filterState}*/}
            {/*    confirm="Filtrovat filmy"*/}
            {/*/>*/}
            {/*<hr />*/}
            <DepartmentTable items={departmentListState} label="Počet oddělení:" />
        </div>
    );
};

export default DepartmentIndex;
