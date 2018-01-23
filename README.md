# schema-v4
Store the dereferenced project, location and design schema for Calc 7.0.

### To copy in and dereference the schemas
Note: This assumes that the schema is next to this repo and is up to date.
```
cd deref && npm install && node index.js && cd ..
```
### Then upload to artifactory
```
./gradlew uploadArchives
```
