// 關於 Promise 常見問題

// Q: Promise vs Ajax ?
// A: Ajax 可以向伺服器傳送及取得資料，過程不需要重新整理瀏覽器頁面，可大幅提升使用者體驗且減少伺服器負擔

// Promise vs Async、Await ?
// Promise 是用來優化非同步的語法，而 Async、Await 是基於 Promise 讓非同步的語法結構類似於 "同步語言" 的語法糖，使開發上易於管理與解讀

// 非同步的問題

// example 1:

console.log('開始');

setTimeout(() => {
  console.log('非同步事件');
}, 0);

console.log('結束');

// A: 開始 -> 結束 -> 非同步事件
// JavaScript 是屬於同步的程式語言，因此一次僅能做一件事情
// 上段原始碼中，雖然 setTimeout 所定義的延遲時間為0，但仍視為非同步事件，因此會在其他原始碼運行完後，才會執行非同步事件

// example 2(axios):

let data = {};

axios.get('http://randomuser.me/api/').then((res) => {
  data = res;
});

console.log(data); // {}

// A: data 仍為空物件，因為 console.log 的順序會在 axios 實際取得資料並指向data之前
// 換言之 console.log 並沒有等到資料回來就印出來，此時 data 仍為空物件 {}

// Promise 的結構及狀態

// 結構

// Promise 本身為一個建構函式，函式也屬於物件的一種，因此可以附加其他屬性方法在上，透過 console 的結果可以看到 Promise
// 可以直接使用 all、race、resolve、reject等方法

// Promise.all
// Promise.race
// Promise.resolve
// Promise.reject

// 以 Promise 建構函式 new 出的物件，可以使用其中原型方法(在 prototype 內)
// 其中包含 then、catch、finally，這些方法則在新產生的物件下才能呼叫

// example 3:

const p = new Promise();

p.then(); // Promise 回傳正確
p.catch(); // Promise 回傳失敗
p.finally(); // 非同步執行完畢(無論是否完成)

// 此外，Promise 建構函式建立同時，必須傳入一個函式作為參數（executor function），此函式的參數包含 resolve, reject
// 這兩個方法分別代表成功與失敗的回傳結果，特別注意這兩個僅能回傳其中之一，回傳後表示此 Promise 事件結束。

new Promise((resolve, reject) => {
  resolve(); // 正確完成的回傳方法
  reject(); // 失敗的回傳方法
});
