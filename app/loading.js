import load from './assets/loading.svg'

const loading = ({width="200px"}) => {
  return (
    <div><img className={`w-[${width}] h-auto text-center absolute left-[45%] top-[40%]`} src={load.src}/></div>
  )
}

export default loading