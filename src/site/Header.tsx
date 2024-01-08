import React, {FC} from 'react';

type HeaderPropsType = {
    title: string
}

// BEST METHOD:
export const Header: FC<HeaderPropsType> = ({title}) => {
    return (
        <div>
            {title}
        </div>
    )
}


// NEWEST METHOD
// export const Header: FC<HeaderPropsType> = (props) => {
//     return (
//         <div>
//             {props.title}
//         </div>
//     )
// }


// OLD METHOD:
// export const Header = (props: HeaderPropsType) => {
//     return (
//         <div>
//             {props.title}
//         </div>
//     );
// };
