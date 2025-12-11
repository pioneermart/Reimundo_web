function calcularIntensidad() {
    const valor = document.getElementById("intensidad").value.trim();
    const resultado = document.getElementById("resultado");

    if (valor === "") {
        resultado.textContent = "Por favor, ingresa un valor.";
        return;
    }

    const I = Number(valor);

    if (isNaN(I) || I < 1e-12 || I > 1) {
        resultado.textContent = "Ingresa un valor entre 1e-12 y 1 W/m².";
        return;
    }

    const L = 10 * Math.log10(I / 1e-12);

    resultado.textContent = `Nivel de intensidad sonora: ${L.toFixed(2)} dB`;
}
