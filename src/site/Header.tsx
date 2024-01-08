import React, {FC} from 'react';

type HeaderPropsType = {
    titleForHeader: string
}

// BEST METHOD:
export const Header: FC<HeaderPropsType> = ({titleForHeader}) => {
    return (
        <div>
            {titleForHeader}
        </div>
    )
}


// NEWEST METHOD
// export const Header: FC<HeaderPropsType> = (props) => {
//     return (
//         <div>
//             {props.titleForHeader}
//         </div>
//     )
// }


// OLD METHOD:
// export const Header = (props: HeaderPropsType) => {
//     return (
//         <div>
//             {props.titleForHeader}
//         </div>
//     );
// };
