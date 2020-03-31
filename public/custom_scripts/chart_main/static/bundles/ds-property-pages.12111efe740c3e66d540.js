webpackJsonp([5], {
  14: function(e, t, o) {
    "use strict";
    function i(e) {
      function t(t, o, i) {
        e.call(this, t, o, i),
          (this._linetool = i),
          (this._templateList = new s(
            this._linetool._constructor,
            this.applyTemplate.bind(this)
          ));
      }
      return (
        inherit(t, e),
        (t.prototype.applyTemplate = function(e) {
          this._linetool.restoreTemplate(e),
            this._model.model().updateSource(this._linetool),
            this.loadData();
        }),
        (t.prototype.createTemplateButton = function(e) {
          var t = this;
          return (
            (e = $.extend({}, e, {
              getDataForSaveAs: function() {
                return t._linetool.template();
              }
            })),
            this._templateList.createButton(e)
          );
        }),
        t
      );
    }
    function n(e, t, o) {
      r.call(this, e, t), (this._linetool = o);
    }
    var a = o(10),
      r = a.PropertyPage,
      l = a.ColorBinding,
      p = o(47).addColorPicker,
      s = o(268);
    inherit(n, r),
      (n.prototype.createOneColorForAllLinesWidget = function() {
        var e = $("<td class='colorpicker-cell'>");
        return (
          this.bindControl(
            new l(
              p(e),
              this._linetool.properties().collectibleColors,
              !0,
              this.model(),
              "Change All Lines Color",
              0
            )
          ),
          { label: $("<td>" + $.t("Use one color") + "</td>"), editor: e }
        );
      }),
      (n.prototype.addOneColorPropertyWidget = function(e) {
        var t = this.createOneColorForAllLinesWidget(),
          o = $("<tr>");
        o
          .append($("<td>"))
          .append(t.label)
          .append(t.editor),
          o.appendTo(e);
      }),
      (n = i(n)),
      (n.createTemplatesPropertyPage = i),
      (e.exports = n);
  },
  15: function(e, t, o) {
    "use strict";
    function i() {
      return $('<div class="linewidth-slider">').slider({
        max: 4,
        min: 1,
        step: 1
      });
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      o(22),
      o(285),
      (t.createLineWidthEditor = i);
  },
  31: function(e, t, o) {
    "use strict";
    function i() {
      return new n.Combobox([
        {
          html: '<div class="linestyle solidline"/>',
          value: a.LINESTYLE_SOLID
        },
        {
          html: '<div class="linestyle dottedline"/>',
          value: a.LINESTYLE_DOTTED
        },
        {
          html: '<div class="linestyle dashedline"/>',
          value: a.LINESTYLE_DASHED
        }
      ]);
    }
    var n, a;
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (n = o(741)),
      (a = o(115)),
      (t.createLineStyleEditor = i);
  },
  65: function(e, t, o) {
    "use strict";
    function i(e) {
      var t = $(
          '<div class="transparency-slider"><div class="gradient"></div></div>'
        ).slider({ max: 100, min: 0, step: 1 }),
        o = [
          "-moz-linear-gradient(left, %COLOR 0%, transparent 100%)",
          "-webkit-gradient(linear, left top, right top, color-stop(0%,%COLOR), color-stop(100%,transparent))",
          "-webkit-linear-gradient(left, %COLOR 0%,transparent 100%)",
          "-o-linear-gradient(left, %COLOR 0%,transparent 100%)",
          "linear-gradient(to right, %COLOR 0%,transparent 100%)"
        ];
      return (
        (t.updateColor = function(e) {
          var i = t.find(".gradient");
          o.forEach(function(t) {
            i.css("background-image", t.replace(/%COLOR/, e));
          });
        }),
        e
          ? (t.updateColor(e.val() || "black"),
            e.on("change", function(e) {
              t.updateColor(e.target.value);
            }))
          : t.updateColor("black"),
        t
      );
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      o(22),
      o(285),
      (t.createTransparencyEditor = i);
  },
  81: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      a.call(this, e, t), (this._linetool = o), this.prepareLayout();
    }
    var n = o(10),
      a = n.PropertyPage,
      r = n.GreateTransformer,
      l = n.LessTransformer,
      p = n.ToIntTransformer,
      s = n.SimpleStringBinder;
    o(142),
      inherit(i, a),
      (i.BarIndexPastLimit = -5e4),
      (i.BarIndexFutureLimit = 15e3),
      (i.prototype.bindBarIndex = function(e, t, o, n) {
        var a = [
          p(e.value()),
          r(i.BarIndexPastLimit),
          l(i.BarIndexFutureLimit)
        ];
        this.bindControl(new s(t, e, a, !1, o, n));
      }),
      (i.prototype.createPriceEditor = function(e) {
        var t,
          o = this._linetool.ownerSource().formatter(),
          i = function(e) {
            return o.format(e);
          },
          n = function(e) {
            var t = o.parse(e);
            if (t.res) return t.price ? t.price : t.value;
          },
          a = $("<input type='text'>");
        return (
          a.TVTicker({
            step: o._minMove / o._priceScale || 1,
            formatter: i,
            parser: n
          }),
          e &&
            ((t = [
              function(t) {
                var o = n(t);
                return void 0 === o ? e.value() : o;
              }
            ]),
            this.bindControl(
              new s(
                a,
                e,
                t,
                !1,
                this.model(),
                "Change " + this._linetool + " point price"
              )
            ).addFormatter(function(e) {
              return o.format(e);
            })),
          a
        );
      }),
      (i.prototype._createPointRow = function(e, t, o) {
        var i,
          n,
          a,
          r,
          l,
          p = $("<tr>"),
          s = $("<td>");
        return (
          s.html($.t("Price") + o),
          s.appendTo(p),
          (i = $("<td>")),
          i.appendTo(p),
          (n = this.createPriceEditor(t.price)),
          n.appendTo(i),
          (a = $("<td>")),
          a.html($.t("Bar #")),
          a.appendTo(p),
          (r = $("<td>")),
          r.appendTo(p),
          (l = $("<input type='text'>")),
          l.appendTo(r),
          l.addClass("ticker"),
          this.bindBarIndex(
            t.bar,
            l,
            this.model(),
            "Change " + this._linetool + " point bar index"
          ),
          p
        );
      }),
      (i.prototype.prepareLayoutForTable = function(e) {
        var t,
          o,
          i,
          n,
          a,
          r = this._linetool.points(),
          l = r.length;
        for (t = 0; t < r.length; t++)
          (o = r[t]),
            (i = this._linetool.properties().points[t]) &&
              ((n = t || l > 1 ? " " + (t + 1) : ""),
              (a = this._createPointRow(o, i, n)),
              a.appendTo(e));
      }),
      (i.prototype.prepareLayout = function() {
        (this._table = $(document.createElement("table"))),
          this._table.addClass("property-page"),
          this._table.attr("cellspacing", "0"),
          this._table.attr("cellpadding", "2"),
          this.prepareLayoutForTable(this._table),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  121: function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function(e) {
        (e[(e.Coordinates = 100)] = "Coordinates"),
          (e[(e.Display = 100)] = "Display"),
          (e[(e.Style = 200)] = "Style"),
          (e[(e.Inputs = 300)] = "Inputs"),
          (e[(e.Properties = 250)] = "Properties");
      })(t.TabPriority || (t.TabPriority = {})),
      (function(e) {
        (e.background = "Background"),
          (e.coordinates = "Coordinates"),
          (e.drawings = "Drawings"),
          (e.events = "Events"),
          (e.eventsAndAlerts = "Events & Alerts"),
          (e.inputs = "Inputs"),
          (e.properties = "Properties"),
          (e.scales = "Scales"),
          (e.sourceCode = "Source Code"),
          (e.style = "Style"),
          (e.timezoneSessions = "Timezone/Sessions"),
          (e.trading = "Trading"),
          (e.visibility = "Visibility");
      })(t.TabNames || (t.TabNames = {})),
      (function(e) {
        (e[(e.Default = 100)] = "Default"),
          (e[(e.UserSave = 200)] = "UserSave"),
          (e[(e.Override = 300)] = "Override");
      })(t.TabOpenFrom || (t.TabOpenFrom = {}));
  },
  208: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      r.call(this, e, t), (this._study = o), this.prepareLayout();
    }
    function n(e, t, o) {
      r.call(this, e, t),
        (this._study = o),
        (this._property = e),
        this.prepareLayout();
    }
    var a = o(10),
      r = a.PropertyPage,
      l = a.GreateTransformer,
      p = a.LessTransformer,
      s = a.ToIntTransformer,
      d = a.ToFloatTransformer,
      h = a.SimpleComboBinder,
      c = a.BooleanBinder,
      b = a.DisabledBinder,
      u = a.ColorBinding,
      C = a.SliderBinder,
      y = a.SimpleStringBinder,
      g = o(47).addColorPicker,
      w = o(31).createLineStyleEditor,
      T = o(1124).createShapeLocationEditor,
      _ = o(1125).createShapeStyleEditor,
      m = o(15).createLineWidthEditor,
      f = o(1126).createVisibilityEditor,
      L = o(1122).createHHistDirectionEditor,
      v = o(475).createPlotEditor,
      k = o(38).NumericFormatter,
      S = o(45),
      P = o(106).PlotType,
      x = o(13).getLogger("Chart.Study.PropertyPage");
    inherit(i, r),
      (i.prototype.prepareLayout = function() {
        function e(e) {
          return new k().format(e);
        }
        var t,
          o,
          n,
          a,
          r,
          l,
          p,
          s,
          b,
          T,
          _,
          f,
          L,
          v,
          P,
          B,
          E,
          R,
          F,
          I,
          A,
          D,
          W,
          O,
          V,
          j,
          z,
          M,
          H,
          q,
          N,
          G,
          U,
          Y,
          K,
          Q;
        for (
          this._table = $("<table/>"),
            this._table.addClass("property-page"),
            this._table.attr("cellspacing", "0"),
            this._table.attr("cellpadding", "2"),
            t = this._study.metaInfo(),
            o = {},
            n = 0;
          n < t.plots.length;
          ++n
        )
          if (
            !(
              this._study.isSelfColorerPlot(n) ||
              this._study.isTextColorerPlot(n) ||
              this._study.isDataOffsetPlot(n) ||
              this._study.isOHLCColorerPlot(n)
            )
          ) {
            if (((l = t.plots[n]), t.styles)) {
              if (t.styles[l.id]) a = t.styles[l.id].isHidden;
              else if (!this._study.isOHLCSeriesPlot(n)) continue;
              if (this._study.isOHLCSeriesPlot(n)) {
                if (((r = t.plots[n].target), o[r])) continue;
                (a = t.ohlcPlots[r].isHidden), (o[r] = r);
              }
              if (a) continue;
            }
            this._study.isLinePlot(n) ||
            this._study.isBarColorerPlot(n) ||
            this._study.isBgColorerPlot(n)
              ? this._prepareLayoutForPlot(n, l)
              : this._study.isPlotArrowsPlot(n)
              ? this._prepareLayoutForArrowsPlot(n, l)
              : this._study.isPlotCharsPlot(n)
              ? this._prepareLayoutForCharsPlot(n, l)
              : this._study.isPlotShapesPlot(n)
              ? this._prepareLayoutForShapesPlot(n, l)
              : this._study.isOHLCSeriesPlot(n)
              ? ((p = { id: r, type: "ohlc" }),
                this._study.isOHLCBarsPlot(n)
                  ? this._prepareLayoutForBarsPlot(n, p)
                  : this._study.isOHLCCandlesPlot(n) &&
                    this._prepareLayoutForCandlesPlot(n, p))
              : x.logError("Unknown plot type: " + l.type);
          }
        if ((s = this._study.properties().bands) && s.childCount() > 0)
          for (n = 0; n < s.childCount(); n++)
            (b = s[n]),
              (b.isHidden && b.isHidden.value()) ||
                ((T = $('<tr class="line"/>')),
                T.appendTo(this._table),
                (_ = $("<td/>")),
                _.appendTo(T),
                (f = $("<input type='checkbox' class='visibility-switch'/>")),
                f.appendTo(_),
                (L = $.t(b.name.value(), { context: "input" })),
                (v = this.createLabeledCell(L, f)
                  .appendTo(T)
                  .addClass("propertypage-name-label")),
                (P = $("<td/>")),
                P.appendTo(T),
                P.addClass("colorpicker-cell"),
                (B = g(P)),
                (E = $("<td/>")),
                E.appendTo(T),
                (R = m()),
                R.appendTo(E),
                (F = $('<td colspan="4">').css({ whiteSpace: "nowrap" })),
                F.appendTo(T),
                (I = w()),
                I.render().appendTo(F),
                (A = $("<input class='property-page-bandwidth' type='text'/>")),
                A.appendTo(F),
                (D = [d(b.value.value())]),
                (W = "Change band"),
                (O = new y(A, b.value, D, !1, this.model(), W)),
                O.addFormatter(e),
                this.bindControl(O),
                this.bindControl(new c(f, b.visible, !0, this.model(), W)),
                this.bindControl(new u(B, b.color, !0, this.model(), W)),
                this.bindControl(
                  new h(I, b.linestyle, parseInt, !0, this.model(), W)
                ),
                this.bindControl(new C(R, b.linewidth, !0, this.model(), W)));
        if (
          (this._study.properties().bandsBackground &&
            ((b = this._study.properties().bandsBackground),
            (V = $.t("Background")),
            (W = $.t("Change band background")),
            (T = this._prepareFilledAreaBackground(
              b.fillBackground,
              b.backgroundColor,
              b.transparency,
              V,
              W
            )),
            T.appendTo(this._table)),
          this._study.properties().areaBackground &&
            ((b = this._study.properties().areaBackground),
            (V = $.t("Background")),
            (W = $.t("Change area background")),
            (T = this._prepareFilledAreaBackground(
              b.fillBackground,
              b.backgroundColor,
              b.transparency,
              V,
              W
            )),
            T.appendTo(this._table)),
          void 0 !== (j = t.filledAreas))
        )
          for (n = 0; n < j.length; ++n)
            (z = j[n]),
              z.isHidden ||
                ((W = "Change " + V),
                (b = this._study.properties().filledAreasStyle[z.id]),
                (V = z.title || $.t("Background")),
                z.palette
                  ? ((T = $('<tr class="line"/>')),
                    (_ = $("<td/>")),
                    _.appendTo(T),
                    (f = $(
                      "<input type='checkbox' class='visibility-switch'/>"
                    )),
                    f.appendTo(_),
                    this.bindControl(
                      new c(f, b.visible, !0, this.model(), W + " visibility")
                    ),
                    this.createLabeledCell(V, f)
                      .appendTo(T)
                      .addClass("propertypage-name-label"),
                    T.appendTo(this._table),
                    (M = this._findPlotPalette(n, z)),
                    (H = M.palette),
                    (q = M.paletteProps),
                    this._prepareLayoutForPalette(0, z, H, q, W))
                  : ((T = this._prepareFilledAreaBackground(
                      b.visible,
                      b.color,
                      b.transparency,
                      V,
                      W
                    )),
                    T.appendTo(this._table)));
        for (N in t.graphics) {
          G = t.graphics[N];
          for (U in G)
            (b = this._property.graphics[N][U]),
              i["_createRow_" + N].call(this, this._table, b);
        }
        (Y = this._table.find(".visibility-switch.plot-visibility-switch")),
          1 === Y.length &&
            ((_ = Y.parent()),
            _.css("display", "none"),
            (v = this._table.find(".propertypage-plot-with-palette")),
            1 === v.length
              ? v.css("display", "none")
              : ((v = this._table.find(".propertypage-name-label")),
                v.css("padding-left", 0),
                v.find("label").attr("for", ""))),
          (K = this._prepareStudyPropertiesLayout()),
          (this._table = this._table.add(K)),
          S.isScriptStrategy(t) &&
            ((Q = this._prepareOrdersSwitches()),
            (this._table = this._table.add(Q))),
          this.loadData();
      }),
      (i.prototype._prepareOrdersSwitches = function() {
        var e,
          t,
          o,
          i,
          n,
          a,
          r,
          l = $(
            '<table class="property-page study-strategy-properties" cellspacing="0" cellpadding="2">'
          ),
          p = "chart-orders-switch_" + Date.now().toString(36),
          s = $("<tr>").appendTo(l),
          d = $('<input id="' + p + '" type="checkbox">').appendTo(
            $("<td>").appendTo(s)
          );
        return (
          $(
            '<label for="' + p + '">' + $.t("Trades on Chart") + "</label>"
          ).appendTo($("<td>").appendTo(s)),
          (e = "chart-orders-labels-switch_" + Date.now().toString(36)),
          (t = $("<tr>").appendTo(l)),
          (o = $('<input id="' + e + '" type="checkbox">').appendTo(
            $("<td>").appendTo(t)
          )),
          $(
            '<label for="' + e + '">' + $.t("Signal Labels") + "</label>"
          ).appendTo($("<td>").appendTo(t)),
          (i = "chart-orders-qty-switch_" + Date.now().toString(36)),
          (n = $("<tr>").appendTo(l)),
          (a = $('<input id="' + i + '" type="checkbox">').appendTo(
            $("<td>").appendTo(n)
          )),
          $('<label for="' + i + '">' + $.t("Quantity") + "</label>").appendTo(
            $("<td>").appendTo(n)
          ),
          (r = this._study.properties()),
          this.bindControl(
            new c(
              d,
              r.strategy.orders.visible,
              !0,
              this.model(),
              "Trades on chart visibility"
            )
          ),
          this.bindControl(
            new c(
              o,
              r.strategy.orders.showLabels,
              !0,
              this.model(),
              "Signal labels visibility"
            )
          ),
          this.bindControl(
            new b(
              o,
              r.strategy.orders.visible,
              !0,
              this.model(),
              "Signal labels visibility",
              !0
            )
          ),
          this.bindControl(
            new c(
              a,
              r.strategy.orders.showQty,
              !0,
              this.model(),
              "Quantity visibility"
            )
          ),
          this.bindControl(
            new b(
              a,
              r.strategy.orders.visible,
              !0,
              this.model(),
              "Quantity visibility",
              !0
            )
          ),
          l
        );
      }),
      (i.prototype._prepareLayoutForPlot = function(e, t) {
        var o,
          i,
          n,
          a,
          r,
          l,
          p,
          s,
          d,
          b,
          y,
          w,
          T = t.id,
          _ = this._study.properties().styles[T],
          f = this._findPlotPalette(e, t),
          L = f.palette,
          k = f.paletteProps,
          S = "Change " + T;
        L
          ? ((o = $('<tr class="line"/>')),
            o.appendTo(this._table),
            (i = $("<td/>")),
            i.appendTo(o),
            i.addClass("visibility-cell"),
            (n = $(
              "<input type='checkbox' class='visibility-switch plot-visibility-switch'/>"
            )),
            n.appendTo(i),
            this.bindControl(new c(n, _.visible, !0, this.model(), S)),
            (a = $.t(_.title.value(), { context: "input" })),
            this.createLabeledCell(a, n)
              .appendTo(o)
              .addClass(
                "propertypage-name-label propertypage-plot-with-palette"
              ),
            this._prepareLayoutForPalette(e, t, L, k, S))
          : ((o = $('<tr class="line"/>')),
            o.appendTo(this._table),
            (i = $("<td/>")),
            i.appendTo(o),
            i.addClass("visibility-cell"),
            (n = $(
              "<input type='checkbox' class='visibility-switch plot-visibility-switch'/>"
            )),
            n.appendTo(i),
            (a = $.t(this._study.properties().styles[T].title.value(), {
              context: "input"
            })),
            this.createLabeledCell(a, n)
              .appendTo(o)
              .addClass("propertypage-name-label"),
            (r = $("<td/>")),
            r.appendTo(o),
            r.addClass("colorpicker-cell"),
            (l = g(r)),
            (p = $("<td/>")),
            p.appendTo(o),
            (s = m()),
            s.appendTo(p),
            (d = $("<td>")),
            d.appendTo(o),
            (b = v()),
            b.appendTo(d),
            (y = $("<td>")),
            y.appendTo(o),
            (w = $("<input type='checkbox'>")),
            w.appendTo(y),
            this.createLabeledCell("Price Line", w).appendTo(o),
            this.bindControl(new c(n, _.visible, !0, this.model(), S)),
            this.bindControl(
              new u(l, _.color, !0, this.model(), S, _.transparency)
            ),
            this.bindControl(
              new C(
                s,
                _.linewidth,
                !0,
                this.model(),
                S,
                this._study.metaInfo().isTVScript
              )
            ),
            this.bindControl(
              new h(b, _.plottype, parseInt, !0, this.model(), S)
            ),
            this.bindControl(
              new c(w, _.trackPrice, !0, this.model(), "Change Price Line")
            ));
      }),
      (i.prototype._prepareLayoutForBarsPlot = function(e, t) {
        var o,
          i,
          n,
          a,
          r,
          l,
          p = t.id,
          s = this._study.properties().ohlcPlots[p],
          d = this._findPlotPalette(e, t),
          h = d.palette,
          b = d.paletteProps,
          C = "Change " + p,
          y = $('<tr class="line"/>');
        y.appendTo(this._table),
          (o = $("<td/>")),
          o.appendTo(y),
          o.addClass("visibility-cell"),
          (i = $("<input type='checkbox' class='visibility-switch'/>")),
          i.appendTo(o),
          this.bindControl(new c(i, s.visible, !0, this.model(), C)),
          (n = s.title.value()),
          this.createLabeledCell(n, i)
            .appendTo(y)
            .addClass("propertypage-name-label"),
          h
            ? ((a = !0), this._prepareLayoutForPalette(e, t, h, b, C, a))
            : ((r = $("<td/>")),
              r.appendTo(y),
              r.addClass("colorpicker-cell"),
              (l = g(r)),
              this.bindControl(new u(l, s.color, !0, this.model(), C)));
      }),
      (i.prototype._prepareLayoutForCandlesPlot = function(e, t) {
        var o, i, n, a, r, l, p, s, d;
        this._prepareLayoutForBarsPlot(e, t),
          (o = t.id),
          (i = this._study.properties().ohlcPlots[o]),
          (n = "Change " + o),
          (a = $('<tr class="line"/>')),
          a.appendTo(this._table),
          (r = $("<td/>")),
          r.appendTo(a),
          r.addClass("visibility-cell"),
          (l = $("<input type='checkbox' class='visibility-switch'/>")),
          l.appendTo(r),
          this.bindControl(new c(l, i.drawWick, !0, this.model(), n)),
          (p = "Wick"),
          this.createLabeledCell(p, l).appendTo(a),
          (s = $("<td/>")),
          s.appendTo(a),
          s.addClass("colorpicker-cell"),
          (d = g(s)),
          this.bindControl(new u(d, i.wickColor, !0, this.model(), n));
      }),
      (i.prototype._prepareLayoutForShapesPlot = function(e, t) {
        var o,
          i,
          n,
          a,
          r,
          l,
          p,
          s,
          d,
          b = t.id,
          C = this._study.properties().styles[b],
          y = this._findPlotPalette(e, t),
          w = y.palette,
          m = y.paletteProps,
          f = "Change " + b,
          L = $('<tr class="line"/>');
        L.appendTo(this._table),
          (o = $("<td/>")),
          o.appendTo(L),
          o.addClass("visibility-cell"),
          (i = $("<input type='checkbox' class='visibility-switch'/>")),
          i.appendTo(o),
          this.bindControl(new c(i, C.visible, !0, this.model(), f)),
          (n = $.t(this._study.properties().styles[b].title.value(), {
            context: "input"
          })),
          this.createLabeledCell(n, i)
            .appendTo(L)
            .addClass("propertypage-name-label"),
          (a = $("<td/>")),
          a.appendTo(L),
          (r = _()),
          r.appendTo(a),
          this.bindControl(new h(r, C.plottype, null, !0, this.model(), f)),
          (l = $("<td/>")),
          l.appendTo(L),
          (p = T()),
          p.appendTo(l),
          this.bindControl(new h(p, C.location, null, !0, this.model(), f)),
          w
            ? this._prepareLayoutForPalette(e, t, w, m, f)
            : ((L = $('<tr class="line"/>')),
              L.appendTo(this._table),
              $("<td/>").appendTo(L),
              $("<td/>").appendTo(L),
              (s = $("<td/>")),
              s.appendTo(L),
              s.addClass("colorpicker-cell"),
              (d = g(s)),
              this.bindControl(
                new u(d, C.color, !0, this.model(), f, C.transparency)
              ));
      }),
      (i.prototype._prepareLayoutForCharsPlot = function(e, t) {
        var o,
          i,
          n,
          a,
          r,
          l,
          p,
          s,
          d,
          b = t.id,
          C = this._study.properties().styles[b],
          w = this._findPlotPalette(e, t),
          _ = w.palette,
          m = w.paletteProps,
          f = "Change " + b,
          L = $('<tr class="line"/>');
        L.appendTo(this._table),
          (o = $("<td/>")),
          o.appendTo(L),
          o.addClass("visibility-cell"),
          (i = $("<input type='checkbox' class='visibility-switch'/>")),
          i.appendTo(o),
          this.bindControl(new c(i, C.visible, !0, this.model(), f)),
          (n = $.t(this._study.properties().styles[b].title.value(), {
            context: "input"
          })),
          this.createLabeledCell(n, i)
            .appendTo(L)
            .addClass("propertypage-name-label"),
          (a = $("<td/>")),
          a.appendTo(L),
          (r = $('<input type="text"/>')),
          r.appendTo(a),
          r.keyup(function() {
            var e = $(this),
              t = e.val();
            t && (e.val(t.split("")[t.length - 1]), e.change());
          }),
          this.bindControl(new y(r, C.char, null, !1, this.model(), f)),
          (l = $("<td/>")),
          l.appendTo(L),
          (p = T()),
          p.appendTo(l),
          this.bindControl(new h(p, C.location, null, !0, this.model(), f)),
          _
            ? this._prepareLayoutForPalette(e, t, _, m, f)
            : ((L = $('<tr class="line"/>')),
              L.appendTo(this._table),
              $("<td/>").appendTo(L),
              $("<td/>").appendTo(L),
              (s = $("<td/>")),
              s.appendTo(L),
              s.addClass("colorpicker-cell"),
              (d = g(s)),
              this.bindControl(
                new u(d, C.color, !0, this.model(), f, C.transparency)
              ));
      }),
      (i.prototype._isStyleNeedsConnectPoints = function(e) {
        return [P.Cross, P.Circles].indexOf(e) >= 0;
      }),
      (i.prototype._prepareLayoutForPalette = function(e, t, o, i, n, a) {
        var r,
          l,
          p,
          s,
          d,
          b,
          y,
          w,
          T,
          _,
          f,
          L,
          k,
          S,
          P,
          x = e,
          B = t.id,
          E = null,
          R = B.startsWith("fill");
        (E = a
          ? this._study.properties().ohlcPlots[B]
          : R
          ? this._study.properties().filledAreasStyle[B]
          : this._study.properties().styles[B]),
          (r = 0);
        for (l in o.colors)
          (p = i.colors[l]),
            (s = $('<tr class="line"/>')),
            s.appendTo(this._table),
            $("<td/>").appendTo(s),
            (d = $("<td/>")),
            d.appendTo(s),
            d.addClass("propertypage-name-label"),
            d.html($.t(p.name.value(), { context: "input" })),
            (b = $("<td/>")),
            b.appendTo(s),
            b.addClass("colorpicker-cell"),
            (y = g(b)),
            this.bindControl(
              new u(y, p.color, !0, this.model(), n, E.transparency)
            ),
            !R &&
              this._study.isLinePlot(x) &&
              ((w = $("<td/>")),
              w.appendTo(s),
              (T = m()),
              T.appendTo(w),
              this.bindControl(
                new C(
                  T,
                  p.width,
                  !0,
                  this.model(),
                  n,
                  this._study.metaInfo().isTVScript
                )
              ),
              (_ = $("<td>")),
              _.appendTo(s),
              0 === r &&
                ((f = v()),
                f.appendTo(_),
                this.bindControl(
                  new h(f, E.plottype, parseInt, !0, this.model(), n)
                ),
                (L = $("<input type='checkbox'>")),
                (k = $('<td colspan="4">').css({ whiteSpace: "nowrap" })),
                (S = $("<span>").html($.t("Price Line"))),
                (P = $("<span>")),
                P.append(L),
                k
                  .append(P)
                  .append(S)
                  .appendTo(s),
                this.bindControl(
                  new c(L, E.trackPrice, !0, this.model(), "Change Price Line")
                ))),
            r++;
      }),
      (i.prototype._prepareLayoutForArrowsPlot = function(e, t) {
        var o,
          i,
          n,
          a,
          r,
          l,
          p,
          s = t.id,
          d = this._study.properties().styles[s],
          h = "Change " + s,
          b = $('<tr class="line"/>');
        b.appendTo(this._table),
          (o = $("<td/>")),
          o.appendTo(b),
          o.addClass("visibility-cell"),
          (i = $("<input type='checkbox' class='visibility-switch'/>")),
          i.appendTo(o),
          (n = $.t(this._study.properties().styles[s].title.value(), {
            context: "input"
          })),
          this.createLabeledCell(n, i)
            .appendTo(b)
            .addClass("propertypage-name-label"),
          (a = $("<td/>")),
          a.appendTo(b),
          a.addClass("colorpicker-cell"),
          (r = g(a)),
          (l = $("<td/>")),
          l.appendTo(b),
          l.addClass("colorpicker-cell"),
          (p = g(l)),
          this.bindControl(new c(i, d.visible, !0, this.model(), h)),
          this.bindControl(
            new u(r, d.colorup, !0, this.model(), h, d.transparency)
          ),
          this.bindControl(
            new u(p, d.colordown, !0, this.model(), h, d.transparency)
          );
      }),
      (i.prototype._findPlotPalette = function(e, t) {
        var o,
          i = e,
          n = t.id,
          a = null,
          r = null,
          l = this._study.metaInfo().plots;
        if (this._study.isBarColorerPlot(i) || this._study.isBgColorerPlot(i))
          (a = this._study.metaInfo().palettes[t.palette]),
            (r = this._study.properties().palettes[t.palette]);
        else
          for (o = 0; o < l.length; o++)
            if (
              l[o].target === n &&
              (this._study.isSelfColorerPlot(o) ||
                this._study.isOHLCColorerPlot(o))
            ) {
              (a = this._study.metaInfo().palettes[l[o].palette]),
                (r = this._study.properties().palettes[l[o].palette]);
              break;
            }
        return { palette: a, paletteProps: r };
      }),
      (i.prototype._prepareStudyPropertiesLayout = function() {
        var e,
          t,
          o = $(
            '<table class="property-page study-properties" cellspacing="0" cellpadding="2">'
          );
        return (
          this._study.metaInfo().is_price_study ||
            ((e = this.createPrecisionEditor()),
            (t = $("<tr>")),
            t.appendTo(o),
            $("<td>" + $.t("Precision") + "</td>").appendTo(t),
            $("<td>")
              .append(e)
              .appendTo(t),
            this.bindControl(
              new h(
                e,
                this._study.properties().precision,
                null,
                !0,
                this.model(),
                "Change Precision"
              )
            )),
          "Compare@tv-basicstudies" === this._study.metaInfo().id &&
            ((e = this.createSeriesMinTickEditor()),
            (t = $("<tr>")),
            t.appendTo(o),
            $("<td>" + $.t("Override Min Tick") + "</td>").appendTo(t),
            $("<td>")
              .append(e)
              .appendTo(t),
            this.bindControl(
              new h(
                e,
                this._study.properties().minTick,
                null,
                !0,
                this.model(),
                "Change MinTick"
              )
            )),
          this._putStudyDefaultStyles(o),
          o
        );
      }),
      (i.prototype._putStudyDefaultStyles = function(e, t) {
        var o,
          i,
          n,
          a,
          r,
          l,
          p = null,
          s = this._study;
        return (
          (!s.properties().linkedToSeries ||
            !s.properties().linkedToSeries.value()) &&
          ($.each(this._model.m_model.panes(), function(e, t) {
            $.each(t.dataSources(), function(e, o) {
              if (o === s) return (p = t), !1;
            });
          }),
          (this._pane = p),
          this._pane &&
            (-1 !==
            this._pane
              .leftPriceScale()
              .dataSources()
              .indexOf(this._study)
              ? (o = "left")
              : -1 !==
                this._pane
                  .rightPriceScale()
                  .dataSources()
                  .indexOf(this._study)
              ? (o = "right")
              : this._pane.isOverlay(this._study) && (o = "none")),
          o &&
            ((i = this),
            (n = { left: $.t("Scale Left"), right: $.t("Scale Right") }),
            i._pane.actionNoScaleIsEnabled(s) &&
              (n.none = $.t("Screen (No Scale)")),
            (a = this.createKeyCombo(n)
              .val(o)
              .change(function() {
                switch (this.value) {
                  case "left":
                    i._model.move(i._study, i._pane, i._pane.leftPriceScale());
                    break;
                  case "right":
                    i._model.move(i._study, i._pane, i._pane.rightPriceScale());
                    break;
                  case "none":
                    i._model.move(i._study, i._pane, null);
                }
              })),
            (r = this.addRow(e)),
            $("<td>" + $.t("Scale") + "</td>").appendTo(r),
            (l = $("<td>")
              .appendTo(r)
              .append(a)),
            t && t > 2 && l.attr("colspan", t - 1)),
          e)
        );
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (i.prototype._prepareFilledAreaBackground = function(e, t, o, i, n) {
        var a,
          r,
          l,
          p = $('<tr class="line"/>'),
          s = $("<td/>");
        return (
          s.appendTo(p),
          (a = $("<input type='checkbox' class='visibility-switch'/>")),
          a.appendTo(s),
          this.createLabeledCell(i, a)
            .appendTo(p)
            .addClass("propertypage-name-label"),
          (r = $("<td/>")),
          r.appendTo(p),
          r.addClass("colorpicker-cell"),
          (l = g(r)),
          this.bindControl(new c(a, e, !0, this.model(), n + " visibility")),
          this.bindControl(new u(l, t, !0, this.model(), n + " color", o)),
          p
        );
      }),
      inherit(n, r),
      (n.prototype.prepareLayout = function() {
        if (
          this._study.properties().linkedToSeries &&
          this._study.properties().linkedToSeries.value()
        )
          return void (this._table = $());
        this._table = $();
      }),
      (n.prototype.widget = function() {
        return this._table;
      }),
      (i._createRow_horizlines = function(e, t) {
        var o = this.addRow(e),
          i = t.name.value(),
          n = $("<input type='checkbox' class='visibility-switch'/>"),
          a = this.createColorPicker(),
          r = m(),
          l = w();
        $("<td>")
          .append(n)
          .appendTo(o),
          this.createLabeledCell(i, n).appendTo(o),
          $("<td>")
            .append(a)
            .appendTo(o),
          $("<td>")
            .append(r)
            .appendTo(o),
          $("<td>")
            .append(l.render())
            .appendTo(o),
          this.bindControl(
            new c(n, t.visible, !0, this.model(), "Change " + i + " visibility")
          ),
          this.bindControl(
            new u(a, t.color, !0, this.model(), "Change " + i + " color")
          ),
          this.bindControl(
            new h(
              l,
              t.style,
              parseInt,
              !0,
              this.model(),
              "Change " + i + " style"
            )
          ),
          this.bindControl(
            new C(r, t.width, !0, this.model(), "Change " + i + " width")
          );
      }),
      (i._createRow_vertlines = function(e, t) {
        var o = this.addRow(e),
          i = t.name.value(),
          n = $("<input type='checkbox' class='visibility-switch'/>"),
          a = this.createColorPicker(),
          r = m(),
          l = w();
        $("<td>")
          .append(n)
          .appendTo(o),
          this.createLabeledCell(i, n).appendTo(o),
          $("<td>")
            .append(a)
            .appendTo(o),
          $("<td>")
            .append(r)
            .appendTo(o),
          $("<td>")
            .append(l.render())
            .appendTo(o),
          this.bindControl(
            new c(n, t.visible, !0, this.model(), "Change " + i + " visibility")
          ),
          this.bindControl(
            new u(a, t.color, !0, this.model(), "Change " + i + " color")
          ),
          this.bindControl(
            new h(
              l,
              t.style,
              parseInt,
              !0,
              this.model(),
              "Change " + i + " style"
            )
          ),
          this.bindControl(
            new C(r, t.width, !0, this.model(), "Change " + i + " width")
          );
      }),
      (i._createRow_lines = function(e, t) {
        var o = this.addRow(e),
          i = t.title.value(),
          n = $("<input type='checkbox' class='visibility-switch'/>"),
          a = this.createColorPicker(),
          r = m(),
          l = w();
        $("<td>")
          .append(n)
          .appendTo(o),
          this.createLabeledCell(i, n).appendTo(o),
          $("<td>")
            .append(a)
            .appendTo(o),
          $("<td>")
            .append(r)
            .appendTo(o),
          $("<td>")
            .append(l.render())
            .appendTo(o),
          this.bindControl(
            new c(n, t.visible, !0, this.model(), "Change " + i + " visibility")
          ),
          this.bindControl(
            new u(a, t.color, !0, this.model(), "Change " + i + " color")
          ),
          this.bindControl(
            new h(
              l,
              t.style,
              parseInt,
              !0,
              this.model(),
              "Change " + i + " style"
            )
          ),
          this.bindControl(
            new C(r, t.width, !0, this.model(), "Change " + i + " width")
          );
      }),
      (i._createRow_hlines = function(e, t) {
        var o,
          i,
          n,
          a = this.addRow(e),
          r = t.name.value(),
          l = $("<input type='checkbox' class='visibility-switch'/>"),
          p = this.createColorPicker(),
          s = m(),
          d = w(),
          b = $("<input type='checkbox'>");
        $("<td>")
          .append(l)
          .appendTo(a),
          this.createLabeledCell(r, l).appendTo(a),
          $("<td>")
            .append(p)
            .appendTo(a),
          $("<td>")
            .append(s)
            .appendTo(a),
          $("<td>")
            .append(d.render())
            .appendTo(a),
          $("<td>").appendTo(a),
          $("<td>")
            .append(b)
            .appendTo(a),
          this.createLabeledCell("Show Price", b).appendTo(a),
          this.bindControl(
            new c(l, t.visible, !0, this.model(), "Change " + r + " visibility")
          ),
          this.bindControl(
            new u(p, t.color, !0, this.model(), "Change " + r + " color")
          ),
          this.bindControl(
            new h(
              d,
              t.style,
              parseInt,
              !0,
              this.model(),
              "Change " + r + " style"
            )
          ),
          this.bindControl(
            new C(s, t.width, !0, this.model(), "Change " + r + " width")
          ),
          this.bindControl(
            new c(
              b,
              t.showPrice,
              !0,
              this.model(),
              "Change " + r + " show price"
            )
          ),
          t.enableText.value() &&
            ((a = this.addRow(e)),
            $('<td colspan="2">').appendTo(a),
            (o = $("<input type='checkbox'>")),
            $('<td class="text-center">')
              .append(o)
              .appendTo(a),
            this.createLabeledCell("Show Text", o).appendTo(a),
            this.bindControl(
              new c(
                o,
                t.showText,
                !0,
                this.model(),
                "Change " + r + " show text"
              )
            ),
            (i = TradingView.createTextPosEditor()),
            $("<td>")
              .append(i.render())
              .appendTo(a),
            this.bindControl(
              new h(
                i,
                t.textPos,
                parseInt,
                !0,
                this.model(),
                "Change " + r + " text position"
              )
            ),
            (n = this.createFontSizeEditor()),
            $('<td colspan="2">')
              .append(n)
              .appendTo(a),
            this.bindControl(
              new h(
                n,
                t.fontSize,
                parseInt,
                !0,
                this.model(),
                "Change " + r + " font size"
              )
            ));
      }),
      (i._createRow_hhists = function(e, t) {
        var o,
          i,
          n,
          a,
          r,
          d,
          b = t.title.value(),
          C = [],
          g = [],
          w = this.addRow(e),
          T = f();
        $("<td>")
          .append(T)
          .appendTo(w),
          this.createLabeledCell(b, T).appendTo(w),
          this.bindControl(
            new c(T, t.visible, !0, this.model(), "Change " + b + " Visibility")
          ),
          (w = this.addRow(e)),
          (o = $("<input/>")),
          o.attr("type", "text"),
          o.addClass("ticker"),
          this.createLabeledCell($.t("Width (% of the Box)"), o).appendTo(w),
          $("<td>")
            .append(o)
            .appendTo(w),
          (i = [s(40)]),
          i.push(l(0)),
          i.push(p(100)),
          this.bindControl(
            new y(
              o,
              t.percentWidth,
              i,
              !1,
              this.model(),
              "Change Percent Width"
            )
          ),
          (w = this.addLabeledRow(e, "Placement")),
          (n = L()),
          $("<td>")
            .append(n)
            .appendTo(w),
          this.bindControl(
            new h(
              n,
              t.direction,
              null,
              !0,
              this.model(),
              "Change " + b + " Placement"
            )
          ),
          (w = this.addRow(e)),
          (a = $("<input type='checkbox'>")),
          $("<td>")
            .append(a)
            .appendTo(w),
          this.createLabeledCell($.t("Show Values"), a).appendTo(w),
          this.bindControl(
            new c(
              a,
              t.showValues,
              !0,
              this.model(),
              "Change " + b + " Show Values"
            )
          ),
          (w = this.addRow(e)),
          (r = this.createColorPicker()),
          this.createLabeledCell($.t("Text Color"), r).appendTo(w),
          $("<td>")
            .append(r)
            .appendTo(w),
          this.bindControl(
            new u(
              r,
              t.valuesColor,
              !0,
              this.model(),
              "Change " + b + " Text Color"
            )
          );
        for (d in t.colors)
          isNumber(parseInt(d, 10)) &&
            ((w = this.addRow(e)),
            (C[d] = t.titles[d].value()),
            (g[d] = this.createColorPicker()),
            $("<td>")
              .append(C[d])
              .appendTo(w),
            $("<td>")
              .append(g[d])
              .appendTo(w),
            this.bindControl(
              new u(
                g[d],
                t.colors[d],
                !0,
                this.model(),
                "Change " + C[d] + " color"
              )
            ));
      }),
      (i._createRow_backgrounds = function(e, t) {
        var o = this.addRow(e),
          i = $("<input type='checkbox' class='visibility-switch'/>"),
          n = t.name.value(),
          a = this.createColorPicker();
        $("<td>")
          .append(i)
          .appendTo(o),
          this.createLabeledCell(n, i).appendTo(o),
          $("<td>")
            .append(a)
            .appendTo(o),
          this.bindControl(
            new c(i, t.visible, !0, this.model(), "Change " + n + " visibility")
          ),
          this.bindControl(
            new u(
              a,
              t.color,
              !0,
              this.model(),
              "Change " + n + " color",
              t.transparency
            )
          );
      }),
      (i._createRow_polygons = function(e, t) {
        var o = this.addRow(e),
          i = t.name.value(),
          n = this.createColorPicker();
        $("<td>")
          .append(i)
          .appendTo(o),
          $("<td>")
            .append(n)
            .appendTo(o),
          this.bindControl(
            new u(n, t.color, !0, this.model(), "Change " + i + " color")
          );
      }),
      (i._createRow_trendchannels = function(e, t) {
        var o = this.addRow(e),
          i = t.name.value(),
          n = this.createColorPicker();
        $("<td>")
          .append(i)
          .appendTo(o),
          $("<td>")
            .append(n)
            .appendTo(o),
          this.bindControl(
            new u(
              n,
              t.color,
              !0,
              this.model(),
              "Change " + i + " color",
              t.transparency
            )
          );
      }),
      (i._createRow_textmarks = function(e, t) {
        var o = this.addLabeledRow(e),
          i = t.name.value(),
          n = this.createColorPicker(),
          a = this.createColorPicker(),
          r = this.createFontEditor(),
          l = this.createFontSizeEditor(),
          p = $(
            '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>'
          ),
          s = $(
            '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>'
          );
        $("<td>")
          .append(i)
          .appendTo(o),
          "rectangle" !== t.shape.value() &&
            $("<td>")
              .append(n)
              .appendTo(o),
          $("<td>")
            .append(a)
            .appendTo(o),
          $("<td>")
            .append(r)
            .appendTo(o),
          $("<td>")
            .append(l)
            .appendTo(o),
          $("<td>")
            .append(p)
            .appendTo(o),
          $("<td>")
            .append(s)
            .appendTo(o),
          this.bindControl(
            new u(
              n,
              t.color,
              !0,
              this.model(),
              "Change " + i + " color",
              t.transparency
            )
          ),
          this.bindControl(
            new u(
              a,
              t.fontColor,
              !0,
              this.model(),
              "Change " + i + " text color",
              t.transparency
            )
          ),
          this.bindControl(
            new h(
              l,
              t.fontSize,
              parseInt,
              !0,
              this.model(),
              "Change " + i + " font size"
            )
          ),
          this.bindControl(
            new h(
              r,
              t.fontFamily,
              null,
              !0,
              this.model(),
              "Change " + i + " font"
            )
          ),
          this.bindControl(
            new c(p, t.fontBold, !0, this.model(), "Change Text Font Bold")
          ),
          this.bindControl(
            new c(s, t.fontItalic, !0, this.model(), "Change Text Font Italic")
          );
      }),
      (i._createRow_shapemarks = function(e, t) {
        var o = this.addRow(e),
          i = $("<input type='checkbox' class='visibility-switch'/>"),
          n = t.name.value(),
          a = this.createColorPicker(),
          r = $("<input/>");
        r.attr("type", "text"),
          r.addClass("ticker"),
          $("<td>")
            .append(i)
            .appendTo(o),
          this.createLabeledCell(n, i).appendTo(o),
          $("<td>")
            .append(a)
            .appendTo(o),
          this.createLabeledCell("Size", r).appendTo(o),
          $("<td>")
            .append(r)
            .appendTo(o),
          this.bindControl(
            new c(i, t.visible, !0, this.model(), "Change " + n + " visibility")
          ),
          this.bindControl(
            new u(
              a,
              t.color,
              !0,
              this.model(),
              "Change " + n + " back color",
              t.transparency
            )
          ),
          this.bindControl(
            new y(r, t.size, null, !1, this.model(), "Change size")
          );
      }),
      (t.StudyStylesPropertyPage = i),
      (t.StudyDisplayPropertyPage = n);
  },
  267: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.FloatBinder,
      l = a.BooleanBinder,
      p = a.SliderBinder,
      s = a.ColorBinding,
      d = a.SimpleComboBinder,
      h = o(47).addColorPicker,
      c = o(31).createLineStyleEditor,
      b = o(15).createLineWidthEditor,
      u = o(65).createTransparencyEditor;
    inherit(i, n),
      (i.prototype.addLevelEditor = function(e, t) {
        var o,
          i,
          n,
          a,
          p,
          d = t || $("<tr>").appendTo(this._table),
          c = $("<td>");
        return (
          c.appendTo(d),
          (o = $("<input type='checkbox' class='visibility-switch'>")),
          o.appendTo(c),
          t && o.css("margin-left", "15px"),
          (i = $("<td>")),
          i.appendTo(d),
          (n = $("<input type='text'>")),
          n.appendTo(i),
          n.css("width", "70px"),
          this.bindControl(
            new r(n, e.coeff, !1, this.model(), "Change Pitchfork Line Coeff")
          ),
          (a = $("<td class='colorpicker-cell'>")),
          a.appendTo(d),
          (p = h(a)),
          this.bindControl(
            new l(
              o,
              e.visible,
              !0,
              this.model(),
              "Change Fib Retracement Line Visibility"
            )
          ),
          this.bindControl(
            new s(
              p,
              e.color,
              !0,
              this.model(),
              "Change Fib Retracement Line Color",
              0
            )
          ),
          d
        );
      }),
      (i.prototype.prepareLayout = function() {
        var e,
          t,
          o,
          i,
          n,
          a,
          r,
          C,
          y,
          g,
          w,
          T,
          _,
          m,
          f,
          L,
          v,
          k,
          S,
          P,
          x,
          B,
          E,
          R,
          F,
          I,
          A,
          D,
          W,
          O,
          V,
          j,
          z;
        for (
          this._div = $(document.createElement("div")).addClass(
            "property-page"
          ),
            e = this._linetool.properties().trendline,
            t = $("<table>")
              .appendTo(this._div)
              .css("padding-bottom", "3px"),
            e &&
              ((o = $("<tr>").appendTo(t)),
              (i = $("<input type='checkbox' class='visibility-switch'>")),
              $("<td>")
                .append(i)
                .appendTo(o),
              $("<td>")
                .append($.t("Trend Line"))
                .appendTo(o),
              this.bindControl(
                new l(
                  i,
                  e.visible,
                  !0,
                  this.model(),
                  "Change Fib Retracement Line Visibility"
                )
              ),
              (n = $("<td class='colorpicker-cell'>").appendTo(o)),
              (a = h(n)),
              this.bindControl(
                new s(
                  a,
                  e.color,
                  !0,
                  this.model(),
                  "Change Fib Retracement Line Color",
                  0
                )
              ),
              (r = $("<td>").appendTo(o)),
              (C = b()),
              C.appendTo(r),
              this.bindControl(
                new p(
                  C,
                  e.linewidth,
                  parseInt,
                  this.model(),
                  "Change Fib Retracement Line Width"
                )
              ),
              (y = $("<td>").appendTo(o)),
              (g = c()),
              g.render().appendTo(y),
              this.bindControl(
                new d(
                  g,
                  e.linestyle,
                  parseInt,
                  !0,
                  this.model(),
                  "Change Fib Retracement Line Style"
                )
              )),
            w = this._linetool.properties().levelsStyle,
            T = $("<tr>").appendTo(t),
            $("<td>").appendTo(T),
            $("<td>" + $.t("Levels Line") + "</td>").appendTo(T),
            $("<td>").appendTo(T),
            r = $("<td>").appendTo(T),
            C = b(),
            C.appendTo(r),
            this.bindControl(
              new p(
                C,
                w.linewidth,
                parseInt,
                this.model(),
                "Change Fib Retracement Line Width"
              )
            ),
            y = $("<td>").appendTo(T),
            g = c(),
            g.render().appendTo(y),
            this.bindControl(
              new d(
                g,
                w.linestyle,
                parseInt,
                !0,
                this.model(),
                "Change Fib Retracement Line Style"
              )
            ),
            this._table = $(document.createElement("table")).appendTo(
              this._div
            ),
            this._table.attr("cellspacing", "0"),
            this._table.attr("cellpadding", "2"),
            _ = {},
            m = 0;
          m < 24;
          m++
        )
          (f = m % 8),
            (T = _[f]),
            (L = "level" + (m + 1)),
            (_[f] = this.addLevelEditor(this._linetool.properties()[L], T));
        this.addOneColorPropertyWidget(this._table),
          (v = $("<table cellpadding=0 cellspacing=0>").appendTo(this._div)),
          (k = $("<tr>").appendTo(v)),
          this._linetool.properties().extendLines &&
            ((S = $("<input type='checkbox' class='visibility-switch'>")),
            (P = $("<label>")
              .append(S)
              .append($.t("Extend Lines"))),
            $("<td>")
              .append(P)
              .appendTo(k)),
          this._linetool.properties().extendLeft &&
            ((x = $("<input type='checkbox' class='visibility-switch'>")),
            (P = $("<label>")
              .append(x)
              .append($.t("Extend Left"))),
            $("<td>")
              .append(P)
              .appendTo(k)),
          this._linetool.properties().extendRight &&
            ((B = $("<input type='checkbox' class='visibility-switch'>")),
            (P = $("<label>")
              .append(B)
              .append($.t("Extend Right"))),
            $("<td>")
              .append(P)
              .appendTo(k)),
          this._linetool.properties().reverse &&
            ((E = $("<input type='checkbox' class='visibility-switch'>")),
            (P = $("<label>")
              .append(E)
              .append($.t("Reverse"))),
            $("<td>")
              .append(P)
              .appendTo(k)),
          (R = $("<tr>").appendTo(v)),
          (F = $("<input type='checkbox' class='visibility-switch'>")),
          (P = $("<label>")
            .append(F)
            .append($.t("Levels"))),
          $("<td>")
            .append(P)
            .appendTo(R),
          (I = $("<input type='checkbox' class='visibility-switch'>")),
          (P = $("<label>")
            .append(I)
            .append($.t("Prices"))),
          $("<td>")
            .append(P)
            .appendTo(R),
          (A = $("<input type='checkbox' class='visibility-switch'>")),
          (P = $("<label>")
            .append(A)
            .append($.t("Percents"))),
          $("<td>")
            .append(P)
            .appendTo(R),
          (D = $("<table cellspacing='0' cellpadding='0'>").appendTo(
            this._div
          )),
          (W = $(
            "<select><option value='left'>" +
              $.t("left") +
              "</option><option value='center'>" +
              $.t("center") +
              "</option><option value='right'>" +
              $.t("right") +
              "</option></select>"
          )),
          (O = $(
            "<select><option value='bottom'>" +
              $.t("top") +
              "</option><option value='middle'>" +
              $.t("middle") +
              "</option><option value='top'>" +
              $.t("bottom") +
              "</option></select>"
          )),
          (T = $("<tr>")),
          T.append("<td>" + $.t("Labels") + "</td>")
            .append(W)
            .append("<td>&nbsp</td>")
            .append(O),
          T.appendTo(D),
          (V = $("<table cellspacing='0' cellpadding='0'>").appendTo(
            this._div
          )),
          (T = $("<tr>").appendTo(V)),
          (j = $("<input type='checkbox' class='visibility-switch'>")),
          $("<td>")
            .append(j)
            .appendTo(T),
          this.createLabeledCell($.t("Background"), j).appendTo(T),
          (z = u()),
          $("<td>")
            .append(z)
            .appendTo(T),
          this.bindControl(
            new l(
              I,
              this._linetool.properties().showPrices,
              !0,
              this.model(),
              "Change Gann Fan Prices Visibility"
            )
          ),
          this.bindControl(
            new l(
              F,
              this._linetool.properties().showCoeffs,
              !0,
              this.model(),
              "Change Gann Fan Levels Visibility"
            )
          ),
          this.bindControl(
            new l(
              j,
              this._linetool.properties().fillBackground,
              !0,
              this.model(),
              "Change Fib Retracement Background Visibility"
            )
          ),
          this.bindControl(
            new p(
              z,
              this._linetool.properties().transparency,
              !0,
              this.model(),
              "Change Fib Retracement Background Transparency"
            )
          ),
          this._linetool.properties().extendLines &&
            this.bindControl(
              new l(
                S,
                this._linetool.properties().extendLines,
                !0,
                this.model(),
                "Change Fib Retracement Extend Lines"
              )
            ),
          this._linetool.properties().extendLeft &&
            this.bindControl(
              new l(
                x,
                this._linetool.properties().extendLeft,
                !0,
                this.model(),
                "Change Fib Retracement Extend Lines"
              )
            ),
          this._linetool.properties().extendRight &&
            this.bindControl(
              new l(
                B,
                this._linetool.properties().extendRight,
                !0,
                this.model(),
                "Change Fib Retracement Extend Lines"
              )
            ),
          this._linetool.properties().reverse &&
            this.bindControl(
              new l(
                E,
                this._linetool.properties().reverse,
                !0,
                this.model(),
                "Change Fib Retracement Reverse"
              )
            ),
          this.bindControl(
            new d(
              W,
              this._linetool.properties().horzLabelsAlign,
              null,
              !0,
              this.model(),
              "Change Fib Labels Horizontal Alignment"
            )
          ),
          this.bindControl(
            new d(
              O,
              this._linetool.properties().vertLabelsAlign,
              null,
              !0,
              this.model(),
              "Change Fib Labels Vertical Alignment"
            )
          ),
          this.bindControl(
            new l(
              A,
              this._linetool.properties().coeffsAsPercents,
              !0,
              this.model(),
              "Change Fib Retracement Coeffs As Percents"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._div;
      }),
      (e.exports = i);
  },
  398: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      p.call(this, e, t), (this._linetool = o), this.prepareLayout();
    }
    function n(e, t, o) {
      a.call(this, e, t, o), this.prepareLayout();
    }
    var a = o(14),
      r = o(81),
      l = o(10),
      p = l.PropertyPage,
      s = l.SliderBinder,
      d = o(65).createTransparencyEditor,
      h = o(121);
    inherit(i, r),
      (i.prototype.prepareLayout = function() {
        var e,
          t,
          o,
          i,
          n,
          a,
          l = $(
            '<table class="property-page" cellspacing="0" cellpadding="0">'
          ),
          p = $(
            '<table class="property-page" cellspacing="0" cellpadding="0">'
          ).data({
            "layout-tab": h.TabNames.inputs,
            "layout-tab-priority": h.TabPriority.Inputs
          });
        (this._table = l.add(p)),
          r.prototype.prepareLayoutForTable.call(this, l),
          (e = $("<tr>").appendTo(p)),
          $("<td>")
            .append($.t("Avg HL in minticks"))
            .appendTo(e),
          (t = $("<td>").appendTo(e)),
          (o = $("<input type='text'>")
            .addClass("ticker")
            .appendTo(t)),
          (e = $("<tr>").appendTo(p)),
          $("<td>")
            .append($.t("Variance"))
            .appendTo(e),
          (i = $("<td>").appendTo(e)),
          (n = $("<input type='text'>")
            .addClass("ticker")
            .appendTo(i)),
          (a = this._linetool.properties()),
          this.bindInteger(
            o,
            a.averageHL,
            $.t("Change Average HL value"),
            1,
            5e4
          ),
          this.bindInteger(n, a.variance, $.t("Change Variance value"), 1, 100),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      inherit(n, a),
      (n.prototype.prepareLayout = function() {
        var e, t, o, i, n, a, r, l, p, h, c;
        (this._widget = $("<div>")),
          (e = $("<table cellspacing=4>").appendTo(this._widget)),
          (t = this.createColorPicker()),
          (o = this.createColorPicker()),
          (i = this.createColorPicker()),
          (n = this.createColorPicker()),
          (a = this.createColorPicker()),
          (r = $("<input type='checkbox' class='visibility-switch'/>").data(
            "hides",
            $(n).add(a)
          )),
          (l = $("<input type='checkbox' class='visibility-switch'/>").data(
            "hides",
            $(i)
          )),
          (p = this.addLabeledRow(e, $.t("Candles"))),
          $("<td>").prependTo(p),
          $("<td>")
            .append(t)
            .appendTo(p),
          $("<td>")
            .append(o)
            .appendTo(p),
          (p = this.addLabeledRow(e, $.t("Borders"), r)),
          $("<td>")
            .append(r)
            .prependTo(p),
          $("<td>")
            .append(n)
            .appendTo(p),
          $("<td>")
            .append(a)
            .appendTo(p),
          $("<td>").appendTo(p),
          (p = this.addLabeledRow(e, $.t("Wick"), l)),
          $("<td>")
            .append(l)
            .prependTo(p),
          $("<td>")
            .append(i)
            .appendTo(p),
          $("<td>").appendTo(p),
          (e = $("<table>").appendTo(this._widget)),
          (p = $("<tr>").appendTo(e)),
          $("<td colspan='2'>")
            .append($.t("Transparency"))
            .appendTo(p),
          (h = d()),
          $("<td colspan='2'>")
            .append(h)
            .appendTo(p),
          (c = this._linetool.properties()),
          this.bindColor(t, c.candleStyle.upColor, "Change Candle Up Color"),
          this.bindColor(
            o,
            c.candleStyle.downColor,
            "Change Candle Down Color"
          ),
          this.bindBoolean(
            l,
            c.candleStyle.drawWick,
            "Change Candle Wick Visibility"
          ),
          this.bindColor(
            i,
            c.candleStyle.wickColor,
            "Change Candle Wick Color"
          ),
          this.bindBoolean(
            r,
            c.candleStyle.drawBorder,
            "Change Candle Border Visibility"
          ),
          this.bindColor(
            n,
            c.candleStyle.borderUpColor,
            "Change Candle Up Border Color"
          ),
          this.bindColor(
            a,
            c.candleStyle.borderDownColor,
            "Change Candle Down Border Color"
          ),
          this.bindControl(
            new s(
              h,
              c.transparency,
              !0,
              this.model(),
              "Change Guest Feed Transparency"
            )
          );
      }),
      (n.prototype.widget = function() {
        return this._widget;
      }),
      (t.LineToolGhostFeedInputsPropertyPage = i),
      (t.LineToolGhostFeedStylesPropertyPage = n);
  },
  399: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      a.call(this, e, t, o), this.prepareLayout();
    }
    function n(e, t, o) {
      r.call(this, e, t, o);
    }
    var a = o(14),
      r = o(81),
      l = o(10),
      p = l.BooleanBinder,
      s = l.SimpleComboBinder,
      d = l.SimpleStringBinder,
      h = l.ColorBinding,
      c = l.SliderBinder,
      b = o(31).createLineStyleEditor,
      u = o(15).createLineWidthEditor;
    inherit(i, a),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n, a, r, l, C, y, g, w, T, _;
        (this._res = $("<div>")),
          (this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2" style="width:100%"></table>'
          ).appendTo(this._res)),
          (e = u()),
          (t = b()),
          (o = this.createColorPicker()),
          (i = this.addLabeledRow(this._table, "Line")),
          $("<td>")
            .append(o)
            .appendTo(i),
          $("<td>")
            .append(e)
            .appendTo(i),
          $('<td colspan="3">')
            .append(t.render().css("display", "block"))
            .appendTo(i),
          (n = $("<input type='checkbox' class='visibility-switch'>")),
          (i = $("<tr>").appendTo(this._table)),
          $('<td colspan="3">')
            .append(
              $("<label>")
                .append(n)
                .append($.t("Show Price"))
            )
            .prependTo(i),
          (a = $("<input type='checkbox'>")),
          (i = $("<tr>").appendTo(this._table)),
          $('<td colspan="3">')
            .append(
              $("<label>")
                .append(a)
                .append($.t("Show Text"))
            )
            .prependTo(i),
          (i = this.addLabeledRow(this._table, "Text:")),
          (r = this.createColorPicker()),
          (l = this.createFontSizeEditor()),
          (C = this.createFontEditor()),
          (y = $(
            '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>'
          )),
          (g = $(
            '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>'
          )),
          $("<td>")
            .append(r)
            .appendTo(i),
          $("<td>")
            .append(C)
            .appendTo(i),
          $("<td>")
            .append(l)
            .appendTo(i),
          $("<td>")
            .append(y)
            .appendTo(i),
          $("<td>")
            .append(g)
            .appendTo(i),
          (i = $("<tr>").appendTo(this._table)),
          $("<td colspan='2'>")
            .append($.t("Text Alignment:"))
            .appendTo(i),
          (w = $(
            "<select><option value='left'>" +
              $.t("left") +
              "</option><option value='center'>" +
              $.t("center") +
              "</option><option value='right'>" +
              $.t("right") +
              "</option></select>"
          )),
          (T = $(
            "<select><option value='bottom'>" +
              $.t("top") +
              "</option><option value='middle'>" +
              $.t("middle") +
              "</option><option value='top'>" +
              $.t("bottom") +
              "</option></select>"
          ).data("selectbox-css", { display: "block" })),
          $("<td>")
            .append(w)
            .appendTo(i),
          $("<td colspan='3'>")
            .append(T)
            .appendTo(i),
          (_ = $("<textarea rows='7' cols='60'>").css("width", "100%")),
          (i = $("<tr>").appendTo(this._table)),
          $("<td colspan='7'>")
            .append(_)
            .appendTo(i),
          this.bindControl(
            new p(
              a,
              this._linetool.properties().showLabel,
              !0,
              this.model(),
              "Change Horz Line Text Visibility"
            )
          ),
          this.bindControl(
            new s(
              w,
              this._linetool.properties().horzLabelsAlign,
              null,
              !0,
              this.model(),
              "Change Horz Line Labels Alignment"
            )
          ),
          this.bindControl(
            new s(
              T,
              this._linetool.properties().vertLabelsAlign,
              null,
              !0,
              this.model(),
              "Change Horz Line Labels Alignment"
            )
          ),
          this.bindControl(
            new d(
              _,
              this._linetool.properties().text,
              null,
              !0,
              this.model(),
              "Change Text"
            )
          ),
          this.bindControl(
            new p(
              n,
              this._linetool.properties().showPrice,
              !0,
              this.model(),
              "Change Horz Line Price Visibility"
            )
          ),
          this.bindControl(
            new h(
              o,
              this._linetool.properties().linecolor,
              !0,
              this.model(),
              "Change Horz Line Color"
            )
          ),
          this.bindControl(
            new s(
              t,
              this._linetool.properties().linestyle,
              parseInt,
              !0,
              this.model(),
              "Change Horz Line Style"
            )
          ),
          this.bindControl(
            new c(
              e,
              this._linetool.properties().linewidth,
              !0,
              this.model(),
              "Change Horz Line Width"
            )
          ),
          this.bindControl(
            new s(
              l,
              this._linetool.properties().fontsize,
              parseInt,
              !0,
              this.model(),
              "Change Text Font Size"
            )
          ),
          this.bindControl(
            new s(
              C,
              this._linetool.properties().font,
              null,
              !0,
              this.model(),
              "Change Text Font"
            )
          ),
          this.bindControl(
            new h(
              r,
              this._linetool.properties().textcolor,
              !0,
              this.model(),
              "Change Text Color"
            )
          ),
          this.bindControl(
            new p(
              y,
              this._linetool.properties().bold,
              !0,
              this.model(),
              "Change Text Font Bold"
            )
          ),
          this.bindControl(
            new p(
              g,
              this._linetool.properties().italic,
              !0,
              this.model(),
              "Change Text Font Italic"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._res;
      }),
      inherit(n, r),
      (n.prototype.prepareLayout = function() {
        var e, t, o, i;
        (this._table = $(
          '<table class="property-page" cellspacing="0" cellpadding="2">'
        )),
          (e = this._linetool.points()[0]) &&
            ((t = this._linetool.properties().points[0]),
            (o = this.createPriceEditor(t.price)),
            (i = $("<tr>").appendTo(this._table)),
            $("<td>" + $.t("Price") + "</td>").appendTo(i),
            $("<td>")
              .append(o)
              .appendTo(i),
            this.loadData());
      }),
      (t.LineToolHorzLineStylesPropertyPage = i),
      (t.LineToolHorzLineInputsPropertyPage = n);
  },
  400: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      r.call(this, e, t, o), this.prepareLayout();
    }
    function n(e, t, o) {
      a.call(this, e, t, o), this.prepareLayout();
    }
    var a = o(14),
      r = o(81),
      l = o(10),
      p = l.LessTransformer,
      s = l.GreateTransformer,
      d = l.ToIntTransformer,
      h = l.ToFloatTransformer,
      c = l.SimpleStringBinder,
      b = l.ColorBinding,
      u = l.SliderBinder,
      C = l.SimpleComboBinder,
      y = l.BooleanBinder,
      g = o(15).createLineWidthEditor,
      w = o(38).NumericFormatter;
    inherit(i, r),
      (i.prototype.prepareLayout = function() {
        function e(e) {
          return new w().format(e);
        }
        var t, o, i, n, a, r, l, b, u, C, y, g;
        (this._table = $(
          '<table class="property-page" cellspacing="0" cellpadding="2">'
        )),
          (t = $("<tbody>").appendTo(this._table)),
          (o = this.addLabeledRow(t, $.t("Stop Level. Ticks:"))),
          (i = $('<input type="text">')),
          $("<td>")
            .append(i)
            .appendTo(o),
          i.addClass("ticker"),
          (n = $('<input type="text" class="ticker">')),
          $("<td>" + $.t("Price:") + "</td>").appendTo(o),
          $("<td>")
            .append(n)
            .appendTo(o),
          (a = this.addLabeledRow(t, $.t("Entry price:"))),
          (r = $('<input type="text" class="ticker">')),
          $('<td colspan="2">')
            .append(r)
            .appendTo(a),
          (l = this.addLabeledRow(t, $.t("Profit Level. Ticks:"))),
          (b = $('<input type="text" class="ticker">')),
          $("<td>")
            .append(b)
            .appendTo(l),
          (u = $('<input type="text" class="ticker">')),
          $("<td>" + $.t("Price:") + "</td>").appendTo(l),
          $("<td>")
            .append(u)
            .appendTo(l),
          "LineToolRiskRewardLong" === this._linetool.getConstructor() &&
            (o.detach().appendTo(t), l.detach().prependTo(t)),
          (C = [
            d(this._linetool.properties().stopLevel.value()),
            s(0),
            p(1e9)
          ]),
          this.bindControl(
            new c(
              i,
              this._linetool.properties().stopLevel,
              C,
              !1,
              this.model(),
              "Change " + this._linetool + " stop level"
            )
          ),
          (C = [
            d(this._linetool.properties().profitLevel.value()),
            s(0),
            p(1e9)
          ]),
          this.bindControl(
            new c(
              b,
              this._linetool.properties().profitLevel,
              C,
              !1,
              this.model(),
              "Change " + this._linetool + " profit level"
            )
          ),
          (C = [h(this._linetool.properties().entryPrice.value())]),
          (y = new c(
            r,
            this._linetool.properties().entryPrice,
            C,
            !1,
            this.model(),
            "Change " + this._linetool + " entry price"
          )),
          y.addFormatter(e),
          this.bindControl(y),
          (g = this),
          (C = [
            h(this._linetool.properties().stopPrice.value()),
            function(e) {
              return g._linetool.preparseStopPrice(e);
            }
          ]),
          (y = new c(
            n,
            this._linetool.properties().stopPrice,
            C,
            !1,
            this.model(),
            "Change " + this._linetool + " stop price"
          )),
          y.addFormatter(e),
          this.bindControl(y),
          (C = [
            h(this._linetool.properties().targetPrice.value()),
            function(e) {
              return g._linetool.preparseProfitPrice(e);
            }
          ]),
          (y = new c(
            u,
            this._linetool.properties().targetPrice,
            C,
            !1,
            this.model(),
            "Change " + this._linetool + " stop price"
          )),
          y.addFormatter(e),
          this.bindControl(y);
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      inherit(n, a),
      (n.prototype.prepareLayout = function() {
        var e,
          t,
          o,
          i,
          n,
          a,
          r,
          l,
          d,
          w,
          T,
          _,
          m,
          f,
          L,
          v = this._linetool,
          k = v.properties();
        (this._table = $(
          '<table class="property-page" cellspacing="0" cellpadding="2">'
        )),
          (e = $("<tbody>").appendTo(this._table)),
          (t = g()),
          (o = this.createColorPicker()),
          (i = this.addLabeledRow(e, $.t("Lines:"))),
          $("<td>")
            .append(o)
            .appendTo(i),
          $("<td>")
            .append(t)
            .appendTo(i),
          (i = this.addLabeledRow(e, $.t("Stop Color:"))),
          (n = this.createColorPicker()),
          $("<td>")
            .append(n)
            .appendTo(i),
          (i = this.addLabeledRow(e, $.t("Target Color:"))),
          (a = this.createColorPicker()),
          $("<td>")
            .append(a)
            .appendTo(i),
          (i = this.addLabeledRow(e, $.t("Text:"))),
          (r = this.createColorPicker()),
          (l = this.createFontSizeEditor()),
          (d = this.createFontEditor()),
          $("<td>")
            .append(r)
            .appendTo(i),
          $("<td>")
            .append(d)
            .appendTo(i),
          $("<td>")
            .append(l)
            .appendTo(i),
          (i = $("<tr>").appendTo(e)),
          (w = $("<label>").text($.t("Compact"))),
          (T = $('<input type="checkbox">').prependTo(w)),
          $("<td>")
            .append(w)
            .appendTo(i),
          (i = this.addLabeledRow(e, $.t("Account Size"))),
          (_ = $('<input type="text" class="ticker">')),
          $("<td>")
            .append(_)
            .appendTo(i),
          (i = this.addLabeledRow(e, $.t("Risk"))),
          (this._riskEdit = $('<input type="text" class="ticker">')),
          $("<td>")
            .append(this._riskEdit)
            .appendTo(i),
          this._riskEdit.data("step", v.getRiskStep(k.riskDisplayMode.value())),
          k.riskDisplayMode.subscribe(this, this._onRiskDisplayModeChange),
          (m = this.createKeyCombo({ percents: $.t("%"), money: $.t("Cash") })),
          $("<td>")
            .append(m)
            .appendTo(i),
          this.bindControl(
            new b(
              o,
              k.linecolor,
              !0,
              this.model(),
              "Change Risk/Reward line Color"
            )
          ),
          this.bindControl(
            new u(
              t,
              k.linewidth,
              !0,
              this.model(),
              "Change Risk/Reward line width"
            )
          ),
          this.bindControl(
            new b(
              n,
              k.stopBackground,
              !0,
              this.model(),
              "Change stop color",
              k.stopBackgroundTransparency
            )
          ),
          this.bindControl(
            new b(
              a,
              k.profitBackground,
              !0,
              this.model(),
              "Change target color",
              k.profitBackgroundTransparency
            )
          ),
          this.bindControl(
            new C(
              l,
              k.fontsize,
              parseInt,
              !0,
              this.model(),
              "Change Text Font Size"
            )
          ),
          this.bindControl(
            new C(d, k.font, null, !0, this.model(), "Change Text Font")
          ),
          this.bindControl(
            new b(r, k.textcolor, !0, this.model(), "Change Text Color")
          ),
          this.bindControl(
            new y(T, k.compact, !0, this.model(), "Compact mode")
          ),
          (f = [h(k.accountSize.value()), s(1), p(1e9)]),
          this.bindControl(
            new c(
              _,
              k.accountSize,
              f,
              !1,
              this.model(),
              "Change " + this._linetool + " Account Size"
            )
          ),
          this.bindControl(
            new C(m, k.riskDisplayMode, null, !0, this.model(), "% / Cash")
          ),
          (L = [
            h(k.risk.value()),
            s(1),
            function(e) {
              var t,
                o = k.riskDisplayMode.value();
              return (
                "percents" === o
                  ? (e = e > 100 ? 100 : e)
                  : ((t = k.accountSize.value()), (e = e > t ? t : e)),
                v.riskFormatter(o).format(e)
              );
            }
          ]),
          this.bindControl(
            new c(
              this._riskEdit,
              k.risk,
              L,
              !1,
              this.model(),
              "Change " + this._linetool + " Risk"
            )
          ),
          this.loadData();
      }),
      (n.prototype._onRiskDisplayModeChange = function() {
        var e = this._linetool,
          t = e.properties(),
          o = t.riskDisplayMode.value(),
          i = e.riskFormatter(o);
        this._riskEdit.data("TVTicker", {
          step: e.getRiskStep(o),
          formatter: i.format.bind(i)
        });
      }),
      (n.prototype.destroy = function() {
        this._linetool
          .properties()
          .riskDisplayMode.unsubscribe(this, this._onRiskDisplayModeChange),
          a.prototype.destroy.call(this);
      }),
      (n.prototype.onResoreDefaults = function() {
        this._linetool.recalculate();
      }),
      (n.prototype.widget = function() {
        return this._table;
      }),
      (t.LineToolRiskRewardInputsPropertyPage = i),
      (t.LineToolRiskRewardStylesPropertyPage = n);
  },
  401: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      a.call(this, e, t, o), this.prepareLayout();
    }
    function n(e, t, o) {
      r.call(this, e, t, o);
    }
    var a = o(14),
      r = o(81),
      l = o(10),
      p = l.GreateTransformer,
      s = l.LessTransformer,
      d = l.ToFloatTransformer,
      h = l.ColorBinding,
      c = l.BooleanBinder,
      b = l.SimpleComboBinder,
      u = l.SimpleStringBinder,
      C = l.SliderBinder,
      y = o(31).createLineStyleEditor,
      g = o(15).createLineWidthEditor,
      w = o(38).NumericFormatter;
    inherit(i, a),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n, a, r, l, p, s, d, u, w, T, _, m, f;
        (this._table = $(
          '<table class="property-page" cellspacing="0" cellpadding="2">'
        )),
          (e = $("<tbody>").appendTo(this._table)),
          (t = g()),
          (o = y()),
          (i = this.createColorPicker()),
          (n = this.addLabeledRow(e, $.t("Line"))),
          $("<td>")
            .append(i)
            .appendTo(n),
          $("<td>")
            .append(t)
            .appendTo(n),
          $('<td colspan="3">')
            .append(o.render())
            .appendTo(n),
          (a = $("<tbody>").appendTo(this._table)),
          (n = this.addLabeledRow(a, $.t("Text"))),
          (r = this.createColorPicker()),
          (l = this.createFontSizeEditor()),
          (p = this.createFontEditor()),
          (s = $(
            '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>'
          )),
          (d = $(
            '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>'
          )),
          (u = $('<input type="checkbox">')),
          $("<td>")
            .append(r)
            .appendTo(n),
          $("<td>")
            .append(p)
            .appendTo(n),
          $("<td>")
            .append(l)
            .appendTo(n),
          $("<td>")
            .append(s)
            .appendTo(n),
          $("<td>")
            .append(d)
            .appendTo(n),
          (w = $('<input type="checkbox">')),
          (T = $('<input type="checkbox">')),
          (n = this.addLabeledRow(a, $.t("Extend Right End"))),
          $('<td colspan="3">')
            .appendTo(n)
            .append(w),
          (n = this.addLabeledRow(a, $.t("Extend Left End"))),
          $('<td colspan="3">')
            .appendTo(n)
            .append(T),
          (_ = $('<input type="checkbox">')),
          (m = $('<input type="checkbox">')),
          (f = $('<input type="checkbox">')),
          (n = this.addLabeledRow(a, $.t("Show Price Range"))),
          $('<td colspan="3">')
            .appendTo(n)
            .append(_),
          (n = this.addLabeledRow(a, $.t("Show Bars Range"))),
          $('<td colspan="3">')
            .appendTo(n)
            .append(m),
          (n = this.addLabeledRow(a, $.t("Always Show Stats"))),
          $('<td colspan="3">')
            .appendTo(n)
            .append(f),
          (n = this.addLabeledRow(a, $.t("Show Middle Point"))),
          $('<td colspan="3">')
            .appendTo(n)
            .append(u),
          this.bindControl(
            new c(
              _,
              this._linetool.properties().showPriceRange,
              !0,
              this.model(),
              "Change Trend Line Show Price Range"
            )
          ),
          this.bindControl(
            new c(
              m,
              this._linetool.properties().showBarsRange,
              !0,
              this.model(),
              "Change Trend Line Show Bars Range"
            )
          ),
          this.bindControl(
            new b(
              l,
              this._linetool.properties().fontsize,
              parseInt,
              !0,
              this.model(),
              "Change Text Font Size"
            )
          ),
          this.bindControl(
            new b(
              p,
              this._linetool.properties().font,
              null,
              !0,
              this.model(),
              "Change Text Font"
            )
          ),
          this.bindControl(
            new h(
              r,
              this._linetool.properties().textcolor,
              !0,
              this.model(),
              "Change Text Color"
            )
          ),
          this.bindControl(
            new c(
              s,
              this._linetool.properties().bold,
              !0,
              this.model(),
              "Change Text Font Bold"
            )
          ),
          this.bindControl(
            new c(
              d,
              this._linetool.properties().italic,
              !0,
              this.model(),
              "Change Text Font Italic"
            )
          ),
          this.bindControl(
            new h(
              i,
              this._linetool.properties().linecolor,
              !0,
              this.model(),
              "Change Trend Line Color"
            )
          ),
          this.bindControl(
            new b(
              o,
              this._linetool.properties().linestyle,
              parseInt,
              !0,
              this.model(),
              "Change Trend Line Style"
            )
          ),
          this.bindControl(
            new C(
              t,
              this._linetool.properties().linewidth,
              !0,
              this.model(),
              "Change Trend Line Width"
            )
          ),
          this.bindControl(
            new c(
              w,
              this._linetool.properties().extendRight,
              !0,
              this.model(),
              "Change Trend Angle Extending Right"
            )
          ),
          this.bindControl(
            new c(
              T,
              this._linetool.properties().extendLeft,
              !0,
              this.model(),
              "Change Trend Angle Extending Left"
            )
          ),
          this.bindControl(
            new c(
              f,
              this._linetool.properties().alwaysShowStats,
              !0,
              this.model(),
              "Change Trend Line Always Show Stats"
            )
          ),
          this.bindControl(
            new c(
              u,
              this._linetool.properties().showMiddlePoint,
              !0,
              this.model(),
              "Change Trend Line Show Middle Point"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      inherit(n, r),
      (n.prototype.prepareLayout = function() {
        var e, t, o, i, n, a;
        (this._table = $(
          '<table class="property-page" cellspacing="0" cellpadding="2">'
        )),
          (e = this._linetool.points()[0]),
          (t = this._linetool.properties().points[0]),
          e &&
            t &&
            ((o = this._createPointRow(e, t, "")),
            this._table.append(o),
            (o = $("<tr>").appendTo(this._table)),
            $("<td>")
              .append($.t("Angle"))
              .appendTo(o),
            (i = $("<input type='text'>")),
            $("<td>")
              .append(i)
              .appendTo(o),
            (n = [d(t.price.value()), p(-360), s(360)]),
            (a = new u(
              i,
              this._linetool.properties().angle,
              n,
              !1,
              this.model(),
              "Change angle"
            )),
            a.addFormatter(function(e) {
              return new w().format(e);
            }),
            this.bindControl(a),
            this.loadData());
      }),
      (n.prototype.widget = function() {
        return this._table;
      }),
      (t.LineToolTrendAngleStylesPropertyPage = i),
      (t.LineToolTrendAngleInputsPropertyPage = n);
  },
  402: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      a.call(this, e, t, o), this.prepareLayout();
    }
    function n(e, t, o) {
      r.call(this, e, t, o);
    }
    var a = o(14),
      r = o(81),
      l = o(10),
      p = l.BooleanBinder,
      s = l.SimpleComboBinder,
      d = l.SliderBinder,
      h = l.ColorBinding,
      c = o(31).createLineStyleEditor,
      b = o(15).createLineWidthEditor;
    inherit(i, a),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n;
        (this._table = $(document.createElement("table"))),
          this._table.addClass("property-page"),
          this._table.attr("cellspacing", "0"),
          this._table.attr("cellpadding", "2"),
          (e = b()),
          (t = c()),
          (o = this.createColorPicker()),
          (i = this.addLabeledRow(this._table, "Line")),
          $("<td>").prependTo(i),
          $("<td>")
            .append(o)
            .appendTo(i),
          $("<td>")
            .append(e)
            .appendTo(i),
          $("<td>")
            .append(t.render())
            .appendTo(i),
          (n = $("<input type='checkbox' class='visibility-switch'>")),
          (i = $("<tr>").appendTo(this._table)),
          $("<td>")
            .append(n)
            .prependTo(i),
          this.createLabeledCell(2, "Show Time", n).appendTo(i),
          this.bindControl(
            new p(
              n,
              this._linetool.properties().showTime,
              !0,
              this.model(),
              "Change Vert Line Time Visibility"
            )
          ),
          this.bindControl(
            new h(
              o,
              this._linetool.properties().linecolor,
              !0,
              this.model(),
              "Change Vert Line Color"
            )
          ),
          this.bindControl(
            new s(
              t,
              this._linetool.properties().linestyle,
              parseInt,
              !0,
              this.model(),
              "Change Vert Line Style"
            )
          ),
          this.bindControl(
            new d(
              e,
              this._linetool.properties().linewidth,
              !0,
              this.model(),
              "Change Vert Line Width"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      inherit(n, r),
      (n.prototype.prepareLayout = function() {
        var e, t, o, i;
        (this._table = $(
          '<table class="property-page" cellspacing="0" cellpadding="2">'
        )),
          (e = this._linetool.points()[0]) &&
            ((t = $('<input type="text" class="ticker">')),
            (o = $("<tr>").appendTo(this._table)),
            $("<td>" + $.t("Bar #") + "</td>").appendTo(o),
            $("<td>")
              .append(t)
              .appendTo(o),
            (i = this._linetool.properties().points[0]),
            this.bindBarIndex(
              i.bar,
              t,
              this.model(),
              "Change " + this._linetool + " point bar index"
            ),
            this.loadData());
      }),
      (t.LineToolVertLineStylesPropertyPage = i),
      (t.LineToolVertLineInputsPropertyPage = n);
  },
  406: function(e, t, o) {
    (function(t) {
      "use strict";
      function i() {}
      var n = o(10),
        a = n.PropertyPage,
        r = n.GreateTransformer,
        l = n.LessTransformer,
        p = n.ToIntTransformer,
        s = n.ToFloatTransformer,
        d = n.SimpleStringBinder,
        h = n.SimpleComboBinder,
        c = n.ColorBinding,
        b = n.BooleanBinder,
        u = n.SliderBinder,
        C = o(71),
        y = o(15).createLineWidthEditor,
        g = o(1123).createPriceSourceEditor,
        w = o(38).NumericFormatter;
      inherit(i, a),
        (i.prototype.i18nCache = [
          window.t("Style"),
          window.t("Box size assignment method"),
          window.t("Color bars based on previous close"),
          window.t("Candles"),
          window.t("Borders"),
          window.t("Wick"),
          window.t("HLC Bars"),
          window.t("Price Source"),
          window.t("Type"),
          window.t(
            "Show real prices on price scale (instead of Heikin-Ashi price)"
          ),
          window.t("Up bars"),
          window.t("Down bars"),
          window.t("Projection up bars"),
          window.t("Projection down bars"),
          window.t("Line"),
          window.t("Fill"),
          window.t("Up Color"),
          window.t("Down Color"),
          window.t("Traditional"),
          window.t("ATR Length"),
          window.t("Number Of Line"),
          window.t("Reversal Amount"),
          window.t("Box Size")
        ]),
        (i.prototype.getInputTitle = function(e, t) {
          return "style" === e
            ? window.t("Box size assignment method")
            : "boxSize" === e
            ? window.t("Box Size")
            : t.inputInfo
            ? t.inputInfo[e].name.value()
            : e.toLowerCase().replace(/\b\w/g, function(e) {
                return e.toUpperCase();
              });
        }),
        (i.prototype.prepareLayoutImpl = function(e, t, o, i) {
          function n(t) {
            b.refreshStateControls(c, e.inputs, o.inputs);
          }
          function a(e) {
            return new w().format(e);
          }
          var c, b, u, C, y, g, T, _, m, f, L, v, k, S, P, x, B, E;
          for (i = i || {}, c = {}, b = this, u = 0; u < e.inputs.length; u++) {
            (C = e.inputs[u]),
              (y = C.id),
              (T =
                "BarSetRenko@tv-prostudies" === e.name ||
                "BarSetKagi@tv-prostudies" === e.name ||
                "BarSetPriceBreak@tv-prostudies" === e.name),
              "BarSetPnF@tv-prostudies" === e.name &&
                "sources" === y &&
                (C.options = C.options.filter(function(e) {
                  return "HL" === e || "Close" === e;
                }));
            try {
              g = this.getInputTitle(y, o);
            } catch (e) {
              continue;
            }
            if (
              ("BarSetRenko@tv-prostudies" !== e.name || "wicks" !== y) &&
              (!T || "source" !== y)
            ) {
              if (
                ((_ = $("<tr/>")),
                C.isHidden || _.appendTo(t),
                (m = $(
                  "<td" +
                    (i.nameColspan
                      ? ' colspan = "' + i.nameColspan + '"'
                      : "") +
                    "/>"
                )),
                m.appendTo(_),
                m.addClass("propertypage-name-label"),
                m.text($.t(g)),
                (f = $(
                  "<td" +
                    (i.valueColspan
                      ? ' colspan = "' + i.valueColspan + '"'
                      : "") +
                    "/>"
                )),
                f.appendTo(_),
                (L = null),
                C.options)
              )
                for (L = $("<select/>"), v = 0; v < C.options.length; v++)
                  (k = C.options[v]),
                    $(
                      "<option value='" + k + "'>" + $.t(k) + "</option>"
                    ).appendTo(L);
              else
                (L = $("<input/>")),
                  "bool" === C.type
                    ? L.attr("type", "checkbox")
                    : L.attr("type", "text");
              L.appendTo(f),
                L.css("width", "100px"),
                (S = "Change " + g),
                C.options
                  ? this.bindControl(
                      new h(L, o.inputs[y], null, !0, this.model(), S)
                    )
                  : "integer" === C.type
                  ? ((P = [p(C.defval)]),
                    C.min && P.push(r(C.min)),
                    C.max && P.push(l(C.max)),
                    this.bindControl(
                      new d(L, o.inputs[y], P, !1, this.model(), S)
                    ),
                    L.addClass("ticker"))
                  : "float" === C.type
                  ? ((P = [s(C.defval)]),
                    C.min &&
                      (((("BarSetRenko@tv-prostudies" === e.id ||
                        "BarSetPnF@tv-prostudies" === e.id) &&
                        "boxSize" === C.id) ||
                        ("BarSetKagi@tv-prostudies" === e.id &&
                          "reversalAmount" === C.id)) &&
                        ((B = this._model
                          .model()
                          .mainSeries()
                          .symbolInfo()),
                        (x = B.minmov / B.pricescale)),
                      P.push(r(x || C.min))),
                    C.max && P.push(l(C.max)),
                    (E = new d(L, o.inputs[y], P, !1, this.model(), S)),
                    E.addFormatter(a),
                    this.bindControl(E),
                    L.addClass("ticker"))
                  : "text" === C.type &&
                    this.bindControl(
                      new d(
                        L,
                        this._property.inputs[y],
                        null,
                        !1,
                        this.model(),
                        S
                      )
                    ),
                L.change(n),
                (c[C.id] = _);
            }
          }
          this.refreshStateControls(c, e.inputs, o.inputs);
        }),
        (i.prototype.getMetaInfo = function(e) {
          var t,
            o = this._model.m_model._studiesMetaData;
          for (t = 0; t < o.length; t++) if (o[t].id === e) return o[t];
          return null;
        }),
        (i.prototype._isJapaneseChartsAvailable = function() {
          return !0;
        }),
        (i.prototype._prepareSeriesStyleLayout = function(e, o, i, n) {
          var a,
            s,
            w,
            T,
            _,
            m,
            f,
            L,
            v,
            k,
            S,
            P,
            x,
            B,
            E,
            R,
            F,
            I,
            A,
            D,
            W,
            O,
            V,
            j,
            z,
            M,
            H,
            q,
            N,
            G,
            U,
            Y,
            K,
            Q,
            J,
            Z,
            X,
            ee,
            te,
            oe,
            ie,
            ne,
            ae,
            re,
            le,
            pe,
            se,
            de,
            he,
            ce,
            be,
            ue,
            Ce,
            ye,
            ge,
            $e,
            we,
            Te,
            _e,
            me,
            fe,
            Le,
            ve,
            ke,
            Se,
            Pe,
            xe,
            Be,
            Ee,
            Re,
            Fe,
            Ie,
            Ae,
            De,
            We,
            Oe,
            Ve,
            je,
            ze,
            Me = $("<tbody>").appendTo(e),
            He = (this._candlesColorerTbody = $("<tbody>").appendTo(o)),
            qe = (this._barsColorerTbody = $("<tbody>").appendTo(o)),
            Ne = (this._haColorerTbody = $("<tbody>").appendTo(o)),
            Ge = (this._candlesTbody = $("<tbody>").appendTo(i)),
            Ue = (this._hollowCandlesTbody = $("<tbody>").appendTo(i)),
            Ye = (this._haTbody = $("<tbody>").appendTo(i)),
            Ke = (this._barsTbody = $("<tbody>").appendTo(i)),
            Qe = (this._lineTbody = $("<tbody>").appendTo(i)),
            Je = (this._areaTbody = $("<tbody>").appendTo(i)),
            Ze = (this._renkoTbody = $("<tbody>").appendTo(i)),
            Xe = (this._pbTbody = $("<tbody>").appendTo(i)),
            et = (this._kagiTbody = $("<tbody>").appendTo(i)),
            tt = (this._pnfTbody = $("<tbody>").appendTo(i)),
            ot = (this._baselineTbody = $("<tbody>").appendTo(i)),
            it = this.addLabeledRow(Me, "Style"),
            nt = $(document.createElement("td")).appendTo(it);
          nt.addClass("property-wide-select"),
            (a = $(document.createElement("select"))),
            $(
              "<option value=" + C.STYLE_BARS + ">" + $.t("Bars") + "</option>"
            ).appendTo(a),
            $(
              "<option value=" +
                C.STYLE_CANDLES +
                ">" +
                $.t("Candles") +
                "</option>"
            ).appendTo(a),
            $(
              "<option value=" +
                C.STYLE_HOLLOW_CANDLES +
                ">" +
                $.t("Hollow Candles") +
                "</option>"
            ).appendTo(a),
            this._isJapaneseChartsAvailable() &&
              $(
                "<option value=" +
                  C.STYLE_HEIKEN_ASHI +
                  ">" +
                  $.t("Heikin Ashi") +
                  "</option>"
              ).appendTo(a),
            $(
              "<option value=" + C.STYLE_LINE + ">" + $.t("Line") + "</option>"
            ).appendTo(a),
            $(
              "<option value=" + C.STYLE_AREA + ">" + $.t("Area") + "</option>"
            ).appendTo(a),
            $(
              "<option value=" +
                C.STYLE_BASELINE +
                ">" +
                $.t("Baseline") +
                "</option>"
            ).appendTo(a),
            a.css("width", "100px").appendTo(nt),
            this.switchStyle(),
            (s = function(e) {
              this._undoModel.setChartStyleProperty(
                this._property,
                e,
                this._undoText
              );
            }),
            this.bindControl(
              new h(
                a,
                n.style,
                parseInt,
                !0,
                this.model(),
                "Change Series Style",
                s
              )
            ),
            n.style.listeners().subscribe(this, this.switchStyle),
            (w = this.createColorPicker()),
            (T = this.createColorPicker()),
            (_ = this.createColorPicker()),
            (m = this.createColorPicker()),
            (f = this.createColorPicker()),
            (L = this.createColorPicker()),
            (v = $("<input type='checkbox' class='visibility-switch'/>").data(
              "hides",
              $(f).add(L)
            )),
            (k = $("<input type='checkbox' class='visibility-switch'/>").data(
              "hides",
              $(_).add(m)
            )),
            (S = $("<input type='checkbox'/>")),
            (P = this.addLabeledRow(
              He,
              "Color bars based on previous close",
              S
            )),
            $("<td>")
              .append(S)
              .prependTo(P),
            (P = this.addLabeledRow(Ge, "Candles")),
            $("<td>").prependTo(P),
            $("<td>")
              .append(w)
              .appendTo(P),
            $("<td>")
              .append(T)
              .appendTo(P),
            (P = this.addLabeledRow(Ge, "Borders", v)),
            $("<td>")
              .append(v)
              .prependTo(P),
            $("<td>")
              .append(f)
              .appendTo(P),
            $("<td>")
              .append(L)
              .appendTo(P),
            (P = this.addLabeledRow(Ge, "Wick", k)),
            $("<td>")
              .append(k)
              .prependTo(P),
            $("<td>")
              .append(_)
              .appendTo(P),
            $("<td>")
              .append(m)
              .appendTo(P),
            this.bindControl(
              new c(
                w,
                n.candleStyle.upColor,
                !0,
                this.model(),
                "Change Candle Up Color"
              )
            ),
            this.bindControl(
              new c(
                T,
                n.candleStyle.downColor,
                !0,
                this.model(),
                "Change Candle Down Color"
              )
            ),
            this.bindControl(
              new b(
                k,
                n.candleStyle.drawWick,
                !0,
                this.model(),
                "Change Candle Wick Visibility"
              )
            ),
            this.bindControl(
              new c(
                _,
                n.candleStyle.wickUpColor,
                !0,
                this.model(),
                "Change Candle Wick Up Color"
              )
            ),
            this.bindControl(
              new c(
                m,
                n.candleStyle.wickDownColor,
                !0,
                this.model(),
                "Change Candle Wick Down Color"
              )
            ),
            this.bindControl(
              new b(
                v,
                n.candleStyle.drawBorder,
                !0,
                this.model(),
                "Change Candle Border Visibility"
              )
            ),
            this.bindControl(
              new c(
                f,
                n.candleStyle.borderUpColor,
                !0,
                this.model(),
                "Change Candle Up Border Color"
              )
            ),
            this.bindControl(
              new c(
                L,
                n.candleStyle.borderDownColor,
                !0,
                this.model(),
                "Change Candle Down Border Color"
              )
            ),
            this.bindControl(
              new b(
                S,
                n.candleStyle.barColorsOnPrevClose,
                !0,
                this.model(),
                "Change Color Bars Based On Previous Close"
              )
            ),
            (x = this.createColorPicker()),
            (B = this.createColorPicker()),
            (E = this.createColorPicker()),
            (R = this.createColorPicker()),
            (F = this.createColorPicker()),
            (I = this.createColorPicker()),
            (A = $("<input type='checkbox' class='visibility-switch'/>").data(
              "hides",
              $(F).add(I)
            )),
            (D = $("<input type='checkbox' class='visibility-switch'/>").data(
              "hides",
              $(E).add(R)
            )),
            (P = this.addLabeledRow(Ue, "Candles")),
            $("<td>").prependTo(P),
            $("<td>")
              .append(x)
              .appendTo(P),
            $("<td>")
              .append(B)
              .appendTo(P),
            (P = this.addLabeledRow(Ue, "Borders", A)),
            $("<td>")
              .append(A)
              .prependTo(P),
            $("<td>")
              .append(F)
              .appendTo(P),
            $("<td>")
              .append(I)
              .appendTo(P),
            (P = this.addLabeledRow(Ue, "Wick", D)),
            $("<td>")
              .append(D)
              .prependTo(P),
            $("<td>")
              .append(E)
              .appendTo(P),
            $("<td>")
              .append(R)
              .appendTo(P),
            this.bindControl(
              new c(
                x,
                n.hollowCandleStyle.upColor,
                !0,
                this.model(),
                "Change Hollow Candle Up Color"
              )
            ),
            this.bindControl(
              new c(
                B,
                n.hollowCandleStyle.downColor,
                !0,
                this.model(),
                "Change Hollow Candle Down Color"
              )
            ),
            this.bindControl(
              new b(
                D,
                n.hollowCandleStyle.drawWick,
                !0,
                this.model(),
                "Change Hollow Candle Wick Visibility"
              )
            ),
            this.bindControl(
              new c(
                E,
                n.hollowCandleStyle.wickUpColor,
                !0,
                this.model(),
                "Change Hollow Candle Wick Up Color"
              )
            ),
            this.bindControl(
              new c(
                R,
                n.hollowCandleStyle.wickDownColor,
                !0,
                this.model(),
                "Change Hollow Candle Down Wick Color"
              )
            ),
            this.bindControl(
              new b(
                A,
                n.hollowCandleStyle.drawBorder,
                !0,
                this.model(),
                "Change Hollow Candle Border Visibility"
              )
            ),
            this.bindControl(
              new c(
                F,
                n.hollowCandleStyle.borderUpColor,
                !0,
                this.model(),
                "Change Hollow Candle Up Border Color"
              )
            ),
            this.bindControl(
              new c(
                I,
                n.hollowCandleStyle.borderDownColor,
                !0,
                this.model(),
                "Change Hollow Candle Down Border Color"
              )
            ),
            (W = $("<input type='checkbox'/>")),
            (P = this.addLabeledRow(
              qe,
              "Color bars based on previous close",
              W
            )),
            $("<td>")
              .append(W)
              .prependTo(P),
            (O = $("<input type='checkbox'/>")),
            (P = this.addLabeledRow(qe, "HLC Bars", O)),
            $("<td>")
              .append(O)
              .prependTo(P),
            (V = this.addColorPickerRow(Ke, "Up Color")),
            (j = this.addColorPickerRow(Ke, "Down Color")),
            this.bindControl(
              new c(
                V,
                n.barStyle.upColor,
                !0,
                this.model(),
                "Change Bar Up Color"
              )
            ),
            this.bindControl(
              new c(
                j,
                n.barStyle.downColor,
                !0,
                this.model(),
                "Change Bar Down Color"
              )
            ),
            this.bindControl(
              new b(
                W,
                n.barStyle.barColorsOnPrevClose,
                !0,
                this.model(),
                "Change Color Bars Based On Previous Close"
              )
            ),
            this.bindControl(
              new b(
                O,
                n.barStyle.dontDrawOpen,
                !0,
                this.model(),
                "Change HLC Bars"
              )
            ),
            (z = g()),
            (P = this.addLabeledRow(Qe, "Price Source")),
            $('<td colspan="3">')
              .append(z)
              .appendTo(P),
            (M = this.addLabeledRow(Qe, "Type")),
            (H = $('<td colspan="3">').appendTo(M)),
            H.addClass("property-wide-select"),
            (q = $(document.createElement("select"))),
            $(
              "<option value=" +
                C.STYLE_LINE_TYPE_SIMPLE +
                ">" +
                $.t("Simple") +
                "</option>"
            ).appendTo(q),
            $(
              "<option value=" +
                C.STYLE_LINE_TYPE_MARKERS +
                ">" +
                $.t("With Markers") +
                "</option>"
            ).appendTo(q),
            $(
              "<option value=" +
                C.STYLE_LINE_TYPE_STEP +
                ">" +
                $.t("Step") +
                "</option>"
            ).appendTo(q),
            q.appendTo(H),
            (P = this.addLabeledRow(Qe, "Line")),
            (N = this.createColorPicker()),
            (G = y()),
            $("<td>")
              .append(N)
              .appendTo(P),
            $("<td>")
              .append(G)
              .appendTo(P),
            this.bindControl(
              new h(
                z,
                n.lineStyle.priceSource,
                null,
                !0,
                this.model(),
                "Change Price Source"
              )
            ),
            this.bindControl(
              new h(
                q,
                n.lineStyle.styleType,
                parseInt,
                !0,
                this.model(),
                "Change Line Type"
              )
            ),
            this.bindControl(
              new c(N, n.lineStyle.color, !0, this.model(), "Change Line Color")
            ),
            this.bindControl(
              new u(
                G,
                n.lineStyle.linewidth,
                !0,
                this.model(),
                "Change Line Width"
              )
            ),
            n.haStyle &&
              ((U = this.createColorPicker()),
              (Y = this.createColorPicker()),
              (K = this.createColorPicker()),
              (Q = this.createColorPicker()),
              (J = this.createColorPicker()),
              (Z = this.createColorPicker()),
              (X = $("<input type='checkbox' class='visibility-switch'/>").data(
                "hides",
                $(J).add(Z)
              )),
              (ee = $(
                "<input type='checkbox' class='visibility-switch'/>"
              ).data("hides", $(K).add(Q))),
              (te = $("<input type='checkbox'/>")),
              (P = this.addLabeledRow(
                Ne,
                $.t("Color bars based on previous close"),
                te
              )),
              $("<td>")
                .append(te)
                .prependTo(P),
              (P = this.addLabeledRow(Ye, $.t("Candles"))),
              $("<td>").prependTo(P),
              $("<td>")
                .append(U)
                .appendTo(P),
              $("<td>")
                .append(Y)
                .appendTo(P),
              (P = this.addLabeledRow(Ye, $.t("Borders"), X)),
              $("<td>")
                .append(X)
                .prependTo(P),
              $("<td>")
                .append(J)
                .appendTo(P),
              $("<td>")
                .append(Z)
                .appendTo(P),
              (P = this.addLabeledRow(Ye, $.t("Wick"), ee)),
              $("<td>")
                .append(ee)
                .prependTo(P),
              $("<td>")
                .append(K)
                .appendTo(P),
              $("<td>")
                .append(Q)
                .appendTo(P),
              this.bindControl(
                new c(
                  U,
                  n.haStyle.upColor,
                  !0,
                  this.model(),
                  "Change Heikin Ashi Up Color"
                )
              ),
              this.bindControl(
                new c(
                  Y,
                  n.haStyle.downColor,
                  !0,
                  this.model(),
                  "Change Heikin Ashi Down Color"
                )
              ),
              this.bindControl(
                new b(
                  ee,
                  n.haStyle.drawWick,
                  !0,
                  this.model(),
                  "Change Heikin Ashi Wick Visibility"
                )
              ),
              this.bindControl(
                new c(
                  K,
                  n.haStyle.wickUpColor,
                  !0,
                  this.model(),
                  "Change Heikin Ashi Wick Up Color"
                )
              ),
              this.bindControl(
                new c(
                  Q,
                  n.haStyle.wickDownColor,
                  !0,
                  this.model(),
                  "Change Heikin Ashi Wick Down Color"
                )
              ),
              this.bindControl(
                new b(
                  X,
                  n.haStyle.drawBorder,
                  !0,
                  this.model(),
                  "Change Heikin Ashi Border Visibility"
                )
              ),
              this.bindControl(
                new c(
                  J,
                  n.haStyle.borderUpColor,
                  !0,
                  this.model(),
                  "Change Heikin Ashi Up Border Color"
                )
              ),
              this.bindControl(
                new c(
                  Z,
                  n.haStyle.borderDownColor,
                  !0,
                  this.model(),
                  "Change Heikin Ashi Down Border Color"
                )
              ),
              this.bindControl(
                new b(
                  te,
                  n.haStyle.barColorsOnPrevClose,
                  !0,
                  this.model(),
                  "Change Color Bars Based On Previous Close"
                )
              )),
            this._isJapaneseChartsAvailable() &&
              t.enabled("japanese_chart_styles") &&
              ($(
                "<option value=" +
                  C.STYLE_RENKO +
                  ">" +
                  $.t("Renko") +
                  "</option>"
              ).appendTo(a),
              $(
                "<option value=" +
                  C.STYLE_PB +
                  ">" +
                  $.t("Line Break") +
                  "</option>"
              ).appendTo(a),
              $(
                "<option value=" +
                  C.STYLE_KAGI +
                  ">" +
                  $.t("Kagi") +
                  "</option>"
              ).appendTo(a),
              $(
                "<option value=" +
                  C.STYLE_PNF +
                  ">" +
                  $.t("Point & Figure") +
                  "</option>"
              ).appendTo(a),
              (oe = this.createColorPicker()),
              (ie = this.createColorPicker()),
              (P = this.addLabeledRow(Ze, "Up bars")),
              $("<td>").prependTo(P),
              $('<td class="some-colorpicker">')
                .append(oe)
                .append(ie)
                .appendTo(P),
              (ne = this.createColorPicker()),
              (ae = this.createColorPicker()),
              (P = this.addLabeledRow(Ze, "Down bars")),
              $("<td>").prependTo(P),
              $('<td class="some-colorpicker">')
                .append(ne)
                .append(ae)
                .appendTo(P),
              (re = this.createColorPicker()),
              (le = this.createColorPicker()),
              (P = this.addLabeledRow(Ze, "Projection up bars")),
              $("<td>").prependTo(P),
              $('<td class="some-colorpicker">')
                .append(re)
                .append(le)
                .appendTo(P),
              (pe = this.createColorPicker()),
              (se = this.createColorPicker()),
              (P = this.addLabeledRow(Ze, "Projection down bars")),
              $("<td>").prependTo(P),
              $('<td class="some-colorpicker">')
                .append(pe)
                .append(se)
                .appendTo(P),
              this.prepareLayoutImpl(
                this.getMetaInfo("BarSetRenko@tv-prostudies"),
                Ze,
                n.renkoStyle,
                { nameColspan: 2 }
              ),
              this.bindControl(
                new c(
                  oe,
                  n.renkoStyle.upColor,
                  !0,
                  this.model(),
                  "Change Bar Up Color"
                )
              ),
              this.bindControl(
                new c(
                  ne,
                  n.renkoStyle.downColor,
                  !0,
                  this.model(),
                  "Change Bar Down Color"
                )
              ),
              this.bindControl(
                new c(
                  re,
                  n.renkoStyle.upColorProjection,
                  !0,
                  this.model(),
                  "Change Projection Bar Up Color"
                )
              ),
              this.bindControl(
                new c(
                  pe,
                  n.renkoStyle.downColorProjection,
                  !0,
                  this.model(),
                  "Change Projection Bar Down Color"
                )
              ),
              this.bindControl(
                new c(
                  ie,
                  n.renkoStyle.borderUpColor,
                  !0,
                  this.model(),
                  "Change Border Bar Up Color"
                )
              ),
              this.bindControl(
                new c(
                  ae,
                  n.renkoStyle.borderDownColor,
                  !0,
                  this.model(),
                  "Change Border Bar Down Color"
                )
              ),
              this.bindControl(
                new c(
                  le,
                  n.renkoStyle.borderUpColorProjection,
                  !0,
                  this.model(),
                  "Change Projection Border Bar Up Color"
                )
              ),
              this.bindControl(
                new c(
                  se,
                  n.renkoStyle.borderDownColorProjection,
                  !0,
                  this.model(),
                  "Change Projection Border Bar Down Color"
                )
              ),
              (de = this.createColorPicker()),
              (he = this.createColorPicker()),
              (P = this.addLabeledRow(Xe, "Up bars")),
              $('<td class="some-colorpicker">')
                .append(de)
                .append(he)
                .appendTo(P),
              (ce = this.createColorPicker()),
              (be = this.createColorPicker()),
              (P = this.addLabeledRow(Xe, "Down bars")),
              $('<td class="some-colorpicker">')
                .append(ce)
                .append(be)
                .appendTo(P),
              (ue = this.createColorPicker()),
              (Ce = this.createColorPicker()),
              (P = this.addLabeledRow(Xe, "Projection up bars")),
              $('<td class="some-colorpicker">')
                .append(ue)
                .append(Ce)
                .appendTo(P),
              (ye = this.createColorPicker()),
              (ge = this.createColorPicker()),
              (P = this.addLabeledRow(Xe, "Projection down bars")),
              $('<td class="some-colorpicker">')
                .append(ye)
                .append(ge)
                .appendTo(P),
              this.prepareLayoutImpl(
                this.getMetaInfo("BarSetPriceBreak@tv-prostudies"),
                Xe,
                n.pbStyle,
                { valueColspan: 2 }
              ),
              this.bindControl(
                new c(
                  de,
                  n.pbStyle.upColor,
                  !0,
                  this.model(),
                  "Change Bar Up Color"
                )
              ),
              this.bindControl(
                new c(
                  ce,
                  n.pbStyle.downColor,
                  !0,
                  this.model(),
                  "Change Bar Down Color"
                )
              ),
              this.bindControl(
                new c(
                  ue,
                  n.pbStyle.upColorProjection,
                  !0,
                  this.model(),
                  "Change Projection Bar Up Color"
                )
              ),
              this.bindControl(
                new c(
                  ye,
                  n.pbStyle.downColorProjection,
                  !0,
                  this.model(),
                  "Change Projection Bar Down Color"
                )
              ),
              this.bindControl(
                new c(
                  he,
                  n.pbStyle.borderUpColor,
                  !0,
                  this.model(),
                  "Change Border Bar Up Color"
                )
              ),
              this.bindControl(
                new c(
                  be,
                  n.pbStyle.borderDownColor,
                  !0,
                  this.model(),
                  "Change Border Bar Down Color"
                )
              ),
              this.bindControl(
                new c(
                  Ce,
                  n.pbStyle.borderUpColorProjection,
                  !0,
                  this.model(),
                  "Change Projection Border Bar Up Color"
                )
              ),
              this.bindControl(
                new c(
                  ge,
                  n.pbStyle.borderDownColorProjection,
                  !0,
                  this.model(),
                  "Change Projection Border Bar Down Color"
                )
              ),
              ($e = this.addColorPickerRow(et, "Up bars")),
              (we = this.addColorPickerRow(et, "Down bars")),
              (Te = this.addColorPickerRow(et, "Projection up bars")),
              (_e = this.addColorPickerRow(et, "Projection down bars")),
              this.prepareLayoutImpl(
                this.getMetaInfo("BarSetKagi@tv-prostudies"),
                et,
                n.kagiStyle
              ),
              this.bindControl(
                new c(
                  $e,
                  n.kagiStyle.upColor,
                  !0,
                  this.model(),
                  "Change Bar Up Color"
                )
              ),
              this.bindControl(
                new c(
                  we,
                  n.kagiStyle.downColor,
                  !0,
                  this.model(),
                  "Change Bar Down Color"
                )
              ),
              this.bindControl(
                new c(
                  Te,
                  n.kagiStyle.upColorProjection,
                  !0,
                  this.model(),
                  "Change Projection Bar Up Color"
                )
              ),
              this.bindControl(
                new c(
                  _e,
                  n.kagiStyle.downColorProjection,
                  !0,
                  this.model(),
                  "Change Projection Bar Down Color"
                )
              ),
              (me = this.addColorPickerRow(tt, "Up bars")),
              (fe = this.addColorPickerRow(tt, "Down bars")),
              (Le = this.addColorPickerRow(tt, "Projection up bars")),
              (ve = this.addColorPickerRow(tt, "Projection down bars")),
              this.prepareLayoutImpl(
                this.getMetaInfo("BarSetPnF@tv-prostudies"),
                tt,
                n.pnfStyle
              ),
              this.bindControl(
                new c(
                  me,
                  n.pnfStyle.upColor,
                  !0,
                  this.model(),
                  "Change Bar Up Color"
                )
              ),
              this.bindControl(
                new c(
                  fe,
                  n.pnfStyle.downColor,
                  !0,
                  this.model(),
                  "Change Bar Down Color"
                )
              ),
              this.bindControl(
                new c(
                  Le,
                  n.pnfStyle.upColorProjection,
                  !0,
                  this.model(),
                  "Change Projection Bar Up Color"
                )
              ),
              this.bindControl(
                new c(
                  ve,
                  n.pnfStyle.downColorProjection,
                  !0,
                  this.model(),
                  "Change Projection Bar Down Color"
                )
              )),
            (ke = g()),
            (P = this.addLabeledRow(Je, "Price Source")),
            $('<td colspan="3">')
              .appendTo(P)
              .append(ke),
            (Se = this.createColorPicker()),
            (Pe = y()),
            (P = this.addLabeledRow(Je, "Line")),
            $("<td>")
              .appendTo(P)
              .append(Se),
            $('<td colspan="2">')
              .appendTo(P)
              .append(Pe),
            (xe = this.createColorPicker()),
            (Be = this.createColorPicker()),
            (P = this.addLabeledRow(Je, "Fill")),
            $("<td>")
              .appendTo(P)
              .append(xe),
            $("<td>")
              .appendTo(P)
              .append(Be),
            this.bindControl(
              new h(
                ke,
                n.areaStyle.priceSource,
                null,
                !0,
                this.model(),
                "Change Price Source"
              )
            ),
            this.bindControl(
              new c(
                Se,
                n.areaStyle.linecolor,
                !0,
                this.model(),
                "Change Line Color"
              )
            ),
            this.bindControl(
              new u(
                Pe,
                n.areaStyle.linewidth,
                !0,
                this.model(),
                "Change Line Width"
              )
            ),
            this.bindControl(
              new c(
                xe,
                n.areaStyle.color1,
                !0,
                this.model(),
                "Change Line Color",
                n.areaStyle.transparency
              )
            ),
            this.bindControl(
              new c(
                Be,
                n.areaStyle.color2,
                !0,
                this.model(),
                "Change Line Color",
                n.areaStyle.transparency
              )
            ),
            (Ee = g()),
            (P = this.addLabeledRow(ot, window.t("Price Source"))),
            $('<td colspan="3">')
              .appendTo(P)
              .append(Ee),
            this.bindControl(
              new h(
                Ee,
                n.baselineStyle.priceSource,
                null,
                !0,
                this.model(),
                "Change Price Source"
              )
            ),
            (Re = this.createColorPicker()),
            (Fe = y()),
            (P = this.addLabeledRow(ot, window.t("Top Line"))),
            $("<td>")
              .appendTo(P)
              .append(Re),
            $("<td>")
              .appendTo(P)
              .append(Fe),
            this.bindControl(
              new c(
                Re,
                n.baselineStyle.topLineColor,
                !0,
                this.model(),
                "Change Top Line Color"
              )
            ),
            this.bindControl(
              new u(
                Fe,
                n.baselineStyle.topLineWidth,
                !0,
                this.model(),
                "Change Top Line Width"
              )
            ),
            (Ie = this.createColorPicker()),
            (Ae = y()),
            (P = this.addLabeledRow(ot, window.t("Bottom Line"))),
            $("<td>")
              .appendTo(P)
              .append(Ie),
            $("<td>")
              .appendTo(P)
              .append(Ae),
            this.bindControl(
              new c(
                Ie,
                n.baselineStyle.bottomLineColor,
                !0,
                this.model(),
                "Change Bottom Line Color"
              )
            ),
            this.bindControl(
              new u(
                Ae,
                n.baselineStyle.bottomLineWidth,
                !0,
                this.model(),
                "Change Bottom Line Width"
              )
            ),
            (De = this.createColorPicker()),
            (We = this.createColorPicker()),
            (P = this.addLabeledRow(ot, window.t("Fill Top Area"))),
            $("<td>")
              .appendTo(P)
              .append(De),
            $("<td>")
              .appendTo(P)
              .append(We),
            this.bindControl(
              new c(
                De,
                n.baselineStyle.topFillColor1,
                !0,
                this.model(),
                "Change Fill Top Area Color 1"
              ),
              n.baselineStyle.transparency
            ),
            this.bindControl(
              new c(
                We,
                n.baselineStyle.topFillColor2,
                !0,
                this.model(),
                "Change Fill Top Area Color 2"
              ),
              n.baselineStyle.transparency
            ),
            (Oe = this.createColorPicker()),
            (Ve = this.createColorPicker()),
            (P = this.addLabeledRow(ot, window.t("Fill Bottom Area"))),
            $("<td>")
              .appendTo(P)
              .append(Oe),
            $("<td>")
              .appendTo(P)
              .append(Ve),
            this.bindControl(
              new c(
                Oe,
                n.baselineStyle.bottomFillColor1,
                !0,
                this.model(),
                "Change Fill Bottom Area Color 1"
              ),
              n.baselineStyle.transparency
            ),
            this.bindControl(
              new c(
                Ve,
                n.baselineStyle.bottomFillColor2,
                !0,
                this.model(),
                "Change Fill Bottom Area Color 2"
              ),
              n.baselineStyle.transparency
            ),
            (P = this.addLabeledRow(ot, window.t("Base Level"))),
            (je = $('<input type="text" class="ticker">')),
            $('<td colspan="2">')
              .appendTo(P)
              .append($("<span></span>").append(je))
              .append($('<span class="percents-label">%</span>')),
            (ze = [
              p(n.baselineStyle.baseLevelPercentage.value()),
              l(100),
              r(0)
            ]),
            this.bindControl(
              new d(
                je,
                n.baselineStyle.baseLevelPercentage,
                ze,
                !0,
                this.model(),
                "Change Base Level"
              )
            );
        }),
        (e.exports = i);
    }.call(t, o(8)));
  },
  475: function(e, t, o) {
    "use strict";
    function i() {
      var e = $("<select />");
      return (
        $(
          '<option value="' + n.PlotType.Line + '">' + $.t("Line") + "</option>"
        ).appendTo(e),
        $(
          '<option value="' +
            n.PlotType.LineWithBreaks +
            '">' +
            $.t("Line With Breaks") +
            "</option>"
        ).appendTo(e),
        $(
          '<option value="' +
            n.PlotType.Histogram +
            '">' +
            $.t("Histogram") +
            "</option>"
        ).appendTo(e),
        $(
          '<option value="' +
            n.PlotType.Cross +
            '">' +
            $.t("Cross", { context: "chart_type" }) +
            "</option>"
        ).appendTo(e),
        $(
          '<option value="' + n.PlotType.Area + '">' + $.t("Area") + "</option>"
        ).appendTo(e),
        $(
          '<option value="' +
            n.PlotType.AreaWithBreaks +
            '">' +
            $.t("Area With Breaks") +
            "</option>"
        ).appendTo(e),
        $(
          '<option value="' +
            n.PlotType.Columns +
            '">' +
            $.t("Columns") +
            "</option>"
        ).appendTo(e),
        $(
          '<option value="' +
            n.PlotType.Circles +
            '">' +
            $.t("Circles") +
            "</option>"
        ).appendTo(e),
        e
      );
    }
    Object.defineProperty(t, "__esModule", { value: !0 }), o(22), o(23);
    var n = o(106);
    t.createPlotEditor = i;
  },
  741: function(e, t, o) {
    "use strict";
    function i(e) {
      return (
        (this.jqObj = null),
        (this.data = e),
        this.init(),
        this._prepareValue(),
        this._prepareCallback(),
        this._prepareChildren(),
        this._applyAttributes(),
        this.jqObj
      );
    }
    function n(e, t) {
      (this.value = e), (this.html = t || ""), (this.jqItem = this._render());
    }
    function a(e) {
      (this._value = null),
        (this.items = []),
        (this.width = 0),
        (this.jqWrapper = null),
        (this.jqSwitcher = null),
        (this.jqTitle = null),
        (this.jqIcon = null),
        (this.jqItems = null),
        (this.callbacks = []),
        this._init(),
        this.addItems(e),
        this.joinParts();
    }
    var r = o(206);
    (i.selectOptions = { type: "option", value: null, html: null }),
      (i.optionsData = {
        radiogroup: { type: "radio", name: null, value: null, label: null },
        select: i.selectOptions,
        "select-one": i.selectOptions,
        "select-multiple": i.selectOptions
      }),
      (i.customTypes = ["radiogroup", "fontpicker", "colorpicker", "combobox"]),
      (i.prototype._tagIsInput = function(e) {
        return (
          -1 !==
          jQuery.inArray(this.data.type, [
            "text",
            "radio",
            "checkbox",
            "hidden",
            "reset",
            "image",
            "file"
          ])
        );
      }),
      (i.prototype.init = function() {
        this._tagIsInput()
          ? (this.jqObj = r.create("input", {
              name: this.data.name,
              type: this.data.type
            }))
          : (this.jqObj = r.create(this.data.type, { name: this.data.name }));
      }),
      (i.prototype._eventIsKeyUp = function() {
        return -1 !== jQuery.inArray(this.data.type, ["text", "textarea"]);
      }),
      (i.prototype._eventIsClick = function() {
        return (
          -1 !== jQuery.inArray(this.data.type, ["checkbox", "radio", "option"])
        );
      }),
      (i.prototype._eventIsChange = function() {
        return (
          -1 !==
          jQuery.inArray(this.data.type, [
            "select",
            "select-one",
            "select-multiple",
            "radiogroup"
          ])
        );
      }),
      (i.prototype._prepareCallback = function() {
        this.data.callback &&
          (this._eventIsKeyUp()
            ? this.jqObj.keyup(this.data.callback)
            : this._eventIsClick()
            ? this.jqObj.click(this.data.callback)
            : this._eventIsChange() &&
              this.jqObj.bind("change", this.data.callback),
          delete this.data.callback);
      }),
      (i.prototype._childTag = function() {
        return {
          select: "option",
          "select-one": "option",
          "select-multiple": "option",
          radiogroup: "radio"
        }[this.data.type];
      }),
      (i.prototype._inheritedProperties = function() {
        var e = { type: this._childTag() };
        return "radiogroup" === this.data.type && (e.name = this.data.name), e;
      }),
      (i.prototype._extendChildProps = function(e) {
        var t = jQuery.extend(this._inheritedProperties(), e);
        return this.data.value === e.value && (t.selected = !0), t;
      }),
      (i.prototype._prepareChildren = function() {
        if (this.data.options) {
          var e = this;
          jQuery.each(this.data.options, function(t, o) {
            e.jqObj.append(new i(e._extendChildProps(o)));
          });
        }
      }),
      (i.prototype.isCustom = function() {
        return -1 !== jQuery.inArray(this.data.type, this.customTypes);
      }),
      (i.prototype._isStoringValue = function() {
        return (
          -1 !==
          jQuery.inArray(this.data.type, [
            "text",
            "textarea",
            "option",
            "radio",
            "checkbox"
          ])
        );
      }),
      (i.prototype._htmlAsValue = function() {
        return "textarea" === this.data.type;
      }),
      (i.prototype._valAsValue = function() {
        return jQuery.inArray(this.data.type, [
          "text",
          "checkbox",
          "radio",
          "option",
          "select",
          "select-one",
          "select-multiple"
        ]);
      }),
      (i.prototype._getControlValue = function() {
        return { checkbox: 1 }[this.data.type] || this.data.value;
      }),
      (i.prototype._setControlValue = function() {
        this._valAsValue()
          ? this.jqObj.val(this._getControlValue())
          : this._htmlAsValue() && this.jqObj.html(this.data.value);
      }),
      (i.prototype._getCheckedAttr = function() {
        return { option: "selected", radio: "checked", checkbox: "checked" }[
          this.data.type
        ];
      }),
      (i.prototype._setChecked = function() {
        this.data.selected && this.jqObj.attr(this._getCheckedAttr(), !0);
      }),
      (i.prototype._setValue = function() {
        this._setControlValue(),
          i.isCheckable(this.data.type) && this._setChecked();
      }),
      (i.prototype._prepareValue = function() {
        this._isStoringValue() && this._setValue();
      }),
      (i.prototype._applyAttributes = function() {
        this.jqObj.attr(r.cleanAttributes(this.data));
      }),
      (i.value = function(e) {
        return i.controlCheckable(e) ? e.checked : e.value;
      }),
      (i.isCheckable = function(e) {
        return -1 !== jQuery.inArray(e, ["checkbox", "radio", "option"]);
      }),
      (i.controlType = function(e) {
        var t, o;
        return "string" == typeof e
          ? e
          : ((t = jQuery(e)),
            (o = null),
            t.attr("type") &&
            ((o = t.attr("type")),
            jQuery.inArray(o, [
              "textarea",
              "text",
              "select",
              "select-one",
              "select-multiple",
              "submit"
            ]))
              ? o
              : t.attr("tagName"));
      }),
      (i.controlCheckable = function(e) {
        return i.isCheckable(i.controlType(e));
      }),
      (i.controlToggleChecked = function(e, t) {
        return o(205).setAttr(e, "checked", t);
      }),
      (i.controlSetValue = function(e, t) {
        return i.controlCheckable(e)
          ? i.controlToggleChecked(e, t)
          : o(205).setAttr(e, "value", t);
      }),
      (i.currentOption = function(e) {
        return e.options[e.selectedIndex];
      }),
      (i.currentOptionInnerHTML = function(e) {
        return i.currentOption(e).innerHTML;
      }),
      (n.prototype.eq = function(e) {
        return this.value === e;
      }),
      (n.prototype.width = function(e) {
        return this.jqItem.width();
      }),
      (n.prototype._render = function(e) {
        var t = $("<span/>").append($(this.html).clone());
        return $('<div class="item"></div>').append(t);
      }),
      (n.prototype.render = function(e) {
        return this.jqItem;
      }),
      (n.prototype.select = function(e) {
        e
          ? this.jqItem.addClass("selected")
          : this.jqItem.removeClass("selected");
      }),
      (n.prototype.selectAndReturnIfValueMatch = function(e) {
        return this.eq(e) ? (this.select(!0), this) : (this.select(!1), null);
      }),
      (a.prototype._init = function() {
        this._initWrapper(), this._initSwitcher(), this._initOptions();
      }),
      (a.prototype._initTitle = function() {
        this.jqTitle = $('<span class="title" />');
      }),
      (a.prototype._initIcon = function() {
        this.jqIcon = $('<span class="icon" />');
      }),
      (a.prototype._initOptions = function() {
        var e = o(205);
        this.jqItems = e.createPopup({ class: "items" });
      }),
      (a.prototype._initWrapper = function() {
        (this.jqWrapper = $('<div class="custom-select" />')),
          this.jqWrapper.data({
            disable: this.disable.bind(this),
            enable: this.enable.bind(this)
          });
      }),
      (a.prototype._initSwitcher = function() {
        var e = this;
        this._initTitle(),
          this._initIcon(),
          (this.jqSwitcher = $('<div class="switcher" />')),
          this.jqSwitcher.append(this.jqTitle),
          this.jqSwitcher.append($(this.jqIcon).clone()),
          (this.opened = !1),
          this.jqSwitcher.click(function(t) {
            e.toggleItems();
          }),
          (e = this),
          $(document).click(function(t) {
            $(t.target).closest(e.jqSwitcher).length ||
              (((!e.jqSwitcher.is(t.target) &&
                0 === e.jqSwitcher.has(t.target).length) ||
                (!e.jqItems.is(t.target) &&
                  0 === !e.jqItems.has(t.target).length)) &&
                e.opened &&
                (e.jqItems.hide(),
                (e.opened = !1),
                e.jqSwitcher.removeClass("open"),
                t.stopPropagation()));
          });
      }),
      (a.prototype.toggleItems = function() {
        this.disabled() ||
          (this.opened
            ? (this.jqItems.hide(),
              this.jqSwitcher.removeClass("open"),
              (this.opened = !1))
            : (this.jqItems.show(),
              this.jqSwitcher.addClass("open"),
              (this.opened = !0)));
      }),
      (a.prototype.setWidth = function() {
        this.jqWrapper.width(this.width);
      }),
      (a.prototype.joinParts = function() {
        this.jqWrapper.append(this.jqSwitcher),
          this.jqWrapper.append(this.jqItems),
          this.jqWrapper.selectable(!1);
      }),
      (a.prototype.render = function() {
        return this.jqWrapper;
      }),
      (a.prototype.selectItemByValue = function(e) {
        var t = null;
        return (
          $(this.items).each(function(o, i) {
            var n = i.selectAndReturnIfValueMatch(e);
            n && (t = n);
          }),
          t
        );
      }),
      (a.prototype.setValue = function(e) {
        if (this._value !== e) {
          var t = this.selectItemByValue(e);
          (this._value = e), this.jqTitle.html(t.html), this.change();
        }
      }),
      (a.prototype.change = function(e) {
        if (e) return void this.callbacks.push(e);
        this.callbacks.forEach(
          function(e) {
            e.call(this);
          }.bind(this)
        );
      }),
      (a.prototype.value = function() {
        return this._value;
      }),
      (a.prototype.val = function(e) {
        return void 0 !== e ? void this.setValue(e) : this.value();
      }),
      (a.prototype.addItems = function(e) {
        var t = this;
        $(e).each(function(e, o) {
          t.addItem(o.value, o.html);
        });
      }),
      (a.prototype.addItem = function(e, t) {
        var o,
          i = this,
          a = new n(e, t);
        this.items.push(a),
          (o = a.render()),
          o.click(function() {
            i.setValue(e), i.toggleItems();
          }),
          this.jqItems.append(o),
          null === this.value() && this.setValue(e);
      }),
      (a.prototype.disable = function() {
        this._disabled = !0;
      }),
      (a.prototype.enable = function() {
        this._disabled = !1;
      }),
      (a.prototype.disabled = function() {
        return this._disabled;
      }),
      (t.Input = i),
      (t.Combobox = a);
  },
  749: function(e, t, o) {
    (function(t) {
      "use strict";
      function i(e, t, o) {
        var i,
          n,
          a = t.m_model.properties();
        l.call(this, a, t),
          (i = this._series = t.mainSeries()),
          (this._chart = t.m_model),
          (this._model = t),
          (this._source = o),
          (this._property = a),
          (this._seriesProperty = i.properties()),
          (this._scaleProperty = i.m_priceScale.properties()),
          (this._mainAxisProperty = i.properties().priceAxisProperties),
          (n = null),
          $.each(t.m_model.panes(), function(e, t) {
            $.each(t.dataSources(), function(e, o) {
              if (o === i) return (n = t), !1;
            });
          }),
          (this._pane = n),
          this.prepareLayout(),
          (this._themes = []),
          (this.supportThemeSwitcher = !1);
      }
      var n = o(406),
        a = (o(76).UndoHistory, o(121)),
        r = o(10),
        l = r.PropertyPage,
        p = r.GreateTransformer,
        s = r.LessTransformer,
        d = r.ToIntTransformer,
        h = r.SimpleStringBinder,
        c = r.BooleanBinder,
        b = r.SliderBinder,
        u = r.ColorBinding,
        C = r.SimpleComboBinder,
        y = r.DisabledBinder,
        g = r.CheckboxWVBinding,
        w = o(71),
        T = o(37),
        _ = o(47).addColorPicker,
        m = o(31).createLineStyleEditor,
        f = o(15).createLineWidthEditor,
        L = (o(103).bindPopupMenu, o(11).DefaultProperty),
        v = o(226).availableTimezones,
        k = o(309);
      o(123).createConfirmDialog,
        o(13).getLogger("Chart.PropertyPage"),
        o(48).trackEvent;
      inherit(i, l),
        inherit(i, n),
        (i.prototype.setScalesOpenTab = function() {
          this.scalesTab &&
            this.scalesTab.data("layout-tab-open", a.TabOpenFrom.Override);
        }),
        (i.prototype.setTmzOpenTab = function() {
          this.tmzSessTable &&
            this.tmzSessTable.data("layout-tab-open", a.TabOpenFrom.Override);
        }),
        (i.prototype.prepareLayout = function() {
          var e,
            o,
            i,
            n,
            r,
            l,
            L,
            S,
            P,
            x,
            B,
            E,
            R,
            F,
            I,
            A,
            D,
            W,
            O,
            V,
            j,
            z,
            M,
            H,
            q,
            N,
            G,
            U,
            Y,
            K,
            Q,
            J,
            Z,
            X,
            ee,
            te,
            oe,
            ie,
            ne,
            ae,
            re,
            le,
            pe,
            se,
            de,
            he,
            ce,
            be,
            ue,
            Ce,
            ye,
            ge,
            $e,
            we,
            Te,
            _e,
            me,
            fe,
            Le,
            ve,
            ke,
            Se,
            Pe,
            xe,
            Be,
            Ee,
            Re,
            Fe,
            Ie,
            Ae,
            De,
            We,
            Oe,
            Ve,
            je,
            ze,
            Me,
            He,
            qe,
            Ne,
            Ge,
            Ue,
            Ye,
            Ke,
            Qe,
            Je,
            Ze,
            Xe,
            et,
            tt,
            ot,
            it,
            nt,
            at,
            rt,
            lt,
            pt,
            st,
            dt,
            ht,
            ct,
            bt,
            ut,
            Ct,
            yt,
            gt,
            $t,
            wt,
            Tt,
            _t,
            mt,
            ft,
            Lt,
            vt,
            kt,
            St,
            Pt,
            xt,
            Bt,
            Et,
            Rt,
            Ft,
            It,
            At,
            Dt,
            Wt,
            Ot,
            Vt = this;
          if (
            (t.enabled("chart_property_page_style") &&
              ((e = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">'
              ).data("layout-tab", a.TabNames.style)),
              (o = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">'
              ).data("layout-tab", a.TabNames.style)),
              (i = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">'
              ).data("layout-tab", a.TabNames.style)),
              this._prepareSeriesStyleLayout(e, o, i, this._seriesProperty),
              (this._hasSeriesStyleLayout = !0),
              (l = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">'
              ).data("layout-tab", a.TabNames.style)),
              (I = $('<input type="checkbox">')),
              (A = this.addLabeledRow(l, $.t("Price Line"), I)),
              $("<td>")
                .append(I)
                .prependTo(A),
              this.bindControl(
                new c(
                  I,
                  this._seriesProperty.showPriceLine,
                  !0,
                  this.model(),
                  "Change Price Price Line"
                )
              ),
              (D = _($("<td>").appendTo(A))),
              this.bindControl(
                new u(
                  D,
                  this._seriesProperty.priceLineColor,
                  !0,
                  this.model(),
                  "Change Price Line Color"
                )
              ),
              (W = f()),
              $('<td colspan="2">')
                .append(W)
                .appendTo(A),
              this.bindControl(
                new b(
                  W,
                  this._seriesProperty.priceLineWidth,
                  !0,
                  this.model(),
                  "Change Price Line Width"
                )
              ),
              (O = $('<input type="checkbox">')),
              (V = this.addLabeledRow(l, $.t("Previous Close Price Line"), O)),
              $("<td>")
                .append(O)
                .prependTo(V),
              this.bindControl(
                new c(
                  O,
                  this._seriesProperty.showPrevClosePriceLine,
                  !0,
                  this.model(),
                  "Change Price Previous Close Price Line"
                )
              ),
              this.bindControl(
                new y(
                  O,
                  this._series.isPrevClosePriceAvailable(),
                  !0,
                  this.model(),
                  "Change Price Previous Close Price Line",
                  !0
                )
              ),
              (j = this.createColorPicker()),
              $("<td>")
                .append(j)
                .appendTo(V),
              this.bindControl(
                new u(
                  j,
                  this._seriesProperty.prevClosePriceLineColor,
                  !0,
                  this.model(),
                  "Change Previous Close Price Line Color"
                )
              ),
              (W = f()),
              $("<td>")
                .append(W)
                .appendTo(V),
              this.bindControl(
                new b(
                  W,
                  this._seriesProperty.prevClosePriceLineWidth,
                  !0,
                  this.model(),
                  "Change Previous Close Price Line Width"
                )
              ),
              (S = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">'
              ).data("layout-tab", a.TabNames.style)),
              this._pane &&
                (-1 !==
                this._pane
                  .leftPriceScale()
                  .dataSources()
                  .indexOf(this._series)
                  ? (z = "left")
                  : -1 !==
                    this._pane
                      .rightPriceScale()
                      .dataSources()
                      .indexOf(this._series)
                  ? (z = "right")
                  : this._pane.isOverlay(this._series) && (z = "none")),
              z &&
                ((M = { left: $.t("Scale Left"), right: $.t("Scale Right") }),
                Vt._pane.actionNoScaleIsEnabled(Vt._series) &&
                  (M.none = $.t("Screen (No Scale)")),
                (H = this.createKeyCombo(M)
                  .val(z)
                  .change(function() {
                    switch (this.value) {
                      case "left":
                        Vt._model.move(
                          Vt._series,
                          Vt._pane,
                          Vt._pane.leftPriceScale()
                        );
                        break;
                      case "right":
                        Vt._model.move(
                          Vt._series,
                          Vt._pane,
                          Vt._pane.rightPriceScale()
                        );
                        break;
                      case "none":
                        Vt._model.move(Vt._series, Vt._pane, null);
                    }
                  })),
                (q = this.addRow(S)),
                $("<td>" + $.t("Scale") + "</td>").appendTo(q),
                $("<td>")
                  .appendTo(q)
                  .append(H))),
            t.enabled("chart_property_page_scales") &&
              ((N = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">'
              ).data("layout-tab", a.TabNames.scales)),
              (G = $('<input type="checkbox">').change(function() {
                this.checked &&
                  setTimeout(function() {
                    Vt._model.m_model.invalidate(new T(T.LIGHT_UPDATE));
                  }, 0);
              })),
              (U = this.addLabeledRow(N, $.t("Auto Scale"), G)),
              (Y = function(e) {
                this._undoModel.setAutoScaleProperty(
                  this._property,
                  e,
                  Vt._series.priceScale(),
                  this._undoText
                );
              }),
              $("<td>")
                .append(G)
                .prependTo(U),
              this.bindControl(
                new c(
                  G,
                  this._scaleProperty.autoScale,
                  !0,
                  this.model(),
                  "Auto Scale",
                  Y
                )
              ),
              this.bindControl(
                new y(
                  G,
                  this._scaleProperty.autoScaleDisabled,
                  !0,
                  this.model(),
                  "Auto Scale"
                )
              ),
              (K = $('<input type="checkbox">')),
              (Q = this.addLabeledRow(N, $.t("Percentage"), K)),
              (J = function(e) {
                this._undoModel.setPercentProperty(
                  this._property,
                  e,
                  Vt._series.priceScale(),
                  this._undoText
                );
              }),
              $("<td>")
                .append(K)
                .prependTo(Q),
              this.bindControl(
                new c(
                  K,
                  this._mainAxisProperty.percentage,
                  !0,
                  this.model(),
                  "Scale Percentage",
                  J
                )
              ),
              this.bindControl(
                new y(
                  K,
                  this._mainAxisProperty.percentageDisabled,
                  !0,
                  this.model(),
                  "Scale Percentage"
                )
              ),
              (Z = $('<input type="checkbox">')),
              (X = this.addLabeledRow(N, $.t("Log Scale"), Z)),
              (ee = function(e) {
                this._undoModel.setLogProperty(
                  this._property,
                  e,
                  Vt._series.priceScale(),
                  this._undoText
                );
              }),
              $("<td>")
                .append(Z)
                .prependTo(X),
              this.bindControl(
                new c(
                  Z,
                  this._mainAxisProperty.log,
                  !0,
                  this.model(),
                  "Log Scale",
                  ee
                )
              ),
              this.bindControl(
                new y(
                  Z,
                  this._mainAxisProperty.logDisabled,
                  !0,
                  this.model(),
                  "Log Scale"
                )
              ),
              (te = $('<input type="checkbox">').change(function() {
                this.checked &&
                  setTimeout(function() {
                    Vt._model.m_model.invalidate(new T(T.LIGHT_UPDATE));
                  }, 0);
              })),
              (oe = this.addLabeledRow(N, $.t("Scale Series Only"), te)),
              $("<td>")
                .append(te)
                .prependTo(oe),
              this.bindControl(
                new c(
                  te,
                  this._property.scalesProperties.scaleSeriesOnly,
                  !0,
                  this.model(),
                  "Scale Series Only"
                )
              ),
              (ie = $("<input type='checkbox'/>")),
              (ne = this.addLabeledRow(N, $.t("Lock scale"), ie)),
              (ae = function(e) {
                this._undoModel.setLockScaleProperty(
                  this._property,
                  e,
                  Vt._series,
                  this._undoText
                );
              }),
              (re = function(e) {
                ne.toggle(e.value() === w.STYLE_PNF);
              }),
              $("<td>")
                .append(ie)
                .prependTo(ne),
              this.bindControl(
                new c(
                  ie,
                  this._seriesProperty.lockScale,
                  !0,
                  this.model(),
                  "Change lock scale",
                  ae
                )
              ),
              this._seriesProperty.style.listeners().subscribe(this, re),
              (le = $("<input type='checkbox'/>")),
              (pe = this.addLabeledRow(N, $.t("Track time"), le)),
              $("<td>")
                .append(le)
                .prependTo(pe),
              this.bindControl(
                new g(le, this._model.trackTime(), null, "Change track time")
              ),
              (se = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">'
              ).data("layout-tab", a.TabNames.scales)),
              (de = $('<input type="text" class="ticker">')),
              (he = this.addLabeledRow(se, $.t("Top Margin"), de)),
              $("<td>")
                .appendTo(he)
                .append(de),
              $("<td>%</td>").appendTo(he),
              (ce = [d(this._property.paneProperties.topMargin.value())]),
              ce.push(s(25)),
              ce.push(p(0)),
              this.bindControl(
                new h(
                  de,
                  this._property.paneProperties.topMargin,
                  ce,
                  !0,
                  this.model(),
                  "Top Margin"
                )
              ),
              (be = $('<input type="text" class="ticker">')),
              (ue = this.addLabeledRow(se, $.t("Bottom Margin"), be)),
              $("<td>")
                .appendTo(ue)
                .append(be),
              $("<td>%</td>").appendTo(ue),
              (Ce = [d(this._property.paneProperties.bottomMargin.value())]),
              Ce.push(s(25)),
              Ce.push(p(0)),
              this.bindControl(
                new h(
                  be,
                  this._property.paneProperties.bottomMargin,
                  Ce,
                  !0,
                  this.model(),
                  "Bottom Margin"
                )
              ),
              (ye = $('<input type="text" class="ticker">')),
              (ge = this.addLabeledRow(se, $.t("Right Margin"), ye)),
              $("<td>")
                .appendTo(ge)
                .append(ye),
              $("<td>" + $.t("bars", { context: "margin" }) + "</td>").appendTo(
                ge
              ),
              ($e = [d(this._property.timeScale.rightOffset.value())]),
              $e.push(s(~~this._chart.timeScale().maxRightOffset())),
              $e.push(p(-200)),
              this.bindControl(
                new h(
                  ye,
                  this._property.timeScale.rightOffset,
                  $e,
                  !0,
                  this.model(),
                  "Right Margin"
                )
              ),
              (we = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">'
              ).data("layout-tab", a.TabNames.scales)),
              (Te = $("<input type='checkbox' />")),
              (_e = this.addLabeledRow(we, $.t("Left Axis"), Te)),
              $("<td>")
                .append(Te)
                .prependTo(_e),
              setTimeout(
                function() {
                  this.bindControl(
                    new c(
                      Te,
                      this._property.scalesProperties.showLeftScale,
                      !0,
                      this.model(),
                      "Show Left Axis"
                    )
                  );
                }.bind(this),
                0
              ),
              (me = $("<input type='checkbox' />")),
              (fe = this.addLabeledRow(we, $.t("Right Axis"), me)),
              $("<td>")
                .append(me)
                .prependTo(fe),
              setTimeout(
                function() {
                  this.bindControl(
                    new c(
                      me,
                      this._property.scalesProperties.showRightScale,
                      !0,
                      this.model(),
                      "Show Right Axis"
                    )
                  );
                }.bind(this),
                0
              ),
              t.enabled("countdown") &&
                ((Le = $("<input type='checkbox'>")),
                (ve = this.addLabeledRow(we, $.t("Countdown"), Le)),
                $("<td>")
                  .append(Le)
                  .prependTo(ve),
                this.bindControl(
                  new c(
                    Le,
                    this._seriesProperty.showCountdown,
                    !0,
                    this.model(),
                    "Change Show Countdown"
                  )
                )),
              (ke = $('<input type="checkbox">')),
              (Se = this.addLabeledRow(we, $.t("Symbol Last Value"), ke)),
              $("<td>")
                .append(ke)
                .prependTo(Se),
              this.bindControl(
                new c(
                  ke,
                  this._property.scalesProperties.showSeriesLastValue,
                  !0,
                  this.model(),
                  "Change Symbol Last Value Visibility"
                )
              ),
              (Pe = $('<input type="checkbox">')),
              (xe = this.addLabeledRow(
                we,
                $.t("Symbol Prev. Close Value"),
                Pe
              )),
              $("<td>")
                .append(Pe)
                .prependTo(xe),
              this.bindControl(
                new c(
                  Pe,
                  this._property.scalesProperties.showSeriesPrevCloseValue,
                  !0,
                  this.model(),
                  "Change Symbol Previous Close Value Visibility"
                )
              ),
              this.bindControl(
                new y(
                  Pe,
                  this._series.isPrevClosePriceAvailable(),
                  !0,
                  this.model(),
                  "Change Symbol Previous Close Value Visibility",
                  !0
                )
              ),
              (Be = $('<input type="checkbox">')),
              (Ee = this.addLabeledRow(we, $.t("Indicator Last Value"), Be)),
              $("<td>")
                .append(Be)
                .prependTo(Ee),
              this.bindControl(
                new c(
                  Be,
                  this._property.scalesProperties.showStudyLastValue,
                  !0,
                  this.model(),
                  "Change Indicator Last Value Visibility"
                )
              ),
              (Re = $('<input type="checkbox">')),
              (Fe = this.addLabeledRow(we, $.t("Symbol Labels"), Re)),
              $("<td>")
                .append(Re)
                .prependTo(Fe),
              this.bindControl(
                new c(
                  Re,
                  this._property.scalesProperties.showSymbolLabels,
                  !0,
                  this.model(),
                  "Show Symbol Labels"
                )
              ),
              (Ie = $('<input type="checkbox">')),
              (Ae = this.addLabeledRow(we, $.t("Indicator Labels"), Ie)),
              $("<td>")
                .append(Ie)
                .prependTo(Ae),
              this.bindControl(
                new c(
                  Ie,
                  this._property.scalesProperties.showStudyPlotLabels,
                  !0,
                  this.model(),
                  "Show Study Plots Labels"
                )
              ),
              (De = $("<input type='checkbox' />")),
              (We = this.addLabeledRow(we, $.t("No Overlapping Labels"), De)),
              $("<td>")
                .append(De)
                .prependTo(We),
              this.bindControl(
                new c(
                  De,
                  this._scaleProperty.alignLabels,
                  !0,
                  this.model(),
                  "No Overlapping Labels"
                )
              ),
              (Oe = $('<div class="property-page-column-2">')
                .append(N)
                .append(se)),
              (Ve = $('<div class="property-page-column-2">').append(we)),
              (P = $("<div>")
                .css("min-width", "520px")
                .data("layout-tab", a.TabNames.scales)),
              P.append(Oe).append(Ve),
              (this.scalesTab = P),
              (L = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">'
              ).data("layout-tab", a.TabNames.style)),
              (je = this.createSeriesMinTickEditor()),
              (ze = $("<tr>")),
              (Me = $("<tr>").appendTo(we)),
              (He = $('<td colspan="2">').appendTo(Me)),
              $("<td>" + $.t("Decimal Places") + "</td>").appendTo(ze),
              $("<td>")
                .append(je)
                .appendTo(ze),
              L.append(ze).appendTo(He),
              this.bindControl(
                new C(
                  je,
                  this._seriesProperty.minTick,
                  null,
                  !0,
                  this.model(),
                  "Change Decimal Places"
                )
              )),
            t.enabled("chart_property_page_background") &&
              ((qe = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">'
              )),
              (Ne = this.createColorPicker({ hideTransparency: !0 })),
              (Ge = this.addLabeledRow(qe, $.t("Background"))),
              $('<td colspan="2">')
                .append(Ne)
                .appendTo(Ge),
              this.bindControl(
                new u(
                  Ne,
                  this._property.paneProperties.background,
                  !0,
                  this.model(),
                  "Change Chart Background Color"
                )
              ),
              (Ue = this.addLabeledRow(qe, $.t("Vert Grid Lines"))),
              (Ye = this.createColorPicker()),
              $("<td>")
                .append(Ye)
                .appendTo(Ue),
              this.bindControl(
                new u(
                  Ye,
                  this._property.paneProperties.vertGridProperties.color,
                  !0,
                  this.model(),
                  "Change Vert Grid Lines Color"
                )
              ),
              (Ke = m()),
              $('<td colspan="2">')
                .append(Ke.render())
                .appendTo(Ue),
              this.bindControl(
                new C(
                  Ke,
                  this._property.paneProperties.vertGridProperties.style,
                  parseInt,
                  !0,
                  this.model(),
                  "Change Vert Grid Lines Style"
                )
              ),
              (Qe = this.addLabeledRow(qe, $.t("Horz Grid Lines"))),
              (Je = this.createColorPicker()),
              $("<td>")
                .append(Je)
                .appendTo(Qe),
              this.bindControl(
                new u(
                  Je,
                  this._property.paneProperties.horzGridProperties.color,
                  !0,
                  this.model(),
                  "Change Horz Grid Lines Color"
                )
              ),
              (Ze = m()),
              $('<td colspan="2">')
                .append(Ze.render())
                .appendTo(Qe),
              this.bindControl(
                new C(
                  Ze,
                  this._property.paneProperties.horzGridProperties.style,
                  parseInt,
                  !0,
                  this.model(),
                  "Change Horz Grid Lines Style"
                )
              ),
              (Xe = this.createColorPicker()),
              (et = this.addLabeledRow(qe, $.t("Scales Text"))),
              $("<td>")
                .append(Xe)
                .appendTo(et),
              this.bindControl(
                new u(
                  Xe,
                  this._property.scalesProperties.textColor,
                  !0,
                  this.model(),
                  "Change Scales Text Color"
                )
              ),
              (tt = this.createFontSizeEditor()),
              $("<td>")
                .append(tt)
                .appendTo(et),
              this.bindControl(
                new C(
                  tt,
                  this._property.scalesProperties.fontSize,
                  parseInt,
                  !0,
                  this.model(),
                  "Change Scales Font Size"
                )
              ),
              (ot = this.createColorPicker()),
              (it = this.addLabeledRow(qe, $.t("Scales Lines"))),
              $('<td colspan="2">')
                .append(ot)
                .appendTo(it),
              this.bindControl(
                new u(
                  ot,
                  this._property.scalesProperties.lineColor,
                  !0,
                  this.model(),
                  "Change Scales Lines Color"
                )
              ),
              (nt = this.addLabeledRow(qe, $.t("Watermark"))),
              (at = this.createColorPicker()),
              $("<td>")
                .append(at)
                .appendTo(nt),
              this.bindControl(
                new u(
                  at,
                  this._property.symbolWatermarkProperties.color,
                  !0,
                  this.model(),
                  "Change Symbol Watermark Color",
                  this._property.symbolWatermarkProperties.transparency
                )
              ),
              (rt = this.addLabeledRow(qe, $.t("Crosshair"))),
              (lt = this.createColorPicker()),
              $("<td>")
                .append(lt)
                .appendTo(rt),
              this.bindControl(
                new u(
                  lt,
                  this._property.paneProperties.crossHairProperties.color,
                  !0,
                  this.model(),
                  "Change Crosshair Color",
                  this._property.paneProperties.crossHairProperties.transparency
                )
              ),
              (pt = m()),
              $("<td>")
                .append(pt.render())
                .appendTo(rt),
              this.bindControl(
                new C(
                  pt,
                  this._property.paneProperties.crossHairProperties.style,
                  parseInt,
                  !0,
                  this.model(),
                  "Change Crosshair Style"
                )
              ),
              (st = f()),
              $("<td>")
                .append(st)
                .appendTo(this.addRow(qe).prepend("<td/><td/>")),
              this.bindControl(
                new b(
                  st,
                  this._property.paneProperties.crossHairProperties.width,
                  !0,
                  this.model(),
                  "Change Crosshair Width"
                )
              ),
              (dt = $('<table class="property-page">')),
              (ht = this.addLabeledRow(
                dt,
                $.t("Navigation Buttons"),
                null,
                !0
              )),
              (ct = $(document.createElement("select"))),
              k.availableValues().forEach(function(e) {
                $(document.createElement("option"))
                  .attr("value", e.value)
                  .text(e.title)
                  .appendTo(ct);
              }),
              $("<td>")
                .append(ct)
                .appendTo(ht),
              this.bindControl(
                new C(
                  ct,
                  k.property(),
                  null,
                  !0,
                  this.model(),
                  "Change Navigation Buttons Visibility"
                )
              ),
              (bt = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">'
              )),
              (ut = $('<input type="checkbox">')),
              (Ct = this.addLabeledRow(bt, $.t("Symbol Description"), ut)),
              $("<td>")
                .append(ut)
                .prependTo(Ct),
              this.bindControl(
                new c(
                  ut,
                  this._property.paneProperties.legendProperties.showSeriesTitle,
                  !0,
                  this.model(),
                  "Change Symbol Description Visibility"
                )
              ),
              (yt = $('<input type="checkbox">')),
              (gt = this.addLabeledRow(bt, $.t("OHLC Values"), yt)),
              $("<td>")
                .append(yt)
                .prependTo(gt),
              this.bindControl(
                new c(
                  yt,
                  this._property.paneProperties.legendProperties.showSeriesOHLC,
                  !0,
                  this.model(),
                  "Change OHLC Values Visibility"
                )
              ),
              ($t = $('<input type="checkbox">')),
              (wt = this.addLabeledRow(bt, $.t("Indicator Titles"), $t)),
              $("<td>")
                .append($t)
                .prependTo(wt),
              this.bindControl(
                new c(
                  $t,
                  this._property.paneProperties.legendProperties.showStudyTitles,
                  !0,
                  this.model(),
                  "Change Indicator Titles Visibility"
                )
              ),
              (Tt = $('<input type="checkbox">')),
              (_t = this.addLabeledRow(bt, $.t("Indicator Arguments"), Tt)),
              (mt = function(e) {
                Tt.prop("disabled", !e.value());
              }),
              $("<td>")
                .append(Tt)
                .prependTo(_t),
              this.bindControl(
                new c(
                  Tt,
                  this._property.paneProperties.legendProperties.showStudyArguments,
                  !0,
                  this.model(),
                  "Change Indicator Arguments Visibility"
                )
              ),
              this._property.paneProperties.legendProperties.showStudyTitles
                .listeners()
                .subscribe(this, mt),
              mt(
                this._property.paneProperties.legendProperties.showStudyTitles
              ),
              (ft = $('<input type="checkbox">')),
              (Lt = this.addLabeledRow(bt, $.t("Indicator Values"), ft)),
              $("<td>")
                .append(ft)
                .prependTo(Lt),
              this.bindControl(
                new c(
                  ft,
                  this._property.paneProperties.legendProperties.showStudyValues,
                  !0,
                  this.model(),
                  "Change Indicator Values Visibility"
                )
              ),
              (vt = $('<div class="property-page-column-2">').append(qe)),
              (kt = $('<div class="property-page-column-2">').append(bt)),
              (St = $('<div class="property-page-column-1">').append(dt)),
              (x = $("<div>")
                .css("min-width", "520px")
                .data("layout-tab", a.TabNames.background)),
              x
                .append(vt)
                .append(kt)
                .append(St)),
            t.enabled("chart_property_page_timezone_sessions"))
          ) {
            for (
              E = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">'
              ).data("layout-tab", a.TabNames.timezoneSessions),
                this.tmzSessTable = E,
                ge = $("<tr>").appendTo(E),
                Pt = $("<td>").appendTo(ge),
                xt = $('<table cellspacing="0" cellpadding="0">').appendTo(Pt),
                Bt = $("<tr>"),
                Bt.appendTo(xt),
                Et = $("<td>"),
                Et.appendTo(Bt),
                Et.text($.t("Time Zone")),
                Rt = $('<td colspan="2" class="tzeditor">'),
                Rt.appendTo(Bt),
                Ft = "",
                It = 0;
              It < v.length;
              It++
            )
              Ft +=
                '<option value="' + v[It].id + '">' + v[It].title + "</option>";
            (At = $("<select>" + Ft + "</select>")),
              At.appendTo(Rt),
              this.bindControl(
                new C(
                  At,
                  this._property.timezone,
                  null,
                  !0,
                  this.model(),
                  "Change Timezone"
                )
              ),
              this._series.createSessStudy(),
              this.createSessTable(E);
          }
          (Dt =
            t.enabled("chart_property_page_events_alerts") &&
            !t.enabled("charting_library_base")),
            Dt &&
              ((Wt = t.enabled("alerts")
                ? a.TabNames.eventsAndAlerts
                : a.TabNames.events),
              (F = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">'
              ).data("layout-tab", Wt)),
              this.createEventsTable(F)),
            (Ot =
              t.enabled("trading_options") ||
              t.enabled("chart_property_page_trading")),
            Ot && (R = this.createTradingTable()),
            (n = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">'
            )),
            (r = $(
              '<table class="property-page property-page-unpadded" cellspacing="0" cellpadding="0">'
            )
              .css({ width: "100%" })
              .data("layout-separated", !0)),
            (B = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">'
            ).data("layout-tab", a.TabNames.drawings)),
            (this._table = $()
              .add(e)
              .add(o)
              .add(i)
              .add(n)
              .add(r)
              .add(l)
              .add(S)
              .add(P)
              .add(x)
              .add(B)
              .add(E)
              .add(R)
              .add(F)),
            this.loadData();
        }),
        (i.prototype.widget = function() {
          return this._table;
        }),
        (i.prototype.loadData = function() {
          this.superclass.prototype.loadData.call(this), this.switchStyle();
        }),
        (i.prototype.loadTheme = function(e, t, o) {}),
        (i.prototype.applyTheme = function(e, t) {
          this._model._chartWidget._chartWidgetCollection.applyTheme(e, t),
            this.loadData();
        }),
        (i.prototype.createTemplateButton = function(e) {
          return t.enabled("chart_property_page_template_button")
            ? (this,
              e || (e = {}),
              $(
                '<a href="#" class="_tv-button">' +
                  $.t("Template") +
                  '<span class="icon-dropdown"></span></a>'
              ))
            : $("<span />");
        }),
        (i.prototype.switchStyle = function() {
          if (this._hasSeriesStyleLayout)
            switch (
              ($(this._barsTbody)
                .add(this._barsColorerTbody)
                .add(this._renkoTbody)
                .add(this._pbTbody)
                .add(this._kagiTbody)
                .add(this._pnfTbody)
                .add(this._candlesTbody)
                .add(this._candlesColorerTbody)
                .add(this._hollowCandlesTbody)
                .add(this._lineTbody)
                .add(this._areaTbody)
                .add(this._haTbody)
                .add(this._haColorerTbody)
                .add(this._baselineTbody)
                .css("display", "none"),
              this._seriesProperty.style.value())
            ) {
              case w.STYLE_BARS:
                this._barsTbody.css("display", "table-row-group"),
                  this._barsColorerTbody.css("display", "table-row-group");
                break;
              case w.STYLE_CANDLES:
                this._candlesTbody.css("display", "table-row-group"),
                  this._candlesColorerTbody.css("display", "table-row-group");
                break;
              case w.STYLE_HOLLOW_CANDLES:
                this._hollowCandlesTbody.css("display", "table-row-group");
                break;
              case w.STYLE_LINE:
                this._lineTbody.css("display", "table-row-group");
                break;
              case w.STYLE_AREA:
                this._areaTbody.css("display", "table-row-group");
                break;
              case w.STYLE_RENKO:
                this._renkoTbody.css("display", "table-row-group");
                break;
              case w.STYLE_PB:
                this._pbTbody.css("display", "table-row-group");
                break;
              case w.STYLE_KAGI:
                this._kagiTbody.css("display", "table-row-group");
                break;
              case w.STYLE_PNF:
                this._pnfTbody.css("display", "table-row-group");
                break;
              case w.STYLE_HEIKEN_ASHI:
                this._haTbody.css("display", "table-row-group"),
                  this._haColorerTbody.css("display", "table-row-group");
                break;
              case w.STYLE_BASELINE:
                this._baselineTbody.css("display", "table-row-group");
            }
        }),
        (i.prototype.onResoreDefaults = function() {
          var e,
            t = this._model.model().properties().paneProperties.topMargin,
            o = this._model.model().properties().paneProperties.bottomMargin;
          t.listeners().fire(t),
            o.listeners().fire(o),
            (e = this._model.model().properties().timezone),
            e.listeners().fire(e);
        }),
        (i.prototype.defaultProperties = function() {
          var e = this,
            t = [
              e._seriesProperty.extendedHours,
              e._property.scalesProperties.showLeftScale,
              e._property.scalesProperties.showRightScale,
              e._property.timeScale.rightOffset
            ].map(function(e) {
              return { property: e, previousValue: e.value() };
            });
          return (
            setTimeout(function() {
              t.forEach(function(e) {
                e.property.value() !== e.previousValue &&
                  e.property.listeners().fire(e.property);
              });
              var o = new L(
                "chartproperties.paneProperties.rightAxisProperties"
              );
              $.each(["autoScale", "percentage", "log"], function(t, i) {
                var n = e._scaleProperty[i],
                  a = o[i].value();
                a !== n.value() && n.setValue(a);
              });
            }, 0),
            [this._property, this._seriesProperty]
          );
        }),
        (i.prototype.createEventsTable = function(e) {
          var o,
            i,
            n,
            a,
            r,
            l,
            p,
            s,
            d,
            h,
            g,
            w,
            T,
            L,
            v,
            k,
            S,
            P,
            x,
            B,
            E,
            R,
            F,
            I,
            A,
            D,
            W,
            O,
            V = $("<tr>").appendTo(e),
            j = $('<input type="checkbox" />'),
            z = this.addLabeledRow(V, $.t("Show Dividends on Chart"), j);
          $("<td>")
            .append(j)
            .prependTo(z),
            z.append("<td>"),
            this.bindControl(
              new c(
                j,
                this._seriesProperty.esdShowDividends,
                !0,
                this.model(),
                "Change Show or Hide Dividends"
              )
            ),
            (o = $('<input type="checkbox" />')),
            (z = this.addLabeledRow(V, $.t("Show Splits on Chart"), o)),
            $("<td>")
              .append(o)
              .prependTo(z),
            z.append("<td>"),
            this.bindControl(
              new c(
                o,
                this._seriesProperty.esdShowSplits,
                !0,
                this.model(),
                "Change Show or Hide Splits"
              )
            ),
            (i = $('<input type="checkbox" />')),
            (z = this.addLabeledRow(V, $.t("Show Earnings on Chart"), i)),
            $("<td>")
              .append(i)
              .prependTo(z),
            z.append("<td>"),
            this.bindControl(
              new c(
                i,
                this._seriesProperty.esdShowEarnings,
                !0,
                this.model(),
                "Change Show or Hide Earnings"
              )
            ),
            (n = this.createTableInTable(e)),
            (a = $('<input type="checkbox" />')),
            (r = m()),
            (l = f()),
            (z = this.addLabeledRow(n, $.t("Earnings breaks"), a)),
            $("<td>")
              .append(a)
              .prependTo(z),
            (p = _($("<td>").appendTo(z))),
            $("<td>")
              .append(r.render())
              .appendTo(z),
            $("<td>")
              .append(l)
              .appendTo(z),
            z.addClass("offset-row"),
            z.append("<td>"),
            this.bindControl(
              new c(
                a,
                this._seriesProperty.esdShowBreaks,
                !0,
                this.model(),
                "Change Show or Hide Earnings"
              )
            ),
            this.bindControl(
              new u(
                p,
                this._seriesProperty.esdBreaksStyle.color,
                !0,
                this.model(),
                "Change earnings color"
              )
            ),
            this.bindControl(
              new C(
                r,
                this._seriesProperty.esdBreaksStyle.style,
                parseInt,
                !0,
                this.model(),
                "Change style"
              )
            ),
            this.bindControl(
              new b(
                l,
                this._seriesProperty.esdBreaksStyle.width,
                !0,
                this.model(),
                "Change width"
              )
            ),
            (s = function(e) {
              a.prop("disabled", !e.value());
            }),
            this._seriesProperty.esdShowEarnings.listeners().subscribe(this, s),
            t.enabled("chart_events") &&
              ((d = $('<input type="checkbox">')),
              (h = $('<input type="checkbox">')),
              (g = $('<input type="checkbox" />')),
              (w = m()),
              (T = f()),
              (L = this.createColorPicker()),
              (v = this._property.chartEventsSourceProperties),
              this.bindControl(
                new c(
                  d,
                  v.visible,
                  !0,
                  this.model(),
                  "Change Show Economic Events on Chart"
                )
              ),
              this.bindControl(
                new c(
                  h,
                  v.futureOnly,
                  !0,
                  this.model(),
                  "Change Show Only Future Events"
                )
              ),
              this.bindControl(new y(h, v.visible, !0, this.model(), "", !0)),
              this.bindControl(new y(g, v.visible, !0, this.model(), "", !0)),
              this.bindControl(
                new c(
                  g,
                  v.breaks.visible,
                  !0,
                  this.model(),
                  "Change Show or Hide Events Breaks"
                )
              ),
              this.bindControl(
                new u(
                  L,
                  v.breaks.color,
                  !0,
                  this.model(),
                  "Change Events Breaks Color"
                )
              ),
              this.bindControl(
                new C(
                  w,
                  v.breaks.style,
                  parseInt,
                  !0,
                  this.model(),
                  "Change Events Breaks Style"
                )
              ),
              this.bindControl(
                new b(
                  T,
                  v.breaks.width,
                  !0,
                  this.model(),
                  "Change Events Breaks Width"
                )
              ),
              (k = $("<tr>").appendTo(e)),
              (z = this.addLabeledRow(
                k,
                $.t("Show Economic Events on Chart"),
                d
              )),
              $("<td>")
                .append(d)
                .prependTo(z),
              (S = this.createTableInTable(e)),
              (z = this.addLabeledRow(S, $.t("Show Only Future Events"), h)),
              $("<td>")
                .append(h)
                .prependTo(z),
              z.addClass("offset-row"),
              (P = this.createTableInTable(e)),
              (z = this.addLabeledRow(P, $.t("Events Breaks"), g)),
              $("<td>")
                .append(g)
                .prependTo(z),
              $("<td>")
                .append(L)
                .appendTo(z),
              $("<td>")
                .append(w.render())
                .appendTo(z),
              $("<td>")
                .append(T)
                .appendTo(z),
              z.addClass("offset-row")),
            t.enabled("alerts") &&
              ((x = $("<tr>").appendTo(e)),
              (B = $('<input type="checkbox" />')),
              (z = this.addLabeledRow(x, $.t("Show Alert Labels"), B)),
              $("<td>")
                .append(B)
                .prependTo(z),
              z.append("<td>"),
              (E = this._property.alertsProperties.labels.visible),
              this.bindControl(
                new c(
                  B,
                  E,
                  !0,
                  this.model(),
                  "Change Show or Hide Alert Labels",
                  function(e) {
                    this._model.beginUndoMacro("Show Alert Labels"),
                      this._model.setProperty(E, e, "Show  Alert Labels"),
                      this._model.endUndoMacro();
                  }.bind(this)
                )
              ),
              (R = this.createTableInTable(e)),
              (F = $('<input type="checkbox">')),
              (I = f()),
              (A = m()),
              (D = A.render()),
              (z = this.addLabeledRow(R, $.t("Extended Alert Line"), F)),
              $("<td>")
                .append(F)
                .prependTo(z),
              (W = _($("<td>").appendTo(z))),
              $("<td>")
                .append(D)
                .appendTo(z),
              $("<td>")
                .append(I)
                .appendTo(z),
              z.addClass("offset-row"),
              z.append("<td>"),
              this.bindControl(
                new c(
                  F,
                  this._property.alertsProperties.labels.line.visible,
                  !0,
                  this.model(),
                  "Change Show or Hide Alert Labels Lines"
                )
              ),
              this.bindControl(
                new u(
                  W,
                  this._property.alertsProperties.labels.color,
                  !0,
                  this.model(),
                  "Change Alerts Labels color"
                )
              ),
              this.bindControl(
                new C(
                  A,
                  this._property.alertsProperties.labels.line.style,
                  parseInt,
                  !0,
                  this.model(),
                  "Change style"
                )
              ),
              this.bindControl(
                new b(
                  I,
                  this._property.alertsProperties.labels.line.width,
                  !0,
                  this.model(),
                  "Change width"
                )
              ),
              (O = function(e) {
                F.prop("disabled", !e.value()),
                  D.prop("disabled", !e.value()),
                  I.prop("disabled", !e.value());
              }),
              E.listeners().subscribe(this, O));
        }),
        (i.prototype.createSessTable = function(e) {
          var t,
            o = this._series.sessionsStudy().properties(),
            i = this.createTableInTable(e),
            n = o.name.value(),
            a = $("<input type='checkbox' />"),
            r = this.addLabeledRow(i, $.t("Session Breaks"), a),
            l = m(),
            p = this.createColorPicker(),
            s = f();
          return (
            $("<td>")
              .append(a)
              .prependTo(r),
            $("<td>")
              .append(p)
              .appendTo(r),
            $("<td>")
              .append(l.render())
              .appendTo(r),
            $("<td>")
              .append(s)
              .appendTo(r),
            this.bindControl(
              new c(
                a,
                o.graphics.vertlines.sessBreaks.visible,
                !0,
                this.model(),
                "Change " + n + " visibility"
              )
            ),
            this.bindControl(
              new u(
                p,
                o.graphics.vertlines.sessBreaks.color,
                !0,
                this.model(),
                "Change " + n + " color"
              )
            ),
            this.bindControl(
              new C(
                l,
                o.graphics.vertlines.sessBreaks.style,
                parseInt,
                !0,
                this.model(),
                "Change " + n + " style"
              )
            ),
            this.bindControl(
              new b(
                s,
                o.graphics.vertlines.sessBreaks.width,
                !0,
                this.model(),
                "Change " + n + " width"
              )
            ),
            (t = this._series.isIntradayInterval()),
            a.prop("disabled", !t),
            i
          );
        }),
        (i.prototype._createStudySessRow = function(e, t, o) {
          var i,
            n = $("<input type='checkbox' />"),
            a = this.addLabeledRow(e, t, n),
            r = _($("<td>").appendTo(a));
          return (
            this.bindControl(
              new c(
                n,
                o.visible,
                !0,
                this.model(),
                "Change " + t + " visibility"
              )
            ),
            this.bindControl(
              new u(r, o.color, !0, this.model(), t + " color", o.transparency)
            ),
            (i = $("<td>")),
            i.append(n).prependTo(a),
            a.addClass("offset-row"),
            n
          );
        }),
        (i.prototype.createTradingTable = function() {
          var e,
            t,
            o,
            i,
            n,
            r,
            l,
            u,
            y,
            g,
            w,
            T = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">'
            ).data("layout-tab", a.TabNames.trading),
            _ = $("<tr>").appendTo(T),
            L = $("<td>").appendTo(_),
            v = $('<table cellspacing="0" cellpadding="0">').appendTo(L),
            k = $('<input type="checkbox">');
          return (
            (_ = this.addLabeledRow(v, $.t("Show Positions"), k)),
            $("<td>")
              .append(k)
              .prependTo(_),
            this.bindControl(
              new c(
                k,
                this._property.tradingProperties.showPositions,
                !0,
                this.model(),
                "Change Positions Visibility"
              )
            ),
            (e = $('<input type="checkbox">')),
            (_ = this.addLabeledRow(v, $.t("Show Orders"), e)),
            $("<td>")
              .append(e)
              .prependTo(_),
            this.bindControl(
              new c(
                e,
                this._property.tradingProperties.showOrders,
                !0,
                this.model(),
                "Change Orders Visibility"
              )
            ),
            (t = $('<input type="checkbox">')),
            (o = this.addLabeledRow(v, $.t("Extend Lines Left"), t)),
            $("<td>")
              .append(t)
              .prependTo(o),
            this.bindControl(
              new c(
                t,
                this._property.tradingProperties.extendLeft,
                !0,
                this.model(),
                "Extend Lines Left"
              )
            ),
            (i = f()),
            this.bindControl(
              new b(
                i,
                this._property.tradingProperties.lineWidth,
                !0,
                this.model(),
                "Change Connecting Line Width"
              )
            ),
            (n = m()),
            this.bindControl(
              new C(
                n,
                this._property.tradingProperties.lineStyle,
                parseInt,
                !0,
                this.model(),
                "Change Connecting Line Style"
              )
            ),
            (r = $('<input type="text" class="ticker">')),
            (l = [
              d(this._property.tradingProperties.lineLength.value()),
              s(100),
              p(0)
            ]),
            this.bindControl(
              new h(
                r,
                this._property.tradingProperties.lineLength,
                l,
                !0,
                this.model(),
                "Change Connecting Line Length"
              )
            ),
            (u = $("<tbody>")),
            (y = this.addLabeledRow(v, $.t("Connecting Line"), u)),
            $("<td>").prependTo(y),
            $("<td>")
              .append(i)
              .appendTo(y),
            $('<td colspan="3">')
              .append(n.render())
              .appendTo(y),
            $('<td colspan="3">')
              .append(r)
              .appendTo(y),
            $("<td>%</td>").appendTo(y),
            (g = $('<input type="checkbox">')),
            (w = this.addLabeledRow(v, $.t("Show Executions"), g)),
            $("<td>")
              .append(g)
              .prependTo(w),
            this.bindControl(
              new c(
                g,
                this._property.tradingProperties.showExecutions,
                !0,
                this.model(),
                "Change Executions Visibility"
              )
            ),
            T
          );
        }),
        (e.exports = i);
    }.call(t, o(8)));
  },
  753: function(e, t, o) {
    "use strict";
    function i(e, t) {
      a.call(this, e, t), this.prepareLayout();
    }
    var n = o(10),
      a = n.PropertyPage,
      r = n.SimpleComboBinder;
    inherit(i, a),
      (i.prototype.prepareLayout = function() {
        var e, t;
        (this._table = $(document.createElement("table"))),
          this._table.addClass("property-page"),
          this._table.attr("cellspacing", "0"),
          this._table.attr("cellpadding", "2"),
          (e = this.createKeyCombo({
            open: $.t("Open"),
            high: $.t("High"),
            low: $.t("Low"),
            close: $.t("Close")
          })),
          (t = this.addLabeledRow(
            this._table,
            $.t("Source", { context: "compare" })
          )),
          $("<td>")
            .appendTo(t)
            .append(e),
          this.bindControl(
            new r(
              e,
              this._property.inputs.source,
              null,
              !0,
              this.model(),
              "Change Price Source"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  760: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.BooleanBinder,
      l = a.ColorBinding,
      p = a.SliderBinder,
      s = a.SimpleComboBinder,
      d = o(15).createLineWidthEditor;
    inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n, a, h, c, b, u, C;
        (this._table = $(document.createElement("table"))),
          this._table.addClass("property-page"),
          this._table.attr("cellspacing", "0"),
          this._table.attr("cellpadding", "2"),
          (e = d()),
          (t = this.createColorPicker()),
          (o = this.createColorPicker()),
          (i = $(
            '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>'
          )),
          (n = $(
            '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>'
          )),
          (a = this.createFontSizeEditor()),
          (h = this.createFontEditor()),
          (c = this.addLabeledRow(this._table, "Border")),
          c.prepend("<td>"),
          $("<td>")
            .append(t)
            .appendTo(c),
          $("<td>")
            .append(e)
            .appendTo(c),
          (b = $('<input type="checkbox" class="visibility-switch">')),
          (u = this.createColorPicker()),
          (h = this.createFontEditor()),
          (c = this.addLabeledRow(this._table, "Background", b)),
          $("<td>")
            .append(b)
            .prependTo(c),
          $("<td>")
            .append(u)
            .appendTo(c),
          this.bindControl(
            new r(
              b,
              this._linetool.properties().fillBackground,
              !0,
              this.model(),
              "Change Pattern Filling"
            )
          ),
          this.bindControl(
            new l(
              t,
              this._linetool.properties().color,
              !0,
              this.model(),
              "Change Pattern Line Color"
            )
          ),
          this.bindControl(
            new l(
              o,
              this._linetool.properties().textcolor,
              !0,
              this.model(),
              "Change Pattern Text Color"
            )
          ),
          this.bindControl(
            new l(
              u,
              this._linetool.properties().backgroundColor,
              !0,
              this.model(),
              "Change Pattern Background Color",
              this._linetool.properties().transparency
            )
          ),
          this.bindControl(
            new p(
              e,
              this._linetool.properties().linewidth,
              !0,
              this.model(),
              "Change Pattern Border Width"
            )
          ),
          this.bindControl(
            new s(
              a,
              this._linetool.properties().fontsize,
              parseInt,
              !0,
              this.model(),
              "Change Text Font Size"
            )
          ),
          this.bindControl(
            new s(
              h,
              this._linetool.properties().font,
              null,
              !0,
              this.model(),
              "Change Text Font"
            )
          ),
          this.bindControl(
            new r(
              i,
              this._linetool.properties().bold,
              !0,
              this.model(),
              "Change Text Font Bold"
            )
          ),
          this.bindControl(
            new r(
              n,
              this._linetool.properties().italic,
              !0,
              this.model(),
              "Change Text Font Italic"
            )
          ),
          (C = $(
            '<table class="property-page" cellspacing="0" cellpadding="2"><tr>'
          )
            .append(
              $(document.createElement("td"))
                .attr({ width: 1 })
                .append(o)
            )
            .append(
              $(document.createElement("td"))
                .attr({ width: 1 })
                .append(h)
            )
            .append(
              $(document.createElement("td"))
                .attr({ width: 1 })
                .append(a)
            )
            .append(
              $(document.createElement("td"))
                .css("vertical-align", "top")
                .attr({
                  width: 1
                })
                .append(i)
            )
            .append(
              $(document.createElement("td"))
                .css("vertical-align", "top")
                .append(n)
            )
            .append($("</tr></table>"))),
          (c = this.addLabeledRow(this._table, "")),
          $('<td colspan="5">')
            .append(C)
            .appendTo(c),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  761: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.ColorBinding,
      l = a.SliderBinder,
      p = a.SimpleComboBinder,
      s = a.BooleanBinder,
      d = o(15).createLineWidthEditor;
    inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n, a, h, c, b;
        (this._table = $(document.createElement("table"))),
          this._table.addClass("property-page"),
          this._table.attr("cellspacing", "0"),
          this._table.attr("cellpadding", "2"),
          (e = d()),
          (t = this.createColorPicker()),
          (o = this.createColorPicker()),
          (i = $(
            '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>'
          )),
          (n = $(
            '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>'
          )),
          (a = this.createFontSizeEditor()),
          (h = this.createFontEditor()),
          (c = this.addLabeledRow(this._table, "Border")),
          c.prepend("<td>"),
          $("<td>")
            .append(t)
            .appendTo(c),
          $("<td>")
            .append(e)
            .appendTo(c),
          (h = this.createFontEditor()),
          this.bindControl(
            new r(
              t,
              this._linetool.properties().color,
              !0,
              this.model(),
              "Change Pattern Line Color"
            )
          ),
          this.bindControl(
            new r(
              o,
              this._linetool.properties().textcolor,
              !0,
              this.model(),
              "Change Pattern Text Color"
            )
          ),
          this.bindControl(
            new l(
              e,
              this._linetool.properties().linewidth,
              !0,
              this.model(),
              "Change Pattern Border Width"
            )
          ),
          this.bindControl(
            new p(
              a,
              this._linetool.properties().fontsize,
              parseInt,
              !0,
              this.model(),
              "Change Text Font Size"
            )
          ),
          this.bindControl(
            new p(
              h,
              this._linetool.properties().font,
              null,
              !0,
              this.model(),
              "Change Text Font"
            )
          ),
          this.bindControl(
            new s(
              i,
              this._linetool.properties().bold,
              !0,
              this.model(),
              "Change Text Font Bold"
            )
          ),
          this.bindControl(
            new s(
              n,
              this._linetool.properties().italic,
              !0,
              this.model(),
              "Change Text Font Italic"
            )
          ),
          (b = $(
            '<table class="property-page" cellspacing="0" cellpadding="2"><tr>'
          )
            .append(
              $(document.createElement("td"))
                .attr({ width: 1 })
                .append(o)
            )
            .append(
              $(document.createElement("td"))
                .attr({ width: 1 })
                .append(h)
            )
            .append(
              $(document.createElement("td"))
                .attr({ width: 1 })
                .append(a)
            )
            .append(
              $(document.createElement("td"))
                .css("vertical-align", "top")
                .attr({ width: 1 })
                .append(i)
            )
            .append(
              $(document.createElement("td"))
                .css("vertical-align", "top")
                .append(n)
            )
            .append($("</tr></table>"))),
          (c = this.addLabeledRow(this._table, "")),
          $('<td colspan="5">')
            .append(b)
            .appendTo(c),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  762: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.BooleanBinder,
      l = a.ColorBinding,
      p = a.SliderBinder,
      s = o(15).createLineWidthEditor;
    inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n;
        (this._table = $(document.createElement("table"))),
          this._table.addClass("property-page"),
          this._table.attr("cellspacing", "0"),
          this._table.attr("cellpadding", "2"),
          (e = s()),
          (t = this.createColorPicker()),
          (o = this.addLabeledRow(this._table, "Border")),
          o.prepend("<td>"),
          $("<td>")
            .append(t)
            .appendTo(o),
          $("<td>")
            .append(e)
            .appendTo(o),
          (i = $('<input type="checkbox" class="visibility-switch">')),
          (n = this.createColorPicker()),
          (o = this.addLabeledRow(this._table, "Background", i)),
          $("<td>")
            .append(i)
            .prependTo(o),
          $("<td>")
            .append(n)
            .appendTo(o),
          this.bindControl(
            new r(
              i,
              this._linetool.properties().fillBackground,
              !0,
              this.model(),
              "Change Arc Filling"
            )
          ),
          this.bindControl(
            new l(
              t,
              this._linetool.properties().color,
              !0,
              this.model(),
              "Change Arc Line Color"
            )
          ),
          this.bindControl(
            new l(
              n,
              this._linetool.properties().backgroundColor,
              !0,
              this.model(),
              "Change Arc Background Color",
              this._linetool.properties().transparency
            )
          ),
          this.bindControl(
            new p(
              e,
              this._linetool.properties().linewidth,
              !0,
              this.model(),
              "Change Arc Border Width"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  763: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.SimpleStringBinder,
      l = a.ColorBinding,
      p = a.SimpleComboBinder;
    inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n;
        (this._table = $(
          '<table class="property-page" cellspacing="0" cellpadding="2">'
        ).css({ width: "100%" })),
          (e = $("<input type='text'>").css({ width: "100%" })),
          (t = $('<div class="property-page-fullwidth-wrapper">').append(e)),
          (o = this.createColorPicker()),
          (i = this.createFontEditor()),
          (n = $("<tr>").appendTo(this._table)),
          $("<td>")
            .css({ width: "0" })
            .html($.t("Text"))
            .appendTo(n),
          $('<td colspan="2">')
            .append(t)
            .appendTo(n),
          (n = this.addLabeledRow(this._table, $.t("Text Font"))),
          n.children().css({ whiteSpace: "nowrap" }),
          $("<td>")
            .append(o)
            .appendTo(n)
            .css({ width: "0" }),
          $("<td>")
            .append(i)
            .appendTo(n),
          this.bindControl(
            new l(
              o,
              this._linetool.properties().color,
              !0,
              this.model(),
              "Change Arrow Mark Text Color"
            )
          ),
          this.bindControl(
            new r(
              e,
              this._linetool.properties().text,
              null,
              !0,
              this.model(),
              "Change Arrow Mark Text"
            )
          ),
          this.bindControl(
            new p(
              i,
              this._linetool.properties().font,
              null,
              !0,
              this.model(),
              "Change Arrow Mark Font"
            )
          ),
          this.loadData(),
          setTimeout(function() {
            e.select(), e.focus();
          }, 20);
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  764: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.SimpleComboBinder,
      l = a.ColorBinding,
      p = a.SimpleStringBinder,
      s = o(121).TabOpenFrom;
    inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e,
          t,
          o,
          i,
          n,
          a,
          d,
          h,
          c = $('<table class="property-page" cellspacing="0" cellpadding="0">')
            .css({ width: "100%" })
            .data("layout-tab-open", s.Override),
          b = $(
            '<table class="property-page" cellspacing="0" cellpadding="0">'
          );
        (this._table = c.add(b)),
          (e = $("<input type='text'>").css({ width: "100%" })),
          (t = this.createColorPicker()),
          (o = this.createFontSizeEditor()),
          (i = this.createColorPicker()),
          (n = this.createColorPicker()),
          (a = $("<tr>").appendTo(c)),
          (d = $('<div class="property-page-fullwidth-wrapper">').append(e)),
          $("<td>")
            .append(d)
            .appendTo(a),
          (h = this.addLabeledRow(b, $.t("Text"))),
          $("<td>")
            .append(t)
            .appendTo(h),
          $("<td>")
            .append(o)
            .appendTo(h),
          (h = this.addLabeledRow(b, $.t("Background"))),
          $("<td>")
            .appendTo(h)
            .append(i),
          (h = this.addLabeledRow(b, $.t("Border"))),
          $("<td>")
            .appendTo(h)
            .append(n),
          $("<td>"),
          this.bindControl(
            new p(
              e,
              this._linetool.properties().text,
              null,
              !0,
              this.model(),
              "Change Balloon Text"
            )
          ),
          this.bindControl(
            new l(
              t,
              this._linetool.properties().color,
              !0,
              this.model(),
              "Change Baloon Text Color"
            )
          ),
          this.bindControl(
            new r(
              o,
              this._linetool.properties().fontsize,
              parseInt,
              !0,
              this.model(),
              "Change Balloon Text Font Size"
            )
          ),
          this.bindControl(
            new l(
              i,
              this._linetool.properties().backgroundColor,
              !0,
              this.model(),
              "Change Balloon Background Color",
              this._linetool.properties().transparency
            )
          ),
          this.bindControl(
            new l(
              n,
              this._linetool.properties().borderColor,
              !0,
              this.model(),
              "Change Balloon Border Color"
            )
          ),
          this.loadData(),
          setTimeout(function() {
            e.select(), e.focus();
          }, 0);
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  765: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      a.call(this, e, t, o), this.prepareLayout();
    }
    function n(e, t, o) {
      r.call(this, e, t, o);
    }
    var a = o(14),
      r = o(81),
      l = o(10),
      p = l.ToFloatTransformer,
      s = l.SimpleComboBinder,
      d = l.ColorBinding,
      h = l.BooleanBinder,
      c = l.SimpleStringBinder;
    inherit(i, a),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n, a;
        (this._table = $(document.createElement("table"))),
          this._table.addClass("property-page"),
          this._table.attr("cellspacing", "0"),
          this._table.attr("cellpadding", "2"),
          (e = $("<tbody>").appendTo(this._table)),
          (t = this.createColorPicker()),
          (o = this.addLabeledRow(e, "Color")),
          $("<td>")
            .append(t)
            .appendTo(o),
          (i = $(
            '<select><option value="0">' +
              $.t("HL Bars") +
              '</option><option value="2">' +
              $.t("OC Bars") +
              '</option><option value="1">' +
              $.t("Line - Close") +
              '</option><option value="3">' +
              $.t("Line - Open") +
              '</option><option value="4">' +
              $.t("Line - High") +
              '</option><option value="5">' +
              $.t("Line - Low") +
              '</option><option value="6">' +
              $.t("Line - HL/2") +
              "</option></select>"
          )),
          (o = this.addLabeledRow(e, "Mode")),
          $("<td>")
            .append(i)
            .appendTo(o),
          (o = $("<tr>").appendTo(e)),
          $("<td>" + $.t("Mirrored") + "</td>").appendTo(o),
          (n = $("<input type='checkbox'>")),
          $("<td>")
            .append(n)
            .appendTo(o),
          (o = $("<tr>").appendTo(e)),
          $("<td>" + $.t("Flipped") + "</td>").appendTo(o),
          (a = $("<input type='checkbox'>")),
          $("<td>")
            .append(a)
            .appendTo(o),
          this.bindControl(
            new h(
              n,
              this._linetool.properties().mirrored,
              !0,
              this.model(),
              "Change Bars Pattern Mirroring"
            )
          ),
          this.bindControl(
            new h(
              a,
              this._linetool.properties().flipped,
              !0,
              this.model(),
              "Change Bars Pattern Flipping"
            )
          ),
          this.bindControl(
            new d(
              t,
              this._linetool.properties().color,
              !0,
              this.model(),
              "Change Bars Pattern Color"
            )
          ),
          this.bindControl(
            new s(
              i,
              this._linetool.properties().mode,
              null,
              !0,
              this.model(),
              "Change Bars Pattern Mode"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      inherit(n, r),
      (n.prototype.prepareLayout = function() {
        var e, t, o, i, n, a, r, l, s;
        (this._table = $(document.createElement("table"))),
          this._table.addClass("property-page"),
          this._table.attr("cellspacing", "0"),
          this._table.attr("cellpadding", "2"),
          (e = $("<tr>")),
          e.appendTo(this._table),
          (t = $("<td>")),
          t.html($.t("Price")),
          t.appendTo(e),
          (o = $("<td>")),
          o.appendTo(e),
          (i = $("<input type='text'>")),
          i.appendTo(o),
          (n = $("<td>")),
          n.html($.t("Bar #")),
          n.appendTo(e),
          (a = $("<td>")),
          a.appendTo(e),
          (r = $("<input type='text'>")),
          r.appendTo(a),
          r.addClass("ticker"),
          (l = this._linetool.properties().points[0]),
          (s = [p(l.price.value())]),
          this.bindControl(
            new c(
              i,
              l.price,
              s,
              !1,
              this.model(),
              "Change " + this._linetool + " point price"
            )
          ),
          this.bindBarIndex(
            l.bar,
            r,
            this.model(),
            "Change " + this._linetool + " point bar index"
          ),
          this.loadData();
      }),
      (t.LineToolBarsPatternStylesPropertyPage = i),
      (t.LineToolBarsPatternInputsPropertyPage = n);
  },
  766: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.ColorBinding,
      l = a.SimpleComboBinder,
      p = a.SliderBinder,
      s = a.BooleanBinder,
      d = o(31).createLineStyleEditor,
      h = o(15).createLineWidthEditor;
    inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n, a, c, b, u, C, y, g, w, T, _, m;
        (this._block = $("<div>").addClass("property-page")),
          (e = $('<table cellspacing="0" cellpadding="2">').appendTo(
            this._block
          )),
          (t = $("<tbody>").appendTo(e)),
          (o = h()),
          (i = d()),
          (n = this.createColorPicker()),
          (a = this.addLabeledRow(t, $.t("Line"))),
          $("<td>")
            .append(n)
            .appendTo(a),
          $("<td>")
            .append(o)
            .appendTo(a),
          $('<td colspan="3">')
            .append(i.render())
            .appendTo(a),
          (c = $('<table cellspacing="0" cellpadding="2">').appendTo(
            this._block
          )),
          (a = this.addLabeledRow(c, $.t("Background"), b)),
          (b = $('<input type="checkbox" class="visibility-switch">')),
          (u = this.createColorPicker()),
          $("<td>")
            .append(b)
            .prependTo(a),
          $("<td>")
            .append(u)
            .appendTo(a),
          (C = $('<table cellspacing="0" cellpadding="2">').appendTo(
            this._block
          )),
          (y = $(
            "<select><option value='0'>" +
              $.t("Normal") +
              "</option><option value='1'>" +
              $.t("Arrow") +
              "</option></select>"
          )),
          (g = $(
            "<select><option value='0'>" +
              $.t("Normal") +
              "</option><option value='1'>" +
              $.t("Arrow") +
              "</option></select>"
          )),
          (w = $("<label>" + $.t("Extend") + " </label>").css({
            "margin-left": "8px"
          })),
          (T = $('<input type="checkbox">').appendTo(w)),
          (_ = $("<label>" + $.t("Extend") + " </label>").css({
            "margin-left": "8px"
          })),
          (m = $('<input type="checkbox">').appendTo(_)),
          (a = this.addLabeledRow(C, $.t("Left End"))),
          $('<td colspan="3">')
            .appendTo(a)
            .append(y)
            .append(w),
          (a = this.addLabeledRow(C, $.t("Right End"))),
          $('<td colspan="3">')
            .appendTo(a)
            .append(g)
            .append(_),
          this.bindControl(
            new r(
              n,
              this._linetool.properties().linecolor,
              !0,
              this.model(),
              "Change Curve Line Color"
            )
          ),
          this.bindControl(
            new l(
              i,
              this._linetool.properties().linestyle,
              parseInt,
              !0,
              this.model(),
              "Change Curve Line Style"
            )
          ),
          this.bindControl(
            new p(
              o,
              this._linetool.properties().linewidth,
              !0,
              this.model(),
              "Change Curve Line Width"
            )
          ),
          this.bindControl(
            new s(
              b,
              this._linetool.properties().fillBackground,
              !0,
              this.model(),
              "Change Curve Filling"
            )
          ),
          this.bindControl(
            new r(
              u,
              this._linetool.properties().backgroundColor,
              !0,
              this.model(),
              "Change Curve Background Color",
              this._linetool.properties().transparency
            )
          ),
          this.bindControl(
            new l(
              y,
              this._linetool.properties().leftEnd,
              parseInt,
              !0,
              this.model(),
              "Change Curve Line Left End"
            )
          ),
          this.bindControl(
            new l(
              g,
              this._linetool.properties().rightEnd,
              parseInt,
              !0,
              this.model(),
              "Change Curve Line Right End"
            )
          ),
          this.bindControl(
            new s(
              T,
              this._linetool.properties().extendLeft,
              !0,
              this.model(),
              "Change Curve Line Extending Left"
            )
          ),
          this.bindControl(
            new s(
              m,
              this._linetool.properties().extendRight,
              !0,
              this.model(),
              "Change Curve Line Extending Right"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._block;
      }),
      (e.exports = i);
  },
  767: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.SliderBinder,
      l = a.BooleanBinder,
      p = a.ColorBinding,
      s = a.SimpleComboBinder,
      d = o(15).createLineWidthEditor;
    inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n, a, h, c;
        (this._table = $(
          '<table class="property-page" cellspacing="0" cellpadding="2">'
        )),
          (e = d()),
          (t = this.createColorPicker()),
          (o = $('<input type="checkbox" class="visibility-switch">')),
          (i = this.createColorPicker()),
          (n = this.addLabeledRow(this._table, "Line")),
          $("<td>").prependTo(n),
          $("<td>")
            .append(t)
            .appendTo(n),
          $("<td>")
            .append(e)
            .appendTo(n),
          (n = this.addLabeledRow(this._table, "Background", o)),
          $("<td>")
            .append(o)
            .prependTo(n),
          $("<td>")
            .append(i)
            .appendTo(n),
          (a = $("<tbody>").appendTo(this._table)),
          (h = $(
            "<select><option value='0'>" +
              $.t("Normal") +
              "</option><option value='1'>" +
              $.t("Arrow") +
              "</option></select>"
          )),
          (c = $(
            "<select><option value='0'>" +
              $.t("Normal") +
              "</option><option value='1'>" +
              $.t("Arrow") +
              "</option></select>"
          )),
          (n = this.addLabeledRow(a, $.t("Left End"))),
          $("<td>").prependTo(n),
          $('<td colspan="3">')
            .appendTo(n)
            .append(h),
          (n = this.addLabeledRow(a, $.t("Right End"))),
          $("<td>").prependTo(n),
          $('<td colspan="3">')
            .appendTo(n)
            .append(c),
          this.bindControl(
            new p(
              t,
              this._linetool.properties().linecolor,
              !0,
              this.model(),
              "Change Brush Color"
            )
          ),
          this.bindControl(
            new r(
              e,
              this._linetool.properties().linewidth,
              !0,
              this.model(),
              "Change Brush Line Width"
            )
          ),
          this.bindControl(
            new l(
              o,
              this._linetool.properties().fillBackground,
              !0,
              this.model(),
              "Change Brush Filling"
            )
          ),
          this.bindControl(
            new p(
              i,
              this._linetool.properties().backgroundColor,
              !0,
              this.model(),
              "Change Brush Background Color",
              this._linetool.properties().transparency
            )
          ),
          this.bindControl(
            new s(
              h,
              this._linetool.properties().leftEnd,
              parseInt,
              !0,
              this.model(),
              "Change Trend Line Left End"
            )
          ),
          this.bindControl(
            new s(
              c,
              this._linetool.properties().rightEnd,
              parseInt,
              !0,
              this.model(),
              "Change Trend Line Right End"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  768: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.BooleanBinder,
      l = a.ColorBinding,
      p = a.SimpleComboBinder,
      s = a.SliderBinder,
      d = a.SimpleStringBinder,
      h = o(15).createLineWidthEditor,
      c = o(121).TabOpenFrom;
    inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e,
          t,
          o,
          i,
          n = this.createColorPicker(),
          a = this.createFontSizeEditor(),
          b = this.createFontEditor(),
          u = this.createTextEditor(350, 200),
          C = this.createColorPicker(),
          y = h(),
          g = this.createColorPicker(),
          w = $('<input type="checkbox">'),
          T = $(
            '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>'
          ),
          _ = $(
            '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>'
          );
        this.bindControl(
          new l(
            n,
            this._linetool.properties().color,
            !0,
            this.model(),
            "Change Text Color"
          )
        ),
          this.bindControl(
            new p(
              a,
              this._linetool.properties().fontsize,
              parseInt,
              !0,
              this.model(),
              "Change Text Font Size"
            )
          ),
          this.bindControl(
            new p(
              b,
              this._linetool.properties().font,
              null,
              !0,
              this.model(),
              "Change Text Font"
            )
          ),
          this.bindControl(
            new d(
              u,
              this._linetool.properties().text,
              null,
              !0,
              this.model(),
              "Change Text"
            )
          ),
          this.bindControl(
            new l(
              C,
              this._linetool.properties().backgroundColor,
              !0,
              this.model(),
              "Change Text Background",
              this._linetool.properties().transparency
            )
          ),
          this.bindControl(
            new l(
              g,
              this._linetool.properties().bordercolor,
              !0,
              this.model(),
              "Change Text Color"
            )
          ),
          this.bindControl(
            new s(
              y,
              this._linetool.properties().linewidth,
              !0,
              this.model(),
              "Change Border Width"
            )
          ),
          this.bindControl(
            new r(
              w,
              this._linetool.properties().wordWrap,
              !0,
              this.model(),
              "Change Text Wrap"
            )
          ),
          this.bindControl(
            new r(
              T,
              this._linetool.properties().bold,
              !0,
              this.model(),
              "Change Text Font Bold"
            )
          ),
          this.bindControl(
            new r(
              _,
              this._linetool.properties().italic,
              !0,
              this.model(),
              "Change Text Font Italic"
            )
          ),
          (e = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">'
          ).data("layout-tab-open", c.Override)),
          (t = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">'
          )),
          (o = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">'
          )),
          (this._table = e.add(o).add(t)),
          $(document.createElement("tr"))
            .append(
              $(document.createElement("td"))
                .attr({ width: 1 })
                .append(n)
            )
            .append(
              $(document.createElement("td"))
                .attr({ width: 1 })
                .append(b)
            )
            .append(
              $(document.createElement("td"))
                .attr({ width: 1 })
                .append(a)
            )
            .append(
              $(document.createElement("td"))
                .attr({ width: 1 })
                .append(T)
            )
            .append($(document.createElement("td")).append(_))
            .appendTo(e),
          $(document.createElement("tr"))
            .append(
              $(document.createElement("td"))
                .attr({ colspan: 5 })
                .append(u)
            )
            .appendTo(e),
          (i = this.addLabeledRow(t, "Text Wrap", w)),
          $("<td>")
            .append(w)
            .prependTo(i),
          (i = this.addLabeledRow(o, "Background")),
          $("<td>")
            .append(C)
            .appendTo(i),
          (i = this.addLabeledRow(o, "Border")),
          $("<td>")
            .append(g)
            .appendTo(i),
          $("<td>")
            .append(y)
            .appendTo(i),
          this.loadData(),
          setTimeout(function() {
            u.select(), u.focus();
          }, 20);
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  769: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.SimpleComboBinder,
      l = a.ColorBinding,
      p = a.SliderBinder,
      s = o(31).createLineStyleEditor,
      d = o(15).createLineWidthEditor;
    inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i;
        (this._table = $(document.createElement("table"))),
          this._table.addClass("property-page"),
          this._table.attr("cellspacing", "0"),
          this._table.attr("cellpadding", "2"),
          (e = d()),
          (t = s()),
          (o = this.createColorPicker()),
          (i = this.addLabeledRow(this._table, "Lines")),
          $("<td>")
            .append(o)
            .appendTo(i),
          $("<td>")
            .append(e)
            .appendTo(i),
          $("<td>")
            .append(t.render())
            .appendTo(i),
          this.bindControl(
            new l(
              o,
              this._linetool.properties().linecolor,
              !0,
              this.model(),
              "Change Circle Lines Color"
            )
          ),
          this.bindControl(
            new r(
              t,
              this._linetool.properties().linestyle,
              parseInt,
              !0,
              this.model(),
              "Change Circle Lines Style"
            )
          ),
          this.bindControl(
            new p(
              e,
              this._linetool.properties().linewidth,
              !0,
              this.model(),
              "Change Circle Lines Width"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  770: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.SimpleComboBinder,
      l = a.ColorBinding,
      p = a.BooleanBinder,
      s = a.SliderBinder,
      d = o(15).createLineWidthEditor;
    inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n, a, h, c, b, u, C, y, g, w;
        (this._table = $(
          '<table class="property-page" cellspacing="0" cellpadding="2">'
        )),
          (e = $("<tbody>").appendTo(this._table)),
          (t = d()),
          (o = this.createColorPicker()),
          (i = this.addLabeledRow(e, $.t("Line"))),
          $("<td>").prependTo(i),
          $("<td>")
            .append(o)
            .appendTo(i),
          $("<td>")
            .append(t)
            .appendTo(i),
          (n = this.createColorPicker()),
          (a = this.createColorPicker()),
          (h = this.createFontSizeEditor()),
          (c = this.createFontEditor()),
          (b = this.createColorPicker()),
          (u = $('<input type="checkbox" class="visibility-switch">')),
          (C = this.createColorPicker()),
          (y = $('<input type="checkbox" class="visibility-switch">')),
          this.bindControl(
            new l(
              n,
              this._linetool.properties().textcolor,
              !0,
              this.model(),
              "Change Text Color"
            )
          ),
          this.bindControl(
            new r(
              h,
              this._linetool.properties().fontsize,
              parseInt,
              !0,
              this.model(),
              "Change Text Font Size"
            )
          ),
          this.bindControl(
            new r(
              c,
              this._linetool.properties().font,
              null,
              !0,
              this.model(),
              "Change Text Font"
            )
          ),
          this.bindControl(
            new l(
              b,
              this._linetool.properties().labelBackgroundColor,
              !0,
              this.model(),
              "Change Text Background",
              this._linetool.properties().labelBackgroundTransparency
            )
          ),
          this.bindControl(
            new p(
              u,
              this._linetool.properties().fillLabelBackground,
              !0,
              this.model(),
              "Change Text Background Fill"
            )
          ),
          this.bindControl(
            new l(
              C,
              this._linetool.properties().backgroundColor,
              !0,
              this.model(),
              "Change Text Background",
              this._linetool.properties().backgroundTransparency
            )
          ),
          this.bindControl(
            new p(
              y,
              this._linetool.properties().fillBackground,
              !0,
              this.model(),
              "Change Text Background Fill"
            )
          ),
          this.bindControl(
            new l(
              a,
              this._linetool.properties().borderColor,
              !0,
              this.model(),
              "Change Text Border Color"
            )
          ),
          (g = this.addLabeledRow(e, $.t("Background"), y)),
          $("<td>")
            .append(y)
            .prependTo(g),
          $("<td>")
            .append(C)
            .appendTo(g),
          (w = this.addLabeledRow(e, $.t("Label"))),
          $("<td>").prependTo(w),
          $("<td>")
            .append(n)
            .appendTo(w),
          $("<td>")
            .append(c)
            .appendTo(w),
          $("<td>")
            .append(h)
            .appendTo(w),
          (g = this.addLabeledRow(e, $.t("Label Background"), u)),
          $("<td>")
            .append(u)
            .prependTo(g),
          $("<td>")
            .append(b)
            .appendTo(g),
          this.bindControl(
            new l(
              o,
              this._linetool.properties().linecolor,
              !0,
              this.model(),
              "Change Date Range Color"
            )
          ),
          this.bindControl(
            new s(
              t,
              this._linetool.properties().linewidth,
              !0,
              this.model(),
              "Change Date Range Line Width"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  771: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.SimpleComboBinder,
      l = a.ColorBinding,
      p = a.BooleanBinder,
      s = a.SliderBinder,
      d = o(15).createLineWidthEditor;
    inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n, a, h, c, b, u, C, y, g, w, T, _, m, f, L, v, k, S, P;
        (this._table = $(
          '<table class="property-page" cellspacing="0" cellpadding="2">'
        )),
          (e = $("<tbody>").appendTo(this._table)),
          (t = d()),
          (o = this.createColorPicker()),
          (i = this.addLabeledRow(e, $.t("Line"))),
          $("<td>").prependTo(i),
          $("<td>")
            .append(o)
            .appendTo(i),
          $("<td>")
            .append(t)
            .appendTo(i),
          (n = this.createColorPicker()),
          (a = this.createColorPicker()),
          (h = this.createFontSizeEditor()),
          (c = this.createFontEditor()),
          (b = this.createColorPicker()),
          (u = $('<input type="checkbox" class="visibility-switch">')),
          (C = this.createColorPicker()),
          (y = $('<input type="checkbox" class="visibility-switch">')),
          this.bindControl(
            new l(
              n,
              this._linetool.properties().textcolor,
              !0,
              this.model(),
              "Change Text Color"
            )
          ),
          this.bindControl(
            new r(
              h,
              this._linetool.properties().fontsize,
              parseInt,
              !0,
              this.model(),
              "Change Text Font Size"
            )
          ),
          this.bindControl(
            new r(
              c,
              this._linetool.properties().font,
              null,
              !0,
              this.model(),
              "Change Text Font"
            )
          ),
          this.bindControl(
            new l(
              b,
              this._linetool.properties().labelBackgroundColor,
              !0,
              this.model(),
              "Change Text Background",
              this._linetool.properties().labelBackgroundTransparency
            )
          ),
          this.bindControl(
            new p(
              u,
              this._linetool.properties().fillLabelBackground,
              !0,
              this.model(),
              "Change Text Background Fill"
            )
          ),
          this.bindControl(
            new l(
              C,
              this._linetool.properties().backgroundColor,
              !0,
              this.model(),
              "Change Text Background",
              this._linetool.properties().backgroundTransparency
            )
          ),
          this.bindControl(
            new p(
              y,
              this._linetool.properties().fillBackground,
              !0,
              this.model(),
              "Change Text Background Fill"
            )
          ),
          this.bindControl(
            new l(
              a,
              this._linetool.properties().borderColor,
              !0,
              this.model(),
              "Change Text Border Color"
            )
          ),
          (g = this.addLabeledRow(e, $.t("Background"), y)),
          $("<td>")
            .append(y)
            .prependTo(g),
          $("<td>")
            .append(C)
            .appendTo(g),
          (w = this.addLabeledRow(e, $.t("Label"))),
          $("<td>").prependTo(w),
          $("<td>")
            .append(n)
            .appendTo(w),
          $("<td>")
            .append(c)
            .appendTo(w),
          $("<td>")
            .append(h)
            .appendTo(w),
          (g = this.addLabeledRow(e, $.t("Label Background"), u)),
          $("<td>")
            .append(u)
            .prependTo(g),
          $("<td>")
            .append(b)
            .appendTo(g),
          this.bindControl(
            new l(
              o,
              this._linetool.properties().linecolor,
              !0,
              this.model(),
              "Change Date Range Color"
            )
          ),
          this.bindControl(
            new s(
              t,
              this._linetool.properties().linewidth,
              !0,
              this.model(),
              "Change Date Range Line Width"
            )
          ),
          (T = this._linetool.properties()),
          void 0 !== T.extendTop &&
            void 0 !== T.extendBottom &&
            ((_ = $('<input type="checkbox">')),
            (m = $('<input type="checkbox">')),
            this.bindControl(
              new p(
                _,
                this._linetool.properties().extendTop,
                !0,
                this.model(),
                "Change Extend Top"
              )
            ),
            this.bindControl(
              new p(
                m,
                this._linetool.properties().extendBottom,
                !0,
                this.model(),
                "Change Extend Bottom"
              )
            ),
            (f = this.addLabeledRow(e, $.t("Extend Top"), _)),
            $("<td>")
              .append(_)
              .prependTo(f),
            (L = this.addLabeledRow(e, $.t("Extend Bottom"), m)),
            $("<td>")
              .append(m)
              .prependTo(L)),
          void 0 !== T.extendLeft &&
            void 0 !== T.extendRight &&
            ((v = $('<input type="checkbox">')),
            (k = $('<input type="checkbox">')),
            this.bindControl(
              new p(
                v,
                this._linetool.properties().extendLeft,
                !0,
                this.model(),
                "Change Extend Left"
              )
            ),
            this.bindControl(
              new p(
                k,
                this._linetool.properties().extendRight,
                !0,
                this.model(),
                "Change Extend Right"
              )
            ),
            (S = this.addLabeledRow(e, $.t("Extend Left"), v)),
            $("<td>")
              .append(v)
              .prependTo(S),
            (P = this.addLabeledRow(e, $.t("Extend Right"), k)),
            $("<td>")
              .append(k)
              .prependTo(P)),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  772: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.SimpleComboBinder,
      l = a.BooleanBinder,
      p = a.ColorBinding,
      s = a.SliderBinder,
      d = o(31).createLineStyleEditor,
      h = o(15).createLineWidthEditor;
    inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e,
          t,
          o,
          i,
          n,
          a,
          c,
          b,
          u,
          C,
          y,
          g,
          w,
          T,
          _,
          m,
          f,
          L,
          v,
          k,
          S,
          P,
          x,
          B;
        (this._table = $(
          '<table class="property-page" cellspacing="0" cellpadding="2">'
        )),
          (e = $("<tbody>").appendTo(this._table)),
          (t = h()),
          (o = d()),
          (i = this.createColorPicker()),
          (n = this.addLabeledRow(e, $.t("Line"))),
          $("<td>")
            .append(i)
            .appendTo(n),
          $("<td>")
            .append(t)
            .appendTo(n),
          $('<td colspan="3">')
            .append(o.render())
            .appendTo(n),
          (n = this.addLabeledRow(e, $.t("Text"))),
          (a = this.createColorPicker()),
          (c = this.createFontSizeEditor()),
          (b = this.createFontEditor()),
          (u = $(
            '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>'
          )),
          (C = $(
            '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>'
          )),
          $("<td>")
            .append(a)
            .appendTo(n),
          $("<td>")
            .append(b)
            .appendTo(n),
          $("<td>")
            .append(c)
            .appendTo(n),
          $("<td>")
            .append(u)
            .appendTo(n),
          $("<td>")
            .append(C)
            .appendTo(n),
          (y = $("<tbody>").appendTo(this._table)),
          (g = $('<input type="checkbox" class="visibility-switch">')),
          (w = this.createColorPicker()),
          (n = this.addLabeledRow(y, $.t("Background"), g)),
          (T = $("<table>")),
          $('<td colspan="5">')
            .append(T)
            .appendTo(n),
          (n = $("<tr>").appendTo(T)),
          $("<td>")
            .append(g)
            .appendTo(n),
          $("<td>")
            .append(w)
            .appendTo(n),
          (_ = $("<tbody>").appendTo(this._table)),
          (m = $("<label>" + $.t("Extend") + " </label>").css({
            "margin-left": "8px"
          })),
          (f = $('<input type="checkbox">').appendTo(m)),
          (L = $("<label>" + $.t("Extend") + " </label>").css({
            "margin-left": "8px"
          })),
          (v = $('<input type="checkbox">').appendTo(L)),
          (k = $(
            "<select><option value='0'>" +
              $.t("Normal") +
              "</option><option value='1'>" +
              $.t("Arrow") +
              "</option></select>"
          )),
          (S = $(
            "<select><option value='0'>" +
              $.t("Normal") +
              "</option><option value='1'>" +
              $.t("Arrow") +
              "</option></select>"
          )),
          (n = this.addLabeledRow(_, $.t("Left End"))),
          $('<td colspan="3">')
            .appendTo(n)
            .append(k)
            .append(m),
          (n = this.addLabeledRow(_, $.t("Right End"))),
          $('<td colspan="3">')
            .appendTo(n)
            .append(S)
            .append(L),
          (P = $("<tbody>").appendTo(this._table)),
          (n = $("<tr>").appendTo(P)),
          (x = $("<input type='checkbox'>")),
          (B = $("<label style='display:block'>")
            .append(x)
            .append($.t("Show Prices"))),
          $("<td colspan='2'>")
            .append(B)
            .appendTo(n),
          this.bindControl(
            new r(
              c,
              this._linetool.properties().fontsize,
              parseInt,
              !0,
              this.model(),
              "Change Text Font Size"
            )
          ),
          this.bindControl(
            new r(
              b,
              this._linetool.properties().font,
              null,
              !0,
              this.model(),
              "Change Text Font"
            )
          ),
          this.bindControl(
            new p(
              a,
              this._linetool.properties().textcolor,
              !0,
              this.model(),
              "Change Text Color"
            )
          ),
          this.bindControl(
            new l(
              u,
              this._linetool.properties().bold,
              !0,
              this.model(),
              "Change Text Font Bold"
            )
          ),
          this.bindControl(
            new l(
              C,
              this._linetool.properties().italic,
              !0,
              this.model(),
              "Change Text Font Italic"
            )
          ),
          this.bindControl(
            new l(
              x,
              this._linetool.properties().showPrices,
              !0,
              this.model(),
              "Change Disjoint Angle Show Prices"
            )
          ),
          this.bindControl(
            new l(
              f,
              this._linetool.properties().extendLeft,
              !0,
              this.model(),
              "Change Disjoint Angle Extending Left"
            )
          ),
          this.bindControl(
            new l(
              v,
              this._linetool.properties().extendRight,
              !0,
              this.model(),
              "Change Disjoint Angle Extending Right"
            )
          ),
          this.bindControl(
            new p(
              i,
              this._linetool.properties().linecolor,
              !0,
              this.model(),
              "Change Disjoint Angle Color"
            )
          ),
          this.bindControl(
            new r(
              o,
              this._linetool.properties().linestyle,
              parseInt,
              !0,
              this.model(),
              "Change Disjoint Angle Style"
            )
          ),
          this.bindControl(
            new s(
              t,
              this._linetool.properties().linewidth,
              !0,
              this.model(),
              "Change Disjoint Angle Width"
            )
          ),
          this.bindControl(
            new r(
              k,
              this._linetool.properties().leftEnd,
              parseInt,
              !0,
              this.model(),
              "Change Disjoint Angle Left End"
            )
          ),
          this.bindControl(
            new r(
              S,
              this._linetool.properties().rightEnd,
              parseInt,
              !0,
              this.model(),
              "Change Disjoint Angle Right End"
            )
          ),
          this.bindControl(
            new l(
              g,
              this._linetool.properties().fillBackground,
              !0,
              this.model(),
              "Change Disjoint Angle Filling"
            )
          ),
          this.bindControl(
            new p(
              w,
              this._linetool.properties().backgroundColor,
              !0,
              this.model(),
              "Change Disjoint Angle Background Color",
              this._linetool.properties().transparency
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  773: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n, a, r, l, p, s, d;
    o(23),
      (n = o(14)),
      (a = o(10)),
      (r = a.SimpleComboBinder),
      (l = a.ColorBinding),
      (p = a.SliderBinder),
      (s = a.BooleanBinder),
      (d = o(15).createLineWidthEditor),
      inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n, a;
        (this._table = $(
          '<table class="property-page" cellspacing="0" cellpadding="2">'
        )),
          (e = this._linetool.getDegrees()),
          (t = this.createKeyCombo(e)),
          t.width(300),
          (o = this.createColorPicker()),
          (i = $('<input type="checkbox" class="visibility-switch">')),
          (n = this.addLabeledRow(this._table, window.t("Degree"))),
          $("<td>").prependTo(n),
          $("<td>")
            .append(t)
            .appendTo(n),
          (n = this.addLabeledRow(this._table, window.t("Line Width"))),
          (a = d()),
          $("<td>").prependTo(n),
          $("<td>")
            .append(a)
            .appendTo(n),
          (n = this.addLabeledRow(this._table, window.t("Color"))),
          $("<td>").prependTo(n),
          $("<td>")
            .append(o)
            .appendTo(n),
          (n = this.addLabeledRow(this._table, window.t("Show Wave"), i)),
          $("<td>")
            .append(i)
            .prependTo(n),
          this.bindControl(
            new l(
              o,
              this._linetool.properties().color,
              !0,
              this.model(),
              "Change Elliott Label Color"
            )
          ),
          this.bindControl(
            new r(
              t,
              this._linetool.properties().degree,
              parseInt,
              !0,
              this.model(),
              "Change Elliott Wave Size"
            )
          ),
          this.bindControl(
            new s(
              i,
              this._linetool.properties().showWave,
              !0,
              this.model(),
              "Change Elliott Labels Background"
            )
          ),
          this.bindControl(
            new p(
              a,
              this._linetool.properties().linewidth,
              parseInt,
              this.model(),
              "Change Elliott Wave Line Width"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  774: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.BooleanBinder,
      l = a.ColorBinding,
      p = a.SliderBinder,
      s = o(15).createLineWidthEditor;
    inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n;
        (this._table = $(document.createElement("table"))),
          this._table.addClass("property-page"),
          this._table.attr("cellspacing", "0"),
          this._table.attr("cellpadding", "2"),
          (e = s()),
          (t = this.createColorPicker()),
          (o = this.addLabeledRow(this._table, $.t("Border"))),
          o.prepend("<td>"),
          $("<td>")
            .append(t)
            .appendTo(o),
          $("<td>")
            .append(e)
            .appendTo(o),
          (i = $('<input type="checkbox" class="visibility-switch">')),
          (n = this.createColorPicker()),
          (o = this.addLabeledRow(this._table, $.t("Background"), i)),
          $("<td>")
            .append(i)
            .prependTo(o),
          $("<td>")
            .append(n)
            .appendTo(o),
          this.bindControl(
            new r(
              i,
              this._linetool.properties().fillBackground,
              !0,
              this.model(),
              "Change Ellipse Filling"
            )
          ),
          this.bindControl(
            new l(
              t,
              this._linetool.properties().color,
              !0,
              this.model(),
              "Change Ellipse Line Color"
            )
          ),
          this.bindControl(
            new l(
              n,
              this._linetool.properties().backgroundColor,
              !0,
              this.model(),
              "Change Ellipse Background Color",
              this._linetool.properties().transparency
            )
          ),
          this.bindControl(
            new p(
              e,
              this._linetool.properties().linewidth,
              !0,
              this.model(),
              "Change Ellipse Border Width"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  775: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o);
    }
    var n = o(267);
    inherit(i, n), (e.exports = i);
  },
  776: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.FloatBinder,
      l = a.SimpleComboBinder,
      p = a.BooleanBinder,
      s = a.ColorBinding,
      d = a.SliderBinder,
      h = o(47).addColorPicker,
      c = o(31).createLineStyleEditor,
      b = o(15).createLineWidthEditor,
      u = o(65).createTransparencyEditor;
    inherit(i, n),
      (i.prototype.addLevelEditor = function(e, t, o) {
        var i,
          n,
          a,
          u,
          C,
          y,
          g,
          w,
          T,
          _,
          m = $("<tr>");
        m.appendTo(this._table),
          (i = $("<td>")),
          i.appendTo(m),
          (n = $("<input type='checkbox' class='visibility-switch'>")),
          n.appendTo(i),
          e
            ? ((a = $("<td>")),
              a.appendTo(m),
              (u = $("<input type='text'>")),
              u.appendTo(a),
              u.css("width", "70px"),
              this.bindControl(
                new r(
                  u,
                  t.coeff,
                  !1,
                  this.model(),
                  "Change Pitchfork Line Coeff"
                )
              ))
            : this.createLabeledCell("Trend Line", n).appendTo(m),
          (C = $("<td class='colorpicker-cell'>")),
          C.appendTo(m),
          (y = h(C)),
          (g = $("<td>")),
          g.appendTo(m),
          (w = b()),
          w.appendTo(g),
          e ||
            ((T = $("<td>")),
            T.appendTo(m),
            (_ = c()),
            _.render().appendTo(T),
            this.bindControl(
              new l(
                _,
                t.linestyle,
                parseInt,
                !0,
                this.model(),
                "Change Fib Circle Style"
              )
            )),
          this.bindControl(
            new p(
              n,
              t.visible,
              !0,
              this.model(),
              "Change Fib Circle Visibility"
            )
          ),
          this.bindControl(
            new s(
              y,
              t.color,
              !0,
              this.model(),
              "Change Fib Circle Line Color",
              0
            )
          ),
          this.bindControl(
            new d(w, t.linewidth, !0, this.model(), "Change Fib Circle Width")
          );
      }),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n, a, r;
        for (
          this._table = $(document.createElement("table")),
            this._table.addClass("property-page"),
            this._table.attr("cellspacing", "0"),
            this._table.attr("cellpadding", "2"),
            this.addLevelEditor(
              null,
              this._linetool.properties().trendline,
              !1
            ),
            e = 1;
          e <= 11;
          e++
        )
          (t = "level" + e),
            this.addLevelEditor(
              "Level " + e,
              this._linetool.properties()[t],
              !1
            );
        this.addOneColorPropertyWidget(this._table),
          (o = $("<input type='checkbox' class='visibility-switch'>")),
          (i = this.addLabeledRow(this._table, "Levels", o)),
          $("<td>")
            .append(o)
            .prependTo(i),
          (n = $("<input type='checkbox' class='visibility-switch'>")),
          (i = this.addLabeledRow(this._table, "Coeffs As Percents", n)),
          $("<td>")
            .append(n)
            .prependTo(i),
          this.bindControl(
            new p(
              o,
              this._linetool.properties().showCoeffs,
              !0,
              this.model(),
              "Change Fib Circle Levels Visibility"
            )
          ),
          (i = $("<tr>")),
          i.appendTo(this._table),
          (a = $("<input type='checkbox' class='visibility-switch'>")),
          $("<td>")
            .append(a)
            .appendTo(i),
          this.createLabeledCell("Background", a).appendTo(i),
          (r = u()),
          $('<td colspan="3">')
            .append(r)
            .appendTo(i),
          this.bindControl(
            new p(
              a,
              this._linetool.properties().fillBackground,
              !0,
              this.model(),
              "Change Pitchfork Background Visibility"
            )
          ),
          this.bindControl(
            new d(
              r,
              this._linetool.properties().transparency,
              !0,
              this.model(),
              "Change Pitchfork Background Transparency"
            )
          ),
          this.bindControl(
            new p(
              n,
              this._linetool.properties().coeffsAsPercents,
              !0,
              this.model(),
              "Change Fib Retracement Coeffs As Percents"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  777: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.FloatBinder,
      l = a.SimpleComboBinder,
      p = a.BooleanBinder,
      s = a.ColorBinding,
      d = a.SliderBinder,
      h = o(47).addColorPicker,
      c = o(31).createLineStyleEditor,
      b = o(15).createLineWidthEditor,
      u = o(65).createTransparencyEditor;
    inherit(i, n),
      (i.prototype.addLevelEditor = function(e, t, o) {
        var i,
          n,
          a,
          u,
          C,
          y,
          g,
          w,
          T,
          _,
          m = $("<tr>");
        m.appendTo(this._table),
          (i = $("<td>")),
          i.appendTo(m),
          (n = $("<input type='checkbox' class='visibility-switch'>")),
          n.appendTo(i),
          e
            ? ((a = $("<td>")),
              a.appendTo(m),
              (u = $("<input type='text'>")),
              u.appendTo(a),
              u.css("width", "70px"),
              this.bindControl(
                new r(
                  u,
                  t.coeff,
                  !1,
                  this.model(),
                  "Change Pitchfork Line Coeff"
                )
              ))
            : $("<td>" + $.t("Trend Line") + "</td>").appendTo(m),
          (C = $("<td class='colorpicker-cell'>")),
          C.appendTo(m),
          (y = h(C)),
          (g = $("<td>")),
          g.appendTo(m),
          (w = b()),
          w.appendTo(g),
          e ||
            ((T = $("<td>")),
            T.appendTo(m),
            (_ = c()),
            _.render().appendTo(T),
            this.bindControl(
              new l(
                _,
                t.linestyle,
                parseInt,
                !0,
                this.model(),
                "Change Fib Speed Resistance Arcs Style"
              )
            )),
          this.bindControl(
            new p(
              n,
              t.visible,
              !0,
              this.model(),
              "Change Fib Speed Resistance Arcs Visibility"
            )
          ),
          this.bindControl(
            new s(
              y,
              t.color,
              !0,
              this.model(),
              "Change Fib Speed Resistance Arcs Line Color",
              0
            )
          ),
          this.bindControl(
            new d(
              w,
              t.linewidth,
              !0,
              this.model(),
              "Change Fib Speed Resistance Arcs Width"
            )
          );
      }),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n, a, r;
        for (
          this._table = $(document.createElement("table")),
            this._table.addClass("property-page"),
            this._table.attr("cellspacing", "0"),
            this._table.attr("cellpadding", "2"),
            this.addLevelEditor(
              null,
              this._linetool.properties().trendline,
              !1
            ),
            e = 1;
          e <= 11;
          e++
        )
          (t = "level" + e),
            this.addLevelEditor(
              "Level " + e,
              this._linetool.properties()[t],
              !1
            );
        this.addOneColorPropertyWidget(this._table),
          (o = $("<input type='checkbox' class='visibility-switch'>")),
          (i = this.addLabeledRow(this._table, $.t("Levels"))),
          $("<td>")
            .append(o)
            .prependTo(i),
          this.bindControl(
            new p(
              o,
              this._linetool.properties().showCoeffs,
              !0,
              this.model(),
              "Change Fib Speed Resistance Arcs Levels Visibility"
            )
          ),
          (n = $("<input type='checkbox' class='visibility-switch'>")),
          (i = this.addLabeledRow(this._table, $.t("Full Circles"))),
          $("<td>")
            .append(n)
            .prependTo(i),
          this.bindControl(
            new p(
              n,
              this._linetool.properties().fullCircles,
              !0,
              this.model(),
              "Change Fib Speed Resistance Arcs Full Cirlces Mode"
            )
          ),
          (i = $("<tr>")),
          i.appendTo(this._table),
          (a = $("<input type='checkbox' class='visibility-switch'>")),
          $("<td>")
            .append(a)
            .appendTo(i),
          $("<td>" + $.t("Background") + "</td>").appendTo(i),
          (r = u()),
          $('<td colspan="3">')
            .append(r)
            .appendTo(i),
          this.bindControl(
            new p(
              a,
              this._linetool.properties().fillBackground,
              !0,
              this.model(),
              "Change Fib Arcs Background Visibility"
            )
          ),
          this.bindControl(
            new d(
              r,
              this._linetool.properties().transparency,
              !0,
              this.model(),
              "Change Fib Arcs Background Transparency"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  778: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.BooleanBinder,
      l = a.ColorBinding,
      p = a.FloatBinder,
      s = a.SimpleComboBinder,
      d = a.SliderBinder,
      h = o(47).addColorPicker,
      c = o(31).createLineStyleEditor,
      b = o(15).createLineWidthEditor,
      u = o(65).createTransparencyEditor;
    inherit(i, n),
      (i.prototype.addLevelEditor = function(e, t, o) {
        var i,
          n,
          a,
          s,
          d,
          c,
          b = $("<tr>");
        b.appendTo(e),
          (i = $("<td>")),
          i.appendTo(b),
          (n = $("<input type='checkbox' class='visibility-switch'>")),
          n.appendTo(i),
          (a = $("<td>")),
          a.appendTo(b),
          (s = $("<input type='text'>")),
          s.appendTo(a),
          s.css("width", "70px"),
          this.bindControl(
            new r(
              n,
              o.visible,
              !0,
              this.model(),
              "Change Gann Square Line Visibility"
            )
          ),
          this.bindControl(
            new p(s, o.coeff, !1, this.model(), "Change Pitchfork Line Coeff")
          ),
          (d = $("<td class='colorpicker-cell'>")),
          d.appendTo(b),
          (c = h(d)),
          this.bindControl(
            new l(
              c,
              o.color,
              !0,
              this.model(),
              "Change Gann Square Line Color",
              0
            )
          );
      }),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n, a, p, h, C, y, g, w, T, _, m, f, L, v, k, S, P, x, B;
        for (
          this._table = $(document.createElement("table")),
            this._table.addClass("property-page property-page-unpadded"),
            this._table.attr("cellspacing", "0"),
            this._table.attr("cellpadding", "2"),
            this._table.css({ width: "100%" }),
            e = $("<tbody>").appendTo(this._table),
            t = $("<tr>"),
            t.appendTo(e),
            o = $('<td width="50%">'),
            o.appendTo(t),
            i = $('<td width="50%">'),
            i.appendTo(t),
            n = $('<table cellspacing="0" cellpadding="2">'),
            n.appendTo(o),
            n.addClass("property-page"),
            a = $('<table cellspacing="0" cellpadding="2">'),
            a.appendTo(i),
            a.addClass("property-page"),
            $(
              "<tr><td align='center' colspan='4'>" +
                $.t("Price Levels") +
                "</td></tr>"
            ).appendTo(n),
            $(
              "<tr><td align='center' colspan='4'>" +
                $.t("Time Levels") +
                "</td></tr>"
            ).appendTo(a),
            p = 1;
          p <= 7;
          p++
        )
          (h = "hlevel" + p),
            this.addLevelEditor(
              n,
              "Level " + p,
              this._linetool.properties()[h]
            );
        for (p = 1; p <= 7; p++)
          (h = "vlevel" + p),
            this.addLevelEditor(
              a,
              "Level " + p,
              this._linetool.properties()[h]
            );
        this.addOneColorPropertyWidget(n),
          i.css({ "vertical-align": "top" }),
          (C = $("<input type='checkbox' class='visibility-switch'>")),
          (y = $("<input type='checkbox' class='visibility-switch'>")),
          (g = $("<input type='checkbox' class='visibility-switch'>")),
          (w = $("<input type='checkbox' class='visibility-switch'>")),
          (T = $(
            '<table class="property-page property-page-unpadded" cellspacing="0" cellpadding="0">'
          ).css({ width: "100%" })),
          (_ = $("<tr>").appendTo(T)),
          (m = $(
            '<table class="property-page" cellspacing="0" cellpadding="0">'
          ).appendTo(
            $("<td>")
              .css({ width: "50%" })
              .appendTo(_)
          )),
          (f = $(
            '<table class="property-page" cellspacing="0" cellpadding="0">'
          ).appendTo(
            $("<td>")
              .css({ width: "50%" })
              .appendTo(_)
          )),
          (L = this.addLabeledRow(m, $.t("Left Labels"), C)),
          $("<td>")
            .append(C)
            .prependTo(L),
          (L = this.addLabeledRow(f, $.t("Right Labels"), y)),
          $("<td>")
            .append(y)
            .prependTo(L),
          (L = this.addLabeledRow(m, $.t("Top Labels"), g)),
          $("<td>")
            .append(g)
            .prependTo(L),
          (L = this.addLabeledRow(f, $.t("Bottom Labels"), w)),
          $("<td>")
            .append(w)
            .prependTo(L),
          this.bindControl(
            new r(
              C,
              this._linetool.properties().showLeftLabels,
              !0,
              this.model(),
              "Change Gann Square Left Labels Visibility"
            )
          ),
          this.bindControl(
            new r(
              y,
              this._linetool.properties().showRightLabels,
              !0,
              this.model(),
              "Change Gann Square Right Labels Visibility"
            )
          ),
          this.bindControl(
            new r(
              g,
              this._linetool.properties().showTopLabels,
              !0,
              this.model(),
              "Change Gann Square Top Labels Visibility"
            )
          ),
          this.bindControl(
            new r(
              w,
              this._linetool.properties().showBottomLabels,
              !0,
              this.model(),
              "Change Gann Square Bottom Labels Visibility"
            )
          ),
          (v = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">'
          )),
          (k = b()),
          (S = c()),
          (P = this.createColorPicker()),
          (x = $("<input type='checkbox' class='visibility-switch'>")),
          (L = this.addLabeledRow(v, $.t("Grid"), x)),
          $("<td>")
            .append(x)
            .prependTo(L),
          $("<td>")
            .append(P)
            .appendTo(L),
          $("<td>")
            .append(k)
            .appendTo(L),
          $("<td>")
            .append(S.render())
            .appendTo(L),
          this.bindControl(
            new r(
              x,
              this._linetool.properties().grid.visible,
              !0,
              this.model(),
              "Change Fib Speed Resistance Fan Grid Visibility"
            )
          ),
          this.bindControl(
            new l(
              P,
              this._linetool.properties().grid.color,
              !0,
              this.model(),
              "Change Fib Speed Resistance Fan Grid Line Color",
              0
            )
          ),
          this.bindControl(
            new s(
              S,
              this._linetool.properties().grid.linestyle,
              parseInt,
              !0,
              this.model(),
              "Change Fib Speed Resistance Fan Grid Line Style"
            )
          ),
          this.bindControl(
            new d(
              k,
              this._linetool.properties().grid.linewidth,
              !0,
              this.model(),
              "Change Fib Speed Resistance Fan Grid Line Width"
            )
          ),
          (this._table = this._table.add(T).add(v)),
          (L = $("<tr>")),
          L.appendTo(v),
          (x = $("<input type='checkbox' class='visibility-switch'>")),
          $("<td>")
            .append(x)
            .appendTo(L),
          this.createLabeledCell("Background", x).appendTo(L),
          (B = u()),
          $('<td colspan="3">')
            .append(B)
            .appendTo(L),
          this.bindControl(
            new r(
              x,
              this._linetool.properties().fillBackground,
              !0,
              this.model(),
              "Change Fib Speed/Resistance Fan Background Visibility"
            )
          ),
          this.bindControl(
            new d(
              B,
              this._linetool.properties().transparency,
              !0,
              this.model(),
              "Change Fib Speed/Resistance Fan Background Transparency"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  779: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.SimpleComboBinder,
      l = a.ColorBinding,
      p = a.SliderBinder,
      s = o(31).createLineStyleEditor,
      d = o(15).createLineWidthEditor;
    inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n;
        (this._table = $(
          '<table class="property-page" cellspacing="0" cellpadding="2">'
        )),
          (e = $("<tbody>").appendTo(this._table)),
          (t = d()),
          (o = s()),
          (i = this.createColorPicker()),
          (n = this.addLabeledRow(e, "Line")),
          $("<td>")
            .append(i)
            .appendTo(n),
          $("<td>")
            .append(t)
            .appendTo(n),
          $('<td colspan="3">')
            .append(o.render())
            .appendTo(n),
          this.bindControl(
            new l(
              i,
              this._linetool.properties().linecolor,
              !0,
              this.model(),
              "Change Fib Spiral Line Color"
            )
          ),
          this.bindControl(
            new r(
              o,
              this._linetool.properties().linestyle,
              parseInt,
              !0,
              this.model(),
              "Change Fib Spiral Line Style"
            )
          ),
          this.bindControl(
            new p(
              t,
              this._linetool.properties().linewidth,
              !0,
              this.model(),
              "Change Fib Spiral Line Width"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  780: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.FloatBinder,
      l = a.BooleanBinder,
      p = a.ColorBinding,
      s = a.SimpleComboBinder,
      d = a.SliderBinder,
      h = o(47).addColorPicker,
      c = o(31).createLineStyleEditor,
      b = o(15).createLineWidthEditor,
      u = o(65).createTransparencyEditor;
    inherit(i, n),
      (i.prototype.addLevelEditor = function(e, t, o) {
        var i,
          n,
          a,
          u,
          C,
          y,
          g,
          w,
          T,
          _,
          m = $("<tr>");
        m.appendTo(this._table),
          (i = $("<td>")),
          i.appendTo(m),
          (n = $("<input type='checkbox' class='visibility-switch'>")),
          n.appendTo(i),
          e
            ? ((a = $("<td>")),
              a.appendTo(m),
              (u = $("<input type='text'>")),
              u.appendTo(a),
              u.css("width", "70px"),
              this.bindControl(
                new r(
                  u,
                  t.coeff,
                  !1,
                  this.model(),
                  "Change Pitchfork Line Coeff"
                )
              ))
            : this.createLabeledCell($.t("Trend Line"), n).appendTo(m),
          (C = $("<td class='colorpicker-cell'>")),
          C.appendTo(m),
          (y = h(C)),
          (g = $("<td>")),
          g.appendTo(m),
          (w = b()),
          w.appendTo(g),
          (T = $("<td>")),
          T.appendTo(m),
          (_ = c()),
          _.render().appendTo(T),
          this.bindControl(
            new l(
              n,
              t.visible,
              !0,
              this.model(),
              "Change Pitchfork Line Visibility"
            )
          ),
          this.bindControl(
            new p(
              y,
              t.color,
              !0,
              this.model(),
              "Change Pitchfork Line Color",
              0
            )
          ),
          this.bindControl(
            new s(
              _,
              t.linestyle,
              parseInt,
              !0,
              this.model(),
              "Change Pitchfork Line Style"
            )
          ),
          this.bindControl(
            new d(
              w,
              t.linewidth,
              parseInt,
              this.model(),
              "Change Pitchfork Line Width"
            )
          );
      }),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n, a, r, p, h;
        for (
          this._table = $(document.createElement("table")),
            this._table.addClass("property-page"),
            this._table.attr("cellspacing", "0"),
            this._table.attr("cellpadding", "2"),
            e = 1;
          e <= 11;
          e++
        )
          (t = "level" + e),
            this.addLevelEditor(
              "Level " + e,
              this._linetool.properties()[t],
              !1
            );
        this.addOneColorPropertyWidget(this._table),
          (o = $("<input type='checkbox' class='visibility-switch'>")),
          (i = this.addLabeledRow(this._table, $.t("Show Labels"), o)),
          $("<td>")
            .append(o)
            .prependTo(i),
          (n = $("<table cellspacing='0' cellpadding='0'>")),
          (a = $(
            "<select><option value='left'>" +
              $.t("left") +
              "</option><option value='center'>" +
              $.t("center") +
              "</option><option value='right'>" +
              $.t("right") +
              "</option></select>"
          )),
          (r = $(
            "<select><option value='top'>" +
              $.t("top") +
              "</option><option value='middle'>" +
              $.t("middle") +
              "</option><option value='bottom'>" +
              $.t("bottom") +
              "</option></select>"
          )),
          (i = $("<tr>")),
          i
            .append("<td>" + $.t("Labels") + "</td>")
            .append(a)
            .append("<td>&nbsp</td>")
            .append(r),
          i.appendTo(n),
          (i = $("<tr>")),
          $("<td colspan='5'>")
            .append(n)
            .appendTo(i),
          i.appendTo(this._table),
          this.bindControl(
            new s(
              a,
              this._linetool.properties().horzLabelsAlign,
              null,
              !0,
              this.model(),
              "Change Fib Time Zone Labels Alignment"
            )
          ),
          this.bindControl(
            new s(
              r,
              this._linetool.properties().vertLabelsAlign,
              null,
              !0,
              this.model(),
              "Change Fib Time Zone Labels Alignment"
            )
          ),
          (i = $("<tr>")),
          i.appendTo(this._table),
          (p = $("<input type='checkbox' class='visibility-switch'>")),
          $("<td>")
            .append(p)
            .appendTo(i),
          this.createLabeledCell($.t("Background"), p).appendTo(i),
          (h = u()),
          $('<td colspan="3">')
            .append(h)
            .appendTo(i),
          this.bindControl(
            new l(
              o,
              this._linetool.properties().showLabels,
              !0,
              this.model(),
              "Change Fib Time Zone Labels Visibility"
            )
          ),
          this.bindControl(
            new d(
              h,
              this._linetool.properties().transparency,
              !0,
              this.model(),
              "Change Fib Retracement Background Transparency"
            )
          ),
          this.bindControl(
            new l(
              p,
              this._linetool.properties().fillBackground,
              !0,
              this.model(),
              "Change Fib Retracement Background Visibility"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  781: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o);
    }
    var n = o(267);
    inherit(i, n), (e.exports = i);
  },
  782: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.FloatBinder,
      l = a.BooleanBinder,
      p = a.SliderBinder,
      s = a.SimpleComboBinder,
      d = a.ColorBinding,
      h = o(47).addColorPicker,
      c = o(31).createLineStyleEditor,
      b = o(15).createLineWidthEditor,
      u = o(65).createTransparencyEditor;
    inherit(i, n),
      (i.prototype.addLevelEditor = function(e, t, o) {
        var i,
          n,
          a,
          u,
          C,
          y,
          g,
          w,
          T,
          _,
          m = $("<tr>");
        m.appendTo(this._table),
          (i = $("<td>")),
          i.appendTo(m),
          (n = $("<input type='checkbox' class='visibility-switch'>")),
          n.appendTo(i),
          e
            ? ((a = $("<td>")),
              a.appendTo(m),
              (u = $("<input type='text'>")),
              u.appendTo(a),
              u.css("width", "70px"),
              this.bindControl(
                new r(
                  u,
                  t.coeff,
                  !1,
                  this.model(),
                  "Change Pitchfork Line Coeff"
                )
              ))
            : this.createLabeledCell($.t("Trend Line"), n).appendTo(m),
          (C = $("<td class='colorpicker-cell'>")),
          C.appendTo(m),
          (y = h(C)),
          (g = $("<td>")),
          g.appendTo(m),
          (w = b()),
          w.appendTo(g),
          (T = $("<td>")),
          T.appendTo(m),
          (_ = c()),
          _.render().appendTo(T),
          this.bindControl(
            new l(
              n,
              t.visible,
              !0,
              this.model(),
              "Change Pitchfork Line Visibility"
            )
          ),
          this.bindControl(
            new d(
              y,
              t.color,
              !0,
              this.model(),
              "Change Pitchfork Line Color",
              0
            )
          ),
          this.bindControl(
            new s(
              _,
              t.linestyle,
              parseInt,
              !0,
              this.model(),
              "Change Pitchfork Line Style"
            )
          ),
          this.bindControl(
            new p(
              w,
              t.linewidth,
              parseInt,
              this.model(),
              "Change Pitchfork Line Width"
            )
          );
      }),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n, a, r, d, h, c, b;
        for (
          this._table = $(document.createElement("table")),
            this._table.addClass("property-page"),
            this._table.attr("cellspacing", "0"),
            this._table.attr("cellpadding", "2"),
            this.addLevelEditor(
              null,
              this._linetool.properties().trendline,
              !1
            ),
            e = 1;
          e <= 11;
          e++
        )
          (t = "level" + e),
            this.addLevelEditor(
              $.t("Level {0}").format(e),
              this._linetool.properties()[t],
              !1
            );
        this.addOneColorPropertyWidget(this._table),
          (o = $(
            '<table class="property-page property-page-unpadded" cellspacing="0" cellpadding="0">'
          ).css({ width: "100%" })),
          (i = $("<tr>").appendTo(o)),
          $(
            '<table class="property-page" cellspacing="0" cellpadding="0">'
          ).appendTo(
            $("<td>")
              .css({ width: "50%" })
              .appendTo(i)
          ),
          $(
            '<table class="property-page" cellspacing="0" cellpadding="0">'
          ).appendTo(
            $("<td>")
              .css({ width: "50%" })
              .appendTo(i)
          ),
          (n = $("<input type='checkbox' class='visibility-switch'>")),
          (a = this.addLabeledRow(this._table, $.t("Show Labels"), n)),
          $("<td>")
            .append(n)
            .prependTo(a),
          (r = $("<table cellspacing='0' cellpadding='0'>")),
          (d = $(
            "<select><option value='left'>" +
              $.t("left") +
              "</option><option value='center'>" +
              $.t("center") +
              "</option><option value='right'>" +
              $.t("right") +
              "</option></select>"
          )),
          (h = $(
            "<select><option value='top'>" +
              $.t("top") +
              "</option><option value='middle'>" +
              $.t("middle") +
              "</option><option value='bottom'>" +
              $.t("bottom") +
              "</option></select>"
          )),
          (a = $("<tr>")),
          a
            .append("<td>" + $.t("Labels") + "</td>")
            .append(d)
            .append("<td>&nbsp</td>")
            .append(h),
          a.appendTo(r),
          (a = $("<tr>")),
          $("<td colspan='5'>")
            .append(r)
            .appendTo(a),
          a.appendTo(this._table),
          this.bindControl(
            new s(
              d,
              this._linetool.properties().horzLabelsAlign,
              null,
              !0,
              this.model(),
              "Change Trend-Based Fib Time Labels Alignment"
            )
          ),
          this.bindControl(
            new s(
              h,
              this._linetool.properties().vertLabelsAlign,
              null,
              !0,
              this.model(),
              "Change Trend-Based Fib Time Labels Alignment"
            )
          ),
          (a = $("<tr>")),
          a.appendTo(this._table),
          (c = $("<input type='checkbox' class='visibility-switch'>")),
          $("<td>")
            .append(c)
            .appendTo(a),
          this.createLabeledCell($.t("Background"), c).appendTo(a),
          (b = u()),
          $('<td colspan="3">')
            .append(b)
            .appendTo(a),
          this.bindControl(
            new l(
              c,
              this._linetool.properties().fillBackground,
              !0,
              this.model(),
              "Change Fib Retracement Background Visibility"
            )
          ),
          this.bindControl(
            new p(
              b,
              this._linetool.properties().transparency,
              !0,
              this.model(),
              "Change Fib Retracement Background Transparency"
            )
          ),
          this.bindControl(
            new l(
              n,
              this._linetool.properties().showCoeffs,
              !0,
              this.model(),
              "Change Fib Retracement Extend Lines"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  783: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.FloatBinder,
      l = a.BooleanBinder,
      p = a.ColorBinding,
      s = a.SliderBinder,
      d = o(47).addColorPicker,
      h = o(15).createLineWidthEditor,
      c = o(65).createTransparencyEditor;
    inherit(i, n),
      (i.prototype.addLevelEditor = function(e, t, o) {
        var i,
          n,
          a,
          c,
          b,
          u,
          C,
          y,
          g = $("<tr>");
        g.appendTo(this._table),
          (i = $("<td>")),
          i.appendTo(g),
          (n = $("<input type='checkbox' class='visibility-switch'>")),
          n.appendTo(i),
          e
            ? ((a = $("<td>")),
              a.appendTo(g),
              (c = $("<input type='text'>")),
              c.appendTo(a),
              c.css("width", "70px"),
              this.bindControl(
                new r(
                  c,
                  t.coeff,
                  !1,
                  this.model(),
                  "Change Pitchfork Line Coeff"
                )
              ))
            : this.createLabeledCell("Trend Line", n).appendTo(g),
          (b = $("<td class='colorpicker-cell'>")),
          b.appendTo(g),
          (u = d(b)),
          (C = $("<td>")),
          C.appendTo(g),
          (y = h()),
          y.appendTo(C),
          this.bindControl(
            new l(n, t.visible, !0, this.model(), "Change Fib Wedge Visibility")
          ),
          this.bindControl(
            new p(
              u,
              t.color,
              !0,
              this.model(),
              "Change Fib Wedge Line Color",
              0
            )
          ),
          this.bindControl(
            new s(y, t.linewidth, !0, this.model(), "Change Fib Wedge Width")
          );
      }),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n, a;
        for (
          this._table = $(document.createElement("table")),
            this._table.addClass("property-page"),
            this._table.attr("cellspacing", "0"),
            this._table.attr("cellpadding", "2"),
            this.addLevelEditor(
              null,
              this._linetool.properties().trendline,
              !1
            ),
            e = 1;
          e <= 11;
          e++
        )
          (t = "level" + e),
            this.addLevelEditor(
              "Level " + e,
              this._linetool.properties()[t],
              !1
            );
        this.addOneColorPropertyWidget(this._table),
          (o = $("<input type='checkbox' class='visibility-switch'>")),
          (i = this.addLabeledRow(this._table, "Levels", o)),
          $("<td>")
            .append(o)
            .prependTo(i),
          this.bindControl(
            new l(
              o,
              this._linetool.properties().showCoeffs,
              !0,
              this.model(),
              "Change Fib Wedge Levels Visibility"
            )
          ),
          (i = $("<tr>")),
          i.appendTo(this._table),
          (n = $("<input type='checkbox' class='visibility-switch'>")),
          $("<td>")
            .append(n)
            .appendTo(i),
          this.createLabeledCell("Background", n).appendTo(i),
          (a = c()),
          $('<td colspan="3">')
            .append(a)
            .appendTo(i),
          this.bindControl(
            new l(
              n,
              this._linetool.properties().fillBackground,
              !0,
              this.model(),
              "Change Wedge Background Visibility"
            )
          ),
          this.bindControl(
            new s(
              a,
              this._linetool.properties().transparency,
              !0,
              this.model(),
              "Change Wedge Background Transparency"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  784: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.SimpleComboBinder,
      l = a.ColorBinding,
      p = a.BooleanBinder,
      s = a.SliderBinder,
      d = o(31).createLineStyleEditor,
      h = o(15).createLineWidthEditor;
    inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e,
          t,
          o,
          i,
          n,
          a,
          c,
          b,
          u,
          C,
          y,
          g,
          w,
          T,
          _,
          m,
          f,
          L,
          v,
          k,
          S,
          P,
          x,
          B;
        (this._table = $(
          '<table class="property-page" cellspacing="0" cellpadding="2">'
        )),
          (e = $("<tbody>").appendTo(this._table)),
          (t = h()),
          (o = d()),
          (i = this.createColorPicker()),
          (n = this.addLabeledRow(e, $.t("Line"))),
          $("<td>")
            .append(i)
            .appendTo(n),
          $("<td>")
            .append(t)
            .appendTo(n),
          $('<td colspan="3">')
            .append(o.render())
            .appendTo(n),
          (n = this.addLabeledRow(e, $.t("Text"))),
          (a = this.createColorPicker()),
          (c = this.createFontSizeEditor()),
          (b = this.createFontEditor()),
          (u = $(
            '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>'
          )),
          (C = $(
            '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>'
          )),
          $("<td>")
            .append(a)
            .appendTo(n),
          $("<td>")
            .append(b)
            .appendTo(n),
          $("<td>")
            .append(c)
            .appendTo(n),
          $("<td>")
            .append(u)
            .appendTo(n),
          $("<td>")
            .append(C)
            .appendTo(n),
          (y = $("<tbody>").appendTo(this._table)),
          (g = $('<input type="checkbox" class="visibility-switch">')),
          (w = this.createColorPicker()),
          (n = this.addLabeledRow(y, $.t("Background"), g)),
          (T = $("<table>")),
          $('<td colspan="5">')
            .append(T)
            .appendTo(n),
          (n = $("<tr>").appendTo(T)),
          $("<td>")
            .append(g)
            .appendTo(n),
          $("<td>")
            .append(w)
            .appendTo(n),
          (_ = $("<tbody>").appendTo(this._table)),
          (m = $("<label>" + $.t("Extend") + " </label>").css({
            "margin-left": "8px"
          })),
          (f = $('<input type="checkbox">').appendTo(m)),
          (L = $("<label>" + $.t("Extend") + " </label>").css({
            "margin-left": "8px"
          })),
          (v = $('<input type="checkbox">').appendTo(L)),
          (k = $(
            "<select><option value='0'>" +
              $.t("Normal") +
              "</option><option value='1'>" +
              $.t("Arrow") +
              "</option></select>"
          )),
          (S = $(
            "<select><option value='0'>" +
              $.t("Normal") +
              "</option><option value='1'>" +
              $.t("Arrow") +
              "</option></select>"
          )),
          (n = this.addLabeledRow(_, $.t("Left End"))),
          $('<td colspan="3">')
            .appendTo(n)
            .append(k)
            .append(m),
          (n = this.addLabeledRow(_, $.t("Right End"))),
          $('<td colspan="3">')
            .appendTo(n)
            .append(S)
            .append(L),
          (P = $("<tbody>").appendTo(this._table)),
          (n = $("<tr>").appendTo(P)),
          (x = $("<input type='checkbox'>")),
          (B = $("<label style='display:block'>")
            .append(x)
            .append($.t("Show Prices"))),
          $("<td colspan='2'>")
            .append(B)
            .appendTo(n),
          this.bindControl(
            new r(
              c,
              this._linetool.properties().fontsize,
              parseInt,
              !0,
              this.model(),
              "Change Text Font Size"
            )
          ),
          this.bindControl(
            new r(
              b,
              this._linetool.properties().font,
              null,
              !0,
              this.model(),
              "Change Text Font"
            )
          ),
          this.bindControl(
            new l(
              a,
              this._linetool.properties().textcolor,
              !0,
              this.model(),
              "Change Text Color"
            )
          ),
          this.bindControl(
            new p(
              u,
              this._linetool.properties().bold,
              !0,
              this.model(),
              "Change Text Font Bold"
            )
          ),
          this.bindControl(
            new p(
              C,
              this._linetool.properties().italic,
              !0,
              this.model(),
              "Change Text Font Italic"
            )
          ),
          this.bindControl(
            new p(
              x,
              this._linetool.properties().showPrices,
              !0,
              this.model(),
              "Change Disjoint Angle Show Prices"
            )
          ),
          this.bindControl(
            new p(
              f,
              this._linetool.properties().extendLeft,
              !0,
              this.model(),
              "Change Disjoint Angle Extending Left"
            )
          ),
          this.bindControl(
            new p(
              v,
              this._linetool.properties().extendRight,
              !0,
              this.model(),
              "Change Disjoint Angle Extending Right"
            )
          ),
          this.bindControl(
            new l(
              i,
              this._linetool.properties().linecolor,
              !0,
              this.model(),
              "Change Disjoint Angle Color"
            )
          ),
          this.bindControl(
            new r(
              o,
              this._linetool.properties().linestyle,
              parseInt,
              !0,
              this.model(),
              "Change Disjoint Angle Style"
            )
          ),
          this.bindControl(
            new s(
              t,
              this._linetool.properties().linewidth,
              !0,
              this.model(),
              "Change Disjoint Angle Width"
            )
          ),
          this.bindControl(
            new r(
              k,
              this._linetool.properties().leftEnd,
              parseInt,
              !0,
              this.model(),
              "Change Disjoint Angle Left End"
            )
          ),
          this.bindControl(
            new r(
              S,
              this._linetool.properties().rightEnd,
              parseInt,
              !0,
              this.model(),
              "Change Disjoint Angle Right End"
            )
          ),
          this.bindControl(
            new p(
              g,
              this._linetool.properties().fillBackground,
              !0,
              this.model(),
              "Change Disjoint Angle Filling"
            )
          ),
          this.bindControl(
            new l(
              w,
              this._linetool.properties().backgroundColor,
              !0,
              this.model(),
              "Change Disjoint Angle Background Color",
              this._linetool.properties().transparency
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  785: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.BooleanBinder,
      l = a.SliderBinder,
      p = a.ColorBinding,
      s = o(47).addColorPicker,
      d = o(15).createLineWidthEditor,
      h = o(65).createTransparencyEditor;
    inherit(i, n),
      (i.prototype.addOneColorPropertyWidget = function(e) {
        var t = this.createOneColorForAllLinesWidget(),
          o = $("<tr>");
        o
          .append($("<td>"))
          .append($("<td>"))
          .append(t.editor)
          .append($("<td>").append(t.label)),
          o.appendTo(e);
      }),
      (i.prototype.prepareLayout = function() {
        var e,
          t,
          o,
          i,
          n,
          a,
          c,
          b,
          u,
          C,
          y,
          g,
          w,
          T,
          _,
          m,
          f,
          L,
          v,
          k,
          S,
          P,
          x,
          B,
          E,
          R,
          F;
        (this._table = $(document.createElement("table"))),
          this._table.addClass("property-page property-page-unpadded"),
          this._table.attr("cellspacing", "0"),
          this._table.attr("cellpadding", "2"),
          this._table.css({ width: "100%" }),
          (e = $("<tr>")),
          e.appendTo(this._table),
          (t = this._linetool.properties()),
          (o = $("<table>")),
          $("<td valign='top'>")
            .append(o)
            .appendTo(e),
          (i = $("<tr>")),
          $("<td colspan='3'>" + $.t("Levels") + "</td>").appendTo(i),
          i.appendTo(o);
        for (n in t.levels._childs)
          (a = t.levels[n]),
            (c = $("<tr>")),
            c.appendTo(o),
            $("<td>" + n + "</td>").appendTo(c),
            (b = $("<input type='checkbox' class='visibility-switch'>")),
            $("<td>")
              .append(b)
              .appendTo(c),
            (u = $("<td class='colorpicker-cell'>")),
            u.appendTo(c),
            (C = s(u)),
            (y = $("<td>")),
            y.appendTo(c),
            (g = d()),
            g.appendTo(y),
            this.bindControl(
              new r(
                b,
                a.visible,
                !0,
                this.model(),
                "Change Gann Line Visibility"
              )
            ),
            this.bindControl(
              new p(C, a.color, !0, this.model(), "Change Gann Line Color", 0)
            ),
            this.bindControl(
              new l(g, a.width, !0, this.model(), "Change Gann Line Width")
            );
        (w = $("<table>")),
          $("<td valign='top'>")
            .append(w)
            .appendTo(e),
          (T = $("<tr>")),
          $("<td colspan='4'>" + $.t("Fans") + "</td>").appendTo(T),
          T.appendTo(w);
        for (n in t.fanlines._childs)
          (_ = t.fanlines[n]),
            (m = $("<tr>")),
            m.appendTo(w),
            (b = $("<input type='checkbox' class='visibility-switch'>")),
            $("<td>")
              .append(b)
              .appendTo(m),
            (f = _.x.value() + "x" + _.y.value()),
            $("<td>" + f + "</td>").appendTo(m),
            (u = $("<td class='colorpicker-cell'>")),
            u.appendTo(m),
            (C = s(u)),
            (y = $("<td>")),
            y.appendTo(m),
            (g = d()),
            g.appendTo(y),
            this.bindControl(
              new r(
                b,
                _.visible,
                !0,
                this.model(),
                "Change Gann Line Visibility"
              )
            ),
            this.bindControl(
              new p(C, _.color, !0, this.model(), "Change Gann Fan Color", 0)
            ),
            this.bindControl(
              new l(g, _.width, !0, this.model(), "Change Gann Line Width")
            );
        (L = $("<table>")),
          $("<td valign='top'>")
            .append(L)
            .appendTo(e),
          (v = $("<tr>")),
          $("<td colspan='4'>" + $.t("Arcs") + "</td>").appendTo(v),
          v.appendTo(L);
        for (n in t.arcs._childs)
          (k = t.arcs[n]),
            (S = $("<tr>")),
            S.appendTo(L),
            (b = $("<input type='checkbox' class='visibility-switch'>")),
            $("<td>")
              .append(b)
              .appendTo(S),
            (f = k.x.value() + "x" + k.y.value()),
            $("<td>" + f + "</td>").appendTo(S),
            (u = $("<td class='colorpicker-cell'>")),
            u.appendTo(S),
            (C = s(u)),
            (y = $("<td>")),
            y.appendTo(S),
            (g = d()),
            g.appendTo(y),
            this.bindControl(
              new r(
                b,
                k.visible,
                !0,
                this.model(),
                "Change Gann Line Visibility"
              )
            ),
            this.bindControl(
              new p(C, k.color, !0, this.model(), "Change Gann Arc Color", 0)
            ),
            this.bindControl(
              new l(g, k.width, !0, this.model(), "Change Gann Line Width")
            );
        this.addOneColorPropertyWidget(L),
          (P = $("<tbody>").appendTo(this._table)),
          (x = $('<input type="checkbox" class="visibility-switch">')),
          (B = h()),
          (E = $("<tr>").appendTo(P)),
          (R = $("<table>")),
          $('<td colspan="3">')
            .append(R)
            .appendTo(E),
          (E = $("<tr>").appendTo(R)),
          $("<td>")
            .append(x)
            .appendTo(E),
          $("<td>" + $.t("Background") + "</td>").appendTo(E),
          $("<td>")
            .append(B)
            .appendTo(E),
          this._linetool.properties().reverse &&
            ((F = $("<input type='checkbox' class='visibility-switch'>")),
            (E = this.addLabeledRow(R, $.t("Reverse"), F, !0)),
            $("<td>")
              .append(F)
              .prependTo(E),
            this.bindControl(
              new r(
                F,
                this._linetool.properties().reverse,
                !0,
                this.model(),
                "Change Gann Square Reverse"
              )
            )),
          this.bindControl(
            new r(
              x,
              this._linetool.properties().arcsBackground.fillBackground,
              !0,
              this.model(),
              "Change Gann Square Filling"
            )
          ),
          this.bindControl(
            new l(
              B,
              this._linetool.properties().arcsBackground.transparency,
              !0,
              this.model(),
              "Change Gann Square Background Transparency"
            )
          );
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  786: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.BooleanBinder,
      l = a.ColorBinding,
      p = a.SimpleComboBinder,
      s = a.SliderBinder,
      d = o(47).addColorPicker,
      h = o(31).createLineStyleEditor,
      c = o(15).createLineWidthEditor,
      b = o(65).createTransparencyEditor;
    inherit(i, n),
      (i.prototype.addLevelEditor = function(e, t, o, i) {
        var n,
          a,
          b,
          u,
          C,
          y,
          g,
          w,
          T,
          _,
          m = $("<tr>");
        m.appendTo(this._tbody),
          (n = "control-level-" + o + "-" + i),
          (a = $("<td>")),
          a.appendTo(m),
          (b = $(
            "<input type='checkbox' class='visibility-switch' id='" + n + "'>"
          )),
          b.appendTo(a),
          (u = this.createLabeledCell(e).appendTo(m)),
          u.find("label").attr("for", n),
          (C = $("<td class='colorpicker-cell'>")),
          C.appendTo(m),
          (y = d(C)),
          (g = $("<td>")),
          g.appendTo(m),
          (w = c()),
          w.appendTo(g),
          (T = $("<td>")),
          T.appendTo(m),
          (_ = h()),
          _.render().appendTo(T),
          this.bindControl(
            new r(
              b,
              t.visible,
              !0,
              this.model(),
              "Change Gann Fan Line Visibility"
            )
          ),
          this.bindControl(
            new l(y, t.color, !0, this.model(), "Change Gann Fan Line Color", 0)
          ),
          this.bindControl(
            new p(
              _,
              t.linestyle,
              parseInt,
              !0,
              this.model(),
              "Change Gann Fan Line Style"
            )
          ),
          this.bindControl(
            new s(
              w,
              t.linewidth,
              !0,
              this.model(),
              "Change Gann Fan Line Width"
            )
          );
      }),
      (i.prototype.prepareLayout = function() {
        var e,
          t,
          o,
          i,
          n,
          a,
          l,
          p,
          d,
          h,
          c = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">'
          ),
          u = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">'
          );
        for (this._tbody = $("<tbody>").appendTo(c), e = 1; e <= 9; e++)
          (t = "level" + e),
            (o = this._linetool.properties()[t]),
            (i = o.coeff1.value()),
            (n = o.coeff2.value()),
            (a = "<sup>" + i + "</sup>&frasl;<sub>" + n + "</sub>"),
            this.addLevelEditor(a, o, i, n);
        this.addOneColorPropertyWidget(this._tbody),
          (l = $("<input type='checkbox' class='visibility-switch'>")),
          (p = this.addLabeledRow(u, $.t("Labels"), l)),
          $("<td>")
            .append(l)
            .prependTo(p),
          this.bindControl(
            new r(
              l,
              this._linetool.properties().showLabels,
              !0,
              this.model(),
              "Change Gann Fan Labels Visibility"
            )
          ),
          (this._table = c.add(u)),
          (p = $("<tr>")),
          p.appendTo(this._table),
          (d = $("<input type='checkbox' class='visibility-switch'>")),
          $("<td>")
            .append(d)
            .appendTo(p),
          this.createLabeledCell($.t("Background"), d).appendTo(p),
          (h = b()),
          $('<td colspan="3">')
            .append(h)
            .appendTo(p),
          this.bindControl(
            new r(
              d,
              this._linetool.properties().fillBackground,
              !0,
              this.model(),
              "Change Pitchfan Background Visibility"
            )
          ),
          this.bindControl(
            new s(
              h,
              this._linetool.properties().transparency,
              !0,
              this.model(),
              "Change Pitchfan Background Transparency"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  787: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.BooleanBinder,
      l = a.FloatBinder,
      p = a.ColorBinding,
      s = a.SliderBinder,
      d = o(47).addColorPicker,
      h = o(65).createTransparencyEditor;
    inherit(i, n),
      (i.prototype.addLevelEditor = function(e, t, o) {
        var i,
          n,
          a,
          s,
          h,
          c,
          b = $("<tr>");
        b.appendTo(e),
          (i = $("<td>")),
          i.appendTo(b),
          (n = $("<input type='checkbox' class='visibility-switch'>")),
          n.appendTo(i),
          (a = $("<td>")),
          a.appendTo(b),
          (s = $("<input type='text'>")),
          s.appendTo(a),
          s.css("width", "70px"),
          this.bindControl(
            new r(
              n,
              o.visible,
              !0,
              this.model(),
              "Change Gann Square Line Visibility"
            )
          ),
          this.bindControl(
            new l(s, o.coeff, !1, this.model(), "Change Pitchfork Line Coeff")
          ),
          (h = $("<td class='colorpicker-cell'>")),
          h.appendTo(b),
          (c = d(h)),
          this.bindControl(
            new p(
              c,
              o.color,
              !0,
              this.model(),
              "Change Gann Square Line Color",
              0
            )
          );
      }),
      (i.prototype.addFannEditor = function(e) {
        var t,
          o,
          i = $("<tr>").appendTo(e),
          n = $("<input type='checkbox' class='visibility-switch'>");
        n.appendTo($("<td>").appendTo(i)),
          $("<td>" + $.t("Angles") + "</td>").appendTo(i),
          (t = $("<td class='colorpicker-cell'>").appendTo(i)),
          (o = d(t)),
          this.bindControl(
            new r(
              n,
              this._linetool.properties().fans.visible,
              !0,
              this.model(),
              "Change Gann Square Angles Visibility"
            )
          ),
          this.bindControl(
            new p(
              o,
              this._linetool.properties().fans.color,
              !0,
              this.model(),
              "Change Gann Square Angles Color",
              0
            )
          );
      }),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n, a, l, p, d, c, b, u, C, y, g, w, T, _, m, f;
        for (
          this._table = $(document.createElement("table")),
            this._table.addClass("property-page property-page-unpadded"),
            this._table.attr("cellspacing", "0"),
            this._table.attr("cellpadding", "2"),
            this._table.css({ width: "100%" }),
            e = $("<tbody>").appendTo(this._table),
            t = $("<tr>"),
            t.appendTo(e),
            o = $('<td width="50%">'),
            o.appendTo(t),
            i = $('<td width="50%">'),
            i.appendTo(t),
            n = $('<table cellspacing="0" cellpadding="2">'),
            n.appendTo(o),
            n.addClass("property-page"),
            a = $('<table cellspacing="0" cellpadding="2">'),
            a.appendTo(i),
            a.addClass("property-page"),
            $(
              "<tr><td align='center' colspan='4'>" +
                $.t("Price Levels") +
                "</td></tr>"
            ).appendTo(n),
            $(
              "<tr><td align='center' colspan='4'>" +
                $.t("Time Levels") +
                "</td></tr>"
            ).appendTo(a),
            l = 1;
          l <= 7;
          l++
        )
          (p = "hlevel" + l),
            this.addLevelEditor(
              n,
              $.t("Level {0}").format(l),
              this._linetool.properties()[p]
            );
        for (l = 1; l <= 7; l++)
          (p = "vlevel" + l),
            this.addLevelEditor(
              a,
              $.t("Level {0}").format(l),
              this._linetool.properties()[p]
            );
        this.addFannEditor(n),
          this.addOneColorPropertyWidget(a),
          i.css({ "vertical-align": "top" }),
          o.css({ "vertical-align": "top" }),
          (d = $("<input type='checkbox' class='visibility-switch'>")),
          (c = $("<input type='checkbox' class='visibility-switch'>")),
          (b = $("<input type='checkbox' class='visibility-switch'>")),
          (u = $("<input type='checkbox' class='visibility-switch'>")),
          (C = $(
            '<table class="property-page property-page-unpadded" cellspacing="0" cellpadding="0">'
          ).css({ width: "100%" })),
          (y = $("<tr>").appendTo(C)),
          (g = $(
            '<table class="property-page" cellspacing="0" cellpadding="0">'
          ).appendTo(
            $("<td>")
              .css({ width: "50%", "vertical-align": "top" })
              .appendTo(y)
          )),
          (w = $(
            '<table class="property-page" cellspacing="0" cellpadding="0">'
          ).appendTo(
            $("<td>")
              .css({ width: "50%", "vertical-align": "top" })
              .appendTo(y)
          )),
          (T = this.addLabeledRow(g, $.t("Left Labels"), d)),
          $("<td>")
            .append(d)
            .prependTo(T),
          (T = this.addLabeledRow(w, $.t("Right Labels"), c)),
          $("<td>")
            .append(c)
            .prependTo(T),
          (T = this.addLabeledRow(g, $.t("Top Labels"), b)),
          $("<td>")
            .append(b)
            .prependTo(T),
          (T = this.addLabeledRow(w, $.t("Bottom Labels"), u)),
          $("<td>")
            .append(u)
            .prependTo(T),
          this.bindControl(
            new r(
              d,
              this._linetool.properties().showLeftLabels,
              !0,
              this.model(),
              "Change Gann Square Left Labels Visibility"
            )
          ),
          this.bindControl(
            new r(
              c,
              this._linetool.properties().showRightLabels,
              !0,
              this.model(),
              "Change Gann Square Right Labels Visibility"
            )
          ),
          this.bindControl(
            new r(
              b,
              this._linetool.properties().showTopLabels,
              !0,
              this.model(),
              "Change Gann Square Top Labels Visibility"
            )
          ),
          this.bindControl(
            new r(
              u,
              this._linetool.properties().showBottomLabels,
              !0,
              this.model(),
              "Change Gann Square Bottom Labels Visibility"
            )
          ),
          (this._table = this._table.add(C)),
          (T = $("<tr>")),
          T.appendTo(g),
          (_ = $("<input type='checkbox' class='visibility-switch'>")),
          $("<td>")
            .append(_)
            .appendTo(T),
          (m = h()),
          $("<td>")
            .append(m)
            .appendTo(T),
          this.bindControl(
            new r(
              _,
              this._linetool.properties().fillHorzBackground,
              !0,
              this.model(),
              "Change Gann Square Background Visibility"
            )
          ),
          this.bindControl(
            new s(
              m,
              this._linetool.properties().horzTransparency,
              !0,
              this.model(),
              "Change Gann Square Background Transparency"
            )
          ),
          (T = $("<tr>")),
          T.appendTo(w),
          (_ = $("<input type='checkbox' class='visibility-switch'>")),
          $("<td>")
            .append(_)
            .appendTo(T),
          (m = h()),
          $("<td>")
            .append(m)
            .appendTo(T),
          this.bindControl(
            new r(
              _,
              this._linetool.properties().fillVertBackground,
              !0,
              this.model(),
              "Change Gann Square Background Visibility"
            )
          ),
          this.bindControl(
            new s(
              m,
              this._linetool.properties().vertTransparency,
              !0,
              this.model(),
              "Change Gann Square Background Transparency"
            )
          ),
          this._linetool.properties().reverse &&
            ((f = $("<input type='checkbox' class='visibility-switch'>")),
            (T = this.addLabeledRow(g, $.t("Reverse"), f)),
            $("<td>")
              .append(f)
              .prependTo(T),
            this.bindControl(
              new r(
                f,
                this._linetool.properties().reverse,
                !0,
                this.model(),
                "Change Gann Box Reverse"
              )
            )),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  788: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10).ColorBinding;
    inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i;
        (this._table = $(document.createElement("table"))),
          this._table.addClass("property-page"),
          this._table.attr("cellspacing", "0"),
          this._table.attr("cellpadding", "2"),
          (e = this.createColorPicker()),
          (t = $.t("Color") + ":"),
          (o = this.addLabeledRow(this._table, t)),
          $("<td>")
            .append(e)
            .appendTo(o),
          (i = this._linetool.properties()),
          (this._div = $("<div>").append(this._table)),
          this.bindControl(
            new a(e, i.color, !0, this.model(), "Change Icon Color")
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._div;
      }),
      (e.exports = i);
  },
  789: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      a.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(1).Point,
      a = o(14),
      r = o(10),
      l = r.ColorBinding,
      p = r.SimpleComboBinder,
      s = r.SimpleStringBinder,
      d = r.BooleanBinder,
      h = o(97);
    inherit(i, a),
      (i.prototype.prepareLayout = function() {
        var e,
          t,
          o,
          i,
          n = this.createColorPicker(),
          a = this.createFontSizeEditor(),
          r = this.createFontEditor(),
          h = this.createTextEditor(350, 200),
          c = this.createColorPicker(),
          b = this.createColorPicker(),
          u = $(
            '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>'
          ),
          C = $(
            '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>'
          );
        this.bindControl(
          new l(
            n,
            this._linetool.properties().textColor,
            !0,
            this.model(),
            "Change Text Color"
          )
        ),
          this.bindControl(
            new p(
              a,
              this._linetool.properties().fontSize,
              parseInt,
              !0,
              this.model(),
              "Change Text Font Size"
            )
          ),
          this.bindControl(
            new p(
              r,
              this._linetool.properties().font,
              null,
              !0,
              this.model(),
              "Change Text Font"
            )
          ),
          this.bindControl(
            new s(
              h,
              this._linetool.properties().text,
              null,
              !0,
              this.model(),
              "Change Text"
            )
          ),
          this.bindControl(
            new l(
              c,
              this._linetool.properties().markerColor,
              !0,
              this.model(),
              "Change Marker and Border Color"
            )
          ),
          this.bindControl(
            new l(
              b,
              this._linetool.properties().backgroundColor,
              !0,
              this.model(),
              "Change Background Color",
              this._linetool.properties().backgroundTransparency
            )
          ),
          this.bindControl(
            new d(
              u,
              this._linetool.properties().bold,
              !0,
              this.model(),
              "Change Text Font Bold"
            )
          ),
          this.bindControl(
            new d(
              C,
              this._linetool.properties().italic,
              !0,
              this.model(),
              "Change Text Font Italic"
            )
          ),
          (e = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">'
          )),
          (t = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">'
          )),
          (o = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">'
          )),
          (this._table = e.add(o).add(t)),
          $(document.createElement("tr"))
            .append(
              $(document.createElement("td"))
                .attr({ width: 1 })
                .append(n)
            )
            .append(
              $(document.createElement("td"))
                .attr({ width: 1 })
                .append(r)
            )
            .append(
              $(document.createElement("td"))
                .attr({ width: 1 })
                .append(a)
            )
            .append(
              $(document.createElement("td"))
                .attr({ width: 1 })
                .append(u)
            )
            .append($(document.createElement("td")).append(C))
            .appendTo(e),
          $(document.createElement("tr"))
            .append(
              $(document.createElement("td"))
                .attr({ colspan: 5 })
                .append(h)
            )
            .appendTo(e),
          (i = this.addLabeledRow(o, $.t("Label"))),
          $("<td>")
            .attr("colspan", 2)
            .append(c)
            .appendTo(i),
          (i = this.addLabeledRow(o, $.t("Background"))),
          $("<td>")
            .append(b)
            .appendTo(i),
          this.loadData(),
          setTimeout(function() {
            h.select(), h.focus();
          }, 20);
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (i.prototype.dialogPosition = function(e, t) {
        var o, i, a, r, l, p, s, d, c, b;
        if (e && t) {
          for (
            o = 0,
              i = this._linetool._model.paneForSource(this._linetool),
              a = h.getChartWidget();
            o < a.paneWidgets().length;
            o++
          )
            if (a.paneWidgets()[o]._state === i) {
              r = $(a.paneWidgets()[o].canvas).offset().left;
              break;
            }
          return (
            (l = (this._linetool.paneViews() || [])[0]),
            (p = new n(0, 0)),
            l && (p = l._floatPoints[0] || this._linetool._fixedPoints[0] || p),
            (s = (r || 0) + p.x),
            (d = this._linetool.getTooltipWidth()),
            (c = s - d / 2),
            (b = t.outerWidth()),
            e.left < c && e.left + b + 10 > c
              ? ((e.left -= e.left + b + 10 - c), e)
              : e.left > c && e.left < c + d + 10
              ? ((e.left += c + d + 10 - e.left), e)
              : void 0
          );
        }
      }),
      (e.exports = i);
  },
  790: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.BooleanBinder,
      l = a.ColorBinding,
      p = a.SimpleComboBinder,
      s = a.SliderBinder,
      d = o(31).createLineStyleEditor,
      h = o(15).createLineWidthEditor;
    inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n, a, c, b, u, C, y, g, w, T, _, m, f;
        (this._table = $(document.createElement("table"))),
          this._table.addClass("property-page"),
          this._table.attr("cellspacing", "0"),
          this._table.attr("cellpadding", "2"),
          (e = $("<tbody>").appendTo(this._table)),
          (t = h()),
          (o = d()),
          (i = this.createColorPicker()),
          (n = $("<tr>").appendTo(e)),
          $("<td></td><td>" + $.t("Channel") + "</td>").appendTo(n),
          $("<td>")
            .append(i)
            .appendTo(n),
          $("<td>")
            .append(t)
            .appendTo(n),
          $("<td>")
            .append(o.render())
            .appendTo(n),
          (n = $("<tr>").appendTo(e)),
          (a = $("<td>").appendTo(n)),
          (c = $("<input type='checkbox' class='visibility-switch'>")),
          c.appendTo(a),
          this.createLabeledCell("Middle", c).appendTo(n),
          (b = h()),
          (u = d()),
          (C = this.createColorPicker()),
          $("<td>")
            .append(C)
            .appendTo(n),
          $("<td>")
            .append(b)
            .appendTo(n),
          $("<td>")
            .append(u.render())
            .appendTo(n),
          (n = $("<tr>").appendTo(e)),
          (y = $("<td>").appendTo(n)),
          (g = $("<input type='checkbox' class='visibility-switch'>")),
          g.appendTo(y),
          this.createLabeledCell("Background", g).appendTo(n),
          (w = this.createColorPicker()),
          $("<td>")
            .append(w)
            .appendTo(n),
          (T = $("<tbody>").appendTo(this._table)),
          (_ = this.addEditorRow(
            T,
            "Extend Left",
            $("<input type='checkbox'>"),
            2
          )),
          (m = this.addEditorRow(
            T,
            "Extend Right",
            $("<input type='checkbox'>"),
            2
          )),
          (f = this._linetool.properties()),
          this.bindControl(
            new r(
              g,
              f.fillBackground,
              !0,
              this.model(),
              "Change Parallel Channel Fill Background"
            )
          ),
          this.bindControl(
            new r(
              c,
              f.showMidline,
              !0,
              this.model(),
              "Change Parallel Channel Show Center Line"
            )
          ),
          this.bindControl(
            new r(
              _,
              f.extendLeft,
              !0,
              this.model(),
              "Change Parallel Channel Extending Left"
            )
          ),
          this.bindControl(
            new r(
              m,
              f.extendRight,
              !0,
              this.model(),
              "Change Parallel Channel Extending Right"
            )
          ),
          this.bindControl(
            new l(
              i,
              f.linecolor,
              !0,
              this.model(),
              "Change Parallel Channel Color"
            )
          ),
          this.bindControl(
            new p(
              o,
              f.linestyle,
              parseInt,
              !0,
              this.model(),
              "Change Parallel Channel Style"
            )
          ),
          this.bindControl(
            new s(
              t,
              f.linewidth,
              !0,
              this.model(),
              "Change Parallel Channel Width"
            )
          ),
          this.bindControl(
            new l(
              C,
              f.midlinecolor,
              !0,
              this.model(),
              "Change Parallel Channel Middle Color"
            )
          ),
          this.bindControl(
            new p(
              u,
              f.midlinestyle,
              parseInt,
              !0,
              this.model(),
              "Change Parallel Channel Middle Style"
            )
          ),
          this.bindControl(
            new s(
              b,
              f.midlinewidth,
              !0,
              this.model(),
              "Change Parallel Channel Middle Width"
            )
          ),
          this.bindControl(
            new l(
              w,
              f.backgroundColor,
              !0,
              this.model(),
              "Change Parallel Channel Back Color",
              f.transparency
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  791: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.BooleanBinder,
      l = a.FloatBinder,
      p = a.ColorBinding,
      s = a.SimpleComboBinder,
      d = a.SliderBinder,
      h = o(47).addColorPicker,
      c = o(31).createLineStyleEditor,
      b = o(15).createLineWidthEditor,
      u = o(65).createTransparencyEditor;
    inherit(i, n),
      (i.prototype.addLevelEditor = function(e, t, o) {
        var i,
          n,
          a,
          u,
          C,
          y,
          g,
          w,
          T,
          _,
          m = $("<tr>");
        m.appendTo(this._table),
          e
            ? ((i = $("<td>")),
              i.appendTo(m),
              (n = $("<input type='checkbox' class='visibility-switch'>")),
              n.appendTo(i),
              (a = $("<td>")),
              a.appendTo(m),
              (u = $("<input type='text'>")),
              u.appendTo(a),
              u.css("width", "70px"),
              this.bindControl(
                new r(
                  n,
                  t.visible,
                  !0,
                  this.model(),
                  "Change Pitchfork Line Visibility"
                )
              ),
              this.bindControl(
                new l(
                  u,
                  t.coeff,
                  !1,
                  this.model(),
                  "Change Pitchfork Line Coeff"
                )
              ))
            : $("<td colspan='2'>" + $.t("Median") + "</td>").appendTo(m),
          (C = $("<td class='colorpicker-cell'>")),
          C.appendTo(m),
          (y = h(C)),
          (g = $("<td>")),
          g.appendTo(m),
          (w = b()),
          w.appendTo(g),
          (T = $("<td>")),
          T.appendTo(m),
          (_ = c()),
          _.render().appendTo(T),
          this.bindControl(
            new p(y, t.color, !0, this.model(), "Change Pitchfork Line Color"),
            0
          ),
          this.bindControl(
            new s(
              _,
              t.linestyle,
              parseInt,
              !0,
              this.model(),
              "Change Pitchfan Line Style"
            )
          ),
          this.bindControl(
            new d(
              w,
              t.linewidth,
              !0,
              this.model(),
              "Change Pitchfan Line Width"
            )
          );
      }),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n;
        for (
          this._table = $(document.createElement("table")),
            this._table.addClass("property-page"),
            this._table.attr("cellspacing", "0"),
            this._table.attr("cellpadding", "2"),
            this.addLevelEditor(null, this._linetool.properties().median, !1),
            e = 0;
          e <= 8;
          e++
        )
          (t = "level" + e),
            this.addLevelEditor(
              $.t("Level {0}").format(e + 1),
              this._linetool.properties()[t],
              !1
            );
        this.addOneColorPropertyWidget(this._table),
          (o = $("<tr>")),
          o.appendTo(this._table),
          (i = $("<input type='checkbox' class='visibility-switch'>")),
          $("<td>")
            .append(i)
            .appendTo(o),
          this.createLabeledCell($.t("Background"), i).appendTo(o),
          (n = u()),
          $('<td colspan="3">')
            .append(n)
            .appendTo(o),
          this.bindControl(
            new r(
              i,
              this._linetool.properties().fillBackground,
              !0,
              this.model(),
              "Change Pitchfan Background Visibility"
            )
          ),
          this.bindControl(
            new d(
              n,
              this._linetool.properties().transparency,
              !0,
              this.model(),
              "Change Pitchfan Background Transparency"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  792: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.BooleanBinder,
      l = a.FloatBinder,
      p = a.ColorBinding,
      s = a.SimpleComboBinder,
      d = a.SliderBinder,
      h = o(47).addColorPicker,
      c = o(31).createLineStyleEditor,
      b = o(15).createLineWidthEditor,
      u = o(65).createTransparencyEditor;
    inherit(i, n),
      (i.prototype.onResoreDefaults = function() {
        this._linetool
          .properties()
          .style.listeners()
          .fire(this._linetool.properties().style);
      }),
      (i.prototype.addLevelEditor = function(e, t, o) {
        var i,
          n,
          a,
          u,
          C,
          y,
          g,
          w,
          T,
          _,
          m = $("<tr>");
        m.appendTo(this._table),
          e
            ? ((i = $("<td>")),
              i.appendTo(m),
              (n = $("<input type='checkbox' class='visibility-switch'>")),
              n.appendTo(i),
              (a = $("<td>")),
              a.appendTo(m),
              (u = $("<input type='text'>")),
              u.appendTo(a),
              u.css("width", "70px"),
              this.bindControl(
                new r(
                  n,
                  t.visible,
                  !0,
                  this.model(),
                  "Change Pitchfork Line Visibility"
                )
              ),
              this.bindControl(
                new l(
                  u,
                  t.coeff,
                  !1,
                  this.model(),
                  "Change Pitchfork Line Coeff"
                )
              ))
            : ($("<td></td>").appendTo(m),
              $("<td>" + $.t("Median") + "</td>").appendTo(m)),
          (C = $("<td class='colorpicker-cell'>")),
          C.appendTo(m),
          (y = h(C)),
          (g = $("<td>")),
          g.appendTo(m),
          (w = b()),
          w.appendTo(g),
          (T = $("<td>")),
          T.appendTo(m),
          (_ = c()),
          _.render().appendTo(T),
          this.bindControl(
            new p(
              y,
              t.color,
              !0,
              this.model(),
              "Change Pitchfork Line Color",
              0
            )
          ),
          this.bindControl(
            new s(
              _,
              t.linestyle,
              parseInt,
              !0,
              this.model(),
              "Change Pitchfork Line Style"
            )
          ),
          this.bindControl(
            new d(
              w,
              t.linewidth,
              !0,
              this.model(),
              "Change Pitchfork Line Width"
            )
          );
      }),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n, a;
        for (
          this._table = $(document.createElement("table")),
            this._table.addClass("property-page"),
            this._table.attr("cellspacing", "0"),
            this._table.attr("cellpadding", "2"),
            this.addLevelEditor(null, this._linetool.properties().median, !1),
            e = 0;
          e <= 8;
          e++
        )
          (t = "level" + e),
            this.addLevelEditor(
              $.t("Level {0}").format(e + 1),
              this._linetool.properties()[t],
              !1
            );
        this.addOneColorPropertyWidget(this._table),
          (o = $("<tr>")),
          o.appendTo(this._table),
          (i = $("<input type='checkbox' class='visibility-switch'>")),
          $("<td>")
            .append(i)
            .appendTo(o),
          this.createLabeledCell("Background", i).appendTo(o),
          (n = u()),
          $('<td colspan="3">')
            .append(n)
            .appendTo(o),
          (a = $(
            "<select><option value='0'>" +
              $.t("Original") +
              "</option><option value='3'>" +
              $.t("Schiff") +
              "</option><option value='1'>" +
              $.t("Modified Schiff") +
              "</option><option value='2'>" +
              $.t("Inside") +
              "</option></select>"
          )),
          (o = $("<tr>")),
          o.appendTo(this._table),
          $("<td>" + $.t("Style") + "</td>").appendTo(o),
          $("<td>")
            .append(a)
            .appendTo(o),
          this.bindControl(
            new s(
              a,
              this._linetool.properties().style,
              parseInt,
              !0,
              this.model(),
              "Change Pitchfork Style"
            )
          ),
          this.bindControl(
            new r(
              i,
              this._linetool.properties().fillBackground,
              !0,
              this.model(),
              "Change Pitchfork Background Visibility"
            )
          ),
          this.bindControl(
            new d(
              n,
              this._linetool.properties().transparency,
              !0,
              this.model(),
              "Change Pitchfork Background Transparency"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  793: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.BooleanBinder,
      l = a.ColorBinding,
      p = a.SliderBinder,
      s = o(15).createLineWidthEditor;
    inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n;
        (this._table = $(document.createElement("table"))),
          this._table.addClass("property-page"),
          this._table.attr("cellspacing", "0"),
          this._table.attr("cellpadding", "2"),
          (e = s()),
          (t = this.createColorPicker()),
          (o = this.addLabeledRow(this._table, "Border")),
          o.prepend("<td>"),
          $("<td>")
            .append(t)
            .appendTo(o),
          $("<td>")
            .append(e)
            .appendTo(o),
          (i = $('<input type="checkbox" class="visibility-switch">')),
          (n = this.createColorPicker()),
          (o = this.addLabeledRow(this._table, "Background", i)),
          $("<td>")
            .append(i)
            .prependTo(o),
          $("<td>")
            .append(n)
            .appendTo(o),
          this.bindControl(
            new r(
              i,
              this._linetool.properties().fillBackground,
              !0,
              this.model(),
              "Change Polyline Filling"
            )
          ),
          this.bindControl(
            new l(
              t,
              this._linetool.properties().linecolor,
              !0,
              this.model(),
              "Change Polyline Line Color"
            )
          ),
          this.bindControl(
            new l(
              n,
              this._linetool.properties().backgroundColor,
              !0,
              this.model(),
              "Change Polyline Background Color",
              this._linetool.properties().transparency
            )
          ),
          this.bindControl(
            new p(
              e,
              this._linetool.properties().linewidth,
              !0,
              this.model(),
              "Change Polyline Border Width"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  794: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.ColorBinding,
      l = a.SliderBinder,
      p = o(15).createLineWidthEditor;
    inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e,
          t,
          o,
          i,
          n,
          a,
          s,
          d,
          h,
          c,
          b,
          u,
          C,
          y,
          g,
          w,
          T,
          _,
          m = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">'
          ),
          f = $(
            '<table class="property-page property-page-unpadded" cellspacing="0" cellpadding="0">'
          ).css({ width: "100%" }),
          L = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">'
          );
        (this._table = m.add(f).add(L)),
          (e = this.createColorPicker()),
          (t = p()),
          (o = this.addLabeledRow(m, "Line")),
          $("<td>")
            .append(e)
            .appendTo(o),
          $("<td>")
            .append(t)
            .appendTo(o),
          (i = $("<tr>").appendTo(f)),
          (n = $("<td>")
            .appendTo(i)
            .css({ "vertical-align": "top", width: "50%" })),
          (a = $("<td>")
            .appendTo(i)
            .css({ "vertical-align": "top", width: "50%" })),
          (s = $(
            '<table class="property-page" cellspacing="0" cellpadding="0">'
          ).appendTo(n)),
          (d = $(
            '<table class="property-page" cellspacing="0" cellpadding="0">'
          ).appendTo(a)),
          (h = this.addColorPickerRow(s, $.t("Source back color"))),
          (c = this.addColorPickerRow(s, $.t("Source text color"))),
          (b = this.addColorPickerRow(s, $.t("Source border color"))),
          (u = this.addColorPickerRow(s, $.t("Success back color"))),
          (C = this.addColorPickerRow(s, $.t("Success text color"))),
          (y = this.addColorPickerRow(d, $.t("Target back color"))),
          (g = this.addColorPickerRow(d, $.t("Target text color"))),
          (w = this.addColorPickerRow(d, $.t("Target border color"))),
          (T = this.addColorPickerRow(d, $.t("Failure back color"))),
          (_ = this.addColorPickerRow(d, $.t("Failure text color"))),
          this.bindControl(
            new r(
              e,
              this._linetool.properties().linecolor,
              !0,
              this.model(),
              "Forecast Line Color"
            )
          ),
          this.bindControl(
            new l(
              t,
              this._linetool.properties().linewidth,
              !0,
              this.model(),
              "Forecast Line Width"
            )
          ),
          this.bindControl(
            new r(
              e,
              this._linetool.properties().linecolor,
              !0,
              this.model(),
              "Forecast Line Color"
            )
          ),
          this.bindControl(
            new l(
              t,
              this._linetool.properties().linewidth,
              !0,
              this.model(),
              "Forecast Line Width"
            )
          ),
          this.bindControl(
            new r(
              h,
              this._linetool.properties().sourceBackColor,
              !0,
              this.model(),
              "Forecast Source Background Color",
              this._linetool.properties().transparency
            )
          ),
          this.bindControl(
            new r(
              b,
              this._linetool.properties().sourceStrokeColor,
              !0,
              this.model(),
              "Forecast Source Border Color"
            )
          ),
          this.bindControl(
            new r(
              c,
              this._linetool.properties().sourceTextColor,
              !0,
              this.model(),
              "Forecast Source Text Color"
            )
          ),
          this.bindControl(
            new r(
              y,
              this._linetool.properties().targetBackColor,
              !0,
              this.model(),
              "Forecast Target Background Color"
            )
          ),
          this.bindControl(
            new r(
              w,
              this._linetool.properties().targetStrokeColor,
              !0,
              this.model(),
              "Forecast Target Border Color"
            )
          ),
          this.bindControl(
            new r(
              g,
              this._linetool.properties().targetTextColor,
              !0,
              this.model(),
              "Forecast Target Text Color"
            )
          ),
          this.bindControl(
            new r(
              u,
              this._linetool.properties().successBackground,
              !0,
              this.model(),
              "Forecast Success Back Color"
            )
          ),
          this.bindControl(
            new r(
              C,
              this._linetool.properties().successTextColor,
              !0,
              this.model(),
              "Forecast Success Text Color"
            )
          ),
          this.bindControl(
            new r(
              T,
              this._linetool.properties().failureBackground,
              !0,
              this.model(),
              "Forecast Failure Back Color"
            )
          ),
          this.bindControl(
            new r(
              _,
              this._linetool.properties().failureTextColor,
              !0,
              this.model(),
              "Forecast Failure Text Color"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  795: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.SimpleComboBinder,
      l = a.ColorBinding;
    inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n;
        (this._table = $(document.createElement("table"))),
          this._table.addClass("property-page"),
          this._table.attr("cellspacing", "0"),
          this._table.attr("cellpadding", "2"),
          (e = this.createColorPicker()),
          (t = this.createFontSizeEditor()),
          (o = this.createColorPicker()),
          (i = this.createColorPicker()),
          (n = this.addLabeledRow(this._table, $.t("Text"))),
          $("<td>")
            .append(e)
            .appendTo(n),
          $("<td>")
            .append(t)
            .appendTo(n),
          (n = this.addLabeledRow(this._table, $.t("Background"))),
          $("<td>")
            .append(o)
            .appendTo(n),
          (n = this.addLabeledRow(this._table, $.t("Border"))),
          $("<td>")
            .append(i)
            .appendTo(n),
          this.bindControl(
            new l(
              e,
              this._linetool.properties().color,
              !0,
              this.model(),
              "Change Price Text Color"
            )
          ),
          this.bindControl(
            new r(
              t,
              this._linetool.properties().fontsize,
              parseInt,
              !0,
              this.model(),
              "Change Price Text Font Size"
            )
          ),
          this.bindControl(
            new l(
              o,
              this._linetool.properties().backgroundColor,
              !0,
              this.model(),
              "Change Background Color",
              this._linetool.properties().transparency
            )
          ),
          this.bindControl(
            new l(
              i,
              this._linetool.properties().borderColor,
              !0,
              this.model(),
              "Change Border Color"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  796: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.SliderBinder,
      l = a.ColorBinding,
      p = o(15).createLineWidthEditor;
    inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n;
        (this._table = $(document.createElement("table"))),
          this._table.addClass("property-page"),
          this._table.attr("cellspacing", "0"),
          this._table.attr("cellpadding", "2"),
          (e = this.createColorPicker()),
          (t = this.createColorPicker()),
          (o = this.addLabeledRow(this._table, "Background")),
          $("<td>")
            .append(e)
            .appendTo(o),
          $("<td>")
            .append(t)
            .appendTo(o),
          (i = p()),
          (n = this.createColorPicker()),
          (o = this.addLabeledRow(this._table, "Border")),
          $("<td>")
            .append(n)
            .appendTo(o),
          $("<td>").appendTo(o),
          $("<td>")
            .append(i)
            .appendTo(o),
          this.bindControl(
            new l(
              n,
              this._linetool.properties().trendline.color,
              !0,
              this.model(),
              "Change Projection Line Color"
            )
          ),
          this.bindControl(
            new l(
              e,
              this._linetool.properties().color1,
              !0,
              this.model(),
              "Change Projection Background Color",
              this._linetool.properties().transparency
            )
          ),
          this.bindControl(
            new l(
              t,
              this._linetool.properties().color2,
              !0,
              this.model(),
              "Change Projection Background Color",
              this._linetool.properties().transparency
            )
          ),
          this.bindControl(
            new r(
              i,
              this._linetool.properties().linewidth,
              !0,
              this.model(),
              "Change Projection Border Width"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  798: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.ColorBinding,
      l = a.BooleanBinder,
      p = a.SliderBinder,
      s = o(15).createLineWidthEditor;
    inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n;
        (this._table = $(document.createElement("table"))),
          this._table.addClass("property-page"),
          this._table.attr("cellspacing", "0"),
          this._table.attr("cellpadding", "2"),
          (e = s()),
          (t = this.createColorPicker()),
          (o = this.addLabeledRow(this._table, "Border")),
          o.prepend("<td>"),
          $("<td>")
            .append(t)
            .appendTo(o),
          $("<td>")
            .append(e)
            .appendTo(o),
          (i = $('<input type="checkbox" class="visibility-switch">')),
          (n = this.createColorPicker()),
          (o = this.addLabeledRow(this._table, "Background", i)),
          $("<td>")
            .append(i)
            .prependTo(o),
          $("<td>")
            .append(n)
            .appendTo(o),
          this.bindControl(
            new l(
              i,
              this._linetool.properties().fillBackground,
              !0,
              this.model(),
              "Change Rectangle Filling"
            )
          ),
          this.bindControl(
            new r(
              t,
              this._linetool.properties().color,
              !0,
              this.model(),
              "Change Rectangle Line Color"
            )
          ),
          this.bindControl(
            new r(
              n,
              this._linetool.properties().backgroundColor,
              !0,
              this.model(),
              "Change Rectangle Background Color",
              this._linetool.properties().transparency
            )
          ),
          this.bindControl(
            new p(
              e,
              this._linetool.properties().linewidth,
              !0,
              this.model(),
              "Change Rectangle Border Width"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  799: function(e, t, o) {
    "use strict";
    function i(e, t) {
      (this._chartWidget = e), (this._undoModel = t);
    }
    function n(e, t, o) {
      a.call(this, e, t, o), this.prepareLayout();
    }
    var a = o(14),
      r = o(10),
      l = r.SimpleStringBinder,
      p = r.SimpleComboBinder,
      s = r.ColorBinding,
      d = r.BooleanBinder;
    (i.prototype.attachSource = function(e, t) {
      (this._source = e),
        (this._edit = $("<textarea>")),
        this._edit.css("width", "300"),
        this._edit.css("height", "150"),
        this._edit.appendTo(this._chartWidget._jqMainDiv),
        this._edit.css("position", "absolute"),
        this._edit.css("left", t.x + "px"),
        this._edit.css("top", t.y + "px"),
        this._edit.val(e.properties().text.value()),
        this._edit.focus();
      var o = this._edit;
      return (
        o.select(),
        (this._binding = new l(
          o,
          e.properties().text,
          null,
          !0,
          this._undoModel,
          "change line tool text"
        )),
        this._edit.focusout(function() {
          e.properties().text.setValue(o.val());
        }),
        this._edit.mousedown(function(e) {
          return !0;
        }),
        o
      );
    }),
      inherit(n, a),
      (n.prototype.prepareLayout = function() {
        var e,
          t,
          o,
          i,
          n = this.createColorPicker(),
          a = this.createColorPicker(),
          r = this.createFontSizeEditor(),
          h = this.createFontEditor(),
          c = this.createTextEditor(350, 200),
          b = this.createColorPicker(),
          u = $('<input type="checkbox" class="visibility-switch">'),
          C = $('<input type="checkbox" class="visibility-switch">'),
          y = $('<input type="checkbox">'),
          g = $(
            '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>'
          ),
          w = $(
            '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>'
          );
        this.bindControl(
          new s(
            n,
            this._linetool.properties().color,
            !0,
            this.model(),
            "Change Text Color"
          )
        ),
          this.bindControl(
            new p(
              r,
              this._linetool.properties().fontsize,
              parseInt,
              !0,
              this.model(),
              "Change Text Font Size"
            )
          ),
          this.bindControl(
            new p(
              h,
              this._linetool.properties().font,
              null,
              !0,
              this.model(),
              "Change Text Font"
            )
          ),
          this.bindControl(
            new l(
              c,
              this._linetool.properties().text,
              null,
              !0,
              this.model(),
              "Change Text"
            )
          ),
          this.bindControl(
            new s(
              b,
              this._linetool.properties().backgroundColor,
              !0,
              this.model(),
              "Change Text Background",
              this._linetool.properties().backgroundTransparency
            )
          ),
          this.bindControl(
            new d(
              u,
              this._linetool.properties().fillBackground,
              !0,
              this.model(),
              "Change Text Background Fill"
            )
          ),
          this.bindControl(
            new d(
              C,
              this._linetool.properties().drawBorder,
              !0,
              this.model(),
              "Change Text Border"
            )
          ),
          this.bindControl(
            new s(
              a,
              this._linetool.properties().borderColor,
              !0,
              this.model(),
              "Change Text Border Color"
            )
          ),
          this.bindControl(
            new d(
              y,
              this._linetool.properties().wordWrap,
              !0,
              this.model(),
              "Change Text Wrap"
            )
          ),
          this.bindControl(
            new d(
              g,
              this._linetool.properties().bold,
              !0,
              this.model(),
              "Change Text Font Bold"
            )
          ),
          this.bindControl(
            new d(
              w,
              this._linetool.properties().italic,
              !0,
              this.model(),
              "Change Text Font Italic"
            )
          ),
          (e = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">'
          )),
          (t = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">'
          )),
          (o = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">'
          )),
          (this._table = e.add(o).add(t)),
          $(document.createElement("tr"))
            .append(
              $(document.createElement("td"))
                .attr({ width: 1 })
                .append(n)
            )
            .append(
              $(document.createElement("td"))
                .attr({ width: 1 })
                .append(h)
            )
            .append(
              $(document.createElement("td"))
                .attr({ width: 1 })
                .append(r)
            )
            .append(
              $(document.createElement("td"))
                .attr({ width: 1 })
                .append(g)
            )
            .append($(document.createElement("td")).append(w))
            .appendTo(e),
          $(document.createElement("tr"))
            .append(
              $(document.createElement("td"))
                .attr({ colspan: 5 })
                .append(c)
            )
            .appendTo(e),
          (i = this.addLabeledRow(t, $.t("Text Wrap"), y)),
          $("<td>")
            .append(y)
            .prependTo(i),
          (i = this.addLabeledRow(o, $.t("Background"), u)),
          $("<td>")
            .append(u)
            .prependTo(i),
          $("<td>")
            .append(b)
            .appendTo(i),
          (i = this.addLabeledRow(o, $.t("Border"), C)),
          $("<td>")
            .append(C)
            .prependTo(i),
          $("<td>")
            .append(a)
            .appendTo(i),
          this.loadData(),
          setTimeout(function() {
            c.select(), c.focus();
          }, 20);
      }),
      (n.prototype.widget = function() {
        return this._table;
      }),
      (n.prototype.dialogPosition = function(e, t) {
        var o,
          i,
          n,
          a,
          r,
          l,
          p,
          s = 5,
          d = 0,
          h = this._linetool,
          c = h._model.paneForSource(h),
          b = this._model._chartWidget;
        return (
          $.each(b.paneWidgets(), function(e, t) {
            if (t._state === c) return (d = $(t.canvas).offset().top), !1;
          }),
          e || (e = {}),
          (i = e.left),
          (n = e.top),
          (a = (this._linetool.paneViews() || [])[0]),
          a && (o = a._floatPoints[0]),
          o && ((i = o.x), (n = o.y + d)),
          (r = $(t).outerHeight()),
          (l = $(window).height()),
          (p = h.properties().fontsize.value()),
          (n = n + r + p + s <= l ? n + p + s : n - r - s),
          { top: n, left: i }
        );
      }),
      (e.exports = n);
  },
  800: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.SimpleComboBinder,
      l = a.ColorBinding,
      p = a.SliderBinder,
      s = a.BooleanBinder,
      d = o(31).createLineStyleEditor,
      h = o(15).createLineWidthEditor;
    inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n, a, c, b;
        (this._table = $(
          '<table class="property-page" cellspacing="0" cellpadding="2">'
        )),
          (e = $("<tbody>").appendTo(this._table)),
          (t = h()),
          (o = d()),
          (i = this.createColorPicker()),
          (n = this.addLabeledRow(e, $.t("Line"))),
          $("<td>")
            .append(i)
            .appendTo(n),
          $("<td>")
            .append(t)
            .appendTo(n),
          $('<td colspan="3">')
            .append(o.render())
            .appendTo(n),
          this._linetool.properties().fillBackground &&
            ($("<td>").prependTo(n),
            (a = $('<input type="checkbox" class="visibility-switch">')),
            (c = this.createColorPicker()),
            (b = $("<tbody>").appendTo(this._table)),
            (n = $("<tr>").appendTo(b)),
            $("<td>")
              .append(a)
              .appendTo(n),
            $("<td>")
              .append($.t("Background"))
              .appendTo(n),
            $("<td>")
              .append(c)
              .appendTo(n)),
          this.bindControl(
            new l(
              i,
              this._linetool.properties().linecolor,
              !0,
              this.model(),
              "Change Time Cycles Color"
            )
          ),
          this.bindControl(
            new r(
              o,
              this._linetool.properties().linestyle,
              parseInt,
              !0,
              this.model(),
              "Change Time Cycles Line Style"
            )
          ),
          this.bindControl(
            new p(
              t,
              this._linetool.properties().linewidth,
              !0,
              this.model(),
              "Change Time Cycles Line Width"
            )
          ),
          a &&
            (this.bindControl(
              new s(
                a,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                "Change Time Cycles Filling"
              )
            ),
            this.bindControl(
              new l(
                c,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                "Change Time Cycles Background Color",
                this._linetool.properties().transparency
              )
            ));
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  801: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.SimpleComboBinder,
      l = a.ColorBinding,
      p = a.BooleanBinder,
      s = a.SliderBinder,
      d = o(31).createLineStyleEditor,
      h = o(15).createLineWidthEditor;
    inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n, a, c, b, u, C, y, g, w, T, _, m, f, L, v, k;
        (this._table = $(
          '<table class="property-page" cellspacing="0" cellpadding="2">'
        )),
          (e = $("<tbody>").appendTo(this._table)),
          (t = h()),
          (o = d()),
          (i = this.createColorPicker()),
          (n = this.addLabeledRow(e, $.t("Line"))),
          $("<td>")
            .append(i)
            .appendTo(n),
          $("<td>")
            .append(t)
            .appendTo(n),
          $('<td colspan="3">')
            .append(o.render())
            .appendTo(n),
          (a = $("<tbody>").appendTo(this._table)),
          (c = $("<label>" + $.t("Extend") + " </label>").css({
            "margin-left": "8px"
          })),
          (b = $('<input type="checkbox">').appendTo(c)),
          (u = $("<label>" + $.t("Extend") + " </label>").css({
            "margin-left": "8px"
          })),
          (C = $('<input type="checkbox">').appendTo(u)),
          (y = $(
            "<select><option value='0'>" +
              $.t("Normal") +
              "</option><option value='1'>" +
              $.t("Arrow") +
              "</option></select>"
          )),
          (g = $(
            "<select><option value='0'>" +
              $.t("Normal") +
              "</option><option value='1'>" +
              $.t("Arrow") +
              "</option></select>"
          )),
          (n = this.addLabeledRow(a, $.t("Left End"))),
          $('<td colspan="3">')
            .appendTo(n)
            .append(y)
            .append(c),
          (n = this.addLabeledRow(a, $.t("Right End"))),
          $('<td colspan="3">')
            .appendTo(n)
            .append(g)
            .append(u),
          (n = this.addLabeledRow(a, $.t("Stats Text Color"))),
          (w = this.createColorPicker()),
          $("<td>")
            .append(w)
            .appendTo(n),
          this.bindControl(
            new l(
              w,
              this._linetool.properties().textcolor,
              !0,
              this.model(),
              "Change Text Color"
            )
          ),
          (T = $('<input type="checkbox">')),
          (_ = $('<input type="checkbox">')),
          (m = $('<input type="checkbox">')),
          (f = $('<input type="checkbox">')),
          (L = $('<input type="checkbox">')),
          (v = $('<input type="checkbox">')),
          (k = $('<input type="checkbox">')),
          (n = this.addLabeledRow(a, $.t("Show Price Range"))),
          $('<td colspan="3">')
            .appendTo(n)
            .append(T),
          (n = this.addLabeledRow(a, $.t("Show Bars Range"))),
          $('<td colspan="3">')
            .appendTo(n)
            .append(_),
          (n = this.addLabeledRow(a, $.t("Show Date/Time Range"))),
          $('<td colspan="3">')
            .appendTo(n)
            .append(m),
          (n = this.addLabeledRow(a, $.t("Show Distance"))),
          $('<td colspan="3">')
            .appendTo(n)
            .append(f),
          (n = this.addLabeledRow(a, $.t("Show Angle"))),
          $('<td colspan="3">')
            .appendTo(n)
            .append(L),
          (n = this.addLabeledRow(a, $.t("Always Show Stats"))),
          $('<td colspan="3">')
            .appendTo(n)
            .append(v),
          (n = this.addLabeledRow(a, $.t("Show Middle Point"))),
          $('<td colspan="3">')
            .appendTo(n)
            .append(k),
          this.bindControl(
            new p(
              b,
              this._linetool.properties().extendLeft,
              !0,
              this.model(),
              "Change Trend Line Extending Left"
            )
          ),
          this.bindControl(
            new p(
              C,
              this._linetool.properties().extendRight,
              !0,
              this.model(),
              "Change Trend Line Extending Right"
            )
          ),
          this.bindControl(
            new l(
              i,
              this._linetool.properties().linecolor,
              !0,
              this.model(),
              "Change Trend Line Color"
            )
          ),
          this.bindControl(
            new r(
              o,
              this._linetool.properties().linestyle,
              parseInt,
              !0,
              this.model(),
              "Change Trend Line Style"
            )
          ),
          this.bindControl(
            new s(
              t,
              this._linetool.properties().linewidth,
              !0,
              this.model(),
              "Change Trend Line Width"
            )
          ),
          this.bindControl(
            new r(
              y,
              this._linetool.properties().leftEnd,
              parseInt,
              !0,
              this.model(),
              "Change Trend Line Left End"
            )
          ),
          this.bindControl(
            new r(
              g,
              this._linetool.properties().rightEnd,
              parseInt,
              !0,
              this.model(),
              "Change Trend Line Right End"
            )
          ),
          this.bindControl(
            new p(
              T,
              this._linetool.properties().showPriceRange,
              !0,
              this.model(),
              "Change Trend Line Show Price Range"
            )
          ),
          this.bindControl(
            new p(
              _,
              this._linetool.properties().showBarsRange,
              !0,
              this.model(),
              "Change Trend Line Show Bars Range"
            )
          ),
          this.bindControl(
            new p(
              m,
              this._linetool.properties().showDateTimeRange,
              !0,
              this.model(),
              "Change Trend Line Show Date/Time Range"
            )
          ),
          this.bindControl(
            new p(
              f,
              this._linetool.properties().showDistance,
              !0,
              this.model(),
              "Change Trend Line Show Distance"
            )
          ),
          this.bindControl(
            new p(
              L,
              this._linetool.properties().showAngle,
              !0,
              this.model(),
              "Change Trend Line Show Angle"
            )
          ),
          this.bindControl(
            new p(
              v,
              this._linetool.properties().alwaysShowStats,
              !0,
              this.model(),
              "Change Trend Line Always Show Stats"
            )
          ),
          this.bindControl(
            new p(
              k,
              this._linetool.properties().showMiddlePoint,
              !0,
              this.model(),
              "Change Trend Line Show Middle Point"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  802: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.BooleanBinder,
      l = a.ColorBinding,
      p = a.SliderBinder,
      s = a.SimpleComboBinder,
      d = o(15).createLineWidthEditor;
    inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n, a, h, c, b, u, C;
        (this._table = $(document.createElement("table"))),
          this._table.addClass("property-page"),
          this._table.attr("cellspacing", "0"),
          this._table.attr("cellpadding", "2"),
          (e = d()),
          (t = this.createColorPicker()),
          (o = this.createColorPicker()),
          (i = $(
            '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>'
          )),
          (n = $(
            '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>'
          )),
          (a = this.createFontSizeEditor()),
          (h = this.createFontEditor()),
          (c = this.addLabeledRow(this._table, "Border")),
          c.prepend("<td>"),
          $("<td>")
            .append(t)
            .appendTo(c),
          $("<td>")
            .append(e)
            .appendTo(c),
          (b = $('<input type="checkbox" class="visibility-switch">')),
          (u = this.createColorPicker()),
          (h = this.createFontEditor()),
          (c = this.addLabeledRow(this._table, "Background", b)),
          $("<td>")
            .append(b)
            .prependTo(c),
          $("<td>")
            .append(u)
            .appendTo(c),
          this.bindControl(
            new r(
              b,
              this._linetool.properties().fillBackground,
              !0,
              this.model(),
              "Change Pattern Filling"
            )
          ),
          this.bindControl(
            new l(
              t,
              this._linetool.properties().color,
              !0,
              this.model(),
              "Change Pattern Line Color"
            )
          ),
          this.bindControl(
            new l(
              o,
              this._linetool.properties().textcolor,
              !0,
              this.model(),
              "Change Pattern Text Color"
            )
          ),
          this.bindControl(
            new l(
              u,
              this._linetool.properties().backgroundColor,
              !0,
              this.model(),
              "Change Pattern Background Color",
              this._linetool.properties().transparency
            )
          ),
          this.bindControl(
            new p(
              e,
              this._linetool.properties().linewidth,
              !0,
              this.model(),
              "Change Pattern Border Width"
            )
          ),
          this.bindControl(
            new s(
              a,
              this._linetool.properties().fontsize,
              parseInt,
              !0,
              this.model(),
              "Change Text Font Size"
            )
          ),
          this.bindControl(
            new s(
              h,
              this._linetool.properties().font,
              null,
              !0,
              this.model(),
              "Change Text Font"
            )
          ),
          this.bindControl(
            new r(
              i,
              this._linetool.properties().bold,
              !0,
              this.model(),
              "Change Text Font Bold"
            )
          ),
          this.bindControl(
            new r(
              n,
              this._linetool.properties().italic,
              !0,
              this.model(),
              "Change Text Font Italic"
            )
          ),
          (C = $(
            '<table class="property-page" cellspacing="0" cellpadding="2"><tr>'
          )
            .append(
              $(document.createElement("td"))
                .attr({ width: 1 })
                .append(o)
            )
            .append(
              $(document.createElement("td"))
                .attr({ width: 1 })
                .append(h)
            )
            .append(
              $(document.createElement("td"))
                .attr({ width: 1 })
                .append(a)
            )
            .append(
              $(document.createElement("td"))
                .css("vertical-align", "top")
                .attr({ width: 1 })
                .append(i)
            )
            .append(
              $(document.createElement("td"))
                .css("vertical-align", "top")
                .append(n)
            )
            .append($("</tr></table>"))),
          (c = this.addLabeledRow(this._table, "")),
          $('<td colspan="5">')
            .append(C)
            .appendTo(c),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  803: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t, o), this.prepareLayout();
    }
    var n = o(14),
      a = o(10),
      r = a.BooleanBinder,
      l = a.ColorBinding,
      p = a.SliderBinder,
      s = o(15).createLineWidthEditor;
    inherit(i, n),
      (i.prototype.prepareLayout = function() {
        var e, t, o, i, n;
        (this._table = $(document.createElement("table"))),
          this._table.addClass("property-page"),
          this._table.attr("cellspacing", "0"),
          this._table.attr("cellpadding", "2"),
          (e = s()),
          (t = this.createColorPicker()),
          (o = this.addLabeledRow(this._table, $.t("Border"))),
          o.prepend("<td>"),
          $("<td>")
            .append(t)
            .appendTo(o),
          $("<td>")
            .append(e)
            .appendTo(o),
          (i = $('<input type="checkbox" class="visibility-switch">')),
          (n = this.createColorPicker()),
          (o = this.addLabeledRow(this._table, $.t("Background"), i)),
          $("<td>")
            .append(i)
            .prependTo(o),
          $("<td>")
            .append(n)
            .appendTo(o),
          this.bindControl(
            new r(
              i,
              this._linetool.properties().fillBackground,
              !0,
              this.model(),
              "Change Triangle Filling"
            )
          ),
          this.bindControl(
            new l(
              t,
              this._linetool.properties().color,
              !0,
              this.model(),
              "Change Triangle Line Color"
            )
          ),
          this.bindControl(
            new l(
              n,
              this._linetool.properties().backgroundColor,
              !0,
              this.model(),
              "Change Triangle Background Color",
              this._linetool.properties().transparency
            )
          ),
          this.bindControl(
            new p(
              e,
              this._linetool.properties().linewidth,
              !0,
              this.model(),
              "Change Triangle Border Width"
            )
          ),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  804: function(e, t, o) {
    (function(t) {
      "use strict";
      function i(e, t, o) {
        a.call(this, e, t), (this._linetool = o), this.prepareLayout();
      }
      var n = o(10),
        a = n.PropertyPage,
        r = n.BooleanBinder,
        l = n.RangeBinder;
      inherit(i, a),
        (i.prototype.prepareLayout = function() {
          var e, o, i, n, a, p, s, d, h, c, b, u;
          (this._block = $('<table class="property-page">')),
            (e = this._linetool.properties().intervalsVisibilities),
            t.enabled("seconds_resolution") &&
              ((o = $("<tr>").appendTo(this._block)),
              (i = $("<label>").append($.t("Seconds"))),
              (n = $("<input type='checkbox'>")
                .addClass("visibility-checker")
                .prependTo(i)),
              $("<td>")
                .css("padding-right", "15px")
                .append(i)
                .appendTo(o),
              (a = $("<input type='text'>").addClass("ticker-text")),
              $("<td>")
                .append(a)
                .appendTo(o),
              (p = $("<div>").addClass("slider-range ui-slider-horizontal")),
              $("<td>")
                .append(p)
                .appendTo(o),
              (s = $("<input type='text'>").addClass("ticker-text")),
              $("<td>")
                .append(s)
                .appendTo(o),
              this.bindControl(
                new r(
                  n,
                  e.seconds,
                  !0,
                  this.model(),
                  "Change Line Tool Visibility On Seconds"
                )
              ),
              this.bindControl(
                new l(
                  p,
                  [e.secondsFrom, e.secondsTo],
                  [1, 59],
                  !1,
                  this.model(),
                  [a, s],
                  [$.t("Change Seconds From"), $.t("Change Seconds To")],
                  n
                )
              )),
            (o = $("<tr>").appendTo(this._block)),
            (i = $("<label>").append($.t("Minutes"))),
            (d = $("<input type='checkbox'>")
              .addClass("visibility-checker")
              .prependTo(i)),
            $("<td>")
              .css("padding-right", "15px")
              .append(i)
              .appendTo(o),
            (a = $("<input type='text'>").addClass("ticker-text")),
            $("<td>")
              .append(a)
              .appendTo(o),
            (p = $("<div>").addClass("slider-range ui-slider-horizontal")),
            $("<td>")
              .append(p)
              .appendTo(o),
            (s = $("<input type='text'>").addClass("ticker-text")),
            $("<td>")
              .append(s)
              .appendTo(o),
            this.bindControl(
              new r(
                d,
                e.minutes,
                !0,
                this.model(),
                "Change Line Tool Visibility On Minutes"
              )
            ),
            this.bindControl(
              new l(
                p,
                [e.minutesFrom, e.minutesTo],
                [1, 59],
                !1,
                this.model(),
                [a, s],
                [$.t("Change Minutes From"), $.t("Change Minutes To")],
                d
              )
            ),
            (o = $("<tr>").appendTo(this._block)),
            (i = $("<label>").append($.t("Hours"))),
            (h = $("<input type='checkbox'>")
              .addClass("visibility-checker")
              .prependTo(i)),
            $("<td>")
              .append(i)
              .appendTo(o),
            (a = $("<input type='text'>").addClass("ticker-text")),
            $("<td>")
              .append(a)
              .appendTo(o),
            (p = $("<div>").addClass("slider-range ui-slider-horizontal")),
            $("<td>")
              .append(p)
              .appendTo(o),
            (s = $("<input type='text'>").addClass("ticker-text")),
            $("<td>")
              .append(s)
              .appendTo(o),
            this.bindControl(
              new r(
                h,
                e.hours,
                !0,
                this.model(),
                "Change Line Tool Visibility On Hours"
              )
            ),
            this.bindControl(
              new l(
                p,
                [e.hoursFrom, e.hoursTo],
                [1, 24],
                !1,
                this.model(),
                [a, s],
                [$.t("Change Minutes From"), $.t("Change Hours To")],
                h
              )
            ),
            (o = $("<tr>").appendTo(this._block)),
            (i = $("<label>").append($.t("Days"))),
            (c = $("<input type='checkbox'>")
              .addClass("visibility-checker")
              .prependTo(i)),
            $("<td>")
              .append(i)
              .appendTo(o),
            (a = $("<input type='text'>").addClass("ticker-text")),
            $("<td>")
              .append(a)
              .appendTo(o),
            (p = $("<div>").addClass("slider-range ui-slider-horizontal")),
            $("<td>")
              .append(p)
              .appendTo(o),
            (s = $("<input type='text'>").addClass("ticker-text")),
            $("<td>")
              .append(s)
              .appendTo(o),
            this.bindControl(
              new r(
                c,
                e.days,
                !0,
                this.model(),
                "Change Line Tool Visibility On Days"
              )
            ),
            this.bindControl(
              new l(
                p,
                [e.daysFrom, e.daysTo],
                [1, 366],
                !1,
                this.model(),
                [a, s],
                [$.t("Change Minutes From"), $.t("Change Days To")],
                c
              )
            ),
            (o = $("<tr>")
              .css("height", "29px")
              .appendTo(this._block)),
            (i = $("<label>").append($.t("Weeks"))),
            (b = $("<input type='checkbox'>").prependTo(i)),
            $("<td>")
              .append(i)
              .appendTo(o),
            this.bindControl(
              new r(
                b,
                e.weeks,
                !0,
                this.model(),
                "Change Line Tool Visibility On Weeks"
              )
            ),
            (o = $("<tr>")
              .css("height", "29px")
              .appendTo(this._block)),
            (i = $("<label>").append($.t("Months"))),
            (u = $("<input type='checkbox'>").prependTo(i)),
            $("<td>")
              .append(i)
              .appendTo(o),
            this.bindControl(
              new r(
                u,
                e.months,
                !0,
                this.model(),
                "Change Line Tool Visibility On Months"
              )
            ),
            this.loadData();
        }),
        (i.prototype.widget = function() {
          return this._block;
        }),
        (e.exports = i);
    }.call(t, o(8)));
  },
  814: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      n.call(this, e, t), (this._linetool = o), this.prepareLayout();
    }
    var n = o(10).PropertyPage,
      a = o(271).StudyInputsPropertyPage,
      r = o(81),
      l = o(45),
      p = o(121);
    inherit(i, r),
      (i.prototype.prepareLayout = function() {
        var e,
          t,
          o,
          i,
          n,
          r,
          s,
          d,
          h = $(
            '<table class="property-page" cellspacing="0" cellpadding="0">'
          ),
          c = $(
            '<table class="property-page" cellspacing="0" cellpadding="0">'
          ).data({
            "layout-tab": p.TabNames.inputs,
            "layout-tab-priority": p.TabPriority.Inputs
          });
        for (
          this._table = h.add(c), e = this._linetool.points(), t = 0;
          t < e.length;
          t++
        )
          (o = $("<tr>")),
            o.appendTo(h),
            (i = $("<td>")),
            i.html("Point " + (t + 1) + " Bar #"),
            i.appendTo(o),
            (n = $("<td>")),
            n.appendTo(o),
            (r = $("<input type='text'>")),
            r.appendTo(n),
            r.addClass("ticker"),
            (s = this._linetool.properties().points[t]),
            this.bindBarIndex(
              s.bar,
              r,
              this.model(),
              "Change " + this._linetool + " point bar index"
            );
        (d = l.findStudyMetaInfo(
          this._model.studiesMetaData(),
          this._linetool.studyId()
        )),
          a.prototype.prepareLayoutImpl.call(this, d, c);
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  816: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      r.call(this, e, t), (this._study = o), this.prepareLayout();
    }
    var n = o(406),
      a = o(10),
      r = a.PropertyPage,
      l = a.BooleanBinder,
      p = a.SimpleComboBinder,
      s = o(208).StudyStylesPropertyPage,
      d = o(71);
    inherit(i, r),
      inherit(i, n),
      (i.prototype._isJapaneseChartsAvailable = function() {
        return !1;
      }),
      (i.prototype.prepareLayout = function() {
        var e,
          t,
          o,
          i,
          n = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">'
          ),
          a = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">'
          ),
          r = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">'
          ),
          d = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">'
          ),
          h = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">'
          ),
          c = this._study.properties();
        this._prepareSeriesStyleLayout(n, a, r, c),
          (this._table = n
            .add(a)
            .add(r)
            .add(d)
            .add(h)),
          (e = $('<input type="checkbox">')),
          (t = this.addLabeledRow(d, "Price Line", e)),
          $("<td>")
            .append(e)
            .prependTo(t),
          this.bindControl(
            new l(
              e,
              c.showPriceLine,
              !0,
              this.model(),
              "Change Price Price Line"
            )
          ),
          (o = this.createSeriesMinTickEditor()),
          (i = $("<tr>")),
          i.appendTo(h),
          $("<td>" + $.t("Override Min Tick") + "</td>").appendTo(i),
          $("<td>")
            .append(o)
            .appendTo(i),
          this.bindControl(
            new p(o, c.minTick, null, !0, this.model(), "Change MinTick")
          ),
          s.prototype._putStudyDefaultStyles.call(this, h);
      }),
      (i.prototype.loadData = function() {
        this.superclass.prototype.loadData.call(this), this.switchStyle();
      }),
      (i.prototype.switchStyle = function() {
        switch (
          ($(this._barsTbody)
            .add(this._barsColorerTbody)
            .add(this._candlesTbody)
            .add(this._candlesColorerTbody)
            .add(this._hollowCandlesTbody)
            .add(this._lineTbody)
            .add(this._areaTbody)
            .add(this._baselineTbody)
            .css("display", "none"),
          this._study.properties().style.value())
        ) {
          case d.STYLE_BARS:
            this._barsTbody.css("display", "table-row-group"),
              this._barsColorerTbody.css("display", "table-row-group");
            break;
          case d.STYLE_CANDLES:
            this._candlesTbody.css("display", "table-row-group"),
              this._candlesColorerTbody.css("display", "table-row-group");
            break;
          case d.STYLE_HOLLOW_CANDLES:
            this._hollowCandlesTbody.css("display", "table-row-group");
            break;
          case d.STYLE_LINE:
            this._lineTbody.css("display", "table-row-group");
            break;
          case d.STYLE_AREA:
            this._areaTbody.css("display", "table-row-group");
            break;
          case d.STYLE_BASELINE:
            this._baselineTbody.css("display", "table-row-group");
        }
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  817: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      r.call(this, e, t), (this._study = o), this.prepareLayout();
    }
    var n = o(21).assert,
      a = o(10),
      r = a.PropertyPage,
      l = a.GreateTransformer,
      p = a.LessTransformer,
      s = a.ToIntTransformer,
      d = a.ToFloatTransformer,
      h = a.BooleanBinder,
      c = a.SimpleComboBinder,
      b = a.SimpleStringBinder,
      u = o(38).NumericFormatter;
    inherit(i, r),
      (i.prototype._getStrategyInputs = function() {
        for (
          var e, t = 0, o = this._study.metaInfo(), i = {};
          t < o.inputs.length;
          t++
        )
          (e = o.inputs[t]),
            "strategy_props" === e.groupId &&
              (n(
                void 0 !== e.internalID,
                "Strategy input id=" + e.id + " doesn't have an internalID"
              ),
              (i[e.internalID] = o.inputs[t]));
        return TradingView.clone(i);
      }),
      (i.prototype._setStdInput = function(e, t, o) {
        var i, n, a, r, C, y, g, w, T, _, m, f;
        if (e) {
          if (
            ((i = e.id),
            (n =
              "study_input-" +
              i +
              "-" +
              Date.now().toString(36) +
              "-" +
              Math.random().toString(36)),
            (a = $("<tr>").appendTo(this._$table)),
            (r = "Change " + t),
            (C = $(
              '<label for="' +
                n +
                '">' +
                $.t(t, { context: "input" }) +
                "</label>"
            )),
            "bool" === e.type)
          )
            (g = $('<td colspan="3">').appendTo(a)),
              (y = $('<input id="' + n + '" type="checkbox">').appendTo(g)),
              C.appendTo(g),
              !0 !== o &&
                this.bindControl(
                  new h(y, this._property.inputs[i], !0, this.model(), r)
                );
          else if (
            ($("<td>")
              .addClass("propertypage-name-label")
              .append(C)
              .appendTo(a),
            (w = $('<td colspan="2">').appendTo(a)),
            e.options)
          ) {
            for (
              y = $('<select id="' + n + '">').appendTo(w), T = 0;
              T < e.options.length;
              T++
            )
              (_ = e.options[T]),
                _ instanceof jQuery
                  ? _.appendTo(y)
                  : $('<option value="' + _ + '">' + _ + "</option>").appendTo(
                      y
                    );
            !0 !== o &&
              this.bindControl(
                new c(y, this._property.inputs[i], null, !0, this.model(), r)
              );
          } else
            (y = $('<input id="' + n + '" type="text">').appendTo(w)),
              !0 !== o &&
                (("integer" !== e.type && "float" !== e.type) ||
                  ((m = ["integer" === e.type ? s(e.defval) : d(e.defval)]),
                  (0 === e.min || e.min) && m.push(l(e.min)),
                  (0 === e.max || e.max) && m.push(p(e.max))),
                (f = new b(
                  y,
                  this._property.inputs[i],
                  m,
                  !1,
                  this.model(),
                  r
                )),
                "float" === e.type &&
                  f.addFormatter(function(e) {
                    return new u().format(e);
                  }),
                this.bindControl(f)),
              y.addClass("ticker");
          return y;
        }
      }),
      (i.prototype._setPyramidingInputs = function(e) {
        var t = e.pyramiding,
          o = this._property.inputs[t.id],
          i = this._setStdInput(
            { id: "pyramiding_switch", type: "bool" },
            $.t("Pyramiding"),
            !0
          ),
          a = this._setStdInput(e.pyramiding, $.t("Allow up to")),
          r = a.closest("tr");
        n(void 0 === this._onAllowUpToChanged),
          (this._onAllowUpToChanged = function(e) {
            e.value() > 0
              ? (i.prop("checked", !0),
                a.removeAttr("disabled"),
                r.removeClass("disabled"))
              : (i.prop("checked", !1),
                a.attr("disabled", "disabled"),
                r.addClass("disabled"));
          }),
          o.subscribe(null, this._onAllowUpToChanged),
          i.change(function() {
            var e = !i.prop("checked");
            o.setValue(e ? 0 : t.defval),
              e ? a.attr("disabled", "disabled") : a.removeAttr("disabled"),
              r.toggleClass("disabled", e);
          }),
          o.value() > 0
            ? i.prop("checked", !0)
            : (i.prop("checked", !1),
              a.attr("disabled", "disabled"),
              r.addClass("disabled")),
          r
            .children()
            .last()
            .removeAttr("colspan"),
          $("<td>")
            .text($.t("orders", { context: "up to ... orders" }))
            .appendTo(r);
      }),
      (i.prototype._setQtyInputs = function(e) {
        function t(e) {
          return (
            (e = +e),
            isNaN(e) || e < 0
              ? 0
              : ("percent_of_equity" !== a.val()
                  ? (e = parseInt(e))
                  : e > 100 && (e = 100),
                e)
          );
        }
        var o,
          i,
          n,
          a,
          r,
          l,
          p = this,
          s = e.default_qty_value,
          d = $.extend({}, e.default_qty_type),
          h = this._property.inputs[s.id],
          c = this._setStdInput(s, $.t("Order size"), !0),
          u = new b(c, h, t, !1, this.model(), "Change Order Size");
        this.bindControl(u),
          (o = c.closest("td")),
          o.removeAttr("colspan"),
          (i =
            (this._study.reportData() && this._study.reportData().currency) ||
            "USD"),
          (n = $('<option value="cash_per_order">' + i + "</option>")),
          (d.options = [
            $('<option value="fixed">' + $.t("Contracts") + "</option>"),
            n,
            $(
              '<option value="percent_of_equity">' +
                $.t("% of equity") +
                "</option>"
            )
          ]),
          (a = this._setStdInput(d, "type")),
          (r = a.closest("td")),
          (l = r.closest("tr")),
          r.removeAttr("colspan"),
          r.detach().insertAfter(o),
          l.remove(),
          this._study.watchedData.subscribe(function() {
            p.__updateComboCurrency(n, a, "cash_per_order");
          });
      }),
      (i.prototype.__updateComboCurrency = function(e, t, o, i) {
        var n,
          a =
            (this._study.reportData() && this._study.reportData().currency) ||
            "USD";
        i && (a += i),
          e.text(a),
          (n = t.closest("td")),
          n.find("a[href=#" + o + "]").text(a),
          e.prop("selected") && n.find(".sbSelector").text(a);
      }),
      (i.prototype._setFillLimitsInputs = function(e) {
        var t = this._setStdInput(
            e.backtest_fill_limits_assumption,
            $.t("Verify Price for Limit Orders")
          ),
          o = t.closest("td");
        o.removeAttr("colSpan"),
          $("<td>")
            .text($.t("ticks", { context: "slippage ... ticks" }))
            .insertAfter(o);
      }),
      (i.prototype._setSlippageInputs = function(e) {
        var t, o;
        void 0 !== e.slippage &&
          ((t = this._setStdInput(e.slippage, $.t("Slippage"))),
          (o = t.closest("td")),
          o.removeAttr("colSpan"),
          $("<td>")
            .text($.t("ticks", { context: "slippage ... ticks" }))
            .insertAfter(o));
      }),
      (i.prototype._setCommissionInputs = function(e) {
        function t(e) {
          return (
            (e = +e),
            isNaN(e) || e < 0
              ? 0
              : ("percent" !== c.val()
                  ? (e = parseFloat(e))
                  : e > 100 && (e = 100),
                e)
          );
        }
        var o, i, n, a, r, l, p, s, d, h, c, u, C;
        void 0 !== e.commission_value &&
          void 0 !== e.commission_type &&
          ((o = this),
          (i = e.commission_value),
          (n = $.extend({}, e.commission_type)),
          (a = this._property.inputs[i.id]),
          (r = this._setStdInput(i, $.t("Commission"), !0)),
          (l = new b(r, a, t, !1, this.model(), "Change Commission value")),
          this.bindControl(l),
          (p = r.closest("td")),
          p.removeAttr("colspan"),
          (s =
            (this._study.reportData() && this._study.reportData().currency) ||
            "USD"),
          (d = $(
            '<option value="cash_per_order">' +
              s +
              $.t(" per order") +
              "</option>"
          )),
          (h = $(
            '<option value="cash_per_contract">' +
              s +
              $.t(" per contract") +
              "</option>"
          )),
          (n.options = [
            $('<option value="percent">' + $.t("%") + "</option>"),
            d,
            h
          ]),
          (c = this._setStdInput(n, "type")),
          (u = c.closest("td")),
          (C = u.closest("tr")),
          u.removeAttr("colspan"),
          u.detach().insertAfter(p),
          C.remove(),
          this._study.watchedData.subscribe(function() {
            o.__updateComboCurrency(d, c, "cash_per_order", $.t(" per order")),
              o.__updateComboCurrency(
                h,
                c,
                "cash_per_contract",
                $.t(" per contract")
              );
          }));
      }),
      (i.prototype.prepareLayout = function() {
        this._$table = $(document.createElement("table"))
          .addClass("property-page strategy-properties")
          .attr("cellspacing", "0")
          .attr("cellpadding", "2");
        var e = this._getStrategyInputs();
        (e.initial_capital.min = 1),
          this._setStdInput(e.initial_capital, $.t("Initial capital")),
          Array.isArray(e.currency.options) &&
            "NONE" === e.currency.options[0] &&
            (e.currency.options[0] = $(
              '<option value="NONE">' + $.t("Default") + "</option>"
            )),
          this._setStdInput(e.currency, $.t("Base currency")),
          $('<tr class="spacer"><td colspan="3"></td></tr>').appendTo(
            this._$table
          ),
          this._setPyramidingInputs(e),
          $('<tr class="spacer"><td colspan="3"></td></tr>').appendTo(
            this._$table
          ),
          this._setQtyInputs(e),
          $('<tr class="spacer"><td colspan="3"></td></tr>').appendTo(
            this._$table
          ),
          this._setStdInput(
            e.calc_on_order_fills,
            $.t("Recalculate After Order filled")
          ),
          $('<tr class="spacer"><td colspan="3"></td></tr>').appendTo(
            this._$table
          ),
          this._setStdInput(
            e.calc_on_every_tick,
            $.t("Recalculate On Every Tick")
          ),
          $('<tr class="spacer"><td colspan="3"></td></tr>').appendTo(
            this._$table
          ),
          this._setFillLimitsInputs(e),
          $('<tr class="spacer"><td colspan="3"></td></tr>').appendTo(
            this._$table
          ),
          this._setSlippageInputs(e),
          $('<tr class="spacer"><td colspan="3"></td></tr>').appendTo(
            this._$table
          ),
          this._setCommissionInputs(e),
          this.loadData();
      }),
      (i.prototype.widget = function() {
        return this._$table;
      }),
      (i.prototype.loadData = function() {
        var e, t, o;
        r.prototype.loadData.call(this),
          (e = this._getStrategyInputs()),
          (t = e.pyramiding),
          (o = this._property.inputs[t.id]),
          o.setValue(o.value(), !0);
      }),
      (i.prototype.destroy = function() {
        var e, t, o;
        r.prototype.destroy.call(this),
          (e = this._getStrategyInputs()),
          (t = e.pyramiding),
          (o = this._property.inputs[t.id]),
          o.unsubscribe(null, this._onAllowUpToChanged);
      }),
      (e.exports = i);
  },
  823: function(e, t, o) {
    "use strict";
    function i(e, t, o) {
      a.call(this, e, t), (this._study = o), this.prepareLayout();
    }
    var n = o(10),
      a = n.PropertyPage,
      r = n.BooleanBinder,
      l = n.SimpleComboBinder,
      p = n.SliderBinder,
      s = n.ColorBinding,
      d = o(15).createLineWidthEditor,
      h = o(475).createPlotEditor;
    inherit(i, a),
      (i.prototype.prepareLayout = function() {
        var e,
          t,
          i,
          n,
          a,
          c,
          b,
          u,
          C,
          y,
          g,
          w,
          T,
          _,
          m = this._study.properties();
        (this._table = $(
          '<table class="property-page" cellspacing="0" cellpadding="2">'
        )),
          (e = this.addLabeledRow(this._table, "Volume")),
          (t = h()),
          $("<td>")
            .append(t)
            .appendTo(e),
          this.bindControl(
            new l(
              t,
              m.styles.vol.plottype,
              parseInt,
              !0,
              this.model(),
              "Change Volume Plot Style"
            )
          ),
          (i =
            this._study.metaInfo().version <= 46 && "transparency" in m
              ? m.transparency
              : m.styles.vol.transparency),
          (n = this.createColorPicker()),
          $("<td>")
            .append(n)
            .appendTo(e),
          this.bindControl(
            new s(
              n,
              m.palettes.volumePalette.colors[0].color,
              !0,
              this.model(),
              "Change Up Volume color",
              i
            )
          ),
          (a = this.createColorPicker()),
          $("<td>")
            .append(a)
            .appendTo(e),
          this.bindControl(
            new s(
              a,
              m.palettes.volumePalette.colors[1].color,
              !0,
              this.model(),
              "Change Down Volume color",
              i
            )
          ),
          (c = $("<input type='checkbox'>")),
          $("<td>").appendTo(e),
          $("<td>")
            .append(c)
            .appendTo(e),
          $("<td>" + $.t("Price Line") + "</td>").appendTo(e),
          this.bindControl(
            new r(
              c,
              m.styles.vol.trackPrice,
              !0,
              this.model(),
              "Change Price Line"
            )
          ),
          (b = m.styles.vol_ma),
          (u = this.addLabeledRow(this._table, "Volume MA")),
          (C = h()),
          $("<td>")
            .append(C)
            .appendTo(u),
          this.bindControl(
            new l(
              C,
              b.plottype,
              parseInt,
              !0,
              this.model(),
              "Change Volume MA Plot Style"
            )
          ),
          $("<td>")
            .html("&nbsp;")
            .appendTo(u),
          (y = this.createColorPicker()),
          $("<td>")
            .append(y)
            .appendTo(u),
          this.bindControl(
            new s(
              y,
              b.color,
              !0,
              this.model(),
              "Change Volume MA color",
              b.transparency
            )
          ),
          (g = d()),
          $("<td>")
            .append(g)
            .appendTo(u),
          this.bindControl(
            new p(
              g,
              b.linewidth,
              !0,
              this.model(),
              "Change Volume MA Line Width"
            )
          ),
          (c = $("<input type='checkbox'>")),
          $("<td>")
            .append(c)
            .appendTo(u),
          $("<td>" + $.t("Price Line") + "</td>").appendTo(u),
          this.bindControl(
            new r(c, b.trackPrice, !0, this.model(), "Change Price Line")
          ),
          (w = this.createPrecisionEditor()),
          (T = $("<tr>")),
          T.appendTo(this._table),
          $("<td>" + $.t("Precision") + "</td>").appendTo(T),
          $("<td>")
            .append(w)
            .appendTo(T),
          this.bindControl(
            new l(
              w,
              this._study.properties().precision,
              null,
              !0,
              this.model(),
              "Change Volume Precision"
            )
          ),
          (_ = o(208).StudyStylesPropertyPage),
          _.prototype._putStudyDefaultStyles.call(this, this._table, 8);
      }),
      (i.prototype.widget = function() {
        return this._table;
      }),
      (e.exports = i);
  },
  1122: function(e, t, o) {
    "use strict";
    function i() {
      var e = $("<select />");
      return (
        $(
          '<option value="' +
            n.HHISTDIR_LEFTTORIGHT +
            '">' +
            $.t("Left") +
            "</option>"
        ).appendTo(e),
        $(
          '<option value="' +
            n.HHISTDIR_RIGHTTOLEFT +
            '">' +
            $.t("Right") +
            "</option>"
        ).appendTo(e),
        e
      );
    }
    Object.defineProperty(t, "__esModule", { value: !0 }), o(22), o(23);
    var n = o(115);
    t.createHHistDirectionEditor = i;
  },
  1123: function(e, t, o) {
    "use strict";
    function i() {
      var e = $("<select>");
      return (
        $('<option value="open">' + $.t("Open") + "</option>").appendTo(e),
        $('<option value="high">' + $.t("High") + "</option>").appendTo(e),
        $('<option value="low">' + $.t("Low") + "</option>").appendTo(e),
        $('<option value="close">' + $.t("Close") + "</option>").appendTo(e),
        $('<option value="hl2">' + $.t("(H + L)/2") + "</option>").appendTo(e),
        $(
          '<option value="hlc3">' + $.t("(H + L + C)/3") + "</option>"
        ).appendTo(e),
        $(
          '<option value="ohlc4">' + $.t("(O + H + L + C)/4") + "</option>"
        ).appendTo(e),
        e
      );
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      o(22),
      o(23),
      (t.createPriceSourceEditor = i);
  },
  1124: function(e, t, o) {
    "use strict";
    function i() {
      return $(
        '<select><option value="' +
          n.MARKLOC_ABOVEBAR +
          '">' +
          $.t("Above Bar") +
          '</option><option value="' +
          n.MARKLOC_BELOWBAR +
          '">' +
          $.t("Below Bar") +
          '</option><option value="' +
          n.MARKLOC_TOP +
          '">' +
          $.t("Top") +
          '</option><option value="' +
          n.MARKLOC_BOTTOM +
          '">' +
          $.t("Bottom") +
          '</option><option value="' +
          n.MARKLOC_ABSOLUTE +
          '">' +
          $.t("Absolute") +
          "</option></select>"
      );
    }
    Object.defineProperty(t, "__esModule", { value: !0 }), o(22), o(23);
    var n = o(115);
    t.createShapeLocationEditor = i;
  },
  1125: function(e, t, o) {
    "use strict";
    function i() {
      var e = "<select>";
      return (
        Object.keys(n.plotShapesData).forEach(function(t) {
          var o = n.plotShapesData[t];
          e += '<option value="' + o.id + '">' + o.guiName + "</option>";
        }),
        (e += "</select>"),
        $(e)
      );
    }
    Object.defineProperty(t, "__esModule", { value: !0 }), o(22);
    var n = o(106);
    t.createShapeStyleEditor = i;
  },
  1126: function(e, t, o) {
    "use strict";
    function i() {
      return $('<input type="checkbox" class="visibility-switch"/>');
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      o(22),
      (t.createVisibilityEditor = i);
  }
});
