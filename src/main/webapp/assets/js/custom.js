$(function() {

	$("#loginform").submit(function(event) {
		event.preventDefault();
		lscache.set('employee', $('#logempnumber').val());
		matchAccess($('#logempnumber').val());
	});

	var callbackViewModel = function() {
		self.displaydate = ko.observable();
		self.access = ko.observableArray();
		self.timeslots = ko.observableArray();
		self.slota = ko.observableArray();
		self.slotb = ko.observableArray();
		self.slotc = ko.observableArray();
		self.slotd = ko.observableArray();
		self.slote = ko.observableArray();
		self.slotf = ko.observableArray();
		self.slotg = ko.observableArray();
		self.sloth = ko.observableArray();
		self.sloti = ko.observableArray();
		self.slotj = ko.observableArray();
		self.slotk = ko.observableArray();
		self.slotl = ko.observableArray();
		self.slotm = ko.observableArray();
		self.slotn = ko.observableArray();
		self.sloto = ko.observableArray();
	    self.activeslota = ko.computed(function () {
            return ko.utils.arrayFilter(slota(), function (callback) {
                return callback.status == "active";
            });
	    }, self);
	    self.activeslota = ko.computed(function () {
            return ko.utils.arrayFilter(slota(), function (callback) {
                return callback.status == "active";
            });
	    }, self);
	    self.activeslotb = ko.computed(function () {
            return ko.utils.arrayFilter(slotb(), function (callback) {
                return callback.status == "active";
            });
	    }, self);
	    self.activeslotc = ko.computed(function () {
            return ko.utils.arrayFilter(slotc(), function (callback) {
                return callback.status == "active";
            });
	    }, self);
	    self.activeslotd = ko.computed(function () {
            return ko.utils.arrayFilter(slotd(), function (callback) {
                return callback.status == "active";
            });
	    }, self);
	    self.activeslote = ko.computed(function () {
            return ko.utils.arrayFilter(slote(), function (callback) {
                return callback.status == "active";
            });
	    }, self);
	    self.activeslotf = ko.computed(function () {
            return ko.utils.arrayFilter(slotf(), function (callback) {
                return callback.status == "active";
            });
	    }, self);
	    self.activeslotg = ko.computed(function () {
            return ko.utils.arrayFilter(slotg(), function (callback) {
                return callback.status == "active";
            });
	    }, self);
	    self.activesloth = ko.computed(function () {
            return ko.utils.arrayFilter(sloth(), function (callback) {
                return callback.status == "active";
            });
	    }, self);
	    self.activesloti = ko.computed(function () {
            return ko.utils.arrayFilter(sloti(), function (callback) {
                return callback.status == "active";
            });
	    }, self);
	    self.activeslotj = ko.computed(function () {
            return ko.utils.arrayFilter(slotj(), function (callback) {
                return callback.status == "active";
            });
	    }, self);
	    self.activeslotk = ko.computed(function () {
            return ko.utils.arrayFilter(slotk(), function (callback) {
                return callback.status == "active";
            });
	    }, self);
	    self.activeslotl = ko.computed(function () {
            return ko.utils.arrayFilter(slotl(), function (callback) {
                return callback.status == "active";
            });
	    }, self);
	    self.activeslotm = ko.computed(function () {
            return ko.utils.arrayFilter(slotm(), function (callback) {
                return callback.status == "active";
            });
	    }, self);
	    self.activeslotn = ko.computed(function () {
            return ko.utils.arrayFilter(slotn(), function (callback) {
                return callback.status == "active";
            });
	    }, self);
	    self.activesloto = ko.computed(function () {
            return ko.utils.arrayFilter(sloto(), function (callback) {
                return callback.status == "active";
            });
	    }, self)
	}

	ko.applyBindings(new callbackViewModel());

	var populateAccess = function() {
		$('#fullpanel, #partialpanel, #arrangepanel, #performpanel').hide();
		self.access.push("21212121");
		self.access.push("99110110");
	}

	populateAccess();

	var matchAccess = function(empnumber) {
		var match = ko.utils.arrayFirst(self.access(), function(item) {
			return empnumber === item;
		});

		if (match) {
			$('#loginpanel').hide();
			$('#fullpanel').show();
		} else {
			$('#loginpanel').hide();
			$('#partialpanel').show();
		}
	}
	
	var setupCallbacks = function(paramdate, arrayname, paramtime) {
		$.getJSON( "http://localhost:8080/clientapi/webapi/callback/get?paramdate=" + paramdate + "&paramtime=" + paramtime, function( json ) {
			self.displaydate(paramdate);
			for (var key in json) {
				arrayname.push(new callback(json[key].employeenumber,
					json[key].customer, json[key].mobile,
					json[key].landline, json[key].cbtype,
					json[key].cbreason, json[key].cbdate,
					json[key].cbtime, json[key].status));
				}
		});
	}
	
	var getTodaysDate = function(){
	    var today = new Date();
	    var dd = today.getDate();
	    var mm = today.getMonth()+1; //January is 0!

	    var yyyy = today.getFullYear();
	    if(dd<10){
	        dd='0'+dd
	    } 
	    if(mm<10){
	        mm='0'+mm
	    } 
	    var today = dd+'/'+mm+'/'+yyyy;
	    return today;
	};

	$('#fullexit, #partexit').click(function() {
		resetLogin();
	});

	$('#fullperform').click(function() {
		$('#fullpanel, #partialpanel, #arrangepanel').hide();
		setupCallbacks(getTodaysDate(), self.slota, "8am");
		setupCallbacks(getTodaysDate(), self.slotb, "9am");
		setupCallbacks(getTodaysDate(), self.slotc, "10am");
		setupCallbacks(getTodaysDate(), self.slotd, "11am");
		setupCallbacks(getTodaysDate(), self.slote, "12pm");
		setupCallbacks(getTodaysDate(), self.slotf, "1pm");
		setupCallbacks(getTodaysDate(), self.slotg, "2pm");
		setupCallbacks(getTodaysDate(), self.sloth, "3pm");
		setupCallbacks(getTodaysDate(), self.sloti, "4pm");
		setupCallbacks(getTodaysDate(), self.slotj, "5pm");
		setupCallbacks(getTodaysDate(), self.slotk, "6pm");
		setupCallbacks(getTodaysDate(), self.slotl, "7pm");
		setupCallbacks(getTodaysDate(), self.slotm, "8pm");
		setupCallbacks(getTodaysDate(), self.slotn, "9pm");
		$('#performpanel').show();
	});

	$('#fullarrange, #partarrange').click(function() {
		$('#fullpanel, #partialpanel, #performpanel').hide();
		$('#arrangepanel').show();
	});

	$('#exitarrange, #exitperform').click(function() {
		resetLogin();
	});

	$('#cbdate').datepicker({
		dateFormat : "dd/mm/yy"
	}).val();

	var resetLogin = function() {
		$('#fullpanel, #partialpanel, #arrangepanel, #performpanel').hide();
		$('#cbtime, #cbdate, #customer, #mobile, #landline, #cbreason').val("");
		self.timeslots.removeAll();
		$('#cbtype').val($("#cbtype option:first").val());
		$('#loginpanel').show();
		$('#logempnumber').val("");
	}
	
	$('#cbdate').change(function() {
		  getTimeslots($('#cbdate').val());
	});
	
	$('#tslotselect').delegate( "span", "click", function(event) {
		$("#tslotselect span").removeClass("btn-success");
		$("#tslotselect span").addClass("btn-info");
		$(this).removeClass("btn-info");
		$(this).addClass("btn-success");
		$('#cbtime').val(event.target.id);
		$('#cbref').val(event.target.title);
	});
	
	$('#tslotperform').delegate( "span", "click", function(event) {
		$("#tslotperform span").removeClass("btn-success");
		$("#tslotperform span").addClass("btn-info");
		$(this).removeClass("btn-info");
		$(this).addClass("btn-success");;
	});
	
	$("#formarrcallback").submit(function(event) {
		event.preventDefault();
		try{
			$.ajax({
                type: "POST",
                url: "http://localhost:8080/clientapi/webapi/callback/",
                data: {"employeenumber": lscache.get('employee'), "customer" : $('#customer').val(), "mobile" : $('#mobile').val(), "landline" : $('#landline').val(), "cbtype" : $('#cbtype').val(), "cbreason" : $('#cbreason').val(), "cbdate" : $('#cbdate').val(), "cbtime" : $('#cbtime').val()},
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                success:function(response){
                	toastr.success('Callback saved successfully!!!', 'Callback Application')
                    updateTimeslot();
                },
                error: function (request, status, error) {
                	toastr.error('Callback did not save correctly!!!', 'Callback Application')
                }                  
            });
		}catch(err) {
			alert("error");
		}				
	});
	
	var updateTimeslot = function() {
		try{
			$.ajax({
                type: "GET",
                url: "http://localhost:8080/clientapi/webapi/callback/updateslot?paramdate=" + $('#cbdate').val() + "&paramslot= " + $('#cbref').val(),
                success:function(response){
                	resetLogin();
                },
                error: function (request, status, error) {
                	toastr.error('Timeslot did not update correctly!!!', 'Callback Application')
                }                  
            });
		}catch(err) {
			alert("error");
		}	
	}
	
	var getTimeslots = function(paramdate) {
		$.ajax({
				type : "GET",
				url : "http://localhost:8080/clientapi/webapi/callback/timeslot?paramdate="
						+ paramdate,
				dataType : "json",
				cache : false,
				success : function(json) {
					self.timeslots.removeAll();
					for (var key in json) {
						self.timeslots.push(new timeslot(json[key].date,
							json[key].slota, json[key].slotb,
							json[key].slotc, json[key].slotd,
							json[key].slote, json[key].slotf,
							json[key].slotg, json[key].sloth,
							json[key].sloti, json[key].slotj,
							json[key].slotk, json[key].slotl,
							json[key].slotm, json[key].slotn,
							json[key].sloto, json[key].slotp));
						}
					},
					error: function(xhr, status, error) {
						  var err = eval("(" + xhr.responseText + ")");
						}
				});
	}

	var timeslot = function(date, slota, slotb, slotc, slotd, slote, slotf,
			slotg, sloth, sloti, slotj, slotk, slotl, slotm, slotn, sloto,
			slotp) {
		var self = this;
		self.date = date;
		self.slota = slota;
		self.slotb = slotb;
		self.slotc = slotc;
		self.slotd = slotd;
		self.slote = slote;
		self.slotf = slotf;
		self.slotg = slotg;
		self.sloth = sloth;
		self.sloti = sloti;
		self.slotj = slotj;
		self.slotk = slotk;
		self.slotl = slotl;
		self.slotm = slotm;
		self.slotn = slotn;
		self.sloto = sloto;
		self.slotp = slotp;
	};
	
	var callback = function(employeenumber, customer, mobile, landline, cbtype, cbreason, cbdate, cbtime, status) {
		var self = this;
		self.employeenumber = employeenumber;
		self.customer = customer;
		self.mobile = mobile;
		self.landline = landline;
		self.cbtype = cbtype;
		self.cbreason = cbreason;
		self.cbdate = cbdate;
		self.cbtime = cbtime;
		self.status = status;
	};

})