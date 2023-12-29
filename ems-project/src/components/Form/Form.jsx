import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstname")} />
            <input {...register("lastname")} />
            <input type="text" />
        </form>
    </div>
  )
}

export default Form