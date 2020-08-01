import React, { Component } from 'react';
import $ from 'jquery';
import Video from '../../components/Video/Video'

//CSS
import './Youtube.scss';

//configs
const HOST = require('../../configs/host.json').host;

class Youtube extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: {
                error: null,
                isLoaded: false,
                items: [],
            },
        }
    }
    componentDidMount() {
        $(".nav a").css('color', 'white');
        $(window).scrollTop(0);

        fetch(`${HOST}/youtube`, { method: "GET" })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        videos: {
                            isLoaded: true,
                            items: result.items,
                        }
                    })
                },
                (error) => {
                    this.setState({
                        videos: {
                            isLoaded: true,
                            error,
                        }
                    })
                }
            )

    }

    videos() {
        const { error, isLoaded, items } = this.state.videos;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if(!isLoaded) {
            return <div>Loading ...</div>
        } else {
            return (
                <div id="youtube-videos">

                    {
                        items.map(v => (
                            <Video video={v} />
                        ))   
                    }

                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <div id="header-yt">
                </div>
                <div className="inner-content">
                    <div className="content-wrap-in youtube-videos">
                        {this.videos()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Youtube;
