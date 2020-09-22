let timer = 100;
let spinner = ['|', '/', '-' , '\\', '|', '/', '-' , '\\', '|', '\n'];

for (const spin of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${spin}  `)
  },timer);
  timer += 200;
  console.log('timer :', timer);
}