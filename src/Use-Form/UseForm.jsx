import React, { useState, } from 'react';
import { useForm } from 'react-hook-form';

const UseForm = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    const onSubmit = (d) => {
        alert(JSON.stringify(d));
        setData(JSON.stringify(d));
    }
    
    return (
        <div className='m-4'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    First Name:
                    {/* <input type='text' name="firstName"/> */}
                    <input {...register("firstName")} />
                </label>
                <label>
                    Last Name:
                    {/* <input type='text' name="firstName"/> */}
                    <input {...register("lastName")} />
                </label>
                <select {...register("category")} className="m-4">
                    <option value="">Select...</option>
                    <option value="A">Option A</option>
                    <option value="B">Option B</option>
                </select>
                <br/>
                <textarea {...register("aboutYou")} placeholder="About you" />
                <p>Data {data}</p>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default UseForm
