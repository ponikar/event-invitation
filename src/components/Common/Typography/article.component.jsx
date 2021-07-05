




export const ArticleTitle = ({ title, className }) => {
    return <h5 className={`${className} text-primary text-xl my-2`}> {title} </h5>
}

export const Paragraph = ({ children, className }) => {
    return <p className={`${className} font-semibold text-base`} >
        { children }
    </p>
}