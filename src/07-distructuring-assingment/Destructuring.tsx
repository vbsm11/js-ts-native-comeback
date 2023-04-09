import {PropsType} from './07.test';
import {useState} from 'react';

type DestructuringPropsType = {
    title: string,
    man: PropsType,
    food: Array<string>
    car: {
        model: string
    }
}

function useState1(m: string) {
    return [ m, function (){}]
}

function useState2(m: string) {
    return {
        message: m,
        setMessage: function (){}
    }
}

export const Destructuring: React.FC<DestructuringPropsType> = ({title, man, ...props}) => {

    const [message, setMessage] = useState<string>('Hello');

    return (
        <div>
            <h1>{title}</h1>
            <div>
                {props.car.model}
            </div>
            <div>
                {man.name}
            </div>
        </div>
    )
}