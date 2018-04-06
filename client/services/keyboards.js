const keyboards = [{
  name: "regular",
  displayName: "键盘",
  rows: [{
    rowId: 1,
    keys: [{
      keyType: "command",
      name: "&",
      value: "&",
      width: "two"
    }, {
      keyType: "command",
      name: "+",
      value: "+",
      width: "two"
    }, {
      keyType: "command",
      name: "-",
      value: "-",
      width: "two"
    }, {
      keyType: "command",
      name: "=",
      value: "=",
      width: "two"
    }, {
      keyType: "command",
      name: "^",
      value: "^",
      width: "two"
    }, {
      keyType: "command",
      name: "_",
      value: "_",
      width: "two"
    }, {
      keyType: "command",
      name: "{",
      value: "{",
      width: "two"
    }, {
      keyType: "command",
      name: "}",
      value: "}",
      width: "two"
    }, {
      keyType: "command",
      name: "\\",
      value: "\\",
      width: "two"
    }, {
      keyType: "command",
      name: "del",
      value: "del",
      width: "two"
    }]
  }, {
    rowId: 2,
    keys: [{
      keyType: "number",
      value: "1",
      width: "two",
      icon: "/assets/symbols/numbers/n1.svg"
    }, {
      keyType: "number",
      value: "2",
      width: "two",
      icon: "/assets/symbols/numbers/n2.svg"
    }, {
      keyType: "number",
      value: "3",
      width: "two",
      icon: "/assets/symbols/numbers/n3.svg"
    }, {
      keyType: "number",
      value: "4",
      width: "two",
      icon: "/assets/symbols/numbers/n4.svg"
    }, {
      keyType: "number",
      value: "5",
      width: "two",
      icon: "/assets/symbols/numbers/n5.svg"
    }, {
      keyType: "number",
      value: "6",
      width: "two",
      icon: "/assets/symbols/numbers/n6.svg"
    }, {
      keyType: "number",
      value: "7",
      width: "two",
      icon: "/assets/symbols/numbers/n7.svg"
    }, {
      keyType: "number",
      value: "8",
      width: "two",
      icon: "/assets/symbols/numbers/n8.svg"
    }, {
      keyType: "number",
      value: "9",
      width: "two",
      icon: "/assets/symbols/numbers/n9.svg"
    }, {
      keyType: "number",
      value: "0",
      width: "two",
      icon: "/assets/symbols/numbers/n0.svg"
    }]
  }, {
    rowId: 3,
    keys: [{
      keyType: "letter",
      value: "q",
      width: "two",
      icon: "/assets/symbols/letters/lq.svg",
      capsIcon: "/assets/symbols/letters/uq.svg"
    }, {
      keyType: "letter",
      value: "w",
      width: "two",
      icon: "/assets/symbols/letters/lw.svg",
      capsIcon: "/assets/symbols/letters/uw.svg"
    }, {
      keyType: "letter",
      value: "e",
      width: "two",
      icon: "/assets/symbols/letters/le.svg",
      capsIcon: "/assets/symbols/letters/ue.svg"
    }, {
      keyType: "letter",
      value: "r",
      width: "two",
      icon: "/assets/symbols/letters/lr.svg",
      capsIcon: "/assets/symbols/letters/ur.svg"
    }, {
      keyType: "letter",
      value: "t",
      width: "two",
      icon: "/assets/symbols/letters/lt.svg",
      capsIcon: "/assets/symbols/letters/ut.svg"
    }, {
      keyType: "letter",
      value: "y",
      width: "two",
      icon: "/assets/symbols/letters/ly.svg",
      capsIcon: "/assets/symbols/letters/uy.svg"
    }, {
      keyType: "letter",
      value: "u",
      width: "two",
      icon: "/assets/symbols/letters/lu.svg",
      capsIcon: "/assets/symbols/letters/uu.svg"
    }, {
      keyType: "letter",
      value: "i",
      width: "two",
      icon: "/assets/symbols/letters/li.svg",
      capsIcon: "/assets/symbols/letters/ui.svg"
    }, {
      keyType: "letter",
      value: "o",
      width: "two",
      icon: "/assets/symbols/letters/lo.svg",
      capsIcon: "/assets/symbols/letters/uo.svg"
    }, {
      keyType: "letter",
      value: "p",
      width: "two",
      icon: "/assets/symbols/letters/lp.svg",
      capsIcon: "/assets/symbols/letters/up.svg"
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
      icon: "/assets/symbols/letters/la.svg",
      capsIcon: "/assets/symbols/letters/ua.svg"
    }, {
      keyType: "letter",
      value: "s",
      width: "two",
      icon: "/assets/symbols/letters/ls.svg",
      capsIcon: "/assets/symbols/letters/us.svg"
    }, {
      keyType: "letter",
      value: "d",
      width: "two",
      icon: "/assets/symbols/letters/ld.svg",
      capsIcon: "/assets/symbols/letters/ud.svg"
    }, {
      keyType: "letter",
      value: "f",
      width: "two",
      icon: "/assets/symbols/letters/lf.svg",
      capsIcon: "/assets/symbols/letters/uf.svg"
    }, {
      keyType: "letter",
      value: "g",
      width: "two",
      icon: "/assets/symbols/letters/lg.svg",
      capsIcon: "/assets/symbols/letters/ug.svg"
    }, {
      keyType: "letter",
      value: "h",
      width: "two",
      icon: "/assets/symbols/letters/lh.svg",
      capsIcon: "/assets/symbols/letters/uh.svg"
    }, {
      keyType: "letter",
      value: "j",
      width: "two",
      icon: "/assets/symbols/letters/lj.svg",
      capsIcon: "/assets/symbols/letters/uj.svg"
    }, {
      keyType: "letter",
      value: "k",
      width: "two",
      icon: "/assets/symbols/letters/lk.svg",
      capsIcon: "/assets/symbols/letters/uk.svg"
    }, {
      keyType: "letter",
      value: "l",
      width: "two",
      icon: "/assets/symbols/letters/ll.svg",
      capsIcon: "/assets/symbols/letters/ul.svg"
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
      icon: "/assets/symbols/letters/lz.svg",
      capsIcon: "/assets/symbols/letters/uz.svg"
    }, {
      keyType: "letter",
      value: "x",
      width: "two",
      icon: "/assets/symbols/letters/lx.svg",
      capsIcon: "/assets/symbols/letters/ux.svg"
    }, {
      keyType: "letter",
      value: "c",
      width: "two",
      icon: "/assets/symbols/letters/lc.svg",
      capsIcon: "/assets/symbols/letters/uc.svg"
    }, {
      keyType: "letter",
      value: "v",
      width: "two",
      icon: "/assets/symbols/letters/lv.svg",
      capsIcon: "/assets/symbols/letters/uv.svg"
    }, {
      keyType: "letter",
      value: "b",
      width: "two",
      icon: "/assets/symbols/letters/lb.svg",
      capsIcon: "/assets/symbols/letters/ub.svg"
    }, {
      keyType: "letter",
      value: "n",
      width: "two",
      icon: "/assets/symbols/letters/ln.svg",
      capsIcon: "/assets/symbols/letters/un.svg"
    }, {
      keyType: "letter",
      value: "m",
      width: "two",
      icon: "/assets/symbols/letters/lm.svg",
      capsIcon: "/assets/symbols/letters/um.svg"
    }, {
      keyType: "chinese",
      name: "中文",
      width: "three"
    }]
  }]
}, {
  name: "popular",
  displayName: "常用符号",
  rows: [{
    rowId: 1,
    keys: [{
      keyType: "operator",
      value: "+",
      width: "two",
      icon: "/assets/symbols/popular/plus.svg"
    }, {
      keyType: "operator",
      value: "-",
      width: "two",
      icon: "/assets/symbols/popular/minus.svg"
    }, {
      keyType: "operator",
      value: "\\times$ ",
      width: "two",
      icon: "/assets/symbols/popular/times.svg"
    }, {
      keyType: "operator",
      value: "\\div$ ",
      width: "two",
      icon: "/assets/symbols/popular/div.svg"
    }, {
      keyType: "operator",
      value: "{@brown$a@grey$}@brown$\\cdot${@brown$b@grey$}@brown",
      width: "two",
      icon: "/assets/symbols/popular/cdot.svg"
    }, {
      keyType: "operator",
      value: "\\cfrac${@brown$a@grey$}@brown${@brown$b@grey$}@brown",
      width: "two",
      icon: "/assets/symbols/popular/cfrac.svg"
    }, {
      keyType: "operator",
      value: "*",
      width: "two",
      icon: "/assets/symbols/popular/ast.svg"
    }, {
      keyType: "operator",
      value: "/",
      width: "two",
      icon: "/assets/symbols/popular/slash.svg"
    }, {
      keyType: "operator",
      value: "\\%",
      width: "two",
      icon: "/assets/symbols/popular/percent.svg"
    }, {
      keyType: "command",
      name: "del",
      value: "del",
      width: "two"
    }]
  }, {
    rowId: 2,
    keys: [{
      keyType: "operator",
      value: "?",
      width: "two",
      icon: "/assets/symbols/popular/question.svg"
    }, {
      keyType: "operator",
      value: "!",
      width: "two",
      icon: "/assets/symbols/popular/exclamation.svg"
    }, {
      keyType: "operator",
      value: ";",
      width: "two",
      icon: "/assets/symbols/popular/semicolon.svg"
    }, {
      keyType: "operator",
      value: "\\colon$ ",
      width: "two",
      icon: "/assets/symbols/popular/colon.svg"
    }, {
      keyType: "operator",
      value: ",",
      width: "two",
      icon: "/assets/symbols/popular/comma.svg"
    }, {
      keyType: "operator",
      value: ".",
      width: "two",
      icon: "/assets/symbols/popular/period.svg"
    }, {
      keyType: "operator",
      value: "^\\circ$ ",
      width: "two",
      icon: "/assets/symbols/popular/circ.svg"
    }, {
      keyType: "operator",
      value: "\'",
      width: "two",
      icon: "/assets/symbols/popular/prime.svg"
    }, {
      keyType: "operator",
      value: "\\mid$ ",
      width: "two",
      icon: "/assets/symbols/popular/mid.svg"
    }, {
      keyType: "operator",
      value: "\\infty$ ",
      width: "two",
      icon: "/assets/symbols/popular/infty.svg"
    }]
  }, {
    rowId: 3,
    keys: [{
      keyType: "operator",
      value: "{@brown$x@grey$}@brown$^${@brown$a@grey$}@brown",
      width: "two",
      icon: "/assets/symbols/popular/superscript.svg"
    }, {
      keyType: "operator",
      value: "{@brown$x@grey$}@brown$_${@brown$a@grey$}@brown",
      width: "two",
      icon: "/assets/symbols/popular/subscript.svg"
    }, {
      keyType: "operator",
      value: "\\sqrt${@brown$x@grey$}@brown",
      width: "two",
      icon: "/assets/symbols/popular/sqrt.svg"
    }, {
      keyType: "operator",
      value: "\\sqrt$[@brown$n@grey$]@brown${@brown$x@grey$}@brown",
      width: "two",
      icon: "/assets/symbols/popular/sqrt_n.svg"
    }, {
      keyType: "operator",
      value: "(",
      width: "two",
      icon: "/assets/symbols/popular/lparen.svg"
    }, {
      keyType: "operator",
      value: ")",
      width: "two",
      icon: "/assets/symbols/popular/rparen.svg"
    }, {
      keyType: "operator",
      value: "[",
      width: "two",
      icon: "/assets/symbols/popular/lbrack.svg"
    }, {
      keyType: "operator",
      value: "]",
      width: "two",
      icon: "/assets/symbols/popular/rbrack.svg"
    }, {
      keyType: "operator",
      value: "\\{",
      width: "two",
      icon: "/assets/symbols/popular/lbrace.svg"
    }, {
      keyType: "operator",
      value: "\\}",
      width: "two",
      icon: "/assets/symbols/popular/rbrace.svg"
    }]
  }, {
    rowId: 4,
    keys: [{
      keyType: "operator",
      value: "<",
      width: "two",
      icon: "/assets/symbols/popular/less.svg"
    }, {
      keyType: "operator",
      value: "\\leqslant$ ",
      width: "two",
      icon: "/assets/symbols/popular/leqslant.svg"
    }, {
      keyType: "operator",
      value: ">",
      width: "two",
      icon: "/assets/symbols/popular/gtr.svg"
    }, {
      keyType: "operator",
      value: "\\geqslant$ ",
      width: "two",
      icon: "/assets/symbols/popular/geqslant.svg"
    }, {
      keyType: "operator",
      value: "\\neq$ ",
      width: "two",
      icon: "/assets/symbols/popular/neq.svg"
    }, {
      keyType: "operator",
      value: "=",
      width: "two",
      icon: "/assets/symbols/popular/equal.svg"
    }, {
      keyType: "operator",
      value: "\\approx$ ",
      width: "two",
      icon: "/assets/symbols/popular/approx.svg"
    }, {
      keyType: "operator",
      value: "\\sim$ ",
      width: "two",
      icon: "/assets/symbols/popular/sim.svg"
    }, {
      keyType: "operator",
      value: "\\cong$ ",
      width: "two",
      icon: "/assets/symbols/popular/cong.svg"
    }, {
      keyType: "operator",
      value: "\\propto$ ",
      width: "two",
      icon: "/assets/symbols/popular/propto.svg"
    }]
  }, {
    rowId: 5,
    keys: [{
      keyType: "operator",
      value: "\\because$ ",
      width: "two",
      icon: "/assets/symbols/popular/because.svg"
    }, {
      keyType: "operator",
      value: "\\therefore$ ",
      width: "two",
      icon: "/assets/symbols/popular/therefore.svg"
    }, {
      keyType: "operator",
      value: "\\Rightarrow$ ",
      width: "two",
      icon: "/assets/symbols/popular/urightarrow.svg"
    }, {
      keyType: "operator",
      value: "\\Leftrightarrow$ ",
      width: "two",
      icon: "/assets/symbols/popular/uleftrightarrow.svg"
    }, {
      keyType: "operator",
      value: "\\overrightarrow${$AB@grey$}",
      width: "two",
      icon: "/assets/symbols/popular/overrightarrow.svg"
    }, {
      keyType: "operator",
      value: "\\log$_${@brown$a@grey$}@brown${@brown$X@grey$}@brown",
      width: "two",
      icon: "/assets/symbols/popular/log.svg"
    }, {
      keyType: "operator",
      value: "\\lim$_${@brown$\\Delta x \\to 0@grey$}@brown",
      width: "two",
      icon: "/assets/symbols/popular/lim.svg"
    }, {
      keyType: "operator",
      value: "\\sum$_${@brown$i=1@grey$}@brown$^${@brown$n@grey$}@brown",
      width: "two",
      icon: "/assets/symbols/popular/sum.svg"
    }, {
      keyType: "operator",
      value: "\\prod$_${@brown$i=1@grey$}@brown$^${@brown$n@grey$}@brown",
      width: "two",
      icon: "/assets/symbols/popular/prod.svg"
    }, {
      keyType: "operator",
      value: "\\int$_${@brown$a@grey$}@brown$^${@brown$b@grey$}@brown",
      width: "two",
      icon: "/assets/symbols/popular/int.svg"
    }]
  }]
}, {
  name: "greeks",
  displayName: "希腊字母",
  rows: [{
    rowId: 1,
    keys: [{
      keyType: "greek",
      value: "\\alpha$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/alpha.svg"
    }, {
      keyType: "greek",
      value: "\\beta$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/beta.svg"
    }, {
      keyType: "greek",
      value: "\\gamma$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/gamma.svg"
    }, {
      keyType: "greek",
      value: "\\delta$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/delta.svg"
    }, {
      keyType: "greek",
      value: "\\epsilon$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/epsilon.svg"
    }, {
      keyType: "greek",
      value: "\\varepsilon$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/varepsilon.svg"
    }, {
      keyType: "greek",
      value: "\\zeta$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/zeta.svg"
    }, {
      keyType: "greek",
      value: "\\eta$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/eta.svg"
    }, {
      keyType: "greek",
      value: "\\theta$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/theta.svg"
    }, {
      keyType: "command",
      name: "del",
      value: "del",
      width: "two"
    }]
  }, {
    rowId: 2,
    keys: [{
      keyType: "greek",
      value: "\\vartheta$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/vartheta.svg"
    }, {
      keyType: "greek",
      value: "\\iota$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/iota.svg"
    }, {
      keyType: "greek",
      value: "\\kappa$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/kappa.svg"
    }, {
      keyType: "greek",
      value: "\\lambda$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/lambda.svg"
    }, {
      keyType: "greek",
      value: "\\mu$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/mu.svg"
    }, {
      keyType: "greek",
      value: "\\nu$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/nu.svg"
    }, {
      keyType: "greek",
      value: "\\xi$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/xi.svg"
    }, {
      keyType: "greek",
      value: "\\pi$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/pi.svg"
    }, {
      keyType: "greek",
      value: "\\varpi$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/varpi.svg"
    }, {
      keyType: "greek",
      value: "\\rho$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/rho.svg"
    }]
  }, {
    rowId: 3,
    keys: [{
      keyType: "greek",
      value: "\\varrho$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/varrho.svg"
    }, {
      keyType: "greek",
      value: "\\sigma$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/sigma.svg"
    }, {
      keyType: "greek",
      value: "\\varsigma$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/varsigma.svg"
    }, {
      keyType: "greek",
      value: "\\tau$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/tau.svg"
    }, {
      keyType: "greek",
      value: "\\upsilon$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/upsilon.svg"
    }, {
      keyType: "greek",
      value: "\\phi$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/phi.svg"
    }, {
      keyType: "greek",
      value: "\\varphi$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/varphi.svg"
    }, {
      keyType: "greek",
      value: "\\chi$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/chi.svg"
    }, {
      keyType: "greek",
      value: "\\psi$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/psi.svg"
    }, {
      keyType: "greek",
      value: "\\omega$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/omega.svg"
    }]
  }, {
    rowId: 4,
    keys: [{
      keyType: "greek",
      value: "\\Gamma$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/ugamma.svg"
    }, {
      keyType: "greek",
      value: "\\Delta$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/udelta.svg"
    }, {
      keyType: "greek",
      value: "\\Theta$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/utheta.svg"
    }, {
      keyType: "greek",
      value: "\\Lambda$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/ulambda.svg"
    }, {
      keyType: "greek",
      value: "\\Xi$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/uxi.svg"
    }, {
      keyType: "greek",
      value: "\\Pi$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/upi.svg"
    }, {
      keyType: "greek",
      value: "\\Sigma$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/usigma.svg"
    }, {
      keyType: "greek",
      value: "\\Upsilon$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/uupsilon.svg"
    }, {
      keyType: "greek",
      value: "\\Phi$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/uphi.svg"
    }, {
      keyType: "greek",
      value: "\\Psi$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/upsi.svg"
    }]
  }, {
    rowId: 5,
    keys: [{
      keyType: "greek",
      value: "\\Omega$ ",
      width: "two",
      icon: "https://xmzyb-1256150559.cos.ap-guangzhou.myqcloud.com/system_data/symbols/greeks/uomega.svg"
    }, {
      keyType: "placeholder",
      width: "three"
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
  name: "contact",
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
      name: "意见反馈",
      action: "feedback",
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
      action: "donate",
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