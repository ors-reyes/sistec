window.addEventListener("load", function() {
    let svgObject = document.getElementById('rack-object').contentDocument,
        
        btn12 = svgObject.querySelector('.mask12'),
        slide12 = svgObject.querySelector('.mask12Slide'),
        fnd12 = svgObject.querySelector('.pnt12FndTxt'),
        
        btn3 = svgObject.querySelector('.mask3'),
        slide3 = svgObject.querySelector('.mask3Slide'),
        fnd3 = svgObject.querySelector('.pnt3FndTxt'),

        btnPro = svgObject.querySelector('.maskPro'),
        slidePro = svgObject.querySelector('.maskProSlide'),
        fndPro = svgObject.querySelector('.pntProFndTxt'),


        btnPiso = svgObject.querySelector('.maskPiso'),
        slidePiso = svgObject.querySelector('.maskPisoSlide'),
        fndPiso = svgObject.querySelector('.pntPisoFndTxt'),

        btnRiendas = svgObject.querySelector('.maskRiendas');
        slideRiendas = svgObject.querySelector('.maskRiendasSlide'),
        fndRiendas = svgObject.querySelector('.pntRienFndTxt'),
        
        logo = svgObject.querySelector('.slideLogo'),
    
    logo.addEventListener("click", () => {
      // location.href = "https://www.google.com", "_blank";
      window.open("https://wa.me/595981631597?text=Me%20podrían%20enviar%20más%20información")
    })
    btn12.addEventListener("click", () => {
      fnd12.classList.toggle("btnActivo");
      slide12.classList.toggle("slideRackActivo");

      fnd3.classList.remove("btnActivo");
      slide3.classList.remove("slideRackActivo");
      fndPro.classList.remove("btnActivo");
      slidePro.classList.remove("slideRackActivo");
      fndPiso.classList.remove("btnActivo");
      slidePiso.classList.remove("slideRackActivo");
      fndRiendas.classList.remove("btnActivo");
      slideRiendas.classList.remove("slideRackActivo");
    })
    
    btn3.addEventListener("click", () => {
      fnd3.classList.toggle("btnActivo");
      slide3.classList.toggle("slideRackActivo");

      fnd12.classList.remove("btnActivo");
      slide12.classList.remove("slideRackActivo");
      fndPro.classList.remove("btnActivo");
      slidePro.classList.remove("slideRackActivo");
      fndPiso.classList.remove("btnActivo");
      slidePiso.classList.remove("slideRackActivo");
      fndRiendas.classList.remove("btnActivo");
      slideRiendas.classList.remove("slideRackActivo");
    })

    btnPro.addEventListener("click", () => {
        fndPro.classList.toggle("btnActivo");
        slidePro.classList.toggle("slideRackActivo");
  
        fnd12.classList.remove("btnActivo");
        slide12.classList.remove("slideRackActivo");
        fnd3.classList.remove("btnActivo");
        slide3.classList.remove("slideRackActivo");
        fndPiso.classList.remove("btnActivo");
        slidePiso.classList.remove("slideRackActivo");
        fndRiendas.classList.remove("btnActivo");
        slideRiendas.classList.remove("slideRackActivo");
      })

      btnPiso.addEventListener("click", () => {
        fndPiso.classList.toggle("btnActivo");
        slidePiso.classList.toggle("slideRackActivo");
  
        fnd12.classList.remove("btnActivo");
        slide12.classList.remove("slideRackActivo");
        fnd3.classList.remove("btnActivo");
        slide3.classList.remove("slideRackActivo");
        fndPro.classList.remove("btnActivo");
        slidePro.classList.remove("slideRackActivo");
        fndRiendas.classList.remove("btnActivo");
        slideRiendas.classList.remove("slideRackActivo");
      })

      btnRiendas.addEventListener("click", () => {
        fndRiendas.classList.toggle("btnActivo");
        slideRiendas.classList.toggle("slideRackActivo");
  
        fnd12.classList.remove("btnActivo");
        slide12.classList.remove("slideRackActivo");
        fnd3.classList.remove("btnActivo");
        slide3.classList.remove("slideRackActivo");
        fndPro.classList.remove("btnActivo");
        slidePro.classList.remove("slideRackActivo");
        fndPiso.classList.remove("btnActivo");
        slidePiso.classList.remove("slideRackActivo");
      })
  
  
  
  
  
    });