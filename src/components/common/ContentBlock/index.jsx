import './index.scss'
import bgs from '../../../assets/styles/_gradients.scss';
import variables from '../../../assets/styles/_variables.scss';
import { useEffect, useState } from 'react';

export const ContentBlock = ({children, background, id, className, color, onClick}) => {
    const [imageSrc, setImageSrc] = useState(false)

    useEffect(() => {        
        if (background && background[0] === 'p') {            
            import(`../../../assets/images/${background.substring(2)}`).then(imageModule => {
                setImageSrc(imageModule.default)
            }).catch(error => {
                console.error('Error importing image', error)
            })
        }
        
    }, [background])

    const getBackgroundStyle = () => {
        if (!background)
            return {};

        switch (background[0]) {
            case 'c':
                return {
                    background: variables[`${background.substring(2)}_color`]
                }
            case 'g':
                let gradient = bgs[background]
                gradient = '{' + gradient.slice(1)
                gradient = gradient.slice(0, -1) + '}'
                gradient = JSON.parse(gradient)

                return {
                    background: gradient['background1'],
                    background: gradient['background2'],
                    background: gradient['background3'],
                    filter: gradient['filter']
                }

            case 'p':
                return {
                    background: `url(${imageSrc}) center / cover no-repeat`,                    
                }           
        }
    }


    return (
        <div onClick={onClick} style={{...{color: variables[`${color}_color`]}, ...getBackgroundStyle()}} id={id} className={`contentblock${' ' + className || ''}`}>
            { children }
        </div>
    )
}