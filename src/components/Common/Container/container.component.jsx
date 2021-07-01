


export const Container = ({ className, children, ...props }) => {
    return <section {...props} className={`${className} my-10 container`}>
        { children }
    </section>
}