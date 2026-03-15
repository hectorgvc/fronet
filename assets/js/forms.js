/* ============================================
   FRONET TECNOLOGÍA SRL — forms.js
   Validación y manejo de formularios
   ============================================ */

// Endpoint configurable — dejar vacío hasta tener backend
const FORM_ENDPOINT = '';

document.addEventListener('DOMContentLoaded', () => {

  /* ===== VALIDATION HELPERS ===== */

  function validateRequired(field) {
    const value = field.value.trim();
    if (!value) {
      showError(field, 'Este campo es obligatorio');
      return false;
    }
    clearError(field);
    return true;
  }

  function validateEmail(field) {
    const value = field.value.trim();
    if (!value) {
      showError(field, 'El email es obligatorio');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      showError(field, 'Ingresa un email válido');
      return false;
    }
    clearError(field);
    return true;
  }

  function validatePhone(field) {
    const value = field.value.trim();
    if (!value) return true; // phone is optional
    const phoneRegex = /^[\+]?[\d\s\-\(\)]{7,20}$/;
    if (!phoneRegex.test(value)) {
      showError(field, 'Ingresa un teléfono válido');
      return false;
    }
    clearError(field);
    return true;
  }

  function showError(field, message) {
    field.classList.add('error');
    // Find or create error element
    let errorEl = field.parentElement.querySelector('.form-error');
    if (!errorEl) {
      errorEl = document.createElement('div');
      errorEl.className = 'form-error';
      field.parentElement.appendChild(errorEl);
    }
    errorEl.textContent = message;
    errorEl.style.display = 'block';
  }

  function clearError(field) {
    field.classList.remove('error');
    const errorEl = field.parentElement.querySelector('.form-error');
    if (errorEl) {
      errorEl.style.display = 'none';
      errorEl.textContent = '';
    }
  }

  function showSuccess(form, message) {
    // Hide the form fields
    const fieldset = form.querySelector('fieldset') || form;
    
    // Find or create success element
    let successEl = form.querySelector('.form-success');
    if (!successEl) {
      successEl = document.createElement('div');
      successEl.className = 'form-success';
      successEl.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <span></span>
      `;
      form.appendChild(successEl);
    }

    successEl.querySelector('span').textContent = message;
    successEl.classList.add('show');
  }

  function setLoading(button, loading) {
    if (loading) {
      button.classList.add('loading');
      button.disabled = true;
      button._originalText = button.textContent;
      button.textContent = 'Enviando...';
    } else {
      button.classList.remove('loading');
      button.disabled = false;
      if (button._originalText) {
        button.textContent = button._originalText;
      }
    }
  }

  function submitForm(form, data, successMessage) {
    const submitBtn = form.querySelector('button[type="submit"]');

    if (submitBtn) setLoading(submitBtn, true);

    if (FORM_ENDPOINT) {
      // Real submission
      fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (!response.ok) throw new Error('Error en el envío');
        if (submitBtn) setLoading(submitBtn, false);
        showSuccess(form, successMessage);
        form.reset();
      })
      .catch(() => {
        if (submitBtn) setLoading(submitBtn, false);
        showError(form.querySelector('input, textarea'), 'Hubo un error. Intenta de nuevo.');
      });
    } else {
      // Simulate success with delay
      setTimeout(() => {
        if (submitBtn) setLoading(submitBtn, false);
        showSuccess(form, successMessage);
        form.reset();
      }, 1500);
    }
  }

  // Clear errors on input
  document.querySelectorAll('.form-control').forEach(field => {
    field.addEventListener('input', () => clearError(field));
    field.addEventListener('change', () => clearError(field));
  });


  /* ===== 1. FORMULARIO DE CONTACTO (#form-contacto) ===== */
  const formContacto = document.getElementById('form-contacto');
  if (formContacto) {
    formContacto.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      const nombre = formContacto.querySelector('[name="nombre"]');
      const apellido = formContacto.querySelector('[name="apellido"]');
      const email = formContacto.querySelector('[name="email"]');
      const asunto = formContacto.querySelector('[name="asunto"]');
      const mensaje = formContacto.querySelector('[name="mensaje"]');

      if (nombre && !validateRequired(nombre)) valid = false;
      if (apellido && !validateRequired(apellido)) valid = false;
      if (email && !validateEmail(email)) valid = false;
      if (asunto && !validateRequired(asunto)) valid = false;
      if (mensaje && !validateRequired(mensaje)) valid = false;

      if (!valid) return;

      const data = {
        form: 'contacto',
        nombre: nombre ? nombre.value.trim() : '',
        apellido: apellido ? apellido.value.trim() : '',
        email: email ? email.value.trim() : '',
        asunto: asunto ? asunto.value.trim() : '',
        mensaje: mensaje ? mensaje.value.trim() : ''
      };

      submitForm(formContacto, data, '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
    });
  }


  /* ===== 2. FORMULARIO DE SOPORTE (#form-soporte) ===== */
  const formSoporte = document.getElementById('form-soporte');
  if (formSoporte) {
    formSoporte.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      const nombreCompleto = formSoporte.querySelector('[name="nombre_completo"]');
      const email = formSoporte.querySelector('[name="email"]');
      const empresa = formSoporte.querySelector('[name="empresa"]');
      const telefono = formSoporte.querySelector('[name="telefono"]');
      const asunto = formSoporte.querySelector('[name="asunto"]');
      const inconveniente = formSoporte.querySelector('[name="inconveniente"]');

      if (nombreCompleto && !validateRequired(nombreCompleto)) valid = false;
      if (email && !validateEmail(email)) valid = false;
      if (telefono && !validatePhone(telefono)) valid = false;
      if (inconveniente && !validateRequired(inconveniente)) valid = false;

      if (!valid) return;

      const data = {
        form: 'soporte',
        nombre_completo: nombreCompleto ? nombreCompleto.value.trim() : '',
        email: email ? email.value.trim() : '',
        empresa: empresa ? empresa.value.trim() : '',
        telefono: telefono ? telefono.value.trim() : '',
        asunto: asunto ? asunto.value.trim() : '',
        inconveniente: inconveniente ? inconveniente.value.trim() : ''
      };

      submitForm(formSoporte, data, '¡Solicitud de soporte enviada! Nuestro equipo te contactará en menos de 2 horas.');
    });
  }


  /* ===== 3. FORMULARIO DE EMPLEOS (#form-empleos) ===== */
  const formEmpleos = document.getElementById('form-empleos');
  if (formEmpleos) {
    formEmpleos.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      const nombre = formEmpleos.querySelector('[name="nombre"]');
      const apellido = formEmpleos.querySelector('[name="apellido"]');
      const email = formEmpleos.querySelector('[name="email"]');
      const telefono = formEmpleos.querySelector('[name="telefono"]');
      const puesto = formEmpleos.querySelector('[name="puesto"]');
      const fechaInicio = formEmpleos.querySelector('[name="fecha_inicio"]');
      const cvLink = formEmpleos.querySelector('[name="cv_link"]');

      if (nombre && !validateRequired(nombre)) valid = false;
      if (apellido && !validateRequired(apellido)) valid = false;
      if (email && !validateEmail(email)) valid = false;
      if (telefono && !validatePhone(telefono)) valid = false;
      if (puesto && !validateRequired(puesto)) valid = false;

      if (!valid) return;

      const data = {
        form: 'empleos',
        nombre: nombre ? nombre.value.trim() : '',
        apellido: apellido ? apellido.value.trim() : '',
        email: email ? email.value.trim() : '',
        telefono: telefono ? telefono.value.trim() : '',
        puesto: puesto ? puesto.value.trim() : '',
        fecha_inicio: fechaInicio ? fechaInicio.value : '',
        cv_link: cvLink ? cvLink.value.trim() : ''
      };

      submitForm(formEmpleos, data, '¡Solicitud enviada! Revisaremos tu perfil y te contactaremos.');
    });
  }


  /* ===== 4. FORMULARIO DE BOLETÍN (#form-boletin) ===== */
  const formBoletin = document.getElementById('form-boletin');
  if (formBoletin) {
    formBoletin.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = formBoletin.querySelector('[name="email"]');
      if (!email || !validateEmail(email)) return;

      const data = {
        form: 'boletin',
        email: email.value.trim()
      };

      submitForm(formBoletin, data, '¡Te has suscrito exitosamente! Recibirás nuestras novedades y ofertas.');
    });
  }

});
