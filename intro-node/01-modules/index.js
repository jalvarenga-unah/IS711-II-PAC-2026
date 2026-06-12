// import { suma, resta } from './funciones/operaciones.js'
import op from './funciones/operaciones.js'
import { platform, uptime, freemem, version } from 'node:os'

console.log(op.suma(2, 4))
console.log(op.resta(2, 4))
console.log(platform())
console.log(uptime() / 60 / 60 / 24)
console.log(freemem() / 1024 / 1024)
console.log(version())

// console.log(op.PI)