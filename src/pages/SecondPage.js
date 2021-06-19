import React, { useEffect, useContext } from 'react'
import { fetchGetTodoData } from '../apis/index'
import { GET_DATA } from '../actions/index'
import { Store } from '../store/index'
import OutlinedCard from '../components/SecondCard'

const SecondPage = () => {
    const { globalState, setGlobalState } = useContext(Store)

    useEffect(() => {
        fetchGetTodoData().then(res => {
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
                    globalState.comment_data.length > 0 && globalState.comment_data.map((user, index) => {
                        console.log(user)
                        return (
                            <OutlinedCard key={index} user={user} />

                            // <h1>sda</h1>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SecondPage