export class PaymentsHelpers {
  createSellData(data: any, type: string) {
    const obj = {
      //data api
      xKey: process.env.API_PAYMENTS_KEY, //Your Cardknox API key.
      xVersion: '5.0.0', //Gateway API Version. The current
      xSoftwareName: 'Upos Dev', //Name of your software
      xSoftwareVersion: '1.0.0', //Version number of your software
      xCommand: type, //Cardknox transaction type
      //data tarjeta
      xCardNum: data.cardNum, //The customer card number.
      xExp: data.expirationDate, //The card expiration number.
      xCVV: data.cvv, //codigo de seguridad de la tarjeta
      xStreet: data.street, //calle de la tarjeta
      xZip: data.zip, //codigo postal de la tarjeta
      xName: data.cardName, //nombre del titular de la tarjeta
      //data transaccion
      xAmount: data.amount, //Amount of the transaction.
      xInvoice: Math.random() * 100, //numero de factura
      xPONum: Math.random() * 100, //numero de orden de compra
      xDescription: data.description, //dato adicionales que se pasan junto al informw
      xIP: '1.2.3.4', //IP del cliente -- paradeteccion de fraudes
      xCurrency: 'USD', //moneda para la transaccion
      //data facturacion
      xEmail: data.email, //email del cliente
      xBillFirstName: data.firstName, //nombre del cleinte para perfil de facturacion
      xBillMiddleName: data.middleName, //segundo nombre del cleinte para perfil de facturacion
      xBillLastName: data.lastName, //apellido del cleinte para perfil de facturacion
      xBillCompany: data.company, //nombre de la empresa para perfil de facturacion
      xBillStreet: data.street, //codigo postal del cleinte para perfil de facturacion
      xBillStreet2: data.street2, //segunda direccion del cleinte para perfil de facturacion
      xBillCity: data.city, //ciudad del cleinte para perfil de facturacion
      xBillState: data.state, //estado del cleinte para perfil de facturacion
      xBillZip: data.zip, //codigo postal del cleinte para perfil de facturacion
      xBillCountry: data.country, //pais del cleinte para perfil de facturacion
      xBillPhone: data.phone, //numero de telefono del cleinte para perfil de facturacion
      xBillMobile: data.mobile, //numero de celular del cleinte para perfil de facturacion
      xCustom01: data.customData, //campo personalizado para comentarios del cliente hay 20
    };
    return obj;
  }

  createCheckOrder(data: any, type: string) {
    const obj = {
      //data api
      xKey: process.env.API_PAYMENTS_KEY, //Your Cardknox API key.
      xVersion: '5.0.0', //Gateway API Version. The current
      xSoftwareName: 'Upos Dev', //Name of your software
      xSoftwareVersion: '1.0.0', //Version number of your software
      xCommand: type, //Cardknox transaction type
      //data tarjeta
      xRefNum: data.refNum, //The customer card number.
      xExp: data.expirationDate, //The card expiration number.
      xCVV: data.cvv, //codigo de seguridad de la tarjeta
      xStreet: data.street, //calle de la tarjeta
      xZip: data.zip, //codigo postal de la tarjeta
      xName: data.cardName, //nombre del titular de la tarjeta
      //data transaccion
      xAmount: data.amount, //Amount of the transaction.
      xInvoice: Math.random() * 100, //numero de factura
      xPONum: Math.random() * 100, //numero de orden de compra
      xDescription: data.description, //dato adicionales que se pasan junto al informw
      xIP: '1.2.3.4', //IP del cliente -- paradeteccion de fraudes
      xCurrency: 'USD', //moneda para la transaccion
      //data facturacion
      xEmail: data.email, //email del cliente
      xBillFirstName: data.firstName, //nombre del cleinte para perfil de facturacion
      xBillMiddleName: data.middleName, //segundo nombre del cleinte para perfil de facturacion
      xBillLastName: data.lastName, //apellido del cleinte para perfil de facturacion
      xBillCompany: data.company, //nombre de la empresa para perfil de facturacion
      xBillStreet: data.street, //codigo postal del cleinte para perfil de facturacion
      xBillStreet2: data.street2, //segunda direccion del cleinte para perfil de facturacion
      xBillCity: data.city, //ciudad del cleinte para perfil de facturacion
      xBillState: data.state, //estado del cleinte para perfil de facturacion
      xBillZip: data.zip, //codigo postal del cleinte para perfil de facturacion
      xBillCountry: data.country, //pais del cleinte para perfil de facturacion
      xBillPhone: data.phone, //numero de telefono del cleinte para perfil de facturacion
      xBillMobile: data.mobile, //numero de celular del cleinte para perfil de facturacion
      xCustom01: data.customData, //campo personalizado para comentarios del cliente hay 20
    };
    return obj;
  }


  createRefundData(data: any, type: string) {
        const obj = {
            xKey: process.env.API_PAYMENTS_KEY, 
            xVersion: '5.0.0',
            xSoftwareName: 'Upos Dev',
            xSoftwareVersion: '1.0.0',
            xCommand: type,
            xAmount: data.amount,
            xCustom01: data.customData,
            xRefNum: data.refNum,
            xDescription: data.description,
            xCurrency: 'USD'
        }
        return obj;
    }
}
