document.getElementById('convert').addEventListener('click', function() {
    let temp = document.getElementById('temperature').value;
    let unit = document.querySelector('input[name="conversionUnit"]:checked').value;
    let result;

    if (unit === 'Celsius') {
        result = (temp - 32) * 5 / 9;
    } else {
        result = temp * 9 / 5 + 32;
    }

    document.getElementById('result').innerText = `Result: ${result.toFixed(2)} ${unit}`;
});
