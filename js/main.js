
   
       var hospitalA = 0;
       var hospitalB = 0;
       var distanciaA = 0;
       var distanciaB = 0;
    
       
            distanciaA =  Math.floor(Math.random() * 3);
            distanciaB =  Math.floor(Math.random() * 3);

            //teste das variaçoes das distancias
            console.log(distanciaA)
            console.log(distanciaB)
       

        //botão 
               var botao = document.getElementById("btn");

               botao.addEventListener('click', function gavar() {
                
              //checagem se os campos nome e cpf foram preenchidos
                if(document.getElementById("nome").value.length < 3 || document.getElementById("cpf").value.length < 11 ){
                  alert('Por favor, preencha os campoo');
               

                }else{
                  
               if(hospitalA == hospitalB){
               
                      if(distanciaA > distanciaB){
                        alert("Ambos os hospitais estão com o mesmo número de atendimentos, vá para o hospital B que é mais próximo. ")
                        hospitalB = hospitalB +1;
                       window.location.href = "dados.php";
                        

                      }else if (distanciaB > distanciaB){
                        alert("Ambos os hospitais estão com o mesmo número de atendimentos, vá para o hospital A que é mais próximo. ")
                        hospitalA = hospitalA +1;
                        window.location.href = "dados.php";
                       
                      
                       }else{
                          alert("Todos os hospitais estão com a mesma condição de atendimento, vá para o de sua preferencia.")
                       
                       }
   
               
              }else if(hospitalB < hospitalA){
                        alert("Vá para o hopital B, que tem uma menor fila. ")
                         hospitalB = hospitalB +1;
                         window.location.href = "dados.php";
                     }else{
                        alert("Vá para o hospital A , que esta com uma menor fila.")
                        hospitalA = hospitalA +1;
                          window.location.href = "dados.php";
                     }

               
                }
                
              } )

                
              
            
            
