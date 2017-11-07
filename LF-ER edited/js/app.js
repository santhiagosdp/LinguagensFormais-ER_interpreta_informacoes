 /*  
Turma de Linguagens Formais 2017/2
Sistemas de Informação
CEULP ULBRA
*/

//Lendo arquivo
if (window.File && window.FileReader && window.FileList && window.Blob) {
	// acima verificamos se navegador suporta o arquivo
    var input = document.getElementById('file');
    input.onchange = function() {
        var file = this.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {  // chamar a função da ER ps. verificar como faz
            
        }
    }
} else {
    alert('Arquivo não suportado no navegador');
}
