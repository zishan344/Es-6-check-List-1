// ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।
let num1 = "marouful";
const num2 = "Islam";
// ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।
const fullName = `MOhammad ${num1} ${num2}`;
// console.log(fullName);
const firstObject = {
  name: "nokia435",
  color: "white",
  company: "nokia",
  quentity: 5,
  price: 1490,
};
const phoneobj = ` my-phone name ${firstObject.name} my phone company ${firstObject.company} myPhone price ${firstObject.price}`;
// console.log(phoneobj);
// ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে।
const fun = (x) => x / 5;
// console.log(fun(10));
// ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো
// const fun2 = (x, y) => {
//   const add1 = x + 2;
//   const add2 = y + 2;
//   const into = add1 * add2;
//   return into;
// };
// console.log(fun2(10, 10));
const fun2 = (x, y) => (x + 2) * (y + 2);
// console.log(fun2(10, 10));
// ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।
const fun3 = (x, y, z) => x * y * z;
// console.log(fun3(4, 4, 4));
// ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।
const fun4 = (x, y) => {
  const add = x + 2;
  const add2 = y + 2;
  const into = add * add2;
  return into;
};
// console.log(fun4(4, 4));
// ৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো।
// arrow function always annonimous function,
// typw of arrow function is function expression
// ৪.৫. [এক্সট্রা আরেকটা হোম ওয়ার্ক। এইটা ভিডিওতে বলা নাই]: জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি?

/* 1. var কীওয়ার্ড function স্কোপ অর্থাৎ (function Block) মেইন্টেইন করে ।
  2. let ও const কীওয়ার্ড ব্লক(Block) স্কোপ মেইন্টেইন করে । */

// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।
const arr1 = [2, 4, 5, 6, 2, 6, 7];
const number = arr1.map((n) => n * 5);
// console.log(number);

// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো
const arr2 = [2, 4, 5, 1, 6, 2, 6, 7];
const number2 = arr2.filter((n) => n % 2);
// console.log(number2);
// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।

{
  const shop = [
    { name: "nokia b50", price: 5400 },
    { name: "symphony rhf", price: 5000 },
    { name: " glass", price: 500 },
    { name: "ink  ", price: 52 },
    { name: "shart", price: 4000 },
  ];
  const haigshtPrice = shop.find((p) => p.price == 5000);
}
// console.log(haigshtPrice);
// ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।
/* 
1. map . map vitore vitore loop calye akta array sob golo ke nei . abong newar por 
  akta array return kore 
2. forEach . forEach vitore vitore loop calaye sob golo ke nei kinto return kore na 
3. filter . filter vitore vitore loop calaye function ar vitor ar sorto onojaye joto 
   golo mil ase sob golo return korbe
4. find . find vitore vitore loop calaye function ar vitor ar sorto onojaye jeta 
   protome pabe oi ta return kore baki golo sorto poron korle o return korena 
*/

// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।
const shop2 = { name: "nokia b50", price: 5400 };

const { name, price } = shop2;
// console.log(name, price);
// ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।

const numberArray = [1, 2, 3];
const [one, two, three] = numberArray;
// console.log(three);
// ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭।
const fun5 = (x, y, z = 7) => x + y + z;
// console.log(fun5(2, 2, 2));
//  [অপশনাল]
//   ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )
const objLast = {
  companyName: "abiJavi",
  location: "bangladesh",
  city: ["chittagong", "anowara"],
  compnyPartar: {
    australia: "jonaki.com",
    detils: ["boss1", "boss2", { boss1Natures: "joss" }],
  },
  roadNumber: 345,
};

// ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো।
console.log(objLast.jonka?.australia);
