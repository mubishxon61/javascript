// ====================================
// ============ 4-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 10 ga teng bo'lsa, "To'g'ri son!" deb alert chiqaring, aks holda "Boshqa son kiritdingiz!" deb alert chiqaring.

// Tushuntirish
// 10 â€“ sehrli son! ðŸŽ‰ Foydalanuvchi 10 kiritadimi yoki yoâ€™qmi, tekshiramiz. == bilan tenglikni sinab koâ€™ring.

// Input: 10
// Output: alert("To'g'ri son!")
// Input: 7
// Output: alert("Boshqa son kiritdingiz!")

// Qani bir kod yozingchi ðŸ‘€





// let number = prompt("son kiriting")

// if ( number == 10){
//     alert("To'g'ri son!")
// }else{
//     alert("Boshqa son kiritdingiz!")
// }


// ====================================
// ============ 5-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali "ha" yoki "yo'q" deb kiritadi. Agar "ha" kiritilgan bo'lsa, "Ruxsat bor!" deb alert chiqaring, aks holda "Ruxsat yo'q!" deb alert chiqaring.

// Tushuntirish
// Xuddi ota-onangdan ruxsat soâ€™ragandek! ðŸ˜„ "ha" desa, yashaymiz, "yoâ€™q" desa, xafa boâ€™lamiz. Stringlarni === bilan tekshir.

// Input: "ha"
// Output: alert("Ruxsat bor!")
// Input: "yo'q"
// Output: alert("Ruxsat yo'q!")

// Qani bir kod yozingchi ðŸ‘€

// let ruxsat = prompt("ha yoki yoq deb kiriting")



// if(ruxsat === "ha"){
//     alert("Ruxsat bor!")
// }else if(ruxsat==="yoq"){
//     alert("Ruxsat yo'q!")
// }else{
//     alert("boshqa soz kiritdingiz!")
// }



// ====================================
// ============ 6-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 0 dan katta va 100 dan kichik bo'lsa, "Yaxshi diapazon!" deb alert chiqaring, aks holda "Diapazon tashqarisida!" deb alert chiqaring.

// Tushuntirish
// Bu xuddi termometr oâ€™qishdek! ðŸŒ¡ï¸ 0 va 100 oraligâ€™ida boâ€™lsa, hamma narsa zoâ€™r, aks holda muammo! && operatorini sinab koâ€™ramiz.

// Input: 50
// Output: alert("Yaxshi diapazon!")
// Input: 150
// Output: alert("Diapazon tashqarisida!")

// Qani bir kod yozingchi ðŸ‘€



// let number = prompt("Iltimos, biror son kiriting:")

// if(number >= 0 && number<=100){
//     alert("Yaxshi diapazon!")
// }else{
//     alert("Diapazon tashqarisida!")
// }


// ====================================
// ============ 7-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir so'z kiritadi. Agar so'z uzunligi 5 dan katta bo'lsa, "Uzoq so'z!" deb alert chiqaring, aks holda "Qisqa so'z!" deb alert chiqaring.

// Tushuntirish
// Soâ€™zlarning uzunligini oâ€™lchaymiz! ðŸ“ Agar soâ€™z uzun boâ€™lsa, faxrlanamiz, qisqa boâ€™lsa, qisqartirib yubormaymiz! length va > ishlatamiz.

// Input: "salom"
// Output: alert("Qisqa so'z!")
// Input: "javascript"
// Output: alert("Uzoq so'z!")

// Qani bir kod yozingchi ðŸ‘€


// let soz = prompt("biror so'z kiriting:")
// if (soz.length > 5) { 
//   alert("Uzoq so'z!");
// } else {
//   alert("Qisqa so'z!");
// }




// ====================================
// ============ 8-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son juft bo'lsa, "Juft son!" deb alert chiqaring, aks holda "Toq son!" deb alert chiqaring.

// Tushuntirish
// Juft yoki toq â€“ bu sonlar olamidagi klassik jang! âš”ï¸ Sonni 2 ga boâ€™lib, qoldiqni tekshirish uchun % va == ishlatamiz.

