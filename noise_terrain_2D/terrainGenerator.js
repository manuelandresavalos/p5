class TerrainGenerator {
	constructor(
		biome = {},
		canvasW = 600,
		canvasH = 600,
		minNoiseMap = 0,
		maxNoiseMap = 100,
		inc = 0.01,
		cellSize = 10) 
	{
		this.biome = biome;
		this.canvasW = canvasW;
		this.canvasH = canvasH;
		this.minNoiseMap = minNoiseMap;
		this.maxNoiseMap = maxNoiseMap;
		this.inc = inc;
		this.cellSize = cellSize;

		this.xoff = 0;
		this.yoff = 0;
		this.start = 0;
		this.cellMap = [];
		this.cells = [];
	}

	generate(){
		this.inc = this.biome.inc || this.inc;
		this.xoff = this.start;
		for (var x = 0; x < this.canvasW/this.cellSize; x++) {
			this.cellMap[x] = [];
			this.yoff = this.start;
			for (var y = 0; y < this.canvasH/this.cellSize; y++) {
				var noiseValue = noise(this.xoff, this.yoff);
				var minNoiseMap = this.biome.lowest || this.minNoiseMap;
				var maxNoiseMap = this.biome.highest || this.maxNoiseMap;
				var randomNoise = map(noiseValue, 0, 1, minNoiseMap, maxNoiseMap);
				var level = Math.ceil(randomNoise / 10);

				this.cellMap[x][y] = level;

				this.yoff += this.inc;
			}
			this.xoff += this.inc;
		}

		return this.cellMap;
	}

	clear(){
		this.cellMap.length = 0;
		this.cells.length = 0;
	}

	show(){
		if (this.cellMap.length == 0) {
			console.log("We don't have cells to show");
			return false;
		}
		stroke(0);
		for (var x = 0; x < this.canvasW/this.cellSize; x++) {
			this.cells[x] = [];
			for (var y = 0; y < this.canvasH/this.cellSize; y++) {
				var level = this.cellMap[x][y];
				if (level >= this.biome.levels.length) {
		      level = this.biome.levels.length - 1;
		    } else if (level <= 0) {
		      level = 0;
		    }

				var rgbObj = this.biome.levels[level];
				this.cells[x][y] = new Cell({
					x: x, 
					y: y,
					size: this.cellSize,
					rgb: rgbObj
				});
				
				this.cells[x][y].show();
			}
		}
	}
}