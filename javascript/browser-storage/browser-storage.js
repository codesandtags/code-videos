//document.cookie = `user=codesandtags; expires=${new Date().toUTCString()}`;
//document.cookie = `user=codesandtags; max-age=15`;
document.cookie = `user=codesandtags; max-age=20; samesite=strict; secure`;

console.log('This are the cookies')
console.log(document.cookie);