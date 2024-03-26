import Link from "next/link";
export default function Page() {
  const sample_data = [
    {
      title: "An Introduction to C & GUI Programming, 2nd Edition",
      subtitle: "",
      isbn13: "9781912047451",
      price: "$14.92",
      image: "https://itbook.store/img/books/9781912047451.png",
      url: "https://itbook.store/books/9781912047451",
    },
    {
      title: "Snowflake: The Definitive Guide",
      subtitle:
        "Architecting, Designing, and Deploying on the Snowflake Data Cloud",
      isbn13: "9781098103828",
      price: "$58.90",
      image: "https://itbook.store/img/books/9781098103828.png",
      url: "https://itbook.store/books/9781098103828",
    },
  ];
  const image_url = [
    {
      format: "jpeg",
      width: 5616,
      height: 3744,
      filename: "0000_yC-Yzbqy7PY.jpeg",
      id: 0,
      author: "Alejandro Escamilla",
      author_url: "https://unsplash.com/@alejandroescamilla",
      post_url: "https://unsplash.com/photos/yC-Yzbqy7PY",
    },
    {
      format: "jpeg",
      width: 5616,
      height: 3744,
      filename: "0001_LNRyGwIJr5c.jpeg",
      id: 1,
      author: "Alejandro Escamilla",
      author_url: "https://unsplash.com/@alejandroescamilla",
      post_url: "https://unsplash.com/photos/LNRyGwIJr5c",
    },
  ];
  const sample_article = [
    {
      Nid: 4885,
      title: "ดาวตก ดาวหาง จรวด อุกกาบาต ต่างกันอย่างไร?",
      date: "Mon, 2024-03-11 13:11",
      url: "http://www.stkc.go.th/node/4885",
      category: "ดาราศาสตร์",
      source: "ดร. มติพล ตั้งมติธรรม",
      detail:
        'จากเมื่อคืนที่ 4 มีนาคม 2567 ที่ผ่านมา มีผู้พบเห็นแสงเขียวสว่างวาบกลางท้องฟ้ายามราวสามทุ่มเศษ และพากันตั้งข้อสงสัยว่าเป็นอะไร บ้างก็ว่าเป็นดาวตก อุกกาบาต ดาวหาง หรือแม้กระทั่งจรวด ในบทความนี้เราจะมาดูกันว่าวัตถุทั้งสี่นี้เมื่อปรากฏให้เห็นนั้นแตกต่างกันอย่างไร รวมไปถึงข้อสังเกตในการแยกแต่ละวัตถุ \n\n[ แหล่งที่มา ]\n\n ดาวตก : เกิดจากเศษชิ้นส่วนของวัตถุในอวกาศ เช่น ดาวหาง หรือดาวเคราะห์น้อย ที่ผ่านเข้ามาในชั้นบรรยากาศของโลกแล้วเกิดการลุกไหม้ ปกติเรามักจะใช้คำว่า “เสียดสี” กับชั้นบรรยากาศโลก แต่แท้จริงแล้วการลุกไหม้ของวัตถุนั้น เกิดจากการบีบอัดอากาศเสียจนมีอุณหภูมิสูงจนลุกเป็นไฟ แล้วเผาไหม้วัตถุไปในที่สุด ในแต่ละวันนั้นจะมีดาวตกประมาณหนึ่งล้านดวงตกลงมาในชั้นบรรยากาศของโลกเรา แต่ครึ่งหนึ่งตกมาในเวลากลางวันที่สังเกตได้ยาก และที่เหลือส่วนมากก็ตกลงในทะเล หรือพื้นที่ห่างไกลไม่มีคนสังเกตเห็น\n\n อุกกาบาต : แท้จริงแล้วอุกกาบาตนั้นมีต้นกำเนิดเดียวกันกับดาวตก แต่เรามักจะใช้คำว่าอุกกาบาตแทนถึง "ก้อน" ที่สามารถหยิบจับต้องได้ และใช้คำว่า ดาวตก แทนปรากฏการณ์สว่างวาบบนฟ้า พูดง่ายๆ ก็คือ ถ้าเราเห็นเป็นลูกไฟบนฟ้า เราจะเรียกว่า "ดาวตก" แต่ถ้าเราหยิบมาเป็นก้อนได้ เราจะเรียกว่า "อุกกาบาต" ซึ่งดาวตกส่วนมากนั้นมีขนาดเล็กเกินกว่าจะมีอะไรที่หลงเหลือเป็นอุกกาบาตได้ นอกจากนี้ อุกกาบาตยังต่างจาก "ดาวเคราะห์น้อย" ตรงที่อุกกาบาตหมายถึงวัตถุที่ตกลงมายังพื้นโลกแล้ว แต่ดาวเคราะห์น้อยนั้นจะยังอยู่ในอวกาศ ซึ่งเราอาจจะต้องส่งยานออกไปศึกษา หรือสังเกตการณ์จากโลก\n\n ดาวหาง : ก้อนน้ำแข็งขนาดใหญ่ที่โคจรรอบดวงอาทิตย์ในระบบสุริยะของเรา มีแหล่งกำเนิดห่างไกลออกไป แต่จะมีช่วงที่โคจรเข้ามาในระบบสุริยะชั้นใจที่ซึ่งมีโลกของเราอยู่ เมื่อดาวหางโคจรเข้ามาใกล้ดวงอาทิตย์อาจจะระเหยออก ทิ้งเป็นก้อนแก๊สและเศษน้ำแข็งขนาดเล็กไปตามวงโคจรของมัน ปรากฏเป็นหางยาวออกมา เราจึงเรียกว่า "ดาวหาง”\n\n จรวด : วัตถุที่มนุษย์สร้างขึ้นเพื่อบรรทุกบางอย่างออกไปนอกโลก จรวดนั้นขับเคลื่อนโดยการทิ้งแก๊สเอาไว้เบื้องหลัง จึงอาจจะสังเกตลักษณะคล้ายกับ "หาง" ลากเป็นทางยาว แต่จรวดนั้นอาจจะอยู่สูงเลยออกไปนอกชั้นบรรยากาศ จึงไม่ได้มีการเผาไหม้แล้ว\n\n ขยะอวกาศ : สิ่งที่มนุษย์สร้างในวงโคจรรอบโลกที่บางทีอาจตกลงมาในชั้นบรรยากาศของโลก และเผาไหม้ไป แต่กลไกของขยะอวกาศนั้นแท้จริงแล้วไม่ได้แตกต่างอะไรกับดาวตก จึงมีลักษณะแทบจะเหมือนกันทุกประการ จนบางครั้งก็แยกไม่ออก\n\n[ วิธีสังเกต ] เนื่องจากวัตถุทั้งหมดนี้มีที่มาที่แตกต่างกัน จึงมีลักษณะสำคัญที่สังเกตได้และนำไปใช้วิเคราะห์เบื้องต้นได้ว่าวัตถุดังกล่าวน่าจะเป็นอะไร\n\n ดาวตก : ดาวตกนั้นเผาไหม้จากความเร็วที่ตกลงมาในชั้นบรรยากาศของโลก จึงมีการเคลื่อนที่ที่เร็วที่สุดในบรรดาวัตถุที่กล่าวมานี้ แม้ว่าในภาพนิ่งแล้ว ดาวตก ดาวหาง และจรวด จะปรากฏ "หาง" ด้วยกันทั้งหมด แต่ดาวตกโดยทั่วไปนั้นจะกินเวลาเพียงประมาณไม่กี่วินาทีจนถึงเสี้ยววินาที เว้นเสียแต่เป็นดาวตกที่ลูกใหญ่มาก ๆ หากไม่ได้มีการสังเกตการณ์ท้องฟ้า ณ ตำแหน่งนั้นเอาไว้อยู่แล้ว แทบจะเป็นไปไม่ได้เลยที่จะหันกล้องไปบันทึกภาพได้ทัน ด้วยเหตุนี้ ดาวตกจึงมักจะถูกบันทึกโดยกล้องวงจรปิด กล้อง dashcam หน้ารถ หรือกล้องที่ถ่ายภาพต่อเนื่อง หากเป็นภาพนิ่งก็มักจะเกิดขึ้นโดยบังเอิญกับคนที่ถ่ายภาพอื่นอยู่แล้ว ดังนั้นหากเห็นภาพเป็นวิดีโอที่มีจุดสว่างลุกวาบขึ้นมาก่อนที่จะหายไป ความเป็นไปได้มากที่สุดจึงเป็นดาวตก ซึ่งรวมไปถึงขยะอวกาศที่เผาไหม้ในชั้นบรรยากาศด้วย\n\n อุกกาบาต : เนื่องจากอุกกาบาตไม่ใช่ปรากฏการณ์ แต่เป็นคำที่ใช้กับตัวก้อนของดาวตกที่เหลือรอดมายังพื้นดิน เราจึงจะเห็น "อุกกาบาต" ในสภาพที่เป็นก้อนอยู่บนโลกแล้วเท่านั้น ซึ่งวิธีที่ง่ายที่สุดที่จะเห็นอุกกาบาตของจริงก็คือที่พิพิธภัณฑ์วิทยาศาสตร์\n\n ดาวหาง : ด้วยความที่ดาวหางมีรูปร่างปรากฏเป็นหาง จึงมักสร้างความเข้าใจผิดว่ามันจะต้อง "เคลื่อนที่" ราวกับพุ่งไปในท้องฟ้า แม้ว่าดาวหางนั้นจะเคลื่อนที่อยู่จริง ๆ แต่การเคลื่อนที่ของดาวหางไม่จำเป็นจะต้องเคลื่อนที่ไปตามแนวของหางเสมอไป (ในภาพประกอบนี้ แท้จริงแล้วดาวหางกำลังเคลื่อนที่ออกห่างออกไป) และแท้จริงแล้วดาวหางนั้นอยู่ห่างไกลออกไปจากโลกเป็นอย่างมาก หากดูด้วยตาเปล่า ดาวหางจึงแทบไม่มีการเคลื่อนที่ปรากฏเลยแต่จะเห็นเหมือน “ลอยค้าง” อยู่บนท้องฟ้า จึงไม่ใช่สิ่งที่เราจะเห็นว่ามันเคลื่อนที่ได้ในวิดีโอต่าง ๆ นอกจากนี้ ดาวหางนั้นได้รับแสงสว่างจากดวงอาทิตย์ เราจึงมักจะเห็นได้ในช่วงหัวค่ำหรือรุ่งเช้า โดยห่างจากขอบฟ้าไม่มากนัก และเมื่อดูด้วยตาหรือบันทึกภาพแล้ว ดาวหางจะปรากฏเป็นฝ้าจาง ๆ ที่ไม่ได้เป็นจุดหรือเส้นที่ชัดเจนด้วยซ้ำ\n\n จรวด : จรวดนั้นอาจจะมีรูปร่างลักษณะเป็นฝ้าจาง ๆ คล้ายกับดาวหาง ด้วยความที่ในละแวกประเทศไทยนั้นไม่ได้มีฐานปล่อยจรวดมากนัก จึงเป็นวัตถุที่เห็นได้ไม่ค่อยบ่อยในประเทศไทย (ที่เห็นได้มากที่สุดอาจจะเป็นจรวดที่ปล่อยจากฐานปล่อยของ ESA ที่ French Guina เช่น จรวด Ariane 5) แต่จรวดนั้นจะมีสีที่แตกต่างออกไปจากดาวหาง และอาจจะมีความสว่างมากกว่า ที่สำคัญกว่านั้น เนื่องจากจรวดนั้นอยู่ใกล้โลกกว่ามาก จึงมีความเร็วปรากฏที่สูงกว่า โดยจะมีการโคจรไปรอบ ๆ โลกในอัตราใกล้เคียงกับดาวเทียม หรือสถานีอวกาศ และจะใช้เวลาเพียงไม่กี่นาทีในการเดินทางข้ามขอบฟ้าไป\n\n[ #แถม วัตถุที่มักจะทำให้คนเข้าใจผิดได้บ่อย ๆ ! ]\n\nเครื่องบิน : อีกวัตถุหนึ่งที่มักจะสร้างความเข้าใจผิดบ่อย ๆ ก็คือเครื่องบินธรรมดานี่แหล่ะ วิธีสังเกตเครื่องบินก็คือเครื่องบินมักจะเป็นจุดที่เคลื่อนที่ได้ และหากสังเกตดี ๆ อาจจะพบว่าเครื่องบินนั้นมีการกะพริบได้ เนื่องมาจากไฟที่ปีกทั้งสองข้าง\n\nดาวเทียม : ดาวเทียมจะปรากฏคล้ายกับดาวฤกษ์ดวงหนึ่ง แต่สามารถเคลื่อนที่ได้อย่างรวดเร็ว ดาวเทียมบางดวง เช่น สถานีอวกาศนานาชาติ อาจจะมีความสว่างเป็นดาวที่สว่างที่สุดบนท้องฟ้าในขณะนั้นเลยทีเดียว โดยดาวเทียมอาจจะเคลื่อนที่ข้ามขอบฟ้าภายในเวลาไม่กี่นาที ดาวเทียมนั้นได้รับแสงสว่างจากดวงอาทิตย์ จึงจะสามารถสังเกตเห็นได้ดีเฉพาะในช่วงหัวค่ำกับรุ่งเช้า บางครั้งเมื่อดาวเทียมเคลื่อนที่เข้าไปในเงาของโลกอาจจะพบแสงจางหายไปกลางท้องฟ้าได้ นอกจากนี้ ดาวเทียมบางดวงอาจจะมีแผงโซลาร์เซลล์ที่สามารถสะท้อนแสงอาทิตย์ได้เมื่อมุมตกกระทบพอดีกับแนวสายตา ปรากฏเป็นแสงสว่างวาบขึ้นมาและจางหายไป เรียกว่า Iridium Flare ซึ่งอาจจะทำให้เข้าใจผิดว่าเป็นดาวตกได้ โดยเฉพาะเมื่อถ่ายด้วยกล้องถ่ายรูปด้วยการเปิดหน้ากล้องเป็นเวลานาน\n\nแหล่งที่มา\n\nhttps://www.facebook.com/photo/?fbid=793490106154867&set=a.304334558403760&locale=th_TH\n\n \n\nเผยแพร่ : นายปฏิภาณ นามแก้ว\n(เจ้าหน้าที่พัฒนาเว็บไซต์และประสานงานโครงการ)\nสํานักงานปลัดกระทรวงการอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม\nกองระบบและบริหารข้อมูลเชิงยุทธศาสตร์การอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม (กรข.)\nกลุ่มพัฒนาระบบสารสนเทศ (พร.)\n\nSocial Media\nFacebook : stkcsociety\nYoutube channel : STKC Society \nTiktok : stkcsociety\nTwitter : stkcsociety\ninstagram : stkcsociety',
      image_url:
        "https://www.stkc.go.th/sites/default/files/stiarticle_images/1710137822.png",
    },
    {
      Nid: 4876,
      title: "8 มีนาคม วันสตรีสากล",
      date: "Fri, 2024-03-08 10:51",
      url: "http://www.stkc.go.th/node/4876",
      category: "ประวัติศาสตร์และโบราณคดี",
      source: "pptvhd36",
      detail:
        'ย้อนประวัติ “วันสตรีสากล” รำลึกถึงการต่อสู้เพื่อเรียกร้องสิทธิ ยกระดับความเท่าเทียมของผู้หญิงที่เกิดขึ้นในวันที่ 8 มีนาคม จนกลายเป็นวันสำคัญ 8 มีนาคม ของทุกๆ ปี คือ “วันสตรีสากล” (International women’s day) จะมีบรรดาผู้หญิงในหลายประเทศจากทุกทวีปรวมตัวกันเพื่อร่วมฉลอง และร่วมรำลึกการต่อสู้เพื่อเรียกร้องสิทธิของผู้หญิง อย่างไรก็ตามในหลายประเทศให้ความสำคัญของวันสตรีสากล วันนี้ทีมนิวมีเดียพีพีทีวี จะพาทุกคนไปรู้จักกับ “วันสตรีสากล” ว่ามีที่มาที่ไปอย่างไร\n\nที่มา "วันสตรีสากล"\n\nเรื่องราวทั้งหมดเกิดขึ้นจากกรรมกรหญิงในโรงงานทอผ้า รัฐนิวยอร์ก ประเทศสหรัฐอเมริกาได้พากันลุกฮือประท้วงให้นายจ้างเพิ่มค่าจ้าง และเรียกร้องสิทธิของพวกเธอ แต่สุดท้ายกลับมีผู้หญิงถึง 119 คนต้องเสียชีวิตจากเหตุการณ์นี้ เพราะเหตุมีคนลอบวางเพลิงเผาโรงงานที่พวกเธอนั่งชุมนุมอยู่โดยเหตุการณ์ทั้งหมดนี้เกิดขึ้นในวันที่ 8 มีนาคม ค.ศ. 1857 จากนั้นในปี ค.ศ.1907  กรรมกรหญิงในโรงงานทอผ้าที่เมืองชิคาโก ประเทศสหรัฐอเมริกาทนไม่ไหวต่อการเอารัด เอาเปรียบ กดขี่ ทารุณ ของนายจ้างที่ใช้งานพวกเธอเยี่ยงทาส เนื่องจากทำงานหนักถึงวันละ 16-17 ชั่วโมง โดยไม่มีวันหยุดต่อมา คลารา เซทคิน นักการเมืองผู้หญิงสังคมนิยมชาวเยอรมัน ตัดสินใจปลุกระดมเหล่ากรรมกรผู้หญิงด้วยการนัดหยุดงานในวันที่ 8 มีนาคม ค.ศ.1907 พร้อมกับเรียกร้องให้นายจ้างลดเวลาการทำงานลงเหลือวันละ 8 ชั่วโมง อีกทั้งให้ปรับปรุงสวัสดิการทุกอย่าง และให้สตรีมีสิทธิออกเสียงเลือกตั้งด้วยอย่างไรก็ตาม แม้การเรียกร้องครั้งนี้จะไม่ประสบผลสำเร็จ แต่ก็ทำให้สตรีทั่วโลกสนับสนุนการกระทำของคลารา เซทคิน และเป็นการจุดประกายให้สตรีทั่วโลกเริ่มตระหนักถึงสิทธิของตัวเองมากขึ้น ต่อมาในวันที่ 8 มีนาคม ค.ศ. 1908  มีผู้หญิงหญิงกว่า 15,000 คน ร่วมเดินขบวนทั่วเมืองนิวยอร์ก เรียกร้องให้ยุติการใช้แรงงานเด็ก โดยมีคำขวัญการรณรงค์ว่า "ขนมปังกับดอกกุหลาบ" ซึ่งหมายถึงการได้รับอาหารที่พอเพียงพร้อมๆ กับคุณภาพชีวิตที่ดีนั่นเองจนกระทั่งในวันที่ 8 มีนาคม ค.ศ. 1910 (พ.ศ. 2453) ความพยายามของกรรมกรผู้หญิงกลุ่มนี้ก็ประสบผลสำเร็จ เมื่อมีตัวแทนผู้หญิงจาก 17 ประเทศ เข้าร่วมประชุมสมัชชาสตรีสังคมนิยมครั้งที่ 2 ณ เมืองโคเปนเฮเกน ประเทศเดนมาร์ก โดยในที่ประชุมได้ประกาศรับรองข้อเรียกร้องของบรรดากรรมกรสตรี ในระบบสาม 8 คือ ยอมให้ลดเวลาทำงานเหลือวันละ 8 ชั่วโมง ให้เวลาศึกษาหาความรู้เพื่อพัฒนาศักยภาพของตัวเองอีก 8 ชั่วโมง และอีก 8 ชั่วโมงเป็นเวลาพักผ่อน พร้อมกันนี้ยังได้ปรับค่าแรงของแรงงานหญิงให้เท่าเทียมกับแรงงานชาย และยังมีการคุ้มครองสวัสดิการสตรีและแรงงานเด็กอีกด้วยทั้งนี้ยังได้รับรองข้อเสนอของคลารา เซทคิน ด้วยการกำหนดให้วันที่ 8 มีนาคม ของทุกปีเป็น วันสตรีสากล\n\n"ดอกมิโมซ่าสีเหลือง" สัญลักษณ์แห่งวันสตรีสากล\n\nสัญลักษณ์ของวันสตรีสากล คือ "ดอกมิโมซ่าสีเหลือง" เป็นดอกไม้ที่เป็นตัวแทนของความอ่อนโยนของผู้หญิง แต่ก็แข็งแกร่งในคราวเดียวกัน เนื่องจากเป็นดอกไม้ที่เติบโตในช่วงฤดูหนาวท่ามกลางความหนาวเย็น แต่สามารถอยู่รอดจนผ่านฤดูหนาว และผลิดอกได้ในช่วงเดือนมีนาคม ซึ่งตรงกับเดือนของวันสตรีสากลพอดีนั่นเอง นอกจากดอกมิโมซ่าสีเหลือง หลายประเทศในยุโรปก็ยังนิยมใช้ดอกทิวลิป ดอกกุหลาบ หรือดอกไม้ชนิดอื่นๆ มาเป็นสัญลักษณ์ความสำคัญ และกิจกรรมในวันสตรีสากล ในวันสตรีสากลของทุกปี ทั่วโลกจะมีการจัดกิจกรรมส่งเสริมสิทธิสตรี ในสหรัฐอเมริกาจะมีการบริจาคเงินให้แก่องค์กร หรือหน่วยงานการกุศลที่สนับสนุน และให้ความช่วยเหลือผู้หญิงในประเด็นต่างๆ ในขณะที่หลายประเทศทั่วยุโรป ผู้ชายจะนำดอกไม้ไปมอบให้ผู้หญิง ไม่ว่าจะเป็นแม่ เพื่อนผู้หญิง เพื่อนร่วมงาน หรือคนรัก เพื่อเป็นการขอบคุณผู้หญิงที่ต่อสู้เคียงข้างกัน และมีบทบาทสำคัญในการขับเคลื่อนสังคม\n\n“วันสตรีสากล” กับประเทศไทย\n\nสำหรับประเทศไทย ได้เริ่มให้ความการสนับสนุน “วันสตรีสากล” เมื่อวันที่ 8 มีนาคม 2532 โดยได้มีการก่อตั้งคณะกรรมการส่งเสริมและประสานงานสตรีแห่งชาติ (กสส.) ขึ้นอย่างเป็นทางการดังนั้นวันที่ 8 มีนาคมของทุกปีผู้ใช้แรงงานและสตรีในสาขาอาชีพ ต่างๆ จะมีการจัดกิจกรรมเพื่อฉลองเนื่องในโอกาส วันสตรีสากล และระลึกถึงความเป็นมาแห่งการต่อสู้เพื่อให้ได้ซึ่งความเสมอภาค ยุติธรรม สันติภาพ และการพัฒนาโดยในปีนี้ (2567) นายวราวุธ ศิลปอาชา รัฐมนตรีว่าการกระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์ (รมว.พม.) ได้กำหนดแนวคิดในการจัดกิจกรรมปีนี้ว่า "เสริมพลังสตรีและเด็กหญิง ขจัดความยากจนสู่ความเท่าเทียมระหว่างเพศ บนพื้นฐานครอบครัวที่อบอุ่น" วันสตรีสากล ไม่ใช่เพียงวันธรรมดาวันหนึ่งบนปฏิทิน แต่คือวันที่เป็นจุดเริ่มต้นประวัติศาสตร์ของการต่อสู้ของผู้หญิงทุกยุคทุกสมัย เพื่อให้ได้มาซึ่งสิทธิและโอกาสที่พวกเธอพึงมีเท่าเทียมกับผู้ชาย โดยเฉพาะในปัจจุบันที่มีการส่งเสริมสิทธิสตรีอย่างกว้างขวาง นับเป็นก้าวกระโดดสำคัญของสังคมยุคใหม่\n\nแหล่งที่มา\n\nhttps://www.pptvhd36.com/news/ไลฟ์สไตล์/48432\n\n \n\nเผยแพร่ : นายปฏิภาณ นามแก้ว\n(เจ้าหน้าที่พัฒนาเว็บไซต์และประสานงานโครงการ)\nสํานักงานปลัดกระทรวงการอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม\nกองระบบและบริหารข้อมูลเชิงยุทธศาสตร์การอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม (กรข.)\nกลุ่มพัฒนาระบบสารสนเทศ (พร.)\n\nSocial Media\nFacebook : stkcsociety\nYoutube channel : STKC Society \nTiktok : stkcsociety\nTwitter : stkcsociety\ninstagram : stkcsociety',
      image_url:
        "https://www.stkc.go.th/sites/default/files/stiarticle_images/1709869866.png",
    },
  ];

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/logo.png"
              width={50}
              height={100}
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Next-Sample-api
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li>
                <a
                  href="#example"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Examples
                </a>
              </li>
              <li>
                <Link
                  href="https://github.com/kjinapas" target="_blank"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  About me
                </Link>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
      <div className="container p-3">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-3 mt-5" id="example">
            Sample-Api
          </h1>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-5 m-2">
          <div className="font-bold text-red-500 text-xl mb-3">
            api/sample/book/[number]
          </div>
          <p className="text-xs text-gray-300 m-2">
            Return Data book in json format
          </p>

          <div className="font-bold text-red-500 text-xl mb-3">
            api/sample/book/
          </div>
          <p className="text-xs text-gray-300 mb-3">
            Return All Data book in json format
          </p>
          <div className="bg-blue-500 text-white text-md font-bold rounded-md p-3 mb-5">
            Sample Request URL
          </div>

          <div className="inner container mb-5">
            <div className="text-white text-sm">
              <Link href=" https://next-sample-api-roan.vercel.app/api/sample/book/2" target="_blank">
              https://next-sample-api-roan.vercel.app/api/sample/book/2
              </Link>
            </div>

            <div className=" text-yellow-400 text-sm pt-2">
              <Link href=" https://next-sample-api-roan.vercel.app/api/sample/book/" target="_blank">
              https://next-sample-api-roan.vercel.app/api/sample/book/
              </Link>
            </div>
          </div>

          <div className="max-w-md xl:max-w-2xl  bg-gray-900 rounded-md overflow-hidden">
            <pre className="text-xs text-gray-300 p-4 whitespace-pre-wrap">
              {JSON.stringify(sample_data, null, 2)}
            </pre>
          </div>
        </div>

        {/* content image */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-5 m-2">
          <div className="font-bold text-red-500 text-xl mb-3">
            api/sample/image/[number]
          </div>
          <p className="text-xs text-gray-300 m-2">
            Return Data image in json format
          </p>
          <div className="font-bold text-red-500 text-xl mb-3">
            api/sample/image/
          </div>
          <p className="text-xs text-gray-300 mb-3">
            Return All Data image in json format
          </p>
          <div className="bg-blue-500 text-white text-md font-bold rounded-md p-3 mb-5">
            Sample Request URL
          </div>

          <div className="inner container mb-5">
            <div className="">
              <Link
                className="text-white text-sm hover:text-gray-200"
                href="https://next-sample-api-roan.vercel.app/api/sample/image/2"
                target="_blank"
              >
                https://next-sample-api-roan.vercel.app/api/sample/image/2
              </Link>
            </div>
            <div className="">
              <Link
                className="text-yellow-400 text-sm hover:text-gray-200"
                href="https://next-sample-api-roan.vercel.app/api/sample/image/"
                target="_blank"
              >
                https://next-sample-api-roan.vercel.app/api/sample/image/
              </Link>
            </div>
          </div>
          <div className="max-w-md  bg-gray-900 rounded-md overflow-hidden ">
            <pre className="text-xs text-gray-300 p-4 whitespace-pre-wrap">
              {JSON.stringify(image_url, null, 2)}
            </pre>
          </div>
        </div>
        {/*  end = content image */}


        {/* content article thai */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-5 m-2">
          <div className="font-bold text-red-500 text-xl mb-3">
            api/sample/thai/article/[number]
          </div>
          <p className="text-xs text-gray-300 m-2">
            Return Data article in json format
          </p>
          <div className="font-bold text-red-500 text-xl mb-3">
            api/sample/thai/article/
          </div>
          <p className="text-xs text-gray-300 mb-3">
            Return Sample 10 Data article in json format
          </p>
          <div className="bg-blue-500 text-white text-md font-bold rounded-md p-3 mb-5">
            Sample Request URL
          </div>

          <div className="inner container mb-5">
            <div className="">
              <Link
                className="text-white text-sm hover:text-gray-200"
                href="https://next-sample-api-roan.vercel.app/api/sample/thai/article/2"
                target="_blank"
              >
                https://next-sample-api-roan.vercel.app/api/sample/thai/article/2
              </Link>
            </div>
            <div className="">
              <Link
                className="text-yellow-400 text-sm hover:text-gray-200"
                href="https://next-sample-api-roan.vercel.app/api/sample/thai/article/"
                target="_blank"
              >
                https://next-sample-api-roan.vercel.app/api/sample/thai/article/
              </Link>
            </div>
          </div>
          <div className="max-w-md  bg-gray-900 rounded-md overflow-hidden ">
            <pre className="text-xs text-gray-300 p-4 whitespace-pre-wrap">
              {JSON.stringify(sample_article, null, 2)}
            </pre>
          </div>
        </div>
        {/* end  content article thai */}


          {/*  content news thai */}

        <div className="bg-gray-800 rounded-lg shadow-lg p-5 m-2">
          <div className="font-bold text-red-500 text-xl mb-3">
            api/sample/thai/news/[number]
          </div>
          <p className="text-xs text-gray-300 m-2">
            Return Data  News thai in json format
          </p>
          <div className="font-bold text-red-500 text-xl mb-3">
            api/sample/thai/news/
          </div>
          <p className="text-xs text-gray-300 mb-3">
            Return Sample 10 Data News thai in json format
          </p>
          <div className="bg-blue-500 text-white text-md font-bold rounded-md p-3 mb-5">
            Sample Request URL
          </div>

          <div className="inner container mb-5">
            <div className="">
              <Link
                className="text-white text-sm hover:text-gray-200"
                href="https://next-sample-api-roan.vercel.app/api/sample/thai/news/2"
                target="_blank"
              >
                https://next-sample-api-roan.vercel.app/api/sample/thai/news/2
              </Link>
            </div>
            <div className="">
              <Link
                className="text-yellow-400 text-sm hover:text-gray-200"
                href="https://next-sample-api-roan.vercel.app/api/sample/thai/news/"
                target="_blank"
              >
                https://next-sample-api-roan.vercel.app/api/sample/thai/news/
              </Link>
            </div>
          </div>
          <div className="max-w-md  bg-gray-900 rounded-md overflow-hidden ">
            <pre className="text-xs text-gray-300 p-4 whitespace-pre-wrap">
              {JSON.stringify(sample_article, null, 2)}
            </pre>
          </div>
        </div>

        <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-blue-400">
  

</div>



<footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="#" class="hover:underline">
              Create by use Nextjs{" "}
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <a href="#example" className="hover:underline me-4 md:me-6">
                Examples
              </a>
            </li>
            <li>
              <Link  href="https://github.com/kjinapas" target="_blank" className="hover:underline me-4 md:me-6">
                About me
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      </div>
          {/*  content news thai */}

      
    </>
  );
}
