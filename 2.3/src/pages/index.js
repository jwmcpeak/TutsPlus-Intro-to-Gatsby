import React from "react"
import {Link} from 'gatsby';
import Layout from './../components/layout';

export default () => (
    <Layout>
        <span className="text-danger">Hello world!</span>

        <div>
            <Link to="/about/">Go to about.</Link>
        </div>
    </Layout>
);
