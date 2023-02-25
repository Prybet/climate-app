import useClimate from '../hooks/useClimate'
import Form from './Form'
import Loading from './Loading';
import Result from './Result'

const AppClimate = () => {
    const { result = {}, loading, noResult } = useClimate();
    return (
        <>
            <main className='columns'>
                <Form />
                {loading ? <Loading /> :
                    result?.name ? <Result /> : noResult ? <p>{noResult}</p>: ""}
            </main>
        </>
    )
}

export default AppClimate