// Input: 4
// Output: alert("Juft son!")
// Input: 7
// Output: alert("Toq son!")

// Qani bir kod yozingchi ðŸ‘€

// let son = prompt("biror son kiriting:")

// if(son % 2 == 0 ){
//     alert("Juft son!");
// }else{
//     alert("Toq son!");
// }


// ====================================
// ============ 9-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 0 bo'lsa, "Nol kiritdingiz!" deb alert chiqaring, aks holda "Nol emas!" deb alert chiqaring.

// Tushuntirish
// Nol â€“ bu xuddi boâ€™sh choâ€™ntakdek! ðŸ˜… Uni alohida tekshirish kerak. === bilan aniq tenglikni sinab koâ€™ramiz.

// Input: 0
// Output: alert("Nol kiritdingiz!")
// Input: 5
// Output: alert("Nol emas!")

// Qani bir kod yozingchi ðŸ‘€


// let number = Number(prompt("son kiriting:"))
// if(number === 0){
//     alert("Nol kiritdingiz!")
// }else{
//     alert("Nol emas!")
// }


// ====================================
// ============ 10-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir so'z kiritadi. Agar so'z "salom" bo'lsa, "Salom, dunyo!" deb alert chiqaring, aks holda "Boshqa so'z kiritdingiz!" deb alert chiqaring.

// Tushuntirish
// "Salom" desa, dunyoni quchoqlaymiz! ðŸŒ Aks holda, biroz xafa boâ€™lamiz. === bilan soâ€™zni aniq tekshir.

// Input: "salom"
// Output: alert("Salom, dunyo!")
// Input: "hello"
// Output: alert("Boshqa so'z kiritdingiz!")

// Qani bir kod yozingchi ðŸ‘€


// let soz = prompt("biror so'z kiriting:")
// if(soz === "salom"){
//     alert("Salom, dunyo!")
// }else{
//     alert("Boshqa so'z kiritdingiz!")
// }



// ============ 11-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali ikkita son kiritadi. Agar birinchi son ikkinchisidan katta bo'lsa, "Birinchi son katta!" deb alert chiqaring, aks holda "Ikkichi son katta yoki teng!" deb alert chiqaring.

// Tushuntirish
// Sonlar oâ€™rtasida musobaqa! ðŸ† Birinchi son ikkinchisini yengadimi, yoki yoâ€™qmi? > bilan solishtiramiz.

// Input: 10, 5
// Output: alert("Birinchi son katta!")
// Input: 3, 7
// Output: alert("Ikkichi son katta yoki teng!")

// Qani bir kod yozingchi ðŸ‘€

// let son1 = Number(prompt("Birinchi son:"));
// let son2 = Number(prompt("Ikkinchi son:"));

// if(son1 > son2){
//     alert("Birinchi son katta!")
// }else{
//    alert("Ikkichi son katta!") 
// }



// ====================================
// ============ 12-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali yoshini va ismini kiritadi. Agar yosh 18 dan katta va ism "Ali" bo'lsa, "Xush kelibsiz, Ali!" deb alert chiqaring, aks holda "Kirish taqiqlanadi!" deb alert chiqaring.

// Tushuntirish
// Bu xuddi VIP klubga kirishdek! ðŸ˜Ž Faqat Ali va 18+ yoshdagilar uchun. && operatorini sinab koâ€™ramiz.

// Input: 20, "Ali"
// Output: alert("Xush kelibsiz, Ali!")
// Input: 15, "Vali"
// Output: alert("Kirish taqiqlanadi!")

// Qani bir kod yozingchi ðŸ‘€



// let yosh = Number(prompt("Yoshingizni kiriting:"));
// let ism = prompt("ismingizni kiriting:");
// if( yosh > 18 && ism == "Ali"){
//     alert("Xush kelibsiz, Ali!")
// }else{
//     alert("Kirish taqiqlanadi!")
// }


