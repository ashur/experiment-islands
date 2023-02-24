export default class Stopwatch
{
	constructor( el )
	{
		this.el = el;

		this.bindUi();
		this.setVars();
		this.bindEvents();

		setInterval( () =>
		{
			this.tick++;
			this.render();

		}, 1000 );
	}

	bindEvents()
	{
		// ...
	}

	bindUi()
	{
		this.ui = {};
		this.ui.$tick = this.el.querySelector( "[data-ref='tick']" );
	}

	render()
	{
		this.ui.$tick.innerText = this.tick;
	}

	setVars()
	{
		this.tick = 0;
	}
}
