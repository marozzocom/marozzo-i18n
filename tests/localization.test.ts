import localization from "../src/Localization"

const keys = {
  common: {
    hello: "Hello",
    placeholder: "This {0} has {1} placeholders"
  },
  custom: {
    first: {
      second: {
        key1: "Value 1",
        key2: "Value 2"
      },
      key: "Custom value"
    }
  }
}

const { set, fill, get, getNamespace } = localization

beforeAll(() => {
  set(keys)
})

test("reads common namespace by default", () => {
  const namespace = getNamespace()
  expect(namespace.hello).toBe("Hello")
})

test("reads namespace", () => {
  const namespace = getNamespace("custom.first.second")
  expect(namespace.key2).toBe("Value 2")
})

test("reads key", () => {
  const label = get("custom.first.key")
  expect(label).toBe("Custom value")
})

test("fills placeholders", () => {
  const label = fill("label", "2")(get("common.placeholder"))
  expect(label).toBe("This label has 2 placeholders")
})