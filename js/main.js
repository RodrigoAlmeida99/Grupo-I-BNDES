
     
     

     
     var cpf = document.getElementById("cpf"); 
       var nome = document.getElementById("nome");

       var hospitalA = 0;
       var hospitalB = 0;
       var distanciaA = 5;
       var distanciaB = 8;


       

        //botão 
               var botao = document.getElementById("btn");

               botao.addEventListener('click', function() {
                
              //cheagem se os campos nome e cpf foram preenchidos
                if(document.getElementById("nome").value.length < 3 || document.getElementById("cpf").value.length < 11 ){
                  alert('Por favor, preencha os campoo');
                  document.getElementById("nome").focus();

                }else{
                  
               if(hospitalA == hospitalB){
               
                      if(distanciaA > distanciaB){
                        alert("Ambos os hospitais estao com o mesmo numero de atendimentos, Vá para o hopspital B que é masi perto. ")
                        hospitalB = hospitalB +1;

                      }else{
                        alert("Ambos os hospitais estao com o mesmo numero de atendimentos, Vá para o hopspital A que é masi perto. ")
                        hospitalA = hospitalA +1;


                      }
   
               
              }else if(hospitalB < hospitalA){
                        alert("va para o hopital B, que tem uma fila menor! ")
                         hospitalB = hospitalB +1;

                     }else{
                        alert("Vá para o hospital A , que esta com uma fila menor")
                        hospitalA = hospitalA +1;
                 }

               
                }
                
                } )

                
              
            
            
