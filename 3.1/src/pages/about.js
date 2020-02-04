import React from "react"
import {Link} from 'gatsby';
import Layout from './../components/layout';
import {Helmet} from 'react-helmet';


export default () => (
    <Layout>
        <Helmet>
            <title>About Us</title>
        </Helmet>
        <span className="text-danger">This is the about page!</span>

        <div>
            <Link to="/">Go to index.</Link>
        </div>
    </Layout>
);
