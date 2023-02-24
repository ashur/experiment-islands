class State
{
	constructor()
	{
		this.listeners = {};
		this.storage = {};
	}

	addListener( keyName, listener )
	{
		this.listeners[keyName] = this.listeners[keyName] || [];
		this.listeners[keyName].push( listener );
	}

	getItem( keyName )
	{
		return this.storage[keyName];
	}

	setItem( keyName, keyValue )
	{
		this.storage[keyName] = keyValue;

		this.listeners[keyName]?.forEach( ( listener ) =>
		{
			listener( keyValue );
		} );
	}
}

window.state = new State();
