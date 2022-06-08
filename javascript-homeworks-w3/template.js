
// ÖDEV-1
// y=3x+4k ==> 1.dereceden 2 bilinmeyenli denklem
// Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız ?

/*
const promptX = parseInt(prompt("X Değeri:", ""));
const promptK = parseInt(prompt("K Değeri:", ""));

function calculateEquation(xValue, kValue) {
  const equation = (3 * xValue) + (4 * kValue);
  if (!equation) {
    document.writeln(`<br/> Geçersiz değer girdiniz!`);
    return;
  }
  document.writeln(`<br/> ${equation}`);
}

calculateEquation(promptX, promptK);
*/

/////////////////////////////////////////////////////////////////////////////////

// ÖDEV-2
// Kullanıcı tarafından alınan dereceyi  Fahrenheit'a çeviren algoritma yapalım.
// Formül:(x*9/5)+32

/*
const promptDegree = parseInt(prompt("Derece giriniz:", ""));

function degreeToFahrenheit(degrees) {
  const equation = (degrees * 9 / 5) + 32;
  if (!equation) {
    document.writeln(`<br/> Geçersiz değer girdiniz!`);
    return;
  }
  document.writeln(`<br/> ${equation}`);
}

degreeToFahrenheit(promptDegree);

*/

/////////////////////////////////////////////////////////////////////////////////

//ÖDEV-3 verilen bir sayının negatif mi pozitif mi olduğunu bulan algoritma ?

/*
const promptNumber = parseInt(prompt("Sayı giriniz:", ""));

function positiveOrNegative() {
  if (promptNumber > 0) {
    document.writeln(`<br/> Sayı pozitif.`);
  }
  else {
    document.writeln(`<br/> Sayı negatif.`);
  }
}

positiveOrNegative(promptNumber);
*/

/////////////////////////////////////////////////////////////////////////////////

//ÖDEV-4 Kullanıcı tarafından aldığımız password ile repassword girilsin doğru ve yanlışı göstersin ?

/*
const passwordOne = prompt("Şifre giriniz:", "");
const passwordTwo = prompt("Şifreyi tekrar giriniz:", "");

function passwordCheck(passwordOne, passwordTwo) {
  if (passwordOne != passwordTwo) {
    document.writeln(`<br/> Şifreler uyuşmuyor.`);
  }
  else {
    document.writeln(`<br/> Şifreniz kaydedildi!`);
  }
}

passwordCheck(passwordOne, passwordTwo);
*/

/////////////////////////////////////////////////////////////////////////////////

// ÖDEV-5 (if-else for break continue)
// Fonksiyonlarla yapılsın
// Örnek-1)  kullanıcının vereceği (prompt) bitiş sayısını belirleyelim Exam 1<=X<=5
// 1.adım: kaç tane sayı var ?
// 2.adım: sayı toplamları var ?

// 3.adım: kaç tane tek sayı var ?
// 4.adım: tek sayılar toplamı ?
// 5.adım: tek sayılar gösterelim ?

// 6.adım: kaç tane çift  sayı var ?
// 7.adım: çift sayılar toplamı ?
// 8.adım: çift sayılar gösterelim ?

// Eğer verilen sayılarda 7 sayısı varsa bunu eklemesin (continue)
// Eğer bitiş sayısı 100 fazla ise 100'e kadar olanlar toplansın  (break)
// Eğer kullanıcı başlangıç sayıdan küçük girerse uyaralım başlangıçtan büyük girmesini isteyelim
// Eğer kullanıcı secret-key girerse yani 44 sayısını girerse program çalışmayı direk durdursun


const promptLastNumber = parseInt(prompt("Bir sayı giriniz:", ""));

function numberFunction(promptLastNumber) {

  if (promptLastNumber == 44) {
    document.writeln(`<br/> Gizli sayıyı buldunuz!`);
    return;
  }
  else if (promptLastNumber > 100) {
    promptLastNumber = 100;
  }
  else if (promptLastNumber < 1) {
    document.writeln(`<br/> Geçersiz bir sayı girdiniz!`);
    return;
  }

  let oddNumbers = [];
  for (let i = 1; i < promptLastNumber; i = i + 1) {
    oddNumbers.push(i);
    i++;
  }
  let evenNumbers = [];
  for (let i = 2; i <= promptLastNumber; i = i + 1) {
    evenNumbers.push(i);
    i++;
  }

  // 1. Adım
  document.writeln(`<br/> Kaç sayı var: ${promptLastNumber}`);
  // 2. Adım
  const sumEquation = (promptLastNumber * (promptLastNumber + 1)) / 2;
  document.writeln(`<br/> Sayıların Toplamı: ${sumEquation}`);

  // 3. Adım 
  document.writeln(`<br/> Tek Sayı Sayısı: ${oddNumbers.length}`);
  // 5. Adım 
  document.writeln(`<br/> Tek Sayılar: ${oddNumbers}`);

  // 6. Adım
  document.writeln(`<br/> Çift Sayı Sayısı: ${evenNumbers.length}`);
  // 8. Adım 
  document.writeln(`<br/> Çift Sayılar: ${evenNumbers}`);

}

numberFunction(promptLastNumber);

/////////////////////////////////////////////////////////////////////////////////

// ÖDEV-6
// Login userEmail,userPassword kullanıcıdan aldığımız değeri db ile karşılaştıracak eğer doğru ise adminFunction'a gönderecek 4 kalan haktan aşağı doğru düşecek eğer kalan hak sayımız 0 olursa kullanıcı bloke olsun
// dbUserEmail="deneme@gmail.com"
// dbUserPassword="root"

/*
function adminPage() {
  document.writeln('Admin sayfası')
}

let login = () => {
  let dbUserEmail = 'deneme@gmail.com',
    dbUserPassword = 'root'
  let userEmail, userPassword

  let count = 4;
  while (count > 0) {
    userEmail = prompt('email giriniz')
    userPassword = prompt('şifre giriniz')
    if (userEmail === dbUserEmail && userPassword === dbUserPassword)
      return adminPage()
    else {
      count--;
      alert(`kalan hakkınız: ${count}`)
    }
  }
  alert('hakkınız kalmadı iyi günler')
}
login()
*/
