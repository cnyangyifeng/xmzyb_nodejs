const keyboards = [{
  name: "regular",
  displayName: "常规",
  rows: [{
    rowId: 1,
    keys: [{
      keyType: "chinese",
      name: "中",
      width: "two"
    }, {
      keyType: "operator",
      value: "+",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/operators/foremost/plus.svg"
    }, {
      keyType: "operator",
      value: "-",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/operators/foremost/minus.svg"
    }, {
      keyType: "operator",
      value: "=",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/operators/foremost/equal.svg"
    }, {
      keyType: "operator",
      value: "(",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/operators/foremost/lparen.svg"
    }, {
      keyType: "operator",
      value: ")",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/operators/foremost/rparen.svg"
    }, {
      keyType: "command",
      value: "^",
      width: "two"
    }, {
      keyType: "command",
      value: "_",
      width: "two"
    }, {
      keyType: "command",
      name: "lbrace",
      value: "{",
      width: "two"
    }, {
      keyType: "command",
      name: "rbrace",
      value: "}",
      width: "two"
    }]
  }, {
    rowId: 2,
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
    rowId: 3,
    keys: [{
      keyType: "letter",
      value: "q",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lq.svg",
      capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/uq.svg"
    }, {
      keyType: "letter",
      value: "w",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lw.svg",
      capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/uw.svg"
    }, {
      keyType: "letter",
      value: "e",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/le.svg",
      capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ue.svg"
    }, {
      keyType: "letter",
      value: "r",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lr.svg",
      capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ur.svg"
    }, {
      keyType: "letter",
      value: "t",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lt.svg",
      capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ut.svg"
    }, {
      keyType: "letter",
      value: "y",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ly.svg",
      capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/uy.svg"
    }, {
      keyType: "letter",
      value: "u",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lu.svg",
      capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/uu.svg"
    }, {
      keyType: "letter",
      value: "i",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/li.svg",
      capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ui.svg"
    }, {
      keyType: "letter",
      value: "o",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lo.svg",
      capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/uo.svg"
    }, {
      keyType: "letter",
      value: "p",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lp.svg",
      capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/up.svg"
    }]
  }, {
    rowId: 4,
    keys: [{
      keyType: "placeholder",
      width: "one"
    }, {
      keyType: "letter",
      value: "a",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/la.svg",
      capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ua.svg"
    }, {
      keyType: "letter",
      value: "s",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ls.svg",
      capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/us.svg"
    }, {
      keyType: "letter",
      value: "d",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ld.svg",
      capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ud.svg"
    }, {
      keyType: "letter",
      value: "f",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lf.svg",
      capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/uf.svg"
    }, {
      keyType: "letter",
      value: "g",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lg.svg",
      capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ug.svg"
    }, {
      keyType: "letter",
      value: "h",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lh.svg",
      capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/uh.svg"
    }, {
      keyType: "letter",
      value: "j",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lj.svg",
      capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/uj.svg"
    }, {
      keyType: "letter",
      value: "k",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lk.svg",
      capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/uk.svg"
    }, {
      keyType: "letter",
      value: "l",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ll.svg",
      capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ul.svg"
    }, {
      keyType: "placeholder",
      width: "one"
    }]
  }, {
    rowId: 5,
    keys: [{
      keyType: "caps",
      name: "caps",
      width: "three"
    }, {
      keyType: "letter",
      value: "z",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lz.svg",
      capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/uz.svg"
    }, {
      keyType: "letter",
      value: "x",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lx.svg",
      capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ux.svg"
    }, {
      keyType: "letter",
      value: "c",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lc.svg",
      capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/uc.svg"
    }, {
      keyType: "letter",
      value: "v",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lv.svg",
      capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/uv.svg"
    }, {
      keyType: "letter",
      value: "b",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lb.svg",
      capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ub.svg"
    }, {
      keyType: "letter",
      value: "n",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/ln.svg",
      capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/un.svg"
    }, {
      keyType: "letter",
      value: "m",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/lm.svg",
      capsIcon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/letters/um.svg"
    }, {
      keyType: "command",
      name: "backslash",
      value: "\\",
      width: "three"
    }]
  }]
}, {
  name: "greeks",
  displayName: "希腊字母",
  rows: [{
    rowId: 1,
    keys: [{
      keyType: "greek",
      value: "\\alpha",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/alpha.svg"
    }, {
      keyType: "greek",
      value: "\\beta",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/beta.svg"
    }, {
      keyType: "greek",
      value: "\\gamma",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/gamma.svg"
    }, {
      keyType: "greek",
      value: "\\delta",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/delta.svg"
    }, {
      keyType: "greek",
      value: "\\epsilon",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/epsilon.svg"
    }, {
      keyType: "greek",
      value: "\\varepsilon",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/varepsilon.svg"
    }, {
      keyType: "greek",
      value: "\\zeta",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/zeta.svg"
    }, {
      keyType: "greek",
      value: "\\eta",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/eta.svg"
    }, {
      keyType: "greek",
      value: "\\theta",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/theta.svg"
    }, {
      keyType: "greek",
      value: "\\vartheta",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/vartheta.svg"
    }]
  }, {
    rowId: 2,
    keys: [{
      keyType: "greek",
      value: "\\iota",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/iota.svg"
    }, {
      keyType: "greek",
      value: "\\kappa",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/kappa.svg"
    }, {
      keyType: "greek",
      value: "\\lambda",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/lambda.svg"
    }, {
      keyType: "greek",
      value: "\\mu",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/mu.svg"
    }, {
      keyType: "greek",
      value: "\\nu",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/nu.svg"
    }, {
      keyType: "greek",
      value: "\\xi",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/xi.svg"
    }, {
      keyType: "greek",
      value: "o",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/omicron.svg"
    }, {
      keyType: "greek",
      value: "\\pi",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/pi.svg"
    }, {
      keyType: "greek",
      value: "\\varpi",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/varpi.svg"
    }, {
      keyType: "greek",
      value: "\\rho",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/rho.svg"
    }]
  }, {
    rowId: 3,
    keys: [{
      keyType: "greek",
      value: "\\varrho",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/varrho.svg"
    }, {
      keyType: "greek",
      value: "\\sigma",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/sigma.svg"
    }, {
      keyType: "greek",
      value: "\\varsigma",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/varsigma.svg"
    }, {
      keyType: "greek",
      value: "\\tau",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/tau.svg"
    }, {
      keyType: "greek",
      value: "\\upsilon",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/upsilon.svg"
    }, {
      keyType: "greek",
      value: "\\phi",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/phi.svg"
    }, {
      keyType: "greek",
      value: "\\varphi",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/varphi.svg"
    }, {
      keyType: "greek",
      value: "\\chi",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/chi.svg"
    }, {
      keyType: "greek",
      value: "\\psi",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/psi.svg"
    }, {
      keyType: "greek",
      value: "\\omega",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/omega.svg"
    }]
  }, {
    rowId: 4,
    keys: [{
      keyType: "greek",
      value: "\\Gamma",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/ugamma.svg"
    }, {
      keyType: "greek",
      value: "\\Delta",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/udelta.svg"
    }, {
      keyType: "greek",
      value: "\\Theta",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/utheta.svg"
    }, {
      keyType: "greek",
      value: "\\Lambda",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/ulambda.svg"
    }, {
      keyType: "greek",
      value: "\\Xi",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/uxi.svg"
    }, {
      keyType: "greek",
      value: "O",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/uomicron.svg"
    }, {
      keyType: "greek",
      value: "\\Pi",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/upi.svg"
    }, {
      keyType: "greek",
      value: "\\Sigma",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/usigma.svg"
    }, {
      keyType: "greek",
      value: "\\Upsilon",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/uupsilon.svg"
    }, {
      keyType: "greek",
      value: "\\Phi",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/uphi.svg"
    }]
  }, {
    rowId: 5,
    keys: [{
      keyType: "greek",
      value: "\\Psi",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/upsi.svg"
    }, {
      keyType: "greek",
      value: "\\Omega",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/uomega.svg"
    }, {
      keyType: "placeholder",
      width: "three"
    }, {
      keyType: "placeholder",
      width: "two"
    }, {
      keyType: "placeholder",
      width: "two"
    }, {
      keyType: "placeholder",
      width: "two"
    }, {
      keyType: "placeholder",
      width: "two"
    }, {
      keyType: "placeholder",
      width: "two"
    }, {
      keyType: "placeholder",
      width: "three"
    }]
  }]
}, {
  name: "set_theory",
  displayName: "集合论",
  rows: [{
    rowId: 1,
    keys: [{
      keyType: "operator",
      value: "\\varnothing",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/varnothing.svg"
    }, {
      keyType: "operator",
      value: "\\{",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/lbrace.svg"
    }, {
      keyType: "operator",
      value: "\\}",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/rbrace.svg"
    }, {
      keyType: "operator",
      value: "[",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/lbrack.svg"
    }, {
      keyType: "operator",
      value: "]",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/rbrack.svg"
    }, {
      keyType: "operator",
      value: "(",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/lparen.svg"
    }, {
      keyType: "operator",
      value: ")",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/rparen.svg"
    }, {
      keyType: "operator",
      value: "\\mid",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/mid.svg"
    }, {
      keyType: "operator",
      value: ",",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/comma.svg"
    }, {
      keyType: "operator",
      value: "\\cdots",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/cdots.svg"
    }]
  }, {
    rowId: 2,
    keys: [{
      keyType: "operator",
      value: "\\forall",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/forall.svg"
    }, {
      keyType: "operator",
      value: "\\exists",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/exists.svg"
    }, {
      keyType: "operator",
      value: "\\Rightarrow",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/urightarrow.svg"
    }, {
      keyType: "operator",
      value: "\\Leftrightarrow",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/uleftrightarrow.svg"
    }, {
      keyType: "operator",
      value: "\\in",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/in.svg"
    }, {
      keyType: "operator",
      value: "\\ni",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/ni.svg"
    }, {
      keyType: "operator",
      value: "\\notin",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/notin.svg"
    }, {
      keyType: "operator",
      value: "\\not\\ni",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/not_ni.svg"
    }, {
      keyType: "operator",
      value: "\\cup",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/cup.svg"
    }, {
      keyType: "operator",
      value: "\\cap",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/cap.svg"
    }]
  }, {
    rowId: 3,
    keys: [{
      keyType: "operator",
      value: "\\because",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/because.svg"
    }, {
      keyType: "operator",
      value: "\\therefore",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/therefore.svg"
    }, {
      keyType: "operator",
      value: "<",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/less.svg"
    }, {
      keyType: "operator",
      value: ">",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/gtr.svg"
    }, {
      keyType: "operator",
      value: "\\leqslant",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/leqslant.svg"
    }, {
      keyType: "operator",
      value: "\\geqslant",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/geqslant.svg"
    }, {
      keyType: "operator",
      value: "\\neq",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/neq.svg"
    }, {
      keyType: "operator",
      value: "=",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/equal.svg"
    }, {
      keyType: "operator",
      value: "\\complement",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/complement.svg"
    }, {
      keyType: "placeholder",
      width: "two"
    }]
  }, {
    rowId: 4,
    keys: [{
      keyType: "operator",
      value: "\\mathbb{N}",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/natural_numbers.svg"
    }, {
      keyType: "operator",
      value: "\\mathbb{Z}",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/integers.svg"
    }, {
      keyType: "operator",
      value: "\\mathbb{Q}",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/rational_numbers.svg"
    }, {
      keyType: "operator",
      value: "\\mathbb{R}",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/real_numbers.svg"
    }, {
      keyType: "operator",
      value: "\\mathbb{C}",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/set_theory/complex_numbers.svg"
    }, {
      keyType: "placeholder",
      width: "two"
    }, {
      keyType: "placeholder",
      width: "two"
    }, {
      keyType: "placeholder",
      width: "two"
    }, {
      keyType: "placeholder",
      width: "two"
    }, {
      keyType: "placeholder",
      width: "two"
    }]
  }]
}, {
  name: "arithmetic and algebra",
  displayName: "算数与代数",
  rows: [{
    rowId: 1,
    keys: [{
      keyType: "greek",
      value: "\\alpha",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/alpha.svg"
    }, {
      keyType: "greek",
      value: "\\beta",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/beta.svg"
    }, {
      keyType: "greek",
      value: "\\gamma",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/gamma.svg"
    }, {
      keyType: "greek",
      value: "\\delta",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/delta.svg"
    }, {
      keyType: "greek",
      value: "\\epsilon",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/epsilon.svg"
    }, {
      keyType: "greek",
      value: "\\varepsilon",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/varepsilon.svg"
    }, {
      keyType: "greek",
      value: "\\zeta",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/zeta.svg"
    }, {
      keyType: "greek",
      value: "\\eta",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/eta.svg"
    }, {
      keyType: "greek",
      value: "\\theta",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/theta.svg"
    }, {
      keyType: "greek",
      value: "\\vartheta",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/vartheta.svg"
    }]
  }]
}, {
  name: "calculus",
  displayName: "微积分"
}, {
  name: "geometry and linear algebra",
  displayName: "几何与线性代数"
}, {
  name: "stochastics",
  displayName: "随机数学"
}, {
  name: "logic",
  displayName: "数理逻辑"
}, {
  name: "feedback",
  displayName: "联系作者",
  rows: [{
    rowId: 1,
    keys: [{
      keyType: "placeholder",
      width: "two"
    }]
  }, {
    rowId: 2,
    keys: [{
      keyType: "placeholder",
      width: "one"
    }, {
      keyType: "navigator",
      name: "问题反馈",
      width: "two"
    }, {
      keyType: "placeholder",
      width: "one"
    }]
  }, {
    rowId: 3,
    keys: [{
      keyType: "placeholder",
      width: "two"
    }]
  }, {
    rowId: 4,
    keys: [{
      keyType: "placeholder",
      width: "one"
    }, {
      keyType: "navigator",
      name: "打赏作者 ￥9.9",
      width: "two"
    }, {
      keyType: "placeholder",
      width: "one"
    }]
  }, {
    rowId: 5,
    keys: [{
      keyType: "placeholder",
      width: "two"
    }]
  }]
}]

module.exports = keyboards