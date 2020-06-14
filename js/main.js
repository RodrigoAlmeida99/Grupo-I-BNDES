
   
       var hospitalA = 0;
       var hospitalB = 0;
       var distanciaA = 0;
       var distanciaB = 0;

            distanciaA =  Math.floor(Math.random() * 3);
            distanciaB =  Math.floor(Math.random() * 3);

            console.log(distanciaA)
            console.log(distanciaB)
       

        //botão 
               var botao = document.getElementById("btn");

               botao.addEventListener('click', function gavar() {
                
              //cheagem se os campos nome e cpf foram preenchidos
                if(document.getElementById("nome").value.length < 3 || document.getElementById("cpf").value.length < 11 ){
                  alert('Por favor, preencha os campoo');
                  document.getElementById("nome").focus();

                }else{
                  
               if(hospitalA == hospitalB){
               
                      if(distanciaA > distanciaB){
                        alert("Ambos os hospitais estao com o mesmo numero de atendimentos, Vá para o hopspital B que é mais perto. ")
                        hospitalB = hospitalB +1;
                        window.location.href = "dados.php";


                      }else if (distanciaB > distanciaB){
                        alert("Ambos os hospitais estao com o mesmo numero de atendimentos, Vá para o hopspital A que é mais perto. ")
                        hospitalA = hospitalA +1;
                        window.location.href = "dados.php";
                        document.getElementById("unidade").innerHTML = "va para a unidade A ";
                      
                       }else{
                          alert("Todos os hospitais estão com a mesma condição de atendimento, vá para o de sua preferencia.")
                       }
   
               
              }else if(hospitalB < hospitalA){
                        alert("va para o hopital B, que tem uma fila menor! ")
                         hospitalB = hospitalB +1;
                         window.location.href = "dados.php";
                     }else{
                        alert("Vá para o hospital A , que esta com uma fila menor")
                        hospitalA = hospitalA +1;
                        window.location.href = "dados.php";
                     }

               
                }
                
              } )

                
              
            
            
