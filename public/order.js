
function showOrderForm() {
  document.getElementById('orderForm').style.display = 'block';
}

function validateAndSearch() {
  const fields = ['location', 'town', 'material', 'type', 'quantity', 'additional'];
  const emptyFields = fields.filter(id => !document.getElementById(id).value.trim());

  if (emptyFields.length > 0) {
    document.getElementById('formError').textContent = 'Please fill in all fields before searching.';
    return;
  }

  document.getElementById('formError').textContent = '';
  alert('Searching for nearby timberyards based on your input...');
  // Later: send data to your Express server here
}




 



