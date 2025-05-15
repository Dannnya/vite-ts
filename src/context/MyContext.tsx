import { createContext, useState, type ReactNode, type FC } from 'react';

interface MyContextType {
    count: number;
    increment: () => void;
    decrement: () => void;
}

interface MyProviderProps {
    children: ReactNode;
}

export const MyContext = createContext<MyContextType>({
    count: 0,
    increment: () => { },
    decrement: () => { },
});

const MyProvider: FC<MyProviderProps> = ({ children }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return ( <MyContext.Provider value={{ count, increment, decrement }}>
        { children }
    </MyContext.Provider>
    )
};

export default MyProvider;