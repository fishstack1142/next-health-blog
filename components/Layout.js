import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

class Layout extends Component {
    render() {
        const { children, title="blog title" } = this.props;
        return (
            <div>
                <Head>
                <title>{title}</title>
                <meta charset="utf-8" />
                    <link rel="shortcut icon" href="%PUBLIC_URL%/pizza.ico" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />

                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="../static/css/style.css"/>
                </Head>

                <Header />
                    {children}

                <Footer />
            </div>
        );
    }
}

export default Layout;