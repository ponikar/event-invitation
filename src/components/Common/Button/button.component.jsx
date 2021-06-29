



export const PrimaryButton = ({ children, onClick, className  }) => {
    return <button onClick={onClick} className={`${className} rounded-pm text-sm rounded flex text-white justify-between py-2 px-3 bg-primary`}> 
    {children}
     </button>
}