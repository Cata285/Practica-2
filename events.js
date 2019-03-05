

class EventEmitter{

	constructor(){
		this.escuchadores = {};
	}

	emit(evento, argumentos){

		if(this.escuchadores[evento]){

			this.escuchadores[evento].forEach(escuchador => escuchador(argumentos));
		} 
	}

	on(evento, escuchador){

        this.escuchadores[evento] = this.escuchadores[evento] || [];
		this.escuchadores[evento].push(escuchador);
	}
}

exports = module.exports = EventEmitter;