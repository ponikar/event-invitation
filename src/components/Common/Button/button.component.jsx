



export const PrimaryButton = ({ children, onClick, className  }) => {
    return <button onClick={onClick} className={`${className} rounded-pm rounded flex justify-between bg-gray-400 py-2 px-3 bg-white`}> 
    {children}
     </button>
}