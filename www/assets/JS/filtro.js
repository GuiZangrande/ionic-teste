var campoFIltro = document.querySelector("#filtrar-tabela");


campoFIltro.addEventListener("input" , function() {
    var filtro =this.value ;
    var pacientes = document.querySelectorAll(".paciente") ;
    if(this.value.length >0){
      for (var i = 0; i < pacientes.length; i++) {
        var  tdNome= pacientes[i].querySelector(".info-nome").textContent;
        var exepressao  = new RegExp(this.value,"i");


        if (!exepressao.test(tdNome)) {
              pacientes[i].classList.add("invisivel");
        }else {
             pacientes[i].classList.remove("invisivel");
        }
      }

    }else {
      pacientes.forEach(function(paciente){
        paciente.classList.remove("invisivel");
      })

    }


});

