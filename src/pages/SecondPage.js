import React, { useEffect, useContext } from 'react'
import { fetchGetData } from '../apis/index'
import { GET_DATA } from '../actions/index'
import Card from '../components/Card'
import { Store } from '../store/index'


const SecondPage = () => {
    const { globalState, setGlobalState } = useContext(Store)

    useEffect(() => {
        fetchGetData().then(res => {
            setGlobalState({
                type: GET_DATA,
                data: res.data
            })
        })
    }, [])

    console.log(globalState.user_data)

    return (
        <div>
            <h1>SecondPage</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    globalState.user_data.length > 0 && globalState.user_data.map((user, index) => {
                        return (
                            <Card key={index} user={user} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SecondPage