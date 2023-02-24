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
			this.offset = Math.floor((Date.now() - this.start) / 1000);
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
		this.ui.$tick.innerText = this.offset;
		this.ui.$tick.dataset.fontSize = this.offset >= 100 ? "small" : "normal";
	}

	setVars()
	{
		this.start = Date.now();
		this.offset = 0;
		this.tick = 0;
	}
}
