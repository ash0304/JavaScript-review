// Q: Promise vs Ajax ?
// A: Ajax 可以向伺服器傳送及取得資料，過程不需要重新整理瀏覽器頁面，可大幅提升使用者體驗且減少伺服器負擔

// Promise vs Async、Await ?
// Promise 是用來優化非同步的語法，而 Async、Await 是基於 Promise 讓非同步的語法結構類似於 "同步語言" 的語法糖，使開發上易於管理與解讀

// example 1:

console.log('開始');

setTimeout(() => {
  console.log('非同步事件');
}, 0);

console.log('結束');

// A: 開始 -> 結束 -> 非同步事件
// JavaScript 是屬於同步的程式語言，因此一次僅能做一件事情
// 上段原始碼中，雖然setTimeout所定義的延遲時間為0，但仍視為非同步事件，因此會在其他原始碼運行完後，才會執行非同步事件

// example 2(axios):

let data = {};

axios.get('http://randomuser.me/api/').then((res) => {
  data = res;
});

console.log(data); // {}

// A: data仍為空物件，因為console.log的順序會再axios實際取得資料並指向data之前
// 換言之console.log並沒有等到資料回來就印出來，此時data仍為空物件 {}

