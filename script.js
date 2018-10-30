	
	var pontuacao = 0;
	var verifica = [false, false, false];

	function clickIn() {
		pontuacao += 1;
		document.getElementById("demo").innerHTML = "Rodas = " + pontuacao;
	}

	function somadora() {
		pontuacao += 5;
		document.getElementById("demo").innerHTML = "Rodas = " + pontuacao;
	}

	function up1() {
		if (pontuacao >= 20 && verifica[0] == false) {
			setInterval(clickIn, 1000);
		}
	}

	function up2() {
		if (pontuacao >= 250 && verifica[1] == false) {
			setInterval(clickIn, 1000);
		}
	}

	function up3() {
		if (pontuacao >= 500 && verifica[2] == false) {
			setInterval(somadora, 10000);
		}
	}