// 解压

function countUp(n, t, i, r, u, f) {
	for (var h = 0, s = ["webkit", "moz", "ms", "o"], e, o = 0; o < s.length && !window.requestAnimationFrame; ++o) window.requestAnimationFrame = window[s[o] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[s[o] + "CancelAnimationFrame"] || window[s[o] + "CancelRequestAnimationFrame"];
	window.requestAnimationFrame || (window.requestAnimationFrame = function(n) {
		var i = +new Date,
			r = Math.max(0, 16 - (i - h)),
			u = window.setTimeout(function() {
				n(i + r)
			}, r);
		return h = i + r, u
	}), 
	window.cancelAnimationFrame || (window.cancelAnimationFrame = function(n) {
		clearTimeout(n)
	}), 
	this.options = f || {
		useEasing: !0,
		useGrouping: !0,
		separator: ",",
		decimal: "."
	}, 
	this.options.separator == "" && (this.options.useGrouping = !1), this.options.prefix == null && (this.options.prefix = ""), this.options.suffix == null && (this.options.suffix = ""), e = this, this.d = typeof n == "string" ? document.getElementById(n) : n, this.startVal = Number(t), this.endVal = Number(i), this.countDown = this.startVal > this.endVal ? !0 : !1, this.startTime = null, this.timestamp = null, this.remaining = null, this.frameVal = this.startVal, this.rAF = null, this.decimals = Math.max(0, r || 0), this.dec = Math.pow(10, this.decimals), this.duration = u * 1e3 || 2e3, this.version = function() {
		return "1.3.1"
	}, 
	this.printValue = function(n) {
		var t = isNaN(n) ? "--" : e.formatNumber(n);
		e.d.tagName == "INPUT" ? this.d.value = t : this.d.innerHTML = t
	}, 
	this.easeOutExpo = function(n, t, i, r) {
		return i * (-Math.pow(2, -10 * n / r) + 1) * 1024 / 1023 + t
	}, 
	this.count = function(n) {
		var t, i;
		e.startTime === null && (e.startTime = n), e.timestamp = n, t = n - e.startTime, e.remaining = e.duration - t, e.options.useEasing ? e.countDown ? (i = e.easeOutExpo(t, 0, e.startVal - e.endVal, e.duration), e.frameVal = e.startVal - i) : e.frameVal = e.easeOutExpo(t, e.startVal, e.endVal - e.startVal, e.duration) : e.countDown ? (i = (e.startVal - e.endVal) * (t / e.duration), e.frameVal = e.startVal - i) : e.frameVal = e.startVal + (e.endVal - e.startVal) * (t / e.duration), e.frameVal = e.countDown ? e.frameVal < e.endVal ? e.endVal : e.frameVal : e.frameVal > e.endVal ? e.endVal : e.frameVal, e.frameVal = Math.round(e.frameVal * e.dec) / e.dec, e.printValue(e.frameVal), t < e.duration ? e.rAF = requestAnimationFrame(e.count) : e.callback != null && e.callback()
	}, 
	this.start = function(n) {
		return e.callback = n, isNaN(e.endVal) || isNaN(e.startVal) ? (console.log("countUp error: startVal or endVal is not a number"), e.printValue()) : e.rAF = requestAnimationFrame(e.count), !1
	}, 
	this.stop = function() {
		cancelAnimationFrame(e.rAF)
	}, 
	this.reset = function() {
		e.startTime = null, e.startVal = t, cancelAnimationFrame(e.rAF), e.printValue(e.startVal)
	}, 
	this.resume = function() {
		e.stop(), e.startTime = null, e.duration = e.remaining, e.startVal = e.frameVal, requestAnimationFrame(e.count)
	}, 
	this.formatNumber = function(n) {
		n = n.toFixed(e.decimals), n += "";
		var i, t, u, r;
		if (i = n.split("."), t = i[0], u = i.length > 1 ? e.options.decimal + i[1] : "", r = /(\d+)(\d{3})/, e.options.useGrouping) while (r.test(t)) t = t.replace(r, "$1" + e.options.separator + "$2");
		return e.options.prefix + t + u + e.options.suffix
	}, 
	e.printValue(e.startVal)
}
var guests;
if (!function(n) {
	var i = window.orientation !== undefined,
		r = navigator.userAgent.toLowerCase().indexOf("android") > -1,
		t = function(t, i) {
			r || (this.$element = n(t), this.options = n.extend({}, n.fn.inputmask.defaults, i), this.mask = String(i.mask), this.init(), this.listen(), this.checkVal())
		};
	t.prototype = {
		init: function() {
			var t = this.options.definitions,
				i = this.mask.length;
			this.tests = [], 
			this.partialPosition = this.mask.length, 
			this.firstNonMaskPos = null, n.each(this.mask.split(""), n.proxy(function(n, r) {
				r == "?" ? (i--, this.partialPosition = n) : t[r] ? (this.tests.push(new RegExp(t[r])), this.firstNonMaskPos === null && (this.firstNonMaskPos = this.tests.length - 1)) : this.tests.push(null)
			}, this)), 
			this.buffer = n.map(this.mask.split(""), n.proxy(function(n) {
				if (n != "?") return t[n] ? this.options.placeholder : n
			}, this)), 
			this.focusText = this.$element.val(), 
			this.$element.data("rawMaskFn", n.proxy(function() {
				return n.map(this.buffer, function(n, t) {
					return this.tests[t] && n != this.options.placeholder ? n : null
				}).join("")
			}, this))
		},
		listen: function() {
			if (!this.$element.attr("readonly")) {
				var t = (navigator.userAgent.match(/msie/i) ? "paste" : "input") + ".mask";
				this.$element.on("unmask", n.proxy(this.unmask, this)).on("focus.mask", n.proxy(this.focusEvent, this)).on("blur.mask", n.proxy(this.blurEvent, this)).on("keydown.mask", n.proxy(this.keydownEvent, this)).on("keypress.mask", n.proxy(this.keypressEvent, this)).on(t, n.proxy(this.pasteEvent, this))
			}
		},
		caret: function(n, t) {
			if (this.$element.length !== 0) {
				if (typeof n == "number") return t = typeof t == "number" ? t : n, this.$element.each(function() {
					if (this.setSelectionRange) this.setSelectionRange(n, t);
					else if (this.createTextRange) {
						var i = this.createTextRange();
						i.collapse(!0), i.moveEnd("character", t), i.moveStart("character", n), i.select()
					}
				});
				if (this.$element[0].setSelectionRange) n = this.$element[0].selectionStart, t = this.$element[0].selectionEnd;
				else if (document.selection && document.selection.createRange) {
					var i = document.selection.createRange();
					n = 0 - i.duplicate().moveStart("character", -1e5), t = n + i.text.length
				}
				return {
					begin: n,
					end: t
				}
			}
		},
		seekNext: function(n) {
			for (var t = this.mask.length; ++n <= t && !this.tests[n];);
			return n
		},
		seekPrev: function(n) {
			while (--n >= 0 && !this.tests[n]);
			return n
		},
		shiftL: function(n, t) {
			var u = this.mask.length,
				r, i;
			if (!(n < 0)) {
				for (r = n, i = this.seekNext(t); r < u; r++) if (this.tests[r]) {
					if (!(i < u && this.tests[r].test(this.buffer[i]))) break;
					this.buffer[r] = this.buffer[i], this.buffer[i] = this.options.placeholder, i = this.seekNext(i)
				}
				this.writeBuffer(), this.caret(Math.max(this.firstNonMaskPos, n))
			}
		},
		shiftR: function(n) {
			for (var f = this.mask.length, r, u, t = n, i = this.options.placeholder; t < f; t++) if (this.tests[t]) {
				if (r = this.seekNext(t), u = this.buffer[t], this.buffer[t] = i, !(r < f && this.tests[r].test(u))) break;
				i = u
			}
		},
		unmask: function() {
			this.$element.unbind(".mask").removeData("inputmask")
		},
		focusEvent: function() {
			var u, t, i, r;
			this.focusText = this.$element.val(), u = this.mask.length, t = this.checkVal(), this.writeBuffer(), i = this, r = function() {
				t == u ? i.caret(0, t) : i.caret(t)
			}, n.browser.msie ? r() : setTimeout(r, 0)
		},
		blurEvent: function() {
			this.checkVal(), this.$element.val() != this.focusText && this.$element.trigger("change")
		},
		keydownEvent: function(n) {
			var r = n.which;
			if (r == 8 || r == 46 || i && r == 127) {
				var f = this.caret(),
					u = f.begin,
					t = f.end;
				return t - u == 0 && (u = r != 46 ? this.seekPrev(u) : t = this.seekNext(u - 1), t = r == 46 ? this.seekNext(t) : t), this.clearBuffer(u, t), this.shiftL(u, t - 1), !1
			}
			if (r == 27) return this.$element.val(this.focusText), this.caret(0, this.checkVal()), !1
		},
		keypressEvent: function(n) {
			var e = this.mask.length,
				r = n.which,
				t = this.caret(),
				i, u, f;
			return n.ctrlKey || n.altKey || n.metaKey || r < 32 ? !0 : r ? (t.end - t.begin != 0 && (this.clearBuffer(t.begin, t.end), this.shiftL(t.begin, t.end - 1)), i = this.seekNext(t.begin - 1), i < e && (u = String.fromCharCode(r), this.tests[i].test(u) && (this.shiftR(i), this.buffer[i] = u, this.writeBuffer(), f = this.seekNext(i), this.caret(f))), !1) : void 0
		},
		pasteEvent: function() {
			var n = this;
			setTimeout(function() {
				n.caret(n.checkVal(!0))
			}, 0)
		},
		clearBuffer: function(n, t) {
			for (var r = this.mask.length, i = n; i < t && i < r; i++) this.tests[i] && (this.buffer[i] = this.options.placeholder)
		},
		writeBuffer: function() {
			return this.$element.val(this.buffer.join("")).val()
		},
		checkVal: function(n) {
			for (var e = this.mask.length, u = this.$element.val(), r = -1, f, t = 0, i = 0; t < e; t++) if (this.tests[t]) {
				for (this.buffer[t] = this.options.placeholder; i++ < u.length;) if (f = u.charAt(i - 1), this.tests[t].test(f)) {
					this.buffer[t] = f, r = t;
					break
				}
				if (i > u.length) break
			} else this.buffer[t] == u.charAt(i) && t != this.partialPosition && (i++, r = t);
			return !n && r + 1 < this.partialPosition ? (this.$element.val(""), this.clearBuffer(0, e)) : (n || r + 1 >= this.partialPosition) && (this.writeBuffer(), n || this.$element.val(this.$element.val().substring(0, r + 1))), this.partialPosition ? t : this.firstNonMaskPos
		}
	}, 
	n.fn.inputmask = function(i) {
		return this.each(function() {
			var r = n(this),
				u = r.data("inputmask");
			u || r.data("inputmask", u = new t(this, i))
		})
	}, 
	n.fn.inputmask.defaults = {
		mask: "",
		placeholder: "_",
		definitions: {
			9: "[0-9]",
			a: "[A-Za-z]",
			"?": "[A-Za-z0-9]",
			"*": "."
		}
	}, 
	n.fn.inputmask.Constructor = t, 
	n(document).on("focus.inputmask.data-api", "[data-mask]", function(t) {
		var i = n(this);
		i.data("inputmask") || (t.preventDefault(), i.inputmask(i.data()))
	})
}(window.jQuery), 

function(n) {
	n.fn.numeric = function(t, i) {
		typeof t == "boolean" && (t = {
			decimal: t,
			negative: !0,
			decimalPlaces: -1
		}), t = t || {}, typeof t.negative == "undefined" && (t.negative = !0);
		var r = t.decimal === !1 ? "" : t.decimal || ".",
			u = t.negative === !0 ? !0 : !1,
			f = typeof t.decimalPlaces == "undefined" ? -1 : t.decimalPlaces;
		return i = typeof i == "function" ? i : function() {}, this.data("numeric.decimal", r).data("numeric.negative", u).data("numeric.callback", i).data("numeric.decimalPlaces", f).keypress(n.fn.numeric.keypress).keyup(n.fn.numeric.keyup).blur(n.fn.numeric.blur)
	}, 
	n.fn.numeric.keypress = function(t) {
		var u = n.data(this, "numeric.decimal"),
			s = n.data(this, "numeric.negative"),
			o = n.data(this, "numeric.decimalPlaces"),
			i = t.charCode ? t.charCode : t.keyCode ? t.keyCode : 0,
			r, f, e;
		if (i == 13 && this.nodeName.toLowerCase() == "input") return !0;
		if (i == 13) return !1;
		if ((r = !1, t.ctrlKey && i == 97 || t.ctrlKey && i == 65) || t.ctrlKey && i == 120 || t.ctrlKey && i == 88 || t.ctrlKey && i == 99 || t.ctrlKey && i == 67 || t.ctrlKey && i == 122 || t.ctrlKey && i == 90 || t.ctrlKey && i == 118 || t.ctrlKey && i == 86 || t.shiftKey && i == 45) return !0;
		if (i < 48 || i > 57) {
			if (f = n(this).val(), n.inArray("-", f.split("")) !== 0 && s && i == 45 && (f.length === 0 || parseInt(n.fn.getSelectionStart(this), 10) === 0)) return !0;
			u && i == u.charCodeAt(0) && n.inArray(u, f.split("")) != -1 && (r = !1), i != 8 && i != 9 && i != 13 && i != 35 && i != 36 && i != 37 && i != 39 && i != 46 ? r = !1 : typeof t.charCode != "undefined" && (t.keyCode == t.which && t.which !== 0 ? (r = !0, t.which == 46 && (r = !1)) : t.keyCode !== 0 && t.charCode === 0 && t.which === 0 && (r = !0)), u && i == u.charCodeAt(0) && (r = n.inArray(u, f.split("")) == -1 ? !0 : !1)
		} else r = !0, u && o > 0 && (e = n.inArray(u, n(this).val().split("")), e >= 0 && n(this).val().length > e + o && (r = !1));
		return r
	}, 
	n.fn.numeric.keyup = function() {
		var i = n(this).val(),
			l, a, r, s, v, h, y, f, w, e;
		if (i && i.length > 0) {
			var c = n.fn.getSelectionStart(this),
				o = n.fn.getSelectionEnd(this),
				u = n.data(this, "numeric.decimal"),
				b = n.data(this, "numeric.negative"),
				p = n.data(this, "numeric.decimalPlaces");
			for (u !== "" && u !== null && (e = n.inArray(u, i.split("")), e === 0 && (this.value = "0" + i, c++, o++), e == 1 && i.charAt(0) == "-" && (this.value = "-0" + i.substring(1), c++, o++), i = this.value), l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "-", u], a = i.length, r = a - 1; r >= 0; r--) {
				for (s = i.charAt(r), r !== 0 && s == "-" ? i = i.substring(0, r) + i.substring(r + 1) : r !== 0 || b || s != "-" || (i = i.substring(1)), v = !1, h = 0; h < l.length; h++) if (s == l[h]) {
					v = !0;
					break
				}
				v && s != " " || (i = i.substring(0, r) + i.substring(r + 1))
			}
			if (y = n.inArray(u, i.split("")), y > 0) for (f = a - 1; f > y; f--) w = i.charAt(f), w == u && (i = i.substring(0, f) + i.substring(f + 1));
			u && p > 0 && (e = n.inArray(u, i.split("")), e >= 0 && (i = i.substring(0, e + p + 1), o = Math.min(i.length, o))), this.value = i, n.fn.setSelection(this, [c, o])
		}
	}, 
	n.fn.numeric.blur = function() {
		var r = n.data(this, "numeric.decimal"),
			u = n.data(this, "numeric.callback"),
			f = n.data(this, "numeric.negative"),
			t = this.value,
			i;
		t !== "" && (i = new RegExp(f ? "-?" : "^\\d+$|^\\d*" + r + "\\d+$"), i.exec(t) || u.apply(this))
	}, 
	n.fn.removeNumeric = function() {
		return this.data("numeric.decimal", null).data("numeric.negative", null).data("numeric.callback", null).data("numeric.decimalPlaces", null).unbind("keypress", n.fn.numeric.keypress).unbind("keyup", n.fn.numeric.keyup).unbind("blur", n.fn.numeric.blur)
	}, 
	n.fn.getSelectionStart = function(n) {
		if (n.type === "number") return undefined;
		if (n.createTextRange && document.selection) {
			var t = document.selection.createRange().duplicate();
			return (t.moveEnd("character", n.value.length), t.text == "") ? n.value.length : Math.max(0, n.value.lastIndexOf(t.text))
		}
		try {
			return n.selectionStart
		} catch (i) {
			return 0
		}
	}, 
	n.fn.getSelectionEnd = function(n) {
		if (n.type === "number") return undefined;
		if (n.createTextRange && document.selection) {
			var t = document.selection.createRange().duplicate();
			return t.moveStart("character", -n.value.length), t.text.length
		}
		return n.selectionEnd
	}, 
	n.fn.setSelection = function(n, t) {
		if (typeof t == "number" && (t = [t, t]), t && t.constructor == Array && t.length == 2) if (n.type === "number") n.focus();
		else if (n.createTextRange) {
			var i = n.createTextRange();
			i.collapse(!0), i.moveStart("character", t[0]), i.moveEnd("character", t[1] - t[0]), i.select()
		} else {
			n.focus();
			try {
				n.setSelectionRange && n.setSelectionRange(t[0], t[1])
			} catch (r) {}
		}
	}
}(jQuery), 

function(n, t, i) {
	function y(n) {
		var t = {},
			r = /^jQuery\d+$/;
		return i.each(n.attributes, function(n, i) {
			i.specified && !r.test(i.name) && (t[i.name] = i.value)
		}), t
	}
	function e(n, t) {
		var u = this,
			r = i(u);
		if (u.value == r.attr("placeholder") && r.hasClass("placeholder")) if (r.data("placeholder-password")) {
			if (r = r.hide().next().show().attr("id", r.removeAttr("id").data("placeholder-id")), n === !0) return r[0].value = t;
			r.focus()
		} else u.value = "", r.removeClass("placeholder"), u == v() && u.select()
	}
	function s() {
		var t, r = this,
			n = i(r),
			u = this.id;
		if (r.value == "") {
			if (r.type == "password") {
				if (!n.data("placeholder-textinput")) {
					try {
						t = n.clone().attr({
							type: "text"
						})
					} catch (f) {
						t = i("<input>").attr(i.extend(y(this), {
							type: "text"
						}))
					}
					t.removeAttr("name").data({
						"placeholder-password": n,
						"placeholder-id": u
					}).bind("focus.placeholder", e), n.data({
						"placeholder-textinput": t,
						"placeholder-id": u
					}).before(t)
				}
				n = n.removeAttr("id").hide().prev().attr("id", u).show()
			}
			n.addClass("placeholder"), n[0].value = n.attr("placeholder")
		} else n.removeClass("placeholder")
	}
	function v() {
		try {
			return t.activeElement
		} catch (n) {}
	}
	var h = Object.prototype.toString.call(n.operamini) == "[object OperaMini]",
		f = "placeholder" in t.createElement("input") && !h,
		o = "placeholder" in t.createElement("textarea") && !h,
		c = i.fn,
		l = i.valHooks,
		a = i.propHooks,
		u, r;
	f && o ? (r = c.placeholder = function() {
		return this
	}, 
	r.input = r.textarea = !0) : (r = c.placeholder = function() {
		var n = this;
		return n.filter((f ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
			"focus.placeholder": e,
			"blur.placeholder": s
		}).data("placeholder-enabled", !0).trigger("blur.placeholder"), n
	}, 
	r.input = f, r.textarea = o, u = {
		get: function(n) {
			var t = i(n),
				r = t.data("placeholder-password");
			return r ? r[0].value : t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : n.value
		},
		set: function(n, t) {
			var r = i(n),
				u = r.data("placeholder-password");
			return u ? u[0].value = t : r.data("placeholder-enabled") ? (t == "" ? (n.value = t, n != v() && s.call(n)) : r.hasClass("placeholder") ? e.call(n, !0, t) || (n.value = t) : n.value = t, r) : n.value = t
		}
	}, 
	f || (l.input = u, a.value = u), o || (l.textarea = u, a.value = u), i(function() {
		i(t).delegate("form", "submit.placeholder", function() {
			var n = i(".placeholder", this).each(e);
			setTimeout(function() {
				n.each(s)
			}, 10)
		})
	}), 
	i(n).bind("beforeunload.placeholder", function() {
		i(".placeholder").each(function() {
			this.value = ""
		})
	}))
}(this, document, jQuery), 
function(n) {
	"use strict";
	var u = [];
	n.growl = function(t, i) {
		var e = null,
			o = null,
			f = null,
			r, s, c, h, l;
		Object.prototype.toString.call(t) == "[object Object]" ? (e = t.message, o = t.title ? " " + t.title + " " : null, f = t.icon ? t.icon : null) : e = t, i = n.extend(!0, {}, n.growl.default_options, i), i.template.icon = i.template.icon_type === "class" ? '<span class="">' : '<img src="" />', s = "bootstrap-growl-" + i.position.from + "-" + i.position.align, r = n(i.template.container), r.addClass(s), i.type ? r.addClass("alert-" + i.type) : r.addClass("alert-info"), i.allow_dismiss && r.append(n(i.template.dismiss)), f && (i.template.icon ? i.template.icon_type == "class" ? r.append(n(i.template.icon).addClass(f)) : r.append(n(i.template.icon).attr("src", f)) : r.append(f)), o && (i.template.title ? r.append(n(i.template.title).html(o)) : r.append(o), r.append(i.template.title_divider)), i.template.message ? r.append(n(i.template.message).html(e)) : r.append(e), h = i.offset, n("." + s).each(function() {
			return h = Math.max(h, parseInt(n(this).css(i.position.from)) + n(this).outerHeight() + i.spacing)
		}), 
		c = {
			position: i.ele === "body" ? "fixed" : "absolute",
			margin: 0,
			"z-index": i.z_index,
			display: "none"
		}, 
		c[i.position.from] = h + "px", r.css(c), n(i.ele).append(r);
		switch (i.position.align) {
		case "center":
			r.css({
				left: "50%",
				marginLeft: -(r.outerWidth() / 2) + "px"
			});
			break;
		case "left":
			r.css("left", i.offset + "px");
			break;
		case "right":
			r.css("right", i.offset + "px")
		}
		if (i.onGrowlShow) i.onGrowlShow(event);
		return l = r.fadeIn(i.fade_in, function(n) {
			if (i.onGrowlShown) i.onGrowlShown(n);
			if (i.delay > 0) {
				if (i.pause_on_mouseover == !0) r.on("mouseover", function() {
					clearTimeout(u[r.index()])
				}).on("mouseleave", function() {
					u[r.index()] = setTimeout(function() {
						return r.alert("close")
					}, i.delay)
				});
				u[r.index()] = setTimeout(function() {
					return r.alert("close")
				}, i.delay)
			}
		}), 
		r.bind("close.bs.alert", function(n) {
			if (i.onGrowlClose) i.onGrowlClose(n)
		}), 
		r.bind("closed.bs.alert", function(t) {
			if (i.onGrowlClosed) i.onGrowlClosed(t);
			var r = n(this).css(i.position.from);
			n(this).nextAll("." + s).each(function() {
				n(this).css(i.position.from, r), r = parseInt(r) + i.spacing + n(this).outerHeight()
			})
		}), 
		r
	}, 
	n.growl.default_options = {
		ele: "body",
		type: "info",
		allow_dismiss: !0,
		position: {
			from: "top",
			align: "right"
		},
		offset: 20,
		spacing: 10,
		z_index: 1031,
		fade_in: 400,
		delay: 5e3,
		pause_on_mouseover: !1,
		onGrowlShow: null,
		onGrowlShown: null,
		onGrowlClose: null,
		onGrowlClosed: null,
		template: {
			icon_type: "class",
			container: '<div class="col-xs-10 col-sm-10 col-md-3 alert">',
			dismiss: '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;<\/button>',
			title: "<strong>",
			title_divider: "",
			message: ""
		}
	}
}(jQuery, window, document), 
function(n, t, i, r) {
	"use strict";
	var p = i("html"),
		e = i(n),
		o = i(t),
		u = i.fancybox = function() {
			u.open.apply(this, arguments)
		},
		y = navigator.userAgent.match(/msie/i),
		v = null,
		s = t.createTouch !== r,
		a = function(n) {
			return n && n.hasOwnProperty && n instanceof i
		},
		c = function(n) {
			return n && i.type(n) === "string"
		},
		l = function(n) {
			return c(n) && n.indexOf("%") > 0
		},
		w = function(n) {
			return n && !(n.style.overflow && n.style.overflow === "hidden") && (n.clientWidth && n.scrollWidth > n.clientWidth || n.clientHeight && n.scrollHeight > n.clientHeight)
		},
		f = function(n, t) {
			var i = parseInt(n, 10) || 0;
			return t && l(n) && (i = u.getViewport()[t] / 100 * i), Math.ceil(i)
		},
		h = function(n, t) {
			return f(n, t) + "px"
		};
	i.extend(u, {
		version: "2.1.5",
		defaults: {
			padding: 15,
			margin: 20,
			width: 800,
			height: 600,
			minWidth: 100,
			minHeight: 100,
			maxWidth: 9999,
			maxHeight: 9999,
			pixelRatio: 1,
			autoSize: !0,
			autoHeight: !1,
			autoWidth: !1,
			autoResize: !0,
			autoCenter: !s,
			fitToView: !0,
			aspectRatio: !1,
			topRatio: .5,
			leftRatio: .5,
			scrolling: "auto",
			wrapCSS: "",
			arrows: !0,
			closeBtn: !0,
			closeClick: !1,
			nextClick: !1,
			mouseWheel: !0,
			autoPlay: !1,
			playSpeed: 3e3,
			preload: 3,
			modal: !1,
			loop: !0,
			ajax: {
				dataType: "html",
				headers: {
					"X-fancyBox": !0
				}
			},
			iframe: {
				scrolling: "auto",
				preload: !0
			},
			swf: {
				wmode: "transparent",
				allowfullscreen: "true",
				allowscriptaccess: "always"
			},
			keys: {
				next: {
					13: "left",
					34: "up",
					39: "left",
					40: "up"
				},
				prev: {
					8: "right",
					33: "down",
					37: "right",
					38: "down"
				},
				close: [27],
				play: [32],
				toggle: [70]
			},
			direction: {
				next: "left",
				prev: "right"
			},
			scrollOutside: !0,
			index: 0,
			type: null,
			href: null,
			content: null,
			title: null,
			tpl: {
				wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"><\/div><\/div><\/div><\/div>',
				image: '<img class="fancybox-image" src="{href}" alt="" />',
				iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (y ? ' allowtransparency="true"' : "") + "><\/iframe>",
				error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.<\/p>',
				closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"><\/a>',
				next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span><\/span><\/a>',
				prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span><\/span><\/a>'
			},
			openEffect: "fade",
			openSpeed: 250,
			openEasing: "swing",
			openOpacity: !0,
			openMethod: "zoomIn",
			closeEffect: "fade",
			closeSpeed: 250,
			closeEasing: "swing",
			closeOpacity: !0,
			closeMethod: "zoomOut",
			nextEffect: "elastic",
			nextSpeed: 250,
			nextEasing: "swing",
			nextMethod: "changeIn",
			prevEffect: "elastic",
			prevSpeed: 250,
			prevEasing: "swing",
			prevMethod: "changeOut",
			helpers: {
				overlay: !0,
				title: !0
			},
			onCancel: i.noop,
			beforeLoad: i.noop,
			afterLoad: i.noop,
			beforeShow: i.noop,
			afterShow: i.noop,
			beforeChange: i.noop,
			beforeClose: i.noop,
			afterClose: i.noop
		},
		group: {},
		opts: {},
		previous: null,
		coming: null,
		current: null,
		isActive: !1,
		isOpen: !1,
		isOpened: !1,
		wrap: null,
		skin: null,
		outer: null,
		inner: null,
		player: {
			timer: null,
			isActive: !1
		},
		ajaxLoad: null,
		imgPreload: null,
		transitions: {},
		helpers: {},
		open: function(n, t) {
			if (n) return (i.isPlainObject(t) || (t = {}), !1 === u.close(!0)) ? void 0 : (i.isArray(n) || (n = a(n) ? i(n).get() : [n]), i.each(n, function(f, e) {
				var h = {},
					s, p, l, o, v, y, w;
				i.type(e) === "object" && (e.nodeType && (e = i(e)), a(e) ? (h = {
					href: e.data("fancybox-href") || e.attr("href"),
					title: e.data("fancybox-title") || e.attr("title"),
					isDom: !0,
					element: e
				}, i.metadata && i.extend(!0, h, e.metadata())) : h = e), s = t.href || h.href || (c(e) ? e : null), p = t.title !== r ? t.title : h.title || "", l = t.content || h.content, o = l ? "html" : t.type || h.type, !o && h.isDom && (o = e.data("fancybox-type"), o || (v = e.prop("class").match(/fancybox\.(\w+)/), o = v ? v[1] : null)), c(s) && (o || (u.isImage(s) ? o = "image" : u.isSWF(s) ? o = "swf" : s.charAt(0) === "#" ? o = "inline" : c(e) && (o = "html", l = e)), o === "ajax" && (y = s.split(/\s+/, 2), s = y.shift(), w = y.shift())), l || (o === "inline" ? s ? l = i(c(s) ? s.replace(/.*(?=#[^\s]+$)/, "") : s) : h.isDom && (l = e) : o === "html" ? l = s : o || s || !h.isDom || (o = "inline", l = e)), i.extend(h, {
					href: s,
					type: o,
					content: l,
					title: p,
					selector: w
				}), n[f] = h
			}), u.opts = i.extend(!0, {}, u.defaults, t), t.keys !== r && (u.opts.keys = t.keys ? i.extend({}, u.defaults.keys, t.keys) : !1), u.group = n, u._start(u.opts.index))
		},
		cancel: function() {
			var n = u.coming;
			n && !1 !== u.trigger("onCancel") && (u.hideLoading(), u.ajaxLoad && u.ajaxLoad.abort(), u.ajaxLoad = null, u.imgPreload && (u.imgPreload.onload = u.imgPreload.onerror = null), n.wrap && n.wrap.stop(!0, !0).trigger("onReset").remove(), u.coming = null, u.current || u._afterZoomOut(n))
		},
		close: function(n) {
			(u.cancel(), !1 !== u.trigger("beforeClose")) && (u.unbindEvents(), u.isActive) && (u.isOpen && n !== !0 ? (u.isOpen = u.isOpened = !1, u.isClosing = !0, i(".fancybox-item, .fancybox-nav").remove(), u.wrap.stop(!0, !0).removeClass("fancybox-opened"), u.transitions[u.current.closeMethod]()) : (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(), u._afterZoomOut()))
		},
		play: function(n) {
			var t = function() {
					clearTimeout(u.player.timer)
				},
				i = function() {
					t(), u.current && u.player.isActive && (u.player.timer = setTimeout(u.next, u.current.playSpeed))
				},
				r = function() {
					t(), o.unbind(".player"), u.player.isActive = !1, u.trigger("onPlayEnd")
				},
				f = function() {
					u.current && (u.current.loop || u.current.index < u.group.length - 1) && (u.player.isActive = !0, o.bind({
						"onCancel.player beforeClose.player": r,
						"onUpdate.player": i,
						"beforeLoad.player": t
					}), i(), u.trigger("onPlayStart"))
				};
			n !== !0 && (u.player.isActive || n === !1) ? r() : f()
		},
		next: function(n) {
			var t = u.current;
			t && (c(n) || (n = t.direction.next), u.jumpto(t.index + 1, n, "next"))
		},
		prev: function(n) {
			var t = u.current;
			t && (c(n) || (n = t.direction.prev), u.jumpto(t.index - 1, n, "prev"))
		},
		jumpto: function(n, t, i) {
			var e = u.current;
			e && (n = f(n), u.direction = t || e.direction[n >= e.index ? "next" : "prev"], u.router = i || "jumpto", e.loop && (n < 0 && (n = e.group.length + n % e.group.length), n = n % e.group.length), e.group[n] !== r && (u.cancel(), u._start(n)))
		},
		reposition: function(n, t) {
			var f = u.current,
				e = f ? f.wrap : null,
				r;
			e && (r = u._getPosition(t), n && n.type === "scroll" ? (delete r.position, e.stop(!0, !0).animate(r, 200)) : (e.css(r), f.pos = i.extend({}, f.dim, r)))
		},
		update: function(n) {
			var t = n && n.type,
				i = !t || t === "orientationchange";
			(i && (clearTimeout(v), v = null), u.isOpen && !v) && (v = setTimeout(function() {
				var r = u.current;
				r && !u.isClosing && (u.wrap.removeClass("fancybox-tmp"), (i || t === "load" || t === "resize" && r.autoResize) && u._setDimension(), t === "scroll" && r.canShrink || u.reposition(n), u.trigger("onUpdate"), v = null)
			}, i && !s ? 0 : 300))
		},
		toggle: function(n) {
			u.isOpen && (u.current.fitToView = i.type(n) === "boolean" ? n : !u.current.fitToView, s && (u.wrap.removeAttr("style").addClass("fancybox-tmp"), u.trigger("onUpdate")), u.update())
		},
		hideLoading: function() {
			o.unbind(".loading"), i("#fancybox-loading").remove()
		},
		showLoading: function() {
			var t, n;
			u.hideLoading(), t = i('<div id="fancybox-loading"><div><\/div><\/div>').click(u.cancel).appendTo("body"), o.bind("keydown.loading", function(n) {
				(n.which || n.keyCode) === 27 && (n.preventDefault(), u.cancel())
			}), u.defaults.fixed || (n = u.getViewport(), t.css({
				position: "absolute",
				top: n.h * .5 + n.y,
				left: n.w * .5 + n.x
			}))
		},
		getViewport: function() {
			var i = u.current && u.current.locked || !1,
				t = {
					x: e.scrollLeft(),
					y: e.scrollTop()
				};
			return i ? (t.w = i[0].clientWidth, t.h = i[0].clientHeight) : (t.w = s && n.innerWidth ? n.innerWidth : e.width(), t.h = s && n.innerHeight ? n.innerHeight : e.height()), t
		},
		unbindEvents: function() {
			u.wrap && a(u.wrap) && u.wrap.unbind(".fb"), o.unbind(".fb"), e.unbind(".fb")
		},
		bindEvents: function() {
			var n = u.current,
				t;
			n && (e.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (n.autoCenter && !n.locked ? " scroll.fb" : ""), u.update), t = n.keys, t && o.bind("keydown.fb", function(f) {
				var e = f.which || f.keyCode,
					o = f.target || f.srcElement;
				if (e === 27 && u.coming) return !1;
				f.ctrlKey || f.altKey || f.shiftKey || f.metaKey || o && (o.type || i(o).is("[contenteditable]")) || i.each(t, function(t, o) {
					return n.group.length > 1 && o[e] !== r ? (u[t](o[e]), f.preventDefault(), !1) : i.inArray(e, o) > -1 ? (u[t](), f.preventDefault(), !1) : void 0
				})
			}), i.fn.mousewheel && n.mouseWheel && u.wrap.bind("mousewheel.fb", function(t, r, f, e) {
				for (var h = t.target || null, o = i(h), s = !1; o.length;) {
					if (s || o.is(".fancybox-skin") || o.is(".fancybox-wrap")) break;
					s = w(o[0]), o = i(o).parent()
				}
				r === 0 || s || u.group.length > 1 && !n.canShrink && (e > 0 || f > 0 ? u.prev(e > 0 ? "down" : "left") : (e < 0 || f < 0) && u.next(e < 0 ? "up" : "right"), t.preventDefault())
			}))
		},
		trigger: function(n, t) {
			var f, r = t || u.coming || u.current;
			if (r) {
				if (i.isFunction(r[n]) && (f = r[n].apply(r, Array.prototype.slice.call(arguments, 1))), f === !1) return !1;
				r.helpers && i.each(r.helpers, function(t, f) {
					f && u.helpers[t] && i.isFunction(u.helpers[t][n]) && u.helpers[t][n](i.extend(!0, {}, u.helpers[t].defaults, f), r)
				}), o.trigger(n)
			}
		},
		isImage: function(n) {
			return c(n) && n.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
		},
		isSWF: function(n) {
			return c(n) && n.match(/\.(swf)((\?|#).*)?$/i)
		},
		_start: function(n) {
			var t = {},
				c, l, r, e, o;
			if (n = f(n), c = u.group[n] || null, !c) return !1;
			if (t = i.extend(!0, {}, u.opts, c), e = t.margin, o = t.padding, i.type(e) === "number" && (t.margin = [e, e, e, e]), i.type(o) === "number" && (t.padding = [o, o, o, o]), t.modal && i.extend(!0, t, {
				closeBtn: !1,
				closeClick: !1,
				nextClick: !1,
				arrows: !1,
				mouseWheel: !1,
				keys: null,
				helpers: {
					overlay: {
						closeClick: !1
					}
				}
			}), t.autoSize && (t.autoWidth = t.autoHeight = !0), t.width === "auto" && (t.autoWidth = !0), t.height === "auto" && (t.autoHeight = !0), t.group = u.group, t.index = n, u.coming = t, !1 === u.trigger("beforeLoad")) {
				u.coming = null;
				return
			}
			if (r = t.type, l = t.href, !r) return (u.coming = null, u.current && u.router && u.router !== "jumpto") ? (u.current.index = n, u[u.router](u.direction)) : !1;
			if (u.isActive = !0, (r === "image" || r === "swf") && (t.autoHeight = t.autoWidth = !1, t.scrolling = "visible"), r === "image" && (t.aspectRatio = !0), r === "iframe" && s && (t.scrolling = "scroll"), t.wrap = i(t.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + r + " fancybox-tmp " + t.wrapCSS).appendTo(t.parent || "body"), i.extend(t, {
				skin: i(".fancybox-skin", t.wrap),
				outer: i(".fancybox-outer", t.wrap),
				inner: i(".fancybox-inner", t.wrap)
			}), i.each(["Top", "Right", "Bottom", "Left"], function(n, i) {
				t.skin.css("padding" + i, h(t.padding[n]))
			}), u.trigger("onReady"), r === "inline" || r === "html") {
				if (!t.content || !t.content.length) return u._error("content")
			} else if (!l) return u._error("href");
			r === "image" ? u._loadImage() : r === "ajax" ? u._loadAjax() : r === "iframe" ? u._loadIframe() : u._afterLoad()
		},
		_error: function(n) {
			i.extend(u.coming, {
				type: "html",
				autoWidth: !0,
				autoHeight: !0,
				minWidth: 0,
				minHeight: 0,
				scrolling: "no",
				hasError: n,
				content: u.coming.tpl.error
			}), u._afterLoad()
		},
		_loadImage: function() {
			var n = u.imgPreload = new Image;
			n.onload = function() {
				this.onload = this.onerror = null, u.coming.width = this.width / u.opts.pixelRatio, u.coming.height = this.height / u.opts.pixelRatio, u._afterLoad()
			}, n.onerror = function() {
				this.onload = this.onerror = null, u._error("image")
			}, n.src = u.coming.href, n.complete !== !0 && u.showLoading()
		},
		_loadAjax: function() {
			var n = u.coming;
			u.showLoading(), u.ajaxLoad = i.ajax(i.extend({}, n.ajax, {
				url: n.href,
				error: function(n, t) {
					u.coming && t !== "abort" ? u._error("ajax", n) : u.hideLoading()
				},
				success: function(t, i) {
					i === "success" && (n.content = t, u._afterLoad())
				}
			}))
		},
		_loadIframe: function() {
			var n = u.coming,
				t = i(n.tpl.iframe.replace(/\{rnd\}/g, +new Date)).attr("scrolling", s ? "auto" : n.iframe.scrolling).attr("src", n.href);
			if (i(n.wrap).bind("onReset", function() {
				try {
					i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
				} catch (n) {}
			}), n.iframe.preload) {
				u.showLoading();
				t.one("load", function() {
					i(this).data("ready", 1), s || i(this).bind("load.fb", u.update), i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), u._afterLoad()
				})
			}
			n.content = t.appendTo(n.inner), n.iframe.preload || u._afterLoad()
		},
		_preloadImages: function() {
			for (var r = u.group, i = u.current, f = r.length, e = i.preload ? Math.min(i.preload, f - 1) : 0, n, t = 1; t <= e; t += 1) n = r[(i.index + t) % f], n.type === "image" && n.href && ((new Image).src = n.href)
		},
		_afterLoad: function() {
			var r = u.coming,
				f = u.current,
				e = "fancybox-placeholder",
				t, n, c, o, s, h;
			if (u.hideLoading(), r && u.isActive !== !1) {
				if (!1 === u.trigger("afterLoad", r, f)) {
					r.wrap.stop(!0).trigger("onReset").remove(), u.coming = null;
					return
				}
				f && (u.trigger("beforeChange", f), f.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), u.unbindEvents(), t = r, n = r.content, c = r.type, o = r.scrolling, i.extend(u, {
					wrap: t.wrap,
					skin: t.skin,
					outer: t.outer,
					inner: t.inner,
					current: t,
					previous: f
				}), s = t.href;
				switch (c) {
				case "inline":
				case "ajax":
				case "html":
					t.selector ? n = i("<div>").html(n).find(t.selector) : a(n) && (n.data(e) || n.data(e, i('<div class="' + e + '"><\/div>').insertAfter(n).hide()), n = n.show().detach(), t.wrap.bind("onReset", function() {
						i(this).find(n).length && n.hide().replaceAll(n.data(e)).data(e, !1)
					}));
					break;
				case "image":
					n = t.tpl.image.replace("{href}", s);
					break;
				case "swf":
					n = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + s + '"><\/param>', h = "", i.each(t.swf, function(t, i) {
						n += '<param name="' + t + '" value="' + i + '"><\/param>', h += " " + t + '="' + i + '"'
					}), n += '<embed src="' + s + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "><\/embed><\/object>"
				}
				a(n) && n.parent().is(t.inner) || t.inner.append(n), u.trigger("beforeShow"), t.inner.css("overflow", o === "yes" ? "scroll" : o === "no" ? "hidden" : o), u._setDimension(), u.reposition(), u.isOpen = !1, u.coming = null, u.bindEvents(), u.isOpened ? f.prevMethod && u.transitions[f.prevMethod]() : i(".fancybox-wrap").not(t.wrap).stop(!0).trigger("onReset").remove(), u.transitions[u.isOpened ? t.nextMethod : t.openMethod](), u._preloadImages()
			}
		},
		_setDimension: function() {
			var nt = u.getViewport(),
				wt = 0,
				vt = !1,
				st = !1,
				v = u.wrap,
				k = u.skin,
				e = u.inner,
				r = u.current,
				n = r.width,
				t = r.height,
				o = r.minWidth,
				s = r.minHeight,
				c = r.maxWidth,
				a = r.maxHeight,
				bt = r.scrolling,
				ft = r.scrollOutside ? r.scrollbarWidth : 0,
				et = r.margin,
				yt = f(et[1] + et[3]),
				pt = f(et[0] + et[2]),
				d, ht, tt, it, p, y, ct, lt, w, g, b, rt, ot, ut, at;
			if (v.add(k).add(e).width("auto").height("auto").removeClass("fancybox-tmp"), d = f(k.outerWidth(!0) - k.width()), ht = f(k.outerHeight(!0) - k.height()), tt = yt + d, it = pt + ht, p = l(n) ? (nt.w - tt) * f(n) / 100 : n, y = l(t) ? (nt.h - it) * f(t) / 100 : t, r.type === "iframe") {
				if (ut = r.content, r.autoHeight && ut.data("ready") === 1) try {
					ut[0].contentWindow.document.location && (e.width(p).height(9999), at = ut.contents().find("body"), ft && at.css("overflow-x", "hidden"), y = at.outerHeight(!0))
				} catch (kt) {}
			} else(r.autoWidth || r.autoHeight) && (e.addClass("fancybox-tmp"), r.autoWidth || e.width(p), r.autoHeight || e.height(y), r.autoWidth && (p = e.width()), r.autoHeight && (y = e.height()), e.removeClass("fancybox-tmp"));
			if (n = f(p), t = f(y), w = p / y, o = f(l(o) ? f(o, "w") - tt : o), c = f(l(c) ? f(c, "w") - tt : c), s = f(l(s) ? f(s, "h") - it : s), a = f(l(a) ? f(a, "h") - it : a), ct = c, lt = a, r.fitToView && (c = Math.min(nt.w - tt, c), a = Math.min(nt.h - it, a)), rt = nt.w - yt, ot = nt.h - pt, r.aspectRatio ? (n > c && (n = c, t = f(n / w)), t > a && (t = a, n = f(t * w)), n < o && (n = o, t = f(n / w)), t < s && (t = s, n = f(t * w))) : (n = Math.max(o, Math.min(n, c)), r.autoHeight && r.type !== "iframe" && (e.width(n), t = e.height()), t = Math.max(s, Math.min(t, a))), r.fitToView) if (e.width(n).height(t), v.width(n + d), g = v.width(), b = v.height(), r.aspectRatio) while ((g > rt || b > ot) && n > o && t > s) {
				if (wt++ > 19) break;
				t = Math.max(s, Math.min(a, t - 10)), n = f(t * w), n < o && (n = o, t = f(n / w)), n > c && (n = c, t = f(n / w)), e.width(n).height(t), v.width(n + d), g = v.width(), b = v.height()
			} else n = Math.max(o, Math.min(n, n - (g - rt))), t = Math.max(s, Math.min(t, t - (b - ot)));
			ft && bt === "auto" && t < y && n + d + ft < rt && (n += ft), e.width(n).height(t), v.width(n + d), g = v.width(), b = v.height(), vt = (g > rt || b > ot) && n > o && t > s, st = r.aspectRatio ? n < ct && t < lt && n < p && t < y : (n < ct || t < lt) && (n < p || t < y), i.extend(r, {
				dim: {
					width: h(g),
					height: h(b)
				},
				origWidth: p,
				origHeight: y,
				canShrink: vt,
				canExpand: st,
				wPadding: d,
				hPadding: ht,
				wrapSpace: b - k.outerHeight(!0),
				skinSpace: k.height() - t
			}), !ut && r.autoHeight && t > s && t < a && !st && e.height("auto")
		},
		_getPosition: function(n) {
			var i = u.current,
				r = u.getViewport(),
				f = i.margin,
				e = u.wrap.width() + f[1] + f[3],
				o = u.wrap.height() + f[0] + f[2],
				t = {
					position: "absolute",
					top: f[0],
					left: f[3]
				};
			return i.autoCenter && i.fixed && !n && o <= r.h && e <= r.w ? t.position = "fixed" : i.locked || (t.top += r.y, t.left += r.x), t.top = h(Math.max(t.top, t.top + (r.h - o) * i.topRatio)), t.left = h(Math.max(t.left, t.left + (r.w - e) * i.leftRatio)), t
		},
		_afterZoomIn: function() {
			var n = u.current;
			n && (u.isOpen = u.isOpened = !0, u.wrap.css("overflow", "visible").addClass("fancybox-opened"), u.update(), (n.closeClick || n.nextClick && u.group.length > 1) && u.inner.css("cursor", "pointer").bind("click.fb", function(t) {
				i(t.target).is("a") || i(t.target).parent().is("a") || (t.preventDefault(), u[n.closeClick ? "close" : "next"]())
			}), n.closeBtn && i(n.tpl.closeBtn).appendTo(u.skin).bind("click.fb", function(n) {
				n.preventDefault(), u.close()
			}), n.arrows && u.group.length > 1 && ((n.loop || n.index > 0) && i(n.tpl.prev).appendTo(u.outer).bind("click.fb", u.prev), (n.loop || n.index < u.group.length - 1) && i(n.tpl.next).appendTo(u.outer).bind("click.fb", u.next)), u.trigger("afterShow"), n.loop || n.index !== n.group.length - 1 ? u.opts.autoPlay && !u.player.isActive && (u.opts.autoPlay = !1, u.play()) : u.play(!1))
		},
		_afterZoomOut: function(n) {
			n = n || u.current, i(".fancybox-wrap").trigger("onReset").remove(), i.extend(u, {
				group: {},
				opts: {},
				router: !1,
				current: null,
				isActive: !1,
				isOpened: !1,
				isOpen: !1,
				isClosing: !1,
				wrap: null,
				skin: null,
				outer: null,
				inner: null
			}), u.trigger("afterClose", n)
		}
	}), u.transitions = {
		getOrigPosition: function() {
			var n = u.current,
				f = n.element,
				t = n.orig,
				i = {},
				e = 50,
				o = 50,
				s = n.hPadding,
				c = n.wPadding,
				r = u.getViewport();
			return !t && n.isDom && f.is(":visible") && (t = f.find("img:first"), t.length || (t = f)), a(t) ? (i = t.offset(), t.is("img") && (e = t.outerWidth(), o = t.outerHeight())) : (i.top = r.y + (r.h - o) * n.topRatio, i.left = r.x + (r.w - e) * n.leftRatio), (u.wrap.css("position") === "fixed" || n.locked) && (i.top -= r.y, i.left -= r.x), i = {
				top: h(i.top - s * n.topRatio),
				left: h(i.left - c * n.leftRatio),
				width: h(e + c),
				height: h(o + s)
			}
		},
		step: function(n, t) {
			var r, s, e, i = t.prop,
				o = u.current,
				h = o.wrapSpace,
				c = o.skinSpace;
			(i === "width" || i === "height") && (r = t.end === t.start ? 1 : (n - t.start) / (t.end - t.start), u.isClosing && (r = 1 - r), s = i === "width" ? o.wPadding : o.hPadding, e = n - s, u.skin[i](f(i === "width" ? e : e - h * r)), u.inner[i](f(i === "width" ? e : e - h * r - c * r)))
		},
		zoomIn: function() {
			var n = u.current,
				t = n.pos,
				r = n.openEffect,
				f = r === "elastic",
				e = i.extend({
					opacity: 1
				}, t);
			delete e.position, f ? (t = this.getOrigPosition(), n.openOpacity && (t.opacity = .1)) : r === "fade" && (t.opacity = .1), u.wrap.css(t).animate(e, {
				duration: r === "none" ? 0 : n.openSpeed,
				easing: n.openEasing,
				step: f ? this.step : null,
				complete: u._afterZoomIn
			})
		},
		zoomOut: function() {
			var n = u.current,
				i = n.closeEffect,
				r = i === "elastic",
				t = {
					opacity: .1
				};
			r && (t = this.getOrigPosition(), n.closeOpacity && (t.opacity = .1)), u.wrap.animate(t, {
				duration: i === "none" ? 0 : n.closeSpeed,
				easing: n.closeEasing,
				step: r ? this.step : null,
				complete: u._afterZoomOut
			})
		},
		changeIn: function() {
			var i = u.current,
				s = i.nextEffect,
				t = i.pos,
				o = {
					opacity: 1
				},
				r = u.direction,
				e = 200,
				n;
			t.opacity = .1, s === "elastic" && (n = r === "down" || r === "up" ? "top" : "left", r === "down" || r === "right" ? (t[n] = h(f(t[n]) - e), o[n] = "+=" + e + "px") : (t[n] = h(f(t[n]) + e), o[n] = "-=" + e + "px")), s === "none" ? u._afterZoomIn() : u.wrap.css(t).animate(o, {
				duration: i.nextSpeed,
				easing: i.nextEasing,
				complete: u._afterZoomIn
			})
		},
		changeOut: function() {
			var n = u.previous,
				r = n.prevEffect,
				f = {
					opacity: .1
				},
				t = u.direction,
				e = 200;
			r === "elastic" && (f[t === "down" || t === "up" ? "top" : "left"] = (t === "up" || t === "left" ? "-" : "+") + "=" + e + "px"), n.wrap.animate(f, {
				duration: r === "none" ? 0 : n.prevSpeed,
				easing: n.prevEasing,
				complete: function() {
					i(this).trigger("onReset").remove()
				}
			})
		}
	}, u.helpers.overlay = {
		defaults: {
			closeClick: !0,
			speedOut: 200,
			showEarly: !0,
			css: {},
			locked: !s,
			fixed: !0
		},
		overlay: null,
		fixed: !1,
		el: i("html"),
		create: function(n) {
			n = i.extend({}, this.defaults, n), this.overlay && this.close(), this.overlay = i('<div class="fancybox-overlay"><\/div>').appendTo(u.coming ? u.coming.parent : n.parent), this.fixed = !1, n.fixed && u.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
		},
		open: function(n) {
			var t = this;
			n = i.extend({}, this.defaults, n), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(n), this.fixed || (e.bind("resize.overlay", i.proxy(this.update, this)), this.update()), n.closeClick && this.overlay.bind("click.overlay", function(n) {
				if (i(n.target).hasClass("fancybox-overlay")) return u.isActive ? u.close() : t.close(), !1
			}), this.overlay.css(n.css).show()
		},
		close: function() {
			var n, t;
			e.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), n = e.scrollTop(), t = e.scrollLeft(), this.el.removeClass("fancybox-lock"), e.scrollTop(n).scrollLeft(t)), i(".fancybox-overlay").remove().hide(), i.extend(this, {
				overlay: null,
				fixed: !1
			})
		},
		update: function() {
			var n = "100%",
				i;
			this.overlay.width(n).height("100%"), y ? (i = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), o.width() > i && (n = o.width())) : o.width() > e.width() && (n = o.width()), this.overlay.width(n).height(o.height())
		},
		onReady: function(n, t) {
			var r = this.overlay;
			i(".fancybox-overlay").stop(!0, !0), r || this.create(n), n.locked && this.fixed && t.fixed && (r || (this.margin = o.height() > e.height() ? i("html").css("margin-right").replace("px", "") : !1), t.locked = this.overlay.append(t.wrap), t.fixed = !1), n.showEarly === !0 && this.beforeShow.apply(this, arguments)
		},
		beforeShow: function(n, t) {
			var r, u;
			t.locked && (this.margin !== !1 && (i("*").filter(function() {
				return i(this).css("position") === "fixed" && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
			}).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), r = e.scrollTop(), u = e.scrollLeft(), this.el.addClass("fancybox-lock"), e.scrollTop(r).scrollLeft(u)), this.open(n)
		},
		onUpdate: function() {
			this.fixed || this.update()
		},
		afterClose: function(n) {
			this.overlay && !u.coming && this.overlay.fadeOut(n.speedOut, i.proxy(this.close, this))
		}
	}, u.helpers.title = {
		defaults: {
			type: "float",
			position: "bottom"
		},
		beforeShow: function(n) {
			var o = u.current,
				r = o.title,
				s = n.type,
				t, e;
			if (i.isFunction(r) && (r = r.call(o.element, o)), c(r) && i.trim(r) !== "") {
				t = i('<div class="fancybox-title fancybox-title-' + s + '-wrap">' + r + "<\/div>");
				switch (s) {
				case "inside":
					e = u.skin;
					break;
				case "outside":
					e = u.wrap;
					break;
				case "over":
					e = u.inner;
					break;
				default:
					e = u.skin, t.appendTo("body"), y && t.width(t.width()), t.wrapInner('<span class="child"><\/span>'), u.current.margin[2] += Math.abs(f(t.css("margin-bottom")))
				}
				t[n.position === "top" ? "prependTo" : "appendTo"](e)
			}
		}
	}, i.fn.fancybox = function(n) {
		var r, f = i(this),
			t = this.selector || "",
			e = function(e) {
				var o = i(this).blur(),
					c = r,
					h, s;
				e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || o.is(".fancybox-wrap") || (h = n.groupAttr || "data-fancybox-group", s = o.attr(h), s || (h = "rel", s = o.get(0)[h]), s && s !== "" && s !== "nofollow" && (o = t.length ? i(t) : f, o = o.filter("[" + h + '="' + s + '"]'), c = o.index(this)), n.index = c, u.open(o, n) !== !1 && e.preventDefault())
			};
		return n = n || {}, r = n.index || 0, t && n.live !== !1 ? o.undelegate(t, "click.fb-start").delegate(t + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", e) : f.unbind("click.fb-start").bind("click.fb-start", e), this.filter("[data-fancybox-start=1]").trigger("click"), this
	}, o.ready(function() {
		var t, f;
		i.scrollbarWidth === r && (i.scrollbarWidth = function() {
			var n = i('<div style="width:50px;height:50px;overflow:auto"><div/><\/div>').appendTo("body"),
				t = n.children(),
				r = t.innerWidth() - t.height(99).innerWidth();
			return n.remove(), r
		}), i.support.fixedPosition === r && (i.support.fixedPosition = function() {
			var n = i('<div style="position:fixed;top:20px;"><\/div>').appendTo("body"),
				t = n[0].offsetTop === 20 || n[0].offsetTop === 15;
			return n.remove(), t
		}()), i.extend(u.defaults, {
			scrollbarWidth: i.scrollbarWidth(),
			fixed: i.support.fixedPosition,
			parent: i("body")
		}), t = i(n).width(), p.addClass("fancybox-lock-test"), f = i(n).width(), p.removeClass("fancybox-lock-test"), i("<style type='text/css'>.fancybox-margin{margin-right:" + (f - t) + "px;}<\/style>").appendTo("head")
	})
}(window, document, jQuery), 

function(n) {
	n.fn.unveil = function(t, i) {
		function o() {
			var t = u.filter(function() {
				var t = n(this);
				if (!t.is(":hidden")) {
					var i = r.scrollTop(),
						e = i + r.height(),
						u = t.offset().top,
						o = u + t.height();
					return o >= i - f && u <= e + f
				}
			});
			e = t.trigger("unveil"), u = u.not(e)
		}
		var r = n(window),
			f = t || 0,
			s = window.devicePixelRatio > 1,
			h = s ? "data-src-retina" : "data-src",
			u = this,
			e;
		this.one("unveil", function() {
			var n = this.getAttribute(h);
			n = n || this.getAttribute("data-src"), n && (this.setAttribute("src", n), typeof i == "function" && i.call(this))
		});
		r.on("scroll.unveil resize.unveil lookup.unveil", o);
		return o(), this
	}
}(window.jQuery || window.Zepto), typeof jQuery == "undefined") throw new Error("Bootstrap requires jQuery"); 
+ function(n) {
	"use strict";

	function t() {
		var i = document.createElement("bootstrap"),
			t = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			},
			n;
		for (n in t) if (i.style[n] !== undefined) return {
			end: t[n]
		}
	}
	n.fn.emulateTransitionEnd = function(t) {
		var i = !1,
			u = this,
			r;
		n(this).one(n.support.transition.end, function() {
			i = !0
		});
		return r = function() {
			i || n(u).trigger(n.support.transition.end)
		}, setTimeout(r, t), this
	}, 
	n(function() {
		n.support.transition = t()
	})
}(window.jQuery), 
+ function(n) {
	"use strict";
	var i = '[data-dismiss="alert"]',
		t = function(t) {
			n(t).on("click", i, this.close)
		},
		r;
	t.prototype.close = function(t) {
		function f() {
			i.trigger("closed.bs.alert").remove()
		}
		var u = n(this),
			r = u.attr("data-target"),
			i;
		(r || (r = u.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), i = n(r), t && t.preventDefault(), i.length || (i = u.hasClass("alert") ? u : u.parent()), i.trigger(t = n.Event("close.bs.alert")), t.isDefaultPrevented()) || (i.removeClass("in"), n.support.transition && i.hasClass("fade") ? i.one(n.support.transition.end, f).emulateTransitionEnd(150) : f())
	}, 
	r = n.fn.alert, n.fn.alert = function(i) {
		return this.each(function() {
			var r = n(this),
				u = r.data("bs.alert");
			u || r.data("bs.alert", u = new t(this)), typeof i == "string" && u[i].call(r)
		})
	}, 
	n.fn.alert.Constructor = t, n.fn.alert.noConflict = function() {
		return n.fn.alert = r, this
	};
	n(document).on("click.bs.alert.data-api", i, t.prototype.close)
}(window.jQuery), 
+ function(n) {
	"use strict";
	var t = function(i, r) {
			this.$element = n(i), this.options = n.extend({}, t.DEFAULTS, r)
		},
		i;
	t.DEFAULTS = {
		loadingText: "loading..."
	}, 
	t.prototype.setState = function(n) {
		var i = "disabled",
			t = this.$element,
			r = t.is("input") ? "val" : "html",
			u = t.data();
		n = n + "Text", u.resetText || t.data("resetText", t[r]()), t[r](u[n] || this.options[n]), setTimeout(function() {
			n == "loadingText" ? t.addClass(i).attr(i, i) : t.removeClass(i).removeAttr(i)
		}, 0)
	}, 
	t.prototype.toggle = function() {
		var n = this.$element.closest('[data-toggle="buttons"]'),
			t;
		n.length && (t = this.$element.find("input").prop("checked", !this.$element.hasClass("active")).trigger("change"), t.prop("type") === "radio" && n.find(".active").removeClass("active")), this.$element.toggleClass("active")
	}, 
	i = n.fn.button, n.fn.button = function(i) {
		return this.each(function() {
			var u = n(this),
				r = u.data("bs.button"),
				f = typeof i == "object" && i;
			r || u.data("bs.button", r = new t(this, f)), i == "toggle" ? r.toggle() : i && r.setState(i)
		})
	}, 
	n.fn.button.Constructor = t, n.fn.button.noConflict = function() {
		return n.fn.button = i, this
	};
	n(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(t) {
		var i = n(t.target);
		i.hasClass("btn") || (i = i.closest(".btn")), i.button("toggle"), t.preventDefault()
	})
}(window.jQuery), 
+ function(n) {
	"use strict";
	var t = function(t, i) {
			this.$element = n(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.pause == "hover" && this.$element.on("mouseenter", n.proxy(this.pause, this)).on("mouseleave", n.proxy(this.cycle, this))
		},
		i;
	t.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0
	}, 
	t.prototype.cycle = function(t) {
		return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)), this
	}, 
	t.prototype.getActiveIndex = function() {
		return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
	}, 
	t.prototype.to = function(t) {
		var r = this,
			i = this.getActiveIndex();
		if (!(t > this.$items.length - 1) && !(t < 0)) return this.sliding ? this.$element.one("slid", function() {
			r.to(t)
		}) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", n(this.$items[t]))
	}, 
	t.prototype.pause = function(t) {
		return t || (this.paused = !0), this.$element.find(".next, .prev").length && n.support.transition.end && (this.$element.trigger(n.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, 
	t.prototype.next = function() {
		if (!this.sliding) return this.slide("next")
	}, 
	t.prototype.prev = function() {
		if (!this.sliding) return this.slide("prev")
	}, 
	t.prototype.slide = function(t, i) {
		var u = this.$element.find(".item.active"),
			r = i || u[t](),
			s = this.interval,
			f = t == "next" ? "left" : "right",
			h = t == "next" ? "first" : "last",
			o = this,
			e;
		if (!r.length) {
			if (!this.options.wrap) return;
			r = this.$element.find(".item")[h]()
		}
		if (this.sliding = !0, s && this.pause(), e = n.Event("slide.bs.carousel", {
			relatedTarget: r[0],
			direction: f
		}), !r.hasClass("active")) {
			if (this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				this.$element.one("slid", function() {
					var t = n(o.$indicators.children()[o.getActiveIndex()]);
					t && t.addClass("active")
				})
			}
			if (n.support.transition && this.$element.hasClass("slide")) {
				if (this.$element.trigger(e), e.isDefaultPrevented()) return;
				r.addClass(t), r[0].offsetWidth, u.addClass(f), r.addClass(f), u.one(n.support.transition.end, function() {
					r.removeClass([t, f].join(" ")).addClass("active"), u.removeClass(["active", f].join(" ")), o.sliding = !1, setTimeout(function() {
						o.$element.trigger("slid")
					}, 0)
				}).emulateTransitionEnd(600)
			} else {
				if (this.$element.trigger(e), e.isDefaultPrevented()) return;
				u.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
			}
			return s && this.cycle(), this
		}
	}, 
	i = n.fn.carousel, n.fn.carousel = function(i) {
		return this.each(function() {
			var u = n(this),
				r = u.data("bs.carousel"),
				f = n.extend({}, t.DEFAULTS, u.data(), typeof i == "object" && i),
				e = typeof i == "string" ? i : f.slide;
			r || u.data("bs.carousel", r = new t(this, f)), typeof i == "number" ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle()
		})
	}, 
	n.fn.carousel.Constructor = t, n.fn.carousel.noConflict = function() {
		return n.fn.carousel = i, this
	};
	n(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(t) {
		var i = n(this),
			f, r = n(i.attr("data-target") || (f = i.attr("href")) && f.replace(/.*(?=#[^\s]+$)/, "")),
			e = n.extend({}, r.data(), i.data()),
			u = i.attr("data-slide-to");
		u && (e.interval = !1), r.carousel(e), (u = i.attr("data-slide-to")) && r.data("bs.carousel").to(u), t.preventDefault()
	});
	n(window).on("load", function() {
		n('[data-ride="carousel"]').each(function() {
			var t = n(this);
			t.carousel(t.data())
		})
	})
}(window.jQuery), 
+ function(n) {
	"use strict";
	var t = function(i, r) {
			this.$element = n(i), this.options = n.extend({}, t.DEFAULTS, r), this.transitioning = null, this.options.parent && (this.$parent = n(this.options.parent)), this.options.toggle && this.toggle()
		},
		i;
	t.DEFAULTS = {
		toggle: !0
	}, t.prototype.dimension = function() {
		var n = this.$element.hasClass("width");
		return n ? "width" : "height"
	}, t.prototype.show = function() {
		var u, t, r, i, f, e;
		if (!this.transitioning && !this.$element.hasClass("in") && (u = n.Event("show.bs.collapse"), this.$element.trigger(u), !u.isDefaultPrevented())) {
			if (t = this.$parent && this.$parent.find("> .panel > .in"), t && t.length) {
				if (r = t.data("bs.collapse"), r && r.transitioning) return;
				t.collapse("hide"), r || t.data("bs.collapse", null)
			}
			if (i = this.dimension(), this.$element.removeClass("collapse").addClass("collapsing")[i](0), this.transitioning = 1, f = function() {
				this.$element.removeClass("collapsing").addClass("in")[i]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
			}, !n.support.transition) return f.call(this);
			e = n.camelCase(["scroll", i].join("-")), this.$element.one(n.support.transition.end, n.proxy(f, this)).emulateTransitionEnd(350)[i](this.$element[0][e])
		}
	}, t.prototype.hide = function() {
		var i, t, r;
		if (!this.transitioning && this.$element.hasClass("in") && (i = n.Event("hide.bs.collapse"), this.$element.trigger(i), !i.isDefaultPrevented())) {
			if (t = this.dimension(), this.$element[t](this.$element[t]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1, r = function() {
				this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
			}, !n.support.transition) return r.call(this);
			this.$element[t](0).one(n.support.transition.end, n.proxy(r, this)).emulateTransitionEnd(350)
		}
	}, t.prototype.toggle = function() {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	}, i = n.fn.collapse, n.fn.collapse = function(i) {
		return this.each(function() {
			var r = n(this),
				u = r.data("bs.collapse"),
				f = n.extend({}, t.DEFAULTS, r.data(), typeof i == "object" && i);
			u || r.data("bs.collapse", u = new t(this, f)), typeof i == "string" && u[i]()
		})
	}, n.fn.collapse.Constructor = t, n.fn.collapse.noConflict = function() {
		return n.fn.collapse = i, this
	};
	n(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(t) {
		var i = n(this),
			e, s = i.attr("data-target") || t.preventDefault() || (e = i.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""),
			r = n(s),
			u = r.data("bs.collapse"),
			h = u ? "toggle" : i.data(),
			f = i.attr("data-parent"),
			o = f && n(f);
		u && u.transitioning || (o && o.find('[data-toggle=collapse][data-parent="' + f + '"]').not(i).addClass("collapsed"), i[r.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), r.collapse(h)
	})
}(window.jQuery), 
+ function(n) {
	"use strict";

	function r() {
		n(e).remove(), n(i).each(function(t) {
			var i = u(n(this));
			i.hasClass("open") && ((i.trigger(t = n.Event("hide.bs.dropdown")), t.isDefaultPrevented()) || i.removeClass("open").trigger("hidden.bs.dropdown"))
		})
	}
	function u(t) {
		var i = t.attr("data-target"),
			r;
		return i || (i = t.attr("href"), i = i && /#/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = i && n(i), r && r.length ? r : t.parent()
	}
	var e = ".dropdown-backdrop",
		i = "[data-toggle=dropdown]",
		t = function(t) {
			var i = n(t).on("click.bs.dropdown", this.toggle)
		},
		f;
	t.prototype.toggle = function(t) {
		var f = n(this),
			i, e;
		if (!f.is(".disabled, :disabled")) {
			if (i = u(f), e = i.hasClass("open"), r(), !e) {
				if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length) n('<div class="dropdown-backdrop"/>').insertAfter(n(this)).on("click", r);
				if (i.trigger(t = n.Event("show.bs.dropdown")), t.isDefaultPrevented()) return;
				i.toggleClass("open").trigger("shown.bs.dropdown"), f.focus()
			}
			return !1
		}
	}, t.prototype.keydown = function(t) {
		var e, o, s, f, r;
		if (/(38|40|27)/.test(t.keyCode) && (e = n(this), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) {
			if (o = u(e), s = o.hasClass("open"), !s || s && t.keyCode == 27) return t.which == 27 && o.find(i).focus(), e.click();
			(f = n("[role=menu] li:not(.divider):visible a", o), f.length) && (r = f.index(f.filter(":focus")), t.keyCode == 38 && r > 0 && r--, t.keyCode == 40 && r < f.length - 1 && r++, ~r || (r = 0), f.eq(r).focus())
		}
	}, f = n.fn.dropdown, n.fn.dropdown = function(i) {
		return this.each(function() {
			var r = n(this),
				u = r.data("dropdown");
			u || r.data("dropdown", u = new t(this)), typeof i == "string" && u[i].call(r)
		})
	}, n.fn.dropdown.Constructor = t, n.fn.dropdown.noConflict = function() {
		return n.fn.dropdown = f, this
	};
	n(document).on("click.bs.dropdown.data-api", r).on("click.bs.dropdown.data-api", ".dropdown form", function(n) {
		n.stopPropagation()
	}).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i + ", [role=menu]", t.prototype.keydown)
}(window.jQuery), 
+ function(n) {
	"use strict";
	var t = function(t, i) {
			this.options = i, this.$element = n(t), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote)
		},
		i;
	t.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, 
	t.prototype.toggle = function(n) {
		return this[this.isShown ? "hide" : "show"](n)
	}, 
	t.prototype.show = function(t) {
		var i = this,
			r = n.Event("show.bs.modal", {
				relatedTarget: t
			});
		if (this.$element.trigger(r), !this.isShown && !r.isDefaultPrevented()) {
			this.isShown = !0, this.escape();
			this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this));
			this.backdrop(function() {
				var u = n.support.transition && i.$element.hasClass("fade"),
					r;
				i.$element.parent().length || i.$element.appendTo(document.body), i.$element.show(), u && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus(), r = n.Event("shown.bs.modal", {
					relatedTarget: t
				}), u ? i.$element.find(".modal-dialog").one(n.support.transition.end, function() {
					i.$element.focus().trigger(r)
				}).emulateTransitionEnd(300) : i.$element.focus().trigger(r)
			})
		}
	}, 
	t.prototype.hide = function(t) {
		(t && t.preventDefault(), t = n.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented()) && (this.isShown = !1, this.escape(), n(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), n.support.transition && this.$element.hasClass("fade") ? this.$element.one(n.support.transition.end, n.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
	}, 
	t.prototype.enforceFocus = function() {
		n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function(n) {
			this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.focus()
		}, this))
	}, 
	t.prototype.escape = function() {
		if (this.isShown && this.options.keyboard) this.$element.on("keyup.dismiss.bs.modal", n.proxy(function(n) {
			n.which == 27 && this.hide()
		}, this));
		else this.isShown || this.$element.off("keyup.dismiss.bs.modal")
	}, 
	t.prototype.hideModal = function() {
		var n = this;
		this.$element.hide(), this.backdrop(function() {
			n.removeBackdrop(), n.$element.trigger("hidden.bs.modal")
		})
	}, 
	t.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, 
	t.prototype.backdrop = function(t) {
		var u = this,
			r = this.$element.hasClass("fade") ? "fade" : "",
			i;
		if (this.isShown && this.options.backdrop) {
			i = n.support.transition && r, this.$backdrop = n('<div class="modal-backdrop ' + r + '" />').appendTo(document.body);
			this.$element.on("click.dismiss.modal", n.proxy(function(n) {
				n.target === n.currentTarget && (this.options.backdrop == "static" ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
			}, this));
			if (i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
			i ? this.$backdrop.one(n.support.transition.end, t).emulateTransitionEnd(150) : t()
		} else!this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(n.support.transition.end, t).emulateTransitionEnd(150) : t()) : t && t()
	}, 
	i = n.fn.modal, n.fn.modal = function(i, r) {
		return this.each(function() {
			var f = n(this),
				u = f.data("bs.modal"),
				e = n.extend({}, t.DEFAULTS, f.data(), typeof i == "object" && i);
			u || f.data("bs.modal", u = new t(this, e)), typeof i == "string" ? u[i](r) : e.show && u.show(r)
		})
	}, 
	n.fn.modal.Constructor = t, n.fn.modal.noConflict = function() {
		return n.fn.modal = i, this
	};
	n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
		var i = n(this),
			r = i.attr("href"),
			u = n(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
			f = u.data("modal") ? "toggle" : n.extend({
				remote: !/#/.test(r) && r
			}, u.data(), i.data());
		t.preventDefault();
		u.modal(f, this).one("hide", function() {
			i.is(":visible") && i.focus()
		})
	});
	n(document).on("show.bs.modal", ".modal", function() {
		n(document.body).addClass("modal-open")
	}).on("hidden.bs.modal", ".modal", function() {
		n(document.body).removeClass("modal-open")
	})
}(window.jQuery), 
+ function(n) {
	"use strict";
	var t = function(n, t) {
			this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", n, t)
		},
		i;
	t.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1
	}, 
	t.prototype.init = function(t, i, r) {
		var f, e, u, o, s;
		for (this.enabled = !0, this.type = t, this.$element = n(i), this.options = this.getOptions(r), f = this.options.trigger.split(" "), e = f.length; e--;) if (u = f[e], u == "click") this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
		else if (u != "manual") {
			o = u == "hover" ? "mouseenter" : "focus", s = u == "hover" ? "mouseleave" : "blur";
			this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this));
			this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this))
		}
		this.options.selector ? this._options = n.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, 
	t.prototype.getDefaults = function() {
		return t.DEFAULTS
	}, 
	t.prototype.getOptions = function(t) {
		return t = n.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && typeof t.delay == "number" && (t.delay = {
			show: t.delay,
			hide: t.delay
		}), t
	}, 
	t.prototype.getDelegateOptions = function() {
		var t = {},
			i = this.getDefaults();
		return this._options && n.each(this._options, function(n, r) {
			i[n] != r && (t[n] = r)
		}), t
	}, 
	t.prototype.enter = function(t) {
		var i = t instanceof this.constructor ? t : n(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
		if (clearTimeout(i.timeout), i.hoverState = "in", !i.options.delay || !i.options.delay.show) return i.show();
		i.timeout = setTimeout(function() {
			i.hoverState == "in" && i.show()
		}, i.options.delay.show)
	}, 
	t.prototype.leave = function(t) {
		var i = t instanceof this.constructor ? t : n(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
		if (clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
		i.timeout = setTimeout(function() {
			i.hoverState == "out" && i.hide()
		}, i.options.delay.hide)
	}, 
	t.prototype.show = function() {
		var o = n.Event("show.bs." + this.type),
			i, l;
		if (this.hasContent() && this.enabled) {
			if (this.$element.trigger(o), o.isDefaultPrevented()) return;
			i = this.tip(), this.setContent(), this.options.animation && i.addClass("fade");
			var t = typeof this.options.placement == "function" ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
				s = /\s?auto?\s?/i,
				h = s.test(t);
			h && (t = t.replace(s, "") || "top"), i.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(t), this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
			var r = this.getPosition(),
				u = i[0].offsetWidth,
				f = i[0].offsetHeight;
			if (h) {
				var e = this.$element.parent(),
					a = t,
					c = document.documentElement.scrollTop || document.body.scrollTop,
					v = this.options.container == "body" ? window.innerWidth : e.outerWidth(),
					y = this.options.container == "body" ? window.innerHeight : e.outerHeight(),
					p = this.options.container == "body" ? 0 : e.offset().left;
				t = t == "bottom" && r.top + r.height + f - c > y ? "top" : t == "top" && r.top - c - f < 0 ? "bottom" : t == "right" && r.right + u > v ? "left" : t == "left" && r.left - u < p ? "right" : t, i.removeClass(a).addClass(t)
			}
			l = this.getCalculatedOffset(t, r, u, f), this.applyPlacement(l, t), this.$element.trigger("shown.bs." + this.type)
		}
	}, 
	t.prototype.applyPlacement = function(n, t) {
		var h, i = this.tip(),
			c = i[0].offsetWidth,
			f = i[0].offsetHeight,
			e = parseInt(i.css("margin-top"), 10),
			o = parseInt(i.css("margin-left"), 10),
			u, r, s;
		isNaN(e) && (e = 0), isNaN(o) && (o = 0), n.top = n.top + e, n.left = n.left + o, i.offset(n).addClass("in"), u = i[0].offsetWidth, r = i[0].offsetHeight, t == "top" && r != f && (h = !0, n.top = n.top + f - r), /bottom|top/.test(t) ? (s = 0, n.left < 0 && (s = n.left * -2, n.left = 0, i.offset(n), u = i[0].offsetWidth, r = i[0].offsetHeight), this.replaceArrow(s - c + u, u, "left")) : this.replaceArrow(r - f, r, "top"), h && i.offset(n)
	}, 
	t.prototype.replaceArrow = function(n, t, i) {
		this.arrow().css(i, n ? 50 * (1 - n / t) + "%" : "")
	}, 
	t.prototype.setContent = function() {
		var n = this.tip(),
			t = this.getTitle();
		n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), n.removeClass("fade in top bottom left right")
	}, 
	t.prototype.hide = function() {
		function r() {
			u.hoverState != "in" && t.detach()
		}
		var u = this,
			t = this.tip(),
			i = n.Event("hide.bs." + this.type);
		if (this.$element.trigger(i), !i.isDefaultPrevented()) return t.removeClass("in"), n.support.transition && this.$tip.hasClass("fade") ? t.one(n.support.transition.end, r).emulateTransitionEnd(150) : r(), this.$element.trigger("hidden.bs." + this.type), this
	}, 
	t.prototype.fixTitle = function() {
		var n = this.$element;
		(n.attr("title") || typeof n.attr("data-original-title") != "string") && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
	}, 
	t.prototype.hasContent = function() {
		return this.getTitle()
	}, 
	t.prototype.getPosition = function() {
		var t = this.$element[0];
		return n.extend({}, typeof t.getBoundingClientRect == "function" ? t.getBoundingClientRect() : {
			width: t.offsetWidth,
			height: t.offsetHeight
		}, this.$element.offset())
	}, 
	t.prototype.getCalculatedOffset = function(n, t, i, r) {
		return n == "bottom" ? {
			top: t.top + t.height,
			left: t.left + t.width / 2 - i / 2
		} : n == "top" ? {
			top: t.top - r,
			left: t.left + t.width / 2 - i / 2
		} : n == "left" ? {
			top: t.top + t.height / 2 - r / 2,
			left: t.left - i
		} : {
			top: t.top + t.height / 2 - r / 2,
			left: t.left + t.width
		}
	}, 
	t.prototype.getTitle = function() {
		var t, i = this.$element,
			n = this.options;
		return t = i.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(i[0]) : n.title)
	}, 
	t.prototype.tip = function() {
		return this.$tip = this.$tip || n(this.options.template)
	}, 
	t.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, 
	t.prototype.validate = function() {
		this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
	}, 
	t.prototype.enable = function() {
		this.enabled = !0
	}, 
	t.prototype.disable = function() {
		this.enabled = !1
	}, 
	t.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	}, 
	t.prototype.toggle = function(t) {
		var i = t ? n(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
		i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
	}, 
	t.prototype.destroy = function() {
		this.hide().$element.off("." + this.type).removeData("bs." + this.type)
	}, 
	i = n.fn.tooltip, n.fn.tooltip = function(i) {
		return this.each(function() {
			var u = n(this),
				r = u.data("bs.tooltip"),
				f = typeof i == "object" && i;
			r || u.data("bs.tooltip", r = new t(this, f)), typeof i == "string" && r[i]()
		})
	}, 
	n.fn.tooltip.Constructor = t, n.fn.tooltip.noConflict = function() {
		return n.fn.tooltip = i, this
	}
}(window.jQuery), 
+ function(n) {
	"use strict";
	var t = function(n, t) {
			this.init("popover", n, t)
		},
		i;
	if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
	t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
	}), t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype), t.prototype.constructor = t, t.prototype.getDefaults = function() {
		return t.DEFAULTS
	}, t.prototype.setContent = function() {
		var n = this.tip(),
			t = this.getTitle(),
			i = this.getContent();
		n.find(".popover-title")[this.options.html ? "html" : "text"](t), n.find(".popover-content")[this.options.html ? "html" : "text"](i), n.removeClass("fade top bottom left right in"), n.find(".popover-title").html() || n.find(".popover-title").hide()
	}, t.prototype.hasContent = function() {
		return this.getTitle() || this.getContent()
	}, t.prototype.getContent = function() {
		var t = this.$element,
			n = this.options;
		return t.attr("data-content") || (typeof n.content == "function" ? n.content.call(t[0]) : n.content)
	}, t.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	}, t.prototype.tip = function() {
		return this.$tip || (this.$tip = n(this.options.template)), this.$tip
	}, i = n.fn.popover, n.fn.popover = function(i) {
		return this.each(function() {
			var u = n(this),
				r = u.data("bs.popover"),
				f = typeof i == "object" && i;
			r || u.data("bs.popover", r = new t(this, f)), typeof i == "string" && r[i]()
		})
	}, n.fn.popover.Constructor = t, n.fn.popover.noConflict = function() {
		return n.fn.popover = i, this
	}
}(window.jQuery), 
+ function(n) {
	"use strict";

	function t(i, r) {
		var u, f = n.proxy(this.process, this);
		this.$element = n(i).is("body") ? n(window) : n(i), this.$body = n("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = n.extend({}, t.DEFAULTS, r), this.selector = (this.options.target || (u = n(i).attr("href")) && u.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = n([]), this.targets = n([]), this.activeTarget = null, this.refresh(), this.process()
	}
	t.DEFAULTS = {
		offset: 10
	}, t.prototype.refresh = function() {
		var i = this.$element[0] == window ? "offset" : "position",
			t, r;
		this.offsets = n([]), this.targets = n([]), t = this, r = this.$body.find(this.selector).map(function() {
			var f = n(this),
				r = f.data("target") || f.attr("href"),
				u = /^#\w/.test(r) && n(r);
			return u && u.length && [
				[u[i]().top + (!n.isWindow(t.$scrollElement.get(0)) && t.$scrollElement.scrollTop()), r]
			] || null
		}).sort(function(n, t) {
			return n[0] - t[0]
		}).each(function() {
			t.offsets.push(this[0]), t.targets.push(this[1])
		})
	}, t.prototype.process = function() {
		var i = this.$scrollElement.scrollTop() + this.options.offset,
			f = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
			e = f - this.$scrollElement.height(),
			t = this.offsets,
			r = this.targets,
			u = this.activeTarget,
			n;
		if (i >= e) return u != (n = r.last()[0]) && this.activate(n);
		for (n = t.length; n--;) u != r[n] && i >= t[n] && (!t[n + 1] || i <= t[n + 1]) && this.activate(r[n])
	}, t.prototype.activate = function(t) {
		this.activeTarget = t, n(this.selector).parents(".active").removeClass("active");
		var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
			i = n(r).parents("li").addClass("active");
		i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate")
	};
	var i = n.fn.scrollspy;
	n.fn.scrollspy = function(i) {
		return this.each(function() {
			var u = n(this),
				r = u.data("bs.scrollspy"),
				f = typeof i == "object" && i;
			r || u.data("bs.scrollspy", r = new t(this, f)), typeof i == "string" && r[i]()
		})
	}, n.fn.scrollspy.Constructor = t, n.fn.scrollspy.noConflict = function() {
		return n.fn.scrollspy = i, this
	};
	n(window).on("load", function() {
		n('[data-spy="scroll"]').each(function() {
			var t = n(this);
			t.scrollspy(t.data())
		})
	})
}(window.jQuery), 
+ function(n) {
	"use strict";
	var t = function(t) {
			this.element = n(t)
		},
		i;
	t.prototype.show = function() {
		var t = this.element,
			e = t.closest("ul:not(.dropdown-menu)"),
			i = t.data("target"),
			r, u, f;
		(i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), t.parent("li").hasClass("active")) || (r = e.find(".active:last a")[0], u = n.Event("show.bs.tab", {
			relatedTarget: r
		}), t.trigger(u), u.isDefaultPrevented()) || (f = n(i), this.activate(t.parent("li"), e), this.activate(f, f.parent(), function() {
			t.trigger({
				type: "shown.bs.tab",
				relatedTarget: r
			})
		}))
	}, t.prototype.activate = function(t, i, r) {
		function e() {
			u.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), f ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), r && r()
		}
		var u = i.find("> .active"),
			f = r && n.support.transition && u.hasClass("fade");
		f ? u.one(n.support.transition.end, e).emulateTransitionEnd(150) : e(), u.removeClass("in")
	}, i = n.fn.tab, n.fn.tab = function(i) {
		return this.each(function() {
			var u = n(this),
				r = u.data("bs.tab");
			r || u.data("bs.tab", r = new t(this)), typeof i == "string" && r[i]()
		})
	}, n.fn.tab.Constructor = t, n.fn.tab.noConflict = function() {
		return n.fn.tab = i, this
	};
	n(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
		t.preventDefault(), n(this).tab("show")
	})
}(window.jQuery), 
+ function(n) {
	"use strict";
	var t = function(i, r) {
			this.options = n.extend({}, t.DEFAULTS, r), this.$window = n(window).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this)), this.$element = n(i), this.affixed = this.unpin = null, this.checkPosition()
		},
		i;
	t.RESET = "affix affix-top affix-bottom", t.DEFAULTS = {
		offset: 0
	}, 
	t.prototype.checkPositionWithEventLoop = function() {
		setTimeout(n.proxy(this.checkPosition, this), 1)
	}, 
	t.prototype.checkPosition = function() {
		var i;
		if (this.$element.is(":visible")) {
			var s = n(document).height(),
				e = this.$window.scrollTop(),
				o = this.$element.offset(),
				r = this.options.offset,
				f = r.top,
				u = r.bottom;
			(
				typeof r != "object" && (u = f = r), 
				typeof f == "function" && (f = r.top()), 
				typeof u == "function" && (u = r.bottom()), 
				i = this.unpin != null && e + this.unpin <= o.top ? !1 : u != null && o.top + this.$element.height() >= s - u ? "bottom" : f != null && e <= f ? "top" : !1, 
				this.affixed !== i
			) 
			&& (
				this.unpin && this.$element.css("top", ""), 
				this.affixed = i, this.unpin = i == "bottom" ? o.top - e : null, 
				this.$element.removeClass(t.RESET).addClass("affix" + (i ? "-" + i : "")), 
				i == "bottom" && this.$element.offset({
					top: document.body.offsetHeight - u - this.$element.height()
				})
			)
		}
	}, 
	i = n.fn.affix, n.fn.affix = function(i) {
		return this.each(function() {
			var u = n(this),
				r = u.data("bs.affix"),
				f = typeof i == "object" && i;
			r || u.data("bs.affix", r = new t(this, f)), typeof i == "string" && r[i]()
		})
	}, 
	n.fn.affix.Constructor = t, n.fn.affix.noConflict = function() {
		return n.fn.affix = i, this
	};
	n(window).on("load", function() {
		n('[data-spy="affix"]').each(function() {
			var i = n(this),
				t = i.data();
			t.offset = t.offset || {}, t.offsetBottom && (t.offset.bottom = t.offsetBottom), t.offsetTop && (t.offset.top = t.offsetTop), i.affix(t)
		})
	})
}(window.jQuery);


