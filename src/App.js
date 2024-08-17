import { useEffect, useState } from 'react';
import './App.css';
import background from './assets/ringOp.png'
import BirthdayCanvas from './birthdayCanvas/BirthdayCanvas';
import { Messages } from './messages/Messages';

const App = () => {
  const [isWaiting, setIsWaiting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWaiting(false);
    
      return () => clearTimeout(timer);
     }, [5000]);
    }, []);

  return (
    <div className="App">
      <div style={{height: '90%'}}>
      <BirthdayCanvas/>
      </div>
      <div style={{height: 47, backgroundColor:'#020202', justifyContent:'center', alignContent:'center'}}>
      {!isWaiting && (<h1 style={{backgroundColor: "black",
    color: "white",
    paddingBottom: 10,}}>
        Vaaaay iyisin haa. Cumhurbaşkanıda doğum gününü kutlamış
      </h1>)}
      </div>
      <Messages/>


      <div className="App" style={{ 
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      height:675,
      backgroundPosition:'center'

    }}>
      <div className='px-6'>
    <br></br>
    <br></br>
    <br></br>
      
      <p style={{fontSize:11, opacity:1}}>Ilk olarak senin doğum günü mesajın inanılmazdı. Onun üstüne cikabilirmiyim bilmiyorum. Çünkü “kabul olan en güzel duam” sözü kesinlikle dünyadaki en güzel iltifat.</p>
      <br ></br>
<p style={{fontSize:11}}>Ben Allaha çok dua ettim bir hayırlı eş için. Tam ne kadar bilmiyorum ama takriben 6 ay boyunca her gün 4-5 defa. Senle tanıştıktan sonrada “eğer Melike benim için hayirli ise, onla evlenmeyi nasip et. Eğer hayirli değilse önüme bir engel koyki ondan uzaklaşayım.” diye dua ettim. Önüme hiç bir engel koyulmadı aksine önümün açıldığını düşünüyorum. Ilk buluşmada bir birimizi beğendik ve ikinci görüşmeye bile gerek kalmadı. Ailelerle tanışma çok kolay geçti. Çok iyi anlaştılar. Ondan dolayı sen benim için hayirli olduğundan eminim. Halen daha birbirimizi helal olmadığımızı unutmamak lazım, Allah afetsin bazende sınırı açtığımın farkındayım. Ama şunu söylemek istiyorum. Baya tereddüt ettim söylesem doğru olur mu diye ama bunları duymanın seni sevindireceğini düşündüğüm için söylemeye karar verdim. </p>
<br></br>
<p style={{fontSize:11}}>Ben seni çok beğeniyorum. Kişiliğini, dış görünüşünü, gözlerini, yüzünü, gülümsemeni, ellerini, oturuşunu, kalkışını, konuşmanı, sesini, ses tonunu, gözlerini, muhabbetini, merhametini,  tutumluluğunu, şefkatını, minnettarliğini, fikirlerini, insanlarla diyalogunu, davranışlarını, gözlerini. Ve gün geçtikse daha da çok beğeniyorum. Günler geçmek bilmiyor gerçekten. 
Senin yaninda kendimi çok değerli hissediyorum. Allahın bana verdiği en büyük nimetlerdensin. Allaha ne kadar şükretsem az. </p>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<p style={{fontSize:11}}>Yazsam en az bunun 5-10 katı daha yazarım ama onları evlendikten sonra söylerim. Çünkü o sözleri filtre edemem. Bu sözlerle sınırı açtıysam Allah affetsin. Allahım bizi bu dünyada ve ahirette ayırmasın. Bizim aramızdaki muhabbeti dahada güzel yapsın. Bir birimize sevgi, saygı ve merhameti her gün daha da güçlendirsin. Birbirimize kırıcı sözler söylemekten sakındırsın. Öfke ile söylenen, karşı tarafın hayatı boyunca unutamayacağı kırıcı sözler söylemekten men etsin. Allahım bizleri birbirimizden bıktırmasın. Beraber ilim yapmayı nasip eylesin. Birbirimizin gözünde en güzel insan yapsın. Sevgimizi herdaim birbirimize gösterebilmeyi nasip etsin. Allahın hoşnut olacağı bir nesil yetiştirmeyi nasip eylesin. Islama faydalı bir nesil yetiştirmeyi nasip eylesin. Allahım bize evlenmeyi nasip eylesin. İmtihanlarımızı kolaylaştırsın. Allahın rızasını beraber kazanmayı nasip eylesin. Duacınım</p>
    </div>
    </div>

      
    </div>
  );
}

export default App;