// ====================================
// ============ 13-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 10 dan kichik yoki 100 dan katta bo'lsa, "Chegaradan tashqarida!" deb alert chiqaring, aks holda "Chegara ichida!" deb alert chiqaring.

// Tushuntirish
// Sonlar chegarada yashaydi! ðŸš§ 10 dan kichik yoki 100 dan katta boâ€™lsa, ularni qaytarib yuboramiz. || operatorini sinab koâ€™ramiz.

// Input: 5
// Output: alert("Chegaradan tashqarida!")
// Input: 50
// Output: alert("Chegara ichida!")

// Qani bir kod yozingchi ðŸ‘€


// let son = Number(prompt("son kiriting:"))
// if(son<10 || son>100){
//     alert("Chegaradan tashqarida!")
// }else{
//     alert("Chegara ichida!")
// }



// ====================================
// ============ 14-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir so'z kiritadi. Agar so'z bo'sh bo'lmasa ("" emas), "So'z kiritdingiz!" deb alert chiqaring, aks holda "Hech narsa kiritmadingiz!" deb alert chiqaring.

// Tushuntirish
// Boâ€™sh joyni yoqtirmaymiz! ðŸ˜¤ Foydalanuvchi biror narsa yozsa, quvonamiz, aks holda biroz ranjimaymiz. ! operatorini sinab koâ€™ramiz.

// Input: "test"
// Output: alert("So'z kiritdingiz!")
// Input: ""
// Output: alert("Hech narsa kiritmadingiz!")

// Qani bir kod yozingchi ðŸ‘€

// let soz = prompt("So'z kiriting:");
// if(soz !== ""){
//     alert("So'z kiritdingiz!")
// }else{
//     alert("Hech narsa kiritmadingiz!")
// }


// ====================================
// ============ 15-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali ikkita son kiritadi. Agar sonlar teng bo'lsa, "Sonlar teng!" deb alert chiqaring, aks holda "Sonlar teng emas!" deb alert chiqaring.

// Tushuntirish
// Sonlar oâ€™rtasida tenglik bormi? ðŸ¤ == bilan tekshirib, doâ€™stlikni mustahkamlaymiz!

// Input: 5, 5
// Output: alert("Sonlar teng!")
// Input: 5, 6
// Output: alert("Sonlar teng emas!")

// Qani bir kod yozingchi ðŸ‘€

// let son1 =Number(prompt("birinchi son:"))

// let son2 =Number(prompt("ikkinchi son:"))
// if(son1==son2){
//     alert("Sonlar teng!")
// }else{
//     alert("Sonlar teng emas!")
// }



// ====================================
// ============ 16-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 50 dan katta yoki teng bo'lsa va juft bo'lsa, "Katta juft son!" deb alert chiqaring, aks holda "Boshqa son!" deb alert chiqaring.

// Tushuntirish
// Katta va juft sonlar â€“ bu olamning yulduzlari! ðŸŒŸ && va % operatorlarini birlashtirib, sinab koâ€™ramiz.

// Input: 60
// Output: alert("Katta juft son!")
// Input: 45
// Output: alert("Boshqa son!")

// Qani bir kod yozingchi ðŸ‘€

// let son = prompt("son kiriting:")
// if(son >=50 && son % 2 === 0 ){
//     alert("Katta juft son!")
// }else{
//     alert("Boshqa son!")
// }



// ====================================
// ============ 17-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir so'z kiritadi. Agar so'z "javascript" yoki "coding" bo'lsa, "Siz dasturchisiz!" deb alert chiqaring, aks holda "Boshqa so'z!" deb alert chiqaring.

// Tushuntirish
// Dasturchilar uchun maxsus salom! ðŸ‘¨â€ðŸ’» || operatorini ishlatib, sevimli soâ€™zlarimizni tekshiramiz.

// Input: "javascript"
// Output: alert("Siz dasturchisiz!")
// Input: "hello"
// Output: alert("Boshqa so'z!")

// Qani bir kod yozingchi ðŸ‘€


