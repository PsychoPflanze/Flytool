var population; //The population
var lifespan = 400; //The maximal lifespan
var count = 0; //The current lifespan
var target; //The target
var globalMaxfit; //Global maxfit of the last Generation
var generation = 1; //The current generation

//3 Paragraphs
var lifeP;
var fitP;
var genP;

//Rectangle collision
var rx = 100;
var ry = 200
var rw = 200;
var rh = 10;

function setup()
{
	//Creates the Canvas
	createCanvas(400, 300);

	//Creates the first population
	population = new Population();

	//Creates 3 Paragraphs
	lifeP = createP();
	fitP = createP();
	genP = createP();

	//Creates a vector of the target
	target = createVector(width/2, 50);
}

function draw()
{
	background(0);

	//Executes the run function inside of the current population
	population.run();

	//Sets the html for the 3 paragraphs
	lifeP.html("Lifespan: " + count);
	fitP.html("Max fitness for this Generation: " + globalMaxfit);
	genP.html("Generation: #" + generation);

	//Updates counter and checks if the maximum was reached
	count++;
	if(count == lifespan)
	{
		//Resets the population
		population.evaluate();
		population.selectionA();

		//Adds 1 to the generation and resets the counter to 0
		generation++;
		count = 0;
	}

	fill(255);
	//The obstacle
	rect(100, 200, 200, 10);

	//The target
	ellipse(target.x, target.y, 16, 16);
}
