<?php
session_start();
	include_once("conexao.php");
	$result_produtos = "SELECT * FROM produtos where id=1";
	$resultado_produtos = mysqli_query($conn, $result_produtos);
	$resultado = mysqli_fetch_assoc($resultado_produtos);
	echo $resultado['produto'];
	
	//header('location: index.html');

?>