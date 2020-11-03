const sentence = "hello Dave... what are you doing Dave?";


let delay = 0;
for (const char of sentence) {
  delay += 100
  setTimeout(() => {
   process.stdout.write(char);

  }, delay);

};

setTimeout(() => {
  process.stdout.write('\n');
} , delay+100);