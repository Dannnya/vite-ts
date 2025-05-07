import { useRef, useState, type FormEvent } from 'react';

type FormData = {
    name: string;
    email: string;
    password: string;
}

export const Form = () => {
    const [submittedData, setSubmittedData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
    });

    const name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const nameValue = name.current!.value;
        const emailValue = email.current!.value;
        const passwordValue = password.current!.value;

        setSubmittedData({
            name: nameValue,
            email: emailValue,
            password: passwordValue,
        })
    }

    return (
        <form  onSubmit={handleSubmit}>
            <input type="text" placeholder='name' ref={name} />
            <input type="email" placeholder='email' ref={email} />
            <input type="password" placeholder='password' ref={password} />
            
            <button type='submit'>Submit</button>

            <section>
                <h3>Name: { submittedData.name }</h3>
                <h3>Email: { submittedData.email }</h3>
                <h3>Password: { submittedData.password }</h3>
            </section>
        </form>
    )
};
