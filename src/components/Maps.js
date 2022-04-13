import React from 'react'
import {GoogleMap, Marker} from '@react-google-maps/api'
const containerStyle = {
  width: '400px',
  height: '400px'
}

export default function Maps(props) {
const {lat, lng} = props.item


  return (
    <GoogleMap mapContainerStyle={containerStyle} center={{lat:+lat,lng:+lng}} zoom={15}>
      <Marker position={{lat:+lat,lng:+lng}} />
    </GoogleMap>
  )
}
