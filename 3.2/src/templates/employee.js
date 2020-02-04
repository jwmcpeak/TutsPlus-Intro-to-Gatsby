import React from "react"
import {Link} from 'gatsby';
import Layout from './../components/layout';
import {Helmet} from 'react-helmet';


export default ({pageContext}) => (
    <Layout>
        <Helmet>
            <title>{pageContext.firstName} {pageContext.lastName}</title>
        </Helmet>
        
        <h3>{pageContext.title}</h3>
        <p>{pageContext.firstName} {pageContext.lastName}</p>
    </Layout>
);
