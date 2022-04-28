import R from "ramda";

describe("0.spec", () => {
  it("should", () => {
    const res = R.useWith(Math.pow, [R.dec, R.inc])(3, 4);
    const res1 = R.converge(Math.pow, [R.dec, R.inc])(2);
    expect(res).toBe(32);
  });

  it("should pipe", () => {
    const f = R.pipe(Math.pow, R.negate, R.inc);
    const res = f(3, 4);
    expect(res).toBe(-3 * 3 * 3 * 3 + 1);

    // 有一个数据库查询结果，找到是父节点的索引数组
    var dataList = [{ id: 1 }, { id: 2, pId: 1 }, { id: 3, pId: 2 }, { id: 4 }];

    var pidCollection = R.compose(
      R.map(R.prop("id")),
      // 调试性质的代码 👇🏻
      // (v) => {
      //   console.log(v);
      //   return v;
      // },
      R.filter(R.compose(R.not, R.propIs(Number, "pId")))
    )(dataList);

    // 执行顺序：filter(propIs,not) -> map(prop)
    expect(pidCollection).toEqual([1, 4]);
  });
});
