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
		this.canvasW = canvasW;
		this.canvasH = canvasH;
		this.biome = biome;
		this.minNoiseMap = minNoiseMap;
		this.maxNoiseMap = maxNoiseMap;
		this.inc = inc;
		this.cellSize = cellSize;

		this.xoff = 0;
		this.yoff = 0;
		this.cellMap = [];
		this.cells = [];
	}

	generate(){
		this.inc = this.biome.inc || this.inc;
		this.xoff = 0;
		for (var x = 0; x < this.canvasW/this.cellSize; x++) {
			this.cellMap[x] = [];
			this.yoff = 0;
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

	show(){
		for (var x = 0; x < this.canvasW/this.cellSize; x++) {
			this.cells[x] = [];
			for (var y = 0; y < this.canvasH/this.cellSize; y++) {
				var level = this.cellMap[x][y];

				this.cells[x][y] = new Cell({
					x: x, 
					y: y,
					size: this.cellSize,
					typeLevel: level
				});
				
				this.cells[x][y].show();
			}
		}
	}
}