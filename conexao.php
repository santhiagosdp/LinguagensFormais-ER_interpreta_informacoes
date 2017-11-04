<!-- 
Turma de Linguagens Formais 2017/2
Sistemas de Informação
CEULP ULBRA
 -->
 
 <?php
	$servidor = "localhost";
	$usuario = "root";
	$senha = "";
	$dbname = "linguagem_natural";
	
	//Criar a conexao
	$conn = mysqli_connect($servidor, $usuario, $senha, $dbname);
	
	if(!$conn){
		die("Falha na conexao: " . mysqli_connect_error());
	}else{
		//echo "Conexao realizada com sucesso";
	}	
?>