const fs = require('fs-extra');
var deref = require('json-schema-deref-sync');

console.log('copying the existing schema files');
try {
	fs.ensureDirSync('../resources/schema');
    fs.copySync('../../schema/resources/schema', '../resources/schema');
    fs.copySync('../resources/schema/spidacalc/calc/project.schema', '../resources/schema/spidacalc/calc/project.json');
    fs.copySync('../resources/schema/spidacalc/calc/location.schema', '../resources/schema/spidacalc/calc/location.json');
    fs.copySync('../resources/schema/spidacalc/calc/design.schema', '../resources/schema/spidacalc/calc/design.json');


	var project = require(`../resources/schema/spidacalc/calc/project.json`);
	var location = require(`../resources/schema/spidacalc/calc/location.json`);
	var design = require(`../resources/schema/spidacalc/calc/design.json`);

	var dereferencedProject = deref(project, {baseFolder: '../resources/schema/spidacalc/calc', failOnMissing: true});
	var dereferencedLocation = deref(location, {baseFolder: '../resources/schema/spidacalc/calc', failOnMissing: true});
	var dereferencedDesign = deref(design, {baseFolder: '../resources/schema/spidacalc/calc', failOnMissing: true});

	fs.removeSync('../resources/schema');
	fs.ensureDirSync('../resources/schema/spidacalc/calc');
	fs.writeJsonSync('../resources/schema/spidacalc/calc/project-v4.schema', dereferencedProject, {spaces:2});
	fs.writeJsonSync('../resources/schema/spidacalc/calc/location-v4.schema', dereferencedLocation, {spaces:2});
	fs.writeJsonSync('../resources/schema/spidacalc/calc/design-v4.schema', dereferencedDesign, {spaces:2});

} catch (err) {
  console.error(err);
  process.exit(1);
}