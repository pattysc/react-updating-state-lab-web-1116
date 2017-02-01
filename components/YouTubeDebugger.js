const React = require('react')

class YouTubeDebugger extends React.Component{
  constructor(){
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

  bclick(){
    this.setState(
      {settings: Object.assign({}, this.state.settings,
        {bitrate: 12}
      )}
    )
  }

  rclick(){
    this.setState(
      {settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: "720p"
          })
        })
      }
    )
  }

  render(){
    return(
      <div>
        <button className='bitrate' onClick={this.bclick.bind(this)}/>
        <button className='resolution' onClick={this.rclick.bind(this)}/>
      </div>
    )
  }
}

module.exports = YouTubeDebugger
