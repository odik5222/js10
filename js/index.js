let zv = ''
let yv = '*'
let ov = '******'

do {
    
    zv += zv + yv
    document.write(`<h1>${zv}</h1>`  )
    

} while (zv.length < 7)
do {
 ov = ov.replace(/\*\*\*/, "");
document.write(`<h1>${ov}</h1>`)
document.write(`<h1>${yv}</h1>`)
} while(ov.length < 2 )