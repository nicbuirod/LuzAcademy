import React, { useEffect } from "react";

function PayConfirmation() {
  useEffect(() => {
    function getQueryParam(param) {
      let query = window.location.search.substring(1);
      let vars = query.split("&");
      for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (decodeURIComponent(pair[0]) === param) {
          return decodeURIComponent(pair[1]);
        }
      }
      return null;
    }

    // Referencia de payco que viene por url
    let ref_payco = getQueryParam("ref_payco");

    // Url Rest Metodo get, se pasa la llave y la ref_payco como parámetro
    let urlapp = `https://secure.epayco.co/validation/v1/reference/${ref_payco}`;

    fetch(urlapp)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          if (data.data.x_cod_response === 1) {
            // Código personalizado
            alert("Transacción Aprobada");
            console.log("Transacción aceptada");
          }
          // Transacción Rechazada
          if (data.data.x_cod_response === 2) {
            console.log("Transacción rechazada");
          }
          // Transacción Pendiente
          if (data.data.x_cod_response === 3) {
            console.log("Transacción pendiente");
          }
          // Transacción Fallida
          if (data.data.x_cod_response === 4) {
            console.log("Transacción fallida");
          }

          document.getElementById("fecha").textContent =
            data.data.x_transaction_date;
          document.getElementById("respuesta").textContent =
            data.data.x_response;
          document.getElementById("referencia").textContent =
            data.data.x_id_invoice;
          document.getElementById("motivo").textContent =
            data.data.x_response_reason_text;
          document.getElementById("recibo").textContent =
            data.data.x_transaction_id;
          document.getElementById("banco").textContent = data.data.x_bank_name;
          document.getElementById("autorizacion").textContent =
            data.data.x_approval_code;
          document.getElementById(
            "total"
          ).textContent = `${data.data.x_amount} ${data.data.x_currency_code}`;
        } else {
          alert("Error consultando la información");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Error consultando la información");
      });
  }, []);

  return (
    <html lang="es">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Formulario Pruebas Respuesta</title>
        <link
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <header id="main-header" style={{ marginTop: "20px" }}>
          <div className="row">
            <div className="col-lg-12 franja">
              <img
                className="center-block"
                src="https://369969691f476073508a-60bf0867add971908d4f26a64519c2aa.ssl.cf5.rackcdn.com/btns/epayco/logo1.png"
                style=""
                alt="Logo"
              />
            </div>
          </div>
        </header>
        <div className="container">
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-lg-8 col-lg-offset-2">
              <h4 style={{ textAlign: "left" }}>Respuesta de la Transacción</h4>
              <hr />
            </div>
            <div className="col-lg-8 col-lg-offset-2">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Referencia</td>
                      <td id="referencia"></td>
                    </tr>
                    <tr>
                      <td className="bold">Fecha</td>
                      <td id="fecha" className=""></td>
                    </tr>
                    <tr>
                      <td>Respuesta</td>
                      <td id="respuesta"></td>
                    </tr>
                    <tr>
                      <td>Motivo</td>
                      <td id="motivo"></td>
                    </tr>
                    <tr>
                      <td className="bold">Banco</td>
                      <td className="" id="banco"></td>
                    </tr>
                    <tr>
                      <td className="bold">Recibo</td>
                      <td id="recibo"></td>
                    </tr>
                    <tr>
                      <td className="bold">Total</td>
                      <td className="" id="total"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="row">
            <div className="container">
              <div className="col-lg-8 col-lg-offset-2">
                <img
                  src="https://369969691f476073508a-60bf0867add971908d4f26a64519c2aa.ssl.cf5.rackcdn.com/btns/epayco/pagos_procesados_por_epayco_260px.png"
                  style={{ marginTop: "10px", float: "left" }}
                  alt="Logo"
                />
                <img
                  src="https://369969691f476073508a-60bf0867add971908d4f26a64519c2aa.ssl.cf5.rackcdn.com/btns/epayco/credibancologo.png"
                  height="40px"
                  style={{ marginTop: "10px", float: "right" }}
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </footer>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      </body>
    </html>
  );
}

export default PayConfirmation;
