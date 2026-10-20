const STORAGE_KEY='flyin-roadster-tutorial-v1';
export function installTutorial({onOpen,onClose,isTouch}) {
  const dialog=document.createElement('dialog');dialog.id='tutorial';
  dialog.innerHTML='<span class="eyebrow" id="tutorial-step"></span><h2 id="tutorial-title"></h2><div class="tutorial-keys" id="tutorial-keys"></div><p id="tutorial-body"></p><div class="tutorial-actions"><button class="secondary" id="tutorial-skip">SKIP TUTORIAL</button><button class="primary" id="tutorial-next">NEXT</button></div>';
  document.body.append(dialog);let index=0,seenThisSession=false;
  const steps=[
    ['WELCOME TO THE VOID.', 'DRIVE / FLY / REPEAT', 'Choose a timed challenge or Free Roam for an unlimited practice session. Start with Free Roam to learn the controls.'],
    ['SMALL INPUTS. BIG CONTROL.',isTouch?'LEFT THUMB: STEER / RIGHT: DRIVE':'W / S: DRIVE & BRAKE / A / D: STEER',isTouch?'Drag the steering pad with your left thumb. Hold Drive with your right. Hold Brake to stop, then reverse. Steering gently returns to center when released.':'Hold W to accelerate, S to brake and reverse. A and D steer. Steering becomes gentler at higher speeds, so slow down before tight turns.'],
    ['TAKE IT AIRBORNE.',isTouch?'JUMP / AIR CONTROLS / LEVEL':'SPACE: JUMP / ARROWS: ROTATE / F: LEVEL','Jump immediately with Space or the Jump button. Air controls rotate the car; boost adds lift. Release rotation before landing. Hold Level to help straighten the car. Smooth air control is on by default.'],
    ['YOU CAN ALWAYS RECOVER.',isTouch?'RECOVER / PAUSE / MENU':'X: RECOVER / ESC: PAUSE / R: RESTART','Recover if you tip over or get stuck. Free Roam has no time limit or finish. In Car Jump, set the number of parked cars in the menu, then clear the lineup without touching them. You can replay this tutorial from Controls.'],
  ];
  function paint(){const [title,keys,body]=steps[index];dialog.querySelector('#tutorial-step').textContent=`QUICK START / ${index+1} OF ${steps.length}`;dialog.querySelector('#tutorial-title').textContent=title;dialog.querySelector('#tutorial-keys').textContent=keys;dialog.querySelector('#tutorial-body').textContent=body;dialog.querySelector('#tutorial-next').textContent=index===steps.length-1?'LET ME DRIVE':'NEXT';}
  function close(){seenThisSession=true;try{localStorage.setItem(STORAGE_KEY,'seen')}catch{}dialog.close();onClose();}
  dialog.querySelector('#tutorial-next').onclick=()=>{if(index===steps.length-1)close();else{index++;paint();}};
  dialog.querySelector('#tutorial-skip').onclick=close;dialog.addEventListener('cancel',e=>{e.preventDefault();close();});
  return {open(){index=0;onOpen();paint();if(!dialog.open)dialog.showModal();},firstVisit(){let seen=seenThisSession;try{seen ||=localStorage.getItem(STORAGE_KEY)==='seen'}catch{}if(!seen)this.open();},get openNow(){return dialog.open;}};
}
