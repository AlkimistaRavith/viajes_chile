
// secuencia para alternar tamaño de cuadro de tarjeta y botón "ver más"/"ver menos"
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.card')
      const cardBody = card.querySelector('.card-body')
      cardBody.classList.toggle('expanded')
      button.textContent = cardBody.classList.contains('expanded') ? 'Ver menos' : 'Ver más'
    })
})

// Al completar formulario de contacto, alerta si falta algun campo, no consideras espacios al inicio y final.
// Envía mensaje de formulario enviado (personalizado)
document.querySelector('.btn-success').addEventListener('click', () => {
    const nombre = document.getElementById('cuadro-nombre').value.trim()
    const correo = document.getElementById('cuadro-correo').value.trim()
    const mensaje = document.getElementById('cuadro-mensaje').value.trim()
  
    if (!nombre || !correo || !mensaje) {
      alert('Por favor complete todos los campos.')
      return;
    }
    alert(`${nombre}, gracias por contactarnos. Pronto recibirás una respuesta a ${correo}`)
  
    document.getElementById('cuadro-nombre').value = ''
    document.getElementById('cuadro-correo').value = ''
    document.getElementById('cuadro-mensaje').value = ''
})