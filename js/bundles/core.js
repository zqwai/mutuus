if (!function(n, t, i, r) {
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
}(window, document, jQuery)
)


var global = {
	setupBindings: function() {

		var n = $("#homeHeader").height() + 60;
		n < 700 && (n = 700), 
		$("#homeHeader").css("height", n + "px"), 
		$(".openMenu").click(function() {
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
	}
};
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