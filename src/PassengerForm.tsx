import React, {useState} from 'react';
import './Moonride.css';

function PassengerForm() {
    const [adultCount, setAdultCount] = useState(0)
    const [kidCount, setKidCount] = useState(0)
    const [cabinCount, setCabinCount] = useState(0)

    const inputFields = [
        {
            title: "YOUR NAME",
            defaultText: "Enter your full name",
            logo: "GridItem InputIcon fa fa-user"
        },
        {
            title: "E-MAIL ADDRESS",
            defaultText: "Enter your E-Mail address",
            logo: "GridItem InputIcon fa fa-envelope icons"
        },
        {
            title: "PHONE NUMBER",
            defaultText: "Enter your phone number",
            logo: "GridItem InputIcon fa fa-phone icons"
        },
    ]

    const incrementFields = [
        {
            title: 'Adults',
            count: adultCount,
            incrementor: setAdultCount
        },
        {
            title: 'Kids',
            count: kidCount,
            incrementor: setKidCount
        },
        {
            title: 'Cabins',
            count: cabinCount,
            incrementor: setCabinCount
        },
    ]

    const formInputs = inputFields.map(input =>
        <div className="InputContainer" key={input.title}>
            <div className="GridItem InputTitle">{input.title}</div>
            <div className={input.logo}/>
            <input className="GridItem InputForm" placeholder={input.defaultText}/>
            <br/>
        </div>
    )

    const incrementInputs = incrementFields.map(input =>
        <div className="IndividualIncrementer" key={input.title}>
            <div className="GridItem InputTitle">{input.title}</div>
            <div className="IncrementBackground">
                <button className="Increment Minus" onClick={(e)=> decreaseCount(e, input.count, input.incrementor)}>-</button>
                {input.count}
                <button className="Increment Plus" onClick={(e)=> increaseCount(e, input.count, input.incrementor)}>+</button>
            </div>
        </div>
    )

    const increaseCount = (event: React.MouseEvent<HTMLButtonElement>, count: number, incrementState: React.Dispatch<React.SetStateAction<number>>) => {
        event.preventDefault()
        incrementState(count + 1)
    }

    const decreaseCount = (event: React.MouseEvent<HTMLButtonElement>, count: number, incrementState: React.Dispatch<React.SetStateAction<number>>) => {
        event.preventDefault()
        if (count == 0){
            incrementState(0)
        } else {
            incrementState(count - 1)
        }
    }

    return (
        <form id ="PassengerForm">
            {formInputs}
            <div className="IncrementContainer">
                {incrementInputs}
            </div>
        </form>
    );
}

export default PassengerForm;