// let soz =prompt("soz kiriting:")
// if(soz == "javascript" || soz == "coding"){
//     alert("Siz dasturchisiz!")
// }else{
//     alert("Boshqa so'z!")
// }


// ====================================
// ============ 18-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 0 bo'lmasa, "Son nol emas!" deb alert chiqaring, aks holda "Son nol!" deb alert chiqaring.

// Tushuntirish
// Nol â€“ bu xuddi boâ€™sh quti! ðŸ“¦ ! operatorini ishlatib, nol yoki nolni tekshiramiz.

// Input: 10
// Output: alert("Son nol emas!")
// Input: 0
// Output: alert("Son nol!")

// Qani bir kod yozingchi ðŸ‘€

// let son = Number(prompt("son kiriting:"))
// if(son !== 0){
//    alert("Son nol emas!");
// } else {
//    alert("Son nol!");
// }


// ====================================
// ============ 19-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali yoshini kiritadi. Agar yosh 13 dan katta va 19 dan kichik bo'lsa, "Siz o'smirsiz!" deb alert chiqaring, aks holda "O'smir emassiz!" deb alert chiqaring.

// Tushuntirish
// Oâ€™smirlik â€“ bu hayotning eng qiziq davri! ðŸ˜œ && bilan yoshni chegaralaymiz.

// Input: 15
// Output: alert("Siz o'smirsiz!")
// Input: 20
// Output: alert("O'smir emassiz!")

// Qani bir kod yozingchi ðŸ‘€



// let yosh = Number(prompt("yoshingizni kiriting:"))
// if(yosh >13 && yosh<19){
//     alert("Siz o'smirsiz!")
// }else{
//     alert("O'smir emassiz!")
// }


// ====================================
// ============ 20-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir so'z kiritadi. Agar so'z uzunligi 3 dan kichik bo'lsa yoki bo'sh bo'lsa, "So'z juda qisqa!" deb alert chiqaring, aks holda "Yaxshi so'z!" deb alert chiqaring.

// Tushuntirish
// Qisqa soâ€™zlarni yoqtirmaymiz! ðŸ˜¤ || va length bilan soâ€™zni sinab koâ€™ramiz.

// Input: "hi"
// Output: alert("So'z juda qisqa!")
// Input: "hello"
// Output: alert("Yaxshi so'z!")

// Qani bir kod yozingchi ðŸ‘€

// let soz = prompt("so'z kiriting:")
// if (soz.length < 3 || soz == ""){
//     alert("So'z juda qisqa!")
// }else{
//     alert("Yaxshi so'z!")
// }


// ====================================
// ============ 21-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali ikkita son kiritadi. Agar birinchi son ikkinchisidan katta bo'lsa va juft bo'lsa, "Birinchi son katta va juft!" deb alert chiqaring, aks holda "Shart bajarilmadi!" deb alert chiqaring.

// Tushuntirish
// Bu xuddi musobaqada gâ€™olibni aniqlashdek! ðŸ… && va % bilan birinchi sonni sinab koâ€™ramiz.

// Input: 10, 5
// Output: alert("Birinchi son katta va juft!")
// Input: 7, 3
// Output: alert("Shart bajarilmadi!")

// Qani bir kod yozingchi ðŸ‘€

// let son1 = Number(prompt("birinchi sonni kiriting:"))
// let son2 = Number(prompt("ikkinchi sonni kiriting:"))
// if(son1 > son2 && son1 % 2 === 0){
//   alert("Birinchi son katta va juft!");
// } else {
//   alert("Shart bajarilmadi!");
// }



// ====================================
// ============ 22-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali yoshini va "erkak" yoki "ayol" deb jinsini kiritadi. Agar yosh 18 dan katta bo'lsa va jins "erkak" bo'lsa, "Siz armiyaga borasiz!" deb alert chiqaring, aks holda "Armiyaga bormaysiz!" deb alert chiqaring.

// Tushuntirish
// Armiyaga chaqiruv vaqti! ðŸ˜… Faqat 18+ erkaklar uchun. && bilan shartlarni birlashtiramiz.

