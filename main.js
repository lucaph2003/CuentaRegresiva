// Target dates for countdowns
const FECHAS = {
    secundaria: new Date("2026-05-11T21:45:00"),
    espana: new Date("2026-05-12T14:35:00"),
    tren: new Date("2026-05-12T18:30:00"),
    valencia: new Date("2026-05-12T20:30:00")
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

    // Mostrar meses y días restantes en formato "X meses y Y días"
    let meses = tiempo.meses;
    let diasRestantes = tiempo.dias - (meses * 30);
    if (diasRestantes < 0) diasRestantes = 0;
    let mesesDiasString = "";
    if (meses > 0) {
        mesesDiasString += `${meses} mes${meses === 1 ? '' : 'es'}`;
        if (diasRestantes > 0) {
            mesesDiasString += ` y ${diasRestantes} día${diasRestantes === 1 ? '' : 's'}`;
        }
    } else {
        mesesDiasString = `${diasRestantes} día${diasRestantes === 1 ? '' : 's'}`;
    }
    elementoMeses.textContent = mesesDiasString;
}

// Update milestone dates
function actualizarHitos() {
    // Solo Secundaria
    const fechaSecundaria = FECHAS.secundaria.getTime();
    const hitos = [50, 25, 10];
    hitos.forEach(dias => {
        const fechaHito = new Date(fechaSecundaria - (dias * 24 * 60 * 60 * 1000));
        const elemento = document.getElementById(`FechaSecundaria${dias}`);
        if (elemento) {
            elemento.textContent = fechaHito.toLocaleDateString('es-ES');
        }
    });
}

// Main update function
function actualizarCuentaRegresiva() {
    // Update all countdowns (Secundaria, España, Tren y Valencia)
    actualizarContador(FECHAS.secundaria, "contador-secundaria", "MesesRestantes-secundaria");
    actualizarContador(FECHAS.espana, "contador-espana", "MesesRestantes-espana");
    actualizarContador(FECHAS.tren, "contador-tren", "MesesRestantes-tren");
    actualizarContador(FECHAS.valencia, "contador-valencia", "MesesRestantes-valencia");
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize countdown
    actualizarCuentaRegresiva();
    actualizarHitos();
    
    // Update countdowns every second
    setInterval(actualizarCuentaRegresiva, 1000);

    // Initialize currency converter
    const form = document.getElementById('currencyForm');
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            const amount = parseFloat(document.getElementById('amount').value);
            const direction = document.getElementById('direction').value;
            const resultDiv = document.getElementById('currencyResult');
            resultDiv.textContent = 'Convirtiendo...';
            let from, to;
            if (direction === 'UYU_EUR') {
                from = 'UYU';
                to = 'EUR';
            } else {
                from = 'EUR';
                to = 'UYU';
            }
            try {
                const apiKey = "e29d1216117f75962230f0e2c89ea392";
                const url = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}&access_key=${apiKey}`;
                const res = await fetch(url);
                if (!res.ok) throw new Error('Error en la conversión');
                const data = await res.json();
                console.log(data);
                
                const converted = data.result;
                resultDiv.textContent = `${amount} ${from} = ${converted} ${to}`;
            } catch (err) {
                resultDiv.textContent = 'No se pudo realizar la conversión.';
            }
        });
    }
});