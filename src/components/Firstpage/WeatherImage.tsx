import cloudy from '../../assets/weather/WeatherIcon-Cloudy.png'

export default function WeatherImage(){
  return(
    <img 
      style={{ position: "relative", height: "110px", marginTop: '350px', marginLeft: '1170px'}}
      src={cloudy} 
      alt="cloudy"/>
  )
}