// Input: 20, "erkak"
// Output: alert("Siz armiyaga borasiz!")
// Input: 16, "ayol"
// Output: alert("Armiyaga bormaysiz!")

// Qani bir kod yozingchi ðŸ‘€

// let yosh = Number(prompt("Yoshingizni kiriting:"));
// let jins = prompt("Jinsingizni kiriting (erkak/ayol):");
// if (yosh > 18 && jins === "erkak") {
//   alert("Siz armiyaga borasiz!");
// } else {
//   alert("Armiyaga bormaysiz!");
// }

// ====================================
// ============ 23-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 10 dan kichik yoki 100 dan katta bo'lsa va toq bo'lsa, "Chegaradagi toq son!" deb alert chiqaring, aks holda "Boshqa son!" deb alert chiqaring.

// Tushuntirish
// Toq sonlar chegarada sayr qilmoqda! ðŸš¶ || va % bilan ularni ushlaymiz.

// Input: 5
// Output: alert("Chegaradagi toq son!")
// Input: 50
// Output: alert("Boshqa son!")

// Qani bir kod yozingchi ðŸ‘€


// let son = Number(prompt("son kiriting:"));
// if ((son < 10 || son > 100) && son % 2 !== 0) {
//   alert("Chegaradagi toq son!");
// } else {
//   alert("Boshqa son!");
// }


// ====================================
// ============ 24-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir so'z kiritadi. Agar so'z "admin" bo'lmasa, "Siz admin emassiz!" deb alert chiqaring, aks holda "Xush kelibsiz, admin!" deb alert chiqaring.

// Tushuntirish
// Adminlik â€“ bu mas'uliyat! ðŸ˜Ž ! operatorini ishlatib, admin yoki yoâ€™qligini tekshiramiz.

// Input: "admin"
// Output: alert("Xush kelibsiz, admin!")
// Input: "user"
// Output: alert("Siz admin emassiz!")

// Qani bir kod yozingchi ðŸ‘€


// let ism = prompt("ismingizni kiriting:");
// if (ism !== "admin") {
//   alert("Siz admin emassiz!");
// } else {
//   alert("Xush kelibsiz, admin!");
// }




// ====================================
// ============ 25-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali ikkita son kiritadi. Agar birinchi son ikkinchisidan katta bo'lsa yoki teng bo'lsa va birinchi son musbat bo'lsa, "Birinchi son mos keladi!" deb alert chiqaring, aks holda "Shart bajarilmadi!" deb alert chiqaring.

// Tushuntirish
// Birinchi son oâ€™zini koâ€™rsatmoqchi! ðŸ˜ || va > bilan uning qobiliyatini sinaymiz.

// Input: 10, 5
// Output: alert("Birinchi son mos keladi!")
// Input: -3, 5
// Output: alert("Shart bajarilmadi!")

// Qani bir kod yozingchi ðŸ‘€


// let son1 = Number(prompt("birinchi son:"));
// let son2 = Number(prompt("ikkinchi son:"));
// if ((son1 >= son2) && son1 > 0) {
//   alert("Birinchi son mos keladi!");
// } else {
//   alert("Shart bajarilmadi!");
// }


// ====================================
// ============ 26-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 0 dan katta bo'lsa, lekin 10 dan kichik bo'lsa yoki 100 dan katta bo'lsa, lekin 200 dan kichik bo'lsa, "Maxsus diapazon!" deb alert chiqaring, aks holda "Oddiy son!" deb alert chiqaring.

// Tushuntirish
// Bu sonlar maxsus zonada yashaydi! ðŸï¸ && va || operatorlarini aralashtirib, chegaralarni tekshiramiz.

// Input: 5
// Output: alert("Maxsus diapazon!")
// Input: 50
// Output: alert("Oddiy son!")

// Qani bir kod yozingchi ðŸ‘€


// let son = Number(prompt("son kiriting:"));
// if ((son > 0 && son < 10) || (son > 100 && son < 200)) {
//   alert("Maxsus diapazon!");
// } else {
//   alert("Oddiy son!");
// }

