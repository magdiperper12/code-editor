// let htmlcode = document.querySelector('#html-code');
// let csscode = document.querySelector('#css-code');
// let jscode = document.querySelector('#js-code');
// let output = document.querySelector('#output');

// function runcode() {
// 	output.srcdoc = `
//     <html>
//         <head>
//               <style>${csscode.value}</style>
//         </head>
//         <body>
//               ${htmlcode.value}
//               <script>
//                      ${jscode.value}
//               </script>
//         </body>
//     </html>`;
// }
function runcode() {
	var html = document.getElementById('html-code').value;
	var css = '<style>' + document.getElementById('css-code').value + '</style>';
	var js = document.getElementById('js-code').value;

	var output = document.getElementById('output');
	output.contentDocument.open();
	output.contentDocument.write(html + css + '<script>' + js + '</script>');
	output.contentDocument.close();

	output.classList.add('visible'); // Fade-in effect for the iframe
}
