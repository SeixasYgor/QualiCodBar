const reference_barcode             = document.querySelector("#input-reference-barcode");
const display_reference_barcode     = document.querySelector("#display-reference-barcode");

const test_input_barcode            = document.querySelector("#test-input");
const test_display_value            = document.querySelector("#test-display-value");

reference_barcode.addEventListener("input", register_reference_barcode => display_reference_barcode.textContent = reference_barcode.value);
reference_barcode.addEventListener("change", register_reference_barcode => reference_barcode.value = '');

test_input_barcode.addEventListener("input", register_test_input_barcode => test_display_value.textContent = test_input_barcode.value);
test_input_barcode.addEventListener("change", register_test_input_barcode => test_input_barcode.value = '');
