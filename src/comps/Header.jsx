import { DataConsume } from "../context"
import  logo   from '../assets/logo.svg'
const Header = () => {

  const handleTextChange = e => {
    console.log(e.currentTarget.value)
  }



  
    return(
    <header className="fixed top-0 w-screen z-50  mb-8 sty" >
        <div className="container  mx-auto p-4  bg ">
          <div className=" flex flex-col items-center md:flex-row md:justify-between  ">

       
              <img className="flex h-10  mb-4 md:mb-0 mr-2" src={logo} alt="logo" />
              


            <div className="input-group">
    <input  onChange={handleTextChange} type="email" className="input " id="Email" name="Email" placeholder="Search Word"  />
    <input className="button--submit" value="Subscribe" type="submit" />
</div>





            
            
          </div>

      </div>
    
    
    </header>
  )
}

export default Header