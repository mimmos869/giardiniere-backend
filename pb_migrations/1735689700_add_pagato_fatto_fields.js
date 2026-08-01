/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("clients");

  collection.schema.addField(new SchemaField({
    name: "pagato",
    type: "bool",
    required: false,
    options: {}
  }));

  collection.schema.addField(new SchemaField({
    name: "fatto",
    type: "bool",
    required: false,
    options: {}
  }));

  return dao.saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("clients");

  collection.schema.removeField(collection.schema.getFieldByName("pagato").id);
  collection.schema.removeField(collection.schema.getFieldByName("fatto").id);

  return dao.saveCollection(collection);
});
