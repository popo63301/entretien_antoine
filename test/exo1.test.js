import searchWord from "../exos/exo1";

test("search word", () => {
  const sentence =
    "Une planète est un corps céleste qui gravite autour d'une étoile.";

  expect(searchWord(sentence, "corps")).toBe(19);
});

test("search word 2", () => {
  const sentence =
    "Une planète est un corps céleste qui gravite autour d'une étoile.";

  expect(searchWord(sentence, "est")).toBe(12);
});

test("search word 3", () => {
  const sentence =
    "Une planète est un corps céleste qui gravite autour d'une étoile.";

  expect(searchWord(sentence, "ahah")).toBe(null);
});
