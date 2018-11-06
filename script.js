	
	var pontuacao = 0;
	var verifica = [false, false, false];
	var segundos= 0;
	var minutos = 0; 

	function clique() {
		if (pontuacao == 0) {
			setInterval(cronometro, 1000);
		}
		pontuacao += 1;
		console.log(pontuacao);
		document.getElementById("placar").innerHTML = "Rodas = " + pontuacao;
		upgrades();
	}


	function somadora() {
		pontuacao += 5;
		document.getElementById("placar").innerHTML = "Rodas = " + pontuacao;
		console.log(pontuacao);
	}

	function upgrades() {
		if (pontuacao == 20 && verifica[0] == false) {
			document.getElementById("habilita1").src = "img/ImagemHabilitada1.png";
			verifica[0] == true;
			setInterval(clique, 20000);
		} else if (pontuacao == 50 && verifica[1] == false) {
			document.getElementById("habilita2").src = "img/ImagemHabilitada2.png";
			verifica[1] == true;
			setInterval(clique, 1000);
		} else if(pontuacao == 70 && verifica[2] == false) {
			document.getElementById("habilita3").src = "img/ImagemHabilitada3.png";
			verifica[2] == true;
			setInterval(somadora, 10000);
		}
	}

	function cronometro() {
	    segundos += 1;
	    if (segundos >= 60) {
		    segundos = 0;
		    minutos++;
		}
	    if (minutos >=60) {
	    	minutos = 0;
	    }
	    if (segundos < 10) {
	    	document.getElementById("tempo").innerHTML = "0"+minutos+":0"+segundos;
		} else if (minutos < 10){
	    	document.getElementById("tempo").innerHTML = "0"+minutos+":"+segundos;
		} else {
	    	document.getElementById("tempo").innerHTML = minutos+":"+segundos;
		}
	}

	function tocarSom() {
		var s = document.getElementById("som"); 
		s.play();
		document.getElementById("habilitarPersonagem").src = "img/PersonagemHabilitado.png";
		setTimeout(function() {  
			document.getElementById("habilitarPersonagem").src = "img/PersonagemDesabilitado.png"; 
		}, 100);
	}
