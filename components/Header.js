import React from "react";
import Link from "next/link";


export default class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {date : new Date()};
        //setInterval(() => this.tick(), 1000);
    }

    componentDidMount() {
        console.log('componentDidMount');
        //this.timerID = setInterval(() => this.tick(), 1000);
    }


    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('...componentWillUnmount')
        clearInterval(this.timerID);

    }


    tick() {
        this.setState({date : new Date()});
    }

    render() {
        return (

            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 text-left">
                        <h1 className="text-warning"><Link href="/" ><img style={{height: 75}} src="../static/images/logo/logosummerholiday.png" /></Link>React Healthy E-Commerce </h1>
                    </div>
                    <div className="col-md-4 text-right">
                        <p></p>
                        <ul className="list-inline">
                        
                            <li className="list-inline-item title"><Link href="/" >Main </Link> </li>
                            <li className="list-inline-item title">|</li>
                            <li className="list-inline-item title"><Link href="/about" >About </Link></li>

                        </ul>
                    </div>

                    <hr/>
                </div>
                <hr />
            
            </div>

        );
    }
}