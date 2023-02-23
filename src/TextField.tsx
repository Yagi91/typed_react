import React, { useState, useRef } from 'react';

interface Props {
    text: string;
    fn?: (bob: string) => string;
    person: { firstName: string; lastName: string };
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC <Props> = ({text, person, handleChange}) => {

    const [count] = useState<number| null>(5);
    console.log('rendering');

    // setCount(12);

    const inputRef = useRef<HTMLInputElement>(null);

    return(
        <>        
        {text}
        <h3>{person.firstName} </h3>
        <h3>{person.lastName}</h3>
        <p>Age: {count}</p>
        <input type="number" name="age" ref={inputRef} onChange={handleChange}/>
        </>

    )
}