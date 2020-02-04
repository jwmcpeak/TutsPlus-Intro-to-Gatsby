import React from "react"
import {graphql} from 'gatsby';
import Layout from './../components/layout';
import {Helmet} from 'react-helmet';
export const query = graphql`
    query($firstName: String, $lastName: String) {
        employeesJson(firstName: {eq: $firstName}, lastName: {eq: $lastName}) {
            title
        }
    }
`;


export default ({pageContext, data}) => (
    <Layout>
        <Helmet>
            <title>{pageContext.firstName} {pageContext.lastName}</title>
        </Helmet>
        
        
        <p>{pageContext.firstName} {pageContext.lastName}</p>
        <h3>{data.employeesJson.title}</h3>
    </Layout>
);
