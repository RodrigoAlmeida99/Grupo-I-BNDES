

var cpf;
var n; 

     function capturar(){
       cpf = document.getElementById("cpf").value; 
       n = document.getElementById("nome").value;
     
       document.getElementById("nomeCadastrado").innerHTML = n;
       document.getElementById("nomeCadastrado").innerHTML = cpf;


     }




   
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
                        window.location.href = "dados.php";

                      }else{
                        alert("Ambos os hospitais estao com o mesmo numero de atendimentos, Vá para o hopspital A que é masi perto. ")
                        hospitalA = hospitalA +1;
                        window.location.href = "dados.php";
                        document.getElementById("unidade").innerHTML = "va para a unidade A ";

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

                
              
            
            
