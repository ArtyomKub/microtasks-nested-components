import React, {FC} from 'react';

type HeaderPropsType = {
    title: string
}

// NEWEST METHOD
export const Header: FC<HeaderPropsType> = (props) => {
    return (
        <div>
            {props.title}
        </div>
    )
}

// OLD METHOD
// export const Header = (props: HeaderPropsType) => {
//     return (
//         <div>
//             {props.title}
//         </div>
//     );
// };
