class Biomes {
	constructor(biome = -1){
		this.biomes = [];
		this.biomes[0] = {lowest:-20, highest:120, inc:0.05, name:'Plants', index:0, levels: [
			this.rgb(0,111,233),		// Base water
			this.rgb(48,147,255),		// Middle water
			this.rgb(9,191,253),		// Top water
			this.rgb(254,254,204),	// Sand
			this.rgb(166,202,1),		// Base grass
			this.rgb(45,204,55),		// Top grass
			this.rgb(159,81,45),		// Base mountain
			this.rgb(177,91,51),		// Base up mountain
			this.rgb(204,132,64),		// Middle mountain
			this.rgb(221,183,135),	// Top mountain
			this.rgb(230,230,230),	// Base Snow
			this.rgb(254,254,254)		// Top Snow
		]};

		this.biomes[1] = {lowest:-20, highest:40, inc:0.05, name:'Islands', index:1, levels: [
			this.rgb(0,111,233),		// Base water
			this.rgb(48,147,255),		// Middle water
			this.rgb(9,191,253),		// Top water
			this.rgb(254,254,204),	// Sand
			this.rgb(166,202,1),		// Base grass
			this.rgb(45,204,55),		// Top grass
			this.rgb(159,81,45),		// Base mountain
			this.rgb(177,91,51),		// Base up mountain
			this.rgb(204,132,64),		// Middle mountain
			this.rgb(221,183,135),	// Top mountain
			this.rgb(230,230,230),	// Base Snow
			this.rgb(254,254,254)		// Top Snow
		]};

		this.biomes[2] = {lowest: -10, highest:20, inc:0.05, name:'Ocean', index:2, levels: [
			this.rgb(0,111,233),		// Base water
			this.rgb(48,147,255),		// Middle water
			this.rgb(9,191,253),		// Top water
			this.rgb(254,254,204),	// Sand
			this.rgb(166,202,1),		// Base grass
			this.rgb(45,204,55),		// Top grass
			this.rgb(159,81,45),		// Base mountain
			this.rgb(177,91,51),		// Base up mountain
			this.rgb(204,132,64),		// Middle mountain
			this.rgb(221,183,135),	// Top mountain
			this.rgb(230,230,230),	// Base Snow
			this.rgb(254,254,254)		// Top Snow
		]};

		this.biomes[3] = {lowest: 45, highest:120, inc:0.05, name:'Terra', index:3, levels: [
			this.rgb(0,111,233),		// Base water
			this.rgb(48,147,255),		// Middle water
			this.rgb(9,191,253),		// Top water
			this.rgb(254,254,204),	// Sand
			this.rgb(166,202,1),		// Base grass
			this.rgb(45,204,55),		// Top grass
			this.rgb(159,81,45),		// Base mountain
			this.rgb(177,91,51),		// Base up mountain
			this.rgb(204,132,64),		// Middle mountain
			this.rgb(221,183,135),	// Top mountain
			this.rgb(230,230,230),	// Base Snow
			this.rgb(254,254,254)		// Top Snow
		]};

		this.biomes[4] = {lowest: 80, highest:110, inc:0.05, name:'Snow', index:4, levels: [
			this.rgb(0,111,233),		// Base water
			this.rgb(48,147,255),		// Middle water
			this.rgb(9,191,253),		// Top water
			this.rgb(254,254,204),	// Sand
			this.rgb(166,202,1),		// Base grass
			this.rgb(45,204,55),		// Top grass
			this.rgb(159,81,45),		// Base mountain
			this.rgb(177,91,51),		// Base up mountain
			this.rgb(204,132,64),		// Middle mountain
			this.rgb(221,183,135),	// Top mountain
			this.rgb(230,230,230),	// Base Snow
			this.rgb(254,254,254)		// Top Snow
		]};

		this.biomes[5] = {lowest: 20, highest:50, inc:0.05, name:'Sabana', index:5, levels: [
			this.rgb(0,111,233),		// Base water
			this.rgb(48,147,255),		// Middle water
			this.rgb(9,191,253),		// Top water
			this.rgb(254,254,204),	// Sand
			this.rgb(166,202,1),		// Base grass
			this.rgb(45,204,55),		// Top grass
			this.rgb(159,81,45),		// Base mountain
			this.rgb(177,91,51),		// Base up mountain
			this.rgb(204,132,64),		// Middle mountain
			this.rgb(221,183,135),	// Top mountain
			this.rgb(230,230,230),	// Base Snow
			this.rgb(254,254,254)		// Top Snow
		]};

		this.biomes[6] = {lowest:-20, highest:70, inc:0.05, name:'Continents', index:6, levels: [
			this.rgb(0,111,233),		// Base water
			this.rgb(48,147,255),		// Middle water
			this.rgb(9,191,253),		// Top water
			this.rgb(254,254,204),	// Sand
			this.rgb(166,202,1),		// Base grass
			this.rgb(45,204,55),		// Top grass
			this.rgb(159,81,45),		// Base mountain
			this.rgb(177,91,51),		// Base up mountain
			this.rgb(204,132,64),		// Middle mountain
			this.rgb(221,183,135),	// Top mountain
			this.rgb(230,230,230),	// Base Snow
			this.rgb(254,254,254)		// Top Snow
		]};

		this.biomes[7] = {lowest:-20, highest:60, inc:0.03, name:'Large Coasts', index:7, levels: [
			this.rgb(0,111,233),		// Base water
			this.rgb(48,147,255),		// Middle water
			this.rgb(9,191,253),		// Top water
			this.rgb(254,254,204),	// Sand
			this.rgb(166,202,1),		// Base grass
			this.rgb(45,204,55),		// Top grass
			this.rgb(159,81,45),		// Base mountain
			this.rgb(177,91,51),		// Base up mountain
			this.rgb(204,132,64),		// Middle mountain
			this.rgb(221,183,135),	// Top mountain
			this.rgb(230,230,230),	// Base Snow
			this.rgb(254,254,254)		// Top Snow
		]};

		this.biomes[8] = {lowest:-70, highest:70, inc:0.05, name:'Deeper Islands', index:8, levels: [
			this.rgb(0,111,233),		// Base water
			this.rgb(48,147,255),		// Middle water
			this.rgb(9,191,253),		// Top water
			this.rgb(254,254,204),	// Sand
			this.rgb(166,202,1),		// Base grass
			this.rgb(45,204,55),		// Top grass
			this.rgb(159,81,45),		// Base mountain
			this.rgb(177,91,51),		// Base up mountain
			this.rgb(204,132,64),		// Middle mountain
			this.rgb(221,183,135),	// Top mountain
			this.rgb(230,230,230),	// Base Snow
			this.rgb(254,254,254)		// Top Snow
		]};

		this.biomes[9] = {lowest: 90, highest:120, inc:0.05, name:'Glaciar', index:9, levels: [
			this.rgb(0,111,233),		// Base water
			this.rgb(48,147,255),		// Middle water
			this.rgb(9,191,253),		// Top water
			this.rgb(254,254,204),	// Sand
			this.rgb(166,202,1),		// Base grass
			this.rgb(45,204,55),		// Top grass
			this.rgb(159,81,45),		// Base mountain
			this.rgb(177,91,51),		// Base up mountain
			this.rgb(204,132,64),		// Middle mountain
			this.rgb(221,183,135),	// Top mountain
			this.rgb(230,230,230),	// Base Snow
			this.rgb(254,254,254)		// Top Snow
		]};

		this.biomes[10] = {lowest: 0, highest:130, inc:0.05, name:'Mountains', index:10, levels: [
			this.rgb(0,111,233),		// Base water
			this.rgb(48,147,255),		// Middle water
			this.rgb(9,191,253),		// Top water
			this.rgb(254,254,204),	// Sand
			this.rgb(166,202,1),		// Base grass
			this.rgb(45,204,55),		// Top grass
			this.rgb(159,81,45),		// Base mountain
			this.rgb(177,91,51),		// Base up mountain
			this.rgb(204,132,64),		// Middle mountain
			this.rgb(221,183,135),	// Top mountain
			this.rgb(230,230,230),	// Base Snow
			this.rgb(254,254,254)		// Top Snow
		]};

		return this.getBiome(this.selectBiome(biome));
	}
	
	selectBiome(biome = -1) {
		//Select a biome randomly
		var selectedBiome = Math.round(random(this.biomes.length - 1)); // returns 0,1,2 ... N
		return selectedBiome = biome > -1 ? biome : selectedBiome;
	}

	getBiome(biome) {
		if (biome <= this.biomes.length) {
			return this.biomes[biome];
		}
		return false;
	}

	rgb(r, g, b) {
    return {r:r, g:g, b:b};
  }
}