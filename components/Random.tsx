'use client'
import {useEffect, useState} from 'react'

// type SomeArgument = {
//     name: string
//     title: string
//     rank: number
//     data: {
//         someKey: 'someValue'
//     }
// }

// const someFunction(someArguments: SomeArgument, aValue: string[]) => {
//     console.log(someArguments.data)
// }

export const Random = () => {
    const [value, setValue] = useState<string>()

    useEffect(() => {
        fetch('/api/hello')
        .then(response => response.json())
        .then(data => {
            console.log('Value from Next.js backend', data)
            setValue(JSON.stringify(data))
        })
    })

    return (
        <div className='text-white text-xl'>{value}</div>
    )
}