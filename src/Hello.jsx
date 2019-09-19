import React from "react"
import { UndrawHello } from 'react-undraw-illustrations'

const Hello = () => {
    return (
        <div className="ui main container" id="greeting">
            <h1>
                Greetings Visitor
            </h1>
            <UndrawHello primaryColor='#12283a' height='300px' />
        </div>
    )
}

export default Hello