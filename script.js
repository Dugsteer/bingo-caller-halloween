

//GENERAL SCRIPT
const bingoArray = [
  "bat.svg", "bone.svg", "broomstick.svg", "candles.svg", "candy.svg", "cat.svg", "cauldron.svg", "clown.svg", "coffin.svg", "death.svg", "fancy-dress.svg", "fangs.svg", "frankenstein.svg", "ghost.svg", "grave.svg", "halloween.svg", "hat.svg", "monster.svg", "moon.svg", "mummy.svg", "pirate.svg", "pumpkin.svg", "skeleton.svg", "skull.svg", "spell.svg", "spider.svg", "vampire.svg", "wand.svg", "web.svg", "werewolf.svg", "witch.svg", "wizard.svg", "zombie.svg"  ];

  const wrapper = document.getElementById("wrapper");
  const newArray = [];
  
  function shuffle(bingoArray) {
    var j, x, i;
    for (i = bingoArray.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = bingoArray[i];
      bingoArray[i] = bingoArray[j];
      bingoArray[j] = x;
    }
    return bingoArray;
  }
  
  const button0 = document.getElementById("button0");
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");
  const clicker2 = document.getElementById("clicker2");
  
  function bingoCall() {
    button1.style.display = "none";
    button2.style.display = "none";
    wrapper.classList.add("unCenter");
    wrapper.innerHTML = "";
    const oldArray = bingoArray;
    var blue = oldArray.shift();
    clicker2.innerHTML = oldArray.length > 0 ? `${oldArray.length} to go` : `END`;
    newArray.push(blue);
    fillHTML();
  }
  
  function bingoCall1() {
    button0.style.display = "none";
    button2.style.display = "none";
    wrapper.classList.add("unCenter");
    wrapper.innerHTML = "";
    const oldArray = bingoArray;
    var blue = oldArray.shift();
    clicker2.innerHTML = oldArray.length > 0 ? `${oldArray.length} to go` : `END`;
    newArray.push(blue);
    fillHTML1();
    }
  
  
  function bingoCall2() {
    button1.style.display = "none";
    button0.style.display = "none";
    wrapper.classList.add("unCenter");
    wrapper.innerHTML = "";
    const oldArray = bingoArray;
    var blue = oldArray.shift();
    clicker2.innerHTML = oldArray.length > 0 ? `${oldArray.length} to go` : `END`;
    newArray.push(blue);
    fillHTML2();
  }
  
  function fillHTML() {
    // for (var i=0; i<newArray.length;i++){
    //   wrapper.innerHTML =
    newArray.forEach(function (item) {
      var div = document.createElement("div");
      div.innerHTML = `
    <div class="minicard text-center">
    <img src="./img/${item}">
    <h3 class="minicard__h3">${item.slice(0, -4)}</h3>
  </div>
  `;
      wrapper.appendChild(div);
    });
  }
  
  function fillHTML1() {
    newArray.forEach(function (item) {
      let div = document.createElement("div");
      (item.length < 2) ? console.log('no') : 
      div.innerHTML = `
    <div class="minicard text-center d-flex justify-content-center">
    <img src="./img/${item}">
  </div>
  `;
      wrapper.appendChild(div);
    });
  }
  
  
  function fillHTML2() {
    // for (var i=0; i<newArray.length;i++){
    //   wrapper.innerHTML =
    newArray.forEach(function (item) {
      var div = document.createElement("div");
      div.innerHTML = `
    <div class="minicard text-center d-flex justify-content-center">
    <h3 class="minicard__h3">${item.slice(0, -4)}</h3>
  </div>
  `;
      wrapper.appendChild(div);
    });
  }
  
  
  shuffle(bingoArray);