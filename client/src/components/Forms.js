import react,{useState} from "react";

const Forms = () => {

        const [name,setName]=useState("");

        const handleplace = (e) => {
              console.log(e.target.value);
              setName(e.target.value);
        }
        return(
        <div className="forms-container">
            <h1>Forms</h1>
                        <input 
                        onChange={handleplace} 
                        className= "form-input"
                        type="text" 
                        placeholder="Enter your name" 
                        value={name}/>
                       
                        <button  
                        
                        
                        className="button-style"
                        type="submit">Submit</button>
        </div>
        )
}
export default Forms;