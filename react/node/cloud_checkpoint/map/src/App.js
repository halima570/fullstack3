import { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class App extends Component () {

  render(){
  return (
      
<Map
google={this.props.google}
style={{with:'100%',height:'100%'}}
zoom={10}
initialCenter={{lat:'33.5950627',lng:'-7.6187768'}}
>
<Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
  </Map> 
  );}
}
export default GoogleApiWrapper({
  apiKey:('AIzaSyD2k-0XrkiZpLHyDDQj5y1xZNMpPObFiwo')
})(App)
