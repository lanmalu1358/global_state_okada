import React, { useEffect, useContext } from 'react'
import { fetchGetData } from '../apis/index'
import { GETFIVE_DATA } from '../actions/index'
import Card from '../components/Card'
import { Store } from '../store/index'

const TopPage = () => {
    const { globalState, setGlobalState } = useContext(Store)

    useEffect(() => {
        fetchGetData().then(res => {
            setGlobalState({
                type: GETFIVE_DATA,
                data: res.data
            })
        })
    }, [])

    console.log(globalState.user_data)

    return (
        <div>
            <h1>TopPage</h1>
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

export default TopPage