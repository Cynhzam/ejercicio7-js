var numero = parseInt(prompt("Ingresa un número"));
	if (numero% 2 == 0 && 2<numero && numero<5) {
		window.alert("BIEN");	
	}
	else if (numero% 2 == 0 && 6<numero && numero<20) {
		window.alert("GREAT");
	} else if (numero% 2 == 0 && numero<20) {
		document.write("PERFECT");
	} else {
		window.alert("ODD!");
	}