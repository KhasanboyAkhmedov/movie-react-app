import './app-info.css'

const AppInfo = ({allMovieCount, favouriteMovieCount}) => {
  return (
    <div className='app-info'>
      <p className='fs-3 text-uppercase'>Barcha kinolar soni: {allMovieCount}</p>
      <p className='fs-4 text-uppercase'>Ko'rilgan kinolar soni: {favouriteMovieCount}</p>
    </div>
  )
}

export default AppInfo