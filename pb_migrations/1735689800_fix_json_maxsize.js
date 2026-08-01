/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("clients");

  const winterField = collection.schema.getFieldByName("winterMonths");
  winterField.options = { maxSize: 2000000 };

  const summerField = collection.schema.getFieldByName("summerMonths");
  summerField.options = { maxSize: 2000000 };

  return dao.saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("clients");

  const winterField = collection.schema.getFieldByName("winterMonths");
  winterField.options = { maxSize: 0 };

  const summerField = collection.schema.getFieldByName("summerMonths");
  summerField.options = { maxSize: 0 };

  return dao.saveCollection(collection);
});
