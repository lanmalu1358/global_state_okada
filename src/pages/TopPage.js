import React, { useEffect, useContext } from 'react'
import { fetchGetData } from '../apis/index'
import { GET_DATA } from '../actions/index'
import Card from '../components/Card'
import { Store } from '../store/index'


const TopPage = () => {
    const { globalState, setGlobalState } = useContext(Store)

    useEffect(() => {
        fetchGetData().then(res => {
            setGlobalState({
                type: GET_DATA,
                data: res.data
            })
        })
    }, [])

    return (
        <div>
            <h1>TopPage</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    globalState.user_data.map((user, index) => {
                        return (
                            <Card user={user} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TopPage