// ====================================
// ============ 27-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali ismini va yoshini kiritadi. Agar ism bo'sh bo'lmasa va yosh 18 dan kichik bo'lsa, "Yoshsin, [ism]!" deb alert chiqaring, aks holda "Boshqa holat!" deb alert chiqaring.

// Tushuntirish
// Yoshlik â€“ bu ajoyib vaqt! ðŸ˜„ && va ! bilan ism va yoshni tekshiramiz.

// Input: "Ali", 15
// Output: alert("Yoshsin, Ali!")
// Input: "", 20
// Output: alert("Boshqa holat!")

// Qani bir kod yozingchi ðŸ‘€


// let ism = prompt("ismingiz:");
// let yosh = Number(prompt("yoshingiz:"));
// if (ism !== "" && yosh < 18) {
//  alert("Yoshsin, Ali!")
// } else {
//   alert("Boshqa holat!");
// }

// ====================================
// ============ 28-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 0 bo'lmasa va juft bo'lsa, yoki son 100 dan katta bo'lsa, "Maxsus son!" deb alert chiqaring, aks holda "Oddiy son!" deb alert chiqaring.

// Tushuntirish
// Bu sonlar oâ€™ziga xos! ðŸŒŸ ||, && va % bilan ularni ajratib olamiz.

// Input: 120
// Output: alert("Maxsus son!")
// Input: 7
// Output: alert("Oddiy son!")

// Qani bir kod yozingchi ðŸ‘€

// let son = Number(prompt("son kiriting:"));
// if ((son !== 0 && son % 2 === 0) || son > 100) {
//   alert("Maxsus son!");
// } else {
//   alert("Oddiy son!");
// }


// ===============
// =====================
// ============ 29-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali ikkita so'z kiritadi. Agar birinchi so'z ikkinchisidan uzun bo'lsa yoki birinchi so'z "salom" bo'lsa, "Birinchi so'z g'olib!" deb alert chiqaring, aks holda "Ikkichi so'z g'olib!" deb alert chiqaring.

// Tushuntirish
// Soâ€™zlar oâ€™rtasida musobaqa! ðŸ—£ï¸ || va length bilan gâ€™olibni aniqlaymiz.

// Input: "salom", "hi"
// Output: alert("Birinchi so'z g'olib!")
// Input: "test", "hello"
// Output: alert("Ikkichi so'z g'olib!")

// Qani bir kod yozingchi ðŸ‘€


// let soz1 = prompt("birinchi so'z:");
// let soz2 = prompt("ikkinchi so'z:");
// if (soz1.length > soz2.length || soz1 === "salom") {
//   alert("Birinchi so'z g'olib!");
// } else {
//   alert("Ikkichi so'z g'olib!");
// }



// ====================================
// ============ 30-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali yoshini, ismini va "ha" yoki "yo'q" deb javob kiritadi. Agar yosh 18 dan katta bo'lsa, ism bo'sh bo'lmasa va javob "ha" bo'lsa, "Siz superstarsiz, [ism]!" deb alert chiqaring, aks holda "Superstar emassiz!" deb alert chiqaring.

// Tushuntirish
// Superstar boâ€™lish oson emas! ðŸŒŸ && va ! bilan barcha shartlarni tekshiramiz. Bu eng qiyin masala, lekin siz buni uddalaysiz!

// Input: 20, "Ali", "ha"
// Output: alert("Siz superstarsiz, Ali!")
// Input: 15, "Vali", "yo'q"
// Output: alert("Superstar emassiz!")

// Qani bir kod yozingchi ðŸ‘€


// let yosh = Number(prompt("yoshingiz:"));
// let ism = prompt("ismingiz:");
// let javob = prompt('"ha" yoki "yoq" deb javob bering:');
// if (yosh > 18 && ism !== "" && javob === "ha") {
//   alert("Siz superstarsiz, Ali!")
// } else {
//   alert("Superstar emassiz!");
// }