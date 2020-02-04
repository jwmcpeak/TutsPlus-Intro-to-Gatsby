import React from "react"
import {Link} from 'gatsby';
import Layout from './../components/layout';

export default () => (
    <Layout>
        <span className="text-danger">This is the about page!</span>

        <div>
            <Link to="/">Go to index.</Link>
        </div>
    </Layout>
);
