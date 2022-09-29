const crypto = require("crypto");
const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

exports.deterministicPartitionKey = (event) => {
  if (event) {
    return event.partitionKey ? convertToString(event.partitionKey) : getHashedKey(JSON.stringify(event));
  } else {
    return TRIVIAL_PARTITION_KEY;
  }
};

const convertToString = (input) => {
  return typeof input === 'string' ? input : JSON.stringify(input);
}

const getHashedKey = (data) => {
  let key = crypto.createHash("sha3-512").update(data).digest("hex");
  return key.length > MAX_PARTITION_KEY_LENGTH ? getHashedKey(key) : key;
}