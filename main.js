function actualizarCuentaRegresiva() {
    const fechaObjetivo = new Date("2026-02-23T12:00:00").getTime();
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;
    const mesesRestantes = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 30)); 

    const fechaObjetivoFecha2 = new Date("2026-03-27T12:00:00").getTime();
    const ahoraFecha2 = new Date().getTime();
    const diferenciaFecha2 = fechaObjetivoFecha2 - ahoraFecha2;
    const mesesRestantesFecha2 = Math.floor(diferenciaFecha2 / (1000 * 60 * 60 * 24 * 30)); 


    const fechaObjetivoPsj = new Date("2025-08-15T20:00:00").getTime();
    const diferenciaPsj = fechaObjetivoPsj - ahora;
    const mesesRestantesPsj = Math.floor(diferenciaPsj / (1000 * 60 * 60 * 24 * 30)); 

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

    if (diferenciaFecha2 <= 0) {
        document.getElementById("contador").innerHTML = "¡Tiempo alcanzado!";
        clearInterval(intervalo);
        return;
    }


    if (diferenciaPsj <= 0) {
        document.getElementById("contador-Psj").innerHTML = "¡Tiempo alcanzado!";
        clearInterval(intervalo);
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    const diasFecha2 = Math.floor(diferenciaFecha2 / (1000 * 60 * 60 * 24));
    const horasFecha2 = Math.floor((diferenciaFecha2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosFecha2 = Math.floor((diferenciaFecha2 % (1000 * 60 * 60)) / (1000 * 60));
    const segundosFecha2 = Math.floor((diferenciaFecha2 % (1000 * 60)) / 1000);

    const diasPsj = Math.floor(diferenciaPsj / (1000 * 60 * 60 * 24));
    const horasPsj = Math.floor((diferenciaPsj % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosPsj = Math.floor((diferenciaPsj % (1000 * 60 * 60)) / (1000 * 60));
    const segundosPsj = Math.floor((diferenciaPsj % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    document.getElementById("contador-fecha2").innerHTML = `${diasFecha2}d ${horasFecha2}h ${minutosFecha2}m ${segundosFecha2}s`;

    document.getElementById("contador-Psj").innerHTML = `${diasPsj}d ${horasPsj}h ${minutosPsj}m ${segundosPsj}s`;
    
    document.getElementById("MesesRestantes").innerHTML = mesesRestantes;

    document.getElementById("MesesRestantes-fecha2").innerHTML = mesesRestantesFecha2;
        
    document.getElementById("MesesRestantesPsj").innerHTML = mesesRestantesPsj;

    document.getElementById("Fecha200").innerHTML = fecha200DiasAntes;
    document.getElementById("Fecha150").innerHTML = fecha150DiasAntes;
    document.getElementById("Fecha100").innerHTML = fecha100DiasAntes;
    document.getElementById("Fecha75").innerHTML = fecha75DiasAntes;
    document.getElementById("Fecha50").innerHTML = fecha50DiasAntes;
    document.getElementById("Fecha25").innerHTML = fecha25DiasAntes;
    document.getElementById("Fecha10").innerHTML = fecha10DiasAntes;    


        
}

const intervalo = setInterval(actualizarCuentaRegresiva, 1000);