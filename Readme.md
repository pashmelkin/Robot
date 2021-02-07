# Toy Robot

Foobar is a Python library for dealing with word pluralization.

## Installation

```bash
npm install
```

## Design
I tried to apply SOLID/DRY principles , so I added 3 layers:
* Input (responsible for getting  commands)
* Processor (steps/locations)
* Repository (keep/track current location)

### Input
Based on 2 interfaces: IReader and ISanitizer
  * IReader reads the input from CLI (potentially it might be replaced with file reader)
  * ISanitizer does the input command checks (using Regular expressions). 

### Processor
Calculates the next move for the robot based on the current location and the board configuration.
It has submodule called MoveCalculator, its role is to defined the next steps and check if 
placement is possible (based on board limits).
I decided to put it separately because it contains quite heave logic to define the next steps.

### Repository

The layer to keep the location of the robot 

### Board configuration
The board length/width is defined in the .env file and parsed with dotenv libary 

### Error handling 
All function return the resulted string and the error (if any)


#### Unit tests
Unit tests are written/executed with Jest:
```bash
npm test
```
There're quite a lot of tests since I tried to thoroughly test the MoveCalculator and Sanitizer modules.

#### Start the robot
To start the robot you need the run the command:
```bash
npm start
```

### CI/CD pipeline

I'm using github action which run unit tests.

## Known bugs
Sanitizer lets slip the entries like 'Place 1 2 North%$'

## TODO
1. Add unit test coverage tool (istanbul?)
2. Add unit tests for  strdin (the library readline-sync)
3. Add github pre-commit hook with tslint
