

// Importar modulo Later.js:
const later = require('later');
const EventEmitter = require('./events');

class Programador extends EventEmitter {
		constructor(controlador) {
		super();
		later.date.localTime();

		if(controlador instanceof Array){

			for(var i=0; i<controlador.length; i++){
				var e = controlador[i];
               console.log("Hora" + e.hora + "Temperatura" + e.temperatura); 
				later.setInterval(
					() => this.emit('ideal', e.temperatura),
					later.parse.text('at' + e.hora));
			}
		}





	}

}
exports = module.exports = Programador;


