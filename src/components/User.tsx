type User = {
    name: string;
    age: number;
    isStudent: boolean;
}

export const User = ({ name, age, isStudent }: User) => {
    return (
        <div>
            <h3>{ name }</h3>
            <h3>{ age }</h3>
            <h3>{ isStudent }</h3>
        </div>
    )
};
