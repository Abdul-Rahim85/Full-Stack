function normalizeUnits(manifest) {
  return {
    ...manifest,
    weight:
      manifest.unit === "lb"
        ? manifest.weight * 0.45
        : manifest.weight,
    unit: "kg"
  };
}

function validateManifest(manifest) {
  const result = {};

  // containerId
  if (!("containerId" in manifest)) {
    result.containerId = "Missing";
  } else if (
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    result.containerId = "Invalid";
  }

  // destination
  if (!("destination" in manifest)) {
    result.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    result.destination = "Invalid";
  }

  // weight
  if (!("weight" in manifest)) {
    result.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    result.weight = "Invalid";
  }

  // unit
  if (!("unit" in manifest)) {
    result.unit = "Missing";
  } else if (
    manifest.unit !== "kg" &&
    manifest.unit !== "lb"
  ) {
    result.unit = "Invalid";
  }

  // hazmat
  if (!("hazmat" in manifest)) {
    result.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    result.hazmat = "Invalid";
  }

  return result;
}

function processManifest(manifest) {
  const validation = validateManifest(manifest);

  if (Object.keys(validation).length === 0) {
    const normalized = normalizeUnits(manifest);

    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validation);
  }
}