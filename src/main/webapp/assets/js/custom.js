$(function() {

	$("#loginform").submit(function(event) {
		event.preventDefault();
		lscache.set('employee', $('#logempnumber').val());
		matchAccess($('#logempnumber').val());
	});

	var callbackViewModel = function() {
		self.access = ko.observableArray()
		self.timeslots = ko.observableArray()
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

	$('#fullexit, #partexit').click(function() {
		resetLogin();
	});

	$('#fullperform').click(function() {
		$('#fullpanel, #partialpanel, #arrangepanel').hide();
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
						self.timeslots.push(new callback(json[key].date,
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

	var callback = function(date, slota, slotb, slotc, slotd, slote, slotf,
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

})