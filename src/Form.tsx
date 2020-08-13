import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { value1Var, FORM } from './cache';
import { useQuery } from '@apollo/client';

interface FormProps {
    defaultValue: string;
}

interface FormData {
    value1: string;
}

const style = {
    border: '4px solid orange',
    "border-radius": '8px'
}

const Form = function ({ defaultValue }: FormProps) {
    const { data } = useQuery<FormData>(FORM);

    const value = data ? data.value1 : '';

    const initialValue = value || defaultValue;

    const [displayValue, setDisplayValue] = useState(initialValue);
    const [hasChanged, setHasChanged] = useState(false);

    if (value === '' && !hasChanged) {
        value1Var(initialValue);
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        value1Var(e.target.value);
        !hasChanged && setHasChanged(true);
    };

    const onSubmit = () => {
        setDisplayValue(value);
    }

    return (
        <form>
            <TextField
                style={hasChanged ? style : {}}
                label="Value 1"
                variant="outlined"
                name="value1"
                className={hasChanged ? 'hasChanged' : ''}
                onChange={onInputChange} value={value}
            />
            <p>{displayValue}</p>
            <Button color="primary" onClick={onSubmit} type="button">Submit</Button>
        </form>
    )
}

export default Form;
