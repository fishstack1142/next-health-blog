import React from "react";
import Layout from "../components/Layout";

export default class Error extends React.Component {
	static getInitialProps({ res, err }) {

        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
		return { statusCode };
	}

	render() {

        // // const { res, err } = this.props;

        // console.log(this.props.res);
        // console.log(err);

		return (
			<Layout>
				<div className="container">
					<div className="text-center">
						<h3>
							{this.props.statusCode
								? `An error ${this.props.statusCode} occurred on server`
								: "An error occurred on client"}
						</h3>
					</div>
				</div>
			</Layout>
		);
	}
}