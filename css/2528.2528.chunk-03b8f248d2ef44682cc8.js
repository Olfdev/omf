(self.webpackChunk_canalplus_oneplayer = self.webpackChunk_canalplus_oneplayer || []).push([[2528], {
    34586: (n, t, o) => {
        var e = o(40272)
          , a = o(82609)
          , i = o(18387)
          , l = o(10579)
          , r = o(19811)
          , s = a(e);
        s.i(i, "", !0),
        s.i(l, "", !0),
        s.i(r, "", !0),
        s.push([n.id, `.I7CQjBIr1FCW7kp7MJxD {\n  position: absolute;\n  right: ${l.locals.overlayButtonSpacing};\n  bottom: ${l.locals.overlayButtonBottom};\n  display: inline-flex;\n  justify-content: flex-end;\n  pointer-events: auto;\n}\n\n[medium] .I7CQjBIr1FCW7kp7MJxD,\n  [large] .I7CQjBIr1FCW7kp7MJxD,\n  [verylarge] .I7CQjBIr1FCW7kp7MJxD {\n    bottom: ${l.locals.overlayButtonBottomMedium};\n  }\n\n.I7CQjBIr1FCW7kp7MJxD.DnPxpt5miAz2EY9CMJN_ {\n    bottom: ${l.locals.overlayButtonSpacing};\n  }\n\n.I7CQjBIr1FCW7kp7MJxD > * + * {\n    margin-left: 6px;\n  }\n\n.LIURRBjii9eyDwVDHSL4 {\n  position: absolute;\n  right: 5%;\n  bottom: 90px;\n  display: flex;\n  align-items: center;\n  font-size: 21px;\n  transition: bottom ease 400ms;\n}\n\n.DwTKK1WxkozJtVzxn6CX {\n  bottom: 45%;\n}\n\n.td72wI06gfkpw0D182mX {\n  height: 90px;\n  padding: 13px 45px;\n  margin-left: 30px;\n  font-size: 42px;\n  color: ${i.locals.colorWhite};\n}\n\n.AaDjN5HZvGLunQe6FcHO {\n  height: 23px;\n  margin: 20px 0;\n  opacity: 1;\n}\n`, "", {
            version: 3,
            sources: ["webpack://./src/ui/components/presentational/adskipcontrols/AdSkipControls.css"],
            names: [],
            mappings: "AAIA;EAEE,kBAAkB;EAClB,mDAA2B;EAC3B,oDAA2B;EAC3B,oBAAoB;EACpB,yBAAyB;EACzB,oBAAoB;AAetB;;AAbE;;;IAGE,oDAAiC;EACnC;;AAEA;IACE,oDAA4B;EAC9B;;AAEA;IACE,gBAAgB;EAClB;;AAGF;EACE,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,mDAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,UAAU;AACZ",
            sourcesContent: ['@value colorWhite from "../../../assets/styles/colors.css";\n@value overlayButtonSpacing, overlayButtonBottom, overlayButtonBottomMedium from \'../../../assets/styles/sizes.css\';\n@value bigFontSize from "../../../entries/common/WebPlayer.css";\n\n.adSkipControls {\n  composes: bigFontSize;\n  position: absolute;\n  right: overlayButtonSpacing;\n  bottom: overlayButtonBottom;\n  display: inline-flex;\n  justify-content: flex-end;\n  pointer-events: auto;\n\n  [medium] &,\n  [large] &,\n  [verylarge] & {\n    bottom: overlayButtonBottomMedium;\n  }\n\n  &.isMobilePortrait {\n    bottom: overlayButtonSpacing;\n  }\n\n  > * + * {\n    margin-left: 6px;\n  }\n}\n\n.tvAdSkipControls {\n  position: absolute;\n  right: 5%;\n  bottom: 90px;\n  display: flex;\n  align-items: center;\n  font-size: 21px;\n  transition: bottom ease 400ms;\n}\n\n.tvPanelOpened {\n  bottom: 45%;\n}\n\n.tvOverlayButton {\n  height: 90px;\n  padding: 13px 45px;\n  margin-left: 30px;\n  font-size: 42px;\n  color: colorWhite;\n}\n\n.tvOverlayIcon {\n  height: 23px;\n  margin: 20px 0;\n  opacity: 1;\n}\n'],
            sourceRoot: ""
        }]),
        s.locals = {
            colorWhite: `${i.locals.colorWhite}`,
            overlayButtonSpacing: `${l.locals.overlayButtonSpacing}`,
            overlayButtonBottom: `${l.locals.overlayButtonBottom}`,
            overlayButtonBottomMedium: `${l.locals.overlayButtonBottomMedium}`,
            bigFontSize: `${r.locals.bigFontSize}`,
            adSkipControls: `I7CQjBIr1FCW7kp7MJxD ${r.locals.bigFontSize}`,
            isMobilePortrait: "DnPxpt5miAz2EY9CMJN_",
            tvAdSkipControls: "LIURRBjii9eyDwVDHSL4",
            tvPanelOpened: "DwTKK1WxkozJtVzxn6CX",
            tvOverlayButton: "td72wI06gfkpw0D182mX",
            tvOverlayIcon: "AaDjN5HZvGLunQe6FcHO"
        },
        n.exports = s
    }
    ,
    32296: (n, t, o) => {
        var e = o(40272)
          , a = o(82609)(e);
        a.push([n.id, ".Rk0z7HeMChhT9nXH3Wnk {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n.Ic5DsPIjzDFVQ2y5UjaH {\n  width: 70px;\n  height: 70px;\n  padding: 20px;\n  background: radial-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0) 75%);\n  opacity: 0;\n}\n\n[large] .Ic5DsPIjzDFVQ2y5UjaH, [verylarge] .Ic5DsPIjzDFVQ2y5UjaH {\n    width: 100px;\n    height: 100px;\n    padding: 30px;\n}\n\n.DHZS1UD58IloSMBztUHf {\n  width: 100px;\n  height: 100px;\n  padding: 30px;\n}\n\n[large] .DHZS1UD58IloSMBztUHf, [verylarge] .DHZS1UD58IloSMBztUHf {\n    width: 150px;\n    height: 150px;\n    padding: 40px;\n}\n\n@keyframes PduVNf41u3YgCpTtzBXU {\n  0% {\n    visibility: visible;\n    opacity: 0;\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    opacity: 0.75;\n  }\n\n  100% {\n    opacity: 0;\n    transform: scale3d(1.5, 1.5, 1.5);\n  }\n}\n\n@keyframes ZdFlPv4osvrKKIW5yTJU {\n  0% {\n    visibility: visible;\n    opacity: 0;\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    opacity: 0.75;\n  }\n\n  100% {\n    opacity: 0;\n    transform: scale3d(1.5, 1.5, 1.5);\n  }\n}\n\n.Dk_sGlvWCAPHYwdtixhv {\n  animation: PduVNf41u3YgCpTtzBXU 350ms linear;\n}\n\n.UH9G44Y4y7_WYrXbkqtZ {\n  animation: ZdFlPv4osvrKKIW5yTJU 350ms linear;\n}\n", "", {
            version: 3,
            sources: ["webpack://./src/ui/components/presentational/controlfeedback/ControlFeedback.css"],
            names: [],
            mappings: "AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,qEAA8D;EAC9D,UAAU;AAOZ;;AAZA;IAQI,YAAY;IACZ,aAAa;IACb,aAAa;AAEjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;AAOf;;AAVA;IAMI,YAAY;IACZ,aAAa;IACb,aAAa;AAEjB;;AAEA;EACE;IACE,mBAAmB;IACnB,UAAU;IACV,2BAA2B;EAC7B;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,UAAU;IACV,iCAAiC;EACnC;AACF;;AAEA;EACE;IACE,mBAAmB;IACnB,UAAU;IACV,2BAA2B;EAC7B;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,UAAU;IACV,iCAAiC;EACnC;AACF;;AAEA;EACE,4CAA0C;AAC5C;;AAEA;EACE,4CAA0C;AAC5C",
            sourcesContent: ["@value animationDuration: 350ms;\n\n.controlFeedback {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n.iconWrap {\n  width: 70px;\n  height: 70px;\n  padding: 20px;\n  background: radial-gradient(rgb(0 0 0 / 40%), transparent 75%);\n  opacity: 0;\n\n  @nest [large] &, [verylarge] & {\n    width: 100px;\n    height: 100px;\n    padding: 30px;\n  }\n}\n\n.tvIconWrap {\n  width: 100px;\n  height: 100px;\n  padding: 30px;\n\n  @nest [large] &, [verylarge] & {\n    width: 150px;\n    height: 150px;\n    padding: 40px;\n  }\n}\n\n@keyframes burst1 {\n  0% {\n    visibility: visible;\n    opacity: 0;\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    opacity: 0.75;\n  }\n\n  100% {\n    opacity: 0;\n    transform: scale3d(1.5, 1.5, 1.5);\n  }\n}\n\n@keyframes burst2 {\n  0% {\n    visibility: visible;\n    opacity: 0;\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    opacity: 0.75;\n  }\n\n  100% {\n    opacity: 0;\n    transform: scale3d(1.5, 1.5, 1.5);\n  }\n}\n\n.animateFeedback1 {\n  animation: burst1 animationDuration linear;\n}\n\n.animateFeedback2 {\n  animation: burst2 animationDuration linear;\n}\n"],
            sourceRoot: ""
        }]),
        a.locals = {
            animationDuration: "350ms",
            controlFeedback: "Rk0z7HeMChhT9nXH3Wnk",
            iconWrap: "Ic5DsPIjzDFVQ2y5UjaH",
            tvIconWrap: "DHZS1UD58IloSMBztUHf",
            animateFeedback1: "Dk_sGlvWCAPHYwdtixhv",
            burst1: "PduVNf41u3YgCpTtzBXU",
            animateFeedback2: "UH9G44Y4y7_WYrXbkqtZ",
            burst2: "ZdFlPv4osvrKKIW5yTJU"
        },
        n.exports = a
    }
    ,
    78355: (n, t, o) => {
        var e = o(40272)
          , a = o(82609)
          , i = o(13746)
          , l = o(96686)
          , r = o(84222)
          , s = o(51167)
          , A = o(18387)
          , c = a(e);
        c.i(i, "", !0),
        c.i(l, "", !0),
        c.i(r, "", !0),
        c.i(s, "", !0),
        c.i(A, "", !0),
        c.push([n.id, `/*\n  All sizing of this component is relative to the inherited font size.\n  Adjust the font size in the parent component that uses it.\n*/\n\n.YzJMvB6CNxxvrPamacKQ {\n  color: ${A.locals.colorWhite7};\n  white-space: nowrap;\n}\n\n.Q2TUsnQevf7BSjGvVlQx {\n  display: flex;\n  align-items: center;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  height: 3em;\n  padding: 0 1.5em;\n  cursor: pointer;\n  background-color: ${A.locals.colorGreyDark85};\n  border: none;\n  border-radius: 4px;\n  transition: color 200ms ease;\n}\n\n.Q2TUsnQevf7BSjGvVlQx:focus {\n    outline: none;\n  }\n\n.Q2TUsnQevf7BSjGvVlQx:not(.disabled):hover > .YzJMvB6CNxxvrPamacKQ {\n    color: ${A.locals.colorWhite};\n  }\n\n.jQ7iCZ3rHI3uTU490dYA {\n  display: inline-block;\n  width: 51px;\n}\n\n@media ${i.locals.breakPoint720p} {\n\n.jQ7iCZ3rHI3uTU490dYA {\n    width: 27px\n}\n  }\n\n.v8s5AkQF2XPEPOcFwz3w {\n  height: 1em;\n  opacity: 0.7;\n  transition: opacity 200ms ease;\n}\n\n.YzJMvB6CNxxvrPamacKQ + .v8s5AkQF2XPEPOcFwz3w {\n    margin-left: 0.5em;\n  }\n\n.Q2TUsnQevf7BSjGvVlQx:not(.disabled):hover .v8s5AkQF2XPEPOcFwz3w {\n    opacity: 1;\n  }\n\n.v8s5AkQF2XPEPOcFwz3w svg {\n    width: auto;\n  }\n\nbutton.Q2TUsnQevf7BSjGvVlQx.disabled {\n  opacity: 0.5;\n}\n\n.wr29Rn_I8hqIANMDYuRT {\n    background: ${l.locals["actionColor--mycanal"]};\n  }\n.MWQOs2bVCC7qG1EcDBha {\n    background: ${l.locals["actionColor--mycanal_tvod"]};\n  }\n.zoOLm8HPxtczLmUysEyv {\n    background: ${r.locals["gradientActionColor--telecomitalia"]};\n  }\n.Mx3UWJ6utOZMRYtqrJ_y {\n    background: ${s.locals["actionColor--telecomitalia_blue"]};\n  }\n`, "", {
            version: 3,
            sources: ["webpack://./src/ui/components/presentational/overlaybutton/OverlayButton.css"],
            names: [],
            mappings: "AAMA;;;CAGC;;AAED;EACE,mDAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAAsB;EAAtB,sBAAsB;EACtB,WAAW;EACX,gBAAgB;EAChB,eAAe;EACf,8DAAiC;EACjC,YAAY;EACZ,kBAAkB;EAClB,4BAA4B;AAS9B;;AAPE;IACE,aAAa;EACf;;AAEA;IACE,mDAAiB;EACnB;;AAGF;EACE,qBAAqB;EACrB,WAAW;AAKb;;AAHE;;AAJF;IAKI;AAEJ;EADE;;AAGF;EACE,WAAW;EACX,YAAY;EACZ,8BAA8B;AAahC;;AAXE;IACE,kBAAkB;EACpB;;AAEA;IACE,UAAU;EACZ;;AAEA;IACE,WAAW;EACb;;AAGF;EACE,YAAY;AACd;;AAGE;IACE,wDAAkB;EACpB;AAFA;IACE,wDAAkB;EACpB;AAFA;IACE,wDAAkB;EACpB;AAFA;IACE,wDAAkB;EACpB",
            sourcesContent: ['@value breakPoint720p from "../../../assets/styles/breakpoints.css";\n@value actionColor--mycanal, actionColor--mycanal_tvod from "../../../assets/styles/mycanal/colors.css";\n@value gradientActionColor--telecomitalia from "../../../assets/styles/telecomitalia/colors.css";\n@value actionColor--telecomitalia_blue from "../../../assets/styles/telecomitalia/blue/colors.css";\n@value colorWhite, colorWhite7, colorGreyDark85 from \'../../../assets/styles/colors.css\';\n\n/*\n  All sizing of this component is relative to the inherited font size.\n  Adjust the font size in the parent component that uses it.\n*/\n\n.label {\n  color: colorWhite7;\n  white-space: nowrap;\n}\n\n.overlayButton {\n  display: flex;\n  align-items: center;\n  min-width: fit-content;\n  height: 3em;\n  padding: 0 1.5em;\n  cursor: pointer;\n  background-color: colorGreyDark85;\n  border: none;\n  border-radius: 4px;\n  transition: color 200ms ease;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:not(:global(.disabled)):hover > .label {\n    color: colorWhite;\n  }\n}\n\n.timeBeforeHidden {\n  display: inline-block;\n  width: 51px;\n\n  @media breakPoint720p {\n    width: 27px;\n  }\n}\n\n.icon {\n  height: 1em;\n  opacity: 0.7;\n  transition: opacity 200ms ease;\n\n  .label + & {\n    margin-left: 0.5em;\n  }\n\n  .overlayButton:not(:global(.disabled)):hover & {\n    opacity: 1;\n  }\n\n  svg {\n    width: auto;\n  }\n}\n\nbutton.overlayButton:global(.disabled) {\n  opacity: 0.5;\n}\n\n@define-mixin makeVariant $variant, $color {\n  .isKeyboardFocused--$(variant) {\n    background: $color;\n  }\n}\n\n@mixin makeVariant mycanal, actionColor--mycanal;\n@mixin makeVariant mycanal_tvod, actionColor--mycanal_tvod;\n@mixin makeVariant telecomitalia, gradientActionColor--telecomitalia;\n@mixin makeVariant telecomitalia_blue, actionColor--telecomitalia_blue;\n'],
            sourceRoot: ""
        }]),
        c.locals = {
            breakPoint720p: `${i.locals.breakPoint720p}`,
            "actionColor--mycanal": `${l.locals["actionColor--mycanal"]}`,
            "actionColor--mycanal_tvod": `${l.locals["actionColor--mycanal_tvod"]}`,
            "gradientActionColor--telecomitalia": `${r.locals["gradientActionColor--telecomitalia"]}`,
            "actionColor--telecomitalia_blue": `${s.locals["actionColor--telecomitalia_blue"]}`,
            colorWhite: `${A.locals.colorWhite}`,
            colorWhite7: `${A.locals.colorWhite7}`,
            colorGreyDark85: `${A.locals.colorGreyDark85}`,
            label: "YzJMvB6CNxxvrPamacKQ",
            overlayButton: "Q2TUsnQevf7BSjGvVlQx",
            timeBeforeHidden: "jQ7iCZ3rHI3uTU490dYA",
            icon: "v8s5AkQF2XPEPOcFwz3w",
            "isKeyboardFocused--mycanal": "wr29Rn_I8hqIANMDYuRT",
            "isKeyboardFocused--mycanal_tvod": "MWQOs2bVCC7qG1EcDBha",
            "isKeyboardFocused--telecomitalia": "zoOLm8HPxtczLmUysEyv",
            "isKeyboardFocused--telecomitalia_blue": "Mx3UWJ6utOZMRYtqrJ_y"
        },
        n.exports = c
    }
    ,
    32711: (n, t, o) => {
        var e = o(46062)
          , a = o(44036)
          , i = o(96793)
          , l = o(17892)
          , r = o(11173)
          , s = o(42464)
          , A = o(34586);
        A = A.__esModule ? A.default : A;
        var c = {};
        c.styleTagTransform = s,
        c.setAttributes = l,
        c.insert = i.bind(null, "head"),
        c.domAPI = a,
        c.insertStyleElement = r;
        e(A, c);
        n.exports = A && A.locals || {}
    }
    ,
    25613: (n, t, o) => {
        var e = o(46062)
          , a = o(44036)
          , i = o(96793)
          , l = o(17892)
          , r = o(11173)
          , s = o(42464)
          , A = o(32296);
        A = A.__esModule ? A.default : A;
        var c = {};
        c.styleTagTransform = s,
        c.setAttributes = l,
        c.insert = i.bind(null, "head"),
        c.domAPI = a,
        c.insertStyleElement = r;
        e(A, c);
        n.exports = A && A.locals || {}
    }
    ,
    90150: (n, t, o) => {
        var e = o(46062)
          , a = o(44036)
          , i = o(96793)
          , l = o(17892)
          , r = o(11173)
          , s = o(42464)
          , A = o(78355);
        A = A.__esModule ? A.default : A;
        var c = {};
        c.styleTagTransform = s,
        c.setAttributes = l,
        c.insert = i.bind(null, "head"),
        c.domAPI = a,
        c.insertStyleElement = r;
        e(A, c);
        n.exports = A && A.locals || {}
    }
    ,
    46306: (n, t, o) => {
        "use strict";
        o.d(t, {
            Z: () => h
        });
        var e, a, i = o(2363), l = o(82136), r = o(43047), s = o(44529), A = o(72779), c = o.n(A), d = o(6531), p = o(98826), u = o(40945), m = o(10670), C = (e = function(n, t) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(n, t) {
                n.__proto__ = t
            }
            || function(n, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o])
            }
            ,
            e(n, t)
        }
        ,
        function(n, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function o() {
                this.constructor = n
            }
            e(n, t),
            n.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), y = d.COMMAND_TYPES, E = o(25613), B = ((a = {})[y.PLAY] = p.dM,
        a[y.PAUSE] = p.qe,
        a[y.MUTE] = p.lj,
        a[y.UNMUTE] = p.wD,
        a[y.PLAYBACK_RATE_X025] = p.rF,
        a[y.PLAYBACK_RATE_X050] = p.vw,
        a[y.PLAYBACK_RATE_X075] = p.cG,
        a[y.PLAYBACK_RATE_X100] = p.Ss,
        a[y.PLAYBACK_RATE_X125] = p.R4,
        a[y.PLAYBACK_RATE_X150] = p.S5,
        a[y.PLAYBACK_RATE_X175] = p.We,
        a[y.PLAYBACK_RATE_X200] = p.y8,
        a[y.SEEK_TO_MINUS] = p.s8,
        a[y.SEEK_TO_PLUS] = p.D2,
        a), v = function(n) {
            function t(t) {
                var o = n.call(this, t) || this;
                return o.animationClassName = E.animateFeedback1,
                o.isReady = !1,
                o
            }
            return C(t, n),
            t.prototype.componentDidMount = function() {
                this.isReady = !0
            }
            ,
            t.prototype.getAnimationClassName = function() {
                return this.animationClassName = this.animationClassName === E.animateFeedback1 ? E.animateFeedback2 : E.animateFeedback1,
                this.animationClassName
            }
            ,
            t.prototype.render = function() {
                var n = this.props
                  , t = n.commandType
                  , o = n.keyProp
                  , e = n.isTvPlayer;
                return this.isReady && t && B[t] ? (0,
                r.jsx)(u.Z, {
                    children: (0,
                    r.jsx)("div", {
                        className: E.controlFeedback,
                        children: (0,
                        r.jsx)("div", {
                            className: c()(E.iconWrap, E[e ? "tvIconWrap" : "iconWrap"], this.getAnimationClassName()),
                            "data-testid": "controlFeedback-".concat(t),
                            children: (0,
                            r.jsx)(m.Z, {
                                glyph: B[t]
                            })
                        })
                    })
                }, o) : null
            }
            ,
            t.defaultProps = {
                commandType: null,
                keyProp: "1"
            },
            t
        }(s.Component);
        const b = v;
        const h = (0,
        i.$j)((function(n) {
            return {
                commandType: (0,
                l.TH7)(n),
                keyProp: (0,
                l.pI5)(n),
                isTvPlayer: (0,
                l.jFo)(n)
            }
        }
        ))(b)
    }
    ,
    42410: (n, t, o) => {
        "use strict";
        o.d(t, {
            Z: () => h
        });
        var e = o(43047)
          , a = o(44529)
          , i = o(2363)
          , l = o(72779)
          , r = o.n(l)
          , s = o(17702)
          , A = o(38737)
          , c = o(32032)
          , d = o(38035)
          , p = o(73944)
          , u = o(98826)
          , m = o(96582)
          , C = o(32711)
          , y = A.wu
          , E = c.STOPPED
          , B = c.LOADING
          , v = d.uB
          , b = d.G$;
        const h = (0,
        i.$j)((function() {
            return {
                selectedId: (0,
                s.Z5)()(),
                isBinderActive: (0,
                s.bT)(y)(),
                isCurrentBinder: (0,
                s.gJ)(y)()
            }
        }
        ))((0,
        p.YB)((function(n) {
            var t, o = n.t, i = n.isMobilePortraitLayout, l = n.isTvPlayer, A = n.skipOneAd, c = n.skipAllAds, d = n.seekTo, p = n.shouldShowSkipOneAdControl, h = n.countdownValue, f = n.shouldShowSkipAllAdsControl, g = n.currentProgramCurrentTimeCode, x = n.customSkipOneLabel, k = n.selectedId, I = n.sponsorGenre, D = n.playerState, P = n.isPanelOpened, w = n.isFocusedElement, _ = n.onDownExitButtons, F = n.isCurrentBinder, S = n.isBinderActive, j = (0,
            a.useState)(""), W = j[0], T = j[1], U = o(I ? "texts.IgnoreAll" : "texts.IgnoreAllAds"), Y = !(h > 0);
            if ((0,
            a.useEffect)((function() {
                T(x || (Y ? o(I ? "texts.Ignore" : "texts.IgnoreAd") : o("texts.SkipInSeconds", {
                    countdownValue: h
                })))
            }
            ), [x, Y, h, I, o]),
            (0,
            a.useEffect)((function() {
                l && w && (Y || c) && (F && S || (0,
                s.Je)(y, "".concat(y, "-").concat(0)))
            }
            ), [Y, S, F, w, l, c]),
            !p && !f || D && [B, E].includes(D))
                return null;
            var z = r()(((t = {})[C.adSkipControls] = !l,
            t[C.tvAdSkipControls] = l,
            t[C.isMobilePortrait] = i,
            t[C.tvPanelOpened] = P && l,
            t))
              , M = l ? {
                overlayButton: C.tvOverlayButton,
                icon: C.tvOverlayIcon
            } : void 0;
            return (0,
            e.jsx)(s.zv, {
                id: y,
                direction: "horizontal",
                onDownExit: _,
                selector: "button",
                active: l && w && (Y || !!c),
                children: (0,
                e.jsxs)("div", {
                    className: z,
                    "data-testid": "adSkipControlsId",
                    children: [p && (0,
                    e.jsx)(m.Z, {
                        id: "".concat(y, "-0"),
                        label: W,
                        glyph: u.FU,
                        onClick: function() {
                            return d && d(g.endTime)
                        },
                        isDisabled: 0,
                        additionalStyles: M,
                        isKeyboardFocused: !!(l && Y && w) && k === "".concat(y, "-").concat(0),
                        trackableAction: v,
                        dataTestid: "skipOne"
                    }), f && (0,
                    e.jsx)(m.Z, {
                        id: "".concat(y, "-1"),
                        label: U,
                        glyph: u.mL,
                        onClick: c,
                        additionalStyles: M,
                        isKeyboardFocused: !!l && k === "".concat(y, "-").concat(1),
                        trackableAction: b,
                        dataTestid: "skipAll"
                    })]
                })
            })
        }
        )))
    }
    ,
    96582: (n, t, o) => {
        "use strict";
        o.d(t, {
            Z: () => m
        });
        var e, a = o(43047), i = o(44529), l = o(72779), r = o.n(l), s = o(84326), A = o(73742), c = o(10670), d = (e = function(n, t) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(n, t) {
                n.__proto__ = t
            }
            || function(n, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o])
            }
            ,
            e(n, t)
        }
        ,
        function(n, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function o() {
                this.constructor = n
            }
            e(n, t),
            n.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        ), p = o(90150), u = function(n) {
            function t() {
                return null !== n && n.apply(this, arguments) || this
            }
            return d(t, n),
            t.prototype.render = function() {
                var n, t = this.props, o = t.ariaLabel, e = t.isKeyboardFocused, i = t.label, l = t.glyph, s = t.onClick, d = t.onMouseEnter, u = t.isDisabled, m = t.trackableAction, C = t.dataTestid, y = t.additionalStyles, E = t.id, B = t.remainingTimeBeforeUnskippable, v = t.labelAfterCountDown, b = t.variant;
                return (0,
                a.jsxs)(A.Z, {
                    ariaLabel: o,
                    id: E,
                    customStyle: r()(p.overlayButton, null == y ? void 0 : y.overlayButton, (n = {},
                    n[p["isKeyboardFocused--".concat(b)]] = e,
                    n)),
                    onClick: s,
                    onMouseEnter: d,
                    isDisabled: u,
                    trackableAction: m,
                    "data-testid": C,
                    children: [i && (0,
                    a.jsxs)("span", {
                        className: r()(p.label, null == y ? void 0 : y.label),
                        children: [i, void 0 !== B && (0,
                        a.jsx)("span", {
                            className: r()(p.timeBeforeHidden, null == y ? void 0 : y.timeBeforeHidden),
                            children: B
                        }), v && (0,
                        a.jsx)("span", {
                            children: v
                        })]
                    }), l && (0,
                    a.jsx)("span", {
                        className: r()(p.icon, null == y ? void 0 : y.icon),
                        children: (0,
                        a.jsx)(c.Z, {
                            glyph: l
                        })
                    })]
                })
            }
            ,
            t.defaultProps = {
                isDisabled: !1,
                label: "",
                onClick: function() {}
            },
            t
        }(i.PureComponent);
        const m = (0,
        s.Z)(u)
    }
}]);
//# sourceMappingURL=2528.2528.chunk-03b8f248d2ef44682cc8.js.map
