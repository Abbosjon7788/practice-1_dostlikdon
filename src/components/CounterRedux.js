import React, {Component} from 'react';
import {decrementNumber, incrementNumber} from "../actions/CounterAction";
import {connect} from "react-redux";

class CounterRedux extends Component {

    render() {
        // console.log(this.props);
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-4 mt-4 offset-4">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="text-center">{this.props.number}</h1>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <button type="button" className="btn btn-success"
                                            onClick={this.props.incrementNumber}>+
                                    </button>
                                    <button type="button" className="btn btn-danger"
                                            onClick={this.props.decrementNumber}>-
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {// bu funksiya store ichidan kerakli state ni olishda ishlatiladi va stateni props ga otkazib beradi
    // console.log(state);
    return {
        number: state.CounterReducer.number
    }

};

export default connect(mapStateToProps, {incrementNumber, decrementNumber})(CounterRedux); //1-qavs ni icihida state bilan action qabul qilib olinadi