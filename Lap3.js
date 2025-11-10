//arow funciton
// const sumArrow = (a, b)=>{
//     return a + b;
// };

// const sumAbb = (a, b) => a + b;

//sumArrow ten funtion
// function tinhTong(a, b){
//     const c = a + b;
//     return c;
// }

// const displayFullName = (FistName, LastName) =>
//     `Ho ten: ${FistName} ${LastName}`;

// const sumAb = (a,b)=>{
//     const a2 = a*2;
//     return a2 +b;
// };

// function 1
// function multiply(a, b) {
//   return a * b;
// }

const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(5, 10))

// Function 2
// function isPositive(number) {
//   return number >= 0;
// }

const isPositive = (number) => {
  return number >= 0;
}
console.log(isPositive(20))


// Function 3
// function getRandomNumber() {
//   return Math.random();
// }
const getRandomNumber = () => {
  return Math.random();
}
console.log(getRandomNumber(50))

// Function 4
// document.addEventListener("click", function () {
//   console.log("Clicked!");
// });

document.addEventListener("click", () => {
  console.log("Clicked!");
});

// function createUser(name, age, isAdmin) {
//   if (name === undefined) name = "Anonymous";
//   if (age === undefined) age = 18;
//   if (isAdmin === undefined) isAdmin = false;

//   return {
//     name: name,
//     age: age,
//     isAdmin: isAdmin,
//   };
// }

function createUser(name = "Anonymous", age = 18, isAdmin = false) {
  return {
    name,
    age,
    isAdmin,
  };
}
console.log(createUser())


// Bài tập 3: Rest và Spread
// Viết các hàm sau:

// Hàm mergeArrays nhận nhiều mảng và trả về mảng hợp nhất
function Arrays(...arrays) {
  return [].concat(...arrays);
}
console.log(Arrays([1, 2], [3, 4], [5, 6]));
const sumAll = (...numbers) => {
  return numbers.reduce((total, currentNumber) => total + currentNumber, 0);
};
console.log("Tổng của mảng 1, 2, 3 =", sumAll(1, 2, 3));
console.log("tong cảu mảng 5, 10, 15, 20 =", sumAll(5, 10, 15, 20));

const createProduct = (
  name = "san pham khong ten",
  price = 0,
  inStock = false
) => {
  return {
    name,
    price,
    inStock,
  };
};
console.log("Sản phẩm mặc định:", createProduct());
console.log("Sản phẩm tùy chỉnh:", createProduct("Iphone ", "100 $", true));

// Bài 4
const gioHang = (tenKhach, ...sanPham) => ({
  khachHang: tenKhach,
  maDon: 123,
  danhSach: sanPham,
  tongSo: sanPham.length,
  ghiChu: "Hiển thị."
});

const don1 = gioHang("nguyễn Văn Công", 123, "Laptop XYZ", "Chuột không dây", "Bàn phím cơ");
console.log("đơn hàng 1:", don1);

const don2 = gioHang("Trần thị Linh", 221, "Áo thun", "Quần bò");
console.log("đơn hàng 2:", don2);
