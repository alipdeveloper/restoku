const assert = require("assert");

Feature("Liking Resto");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("like satu resto", async ({ I }) => {
  I.seeElement("#resto-list");
  I.amOnPage("/");
  I.waitForElement("#resto-item");
  I.seeElement("#resto-title a");
  const firstRestoCard = locate("#resto-title a").first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);
  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.amOnPage("/#/favorite");
  I.seeElement("#resto-item");
  const likedCardTitle = await I.grabTextFrom("#resto-title a");
  assert.strictEqual(firstRestoCardTitle, likedCardTitle);
});

Scenario("unlike satu resto", async ({ I }) => {
  I.amOnPage("/");
  I.waitForElement("#resto-item");
  I.seeElement("#resto-title a");
  const firstRestoCard = locate("#resto-title a").first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);
  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.amOnPage("/#/favorite");
  I.seeElement("#resto-title a");
  const likedCardTitle = await I.grabTextFrom("#resto-title a");
  assert.strictEqual(firstRestoCardTitle, likedCardTitle);
  I.click(likedCardTitle);
  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.amOnPage("/#/favorite");
});
