function actualizarCuentaRegresiva() {
    const fechaObjetivo = new Date("2026-04-28T12:00:00").getTime();
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;
    const mesesRestantes = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 30)); 

    const fechaFinAnio = new Date("2025-12-31T20:00:00").getTime();
    const diferenciaFinAnio = fechaFinAnio - ahora;
    const mesesRestantesFinAnio = Math.floor(diferenciaFinAnio / (1000 * 60 * 60 * 24 * 30)); 

    const fechaBrasil = new Date("2026-03-27T12:00:00").getTime();
    const diferenciaBrasil = fechaBrasil - ahora;
    const mesesRestantesBrasil = Math.floor(diferenciaBrasil / (1000 * 60 * 60 * 24 * 30)); 

    const fecha200DiasAntes = new Date(fechaObjetivo - (200 * 24 * 60 * 60 * 1000)).toLocaleDateString();
    const fecha150DiasAntes = new Date(fechaObjetivo - (150 * 24 * 60 * 60 * 1000)).toLocaleDateString();
    const fecha100DiasAntes = new Date(fechaObjetivo - (100 * 24 * 60 * 60 * 1000)).toLocaleDateString();
    const fecha75DiasAntes = new Date(fechaObjetivo - (75 * 24 * 60 * 60 * 1000)).toLocaleDateString();
    const fecha50DiasAntes = new Date(fechaObjetivo - (50 * 24 * 60 * 60 * 1000)).toLocaleDateString();
    const fecha25DiasAntes = new Date(fechaObjetivo - (25 * 24 * 60 * 60 * 1000)).toLocaleDateString();
    const fecha10DiasAntes = new Date(fechaObjetivo - (10 * 24 * 60 * 60 * 1000)).toLocaleDateString();

    if (diferencia <= 0) {
        document.getElementById("contador").innerHTML = "¡Tiempo alcanzado!";
        clearInterval(intervalo);
        return;
    }

     if (diferenciaFinAnio <= 0) {
        document.getElementById("contador-FinAnio").innerHTML = "¡Tiempo alcanzado!";
        clearInterval(intervalo);
        return;
    }

     if (mesesRestantesBrasil <= 0) {
        document.getElementById("contador-Brasil").innerHTML = "¡Tiempo alcanzado!";
        clearInterval(intervalo);
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    const diasFinAnio = Math.floor(diferenciaFinAnio / (1000 * 60 * 60 * 24));
    const horasFinAnio = Math.floor((diferenciaFinAnio % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosFinAnio = Math.floor((diferenciaFinAnio % (1000 * 60 * 60)) / (1000 * 60));
    const segundosFinAnio = Math.floor((diferenciaFinAnio % (1000 * 60)) / 1000);

    const diasBrasil = Math.floor(diferenciaBrasil / (1000 * 60 * 60 * 24));
    const horasBrasil = Math.floor((diferenciaBrasil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosBrasil = Math.floor((diferenciaBrasil % (1000 * 60 * 60)) / (1000 * 60));
    const segundosBrasil = Math.floor((diferenciaBrasil % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    document.getElementById("contador-FinAnio").innerHTML = `${diasFinAnio}d ${horasFinAnio}h ${minutosFinAnio}m ${segundosFinAnio}s`;

    document.getElementById("contador-Brasil").innerHTML = `${diasBrasil}d ${horasBrasil}h ${minutosBrasil}m ${segundosBrasil}s`;
    
    document.getElementById("MesesRestantes").innerHTML = mesesRestantes;

    document.getElementById("MesesRestantes-FinAnio").innerHTML = mesesRestantesFinAnio;

    document.getElementById("MesesRestantes-Brasil").innerHTML = mesesRestantesBrasil;

    document.getElementById("Fecha200").innerHTML = fecha200DiasAntes;
    document.getElementById("Fecha150").innerHTML = fecha150DiasAntes;
    document.getElementById("Fecha100").innerHTML = fecha100DiasAntes;
    document.getElementById("Fecha75").innerHTML = fecha75DiasAntes;
    document.getElementById("Fecha50").innerHTML = fecha50DiasAntes;
    document.getElementById("Fecha25").innerHTML = fecha25DiasAntes;
    document.getElementById("Fecha10").innerHTML = fecha10DiasAntes;    


        
}

const intervalo = setInterval(actualizarCuentaRegresiva, 1000);