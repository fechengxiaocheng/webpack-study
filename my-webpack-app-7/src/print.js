console.log('The print.js module has loaded! See the network tab in dev tools...');
if (process.env.NODE_ENV !== 'production') {
    console.log('非生产环境')
}
export default () => {
  console.log('hhh xljlj   233 i!');
}