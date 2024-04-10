import './index.scss'

export const Container = ({ className, children }) => {
    return (
        <div className={`container${className || ''}`}>
            <div className='container-content'>
                {children}
            </div>        
        </div>
    )
}
