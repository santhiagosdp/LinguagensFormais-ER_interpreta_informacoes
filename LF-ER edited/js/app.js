 /*  
Turma de Linguagens Formais 2017/2
Sistemas de Informação
CEULP ULBRA
*/

//Lendo arquivo
function ler(e){
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
    };
    reader.readAsText(file);
    
}
document.getElementById('arquivo')
.addEventListener('change', ler, false);