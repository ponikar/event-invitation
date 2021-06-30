
export const InputBox = ( {label,placeholder,value,onChange,name} ) => {
    return(
      <div className="my-4" >
      
          <label>{label}</label>
        
          <input type="text" 
          
          className="border-b-2 w-full  
          focus:outline-none border-grey placeholder-pc py-2  
          font-light" 
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}

          required
         />
        
      </div>
    )
}

