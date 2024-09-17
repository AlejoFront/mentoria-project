import { FC } from 'react';
import './image.component.scss';
interface Props {
    src: string | undefined;
    alt: string;
    classNameFigure?: string;
    classNameImg?: string;
}
export const Image: FC<Props> = ({ src, alt, classNameImg, classNameFigure }) => {
    return (
        <figure className={classNameFigure}>
            <img
                src={src}
                alt={alt}
                className={classNameImg}
            />
        </figure>
    )
}

export default Image