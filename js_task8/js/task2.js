export function httpGet(url, data) {
  function getRandomIntegerNumber(min, max) {
    // min = Math.ceil(min);
    // max = Math.floor(max);
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(number);
    return number; //Максимум и минимум включаются

  }
  return new Promise ((resolve, reject) => {
    getRandomIntegerNumber(0, 1) ? 
      setTimeout(() => resolve(data), getRandomIntegerNumber(1, 3)*1000) :
      reject(new Error('something went wrong!'))
    });
}