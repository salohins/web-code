import { useDispatch } from "react-redux"
import { useState } from "react"
import { updateData } from "../../../redux/actions/dataActions"

import { Column } from "../Column"
import { Row } from "../Row"

import { Checkbox } from "./Checkbox"
import { RadioBlock } from "./RadioBlock"
import { Switch } from "./Switch"

import './index.scss'


export const Input = ({ type, label, id, options, initial, children, min, max, step, columns }) => {
    const dispatch = useDispatch()
    const [checked, setChecked] = useState(initial)

    const handleOnChange = (event) => {
        dispatch(updateData({ [id]: event.target.value }))
    }

    const renderLabel = () => {
        return (
            <label
                htmlFor={id}
            >
                {label}
            </label>
        )
    }

    switch (type) {
        case 'textarea':
            return (
                <Column className={'input'} justifyContent={'center'}>
                    {renderLabel()}
                    <textarea
                        id={id}
                        name={id}
                        onChange={(event) => handleOnChange(event)}
                    />

                </Column>
            )

        case 'radio':
            return (
                <Column className={'input'} justifyContent={'center'}>
                    <span>
                        {label}
                    </span>
                    {options.map(option => {
                        return (
                            <Row className={'radio'} key={option.value}>
                                <div
                                    id={option.value}
                                    data-ison={checked === option.value}
                                    onClick={() => {
                                        setChecked(option.value)
                                        dispatch(updateData({ [id]: option.value }))
                                    }}
                                >
                                </div>
                                <span>{option.name}</span>
                            </Row>
                        )
                    })}
                </Column>
            )
        case 'range':
            return (
                <Column className={'input'} justifyContent={'center'}>
                    {renderLabel()}
                    <input
                        type='range'
                        min={min}
                        max={max}
                        step={step}
                        id={id}
                        onChange={(event) => handleOnChange(event)}
                    />
                </Column>
            )

        case 'select':
            return (
                <Column className={'input'} justifyContent={'center'}>
                    {renderLabel()}
                    <select
                        id={id}
                        name={id}
                        onChange={(event) => handleOnChange(event)}
                    >
                        <option style={{ display: 'none' }} defaultValue={''} />
                        {options?.map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                </Column>
            )

        case 'radio-block':
            return (
                <Column className={'input'} justifyContent={'center'}>
                    <span style={{marginBottom: '10px', width: '100%'}}>
                        {label}
                    </span>
                    <RadioBlock id={id} columns={columns} options={options} />
                </Column>
            )

        case 'switch':
            return (
                <Column className={'input'} justifyContent={'center'}>
                    <Row>
                        <span
                            htmlFor={id}
                        >
                            {label}
                        </span>
                        <Switch initial={false} id={id} />
                    </Row>

                </Column>
            )


        case 'checkbox':
            return (
                <Column className={'input'} justifyContent={'center'} alignItems={'center'}>
                    <Row justifyContent={'center'} alignItems={'center'}>
                        <Checkbox id={id} />
                        <label
                            htmlFor={id}
                            style={{ marginBottom: 0 }}
                        >
                            {children}
                        </label>
                    </Row>

                </Column>
            )

        case 'number':
            return (
                <Column className={'input'}>
                    <Row>

                        <input
                            type={type}
                            id={id}
                            name={id}
                            onChange={(event) => handleOnChange(event)}

                        />
                        <label
                            htmlFor={id}
                            style={{ width: 'auto', marginBottom: 0 }}
                        >
                            {label}
                        </label>
                    </Row>
                </Column>
            )

        default:
            return (
                <Column className={'input'} justifyContent={'center'}>
                    <label
                        htmlFor={id}
                    >
                        {label}
                    </label>
                    <input
                        type={type}
                        id={id}
                        name={id}
                        onChange={(event) => handleOnChange(event)}
                    />
                </Column>
            )
    }
}