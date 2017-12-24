/* Pretty handling of time axes.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

Set axis.mode to "time" to enable. See the section "Time series data" in
API.txt for details.

Edited for Jalali with SMAH2 , telegram @smah2 , mr.hossini@mihanmail.ir

*/

/* JDATE Function */

(function(){function f(a,b){return a-b*Math.floor(a/b)}function l(a,b,c){return 1721424.5+365*(a-1)+Math.floor((a-1)/4)+-Math.floor((a-1)/100)+Math.floor((a-1)/400)+Math.floor((367*b-362)/12+(2>=b?0:0!=a%4||0==a%100&&0!=a%400?-2:-1)+c)}
function n(a){var b,c,d,e;a=Math.floor(a-.5)+.5;b=a-1721425.5;c=Math.floor(b/146097);d=f(b,146097);b=Math.floor(d/36524);e=f(d,36524);d=Math.floor(e/1461);e=Math.floor(f(e,1461)/365);c=400*c+100*b+4*d+e;4!=b&&4!=e&&c++;b=Math.floor((12*(a-l(c,1,1)+(a<l(c,3,1)?0:0!=c%4||0==c%100&&0!=c%400?2:1))+373)/367);return[c,b,a-l(c,b,1)+1]}function p(a,b,c){var d;a-=0<=a?474:473;d=474+f(a,2820);return c+(7>=b?31*(b-1):30*(b-1)+6)+Math.floor((682*d-110)/2816)+365*(d-1)+1029983*Math.floor(a/2820)+1948319.5}
function q(a){var b,c,d;a=Math.floor(a)+.5;c=a-p(475,1,1);b=Math.floor(c/1029983);d=f(c,1029983);1029982==d?c=2820:(c=Math.floor(d/366),d=f(d,366),c=Math.floor((2134*c+2816*d+2815)/1028522)+c+1);b=c+2820*b+474;0>=b&&b--;c=a-p(b,1,1)+1;c=186>=c?Math.ceil(c/31):Math.ceil((c-6)/30);return[b,c,a-p(b,c,1)+1]};var Date=window.Date;function r(a){return a.replace(/[\u06f0-\u06f9]/g,function(a){return String.fromCharCode(a.charCodeAt(0)-1728)})}function s(a){return 10>a?"0"+a:a}function t(a,b,c){if(12<b||0>=b){var d=Math.floor((b-1)/12);a+=d;b-=12*d}return p(a,b,c)}
function u(a,b,c,d,e,w,x){if("string"==typeof a){var h;a:{h=r(a);var g=/^(\d|\d\d|\d\d\d\d)(?:([-\/])(\d{1,2})(?:\2(\d|\d\d|\d\d\d\d))?)?(([ T])(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?(Z|([+-])(\d{2})(?::?(\d{2}))?)?)?$/.exec(h);if(g){var D=g[2],H=g[6],k=+g[1],y=+g[3]||1,m=+g[4]||1,E="/"!=D&&" "!=g[6],I=+g[7]||0,J=+g[8]||0,K=+g[9]||0,L=1E3*+("0."+(g[10]||"0")),F=g[11];h=E&&(F||!g[5]);var M=("-"==g[12]?-1:1)*(60*(+g[13]||0)+(+g[14]||0));if((!F&&"T"!=H||E)&&1E3<=m!=1E3<=k){if(1E3<=m){if("-"==D){h=void 0;
break a}k=m=+g[1]}g=n(t(k,y,m));k=g[0];y=g[1];m=g[2];k=new Date(k,y-1,m,I,J,K,L);h&&k.setUTCMinutes(k.getUTCMinutes()-k.getTimezoneOffset()+M);h=k;break a}}h=void 0}this.a=h;if(!this.a)throw"Cannot parse date string";}else 0==arguments.length?this.a=new Date:1==arguments.length?this.a=new Date(a instanceof u?a.a:a):(h=n(t(a,(b||0)+1,c||1)),this.a=new Date(h[0],h[1]-1,h[2],d||0,e||0,w||0,x||0));this._date=this.a;this.c=null;this.b=[0,0,0];this.e=null;this.d=[0,0,0]}u.prototype={};
function v(a,b,c,d){var e=z(a);void 0!==d&&(e[2]=d);e[b]=c;b=n(t(e[0],e[1],e[2]));a.a.setUTCFullYear(b[0]);a.a.setUTCMonth(b[1]-1,b[2])}function A(a,b,c,d){var e=B(a);e[b]=c;void 0!==d&&(e[2]=d);b=n(t(e[0],e[1],e[2]));a.a.setFullYear(b[0]);a.a.setMonth(b[1]-1,b[2])}function z(a){a.e!=+a.a&&(a.e=+a.a,a.d=q(l(a.a.getUTCFullYear(),a.a.getUTCMonth()+1,a.a.getUTCDate())));return a.d}function B(a){a.c!=+a.a&&(a.c=+a.a,a.b=q(l(a.a.getFullYear(),a.a.getMonth()+1,a.a.getDate())));return a.b}
u.prototype.getDate=function(){return B(this)[2]};u.prototype.getMonth=function(){return B(this)[1]-1};u.prototype.getFullYear=function(){return B(this)[0]};u.prototype.getUTCDate=function(){return z(this)[2]};u.prototype.getUTCMonth=function(){return z(this)[1]-1};u.prototype.getUTCFullYear=function(){return z(this)[0]};u.prototype.setDate=function(a){A(this,2,a)};u.prototype.setFullYear=function(a){A(this,0,a)};u.prototype.setMonth=function(a,b){A(this,1,a+1,b)};
u.prototype.setUTCDate=function(a){v(this,2,a)};u.prototype.setUTCFullYear=function(a){v(this,0,a)};u.prototype.setUTCMonth=function(a,b){v(this,1,a+1,b)};u.prototype.toLocaleString=function(){return this.getFullYear()+"/"+s(this.getMonth()+1)+"/"+s(this.getDate())+" "+s(this.getHours())+":"+s(this.getMinutes())+":"+s(this.getSeconds())};u.now=Date.now;u.parse=function(a){(new u(a)).getTime()};u.UTC=function(a,b,c,d,e,w,x){a=n(t(a,b+1,c||1));return Date.UTC(a[0],a[1]-1,a[2],d||0,e||0,w||0,x||0)};
var C,G="getHours getMilliseconds getMinutes getSeconds getTime getUTCDay getUTCHours getTimezoneOffset getUTCMilliseconds getUTCMinutes getUTCSeconds setHours setMilliseconds setMinutes setSeconds setTime setUTCHours setUTCMilliseconds setUTCMinutes setUTCSeconds toDateString toISOString toJSON toString toLocaleDateString toLocaleTimeString toTimeString toUTCString valueOf getDay".split(" ");function N(){var a=G[C];return function(){return this.a[a].apply(this.a,arguments)}}
for(C=0;C<G.length;C++)u.prototype[G[C]]=N();window.JDate=u;}());

/* End JDATE Function */

(function($) {

	var options = {
		xaxis: {
			timezone: null,		// "browser" for local to the client or timezone for timezone-js
			timeformat: null,	// format string to use
			twelveHourClock: false,	// 12 or 24 time in time mode
			monthNames: null,	// list of names of months
			jalali: null	// jalali true or null or false
		}
	};

	// round to nearby lower multiple of base

	function floorInBase(n, base) {
		return base * Math.floor(n / base);
	}

	// Returns a string with the date d formatted according to fmt.
	// A subset of the Open Group's strftime format is supported.

	function formatDate(d, fmt, monthNames, dayNames, jalali) {

		if (typeof d.strftime == "function") {
			return d.strftime(fmt);
		}

		var leftPad = function(n, pad) {
			n = "" + n;
			pad = "" + (pad == null ? "0" : pad);
			return n.length == 1 ? pad + n : n;
		};

		var r = [];
		var escape = false;
		var hours = d.getHours();
		var isAM = hours < 12;

		if (monthNames == null) {
			monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
			if (jalali) {
				monthNames = ["فرودین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"]; // for jalali type persian month name
			}
		}

		if (dayNames == null) {
			dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
			if (jalali) {
				dayNames = ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"]; // for jalali type persian week name
			}
		}
		

		var hours12;

		if (hours > 12) {
			hours12 = hours - 12;
		} else if (hours == 0) {
			hours12 = 12;
		} else {
			hours12 = hours;
		}

		for (var i = 0; i < fmt.length; ++i) {

			var c = fmt.charAt(i);

			if (escape) {
				switch (c) {
					case 'a': c = "" + dayNames[d.getDay()]; break;
					case 'b': c = "" + monthNames[d.getMonth()]; break;
					case 'd': c = leftPad(d.getDate()); break;
					case 'e': c = leftPad(d.getDate(), " "); break;
					case 'h':	// For back-compat with 0.7; remove in 1.0
					case 'H': c = leftPad(hours); break;
					case 'I': c = leftPad(hours12); break;
					case 'l': c = leftPad(hours12, " "); break;
					case 'm': c = leftPad(d.getMonth() + 1); break;
					case 'M': c = leftPad(d.getMinutes()); break;
					// quarters not in Open Group's strftime specification
					case 'q':
						c = "" + (Math.floor(d.getMonth() / 3) + 1);if (jalali) {switch (c) {case '1': c = "بهار"; break;case '2': c = "تابستان"; break;case '3': c = "پاییز"; break;case '4': c = "زمستان"; break;}} break; // for jalali type name Season
					case 'S': c = leftPad(d.getSeconds()); break;
					case 'y': c = leftPad(d.getFullYear() % 100); break;
					case 'Y': c = "" + d.getFullYear(); break;
					case 'p': if (jalali) {c = (isAM) ? ("" + "صبح") : ("" + "عصر");} else {c = (isAM) ? ("" + "am") : ("" + "pm");} break; // for jalali type name persian
					case 'P': if (jalali) {c = (isAM) ? ("" + "صبح") : ("" + "عصر");} else {c = (isAM) ? ("" + "AM") : ("" + "PM");} break; // for jalali type name persian
					case 'w': c = "" + d.getDay(); break;
				}
				r.push(c);
				escape = false;
			} else {
				if (c == "%") {
					escape = true;
				} else {
					r.push(c);
				}
			}
		}

		return r.join("");
	}

	// To have a consistent view of time-based data independent of which time
	// zone the client happens to be in we need a date-like object independent
	// of time zones.  This is done through a wrapper that only calls the UTC
	// versions of the accessor methods.

	function makeUtcWrapper(d) {

		function addProxyMethod(sourceObj, sourceMethod, targetObj, targetMethod) {
			sourceObj[sourceMethod] = function() {
				return targetObj[targetMethod].apply(targetObj, arguments);
			};
		};

		var utc = {
			date: d
		};

		// support strftime, if found

		if (d.strftime != undefined) {
			addProxyMethod(utc, "strftime", d, "strftime");
		}

		addProxyMethod(utc, "getTime", d, "getTime");
		addProxyMethod(utc, "setTime", d, "setTime");

		var props = ["Date", "Day", "FullYear", "Hours", "Milliseconds", "Minutes", "Month", "Seconds"];

		for (var p = 0; p < props.length; p++) {
			addProxyMethod(utc, "get" + props[p], d, "getUTC" + props[p]);
			addProxyMethod(utc, "set" + props[p], d, "setUTC" + props[p]);
		}

		return utc;
	};

	// select time zone strategy.  This returns a date-like object tied to the
	// desired timezone

	function dateGenerator(ts, opts) {
		if (opts.timezone == "browser") {
			if (opts.jalali) {
				return new JDate(ts); // for jalali return jalali calendar
			} else {
				return new Date(ts);
			}
		} else if (!opts.timezone || opts.timezone == "utc") {
			if (opts.jalali) {
				return makeUtcWrapper(new JDate(ts)); // for jalali return jalali calendar
			} else {
				return makeUtcWrapper(new Date(ts));
			}
		} else if (typeof timezoneJS != "undefined" && typeof timezoneJS.Date != "undefined") {
			if (opts.jalali) {
				var d = new timezoneJS.JDate(); // for jalali return jalali calendar
			} else {
				var d = new timezoneJS.JDate();
			}
			// timezone-js is fickle, so be sure to set the time zone before
			// setting the time.
			d.setTimezone(opts.timezone);
			d.setTime(ts);
			return d;
		} else {
			if (opts.jalali) {
				return makeUtcWrapper(new JDate(ts)); // for jalali return jalali calendar
			} else {
				return makeUtcWrapper(new Date(ts));
			}
		}
	}
	
	// map of app. size of time units in milliseconds

	var timeUnitSize = {
		"second": 1000,
		"minute": 60 * 1000,
		"hour": 60 * 60 * 1000,
		"day": 24 * 60 * 60 * 1000,
		"month": 30 * 24 * 60 * 60 * 1000,
		"quarter": 3 * 30 * 24 * 60 * 60 * 1000,
		"year": 365.2425 * 24 * 60 * 60 * 1000
	};

	// the allowed tick sizes, after 1 year we use
	// an integer algorithm

	var baseSpec = [
		[1, "second"], [2, "second"], [5, "second"], [10, "second"],
		[30, "second"], 
		[1, "minute"], [2, "minute"], [5, "minute"], [10, "minute"],
		[30, "minute"], 
		[1, "hour"], [2, "hour"], [4, "hour"],
		[8, "hour"], [12, "hour"],
		[1, "day"], [2, "day"], [3, "day"],
		[0.25, "month"], [0.5, "month"], [1, "month"],
		[2, "month"]
	];

	// we don't know which variant(s) we'll need yet, but generating both is
	// cheap

	var specMonths = baseSpec.concat([[3, "month"], [6, "month"],
		[1, "year"]]);
	var specQuarters = baseSpec.concat([[1, "quarter"], [2, "quarter"],
		[1, "year"]]);

	function init(plot) {
		plot.hooks.processOptions.push(function (plot, options) {
			$.each(plot.getAxes(), function(axisName, axis) {

				var opts = axis.options;

				if (opts.mode == "time") {
					axis.tickGenerator = function(axis) {

						var ticks = [];
						var d = dateGenerator(axis.min, opts);
						var minSize = 0;

						// make quarter use a possibility if quarters are
						// mentioned in either of these options

						var spec = (opts.tickSize && opts.tickSize[1] ===
							"quarter") ||
							(opts.minTickSize && opts.minTickSize[1] ===
							"quarter") ? specQuarters : specMonths;

						if (opts.minTickSize != null) {
							if (typeof opts.tickSize == "number") {
								minSize = opts.tickSize;
							} else {
								minSize = opts.minTickSize[0] * timeUnitSize[opts.minTickSize[1]];
							}
						}

						for (var i = 0; i < spec.length - 1; ++i) {
							if (axis.delta < (spec[i][0] * timeUnitSize[spec[i][1]]
											  + spec[i + 1][0] * timeUnitSize[spec[i + 1][1]]) / 2
								&& spec[i][0] * timeUnitSize[spec[i][1]] >= minSize) {
								break;
							}
						}

						var size = spec[i][0];
						var unit = spec[i][1];

						// special-case the possibility of several years

						if (unit == "year") {

							// if given a minTickSize in years, just use it,
							// ensuring that it's an integer

							if (opts.minTickSize != null && opts.minTickSize[1] == "year") {
								size = Math.floor(opts.minTickSize[0]);
							} else {

								var magn = Math.pow(10, Math.floor(Math.log(axis.delta / timeUnitSize.year) / Math.LN10));
								var norm = (axis.delta / timeUnitSize.year) / magn;

								if (norm < 1.5) {
									size = 1;
								} else if (norm < 3) {
									size = 2;
								} else if (norm < 7.5) {
									size = 5;
								} else {
									size = 10;
								}

								size *= magn;
							}

							// minimum size for years is 1

							if (size < 1) {
								size = 1;
							}
						}

						axis.tickSize = opts.tickSize || [size, unit];
						var tickSize = axis.tickSize[0];
						unit = axis.tickSize[1];

						var step = tickSize * timeUnitSize[unit];

						if (unit == "second") {
							d.setSeconds(floorInBase(d.getSeconds(), tickSize));
						} else if (unit == "minute") {
							d.setMinutes(floorInBase(d.getMinutes(), tickSize));
						} else if (unit == "hour") {
							d.setHours(floorInBase(d.getHours(), tickSize));
						} else if (unit == "month") {
							d.setMonth(floorInBase(d.getMonth(), tickSize));
						} else if (unit == "quarter") {
							d.setMonth(3 * floorInBase(d.getMonth() / 3,
								tickSize));
						} else if (unit == "year") {
							d.setFullYear(floorInBase(d.getFullYear(), tickSize));
						}

						// reset smaller components

						d.setMilliseconds(0);

						if (step >= timeUnitSize.minute) {
							d.setSeconds(0);
						}
						if (step >= timeUnitSize.hour) {
							d.setMinutes(0);
						}
						if (step >= timeUnitSize.day) {
							d.setHours(0);
						}
						if (step >= timeUnitSize.day * 4) {
							d.setDate(1);
						}
						if (step >= timeUnitSize.month * 2) {
							d.setMonth(floorInBase(d.getMonth(), 3));
						}
						if (step >= timeUnitSize.quarter * 2) {
							d.setMonth(floorInBase(d.getMonth(), 6));
						}
						if (step >= timeUnitSize.year) {
							d.setMonth(0);
						}

						var carry = 0;
						var v = Number.NaN;
						var prev;

						do {

							prev = v;
							v = d.getTime();
							ticks.push(v);

							if (unit == "month" || unit == "quarter") {
								if (tickSize < 1) {

									// a bit complicated - we'll divide the
									// month/quarter up but we need to take
									// care of fractions so we don't end up in
									// the middle of a day

									d.setDate(1);
									var start = d.getTime();
									d.setMonth(d.getMonth() +
										(unit == "quarter" ? 3 : 1));
									var end = d.getTime();
									d.setTime(v + carry * timeUnitSize.hour + (end - start) * tickSize);
									carry = d.getHours();
									d.setHours(0);
								} else {
									d.setMonth(d.getMonth() +
										tickSize * (unit == "quarter" ? 3 : 1));
								}
							} else if (unit == "year") {
								d.setFullYear(d.getFullYear() + tickSize);
							} else {
								d.setTime(v + step);
							}
						} while (v < axis.max && v != prev);

						return ticks;
					};

					axis.tickFormatter = function (v, axis, jalali) {

						var d = dateGenerator(v, axis.options);

						// first check global format

						if (opts.timeformat != null) {
							return formatDate(d, opts.timeformat, opts.monthNames, opts.dayNames, opts.jalali);
						}

						// possibly use quarters if quarters are mentioned in
						// any of these places

						var useQuarters = (axis.options.tickSize &&
								axis.options.tickSize[1] == "quarter") ||
							(axis.options.minTickSize &&
								axis.options.minTickSize[1] == "quarter");

						var t = axis.tickSize[0] * timeUnitSize[axis.tickSize[1]];
						var span = axis.max - axis.min;
						var suffix = (opts.twelveHourClock) ? " %p" : "";
						var hourCode = (opts.twelveHourClock) ? "%I" : "%H";
						var fmt;

						if (t < timeUnitSize.minute) {
							fmt = hourCode + ":%M:%S" + suffix;
						} else if (t < timeUnitSize.day) {
							if (span < 2 * timeUnitSize.day) {
								fmt = hourCode + ":%M" + suffix;
							} else {
								fmt = "%b %d " + hourCode + ":%M" + suffix;
							}
						} else if (t < timeUnitSize.month) {
							fmt = "%b %d";
						} else if ((useQuarters && t < timeUnitSize.quarter) ||
							(!useQuarters && t < timeUnitSize.year)) {
							if (span < timeUnitSize.year) {
								fmt = "%b";
							} else {
								fmt = "%b %Y";
							}
						} else if (useQuarters && t < timeUnitSize.year) {
							if (span < timeUnitSize.year) {
								fmt = "Q%q";
								if (opts.jalali) {
									fmt = "%q"; // for jalali set for season
								}
							} else {
								fmt = "Q%q %Y";
								if (opts.jalali) {
									fmt = "%q %Y"; // for jalali set for season
								}
							}
						} else {
							fmt = "%Y";
						}

						var rt = formatDate(d, fmt, opts.monthNames, opts.dayNames, opts.jalali);

						return rt;
					};
				}
			});
		});
	}

	$.plot.plugins.push({
		init: init,
		options: options,
		name: 'time',
		version: '1.0'
	});

	// Time-axis support used to be in Flot core, which exposed the
	// formatDate function on the plot object.  Various plugins depend
	// on the function, so we need to re-expose it here.

	$.plot.formatDate = formatDate;
	$.plot.dateGenerator = dateGenerator;

})(jQuery);
