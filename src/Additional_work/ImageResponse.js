import React, {Component} from 'react';
import './main.css';

class ImageResponse extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4 mt-4">
                        <div className="card">
                            <div className="card-body">
                                <img src="https://picsum.photos/400" className="image-response w-100" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ImageResponse;