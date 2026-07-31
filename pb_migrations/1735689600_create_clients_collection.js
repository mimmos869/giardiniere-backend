/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);

  const collection = new Collection({
    name: "clients",
    type: "base",
    listRule: "",
    viewRule: "",
    createRule: "",
    updateRule: "",
    deleteRule: "",
    schema: [
      { name: "name", type: "text", required: false, options: {} },
      { name: "address", type: "text", required: false, options: {} },
      { name: "price", type: "number", required: false, options: {} },
      { name: "hours", type: "number", required: false, options: {} },
      { name: "frequency", type: "text", required: false, options: {} },
      { name: "notes", type: "text", required: false, options: {} },
      { name: "hasSeasonal", type: "bool", required: false, options: {} },
      { name: "bags", type: "text", required: false, options: {} },
      { name: "year", type: "text", required: false, options: {} },
      { name: "type", type: "text", required: false, options: {} },
      { name: "winterMonths", type: "json", required: false, options: {} },
      { name: "summerMonths", type: "json", required: false, options: {} },
      { name: "winterHours", type: "number", required: false, options: {} },
      { name: "summerHours", type: "number", required: false, options: {} },
      { name: "perUnit", type: "bool", required: false, options: {} },
      { name: "volteInverno", type: "number", required: false, options: {} },
      { name: "volteEstate", type: "number", required: false, options: {} },
      {
        name: "logoData",
        type: "text",
        required: false,
        options: { max: 0 } // 0 = nessun limite di lunghezza
      }
    ]
  });

  return dao.saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("clients");
  return dao.deleteCollection(collection);
});
