import { useForm, type SubmitHandler } from "react-hook-form";

const color = {
    color: 'red'
}

interface Form {
    name: string;
    email: string;
    password: string;
}

export const FormHook = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Form>();

    const onSubmit: SubmitHandler<Form> = (data) => {
        console.log(data);
    }

    return (
        <form  style={{ textAlign: "center"}} onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Name" {...register('name', { required: 'Name is required' })} /> <br/>
            {errors.name && <p style={color}>{errors.name.message}</p>}
            
            <input type="email" placeholder="Email" {...register('email', { required: 'Email is required' })} />  <br />
            {errors.email && <p style={color}>{errors.email.message}</p>}
            
            <input type="password" placeholder="Password" {...register('password', {
                minLength: {
                    value: 5,
                    message: 'Password must be at least 5 symbols',
                },
                required: 'Password is required'
            })} />  <br />
            {errors.password && <p style={color}>{errors.password.message}</p>}
            
            <button disabled={isSubmitting}>{ isSubmitting ? 'Loading...' : ' Submit'}</button>
        </form>
    )
};
