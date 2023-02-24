export default class RandomEmoji
{
	constructor( el )
	{
		this.el = el;

		this.bindUi();
		this.setVars();

		this.interval = setInterval( () =>
		{
			if( this.count >= 30 )
			{
				clearInterval( this.interval );
			}

			this.count++;

			let nextIndex = Math.floor( Math.random() * ( this.emoji.length - 1 ) );
			if( nextIndex === this.currentIndex )
			{
				if( this.emoji[nextIndex + 1] )
				{
					nextIndex++;
				}
				else
				{
					nextIndex = 0;
				}
			}
			this.currentIndex = nextIndex;
			this.render();

		}, 90 );
	}

	bindUi()
	{
		this.ui = {};
		this.ui.$emoji = this.el.querySelector( "[data-ref='emoji']" );
	}

	render()
	{
		this.ui.$emoji.innerText = this.emoji[this.currentIndex];
	}

	setVars()
	{
		this.count = 0;
		this.currentIndex = null;
		this.emoji = ["🔨", "✨", "⚠️", "🏝", "💫", "📸", "🐞", "🧡", "✳️"];
		this.interval = null;
	}
}
