import {useLoaderData} from 'react-router-dom'    //? use this hook to get data from a function that is exported fro, this file 

function Github() {

    const data = useLoaderData()     //? here the hook is called and stores the data in "data"

    //? to call the data from the api in the console, but we dont want whole of the data
    // const [data, setData] = React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/iAmUsmanAwan')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

return (
    <>
        <div className='text-center m-4 bg-orange-800 text-white p-4 text-3xl'>
        <img src={data.avatar_url} width={300} alt="Github Image" />
            GitHub Name: {data.login}  <hr/>
            GitHub Bio: {data.bio}     <hr/>
            Location: {data.location}  <hr/>
        </div>
    </>
    )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/iAmUsmanAwan')
    return response.json()
} 
