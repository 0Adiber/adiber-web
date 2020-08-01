import React, { Component } from 'react';

//CSS
import './Video.scss';

//Fontawesome
import { faThumbsUp, faComment, faChartLine} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//configs
var HOST = require('../../configs/host.json').host;

class Video extends Component {
    render(){
        return(

            <div className="video-wrapper">
                <div className="rainbow">
                    <div className="video-preview">
                        <a href={`https://youtube.com/watch?v=${this.props.video.videoId}`} target="_blank">
                            <img src={this.props.video.thumbnail} />
                        </a>
                    </div>
                </div>
                <p className="video-title">{this.props.video.title}</p>
                <div className="video-stats">
                    <p><FontAwesomeIcon icon={faChartLine} /><span>{this.props.video.views}</span></p>
                    <p><FontAwesomeIcon icon={faThumbsUp} /><span>{this.props.video.likes}</span></p>
                    <p><FontAwesomeIcon icon={faComment} /><span>{this.props.video.comments}</span></p>
                </div>
            </div>

        );
    }
}

export default Video;