import { DataConsume } from "../context"

const ResultContainer = () => {

  const { result: words, loading } = DataConsume()
  
 
  console.log(loading)


  return (
    <>
      {(loading)&&
        <div className="loader">
        <section className="dots-container">
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
</section>

        </div>
      }
      <div className="container mx-auto sty modal">
        {
          words.length ? (<ul>
            {words.map((el,index) => {
              return (
                <li key={index}>
                 <h1 className="text-3xl">
                 {el.word}
                  </h1> 
                  <p>{el.meanings[0].definitions[0]}</p>
              
                </li>
              )
            })}
          </ul>) : (
              <div className=" ">

              <h1 className="text-4xl">Dololo</h1>
              </div>
          )
      }

      </div>
      



    </>

   





 )
  
  
    

















  

 
  
  

}

export default ResultContainer




// (
//   <section>
//   <div className="container mx-auto">
// <h1>Try again Later</h1>
   
//   </div>
// </section>
//   )