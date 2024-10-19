const { getJson } = require("serpapi");

getJson({
  api_key: "270fb85fd908055efe9fb00b3a216e71115b2e223413aa6dd1cf27e5890851e2",
  engine: "google_scholar_author",
  hl: "en",
  author_id: "tfKIiZoAAAAJ"
}, (json) => {
  console.log(json);
});