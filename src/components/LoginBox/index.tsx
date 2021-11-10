import './styles.scss';
import { useEffect, useState } from 'react';



export function LoginBox(){
 
    

    return(
        <main className="mainLogin">
            
       <div className="fundo">
         
             
   
         </div> 
        <div className="loginBox">
            <div className="login">
            <form method="get">
		    <span className="text-center">Entrar</span>
        	<div className="input-container">
		    <input id='email' type="mail"  required=" " />
		    <label>e-mail</label>		
	        </div>
	             <div className="input-container">	
                	
		        <input id='password' type="password" required=" "/>
		            <label>senha</label>
	             </div>
		        <button type="button" className="btn">Entrar</button>
            </form>	
             </div>
                
         </div>
        </main>
    );
}