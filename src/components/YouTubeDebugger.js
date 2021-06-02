// Code YouTubeDebugger Component Here

import React from 'react'

class YouTubeDebugger extends React.Component {

    constructor() {
        super()

        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleBitRate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        }, () => console.log(this.state))
    }

    handleResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.video,
                        resolution: '720p'
                }
            }
        }, () => console.log(this.state))
    }


    render() {
        return(
            <div>
                <button onClick={this.handleBitRate} className='bitrate'>Bitrate Button</button>
                <button onClick={this.handleResolution} className='resolution'>Resolution Button</button>

            </div>
        )
    }
}

export default YouTubeDebugger