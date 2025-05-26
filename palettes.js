class Pastel
{
	constructor()
	{
		// In this case BACKGROUND is the sky color
		this.BACKGROUND = 0x03cffc;

		this.FOG = 0x2b0761;
		this.FOG_LEVEL = 0.05;

		this.COLOR_0 = 0xFFFFFF;	// Forward Light, i.e, the primary light
		this.COLOR_1 = 0x11e8bb;
		this.COLOR_2 = 0xfcc2ff;
		this.COLOR_3 = 0x8200C9;
	}
}

class Duststorm
{
	constructor()
	{
		this.BACKGROUND = 0xAD836A;

		this.FOG = 0x9E7154;
		this.FOG_LEVEL = 0.05;

		this.COLOR_0 = 0xFFFFFF;	// Forward Light
		this.COLOR_1 = 0x8200C9;	// Purple
		this.COLOR_2 = 0xd4781c;	// Light Orange
		this.COLOR_3 = 0x733A26;	// Dusty Orange
	}
}

class Galaxy
{
	constructor()
	{
		this.BACKGROUND = 0x08080f;

		this.FOG = 0x9E7154;
		this.FOG_LEVEL = 0.05;

		this.COLOR_0 = 0xFFFFFF;	// Forward Light
		this.COLOR_1 = 0x8200C9;	// Purple
		this.COLOR_2 = 0xd4781c;	// Light Orange
		this.COLOR_3 = 0x733A26;	// Dusty Orange
	}
}

// circles peaches, and sqaures pink

class LEMON_PASTEL
{
	constructor()
	{
		this.BACKGROUND = 0xAEC6CF;

		this.FOG = 0xAEC6CFb;
		this.FOG_LEVEL = 0.025;

		this.COLOR_0 = 0x000000;	// Forward Light
		this.COLOR_1 = 0xFFB6C1;	// Downward Light
		this.COLOR_2 = 0xd7c9da;	// Phong Material
		this.COLOR_3 = 0xd47e1c;	// Rightward Light
	}
}
