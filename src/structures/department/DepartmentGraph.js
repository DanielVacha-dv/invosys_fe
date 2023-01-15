// import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from "@apollo/client";
// import {onError} from "@apollo/client/link/error";
// import React from "react";
// import {GetDepartments} from './GetDepartments'
//
//
//
// const errorLink = onError(({}) => {
//     if (graphqlErrors) {
//         graphqlErrors.map(({message, location, path}) => {
//             alert(`Graphq; error  ${message}`)
//         });
//     }
// });
//
// const link = from([
//     errorLink,
//     new HttpLink({uri: "http://localhost:8083/graphql"}),
// ]);
//
// const client = new ApolloClient({
//     cache: new InMemoryCache(),
//     link: link,
// });
//
// const DepartmentGraph = (props) => {
//     return (
//         <ApolloProvider client={client}> <GetDepartments/> </ApolloProvider>
//     );
// }