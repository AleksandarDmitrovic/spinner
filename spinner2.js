let timer = 100;
let spinner = ['|', '/', '-' , '\\', '|', '/', '-' , '\\', '|' ];

for (const spin of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${spin}  `)
  },timer);
  timer += 200;
}