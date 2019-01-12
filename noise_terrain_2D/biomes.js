class Biomes {
	constructor(biome = -1){
		this.biomes = [];
		this.biomes[0] = {lowest:-20, highest:120, inc:0.05, name:'Plants', index:0};
		this.biomes[1] = {lowest:-20, highest:40, inc:0.05, name:'Islands', index:1};
		this.biomes[2] = {lowest: -10, highest:20, inc:0.05, name:'Ocean', index:2};
		this.biomes[3] = {lowest: 45, highest:120, inc:0.05, name:'Terra', index:3};
		this.biomes[4] = {lowest: 80, highest:110, inc:0.05, name:'Snow', index:4};
		this.biomes[5] = {lowest: 20, highest:50, inc:0.05, name:'Sabana', index:5};
		this.biomes[6] = {lowest:-20, highest:70, inc:0.05, name:'Continents', index:6};
		this.biomes[7] = {lowest:-20, highest:60, inc:0.03, name:'Large Coasts', index:7};
		this.biomes[8] = {lowest:-70, highest:70, inc:0.05, name:'Deeper Islands', index:8};
		this.biomes[9] = {lowest: 90, highest:120, inc:0.05, name:'Glaciar', index:9};
		this.biomes[10] = {lowest: 0, highest:130, inc:0.05, name:'Mountains', index:10};

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
}