// promise는 내가 무겁고 오래 걸리는 일이 있다면 비동기적으로 도와줌
// 약속해줄테니까 일이 끝나면 약속해줄게(원하는 일이 있다면 수행해줄게)
// 비동기적으로 수행하는 결과값을 끝나는걸 알려주는 이벤트
// pending
// fulfilled
// reject

function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(2)// promise가 끝이나면
  .then(() => console.log('타이머 완료!'))
  .catch(console.error)
  .finally(() => console.log('끝났다!'));
