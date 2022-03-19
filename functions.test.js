const concat = require(`./function`);

test(`name`, () => {
  expect(concat("user", "name")).toBe("username");
});