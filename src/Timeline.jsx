import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import earth from "./assets/earth.jpg";

export const Timeline = () => {
  const WorkIcon = () => <></>;
  return (
    <div style={{ backgroundColor: "#050505" }}>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="634"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Hz. Ebu Bekir'in vefatı
          </h3>
          <p>
            Bizans’a karşı Suriye’de yapılan Ecnâdeyn Savaşı (28 Cemâziyelevvel
            13 / 30 Temmuz 634) sonunda Filistin’in kapıları müslümanlara
            açılmış oldu. Hz. Ebû Bekir, başkumandanlığını Hâlid b. Velîd’in
            yaptığı Ecnâdeyn Savaşı’nın neticesini öğrendikten sonra 22
            Cemâziyelâhir 13 (23 Ağustos 634) tarihinde altmış üç yaşında vefat
            etti.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1328"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Cassel Muharebesi</h3>
          <p>
            23 Ağustos 1328'de Cassel Muharebesi, günümüz Fransa'sında
            Dunkirk'in 30 km güneyindeki Cassel şehrinin yakınlarında
            gerçekleşti. VI. Philip (1328'den 1350'ye kadar Fransa Kralı),
            Lampernisse'li zengin bir çiftçi olan Nicolaas Zannekin ile savaştı.
            Zannekin, bir grup Flaman isyancının lideriydi. Savaş, vergilendirme
            ve Fransızların Flamanlar üzerindeki cezalandırıcı fermanları
            yüzünden patlak verdi. Savaş, Fransızlar tarafından kesin bir
            şekilde kazanıldı. Zannekin ve yaklaşık 3.200 Flaman isyancı savaşta
            öldürüldü.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          date="1514"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Çaldıran Muharebesi
          </h3>
          <p>
            Çaldıran Muharebesi, Osmanlı padişahı I. Selim ile Safevi hükümdarı
            Şah İsmail arasında 23 Ağustos 1514'te, günümüzde İran sınırları
            içinde yer alan Maku şehri yakınlarındaki Çaldıran Ovası'nda yapılan
            meydan muharebesidir. Muharebe, Osmanlı imparatorluğu'nin kesin
            zaferiyle sonuçlanmıştır.{" "}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1966"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Ay'dan Dünya'nın ilk fotoğrafı
          </h3>
          <p>
            23 Ağustos 1966'da Lunar Orbiter 1, Ay'dan Dünya'nın ilk fotoğrafını
            çekti. 1960'ların teknolojileriyle çekilen Dünya'nın yarısının,
            Ay'ın 236.000 mil (380.000 km) mesafesinden görüldüğünü gösteriyor.
            Ve görüntüde, Dünya'yı İstanbul'dan Cape Town'a kadar, doğudaki
            bölgeler geceyle örtülü olarak görebilirsiniz.
          </p>
          <img src={earth} alt="earth" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2000"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Melike Karaman doğdu
          </h3>
          <p>Eşi benzeri olmayan Melike Karaman doğdu</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
