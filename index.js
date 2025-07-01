const tbody = document.querySelector("tbody");
    let total = 0;

    function agregarItem() {
      const desc = document.getElementById("descripcion").value;
      const cant = parseInt(document.getElementById("cantidad").value);
      const precio = parseFloat(document.getElementById("precio").value);

      if (!desc || isNaN(cant) || isNaN(precio)) {
        alert("Complete todos los campos.");
        return;
      }

      const subtotal = cant * precio;
      total += subtotal;

      const fila = `<tr>
                      <td>${desc}</td>
                      <td>${cant}</td>
                      <td>$${precio.toFixed(2)}</td>
                      <td>$${subtotal.toFixed(2)}</td>
                    </tr>`;
      tbody.innerHTML += fila;
      document.getElementById("total").textContent = total.toFixed(2);

      document.getElementById("descripcion").value = "";
      document.getElementById("cantidad").value = "";
      document.getElementById("precio").value = "";
    }

    function calcularFechas() {
      const hoy = new Date();
      document.getElementById("fechaEmision").textContent = hoy.toLocaleString();
    }

    function actualizarDescripcion() {
      const texto = document.getElementById("descripcionTrabajo").value;
      document.getElementById("textoDescripcionTrabajo").textContent = texto;
    }

 function descargarPDF() {
  actualizarDescripcion();


  document.querySelector(".soloPantalla").style.display = "none";
  document.querySelector(".soloPDF").style.display = "block";

  const element = document.getElementById("presupuestoCompleto");

  const opt = {
    margin:       0,
    filename:     'Presupuesto_Juemix.pdf',
    image:        { type: 'jpeg', quality: 1 },
    html2canvas:  { scale: 2, useCORS: true, scrollY: 0 },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
 
  };

  html2pdf().set(opt).from(element).save().then(() => {
    // Restaurar la vista después de la descarga
    document.querySelector(".soloPantalla").style.display = "block";
    document.querySelector(".soloPDF").style.display = "none";
  });
}

    calcularFechas();