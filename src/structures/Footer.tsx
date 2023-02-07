import React, { FC } from 'react';

interface TitleProps {
    title: string;
    subtitle: string;
}

export const Title: FC<TitleProps> = ({ title, subtitle }) => {
// export  const Title: FC<any> = () => {
    return (
        <p>
            {/*<h1>title </h1>*/}
            <h1>title {title} {title}</h1>
            {/*<h2>subtitle</h2>*/}
            <h2>subtitle {subtitle}</h2>
        </p>
    );
};

export default Title;