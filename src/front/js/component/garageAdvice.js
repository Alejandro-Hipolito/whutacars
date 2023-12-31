import React, {useContext, useState, useEffect} from "react";
import { Context } from "../store/appContext";
import { ThemeContext } from "../layout";
import "../../styles/index.css";
import { Link } from "react-router-dom";



export const GarageAdvice = () => {
    
    const {store, actions} = useContext(Context)
    const garageImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFOZ2L1ab7nVYrVxuxVUXMBSokaf-6FWNvug&usqp=CAU"
    const [isVisible, setIsVisible] = useState(false);
    
    const toolImage = () => {
        return(
            <>
            <script className="toolIcon float-end" src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                        <lord-icon
                            className=""
                            src="https://cdn.lordicon.com/sbiheqdr.json"
                            trigger="hover"
                            colors="primary:#ffffff,secondary:#3080e8"
                            stroke="90"
                            style={{"width":"120px", "height":"120px"}}>
                        </lord-icon>
            </>
        )
    }









    return (
    
      <div className="container mx-auto  my-5  row justify-content-evenly transitionEffect" >


            <div className=" mx-1 my-3 col-sm-12 col-md-6 col-lg-5 col-xl-5 container-garage">

                <Link to="/garages" className="titleAdviceGarage">
                    <img src={garageImage} className="card-img garageImageLanding d-none d-sm-block d-sm-none d-md-block" alt="..."/>
                    <h5 className="text-end text-white pt-3 px-3 mx-3">
                                    {/* text-start text-white pt-3 px-3 mx-3 */}
                      
                           <strong>Consulta nuestros Talleres</strong> 
                      
                    </h5>            
                    <p className="text-end text-white py-2 px-3 textGarageLeft d-md-flex" style={{fontSize: "larger"}}> 
                    Tasamos vuestros vehículos como garantía su estado. Las ventas serán más rápidas y las compras serán más seguras así. 
                 
                    </p>
                     </Link> 
                
                    
                
                  
               
                   
               </div>
         
{
    // DIV DE LLAVE INGLESA
}

            <div className=" mx-1 my-3 col-sm-12 col-md-6 col-lg-5 col-xl-5 container-garage pb-3 ">

          
                        <Link to="/create-garage" className="titleAdviceGarage">
                    <h5 className="text-end text-white pt-3 px-3 mx-3">
                        
                          <strong>¿Quieres unir tu Taller?</strong>  
                    </h5>   
               
                
                        <p className="text-end text-white pt-2 px-3 mx-3 " style={{fontSize: "larger"}}>  
                      
                        <span className="float-start ">{toolImage()} </span> 
                         Date de alta y ayuda a otros usuarios a certificar el estado de los vehículos. ¡Únete a nuestra red!
                          
              
                      
                    </p>
                        </Link>
         
                  

                
               
                       
                    
                  
             
                

             </div>




        </div>

   
    
    );

}