const { deterministicPartitionKey } = require("./dpk");
const INPUT_KEY = 123;
const MAX_PARTITION_KEY_LENGTH = 256;

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(typeof trivialKey).toBe("string");
    expect(trivialKey).toBe("0");
  });

  it("Returns a string when given a object of partitionKey", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: INPUT_KEY });
    expect(typeof trivialKey).toBe("string");
    expect(trivialKey).toEqual(`${INPUT_KEY}`);
  });

  it("Returns hashed key when given input but no partitionKey", () => {
    const trivialKey = deterministicPartitionKey({ INPUT_KEY });
    expect(typeof trivialKey).toBe("string");
    expect(trivialKey.length).toBeLessThan(MAX_PARTITION_KEY_LENGTH);
  });

});
