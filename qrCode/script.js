let qr;
(function () {
  qr = new QRious({
    element: document.querySelector("#qrCode"),
    size: 200,
    value: "",
  });
})();

const generateQRCode = (url,size) =>{
  const qrcode = new qrcode('qrcode',{
      text:url,
      width: size,
      height: size,
  })
};
form.addEventListener('submit', onGenerateSubmit);