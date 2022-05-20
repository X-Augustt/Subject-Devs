var els= {
    modal: document.querySelector(".modal"),
    btnMain: document.querySelector(".btn-main"),
    btnClose: document.querySelector(".btn-close")
  };
  
  var ctx= new AudioContext();
  
  function createSound(fr, time, _type, vol) {
  var osc= ctx.createOscillator(),
      gain= ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type= _type;
      osc.start();
      osc.frequency.value= fr;
      gain.gain.value= vol;
      setTimeout(()=> {
          osc.frequency.value= 0;
          osc.stop();
      }, time);
  }
  
  
  function setSizes() {
    els.modal.style.height= els.btnMain.getBoundingClientRect().height +"px";
    els.modal.style.flex="0 0" + " "+ els.btnMain.getBoundingClientRect().width +"px";
  }
  setSizes();
  
  window.addEventListener("resize", function() {
    setSizes();
  });
  
  els.btnMain.addEventListener("click", function(e) {
    main.classList.add("opened");
    if(main.classList.contains("closing")) {
         main.classList.remove("closing");                      
                 }
    var wheel= this.children[0];
    wheel.style.left= e.pageX - this.getBoundingClientRect().left + "px";
     wheel.style.top= e.pageY - this.getBoundingClientRect().top + "px";
    createSound(450, 50, "square", 0.05);
  });
  
  els.btnClose.addEventListener("click", function() {
    
    main.classList.add("closing");
    setSizes();
    setTimeout(()=>{
      main.classList.remove("opened");
      main.classList.remove("closing");
      setSizes();
    },600);
    
    createSound(3000,10,"triangle",1);
  });