var global = {
	setupBindings: function() {
		// $(document).ajaxComplete(function(n, t) {
		// 	if (t.status == 500) global.openNotificaiton("An error occured!", !0), global.closeLoader(), t.abort();
		// 	else try {
		// 		var u = jQuery.parseJSON(t.responseText);
		// 		global.ajaxFormSuccess(u, t.element), u.Redirect || (global.closeLoader(), global.closeModalLoaderPopup())
		// 	} catch (f) {}
		// }), 
		// $("img.lazy").unveil(200), $(".phone").inputmask({
		// 	mask: "+99 (999) 999 99 99"
		// }), 
		// $(".numeric").numeric(), 
		// $("input, textarea").placeholder();
		var n = $("#homeHeader").height() + 60;
		n < 700 && (n = 700), $("#homeHeader").css("height", n + "px"), $(".openMenu").click(function() {
			$("#topMenu").toggleClass("open"), 
			$("#curtain").toggleClass("open")
		}), 
		$("#closeMenu").click(function() {
			$("#topMenu").toggleClass("open"), 
			$("#curtain").toggleClass("open")
		}), 
		$("#curtain").click(function() {
			$("#topMenu").toggleClass("open"), 
			$("#curtain").toggleClass("open")
		}), 
		$("#volumeOpenner").click(function() {
			$("#headerVideo").prop("muted") ? (
				$("#headerVideo").prop("muted", !1), 
				$("#volumeOpenner").addClass("open")
			) : (
				$("#headerVideo").prop("muted", !0), 
				$("#volumeOpenner").removeClass("open")
			)
		}); 
		// $(".fancybox").fancybox({
		// 	padding: 0,
		// 	helpers: {
		// 		overlay: {
		// 			locked: !1
		// 		}
		// 	}
		// }), 
		// $(".fancyvideo").fancybox({
		// 	padding: 0,
		// 	helpers: {
		// 		overlay: {
		// 			locked: !1
		// 		}
		// 	},
		// 	type: "iframe"
		// })
		// });
		// $(document).on("click", ".facebookShare-link", function() {
		// 	var n = $(this).data("href"),
		// 		t = window.open("https://www.facebook.com/sharer/sharer.php?u=" + n, "facebookWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0")
		// });
		// $(document).on("click", ".twitterShare-link", function() {
		// 	var n = $(this).data("href"),
		// 		t = $(this).data("text"),
		// 		i = window.open("https://twitter.com/intent/tweet?url=" + n + "&text=" + encodeURIComponent(t), "twitterWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0")
		// });
		// $(".program-dates li").click(function() {
		// 	$(".program-dates li").removeClass("active"), $(this).addClass("active"), $(".program table").removeClass("active"), $(".program table[id=" + $(this).data("target") + "]").addClass("active")
		// })
	},
	// newsletterLoad: function() {
	// 	$("#txtNewsletter").unbind("focus"), $("#txtNewsletter").popover("destroy"), $("#txtNewsletter").popover({
	// 		content: "<i class='fa fa-spin fa-cog'><\/i>",
	// 		html: !0,
	// 		placement: "bottom"
	// 	}), $("#txtNewsletter").popover("show")
	// },
	// newsletterSuccess: function(n) {
	// 	$("#txtNewsletter").popover("destroy"), n.IsSuccess ? (global.openAjaxModal("/Home/InvitationModal", {
	// 		email: n.ResultObject
	// 	}, function() {}), dataLayer.push({
	// 		event: "email",
	// 		eventCategory: "email",
	// 		eventAction: "email registration",
	// 		eventLabel: n.ResultObject,
	// 		eventValue: 1
	// 	})) : ($("#txtNewsletter").popover({
	// 		content: n.Message[0].ResultMessage,
	// 		placement: "bottom"
	// 	}), $("#txtNewsletter").popover("show")), $("#txtNewsletter").focus(function() {
	// 		$("#txtNewsletter").popover("destroy")
	// 	})
	// },
	// newsletterLoad2: function() {
	// 	$("#txtNewsletter2").unbind("focus"), $("#txtNewsletter2").popover("destroy"), $("#txtNewsletter2").popover({
	// 		content: "<i class='fa fa-spin fa-cog'><\/i>",
	// 		html: !0,
	// 		placement: "bottom"
	// 	}), $("#txtNewsletter2").popover("show")
	// },
	// newsletterSuccess2: function(n) {
	// 	$("#txtNewsletter2").popover("destroy"), n.IsSuccess ? (global.openAjaxModal("/Home/InvitationModal", {
	// 		email: n.ResultObject
	// 	}, function() {}), dataLayer.push({
	// 		event: "email footer",
	// 		eventCategory: "email footer",
	// 		eventAction: "email registration footer",
	// 		eventLabel: n.ResultObject,
	// 		eventValue: 1
	// 	})) : ($("#txtNewsletter2").popover({
	// 		content: n.Message[0].ResultMessage,
	// 		placement: "bottom"
	// 	}), $("#txtNewsletter2").popover("show")), $("#txtNewsletter2").focus(function() {
	// 		$("#txtNewsletter2").popover("destroy")
	// 	})
	// },
	// openLoader: function() {
	// 	$("#globalLoader").show()
	// },
	// closeLoader: function() {
	// 	$("#globalLoader").hide()
	// },
	// openNotificaiton: function() {},
	// post: function(n, t, i) {
	// 	var r;
	// 	t != null ? r = authorization.addAntiForgeryToken(t) : authorization.addAntiForgeryToken({}), $.post(n, r, function(n) {
	// 		i && i(n)
	// 	})
	// },
	// ajaxFormSuccess: function(n, t) {
	// 	setTimeout(function() {
	// 		n.IsSuccess ? n.Redirect != "" && n.Redirect != null ? window.location = n.Redirect : n.Message != null && global.openNotificaiton(n.Message[0].ResultMessage) : t && n.Message[0].Field != null ? forms.openFormNotification(t, "error", n) : global.openNotificaiton(n.Message[0].ResultMessage, !0), t && (forms.currentFormSerialization = $(t).serialize())
	// 	}, 0)
	// },
	// openAjaxModal: function(n, t, i) {
	// 	global.post(n, t, function(n) {
	// 		global.openModal(n), i && i()
	// 	})
	// },
	// openModal: function(n) {
	// 	$("#modal").html(n), $("#modal").modal()
	// }
};
// authorization = {
// 	addAntiForgeryToken: function(n) {
// 		return n.__RequestVerificationToken = $("#global input[name=__RequestVerificationToken]").val(), n
// 	}
// },
// forms = {
// 	openFormNotification: function(n, t, i) {
// 		for (var f = "", e = $(n).find(".error-field"), u, r = 0; r < i.Message.length; r++) f += ' <i class="fa fa-exclamation-triangle"><\/i> ' + i.Message[r].ResultMessage + "<br>", u = $(n).find("input[type='text'][name='" + i.Message[r].Field + "'],textarea[name='" + i.Message[r].Field + "']").first(), u.parent().addClass("has-error"), u.parent().popover({
// 			content: i.Message[r].ResultMessage,
// 			placement: "left"
// 		}), u.parent().popover("show"), u.focus(function() {
// 			$(this).parent().removeClass("has-error"), $(this).parent().popover("destroy")
// 		});
// 		e.find(".error-message").html(f), e.show(), $("#modal").hasClass("in") ? $("#modal").animate({
// 			scrollTop: 0
// 		}) : $("body,html").animate({
// 			scrollTop: n ? $(n).offset().top - 140 : 0
// 		})
// 	}
// };
$(document).ready(function() {
	global.setupBindings(), 
	$(window).resize(), 
	typeof readyFunction != "undefined" && readyFunction(), 
	$("#homeHeader video").addClass("show"), 
	setTimeout(function() {
		$("#homeHeader ").addClass("show")
	}, 2e3), 
	$("#Guests").change(function() {
		$("#divGuests").html("");
		var n = $("#Guests").val();
		n > 1 && guests.addGuests(n)
	})
}), 
$(window).scroll(function() {
	var n = $(document).scrollTop();
	n > 0 ? $("nav").hasClass("scrolled") || (
		$("nav").addClass("scrolled"), 
		setTimeout(function() {
			$("nav").hasClass("scrolled") && $("nav").addClass("fixed")
		}, 200)
	) : $("nav").hasClass("scrolled") && (
		$("nav").removeClass("scrolled"), 
		$("nav").removeClass("fixed")
	)
}), 
$(window).resize(function() {
	$("#topMenu").css("margin-top", $("#topMenu").outerHeight() * -1 + "px")
});
// guests = {
// 	addGuests: function(n) {
// 		global.post("/Registration/AddGuests", {
// 			count: n
// 		}, function(n) {
// 			$("#divGuests").html(""), 
// 			$("#divGuests").append(n), 
// 			global.setupBindings($("#divGuests"))
// 		})
// 	}
// }