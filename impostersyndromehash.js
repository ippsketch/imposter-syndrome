function random_hah() {
  let x = "0123456789abcdef",
      hah = "0x";
  for (let i = 64;
     i > 0;
     --i) {
      hah += x[Math.floor(Math.random() * x.length)];
  }
  return hah;
}
let hash = random_hah();
hash = '0x1574878b4c2279ff2e38a2d7c4065d01b7c6f0de3595a400e06af0123da2dda3'

let t,s,S=Uint32Array.from([0,1,s=t=2,3].map(i=>parseInt(hash.substr(i*8+5,8),16)));
// S=Uint32Array.from([0,1,s=t=2,3].map(i=>parseInt(tokenData.hash.substr(i*8+5,8),16)));
R=(a=1)=>a*(t=S[3],S[3]=S[2],S[2]=S[1],S[1]=s=S[0],t^=t<<11,S[0]^=(t^t>>>8)^(s>>>19),S[0]/2**32);RT=(a=1)=>R(a)-R(a);RV=(v)=>v[R(v.length)|0];C=(a)=>R()<a;({max:mx,min:mn,abs:ab,sin:sn,cos:cn,PI}=Math);let W,H,U,V,UV,P,x,y,w=.1+R(.6)+R(.2)*R(),h,a,b,d,e,o,l,r,k,z,c=[],p=[],q=[],u=[],v=[],ar=3/4,f=.05,g=1,n=R(3)|0,m=2,ca=['#be574b','#c27d4c','#bea455','#59864b','#4f6aa1','#635f9b'],nc=R(6)|0,cj=['#dedbd3','#262626',ca[nc]],sf=R(3)|0,cv=[cj[(sf)%3],cj[(sf+1)%3],cj[(sf+2)%3]];while(g){g=0;x=.2+R(.6);y=(.2+R(.6))/ar;h=C(.25)?n==2?1.1547*w:w:n==2?w*(1+RT(.3)):.1+R(.8);b=PI/2*(R(4)|0)+(C(.5)?R(2*PI):0);a=(C(.5)&&n<2)?0:R(2*PI);d=.05+R(.1);e=R(PI);o=RT(.5)*R();c=[d*cn(e),-d*cn(e),0,d*sn(e),-d*sn(e),0];u.length=0;v.length=0;r=h/w;uu=[[-1,-.71,0,.71,1,.71,0,-.71],[-1,-1,1,1],[-1,1,1]];vv=[[0,.7,1,.7,0,-.7,-1,-.7],[-r,r,r,-r],[0,r,-r]];u=uu[n];v=vv[n];l=u.length;p.length=0;q.length=0;for(let i=0;i<l;i++){for(let j=0;j<3;j++){let xh=x+w/2*(u[i]*cn(b+a)-v[i]*sn(b+a))+(c[j])*cn(b)-(c[j+3]+o)*sn(b);let yh=y+w/2*(u[i]*sn(b+a)+v[i]*cn(b+a))+(c[j])*sn(b)+(c[j+3]+o)*cn(b);if(xh<f||xh>1-f||yh<f||yh>1/ar-f)g=1;p[i+j*l]=xh;q[i+j*l]=yh;}}if(n>0){for(let i=0;i<l;i++){let j=(i+1)%l,sl=(q[j]-q[i])/(p[j]-p[i]),ds=ab(q[i]-sl*p[i]-q[i+l]+sl*p[i+l])/(1+sl**2)**.5;if(ab(p[i]-p[j])<.001)ds=q[i]-q[i+l];if(ab(q[i]-q[j])<.001)ds=p[i]-p[i+l];if(ds<.05)g=1;}let x1=x,y1=y,x2=x1+cn(b),y2=y1+sn(b);for(let i=0;i<p.length;i++){if(ab((x2-x1)*(y1-q[i])-(x1-p[i])*(y2-y1))/((x2-x1)**2+(y2-y1)**2)**.5<.025)g=1;}}else{for(let i=3;i<6;i++){if(mn(ab(w/2+o+c[i]),ab(-w/2+o+c[i]))<.01)g=1;}}}

sz=()=>{U=windowWidth,V=windowHeight;UV=mx(U,V);UM=mn(U,V);W=U;H=V;W>=ar*H?(W=ar*H):(H=W/ar);P=W/1000;z=createGraphics(U,V);let pd=devicePixelRatio;if(pd*UV<2048)pd=ceil(2048/UV);pixelDensity(pd);z.pixelDensity(pd);z.rectMode(CENTER);z.noStroke();}

setup=()=>{sz();createCanvas(U,V);}

draw=()=>{if(frameCount>=100)noLoop();let tm=sq(sin(PI/2*constrain(frameCount/100,0,1)));z.background(cv[0]);z.push();z.translate((U-W)/2+x*W,(V-H)/2+y*W);z.rotate(b);z.fill(cv[1]);z.rect(0,UV,2*UV,2*UV);image(z,0,0);for(let i=0;i<3;i++){if(m==0||(m==1&&i<2)||(m==3&&i==2))continue;z.clear();z.push();z.fill(cv[i]);z.translate(c[i]*W*tm,c[i+3]*W*tm+o*W);z.rotate(a);z.scale(W);if(n==0)z.circle(0,0,w);if(n==1)z.rect(0,0,w,h);if(n==2)z.triangle(-w/2,0,w/2,h/2,w/2,-h/2);z.pop();if(i==1){z.erase();z.rect(0,UV+1,2*UV,2*UV);z.noErase();}image(z,0,0);}z.pop();}

keyPressed=()=>{if ((keyCode>=49 && keyCode<=52)||(keyCode>=97 && keyCode<=100)){m=keyCode-(keyCode>52?97:49);frameCount=0;loop();redraw();}}

windowResized=()=>{sz();resizeCanvas(U,V);}



