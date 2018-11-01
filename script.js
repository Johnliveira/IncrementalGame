	
	var pontuacao = 0;
	var verifica = [false, false, false];
	var segundos= 0;
	var minutos = 0; 

	function clickIn() {
		if (pontuacao == 0) {
			setInterval(cronometro, 1000);
		}
		pontuacao += 1;
		console.log(pontuacao);
		document.getElementById("demo").innerHTML = "Rodas = " + pontuacao;
		document.getElementById("imagemTroca").src = "img/Prin1.png";
		upgrades();
		setTimeout(function() {  
			document.getElementById("imagemTroca").src = "img/Prin.png"; 
		}, 100);
		var s = document.getElementById("sond"); 
		s.play();
	}


	function somadora() {
		pontuacao += 5;
		document.getElementById("demo").innerHTML = "Rodas = " + pontuacao;
		console.log(pontuacao);
	}

	function upgrades() {
		if (pontuacao == 20 && verifica[0] == false) {
			document.getElementById("imagemTroca1").src = "img/Troca1.1.png";
			verifica[0] == true;
			setInterval(clickIn, 20000);
		} else if (pontuacao == 50 && verifica[1] == false) {
			document.getElementById("imagemTroca2").src = "img/Troca2.2.png";
			verifica[1] == true;
			setInterval(clickIn, 1000);
		} else if(pontuacao == 70 && verifica[2] == false) {
			document.getElementById("imagemTroca3").src = "img/Troca3.3.png";
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
