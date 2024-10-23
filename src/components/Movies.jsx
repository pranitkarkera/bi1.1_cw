import useFetch from "../useFetch";

const Movies = () => {

    const {data, loading, error} = useFetch("https://be-4-4-cw.vercel.app/movies")

    console.log(data)

    return(
        <div>
            <ul></ul>
            {data?.map((movie) =>(
                <li>{movie.title}</li>
            ))}
        </div>
    )
}

export default Movies;