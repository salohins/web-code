import { useEffect, useState } from "react"

export const Image = ({
    name,
    src, 
    alt,
    width,
    height, 
    className,
    id,
    onClick,
}) => {
    const [imageSrc, setImageSrc] = useState('')

    useEffect(() => {
        import(`../../../assets/images/${name}`).then(imageModule => {
            setImageSrc(imageModule.default)
        }).catch(error => {
            console.error('Error importing image', error)
        })
    }, [name])

    return (
        <div 
            className={className} 
            id={id}
            onClick={onClick} 
            style={{width: width, height: height}}           
        > 
            <img 
                src={imageSrc}
                alt={alt}
                loading='lazy'
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'flex'
                    
                }}
            />
        </div>
    )    
}
