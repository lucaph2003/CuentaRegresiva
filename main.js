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

    const fechaPresentacion = new Date("2025-09-17T21:00:00").getTime();
    const diferenciaPresentacion = fechaPresentacion - ahora;
    const mesesRestantesPresentacion = Math.floor(diferenciaPresentacion / (1000 * 60 * 60 * 24 * 30)); 

    const fechaAceptacion = new Date("2025-09-30T21:00:00").getTime();
    const diferenciaAceptacion = fechaAceptacion - ahora;
    const mesesRestantesAceptacion = Math.floor(diferenciaAceptacion / (1000 * 60 * 60 * 24 * 30)); 


    const fechaActa = new Date("2025-10-22T21:00:00").getTime();
    const diferenciaActa = fechaActa - ahora;
    const mesesRestantesActa = Math.floor(diferenciaActa / (1000 * 60 * 60 * 24 * 30)); 


    const fechaPrimerEntrega = new Date("2025-11-16T21:00:00").getTime();
    const diferenciaPrimerEntrega = fechaPrimerEntrega - ahora;
    const mesesRestantesPrimerEntrega = Math.floor(diferenciaPrimerEntrega / (1000 * 60 * 60 * 24 * 30)); 


    const fechaSegundaEntrega = new Date("2025-12-15T21:00:00").getTime();
    const diferenciaSegundaEntrega = fechaSegundaEntrega - ahora;
    const mesesRestantesSegundaEntrega = Math.floor(diferenciaSegundaEntrega / (1000 * 60 * 60 * 24 * 30)); 


    const fechaEntregaFinal = new Date("2026-02-10T21:00:00").getTime();
    const diferenciaEntregaFinal = fechaEntregaFinal - ahora;
    const mesesRestantesEntregaFinal = Math.floor(diferenciaEntregaFinal / (1000 * 60 * 60 * 24 * 30)); 

    const fechaEntregaDefinitiva = new Date("2026-04-06T21:00:00").getTime();
    const diferenciaEntregaDefinitiva = fechaEntregaDefinitiva - ahora;
    const mesesRestantesEntregaDefinitiva = Math.floor(diferenciaEntregaDefinitiva / (1000 * 60 * 60 * 24 * 30)); 

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

    const diasPresentacion = Math.floor(diferenciaPresentacion / (1000 * 60 * 60 * 24));
    const horasPresentacion = Math.floor((diferenciaPresentacion % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosPresentacion = Math.floor((diferenciaPresentacion % (1000 * 60 * 60)) / (1000 * 60));
    const segundosPresentacion = Math.floor((diferenciaPresentacion % (1000 * 60)) / 1000);

    const diasAceptacion = Math.floor(diferenciaAceptacion / (1000 * 60 * 60 * 24));
    const horasAceptacion = Math.floor((diferenciaAceptacion % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosAceptacion = Math.floor((diferenciaAceptacion % (1000 * 60 * 60)) / (1000 * 60));
    const segundosAceptacion = Math.floor((diferenciaAceptacion % (1000 * 60)) / 1000);


    const diasActa = Math.floor(diferenciaActa / (1000 * 60 * 60 * 24));
    const horasActa = Math.floor((diferenciaActa % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosActa = Math.floor((diferenciaActa % (1000 * 60 * 60)) / (1000 * 60));
    const segundosActa = Math.floor((diferenciaActa % (1000 * 60)) / 1000);


    const diasPrimerEntrega = Math.floor(diferenciaPrimerEntrega / (1000 * 60 * 60 * 24));
    const horasPrimerEntrega = Math.floor((diferenciaPrimerEntrega % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosPrimerEntrega = Math.floor((diferenciaPrimerEntrega % (1000 * 60 * 60)) / (1000 * 60));
    const segundosPrimerEntrega = Math.floor((diferenciaPrimerEntrega % (1000 * 60)) / 1000);


    const diasSegundaEntrega = Math.floor(diferenciaSegundaEntrega / (1000 * 60 * 60 * 24));
    const horasSegundaEntrega = Math.floor((diferenciaSegundaEntrega % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosSegundaEntrega = Math.floor((diferenciaSegundaEntrega % (1000 * 60 * 60)) / (1000 * 60));
    const segundosSegundaEntrega = Math.floor((diferenciaSegundaEntrega % (1000 * 60)) / 1000);

    const diasEntregaFinal = Math.floor(diferenciaEntregaFinal / (1000 * 60 * 60 * 24));
    const horasEntregaFinal = Math.floor((diferenciaEntregaFinal % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosEntregaFinal = Math.floor((diferenciaEntregaFinal % (1000 * 60 * 60)) / (1000 * 60));
    const segundosEntregaFinal = Math.floor((diferenciaEntregaFinal % (1000 * 60)) / 1000);

    const diasEntregaDefinitiva = Math.floor(diferenciaEntregaDefinitiva / (1000 * 60 * 60 * 24));
    const horasEntregaDefinitiva = Math.floor((diferenciaEntregaDefinitiva % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosEntregaDefinitiva = Math.floor((diferenciaEntregaDefinitiva % (1000 * 60 * 60)) / (1000 * 60));
    const segundosEntregaDefinitiva = Math.floor((diferenciaEntregaDefinitiva % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    document.getElementById("contador-FinAnio").innerHTML = `${diasFinAnio}d ${horasFinAnio}h ${minutosFinAnio}m ${segundosFinAnio}s`;

    document.getElementById("contador-Brasil").innerHTML = `${diasBrasil}d ${horasBrasil}h ${minutosBrasil}m ${segundosBrasil}s`;

    document.getElementById("contador-presentacion").innerHTML = `${diasPresentacion}d ${horasPresentacion}h ${minutosPresentacion}m ${segundosPresentacion}s`;


    document.getElementById("contador-aceptacion").innerHTML = `${diasAceptacion}d ${horasAceptacion}h ${minutosAceptacion}m ${segundosAceptacion}s`;

    document.getElementById("contador-acta").innerHTML = `${diasActa}d ${horasActa}h ${minutosActa}m ${segundosActa}s`;

    document.getElementById("contador-primerEntrega").innerHTML = `${diasPrimerEntrega}d ${horasPrimerEntrega}h ${minutosPrimerEntrega}m ${segundosPrimerEntrega}s`;

    document.getElementById("contador-segundaEntrega").innerHTML = `${diasSegundaEntrega}d ${horasSegundaEntrega}h ${minutosSegundaEntrega}m ${segundosSegundaEntrega}s`;

    document.getElementById("contador-entregaFinal").innerHTML = `${diasEntregaFinal}d ${horasEntregaFinal}h ${minutosEntregaFinal}m ${segundosEntregaFinal}s`;

    document.getElementById("contador-entregaDefinitiva").innerHTML = `${diasEntregaDefinitiva}d ${horasEntregaDefinitiva}h ${minutosEntregaDefinitiva}m ${segundosEntregaDefinitiva}s`;


    
    document.getElementById("MesesRestantes").innerHTML = mesesRestantes;

    document.getElementById("MesesRestantes-FinAnio").innerHTML = mesesRestantesFinAnio;

    document.getElementById("MesesRestantes-Brasil").innerHTML = mesesRestantesBrasil;

    document.getElementById("MesesRestantes-Presentacion").innerHTML = mesesRestantesPresentacion;

    document.getElementById("MesesRestantes-aceptacion").innerHTML = mesesRestantesAceptacion;

    document.getElementById("MesesRestantes-acta").innerHTML = mesesRestantesActa;

    document.getElementById("MesesRestantes-primerEntrega").innerHTML = mesesRestantesPrimerEntrega;

    document.getElementById("MesesRestantes-segundaEntrega").innerHTML = mesesRestantesSegundaEntrega;

    document.getElementById("MesesRestantes-entregaFinal").innerHTML = mesesRestantesEntregaFinal;

    document.getElementById("MesesRestantes-entregaDefinitiva").innerHTML = mesesRestantesEntregaDefinitiva;

    document.getElementById("Fecha200").innerHTML = fecha200DiasAntes;
    document.getElementById("Fecha150").innerHTML = fecha150DiasAntes;
    document.getElementById("Fecha100").innerHTML = fecha100DiasAntes;
    document.getElementById("Fecha75").innerHTML = fecha75DiasAntes;
    document.getElementById("Fecha50").innerHTML = fecha50DiasAntes;
    document.getElementById("Fecha25").innerHTML = fecha25DiasAntes;
    document.getElementById("Fecha10").innerHTML = fecha10DiasAntes;    


        
}

const intervalo = setInterval(actualizarCuentaRegresiva, 1000);