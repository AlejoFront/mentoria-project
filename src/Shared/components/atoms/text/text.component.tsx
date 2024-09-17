import { FC } from 'react'
import './text.component.scss'
interface Props {
    text?: string | number | any;
    className?: string;
    component: IText;
}
type IText = 'p' | 'span' | 'i' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export const Text: FC<Props> = ({ className = 'title', text, component }) => {
    return (
        component === 'p' ?
            <p className={className}>{text}</p>
            : component === 'span' ?
                <span className={className}>{text} &nbsp;</span>
                : component === 'i' ?
                    <i className={className} />
                    : component === 'h1' ?
                        <h1 className={className}>{text}</h1>
                        : component === 'h2' ?
                            <h2 className={className}>{text}</h2>
                            : component === 'h3' ?
                                <h3 className={className}>{text}</h3>
                                : component === 'h4' ?
                                    <h4 className={className}>{text}</h4>
                                    : component === 'h5' ?
                                        <h5 className={className}>{text}</h5>
                                        : component === 'h6' ?
                                            <h6 className={className}>{text}</h6>
                                            : null
    )
}
