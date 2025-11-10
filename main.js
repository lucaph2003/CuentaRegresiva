// Target dates for countdowns
const FECHAS = {
    finAnio: new Date("2025-12-31T20:00:00"),
    principal: new Date("2026-04-28T12:00:00"),
    primerEntrega: new Date("2025-11-16T21:00:00"),
    segundaEntrega: new Date("2025-12-15T21:00:00"),
    entregaFinal: new Date("2026-02-10T21:00:00"),
    entregaDefinitiva: new Date("2026-04-06T21:00:00")
};

// Calculate time difference
function calcularTiempo(fechaObjetivo) {
    const ahora = new Date().getTime();
    const objetivo = fechaObjetivo.getTime();
    const diferencia = objetivo - ahora;

    if (diferencia <= 0) {
        return { dias: 0, horas: 0, minutos: 0, segundos: 0, expirado: true };
    }

    return {
        dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
        horas: Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutos: Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60)),
        segundos: Math.floor((diferencia % (1000 * 60)) / 1000),
        meses: Math.floor(diferencia / (1000 * 60 * 60 * 24 * 30.44)),
        expirado: false
    };
}

// Update individual countdown
function actualizarContador(fecha, idContador, idMeses) {
    const tiempo = calcularTiempo(fecha);
    const elementoContador = document.getElementById(idContador);
    const elementoMeses = document.getElementById(idMeses);

    if (!elementoContador || !elementoMeses) return;

    if (tiempo.expirado) {
        elementoContador.textContent = "🎉 ¡Completado!";
        elementoMeses.textContent = "0";
        return;
    }

    // Format time display
    const timeString = `${tiempo.dias}d ${String(tiempo.horas).padStart(2, '0')}h ${String(tiempo.minutos).padStart(2, '0')}m ${String(tiempo.segundos).padStart(2, '0')}s`;
    elementoContador.textContent = timeString;
    elementoMeses.textContent = tiempo.meses;
}

// Update milestone dates
function actualizarHitos() {
    const fechaPrincipal = FECHAS.principal.getTime();
    const hitos = [150, 100, 75, 50, 25, 10];

    hitos.forEach(dias => {
        const fechaHito = new Date(fechaPrincipal - (dias * 24 * 60 * 60 * 1000));
        const elemento = document.getElementById(`Fecha${dias}`);
        if (elemento) {
            elemento.textContent = fechaHito.toLocaleDateString('es-ES');
        }
    });
}

// Main update function
function actualizarCuentaRegresiva() {
    // Update all countdowns
    actualizarContador(FECHAS.finAnio, "contador-FinAnio", "MesesRestantes-FinAnio");
    actualizarContador(FECHAS.principal, "contador", "MesesRestantes");
    actualizarContador(FECHAS.primerEntrega, "contador-primerEntrega", "MesesRestantes-primerEntrega");
    actualizarContador(FECHAS.segundaEntrega, "contador-segundaEntrega", "MesesRestantes-segundaEntrega");
    actualizarContador(FECHAS.entregaFinal, "contador-entregaFinal", "MesesRestantes-entregaFinal");
    actualizarContador(FECHAS.entregaDefinitiva, "contador-entregaDefinitiva", "MesesRestantes-entregaDefinitiva");
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initial update
    actualizarCuentaRegresiva();
    actualizarHitos();
    
    // Update every second
    setInterval(actualizarCuentaRegresiva, 1000);
});