// // Sửa đoạn code sau để hoạt động đúng
// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i); // Hiện tại in ra 3,3,3
//   }, 100);
// }
// // Yêu cầu: Sửa để in ra 0,1,2



// // Tạo một object student với const
// // Thêm thuộc tính điểm và in ra
// const student = {
//   name: "ThuyTien",
//   age: 20,
// };
// student.grade = "A"
// student.age = 21

// console.log(student)
// // Thực hiện các thao tác sau:
// // 1. Thêm thuộc tính grade với giá trị "A"
// // 2. Thay đổi tuổi thành 21
// // 3. In ra toàn bộ thông tin student



// // String interpolation
// const name = "hoadv";
// const age = 25;
// console.log(`Xin chào, tôi là ${name}, năm nay ${age} tuổi.`);

// // Multi-line strings
// const message = `
// Đây là dòng đầu tiên
// Đây là dòng thứ hai
// Và đây là dòng thứ ba
// `;

// // Biểu thức trong template literals
// const a = 5;
// const b = 10;
// console.log(`Tổng của ${a} và ${b} là ${a + b}`);

// // Gọi hàm trong template literals
// function getCurrentTime() {
//   return new Date().toLocaleTimeString();
// }
// console.log(`Bây giờ là: ${getCurrentTime()}`);



// Tạo template cho email thông báo
const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};

// Tạo template string cho email
const emailTemplate = `Họ và tên của bạn ${user.firstName} ${user.lastName}, máy tính bạn đang dùng là ${user.product} giá ${user.price} và được mua vào ${user.orderDate}`; // Viết template ở đây

console.log(emailTemplate);