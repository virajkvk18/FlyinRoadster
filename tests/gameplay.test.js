import {test} from 'node:test';
import assert from 'node:assert/strict';
import {damp,steeringRate,sprintCrossing,landingGrade,finishReached,MPH60} from '../src/gameplay.js';

test('input smoothing is independent of render frequency',()=>{
  let a=0,b=0;for(let i=0;i<60;i++)a=damp(a,1,7,1/60);for(let i=0;i<120;i++)b=damp(b,1,7,1/120);
  assert.ok(Math.abs(a-b)<1e-10);assert.ok(a<1&&a>.99);
});
test('steering gets gentler at speed, reverses in reverse and stops at rest',()=>{
  assert.ok(steeringRate(50,1)<steeringRate(10,1));assert.equal(steeringRate(0,1),0);
  assert.equal(steeringRate(-10,1),-steeringRate(10,1));assert.equal(steeringRate(20,0),0);
});
test('0-60 timer interpolates the crossing and never records reverse motion',()=>{
  assert.equal(sprintCrossing(MPH60-1,MPH60+1,2,.02),1.99);
  assert.equal(sprintCrossing(-30,-32,2,.02),null);
  assert.equal(sprintCrossing(MPH60+1,MPH60+2,2,.02),null);
});
test('upright gentle landings succeed; inverted and high-impact landings do not',()=>{
  assert.equal(landingGrade(.99,5,1),'perfect');assert.equal(landingGrade(.85,9,2),'clean');
  assert.equal(landingGrade(-1,0,0),'hard');assert.equal(landingGrade(1,20,0),'hard');
});
test('ramp completion requires a landed receiver, ground contact and finish lane',()=>{
  const p={x:0,y:1,z:-435};assert.equal(finishReached('ramp',p,true,true,20),true);
  assert.equal(finishReached('ramp',p,false,true,20),false);
  assert.equal(finishReached('ramp',p,true,false,20),false);
  assert.equal(finishReached('ramp',{...p,x:20},true,true,20),false);
  assert.equal(finishReached('sprint',p,true,true,20),false);
});
