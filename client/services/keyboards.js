const keyboards = [
  {
    name: "regular",
    displayName: "常规",
    rows: [{
      rowId: 1,
      keys: [{
        keyType: "number",
        value: "1",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/numbers/n1.svg"
      }, {
        keyType: "number",
        value: "2",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/numbers/n2.svg"
      }, {
        keyType: "number",
        value: "3",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/numbers/n3.svg"
      }, {
        keyType: "number",
        value: "4",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/numbers/n4.svg"
      }, {
        keyType: "number",
        value: "5",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/numbers/n5.svg"
      }, {
        keyType: "number",
        value: "6",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/numbers/n6.svg"
      }, {
        keyType: "number",
        value: "7",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/numbers/n7.svg"
      }, {
        keyType: "number",
        value: "8",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/numbers/n8.svg"
      }, {
        keyType: "number",
        value: "9",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/numbers/n9.svg"
      }, {
        keyType: "number",
        value: "0",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/numbers/n0.svg"
      }]
    }, {
      rowId: 2,
      keys: [{
        keyType: "alphabet",
        value: "q",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lq.svg",
        capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/uq.svg"
      }, {
        keyType: "alphabet",
        value: "w",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lw.svg",
        capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/uw.svg"
      }, {
        keyType: "alphabet",
        value: "e",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/le.svg",
        capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ue.svg"
      }, {
        keyType: "alphabet",
        value: "r",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lr.svg",
        capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ur.svg"
      }, {
        keyType: "alphabet",
        value: "t",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lt.svg",
        capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ut.svg"
      }, {
        keyType: "alphabet",
        value: "y",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ly.svg",
        capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/uy.svg"
      }, {
        keyType: "alphabet",
        value: "u",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lu.svg",
        capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/uu.svg"
      }, {
        keyType: "alphabet",
        value: "i",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/li.svg",
        capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ui.svg"
      }, {
        keyType: "alphabet",
        value: "o",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lo.svg",
        capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/uo.svg"
      }, {
        keyType: "alphabet",
        value: "p",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lp.svg",
        capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/up.svg"
      }]
    }, {
      rowId: 3,
      keys: [{
        keyType: "placeholder",
        width: "one"
      }, {
        keyType: "alphabet",
        value: "a",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/la.svg",
        capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ua.svg"
      },
      {
        keyType: "alphabet",
        value: "s",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ls.svg",
        capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/us.svg"
      },
      {
        keyType: "alphabet",
        value: "d",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ld.svg",
        capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ud.svg"
      },
      {
        keyType: "alphabet",
        value: "f",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lf.svg",
        capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/uf.svg"
      },
      {
        keyType: "alphabet",
        value: "g",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lg.svg",
        capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ug.svg"
      },
      {
        keyType: "alphabet",
        value: "h",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lh.svg",
        capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/uh.svg"
      },
      {
        keyType: "alphabet",
        value: "j",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lj.svg",
        capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/uj.svg"
      },
      {
        keyType: "alphabet",
        value: "k",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lk.svg",
        capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/uk.svg"
      },
      {
        keyType: "alphabet",
        value: "l",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ll.svg",
        capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ul.svg"
      },
      {
        keyType: "placeholder",
        width: "one"
      }
      ]
    },
    {
      rowId: 4,
      keys: [{
        keyType: "caps",
        name: "caps",
        width: "three"
      }, {
        keyType: "alphabet",
        value: "z",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lz.svg",
        capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/uz.svg"
      }, {
        keyType: "alphabet",
        value: "x",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lx.svg",
        capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ux.svg"
      }, {
        keyType: "alphabet",
        value: "c",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lc.svg",
        capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/uc.svg"
      }, {
        keyType: "alphabet",
        value: "v",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lv.svg",
        capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/uv.svg"
      }, {
        keyType: "alphabet",
        value: "b",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lb.svg",
        capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ub.svg"
      }, {
        keyType: "alphabet",
        value: "n",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ln.svg",
        capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/un.svg"
      }, {
        keyType: "alphabet",
        value: "m",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lm.svg",
        capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/um.svg"
      }, {
        keyType: "del",
        name: "del",
        width: "three"
      }]
    },
    {
      rowId: 5,
      keys: [{
        keyType: "operator",
        value: "+",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/operators/plus.svg"
      }, {
        keyType: "operator",
        value: "-",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/operators/minus.svg"
      }, {
        keyType: "operator",
        value: "\times",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/operators/times.svg"
      }, {
        keyType: "operator",
        value: "\div",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/operators/div.svg"
      }, {
        keyType: "operator",
        value: "/",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/operators/slash.svg"
      }, {
        keyType: "operator",
        value: "=",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/operators/equal.svg"
      }, {
        keyType: "operator",
        value: "(",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/operators/left_round_bracket.svg"
      }, {
        keyType: "operator",
        value: ")",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/operators/right_round_bracket.svg"
      }, {
        keyType: "operator",
        value: ".",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/operators/dot.svg"
      }, {
        keyType: "operator",
        value: "\%",
        width: "two",
        icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/operators/percent.svg"
      }]
    }]
  }, {
    name: "regular",
    displayName: "常规"
  }, {
    name: "regular",
    displayName: "常规",
  }, {
    name: "regular",
    displayName: "常规"
  }, {
    name: "regular",
    displayName: "常规",
  }, {
    name: "regular",
    displayName: "常规"
  }, {
    name: "regular",
    displayName: "常规",
  }, {
    name: "regular",
    displayName: "常规"
  }, {
    name: "regular",
    displayName: "常规",
  }
]

module.exports = keyboards