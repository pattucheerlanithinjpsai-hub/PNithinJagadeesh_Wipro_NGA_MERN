const runAggregations = require("./aggregations/aggregationQueries");
const createIndexes = require("./indexes/createIndexes");

async function main() {
  console.log("🚀 Running BookVerse Tasks...\n");

  await createIndexes();
  await runAggregations();

  console.log(" All tasks completed!");
}

main();
