// 1. Define missing mock data so the script doesn't crash
const rawData = [
  "SKU123|Organic Apples|50|2026-12-31|produce",
  "SKU456|Canned Beans|0|2028-01-01|pantry-dry", // Will be discarded (qty 0)
  "SKU789|Almond Milk|20|2026-08-15|fridge",     // Will be donated (not in pantry)
  "SKU123|Organic Apples|10|2026-12-31|produce"  // Duplicate SKU, will be skipped by parseShipment
];

const pantry = [
  { sku: "SKU123", name: "Organic Apples", qty: 5, expires: "2026-06-01", zone: "produce" },
  { sku: "SKU456", name: "Canned Beans", qty: 12, expires: "2027-01-01", zone: "pantry-dry" }
];

function parseShipment(rawData) {
  const seen = new Set();
  const result = [];

  for (const item of rawData) {
    const [sku, name, qty, expires, zone = "general"] = item.split("|");

    if (seen.has(sku)) continue;
    seen.add(sku);

    result.push({
      sku,
      name,
      qty: Number(qty),
      expires,
      zone
    });
  }

  return result;
}

function planRestock(pantry, shipment) {
  const actions = [];
  
  // Optimization: Create a Set of existing SKUs for O(1) lightning-fast lookups
  const pantrySkus = new Set(pantry.map(p => p.sku));

  for (const item of shipment) {
    if (item.qty <= 0) {
      actions.push({ type: "discard", item });
      continue;
    }

    // O(1) check replacing the slow .some() loop
    if (pantrySkus.has(item.sku)) {
      actions.push({ type: "restock", item });
    } else {
      actions.push({ type: "donate", item });
    }
  }

  return actions;
}

function groupByZone(actions) {
  const grouped = {};

  for (const action of actions) {
    const zone = action.item.zone;

    if (!grouped[zone]) {
      grouped[zone] = [];
    }

    grouped[zone].push(action);
  }

  return grouped;
}

// Modern, cleaner way to deep clone simple array of objects
function clonePantry(pantry) {
  return pantry.map(item => ({ ...item }));
}

// Execution Pipeline
const parsedShipment = parseShipment(rawData);
const pantryCopy = clonePantry(pantry);
const actions = planRestock(pantryCopy, parsedShipment);
const groupedResult = groupByZone(actions);

console.log(groupedResult);